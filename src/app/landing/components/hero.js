'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient Animated */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E] via-[#163E72] to-[#0F3460] animate-gradient-slow"></div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-white">
            Wujudkan Website Impianmu <br />
            Bersama <span className="text-[#3F72AF]">Weberoo</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Kami bantu kamu punya website profesional tanpa ribet. Desain elegan, cepat,
            dan siap bantu bisnismu tampil beda di dunia digital.
          </p>

          {/* Tombol Login & Register (kecil) */}
          <motion.div
            className="flex gap-3 justify-center md:justify-start mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3,  duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/landing/login"
              className="text-lg bg-white text-[#112D4E] font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              href="/landing/register"
              className="text-lg border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-[#112D4E] transition-all duration-300"
            >
              Register
            </Link>
          </motion.div>

          {/* Tombol Aksi Utama */}
        
        </motion.div>

        {/* Right Side - Stacked Images */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/20 via-transparent to-[#DBE2EF]/10 blur-3xl rounded-full -z-10"></div>

          {/* Stack Container */}
          <div className="relative w-[300px] md:w-[420px] h-[260px] md:h-[320px] flex justify-center items-center">
            {/* Left Image */}
            <motion.img
              src="/cake.png"
              alt="Desain Website 1"
              className="absolute w-68 md:w-106 rounded-lg shadow-2xl rotate-[-8deg] -translate-x-16 opacity-80"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />

            {/* Middle Image */}
            <motion.img
              src="/c-clarissa.png"
              alt="Desain Website 2"
              className="relative z-10 w-80 md:w-180 rounded-lg shadow-2xl border border-white/10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />

            {/* Right Image */}
            <motion.img
              src="/flowers.jpg"
              alt="Desain Website 3"
              className="absolute w-68 md:w-106 rounded-lg shadow-2xl rotate-[8deg] translate-x-16 opacity-80"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
