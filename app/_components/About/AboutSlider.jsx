"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import Azure from "../../../public/Images/Vector.svg";
import Wordpress from "../../../public/Images/Vector-1.svg";
import Django from "../../../public/Images/Vector-2.svg";
import fastApi from "../../../public/Images/Vector-3.svg";
import Next from "../../../public/Images/Vector-4.svg";
import ReactImg from "../../../public/Images/Vector-5.svg";
import Image from "next/image";

export default function AboutSlider() {
  const Images = [
    { img: Azure, alt: "AzureImg" },
    { img: Wordpress, alt: "Wordpress" },
    { img: Django, alt: "DjangoImg" },
    { img: fastApi, alt: "fastApiImg" },
    { img: Next, alt: "NextImg" },
    { img: ReactImg, alt: "ReactImg" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      speed={4000} // سرعة الحركة
      loop={true}
      slidesPerView={6}
      spaceBetween={20}
      allowTouchMove={true}
      className="mt-3 ease-slider"
      breakpoints={{
        1280: { slidesPerView: 5 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
    >
      {Images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center">
            <Image
              src={image.img}
              alt={image.alt}
              className="w-35 h-16 object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
