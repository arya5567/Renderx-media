"use client";

import { motion } from "framer-motion";

const cgiVideos = [
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/black+friday+video+(1).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/CGI+Advertisement.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Comp+iphine.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Comp-4.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Cream+Bell+CGI.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Fokusss.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/CGI/Lrisa.mp4"
];

// duplicate videos for infinite loop
const loopCgiVideos = [...cgiVideos, ...cgiVideos];

// NEW: Video Editing section
const editingVideos = [
  // paste your video editing links here
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/0218+(1).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/0609(2)+(1).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/0611+(1)(4).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/0702+(1).mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/Kalpinik.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/Lepsol+Final+Video.mp4",
  "https://renderx.s3.eu-north-1.amazonaws.com/Reel/real+estate+(reel+1).mp4"

];

const loopEditingVideos = [...editingVideos, ...editingVideos];

export default function WorkPage() {
  return (
    <section className="bg-black text-white min-h-screen py-32 overflow-hidden">
      {/* CGI Section */}
      <div className="max-w-6xl mx-auto mb-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">CGI Work</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Hyper-real cinematic CGI visuals created for modern brands.
        </p>
      </div>

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
          {loopCgiVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden group"
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Editing Section */}
      <div className="max-w-6xl mx-auto mt-32 mb-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Editing</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Cinematic edits with seamless transitions, color grading, and storytelling.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["-50%", "0%"] }} // opposite direction
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopEditingVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden group"
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}