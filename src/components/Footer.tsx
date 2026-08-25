import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 md:py-36 bg-surface-soft border-t border-border-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-2xl mb-12"
        >
          Let&apos;s create something{" "}
          <span className="italic font-normal">timeless.</span>
        </motion.h2>

        <motion.a
          href="mailto:studio@nyxphoto.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="group inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-ink hover:text-champagne transition-colors duration-300 mb-20"
        >
          Start a conversation
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-border pt-8">
          <div className="flex gap-8">
            {["Instagram", "Behance", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] tracking-[0.15em] uppercase text-ink-muted hover:text-ink transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-[11px] tracking-[0.1em] text-ink-muted">
            © 2026 NYX Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
