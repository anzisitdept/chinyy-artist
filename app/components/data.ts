export type Artwork = {
  id: string;
  title: string;
  category: 'Murals' | 'Paintings' | 'Exhibitions' | 'Community' | 'Commissioned';
  image: string;
  medium: string;
  dimensions: string;
  year: string;
  story: string;
  location?: string;
  priceNote?: string;
};

export const artworks: Artwork[] = [
  {
    id: 'm1',
    title: 'Epekwitk Bloom',
    category: 'Murals',
    image: 'https://images.pexels.com/photos/32339052/pexels-photo-32339052.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900',
    medium: 'Exterior acrylic / wall',
    dimensions: '96ft × 8ft',
    year: '2023',
    story: 'Large-scale public mural celebrating Mi’kmaq motifs and diaspora resilience — painted to leave passersby hopeful.',
    location: 'Charlottetown, PEI',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'm2',
    title: 'Harbour Resonance',
    category: 'Murals',
    image: 'https://images.pexels.com/photos/15792471/pexels-photo-15792471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Acrylic mural',
    dimensions: '48ft × 12ft',
    year: '2022',
    story: 'Portrait-led civic mural drawing from oral histories of PEI waterfront communities.',
    location: 'Downtown Minneapolis (study)',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'm3',
    title: 'Sister Walls – San Felipe',
    category: 'Murals',
    image: 'https://images.pexels.com/photos/33302851/pexels-photo-33302851.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Architectural mural',
    dimensions: 'Site-responsive',
    year: '2024',
    story: 'A joyful Yucatan street corridor study informing the Charlottetown Library Learning Centre proposal.',
    location: 'Study / Proposal',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'm4',
    title: 'Reeperbahn Light',
    category: 'Murals',
    image: 'https://images.pexels.com/photos/30618743/pexels-photo-30618743.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Spray + acrylic',
    dimensions: 'Variable',
    year: '2021',
    story: '“All you need is love” — a painterly love-letter intervention in dense urban space.',
    location: 'Hamburg (reference study)',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'm5',
    title: 'Street Pulse',
    category: 'Commissioned',
    image: 'https://images.pexels.com/photos/30214894/pexels-photo-30214894.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Exterior mural',
    dimensions: '32ft × 10ft',
    year: '2023',
    story: 'Private commission for a community bike corridor — movement, memory, motion.',
    location: 'PEI',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'm6',
    title: 'The Hand That Heals',
    category: 'Murals',
    image: 'https://images.pexels.com/photos/7951968/pexels-photo-7951968.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Acrylic / spray',
    dimensions: 'In progress documentation',
    year: '2024',
    story: 'Work-in-progress — painter at the wall. Healing is labour visible.',
    location: 'Studio wall',
    priceNote: 'Commission inquiry'
  },
  {
    id: 'p1',
    title: 'Magenta Ember',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/13371111/pexels-photo-13371111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000',
    medium: 'Acrylic on canvas',
    dimensions: '48" × 48"',
    year: '2024',
    story: 'Pink and purple field painting — resilience as colour, not just concept.',
    priceNote: 'Price on request'
  },
  {
    id: 'p2',
    title: 'Lumen Drift',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/7325760/pexels-photo-7325760.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Oil on canvas',
    dimensions: '36" × 48"',
    year: '2023',
    story: 'Layered gestures mapping hope, memory, and human connection.',
    priceNote: 'Price on request'
  },
  {
    id: 'p3',
    title: 'Cerulean Call',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/30843200/pexels-photo-30843200.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Mixed media on canvas',
    dimensions: '60" × 40"',
    year: '2024',
    story: 'Blue + gold — an ode to water, migration, and home that travels.',
    priceNote: 'Price on request'
  },
  {
    id: 'p4',
    title: 'Canvas Tide',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/25856314/pexels-photo-25856314.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Acrylic impasto',
    dimensions: '30" × 40"',
    year: '2023',
    story: 'Tactile textures. I want you to feel it before you read the title.',
    priceNote: 'Price on request'
  },
  {
    id: 'p5',
    title: 'Afterglow Archive',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/13411729/pexels-photo-13411729.jpeg?auto=compress&cs=tinysrgb&w=900',
    medium: 'Acrylic on canvas',
    dimensions: '24" × 36"',
    year: '2022',
    story: 'Brush-bled memory — a small painting that stays large in the room.',
    priceNote: 'Price on request'
  },
  {
    id: 'p6',
    title: 'Wild Thread',
    category: 'Paintings',
    image: 'https://images.pexels.com/photos/34902535/pexels-photo-34902535.jpeg?auto=compress&cs=tinysrgb&w=900',
    medium: 'Acrylic expressionism',
    dimensions: '48" × 60"',
    year: '2024',
    story: 'Gestural field, unapologetically vibrant. Identity is a living stroke.',
    priceNote: 'Price on request'
  },
  {
    id: 'e1',
    title: 'Gender-Based Violence – Immersive Room',
    category: 'Exhibitions',
    image: 'https://images.pexels.com/photos/10874942/pexels-photo-10874942.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Immersive installation',
    dimensions: 'Room-scale',
    year: '2024',
    story: 'Innovation PEI supported immersive exhibition — silence, testimony, light.',
    location: 'Innovation PEI, Charlottetown',
    priceNote: 'Exhibition / Loan inquiry'
  },
  {
    id: 'e2',
    title: 'Monet Friends Study – Projection',
    category: 'Exhibitions',
    image: 'https://images.pexels.com/photos/29557134/pexels-photo-29557134.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Gallery installation',
    dimensions: 'Gallery hall',
    year: '2024',
    story: 'Public engagement experiment: how light makes a painting breathe.',
    location: 'Beacon Field',
    priceNote: 'Exhibition inquiry'
  },
  {
    id: 'e3',
    title: 'Window Wonderland – Summerside',
    category: 'Exhibitions',
    image: 'https://images.pexels.com/photos/15138850/pexels-photo-15138850.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Window installation / painting',
    dimensions: 'Storefront series',
    year: 'Jan 2025',
    story: 'Creative PEI winter intervention — art you meet while walking the cold.',
    location: 'Summerside, PEI',
    priceNote: 'Exhibition inquiry'
  },
  {
    id: 'e4',
    title: 'Rainbow Fall – Healing Corridor',
    category: 'Exhibitions',
    image: 'https://images.pexels.com/photos/18283224/pexels-photo-18283224.jpeg?auto=compress&cs=tinysrgb&w=900',
    medium: 'Light + immersive',
    dimensions: 'Corridor installation',
    year: '2024',
    story: 'A gender-based-violence exhibition passage — colour as witness and comfort.',
    location: 'Innovation PEI',
    priceNote: 'Exhibition inquiry'
  },
  {
    id: 'c1',
    title: 'Art Therapy – Two Hands, One Canvas',
    category: 'Community',
    image: 'https://images.pexels.com/photos/8123127/pexels-photo-8123127.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Workshop documentation',
    dimensions: '—',
    year: 'Ongoing',
    story: 'Autism PEI volunteer sessions — co-creation, regulation, joy.',
    location: 'Charlottetown',
    priceNote: 'Workshop booking'
  },
  {
    id: 'c2',
    title: 'Creative Classroom – Colour Circle',
    category: 'Community',
    image: 'https://images.pexels.com/photos/7025563/pexels-photo-7025563.jpeg?auto=compress&cs=tinysrgb&w=1000',
    medium: 'Art education',
    dimensions: '—',
    year: '18+ years',
    story: 'Head of Creative Department heritage — children learn by making brave marks.',
    location: 'Schools – PEI / Nigeria',
    priceNote: 'Workshop booking'
  },
  {
    id: 'c3',
    title: 'Easel Lab – Youth Studio',
    category: 'Community',
    image: 'https://images.pexels.com/photos/8382258/pexels-photo-8382258.jpeg?auto=compress&cs=tinysrgb&w=1100',
    medium: 'Art education photo',
    dimensions: '—',
    year: '2023–2025',
    story: 'Special-needs inclusive studio time. Every child is an artist first.',
    location: 'PEI community rooms',
    priceNote: 'Workshop booking'
  },
  {
    id: 'com1',
    title: 'Charlottetown Library Learning Centre – Proposal Study',
    category: 'Commissioned',
    image: 'https://images.pexels.com/photos/33302850/pexels-photo-33302850.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Mural proposal / site study',
    dimensions: 'Wraparound – proposed',
    year: '2025',
    story: 'Proposal: a wrap-around mural that makes the library feel welcomed, inspired, curious, hopeful, connected.',
    location: 'Charlottetown Library Learning Centre',
    priceNote: 'Public commission – in proposal'
  },
  {
    id: 'com2',
    title: 'Art Love Event – Live Painting',
    category: 'Commissioned',
    image: 'https://images.pexels.com/photos/1172826/pexels-photo-1172826.jpeg?auto=compress&cs=tinysrgb&w=1200',
    medium: 'Live mural / event',
    dimensions: 'Event wall',
    year: 'June 2025',
    story: 'Charlottetown Art Love live painting — community witnessing the act of making.',
    location: 'Charlottetown',
    priceNote: 'Event commission'
  },
];

export const categories = ['All', 'Wall Arts', 'Paintings', 'Decorations', 'Exhibitions', 'Community', 'Commissioned'] as const;

export const HERO_WORKS = [artworks[0], artworks[6], artworks[12], artworks[2], artworks[8], artworks[14]];

