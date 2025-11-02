import { ArrowRight } from 'lucide-react'
import React from 'react'
import LetsTalkButton from '../LetsTalkButton'
import ArrowRightCircle from '../ArrowRightCircle'

function About() {
  return <>
 <div className="relative background overflow-hidden" id='about'>
  <div className="white-overlay absolute inset-0 z-10"></div>

  <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-20 font-[Salmond-medium]">
    <div className="grid md:grid-cols-5 gap-12 lg:gap-0 items-start mx-auto">
      {/* Left Column */}
      <div className='h-full flex flex-col justify-between md:col-span-2'>
        <div>
        <p className="text-[#002733] text-[18px] tracking-[100%]">About</p>
        <h2 className="text-[#002733] text-4xl md:text-[45px] font-[Salmond-semibold] mt-8">
          Who we are
        </h2>
        </div>

        <div className="hidden md:block">
            <button className="flex w-[248px] h-[72px] pl-6 pr-2 cursor-pointer mt-8 md:mt-10 justify-between items-center bg-[#FBFBFA] border border-[#DADADA] rounded-full hover:bg-gray-100 transition">
              <span className='font-[Salmond-medium] text-lg text-[#002733] mt-1'>Let&apos;s Talk</span>
                <div className="w-14 h-14 bg-[#58F468] rounded-full flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                </div>
            </button>
        </div>
      </div>

      {/* Right Column */}
      <div className='col-span-3  flex justify-end'>
      <div className='lg:w-[90%]'>
        <h3 className="text-[#002733] leading-[160%] text-3xl md:text-5xl mb-6">
          We are <span className="text-[#0FC421]">farapi</span>, a cutting edge company that delivers
        </h3>
        <p className="text-[#002733] mb-6 md:mb-0 lg:text-xl lg:leading-[160%]">
          We are a team of young Egyptian entrepreneurs aiming to become the <br /> next tech giant in the MENA region and globally. Established in 2023, our <br /> goal is to be a hub for Egypt's top tech talents.
        </p>
        <div className="block md:hidden mt-6">
            <button className="flex w-[248px] h-[72px] pl-6 pr-2 cursor-pointer mt-8 md:mt-10 justify-between items-center bg-[#FBFBFA] border border-[#DADADA] rounded-full hover:bg-gray-100 transition">
              <span className='font-[Salmond-medium] text-lg text-[#002733] mt-1'>Let&apos;s Talk</span>
                <div className="w-14 h-14 bg-[#58F468] rounded-full flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                </div>
            </button>
        </div>
      </div>
      </div>
    </div>
  </section>
</div>

  </>
}

export default About