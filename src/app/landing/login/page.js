"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login berhasil (contoh)!");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Background dari file lokal */}
      <Image
        src="/galaxy.jpg"
        alt="Background Galaxy"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Card Login */}
      <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl p-10 rounded-2xl w-[90%] max-w-lg">
        <h1 className="text-center text-white text-2xl font-semibold mb-6">
          Welcome To Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/90 mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-white/90 mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 rounded-md bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between text-sm text-white/90">
            <Link href="#" className="hover:underline">
              Recovery Password
            </Link>
            <Link href="/landing/register" className="hover:underline">
              Create Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Garis pemisah */}
        <div className="flex items-center justify-center my-4 text-white/80">
          <span className="w-1/4 h-px bg-white/40"></span>
          <span className="mx-2 text-sm">or continue with</span>
          <span className="w-1/4 h-px bg-white/40"></span>
        </div>

        {/* Tombol Sosial Media */}
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



