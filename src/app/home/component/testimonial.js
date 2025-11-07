'use client';
import { motion } from 'framer-motion';

export default function Testimonial() {
  const testimonials = [
    { name: 'Budi Santoso', job: 'Owner Toko Baju', text: 'Websitenya cepat, modern, dan mudah digunakan! Timnya juga responsif banget.' },
    { name: 'Sinta Amelia', job: 'Freelancer', text: 'Desain webnya keren banget, hasilnya di atas ekspektasi. Recommended!' },
    { name: 'Rahmat Adi', job: 'Digital Agency', text: 'Profesional, cepat, dan hasilnya sangat memuaskan. Akan order lagi.' },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB] text-gray-800" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-16 lg:px-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#112D4E]">
          Apa Kata Klien Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h3 className="text-lg font-semibold text-[#3F72AF]">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.job}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
