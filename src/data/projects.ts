export type Category = "landscape" | "architecture" | "editorial" | "lifestyle" | "commercial";

export interface Project {
  id: string;
  title: string;
  category: Category;
  location: string;
  year: number;
  description: string;
  camera: string;
  lens: string;
  aperture: string;
  iso: number;
  shutter: string;
  images: { src: string; alt: string; aspect: string }[];
}

const IMG = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "landscape", label: "Landscape" },
  { key: "architecture", label: "Architecture" },
  { key: "editorial", label: "Editorial" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "commercial", label: "Commercial" },
];

export const projects: Project[] = [
  {
    id: "quiet-geometry-01",
    title: "Quiet Geometry",
    category: "architecture",
    location: "Bali, Indonesia",
    year: 2025,
    description: "A visual study of contemporary architecture, natural light, and restrained materials.",
    camera: "Canon EOS R5",
    lens: "RF 24-70mm F2.8",
    aperture: "f/8",
    iso: 100,
    shutter: "1/250",
    images: [
      { src: IMG("1487958449943-2429e8be8625"), alt: "White architectural column", aspect: "3/4" },
      { src: IMG("1600585154340-be6161a56a0c", 1600, 1067), alt: "Modern house exterior", aspect: "3/2" },
      { src: IMG("1600607687939-ce8a6c25118c"), alt: "Interior with natural light", aspect: "4/5" },
      { src: IMG("1470071459604-3b5ec3a7fe05", 1600, 1067), alt: "Foggy landscape vista", aspect: "3/2" },
    ],
  },
  {
    id: "emerald-horizons-02",
    title: "Emerald Horizons",
    category: "landscape",
    location: "Ubud, Bali",
    year: 2025,
    description: "Nature, mountains, forest, atmosphere and environmental photography.",
    camera: "Sony A7R V",
    lens: "FE 16-35mm F2.8 GM",
    aperture: "f/11",
    iso: 64,
    shutter: "1/125",
    images: [
      { src: IMG("1506905925346-21bda4d32df4", 1600, 1067), alt: "Mountain peaks", aspect: "3/2" },
      { src: IMG("1441974231531-c6227db76b6e", 1600, 1067), alt: "Forest canopy", aspect: "3/2" },
      { src: IMG("1470071459604-3b5ec3a7fe05", 1600, 1200), alt: "Misty valley", aspect: "4/3" },
      { src: IMG("1439066615861-d1af74d74000", 1600, 1067), alt: "Lake reflection", aspect: "3/2" },
    ],
  },
  {
    id: "silent-form-03",
    title: "Silent Form",
    category: "architecture",
    location: "Tokyo, Japan",
    year: 2025,
    description: "Geometric precision meets natural atmosphere in the built environment.",
    camera: "Canon EOS R5",
    lens: "RF 15-35mm F2.8",
    aperture: "f/11",
    iso: 100,
    shutter: "1/60",
    images: [
      { src: IMG("1511818966892-d7d671e672a2", 1600, 1067), alt: "Geometric building", aspect: "3/2" },
      { src: IMG("1479839672679-a46483c0e7c8", 1600, 1200), alt: "Interior corridor", aspect: "4/3" },
      { src: IMG("1524230572899-a742a8b8c861", 1600, 1067), alt: "Structural lines", aspect: "3/2" },
    ],
  },
  {
    id: "golden-hour-04",
    title: "Golden Hour",
    category: "editorial",
    location: "Paris, France",
    year: 2024,
    description: "Fashion, portraits and artistic editorial photography bathed in warm light.",
    camera: "Hasselblad X2D",
    lens: "XCD 80mm F1.9",
    aperture: "f/2.2",
    iso: 200,
    shutter: "1/500",
    images: [
      { src: IMG("1529626455594-4ff0802cfb7e", 1600, 1200), alt: "Fashion portrait", aspect: "4/3" },
      { src: IMG("1515886657613-9f3515b0c78f", 1600, 1200), alt: "Fashion editorial", aspect: "4/3" },
      { src: IMG("1494790108377-be9c29b29330", 1600, 1200), alt: "Natural light portrait", aspect: "4/3" },
      { src: IMG("1544005313-94ddf0286df2", 1600, 1067), alt: "Studio portrait", aspect: "3/2" },
    ],
  },
  {
    id: "wanderlust-05",
    title: "Wanderlust",
    category: "lifestyle",
    location: "Iceland",
    year: 2024,
    description: "Travel, people, hospitality and cinematic moments across remote landscapes.",
    camera: "Leica Q3",
    lens: "Summilux 28mm F1.7",
    aperture: "f/2.8",
    iso: 400,
    shutter: "1/1000",
    images: [
      { src: IMG("1469854523086-cc02fe5d8800", 1600, 1067), alt: "Road trip van", aspect: "3/2" },
      { src: IMG("1507525428034-b723cf961d3e", 1600, 1067), alt: "Beach at sunset", aspect: "3/2" },
      { src: IMG("1493246507139-91e8fad9978e", 1600, 1200), alt: "Mountain lake", aspect: "4/3" },
    ],
  },
  {
    id: "urban-pulse-06",
    title: "Urban Pulse",
    category: "commercial",
    location: "New York, USA",
    year: 2025,
    description: "Brand campaigns, products and commercial photography in urban settings.",
    camera: "Canon EOS R5",
    lens: "RF 50mm F1.2",
    aperture: "f/1.8",
    iso: 100,
    shutter: "1/500",
    images: [
      { src: IMG("1449824913935-59a10b8d2000", 1600, 1067), alt: "City aerial", aspect: "3/2" },
      { src: IMG("1477959858617-67f85cf4f1df", 1600, 1200), alt: "City skyline", aspect: "4/3" },
      { src: IMG("1522708323590-d24dbb6b0267"), alt: "Interior product", aspect: "4/5" },
    ],
  },
  {
    id: "atelier-light-07",
    title: "Atelier Light",
    category: "editorial",
    location: "Milan, Italy",
    year: 2024,
    description: "An intimate exploration of light, texture, and the human form.",
    camera: "Hasselblad X2D",
    lens: "XCD 65mm F2.8",
    aperture: "f/4",
    iso: 100,
    shutter: "1/250",
    images: [
      { src: IMG("1519681393012-96e2e8ccd7cc", 1600, 1200), alt: "Light and shadow", aspect: "4/3" },
      { src: IMG("1507003211169-0a1dd7228f2d", 1600, 1200), alt: "Portrait study", aspect: "4/3" },
      { src: IMG("1554080353-a576cf803bda", 1600, 1067), alt: "Camera in hands", aspect: "3/2" },
    ],
  },
  {
    id: "terra-08",
    title: "Terra",
    category: "landscape",
    location: "Patagonia, Argentina",
    year: 2025,
    description: "Raw earth, untouched wilderness, and the quiet power of remote places.",
    camera: "Sony A7R V",
    lens: "FE 70-200mm F2.8 GM",
    aperture: "f/8",
    iso: 200,
    shutter: "1/500",
    images: [
      { src: IMG("1501594907352-04cda38ebc29", 1600, 1067), alt: "Patagonian landscape", aspect: "3/2" },
      { src: IMG("1464822759023-fed622ff2c3b", 1600, 1067), alt: "Mountain range", aspect: "3/2" },
      { src: IMG("1519681393012-96e2e8ccd7cc", 1600, 1200), alt: "Clouds and terrain", aspect: "4/3" },
    ],
  },
  {
    id: "interiors-09",
    title: "Refined Interiors",
    category: "commercial",
    location: "Sydney, Australia",
    year: 2024,
    description: "Hospitality and real estate interiors captured with editorial precision.",
    camera: "Canon EOS R5",
    lens: "TS-E 24mm F3.5",
    aperture: "f/11",
    iso: 100,
    shutter: "1/30",
    images: [
      { src: IMG("1616486338812-3dadae4b4ace"), alt: "Modern interior", aspect: "4/5" },
      { src: IMG("1600607687939-ce8a6c25118c", 1600, 1067), alt: "Living space", aspect: "3/2" },
      { src: IMG("1615873968403-89e068629265"), alt: "Detail shot", aspect: "4/5" },
    ],
  },
  {
    id: "portraits-10",
    title: "Faces of Light",
    category: "lifestyle",
    location: "Bali, Indonesia",
    year: 2025,
    description: "Intimate portraits capturing authentic human connection and emotion.",
    camera: "Leica M11",
    lens: "Summilux 50mm F1.4",
    aperture: "f/1.4",
    iso: 400,
    shutter: "1/1000",
    images: [
      { src: IMG("1515886657613-9f3515b0c78f", 1600, 1200), alt: "Portrait natural", aspect: "4/3" },
      { src: IMG("1494790108377-be9c29b29330", 1600, 1200), alt: "Warm smile", aspect: "4/3" },
      { src: IMG("1544005313-94ddf0286df2", 1600, 1067), alt: "Studio portrait", aspect: "3/2" },
      { src: IMG("1507003211169-0a1dd7228f2d", 1600, 1200), alt: "Candid moment", aspect: "4/3" },
    ],
  },
];
