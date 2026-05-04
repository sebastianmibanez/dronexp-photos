export const events = [
  {
    id: 1,
    slug: "clasica-virtual-bike-2026",
    nombre: "Clásica Virtual Bike 2026",
    fecha: "2026-05-21",
    lugar: "Santiago, Chile",
    portada: "https://picsum.photos/seed/bike1/800/400",
    totalFotos: 342,
    precioFoto: 3000,
  },
  {
    id: 2,
    slug: "trail-running-cajon-maipo",
    nombre: "Trail Running Cajón del Maipo",
    fecha: "2026-04-12",
    lugar: "Cajón del Maipo, Chile",
    portada: "https://picsum.photos/seed/trail1/800/400",
    totalFotos: 528,
    precioFoto: 3000,
  },
  {
    id: 3,
    slug: "enduro-bike-park-2026",
    nombre: "Enduro Bike Park 2026",
    fecha: "2026-03-30",
    lugar: "Nevados de Chillán",
    portada: "https://picsum.photos/seed/enduro1/800/400",
    totalFotos: 215,
    precioFoto: 3500,
  },
];

export const photos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  eventoId: 1,
  urlPreview: `https://picsum.photos/seed/photo${i + 1}/600/400`,
  urlThumbnail: `https://picsum.photos/seed/photo${i + 1}/200/200`,
  precio: 3000,
}));
