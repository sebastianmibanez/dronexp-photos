import { events } from "../data/mockEvents";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <h1 className="text-5xl font-bold text-white">DRONEXP</h1>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          Fotografía aérea y terrestre de eventos deportivos.
          Encontrá tus fotos y descargalas en alta resolución.
        </p>
      </section>

      {/* Galerías */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Galerías recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-900 py-16 px-4">
        <h3 className="text-2xl font-bold text-white text-center mb-10">¿Cómo funciona?</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
          <div className="flex-1 text-center">
            <div className="text-4xl mb-3">📸</div>
            <h4 className="font-bold text-white">1. Buscá tu evento</h4>
            <p className="text-sm text-gray-400 mt-1">Elegí la carrera o evento en el que participaste</p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-4xl mb-3">🔍</div>
            <h4 className="font-bold text-white">2. Encontrá tus fotos</h4>
            <p className="text-sm text-gray-400 mt-1">Navegá la galería y seleccioná las que quieras</p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-4xl mb-3">⬇️</div>
            <h4 className="font-bold text-white">3. Descargá en HD</h4>
            <p className="text-sm text-gray-400 mt-1">Pagá y recibí el link de descarga al instante</p>
          </div>
        </div>
      </section>
    </div>
  );
}
