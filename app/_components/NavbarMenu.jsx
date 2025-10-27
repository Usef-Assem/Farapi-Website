"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function NavbarMenu({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="ml-2 text-white"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed top-[72px] left-0 
            w-full 
            bg-white shadow-md 
            flex flex-col items-center 
            py-10 gap-8 
            z-50
            animate-slideDown
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium text-lg hover:text-green-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarMenu;
