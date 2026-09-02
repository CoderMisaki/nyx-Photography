import React from 'react';
import { Eye } from 'lucide-react';
import { PhotographerImage, CATEGORIES } from '@/data/photography';
import { markImageCached } from '@/lib/imageCache';

interface TennisGalleryProps {
  images: PhotographerImage[];
  onOpenLightbox: (index: number) => void;
}

export const TennisGallery: React.FC<TennisGalleryProps> = ({
  images,
  onOpenLightbox,
}) => {
  const meta = CATEGORIES.tennis;

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Chapter Editorial Banner with Geometric Alignment */}
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
              7 PHOTOGRAPHS
            </span>
          </div>
        </div>
      </div>

      {/* Geometric Symmetric Sequence: Large Centerpiece + Dual Flanking Balanced Plates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Balanced Plate */}
        {images[1] && (
          <div
            onClick={() => onOpenLightbox(1)}
            className="lg:col-span-4 group cursor-pointer bg-surface border border-border p-3 overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[3/4] overflow-hidden bg-surface-soft relative">
              <img decoding="async" fetchPriority="low"
                src={images[1].src}
                alt={images[1].title}
                className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
                onLoad={() => markImageCached(images[1].src)} loading="eager"
              />
              <div className="absolute top-2 left-2 bg-surface/90 text-primary font-mono text-[9px] px-2 py-0.5 uppercase border border-border">
                BASELINE
              </div>
            </div>
            <div className="pt-3">
              <h4 className="font-serif text-lg text-primary">{images[1].title}</h4>
              <p className="font-mono text-[10px] text-muted uppercase mt-0.5">{images[1].location}</p>
            </div>
          </div>
        )}

        {/* Center Dominant Plate */}
        {images[0] && (
          <div
            onClick={() => onOpenLightbox(0)}
            className="lg:col-span-8 group cursor-pointer bg-surface border border-border p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <div className="aspect-[16/10] overflow-hidden bg-surface-soft relative">
              <img decoding="async" fetchPriority="low"
                src={images[0].src}
                alt={images[0].title}
                className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                onLoad={() => markImageCached(images[0].src)} loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-md p-4 border border-border flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-muted uppercase tracking-widest block">
                    PRINCIPAL SERVE
                  </span>
                  <h3 className="font-serif text-2xl text-primary">{images[0].title}</h3>
                </div>
                <div className="font-mono text-xs text-secondary hidden sm:block uppercase">
                  {images[0].camera} • {images[0].shutter}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Court Grid Geometric 4-Plate Sequence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {images.slice(2, 6).map((img, idx) => {
          const globalIdx = idx + 2;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border p-3 overflow-hidden hover:border-primary transition-all flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-soft relative">
                <img decoding="async" fetchPriority="low"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-500 ease-editorial"
                  onLoad={() => markImageCached(img.src)} loading="lazy"
                />
              </div>
              <div className="pt-3">
                <h5 className="font-serif text-base text-primary truncate">{img.title}</h5>
                <p className="font-mono text-[10px] text-muted uppercase mt-0.5">
                  {img.lens} • {img.aperture}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Wide Precision Follow-through */}
      {images[6] && (
        <div
          onClick={() => onOpenLightbox(6)}
          className="group cursor-pointer bg-surface border border-border p-4 relative overflow-hidden"
        >
          <div className="aspect-[21/9] overflow-hidden bg-surface-soft relative">
            <img decoding="async" fetchPriority="low"
              src={images[6].src}
              alt={images[6].title}
              className="w-full h-full object-cover gallery-img group-hover:scale-105 transition-transform duration-700 ease-editorial"
              onLoad={() => markImageCached(images[6].src)} loading="lazy"
            />
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-border mt-3">
            <div>
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest block">
                MATCH POINT CADENCE
              </span>
              <h4 className="font-serif text-2xl text-primary">{images[6].title}</h4>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-secondary">
              <Eye className="w-3.5 h-3.5" />
              <span>EXPAND IMAGE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
