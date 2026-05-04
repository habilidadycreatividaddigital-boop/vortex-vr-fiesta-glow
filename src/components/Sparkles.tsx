import { useMemo } from "react";

const Sparkles = ({ count = 60 }: { count?: number }) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      const colors = [
        'hsl(190 100% 70%)',
        'hsl(280 100% 75%)',
        'hsl(220 100% 70%)',
        'hsl(320 100% 75%)',
        'hsl(0 0% 100%)',
      ];
      const color = colors[i % colors.length];
      return { size, top, left, duration, delay, color, key: i };
    });
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {sparkles.map((s) => (
        <span
          key={s.key}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            background: s.color,
            boxShadow: `0 0 ${s.size * 4}px ${s.color}, 0 0 ${s.size * 8}px ${s.color}`,
            animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
