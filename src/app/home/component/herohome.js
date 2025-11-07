'use client';
import { motion } from 'framer-motion';

export default function HeroHome() {
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

          {/* Tombol Aksi */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#3F72AF] hover:bg-[#5288C5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Konsultasi Gratis 🚀
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/70 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#112D4E] transition-all duration-300"
            >
              Lihat Portofolio
            </motion.a>
          </motion.div>
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
                
                {/* Left Image (back-left) */}
                <motion.img
                src="/cake.png"
                alt="Desain Website 1"
                className="absolute w-68 md:w-106 rounded-lg shadow-2xl rotate-[-8deg] -translate-x-16 opacity-80"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />

                {/* Middle Image (main focus) */}
                <motion.img
                src="/c-clarissa.png"
                alt="Desain Website 2"
                className="relative z-10 w-80 md:w-180 rounded-lg shadow-2xl border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />

                {/* Right Image (back-right) */}
                <motion.img
                src="/flowers.jpg"
                alt="Desain Website 3"
                className="absolute w-68 md:w-106 rounded-lg shadow-2xl rotate-[8deg] translate-x-16 opacity-80"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                />
            </div>
        </motion.div>

      </div>
    </section>
  );
}
