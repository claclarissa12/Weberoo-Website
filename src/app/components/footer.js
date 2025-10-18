export default function FooterSection() {
  return (
    <footer className="bg-[#0b2239] text-gray-300 px-6 md:px-16 py-12">
      {/* Grid kolom utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-sm">
        
        {/* Kolom 1 */}
        <div>
          <h3 className="font-semibold mb-5 border-b border-gray-500 inline-block pb-1">
            Informasi Umum
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
          <h3 className="font-semibold mb-5 border-b border-gray-500 inline-block pb-1">
            Pembuatan Website
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Website Perusahaan</a></li>
            <li><a href="#" className="hover:text-white">Website Landing Page</a></li>
            <li><a href="#" className="hover:text-white">Website Custom</a></li>
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
  );
}
