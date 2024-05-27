import React from "react";
import pricing from "../../assets/pricing.png";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import { CiCircleCheck } from "react-icons/ci";

const NetflixCard = () => {
  return (
    <div className="max-w-3xl w-full  bg-white shadow  p-[20px] rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-start  gap-x-6">
          <Image
            className="w-32 h-auto object-cover rounded-lg"
            src={pricing}
            alt="Card"
          />
          <div className="flex flex-col items-start gap-y-2">
            <h2 className="text-xl font-bold text-[#434343] ">
              Krijg 2 jaar korting op een <br/> Netflix abonnement{" "}
            </h2>
            <span className="flex items-center gap-x-1 bg-[#16AE65]  rounded-[8px] px-3 py-1 text-sm font-normal text-white ">
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

export default NetflixCard;
