"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Azure from "../../../public/Images/Azure.png";
import ReactImg from "../../../public/Images/reactjs.png";
import next from "../../../public/Images/next.png";
import django from "../../../public/Images/django.png";
import fastApi from "../../../public/Images/fastapi.png";
import figma from "../../../public/Images/figma.png";
import wordpress from "../../../public/Images/wordPress.png";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function AboutSlider() {
  const Images = [
    { img: Azure, alt: "AzureImg" },
    { img: ReactImg, alt: "ReactImg" },
    { img: next, alt: "nextImg" },
    { img: django, alt: "djangoImg" },
    { img: fastApi, alt: "fastApiImg" },
    { img: figma, alt: "figmaImg" },
    { img: wordpress, alt: "wordpressImg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {Images.map((image, index) => (
        <div key={index} className="mt-3 ms-2">
          <Image src={image.img} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
}

export default AboutSlider;