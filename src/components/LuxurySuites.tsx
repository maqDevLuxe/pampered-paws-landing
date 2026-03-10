import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import luxurySuite from "@/assets/luxury-suite.jpg";
import { Crown, Wifi, Camera, Utensils } from "lucide-react";

const amenities = [
  { icon: Crown, label: "Plush Orthopaedic Beds" },
  { icon: Wifi, label: "In-Suite Smart TV" },
  { icon: Camera, label: "24/7 Webcam Access" },
  { icon: Utensils, label: "Gourmet Treat Bar" },
];

const suites = [
  { name: "The Royal Suite", price: "$120", size: "400 sq ft", desc: "Private garden, king-size bed, personal butler" },
  { name: "The Garden Suite", price: "$85", size: "280 sq ft", desc: "Garden view, premium bedding, play area" },
  { name: "The Cozy Retreat", price: "$60", size: "180 sq ft", desc: "Warm & intimate, perfect for small breeds" },
];

const LuxurySuites = () => (
  <section id="suites" className="py-24 bg-warm-cream">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Premium Boarding
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          Luxury Suite <span className="italic text-gold-accent">Previews</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Each suite is designed to feel like a five-star hotel room, complete with premium amenities.
        </p>
      </SectionReveal>

      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <SectionReveal>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl shadow-elevated">
            <img src={luxurySuite} alt="Luxury pet suite interior" className="w-full object-cover" />
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 text-center">
                <a.icon className="h-5 w-5 text-gold-accent" />
                <span className="font-body text-xs font-medium text-muted-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className="space-y-6">
          {suites.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.1}>
              <div className="group rounded-2xl bg-card p-8 transition-all duration-500 hover-glow hover:scale-[1.01]">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                  <span className="font-display text-2xl font-bold text-gold-accent">{s.price}<span className="text-sm font-body text-muted-foreground">/night</span></span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-2">{s.size} · {s.desc}</p>
                <a href="#book" className="inline-block mt-3 font-body text-sm font-semibold text-primary transition-colors hover:text-gold-accent">
                  Reserve Now →
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LuxurySuites;
