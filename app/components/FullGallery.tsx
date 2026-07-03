"use client";

import { categories } from "./data";
import { useGallery } from "./GalleryContext";

export default function FullGallery() {
    const { activeCat, setActiveCat, filtered, setLightbox } = useGallery();

    return (
        <section id="full-gallery" className="py-[92px] bg-[#fdf9fc] border-y border-[#f4e4f0]">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex flex-wrap items-end justify-between gap-5 mb-7">
                    <div>
                        <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">Portfolio</div>
                        <h2 className="display text-[40px] text-[#2a182b]">Gallery — protected viewing</h2>
                    </div>
                    <div className="text-[12.6px] text-[#96748f]">Shareable links • Right-click disabled • Watermark on large view</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-[16px] py-[9.5px] rounded-full text-[13.3px] font-[600] border transition ${activeCat === cat
                                ? 'text-white border-transparent shadow-md'
                                : 'text-[#6a3c5d] border-[#e6c7dd] bg-white hover:border-[#d5a6c7]'
                                }`}
                            style={activeCat === cat ? { background: 'linear-gradient(135deg,#5C1466,#B6178C 65%, #E454B0)' } : {}}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(art => (
                        <div key={art.id} id={`art-${art.id}`} className="group cursor-pointer"
                            onClick={() => setLightbox(art)}>
                            <div className="rounded-[22px] overflow-hidden border border-[#f0dde9] bg-white shadow-[0_6px_22px_rgba(93,20,102,0.07)] relative transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-[0_18px_42px_rgba(182,23,140,0.15)]">
                                <div className="aspect-[4/3.34] overflow-hidden bg-[#faf0f6] relative">
                                    <img src={art.image} alt={art.title} draggable={false} onContextMenu={e => e.preventDefault()} className="w-full h-full object-cover protected-img transition-transform duration-500 group-hover:scale-[1.045]" />
                                    <div className="absolute top-3 left-3 text-[10.8px] font-[650] tracking-wide uppercase px-[9px] py-[5px] rounded-full bg-white/92 text-[#77285e] shadow-sm border border-[#f1d4e6]">
                                        {art.category}
                                    </div>
                                </div>
                                <div className="px-4 pt-3 pb-4">
                                    <div className="display text-[18.6px] text-[#2d1a2c] leading-tight">{art.title}</div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-[12.5px] text-[#a06d90] group-hover:text-[#B6178C]">View Details →</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}