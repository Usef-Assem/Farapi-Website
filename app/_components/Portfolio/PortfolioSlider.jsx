'use client'
import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function PortfolioSlider({ slides, setCurrentSlide }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')

    if (nextBtn && prevBtn && swiperRef.current) {
      nextBtn.addEventListener('click', () => swiperRef.current.swiper.slideNext())
      prevBtn.addEventListener('click', () => swiperRef.current.swiper.slidePrev())
    }

    return () => {
      if (nextBtn && prevBtn && swiperRef.current) {
        nextBtn.removeEventListener('click', () => swiperRef.current.swiper.slideNext())
        prevBtn.removeEventListener('click', () => swiperRef.current.swiper.slidePrev())
      }
    }
  }, [])

  useEffect(() => {
    const swiperEl = swiperRef.current?.swiper
    if (!swiperEl) return

    const container = document.querySelector('.slider-container')
    const handleMouseEnter = () => swiperEl.autoplay.stop()
    const handleMouseLeave = () => swiperEl.autoplay.start()

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="slider-container mt-8 w-full z-20 relative overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={1.3}   
        centeredSlides={true}      
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="mySwiper"
        breakpoints={{
          480: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
          768: {slidesPerView: 1.3, spaceBetween: 20, centeredSlides: true},
          1024:{slidesPerView: 1.6, spaceBetween: 25, centeredSlides: true},
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={`relative group w-full flex mx-auto max-w-[1090px] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[550px]">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="rounded-2xl shadow-lg  transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>

                {/* Overlay Button */}
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 cursor-pointer"
                  aria-label="View project"
                >
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <ArrowRight className="text-black w-6 h-6" />
                  </div>
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PortfolioSlider