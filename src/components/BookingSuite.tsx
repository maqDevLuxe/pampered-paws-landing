import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Heart, Instagram, Facebook } from "lucide-react";

const BookingSuite = () => (
  <>
    <section id="book" className="py-24 gradient-blush">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionReveal>
          <Heart className="mx-auto mb-6 h-10 w-10 text-gold-accent" />
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl mb-6">
            Ready to Book Their
            <br />
            <span className="italic text-gold-accent">Dream Stay?</span>
          </h2>
          <p className="mx-auto max-w-xl font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            Give your pet the luxury experience they deserve. Limited suites available —
            reserve now and enjoy peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-body font-bold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow"
            >
              <Phone className="h-5 w-5" /> Call to Reserve
            </motion.a>
            <motion.a
              href="mailto:hello@pamperedpaws.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-full bg-card px-10 py-4 font-body font-bold text-foreground shadow-soft transition-shadow hover:shadow-glow"
            >
              <Mail className="h-5 w-5" /> Email Us
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>

    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Pampered<span className="text-gold-accent">Paws</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              The premier luxury pet spa & resort, where every tail wags with joy.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider text-primary-foreground/80 mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-body text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4" /> (555) 123-PAWS
              </p>
              <p className="flex items-center gap-2 font-body text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4" /> hello@pamperedpaws.com
              </p>
              <p className="flex items-center gap-2 font-body text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4" /> 123 Luxury Lane, Beverly Hills, CA
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider text-primary-foreground/80 mb-4">Hours</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-body text-sm text-primary-foreground/60">
                <Clock className="h-4 w-4" /> Mon–Fri: 7AM – 8PM
              </p>
              <p className="font-body text-sm text-primary-foreground/60 pl-6">Sat–Sun: 8AM – 6PM</p>
              <p className="font-body text-sm text-primary-foreground/60 pl-6">Boarding: 24/7</p>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider text-primary-foreground/80 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-gold-accent hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-gold-accent hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 PamperedPaws Luxury Pet Spa & Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default BookingSuite;
