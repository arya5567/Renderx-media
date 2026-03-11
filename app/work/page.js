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