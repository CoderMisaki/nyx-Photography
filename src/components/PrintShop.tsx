import { useState } from "react";
import { motion } from "framer-motion";

const frames = [
  { id: "oak", label: "Natural Oak", border: "8px solid #C4A882" },
  { id: "black", label: "Matte Black", border: "8px solid #1a1a1a" },
  { id: "silver", label: "Brushed Silver", border: "8px solid #b8b8b0" },
  { id: "glass", label: "Gallery Glass", border: "1px solid #ddd" },
];

const sizes = [
  { id: "s", label: '24 × 36"', price: 280 },
  { id: "m", label: '30 × 45"', price: 420 },
  { id: "l", label: '40 × 60"', price: 640 },
];

const finishes = [
  { id: "matte", label: "Fine Art Matte", multiplier: 1 },
  { id: "museum", label: "Museum Paper", multiplier: 1.15 },
  { id: "gloss", label: "Gallery Gloss", multiplier: 1.1 },
];

const previewImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop&auto=format&q=80",
];

export default function PrintShop() {
  const [selectedFrame, setSelectedFrame] = useState(frames[0].id);
  const [selectedSize, setSelectedSize] = useState(sizes[0].id);
  const [selectedFinish, setSelectedFinish] = useState(finishes[0].id);
  const [previewIdx, setPreviewIdx] = useState(0);

  const size = sizes.find((s) => s.id === selectedSize)!;
  const finish = finishes.find((f) => f.id === selectedFinish)!;
  const price = Math.round(size.price * finish.multiplier);

  const frame = frames.find((f) => f.id === selectedFrame)!;

  return (
    <section id="prints" className="py-24 md:py-36 bg-surface-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4"
        >
          Fine Art Prints
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-16 md:mb-20"
        >
          Collect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div
              className="bg-white p-3 max-w-[420px] w-full"
              style={{ border: frame.border }}
            >
              <img
                src={previewImages[previewIdx]}
                alt="Print preview"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3 mt-4">
              {previewImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setPreviewIdx(i)}
                  className={`w-14 h-14 border-2 transition-all ${
                    previewIdx === i ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="space-y-10"
          >
            {/* Frame */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-3">Frame</p>
              <div className="flex flex-wrap gap-3">
                {frames.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFrame(f.id)}
                    className={`px-4 py-2 text-[12px] tracking-[0.1em] border transition-all ${
                      selectedFrame === f.id
                        ? "border-ink text-ink"
                        : "border-border text-ink-muted hover:border-accent"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-3">Size</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    className={`px-4 py-2 text-[12px] tracking-[0.1em] border transition-all ${
                      selectedSize === s.id
                        ? "border-ink text-ink"
                        : "border-border text-ink-muted hover:border-accent"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-3">Finish</p>
              <div className="flex flex-wrap gap-3">
                {finishes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinish(f.id)}
                    className={`px-4 py-2 text-[12px] tracking-[0.1em] border transition-all ${
                      selectedFinish === f.id
                        ? "border-ink text-ink"
                        : "border-border text-ink-muted hover:border-accent"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="border-t border-border pt-8">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-1">Estimated Price</p>
                  <p className="font-serif text-4xl font-light">${price}</p>
                </div>
                <p className="text-[11px] text-ink-muted">
                  Limited Edition · Archival Pigment Print
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block w-full text-center py-4 bg-ink text-background text-[12px] tracking-[0.2em] uppercase hover:bg-ink/80 transition-colors duration-300"
              >
                Inquire About This Print
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
