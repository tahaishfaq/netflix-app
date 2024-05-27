import React from "react";
import NetflixCard from "../NetflixCard/NetflixCard";
import klm from "../../assets/KLM-logo-880x660 1.png";
import Image from "next/image";
import messageicon from "../../assets/Vector (7).png";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import socialicon1 from "../../assets/Social icon.png";
import socialicon2 from "../../assets/Vector (10).png";
import socialicon3 from "../../assets/Vector (8).png";
import socialicon4 from "../../assets/Vector (9).png";
import socialicon5 from "../../assets/Group 3.png";
import socialicon6 from "../../assets/Group 5.png";
import SiteCard from "../SiteCard/SiteCard";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 ">
      <div className="flex items-start gap-x-10 font-poppins">
        <div className="flex flex-col w-full">
          <h1 className="font-semibold text-xl pb-4">
            Nieuwe kortingcodes uit de maand Mei 2024
          </h1>
          <div className="">
            {[1, 2, 3, 4, 5, 6, 7]?.map((_, index) => (
              <div key={index} className="mb-5">
                <NetflixCard />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            <SiteCard title="Over op Site.com" />
            <SiteCard title="Voordelen op Site.com" />
            <SiteCard title="Welkom op Site.com" />
            <SiteCard title="Welkom op Site.com" />
          </div>
        </div>

        <div className="w-[50%] ">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col items-center gap-y-4 bg-white border border-[#F2F2F2] shadow p-[20px] rounded-[20px]">
              <Image
                src={klm}
                alt="klm"
                className="bg-[#F8F8F8] rounded-xl w-[80px] h-[80px]"
              />
              <span className="text-2xl font-bold text-[#434343]">
                KLM Kortingcodes
              </span>
              <span className="text-base text-[#434343]">
                Site.com is een website dat gemaakt is met React, Figma, Next.JS
                en een Node.JS backend. Dit is een standard placeholder tekst
                voor het ontwerp om te kijken hoe wireframes and auto-element
                designing werkt.Site.com is een website dat gemaakt is met
                React, Figma, Next.JS en een Node.JS backend. Dit is een
                standard placeholder tekst voor het ontwerp om te kijken hoe
                wireframes and auto-element designing werkt.Site.com is een
                website dat gemaakt is met React, Figma, Next.JS en een Node.JS
                backend. Dit is een standard placeholder tekst voor het ontwerp
                om te kijken hoe wireframes and auto-element designing werkt.
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4 bg-white border border-[#F2F2F2] shadow p-[20px] rounded-[20px]">
              <Image src={messageicon} alt="klm" className="w-[40px]" />
              <span className="text-2xl text-center font-bold text-[#434343]">
                Dagelijk nieuws ontvangen?
              </span>
              <span className="text-base text-[#434343] text-justify">
                Dagelijks nieuws ontvangen? Abonneer je dan direct op de
                nieuwsbrief. Wij sturen je dagelijks een of meerdere
                nieuwsbrieven.
              </span>

              <div className="flex items-center w-full bg-white  rounded-md overflow-hidden border border-[#F2F2F2]">
                <div className="flex items-center justify-center w-12 ">
                  <FaEnvelope className="text-[#E2E4EA]" />
                </div>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-gray-700 focus:outline-none placeholder:text-[#676F82]"
                  placeholder="John.doe@outlook.com"
                />
              </div>
              <button className="bg-[#229ED9] w-full flex items-center gap-x-2 text-white px-[20px] py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none">
                Abonneren op de nieuwsbrief <FaArrowRight />
              </button>
            </div>
            <div className="flex flex-col items-center gap-y-4 bg-white border border-[#F2F2F2] shadow p-[20px] rounded-[20px]">
              <span className="text-2xl font-bold text-[#434343]">
                Populaire merken
              </span>
              <span className="text-center text-base text-[#434343]">
                Hier vind je een overzicht met de meest populaire merken,
                bedrijven en webwinkels
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(
                  (_, index) => (
                    <div key={index}>
                      <Image
                        src={klm}
                        alt="klm"
                        className="bg-[#F8F8F8] rounded-xl w-[80px] h-[80px]"
                      />
                    </div>
                  )
                )}
              </div>
              <button className="bg-[#229ED9] w-full flex items-center gap-x-2 text-white px-[20px] py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none">
                Abonneren op de nieuwsbrief <FaArrowRight />
              </button>
            </div>
            <div className="flex flex-col items-center gap-y-4 bg-white border border-[#F2F2F2] shadow p-[20px] rounded-[20px]">
              <span className="text-2xl font-bold text-[#434343]">
                Volg ons op Social Media
              </span>
              <span className="text-center text-[15px] text-[#434343]">
                Wist je dat Site.com ook actief is op Social media? GHieronder
                vind je een link naar onze kanelen. Volg voor meer informatie.
              </span>
              <div className="flex gap-x-2 items-center justify-center">
                <span>
                  <Image alt="social" src={socialicon3} />
                </span>
                <span>
                  <Image alt="social" src={socialicon4} />
                </span>
                <span>
                  <Image alt="social" src={socialicon5} />
                </span>
                <span>
                  <Image alt="social" src={socialicon6} />
                </span>
                <span>
                  <Image alt="social" src={socialicon2} />
                </span>
                <span>
                  <Image alt="social" src={socialicon1} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
