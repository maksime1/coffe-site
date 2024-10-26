import Image from "next/image";
import GranEspreso from "../public/assets/home/desktop/image-gran-espresso.png";
import Planalto from "../public/assets/home/desktop/image-planalto.png";
import Piccollo from "../public/assets/home/desktop/image-piccollo.png";
import Danche from "../public/assets/home/desktop/image-danche.png";
import Coffe from "@/components/Coffe";
import Property from "@/components/Property";
import CoffeIcon from "../public/assets/home/desktop/icon-coffee-bean.svg";
import GiftIcon from "../public/assets/home/desktop/icon-gift.svg";
import TruckIcon from "../public/assets/home/desktop/icon-truck.svg";
import Instruction from "@/components/Instruction";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main_container flex flex-col items-center">
      <div className="img_container bg-[url('/assets/home/mobile/image-hero-coffeepress.jpg')] w-[327px] h-[500px] bg-cover bg-center rounded-[10px] pt-[100px] px-[24px] pb-[99px] md:bg-[url('/assets/home/tablet/image-hero-coffeepress.jpg')] md:w-[690px] md:pt-[104px]  md:pb-[104px] md:pr-[58px] xl:bg-[url('/assets/home/desktop/image-hero-coffeepress.jpg')] 2xl:w-[1280px] 2xl:px-[80px]">
        <div className="text_div flex flex-col items-center md:items-start ">
          <h1 className="text-[#fefcf7] text-[40px] leading-none text-center pb-[24px] md:text-start md:w-[330px] md:text-[48px] ">
            Great coffee made simple.
          </h1>
          <p className="text-[#fefcf7] text - [15px] text-center pb-[40px] md:text-start md:w-[400px]">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="bg-[#0e8784] pt-[15px] px-[31px] pb-[16px] rounded-[10px] text-[#fefcf7] font-black cursor-pointer">
            <Link href={"/plan"}>Create your plan</Link>
          </button>
        </div>
      </div>
      <div className="coffe_div flex flex-col items-center">
        <h2 className="mt-[120px] text-[40px] ">our collection</h2>
        <div className="coffe-container pt-[14px] px-[47px] pb-[120px] text-center flex flex-col justify-center gap-[48px] 2xl:flex-row ">
          <Coffe
            image={GranEspreso}
            title={"Gran Espresso"}
            para={
              "Light and flavorful blend with cocoa and black pepper for an intense experience"
            }
          />
          <Coffe
            image={Planalto}
            title={"Planalto"}
            para={
              "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
            }
          />
          <Coffe
            image={Piccollo}
            title={"Piccollo"}
            para={
              "Mild and smooth blend featuring notes of toasted almond and dried cherry"
            }
          />
          <Coffe
            image={Danche}
            title={"Danche"}
            para={
              "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
            }
          />
        </div>
      </div>
      <div className="why_choose_us bg-[#2c343e] w-[327px]  rounded-[10px] pt-[64px] px-[24px] pb-[50px] flex flex-col items-center md:w-[688px] 2xl:w-[1280px]  ">
        <h1 className="text-[#fefcf7] font-black text-[28px] leading-none pb-[24px]">
          Why choose us?
        </h1>
        <p className="text-[#fefcf7] md:w-[540px] text-[15px] leading-relaxed text-center opacity-[0.8] pb-[64px]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="flex flex-col gap-[24px] 2xl:flex-row">
          <Property
            img={CoffeIcon}
            title={"Best quality"}
            para={
              "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
            }
          />
          <Property
            img={GiftIcon}
            title={"Exclusive benefits"}
            para={
              "Special offers and swag when you subscribe, including 30% off your first shipment."
            }
          />
          <Property
            img={TruckIcon}
            title={"Free shipping"}
            para={
              "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
            }
          />
        </div>
      </div>
      <div className="how_it_works flex flex-col items-center">
        <h2 className="mt-[120px] text-[#83888f] text-[25px] font-black">
          How it works
        </h2>
        <div className="pt-[80px] px-[24px] pb-[120px] flex flex-col gap-[56px] md:flex-row md:gap-[25px] 2xl:gap-[100px] ">
          <Instruction
            head={"01"}
            title={"Pick your coffee"}
            para={
              "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
            }
          />
          <Instruction
            head={"02"}
            title={"Choose  frequency"}
            para={
              "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
            }
          />
          <Instruction
            head={"03"}
            title={"Receive and enjoy!"}
            para={
              "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning "
            }
          />
        </div>
        <button className="bg-[#0e8784] rounded-[6px] pt-[15px] px-[31px] pb-[16px] text-[#fefcf7] font-black text-[18px] cursor-pointer mb-[120px]">
          <Link href={"/plan"}>Create your plan</Link>
        </button>
      </div>
    </div>
  );
}
