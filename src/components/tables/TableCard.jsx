import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { getRandomBg } from "../../utils";

const TableCard = ({ id, name, status, initials }) => {
  return (
    <div
      key={id}
      className="w-[300px] bg-[#262626] hover:bg-[#353535] py-4 px-5 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } p-2 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <h1
          className={` flex justify-center items-center text-slate-300 h-16 w-16 rounded-full p-4 text-xl font-bold`}
          style={{ backgroundColor: getRandomBg() }}
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
