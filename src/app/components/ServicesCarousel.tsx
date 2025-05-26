'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState } from 'react';

const services = [
  { title: "Зүү төөнүүр", img: "/images/service1.jpg" },
  { title: "Бумба тавих", img: "/images/service2.jpg" },
  { title: "Бариа засал", img: "/images/service3.jpg" },
  { title: "Гар заслын эмчилгээ", img: "/images/service4.jpg" },
  { title: "Соруулж цэвэрлэх эмчилгээ", img: "/images/service5.jpg" },
  { title: "Эмчилгээний цэгэн иллэг", img: "/images/service6.jpg" },
];

export default function ServicesSection() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00ff6a] tracking-wide font-sans">
          Бидний үйлчилгээ
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-t-xl transition duration-500"
                />
                <div className="p-5 text-center">
                  <h3
                    className={`text-2xl font-extrabold transition-all duration-500 tracking-tight ${
                      hoverIndex === i ? 'text-[#06b66b] scale-105' : 'text-[#333]'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
