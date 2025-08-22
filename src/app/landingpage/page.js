export default function landing() {
    return(
    <div className="min-h-screen bg-[#112D4E] text-white font-sans">
        <nav className="flex items-center justify-between px-8 border-b-2 h-16">
            <img src="/logo.png" className="w-38 pt-10" />
            <ul className="flex gap-14 text-lg text-[#F9F7F7] font-semibold">
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Service</a></li>
            <li><a href="#" className="hover:text-blue-400">Portofolio</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-center px-8 pt-6">
            {/* Text Section */}
            <div className="md:w-1/2">
                <p className="text-2xl md:text-4xl font-bold leading-snug mb-6">
                Bikin website jadi gampang bareng <span className="text-blue-400">Weberoo</span>. <br />
                Kamu request, kami kerjakan!
                </p>
                <p className="text-gray-300 mb-14">
                Website wajib di era digital. Weberoo siap bantu kamu dari nol. Desain kece & support penuh.
                Yuk, konsultasi gratis!
                </p>
                <button className="bg-white text-[#0b2a4a] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
                Buat Website Sekarang
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img src="/grup1.png" alt="Hero Illustration" className="w-[300px] md:w-[450px]" />
            </div>
        </div>

        

        <div className="bg-white h-100 px-6 flex">
            <img src="o.png" className="w-100 h-100 pl-10"></img>
            <div className="md:w-1/2 pt-10 pl-30">
                <p className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-[#112D4E]">
                WEB WEBEROO
                </p>
                <p className="text-gray-700 mb-14">
                Butuh website untuk bisnis Anda? Kami siap bantu dari Sabang sampai Merauke! Desain kekinian, 
                fitur komplit, dan harga ramah di kantong solusi digital yang menyeluruh untuk semua daerah di Indonesia
                </p>
                <button className="bg-[#112D4E] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
                Buat Website Sekarang
                </button>
            </div>
        </div>
    </div>




    );
}