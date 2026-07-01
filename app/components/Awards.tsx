import CertificateViewer from './viewcertificate';

export default function Awards() {
    return (
        <section id="awards" className="bg-white py-20 scroll-fade">
            <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
                    <h2 className="display text-[38px] text-[#2d1830]">Awards & Certification</h2>
                    <a href="#awards-full" className="text-[13.7px] font-[600] text-[#B6178C]">Full recognitions →</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                        { t: 'Mayor-Certified Recognition', s: 'City of Charlottetown', y: '2024', accent: '#F2A93B' },
                        { t: 'PEI Govt. – Professional Art Recognition', s: 'Government of PEI', y: '2024', accent: '#1FB6A8' },
                        { t: 'Toyota Dream Car – 1st Position (Student mentee)', s: 'Toyota • Art Education', y: '2018', accent: '#E454B0' },
                        { t: 'Life in My City – Top 10 Winner', s: 'Nigeria @ 50 Golden Festival', y: '2010', accent: '#B6178C' },
                    ].map(a => (
                        <div key={a.t} className="rounded-[22px] border border-[#f1ddea] bg-gradient-to-b from-white to-[#fff8fd] p-5 glow-card transition-all">
                            <div className="w-10 h-[4px] rounded-full mb-3" style={{ background: a.accent }} />
                            <div className="text-[16px] font-[650] leading-snug text-[#2c1a2e]">{a.t}</div>
                            <div className="text-[13px] text-[#6a556b] mt-1">{a.s}</div>
                            <div className="text-[12px] text-[#b080a8] mt-2">{a.y}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-24">
                    <CertificateViewer />
                </div>

            </div>
        </section>
    );
}