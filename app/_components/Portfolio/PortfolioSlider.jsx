import React, { useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function PortfolioSlider({ slides, setCurrentSlide }) {
  const sliderRef = useRef(null)

  const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '180px',
  beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  responsive: [
    {
      breakpoint: 1024, // شاشات اللابتوب
      settings: {
        slidesToShow: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 768, // التابلت
      settings: {
        slidesToShow: 1,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 640, // شاشات صغيرة (موبايلات متوسطة)
      settings: {
        slidesToShow: 1,
        centerPadding: '40px',
      },
    },
    {
      breakpoint: 480, // الموبايلات الصغيرة جدًا
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
  ],
}


  useEffect(() => {
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')

    if (nextBtn && prevBtn && sliderRef.current) {
      nextBtn.addEventListener('click', () => sliderRef.current.slickNext())
      prevBtn.addEventListener('click', () => sliderRef.current.slickPrev())
    }

    return () => {
      if (nextBtn && prevBtn && sliderRef.current) {
        nextBtn.removeEventListener('click', () => sliderRef.current.slickNext())
        prevBtn.removeEventListener('click', () => sliderRef.current.slickPrev())
      }
    }
  }, [])

  return (
    <div className="slider-container px-8 mt-8 max-w-6xl mx-auto z-20 relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative group">
            <Image
              src={slide.img}
              alt={`Portfolio ${index + 1}`}
              width={700}
              height={600}
              className="rounded-2xl shadow-lg object-cover mx-auto transition-transform duration-500 "
            />

            {/* 🔹 Arrow appears on hover */}
            <button
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 cursor-pointer"
            >
              <div className="bg-white rounded-full p-4 shadow-lg">
                <ArrowRight className="text-black w-6 h-6" />
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PortfolioSlider
