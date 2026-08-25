import { motion } from "framer-motion";

const stats = [
  { number: "12+", label: "Years Experience" },
  { number: "40+", label: "Published Projects" },
  { number: "18", label: "Countries" },
  { number: "25+", label: "Brands & Publications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-surface-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="cv-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=1000&fit=crop&auto=format&q=80"
              alt="Photographer at work"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          {/* Right: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8"
            >
              I photograph places, people, architecture and moments shaped by{" "}
              <span className="italic font-normal">natural light.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[15px] text-ink-secondary leading-relaxed mb-12 max-w-lg"
            >
              My work explores simplicity, atmosphere and the relationship between
              space and emotion. Based between Bali and major cities across Asia,
              Europe, and the Americas.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl md:text-4xl font-light text-ink">{s.number}</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-ink-muted mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
