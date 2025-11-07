'use client';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    { img: '/pfarida.jpg', name: 'Fortofolio', type: 'Landing Page' },
    { img: '/portofolio_sarah.png', name: 'Fortofolio', type: 'Landing Page' },
    { img: '/portofolio.png', name: 'Fortofolio', type: 'Landing Page' },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-16 lg:px-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#112D4E]">
          Portofolio Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
