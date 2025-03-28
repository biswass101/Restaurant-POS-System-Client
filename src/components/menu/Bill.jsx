import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { enqueueSnackbar } from 'notistack'
import axios from "axios";

const Bill = () => {


  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice)
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const[paymentMethod, setPyamentMethod] = useState()

  const handlePlaceOrder = async () => {
    if(!paymentMethod) {
      enqueueSnackbar("Please select a payment method!", {variant: "warning"})
      return ;
    }

    //handle bill
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/payment/bkash/create-order`,
        {
          amount: totalPriceWithTax,
        }
      );
      window.location.href = data.bkashURL;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      // console.log("Here")
    }
  }

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${total.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${tax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${totalPriceWithTax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button onClick={() => setPyamentMethod('Cash')} className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
        font-semibold ${paymentMethod === 'Cash' ? "bg-[#383737]" : ''}`}>
          Cash
        </button>
        <button onClick={() => setPyamentMethod('Online')} className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
        font-semibold ${paymentMethod === 'Online' ? "bg-[#383737]" : ''}`}>
          Online
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5]
        font-semibold text-lg">
          Print Receipt
        </button>
        <button onClick={handlePlaceOrder} className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f]
        font-semibold text-lg">
          Place Order
        </button>
      </div>
    </>
  );
};

export default Bill;
