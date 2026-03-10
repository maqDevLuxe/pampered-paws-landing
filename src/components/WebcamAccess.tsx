import SectionReveal from "./SectionReveal";
import { Camera, MonitorPlay, Smartphone, Shield } from "lucide-react";

const features = [
  { icon: MonitorPlay, title: "HD Live Stream", desc: "Crystal-clear video from every suite" },
  { icon: Smartphone, title: "Mobile App", desc: "Watch your pet anytime, anywhere" },
  { icon: Camera, title: "Multiple Angles", desc: "Suite, play area, and dining views" },
  { icon: Shield, title: "Private & Secure", desc: "Encrypted, password-protected feeds" },
];

const WebcamAccess = () => (
  <section className="py-24 bg-warm-cream">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Peace of Mind
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          24/7 Webcam <span className="italic text-gold-accent">Access</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Never miss a moment. Watch your furry friend enjoying their stay in real-time.
        </p>
      </SectionReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <SectionReveal key={f.title} delay={i * 0.1}>
            <div className="group rounded-2xl bg-card p-8 text-center transition-all duration-500 hover-glow hover:scale-[1.03]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-soft-blush group-hover:bg-accent transition-colors duration-300">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.3}>
        <div className="mt-16 rounded-3xl bg-card overflow-hidden shadow-elevated">
          <div className="aspect-video bg-foreground/5 flex items-center justify-center relative">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-soft-blush animate-soft-pulse">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <p className="font-display text-xl font-semibold text-foreground">Live Feed Preview</p>
              <p className="mt-2 font-body text-sm text-muted-foreground">Available to booked guests</p>
            </div>
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive animate-pulse" />
              <span className="font-body text-xs font-bold text-muted-foreground uppercase">Live</span>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default WebcamAccess;
