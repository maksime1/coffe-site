import { StaticImageData } from "next/image";
import Image from "next/image";

import React from "react";
type Props = {
  img: StaticImageData;
  title: string;
  para: string;
};

export default function Property({ img, title, para }: Props) {
  return (
    <div className="bg-[#0e8784] w-[279px] h-[382px] pt-[72px] px-[34px] pb-[51px] rounded-[8px] flex flex-col items-center md:w-[573px] md:h-[180px] md:flex-row md:gap-[55px] 2xl:w-[350px] 2xl:h-[380px] 2xl:flex-col">
      <Image src={img} alt="image" />
      <div>
        <h2 className="text-[#fefcf7] font-black text-[25px] pt-[56px] pb-[24px] md:pb-[10px] 2xl:text-center 2xl:mt-[-40px]">
          {title}
        </h2>
        <p className="text-[#fefcf7] text-[15px] text-center leading-relaxed md:text-start md:pb-[40px] 2xl:text-center">
          {para}
        </p>
      </div>
    </div>
  );
}
