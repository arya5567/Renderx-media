"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Strategy",
    desc: "We understand your brand, audience, and goals to build a solid foundation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concept",
    desc: "Our creative team develops powerful visual ideas tailored to your vision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production",
    desc: "We produce high-end CGI, 3D animation, and video content that captivates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimization",
    desc: "Content is refined and optimized for social media and peak ad performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

function useCardInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RoadmapStep({ step, index }) {
  const { ref, visible } = useCardInView();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`rm-step ${visible ? "rm-step--visible" : ""}`} style={{ "--i": index }}>

      {/* ── Desktop: alternating left/right ── */}
      <div className="rm-desktop">
        {/* Left slot */}
        <div className={`rm-slot rm-slot--left ${isEven ? "rm-slot--filled" : ""}`}>
          {isEven && <RoadmapCard step={step} visible={visible} dir="left" />}
        </div>

        {/* Center spine */}
        <div className="rm-spine">
          <div className="rm-connector rm-connector--top" />
          <div className={`rm-node ${visible ? "rm-node--active" : ""}`}>
            <div className="rm-node-ring" />
            <div className="rm-node-core">{step.icon}</div>
          </div>
          <div className="rm-connector rm-connector--bottom" />
        </div>

        {/* Right slot */}
        <div className={`rm-slot rm-slot--right ${!isEven ? "rm-slot--filled" : ""}`}>
          {!isEven && <RoadmapCard step={step} visible={visible} dir="right" />}
        </div>
      </div>

      {/* ── Mobile: single column ── */}
      <div className="rm-mobile">
        <div className="rm-mobile-spine">
          <div className={`rm-node ${visible ? "rm-node--active" : ""}`}>
            <div className="rm-node-ring" />
            <div className="rm-node-core">{step.icon}</div>
          </div>
          <div className="rm-mobile-line" />
        </div>
        <RoadmapCard step={step} visible={visible} dir="up" />
      </div>

    </div>
  );
}

function RoadmapCard({ step, visible, dir }) {
  const translateMap = {
    left:  "translateX(-40px)",
    right: "translateX(40px)",
    up:    "translateY(30px)",
  };

  return (
    <div
      className="rm-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : translateMap[dir],
        transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <div className="rm-card-number">{step.number}</div>
      <h3 className="rm-card-title">{step.title}</h3>
      <p className="rm-card-desc">{step.desc}</p>
      <div className="rm-card-line" />
    </div>
  );
}

export default function ProcessSection() {
  const { ref: titleRef, visible: titleVisible } = useCardInView();

  return (
    <section className="rm-section">

      {/* Stars */}
      <div className="rm-stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="rm-star" style={{
            left: `${(i * 137.5) % 100}%`,
            top: `${(i * 97.3) % 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 5) * 0.9}s`,
            animationDuration: `${2 + (i % 4)}s`,
          }} />
        ))}
      </div>

      {/* Glow blobs */}
      <div className="rm-blob" style={{ top: "-150px", left: "-100px", width: "400px", height: "400px" }} />
      <div className="rm-blob" style={{ bottom: "-100px", right: "-80px", width: "350px", height: "350px", opacity: 0.6 }} />

      <div className="rm-inner">

        {/* Header */}
        <div
          ref={titleRef}
          className="rm-header"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="rm-eyebrow">OUR PROCESS</p>
          <h2 className="rm-title">How We Create Impact</h2>
          <p className="rm-subtitle">Four steps that turn your vision into content that performs.</p>
        </div>

        {/* Roadmap */}
        <div className="rm-roadmap">
          {/* Background spine line (desktop) */}
          <div className="rm-spine-line" aria-hidden="true" />

          {steps.map((step, i) => (
            <RoadmapStep key={i} step={step} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        /* ── Base ── */
        *, *::before, *::after { box-sizing: border-box; }
        .rm-section {
          position: relative;
          background: #000;
          color: #fff;
          padding: 96px 24px 120px;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        /* ── Stars ── */
        .rm-stars { position: absolute; inset: 0; pointer-events: none; }
        .rm-star {
          position: absolute; background: #fff; border-radius: 50%;
          animation: rmTwinkle linear infinite alternate;
        }
        @keyframes rmTwinkle { from { opacity: 0.05; } to { opacity: 0.6; } }

        /* ── Blobs ── */
        .rm-blob {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%);
          filter: blur(70px); pointer-events: none;
        }

        /* ── Inner ── */
        .rm-inner { position: relative; z-index: 1; max-width: 960px; margin: 0 auto; }

        /* ── Header ── */
        .rm-header { text-align: center; margin-bottom: 72px; }
        .rm-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          color: #a855f7;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        .rm-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
          color: #fff;
          line-height: 1.15;
        }
        .rm-subtitle {
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          color: #9ca3af;
          margin: 0 auto;
          max-width: 440px;
          line-height: 1.6;
        }

        /* ── Roadmap container ── */
        .rm-roadmap { position: relative; }

        /* Background spine line running full height (desktop only) */
        .rm-spine-line {
          display: none;
        }

        /* ── Each step row ── */
        .rm-step { position: relative; margin-bottom: 0; }

        /* ── DESKTOP layout ── */
        .rm-desktop {
          display: none;
        }
        .rm-mobile {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 0 0 48px 0;
        }

        /* ── Mobile spine ── */
        .rm-mobile-spine {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 4px;
        }
        .rm-mobile-line {
          width: 2px;
          flex: 1;
          min-height: 40px;
          background: linear-gradient(to bottom, rgba(168,85,247,0.6), rgba(168,85,247,0.1));
          margin-top: 8px;
        }
        .rm-step:last-child .rm-mobile-line { display: none; }

        /* ── Node ── */
        .rm-node {
          position: relative;
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #0a0a0a;
          border: 2px solid rgba(168,85,247,0.3);
          flex-shrink: 0;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .rm-node--active {
          border-color: #a855f7;
          box-shadow: 0 0 20px rgba(168,85,247,0.5);
        }
        .rm-node-ring {
          position: absolute; inset: -5px;
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,0);
          transition: border-color 0.4s ease, transform 0.4s ease;
        }
        .rm-node--active .rm-node-ring {
          border-color: rgba(168,85,247,0.25);
          animation: rmRingPulse 2s ease-in-out infinite;
        }
        @keyframes rmRingPulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.3); opacity: 0; }
        }
        .rm-node-core { color: #c084fc; display: flex; }

        /* ── Card ── */
        .rm-card {
          position: relative;
          background: #0d0d0d;
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 14px;
          padding: 22px 22px 22px 22px;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          overflow: hidden;
          width: 100%;
        }
        .rm-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .rm-card:hover {
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 8px 32px rgba(168,85,247,0.12);
          transform: translateY(-4px);
        }
        .rm-card:hover::before { opacity: 1; }

        .rm-card-number {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #7c3aed;
          margin-bottom: 8px;
        }
        .rm-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .rm-card-desc {
          font-size: 0.875rem;
          color: #9ca3af;
          line-height: 1.65;
          margin: 0;
        }
        .rm-card-line {
          position: absolute;
          bottom: 0; left: 22px; right: 22px;
          height: 1px;
          background: linear-gradient(90deg, rgba(168,85,247,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .rm-card:hover .rm-card-line { opacity: 1; }

        /* ══════════════════════════
           DESKTOP (≥ 700px)
        ══════════════════════════ */
        @media (min-width: 700px) {
          .rm-mobile  { display: none; }
          .rm-desktop { display: flex; align-items: stretch; gap: 0; min-height: 160px; }

          /* Background spine */
          .rm-spine-line {
            display: block;
            position: absolute;
            left: 50%; transform: translateX(-50%);
            top: 0; bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom,
              transparent 0%,
              rgba(168,85,247,0.4) 8%,
              rgba(168,85,247,0.4) 92%,
              transparent 100%
            );
          }

          .rm-slot {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 16px 0;
          }
          .rm-slot--left  { justify-content: flex-end;  padding-right: 40px; }
          .rm-slot--right { justify-content: flex-start; padding-left: 40px; }

          /* Spine column */
          .rm-spine {
            width: 60px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
          }
          .rm-connector {
            flex: 1;
            width: 2px;
            background: transparent;
          }

          /* Node centered */
          .rm-node {
            width: 52px; height: 52px;
          }

          /* Card max width on desktop */
          .rm-card { max-width: 360px; }

          /* Connecting horizontal line from card to spine node */
          .rm-slot--left.rm-slot--filled  { position: relative; }
          .rm-slot--right.rm-slot--filled { position: relative; }
        }

        /* ── Large desktop ── */
        @media (min-width: 960px) {
          .rm-card { max-width: 380px; }
          .rm-slot--left  { padding-right: 48px; }
          .rm-slot--right { padding-left: 48px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 400px) {
          .rm-section { padding: 72px 16px 90px; }
          .rm-card { padding: 18px; }
          .rm-card-title { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
}
