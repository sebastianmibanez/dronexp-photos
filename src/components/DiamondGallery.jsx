import { useState, useEffect } from "react";

const photoSets = [
  [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=500&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1486218119243-13883505764c?w=400&h=500&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1605235186583-a8272b71f9a7?w=400&h=500&fit=crop",
  ],
];

export default function DiamondGallery() {
  const [indices, setIndices] = useState([0, 0, 0]);

  useEffect(() => {
    const timers = [
      setInterval(() => setIndices((prev) => [prev[0], prev[1], (prev[2] + 1) % photoSets[2].length]), 3000),
      setInterval(() => setIndices((prev) => [(prev[0] + 1) % photoSets[0].length, prev[1], prev[2]]), 4000),
      setInterval(() => setIndices((prev) => [prev[0], (prev[1] + 1) % photoSets[1].length, prev[2]]), 5000),
    ];
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 h-[300px] md:h-[400px]">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]"
          style={{ transform: `rotate(45deg)` }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl shadow-amber-400/10">
            <img
              src={photoSets[i][indices[i]]}
              alt=""
              className="w-[200%] h-[200%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
              style={{ transform: "rotate(-45deg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      ))}
    </div>
  );
}
