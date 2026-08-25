import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CategoryId, CATEGORIES } from '@/data/photography';

interface SelectedWorkProps {
  onSelectCategory: (cat: CategoryId) => void;
  onOpenLightboxWithImage: (category: CategoryId, indexInCategory: number) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectCategory,
  onOpenLightboxWithImage,
}) => {
  const curatedCategories: {
    id: CategoryId;
    imgSrc: string;
    index: number;
    title: string;
    location: string;
    year: number;
    camera: string;
  }[] = [
    {
      id: 'stadium',
      imgSrc: '/images/2/stadion2.jpg',
      index: 1,
      title: 'Architectural Silence',
      location: 'Gelora Bung Karno, Jakarta',
      year: 2025,
      camera: 'Canon EOS R5 • 24-70mm',
    },
    {
      id: 'boxing',
      imgSrc: '/images/3/boxing1.jpg',
      index: 0,
      title: 'The Canvas Testament',
      location: 'Championship Ring, Jakarta',
      year: 2026,
      camera: 'Canon EOS R5 • 70-200mm',
    },
    {
      id: 'tennis',
      imgSrc: '/images/4/tenis1.jpg',
      index: 0,
      title: 'Trajectory of the Serve',
      location: 'National Tennis Center',
      year: 2025,
      camera: 'Sony A1 • 400mm',
    },
    {
      id: 'swimming',
      imgSrc: '/images/5/swim1.jpg',
      index: 0,
      title: 'The Boundary of Water',
      location: 'Aquatic Center',
      year: 2025,
      camera: 'Canon EOS R5 • Underwater Housing',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
            CURATED MONOGRAPHS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary">
            Selected <span className="italic">Work</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-secondary mt-4 md:mt-0 tracking-wider uppercase">
          REPRESENTATIVE WORKS ACROSS 4 DISCIPLINES
        </p>
      </div>

      {/* 2x2 Large Editorial Plates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {curatedCategories.map((item) => {
          const meta = CATEGORIES[item.id];
          return (
            <div
              key={item.id}
              className="group bg-surface border border-border overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-700"
            >
              {/* Photo Frame */}
              <div
                onClick={() => onOpenLightboxWithImage(item.id, item.index)}
                className="aspect-[16/11] overflow-hidden bg-surface-soft relative cursor-pointer"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                  loading="lazy"
                />
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1 uppercase tracking-widest border border-white/20">
                  {meta.title}
                </div>
              </div>

              {/* Editorial Caption & Dedicated Category Link */}
              <div className="p-6 bg-surface border-t border-border flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-primary group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-secondary mt-1">
                      {item.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {item.year}
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-muted tracking-widest">
                    {item.camera}
                  </span>

                  <button
                    onClick={() => {
                      onSelectCategory(item.id);
                      const element = document.getElementById('work-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary hover:text-secondary transition-colors group/btn font-medium"
                  >
                    <span>VIEW {meta.title} GALLERY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
