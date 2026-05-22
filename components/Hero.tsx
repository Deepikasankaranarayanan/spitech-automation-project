"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7ff] via-[#eef2ff] to-[#fdf2f8]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-gray-900"
        >
          Advanced Security &
          <span className="text-purple-600">
            {" "}Surveillance Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Protecting businesses with intelligent surveillance,
          automation, biometrics, networking and modern security systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >

          <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-2xl">
            Get Quote
          </button>

          <button className="bg-white border border-gray-300 hover:border-purple-500 hover:text-purple-600 transition px-8 py-4 rounded-full shadow-lg">
            Explore Services
          </button>

        </motion.div>

      </div>

    </section>
  );
}