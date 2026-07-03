"use client";

import { useGallery } from "./GalleryContext";
import { canvasImages, wallartImages, decorationImages } from "./marqueeData";
import { Artwork } from "./data";

const mapToArtwork = (paths: string[], category: string): Artwork[] => {
    return paths.map((path, idx) => ({
        id: `${category}-${idx}`,
        title: `${category} Collection`,
        category: category as any,
        image: path,
        medium: '',
        dimensions: '',
        year: '',
        story: '',
    }));
};

const customMarqueeRows = [
    mapToArtwork(canvasImages, 'Paintings'),
    mapToArtwork(wallartImages, 'Wall Arts'),
    mapToArtwork(decorationImages, 'Decorations'),
];

export default function MarqueeGallery() {
    const { setLightbox } = useGallery();

    return (
        <section id="portfolio" className="bg-[#fcf8fc] py-[88px] relative overflow-hidden">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
                    <div>
                        <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">Featured gallery</div>
                        <h2 className="display text-[40px] sm:text-[46px] leading-[1.04] text-[#2b162e] mt-1">The marquee wall</h2>
                        <p className="text-[#6d5970] mt-3 max-w-[580px]">A continuous, painterly scroll click any canvas to view protected, shareable large format.</p>
                    </div>
                    <a href="#full-gallery" className="text-[13.8px] font-[650] text-[#5C1466] px-4 py-[10px] rounded-full border border-[#e7cde3] bg-white hover:border-[#d9a6d3]">View full gallery</a>
                </div>
            </div>

            {/* Marquee frame */}
            <div className="relative px-0">
                <div className="mx-auto max-w-[1420px] rounded-[28px] overflow-hidden p-[6px]"
                    style={{ background: 'linear-gradient(135deg,#5C1466, #B6178C 50%, #E454B0)' }}>
                    <div className="bg-[#fffaf5] rounded-[24px] py-7 faint-grid space-y-5">
                        {customMarqueeRows.map((row, rIdx) => (
                            <div key={rIdx} className="overflow-hidden relative">
                                <div
                                    className={`marquee-track ${rIdx % 2 === 0 ? 'marquee-left' : 'marquee-right'}`}
                                    style={{ animationDuration: `${52 + rIdx * 6}s` }}
                                >
                                    {[...row, ...row].map((art, i) => (
                                        <button
                                            key={`${art.id}-${i}`}
                                            onClick={() => setLightbox(art)}
                                            className="group mr-4 relative flex-shrink-0"
                                        >
                                            <div className="w-[250px] sm:w-[300px] h-[200px] sm:h-[226px] rounded-[19px] overflow-hidden bg-white shadow-[0_8px_24px_rgba(92,20,102,0.10)] border border-[#f2e3f0] transition-all duration-300 group-hover:scale-[1.028] group-hover:shadow-[0_14px_34px_rgba(182,23,140,0.16)]">
                                                <img src={art.image} alt={art.title} draggable={false} onContextMenu={e => e.preventDefault()} className="w-full h-full object-cover protected-img" />
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#340b3b]/86 via-[#340b3b]/22 to-transparent" />
                                                {/* tiny brush dot cursor hint */}
                                                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#E454B0] shadow group-hover:scale-125 transition" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center text-[12px] text-[#a0849d] mt-3">Hover any row to pause • Tap to view & inquire • Protected viewing</div>
            </div>
        </section>
    );
}