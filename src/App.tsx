import { useEffect } from "react";
import Lenis from "lenis";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import PrintShop from "./components/PrintShop";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  useEffect(() => {
    // Skip Lenis on touch devices to avoid conflict with native momentum
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isTouchDevice || reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

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

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <PrintShop />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
