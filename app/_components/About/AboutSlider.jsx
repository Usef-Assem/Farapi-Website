"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import Azure from "../../../public/Images/Azure.png";
import ReactImg from "../../../public/Images/reactjs.png";
import next from "../../../public/Images/next.png";
import django from "../../../public/Images/django.png";
import fastApi from "../../../public/Images/fastapi.png";
import wordpress from "../../../public/Images/wordPress.png";
import Image from "next/image";

export default function AboutSlider() {
  const Images = [
    { img: Azure, alt: "AzureImg" },
    { img: ReactImg, alt: "ReactImg" },
    { img: next, alt: "NextImg" },
    { img: django, alt: "DjangoImg" },
    { img: fastApi, alt: "FastApiImg" },
    { img: wordpress, alt: "WordpressImg" },
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
