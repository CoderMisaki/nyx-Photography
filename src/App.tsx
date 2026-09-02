import React, { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/navigation/Navbar';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { SelectedWork } from '@/components/gallery/SelectedWork';
import { CategoryContainer } from '@/components/categories/CategoryContainer';
import { AboutSection } from '@/components/profile/AboutSection';
import { EditorialStories } from '@/components/stories/EditorialStories';
import { ContactSection } from '@/components/contact/ContactSection';
import { EditorialFooter } from '@/components/footer/EditorialFooter';
import { Lightbox } from '@/components/gallery/Lightbox';
import { CategoryId, ALL_PHOTOGRAPHS, PhotographerImage, getImagesByCategory } from '@/data/photography';

const ThreeDExhibition = lazy(() => import('@/components/exhibition/ThreeDExhibition').then(m => ({ default: m.ThreeDExhibition })));

function LazyThreeD() {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="min-h-[50vh]">
      {visible ? <ThreeDExhibition isStandalone={false} /> : <div className="min-h-[50vh] bg-surface-soft border-y border-border/40 flex items-center justify-center font-mono text-xs text-muted">3D ARCHIVE — SCROLL TO LOAD</div>}
    </div>
  );
}

function MainPortfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<PhotographerImage[]>(ALL_PHOTOGRAPHS);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Modals
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Initialize Lenis - ditunda & diringankan agar tombol langsung bisa dipencet, scroll tidak lag di mobile
  useEffect(() => {
    // cek preferensi user & mobile
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (prefersReduced) return; // off kan smooth di user yang sensitif gerak

    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    let idleId: number | null = null;

    const initLenis = () => {
      lenis = new Lenis({
        duration: isMobile ? 0.6 : 0.85, // lebih pendek di mobile biar tidak berat
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // cubicOut ringan
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: !isMobile, // matikan smoothWheel di mobile, biar native scroll
        wheelMultiplier: 0.85,
        touchMultiplier: 1.2,
        syncTouch: false, // jangan sync touch di mobile, bikin lag
        infinite: false,
      } as any);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    // tunda init sampai browser idle + 600ms, jadi tombol bisa dipencet langsung
    const doInit = () => {
      if ('requestIdleCallback' in window) {
        // @ts-ignore
        idleId = (window as any).requestIdleCallback(initLenis, { timeout: 1200 });
      } else {
        idleId = setTimeout(initLenis, 700) as unknown as number;
      }
    };
    // delay sedikit agar first paint tidak ter-block
    const timer = setTimeout(doInit, 350) as unknown as number;

    return () => {
      clearTimeout(timer as any);
      if (idleId !== null) {
        // @ts-ignore
        if ('cancelIdleCallback' in window) (window as any).cancelIdleCallback(idleId);
        else clearTimeout(idleId as any);
      }
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  const handleOpenLightbox = (images: PhotographerImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenSelectedWorkLightbox = (cat: CategoryId, indexInCategory: number) => {
    const images = getImagesByCategory(cat);
    setLightboxImages(images);
    setLightboxIndex(indexInCategory);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-primary font-sans antialiased selection:bg-primary selection:text-background transition-colors duration-400">
      {/* Navigation */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
        }}
        onOpenAbout={() => {
          const aboutEl = document.getElementById('about-section');
          if (aboutEl) {
            aboutEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            setAboutModalOpen(true);
          }
        }}
        onOpenContact={() => {
          const contactEl = document.getElementById('contact-section');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            setContactModalOpen(true);
          }
        }}
      />

      {/* Main Experience */}
      <main className="relative">
        {/* 01 — HERO */}
        <EditorialHero
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            const workEl = document.getElementById('work-section');
            if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreClick={() => {
            const workEl = document.getElementById('work-section');
            if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 02 — SELECTED WORK */}
        <SelectedWork
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            const workEl = document.getElementById('work-section');
            if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLightboxWithImage={handleOpenSelectedWorkLightbox}
        />

        {/* 03 — CATEGORY INDEX & DEDICATED CHAPTER GALLERIES */}
        <CategoryContainer
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 04 — FEATURED 3D SPATIAL EXHIBITION SECTION - lazy & only when visible untuk hemat awal */}
        <Suspense fallback={<div className="min-h-[50vh] bg-surface-soft border-y border-border/40 flex items-center justify-center font-mono text-xs text-muted">LOADING 3D ARCHIVE…</div>}>
          <LazyThreeD />
        </Suspense>

        {/* 05 — PROFILE / ABOUT (WITH INTERACTIVE PROFILE CAROUSEL) */}
        <AboutSection
          onContactClick={() => {
            const contactEl = document.getElementById('contact-section');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 06 — SELECTED STORIES / ESSAYS */}
        <EditorialStories />

        {/* 07 — CONTACT & COMMISSION */}
        <ContactSection />

        {/* 08 — FOOTER */}
        <EditorialFooter />
      </main>

      {/* Lightbox System */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* About Modal Fallback */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-background max-w-4xl w-full border border-border relative my-8 shadow-2xl">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase text-secondary hover:text-primary p-2"
            >
              [CLOSE ✕]
            </button>
            <AboutSection
              onContactClick={() => {
                setAboutModalOpen(false);
                setContactModalOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Contact Modal Fallback */}
      {contactModalOpen && (
        <ContactSection
          isOpenModal={true}
          onCloseModal={() => setContactModalOpen(false)}
        />
      )}
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainPortfolio />
    </ThemeProvider>
  );
}

export default App;
