import React, { useState, useMemo } from 'react';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { ALL_PHOTOGRAPHS, CategoryId, CATEGORIES, getImagesByCategory } from '@/data/photography';
import { Box, ChevronLeft, ChevronRight, Hand, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThreeDExhibitionProps {
  onClose?: () => void;
  isStandalone?: boolean;
}

export const ThreeDExhibition: React.FC<ThreeDExhibitionProps> = ({
  onClose,
  isStandalone = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [tapCounter, setTapCounter] = useState(0);

  const galleryImages = useMemo(() => {
    const rawImages =
      selectedCategory === 'all'
        ? ALL_PHOTOGRAPHS
        : getImagesByCategory(selectedCategory);

    return rawImages.map((img) => ({
      src: img.src,
      alt: img.title,
    }));
  }, [selectedCategory]);

  const triggerKey = (direction: 'left' | 'right') => {
    setTapCounter((c) => c + 1);
    const key = direction === 'left' ? 'ArrowLeft' : 'ArrowRight';
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
  };

  return (
    <section
      className={`relative w-full overflow-hidden bg-neutral-950 text-white transition-all duration-500 select-none ${
        isStandalone ? 'fixed inset-0 z-50 h-screen' : 'py-12 md:py-20 min-h-[85vh] my-12 border-y border-border/40'
      }`}
    >
      {/* 3D Canvas Stage */}
      <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
        <InfiniteGallery
          key={`gallery-${selectedCategory}`}
          images={galleryImages}
          speed={1.1}
          zSpacing={3.2}
          visibleCount={10}
          falloff={{ near: 0.8, far: 15 }}
          className="w-full h-full"
        />
      </div>

      {/* Top Floating Controls Bar */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">
            <Box className="w-3.5 h-3.5 text-white/80" />
            <span>3D SPATIAL ARCHIVE • INTERACTIVE CANVAS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light">
            Kinetic <span className="italic">Space</span>
          </h2>
        </div>

        {/* Category Filter Pills (Responsive on Mobile/Tablet/Desktop) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pointer-events-auto bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10 max-w-full overflow-x-auto no-scrollbar">
          {(['all', 'stadium', 'boxing', 'tennis', 'swimming'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            const label = cat === 'all' ? 'ALL' : CATEGORIES[cat].title;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-xs'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            );
          })}

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white ml-1"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Center Atmospheric Typography */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-4 mix-blend-exclusion text-white z-0">
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase opacity-70 mb-2">
          NYX ARCHIVE
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl tracking-tight font-light opacity-90">
          <span className="italic">Kinetic</span> Space
        </h1>
      </div>

      {/* Interactive Tap & Travel Buttons for Touch & Click */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-6 flex items-center justify-between pointer-events-none z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={() => triggerKey('left')}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-black/90 text-white border-white/20 hover:border-white pointer-events-auto backdrop-blur-md transition-transform active:scale-90 shadow-lg"
          title="Tap to Reverse"
          aria-label="Previous image in 3D"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => triggerKey('right')}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-black/90 text-white border-white/20 hover:border-white pointer-events-auto backdrop-blur-md transition-transform active:scale-90 shadow-lg"
          title="Tap to Advance"
          aria-label="Next image in 3D"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>

      {/* Bottom Floating Navigation Instruction */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 text-center pointer-events-none font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-white/70 px-4">
        <div className="bg-black/70 backdrop-blur-md inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <Hand className="w-3 h-3 text-white/80 animate-pulse hidden sm:inline" />
          <span>Tap arrows, swipe, or click canvas to travel • Auto-plays</span>
        </div>
      </div>
    </section>
  );
};
