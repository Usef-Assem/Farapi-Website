'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

function TestimonialsSlider({ feedbacks, sliderRef }) {
  const swiperRef = useRef(null)

  // Expose Swiper methods to parent component
  React.useImperativeHandle(sliderRef, () => ({
    slickNext: () => swiperRef.current?.slideNext(),
    slickPrev: () => swiperRef.current?.slidePrev(),
  }))

  return (
    <div className="testimonials-slider mt-6 md:mt-8 w-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={400}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="testimonials-swiper px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* First Card - Stats */}
        <SwiperSlide>
          <div className="group bg-[#E4E4E433] border border-transparent rounded-2xl md:rounded-3xl p-6 md:p-8 text-white transition-all duration-300 h-[350px] md:h-[380px] flex flex-col justify-between items-center text-center">
            <div className='w-full'>
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-start font-[Salmond - News]">+50</h2>
              <p className="text-lg md:text-xl lg:mt-6 text-start font-[Salmond-medium] mt-2">
                Happy Users About Our <br /> Services
              </p>
            </div>
            <p className="text-lg md:text-xl text-start w-full text-white mt-auto font-[Salmond-medium]">
              50+ People trusted us
            </p>
          </div>
        </SwiperSlide>

        {/* Feedback Cards */}
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-[#E4E4E433] border border-transparent rounded-2xl md:rounded-3xl p-6 md:p-8 text-white transition-all duration-300 h-[350px] md:h-[380px] flex flex-col justify-between">
              
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
                  <h4 className="font-[Salmond-medium] text-base md:text-lg">{feedback.Name}</h4>
                  <p className="text-xs md:text-sm text-gray-300 font-[Salmond-Regular]">{feedback.desc}</p>
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

                <h3 className="text-xl md:text-2xl font-[Salmond-medium] mb-2">
                  {feedback.ReviewTitle}
                </h3>
                <p className="text-sm md:text-base font-[Salmond - News] text-[#F5F4EE] leading-relaxed">
                  {feedback.ReviewContent}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialsSlider