"use client";

import { useEffect, useRef } from "react";

/**
 * PASTE REAL POST URLS HERE.
 * Go to instagram.com/atchinnyartworld/, open each post you want to
 * feature, click the "..." menu -> "Copy link", and drop it in below.
 * 6-8 posts looks best in the strip.
 */
const POST_URLS: string[] = [
    "https://www.instagram.com/p/DCn01vXxpRC/",
    "https://www.instagram.com/p/DD3TnLuMaQt/",
    "https://www.instagram.com/p/C_eMIYJJGkW/",
    "https://www.instagram.com/p/C9Dl4-_prB5/",
    "https://www.instagram.com/p/C8lVIJIMWBn/",
    "https://www.instagram.com/p/C2YswnGMfYo/",
];

declare global {
    interface Window {
        instgrm?: {
            Embeds: { process: () => void };
        };
    }
}

export default function InstagramStrip() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Instagram's embed script once
        const existing = document.getElementById("instagram-embed-script");

        const processEmbeds = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        if (existing) {
            processEmbeds();
            return;
        }

        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = processEmbeds;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="py-14 bg-[#fdf6fb] border-y border-[#f4e2ee]">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                    <div className="display text-[27px] text-[#2d1b2d]">See more on Instagram</div>
                    <a
                        href="https://instagram.com/atchinnyartworld/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13.8px] font-[640] text-[#B6178C]"
                    >
                        @atchinnyartworld →
                    </a>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {POST_URLS.map((url) => (
                        <div
                            key={url}
                            className="rounded-[18px] overflow-hidden border border-[#f0d8e7] flex justify-center bg-white"
                        >
                            {/* Instagram's official blockquote embed markup.
                                embed.js scans the page for these and swaps
                                them for the real post iframe. */}
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={url}
                                data-instgrm-version="14"
                                style={{
                                    background: "#FFF",
                                    border: 0,
                                    margin: 0,
                                    width: "100%",
                                    minWidth: "260px",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}