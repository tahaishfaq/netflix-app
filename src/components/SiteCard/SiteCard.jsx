import React from "react";

const SiteCard = ({ title }) => {
  return (
    <div className="border border-[#F2F2F2] shadow ">
      <div className="flex flex-col gap-y-[10px] p-[20px]">
        <h1 className="font-semibold text-[22px] text-[#434343]">{title}</h1>
        <span className="text-[14px] text-[#434343]">
          Site.com is een website dat gemaakt is met React, Figma, Next.JS en
          een Node.JS backend. Dit is een standard placeholder tekst voor het
          ontwerp om te kijken hoe wireframes and auto-element designing
          werkt.Site.com is een website dat gemaakt is met React, Figma, Next.JS
          en een Node.JS backend. Dit is een standard placeholder tekst voor het
          ontwerp om te kijken hoe wireframes and auto-element designing
          werkt.Site.com is een website dat gemaakt is met React, Figma, Next.JS
          en een Node.JS backend. Dit is een standard placeholder tekst voor het
          ontwerp om te kijken hoe wireframes and auto-element designing werkt.
        </span>
      </div>
    </div>
  );
};

export default SiteCard;
