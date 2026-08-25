import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Camera, MapPin, Calendar } from 'lucide-react';
import { ProfileImage, PROFILE_IMAGES } from '@/data/photography';

interface ProfileGalleryProps {
  images?: ProfileImage[];
}

export const ProfileGallery: React.FC<ProfileGalleryProps> = ({
  images = PROFILE_IMAGES,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const totalCount = images.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    if (totalCount <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalCount);
  }, [totalCount]);

  const goToPrev = useCallback(() => {
    if (totalCount <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
  }, [totalCount]);

  // Keyboard navigation when gallery is in focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if profile gallery is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch and Mouse Drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -40) {
      goToNext();
    } else if (dragOffset > 40) {
      goToPrev();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -40) {
      goToNext();
    } else if (dragOffset > 40) {
      goToPrev();
    }
    setDragOffset(0);
  };

  if (totalCount === 0) return null;

  const currentImage = images[currentIndex];
  const formattedCounter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(
    totalCount
  ).padStart(2, '0')}`;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Photographic Frame */}
      <div className="relative w-full max-w-md aspect-[3/4] bg-surface-soft overflow-hidden border border-border shadow-[0_15px_40px_rgba(0,0,0,0.05)] cursor-grab active:cursor-grabbing group">
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.id}
              className={`absolute inset-0 transition-all duration-700 ease-editorial ${
                isActive
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-98 pointer-events-none'
              }`}
              style={{
                transform: isActive && isDragging ? `translateX(${dragOffset}px)` : undefined,
              }}
            >
              <img decoding="async"
                src={img.src}
                alt={`Photographer Profile - ${img.id}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Monograph Watermark Badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono tracking-widest text-primary uppercase border border-border">
                ARCHIVE {img.year}
              </div>
            </div>
          );
        })}

        {/* Subtle Hover Controls */}
        {totalCount > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur-sm border border-border flex items-center justify-center text-primary shadow-sm pointer-events-auto hover:bg-surface transition-colors"
              aria-label="Previous profile photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur-sm border border-border flex items-center justify-center text-primary shadow-sm pointer-events-auto hover:bg-surface transition-colors"
              aria-label="Next profile photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Dynamic Editorial Counter & Navigation Bar */}
      <div className="w-full max-w-md mt-4 flex items-center justify-between text-xs font-mono border-b border-border/80 pb-3">
        <button
          onClick={goToPrev}
          disabled={totalCount <= 1}
          className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px] disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">PREV</span>
        </button>

        {/* Dynamic Counter Requirement (e.g. 01 / 03) */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-widest font-medium text-primary">
            {formattedCounter}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span className="text-[10px] text-muted tracking-widest uppercase">MONOGRAPH</span>
        </div>

        <button
          onClick={goToNext}
          disabled={totalCount <= 1}
          className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px] disabled:opacity-30"
          aria-label="Next"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Image Specific Editorial Caption */}
      <div className="w-full max-w-md mt-2 flex flex-col gap-1 text-left">
        <p className="font-sans text-xs text-secondary italic font-light">
          "{currentImage.caption}"
        </p>
        <div className="flex items-center gap-3 text-[10px] font-mono text-muted uppercase">
          <span className="flex items-center gap-1">
            <MapPin className="w-2.5 h-2.5" /> {currentImage.location}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-2.5 h-2.5" /> {currentImage.year}
          </span>
        </div>
      </div>

      {/* Thumbnail Selector Indicator */}
      {totalCount > 1 && (
        <div className="flex items-center gap-2 mt-4">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-8 h-10 overflow-hidden border transition-all duration-300 ${
                idx === currentIndex
                  ? 'border-primary scale-105 ring-1 ring-primary'
                  : 'border-border opacity-50 hover:opacity-100'
              }`}
              aria-label={`View photo ${idx + 1}`}
            >
              <img decoding="async" src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
