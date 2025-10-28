'use client'
import React, { useState } from 'react'
import PortfolioSlider from './PortfolioSlider'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import project1 from '../../../public/Images/project.svg'
import project2 from '../../../public/Images/project2.svg'
import project3 from '../../../public/Images/project3.svg'
import project4 from '../../../public/Images/project4.svg'
import project5 from '../../../public/Images/project5.svg'

function Portfolio() {
  const slides = [
    {
      img: project4,
      title: "Eyedias Website",
      subtitle: "The First Co-creation in The MENA Region",
    },
    {
      img: project2,
      title: "Farapi Landing Page",
      subtitle: "Innovation in Every Line of Code",
    },
    {
      img: project3,
      title: "Medical App UI",
      subtitle: "Modern Interface for Healthcare",
    },
    {
      img: project1,
      title: "Dashboard Design",
      subtitle: "Analytics Made Simple",
    },
    {
      img: project5,
      title: "E-commerce Platform",
      subtitle: "Redefining Online Shopping",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="background z-20 py-5 relative" id='portfolio'>
      <div className="white-overlay z-10"></div>

      <div className="flex flex-col md:flex-row justify-between z-20 relative items-start lg:items-center px-6 md:px-8 py-6 gap-6 lg:gap-0">
        <div>
          <h2 className="text-3xl md:text-5xl font-[Salmond-semibold] lg:ms-25 mb-4 md:mb-7">
            Portfolio <br /> Highlight
          </h2>
        </div>

        <div className="text-left font-[Salmond-medium]  md:text-left lg:text-right transition-all duration-500 w-full md:w-1/2 lg:w-auto">
          <h4 className="text-lg md:text-xl text-start lg:text-start">
            {slides[currentSlide].title}
          </h4>
          <p className="lg:text-start w-full lg:w-90 ">
            {slides[currentSlide].subtitle}
          </p>

          <div className="slider-buttons flex mt-5 justify-start lg:justify-start">
            <button className="prev w-10 h-10 cursor-pointer flex justify-center items-center bg-white rounded-full">
              <ArrowLeft />
            </button>
            <button className="next w-10 h-10 cursor-pointer ms-3 flex justify-center items-center bg-white rounded-full">
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