"use client"
import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"

export default function TestimonialsSlider({ feedbacks, sliderRef }) {
  const swiperRef = useRef(null)

  React.useImperativeHandle(sliderRef, () => ({
    slickNext: () => swiperRef.current?.slideNext(),
    slickPrev: () => swiperRef.current?.slidePrev(),
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10 relative">

      {/* STATIC CARD FIXED LEFT SIDE */}
      <div className="bg-[#E4E4E433] hidden border border-transparent rounded-3xl p-8 text-white md:flex flex-col justify-between h-[380px]">
        <div>
          <h2 className="text-6xl font-[Salmond - News]">+50</h2>
          <p className="text-xl font-[Salmond-medium] mt-3 leading-snug">
            Happy Users About Our <br/> Services
          </p>
        </div>
        <p className="text-xl text-white font-[Salmond-medium]">
          50+ People trusted us
        </p>
      </div>


      {/* SWIPER ON RIGHT SIDE (2 columns desktop) */}
      <div className="lg:col-span-2">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          loop={true}
          speed={500}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 15 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1280: { slidesPerView: 2, spaceBetween: 24 },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#E4E4E433] border border-transparent rounded-3xl p-8 text-white md:h-[380px] flex flex-col justify-between transition-all duration-300">

                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <Image
                      src={feedback.Avatar}
                      alt={feedback.Name}
                      fill
                      sizes="60px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-[Salmond-medium] text-lg">{feedback.Name}</h4>
                    <p className="text-sm text-gray-300 font-[Salmond-Regular]">{feedback.desc}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-2xl ${i < feedback.Rate ? 'text-[#FFC700]' : 'star-empty'}`}>
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[22px] font-[Salmond-medium] mb-2">
                    {feedback.ReviewTitle}
                  </h3>
                  <p className="text-base font-[Salmond-news] text-[#F5F4EE] leading-relaxed">
                    {feedback.ReviewContent}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}
