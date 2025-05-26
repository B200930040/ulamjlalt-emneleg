"use client";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    name: "Батbold",
    text: "Эмчилгээ үнэхээр үр дүнтэй байлаа!",
  },
  {
    name: "Сараа",
    text: "Бумба тавих үйлчилгээ маш сайн байсан.",
  },
];

export default function TestimonialsSlider() {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Үйлчлүүлэгчдийн сэтгэгдэл</h2>
      <div className="max-w-xl mx-auto"> {/* Гол контентийг багасгалаа */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          swipeable
          emulateTouch
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto"
              style={{ minHeight: '150px' }} // Өндөрийг тогтвортой байлгах
            >
              <p className="text-lg italic mb-4 text-gray-800">“{item.text}”</p>
              <p className="font-semibold text-[#2E7D32]">{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
