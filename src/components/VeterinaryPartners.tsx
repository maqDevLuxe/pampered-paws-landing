import SectionReveal from "./SectionReveal";
import { Shield, Heart, Award, Stethoscope } from "lucide-react";

const partners = [
  { icon: Stethoscope, name: "Dr. Sarah Mitchell", title: "Chief Veterinarian", desc: "20+ years of premium pet care experience" },
  { icon: Shield, name: "PetSafe Alliance", title: "Safety Certified", desc: "Highest standards of pet safety protocols" },
  { icon: Heart, name: "Wellness First Clinic", title: "Wellness Partner", desc: "Holistic health monitoring for every guest" },
  { icon: Award, name: "AKC Certified", title: "Gold Standard", desc: "American Kennel Club recognized facility" },
];

const VeterinaryPartners = () => (
  <section className="py-24 bg-warm-cream">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Trusted Care
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          Our Veterinary Partners
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Every stay is supervised by certified veterinary professionals ensuring your pet's health and happiness.
        </p>
      </SectionReveal>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.1}>
            <div className="group rounded-2xl bg-card p-8 text-center transition-all duration-500 hover-glow hover:scale-[1.02]">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-soft-blush transition-colors duration-300 group-hover:bg-accent">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 font-body text-sm font-semibold text-gold-accent">{p.title}</p>
              <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VeterinaryPartners;
