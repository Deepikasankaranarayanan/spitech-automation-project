"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
  "https://formspree.io/f/mvzyqpqn",
  formData,
  {
    headers: {
      Accept: "application/json",
    },
  }
);
if (res.status === 200) {

  alert("Message sent successfully 😄");

}

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

      }

    } catch (error) {

      alert("Something went wrong");

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-br from-[#f5f7ff] via-[#eef2ff] to-[#fdf2f8]">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>

            <span className="text-purple-600 font-semibold uppercase tracking-widest">
              Contact Us
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Let's Talk About Your Project
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              We provide customized surveillance and automation solutions.
            </p>

          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100"
          >

            <h3 className="text-3xl font-bold text-gray-900">
              Send Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
              />

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-4 rounded-2xl font-semibold shadow-xl"
              >

                {loading ? "Sending..." : "Send Message"}

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}