'use client';

import { motion } from 'framer-motion';
import HeroHome from './component/herohome';
import DesignHome from './component/designhome';
import ProfileSection from './profile/page';
import Footer from './component/footerhome';
import Steps from './component/step';
import Services from './component/services';
import Portfolio from './component/fortofolio';
import Testimonial from './component/testimonial';
import Contact from './component/contact';
import Paket from './component/paket';



import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-white font-sans overflow-hidden">
      
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-[#112D4E] shadow-lg z-50"
      >
        <div className="border-b-2 border-white px-10">
          <div className="flex flex-wrap items-center justify-between px-4 md:px-8 md:-mt-10 -mb-10">
            <img src="/Weberoo.png" alt="Logo" className="w-16 sm:w-24 md:w-32 lg:w-40 h-auto" />
            <div className='flex gap-8'>

            <Link href={`/home/order`}>
              <img src="/history.png" alt="Profile" className="w-6 sm:w-8 md:w-8 lg:w-10 h-auto" />
            </Link>
            <Link href={`/home/profile`}>
              <img src="/profile.png" alt="Profile" className="w-6 sm:w-8 md:w-8 lg:w-10 h-auto" />
            </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Konten Halaman */}
      <main className="pt-20 md:pt-28 ">
        <section id="hero" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <HeroHome />
        </section>

        <Steps />
        <Services />
        <section id="design" className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 text-gray-800">
          <DesignHome />
        </section>
        <Paket />
        <Portfolio />
        <Testimonial />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
