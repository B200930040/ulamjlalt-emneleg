'use client';


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll lock on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#2E7D32] cursor-pointer select-none">
          Уламжлалт Эмнэлэг
        </div>
      

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
          {['home', 'about', 'services', 'feedback', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative group px-3 py-2 rounded-md hover:text-[#2E7D32] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            >
              {/* Монгол хэл дээр */}
              {{
                home: 'Нүүр',
                about: 'Бидний тухай',
                services: 'Үйлчилгээ',
                feedback: 'Сэтгэгдэл',
                contact: 'Холбоо барих',
              }[section]}
              {/* Underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#2E7D32] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Цэс хаах' : 'Цэс нээх'}
            className="text-gray-700 hover:text-[#2E7D32] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] rounded"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-6 space-y-4 font-semibold text-gray-700">
          {['home', 'about', 'services', 'feedback', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-2 rounded-md hover:bg-[#E6F4EA] hover:text-[#2E7D32] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            >
              {{
                home: 'Нүүр',
                about: 'Бидний тухай',
                services: 'Үйлчилгээ',
                feedback: 'Сэтгэгдэл',
                contact: 'Холбоо барих',
              }[section]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
