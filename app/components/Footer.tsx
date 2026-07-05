import { MessageCircle, Music2, Camera } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Camera,
      label: 'Instagram',
      href: 'https://www.instagram.com/atchinnyartworld?igsh=MThudGFhYWRpODBtbQ==',
      color: '#E454B0'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/+19023143123', // Replace with actual WhatsApp number
      color: '#25D366'
    },
    {
      icon: Music2,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@atchinnyartworld', // Replace with actual TikTok profile
      color: '#000000'
    }
  ];

  return (
    <footer className="bg-[#1a0c1b] text-[#dfc5d7]">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Left Column - Branding & Social */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-splash.png"
                alt="@rt Chinny World"
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
              />
              <div className="display text-white text-[20px]">@rt Chinny World</div>
            </div>
            <p className="text-[13.6px] leading-relaxed text-[#c8a8ba] mb-6">
              Chinenye Okonta Visual artist, muralist, art educator. Charlottetown, PEI.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="group relative"
                  >
                    <div className="w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-xl"
                      style={{
                        borderColor: social.color,
                        boxShadow: `0 0 20px ${social.color}40`
                      }}>
                      <Icon
                        size={20}
                        style={{ color: social.color }}
                        className="transition-transform duration-300 group-hover:rotate-12"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-[12px] font-[600] text-white bg-[#2d1830] px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#B6178C]">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="text-[13.6px] space-y-3">
            <div className="text-[11px] uppercase tracking-[0.15em] font-[700] text-[#B6178C] mb-4">
              Navigation
            </div>
            <div><a href="/#about" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">About</a></div>
            <div><a href="/#portfolio" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Portfolio</a></div>
            <div><a href="/#awards" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Awards & Certifications</a></div>
            <div><a href="/#services" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Services</a></div>
            <div><a href="/#exhibitions" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Exhibitions</a></div>
          </div>

          {/* Right Column - Location & Copyright */}
          <div className="text-[13.2px] text-[#c6a7b6] leading-relaxed">
            <div className="text-[11px] uppercase tracking-[0.15em] font-[700] text-[#B6178C] mb-4">
              Land Acknowledgment
            </div>
            <p className="mb-6">
              I live and work in Epekwitk / Prince Edward Island, in Mi'kma'ki, the ancestral and unceded territory of the Mi'kmaq People.
            </p>
            <div className="text-[12.5px] text-[#a88599]">
              © {currentYear} <span className="font-[600] text-white">@rt Chinny World</span> – Chinenye Okonta.<br />
              All artwork protected. Shareable viewing only.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3d2740] my-8"></div>

        {/* Bottom Section - Developer Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Watermark */}
          <div className="text-[13px] text-white tracking-[0.1em] font-[500] opacity-75">
            ✧ Crafted with intention ✧
          </div>

          {/* Developer Credit */}
          <a
            href="https://www.anziandco.com/?ref=@archinnyartworld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-white hover:text-[#E454B0] transition-all duration-300 flex items-center gap-2 group font-[500]"
          >
            <span>Developed by</span>
            <span className="font-[700] text-[#E454B0] group-hover:text-white group-hover:underline transition-colors">Anzi & Co.</span>
            <span className="text-[11px] opacity-70 group-hover:translate-x-1 transition-transform">→</span>
          </a>

        </div>
      </div>
    </footer>
  );
}