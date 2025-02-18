import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const TableCard = () => {
  return (
    <div className="w-[300px] bg-[#262626] py-4 px-5 rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">Table 1</h1>
        <p className="text-green-600 bg-[#2e4a40] p-2 rounded-lg">Booked</p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="bg-[#025cca] text-white rounded-full p-4">AM</h1>
      </div>
    </div>
  );
};

export default TableCard;
