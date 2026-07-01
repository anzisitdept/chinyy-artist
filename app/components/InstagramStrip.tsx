import { artworks } from "./data";

export default function InstagramStrip() {
    return (
        <section className="py-14 bg-[#fdf6fb] border-y border-[#f4e2ee]">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                    <div className="display text-[27px] text-[#2d1b2d]">See more on Instagram</div>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[13.8px] font-[640] text-[#B6178C]">@atchinnyartworld →</a>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {artworks.slice(0, 6).map(a => (
                        <div key={a.id} className="aspect-square rounded-[18px] overflow-hidden border border-[#f0d8e7]">
                            <img src={a.image} alt="" className="w-full h-full object-cover protected-img" draggable={false} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}