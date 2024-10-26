import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
type Props = {
  img: StaticImageData;
  title: string;
  para: string;
};
export default function Country({ img, title, para }: Props) {
  return (
    <div className="flex flex-col items-center pb-[80px]">
      <Image src={img} alt="img" />
      <h2 className="text-[#333d4b] text-[28px] font-black mt-[35px] mb-[24px]">{title}</h2>
      <p className="w-[100px] text -[#333d4b] text-[16px] leading-relaxed">{para}</p>
    </div>
  );
}
