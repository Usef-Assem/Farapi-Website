import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ArrowRightCircle from "../ArrowRightCircle";
import LetsTalkButton from "../LetsTalkButton";

export default function Header() {
  return (
    <div className="relative min-h-screen bg-[#002733] overflow-hidden">
      <div className="absolute inset-0 asfalt-overlay"></div>
      <div className="section-background z-10 opacity-65"></div>
      <div className="absolute z-20 top-0 right-0">
            <Image src="/Images/lighting top right.svg" width={500} height={500} alt="light-bg" />
      </div>
<div
  className="absolute bottom-0 left-0 z-20 bg-no-repeat bg-cover">
              <Image src="/Images/hero-colours (1).png" width={700} height={400} alt="light-bg" />
</div>

<div
  className="absolute z-5 w-[785px] h-[785px] rounded-full
             bg-[#5aaef8] opacity-70
             blur-[309px] 
             left-[-253] top-[420px] 
             -rotate-37 pointer-events-none">
</div>


      {/* <div className="light-circle-bottom" aria-hidden="true"></div> */}


      <section className="absolute mt-20 md:mt-30 inset-0 z-20 px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col justify-center">
        <div className="font-[Salmond-medium]">
          <h1 className="text-white text-[34px] lg:w-5xl md:text-6xl lg:text-[75px] font-[Salmond-semibold] leading-[140%]">
            We Build Tailored Software That Fits Your Business
          </h1>
            
          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0">
            <p className="text-[#FCFCFC] mt-2 font-[Salmond-medium] text-base md:text-[20px] mb-0 ">
              We turn your ideas into powerful, tailored software that delivers impact.
            </p>
            <div className="">
            <LetsTalkButton bgColor={'#F4F0EC'}/>
            </div>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="mt-20 flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center max-w-7xl gap-8 lg:gap-0">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-5">
                <div className="w-16 h-16 rounded-full person-1 border-2 border-teal-900"></div>
                <div className="w-16 h-16 rounded-full person-2 border-2 border-teal-900"></div>
                <div className="w-16 h-16 rounded-full person-3 border-2 border-teal-900"></div>
              </div>
              <p className="text-white font-[Salmond-news] md:text-[20px]">
                7+ People already trusted us.
              </p>
            </div>
          </div>

          <div className="flex font-[Salmond-medium] flex-wrap justify-start md:justify-start lg:justify-between items-center gap-6 md:gap-12 lg:gap-20">
            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Clicks
              </p>
              <p className="text-[#F4F0EC] text-2xl md:text-5xl mt-8">1M+</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Countries
              </p>
              <p className="text-[#F4F0EC] text-2xl md:text-5xl mt-8">6</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Our Possibilities
              </p>
              <p className="text-[#F4F0EC] text-2xl md:text-5xl font-[Salmond-semibold] mt-8">∞</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
