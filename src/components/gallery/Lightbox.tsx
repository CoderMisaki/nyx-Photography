import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Camera, MapPin, Calendar, Aperture, Info } from 'lucide-react';
import { PhotographerImage } from '@/data/photography';

interface LightboxProps {
  images: PhotographerImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = images.length;
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'i' || e.key === 'I') setShowDetails((prev) => !prev);
    };

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-xl flex flex-col justify-between text-white animate-fadeIn select-none">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
            {currentImage.category.toUpperCase()}
          </span>
          <span className="text-white/20">•</span>
          <span className="font-mono text-xs font-semibold tracking-widest text-white">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`p-2 rounded-full border transition-colors ${
              showDetails ? 'bg-white text-black border-white' : 'border-white/20 text-white/80 hover:text-white'
            }`}
            title="Toggle EXIF Details (Press I)"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full border border-white/20 text-white/80 hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-all transform hover:scale-105"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Photograph */}
        <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[80vh] max-w-full object-contain shadow-2xl transition-transform duration-500"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-all transform hover:scale-105"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Editorial Caption & EXIF Details Bar */}
      {showDetails && (
        <div className="bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
          <div>
            <h3 className="font-serif text-2xl font-light tracking-wide text-white">
              {currentImage.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 mt-1 uppercase">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {currentImage.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {currentImage.year}
              </span>
              {currentImage.story && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline italic text-white/80 font-sans normal-case">
                    "{currentImage.story}"
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Museum Style EXIF Placard */}
          <div className="flex items-center gap-3 font-mono text-[11px] bg-white/5 border border-white/10 px-4 py-2 rounded-sm self-start md:self-auto">
            <div className="flex items-center gap-1.5 text-white/80">
              <Camera className="w-3.5 h-3.5 text-white/50" />
              <span>{currentImage.camera}</span>
            </div>
            <span className="text-white/20">|</span>
            <span className="text-white/80">{currentImage.lens}</span>
            <span className="text-white/20">|</span>
            <span className="text-white/80">{currentImage.aperture}</span>
            <span className="text-white/20">|</span>
            <span className="text-white/80">{currentImage.shutter}</span>
            <span className="text-white/20">|</span>
            <span className="text-white/80">ISO {currentImage.iso}</span>
          </div>
        </div>
      )}
    </div>
  );
};
