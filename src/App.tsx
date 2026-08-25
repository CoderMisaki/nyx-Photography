import React, { useState, useEffect } from 'react';
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
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<PhotographerImage[]>(ALL_PHOTOGRAPHS);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Modals
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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

        {/* 04 — FEATURED 3D SPATIAL EXHIBITION SECTION */}
        <ThreeDExhibition isStandalone={false} />

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
