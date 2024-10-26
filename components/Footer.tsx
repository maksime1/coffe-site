import React from "react";
import LogoImg from "../public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import Facebook from "../public/assets/shared/desktop/icon-facebook.svg";
import Twitter from "../public/assets/shared/desktop/icon-twitter.svg";
import Instagram from "..//public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#2c343e] pt-[54px] px-[54px] pb-[55px] flex flex-col items-center md:px">
      <Image src={LogoImg} alt="img" />
      <div className="text-center mt-[49px] flex flex-col gap-[24px] text-[#83888f] font-black md:flex-row ">
        <p className="cursor-pointer">
          <Link href={"/"}>HOME</Link>
        </p>
        <p className="cursor-pointer">
          <Link href={"/about"}>ABOUT US</Link>
        </p>
        <p className="cursor-pointer">
          <Link href={"/plan"}>CREATE YOUR PLAN</Link>
        </p>
      </div>
      <div className="flex mt-[50px] gap-[25px]">
        <Image className="cursor-pointer" src={Facebook} alt="facebook" />
        <Image className="cursor-pointer" src={Twitter} alt="twitter" />
        <Image className="cursor-pointer" src={Instagram} alt="instagram" />
      </div>
    </div>
  );
}
