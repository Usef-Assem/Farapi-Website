import { ArrowRight } from 'lucide-react'
import React from 'react'
import LetsTalkButton from '../LetsTalkButton'

function About() {
  return <>
 <div className="relative background overflow-hidden" id='about'>
  <div className="white-overlay absolute inset-0 z-10"></div>

  <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 relative z-20 font-[Salmond-medium]">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
      {/* Left Column */}
      <div>
        <p className="text-[#002733] font-bold text-[18px] mb-3 tracking-wide">About</p>
        <h2 className="text-[#002733] text-4xl md:text-[45px] font-[Salmond-semibold] mb-10">
          Who we are
        </h2>
        <div className="hidden md:block">
          <LetsTalkButton />
        </div>
      </div>

      {/* Right Column */}
      <div>
        <h3 className="text-[#002733] leading-12 text-3xl md:text-3xl font-bold mb-6">
          We are <span className="text-[#0FC421]">farapi</span>, a cutting edge company that delivers
        </h3>
        <p className="text-[#002733] font-bold leading-relaxed mb-6 md:mb-0">
          We are a team of young Egyptian entrepreneurs aiming to become the next tech giant in the MENA region and globally. Established in 2023, our goal is to be a hub for Egypt's top tech talents.
        </p>
        <div className="block md:hidden mt-6">
          <LetsTalkButton />
        </div>
      </div>
    </div>
  </section>
</div>

  </>
}

export default About