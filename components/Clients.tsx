"use client";

import Image from "next/image";

const clients = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
  "/clients/client5.png",
  "/clients/client6.png",
  "/clients/client7.png",
  "/clients/client8.png",
  "/clients/client9.png",
  "/clients/client10.png",
  "/clients/client11.png",
  "/clients/client12.png",
  "/clients/client13.png",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Trusted By
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Clients
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Companies and businesses who trust our solutions.
          </p>

        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">

          <div className="flex gap-16 animate-scroll whitespace-nowrap">

            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >

                <Image
                  src={logo}
                  alt="client logo"
                  width={160}
                  height={90}
                  className="object-contain transition duration-300 hover:scale-110"
                />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}