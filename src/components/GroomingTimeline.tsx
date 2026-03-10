import SectionReveal from "./SectionReveal";
import groomingImg from "@/assets/grooming.jpg";
import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Warm Welcome", desc: "A calming check-in with treats and a temperament assessment" },
  { step: "02", title: "Luxe Bath & Soak", desc: "Organic shampoo and conditioner tailored to coat type" },
  { step: "03", title: "Precision Grooming", desc: "Breed-specific styling by our certified master groomers" },
  { step: "04", title: "Spa Finishing", desc: "Aromatherapy spritz, bow or bandana, and photo session" },
];

const GroomingTimeline = () => (
  <section id="grooming" className="py-24 bg-warm-cream">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionReveal>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              The Experience
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-12">
              Our Grooming <span className="italic text-gold-accent">Process</span>
            </h2>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            {steps.map((s, i) => (
              <SectionReveal key={s.step} delay={i * 0.15}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-soft">
                    {s.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.2}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl shadow-elevated">
            <img src={groomingImg} alt="Professional grooming a poodle" className="w-full object-cover" />
          </motion.div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default GroomingTimeline;
