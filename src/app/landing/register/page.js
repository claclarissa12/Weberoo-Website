'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Register berhasil (contoh)!");
  };

  return (
    <div className="relative  min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Background lokal */}
      <Image
        src="/galaxy.jpg" // ambil dari folder public
        alt="Background Galaxy"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Form register */}
      <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl p-10 rounded-2xl w-[90%] max-w-lg">
        <h1 className="text-center text-white text-2xl font-semibold mb-6">
          Welcome To New Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Full name"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
              className="w-1/2 px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              className="w-1/2 px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-right text-sm text-white/90">
            Already have account?{" "}
            <Link href="/landing/login" className="text-blue-300 hover:underline">
              Login
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center my-4 text-white/80">
          <span className="w-1/4 h-px bg-white/40"></span>
          <span className="mx-2 text-sm">or continue with</span>
          <span className="w-1/4 h-px bg-white/40"></span>
        </div>

        <div className="flex justify-center gap-6">
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition">
            <Image
              src="/google.jpg"
              alt="Google"
              width={30}
              height={30}
            />
          </button>
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition">
            <Image
              src="/facebook.jpg"
              alt="Facebook"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

 