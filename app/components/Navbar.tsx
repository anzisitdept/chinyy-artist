"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'awards', label: 'Awards', href: '/awards' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'exhibitions', label: 'Exhibitions', href: '/exhibitions' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      const active = navItems.find(item => item.href === pathname);
      if (active) setActiveSection(active.id);
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      let current = "home";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 120) {
            current = section.getAttribute("id") || "home";
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/88 border-b border-[#f0e5f0]">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 h-[74px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-[16px] overflow-hidden shadow-sm">
            <img src="/logo-splash.png" alt="@rt Chinny World" className="w-full h-full object-cover protected-img" draggable={false} />
            <div className="absolute inset-0 mix-blend-overlay opacity-[0.16] bg-[radial-gradient(circle_at_30%_30%,#E454B0,#5C1466)]"></div>
          </div>
          <div className="leading-tight">
            <div className="display text-[18px] font-[650] tracking-tight text-[#37113a]">@rt Chinny World</div>
            <div className="text-[11px] text-[#936392] -mt-[1px] tracking-wide">Chinenye Okonta • PEI</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center relative text-[13.7px] font-[500] text-[#443247] gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={pathname === "/" ? `/#${item.id}` : item.href}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? 'text-[#B6178C]' : 'hover:text-[#B6178C]'}`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#f8e7f5] rounded-full -z-10 animate-pulse" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex text-[13.5px] font-[600] px-4 py-[10px] rounded-full text-white transition hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#5C1466 0%, #B6178C 55%, #E454B0 100%)', boxShadow: '0 6px 18px rgba(182,23,140,0.28)' }}>
            Get In Touch
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 rounded-xl border border-[#ead6ea] flex items-center justify-center">
            <span className="sr-only">Menu</span>
            <div className="space-y-[5px]">
              <div className="w-5 h-[2px] bg-[#5C1466]"></div>
              <div className="w-5 h-[2px] bg-[#5C1466]"></div>
              <div className="w-5 h-[2px] bg-[#5C1466]"></div>
            </div>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-b border-[#f2dff2] px-6 py-5 bg-white/95 backdrop-blur-xl absolute w-full left-0 shadow-lg">
          <div className="flex flex-col gap-4 text-[15px] font-[500] text-[#3a273b]">
            {navItems.map(item => (
              <Link key={item.id} onClick={() => setMobileOpen(false)} href={pathname === "/" ? `/#${item.id}` : item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
