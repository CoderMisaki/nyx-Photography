import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}

export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const prev = useCallback(() => {
    onIndexChange(index > 0 ? index - 1 : images.length - 1);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange(index < images.length - 1 ? index + 1 : 0);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[70] bg-ink/95 flex flex-col"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
          <p className="text-[12px] tracking-[0.15em] uppercase text-white/60">
            {String(index + 1).padStart(2, "0")} / {images.length}
          </p>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-16 pb-4">
          <motion.img
            key={index}
            src={img.src}
            alt={img.alt}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          <p className="text-[11px] text-white/40 max-w-xs truncate">{img.alt}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
