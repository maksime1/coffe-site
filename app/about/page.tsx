import React from "react";
import Image from "next/image";
import PersonImg from "../../public/assets/about/mobile/image-commitment.jpg";
import CoffeImg from "../../public/assets/about/mobile/image-quality.jpg";
import Country from "@/components/Country";
import United from "../../public/assets/about/desktop/illustration-uk.svg";
import Canada from "../../public/assets/about/desktop/illustration-canada.svg";
import Australia from "../../public/assets/about/desktop/illustration-australia.svg";
import TabletImg from "../../public/assets/about/tablet/image-commitment.jpg";

export default function page() {
  return (
    <div className="px-[24px] pb-[120px]">
      <div className="2xl:flex 2xl:justify-center">
        <div className="bg-[url('/assets/about/mobile/image-hero-whitecup.jpg')] md:bg-[url('/assets/about/tablet/image-hero-whitecup.jpg')] md:w-[689px] w-[327px] h-[400px] pt-[111px] px-[24px] pb-[87px] bg-cover flex flex-col md:items-start items-center rounded-[10px] 2xl:bg-[url('/assets/about/desktop/image-hero-whitecup.jpg')] 2xl:bg-cover 2xl:w-[1280px] ">
          <h1 className="text-[#fefcf7] text-[28px] font-black leading-none pb-[24px]">
            About Us
          </h1>
          <p className="text-[#fefcf7] text-[15px] opacity-[0.8] text-center leading-relaxed md:w-[400px] md:text-start">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
      <div className="mt-[120px] md:flex md:gap-[70px] md:items-center 2xl:ml-[450px] ">
        <Image
          className="rounded-[10px] block md:hidden"
          src={PersonImg}
          alt="person-img"
        />
        <Image
          className="hidden md:block rounded-[10px]"
          src={TabletImg}
          alt="img"
        />
        <div className="text_div mt-[48px] flex flex-col items-center ">
          <h2 className="text-[#333d4b] text-[32px] font-black mb-[30px]">
            Our commitment
          </h2>
          <p className="text-[#333d4b] text-[15px] opacity-[0.8] text-center mb-[200px] md:w-[340px]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center md:mt-[200px]">
        <div className="quality_div relative bg-[#2c343e] w-[327px] h-[509px] rounded-[10px] pt-[142px] px-[24px] pb-[61px] flex flex-col items-center md:w-[688px] 2xl:w-[1280px]">
          <Image
            className="rounded-[8px] absolute md:top-[-150px] top-[-80px] w-[279px] h-[156px] md:w-[570px] md:h-[320px]"
            src={CoffeImg}
            alt="coffe-img"
          />
          <h2 className="text-[#fefcf7] text-[28px] font-black text-center leading-none mb-[24px] md:mt-[110px]">
            Uncompromising quality
          </h2>
          <p className="text-[#fefcf7] text-[15px] opacity-[0.8] leading-relaxed text-center">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
      <div className="countries flex flex-col md:items-start items-center mt-[120px]">
        <h2 className="text-[#83888f] text-[25px] font-black pb-[72px] 2xl:ml-[100px]  ">
          Our headquarters
        </h2>
        <div className="md:flex md:gap-[80px] 2xl:px-[100px] 2xl:gap-[180px]">
          <Country
            img={United}
            title={"United Kingdom"}
            para={"68 Asfory Rd Alcaston sy6 1YA +44 1241 918425"}
          />
          <Country
            img={Canada}
            title={"Canada"}
            para={"1528 Asfory Rd Alcaston sy6 1YA +1416 12311 945125"}
          />
          <Country
            img={Australia}
            title={"Australia"}
            para={"36 Asfory Rd Alcaston sy6 1YA +61 12311 975212"}
          />
        </div>
      </div>
    </div>
  );
}
