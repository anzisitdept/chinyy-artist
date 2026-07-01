"use client";
import { artistPortrait } from "../components/data";

export default function AboutPage() {
  return (
    <section id="about" className="py-[94px] bg-white min-h-[calc(100vh-74px)]">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 grid lg:grid-cols-[430px_1fr] gap-12 items-start">
        <div className="relative">
          <div className="rounded-[30px] overflow-hidden shadow-[0_26px_60px_rgba(80,12,78,0.18)] border-[7px] border-white">
            <img src={artistPortrait} alt="Chinenye Okonta – @rt Chinny World" className="w-full h-[552px] object-cover protected-img" draggable={false} />
          </div>
          <div className="absolute -left-5 bottom-7 bg-white/95 backdrop-blur rounded-2xl shadow-xl px-4 py-3 border border-[#f3d7ea] max-w-[248px]">
            <div className="text-[12px] text-[#ad5992] font-[600]">Prince Edward Island • Epekwitk</div>
            <div className="text-[13.6px] text-[#392136] font-[600] mt-1">“The work should leave you with a feeling.”</div>
          </div>
        </div>
        <div>
          <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700]">About Chinny</div>
          <h2 className="display text-[40px] leading-[1.08] text-[#2a172b] mt-2">Nigerian-Canadian visual artist, muralist, mother, educator.</h2>
          <div className="mt-5 text-[16.2px] leading-relaxed text-[#554156] space-y-[16px] max-w-[700px]">
            <p>
              I am Chinenye Okonta — @rt Chinny World. For over eighteen years I’ve taught creative arts, led a Creative Department, and painted walls that a city walks past every day. I hold a Masters in Fine and Applied Arts, and today I work from Prince Edward Island, in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq People.
            </p>
            <p>
              My practice moves between <strong>large-scale murals</strong> (including a 96ft x 8ft executed mural, and a wraparound proposal for the Charlottetown Library Learning Centre), <strong>gallery paintings</strong>, <strong>immersive public exhibitions</strong> — such as my 2024 gender-based-violence exhibition with Innovation PEI — and <strong>art therapy / art education</strong> with children and special-needs learners, including volunteer work with Autism PEI.
            </p>
            <p>
              Themes I return to: resilience, diversity, identity, healing, hope, memory, human connection. I believe public art should make people feel <em>welcomed, inspired, curious, hopeful, connected</em> — long after they leave the room.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-[12.6px]">
            {['MFA Fine & Applied Arts', 'Muralist • Painter', 'Art Educator 18+ yrs', 'Art Therapy – Autism PEI', 'C3P • First Aid/CPR • ECE'].map(tag => (
              <span key={tag} className="px-3 py-1.7 rounded-full border border-[#e6c7df] bg-[#fff7fd] text-[#7a3d6b] font-[500]">{tag}</span>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <a href="/portfolio" className="px-5 py-[11px] rounded-full text-white font-[600] text-[14px]" style={{ background: 'linear-gradient(135deg,#5C1466,#B6178C)' }}>Explore portfolio</a>
            <a href="/contact" className="px-5 py-[11px] rounded-full border border-[#e2b9d8] text-[#6f2a5d] font-[600] text-[14px] bg-white">Work with Chinny</a>
          </div>
          <div className="mt-10 text-[13.2px] text-[#8a6f88] leading-relaxed border-t border-[#f0dfeb] pt-5 max-w-[700px]">
            I acknowledge that I live and work in Epekwitk (Prince Edward Island), in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq People. I offer respect and gratitude.
          </div>
        </div>
      </div>
    </section>
  );
}
