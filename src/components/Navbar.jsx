import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <nav className="bg-[#0a0a0a] px-6 py-3 flex items-center justify-between gap-6 border-b border-white/5">
        <Link to="/" className="shrink-0">
          <span className="text-2xl font-black text-white tracking-tight">
            DRON<span className="text-amber-400">EXP</span>
          </span>
        </Link>

        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Busca tu galería"
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </Link>
          <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-400 transition-colors">
            Ingresar
          </button>
        </div>
      </nav>

      {/* Sub nav */}
      <div className="bg-[#111] px-6 py-2.5 flex items-center gap-8 text-sm border-b border-white/5">
        <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium">Galerías</Link>
        <a href="https://wa.me/56927285919" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium">Contáctanos</a>
        <Link to="/cart" className="text-gray-400 hover:text-white transition-colors font-medium">Tu Carrito</Link>
      </div>
    </header>
  );
}
