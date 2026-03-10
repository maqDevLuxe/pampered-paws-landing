import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const team = [
  { name: "Dr. Emily Chen", role: "Lead Behaviorist", exp: "15 years", color: "bg-soft-blush" },
  { name: "Marcus Rivera", role: "Head Groomer", exp: "12 years", color: "bg-accent" },
  { name: "Sophie Laurent", role: "Spa Director", exp: "10 years", color: "bg-warm-cream" },
  { name: "Dr. James Park", role: "Veterinarian", exp: "18 years", color: "bg-soft-blush" },
];

const CareTeam = () => (
  <section id="team" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Expert Hands
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          The Care <span className="italic text-gold-accent">Team</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Certified pet behaviorists, master groomers, and veterinarians — all under one roof.
        </p>
      </SectionReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t, i) => (
          <SectionReveal key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl bg-card p-8 text-center shadow-soft transition-all duration-500 hover-glow"
            >
              <div className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${t.color}`}>
                <span className="font-display text-3xl font-bold text-foreground">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{t.name}</h3>
              <p className="mt-1 font-body text-sm font-semibold text-gold-accent">{t.role}</p>
              <p className="mt-2 font-body text-xs text-muted-foreground">{t.exp} experience</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CareTeam;
