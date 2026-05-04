export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-center py-8 px-4 mt-auto">
      <p className="font-bold text-lg text-white">DRONEXP</p>
      <p className="text-gray-400 text-sm mt-1">Fotografía aérea y terrestre para eventos deportivos</p>
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
        <a href="https://www.instagram.com/dronexp.cl" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        <a href="https://wa.me/56927285919" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
        <a href="mailto:hola@dronexp.cl" className="hover:text-white">Email</a>
      </div>
      <p className="text-gray-600 text-xs mt-4">© 2026 Dronexp.cl</p>
    </footer>
  );
}
