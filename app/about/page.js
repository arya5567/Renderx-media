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
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            High-Impact CGI, 3D & Digital Marketing <br /> For Modern Brands
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            RenderX Media helps brands grow with high-impact visuals and powerful digital marketing.
            From 3D CGI advertisements to social media management and paid ads, we create strategies
            that attract attention and drive results.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About RenderX Media</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            RenderX Media is a creative and digital marketing studio specializing in 3D animation,
            CGI advertising, VFX, video production, graphic design, and social media marketing.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our goal is to help brands build a strong digital presence using creative visuals and
            smart marketing strategies. We work with businesses to create engaging content,
            powerful advertisements, and modern brand identities that connect with audiences
            and drive growth.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl h-[350px] flex items-center justify-center text-gray-500">
          Studio Visual Placeholder
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We combine creativity and technology to produce visuals that elevate brands.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "3D Animation & Product Visualization",
            "CGI Advertising",
            "Visual Effects (VFX)",
            "Video Editing & Motion Graphics",
            "Graphic Design & Branding",
            "Social Media Management",
            "Google Ads Campaigns",
            "Facebook & Instagram Ads",
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
          Why Brands Choose RenderX Media
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Creative CGI Specialists</h3>
            <p className="text-gray-400">
              Premium visual storytelling crafted with attention to detail and cinematic quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Marketing + Creative in One Place</h3>
            <p className="text-gray-400">
              Integrated workflows that combine creativity with data-driven marketing strategies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Fast Delivery & Optimization</h3>
            <p className="text-gray-400">
              Efficient production pipelines ensure quick delivery and optimized content for social media.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { step: "Strategy", desc: "We understand your brand, audience, and goals." },
            { step: "Concept", desc: "Our creative team develops powerful visual ideas." },
            { step: "Production", desc: "We produce high-end CGI, 3D animation, and video content." },
            { step: "Optimization", desc: "Content is optimized for social media and ad performance." },
          ].map((item, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-purple-500 mb-4">{index + 1}</div>
              <h3 className="text-lg font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-gray-400 mb-10">
          Let’s create something extraordinary together. Tell us about your project and let's bring it to life.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}