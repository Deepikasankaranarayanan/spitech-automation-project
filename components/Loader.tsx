"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#f5f7ff] flex items-center justify-center pointer-events-none"
    >

      <div className="flex flex-col items-center">

        {/* Animated Circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-3xl font-bold text-purple-600"
        >
          SPi-Tech
        </motion.h1>

      </div>

    </motion.div>
  );
}