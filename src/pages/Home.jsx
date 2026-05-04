import { events } from "../data/mockEvents";
import EventCard from "../components/EventCard";
import DiamondGallery from "../components/DiamondGallery";

export default function Home() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      {/* Hero con rombos */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Tus mejores momentos,<br />
              <span className="text-amber-400">capturados desde el aire</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Encontrá las fotos de tu carrera, compralas en alta resolución y reviví la emoción.
            </p>
          </div>

          {/* 3 Rombos con fotos rotativas */}
          <DiamondGallery />

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <a href="#galerias" className="bg-amber-400 text-black font-bold px-8 py-4 rounded-full text-center hover:bg-amber-300 transition-colors">
              Ver galerías
            </a>
            <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors">
              Buscar con selfie
            </button>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Busca tu evento</h3>
              <p className="text-gray-500 text-sm mt-2">Encuentra la carrera o evento en el que participaste</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Elige tus fotos</h3>
              <p className="text-gray-500 text-sm mt-2">Navega la galería o usa tu selfie para encontrarlas al instante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Descarga en HD</h3>
              <p className="text-gray-500 text-sm mt-2">Paga y recibe el link de descarga al instante en tu email</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerías recientes */}
      <section id="galerias" className="border-t border-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Galerías recientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA cobertura */}
      <section className="border-t border-white/5 py-20 px-6 bg-gradient-to-b from-[#0d0d0d] to-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            ¿Tienes un evento?
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Ofrecemos cobertura fotográfica aérea y terrestre para carreras, competencias y eventos deportivos.
          </p>
          <a
            href="https://wa.me/56927285919"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
