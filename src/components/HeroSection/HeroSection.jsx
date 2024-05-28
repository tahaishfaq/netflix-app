import React from "react";
import { FaSearch } from "react-icons/fa";
import herosection from "../../assets/hero-section.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center w-full relative overflow-hidden">
      <Image src={herosection} alt="herosection" className="w-full lg:h-auto h-60 object-cover object-center" />
      <div className="text-center absolute flex flex-col lg:gap-y-10 gap-y-6">
        <h1 className="lg:text-[40px] text-[20px] font-semibold text-white">
        Ontdek de beste coupons, kortingscodes en aanbiedingen
        </h1>
        <div className="w-full lg:max-w-4xl max-w-xs mx-auto">
        <div className="flex items-center bg-white rounded-[20px] px-[14px] py-2 w-full gap-x-[10px]">
            <div className="pl-0.5">
              <FaSearch className="w-5 h-5 text-[#676F82]" />
            </div>
            <input
              type="text"
              className="w-full lg:py-2 py-1.5 placeholder:text-[#676F82] border-0 focus:outline-none"
              placeholder="Zoeken naar producten, winkels, aanbieden & meer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
