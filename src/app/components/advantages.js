export default function AdvantagesSection() {
  const advantages = [
    { icon: "💡", title: "Kreatif & Inovatif", desc: "Bikin website keren, cukup dengan budget pelajar." },
    { icon: "💰", title: "Harga Ramah Kantong", desc: "Dapatkan website menarik dengan biaya yang jauh lebih terjangkau." },
    { icon: "📞", title: "Komunikatif", desc: "Setiap ide dan permintaan klien didengarkan untuk memastikan hasil akhir memuaskan." },
    { icon: "🚀", title: "Dukung Anak Muda", desc: "Dibuat dengan semangat muda dan kreativitas tinggi oleh pelajar SMK yang terus belajar dan berkembang." },
  ];

  return (
    <div className="bg-gray-50 px-6 md:px-16 py-16">
      <p className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#112D4E]">
        Kenapa Memilih Weberoo?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {advantages.map((a, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white flex items-start gap-4 shadow-sm hover:shadow-md transition">
            <div className="text-3xl">{a.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-[#112D4E] mb-2">{a.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
