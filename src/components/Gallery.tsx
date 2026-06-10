import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gamingRoom from "@/assets/vortex-gaming-room.png.asset.json";
import vrKids from "@/assets/vortex-vr-kids.png.asset.json";
import pingpongVr from "@/assets/vortex-pingpong-vr.png.asset.json";
import basketball from "@/assets/vortex-basketball.png.asset.json";
import tetris from "@/assets/vortex-tetris.png.asset.json";
import birthdayStage from "@/assets/vortex-birthday-stage.jpg.asset.json";
import partyGroup from "@/assets/vortex-party-group.jpg.asset.json";

type MediaItem = {
  type: "image";
  src: string;
  alt: string;
};

const items: MediaItem[] = [
  { type: "image", src: gamingRoom.url, alt: "Niños jugando videojuegos en la sala principal de Vortex" },
  { type: "image", src: vrKids.url, alt: "Niños disfrutando una experiencia de realidad virtual en Vortex" },
  { type: "image", src: pingpongVr.url, alt: "Área de ping pong y zona VR durante una fiesta en Vortex" },
  { type: "image", src: basketball.url, alt: "Canasta arcade para niños en Vortex VR Place" },
  { type: "image", src: tetris.url, alt: "Juego gigante tipo Tetris en una fiesta infantil en Vortex" },
  { type: "image", src: birthdayStage.url, alt: "Montaje de cumpleaños con decoración especial en Vortex" },
  { type: "image", src: partyGroup.url, alt: "Grupo celebrando una fiesta en Vortex VR Place" },
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
            Conoce el ambiente real de nuestras fiestas, juegos y experiencias dentro de Vortex.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl glass-card neon-border-hover ${
                i === 0 ? "md:col-span-2 md:row-span-2" : i === 5 || i === 6 ? "md:col-span-2" : ""
              }`}
              aria-label={`Ver ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-70 group-hover:opacity-35 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

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
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 p-3 rounded-full glass-card hover:border-neon-cyan transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-neon-cyan" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 p-3 rounded-full glass-card hover:border-neon-cyan transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-neon-cyan" />
          </button>

          <div
            className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[open].src}
              alt={items[open].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-neon"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
