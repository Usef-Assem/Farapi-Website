import React from 'react'
import { Phone, Mail, ArrowRight, ArrowRightCircle } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PhoneIcon from '../PhoneIcon'
import EmailIcon from '../EmailIcon'
import Link from 'next/link'
import LetsTalkButton from '../LetsTalkButton'

function Contact() {
  return (
    <>
    <div className='background relative' id='Contact US'>
      <section className="py-14 px-6 md:py-16 md:px-8 lg:py-[104px] lg:px-6 z-20 relative">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_558px] gap-12 lg:gap-16 md:gap-10 items-start">
          {/* Left Side - Text Content */}
          <div className='h-full flex flex-col justify-around'>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-[Salmond-semibold] text-[#002733] leading-tight">
              Let&apos;s Work <br />
              <span className="text-[#0FC421]">Together</span> On Your <br />
              Next Project
            </h2>

            <div className="mt-8 mb-8 md:mb-0 md:mt-0 space-y-6">
              {/* Phone Number */}
              <div className="flex items-start gap-4">
                <PhoneIcon />
                <div className='font-[Salmond-medium]'>
                  <h4 className="text-lg text-[#1a1a1a]">Phone Number</h4>
                  <p className="text-[#1a1a1a] mt-1">(+20) 106 458 6873</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex font-[Salmond-medium] items-start gap-4">
                <EmailIcon />
                <div>
                  <h4 className="text-lg text-[#1a1a1a]">Email</h4>
                  <p className="text-[#1a1a1a] mt-1">contact@farapi.ai</p>
                </div>
              </div>
            </div>

            {/* Let's Talk Button */}
              <LetsTalkButton border={true} bgColor={'#FBFBFA'} ArrowBgColor={'#002733'} ArrowColor = {'white'} />
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-[Salmond-semibold] text-[#1B1B1B] mb-6">Contact Form</h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 lg:w-[488px] lg:h-16 border-[#E3E7ED] border rounded-lg font-[Salmond-medium] text-[#1a1a1a] placeholder:#7C7C7C focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              />
              
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 lg:w-[488px] lg:h-16 border-[#E3E7ED] border rounded-lg font-[Salmond-medium] text-[#1a1a1a] placeholder:#7C7C7C focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              />
              
              {/* <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-[#E3E7ED] border rounded-lg font-[Salmond-medium] text-[#1a1a1a] placeholder:#7C7C7C focus:outline-none focus:ring-2 focus:ring-[#58F468]"
              /> */}
              
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 lg:w-[488px] lg:h-48 border-[#E3E7ED] border rounded-lg font-[Salmond-medium] text-[#1a1a1a] placeholder:#7C7C7C focus:outline-none focus:ring-2 focus:ring-[#58F468] resize-none"
              ></textarea>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className=" w-4 h-4 accent-[#58F468] cursor-pointer"
                />
                <label htmlFor="terms" className="text-lg leading-[26px] mt-[5px] font-[Salmond-news] text-[#7C7C7C]">
                  I agree to the terms and privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#002733] px-9 text-[16px] text-white py-3 rounded-full font-[Salmond-medium] hover:bg-[#1B1B1B] cursor-pointer transition-all duration-300"
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