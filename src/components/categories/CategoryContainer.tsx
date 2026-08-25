import React from 'react';
import { CategoryId, CATEGORIES, getImagesByCategory, ALL_PHOTOGRAPHS, PhotographerImage } from '@/data/photography';
import { StadiumGallery } from './StadiumGallery';
import { BoxingGallery } from './BoxingGallery';
import { TennisGallery } from './TennisGallery';
import { SwimmingGallery } from './SwimmingGallery';

interface CategoryContainerProps {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onOpenLightbox: (images: PhotographerImage[], index: number) => void;
}

export const CategoryContainer: React.FC<CategoryContainerProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenLightbox,
}) => {
  const stadiumImages = getImagesByCategory('stadium');
  const boxingImages = getImagesByCategory('boxing');
  const tennisImages = getImagesByCategory('tennis');
  const swimmingImages = getImagesByCategory('swimming');

  const categoriesList: { id: CategoryId | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'COMPLETE ARCHIVE', count: ALL_PHOTOGRAPHS.length },
    { id: 'stadium', label: 'STADIUM', count: stadiumImages.length },
    { id: 'boxing', label: 'BOXING', count: boxingImages.length },
    { id: 'tennis', label: 'TENNIS', count: tennisImages.length },
    { id: 'swimming', label: 'SWIMMING', count: swimmingImages.length },
  ];

  return (
    <section id="work-section" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      {/* Category Navigation Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
            DISCIPLINE ARCHIVES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-primary">
            Curated <span className="italic">Galleries</span>
          </h2>
        </div>

        {/* Minimal Tab Switcher with counts */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 rounded-sm border ${
                  isActive
                    ? 'bg-primary text-background border-primary shadow-sm font-medium'
                    : 'bg-surface text-secondary border-border hover:border-primary/40 hover:text-primary'
                }`}
              >
                <span className="flex items-center gap-1.5 uppercase">
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-70 ml-1">({cat.count})</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Selected Gallery View */}
      <div className="transition-opacity duration-500 ease-editorial">
        {activeCategory === 'stadium' && (
          <StadiumGallery
            images={stadiumImages}
            onOpenLightbox={(idx) => onOpenLightbox(stadiumImages, idx)}
          />
        )}

        {activeCategory === 'boxing' && (
          <BoxingGallery
            images={boxingImages}
            onOpenLightbox={(idx) => onOpenLightbox(boxingImages, idx)}
          />
        )}

        {activeCategory === 'tennis' && (
          <TennisGallery
            images={tennisImages}
            onOpenLightbox={(idx) => onOpenLightbox(tennisImages, idx)}
          />
        )}

        {activeCategory === 'swimming' && (
          <SwimmingGallery
            images={swimmingImages}
            onOpenLightbox={(idx) => onOpenLightbox(swimmingImages, idx)}
          />
        )}

        {activeCategory === 'all' && (
          <div className="space-y-28">
            <StadiumGallery
              images={stadiumImages}
              onOpenLightbox={(idx) => onOpenLightbox(stadiumImages, idx)}
            />
            <div className="w-full h-[1px] bg-border my-16" />
            <BoxingGallery
              images={boxingImages}
              onOpenLightbox={(idx) => onOpenLightbox(boxingImages, idx)}
            />
            <div className="w-full h-[1px] bg-border my-16" />
            <TennisGallery
              images={tennisImages}
              onOpenLightbox={(idx) => onOpenLightbox(tennisImages, idx)}
            />
            <div className="w-full h-[1px] bg-border my-16" />
            <SwimmingGallery
              images={swimmingImages}
              onOpenLightbox={(idx) => onOpenLightbox(swimmingImages, idx)}
            />
          </div>
        )}
      </div>
    </section>
  );
};
