"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">

      {/* Background Video */}
     <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover scale-110"
>
  <source
    src="https://drive.google.com/uc?export=download&id=1cJ6jwVTeSV6F3XXJd1gTLMip3ZpdMtXn"
    type="video/mp4"
  />
</video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-16 left-0 w-full px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >

          {/* Minimal Headline */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hyper-Real CGI & 3D Visuals
          </h1>

          {/* Highlight Line */}
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            That Make Brands Unforgettable
          </h2>

          {/* Small description */}
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            High-end product renders and cinematic visuals for modern brands.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-medium
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:scale-105 transition"
            >
              Start Project
            </a>

            <a
              href="#work"
              className="px-7 py-3 rounded-full border border-white/30
              hover:bg-white/10 transition"
            >
              View Work
            </a>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center text-gray-400 text-sm tracking-widest">
        ↓ SCROLL
      </div>

    </section>
  );
}