'use client'
import React, { useState } from 'react'
import PortfolioSlider from './PortfolioSlider'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import project1 from '../../../public/Images/Aklni.png'
import project2 from '../../../public/Images/4.png'
import project3 from '../../../public/Images/gridkey.png'
import project4 from '../../../public/Images/instagold.png'
import project5 from '../../../public/Images/5.png'
import project6 from '../../../public/Images/3.png'


function Portfolio() {
const slides = [
  {
    imgMobile: project1,
    imgDesktop: "/Images/Aklne (1).png", 
    title: "Aklne App",
    subtitle: "Smart app for daily meal choices."
  },
  {
    imgMobile: project2,
    imgDesktop: "/Images/eyedias (1).png",
    title: "Eyedias Website",
    subtitle: "Connecting creatives with businesses"
  },
  {
    imgMobile: project3,
    imgDesktop: "/Images/gridkey (1).png",
    title: "gridkey",
    subtitle: "Financial asset management platform"
  },
  {
    imgMobile: project4,
    imgDesktop: "/Images/instagold (1).png",
    title: "Instagold",
    subtitle: "Fintech for gold tracking"
  },
  {
    imgMobile: project5,
    imgDesktop: "/Images/noa (1).png",
    title: "noa",
    subtitle: "IoT Fleet Management System"
  },
  {
    imgMobile: project6,
    imgDesktop: "/Images/seen (2).png",
    title: "Seen",
    subtitle: "An app for mental health support"
  },
]


  // const desktopSlides = [
  //   {
  //     img: '/Images/Aklne (1).png',
  //     title: "Aklne App",
  //     subtitle: "Smart app for daily meal choices.",
  //   },
  //   {
  //     img: '/Images/eyedias (1).png',
  //     title: "Eyedias Website",
  //     subtitle: "Connecting creatives with businesses",
  //   },
  //   {
  //     img: '/Images/gridkey (1).png',
  //     title: "gridkey",
  //     subtitle: "Financial asset management platform",
  //   },
  //   {
  //     img: '/Images/instagold (1).png',
  //     title: "Instagold",
  //     subtitle: "Fintech for gold tracking",
  //   },
  //   {
  //     img: '/Images/noa (1).png',
  //     title: "noa",
  //     subtitle: "IoT Fleet Management System",
  //   },
  //   {
  //     img: '/Images/seen (2).png',
  //     title: "Seen",
  //     subtitle: "An app for mental health support",
  //   },
 
  // ]

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="background z-20 md:py-[104px] py-14 relative" id='portfolio'>
      <div className="white-overlay z-10"></div>

      <div className="flex flex-col md:flex-row justify-between z-20 relative items-start lg:items-center px-6 md:px-8 py-6 gap-6 lg:gap-0">
        <div>
          <h2 className="text-4xl leading-[140%] md:text-5xl font-[Salmond-semibold] lg:ms-10 mb-4 md:mb-7">
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
            <button className="prev md:w-16 md:h-16 w-14 h-14 cursor-pointer flex justify-center items-center bg-white rounded-full">
              <ArrowLeft />
            </button>
            <button className="next md:w-16 md:h-16 w-14 h-14 cursor-pointer ms-3 flex justify-center items-center bg-white rounded-full">
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