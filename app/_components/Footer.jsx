import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../public/Images/Logo.png'
import LetsTalkButton from './LetsTalkButton'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <div className='bg-[#DDDEE1]'>
      <div className="relative flex justify-center section-background overflow-hidden rounded-t-[50px]">
        <div className="overlay absolute z-20"></div>

        <footer className="relative z-30 w-full py-12 px-6 md:px-8 text-white">
            <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-l from-white/40 to-transparent blur-3xl opacity-70"></div>
                    <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-r from-white/40 to-transparent blur-3xl opacity-70"></div>
          <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* ---------- Left Column (4 cols) ---------- */}
            <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#FFFFFF80] pb-8 lg:pb-0 flex flex-col gap-5">
              <div className="logo w-32">
                <Image src={Logo} width={200} height={200} alt="Farapi" className="object-contain" />
              </div>

              <p className="text-[#FFFFFFCC] font-[Salmond] text-sm leading-relaxed">
                Learn to love growth and change <br /> in improving your skills and you will be successful in the future.
              </p>

              <LetsTalkButton />
            </div>

            {/* ---------- Right Columns (8 cols) ---------- */}
            <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              
              {/* Farapi Column */}
              <div>
                <h4 className="font-[Salmond] font-semibold text-lg mb-4">Farapi</h4>
                <ul className="space-y-3 font-[Salmond] text-sm">
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Home</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">About</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Services</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Portfolio</a></li>
                </ul>
              </div>

              {/* Help Center Column */}
              <div>
                <h4 className="font-[Salmond] font-semibold text-lg mb-4">Help Center</h4>
                <ul className="space-y-3 font-[Salmond] text-sm">
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Cookie Setting</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Social Media Column */}
<div>
  <h4 className="font-[Salmond] font-semibold text-lg mb-4">Social Media</h4>
  <div className="flex gap-3 mb-4">
    <a href="#" className="w-9 h-9">
      <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
    </a>
    <a href="#" className="w-9 h-9">
      <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />
    </a>
    <a href="#" className="w-9 h-9">
      <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
    </a>
    <a href="#" className="w-9 h-9">
      <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7" />
    </a>
  </div>
  <p className="text-[#FFFFFFCC] font-[Salmond] text-sm">
    <a href="mailto:contact@farapi.ai" className="hover:text-[#58F468] transition-colors">contact@farapi.ai</a>
  </p>
</div>

            </div>
          </div>
          <div className="copyRight mt-8 lg:mt-5">
            <p className='text-center text-sm md:text-base text-[#FFFFFFCC] font-[Salmond]'>Copyright © 2024 Farapi all rights reserved. <Link className='text-[#58F468] hover:underline' href={'/'}>Terms & Privacy Policy</Link></p>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}

export default Footer