import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on pointer devices (desktop)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        setLabel(target.getAttribute("data-cursor") || "");
        setVisible(true);
      } else {
        setVisible(false);
        setLabel("");
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <div
        className={`transition-all duration-200 ease-out flex items-center justify-center rounded-full bg-white text-ink ${
          visible ? "w-16 h-16 opacity-100" : "w-3 h-3 opacity-40"
        }`}
      >
        {visible && label && (
          <span className="text-[9px] tracking-[0.2em] uppercase font-medium mix-blend-difference text-ink">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
