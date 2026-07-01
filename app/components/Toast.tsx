"use client";

import { useGallery } from "./GalleryContext";

export default function Toast() {
    const { toast } = useGallery();

    if (!toast) return null;

    return (
        <div className="fixed z-[120] top-5 right-5 bg-[#1F1A22] text-white px-4 py-3 rounded-xl shadow-2xl text-sm font-medium">
            {toast}
        </div>
    );
}