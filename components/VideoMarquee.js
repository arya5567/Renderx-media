"use client";

import { motion } from "framer-motion";

const videos = [
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/black+friday+video+(1).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/CGI+Advertisement.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Comp+iphine.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Comp-4.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Cream+Bell+CGI.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Fokusss.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Lrisa.mp4"
];

export default function HomeCGIShowcase() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Work Speaks for Itself
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          High-end CGI, 3D animation, and digital campaigns crafted for modern brands.
          Each project blends creativity, technology, and storytelling to deliver
          premium visual experiences.
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
            className="min-w-[220px] h-[390px] rounded-xl overflow-hidden bg-black shadow-lg hover:scale-105 transition"
          >
            {video.includes("youtube.com") ? (
              <iframe
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            ) : (
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover rounded-xl"
              />
            )}
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