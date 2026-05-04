import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/evento/${event.slug}`} className="group block bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-400/30 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img src={event.portada} alt={event.nombre} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full">
          {event.totalFotos} fotos
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">{event.nombre}</h3>
        <p className="text-sm text-gray-500 mt-1">{event.lugar}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">{new Date(event.fecha).toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}</span>
          <span className="text-sm font-bold text-amber-400">${event.precioFoto.toLocaleString("es-CL")} c/u</span>
        </div>
      </div>
    </Link>
  );
}
