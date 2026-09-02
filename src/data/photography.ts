export type CategoryId = 'stadium' | 'boxing' | 'tennis' | 'swimming';

export interface ProfileImage {
  id: string;
  src: string;
  caption: string;
  location: string;
  year: number;
}

export interface PhotographerImage {
  id: string;
  src: string;
  title: string;
  category: CategoryId;
  categoryNumber: string;
  location: string;
  year: number;
  camera: string;
  lens: string;
  aperture: string;
  iso: number;
  shutter: string;
  aspectRatio?: 'cinematic' | 'portrait' | 'square' | 'standard';
  featured?: boolean;
  story?: string;
}

export interface CategoryMeta {
  id: CategoryId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  visualDirection: string;
  atmosphere: string[];
}

export const CATEGORIES: Record<CategoryId, CategoryMeta> = {
  stadium: {
    id: 'stadium',
    number: '02',
    title: 'STADIUM',
    subtitle: 'Dokumentasi Asli Nyx Sports',
    description: 'Dokumentasi Asli Nyx Sports — cinematic scale, roaring arena architecture, electric anticipation, and monumental athletic energy direkam langsung di lapangan.',
    visualDirection: 'Dokumentasi Asli Nyx Sports',
    atmosphere: ['Monumental', 'Atmospheric', 'Kinetic', 'Grand Scale'],
  },
  boxing: {
    id: 'boxing',
    number: '03',
    title: 'BOXING',
    subtitle: 'Inside The Fight',
    description: 'Raw human resilience, intimate tension, sweat, visceral impact, and the sacred silence between rounds.',
    visualDirection: 'Intimate + Raw + Vertical + High-Contrast',
    atmosphere: ['Intense', 'Visceral', 'Unflinching', 'Human'],
  },
  tennis: {
    id: 'tennis',
    number: '04',
    title: 'TENNIS',
    subtitle: 'Precision In Motion',
    description: 'Geometric symmetry, court-line harmony, razor-sharp focus, and graceful kinetic power.',
    visualDirection: 'Geometric + Precise + Elegant + Whitespace',
    atmosphere: ['Rhythmic', 'Harmonious', 'Dynamic', 'Refined'],
  },
  swimming: {
    id: 'swimming',
    number: '05',
    title: 'SWIMMING',
    subtitle: 'Between Water And Motion',
    description: 'Fluid mechanics, refractive light, suspended breath, and the meditative boundary of water and air.',
    visualDirection: 'Fluid + Atmospheric + Immersive + Overlapping',
    atmosphere: ['Fluid', 'Meditative', 'Refractive', 'Weightless'],
  },
};

// Profile images from image/profile/
export const PROFILE_IMAGES: ProfileImage[] = [
  {
    id: 'profile-01',
    src: '/images/profile/profile1.webp',
    caption: 'Field study during sunset training at Gelora Bung Karno.',
    location: 'Jakarta, Indonesia',
    year: 2025,
  },
  {
    id: 'profile-02',
    src: '/images/profile/profile2.webp',
    caption: 'Between rounds at the National Boxing Championship, ringside perspective.',
    location: 'Jakarta, Indonesia',
    year: 2025,
  },
  {
    id: 'profile-03',
    src: '/images/profile/profile3.webp',
    caption: 'Editorial portrait on location with the Leica SL2-S.',
    location: 'Bandung, Indonesia',
    year: 2026,
  },
];

// Real Category 02 (Stadium) images: 17 total
const STADIUM_IMAGES: PhotographerImage[] = [
  {
    id: 'stadium-01',
    src: '/images/2/stadion1.jpg',
    title: 'Sanctuary Under Floodlights',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Jakarta Stadium Arena',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 24-70mm f/2.8L IS USM',
    aperture: 'f/2.8',
    iso: 1600,
    shutter: '1/1600s',
    aspectRatio: 'cinematic',
    featured: true,
    story: 'Eighty thousand voices converge into a single vibration as twilight recedes.',
  },
  {
    id: 'stadium-02',
    src: '/images/2/stadion2.jpg',
    title: 'The Echoing Concourse',
    category: 'stadium',
    categoryNumber: '02',
    location: 'National Sports Complex',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 70-200mm f/2.8L IS USM',
    aperture: 'f/3.2',
    iso: 800,
    shutter: '1/2000s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-03',
    src: '/images/2/stadion3.jpg',
    title: 'Electric Horizon',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Gelora Arena',
    year: 2025,
    camera: 'Sony A9',
    lens: 'Vario-Elmarit-SL 24-90mm',
    aperture: 'f/4.0',
    iso: 1250,
    shutter: '1/1250s',
    aspectRatio: 'cinematic',
    featured: true,
  },
  {
    id: 'stadium-04',
    src: '/images/2/stadion4.jpg',
    title: 'Pre-Match Solitude',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Championship Grounds',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 85mm f/1.2L USM',
    aperture: 'f/2.0',
    iso: 640,
    shutter: '1/2500s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-05',
    src: '/images/2/stadion5.jpg',
    title: 'The Tunnel Breath',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Metropolitan Stadium',
    year: 2025,
    camera: 'Sony A9',
    lens: 'FE 50mm f/1.2 GM',
    aperture: 'f/1.8',
    iso: 2000,
    shutter: '1/1000s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-06',
    src: '/images/2/stadion6.jpg',
    title: 'Surge of the Grandstand',
    category: 'stadium',
    categoryNumber: '02',
    location: 'North Tier Stadium',
    year: 2024,
    camera: 'Sony A9',
    lens: 'RF 70-200mm f/2.8L',
    aperture: 'f/2.8',
    iso: 1600,
    shutter: '1/3200s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-07',
    src: '/images/2/stadion7.jpg',
    title: 'Turf and Horizon',
    category: 'stadium',
    categoryNumber: '02',
    location: 'International Pitch',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 15-35mm f/2.8L',
    aperture: 'f/5.6',
    iso: 400,
    shutter: '1/800s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-08',
    src: '/images/2/stadion8.jpg',
    title: 'Banners in the Wind',
    category: 'stadium',
    categoryNumber: '02',
    location: 'South Terraces',
    year: 2025,
    camera: 'Sony A9',
    lens: 'Summicron-SL 35mm',
    aperture: 'f/2.8',
    iso: 800,
    shutter: '1/2000s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-09',
    src: '/images/2/stadion9.jpg',
    title: 'Nightfall Ritual',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Olympic Arena',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 400mm f/2.8L IS',
    aperture: 'f/2.8',
    iso: 3200,
    shutter: '1/2000s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-10',
    src: '/images/2/stadion10.jpg',
    title: 'Rhythm of the Warm-up',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Main Field',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 70-200mm f/2.8L',
    aperture: 'f/3.5',
    iso: 1000,
    shutter: '1/1600s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-11',
    src: '/images/2/stadion11.jpg',
    title: 'Atmospheric Dispersion',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Sector 4 Seating',
    year: 2024,
    camera: 'Sony A9',
    lens: 'FE 135mm f/1.8 GM',
    aperture: 'f/2.0',
    iso: 800,
    shutter: '1/4000s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-12',
    src: '/images/2/stadion12.jpg',
    title: 'Cathedral of Sport',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Grand Canopy Arch',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 24-70mm f/2.8L',
    aperture: 'f/4.0',
    iso: 400,
    shutter: '1/1000s',
    aspectRatio: 'cinematic',
    featured: true,
  },
  {
    id: 'stadium-13',
    src: '/images/2/stadion13.jpg',
    title: 'The Whistle Approaching',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Touchline East',
    year: 2025,
    camera: 'Sony A9',
    lens: 'APO-Summicron-SL 75mm',
    aperture: 'f/2.0',
    iso: 1250,
    shutter: '1/2500s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-14',
    src: '/images/2/stadion14.jpg',
    title: 'Geometry of the Pitch',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Perimeter Level 2',
    year: 2024,
    camera: 'Sony A9',
    lens: 'RF 15-35mm f/2.8L',
    aperture: 'f/5.0',
    iso: 500,
    shutter: '1/1250s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-15',
    src: '/images/2/stadion15.jpg',
    title: 'Shadows Across the Turf',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Western Stand',
    year: 2025,
    camera: 'Sony A9',
    lens: 'FE 70-200mm f/2.8 GM II',
    aperture: 'f/3.2',
    iso: 640,
    shutter: '1/3200s',
    aspectRatio: 'standard',
  },
  {
    id: 'stadium-16',
    src: '/images/2/stadion16.jpg',
    title: 'The Final Cadence',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Pitch Center',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 400mm f/2.8L IS',
    aperture: 'f/2.8',
    iso: 2500,
    shutter: '1/2000s',
    aspectRatio: 'cinematic',
  },
  {
    id: 'stadium-17',
    src: '/images/2/stadion17.jpg',
    title: 'After the Siren',
    category: 'stadium',
    categoryNumber: '02',
    location: 'Empty Stand Corridor',
    year: 2025,
    camera: 'Sony A9',
    lens: 'Summicron-SL 35mm',
    aperture: 'f/2.0',
    iso: 1600,
    shutter: '1/500s',
    aspectRatio: 'cinematic',
  },
];

// Real Category 03 (Boxing) images: 22 total
const BOXING_IMAGES: PhotographerImage[] = Array.from({ length: 22 }, (_, idx) => {
  const i = idx + 1;
  const titles = [
    'The Canvas Testament',
    'Tension in the Corner',
    'Split Second Velocity',
    'Unfiltered Resiliency',
    'Grit and Glycerin',
    'The Stare Down',
    'Rope Line Defense',
    'Heavy Bag Symphony',
    'Counter-Punch Trajectory',
    'Taped Knuckles & Blood',
    'Under the Blue Light',
    'The 10th Round Gaze',
    'Shadow Boxing Silence',
    'Breath in the Smoke',
    'Clinch and Whisper',
    'Ringside Verdict',
    'The Swarm',
    'Sweat in Suspension',
    'Guard Up',
    'The Bell Resounds',
    'Pure Friction',
    'The Champion Solitude',
  ];
  return {
    id: `boxing-${String(i).padStart(2, '0')}`,
    src: `/images/3/boxing${i}.jpg`,
    title: titles[idx] || `Fight Sequence ${i}`,
    category: 'boxing' as CategoryId,
    categoryNumber: '03',
    location: 'Championship Ring, Jakarta',
    year: 2025,
    camera: 'Sony A9',
    lens: i % 2 === 0 ? 'RF 85mm f/1.2L USM' : 'RF 70-200mm f/2.8L USM',
    aperture: i % 3 === 0 ? 'f/1.8' : 'f/2.8',
    iso: 3200,
    shutter: '1/2000s',
    aspectRatio: 'portrait' as const,
    featured: i === 1 || i === 3 || i === 7 || i === 12,
    story: 'No distance. No shelter. Just the kinetic truth of human endurance.',
  };
});

// Real Category 04 (Tennis) images: 7 total
const TENNIS_IMAGES: PhotographerImage[] = Array.from({ length: 7 }, (_, idx) => {
  const i = idx + 1;
  const titles = [
    'Trajectory of the Serve',
    'Baseline Geometry',
    'Clay Dust Explosion',
    'Precision Follow-Through',
    'The Toss at High Noon',
    'Volley at the Tape',
    'Match Point Poise',
  ];
  return {
    id: `tennis-${String(i).padStart(2, '0')}`,
    src: `/images/4/tenis${i}.jpg`,
    title: titles[idx] || `Tennis Chapter ${i}`,
    category: 'tennis' as CategoryId,
    categoryNumber: '04',
    location: 'National Tennis Center',
    year: 2025,
    camera: 'Sony A9',
    lens: 'FE 400mm f/2.8 GM OSS',
    aperture: 'f/2.8',
    iso: 400,
    shutter: '1/4000s',
    aspectRatio: 'standard' as const,
    featured: i === 1 || i === 3 || i === 5,
    story: 'Every millisecond calculated with geometric discipline and kinetic grace.',
  };
});

// Real Category 05 (Swimming) images: 8 total
const SWIMMING_IMAGES: PhotographerImage[] = Array.from({ length: 8 }, (_, idx) => {
  const i = idx + 1;
  const titles = [
    'The Boundary of Water',
    'Refracted Glide',
    'Surface Tension Fracture',
    'Underwater Horizon',
    'The Breath Above',
    'Turbulence & Calm',
    'Lane Four Cadence',
    'Submerged Velocity',
  ];
  return {
    id: `swimming-${String(i).padStart(2, '0')}`,
    src: `/images/5/swim${i}.jpg`,
    title: titles[idx] || `Aquatic Series ${i}`,
    category: 'swimming' as CategoryId,
    categoryNumber: '05',
    location: 'Aquatic Center, Jakarta',
    year: 2025,
    camera: 'Sony A9',
    lens: 'RF 70-200mm f/2.8L with Underwater Housing',
    aperture: 'f/3.2',
    iso: 800,
    shutter: '1/2500s',
    aspectRatio: 'cinematic' as const,
    featured: i === 1 || i === 3 || i === 6,
    story: 'Weightless suspension in a liquid universe where light sculpts every ripple.',
  };
});

// All Photographs combined (54 category images + 3 profile images)
export const ALL_PHOTOGRAPHS: PhotographerImage[] = [
  ...STADIUM_IMAGES,
  ...BOXING_IMAGES,
  ...TENNIS_IMAGES,
  ...SWIMMING_IMAGES,
];

// Helper functions for easy consumption
export function getImagesByCategory(cat: CategoryId): PhotographerImage[] {
  switch (cat) {
    case 'stadium': return STADIUM_IMAGES;
    case 'boxing': return BOXING_IMAGES;
    case 'tennis': return TENNIS_IMAGES;
    case 'swimming': return SWIMMING_IMAGES;
    default: return ALL_PHOTOGRAPHS;
  }
}

export function getFeaturedImages(): PhotographerImage[] {
  return ALL_PHOTOGRAPHS.filter(img => img.featured);
}

export const EDITORIAL_STORIES = [
  {
    id: 'story-1',
    chapter: 'ESSAY 01',
    title: 'The Golden Hour at Gelora',
    category: 'STADIUM',
    date: 'OCTOBER 2025',
    readTime: '4 MIN READ',
    summary: 'Documenting the acoustic architecture and atmospheric light shift as eighty thousand spectators enter the colosseum.',
    coverImage: '/images/2/stadion1.jpg',
  },
  {
    id: 'story-2',
    chapter: 'ESSAY 02',
    title: 'Under the Lights: 12 Rounds',
    category: 'BOXING',
    date: 'DECEMBER 2025',
    readTime: '6 MIN READ',
    summary: 'Ringside with prime optics: capturing sweat, adrenaline, and raw emotional vulnerability in milliseconds.',
    coverImage: '/images/3/boxing1.jpg',
  },
  {
    id: 'story-3',
    chapter: 'ESSAY 03',
    title: 'Clay & Grace: Geometry of the Serve',
    category: 'TENNIS',
    date: 'JANUARY 2026',
    readTime: '3 MIN READ',
    summary: 'A visual analysis of angular momentum, chalk dust explosions, and the silent symmetry of baseline warfare.',
    coverImage: '/images/4/tenis1.jpg',
  },
  {
    id: 'story-4',
    chapter: 'ESSAY 04',
    title: 'The Submerged Breath',
    category: 'SWIMMING',
    date: 'FEBRUARY 2026',
    readTime: '5 MIN READ',
    summary: 'Exploring water refraction, surface tension, and the solitude of aquatic sprinters pushing past human limits.',
    coverImage: '/images/5/swim1.jpg',
  },
];
