// Seeded PRNG so star positions are identical on the server and on every build.
function seeded(seed: number) {
  let s = seed;
  return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
}

const rand = seeded(1149);
const stars = Array.from({ length: 18 }, () => ({
  top: rand() * 100,
  left: rand() * 100,
  size: rand() < 0.3 ? 2.5 : 1.75,
  duration: 4 + rand() * 5,
  delay: -rand() * 9,
}));

/** A handful of brighter stars that slowly fade in and out over the static star field. */
export function Twinkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration.toFixed(2)}s`,
            animationDelay: `${star.delay.toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
