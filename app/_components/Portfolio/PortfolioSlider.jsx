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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
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

    const handleNext = () => sliderRef.current?.slickNext()
    const handlePrev = () => sliderRef.current?.slickPrev()

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', handleNext)
      prevBtn.addEventListener('click', handlePrev)
    }

    return () => {
      if (nextBtn && prevBtn) {
        nextBtn.removeEventListener('click', handleNext)
        prevBtn.removeEventListener('click', handlePrev)
      }
    }
  }, [])

  return (
    <div className="slider-container mt-8 w-full z-20 relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className="relative group w-full">
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <Image
                  src={slide.img}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 70vw, 700px"
                  className="rounded-2xl shadow-lg object-cover transition-transform duration-500"
                  priority={index === 0}
                />
              </div>

              <button
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 cursor-pointer"
                aria-label="View project"
              >
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <ArrowRight className="text-black w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PortfolioSlider