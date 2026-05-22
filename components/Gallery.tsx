"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CCTV Installation",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1974",
  },

  {
    title: "Biometric Access",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
  },

  {
    title: "Networking Setup",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074",
  },

  {
    title: "Smart Automation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Project Gallery
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Our Recent Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest surveillance, automation and enterprise
            security installations across multiple industries.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[40px] shadow-2xl group"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-white/80">
                    Premium enterprise security solution.
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}