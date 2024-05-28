import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-[#F57E28] w-full px-4 md:px-10 lg:px-[175px] py-[18px]">
        <div className="flex items-center justify-between">
          <span className="uppercase text-white font-[400] text-xl md:text-2xl lg:text-3xl">
            Logo
          </span>

          <div className="flex items-center bg-white rounded-[20px] px-[10px] py-1.5 lg:w-full max-w-md gap-x-[10px]">
            <div className="pl-0.5">
              <FaSearch className="w-5 h-5 text-[#676F82]" />
            </div>
            <input
              type="text"
              className="w-full py-1.5 placeholder:text-[#676F82] border-0 focus:outline-none"
              placeholder="Zoeken naar producten"
            />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-[175px] py-[18px] flex flex-wrap items-center gap-x-4 md:gap-x-8 text-[14px] md:text-[16px] font-[500]">
        <span>Home</span>
        <span>Winkels</span>
        <span>Categorieen</span>
        <span>Koophulp</span>
      </div>
    </div>
  );
};

export default Header;
