import { artworks } from "./data";

export default function Exhibitions() {
    const timeline = [
        { year: 'June 2025', title: 'Art Love Event, Charlottetown', desc: 'Live painting + community engagement. Event commission.', img: artworks.find(a => a.id === 'com2')!.image },
        { year: 'Jan 2025', title: 'Window Wonderland – Summerside', desc: 'Creative PEI winter window series. Public, walk-up art.', img: artworks.find(a => a.id === 'e3')!.image },
        { year: '2024', title: 'Gender-Based Violence Immersive Exhibition', desc: 'Innovation PEI supported. Silence / testimony / light — a healing corridor.', img: artworks.find(a => a.id === 'e1')!.image },
        { year: 'Jul 2024', title: 'Solo Exhibition – Beacon Field Window Wonderland', desc: 'Solo public installation. Light-reactive painted windows.', img: artworks.find(a => a.id === 'e2')!.image },
        { year: '2025 • Proposal', title: 'Charlottetown Library Learning Centre – Wraparound Mural', desc: 'Current civic proposal. Letter of Intent on file. A mural that leaves people welcomed, inspired, curious, hopeful, connected.', img: artworks.find(a => a.id === 'com1')!.image },
        { year: 'Legacy', title: 'Nigeria Monumental Mural + Life in My City Top 10', desc: '96ft x 8ft original execution. Golden anniversary exhibition — Top 10 winner.', img: artworks[1].image },
    ];

    return (
        <section id="exhibitions" className="py-[88px] bg-white">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="text-center mb-12">
                    <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">Exhibitions & Other Works</div>
                    <h2 className="display text-[40px] text-[#2a182b] mt-2">Public projects & immersive rooms</h2>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E454B0] via-[#B6178C] to-[#5C1466] md:-translate-x-px opacity-70"></div>
                    <div className="space-y-12">
                        {timeline.map((ex, i) => (
                            <div key={ex.title} className="relative md:grid md:grid-cols-2 gap-10 items-center">
                                <div className={`pl-11 md:pl-0 ${i % 2 === 1 ? 'md:col-start-2 md:pl-12' : 'md:pr-12 md:text-right'}`}>
                                    <div className="text-[12px] font-[700] text-[#B6178C]">{ex.year}</div>
                                    <div className="display text-[24px] text-[#2c1a2d] mt-1">{ex.title}</div>
                                    <p className="text-[14.5px] text-[#5d465c] mt-2 leading-relaxed">{ex.desc}</p>
                                </div>
                                <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-12' : 'md:pl-12'} pl-11 mt-4 md:mt-0`}>
                                    <div className="rounded-[20px] overflow-hidden border border-[#efdaea] shadow-[0_10px_28px_rgba(94,22,88,0.11)]">
                                        <img src={ex.img} alt={ex.title} className="w-full h-[210px] object-cover protected-img" draggable={false} onContextMenu={e => e.preventDefault()} />
                                    </div>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 top-1 w-[15px] h-[15px] rounded-full border-[3px] border-white shadow"
                                    style={{ background: i % 2 === 0 ? '#E454B0' : '#5C1466', transform: 'translateX(-50%)' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}