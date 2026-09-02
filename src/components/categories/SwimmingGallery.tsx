import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PhotographerImage, CATEGORIES } from '@/data/photography';
import { markImageCached } from '@/lib/imageCache';

interface SwimmingGalleryProps {
  images: PhotographerImage[];
  onOpenLightbox: (index: number) => void;
}

export const SwimmingGallery: React.FC<SwimmingGalleryProps> = ({
  images,
  onOpenLightbox,
}) => {
  const meta = CATEGORIES.swimming;

  return (
    <div className="space-y-24 animate-fadeIn">
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
              8 PHOTOGRAPHS
            </span>
          </div>
        </div>
      </div>

      {/* Hero Fluid Panoramic Plate */}
      {images[0] && (
        <div
          onClick={() => onOpenLightbox(0)}
          className="group cursor-pointer relative overflow-hidden bg-surface-soft border border-border shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img decoding="async" fetchPriority="low"
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-1000 ease-editorial"
              onLoad={() => markImageCached(images[0].src)} loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 block mb-1">
              LIQUID HORIZON
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light">{images[0].title}</h3>
            <p className="font-sans text-xs text-white/80 mt-1 max-w-lg hidden sm:block">
              {images[0].story}
            </p>
          </div>
        </div>
      )}

      {/* Fluid Overlapping Composition */}
      <div className="relative py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Wide Plate */}
          {images[1] && (
            <div
              onClick={() => onOpenLightbox(1)}
              className="md:col-span-8 group cursor-pointer bg-surface border border-border p-3 overflow-hidden shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-soft">
                <img decoding="async" fetchPriority="low"
                  src={images[1].src}
                  alt={images[1].title}
                  className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  onLoad={() => markImageCached(images[1].src)} loading="lazy"
                />
              </div>
              <div className="pt-3 flex items-center justify-between">
                <h4 className="font-serif text-xl text-primary">{images[1].title}</h4>
                <p className="font-mono text-[10px] text-muted uppercase">{images[1].location}</p>
              </div>
            </div>
          )}

          {/* Overlapping Vertical Accent Plate */}
          {images[2] && (
            <div
              onClick={() => onOpenLightbox(2)}
              className="md:col-span-4 group cursor-pointer bg-surface border border-border p-3 overflow-hidden shadow-lg md:-ml-8 md:mt-12 z-10"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-soft">
                <img decoding="async" fetchPriority="low"
                  src={images[2].src}
                  alt={images[2].title}
                  className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  onLoad={() => markImageCached(images[2].src)} loading="lazy"
                />
              </div>
              <div className="pt-3">
                <span className="font-mono text-[9px] text-muted uppercase tracking-widest block">
                  REFRACTIVE TENSION
                </span>
                <h4 className="font-serif text-lg text-primary">{images[2].title}</h4>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Whitespace 3-Plate Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {images.slice(3, 6).map((img, idx) => {
          const globalIdx = idx + 3;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border p-4 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-soft relative">
                <img decoding="async" fetchPriority="low"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  onLoad={() => markImageCached(img.src)} loading="lazy"
                />
              </div>
              <div className="pt-4 bg-surface">
                <h5 className="font-serif text-lg text-primary">{img.title}</h5>
                <p className="font-mono text-[10px] text-muted uppercase mt-0.5">
                  {img.camera} • {img.shutter}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plates 7 & 8: Final Fluid Dual Spread */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
        {images.slice(6, 8).map((img, idx) => {
          const globalIdx = idx + 6;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border p-4 overflow-hidden hover:border-primary transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-soft relative">
                <img decoding="async" fetchPriority="low"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  onLoad={() => markImageCached(img.src)} loading="lazy"
                />
              </div>
              <div className="pt-4 flex items-center justify-between bg-surface">
                <div>
                  <h5 className="font-serif text-xl text-primary">{img.title}</h5>
                  <p className="font-mono text-[10px] text-muted uppercase mt-0.5">{img.lens} • {img.aperture}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
