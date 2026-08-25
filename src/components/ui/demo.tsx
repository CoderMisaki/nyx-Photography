import InfiniteGallery from "@/components/ui/3d-gallery-photography";

export default function DemoOne() {
  const sampleImages = [
    { src: '/images/2/stadion1.jpg', alt: 'Stadium Atmosphere' },
    { src: '/images/3/boxing1.jpg', alt: 'Championship Bout' },
    { src: '/images/4/tenis1.jpg', alt: 'Grand Slam Service' },
    { src: '/images/5/swim1.jpg', alt: 'Butterfly Stroke' },
    { src: '/images/2/stadion3.jpg', alt: 'Under the Floodlights' },
    { src: '/images/3/boxing3.jpg', alt: 'Split Second Impact' },
    { src: '/images/4/tenis3.jpg', alt: 'Baseline Focus' },
    { src: '/images/5/swim3.jpg', alt: 'Water Surface Tension' },
  ];

  return (
    <main className="min-h-screen h-full w-full bg-background relative overflow-hidden">
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={8}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex flex-col items-center justify-center text-center px-4 mix-blend-exclusion text-white z-10">
        <span className="font-mono text-xs tracking-[0.3em] uppercase opacity-80 mb-2">Immersive Exhibition</span>
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight font-light">
          <span className="italic">Nyx</span> Archive
        </h1>
        <p className="font-sans text-xs tracking-widest uppercase opacity-70 mt-3">Sports & Editorial Photography</p>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[10px] tracking-widest text-secondary z-10 pointer-events-none">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60 text-[9px] mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </main>
  );
}
