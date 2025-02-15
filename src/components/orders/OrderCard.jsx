import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="flex itmes-center gap-4 mb-2">
      <button className="bg-[#f6b100] p-2 text-xl font-bold rounded-lg">
        AM
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Niloy Bis
          </h1>
          <p className="text-[#ababab] text-sm">#101/ Dine in</p>
        </div>


        <div className="flex flex-col items-start gap-1">
          <p className="text-green-600 px-4">
            <FaCheckDouble className="inline mr-2" /> Ready
          </p>
          <p className="text-[#ababab] text-sm">
            <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
          </p>
        </div>
      </div>
      
      <div>
        <p>January 18, 2025 8:32 PM</p>
        <p>8 Itmes</p>
      </div>
      <hr className="text-[#ababab]"/>
    </div>
  );
};

export default OrderCard;
