"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from "react";
import { artworks, categories, Artwork } from "./data";

type Category = (typeof categories)[number];

type GalleryContextType = {
    activeCat: Category;
    setActiveCat: (cat: Category) => void;
    filtered: Artwork[];
    marqueeRows: Artwork[][];
    lightbox: Artwork | null;
    setLightbox: (art: Artwork | null) => void;
    inquiryOpen: boolean;
    setInquiryOpen: (open: boolean) => void;
    inquiryArt: Artwork | null;
    toast: string | null;
    showToast: (msg: string) => void;
    openInquire: (art?: Artwork) => void;
    handleShare: (art: Artwork) => void;
};

const GalleryContext = createContext<GalleryContextType | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {
    const [activeCat, setActiveCat] = useState<Category>("All");
    const [lightbox, setLightbox] = useState<Artwork | null>(null);
    const [inquiryOpen, setInquiryOpen] = useState(false);
    const [inquiryArt, setInquiryArt] = useState<Artwork | null>(null);
    const [toast, setToast] = useState<string | null>(null);

    // protect images globally (disable right-click / drag on protected areas)
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "IMG" && target.closest(".protected-area")) {
                e.preventDefault();
            }
        };
        const ctx = (e: Event) => e.preventDefault();
        document.addEventListener("contextmenu", handler as any);
        document.addEventListener("dragstart", ctx);
        return () => {
            document.removeEventListener("contextmenu", handler as any);
            document.removeEventListener("dragstart", ctx);
        };
    }, []);

    // lightbox / inquiry: esc to close + lock scroll
    useEffect(() => {
        if (!lightbox && !inquiryOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setLightbox(null);
                setInquiryOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [lightbox, inquiryOpen]);

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2600);
    };

    const filtered = useMemo(
        () => (activeCat === "All" ? artworks : artworks.filter((a) => a.category === activeCat)),
        [activeCat]
    );

    const marqueeRows = useMemo(() => {
        const m = artworks.filter((a) => a.category === "Murals" || a.category === "Commissioned");
        const p = artworks.filter((a) => a.category === "Paintings");
        const e = artworks.filter((a) => a.category === "Exhibitions" || a.category === "Community");
        return [m, p, e];
    }, []);

    const openInquire = (art?: Artwork) => {
        setInquiryArt(art || lightbox || null);
        setLightbox(null);
        setInquiryOpen(true);
    };

    const handleShare = async (art: Artwork) => {
        const shareData = {
            title: `${art.title} – @rt Chinny World`,
            text: art.story,
            url: window.location.href.split("#")[0] + `#art-${art.id}`,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                showToast("Artwork link copied");
            }
        } catch {
            // user cancelled share — no-op
        }
    };

    const value: GalleryContextType = {
        activeCat,
        setActiveCat,
        filtered,
        marqueeRows,
        lightbox,
        setLightbox,
        inquiryOpen,
        setInquiryOpen,
        inquiryArt,
        toast,
        showToast,
        openInquire,
        handleShare,
    };

    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export function useGallery() {
    const ctx = useContext(GalleryContext);
    if (!ctx) throw new Error("useGallery must be used within a <GalleryProvider>");
    return ctx;
}