import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { PhotographerImage, CATEGORIES } from '@/data/photography';

interface StadiumGalleryProps {
  images: PhotographerImage[];
  onOpenLightbox: (index: number) => void;
}

export const StadiumGallery: React.FC<StadiumGalleryProps> = ({
  images,
  onOpenLightbox,
}) => {
  const meta = CATEGORIES.stadium;

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
              17 PHOTOGRAPHS
            </span>
          </div>
        </div>
      </div>

      {/* Hero Panoramic Monumental Photograph */}
      {images[0] && (
        <div
          onClick={() => onOpenLightbox(0)}
          className="group relative cursor-pointer overflow-hidden bg-surface-soft border border-border shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6 md:p-10 text-white">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 block mb-1">
                  PANORAMIC SCALE
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-light">{images[0].title}</h3>
                <p className="font-sans text-xs text-white/80 mt-1 max-w-lg hidden sm:block">
                  {images[0].story}
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/20">
                <Eye className="w-3.5 h-3.5" />
                <span>EXPAND IMAGE</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Asymmetric Cinematic Spread 1: Wide + Medium Stack */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {images[1] && (
          <div
            onClick={() => onOpenLightbox(1)}
            className="md:col-span-7 group cursor-pointer overflow-hidden bg-surface-soft border border-border relative"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={images[1].src}
                alt={images[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-surface border-t border-border flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-primary">{images[1].title}</h4>
                <p className="font-mono text-[10px] text-muted uppercase">{images[1].camera} • {images[1].lens}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        )}

        {images[2] && (
          <div
            onClick={() => onOpenLightbox(2)}
            className="md:col-span-5 group cursor-pointer overflow-hidden bg-surface-soft border border-border relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images[2].src}
                alt={images[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-surface border-t border-border flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-primary">{images[2].title}</h4>
                <p className="font-mono text-[10px] text-muted uppercase">{images[2].location} • {images[2].year}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        )}
      </div>

      {/* Cinematic 3-Column Horizontal Rhythm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.slice(3, 9).map((img, idx) => {
          const globalIdx = idx + 3;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden bg-surface-soft relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex items-center justify-between bg-surface border-t border-border">
                <div>
                  <h4 className="font-serif text-base font-medium text-primary group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {img.title}
                  </h4>
                  <p className="font-mono text-[10px] text-muted uppercase mt-0.5">
                    {img.aperture} • {img.shutter} • ISO {img.iso}
                  </p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Large Featured Horizontal Split: Image 11 */}
      {images[11] && (
        <div
          onClick={() => onOpenLightbox(11)}
          className="group cursor-pointer relative overflow-hidden bg-surface-soft border border-border shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
        >
          <div className="aspect-[16/8] md:aspect-[21/8] overflow-hidden">
            <img
              src={images[11].src}
              alt={images[11].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
              loading="lazy"
            />
          </div>
          <div className="p-6 bg-surface border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1">
                ARCHITECTURAL PANORAMA
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-primary">{images[11].title}</h3>
            </div>
            <div className="font-mono text-xs text-secondary flex items-center gap-3 uppercase">
              <span>{images[11].camera}</span>
              <span>•</span>
              <span>{images[11].location}</span>
            </div>
          </div>
        </div>
      )}

      {/* Remaining Stadium Images Grid (13-17) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
        {images.slice(12).map((img, idx) => {
          const globalIdx = idx + 12;
          return (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group cursor-pointer bg-surface border border-border overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-soft relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-editorial"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5 bg-surface border-t border-border">
                <p className="font-serif text-xs font-medium text-primary truncate">{img.title}</p>
                <p className="font-mono text-[9px] text-muted uppercase mt-0.5">{img.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
