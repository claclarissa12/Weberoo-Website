

"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";


export default function OrderDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paket = searchParams.get("paket");

  const paketData = {
    "Paket A": {
      hargaAsli: "Rp. 100.000",
      hargaDiskon: "Rp. 36.900",
      detail: [
        "5 Pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "1 Kali Revisi Desain",
        "Google Index",
        "7 Hari Pengerjaan",
      ],
    },
    "Paket B": {
      hargaAsli: "Rp. 200.000",
      hargaDiskon: "Rp. 94.900",
      detail: [
        "15 Pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "2 Kali Revisi Desain",
        "Google Index",
        "1 Banner Header",
        "2 Banner Slider",
        "15 Hari Pengerjaan",
      ],
    },
    "Paket C": {
      hargaAsli: "Rp. 250.000",
      hargaDiskon: "Rp. 172.900",
      detail: [
        "20 Pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "2 Kali Revisi Desain",
        "Google Index",
        "1 Banner Header",
        "3 Banner Slider",
        "24 Hari Pengerjaan",
      ],
    },
  };

  const data = paketData[paket] || paketData["Paket A"];

  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    catatan: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
  e.preventDefault();
  const query = new URLSearchParams({
    paket,
    nama: form.nama,
    email: form.email,
    telepon: form.telepon,
    detail: form.catatan,
  }).toString();
  router.push(`/home/confirm?${query}`);
};


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
        aria-label="Kembali"
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* KIRI - Detail Paket */}
        <div>
          <h1 className="text-2xl font-bold text-[#112D4E] mb-4">
            Formulir Pemesanan ({paket})
          </h1>
          <div className="bg-gray-100 rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <p className="line-through text-gray-400 text-sm">{data.hargaAsli}</p>
              <p className="text-blue-600 font-semibold text-lg">{data.hargaDiskon}</p>
            </div>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              {data.detail.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* KANAN - Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-[#112D4E] mb-3">Data Pemesan</h2>

          <input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Alamat Email"
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            name="telepon"
            value={form.telepon}
            onChange={handleChange}
            placeholder="Nomor Telepon"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <textarea
            name="catatan"
            value={form.catatan}
            onChange={handleChange}
            placeholder="Detail tambahan (warna, tema, catatan, dsb)"
            className="w-full border border-gray-300 rounded-lg p-3 h-24 resize-none text-gray-900 placeholder-gray-500 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        <button
            type="submit"
            className="w-full bg-[#3F72AF] hover:bg-[#2C5480] text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
            >
            Kirim Pesanan
        </button>

        </form>
      </div>
    </div>
  );
}