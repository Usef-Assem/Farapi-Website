import React from 'react'
import { Phone, Mail, ArrowRight, ArrowRightCircle } from 'lucide-react'

function Contact() {
  return (
    <>
    <div className='section-background relative'>
        <div className="white-overlay"></div>
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-6 z-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-[Salmond] font-bold text-[#002733] leading-tight">
              Let&apos;s Work <br />
              <span className="text-[#0FC421]">Together</span> On Your <br />
              Next Project
            </h2>

            <div className="mt-8 md:mt-10 lg:mt-12 space-y-6">
              {/* Phone Number */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="font-[Salmond] font-semibold text-lg text-[#1a1a1a]">Phone Number</h4>
                  <p className="text-[#1a1a1a] font-[Salmond] mt-1">(+20) 1002856568</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="font-[Salmond] font-semibold text-lg text-[#1a1a1a]">Email</h4>
                  <p className="text-[#1a1a1a] font-[Salmond] mt-1">anarqi@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Let's Talk Button */}
            <button className="flex w-[200px] cursor-pointer mt-8 md:mt-10 justify-between items-center bg-white px-2 py-1 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
              <span className='font-[Salmond] text-lg text-[#002733] mt-1'>Let&apos;s Talk</span>
                <div className="w-10 h-10 bg-[#002733] rounded-full flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl w-full p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-[Salmond] font-bold text-[#1B1B1B] mb-6">Contact Form</h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border-[#E3E7ED] border rounded-lg font-[Salmond] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              />
              
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-[#E3E7ED] border rounded-lg font-[Salmond] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-[#E3E7ED] border rounded-lg font-[Salmond] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              />
              
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border-[#E3E7ED] border rounded-lg font-[Salmond] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#58F468] resize-none"
              ></textarea>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 accent-[#58F468] cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm mt-1 font-[Salmond] text-gray-600">
                  Lorem ipsum is simply dummy text
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#002733] px-9 text-white py-3 rounded-full font-[Salmond] font-medium hover:bg-[#1B1B1B] cursor-pointer transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact