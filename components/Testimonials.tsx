"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Greaves Technologies",
    review:
      "SPi-Tech Automation provided excellent CCTV and networking solutions for our office. Their support and installation quality were outstanding.",
  },

  {
    name: "Praveen Kumar",
    company: "Youngman Group",
    review:
      "Professional team with modern security solutions. The biometric and surveillance setup was completed perfectly.",
  },

  {
    name: "Saravanan",
    company: "Presencia",
    review:
      "Highly recommended for enterprise security systems and automation solutions. Great customer support.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[#f8faff]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses and organizations for premium
            surveillance and automation solutions.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[35px] p-10 shadow-2xl border border-gray-100"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-6">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8 text-lg">
                “{item.review}”
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-purple-600">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}