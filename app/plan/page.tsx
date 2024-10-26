import React from "react";
import Image from "next/image";
import CoffeImg from "../../public/assets/plan/mobile/image-hero-blackcup.jpg";
import Instruction from "@/components/Instruction";
import Choose from "@/components/Choose";
import ArrowIcon from "../../public/assets/plan/desktop/icon-arrow.svg";

export default function page() {
  return (
    <div className="plan_container ">
      <div className="px-[24px] pb-[120px] 2xl:ml-[150px]">
        <div className="coffe_div  pt-[100px] px-[24px] pb-[136px] bg-[url('/assets/plan/mobile/image-hero-blackcup.jpg')] md:bg-[url('/assets/plan/tablet/image-hero-blackcup.jpg')] md:w-[689px] w-[327px] h-[400px] bg-cover rounded-[8px] flex flex-col items-center md:items-start 2xl:w-[1280px]">
          <h1 className="text-[#fefcf7] text-[40px] font-black leading-none pb-[22px]">
            Create a plan
          </h1>
          <p className="text-[#fefcf7] text-[15px] leading-relaxed opacity-[0.8] text-center md:text-start md:w-[400px]">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>

      <div className="intruction_div bg-[#83d5e3] pt-[80px] px-[24px] pb-[80px] w-[100%]  rounded-[8px] flex flex-col gap-[50px] md:flex-row md:items-center md:gap-[20px] 2xl:w-[1280px] 2xl:gap-[120px] 2xl:ml-[180px]">
        <Instruction
          head={"01"}
          title={"Pick your coffee"}
          para={
            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
          }
        />
        <Instruction
          head={"02"}
          title={"Choose the frequency"}
          para={
            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
          }
        />
        <Instruction
          head={"03"}
          title={"Receive and enjoy!"}
          para={
            "we ship your package within 48 hours,freshly roasted. Sit back and enjoy award-winning  coffees curated to provide a distinct tasting experience."
          }
        />
      </div>
      <div className="choose_div pt-[120px] px-[24px] pb-[120px] cursor-pointer 2xl:px-[400px]">
        <Choose
          title={"How do you drink your coffee?"}
          img={ArrowIcon}
          headTitle={"Capsule"}
          para={"Compatible with Nespresso systems and similar brewers"}
          headTitle2={"Filter"}
          para2={
            "For pour over or drip methods like Aeropress, Chemex, and V60"
          }
          headTitle3={"Espresso"}
          para3={
            "Dense and finely ground beans for an intense, flavorful experience"
          }
        />
        <Choose
          title={"What type of coffee?"}
          img={ArrowIcon}
          headTitle={"Single Origin"}
          para={
            "Distinct, high quality coffee from a specific family-owned farm"
          }
          headTitle2={"Decaf"}
          para2={
            "Just like regular coffee, except the caffeine has been removed"
          }
          headTitle3={"Blended"}
          para3={
            "Combination of two or three dark roasted beans of organic coffees"
          }
        />
        <Choose
          title={"How much would you like?"}
          img={ArrowIcon}
          headTitle={"250g"}
          para={"Perfect for the solo drinker. Yields about 12 delicious cups."}
          headTitle2={"500g"}
          para2={
            "Perfect option for a couple. Yields about 40 delectable cups."
          }
          headTitle3={"1000g"}
          para3={
            "Perfect for offices and events. Yields about 90 delightful cups."
          }
        />
        <Choose
          title={"Want us to grind them?"}
          img={ArrowIcon}
          headTitle={"Wholebean"}
          para={"Best choice if you cherish the full sensory experience."}
          headTitle2={"Filter"}
          para2={
            "For drip or pour-over coffee methods such as V60 or Aeropress"
          }
          headTitle3={"Cafetiére"}
          para3={"Course ground beans specially suited for french press coffee"}
        />
        <Choose
          title={"How often should we deliver?"}
          img={ArrowIcon}
          headTitle={"Every week"}
          para={"$7.20 per shipment. Includes free first-class shipping."}
          headTitle2={"Every 2 weeks"}
          para2={"$9.60 per shipment. Includes free priority shipping."}
          headTitle3={"Every month"}
          para3={"$12.00 per shipment. Includes free priority shipping."}
        />
      </div>
    </div>
  );
}
