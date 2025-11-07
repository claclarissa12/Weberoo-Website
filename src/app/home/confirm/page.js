"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmPage() {
  const params = useSearchParams();
  const paket = params.get("paket");
  const nama = params.get("nama");
  const email = params.get("email");
  const telepon = params.get("telepon");
  const detail = params.get("detail");

  const tanggal = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dataPaket = {
    "Paket A": {
      harga: "Rp 36.900",
      waktu: "7 Hari Kerja",
      fitur: [
        "5 pages",
        "Free Domain & Hosting",
        "Free One Time Setup",
        "Free 1 Logo",
        "Free 1 Favicon",
        "1 Kali Revisi Desain",
        "Google Index",
      ],
    },
    "Paket B": {
      harga: "Rp 94.900",
      waktu: "15 Hari Kerja",
      fitur: [
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
    },
    "Paket C": {
      harga: "Rp 172.900",
      waktu: "24 Hari Kerja",
      fitur: [
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
    },
  };

  const selected = dataPaket[paket] || dataPaket["Paket A"];

  const pesanWA = `Halo, saya ${nama} ingin memesan ${paket}. Mohon konfirmasi ya.`;
  const waURL = `https://wa.me/6281234567890?text=${encodeURIComponent(pesanWA)}`;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
       <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
        aria-label="Kembali"
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl text-gray-800">
        {/* Judul */}
        <h2 className="text-center text-xl font-semibold mb-6 text-[#112D4E]">
          Detail Pemesanan
        </h2>

        {/* Informasi Klien */}
        <div className="mb-5">
          <h3 className="font-semibold text-[#112D4E] mb-2">Informasi Klien</h3>
          <p><b>Nama:</b> {nama}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>No. Telepon:</b> {telepon}</p>
          <p><b>Tanggal Pemesanan:</b> {tanggal}</p>
        </div>

        {/* Detail Desain */}
        <div className="mb-5">
          <h3 className="font-semibold text-[#112D4E] mb-2">Detail Desain</h3>
          <p><b>Paket:</b> {paket}</p>
          <p><b>Estimasi Waktu:</b> {selected.waktu}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
            {selected.fitur.map((item, i) => (
              <li key={i}>✅ {item}</li>
            ))}
          </ul>
          <p className="mt-3"><b>Catatan Klien:</b> {detail || "-"}</p>
        </div>

        {/* Total Harga + Status */}
        <div className="border-t pt-4 text-gray-800">
          <p>
            <b>Total Harga:</b>{" "}
            <span className="text-[#3F72AF] font-semibold">{selected.harga}</span>
          </p>
          <p>
            <b>Status:</b>{" "}
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
              Menunggu Pembayaran
            </span>
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-5 flex gap-3 justify-center">
          <a
            href={waURL}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
          >
            💬 Bayar via WhatsApp
          </a>
          <Link href="/home/order">
          
          <button className="border border-[#3F72AF] text-[#3F72AF] px-4 py-2 rounded-md hover:bg-[#3F72AF] hover:text-white text-sm">
            Selesai
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
