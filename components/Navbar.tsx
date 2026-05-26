"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">

          <Image
            src="/logo.png"
            alt="SPI-Tech Logo"
            width={180}
            height={60}
            className="object-contain"
            priority
          />

        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-purple-700 font-medium transition duration-300"
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-5 shadow-lg">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-purple-700 font-medium transition"
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </header>

  );

}