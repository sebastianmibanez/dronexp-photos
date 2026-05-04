import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/evento/${event.slug}`} className="block bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-red-500 transition-all">
      <img src={event.portada} alt={event.nombre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-white">{event.nombre}</h3>
        <p className="text-sm text-gray-400 mt-1">{event.lugar} — {new Date(event.fecha).toLocaleDateString("es-CL")}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{event.totalFotos} fotos</span>
          <span className="text-sm font-semibold text-red-400">${event.precioFoto.toLocaleString("es-CL")} c/u</span>
        </div>
      </div>
    </Link>
  );
}
