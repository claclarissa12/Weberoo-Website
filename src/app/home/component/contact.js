'use client';

import { motion } from "framer-motion";

export default function Contact() {
  const whatsappNumber = "6281818451620"; // ← isi dengan nomor WA admin kamu
  const message = encodeURIComponent("Halo admin Weberoo, saya mau tanya soal pembuatan website.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div
      id="konsultasi"
      className="bg-white px-20 md:px-46 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      <img
        src="/whatsapp2.png"
        alt="Konsultasi"
        className="w-[300px] md:w-[190px] rounded-lg shadow-lg"
      />

      <div className="md:w-1/2 pl-30">
        <p className="text-2xl md:text-4xl font-bold text-[#112D4E] mb-6">
          KONSULTASI GRATIS
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Punya pertanyaan atau butuh saran tentang website? Tim Weberoo siap
          membantu Anda dengan konsultasi gratis!
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0b2a4a] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1c3e6a] transition"
        >
          Konsultasi Sekarang
        </motion.a>
      </div>
    </div>
  );
}
