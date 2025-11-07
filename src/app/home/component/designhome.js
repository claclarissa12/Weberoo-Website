import Link from "next/link";
import { motion } from 'framer-motion';

export default function DesignHome() {
  const ddesign = [
    { id: 1, title: "Cake", img: "./cake.png", price: "Rp 99.900" },
    { id: 1, title: "Cake", img: "./cake.png", price: "Rp 99.900" },
    { id: 1, title: "Cake", img: "./cake.png", price: "Rp 99.900" },
    { id: 1, title: "Cake", img: "./cake.png", price: "Rp 99.900" },
    { id: 1, title: "Cake", img: "./cake.png", price: "Rp 99.900" },
  ];

  const cdesign = [
    { id: 3, title: "E-Commerce", img: "/c-clarissa.png", price: "Rp 599.900", tag: "Best Seller" },
    { id: 3, title: "E-Commerce", img: "/c-clarissa.png", price: "Rp 599.900", tag: "Best Seller" },
    { id: 3, title: "E-Commerce", img: "/c-clarissa.png", price: "Rp 599.900", tag: "Best Seller" },
    { id: 3, title: "E-Commerce", img: "/c-clarissa.png", price: "Rp 599.900", tag: "Best Seller" },
    { id: 3, title: "E-Commerce", img: "/c-clarissa.png", price: "Rp 599.900", tag: "Best Seller" },
  ];

 const renderCard = (item) => (
    <motion.div
      key={item.id}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="group bg-gradient-to-b from-white to-[#f5f7fa] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[160px] sm:min-w-[1800px] md:min-w-[200px] flex-shrink-0 overflow-hidden border border-gray-100"
    >
      <Link href={`/home/alldesign/${item.id}`}>
        <div className="relative w-full h-30 sm:h-43 overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {item.tag && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              {item.tag}
            </span>
          )}
        </div>

        <div className="p-4 text-center">
          <p className="font-semibold text-gray-800 text-base md:text-lg">{item.title}</p>
          <p className="text-[#3F72AF] font-bold text-sm md:text-base mt-1">{item.price}</p>
          <button className="mt-3 w-full bg-[#3F72AF] hover:bg-[#284B78] text-white py-2 rounded-lg font-medium transition-all duration-300">
            Beli Sekarang
          </button>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="px-4 md:px-16 py-20 bg-gradient-to-b from-[#DBE2EF]/30 to-white">
      <h2 className="text-3xl md:text-4xl text-[#112D4E] font-extrabold text-center mb-14">
        Pilihan Desain Website
      </h2>

      {/* Best Seller Section */}
      <section className="mb-14">
        <h3 className="text-xl md:text-2xl text-[#112D4E] font-semibold mb-6 border-l-4 border-[#3F72AF] pl-3">
          🌟 Best Seller
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {cdesign.map(renderCard)}
        </div>
      </section>

      {/* Other Designs Section */}
      <section>
        <h3 className="text-xl md:text-2xl text-[#112D4E] font-semibold mb-6 border-l-4 border-[#3F72AF] pl-3">
          💼 Lainnya
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {ddesign.map(renderCard)}
        </div>
      </section>
    </div>
  );
}
