import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header>
      <nav className="bg-black px-6 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="text-xl font-bold text-white tracking-wider shrink-0">
          DRONEXP
        </Link>
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Busca tu galería"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-full px-5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </Link>
        </div>
      </nav>
      <div className="bg-gray-950 border-t border-b border-gray-800 px-6 py-2 flex gap-6 text-sm">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors">Galerías</Link>
        <a href="https://wa.me/56927285919" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Contáctanos</a>
        <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Tu Carrito</Link>
      </div>
    </header>
  );
}
