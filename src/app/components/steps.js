import { motion } from "framer-motion";

export default function StepsSection() {
  const steps = [
    { img: "/whatsapp.png", text: "Wawancara telepon untuk diskusi" },
    { img: "/mailing-list.png", text: "Beritahu kami website yang kamu inginkan" },
    { img: "/web-design.png", text: "Desain Website" },
    { img: "/www.png", text: "Website Siap dipublikasikan" },
  ];

  // Variants animasi
  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div id="service" className="px-6 md:px-12 py-16 bg-gray-50">
      <motion.p
        className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#112D4E]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Langkah-Langkah Wujudkan Website Impianmu
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-[#3F72AF] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            variants={stepVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <motion.img
              src={step.img}
              alt="Step"
              className="w-16 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-white font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {step.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
