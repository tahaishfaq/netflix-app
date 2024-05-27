import React from "react";
import { FaSearch } from "react-icons/fa";
import herosection from "../../assets/hero-section.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center w-full relative">
      <Image src={herosection} alt="herosection" className="w-full h-auto object-cover object-center" />
      <div className="text-center absolute flex flex-col gap-y-10">
        <h1 className="text-[40px] font-semibold text-white">
        Ontdek de beste coupons, kortingscodes en aanbiedingen
        </h1>
        <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center bg-white rounded-[20px] px-[14px] py-2 w-full gap-x-[10px]">
            <div className="pl-0.5">
              <FaSearch className="w-5 h-5 text-[#676F82]" />
            </div>
            <input
              type="text"
              className="w-full py-2 placeholder:text-[#676F82] border-0 focus:outline-none"
              placeholder="Zoeken naar producten, winkels, aanbieden & meer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
