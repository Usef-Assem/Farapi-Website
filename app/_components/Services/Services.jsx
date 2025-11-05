'use client'
import { ArrowRight } from "lucide-react";
import AboutSlider from "../About/AboutSlider";
import ServicesSlider from "./ServicesSlider";
import { useRef } from "react";

function Services() {
const sliderRef = useRef(null)

  const servicesData = [
    
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive, user centered interfaces that look stunning and feel effortless to use.",
    },
    {
      title: "Web Platforms",
      description:
        "Building custom web platforms that connect, engage, and scale seamlessly to drive growth.",
    },
    {
      title: "iOS & Android Apps",
      description:
        "Building fast, reliable mobile apps that deliver seamless experiences and real world impact.",
    },
    {
      title: "ERP Systems",
      description:
        "Building integrated systems that streamline operations and boost efficiency.",
    },
    {
      title: "CRM Systems",
      description:
        "Creating smart tools to manage relationships, track growth, and enhance customer loyalty.",
    },
    {
      title: "Fintech Apps",
      description:
        "Crafting smart, secure fintech products that drive financial innovation.",
    },
    {
      title: "IOT Solutions",
      description:
        "Connecting devices and data to create smarter, more efficient systems.",
    },
    {
      title: "Payment integratians",
      description:
        "Creating reliable, user friendly payment systems for any platform.",
    },
    {
      title: "Brand Identity",
      description:
        "Crafting visual identities that reflect your values and stand out with purpose.",
    },
    {
      title: "EdTech & LMS",
      description:
        "Creating smart learning platforms that empower education through technology.",
    },
    {
      title: "Infra & Security",
      description:
        "Delivering reliable infrastructure and robust security to keep your systems running safely.",
    },
  ];

      const handleNext = () => {
        sliderRef.current?.slickNext()
    }

  return (
    <>
      <div className="relative bg-[#002733]" id="services">
      <div className="overlay absolute inset-0 opacity-80 asfalt-overlay"></div>
      <div className="section-background z-10 opacity-55"></div>
      <section className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 right-[-150px] -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                        bg-linear-to-l from-white/60 to-transparent blur-3xl opacity-70 pointer-events-none">
        </div>
        <div className="absolute top-1/2 left-[-180px] -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                        bg-linear-to-l from-white/60 to-transparent blur-3xl opacity-50 pointer-events-none">
        </div>

          <div className="mx-auto ">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center mb-12 gap-6 md:gap-0">
              <div>
                <p className="text-white text-[18px] mb-2 font-[Salmond-medium] tracking-wide">
                  Services
                </p>
                <h2 className="text-white text-4xl md:text-3xl lg:text-[56px] font-[Salmond-semibold]">
                  Your Software Partner
                </h2>
              </div>
              <button onClick={handleNext} className="flex items-center gap-4 text-xl text-[#F5F4EE] rounded-full cursor-pointer font-[Salmond-medium]">
                view more
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-green-400 transition-all duration-200">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
            <ServicesSlider servicesData = {servicesData} sliderRef={sliderRef} />
            <AboutSlider />
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
