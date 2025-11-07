'use client';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Globe, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Website Company Profile',
      desc: 'Tingkatkan citra bisnis Anda dengan website profesional yang menarik dan responsif.',
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce',
      desc: 'Kami buatkan toko online lengkap dengan fitur keranjang, pembayaran, dan dashboard admin.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Landing Page',
      desc: 'Halaman promosi cepat dengan desain yang fokus pada konversi pengunjung.',
    },
    {
      icon: <Code size={40} />,
      title: 'Custom Web Development',
      desc: 'Solusi web sesuai kebutuhan bisnis Anda menggunakan teknologi modern.',
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB] text-gray-800" id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-16 lg:px-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#112D4E]">
          Layanan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-[#3F72AF] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
