"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    number: 1,
    title: "Strategy",
    desc: "We understand your brand, audience, and goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    align: "left",
    color: "#a855f7",
  },
  {
    number: 2,
    title: "Concept",
    desc: "Our creative team develops powerful visual ideas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
      </svg>
    ),
    align: "right",
    color: "#c084fc",
  },
  {
    number: 3,
    title: "Production",
    desc: "We produce high-end CGI, 3D animation, and video content.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    align: "left",
    color: "#a855f7",
  },
  {
    number: 4,
    title: "Optimization",
    desc: "Content is optimized for social media and ad performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    align: "right",
    color: "#c084fc",
  },
];

// Floating particle that bursts from a dot
function Particle({ active }) {
  const particles = Array.from({ length: 8 });
  return (
    <div className="ps-particles" aria-hidden="true">
      {particles.map((_, i) => (
        <div
          key={i}
          className="ps-particle"
          style={{
            "--angle": `${i * 45}deg`,
            "--dist": `${22 + (i % 3) * 10}px`,
            opacity: active ? 0 : 1,
            animation: active ? `psParticleBurst 0.7s ease-out ${i * 0.04}s forwards` : "none",
          }}
        />
      ))}
    </div>
  );
}

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when top of element hits bottom of viewport, 1 when bottom hits top
      const total = rect.height + windowH;
      const traveled = windowH - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / total)));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

function useInView(threshold) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: threshold || 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StepCard({ step, index, scrollProgress }) {
  const { ref, inView } = useInView(0.15);
  const [hovered, setHovered] = useState(false);
  const isLeft = step.align === "left";
  const delay = index * 0.16;

  // Spread cards evenly across 0–0.75 of scroll so card 4 fires well before the end
  const cardThreshold = (index / (steps.length - 1)) * 0.72;
  const cardActive = scrollProgress >= cardThreshold;

  return (
    <div ref={ref} className="ps-row">
      {/* LEFT */}
      <div className={`ps-side ps-side-left`}>
        {isLeft && (
          <div
            className="ps-card-wrap"
            style={{
              opacity: cardActive ? 1 : 0,
              transform: cardActive
                ? "translateX(0) scale(1)"
                : "translateX(-60px) scale(0.95)",
              transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
            }}
          >
            <div
              className="ps-card"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ "--card-color": step.color }}
            >
              <div className="ps-card-shimmer" />
              <div className="ps-card-glow" />
              <div className="ps-badge" style={{ background: `linear-gradient(135deg, ${step.color}, #6d28d9)` }}>
                {step.number}
              </div>
              <div className="ps-card-body">
                <div className="ps-icon" style={{ color: step.color }}>{step.icon}</div>
                <div>
                  <h3 className="ps-card-title">{step.title}</h3>
                  <p className="ps-card-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CENTER dot */}
      <div className="ps-center">
        <div
          className="ps-dot-outer"
          style={{
            opacity: cardActive ? 1 : 0,
            transform: cardActive ? "scale(1)" : "scale(0)",
            transition: `opacity 0.45s ease ${delay + 0.2}s, transform 0.45s cubic-bezier(.34,1.56,.64,1) ${delay + 0.2}s`,
          }}
        >
          <div className="ps-dot" />
          <Particle active={cardActive} />
        </div>
      </div>

      {/* RIGHT */}
      <div className={`ps-side ps-side-right`}>
        {!isLeft && (
          <div
            className="ps-card-wrap"
            style={{
              opacity: cardActive ? 1 : 0,
              transform: cardActive
                ? "translateX(0) scale(1)"
                : "translateX(60px) scale(0.95)",
              transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
            }}
          >
            <div
              className="ps-card"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ "--card-color": step.color }}
            >
              <div className="ps-card-shimmer" />
              <div className="ps-card-glow" />
              <div className="ps-badge" style={{ background: `linear-gradient(135deg, ${step.color}, #6d28d9)` }}>
                {step.number}
              </div>
              <div className="ps-card-body">
                <div className="ps-icon" style={{ color: step.color }}>{step.icon}</div>
                <div>
                  <h3 className="ps-card-title">{step.title}</h3>
                  <p className="ps-card-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const scrollProgress = useScrollProgress(sectionRef);
  const { ref: titleRef, inView: titleInView } = useInView(0.1);

  // Road fill: grows as you scroll through the section
  const roadFill = Math.min(1, scrollProgress * 2.2);

  return (
    <section className="ps-section" ref={sectionRef}>
      {/* Stars */}
      <div className="ps-stars" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="ps-star" style={{
            left: `${(i * 137.508) % 100}%`,
            top: `${(i * 97.33) % 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 7) * 0.6}s`,
            animationDuration: `${2 + (i % 5) * 0.7}s`,
          }} />
        ))}
      </div>

      {/* Ambient blobs */}
      <div className="ps-blob ps-blob-1" />
      <div className="ps-blob ps-blob-2" />

      {/* Moving orb that tracks scroll */}
      <div
        className="ps-scroll-orb"
        style={{ top: `${10 + scrollProgress * 70}%` }}
      />

      {/* Scroll progress bar on the right edge */}
      <div className="ps-progress-track">
        <div className="ps-progress-fill" style={{ height: `${scrollProgress * 100}%` }} />
        {steps.map((_, i) => (
          <div
            key={i}
            className="ps-progress-pip"
            style={{
              top: `${(i / (steps.length - 1)) * 100}%`,
              background: scrollProgress >= i / (steps.length) ? "#a855f7" : "rgba(168,85,247,0.25)",
              boxShadow: scrollProgress >= i / (steps.length) ? "0 0 8px #a855f7" : "none",
              transform: `translateX(-50%) scale(${scrollProgress >= i / (steps.length) ? 1.4 : 1})`,
            }}
          />
        ))}
      </div>

      <div className="ps-inner">
        {/* Logo */}
        <div className="ps-logo">
          <span className="ps-logo-rx">RX</span>
          <span className="ps-logo-sub">RENDER X MEDIA</span>
        </div>

        {/* Title with letter-by-letter reveal */}
        <div ref={titleRef}>
          <h2 className="ps-title">
            {"How We Create Impact".split("").map((ch, i) => (
              <span
                key={i}
                className="ps-title-char"
                style={{
                  opacity: titleInView ? 1 : 0,
                  transform: titleInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.5s ease ${i * 0.025}s, transform 0.5s ease ${i * 0.025}s`,
                  display: "inline-block",
                  whiteSpace: ch === " " ? "pre" : "normal",
                }}
              >
                {ch}
              </span>
            ))}
          </h2>
        </div>

        {/* Scroll hint */}
        <div className="ps-scroll-hint" style={{ opacity: scrollProgress > 0.05 ? 0 : 1 }}>
          <div className="ps-scroll-mouse">
            <div className="ps-scroll-wheel" />
          </div>
          <span>scroll to explore</span>
        </div>

        {/* Road + Steps */}
        <div className="ps-road-wrap">
          {/* The road line */}
          <div className="ps-road-track">
            {/* Background static line */}
            <div className="ps-road-bg" />
            {/* Animated fill driven by scroll */}
            <div
              className="ps-road-fill"
              style={{ height: `${roadFill * 100}%` }}
            />
            {/* Moving glow head */}
            <div
              className="ps-road-head"
              style={{ top: `${roadFill * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="ps-steps">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                scrollProgress={scrollProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .ps-section {
          position: relative;
          background: #04010d;
          color: #fff;
          padding: 80px 20px 120px;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        /* ── Stars ── */
        .ps-stars { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .ps-star {
          position: absolute; background: #fff; border-radius: 50%;
          animation: psTwinkle linear infinite alternate;
        }
        @keyframes psTwinkle { from { opacity: 0.05; } to { opacity: 0.7; } }

        /* ── Blobs ── */
        .ps-blob { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
        .ps-blob-1 { width: 550px; height: 550px; top: -200px; left: -200px; background: rgba(139,92,246,0.1); }
        .ps-blob-2 { width: 450px; height: 450px; bottom: -150px; right: -150px; background: rgba(168,85,247,0.08); }

        /* Scroll orb */
        .ps-scroll-orb {
          position: absolute;
          left: -80px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          transition: top 0.1s linear;
        }

        /* ── Progress bar (right edge) ── */
        .ps-progress-track {
          position: fixed;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 140px;
          background: rgba(168,85,247,0.15);
          border-radius: 4px;
          z-index: 50;
        }
        .ps-progress-fill {
          width: 100%;
          background: linear-gradient(to bottom, #c084fc, #7c3aed);
          border-radius: 4px;
          transition: height 0.1s linear;
          box-shadow: 0 0 8px rgba(168,85,247,0.6);
        }
        .ps-progress-pip {
          position: absolute;
          left: 50%;
          width: 9px; height: 9px;
          border-radius: 50%;
          margin-top: -4px;
          transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
        }

        /* ── Inner ── */
        .ps-inner { position: relative; z-index: 1; }

        /* ── Logo ── */
        .ps-logo { display: flex; flex-direction: column; align-items: center; margin-bottom: 8px; }
        .ps-logo-rx {
          font-size: 2.2rem; font-weight: 900; letter-spacing: 0.1em;
          background: linear-gradient(135deg, #e9d5ff, #a855f7, #7c3aed);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ps-logo-sub { font-size: 0.57rem; letter-spacing: 0.38em; color: #a78bfa; margin-top: -3px; }

        /* ── Title ── */
        .ps-title {
          text-align: center;
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          background: linear-gradient(180deg, #fff 35%, #c084fc 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1.2;
        }

        /* ── Scroll hint ── */
        .ps-scroll-hint {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          margin-bottom: 44px; transition: opacity 0.5s ease;
          color: rgba(196,181,253,0.6); font-size: 0.75rem; letter-spacing: 0.1em;
        }
        .ps-scroll-mouse {
          width: 22px; height: 34px;
          border: 2px solid rgba(168,85,247,0.5);
          border-radius: 12px;
          display: flex; justify-content: center; padding-top: 5px;
        }
        .ps-scroll-wheel {
          width: 3px; height: 8px;
          background: #a855f7; border-radius: 2px;
          animation: psScrollWheel 1.5s ease-in-out infinite;
        }
        @keyframes psScrollWheel {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        /* ── Road ── */
        .ps-road-wrap { position: relative; max-width: 860px; margin: 0 auto; }
        .ps-road-track {
          position: absolute;
          left: 50%; transform: translateX(-50%);
          top: 0; bottom: 0;
          width: 4px; z-index: 0;
        }
        .ps-road-bg {
          position: absolute; inset: 0;
          background: rgba(88,28,135,0.3);
          border-radius: 4px;
        }
        .ps-road-fill {
          position: absolute; top: 0; left: 0; right: 0;
          background: linear-gradient(to bottom, #c084fc, #7c3aed);
          border-radius: 4px;
          box-shadow: 0 0 14px rgba(168,85,247,0.8);
          transition: height 0.08s linear;
        }
        /* Glowing head of the road fill */
        .ps-road-head {
          position: absolute;
          left: 50%; transform: translateX(-50%);
          width: 14px; height: 14px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 10%, #c084fc 50%, transparent 70%);
          box-shadow: 0 0 18px 8px rgba(192,132,252,0.9);
          margin-top: -7px;
          transition: top 0.08s linear;
          animation: psHeadPulse 1s ease-in-out infinite alternate;
        }
        @keyframes psHeadPulse {
          from { box-shadow: 0 0 18px 8px rgba(192,132,252,0.9); }
          to   { box-shadow: 0 0 30px 14px rgba(192,132,252,0.4); }
        }

        /* ── Steps ── */
        .ps-steps {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: 52px;
        }
        .ps-row {
          display: flex; align-items: center; width: 100%; min-height: 130px;
        }
        .ps-side { flex: 1; display: flex; min-width: 0; }
        .ps-side-left  { justify-content: flex-end;  padding-right: 32px; }
        .ps-side-right { justify-content: flex-start; padding-left: 32px; }

        /* ── Dot ── */
        .ps-center {
          width: 32px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; z-index: 4;
        }
        .ps-dot-outer { position: relative; display: flex; align-items: center; justify-content: center; }
        .ps-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: radial-gradient(circle, #fff 10%, #a855f7 70%);
          box-shadow: 0 0 14px 6px rgba(168,85,247,0.9);
          animation: psDotPulse 2s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes psDotPulse {
          0%,100% { box-shadow: 0 0 14px 6px rgba(168,85,247,0.9); }
          50%      { box-shadow: 0 0 28px 14px rgba(168,85,247,0.3); }
        }

        /* ── Particles ── */
        .ps-particles { position: absolute; inset: 0; pointer-events: none; }
        .ps-particle {
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #c084fc;
          transform: translate(-50%, -50%);
        }
        @keyframes psParticleBurst {
          0%   { transform: translate(-50%,-50%) rotate(var(--angle)) translateX(0) scale(1); opacity: 1; }
          100% { transform: translate(-50%,-50%) rotate(var(--angle)) translateX(var(--dist)) scale(0); opacity: 0; }
        }

        /* ── Card ── */
        .ps-card-wrap { width: 100%; max-width: 360px; }
        .ps-card {
          position: relative;
          background: rgba(88,28,135,0.18);
          border: 1px solid rgba(168,85,247,0.3);
          border-radius: 16px;
          padding: 18px 20px;
          backdrop-filter: blur(14px);
          overflow: hidden;
          cursor: default;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), border-color 0.3s, background 0.3s;
        }
        .ps-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(192,132,252,0.75);
          background: rgba(88,28,135,0.32);
        }
        /* Shimmer sweep on hover */
        .ps-card-shimmer {
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(192,132,252,0.08), transparent);
          transform: skewX(-20deg);
          transition: none;
          pointer-events: none;
        }
        .ps-card:hover .ps-card-shimmer {
          animation: psShimmer 0.6s ease forwards;
        }
        @keyframes psShimmer {
          from { left: -100%; }
          to   { left: 160%; }
        }
        .ps-card-glow {
          position: absolute; inset: 0; border-radius: 16px;
          background: radial-gradient(ellipse at 10% 50%, rgba(139,92,246,0.2), transparent 70%);
          opacity: 0; pointer-events: none; transition: opacity 0.3s;
        }
        .ps-card:hover .ps-card-glow { opacity: 1; }

        .ps-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 50%;
          box-shadow: 0 0 16px rgba(168,85,247,0.7);
          font-weight: 800; font-size: 0.9rem; color: #fff;
          border: 2px solid rgba(233,213,255,0.45);
          margin-bottom: 12px; flex-shrink: 0;
        }
        .ps-card-body { display: flex; align-items: flex-start; gap: 12px; }
        .ps-icon      { flex-shrink: 0; margin-top: 2px; }
        .ps-card-title { font-size: 1.05rem; font-weight: 700; color: #f3e8ff; margin: 0 0 6px; }
        .ps-card-desc  { font-size: 0.84rem; color: #c4b5fd; line-height: 1.65; margin: 0; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 768px) {
          .ps-road-track    { display: none; }
          .ps-center        { display: none; }
          .ps-progress-track { display: none; }
          .ps-row {
            flex-direction: column; align-items: center;
            gap: 0; min-height: unset;
          }
          .ps-side {
            flex: unset; width: 100%; max-width: 480px;
            padding: 0 !important; justify-content: center !important;
          }
          .ps-card-wrap { max-width: 100%; }
          .ps-steps { gap: 18px; }
        }
        @media (max-width: 480px) {
          .ps-section { padding: 60px 14px 80px; }
          .ps-card    { padding: 16px; }
          .ps-card-title { font-size: 1rem; }
          .ps-card-desc  { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
