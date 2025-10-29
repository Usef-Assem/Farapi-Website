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
      <div className="overlay absolute inset-0  bg-[#002733] opacity-80"></div>
      <div className="asfalt-overlay z-10 opacity-55"></div>
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
                <p className="text-white text-sm mb-2 font-[Salmond-medium] tracking-wide">
                  Services
                </p>
                <h2 className="text-white text-4xl md:text-3xl lg:text-4xl font-[Salmond-semibold]">
                  Your Software Partner
                </h2>
              </div>
              <button className="flex items-center gap-2 text-white px-6 py-3 rounded-full cursor-pointer font-[Salmond-medium] hover:bg-gray-100 hover:text-[#002733] transition">
                All Service
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>

            {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-16">
  {servicesData.map((service, index) => (
    <div key={index} className="relative mt-10 w-full max-w-[400px] h-[330px]">
      <div
        className="absolute inset-0 group bg-[#E9EAE533] border-2 border-transparent rounded-[30px] p-8 text-[#F5F4EE] 
                   transition-all duration-300 will-change-transform origin-bottom 
                   hover:scale-y-125 hover:bg-[#89EB934D] hover:border-[#76F483]"
      >
        <h3 className="text-3xl font-[Salmond-medium] mb-4 transition-colors duration-300 group-hover:text-[#58F468]">
          {service.title}
        </h3>
        <p className="text-base w-full mb-24 font-[Salmond - News]">{service.description}</p>
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#58F468] group-hover:-rotate-45">
          <ArrowRight className="w-5 h-5 text-[#1C1B1F] transition-all duration-300" />
        </button>
      </div>
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