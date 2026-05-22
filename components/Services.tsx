
"use client";
import Reveal from "./Reveal";
import {
  Camera,
  ShieldCheck,
  Fingerprint,
  Wifi,
  DoorOpen,
  Flame
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "CCTV Surveillance",
    desc: "Advanced HD surveillance systems for businesses and industries.",
    icon: Camera,
  },

  {
    title: "Fire Alarm Systems",
    desc: "Smart fire detection and emergency alert systems.",
    icon: Flame,
  },

  {
    title: "Biometric Access",
    desc: "Secure biometric and access control management solutions.",
    icon: Fingerprint,
  },

  {
    title: "Networking",
    desc: "Reliable enterprise networking and connectivity setup.",
    icon: Wifi,
  },

  {
    title: "Access Control",
    desc: "Modern RFID and smart access control systems.",
    icon: ShieldCheck,
  },

  {
    title: "Automatic Doors",
    desc: "Automatic sliding and smart door automation solutions.",
    icon: DoorOpen,
  },
];

export default function Services() {
  return (
    <Reveal>
<section id="services" className="py-28 px-6 bg-white">
    

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security, surveillance and automation solutions
            designed for modern businesses and organizations.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-purple-600" />

                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
      </section>
</Reveal>


  );
}