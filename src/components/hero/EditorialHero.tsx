import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CategoryId, CATEGORIES } from '@/data/photography';

interface EditorialHeroProps {
  onExploreClick: () => void;
  onSelectCategory: (cat: CategoryId) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onExploreClick,
  onSelectCategory,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Magazine Issue Heading Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 gap-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>SPORTS & EDITORIAL MONOGRAPH</span>
          <span>•</span>
          <span>JAKARTA, ID</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>HIGH-SHUTTER CAPTURE</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">54 CURATED WORKS</span>
        </div>
      </div>

      {/* Main Dramatic Editorial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-8 items-center">
        {/* Left Column: Big Typographic Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary font-medium block">
              PORTFOLIO & ARCHIVE
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-primary font-light">
              Motion <br />
              <span className="italic font-normal">Condensed</span> <br />
              Into Silence.
            </h1>
          </div>

          <p className="font-sans text-sm sm:text-base text-secondary max-w-lg font-light leading-relaxed">
            A high-end visual archive documenting the visceral tension of boxing, the grandeur of stadiums, the geometry of tennis, and the liquid poetry of aquatic athletics.
          </p>

          <div className="pt-4 flex items-center gap-4 flex-wrap">
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-3 px-6 py-3.5 bg-primary text-background text-xs font-mono uppercase tracking-widest hover:opacity-90 transition-all font-medium"
            >
              <span>EXPLORE MONOGRAPHS</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('about-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3.5 border border-border text-xs font-mono uppercase tracking-widest text-primary hover:bg-surface transition-all"
            >
              <span>THE PRACTICE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Cover Photo Display */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-surface-soft overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border">
            <img decoding="async"
              src="/images/2/stadion1.jpg"
              alt="Sanctuary Under Floodlights - Stadium"
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-editorial"
              loading="eager"
            />
            {/* Subtle Gradient & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                STADIUM SERIES
              </span>
              <p className="font-serif text-lg italic">Sanctuary Under Floodlights</p>
            </div>

            <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-primary border border-border/60">
              FEATURED
            </div>
          </div>

          {/* Museum Caption Underneath */}
          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-muted uppercase">
            <span>GELORA ARENA</span>
            <span>CANON EOS R5 • 1/1600s</span>
          </div>
        </div>
      </div>

      {/* Quick Category Jump Grid (Clean without 02, 03, 04, 05) */}
      <div className="border-t border-border pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {(['stadium', 'boxing', 'tennis', 'swimming'] as CategoryId[]).map((catId) => {
          const meta = CATEGORIES[catId];
          return (
            <button
              key={catId}
              onClick={() => onSelectCategory(catId)}
              className="text-left group flex flex-col space-y-1 hover:opacity-80 transition-opacity"
            >
              <span className="font-serif text-lg text-primary group-hover:italic transition-all">
                {meta.title}
              </span>
              <span className="font-sans text-[11px] text-muted line-clamp-1">
                {meta.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
