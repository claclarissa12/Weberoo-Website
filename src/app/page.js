

    

'use client'

import { motion } from 'framer-motion'; // Untuk animasi lebih baik, instal framer-motion



export default function Landing() {
    return (
        <div className="min-h-screen bg-[#112D4E] text-white font-sans overflow-hidden">
            {/* Navbar dengan animasi sticky */}
            <motion.nav 
                initial={{ y: -100 }} // Animasi masuk dari atas
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full bg-[#112D4E] shadow-lg z-50 transition"
            >
                <div className="flex items-center justify-between max-w-8xl mx-auto px-6 border-b">
                    <img src="/logo.png" alt="Logo" className="w-32 mt-5" />
                    <ul className="flex gap-6 text-lg text-[#F9F7F7] font-semibold">
                        <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Service</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Portofolio</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
                    </ul>
                </div>
            </motion.nav>

            {/* Hero Section dengan animasi fade-in */}
            <div className=" flex flex-col md:flex-row items-center px-8 md:py-32 bg-gradient-to-b from-[#112D4E] to-[#1c3e6a]">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} // Animasi dari kiri
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 mb-10 md:mb-0"
                >
                    <p className="text-3xl md:text-5xl font-bold leading-snug">
                        Bikin website jadi gampang bareng{" "}
                        <span className="text-blue-400">Weberoo.</span> 
                        Kamu request, kami kerjakan!
                    </p>
                    <p className="text-gray-300 mb-10 text-base md:text-lg">
                        Website wajib di era digital. Weberoo siap bantu kamu dari nol. 
                        Desain kece & support penuh. Yuk, konsultasi gratis!
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} // Animasi hover
                        className="bg-white text-[#0b2a4a] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[gray-200] transition"
                    >
                        Buat Website Sekarang
                    </motion.button>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} // Animasi dari kanan
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <img
                        src="/grup1.png"
                        alt="Hero Illustration"
                        className="w-[280px] md:w-[420px] rounded-lg shadow-lg animate-fade-in" // Tambahkan animasi fade-in
                    />
                </motion.div>
            </div>

           
        {/* Tentang Section */}
        <motion.div  className="bg-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
            <img
                src="/o.png"
                alt="Tentang Weberoo"
                className="w-[280px] md:w-[380px] rounded-lg shadow"
            />
            <div className="md:w-1/2">
                <p className="text-2xl md:text-4xl font-bold text-[#112D4E] mb-6">
                    WEB WEBEROO
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                    Butuh website untuk bisnis Anda? Kami siap bantu dari Sabang sampai
                    Merauke! Desain kekinian, fitur komplit, dan harga ramah di kantong.
                    Solusi digital menyeluruh untuk semua daerah di Indonesia.
                </p>
                 <motion.button 
                        whileHover={{ scale: 1.05 }} // Animasi hover
                        className="bg-[#0b2a4a] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1c3e6a] transition"
                    >
                        Buat Website Sekarang
                   </motion.button>
            </div>
        </motion.div>

        {/* Langkah Section */}
        <div className="px-6 md:px-12 py-16">
            <p className="text-2xl md:text-3xl font-bold text-center mb-12">
                Langkah-Langkah Wujudkan Website Impian-mu
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 touch-pinch-zoom transition">
                <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center text-center touch-pinch-zoom transition">
                    <img src="/whatsapp.png" alt="Wawancara" className="w-20 mb-4" />
                    <p>Wawancara telepon <br /> untuk diskusi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.15 }} className=" touch-pinch-zoom transition flex flex-col items-center text-center">
                    <img src="/mailing-list.png" alt="Diskusi Website" className="w-20 mb-4" />
                    <p>Beritahu kami website <br /> yang kamu inginkan</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.15 }} className="touch-pinch-zoom transition flex flex-col items-center text-center">
                    <img src="/web-design.png" alt="Desain Website" className="w-20 mb-4" />
                    <p>Desain Website</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.15 }} className=" touch-pinch-zoom transition flex flex-col items-center text-center">
                    <img src="/www.png" alt="Publikasi Website" className="w-20 mb-4" />
                    <p>Website Siap <br /> dipublikasikan</p>
                </motion.div>
            </div>
        </div>

        {/* Keunggulan Section */}
        <div className="bg-gray-50 px-6 md:px-16 py-16">
            <p className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#112D4E]">
                Kenapa Memilih Weberoo?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                    {
                        icon: "💡",
                        title: "Kreatif & Inovatif",
                        desc: "Dibuat dengan semangat muda dan kreativitas tinggi oleh pelajar yang akan terus belajar dan berkembang.",
                    },
                    {
                        icon: "💰",
                        title: "Harga Ramah Kantong",
                        desc: "Bikin website keren, cukup dengan budget pelajar.",
                    },
                    {
                        icon: "📞",
                        title: "Dikenal Komunikasi Aktif & Terbuka",
                        desc: "Setiap ide dan permintaan klien akan kami dengarkan untuk memastikan hasil akhir memuaskan.",
                    },
                    {
                        icon: "🚀",
                        title: "Desain Dukung Anak Muda Berdaya",
                        desc: "Setiap proyek membantu pelajar mengembangkan skill dan kemandirian finansial.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 bg-white flex items-start gap-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#112D4E] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Pilihan Desain Section */}
        <div className="bg-white px-6 md:px-12 py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#112D4E]">
                Banyak Pilihan Desain
            </h2>
            <p className="text-gray-600 mb-10">
                Pilih satu dari puluhan desain yang tersedia
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                { img: "/desain1.png", link: "https://namaprojectmu.netlify.app", title: "E-Commerce" },
                { img: "/desain2.png", link: "https://portfolio-keren.vercel.app", title: "Portfolio" },
                { img: "/desain3.png", link: "https://todolist-app.vercel.app", title: "To-Do List" },
                // tambahkan sesuai kebutuhan
                ].map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer block"
                >
                    <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    />
                    <p className="mt-2 text-[#112D4E] font-semibold">{item.title}</p>
                </a>
                ))}
            </div>

            <div className="mt-10">
                <button className="bg-[#3F72AF] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2c5480] transition">
                LIHAT SEMUA DESAIN
                </button>
            </div>
        </div>


        {/* Harga Section */}
        <div className="bg-gray-50 px-6 md:px-16 py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#112D4E]">
                Custom Website Harga Khusus
            </h2>
            <p className="text-gray-600 mb-10">
                *Diskusikan dengan kami untuk harga sesuai permintaan anda
            </p>
            

            <h3 className="bg-[#3F72AF] inline-block text-white px-6 py-2 rounded-lg font-bold mb-6">
                HARGA
            </h3>
            <p className="text-lg mb-12 text-gray-700">
                Pilih Paket Terbaik untuk Website Impianmu
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
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
                ].map((paket, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow hover:shadow-lg p-6 flex flex-col justify-between"
                    >
                        <h3 className="text-xl font-bold text-[#112D4E] mb-4">{paket.name}</h3>
                        <p className="line-through text-gray-400 text-sm">{paket.oldPrice}</p>
                        <p className="text-2xl font-bold text-[#3F72AF] mb-4">{paket.price}</p>
                        <ul className="text-gray-700 text-left mb-6 space-y-2">
                            {paket.features.map((f, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    ✅ {f}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 mb-4">{paket.bonus}</p>
                        <button className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg hover:bg-[#2c5480]">
                            Beli Sekarang
                        </button>
                    </div>
                ))}
            </div>















            <div className="mt-12 bg-[#a8c1df] rounded-xl shadow p-6 max-w-4xl mx-auto ">
                <p className="text-lg font-bold font-mono text-[#112D4E] mb-4 ">
                    Masih ragu bikin website?
                </p>
                <p className=" text-black mb-2">
                    Miliki Website Impian, Bisnis Makin Cuan!
                </p>
                <p className="text-black mb-6">
                    Saatnya tampil beda! Buat website menawan untuk bisnismu dan buka
                    peluang baru di era digital
                </p>


                <button className="bg-[#3F72AF] text-white px-6 py-3 rounded-lg hover:bg-[#2c5480]">
                    Pesan Sekarang
                </button>
            </div>
        </div>

        {/* Footer Baru */}
        <footer className="bg-[#0b2239] text-gray-300 px-6 md:px-16 py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10  max-w-6xl g  mx-auto text-sm mr-">
                {/* Kolom 1 */}
                <div>
                    <h3 className="font-semibold mb-5 border-b border-gray-500 inline-block pb-1">
                        Informasi umum
                    </h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-white">Layanan Kami</a></li>
                        <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
                        <li><a href="#" className="hover:text-white">Program Afiliasi</a></li>
                        <li><a href="#" className="hover:text-white">Cara Pesan</a></li>
                    </ul>
                </div>

                {/* Kolom 2 */}
                <div>
                    <h3 className="font-semibold mb-5 border-b border-gray-500 inline-block pb-1">
                        Bantuan
                    </h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">FAQ (Pertanyaan yang Sering Diajukan)</a></li>
                        <li><a href="#" className="hover:text-white">Pengiriman</a></li>
                        <li><a href="#" className="hover:text-white">Pengembalian</a></li>
                        <li><a href="#" className="hover:text-white">Status Pesanan</a></li>
                        <li><a href="#" className="hover:text-white">Opsi Pembayaran</a></li>
                    </ul>
                </div>

                {/* Kolom 3 */}
                <div>
                    <h3 className="font-semibold mb-5 border-b border-gray-500 inline-block pb-1 ">
                        Pembuatan web site
                    </h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Website perusahaan</a></li>
                        <li><a href="#" className="hover:text-white">Website Landing Page</a></li>
                        <li><a href="#" className="hover:text-white">Website custom</a></li>
                        <li><a href="#" className="hover:text-white">Website UMKM</a></li>
                        <li><a href="#" className="hover:text-white">Website Profesional</a></li>
                    </ul>
                </div>
                
            </div>

            {/* Ikuti Kami */}
            <div className="flex justify-center gap-4 py-5">
                <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-white transition">
                    <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-white transition">
                    <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-white transition">
                    <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-white transition">
                    <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                </a>
            </div>


            {/* Copy Right */}
            <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-600 pt-4 px-7">
                © 2025 Weberoo. All Rights Reserved.
            </div>
        </footer>
    </div>
);
}
