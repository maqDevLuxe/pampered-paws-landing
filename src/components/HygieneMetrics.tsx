import SectionReveal from "./SectionReveal";
import { Droplets, Sun, Clock, ThermometerSun } from "lucide-react";

const metrics = [
  { icon: Droplets, value: "6x", label: "Daily Sanitization", desc: "Hospital-grade cleaning protocols" },
  { icon: Sun, value: "4hrs", label: "Outdoor Playtime", desc: "Supervised exercise in resort grounds" },
  { icon: Clock, value: "24/7", label: "Health Monitoring", desc: "Continuous vital signs tracking" },
  { icon: ThermometerSun, value: "72°F", label: "Climate Controlled", desc: "Optimal comfort at all times" },
];

const HygieneMetrics = () => (
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Health & Safety
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-16">
          Hygiene & Playtime <span className="italic text-gold-accent">Metrics</span>
        </h2>
      </SectionReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <SectionReveal key={m.label} delay={i * 0.1}>
            <div className="group text-center rounded-2xl gradient-blush p-10 transition-all duration-500 hover-glow hover:scale-[1.03]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-soft">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-display text-4xl font-bold text-foreground">{m.value}</p>
              <p className="mt-2 font-body text-sm font-bold text-foreground">{m.label}</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">{m.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HygieneMetrics;
