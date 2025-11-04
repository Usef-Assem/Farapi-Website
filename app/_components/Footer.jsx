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
    <div className='bg-[#FBFBFD]'>
      <div className="relative flex justify-center bg-[#002733]  overflow-hidden rounded-t-[50px]">
      <div className="overlay absolute inset-0 asfalt-overlay"></div>
      <div className="section-background z-10 opacity-55">

      </div>
        <footer className="relative z-30 w-full pt-20 pb-10 px-6 md:px-8 text-white">
            <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-l from-white/40 to-transparent blur-3xl opacity-70"></div>
                    <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-r from-white/40 to-transparent blur-3xl opacity-70"></div>
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* ---------- Left Column (4 cols) ---------- */}
            <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#FFFFFF80] pb-8 lg:pb-0 flex flex-col gap-5">
              <div className="logo w-[145px] h-[63px]">
                <Image src={Logo} alt="Farapi" className="object-contain" />
              </div>

              <p className="text-[#FFFFFFCC] w-70 font-[Salmond-Regular] text-lg leading-7">
                Building meaningful technology that empowers growth.             
              </p>

              <LetsTalkButton bgColor={'#F4F0EC'}/>
            </div>

            {/* ---------- Right Columns (8 cols) ---------- */}
            <div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              
              {/* Farapi Column */}
              <div>
                <h4 className="font-[Salmond-medium] text-lg mb-4">Farapi</h4>
                <ul className="space-y-3 font-[Salmond] text-[16px] md:text-lg">
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Home</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">About</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Services</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Portfolio</a></li>
                </ul>
              </div>

              {/* Help Center Column */}
              <div>
                <h4 className="font-[Salmond-medium] text-lg mb-4">Help Center</h4>
                <ul className="space-y-3 font-[Salmond] text-[16px] md:text-lg">
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Cookie Setting</a></li>
                  <li><a href="#" className="text-[#FFFFFFCC] font-Regular hover:text-[#58F468] transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Social Media Column */}
<div className=''>
  <h4 className="font-[Salmond-medium] lg:ms-4 lg:text-center text-lg mb-4">Social Media</h4>
  <div className="flex lg:justify-end gap-3 mb-4">
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
  <p className="text-[#FFFFFFCC] lg:text-end lg:me-4 font-[Salmond-medium] md:text-lg text-base">
    <a href="mailto:contact@farapi.ai" className="hover:text-[#58F468] transition-colors">contact@farapi.ai</a>
  </p>
</div>

            </div>
          </div>
          <div className="copyRight mt-8 ms-5 md:ms-0 lg:mt-5 md:flex md:justify-center md:items-center md:gap-[18px]">
            <p className='text-sm md:text-base text-[#FFFFFFCC] font-[Salmond-medium]'>Copyright © 2024 Farapi all rights reserved.</p>
             <Link className='text-[#58F468] hover:underline text-center' href={'/'}>Terms & Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}

export default Footer