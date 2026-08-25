import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&h=1400&fit=crop&auto=format&q=80"
          alt="Dramatic mountain landscape"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-6 md:mb-8"
          >
            Photographer / Visual Artist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.05] tracking-tight text-ink"
          >
            Capturing{" "}
            <span className="italic font-normal">light</span>,{" "}
            <br className="hidden md:block" />
            places and{" "}
            <br className="hidden md:block" />
            quiet <span className="italic font-normal">moments.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-ink hover:text-champagne transition-colors duration-300"
            >
              Selected work
              <span className="inline-block w-8 h-px bg-ink group-hover:bg-champagne group-hover:w-12 transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-ink-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-ink-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
