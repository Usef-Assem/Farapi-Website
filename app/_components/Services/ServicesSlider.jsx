import { ArrowRight } from "lucide-react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useRef } from "react";
function ServicesSlider({servicesData , sliderRef}) {
      
    const swiperRef = useRef(null)
      React.useImperativeHandle(sliderRef, () => ({
        slickNext: () => swiperRef.current?.slideNext(),
      }))

  return (
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={26}
            //   autoplay={{
            //     delay: 3500,
            //     disableOnInteraction: false
            //   }}
              loop={true}
              speed={500}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                0: { slidesPerView: 1.2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 26 },
              }}
              className="mb-16"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mt-17 w-full max-w-[421px] h-[330px]">
                    <div
                      className="absolute inset-0 group bg-[#E9EAE533] border-2 border-transparent rounded-[30px] p-8 text-[#F5F4EE] 
                                transition-all duration-300 will-change-transform origin-bottom 
                                hover:scale-y-120 hover:bg-[#89EB934D] hover:border-[#76F483]"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-y-[0.833]  w-full">
                        <h3 className="md:text-3xl text-2xl font-[Salmond-medium] mb-4 transition-colors duration-300 group-hover:text-[#58F468]">
                          {service.title}
                        </h3>
                        <p className="md:text-xl text-lg mb-24 leading-[140%] font-[Salmond-news] text-[#F5F4EE]">
                          {service.description}
                        </p>
                      </div>

                      <div className="transition-transform absolute bottom-4 duration-300 group-hover:scale-y-[0.833]">
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#58F468] group-hover:-rotate-45">
                          <ArrowRight
                            className="w-5 h-5 text-[#1C1B1F] transition-all duration-300"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
  )
}

export default ServicesSlider
