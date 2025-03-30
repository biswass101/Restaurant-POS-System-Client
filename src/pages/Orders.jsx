import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import {keepPreviousData ,useQuery} from '@tanstack/react-query'
import { getOrders } from "../https";
import {enqueueSnackbar} from 'notistack'

const Orders = () => {
  const [status, setStatus] = useState("all");

  //getting orders
  const {data: resData, isError} = useQuery({
     queryKey: ["orders"],
     queryFn: async () => {
      return await getOrders();
     },
     placeholderData: keepPreviousData
  });

  if(isError) {
    enqueueSnackbar("Something went wrong", {variant: "error"});
  }

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-2 mt-2">
        <div className="flex items-center gap-3">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg ${
              status === "all" && "bg-[#383838] rounded-lg px-4 py-2"
            } rounded-lg px-4 py-2
          font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-lg ${
              status === "progress" && "bg-[#383838] rounded-lg px-4 py-2"
            } rounded-lg px-4 py-2
          font-semibold`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-lg ${
              status === "ready" && "bg-[#383838] rounded-lg px-4 py-2"
            } rounded-lg px-4 py-2
          font-semibold`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-lg ${
              status === "completed" && "bg-[#383838] rounded-lg px-4 py-2"
            } rounded-lg px-4 py-2
          font-semibold`}
          >
            Complement
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll no-scrollar"
      >
        {
          resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderCard key={order._id} order = {order}/>
            })
          ): <p className="col-span-3 text-gray-500">No orders available</p>
        }
      </div>
      <BottomNav />
    </section>
  );
};

export default Orders;
