export default function Footer() {
  return (
<footer className="bg-[#0F172A] text-gray-300 py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

   

    {/* Холбоо барих */}
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-white mb-2">Холбоо барих</h4>
      <p>📞 9999-9999</p>
      <p>📧 info@emneleg.mn</p>
      <p>📍 УБ, БЗД, 13-р хороо</p>
    </div>

    {/* Сошиал - мөрөөр */}
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-white mb-2">Сошиал</h4>
      <div className="flex items-center gap-4 text-sm">
        <a href="#" className="hover:text-white transition">Facebook</a>
        <a href="#" className="hover:text-white transition">Instagram</a>
        <a href="#" className="hover:text-white transition">YouTube</a>
      </div>
    </div>
  </div>

  {/* Bottom copyright */}
  <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Уламжлалт Эмнэлэг — Бүх эрх хуулиар хамгаалагдсан.
  </div>
</footer>

  );
}
