'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Coins, PhoneCall, Rocket } from 'lucide-react';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Lightbulb className="w-7 h-7 text-[#1E40AF]" />,
      title: 'Kreatif & Inovatif',
      desc: 'Bikin website keren, cukup dengan budget pelajar.',
    },
    {
      icon: <Coins className="w-7 h-7 text-[#1E40AF]" />,
      title: 'Harga Ramah Kantong',
      desc: 'Dapatkan website menarik dengan biaya yang jauh lebih terjangkau.',
    },
    {
      icon: <PhoneCall className="w-7 h-7 text-[#1E40AF]" />,
      title: 'Komunikatif',
      desc: 'Setiap ide dan permintaan klien didengarkan untuk memastikan hasil akhir memuaskan.',
    },
    {
      icon: <Rocket className="w-7 h-7 text-[#1E40AF]" />,
      title: 'Dukung Anak Muda',
      desc: 'Dibuat dengan semangat muda dan kreativitas tinggi oleh pelajar SMK yang terus belajar dan berkembang.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-16 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4ff]">
      {/*   Background Pattern */}
      <div
        className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-center"
      ></div>

      {/* Cahaya Abstrak */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(130,170,255,0.25),transparent_70%)] blur-3xl"></div>

      {/* Lapisan Gradient Lembut */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

      <div className="relative z-10">
        {/* Judul */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0F2B5B] mb-16 "
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kenapa Memilih Weberoo?
        </motion.h2>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto ">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-center items-start gap-5 bg-[#F9FBFF]/80 backdrop-blur-sm border border-[#4971cf] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{
                scale: 0.96,
                rotate: -1,
                transition: { type: 'spring', stiffness: 300 },
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Ikon */}
              <motion.div
                className="bg-[#E7EEFF] p-3 rounded-lg flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {a.icon}
              </motion.div>

              {/* Teks */}
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-[#0F2B5B] mb-2">
                  {a.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
