"use client";

import { GalleryProvider } from "./components/GalleryContext";
import SiteStyles from "./components/SiteStyles";
import Toast from "./components/Toast";
import Hero from "./components/Hero";
import IntroStrip from "./components/IntroStrip";
import MarqueeGallery from "./components/MarqueeGallery";
import Awards from "./components/Awards";
import Services from "./components/Services";
import About from "./components/About";
import FullGallery from "./components/FullGallery";
import Exhibitions from "./components/Exhibitions";
import InstagramStrip from "./components/InstagramStrip";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Lightbox from "./components/Lightbox";
import InquiryModal from "./components/InquiryModal";

export default function App() {
  return (
    <GalleryProvider>
      <div
        className="min-h-screen bg-white text-[#1F1A22] protected-area"
        style={{ fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        <SiteStyles />
        <Toast />

        <Hero />
        <IntroStrip />
        <MarqueeGallery />
        <Awards />
        <Services />
        <About />
        <FullGallery />
        <Exhibitions />
        <InstagramStrip />
        <Contact />
        <CTABanner />

        <Lightbox />
        <InquiryModal />
      </div>
    </GalleryProvider>
  );
}