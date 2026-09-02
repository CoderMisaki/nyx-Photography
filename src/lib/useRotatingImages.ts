import { useEffect, useState, useRef } from 'react';
import { PhotographerImage } from '@/data/photography';

// Rotasi array gambar setiap intervalMs, tetap dalam konteks kategori yang sama
// Tidak pindah ke kategori lain, hanya reorder / shift di dalam array kategori itu sendiri

export function useRotatingImages(images: PhotographerImage[], intervalMs = 3000, enabled = true) {
  const [offset, setOffset] = useState(0);
  const len = images.length;
  const paused = useRef(false);

  useEffect(() => {
    setOffset(0); // reset when category changes
  }, [images]);

  useEffect(() => {
    if (!enabled || len <= 1) return;
    // pause when tab hidden untuk hemat battery
    const onVis = () => {
      paused.current = document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);
    const id = setInterval(() => {
      if (paused.current || document.hidden) return;
      setOffset(prev => (prev + 1) % len);
    }, intervalMs);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [len, intervalMs, enabled]);

  if (len === 0) return images;
  // rotate by offset: slice
  if (offset === 0) return images;
  return [...images.slice(offset), ...images.slice(0, offset)];
}
