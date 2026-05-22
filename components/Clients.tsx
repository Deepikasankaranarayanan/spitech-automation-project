"use client";

const clients = [
  "Ambassador Pallava",
  "Greaves Technologies",
  "Youngman Group",
  "Career Soft",
  "Shree Maruti",
  "Presencia",
  "Santhosh Jewellery",
  "Work Easy",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#f8faff] overflow-hidden">

      <div className="text-center mb-16 px-6">

        <span className="text-purple-600 font-semibold uppercase tracking-widest">
          Trusted Clients
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Companies That Trust Us
        </h2>

      </div>

      {/* Marquee */}
      <div className="relative">

        <div className="flex gap-8 animate-scroll whitespace-nowrap">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-3xl shadow-xl border border-gray-100 px-10 py-8 flex items-center justify-center"
            >

              <h3 className="text-xl font-semibold text-gray-700">
                {client}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}