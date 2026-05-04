const ParticleField = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        const colors = ['hsl(190 100% 50%)', 'hsl(280 100% 65%)', 'hsl(220 100% 60%)'];
        const color = colors[i % 3];
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
              animation: `particle ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleField;
