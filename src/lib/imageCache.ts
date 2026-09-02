// Simple image cache via localStorage + browser Cache
// Menyimpan daftar URL yang sudah berhasil diload, jadi kunjungan berikutnya tidak fetch ulang
// Untuk gambar yang besar, kita tidak simpan base64 di localStorage (limit 5MB) — cukup flag + preload via Image()

const CACHE_KEY = 'nyx-image-cache-v1';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 hari

interface CacheEntry {
  src: string;
  ts: number;
}

function safeParse(raw: string | null): Record<string, CacheEntry> {
  if (!raw) return {};
  try {
    const j = JSON.parse(raw);
    return typeof j === 'object' && j !== null ? j : {};
  } catch { return {}; }
}

export function getCachedSet(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  const raw = localStorage.getItem(CACHE_KEY);
  const obj = safeParse(raw);
  const now = Date.now();
  const set = new Set<string>();
  for (const [k, v] of Object.entries(obj)) {
    if (now - v.ts < CACHE_TTL_MS) set.add(k);
  }
  return set;
}

export function markImageCached(src: string) {
  if (typeof window === 'undefined') return;
  const raw = localStorage.getItem(CACHE_KEY);
  const obj = safeParse(raw);
  obj[src] = { src, ts: Date.now() };
  // prevent quota exceed: keep max 300 entries (LRU)
  const entries = Object.entries(obj).sort((a,b)=> b[1].ts - a[1].ts).slice(0,300);
  localStorage.setItem(CACHE_KEY, JSON.stringify(Object.fromEntries(entries)));
}

export function isImageCached(src: string): boolean {
  return getCachedSet().has(src);
}

// Preload only uncached images, mark when loaded
export function preloadImages(srcs: string[], onProgress?: (loaded:number, total:number)=>void) {
  const cached = getCachedSet();
  const toLoad = srcs.filter(s => !cached.has(s));
  if (toLoad.length === 0) {
    onProgress?.(srcs.length, srcs.length);
    return Promise.resolve();
  }
  let loaded = 0;
  const promises = toLoad.map(src => new Promise<void>((res)=>{
    const img = new Image();
    // gunakan decoding async agar tidak block main thread
    if ('decode' in img) {
      img.src = src;
      // @ts-ignore
      img.decode().then(()=>{ markImageCached(src); loaded++; onProgress?.(loaded, toLoad.length); res(); }).catch(()=>{ loaded++; onProgress?.(loaded, toLoad.length); res(); });
    } else {
      (img as HTMLImageElement).onload = (img as HTMLImageElement).onerror = () => { markImageCached(src); loaded++; onProgress?.(loaded, toLoad.length); res(); };
      (img as HTMLImageElement).src = src;
    }
  }));
  return Promise.all(promises).then(()=>{});
}

// Hook helper: generate versioned key for localStorage caching of current image set
export function getCacheVersionKey() { return CACHE_KEY; }
