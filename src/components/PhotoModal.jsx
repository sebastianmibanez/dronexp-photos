export default function PhotoModal({ photo, onClose, onAddToCart }) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-xl max-w-3xl w-full p-4 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl" onClick={onClose}>✕</button>
        <div className="relative">
          <img src={photo.urlPreview} alt={`Foto ${photo.id}`} className="w-full rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white/30 font-bold text-5xl rotate-[-25deg]">DRONEXP</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-white">${photo.precio.toLocaleString("es-CL")} CLP</span>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            onClick={() => onAddToCart(photo)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
