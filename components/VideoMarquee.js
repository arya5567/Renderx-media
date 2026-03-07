"use client";

import { motion } from "framer-motion";

const videos = [
  "/CGI/black friday.mp4",
  "/CGI/Cream Bell CGI.mp4",
  "/CGI/Fokusss.mp4",
  "/CGI/Lrisa.mp4",
  "/CGI/lv 01.mp4",
  "/CGI/Megamart CGI video.mp4",
  "https://www.youtube.com/embed/P3xqRgol2BA?autoplay=1&mute=1&loop=1&playlist=P3xqRgol2BA",

];

export default function HomeCGIShowcase() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured CGI Work
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          High-end product visuals and cinematic CGI crafted for modern brands.
        </p>
      </div>

      {/* Moving Videos Row */}
      <motion.div
        className="flex gap-6 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...videos, ...videos].map((video, index) => (
          <div
            key={index}
            className="min-w-[220px] h-[390px] rounded-xl overflow-hidden"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* View More Button */}
      <div className="flex justify-center mt-16">
        <a
          href="/work"
          className="px-8 py-3 rounded-full text-white font-semibold
          bg-gradient-to-r from-purple-600 to-pink-600
          hover:scale-105 transition"
        >
          View All Work
        </a>
      </div>

    </section>
  );
}