'use client';

import { motion } from 'framer-motion';
import HeroSection from './components/hero';
import AboutSection from './components/about';
import StepsSection from './components/steps';
import AdvantagesSection from './components/advantages';
import DesignSection from './components/design';
import PriceSection from './components/price';
import FooterSection from './components/footer';


export default function Landing() {
    return (
        <div className="min-h-screen bg-[#112D4E] text-white font-sans overflow-hidden">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full bg-[#112D4E] shadow-lg z-50"
            >
                <div className="flex items-center justify-between max-w-8xl mx-auto px-6 border-b">
                    <img src="/logo.png" alt="Logo" className="w-32 mt-5" />
                    <ul className="flex gap-6 text-lg text-[#F9F7F7] font-semibold">
                        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#service" className="hover:text-blue-400 transition">Service</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                        <li><a href="#blog" className="hover:text-blue-400 transition">Blog</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>
            </motion.nav>

            {/* Panggil tiap section */}
            <HeroSection />
            <AboutSection />
            <StepsSection />
            <AdvantagesSection />
            <DesignSection />
            <PriceSection />
            <FooterSection />
        </div>
    );
}
