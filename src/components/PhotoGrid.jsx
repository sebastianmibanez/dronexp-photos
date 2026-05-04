export default function PhotoGrid({ photos, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative group cursor-pointer rounded-lg overflow-hidden"
          onClick={() => onSelect(photo)}
        >
          <img
            src={photo.urlPreview}
            alt={`Foto ${photo.id}`}
            className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold text-xl opacity-60">DRONEXP</span>
          </div>
        </div>
      ))}
    </div>
  );
}
