"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6 py-6">

      {/* HERO FRAME */}
      <div className="relative w-full max-w-[1600px] h-[92vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

        {/* Background Video */}
  <video
  src="https://renderx.s3.eu-north-1.amazonaws.com/homevdo.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  onEnded={(e) => {
    e.target.currentTime = 0;
    e.target.play();
  }}
/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            animation: "gridMove 35s linear infinite",
          }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-12 h-12 border border-white/30 rounded-lg flex items-center justify-center text-white font-bold">
              RX
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] max-w-[1000px]"
          >
            High-Impact CGI
            <br />
            & Digital Campaigns
          </motion.h1>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 px-5 py-2 border border-white/25 rounded-full text-white text-sm backdrop-blur-md"
          >
            Industry Results • 200M+ Views Generated
          </motion.div>

        </div>

        {/* Bottom Label */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center text-white/70 text-sm">
          Trusted by 150+ Global Enterprises
        </div>

      </div>

      {/* Grid Animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 70px 70px; }
        }
      `}</style>

    </section>
  );
}