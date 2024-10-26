"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "../public/assets/shared/desktop/logo.svg";
import MenuImg from "../public/assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";
export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      {showMenu === true ? (
        <div className="bg-[#fefcf7] absolute w-[375px] h-[668px] z-0">
          <div className="pt-[32px] px-[24px] pb-[80px] flex justify-between items-center">
            <Image src={LogoImg} alt="logo-img" width={163} height={18} />
            <Image
              onClick={() => setShowMenu(false)}
              src={CloseIcon}
              alt="close-img"
            />
          </div>
          <div className="flex flex-col items-center gap-[32px] text-[#333d4b] font-black text-[25px]">
            <h2 onClick={() => setShowMenu(false)}>
              <Link href={"/"}>Home</Link>
            </h2>
            <h2 onClick={() => setShowMenu(false)}>
              <Link href={"/about"}>About Us</Link>
            </h2>
            <h2 onClick={() => setShowMenu(false)}>
              <Link href={"/plan"}>Create Your Plan</Link>
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
      <header className="pt-[32px] px-[24px] pb-[40px] flex items-center justify-between md:pt-[40px] px-[40px] pb-[53px]">
        <Image src={LogoImg} alt="logo_img" width={163} height={18} />
        <div className="hidden md:block md:flex items-center gap-[33px] md:text-[#83888f] text-[14px] font-black tracking-[0.92px]">
          <p className="cursor-pointer">
            <Link href={"/"}>HOME</Link>
          </p>
          <p className="cursor-pointer">
            <Link href={"/about"}>ABOUT US</Link>
          </p>
          <p className="cursor pointer">
            <Link href={"/plan"}>CREATE YOUR PLAN</Link>
          </p>
        </div>
        {showMenu === false ? (
          <Image
            className="md:hidden"
            onClick={() => setShowMenu(true)}
            src={MenuImg}
            alt="menu_img"
          />
        ) : (
          <Image
            onClick={() => setShowMenu(false)}
            src={CloseIcon}
            alt="close_img"
          />
        )}
      </header>
    </>
  );
}
