"use client";

import { useState } from "react";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const router = useRouter();

  const ongoingOrders = [
    { id: "#INV202501", name: "Website UMKM", date: "02/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
    { id: "#INV202502", name: "Landing Page Bisnis", date: "01/11/2025", status: "Diproses" },
  ];

  const completedOrders = [
    { id: "#INV202490", name: "Toko Online Jewelry", date: "28/10/2025", status: "Selesai" },
    { id: "#INV202491", name: "Portofolio Designer", date: "27/10/2025", status: "Selesai" },
    { id: "#INV202490", name: "Toko Online Jewelry", date: "28/10/2025", status: "Selesai" },
    { id: "#INV202491", name: "Portofolio Designer", date: "27/10/2025", status: "Selesai" },
    { id: "#INV202490", name: "Toko Online Jewelry", date: "28/10/2025", status: "Selesai" },
    { id: "#INV202491", name: "Portofolio Designer", date: "27/10/2025", status: "Selesai" },
    { id: "#INV202490", name: "Toko Online Jewelry", date: "28/10/2025", status: "Selesai" },
    { id: "#INV202491", name: "Portofolio Designer", date: "27/10/2025", status: "Selesai" },
  ];

  const displayedOrders = activeTab === "ongoing" ? ongoingOrders : completedOrders;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE2EF] via-[#F9FAFB] to-white text-gray-800 relative">
      {/* Tombol Kembali */}
      <button
        onClick={() => router.push("/home")}
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-900 font-semibold bg-white px-4 py-2 rounded-full shadow hover:bg-blue-100 transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>


      <div className="   max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#112D4E] mb-10 text-center">
          🛍️ Riwayat Pesanan
        </h1>

        {/* Tab Pilihan */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === "ongoing"
                ? "bg-blue-800 text-white shadow-lg"
                : "bg-white text-blue-800 border border-blue-800 hover:bg-blue-100"
              }`}
          >
            Sedang Diproses
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === "completed"
                ? "bg-blue-800 text-white shadow-lg"
                : "bg-white text-blue-800 border border-blue-800 hover:bg-blue-100"
              }`}
          >
            Selesai
          </button>
        </div>

        {/* Daftar Pesanan */}
        <div className=" flex flex-col gap-8">
          {displayedOrders.map((order, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/cake.png"
                  alt="Produk"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-xl text-[#112D4E]">
                    {order.name}
                  </h2>
                  <p className="text-gray-600">Order ID: {order.id}</p>
                  <p className="text-gray-600">
                    Tanggal: <span className="font-medium">{order.date}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-gray-700 flex items-center gap-1">
                  Status:
                  {order.status === "Selesai" ? (
                    <span className="font-semibold text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Selesai
                    </span>
                  ) : (
                    <span className="font-semibold text-yellow-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Diproses
                    </span>
                  )}
                </p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayedOrders.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Tidak ada pesanan di kategori ini.
          </p>
        )}
      </div>
    </div>
  );
}
