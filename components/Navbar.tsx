"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          SPi-Tech
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-800">

          <a href="#" className="hover:text-purple-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            About
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            Services
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            Clients
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >

          {menuOpen ? (
            <X className="w-7 h-7 text-gray-800" />
          ) : (
            <Menu className="w-7 h-7 text-gray-800" />
          )}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-6 text-gray-800 shadow-2xl">

          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Clients
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>

      )}

    </nav>
  );
}