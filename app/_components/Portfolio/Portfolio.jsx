'use client'
import React, { useState } from 'react'
import PortfolioSlider from './PortfolioSlider'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import project1 from '../../../public/Images/Aklni.png'
import project2 from '../../../public/Images/eyedias.png'
import project3 from '../../../public/Images/tiba.png'


function Portfolio() {
  const slides = [
    {
      img: project1,
      title: "Aklni Website",
      subtitle: "Food Website",
    },
    {
      img: project2,
      title: "Eyedias Website",
      subtitle: "The First Co-creation in The MENA Region",
    },
    {
      img: project3,
      title: "Tiba Medical App",
      subtitle: "Modern Interface for Healthcare",
    },
    {
      img: project1,
      title: "Aklni Website",
      subtitle: "Food Website",
    },
    {
      img: project2,
      title: "Eyedias Website",
      subtitle: "The First Co-creation in The MENA Region",
    },
    {
      img: project3,
      title: "Tiba Medical App",
      subtitle: "Modern Interface for Healthcare",
    },
 
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="background z-20 py-[104px] relative" id='portfolio'>
      <div className="white-overlay z-10"></div>

      <div className="flex flex-col md:flex-row justify-between z-20 relative items-start lg:items-center px-6 md:px-8 py-6 gap-6 lg:gap-0">
        <div>
          <h2 className="text-3xl leading-[140%] md:text-5xl font-[Salmond-semibold] lg:ms-10 mb-4 md:mb-7">
            Portfolio <br /> Highlight
          </h2>
        </div>

        <div className="text-left font-[Salmond-medium] md:text-left text-[#002733]  transition-all duration-500 w-full md:w-1/2 lg:w-[40%]">
          <div className='w-full'>
          <h4 className="text-[22px] md:text-xl text-start lg:text-start leading-[160%]">
            {slides[currentSlide].title}
          </h4>
          <p className="text-[22px] font-[Salmond-news] w-full leading-[160%]">
            {slides[currentSlide].subtitle}
          </p>
          </div>

          <div className="slider-buttons flex mt-5 justify-start lg:justify-start">
            <button className="prev w-16 h-16 cursor-pointer flex justify-center items-center bg-white rounded-full">
              <ArrowLeft />
            </button>
            <button className="next w-16 h-16 cursor-pointer ms-3 flex justify-center items-center bg-white rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <PortfolioSlider slides={slides} setCurrentSlide={setCurrentSlide} />
    </div>
  )
}

export default Portfolio