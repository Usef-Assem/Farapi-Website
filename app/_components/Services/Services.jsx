import { ArrowRight } from "lucide-react";
import AboutSlider from "../About/AboutSlider";

function Services() {
  const servicesData = [
    {
      title: "UX Design",
      description:
        "UX Design services with focus on creating intuitive user experiences.",
    },
    {
      title: "Android Apps",
      description:
        "Custom Android apps built to meet specific goals and user needs.",
    },
    {
      title: "iOS Apps",
      description:
        "High quality iOS applications that provide seamless user experiences.",
    },
  ];

  return (
    <>
      <div className="relative section-background" id="services">
        <div className="overlay"></div>
        <section className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden font-[Salmond] font-bold">
        <div className="absolute top-1/2 right-[-150px] -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                        bg-linear-to-l from-white/60 to-transparent blur-3xl opacity-70 pointer-events-none">
        </div>
        <div className="absolute top-1/ left-[-180px] -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                        bg-linear-to-l from-white/60 to-transparent blur-3xl opacity-50 pointer-events-none">
        </div>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
              <div>
                <p className="text-white text-sm mb-2 tracking-wide">
                  Services
                </p>
                <h2 className="text-white text-4xl md:text-3xl lg:text-4xl font-bold">
                  Your Software Partner
                </h2>
              </div>
              <button className="flex items-center gap-2 text-white px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-100 hover:text-[#002733] transition">
                All Service
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="group bg-[#E9EAE533] border border-transparent rounded-3xl p-8 text-white transition-all duration-300 hover:bg-[#89EB934D] hover:scale-105 hover:border-[#76F483]"
                >
                  <h3 className="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#58F468]">
                    {service.title}
                  </h3>
                  <p className="text-base mb-24">{service.description}</p>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#58F468] group-hover:-rotate-45">
                    <ArrowRight className="w-5 h-5 text-[#1C1B1F] transition-all duration-300 " />
                  </button>
                </div>
              ))}
            </div>

            {/* Technology Logos Slider */}
              <AboutSlider />
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;