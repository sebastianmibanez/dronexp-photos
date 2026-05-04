import { useParams } from "react-router-dom";
import { useState } from "react";
import { events, photos } from "../data/mockEvents";
import PhotoGrid from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";

export default function Evento() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!event) {
    return <div className="p-8 text-center text-xl text-white">Evento no encontrado</div>;
  }

  const handleAddToCart = (photo) => {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    if (!cart.find((p) => p.id === photo.id)) {
      cart.push(photo);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
    setSelectedPhoto(null);
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <img src={event.portada} alt={event.nombre} className="w-full h-64 object-cover rounded-xl mb-6" />
        <h1 className="text-3xl font-bold text-white">{event.nombre}</h1>
        <p className="text-gray-400 mt-1">{event.lugar} — {new Date(event.fecha).toLocaleDateString("es-CL")}</p>
        <div className="flex gap-4 mt-4 mb-8">
          <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{event.totalFotos} fotos</span>
          <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full">${event.precioFoto.toLocaleString("es-CL")} c/u</span>
        </div>

        <PhotoGrid photos={photos} onSelect={setSelectedPhoto} />
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}
