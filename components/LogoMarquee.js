"use client";

import Image from "next/image";
import { useState } from "react";

const logos = [
  { name: "Clarens",     logo: "/Clarinslogo.png" },
  { name: "Megamart",    logo: "/megamart.logo.png" },
  { name: "VUSH",        logo: "/vushlogo.png" },
  { name: "Hairsmart",   logo: "/hairsmart.png" },
  { name: "Kalpinik AI", logo: "/kalpanik.png" },
  { name: "CC Cabinet",  logo: "/cclogoTransparent.PNG" },
  { name: "Larissa",     logo: "/larisalogo.png" },
  { name: "happily",     logo: "/happily.jpeg" },
  { name: "AAYCREATE",   logo: "/aaycreate logo.png" },
  { name: "neco",     logo: "/neco.jpeg" },
  { name: "plays",     logo: "/plays.png" },
  { name: "sleep",     logo: "/sleep.png" },
   { name: "global",     logo: "/global.png" }
];

const track = [...logos, ...logos, ...logos];

function LogoItem({ logo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`lm-item ${hovered ? "lm-item--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="lm-img-wrap">
        <Image
          src={logo.logo}
          alt={logo.name}
          fill
          style={{ objectFit: "contain" }}
          sizes="160px"
        />
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="lm-section">
      <div className="lm-line lm-line--top" />
      <div className="lm-line lm-line--bottom" />

      {/* Centre ambient glow */}
      <div className="lm-ambient" />

      <div className="lm-inner">
        {/* Heading */}
        <div className="lm-heading-row">
          <div className="lm-rule" />
          <h2 className="lm-heading">Trusted By</h2>
          <div className="lm-rule lm-rule--right" />
        </div>
        <p className="lm-sub">Brands that chose to create impact</p>

        {/* Marquee */}
        <div className="lm-viewport">
          <div className="lm-fade lm-fade--l" />
          <div className="lm-fade lm-fade--r" />

          <div className="lm-track">
            {track.map((logo, i) => (
              <LogoItem key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .lm-section {
          position: relative;
          background: #000;
          padding: 72px 0 84px;
          overflow: hidden;
        }

        /* Ambient glow */
        .lm-ambient {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 180px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%);
          pointer-events: none;
          border-radius: 50%;
        }

        /* Border lines */
        .lm-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(168,85,247,0.3) 25%,
            rgba(192,132,252,0.5) 50%,
            rgba(168,85,247,0.3) 75%,
            transparent 100%
          );
        }
        .lm-line--top    { top: 0; }
        .lm-line--bottom { bottom: 0; }

        .lm-inner {
          position: relative; z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Heading */
        .lm-heading-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 6px;
        }
        .lm-rule {
          height: 1px; width: 60px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.5));
        }
        .lm-rule--right {
          background: linear-gradient(270deg, transparent, rgba(168,85,247,0.5));
        }
        .lm-heading {
          font-size: clamp(1rem, 3vw, 1.3rem);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          margin: 0;
        }
        .lm-sub {
          text-align: center;
          font-size: 0.8rem;
          color: #6b7280;
          letter-spacing: 0.06em;
          margin: 0 0 48px;
        }

        /* Viewport */
        .lm-viewport {
          position: relative;
          overflow: hidden;
          padding: 16px 0 24px;
        }
        .lm-fade {
          position: absolute;
          top: 0; bottom: 0;
          width: 200px;
          z-index: 3;
          pointer-events: none;
        }
        .lm-fade--l { left: 0;  background: linear-gradient(to right, #000 20%, transparent); }
        .lm-fade--r { right: 0; background: linear-gradient(to left,  #000 20%, transparent); }

        /* Track */
        .lm-track {
          display: flex;
          align-items: center;
          gap: 64px;
          width: max-content;
          animation: lmScroll 30s linear infinite;
        }
        .lm-track:hover { animation-play-state: paused; }

        @keyframes lmScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }

        /* ── Logo item — NO box, just the image ── */
        .lm-item {
          position: relative;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
        }
        .lm-item--hovered {
          transform: translateY(-6px) scale(1.1);
        }

        /* Image wrapper */
        .lm-img-wrap {
          position: relative;
          width: 220px;
          height: 100px;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
        }
        .lm-item--hovered .lm-img-wrap {
          opacity: 1;
          filter: drop-shadow(0 0 10px rgba(192,132,252,0.5));
        }

        /* Divider dot between logos */
        .lm-item::after {
          content: '';
          position: absolute;
          right: -34px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(168,85,247,0.3);
        }

        /* Tablet */
        @media (max-width: 768px) {
          .lm-fade     { width: 100px; }
          .lm-track    { gap: 48px; }
          .lm-img-wrap { width: 170px; height: 80px; }
          .lm-item::after { right: -26px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .lm-section   { padding: 52px 0 60px; }
          .lm-inner     { padding: 0 16px; }
          .lm-fade      { width: 56px; }
          .lm-track     { gap: 32px; animation-duration: 22s; }
          .lm-img-wrap  { width: 120px; height: 56px; }
          .lm-item::after { right: -18px; width: 3px; height: 3px; }
          .lm-sub       { margin-bottom: 32px; font-size: 0.75rem; }
          .lm-heading   { font-size: 1rem; letter-spacing: 0.14em; }
          .lm-rule      { width: 36px; }
          .lm-item--hovered { transform: none; }
          .lm-item--hovered .lm-img-wrap { filter: none; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .lm-img-wrap { width: 100px; height: 48px; }
          .lm-track    { gap: 28px; }
          .lm-item::after { display: none; }
        }
      `}</style>
    </section>
  );
}
