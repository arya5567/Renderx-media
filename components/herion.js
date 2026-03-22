"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*?!/\\|[]{}";

const HEADLINES = [
  "HIGH-IMPACT CGI",
  "DIGITAL CAMPAIGNS",
  "WE CREATE IMPACT",
  "YOUR VISION. AMPLIFIED.",
];

function useScramble(target, speed = 45, delay = 0) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let started = false;
    const totalFrames = Math.ceil((target.length * speed) / 16);

    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      if (elapsed < delay) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!started) { started = true; startTime = ts; }
      const progress = Math.min(1, (ts - startTime) / (totalFrames * 16));
      const revealedCount = Math.floor(progress * target.length);

      setDisplay(
        target.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealedCount) return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join("")
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, speed, delay]);

  return display;
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`rx-nav ${scrolled ? "rx-nav--scrolled" : ""}`}>
      {/* Logo */}
      <div className="rx-nav-logo">
        <span className="rx-logo-rx">RX</span>
        <div className="rx-logo-text">
          <span className="rx-logo-brand">RENDER</span>
          <span className="rx-logo-x">X</span>
          <span className="rx-logo-media">MEDIA</span>
        </div>
      </div>

      {/* Desktop links */}
      <div className="rx-nav-links">
        {["Work", "Services", "Process", "Case Studies", "About"].map((l) => (
          <Link key={l} href="#" className="rx-nav-link">{l}</Link>
        ))}
      </div>

      {/* CTA */}
      <Link href="#" className="rx-nav-cta">Start Project</Link>

      {/* Mobile hamburger */}
      <button className="rx-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? "open" : ""} />
        <span className={menuOpen ? "open" : ""} />
        <span className={menuOpen ? "open" : ""} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="rx-mobile-menu">
          {["Work", "Services", "Process", "Case Studies", "About"].map((l) => (
            <Link key={l} href="#" className="rx-mobile-link" onClick={() => setMenuOpen(false)}>{l}</Link>
          ))}
          <Link href="#" className="rx-mobile-cta" onClick={() => setMenuOpen(false)}>Start Project</Link>
        </div>
      )}
    </nav>
  );
}

function ScrollIndicator() {
  return (
    <div className="rx-scroll-indicator">
      <div className="rx-scroll-mouse">
        <div className="rx-scroll-wheel" />
      </div>
      <span className="rx-scroll-text">SCROLL</span>
    </div>
  );
}

export default function HeroSection() {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [key, setKey] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const subLine1 = useScramble("// RENDERX_MEDIA.EXE", 55, 200);
  const subLine2 = useScramble("TRUSTED BY FORWARD-THINKING BRANDS", 40, 800);

  // Cycle headlines
  useEffect(() => {
    const iv = setInterval(() => {
      setHeadlineIdx((i) => (i + 1) % HEADLINES.length);
      setKey((k) => k + 1);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  // Fade in after load
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const headline = useScramble(HEADLINES[headlineIdx], 38, 0);

  return (
    <>
      <NavBar />

      <section className={`rx-hero ${loaded ? "rx-hero--loaded" : ""}`}>

        {/* ── Video background ── */}
        <video
          ref={videoRef}
          className="rx-video"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setLoaded(true)}
        >
          <source src="/homevdo.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="rx-overlay-dark" />
        <div className="rx-overlay-vignette" />
        <div className="rx-scanlines" aria-hidden="true" />

        {/* Grid lines */}
        <div className="rx-grid" aria-hidden="true" />

        {/* Corner brackets */}
        <div className="rx-bracket rx-bracket--tl" aria-hidden="true" />
        <div className="rx-bracket rx-bracket--tr" aria-hidden="true" />
        <div className="rx-bracket rx-bracket--bl" aria-hidden="true" />
        <div className="rx-bracket rx-bracket--br" aria-hidden="true" />

        {/* Main content */}
        <div className="rx-content">

          {/* Tag line */}
          <div className="rx-tag">
            <span className="rx-tag-dot" />
            <span className="rx-tag-text">{subLine1}</span>
            <span className="rx-tag-cursor">_</span>
          </div>

          {/* Scrambling headline */}
          <h1 className="rx-headline" key={key}>
            {headline}
          </h1>

          {/* Subtitle */}
          <p className="rx-sub">{subLine2}</p>

          {/* Horizontal rule */}
          <div className="rx-rule" />

          {/* Stats row */}
          <div className="rx-stats">
            {[
              { val: "50+", label: "Brands" },
              { val: "200+", label: "Projects" },
              { val: "5★", label: "Rating" },
            ].map((s, i) => (
              <div key={i} className="rx-stat">
                <span className="rx-stat-val">{s.val}</span>
                <span className="rx-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="rx-ctas">
            <Link href="#" className="rx-cta-primary">
              <span>Start Your Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="#" className="rx-cta-secondary">
              <span className="rx-play-icon">▶</span>
              Watch Reel
            </Link>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="rx-status-bar">
          <span className="rx-status-item">
            <span className="rx-status-dot rx-status-dot--green" />
            SYSTEM ONLINE
          </span>
          <span className="rx-status-item rx-status-hide-mobile">CGI · 3D ANIMATION · DIGITAL CAMPAIGNS</span>
          <span className="rx-status-item">EST. 2020</span>
        </div>

        <ScrollIndicator />
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow+Condensed:wght@700;900&display=swap');

        /* ════════════════════════════
           NAV
        ════════════════════════════ */
        .rx-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 40px;
          transition: background 0.4s ease, padding 0.4s ease, backdrop-filter 0.4s ease;
        }
        .rx-nav--scrolled {
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          padding: 14px 40px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Logo */
        .rx-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .rx-logo-rx {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.8rem; font-weight: 900;
          color: #fff; letter-spacing: 0.05em;
          text-shadow: 0 0 20px rgba(168,85,247,0.5);
        }
        .rx-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .rx-logo-brand { font-size: 0.52rem; font-weight: 700; letter-spacing: 0.3em; color: rgba(255,255,255,0.7); }
        .rx-logo-x { display: none; }
        .rx-logo-media { font-size: 0.42rem; letter-spacing: 0.25em; color: rgba(168,85,247,0.8); }

        /* Nav links */
        .rx-nav-links { display: flex; align-items: center; gap: 32px; }
        .rx-nav-link {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.65); text-decoration: none; text-transform: uppercase;
          transition: color 0.2s;
          font-family: 'Share Tech Mono', monospace;
        }
        .rx-nav-link:hover { color: #fff; }

        /* Nav CTA */
        .rx-nav-cta {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em;
          color: #fff; text-decoration: none; text-transform: uppercase;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          padding: 9px 20px; border-radius: 24px;
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .rx-nav-cta:hover { box-shadow: 0 0 24px rgba(168,85,247,0.5); transform: translateY(-1px); }

        /* Hamburger */
        .rx-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .rx-hamburger span {
          display: block; width: 22px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .rx-hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .rx-hamburger span.open:nth-child(2) { opacity: 0; }
        .rx-hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .rx-mobile-menu {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.97); z-index: 99;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 28px;
        }
        .rx-mobile-link {
          font-size: 1.6rem; font-weight: 900; color: #fff;
          text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase;
          font-family: 'Barlow Condensed', sans-serif;
          transition: color 0.2s;
        }
        .rx-mobile-link:hover { color: #c084fc; }
        .rx-mobile-cta {
          margin-top: 12px;
          font-size: 0.85rem; font-weight: 700; color: #fff;
          text-decoration: none; text-transform: uppercase; letter-spacing: 0.12em;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          padding: 12px 32px; border-radius: 28px;
        }

        /* ════════════════════════════
           HERO
        ════════════════════════════ */
        .rx-hero {
          position: relative; width: 100%; min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #000;
          opacity: 0; transition: opacity 0.8s ease;
        }
        .rx-hero--loaded { opacity: 1; }

        /* Video */
        .rx-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; z-index: 0;
        }

        /* Overlays */
        .rx-overlay-dark {
          position: absolute; inset: 0; z-index: 1;
          background: rgba(0,0,0,0.62);
        }
        .rx-overlay-vignette {
          position: absolute; inset: 0; z-index: 2;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
        }

        /* Scanlines */
        .rx-scanlines {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px,
            transparent 1px, transparent 4px
          );
        }

        /* Grid */
        .rx-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Corner brackets */
        .rx-bracket {
          position: absolute; z-index: 5; width: 28px; height: 28px;
          pointer-events: none; opacity: 0.5;
        }
        .rx-bracket--tl { top: 20px; left: 20px; border-top: 1px solid rgba(168,85,247,0.6); border-left: 1px solid rgba(168,85,247,0.6); }
        .rx-bracket--tr { top: 20px; right: 20px; border-top: 1px solid rgba(168,85,247,0.6); border-right: 1px solid rgba(168,85,247,0.6); }
        .rx-bracket--bl { bottom: 56px; left: 20px; border-bottom: 1px solid rgba(168,85,247,0.6); border-left: 1px solid rgba(168,85,247,0.6); }
        .rx-bracket--br { bottom: 56px; right: 20px; border-bottom: 1px solid rgba(168,85,247,0.6); border-right: 1px solid rgba(168,85,247,0.6); }

        /* Content */
        .rx-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 120px 24px 100px;
          max-width: 900px; width: 100%;
          margin: 0 auto;
        }

        /* Tag */
        .rx-tag {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
          animation: fadeSlideUp 0.7s ease 0.3s both;
        }
        .rx-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34,197,94,0.8);
          animation: tagPulse 1.5s ease-in-out infinite;
        }
        @keyframes tagPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .rx-tag-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(0.65rem, 1.5vw, 0.78rem);
          color: rgba(34,197,94,0.85);
          letter-spacing: 0.15em;
        }
        .rx-tag-cursor {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem; color: #22c55e;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Headline */
        .rx-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(3rem, 10vw, 7.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
          margin: 0 0 20px;
          text-transform: uppercase;
          animation: fadeSlideUp 0.5s ease both;
          min-height: 1.05em;
        }

        /* Subtitle */
        .rx-sub {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(0.6rem, 1.8vw, 0.8rem);
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0 0 24px;
          animation: fadeSlideUp 0.7s ease 1s both;
        }

        /* Rule */
        .rx-rule {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent);
          margin: 0 auto 24px;
          animation: fadeSlideUp 0.7s ease 1.1s both;
        }

        /* Stats */
        .rx-stats {
          display: flex; gap: 40px;
          margin-bottom: 36px;
          animation: fadeSlideUp 0.7s ease 1.2s both;
        }
        .rx-stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .rx-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.8rem; font-weight: 900; color: #fff; line-height: 1;
        }
        .rx-stat-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.6rem; color: rgba(168,85,247,0.8); letter-spacing: 0.15em; text-transform: uppercase;
        }

        /* CTAs */
        .rx-ctas {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;
          animation: fadeSlideUp 0.7s ease 1.4s both;
        }
        .rx-cta-primary {
          display: flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          color: #fff; text-decoration: none;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px;
          transition: box-shadow 0.3s, transform 0.2s;
          box-shadow: 0 0 0 1px rgba(168,85,247,0.3);
        }
        .rx-cta-primary:hover { box-shadow: 0 0 30px rgba(168,85,247,0.5); transform: translateY(-2px); }
        .rx-cta-secondary {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.75); text-decoration: none;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.15);
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .rx-cta-secondary:hover { border-color: rgba(168,85,247,0.5); color: #fff; background: rgba(168,85,247,0.08); }
        .rx-play-icon { font-size: 0.6rem; }

        /* Status bar */
        .rx-status-bar {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
        }
        .rx-status-item {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.58rem; color: rgba(255,255,255,0.3);
          letter-spacing: 0.18em; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .rx-status-dot { width: 5px; height: 5px; border-radius: 50%; }
        .rx-status-dot--green { background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,0.8); }

        /* Scroll indicator */
        .rx-scroll-indicator {
          position: absolute; bottom: 48px; right: 32px; z-index: 10;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          opacity: 0.5;
        }
        .rx-scroll-mouse {
          width: 18px; height: 28px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          display: flex; justify-content: center; padding-top: 4px;
        }
        .rx-scroll-wheel {
          width: 2px; height: 6px;
          background: rgba(255,255,255,0.6); border-radius: 2px;
          animation: scrollWheel 1.6s ease-in-out infinite;
        }
        @keyframes scrollWheel { 0%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(8px)} }
        .rx-scroll-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.5rem; color: rgba(255,255,255,0.4); letter-spacing: 0.2em;
        }

        /* Shared animation */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ════════════════════════════
           RESPONSIVE
        ════════════════════════════ */
        @media (max-width: 768px) {
          .rx-nav { padding: 16px 20px; }
          .rx-nav--scrolled { padding: 12px 20px; }
          .rx-nav-links { display: none; }
          .rx-nav-cta { display: none; }
          .rx-hamburger { display: flex; }
          .rx-status-hide-mobile { display: none; }
          .rx-status-bar { padding: 8px 16px; }
          .rx-bracket--tl { top: 12px; left: 12px; }
          .rx-bracket--tr { top: 12px; right: 12px; }
          .rx-content { padding: 100px 20px 90px; }
          .rx-stats { gap: 24px; }
          .rx-ctas { flex-direction: column; gap: 12px; }
          .rx-cta-primary, .rx-cta-secondary { width: 100%; justify-content: center; }
          .rx-scroll-indicator { display: none; }
        }

        @media (max-width: 480px) {
          .rx-headline { letter-spacing: 0.02em; }
          .rx-stats { gap: 20px; }
          .rx-stat-val { font-size: 1.5rem; }
        }
      `}</style>
    </>
  );
}
