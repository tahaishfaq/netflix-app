import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-[#F57E28] w-full px-[175px] py-[18px]">
        <div className="flex items-center justify-between">
          <span className="uppercase text-white font-[400] text-3xl">Logo</span>

          <div className="flex items-center bg-white rounded-[20px] px-[14px] py-1.5 w-96 gap-x-[10px]">
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
      <div className="px-[175px] py-[18px] flex items-center gap-x-8 text-[16px] font-[500]">
        <span>Home</span>
        <span>Winkels</span>
        <span>Categorieen</span>
        <span>Koophulp</span>
      </div>
    </div>
  );
};

export default Header;
