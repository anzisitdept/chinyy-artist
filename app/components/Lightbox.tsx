"use client";

import { useGallery } from "./GalleryContext";

export default function Lightbox() {
    const { lightbox, setLightbox, openInquire, handleShare, showToast } = useGallery();

    if (!lightbox) return null;

    const hasDetails = !!(lightbox.medium || lightbox.dimensions || lightbox.story || lightbox.priceNote);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#120614]/87 backdrop-blur-[8px]" onClick={() => setLightbox(null)} />
            <div className="relative w-[min(1160px,96vw)] max-h-[92vh] overflow-y-auto rounded-[26px] bg-[#fffdfd] shadow-[0_40px_120px_rgba(0,0,0,0.55)] grid lg:grid-cols-[1.32fr_.88fr]">
                <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/55 text-white text-[18px]">×</button>

                <div className="relative bg-[#120711]">
                    <img
                        src={lightbox.image}
                        alt={lightbox.title}
                        draggable={false}
                        onContextMenu={e => e.preventDefault()}
                        className="w-full h-auto min-h-[40vh] max-h-[50vh] lg:h-full lg:min-h-0 lg:max-h-[88vh] object-contain protected-img"
                    />
                    {/* watermark overlay */}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `repeating-linear-gradient(-32deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 74px)`,
                        }}
                    />
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="text-white/12 font-[700] text-[34px] sm:text-[44px] tracking-[0.18em] rotate-[-20deg] select-none" style={{ fontFamily: '"Fraunces", serif' }}>
                            @rt Chinny World
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/55 to-transparent text-[11.5px] text-white/85">
                        Protected viewing • shareable link only • {lightbox.title} © Chenenye Okonta
                    </div>
                </div>

                <div className="p-7 sm:p-9 flex flex-col">
                    <div className="text-[11px] uppercase tracking-wider text-[#B6178C] font-[700]">
                        {lightbox.category} {lightbox.year ? `• ${lightbox.year}` : ''}
                    </div>
                    <h3 className="display text-[30px] text-[#271729] mt-1 leading-tight">{lightbox.title}</h3>
                    
                    {hasDetails && (
                        <>
                            {(lightbox.medium || lightbox.dimensions || lightbox.location) && (
                                <div className="text-[13.7px] text-[#6b4d66] mt-2">
                                    {lightbox.medium && <>{lightbox.medium}<br /></>}
                                    {lightbox.dimensions && <>{lightbox.dimensions}</>}
                                    {lightbox.location && <><br />{lightbox.location}</>}
                                </div>
                            )}
                            {lightbox.story && (
                                <p className="text-[15px] text-[#483548] leading-relaxed mt-5">{lightbox.story}</p>
                            )}

                            {lightbox.priceNote && (
                                <div className="mt-6 p-4 rounded-2xl bg-[#fdf4fa] border border-[#f1d6e6] text-[13.4px] text-[#68445b]">
                                    <strong className="text-[#652753]">{lightbox.priceNote}</strong><br />
                                    Price-on-request. No checkout — studio inquiry only. Certificate of authenticity included.
                                </div>
                            )}
                        </>
                    )}

                    <div className="mt-auto pt-6 flex flex-col gap-[10px]">
                        {hasDetails && (
                            <button onClick={() => openInquire(lightbox)} className="w-full py-[13px] rounded-full text-white font-[660] text-[14.6px]"
                                style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C)' }}>
                                Inquire about this piece
                            </button>
                        )}
                        <div className="flex gap-2">
                            <button onClick={() => handleShare(lightbox)} className="flex-1 py-[10px] rounded-full border border-[#e2bcd3] text-[#6f2b59] font-[600] text-[13.4px] bg-white">
                                Share link
                            </button>
                            <button onClick={() => { navigator.clipboard?.writeText(window.location.href); showToast('Link copied'); }} className="px-4 py-[10px] rounded-full border border-[#e2bcd3] text-[#6f2b59] text-[13.4px] bg-white">
                                Copy
                            </button>
                        </div>
                        <div className="text-[11.5px] text-center text-[#a07a92] mt-1">
                            Download disabled • Screenshot watermarked • For press images, request via inquiry.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}