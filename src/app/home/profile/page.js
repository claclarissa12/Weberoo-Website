'use client';

import { Router, X } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function ProfileSection() {
  return (
    <div className="bg-white">
       <button
        onClick={() => Router.back()}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
        aria-label="Kembali"
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        
        {/* Profile Card */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture & Name */}
            <div className="flex flex-col items-center w-full md:w-1/4">
              <img
                src="/profile.png"
                alt="Profile Picture"
                className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-blue-800"
              />
              <h2 className="text-2xl font-semibold text-gray-800">Dewan Daru</h2>
              <p className="text-blue-800 font-medium text-sm">@dewandaru</p>
            </div>

            {/* User Info */}
            <div className="flex-1 w-full">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Informasi Akun</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-md">
                  <span className="text-gray-600 font-medium">Username</span>
                  <span className="text-gray-800 font-semibold">dewandaru</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-md">
                  <span className="text-gray-600 font-medium">Email</span>
                  <span className="text-gray-800 font-semibold">dewan.daru@gmail.com</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-md">
                  <span className="text-gray-600 font-medium">Phone Number</span>
                  <span className="text-gray-800 font-semibold">+62 1233-4***-5***</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat Pemesanan dan Status Pesanan */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Riwayat Pemesanan */}
          <div className="flex-1 bg-blue-50 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Riwayat Pemesanan</h3>
            <div className="space-y-6">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="border-gray-300 bg-white border rounded-lg shadow-md p-6 flex items-center gap-4">
                  <div>
                    <img
                      src="/c-clarissa.png"
                      className="object-contain w-50 h-auto"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Custom E-Commerce</h4>
                    <p className="text-gray-600">Price: <span className="font-medium">Rp. 599.900</span></p>
                    <button className="mt-2 bg-blue-800 text-white text-sm px-2 py-1 rounded-sm hover:bg-blue-300 transition">
                      Download
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-xl font-bold text-blue-800">Rp. 599.900</p>
                    <a href="">
                      <button className="mt-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition">
                        Rate
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Pesanan */}
          <div className="w-full md:w-1/3 bg-blue-50 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Status Pesanan</h3>
            <div className="space-y-4">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
                  <h4 className="text-lg font-semibold text-gray-800">Custom E-Commerce</h4>
                  <p className="text-gray-600 text-sm">Order ID: #INV2025110{idx+1}</p>
                  <p className="text-gray-600 text-sm">Tanggal: 01/11/2025</p>
                  <p className="text-gray-600 text-sm">
                    Status: <span className={`font-semibold ${idx % 2 === 0 ? 'text-blue-600' : 'text-yellow-500'}`}>{idx % 2 === 0 ? 'Selesai' : 'Diproses'}</span>
                  </p>
                  <p className="text-gray-600 text-sm">Total: <span className="font-semibold text-blue-800">Rp. 599.900</span></p>
                  <button className="mt-2 bg-blue-800 text-white px-3 py-1 rounded-lg hover:bg-blue-200 transition text-sm">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
