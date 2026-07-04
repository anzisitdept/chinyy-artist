export default function SiteStyles() {
    return (
        <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@300;400;500;600;700&display=swap');
    h1,h2,h3,.display { font-family: "Fraunces", Georgia, serif; }
    .hero-gradient {
      background: radial-gradient(1200px 650px at 78% -5%, rgba(229,84,176,0.30) 0%, transparent 60%),
      radial-gradient(900px 520px at 0% 18%, rgba(92,20,102,0.22) 0%, transparent 60%),
      linear-gradient(135deg, #3B0A45 0%, #5C1466 28%, #9B1475 56%, #B6178C 76%, #E454B0 100%);
    }
    .paint-bleed {
      background: linear-gradient(180deg, #ffffff 0%, #fff 58%, #fdf6fb 100%);
      position: relative;
    }
    .paint-bleed:after {
      content: "";
      position: absolute;
      top: -38px; left:0; right:0; height:40px;
      background: radial-gradient(60% 120% at 20% 100%, rgba(182,23,140,0.17), transparent 65%),
                  radial-gradient(45% 110% at 75% 100%, rgba(229,84,176,0.10), transparent 70%);
      filter: blur(1px);
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .marquee-left { animation-name: marqueeL; }
    .marquee-right { animation-name: marqueeR; }
    @keyframes marqueeL { from { transform: translateX(0) } to { transform: translateX(-50%) } }
    @keyframes marqueeR { from { transform: translateX(-50%) } to { transform: translateX(0) } }
    .marquee-track:hover { animation-play-state: paused; }
    
    @media (max-width: 768px) {
      .marquee-track {
        animation: none !important;
        transform: none !important;
        overflow-x: auto;
        width: 100%;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        padding-bottom: 8px; /* For scrollbar */
      }
      .marquee-track > button {
        scroll-snap-align: center;
      }
    }
    .brush-reveal {
      clip-path: circle(135% at 45% 40%);
      animation: brushIn 1.15s cubic-bezier(.22,1,.36,1) both;
    }
    @keyframes brushIn {
      0% { clip-path: circle(0% at 50% 49%); filter: blur(10px) saturate(0.5); transform: scale(1.06) rotate(-1.6deg);}
      100% { clip-path: circle(135% at 45% 40%); filter: blur(0) saturate(1); transform: scale(1) rotate(0);}
    }
    .splash-pulse {
      animation: splashPulse 4.8s ease-in-out infinite;
    }
    @keyframes splashPulse {
      0%,100% { transform: scale(1) rotate(-3deg); }
      50% { transform: scale(1.045) rotate(1.9deg); }
    }
    .watermark-tile {
      background-image: repeating-linear-gradient(-35deg,
        rgba(255,255,255,0.085) 0 28px,
        rgba(255,255,255,0) 28px 120px);
    }
    .glow-card:hover { box-shadow: 0 18px 45px rgba(182,23,140,0.15), 0 3px 14px rgba(92,20,102,0.08); transform: translateY(-3px); }
    .protected-img { -webkit-user-drag: none; user-select:none; -webkit-touch-callout: none; }
    @media (prefers-reduced-motion: reduce) {
      .marquee-track, .brush-reveal, .splash-pulse { animation: none !important; }
    }
    .scroll-fade { animation: scrollFade .75s ease both; animation-timeline: view(); animation-range: entry 0% cover 28%; }
    @keyframes scrollFade { from { opacity:0; transform: translateY(18px);} to { opacity:1; transform: translateY(0);} }
    .faint-grid {
      background-image: radial-gradient(rgba(31,26,34,0.07) 1px, transparent 1.2px);
      background-size: 18px 18px;
    }
    `}</style>
    );
}