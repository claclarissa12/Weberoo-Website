'use client';

import { motion } from 'framer-motion';
import HeroSection from './components/hero';
import AboutSection from './components/about';
import StepsSection from './components/steps';
import AdvantagesSection from './components/advantages';
import DesignSection from './components/design';
import PriceSection from './components/price';
import FooterSection from './components/footer';
import KonsultasiSection from './components/whatsapp-button';   
import TestimoniSection from './components/testi';   


export default function Landing() {
    return (
        <div className="min-h-screen text-white font-sans overflow-hidden ">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className=" top-0 w-full bg-[#112D4E] shadow-lg z-50">
                <div className="border-b-2 border-white ">

                <div className="flex items-center justify-between px-8 -mt-10 -mb-8">
                    <img src="/Weberoo.png" alt="Logo" className="w-40  " />

                    <ul className="flex items-center gap-10 text-base text-[#F9F7F7] font-semibold ">
                        <li><a href="#hero" className="hover:text-blue-400 transition">Hero</a></li>
                        <li><a href="#service" className="hover:text-blue-400 transition">Service</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                        <li><a href="#price" className="hover:text-blue-400 transition">Price</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>
                </div>
            </motion.nav>

            {/* Panggil tiap section */}
            <HeroSection />
            <AboutSection />
            <StepsSection />
            <AdvantagesSection />
            <DesignSection />
            <PriceSection />
            <TestimoniSection />
            <KonsultasiSection />
            <FooterSection />
        </div>



    );
}