import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "5 Signs Your Pet Needs a Spa Day", date: "Mar 5, 2026", category: "Wellness", read: "4 min read" },
  { title: "Aromatherapy for Anxious Pets", date: "Feb 28, 2026", category: "Spa Care", read: "6 min read" },
  { title: "The Benefits of Hydrotherapy", date: "Feb 20, 2026", category: "Health", read: "5 min read" },
];

const WellnessBlog = () => (
  <section id="blog" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Insights
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          Pet Wellness <span className="italic text-gold-accent">Blog</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Expert tips and guides from our care team to keep your pet happy and healthy.
        </p>
      </SectionReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl bg-card overflow-hidden shadow-soft transition-all duration-500 hover-glow"
            >
              <div className="h-48 gradient-blush flex items-center justify-center">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">{p.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-body text-xs">{p.date} · {p.read}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                  Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WellnessBlog;
