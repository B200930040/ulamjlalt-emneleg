'use client';

import  {motion } from "framer-motion";
import Header from "@/app/components/Header";
import ServicesCarousel from "@/app/components/ServicesCarousel";
import AboutVideoSection from "@/app/components/AboutVideoSection";
import TestimonialsSlider from "@/app/components/TestimonialsSlider";
import FacebookTestimonial from "@/app/components/FacebookTestimonial";
import Footer from "@/app/components/Footer";

 function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/nuruu.jpg')" }}
    >
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Box */}
      <motion.div
        className="relative z-10 text-center bg-white/10 backdrop-blur-xl p-10 md:p-20 rounded-3xl shadow-2xl max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
<motion.h1
  className="absolute bottom-10 right-10 text-[6vw] md:text-[5vw] font-extrabold text-[#00FF88] drop-shadow-[0_4px_20px_rgba(0,255,136,0.7)] tracking-wide leading-tight font-serif text-right"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  Уламжлалт<br />Эмнэлэг
</motion.h1>



        <motion.p
          className="mt-6 text-2xl md:text-3xl text-white font-medium drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Эрүүл мэндийн уламжлалт аргаар таныг эмчилнэ
        </motion.p>

        <motion.a
          href="#services"
          className="mt-10 inline-block px-10 py-4 bg-gradient-to-r from-[#22ff55] to-[#128025] text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Цаг захиалах
        </motion.a>
      </motion.div>
    </section>
  );
}



export default function Home() {
  return (
    <main className="bg-white text-gray-800 flex flex-col gap-y-10">
      <Header />
      <HeroSection />
      <ServicesCarousel />
      <AboutVideoSection />
      <FacebookTestimonial />
      <TestimonialsSlider />
      <Footer />
    </main>
  );
}
