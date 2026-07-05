"use client";

import { useEffect, useState } from "react";
import { useGallery } from "./GalleryContext";

// Define your manual hero slides here. 
// You can change 'image' to the main full-size picture and 'thumbnail' to a different image if you want.
const MANUAL_HERO_SLIDES = [
    {
        id: 'slide-1',
        title: 'Artwork 1',
        category: 'Paintings',
        year: '2024',
        image: '/canvas/1.jpeg',
        thumbnail: '/canvas/1.jpeg',
        medium: 'Acrylic',
        dimensions: '48" × 48"',
    },
    {
        id: 'slide-2',
        title: 'Artwork 1',
        category: 'Paintings',
        year: '2024',
        image: '/canvas/27.jpeg',
        thumbnail: '/canvas/27.jpeg',
        medium: 'Acrylic',
        dimensions: '48" × 48"',
    },
    {
        id: 'slide-3',
        title: 'Artwork 2',
        category: 'Wall Arts',
        year: '2023',
        image: '/wallart/6 (3).jpeg',
        thumbnail: '/wallart/6 (3).jpeg',
        medium: 'Mixed Media',
        dimensions: '36" × 48"',
    },
    {
        id: 'slide-4',
        title: 'Artwork 2',
        category: 'Wall Arts',
        year: '2023',
        image: '/wallart/26.jpeg',
        thumbnail: '/wallart/26.jpeg',
        medium: 'Mixed Media',
        dimensions: '36" × 48"',
    },
    {
        id: 'slide-5',
        title: 'Artwork 3',
        category: 'Decorations',
        year: '2022',
        image: '/decoration/1.jpeg',
        thumbnail: '/decoration/1.jpeg',
        medium: 'Installation',
        dimensions: 'Variable',
    }
];

export default function Hero() {
    const { openInquire } = useGallery();
    const [heroIdx, setHeroIdx] = useState(0);

    // hero rotation
    useEffect(() => {
        const t = setInterval(() => setHeroIdx((i) => (i + 1) % MANUAL_HERO_SLIDES.length), 5200);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="home" className="hero-gradient text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.14] watermark-tile pointer-events-none" />
            <div className="max-w-[1220px] mx-auto px-5 sm:px-10 lg:px-12 pt-[40px] pb-[64px] lg:py-[104px] grid lg:grid-cols-[1.12fr_.98fr] gap-12 items-center relative">
                {/* left */}
                <div className="min-w-0">

                    <h1 className="display text-[32px] sm:text-[48px] lg:text-[68px] leading-[1.08] sm:leading-[0.93] font-[660] mt-4 tracking-[-0.018em] break-words">
                        Art that stays with you<br className="hidden sm:block" />
                        <span className="italic font-[550] text-[#ffd2f2]">long after you leave</span><br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>the room.
                    </h1>
                    <p className="mt-[22px] text-[17.5px] leading-relaxed text-[#f7dff0] max-w-[560px] font-[400]">
                        I'm Chinenye (Chinny) Okonta — muralist, painter, and art educator. Public art, gallery originals, and art therapy workshops grounded in resilience, diversity, identity, and healing.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#portfolio" className="px-[22px] py-[13px] rounded-full bg-white text-[#5C1466] font-[650] text-[14.5px] shadow-lg hover:translate-y-[-1px] transition">
                            View Portfolio →
                        </a>
                        <button onClick={() => openInquire()} className="px-[22px] py-[13px] rounded-full border border-white/35 text-white font-[600] text-[14.5px] backdrop-blur-sm hover:bg-white/10 transition">
                            Commission a piece
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[12.8px] text-[#f6cde9]">
                        <div><span className="text-white font-[700] text-[18px] mr-1">18+</span> years teaching</div>
                        <div><span className="text-white font-[700] text-[18px] mr-1">96ft</span> mural executed</div>
                        <div><span className="text-white font-[700] text-[18px] mr-1">3</span> countries exhibited</div>
                        <div><span className="text-white font-[700] text-[18px] mr-1">2024</span> immersive GBV exhibition</div>
                    </div>
                </div>

                {/* right: hero carousel */}
                <div className="relative min-w-0 w-full max-w-full">
                    <div className="absolute -top-6 -left-9 w-24 h-24 rounded-full blur-[32px] opacity-70" style={{ background: 'radial-gradient(circle,#E454B0, transparent 70%)' }} />
                    <div className="relative rounded-[34px] overflow-hidden shadow-[0_34px_80px_rgba(46,4,53,0.44)] border border-white/18 bg-[#2c0a33]/10 backdrop-blur-sm">
                        <div className="aspect-[4/5] relative overflow-hidden">
                            {MANUAL_HERO_SLIDES.map((hw, i) => (
                                <div key={hw.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ${i === heroIdx ? 'opacity-100' : 'opacity-0'}`}>
                                    <img
                                        src={hw.image}
                                        alt={hw.title}
                                        draggable={false}
                                        onContextMenu={(e) => e.preventDefault()}
                                        className={`w-full h-full object-cover protected-img ${i === heroIdx ? 'brush-reveal' : ''}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a021f]/78 via-[#380d45]/16 to-transparent" />
                                    {/* watermark veil */}
                                    <div className="absolute inset-0 opacity-[0.11] pointer-events-none" style={{
                                        backgroundImage: `repeating-linear-gradient(-38deg, rgba(255,255,255,.36) 0 1px, transparent 1px 64px)`,
                                    }} />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="text-[11px] uppercase tracking-wider text-[#ffc8ef]">{hw.category} • {hw.year}</div>
                                        <div className="display text-[26px] font-[600]">{hw.title}</div>
                                        <div className="text-[13.4px] text-[#f2cde6] mt-1">{hw.medium} — {hw.dimensions}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* thumbnails */}
                        <div className="flex gap-[9px] px-4 py-3 bg-[#27092d]/70 border-t border-white/10 overflow-x-auto">
                            {MANUAL_HERO_SLIDES.map((hw, i) => (
                                <button key={hw.id}
                                    onClick={() => setHeroIdx(i)}
                                    className={`flex-shrink-0 w-[68px] h-[48px] rounded-lg overflow-hidden border-2 transition-all ${i === heroIdx ? 'border-[#E454B0] scale-[1.03]' : 'border-white/18 opacity-75 hover:opacity-100'}`}>
                                    <img src={hw.thumbnail} className="w-full h-full object-cover protected-img" draggable={false} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* splash logo */}
                    <div className="absolute -right-5 -bottom-7 w-28 h-28 sm:w-36 sm:h-36 splash-pulse pointer-events-none select-none">
                        <img src="/logo-splash.png" alt="" className="w-full h-full object-contain drop-shadow-2xl" draggable={false} />
                    </div>
                </div>
            </div>

            {/* bleed edge */}
            <svg viewBox="0 0 1440 66" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,16 C220,58 420,4 720,34 C1010,62 1220,22 1440,44 L1440,66 L0,66 Z" fill="#fff" />
            </svg>
        </section>
    );
}