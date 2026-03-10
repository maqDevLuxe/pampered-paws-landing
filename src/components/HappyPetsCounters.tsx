import { useEffect, useRef, useState } from "react";
import SectionReveal from "./SectionReveal";

const counters = [
  { value: 12500, suffix: "+", label: "Happy Pets Boarded" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 45, suffix: "+", label: "Expert Staff" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-5xl font-bold text-foreground md:text-6xl">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const HappyPetsCounters = () => (
  <section className="py-24 gradient-blush">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {counters.map((c, i) => (
          <SectionReveal key={c.label} delay={i * 0.1}>
            <AnimatedCounter value={c.value} suffix={c.suffix} />
            <p className="mt-3 font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider">{c.label}</p>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HappyPetsCounters;
