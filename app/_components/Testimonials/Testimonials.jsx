'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import person1 from '../../../public/Images/person-1.jpg'
import person2 from '../../../public/Images/person-2.png'
import person3 from '../../../public/Images/person-3.png'
import TestimonialsSlider from './TestimonialsSlider'

function Testimonials() {
    const sliderRef = useRef(null)

    const feedbacks = [
        {
        Avatar: person1,
        Name : 'Ahmed Abd El-Moneim',
        desc : 'CEO, Eyedias',
        Rate: 4 ,
        ReviewTitle : 'Fantastic Services',
        ReviewContent : '"Every design choice had a reason behind it, and it showed in the results. We have had more engagement than ever before!"'
        },
        
        {
        Avatar : person2,
        Name : 'Ahmed Abd El-Moneim',
        desc : 'CEO, Eyedias',
        Rate: 5 ,
        ReviewTitle : 'Fantastic Services',
        ReviewContent : '"Every design choice had a reason behind it, and it showed in the results. We have had more engagement than ever before!"'
        },
        {
        Avatar : person2,
        Name : 'Ahmed Abd El-Moneim',
        desc : 'CEO, Eyedias',
        Rate: 5 ,
        ReviewTitle : 'Fantastic Services',
        ReviewContent : '"Every design choice had a reason behind it, and it showed in the results. We have had more engagement than ever before!"'
        },
        {
        Avatar : person2,
        Name : 'Ahmed Abd El-Moneim',
        desc : 'CEO, Eyedias',
        Rate: 5 ,
        ReviewTitle : 'Fantastic Services',
        ReviewContent : '"Every design choice had a reason behind it, and it showed in the results. We have had more engagement than ever before!"'
        },
        
        {
        Avatar : person3,
        Name : 'Ahmed Abd El-Moneim',
        desc : 'CEO, Eyedias',
        Rate: 4 ,
        ReviewTitle : 'Fantastic Services',
        ReviewContent : '"Every design choice had a reason behind it, and it showed in the results. We have had more engagement than ever before!"'
        },
    ]

    const handleNext = () => {
        sliderRef.current?.slickNext()
    }

    const handlePrev = () => {
        sliderRef.current?.slickPrev()
    }

  return <>
        <div className="relative bg-[#002733]">
      <div className="overlay absolute inset-0 asfalt-overlay"></div>
      <div className="section-background z-10 opacity-55"></div>
                  <section className='z-20 relative px-6 py-14 md:p-10 lg:px-30 lg:py-[104px]'>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-l from-white/50 to-transparent blur-3xl opacity-70"></div>
                    <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-r from-white/50 to-transparent blur-3xl opacity-70"></div>
                </div>
                <div className='flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0'>
                <div className="content">
                    <h4 className='text-white text-base md:text-lg font-[Salmond-medium] mb-8 leading-[100%]'>Testimonials</h4>
                    <p className='text-white text-3xl md:text-4xl lg:text-[56px] leading-[140%] font-[Salmond-semibold] mt-3 md:mt-5'>What Our Clients Say <br /> About <span className='text-[#58F468]'>Farapi</span></p>
                </div>

            <div className="slider-buttons flex">
                <button 
                    onClick={handlePrev}
                    className="prev md:w-16 md:h-16 w-14 h-14 cursor-pointer flex justify-center items-center bg-white rounded-full"
                >
                    <ArrowLeft />
                </button>
                <button 
                    onClick={handleNext}
                    className="next md:w-16 md:h-16 w-14 h-14 cursor-pointer ms-3 flex justify-center items-center bg-white rounded-full"
                >
                    <ArrowRight />
                </button>
          </div>
        </div>
            <TestimonialsSlider feedbacks={feedbacks} sliderRef={sliderRef} />
            </section>
        </div>
  </>
}

export default Testimonials