import React from "react";
import pricing from "../../assets/pricing (1).png";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import { CiCircleCheck } from "react-icons/ci";

const ShopCard = ({badge}) => {
  return (
    <div className="max-w-3xl w-full  bg-white shadow  p-[20px] rounded-xl">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-y-6 justify-between">
        <div className="flex lg:flex-row flex-col items-start  gap-x-6 gap-y-3">
          <Image
            className="w-32 h-auto object-cover rounded-lg"
            src={pricing}
            alt="Card"
          />
          <div className="flex flex-col-reverse items-start gap-y-2">
            <h2 className="text-xl font-bold text-[#434343] ">
            Koop nu een nieuwe Xbox <br/> controller en krijg 
            </h2>
            <span className={`flex items-center gap-x-1 rounded-[8px] px-3 py-1 text-sm font-normal text-white ${badge}`}>
              <CiCircleCheck  className="w-5 h-5"/>Nog 2 dagen geldig 
            </span>
          </div>
        </div>
        <button className="bg-[#229ED9] flex items-center gap-x-2 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none">
            PAK DEZE KORTING <FaArrowRight/> 
          </button>
      </div>
    </div>
  );
};

export default ShopCard
