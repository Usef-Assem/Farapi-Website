'use client'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

function TestimonialsSlider({ feedbacks, sliderRef }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  }

  return (
    <div className="slider-container mt-6 md:mt-8 w-full relative overflow-hidden">
      <div className={isMobile ? 'px-2' : 'px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'}>
        <Slider ref={sliderRef} {...settings}>
          <div className="px-2 md:px-3">
            <div className="group bg-[#E4E4E433] border border-transparent rounded-2xl md:rounded-3xl p-6 md:p-8 text-white transition-all duration-300 min-h-[350px] md:h-[380px] flex flex-col justify-between items-center text-center">
              <div className='w-full'>
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-start font-[Salmond] font-[450]">+50</h2>
                <p className="text-lg md:text-xl font-medium text-start font-[Salmond] mt-2">Happy Users About Our <br /> Services</p>
              </div>
              <p className="text-lg md:text-xl text-start w-full text-white mt-auto font-[Salmond]">50+ People trusted us</p>
            </div>
          </div>

          {feedbacks.map((feedback, index) => (
            <div key={index} className="px-2 md:px-3">
              <div className="group bg-[#E4E4E433] border border-transparent rounded-2xl md:rounded-3xl p-6 md:p-8 text-white transition-all duration-300 min-h-[350px] md:h-[380px] flex flex-col justify-between">
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-12 h-12 md:w-[60px] md:h-[60px] flex-shrink-0">
                    <Image
                      src={feedback.Avatar}
                      alt={feedback.Name}
                      fill
                      sizes="60px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg">{feedback.Name}</h4>
                    <p className="text-xs md:text-sm text-gray-300">{feedback.desc}</p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex flex-col items-start">
                  <div className="flex gap-1 mb-2 md:mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl md:text-2xl ${
                          i < feedback.Rate ? 'text-[#58F468]' : 'star-empty'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium font-[Salmond] mb-2">
                    {feedback.ReviewTitle}
                  </h3>
                  <p className="text-sm md:text-base font-[Salmond] text-[#F5F4EE] font-medium leading-relaxed">
                    {feedback.ReviewContent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TestimonialsSlider