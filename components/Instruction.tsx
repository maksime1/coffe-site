import React from "react";
type Props = {
  head: string;
  title: string;
  para: string;
};

export default function Instruction({ head, title, para }: Props) {
  return (
    <div className=" flex flex-col items-center md:items-start  ">
      <h1 className="text-[#fdd6ba] font-black text-[72px] leading-none pb-[24px]  ">
        {head}
      </h1>
      <h2 className="text-[#333d4b] text-[28px] font-black pb-[24px] md:w-[223px] ">
        {title}
      </h2>
      <p className="text-center md:text-start md:w-[223px]">{para}</p>
    </div>
  );
}
