import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import spaTreatment from "@/assets/spa-treatment.jpg";
import { Sparkles, Droplets, Wind, Flower2 } from "lucide-react";

const treatments = [
  { icon: Sparkles, name: "Aromatherapy", desc: "Calming lavender & chamomile sessions tailored to your pet's temperament" },
  { icon: Droplets, name: "Mineral Mud Bath", desc: "Detoxifying Dead Sea mineral wraps for a silky, healthy coat" },
  { icon: Wind, name: "Pawdicure & Massage", desc: "Deep tissue relaxation with organic paw balm treatments" },
  { icon: Flower2, name: "Herbal Coat Treatment", desc: "Nourishing botanical blends for a lustrous, show-ready coat" },
];

const SpaTreatments = () => (
  <section id="services" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <SectionReveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-elevated"
          >
            <img src={spaTreatment} alt="Cat receiving luxury aromatherapy spa treatment" className="h-full w-full object-cover" />
          </motion.div>
        </SectionReveal>

        <div>
          <SectionReveal>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Indulgent Treatments
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-6">
              Spa Experiences <span className="italic text-gold-accent">They'll Love</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              Our signature treatments are crafted by certified pet wellness experts using only
              organic, pet-safe ingredients.
            </p>
          </SectionReveal>

          <div className="space-y-6">
            {treatments.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="group flex gap-5 rounded-2xl bg-card p-5 transition-all duration-500 hover-glow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft-blush transition-colors group-hover:bg-accent">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{t.name}</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SpaTreatments;
