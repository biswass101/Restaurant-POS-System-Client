import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-4">
      <div className="bg-[#1f1f1f] w-full h-[430px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-[#1a1919] rounded-[15px] px-5 py-4 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search Recent Orders"
            className="bg-[#1a1919] outline-none text-[#f5f5f5]"
          />
        </div>
        {/* Order List */}
        <div className="mt-4 px-6">
            <OrderList/>
        </div>

      </div>
    </div>
  );
};

export default RecentOrders;
