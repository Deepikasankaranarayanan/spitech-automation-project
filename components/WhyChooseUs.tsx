"use client";

import {
  ShieldCheck,
  Headphones,
  BadgeCheck,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    title: "Advanced Technology",
    desc: "Latest smart surveillance and automation technologies.",
    icon: Zap,
  },

  {
    title: "Trusted Security",
    desc: "Reliable and secure enterprise-grade systems.",
    icon: ShieldCheck,
  },

  {
    title: "24/7 Support",
    desc: "Dedicated technical support and maintenance services.",
    icon: Headphones,
  },

  {
    title: "Certified Experts",
    desc: "Professional engineers with years of experience.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Delivering Premium Security Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We combine innovation, reliability and expert engineering
            to deliver world-class surveillance and automation systems.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#f8faff] to-[#eef2ff] rounded-3xl p-8 shadow-xl border border-gray-100"
              >

                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-purple-600" />

                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}