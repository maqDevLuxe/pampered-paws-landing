import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      animate={{ x: pos.x - 16, y: pos.y - 16, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="h-8 w-8 rounded-full border-2 border-primary/50 bg-accent/20 backdrop-blur-sm" />
    </motion.div>
  );
};

export default CustomCursor;
