import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

const items: MediaItem[] = [
  { type: "image", src: g1, alt: "Niños con cascos VR riendo en Vortex" },
  { type: "image", src: g2, alt: "Sala de arcade y videojuegos" },
  { type: "image", src: g3, alt: "Pastel de cumpleaños neón" },
  { type: "image", src: g4, alt: "Niño celebrando con casco VR" },
  { type: "image", src: g5, alt: "Simulador de carreras con luces neón" },
  { type: "image", src: g6, alt: "Interior del lounge gamer" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const next = () => setOpen((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  return (
    <section id="galeria" className="relative py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-cyan font-display tracking-widest text-sm">GALERÍA</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">
            Momentos <span className="text-gradient-neon">épicos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mira lo que viven los niños en cada fiesta Vortex.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl glass-card neon-border-hover aspect-square ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""
              }`}
              aria-label={`Ver ${item.alt}`}
            >
              <img
                src={item.type === "image" ? item.src : item.poster || ""}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-gradient-neon shadow-neon animate-pulse-glow">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 p-3 rounded-full glass-card hover:border-neon-cyan transition"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-neon-cyan" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 p-3 rounded-full glass-card hover:border-neon-cyan transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-neon-cyan" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 p-3 rounded-full glass-card hover:border-neon-cyan transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-neon-cyan" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {items[open].type === "image" ? (
              <img
                src={items[open].src}
                alt={items[open].alt}
                className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-neon"
              />
            ) : (
              <video
                src={items[open].src}
                poster={items[open].poster}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-2xl shadow-neon"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
