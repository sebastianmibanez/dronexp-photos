import { events } from "../data/mockEvents";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero - estilo NiceTryPix */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background con overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-black z-10" />
        <img
          src="https://picsum.photos/seed/cycling-hero/1600/900"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Lado izquierdo */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
              <span className="text-white text-sm">↓</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Ingresa una selfie
            </h2>
            <p className="text-gray-300 text-lg">
              Encuentra tus fotos al instante
            </p>
          </div>

          {/* Centro - fotos inclinadas */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80">
              <img
                src="https://picsum.photos/seed/cyclist1/300/400"
                alt=""
                className="absolute left-0 top-4 w-40 h-52 object-cover rounded-lg -rotate-6 shadow-2xl border-2 border-gray-700"
              />
              <img
                src="https://picsum.photos/seed/cyclist2/300/400"
                alt=""
                className="absolute left-20 top-0 w-44 h-56 object-cover rounded-lg rotate-3 shadow-2xl border-2 border-gray-700 z-10"
              />
              <img
                src="https://picsum.photos/seed/cyclist3/300/400"
                alt=""
                className="absolute right-0 top-8 w-36 h-48 object-cover rounded-lg rotate-6 shadow-2xl border-2 border-gray-700"
              />
            </div>
          </div>

          {/* Lado derecho - texto vertical */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-6xl font-black text-white/80 tracking-tighter" style={{ writingMode: "vertical-rl" }}>
              FOTOS
            </span>
            <span className="text-4xl font-black text-gray-500 tracking-tighter mt-2" style={{ writingMode: "vertical-rl" }}>
              DISPONIBLES
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 border-t border-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-yellow-200 uppercase" style={{ fontFamily: "serif" }}>
            ¡Compra tus fotos!
          </h3>
          <div className="mt-6 space-y-2">
            <p className="text-white font-bold text-lg uppercase">Busca tu evento</p>
            <p className="text-gray-400">Ingresa tu número de corredor o tomate una "selfie"</p>
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="bg-black py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-black text-white uppercase leading-tight">
              ¿Tienes un evento<br />y requieres<br />cobertura<br />fotográfica?
            </h3>
            <p className="text-gray-400 mt-4 text-sm uppercase">
              Ponte en contacto<br />
              <a href="mailto:hola@dronexp.cl" className="text-gray-300 hover:text-white">hola@dronexp.cl</a>
            </p>
          </div>
        </div>
      </section>

      {/* Galerías recientes */}
      <section className="bg-gray-950 py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase">Galerías recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
