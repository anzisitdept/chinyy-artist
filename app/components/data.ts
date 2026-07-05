import { canvasImages, wallartImages, decorationImages } from "./marqueeData";

export type Artwork = {
  id: string;
  title: string;
  category: 'Wall Arts' | 'Paintings' | 'Decorations' | 'Exhibitions' | 'Community' | 'Commissioned' | 'Murals';
  image: string;
  medium: string;
  dimensions: string;
  year: string;
  story: string;
  location?: string;
  priceNote?: string;
};

const mapToArtwork = (paths: string[], category: Artwork['category']): Artwork[] => {
  return paths.map((path, idx) => ({
    id: `${category.replace(/\s+/g, '-').toLowerCase()}-${idx}`,
    title: `${category} Collection`,
    category: category,
    image: path,
    medium: '',
    dimensions: '',
    year: '',
    story: '',
  }));
};

export const artworks: Artwork[] = [
  ...mapToArtwork(canvasImages, 'Paintings'),
  ...mapToArtwork(wallartImages, 'Wall Arts'),
  ...mapToArtwork(decorationImages, 'Decorations'),
];

export const categories = ['All', 'Wall Arts', 'Paintings', 'Decorations', 'Exhibitions'] as const;

export const HERO_WORKS = [
  artworks[0],
  artworks[Math.floor(artworks.length / 4)],
  artworks[Math.floor(artworks.length / 2)],
  artworks[Math.floor(artworks.length / 1.5)]
].filter(Boolean);
