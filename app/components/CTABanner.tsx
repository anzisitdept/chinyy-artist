export default function CTABanner() {
    return (
        <section className="hero-gradient text-white py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 watermark-tile" />
            <div className="relative max-w-[820px] mx-auto px-6">
                <h3 className="display text-[34px] sm:text-[40px]">Let's create something that stays.</h3>
                <p className="text-[#f7d3ea] mt-3 text-[16px]">Public art, gallery originals, and healing workshops — Nigerian-Canadian, PEI-based.</p>
                <div className="mt-6 flex justify-center gap-3">
                    <a href="#portfolio" className="px-[20px] py-[11.5px] rounded-full bg-white text-[#5C1466] font-[660] text-[14px]">View Portfolio</a>
                    <a href="#contact" className="px-[20px] py-[11.5px] rounded-full border border-white/40 text-white font-[600] text-[14px]">Commission a piece</a>
                </div>
            </div>
        </section>
    );
}