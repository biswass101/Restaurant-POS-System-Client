import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { FaUserCircle } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-[#1a1a1a] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-2 mt-2">
          <div className="flex items-center gap-3">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-[#ababab] font-medium">Table No: 2</p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer/>
      </div>
      {/* Right Div */}
      <div className="flex-[1] bg-[#393737] mt-4 mr-3 h-[640px] rounded-lg pt-2">
        {/* Customer Info */}
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">Customer Name</h1>
                <p className="text-xs text-[#ababab] font-medium mt-1">#101/Dine in</p>
            </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
