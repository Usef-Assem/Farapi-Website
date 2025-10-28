import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ArrowRightCircle from "../ArrowRightCircle";
import LetsTalkButton from "../LetsTalkButton";

export default function Header() {
  return (
    <div className="relative min-h-screen section-background overflow-hidden">
      <div className="overlay absolute inset-0  bg-[#002733] opacity-80"></div>
      <div className="asfalt-overlay z-10 opacity-55"></div>
      <div className="absolute z-20 top-[-200] right-[-270] w-[493px] h-[370px] rounded-full 
            bg-[#11F2BE4D] blur-[90px] pointer-events-none">
      </div>
            <div className="absolute z-20 top-[400] left-[-490] w-[665px] h-[665px] rounded-full 
            bg-[#69FF8c] blur-[209px] pointer-events-none">
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
        <div className="max-w-7xl font-[Salmond-medium]">
          <h1 className="text-white text-[38px] md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Innovation In Every
            <br />
            Line Of Custom Code
          </h1>

          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0">
            <p className="text-[#FCFCFC] text-base md:text-lg mb-0 lg:mb-10">
              Experience the difference with our custom software solutions.
            </p>
            <LetsTalkButton />
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="mt-20 flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center max-w-7xl gap-8 lg:gap-0">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-5">
                <div className="w-10 h-10 rounded-full person-1 border-2 border-teal-900"></div>
                <div className="w-10 h-10 rounded-full person-2 border-2 border-teal-900"></div>
                <div className="w-10 h-10 rounded-full person-3 border-2 border-teal-900"></div>
              </div>
              <p className="text-white font-[Salmond - News] text-[20px]">
                500K+ People already trusted us.
              </p>
            </div>
          </div>

          <div className="flex font-[Salmond-medium] flex-wrap justify-start md:justify-start lg:justify-between items-center gap-6 md:gap-12 lg:gap-20">
            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Clicks
              </p>
              <p className="text-[#F4F0EC] text-2xl md:text-4xl">1M+</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Clients
              </p>
              <p className="text-[#F4F0EC] text-2xl md:text-4xl">7</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[20px] md:text-[22px] mb-2">
                Our Possibilities
              </p>
              <p className="text-[#F4F0EC] font-[Salmond-semibold] text-2xl md:text-4xl">∞</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}