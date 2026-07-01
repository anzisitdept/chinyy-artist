"use client";

import { useGallery } from "./GalleryContext";

export default function InquiryModal() {
    const { inquiryOpen, setInquiryOpen, inquiryArt, showToast } = useGallery();

    if (!inquiryOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#120614]/75 backdrop-blur-sm" onClick={() => setInquiryOpen(false)} />
            <div className="relative w-full max-w-[640px] rounded-[26px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                <div className="px-7 pt-6 pb-4" style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C 66%, #E454B0)' }}>
                    <div className="text-white">
                        <div className="text-[12px] uppercase tracking-wider text-[#ffcdf0] font-[700]">Studio Inquiry</div>
                        <div className="display text-[26px]">Commission / purchase inquiry</div>
                        {inquiryArt && <div className="text-[13.5px] text-[#ffdff3] mt-1">Re: {inquiryArt.title} — {inquiryArt.category}</div>}
                    </div>
                    <button onClick={() => setInquiryOpen(false)} className="absolute top-4 right-4 text-white/90 text-[21px]">×</button>
                </div>
                <form
                    onSubmit={(e) => { e.preventDefault(); setInquiryOpen(false); showToast('Inquiry sent — Chinny will reply within 48 hours.'); }}
                    className="p-7 grid gap-4"
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input required placeholder="Full name" className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] outline-none focus:border-[#B6178C]" />
                        <input required type="email" placeholder="Email" className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] outline-none focus:border-[#B6178C]" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <select className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] bg-white outline-none focus:border-[#B6178C]">
                            <option>Mural Commission</option>
                            <option>Original Art Purchase</option>
                            <option>Art Education / Therapy Workshop</option>
                            <option>Exhibition / Loan</option>
                            <option>Press / Collaboration</option>
                        </select>
                        <input placeholder="Budget range (optional)" className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] outline-none focus:border-[#B6178C]" />
                    </div>
                    <input
                        defaultValue={inquiryArt ? `${inquiryArt.title} – ${inquiryArt.id}` : ''}
                        placeholder="Artwork reference (auto-filled if from gallery)"
                        className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] outline-none focus:border-[#B6178C]"
                    />
                    <textarea required rows={4} placeholder="Project description, site, timeline, vision…" className="px-[13px] py-[12px] rounded-xl border border-[#e0bfd1] text-[14px] outline-none focus:border-[#B6178C] resize-y" />
                    <button className="py-[13px] rounded-full text-white font-[660] text-[15px]"
                        style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C)' }}>
                        Send price-on-request inquiry
                    </button>
                    <div className="text-[11.7px] text-center text-[#9a6f87]">No payment info collected. Studio will reply personally via email. • PEI • Epekwitk</div>
                </form>
            </div>
        </div>
    );
}