import React, { useMemo } from 'react';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { ALL_PHOTOGRAPHS } from '@/data/photography';
import { X } from 'lucide-react';

interface ThreeDExhibitionProps {
  onClose?: () => void;
  isStandalone?: boolean;
}

export const ThreeDExhibition: React.FC<ThreeDExhibitionProps> = ({
  onClose,
  isStandalone = false,
}) => {
  const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false;
  const galleryImages = useMemo(() => {
    // Batasi untuk performa: 12 di mobile, 18 di desktop (sebelumnya 54 textures sekaligus berat sekali)
    const limit = isMobile ? 12 : 18;
    return ALL_PHOTOGRAPHS.slice(0, limit).map((img) => ({
      src: img.src,
      alt: img.title,
    }));
  }, [isMobile]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-neutral-950 text-white transition-all duration-500 select-none ${
        isStandalone ? 'fixed inset-0 z-50 h-screen' : 'py-12 md:py-20 min-h-[85vh] my-12 border-y border-border/40'
      }`}
    >
      {/* 3D Canvas Stage - dikurangi visibleCount di mobile agar GPU ringan */}
      <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
        <InfiniteGallery
          images={galleryImages}
          speed={isMobile ? 0.6 : 1.1}
          zSpacing={3.2}
          visibleCount={isMobile ? 6 : 9}
          falloff={{ near: 0.8, far: 15 }}
          className="w-full h-full"
        />
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Center Atmospheric Typography - hanya NYX ARCHIVE sesuai request */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-4 mix-blend-exclusion text-white z-0">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase opacity-80">
          NYX ARCHIVE
        </span>
      </div>
    </section>
  );
};
