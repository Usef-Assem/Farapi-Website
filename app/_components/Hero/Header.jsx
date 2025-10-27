import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ArrowRightCircle from "../ArrowRightCircle";
import LetsTalkButton from "../LetsTalkButton";

export default function FarapiLanding() {
  return (
    <div className="relative min-h-screen section-background overflow-hidden">
      <div className="overlay z-10"></div>
      <div className="light-circle" aria-hidden="true"></div>
      <div className="light-circle-bottom" aria-hidden="true"></div>


      <section className="absolute mt-30 inset-0 z-20 px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col justify-center">
        <div className="max-w-7xl">
          <h1 className="text-white font-[Salmond] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Innovation In Every
            <br />
            Line Of Custom Code
          </h1>

          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0">
            <p className="text-[#FCFCFC] font-[Salmond] text-base md:text-lg mb-0 lg:mb-10">
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
              <p className="text-white font-[Salmond] text-[20px]">
                500K+ People already trusted us.
              </p>
            </div>
          </div>

          <div className="flex font-[Salmond] flex-wrap justify-start md:justify-start lg:justify-between items-center gap-8 md:gap-12 lg:gap-20">
            <div>
              <p className="text-[#F4F0EC] text-[22px] font-bold mb-2">
                Clicks
              </p>
              <p className="text-white text-4xl font-bold">1M+</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[22px] font-bold mb-2">
                Clients
              </p>
              <p className="text-white text-4xl font-bold">7</p>
            </div>

            <div>
              <p className="text-[#F4F0EC] text-[22px] font-bold mb-2">
                Our Possibilities
              </p>
              <p className="text-white text-4xl font-bold">∞</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}