"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            We Create Visual Experiences <br /> That Make Brands Unforgettable
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A creative studio specializing in high-end CGI, 3D animation, and
            cinematic visuals for modern brands and products.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-400 mb-6">
            We are a creative CGI studio focused on creating high-quality
            product visuals, cinematic animations, and digital experiences for
            brands that want to stand out.
          </p>

          <p className="text-gray-400">
            From product launches to social media campaigns, we help brands
            communicate their ideas through stunning visual storytelling using
            advanced 3D technology and creative direction.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl h-[350px] flex items-center justify-center text-gray-500">
          Studio Visual Placeholder
        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            We combine creativity and technology to produce visuals that elevate brands.
          </p>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "CGI Product Visualization",
            "3D Animation",
            "Motion Graphics",
            "AI Generated Videos",
            "2D Animation",
            "Social Media Reels",
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-white/10 bg-black hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Brands Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-4">Creative Excellence</h3>
            <p className="text-gray-400">
              Every project is crafted with attention to detail and cinematic quality.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Fast Production</h3>
            <p className="text-gray-400">
              Optimized workflows allow us to deliver high-quality visuals quickly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Brand Focused</h3>
            <p className="text-gray-400">
              Our visuals are designed to increase brand engagement and conversions.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-950 py-24 px-6">

        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Process
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {[
            "Concept",
            "Design",
            "Production",
            "Final Delivery",
          ].map((step, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-purple-500 mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg">{step}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Create Something Incredible
        </h2>

        <p className="text-gray-400 mb-10">
          Tell us about your project and let's bring it to life.
        </p>

        <a
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition"
        >
          Start a Project
        </a>

      </section>

    </main>
  );
}