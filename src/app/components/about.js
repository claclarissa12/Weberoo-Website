import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.div id="about" className="bg-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
      <img src="/o.png" alt="Tentang Weberoo" className="w-[280px] md:w-[380px] rounded-lg shadow" />
      <div className="md:w-1/2">
        <p className="text-2xl md:text-4xl font-bold text-[#112D4E] mb-6">WEB WEBEROO</p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Butuh website untuk bisnis Anda? Kami siap bantu dari Sabang sampai Merauke!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#0b2a4a] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1c3e6a] transition"
        >
          Buat Website Sekarang
        </motion.button>
      </div>
    </motion.div>
  );
}
