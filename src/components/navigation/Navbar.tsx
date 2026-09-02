import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { CategoryId } from '@/data/photography';
import { TikTokIcon, InstagramIcon, WhatsAppIcon, SOCIAL_LINKS } from '@/components/icons/SocialIcons';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenAbout,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: CategoryId | 'all'; label: string }[] = [
    { id: 'all', label: 'ALL ARCHIVE' },
    { id: 'stadium', label: 'STADIUM' },
    { id: 'boxing', label: 'BOXING' },
    { id: 'tennis', label: 'TENNIS' },
    { id: 'swimming', label: 'SWIMMING' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <button
            onClick={() => {
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group"
          >
            <span className="w-8 h-8 rounded-sm bg-primary text-background flex items-center justify-center font-serif text-lg font-light italic transition-transform group-hover:scale-95 duration-300 shadow-sm">
              N
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wider text-primary font-semibold uppercase leading-none">
                NYX
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted mt-0.5">
                Sports Editorial
              </span>
            </div>
          </button>

          {/* Desktop Minimal Category Nav (Clean without 02, 03, etc.) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectCategory(item.id);
                    const element = document.getElementById('work-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-xs font-mono uppercase tracking-widest relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Social Channels, Theme Switcher, Profile, Contact */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Social Icons Quick Links */}
            <div className="flex items-center gap-2 pr-2 border-r border-border">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-8 w-8 rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer bg-surface border-border hover:border-primary text-primary"
              >
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok @nyxsports.id"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-3.5 w-3.5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-8 w-8 rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer bg-surface border-border hover:border-pink-500 text-pink-600 dark:text-pink-400"
              >
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram @nyxsports.id"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-8 w-8 rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer bg-surface border-border hover:border-emerald-500 text-emerald-600 dark:text-emerald-400"
              >
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp +62 815-1381-1623"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            {/* Responsive Dark / Light Mode Toggle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full cursor-pointer bg-surface border-border hover:border-primary/60 transition-all shadow-xs"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-primary transition-transform duration-300 hover:-rotate-12" />
              )}
            </Button>

            <button
              onClick={onOpenAbout}
              className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-primary transition-colors px-2 py-1"
            >
              PROFILE / BIO
            </button>

            <Button
              size="sm"
              onClick={onOpenContact}
              className="h-8 text-xs font-mono uppercase tracking-wider bg-primary text-background px-4 rounded-sm hover:opacity-90 transition-opacity font-medium flex items-center gap-1"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3 h-3" />
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full bg-surface border-border"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-primary" />
              )}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:text-secondary focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col p-8 lg:hidden animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="font-serif text-2xl font-bold uppercase tracking-wider text-primary">NYX</span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="h-8 w-8 rounded-full bg-surface border-border"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-primary" />}
              </Button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-primary"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 my-auto py-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              PHOTOGRAPHY DISCIPLINES
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectCategory(item.id);
                  setMobileMenuOpen(false);
                  const element = document.getElementById('work-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left font-serif text-3xl font-light hover:italic flex items-baseline justify-between border-b border-border/40 pb-2 text-primary"
              >
                <span>{item.label}</span>
              </button>
            ))}

            {/* Social Channel Links on Mobile */}
            <div className="pt-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
                CONNECT & SOCIAL
              </p>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  asChild
                  className="rounded-lg hover:scale-110 transition-all duration-300 h-12 flex items-center justify-center gap-1.5 p-2 bg-surface border-border text-xs font-mono text-primary"
                >
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>TikTok</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="rounded-lg hover:scale-110 transition-all duration-300 h-12 flex items-center justify-center gap-1.5 p-2 bg-surface border-border text-xs font-mono text-pink-600 dark:text-pink-400"
                >
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="rounded-lg hover:scale-110 transition-all duration-300 h-12 flex items-center justify-center gap-1.5 p-2 bg-surface border-border text-xs font-mono text-emerald-600 dark:text-emerald-400"
                >
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenAbout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-surface border border-border text-xs font-mono uppercase tracking-widest text-primary"
              >
                About The Photographer
              </button>
              <Button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-primary text-background text-xs font-mono uppercase tracking-widest font-medium"
              >
                Inquire / Commission
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-between items-center text-[10px] font-mono text-muted">
            <span>JAKARTA, INDONESIA</span>
            <span>PHOTOGRAPHY ARCHIVE</span>
          </div>
        </div>
      )}
    </>
  );
};
