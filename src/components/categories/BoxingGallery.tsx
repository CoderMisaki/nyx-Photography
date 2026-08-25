import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PhotographerImage, CATEGORIES } from '@/data/photography';

interface BoxingGalleryProps {
  images: PhotographerImage[];
  onOpenLightbox: (index: number) => void;
}

export const BoxingGallery: React.FC<BoxingGalleryProps> = ({
  images,
  onOpenLightbox,
}) => {
  const meta = CATEGORIES.boxing;

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Chapter Editorial Banner */}
      <div className="border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-muted mb-2">
            <span className="uppercase tracking-widest text-primary font-medium">{meta.visualDirection}</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-primary">
            {meta.title}
          </h2>
          <p className="font-serif text-xl italic text-secondary mt-1">
            "{meta.subtitle}"
          </p>
        </div>

        <div className="max-w-md font-sans text-xs sm:text-sm text-secondary font-light leading-relaxed">
          {meta.description}
          <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px] uppercase text-muted">
            {meta.atmosphere.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-surface border border-border">
                {tag}
              </span>
            ))}
            <span className="px-2.5 py-1 bg-surface border border-primary text-primary font-medium">
              22 PHOTOGRAPHS
            </span>
          </div>
        </div>
      </div>

      {/* Intimate Storytelling Duet: Master Combat Frame + 2 Stacked Precision Plates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {images[0] && (
          <div
            onClick={() => onOpenLightbox(0)}
            className="lg:col-span-7 group cursor-pointer overflow-hidden bg-surface border border-border relative flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden relative bg-surface-soft">
              <img decoding="async"
                src={images[0].src}
                alt={images[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial grayscale-[15%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1 border border-white/20 uppercase tracking-widest">
                COMBAT TRUTH
              </div>
            </div>
            <div className="p-6 bg-surface border-t border-border flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-primary">{images[0].title}</h3>
                <p className="font-mono text-xs text-secondary mt-1 uppercase">
                  {images[0].camera} • {images[0].lens} • 1/2000s
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
            </div>
          </div>
        )}

        {/* Right side: 2 Stacked Curated Vertical/Horizontal Frames */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {images.slice(1, 3).map((img, idx) => {
            const globalIdx = idx + 1;
            return (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(globalIdx)}
                className="group cursor-pointer bg-surface border border-border overflow-hidden flex flex-col hover:shadow-lg transition-all flex-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-surface-soft relative flex-1 min-h-[190px]">
                  <img decoding="async"
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-surface border-t border-border flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-primary">{img.title}</h4>
                    <p className="font-mono text-[10px] text-muted uppercase mt-0.5">{img.location}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Editorial Quotation Interlude */}
      <div className="py-8 px-6 bg-surface border-y border-border text-center max-w-3xl mx-auto my-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">
          RINGSIDE CHRONICLE
        </span>
        <p className="font-serif text-2xl md:text-3xl italic text-primary font-light">
          "In the ring, there are no rehearsals. Every breath is contested, and every punch leaves an invisible architecture on the body."
        </p>
      </div>

      {/* High Density Alternating Editorial Grid (Images 3-14) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.slice(3, 15).map((img, idx) => {
          const globalIdx = idx + 3;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border overflow-hidden hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-soft relative">
                <img decoding="async"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-editorial"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-surface border-t border-border">
                <h5 className="font-serif text-base text-primary truncate">{img.title}</h5>
                <p className="font-mono text-[10px] text-muted uppercase mt-0.5">
                  {img.aperture} • ISO {img.iso}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Rhythmic Climax (Images 15-22) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 pt-4">
        {images.slice(15).map((img, idx) => {
          const globalIdx = idx + 15;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border overflow-hidden hover:border-primary transition-all"
            >
              <div className="aspect-[1/1] overflow-hidden bg-surface-soft">
                <img decoding="async"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-editorial"
                  loading="lazy"
                />
              </div>
              <div className="p-2 text-center bg-surface">
                <span className="font-mono text-[9px] text-secondary uppercase block truncate">
                  {img.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
