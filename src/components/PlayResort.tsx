import { motion } from "framer-motion";
import playResort from "@/assets/play-resort.jpg";

const PlayResort = () => (
  <section className="relative h-[70vh] overflow-hidden">
    <motion.img
      src={playResort}
      alt="Aerial view of luxury pet resort with pools and play areas"
      className="h-full w-full object-cover"
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-foreground/30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center px-6"
      >
        <h2 className="font-display text-4xl font-bold text-primary-foreground md:text-6xl mb-4">
          5 Acres of Pure <span className="italic text-gold-accent">Paradise</span>
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Swimming pools, agility courses, shaded gardens, and supervised play areas for endless fun.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PlayResort;
