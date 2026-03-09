"use client";

import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/kmrrEGrpmQg?autoplay=1&mute=1&loop=1&playlist=kmrrEGrpmQg",
  "https://www.youtube.com/embed/8ls8GuVNFWc?autoplay=1&mute=1&loop=1&playlist=8ls8GuVNFWc",
  "https://www.youtube.com/embed/lCMvqJq3iOA?autoplay=1&mute=1&loop=1&playlist=lCMvqJq3iOA",
  "https://www.youtube.com/embed/IzHsX1TxsoE?autoplay=1&mute=1&loop=1&playlist=IzHsX1TxsoE",
  "https://www.youtube.com/embed/ooZEojlwEtA?autoplay=1&mute=1&loop=1&playlist=ooZEojlwEtA",
  "https://www.youtube.com/embed/hmLS_lUkEfI?autoplay=1&mute=1&loop=1&playlist=hmLS_lUkEfI",
  "https://www.youtube.com/embed/UfS5GX8Ul2M?autoplay=1&mute=1&loop=1&playlist=UfS5GX8Ul2M"
];

// duplicate videos for infinite loop
const loopVideos = [...videos, ...videos];

export default function WorkPage() {
  return (
    <section className="bg-black text-white min-h-screen py-32 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CGI Work
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Hyper-real cinematic CGI visuals created for modern brands.
        </p>
      </div>

      {/* Moving Video Wall */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden group"
            >
              {video.includes("youtube.com") ? (
                <iframe
                  src={video}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                ></iframe>
              ) : (
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}