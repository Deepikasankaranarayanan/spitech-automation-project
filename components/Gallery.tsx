"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CCTV Surveillance",
    image: "/gallery/img1.jpg",
  },
  {
    title: "Biometric Access",
    image: "/gallery/img2.jpg",
  },
  {
    title: "Smart Automation",
    image: "/gallery/img3.jpg",
  },
  {
    title: "Networking Setup",
    image: "/gallery/img4.jpg",
  },
  {
    title: "Home Automation",
    image: "/gallery/img5.jpg",
  },
  {
    title: "Security Systems",
    image: "/gallery/img6.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Recent Projects
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest surveillance, automation,
            and security installation projects.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              <div className="relative h-[320px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}