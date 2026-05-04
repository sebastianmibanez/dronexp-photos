export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-xl font-black text-white">DRON<span className="text-amber-400">EXP</span></span>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Fotografía aérea y terrestre para eventos deportivos. Capturamos la acción desde todos los ángulos.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">Galerías</a></li>
            <li><a href="/cart" className="hover:text-white transition-colors">Tu Carrito</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="https://www.instagram.com/dronexp.cl" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://wa.me/56927285919" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="mailto:hola@dronexp.cl" className="hover:text-white transition-colors">hola@dronexp.cl</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-600">
        © 2026 Dronexp.cl — Todos los derechos reservados
      </div>
    </footer>
  );
}
