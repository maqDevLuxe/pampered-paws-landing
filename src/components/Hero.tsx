import { motion } from "framer-motion";
import heroPet from "@/assets/hero-pet.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPet}
          alt="Beautifully groomed golden retriever on luxury daybed"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-soft-blush"
            >
              Luxury Pet Spa & Resort
            </motion.p>
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
              Where Every Paw
              <br />
              <span className="italic text-gold-accent">Gets Pampered</span>
            </h1>
            <p className="mb-10 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80">
              An exclusive retreat for your beloved companions. World-class grooming,
              spa treatments, and luxury boarding — because they deserve nothing less.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="rounded-full bg-gold-accent px-8 py-4 font-body font-bold text-foreground transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                Reserve Their Stay
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-body font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-7 rounded-full border-2 border-primary-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-primary-foreground/60 mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
