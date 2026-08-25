import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Commercial",
    description: "Brand campaigns, products and visual storytelling.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Architecture",
    description: "Architecture, interiors, hospitality and real estate.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Editorial",
    description: "Fashion, portrait and editorial photography.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Private Commissions",
    description: "Personal projects, travel and private sessions.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&auto=format&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-16 md:mb-20"
        >
          What I Do
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="cv-auto overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-[15px] text-ink-secondary leading-relaxed mb-6 max-w-md">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink hover:text-champagne transition-colors duration-300"
                >
                  Inquire
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
