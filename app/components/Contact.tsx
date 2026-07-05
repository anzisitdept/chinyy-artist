"use client";

import { useGallery } from "./GalleryContext";
import { MapPin, Palette, Mail } from "lucide-react";

export default function Contact() {
    const { showToast } = useGallery();

    return (
        <section id="contact" className="py-[90px] bg-white">
            <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12 grid lg:grid-cols-[.95fr_1.05fr] gap-12 items-start">
                <div>
                    <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">Contact</div>
                    <h2 className="display text-[38px] text-[#29172a] leading-[1.08] mt-2">Let's create something that stays.</h2>
                    <p className="text-[15.6px] text-[#5a4659] mt-4 leading-relaxed">
                        Mural commissions, gallery sales, workshops, public art proposals, collaborations. I reply within 48 hours, PEI time.
                    </p>
                    <div className="mt-7 space-y-3 text-[14.4px] text-[#514053]">
                        <div className="flex items-center gap-2.5"><MapPin size={17} className="text-[#B6178C]" /> Charlottetown, Prince Edward Island • Epekwitk</div>
                        <div className="flex items-center gap-2.5"><Palette size={17} className="text-[#B6178C]" /> @atchinnyartworld on Instagram</div>
                        <div className="flex items-center gap-2.5"><Mail size={17} className="text-[#B6178C]" /> Inquiry form — preferred contact (privacy-safe)</div>
                    </div>
                    <div className="mt-8 rounded-[20px] border border-[#f1d9e8] bg-[#fff8fd] p-5 text-[13.4px] text-[#6a4964] leading-relaxed">
                        Direct phone/email available on request for institutional / municipal committees. Public contact is form-first to protect studio privacy — per artist request.
                    </div>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target as HTMLFormElement);
                        const name = formData.get('name');
                        const email = formData.get('email');
                        const service = formData.get('service');
                        const timeline = formData.get('timeline');
                        const message = formData.get('message');

                        const text = `Hello Chinny,\n\nMy name is ${name} (${email}).\nI am interested in: ${service}\nTimeline: ${timeline || 'N/A'}\n\nProject/Message:\n${message}`;
                        const encodedText = encodeURIComponent(text);
                        window.open(`https://wa.me/+19023143123?text=${encodedText}`, '_blank');

                        showToast("Redirecting to WhatsApp...");
                        (e.target as HTMLFormElement).reset();
                    }}
                    className="bg-[#faf6f9] rounded-[26px] border border-[#efdce6] p-7 shadow-[0_12px_35px_rgba(94,20,82,0.07)]"
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[12.5px] font-[600] text-[#623b57]">Name</label>
                            <input name="name" required className="mt-1 w-full px-[13px] py-[11px] rounded-xl border border-[#e4c6d7] bg-white text-[14px] outline-none focus:border-[#B6178C]" />
                        </div>
                        <div>
                            <label className="text-[12.5px] font-[600] text-[#623b57]">Email</label>
                            <input name="email" type="email" required className="mt-1 w-full px-[13px] py-[11px] rounded-xl border border-[#e4c6d7] bg-white text-[14px] outline-none focus:border-[#B6178C]" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-[12.5px] font-[600] text-[#623b57]">Service interest</label>
                            <select name="service" className="mt-1 w-full px-[13px] py-[11px] rounded-xl border border-[#e4c6d7] bg-white text-[14px] outline-none focus:border-[#B6178C]">
                                <option>Mural Commission</option>
                                <option>Original Art / Painting Purchase</option>
                                <option>Art Education & Therapy Workshop</option>
                                <option>Exhibition / Public art proposal</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-[12.5px] font-[600] text-[#623b57]">Timeline</label>
                            <input name="timeline" placeholder="e.g. Spring 2026" className="mt-1 w-full px-[13px] py-[11px] rounded-xl border border-[#e4c6d7] bg-white text-[14px] outline-none focus:border-[#B6178C]" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-[12.5px] font-[600] text-[#623b57]">Project / message</label>
                            <textarea name="message" required rows={4} placeholder="Tell Chinny about your wall, space, vision, budget range…" className="mt-1 w-full px-[13px] py-[11px] rounded-xl border border-[#e4c6d7] bg-white text-[14px] outline-none focus:border-[#B6178C] resize-y" />
                        </div>
                    </div>
                    <button type="submit" className="mt-5 w-full py-[13px] rounded-full text-white font-[660] text-[15px]"
                        style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C 60%, #E454B0)', boxShadow: '0 10px 26px rgba(182,23,140,0.27)' }}>
                        Send inquiry via WhatsApp
                    </button>
                    <div className="text-[11.7px] text-[#9b748f] text-center mt-3">You will be redirected to WhatsApp to send your message.</div>
                </form>
            </div>
        </section>
    );
}