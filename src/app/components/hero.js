'use client';

import { motion } from 'framer-motion';
import { use } from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center px-8 md:py-32 bg-gradient-to-b from-[#112D4E] to-[#1c3e6a]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mb-10 md:mb-0"
      >
        <p className="text-3xl md:text-5xl font-bold leading-snug">
          Bikin website jadi gampang bareng{" "}
          <span className="text-blue-400">Weberoo.</span> Kamu request, kami kerjakan!
        </p>
        <p className="text-gray-300 mb-10 text-base md:text-lg">
          Website wajib di era digital. Weberoo siap bantu kamu dari nol. Desain kece & support penuh.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-[#0b2a4a] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Buat Website Sekarang
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="/grup1.png"
          alt="Hero"
          className="w-[280px] md:w-[420px] rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}
