"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },

  {
    number: "300+",
    label: "Happy Clients",
  },

  {
    number: "10+",
    label: "Years Experience",
  },

  {
    number: "24/7",
    label: "Technical Support",
  },
];

export default function About() {
  return (
    <Reveal>
    <section className="py-28 px-6 bg-[#f8faff]">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            About Company
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
            Smart Security Solutions For Modern Businesses
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            SPi-Tech Automation delivers advanced surveillance,
            automation and enterprise security solutions tailored
            for industries, offices, commercial spaces and homes.
          </p>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            We specialize in CCTV surveillance, biometric access,
            networking, fire alarm systems, RFID solutions and
            smart automation technologies with premium support.
          </p>

          <button className="mt-10 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl">
            Learn More
          </button>

        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8"
        >

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
            >

              <h3 className="text-5xl font-bold text-purple-600">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                {item.label}
              </p>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
</Reveal>
  );
}