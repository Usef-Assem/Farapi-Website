import { ArrowRight } from 'lucide-react'
import React from 'react'
import LetsTalkButton from '../LetsTalkButton'
import ArrowRightCircle from '../ArrowRightCircle'
import Link from 'next/link'

function About() {
  return <>
 <div className="relative background overflow-hidden" id='about'>
  <div className="white-overlay absolute inset-0 z-10"></div>

  <section className="px-6 md:px-12 lg:px-16 py-14 md:py-24 relative z-20 font-[Salmond-medium]">
    <div className="grid md:grid-cols-5 grid-cols-1 gap-12 lg:gap-0 items-start mx-auto">
      {/* Left Column */}
      <div className='h-full flex flex-col justify-between md:col-span-2'>
        <div>
        <p className="text-[#002733] text-[18px] tracking-[100%]">About</p>
        <h2 className="text-[#002733] text-4xl md:text-[40px] lg:text-[45px] font-[Salmond-semibold] mt-8">
          Who we are
        </h2>
        </div>

        <div className="hidden md:block">
          <LetsTalkButton bgColor={'#FBFBFA'} border={true}/>
        </div>
      </div>

      {/* Right Column */}
      <div className='col-span-3  flex justify-end'>
      <div className='lg:w-[90%]'>
        <h3 className="text-[#002733] leading-[160%] text-3xl lg:text-5xl mb-6">
          Your Reliable <span className='text-[#0FC421]'>Tech Arm</span>, Building Solutions That Last.
        </h3>
        <p className="text-[#002733] md:w-[90%] mb-6 md:mb-0 lg:text-xl lg:leading-[160%]">
          Delivering smart, reliable solutions powered by diverse expertise. We build technology that drives growth, enhances performance, and creates lasting impact.        </p>
        <div className="block md:hidden mt-6">
          <LetsTalkButton bgColor={'#FBFBFA'} border={true} />
        </div>
      </div>
      </div>
    </div>
  </section>
</div>

  </>
}

export default About