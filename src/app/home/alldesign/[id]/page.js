"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function DetailDesignPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const detail = {
    1: {
      title: "🍰 Website Cake Shop",
      type: "Landing Page",
      pages: "1 Halaman",
      features: [
        "Menampilkan katalog kue dengan gambar dan harga",
        "Desain ceria dengan nuansa pastel",
        "Navigasi sederhana dan cepat",
        "Responsif untuk semua perangkat",
      ],
      tech: "Next.js, Tailwind CSS, dan JavaScript",
      video: "/cake.mp4",
      poster: "/thumbnail-cake.jpg",
      price: "Rp 99.900",
    },
    2: {
      title: "🧑‍💻 IDFortofolio",
      type: "Portofolio Pribadi",
      pages: "2 Halaman (Home, About)",
      features: [
        "Menampilkan profil dan project",
        "Transisi animasi halus",
        "Desain minimalis profesional",
        "Tombol kontak interaktif",
      ],
      tech: "Next.js, Tailwind CSS, dan Framer Motion",
      video: "/demo-portfolio.mp4",
      poster: "/thumbnail-portfolio.jpg",
      price: "Rp 199.900",
    },
    3: {
      title: "E-Commerce Claire & Co",
      type: "E-Commerce Perhiasan",
      pages: "3 Halaman (Home, Detail Produk, Keranjang)",
      features: [
        "Menampilkan produk dari API",
        "Detail produk dengan gambar & harga",
        "Keranjang belanja dengan localStorage",
        "Form checkout interaktif",
        "Desain responsif untuk semua perangkat",
      ],
      tech: "Next.js, Tailwind CSS, dan JavaScript",
      video: "/clarissa.mp4",
      poster: "/thumbnail-c-clarissa.png",
      price: "Rp 599.900",
    },
    4: {
      title: "🌸 Website Flower Shop",
      type: "Landing Page",
      pages: "1 Halaman",
      features: [
        "Katalog bunga cantik dengan animasi hover",
        "Desain estetik dengan tone lembut",
        "Form pemesanan sederhana",
        "Responsif di semua layar",
      ],
      tech: "Next.js, Tailwind CSS",
      video: "/demo-flower.mp4",
      poster: "/thumbnail-flower.jpg",
      price: "Rp 149.900",
    },
  };

  const alldesign = detail[id];

  if (!alldesign) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Design not found</h2>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E8EEF7] via-[#F4F7FB] to-[#E9F0FA] flex items-center justify-center py-14 px-6 overflow-hidden">
      {/* Tombol X di luar kotak (kiri atas layar) */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
        aria-label="Kembali"
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>

      {/* Efek dekoratif background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[500px] h-[500px] bg-[#A7C7E7] rounded-full blur-3xl -top-20 -right-32"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[400px] h-[400px] bg-[#3F72AF] rounded-full blur-3xl -bottom-20 -left-20"
      />

      {/* Card utama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
        >
          {alldesign.title}
        </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mb-10"
          >
            <div className="w-full md:w-3/4 lg:w-2/3 aspect-video overflow-hidden rounded-2xl shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster={alldesign.poster}
              >
                <source src={alldesign.video} type="video/mp4" />
                Browser kamu tidak mendukung video tag.
              </video>
            </div>
          </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-left text-gray-700 space-y-4"
        >
          <p>
            <strong>Jenis Website:</strong> {alldesign.type}
          </p>
          <p>
            <strong>Jumlah Halaman:</strong> {alldesign.pages}
          </p>
          <div>
            <strong>Fitur Utama:</strong>
            <ul className="list-disc list-inside mt-2 ml-3 space-y-1">
              {alldesign.features.map((fitur, i) => (
                <li key={i}>{fitur}</li>
              ))}
            </ul>
          </div>
          <p>
            <strong>Teknologi:</strong> {alldesign.tech}
          </p>
          {alldesign.price && (
            <p className="text-xl font-semibold text-[#3F72AF] mt-3">
              {alldesign.price}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-10"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#3F72AF] text-[#3F72AF] font-medium px-6 py-2.5 rounded-lg hover:bg-[#3F72AF] hover:text-white transition-all"
          >
            Chat
          </a>
          <button className="bg-[#112D4E] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#3F72AF] transition-all">
            Checkout
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
