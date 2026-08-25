import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { TikTokIcon, InstagramIcon, WhatsAppIcon, SOCIAL_LINKS } from '@/components/icons/SocialIcons';

export const EditorialFooter: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface-soft py-16 px-6 md:px-12 text-primary transition-colors duration-400">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Colophon Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl font-light uppercase tracking-wider block mb-2 text-primary">
              NYX
            </span>
            <p className="font-sans text-xs text-secondary font-light max-w-sm leading-relaxed mb-6">
              An independent sports & action photography monograph documenting the kinetic truth of human athletics and architectural scale.
            </p>

            {/* Social Channels in Footer */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-primary bg-surface border border-border transition-all"
                title="TikTok @nyxsports.id"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-primary bg-surface border border-border transition-all"
                title="Instagram @nyxsports.id"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-primary bg-surface border border-border transition-all"
                title="WhatsApp +62 815-1381-1623"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 font-mono text-xs space-y-2">
            <span className="text-muted text-[10px] uppercase tracking-widest block mb-1">
              DIRECT CHANNELS
            </span>
            <p>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5">
                <WhatsAppIcon className="w-3 h-3 text-emerald-500" />
                <span>WA: {SOCIAL_LINKS.whatsappDisplay}</span>
              </a>
            </p>
            <p>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5">
                <InstagramIcon className="w-3 h-3 text-pink-500" />
                <span>IG: {SOCIAL_LINKS.instagramHandle}</span>
              </a>
            </p>
            <p>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5">
                <TikTokIcon className="w-3 h-3" />
                <span>TikTok: {SOCIAL_LINKS.tiktokHandle}</span>
              </a>
            </p>
          </div>

          <div className="md:col-span-3 font-mono text-xs space-y-2">
            <span className="text-muted text-[10px] uppercase tracking-widest block mb-1">
              STUDIO LOCATION & TIME
            </span>
            <p className="text-primary font-medium">JAKARTA (WIB / UTC+7)</p>
            <p className="text-secondary font-mono tracking-widest text-sm">
              {time ? `${time} WIB` : '16:05:00 WIB'}
            </p>
          </div>

          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors p-2"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Rights & Colophon Row */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-muted gap-4">
          <p>© {new Date().getFullYear()} NYX SPORTS PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase">SPORTS PHOTOGRAPHY ARCHIVE</p>
        </div>
      </div>
    </footer>
  );
};
