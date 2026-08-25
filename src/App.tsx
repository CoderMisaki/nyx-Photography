import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/navigation/Navbar';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { SelectedWork } from '@/components/gallery/SelectedWork';
import { CategoryContainer } from '@/components/categories/CategoryContainer';
import { ThreeDExhibition } from '@/components/exhibition/ThreeDExhibition';
import { AboutSection } from '@/components/profile/AboutSection';
import { EditorialStories } from '@/components/stories/EditorialStories';
import { ContactSection } from '@/components/contact/ContactSection';
import { EditorialFooter } from '@/components/footer/EditorialFooter';
import { Lightbox } from '@/components/gallery/Lightbox';
import { CategoryId, ALL_PHOTOGRAPHS, PhotographerImage, getImagesByCategory } from '@/data/photography';

function MainPortfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<PhotographerImage[]>(ALL_PHOTOGRAPHS);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Optimized Lenis Smooth Scroll Setup
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.8 : 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
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

  const scrollToId = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: -20, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary font-sans antialiased selection:bg-primary selection:text-background transition-colors duration-300">
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToId('work-section');
        }}
        onOpenAbout={() => scrollToId('about-section')}
        onOpenContact={() => scrollToId('contact-section')}
      />

      <main className="relative">
        <EditorialHero
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            scrollToId('work-section');
          }}
          onExploreClick={() => scrollToId('work-section')}
        />

        <SelectedWork
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            scrollToId('work-section');
          }}
          onOpenLightboxWithImage={handleOpenSelectedWorkLightbox}
        />

        <CategoryContainer
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenLightbox={handleOpenLightbox}
        />

        <ThreeDExhibition isStandalone={false} />

        <AboutSection onContactClick={() => scrollToId('contact-section')} />

        <EditorialStories />

        <ContactSection />

        <EditorialFooter />
      </main>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background max-w-4xl w-full border border-border relative my-8 shadow-2xl p-6">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase text-secondary hover:text-primary p-2"
            >
              [CLOSE ✕]
            </button>
            <AboutSection onContactClick={() => {
              setAboutModalOpen(false);
              setContactModalOpen(true);
            }} />
          </div>
        </div>
      )}

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
