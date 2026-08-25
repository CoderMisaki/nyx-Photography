import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { EDITORIAL_STORIES } from '@/data/photography';

export const EditorialStories: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
            PHOTOJOURNALISM MONOGRAPHS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary">
            Selected <span className="italic">Essays</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-secondary mt-4 md:mt-0 tracking-wider uppercase">
          DISPATCHES ON OPTICS, LIGHT & ATHLETIC TENSION
        </p>
      </div>

      {/* Editorial Stories 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {EDITORIAL_STORIES.map((story) => (
          <article
            key={story.id}
            className="group bg-surface border border-border overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden bg-surface-soft relative">
              <img
                src={story.coverImage}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-primary font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest border border-border">
                {story.category}
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 font-mono text-[10px] text-muted uppercase mb-2">
                  <span>{story.category}</span>
                  <span>•</span>
                  <span>{story.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> {story.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-primary group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors mb-3">
                  {story.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-secondary font-light leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-muted tracking-widest">
                  DOCUMENTARY MONOGRAPH
                </span>
                <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
