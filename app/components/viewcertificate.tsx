"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ClipboardList, Palette } from 'lucide-react';

export default function CertificateViewer() {
    const [currentPage, setCurrentPage] = useState(0);

    // Certificate content split into pages
    const pages = [
        // Page 1
        {
            title: "CHARLOTTETOWN LIBRARY LEARNING CENTRE",
            subtitle: "Mural Application Letter",
            content: `Dear Peer Jury and Community Representatives,

My name is Okonta Chinenye Frances, a Nigerian-Canadian multidisciplinary visual artist, muralist, educator, based in Prince Edward Island. I hold a Masters in Fine and Applied Arts and bring over eighteen years of experience as a creative arts educator, alongside years of community-centered and therapeutic art practice.

My work is rooted in storytelling, emotional connection, imagination, healing, and public engagement.

ABOUT LIBRARIES & COMMUNITY

There are certain places in every city that quietly hold communities together. Libraries are among those rare places. Beyond books and architecture, they serve as welcoming spaces where people of different generations, cultures, and life experiences gather to learn, reflect, connect, and feel included.

For many people, libraries represent safety, possibility, curiosity, creativity, and belonging. They are spaces where imagination expands and where community becomes visible in everyday life.`
        },
        // Page 2
        {
            title: "ARTISTIC VISION & APPROACH",
            subtitle: "Creating Meaningful Public Art",
            content: `As a mother raising children in Prince Edward Island, I understand personally the importance of public spaces that make people feel welcomed, included, and inspired.

Libraries, especially, symbolize possibility. They are places where curiosity is encouraged, where imagination expands, and where people of different generations and cultures exist together equally.

CREATING TRANSFORMATIVE EXPERIENCES

I create murals and large-scale paintings that transform spaces into experiences. My work often explores themes of resilience, diversity, identity, healing, hope, memory, and human connection.

I believe successful public art should do more than decorate a wall—it should create a feeling people carry with them long after they leave the space.

I intend for my paintings to attract and welcome all people. I want viewers to experience a sense of excitement, imagination, curiosity, innovation, and exploration when they encounter my work.`
        },
        // Page 3
        {
            title: "EXPERIENCE & TECHNICAL EXPERTISE",
            subtitle: "Large-Scale Mural Execution",
            content: `I enjoy developing creative concepts that are visually engaging, emotionally resonant, and accessible to broad audiences. The strongest public artworks are ones that invite people in emotionally—artworks that make people pause, reflect, smile, dream, or feel connected to something larger than themselves.

FLEXIBILITY & COLLABORATION

At the same time, I am highly flexible and collaborative in my creative process. While I bring originality and strong artistic vision to my work, I also value the goals, expectations, and identity of the organizations and communities I work with.

PORTFOLIO HIGHLIGHTS

My portfolio reflects artistic skill, originality, consistency, discipline, and experience executing ambitious large-scale works. Over the years, I have completed murals, immersive exhibitions, and public-facing artworks that required creative innovation, planning, and physical endurance.

My experience includes personally executing wall paintings measuring approximately 96 feet by 8 feet, along with other expansive mural projects completed independently and collaboratively.`
        },
        // Page 4
        {
            title: "RESILIENCE & PROFESSIONAL EXCELLENCE",
            subtitle: "International Experience",
            content: `One of my most memorable mural experiences involved independently painting a monumental mural in Nigeria over extended day and night working hours with minimal logistical support.

Experiences like these strengthened my resilience, adaptability, organizational discipline, and confidence in managing large public artworks professionally from concept through completion.

UNDERSTANDING PUBLIC ART AT SCALE

Working at this scale has trained me to think beyond individual painted sections and instead create cohesive visual experiences that interact thoughtfully with architecture, pedestrian movement, visibility, and public atmosphere.

I understand that successful public murals require more than technical painting ability; they require vision, endurance, planning, adaptability, and the ability to create work that resonates emotionally with diverse audiences over time.`
        },
        // Page 5
        {
            title: "THE CHARLOTTETOWN LIBRARY PROJECT",
            subtitle: "Site-Responsive Vision",
            content: `I am especially excited by the architectural possibilities of the Charlottetown Library Learning Centre mural site. The wraparound retaining wall facing both Queen Street and Sydney Street presents an opportunity to create a continuous visual experience.

This design will welcome people from multiple directions while contributing positively to the atmosphere of downtown Charlottetown. I fully intend to execute the mural directly onto the installed aluminum composite material panels while thoughtfully responding to the structure, visibility, and flow of the site.

COMMUNITY ENGAGEMENT EXPERIENCE

In 2024, I organized and exhibited a large-scale public art exhibition addressing gender-based violence through immersive storytelling, emotional reflection, and community engagement.

The project encouraged viewers not only to observe the artwork, but to emotionally interact with it and participate in conversations around empathy, healing, and collective responsibility.`
        },
        // Page 6
        {
            title: "COMMITMENT TO PEI & CLOSING STATEMENT",
            subtitle: "Creating Lasting Emotional Impact",
            content: `As someone now rooted in Prince Edward Island, I feel deeply connected to the evolving cultural fabric of Charlottetown and the wider Island community. I admire the city's vibrant arts culture, welcoming atmosphere, and growing diversity.

I deeply respect the acknowledgment of Epekwitk as the ancestral and unceded territory of the Mi'kmaq People.

PORTFOLIO & DOCUMENTATION

I encourage the selection committee to visit my Instagram portfolio at @atchinnyartworld, where my mural process, large-scale projects, artistic versatility, and commitment to immersive visual storytelling can be further experienced through documented works and creative development.

FINAL THOUGHTS

Ultimately, I believe meaningful public art becomes part of people's emotional lives. Years from now, someone may not remember the exact day they passed this mural—but they may remember how it made them feel: welcomed, inspired, curious, hopeful, or connected.

That emotional experience is what I strive to create through my work.

Thank you for considering my application. It would be an honour to contribute to the Charlottetown Library Learning Centre and create a mural that celebrates imagination, inclusivity, exploration, and community connection.

Sincerely,
Okonta Chinenye Frances`
        }
    ];

    const goToPrevious = () => {
        setCurrentPage(prev => prev === 0 ? pages.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentPage(prev => prev === pages.length - 1 ? 0 : prev + 1);
    };

    const currentPageData = pages[currentPage];

    return (
        <section className="bg-gradient-to-b from-[#f9f3f8] to-white py-20">
            <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-[11.5px] uppercase tracking-[0.17em] font-[700] text-[#B6178C] mb-3">
                        Featured Application
                    </div>
                    <h2 className="display text-[38px] text-[#2d1830] leading-[1.1]">
                        Mural Application Letter
                    </h2>
                    <p className="text-[14px] text-[#6a556b] mt-3">
                        Multi-page certificate display • Navigate through the full application
                    </p>
                </div>

                {/* Certificate Container */}
                <div className="relative">
                    {/* Main Certificate Page */}
                    <div className="rounded-[24px] p-[8px] shadow-2xl"
                        style={{ background: 'linear-gradient(135deg,#5C1466,#E454B0)' }}>
                        <div className="bg-white rounded-[20px] p-6 sm:p-10 md:p-12 min-h-0 md:min-h-[700px] flex flex-col justify-between">
                            {/* Certificate Content */}
                            <div>
                                {/* Header */}
                                <div className="border-b-2 border-[#e4d4e8] pb-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-[11px] uppercase tracking-[0.2em] font-[700] text-[#B6178C] mb-2">
                                            Civic Public Art Engagement
                                        </div>
                                        <h3 className="text-[22px] sm:text-[28px] font-[750] text-[#2c1a2e] leading-[1.1]">
                                            {currentPageData.title}
                                        </h3>
                                        <p className="text-[13px] text-[#8a6e8f] mt-2 italic">
                                            {currentPageData.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="text-[14.2px] leading-relaxed text-[#3a2a3c] space-y-4 whitespace-pre-wrap font-[400]">
                                    {currentPageData.content}
                                </div>
                            </div>

                            {/* Footer with Page Number */}
                            <div className="border-t border-[#e4d4e8] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-0">
                                <div className="text-[12px] text-[#a080a5] font-[500]">
                                    Okonta Chinenye Frances • Charlottetown, PEI
                                </div>
                                <div className="text-[13px] font-[600] text-[#B6178C]">
                                    Page {currentPage + 1} of {pages.length}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-10 px-0 sm:px-4 gap-6 sm:gap-0">
                        <button
                            onClick={goToPrevious}
                            className="flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#f1ddea] hover:bg-[#e8c7dd] text-[#B6178C] font-[600] transition-all duration-300 hover:shadow-md active:scale-95"
                        >
                            <ChevronLeft size={20} />
                            Previous
                        </button>

                        {/* Page Indicators */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-full">
                            {pages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPage(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentPage
                                        ? 'bg-[#B6178C] w-8'
                                        : 'bg-[#e4d4e8] hover:bg-[#d4bdd6]'
                                        }`}
                                    title={`Go to page ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#f1ddea] hover:bg-[#e8c7dd] text-[#B6178C] font-[600] transition-all duration-300 hover:shadow-md active:scale-95"
                        >
                            Next
                            <ChevronRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}