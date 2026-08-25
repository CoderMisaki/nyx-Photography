import React from 'react';
import { ProfileGallery } from './ProfileGallery';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NyxSocialButtons } from '@/components/ui/social-icon';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted block mb-2">
            THE EYE BEHIND THE OPTICS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary">
            About the <span className="italic">Photographer</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-secondary mt-4 md:mt-0 tracking-wider">
          DOCUMENTARY & HIGH-SPEED SPORTS PHOTOJOURNALISM
        </p>
      </div>

      {/* Asymmetric Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive Profile Photo Carousel */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <ProfileGallery />
          
          <div className="mt-8 p-4 w-full max-w-md bg-surface border border-border text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
              DIRECT DISPATCH
            </span>
            <p className="font-serif text-sm italic text-secondary">
              "Sport is not merely movement; it is the absolute condensation of human will, pain, and transcendence into a fraction of a second."
            </p>
          </div>

          {/* Social Links Badge under Profile Carousel */}
          <div className="mt-4 w-full max-w-md flex items-center justify-between p-3 bg-surface border border-border rounded-sm text-xs font-mono">
            <span className="text-[10px] text-muted uppercase tracking-wider">OFFICIAL CHANNELS</span>
            <NyxSocialButtons />
          </div>
        </div>

        {/* Right Column: Editorial Biography, Practice & Gear Archive */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary block mb-2">
                ARTIST BIOGRAPHY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-primary font-light mb-4">
                Nyx <span className="font-sans text-xs font-mono uppercase text-muted tracking-widest ml-3">(b. Jakarta)</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-secondary font-light leading-relaxed mb-4">
                Nyx is a contemporary sports and editorial documentary photographer based in Jakarta, working globally across international championships, ringside bouts, grand slam courts, and high-performance aquatic centers.
              </p>
              <p className="font-sans text-sm sm:text-base text-secondary font-light leading-relaxed">
                Rather than treating sports photography as pure event documentation, Nyx approaches athletic motion with an editorial rigor inspired by mid-century photojournalism and architectural minimalism. Every frame seeks the tension between structural form, light, and the raw vulnerability of competitors.
              </p>
            </div>

            {/* Disciplines & Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                  DISCIPLINES & SPECIALIZATION
                </span>
                <ul className="space-y-1.5 font-mono text-xs text-primary">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Stadium Architecture & Monumental Scale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Championship Boxing & Combat Editorial
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Court Geometry & Fast-Action Tennis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Aquatics, Fluid Dynamics & High-Speed Optics
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                  SELECTED COMMISSIONS & PUBLICATIONS
                </span>
                <ul className="space-y-1.5 font-mono text-xs text-secondary">
                  <li>• L'Équipe Magazine</li>
                  <li>• Vogue Sport International</li>
                  <li>• Sports Illustrated Editorial</li>
                  <li>• Leica Fotografie International (LFI)</li>
                  <li>• ESPN Editorial Feature</li>
                </ul>
              </div>
            </div>

            {/* Gear / Kit Archive */}
            <div className="pt-6 border-t border-border">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-3">
                OPTICAL KIT & CAMERAS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
                <div className="p-2.5 bg-surface border border-border rounded-sm">
                  <span className="text-muted block text-[9px]">PRIMARY BODY</span>
                  <span className="text-primary font-medium">Canon EOS R5</span>
                </div>
                <div className="p-2.5 bg-surface border border-border rounded-sm">
                  <span className="text-muted block text-[9px]">DOCUMENTARY BODY</span>
                  <span className="text-primary font-medium">Leica SL2-S</span>
                </div>
                <div className="p-2.5 bg-surface border border-border rounded-sm">
                  <span className="text-muted block text-[9px]">HIGH-SPEED TELEPHOTO</span>
                  <span className="text-primary font-medium">RF 400mm f/2.8L</span>
                </div>
                <div className="p-2.5 bg-surface border border-border rounded-sm">
                  <span className="text-muted block text-[9px]">PORTRAIT PRIME</span>
                  <span className="text-primary font-medium">RF 85mm f/1.2L</span>
                </div>
              </div>
            </div>

            {/* Direct Inquire CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] text-muted uppercase">
                  AVAILABLE FOR EDITORIAL ASSIGNMENTS & WORLDWIDE COMMISSIONS
                </p>
              </div>
              <button
                onClick={onContactClick}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-secondary group transition-colors"
              >
                <span>INITIATE INQUIRY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
