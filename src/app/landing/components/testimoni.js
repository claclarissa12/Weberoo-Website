"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimoniSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const data = [
    {
      nama: "Sarah Domanik",
      teks: "Desain websitenya modern dan sesuai dengan brand kami. Sangat puas dengan hasil dan pelayanannya.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      nama: "Drake Lababa",
      teks: "Harga terjangkau dengan kualitas premium. Timnya juga sangat komunikatif selama proses pembuatan.",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      nama: "Syeira Anatasya",
      teks: "Tim Weberoo cepat tanggap dan profesional. Hasil desainnya melampaui ekspektasi kami!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      nama: "Andi Rahman",
      teks: "Pelayanan sangat cepat dan hasilnya luar biasa. Rekomendasi banget untuk bisnis online!",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      nama: "Fajar Hidayat",
      teks: "Kerjanya cepat, hasil desainnya memuaskan, dan timnya sangat kooperatif.",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <section id="testimoni" className="bg-[#082B4F] py-16 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">
          Apa Kata Mereka Tentang Kami?
        </h2>
        <p className="text-gray-300 text-base">
          “Kepercayaan Anda adalah prioritas kami. Inilah bukti nyata dari para pengguna.”
        </p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-8">
        {/* Tombol kiri */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#082B4F] p-2.5 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Scroll Area */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-6 pb-3 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] max-w-[250px] bg-white/95 p-5 rounded-2xl shadow-[0_6px_15px_rgba(255,255,255,0.2)] snap-center flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,255,255,0.35)]"
            >
              <p className="italic text-gray-700 mb-4 leading-relaxed text-sm">
                “{item.teks}”
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.nama}
                  className="w-10 h-10 rounded-full border-2 border-[#082B4F]/30 object-cover"
                />
                <p className="font-semibold text-gray-800 text-[14px]">{item.nama}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol kanan */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#082B4F] p-2.5 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
