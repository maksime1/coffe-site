import React from "react";
import Image, { StaticImageData } from "next/image";
import GranEspreso from "../public/assets/home/desktop/image-gran-espresso.png";
import Planalto from "../public/assets/home/desktop/image-planalto.png";
import Piccollo from "../public/assets/home/desktop/image-piccollo.png";
import Danche from "../public/assets/home/desktop/image-danche.png";

type Props = {
  image: StaticImageData;
  title: string;
  para: string;
};
export default function Coffe({ image, title, para }: Props) {
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-[36px] 2xl:flex-col  ">
      <Image className="w-[200px] h-[151px]" src={image} alt="image" />
      <div className="md:w-[282px] 2xl:flex flex-col items-center">
        <h2 className="text-[#333d4b] md:text-start font-black text-[25px]">{title}</h2>
        <p className="text-[#333d4b] md:text-start text-[15px] mt-[16px] leading-relaxed 2xl:text-center">
          {para}
        </p>
      </div>
    </div>
  );
}
