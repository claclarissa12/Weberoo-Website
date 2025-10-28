import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignSection() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  // ✅ Total 6 item sekarang
  const designs = [
    {
      img: "/c-clarissa.png",
      link: "https://websiteecommercebasic.vercel.app/homepage.html",
      title: "E-Commerce",
    },
    {
      img: "/portofolio.png",
      link: "https://sabrina03112008.github.io/portofolio/",
      title: "Portofolio",
    },
    {
      img: "/ftfarida.jpg",
      link: "https://z4raa11.github.io/portofolio/",
      title: "Portofolio",
    },

    {
      img: "/sarahft.jpg",
      link: "https://sarahaull.github.io/portofolio/",
      title: "Portofolio",
    },
    {

      img: "/cake.png",
      link: "https://sarahaull.github.io/project-landingpage/",
      title: "Landing Page",
    },
    {
      img: "/flowers.jpg",
      link: "https://sarahaull.github.io/landingpage-bucket/",
      title: "Business Website",
    },
  ];

  return (
    <div id="portfolio" className="bg-white px-4 md:px-12 py-16 text-center">
      {/* Judul */}
      <motion.h2
        className="text-xl md:text-2xl font-bold mb-2 text-[#112D4E]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Banyak Pilihan Desain
      </motion.h2>

      {/* Subjudul */}
      <motion.p
        className="text-gray-600 mb-10 text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Pilih satu dari puluhan desain yang tersedia
      </motion.p>

      {/* Grid Desain */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {designs.map((d, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedDesign(d)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition block bg-white"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <img src={d.img} alt={d.title} className="w-full h-48 object-cover" />
            <p className="mt-2 text-[#112D4E] font-semibold">{d.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tombol */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#3F72AF] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2c5480] transition-all duration-300">
          LIHAT SEMUA DESAIN
        </button>
      </motion.div>

      {/* Modal Pop-up */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-[100%] p-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold text-[#112D4E] mb-3">
                {selectedDesign.title}
              </h3>

              <iframe
                src={selectedDesign.link}
                className="w-full h-[400px] rounded-lg border"
                title={selectedDesign.title}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}