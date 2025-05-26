'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  {
    id: 1,
    url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560",
    title: "Facebook Видео 1",
  },
  {
    id: 2,
    url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560",
    title: "Facebook Видео 2",
  },
  {
    id: 3,
    url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560",
    title: "Facebook Видео 3",
  },
];

export default function AboutVideoSection() {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  }
  function next() {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  }

  return (
    <section id="about" className="py-20 bg-white text-center max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-extrabold mb-8 text-[#222] tracking-wide font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Бидний тухай
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto mb-12 text-lg text-gray-700 font-medium leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Манай уламжлалт эмнэлэг нь олон жилийн туршлагатай эмч, мэргэжилтнүүдтэй бөгөөд
        эрүүл мэндийн олон төрлийн уламжлалт эмчилгээ хийж байна.
      </motion.p>

      <div className="relative flex items-center justify-center space-x-6">
        <button
          onClick={prev}
          className="absolute left-0 z-20 bg-[#A8D5BA] text-white p-3 rounded-full hover:bg-[#8CC0A4] transition"
          aria-label="Previous Video"
        >
          ‹
        </button>

        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-lg">
          <AnimatePresence initial={false} mode="wait">
            <motion.iframe
              key={videos[current].id}
              src={videos[current].url}
              title={videos[current].title}
              className="w-full h-full rounded-2xl"
              allowFullScreen
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              frameBorder="0"
            />
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-20 bg-[#A8D5BA] text-white p-3 rounded-full hover:bg-[#8CC0A4] transition"
          aria-label="Next Video"
        >
          ›
        </button>
      </div>

      <motion.div
        className="mt-8 flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {videos.map((video, idx) => (
          <button
            key={video.id}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-12 rounded-full border-2 ${
              current === idx
                ? "border-[#22ff55] bg-[#22ff55]/40"
                : "border-gray-300 bg-transparent"
            } transition`}
            aria-label={`Show video ${idx + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
