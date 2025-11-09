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
      <div className="relative flex justify-center bg-[#002733] overflow-hidden rounded-t-[50px]">
      <div className="overlay absolute inset-0 asfalt-overlay"></div>
      <div className="section-background z-10 opacity-55">

      </div>
        <footer className="relative z-30 w-full md:pt-20 pt-14 pb-10 px-2 md:px-6 text-white">
            <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-l from-white/40 to-transparent blur-3xl opacity-70"></div>
                    <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] rounded-full 
                                    bg-linear-to-r from-white/40 to-transparent blur-3xl opacity-70"></div>
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* ---------- Left Column (6 cols) ---------- */}
            <div className="col-span-1 lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#FFFFFF80] pb-8 lg:pb-0 flex flex-col gap-5">
              <div className="logo w-[145px] h-[63px] flex justify-start items-start">
                <Image src={Logo} alt="Farapi" />
              </div>

              <p className="text-[#FFFFFFCC] w-70 font-[Salmond-Regular] ms-2 md:text-lg leading-7">
                Building meaningful technology that empowers growth.             
              </p>

              <LetsTalkButton bgColor={'#F4F0EC'}/>
            </div>

            {/* ---------- Right Columns (6 cols) ---------- */}
<div className="col-span-1 lg:col-span-6  flex md:justify-center gap-18 md:gap-40">
  <div className=''>
    <div className='ms-2 md:ms-0 '>
      <h4 className="font-[Salmond-medium] text-lg mb-4">Farapi</h4>
      <ul className="space-y-3 font-[Salmond-medium] md:text-lg">
        <li><a href="#" className="text-[#FFFFFFCC] w-24 h-12 hover:text-[#58F468] transition-colors">Home</a></li>
        <li><a href="#about" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">About</a></li>
        <li><a href="#services" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Services</a></li>
        <li><a href="#portfolio" className="text-[#FFFFFFCC] hover:text-[#58F468] transition-colors">Portfolio</a></li>
      </ul>
    </div>
  </div>

  <div className='ms-2 text-start '>
    <h4 className="font-[Salmond-medium] text-lg mb-4">Social Media</h4>
    <p className="text-[#FFFFFFCC] font-[Salmond-medium] md:text-lg text-base">
      <a href="mailto:contact@farapi.ai" className="hover:text-[#58F468] transition-colors">
        contact@farapi.ai
      </a>
    </p>
    <div className="flex w-fit mt-5">
      <Link href="https://www.linkedin.com/company/farapi/posts/?feedView=all" target='_blank' className="w-9 h-9 flex items-start">
        <Image src='/Images/linkedin icon.svg' width={30} height={30} alt='linkedin icon' />
      </Link>
    </div>
  </div>
</div>
          </div>
          <div className="copyRight mt-8 ms-5 md:ms-0 lg:mt-7 md:flex md:justify-center md:items-center md:gap-[18px]">
            <p className='text-sm md:text-base text-[#FFFFFFCC] font-[Salmond-medium]'>Copyright © 2025 Farapi all rights reserved.</p>
             {/* <Link className='text-[#58F468] mb-[5px] text-center' href={'/'}>Terms & Privacy Policy</Link> */}
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}

export default Footer