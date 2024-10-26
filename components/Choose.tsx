"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  title: string;
  img: StaticImageData;
  headTitle: string;
  para: string;
  headTitle2: string;
  para2: string;
  headTitle3: string;
  para3: string;
};

export default function Choose({
  title,
  img,
  headTitle,
  para,
  headTitle2,
  para2,
  headTitle3,
  para3,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <div onClick={handleClick} className="flex items-center justify-between">
        <h2 className="text-[#83888f] text-[25px] font-black w-[240px]">
          {title}
        </h2>
        <Image
          className={`transition-transform duration-300 ${
            isVisible ? "rotate-180" : ""
          }`}
          src={img}
          alt="img"
        />
      </div>

      {isVisible && (
        <div className="text_container flex flex-col gap-[16px] mt-[32px] mb-[110px] md:flex-row">
          <div className="div1 bg-[#f4f1eb] w-[328px] h-[140px] rounded-[8px] pt-[24px] px-[24px] pb-[24px] md:w-[223px] md:h-[250px]">
            <h2 className="text-[#333d4b] text-[25px] font-black">
              {headTitle}
            </h2>
            <p className="text-[#333d4b] text-[16px] font-black leading-relaxed">
              {para}
            </p>
          </div>
          <div className="div2 bg-[#f4f1eb] w-[328px] h-[140px] rounded-[8px] pt-[24px] px-[24px] pb-[24px] md:w-[223px] md:h-[250px] ">
            <h2 className="text-[#333d4b] text-[25px] font-black">
              {headTitle2}
            </h2>
            <p className="text-[#333d4b] text-[16px] font-black leading-relaxed">
              {para2}
            </p>
          </div>
          <div className="div3 bg-[#f4f1eb] w-[328px] h-[140px] rounded-[8px] pt-[24px] px-[24px] pb-[24px] md: w-[223px] md:h-[250px]">
            <h2 className="text-[#333d4b] text-[25px] font-black">
              {headTitle3}
            </h2>
            <p className="text-[#333d4b] text-[16px] font-black leading-relaxed">
              {para3}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
