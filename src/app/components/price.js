import { motion } from "framer-motion";

export default function PriceSection() {
  const packages = [
    {
      name: "Paket A",
      oldPrice: "Rp. 100.000",
      price: "Rp. 36.900",
      features: [
        "5 pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "1 Kali Revisi Desain",
        "Google Index",
      ],
      bonus: "7 Hari Pengerjaan",
    },
    {
      name: "Paket B",
      oldPrice: "Rp. 200.000",
      price: "Rp. 94.900",
      features: [
        "15 pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "2 Kali Revisi Desain",
        "Google Index",
        "1 Banner Header",
        "2 Banner Slider",
      ],
      bonus: "15 Hari Pengerjaan",
    },
    {
      name: "Paket C",
      oldPrice: "Rp. 250.000",
      price: "Rp. 172.900",
      features: [
        "20 pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "2 Kali Revisi Desain",
        "Google Index",
        "1 Banner Header",
        "3 Banner Slider",
      ],
      bonus: "24 Hari Pengerjaan",
    },
  ];

  return (
    <div id="price" className="bg-gray-50 px-4 md:px-10 py-14 text-center">
      {/* Judul */}
      <motion.h2
        className="text-xl md:text-2xl font-bold mb-3 text-[#112D4E]"
      >
        Custom Website Harga Khusus
      </motion.h2>

      <motion.p className="text-gray-600 mb-8 text-sm md:text-base">
        Diskusikan dengan kami untuk harga sesuai permintaan anda
      </motion.p>

      {/* Subjudul */}
      <motion.h3
        className="bg-[#3F72AF] inline-block text-white px-5 py-1.5 rounded-lg font-semibold text-sm md:text-base mb-5"
      >
        HARGA
      </motion.h3>

      <motion.p
        className="text-base md:text-lg mb-10 text-gray-700">
        Pilih Paket Terbaik untuk Website Impianmu
      </motion.p>

      {/* Grid Harga */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {packages.map((paket, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-5 flex flex-col justify-between transition-transform duration-300"
           
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-[#112D4E] mb-3">
              {paket.name}
            </h3>
            <p className="line-through text-gray-400 text-xs">{paket.oldPrice}</p>
            <p className="text-xl font-bold text-[#3F72AF] mb-3">{paket.price}</p>
            <ul className="text-gray-700 text-left mb-5 space-y-1 text-sm">
              {paket.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mb-3">{paket.bonus}</p>
            <button className="bg-[#3F72AF] text-white text-sm px-3 py-1.5 rounded-lg hover:bg-[#2c5480] transition-all duration-300">
              Beli Sekarang
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
