import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Services", "Suites", "Grooming", "Team", "Blog", "Reviews"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Pampered<span className="text-gold-accent">Paws</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Book a Suite
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/95 backdrop-blur-md px-6 pb-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-muted-foreground border-b border-border"
            >
              {link}
            </a>
          ))}
          <a href="#book" className="mt-4 block rounded-full bg-primary px-6 py-3 text-center font-body font-semibold text-primary-foreground">
            Book a Suite
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
