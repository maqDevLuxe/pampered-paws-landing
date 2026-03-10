import SectionReveal from "./SectionReveal";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Jessica M.", pet: "Golden Retriever — Max", text: "I was so nervous leaving Max for the first time, but the webcam access and daily updates made me feel completely at ease. He came home happier than ever!", rating: 5 },
  { name: "David & Sarah K.", pet: "Persian Cat — Luna", text: "Luna is incredibly particular, and the team handled her perfectly. The aromatherapy treatment left her coat unbelievably soft. We're clients for life.", rating: 5 },
  { name: "Robert T.", pet: "French Bulldog — Biscuit", text: "The grooming process was so gentle. Biscuit usually hates bath time but he was calm and relaxed throughout. The photo at the end was the cherry on top!", rating: 5 },
];

const Reviews = () => (
  <section id="reviews" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionReveal>
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Testimonials
        </p>
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
          Relieved Pet Owner <span className="italic text-gold-accent">Reviews</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground mb-16">
          Don't just take our word for it — hear from our delighted pet parents.
        </p>
      </SectionReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((r, i) => (
          <SectionReveal key={r.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl bg-card p-8 shadow-soft transition-all duration-500 hover-glow h-full flex flex-col"
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-accent text-gold-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{r.text}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display font-bold text-foreground">{r.name}</p>
                <p className="font-body text-xs text-muted-foreground">{r.pet}</p>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
