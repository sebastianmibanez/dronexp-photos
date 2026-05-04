export const events = [
  {
    id: 1,
    slug: "clasica-virtual-bike-2026",
    nombre: "Clásica Virtual Bike 2026",
    fecha: "2026-05-21",
    lugar: "Santiago, Chile",
    portada: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=400&fit=crop",
    totalFotos: 342,
    precioFoto: 3000,
  },
  {
    id: 2,
    slug: "trail-running-cajon-maipo",
    nombre: "Trail Running Cajón del Maipo",
    fecha: "2026-04-12",
    lugar: "Cajón del Maipo, Chile",
    portada: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=400&fit=crop",
    totalFotos: 528,
    precioFoto: 3000,
  },
  {
    id: 3,
    slug: "enduro-bike-park-2026",
    nombre: "Enduro Bike Park 2026",
    fecha: "2026-03-30",
    lugar: "Nevados de Chillán",
    portada: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=400&fit=crop",
    totalFotos: 215,
    precioFoto: 3500,
  },
];

export const photos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  eventoId: 1,
  urlPreview: `https://images.unsplash.com/photo-${1517649763962 + i * 1000}?w=600&h=400&fit=crop&sig=${i}`,
  urlThumbnail: `https://images.unsplash.com/photo-${1517649763962 + i * 1000}?w=200&h=200&fit=crop&sig=${i}`,
  precio: 3000,
}));
