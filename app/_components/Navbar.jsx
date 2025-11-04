"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from '../../public/Images/Logo.png';
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 ">
      <div className={`flex flex-wrap items-center justify-between mx-auto p-4 md:px-10 md:bg-transparent md:backdrop-blur-none`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} width={105} height={63} alt="farapi-logo" priority />
        </Link>

        {/* Desktop Let's Talk Button + Mobile Toggle */}
        <div className="flex md:order-2 items-center gap-6">
          {/* Desktop Let's Talk Button */}
          <Link
            href="https://calendly.com/omar-farapi/30min"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-lg text-[#F4F0EC] font-[Salmond-medium] hover:text-[#58F468] transition-colors"
          >
            Contact US
          </Link>
          
          <div className="hidden md:flex justify-center items-center bg-[#58F468] w-12 h-12 rounded-full cursor-pointer hover:scale-105 transition-transform">
            <ArrowRight className="text-black w-5 h-5" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between md:bg-[#E9EAE51F] rounded-full w-full md:w-[370px] lg:w-[520px] h-[72px] ${
            isOpen ? "block" : "hidden"
          } md:flex`}
          id="navbar-menu"
        >
          <ul className="flex flex-col font-medium text-lg p-3 lg:pl-2 lg:pr-6 w-full mt-4 rounded-lg backdrop-blur-lg bg-[#E9EAE51F] md:bg-transparent md:flex-row items-center md:justify-between
           md:mt-0 md:backdrop-blur-none border border-white/20 md:border-0">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 lg:p-0 md:hover:text-[#58F468] transition-colors ${
                    index === 0 ? "md:text-[#002733] text-white lg:w-[120] lg:h-[56] flex justify-center items-center font-[Salmond-semibold] md:bg-[#F4F0EC] rounded-full" : "text-white font-[Salmond-medium]"
                  }`}
                  aria-current={index === 0 ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Let's Talk Button */}
            <li className="md:hidden mt-2">
              <Link href={'https://calendly.com/omar-farapi/30min'}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-white pl-4 pr-2 py-2 rounded-full hover:bg-[#58F468] transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-[Salmond-medium] text-[15px] text-[#002733]">
                  Contact US
                </span>
                <div className="w-8 h-8 bg-[#58F468] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#002733] group-hover:text-[#002733]" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;