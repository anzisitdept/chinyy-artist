"use client";

import { artworks } from "./data";
import { useGallery } from "./GalleryContext";

export default function Services() {
    const { openInquire } = useGallery();

    const services = [
        {
            title: 'Mural Commissions',
            desc: 'Public & private large-scale, site-responsive wall works. Concept • site visit • design proposal • execution • unveiling.',
            img: artworks[0].image,
            bullets: ['96ft x 8ft executed reference', 'Library Learning Centre proposal live', 'Municipal + private ready']
        },
        {
            title: 'Original Art & Paintings',
            desc: 'Gallery originals, commission-ready. Emotionally charged, colour-led works – price on inquiry.',
            img: artworks[6].image,
            bullets: ['Acrylic / oil / mixed media', 'Shipping + certificate of authenticity', 'Studio commissions open']
        },
        {
            title: 'Art Education & Art Therapy Workshops',
            desc: 'Schools, special-needs programs, Autism PEI partners. Healing through making.',
            img: artworks[16].image,
            bullets: ['SEN inclusive practice', '18+ years Head of Creative Dept.', 'Community & corporate workshops']
        },
    ];

    return (
        <section id="services" className="py-20 bg-[#fcf7fb]">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="text-center max-w-[720px] mx-auto mb-12">
                    <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">Services</div>
                    <h2 className="display text-[41px] text-[#2a182a] mt-2">Murals • Original art • Art education & therapy</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-7">
                    {services.map(s => (
                        <div key={s.title} className="rounded-[26px] overflow-hidden bg-white border border-[#f0dde9] glow-card transition-all">
                            <div className="h-48 relative overflow-hidden">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover protected-img" draggable={false} onContextMenu={e => e.preventDefault()} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#35103a]/45 to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="display text-[22px] text-[#2e1831]">{s.title}</div>
                                <p className="text-[14.5px] text-[#5e4b5d] mt-2 leading-relaxed">{s.desc}</p>
                                <ul className="mt-4 space-y-1.5 text-[13.2px] text-[#6b5069]">
                                    {s.bullets.map(b => <li key={b}>• {b}</li>)}
                                </ul>
                                <button onClick={() => openInquire()} className="mt-5 w-full py-[11px] rounded-full font-[600] text-[13.8px] text-white"
                                    style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C)' }}>
                                    Request project inquiry
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}