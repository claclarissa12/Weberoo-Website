import { motion } from "framer-motion";

export default function DesignSection() {
  const designs = [
    { img: "/desain1.png", link: "https://namaprojectmu.netlify.app", title: "E-Commerce" },
    { img: "/desain2.png", link: "https://portfolio-keren.vercel.app", title: "Portfolio" },
    { img: "/desain3.png", link: "https://todolist-app.vercel.app", title: "To-Do List" },
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
          <motion.a
            key={i}
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition block"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <img src={d.img} alt={d.title} className="w-full h-48 object-cover" />
            <p className="mt-2 text-[#112D4E] font-semibold">{d.title}</p>
          </motion.a>
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
    </div>
  );
}
