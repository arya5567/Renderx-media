"use client";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "CGI Product Commercial",
      category: "CGI Advertising",
      desc: "A cinematic CGI commercial showcasing product features with high-end visuals.",
    },
    {
      title: "3D Product Animation",
      category: "3D Animation",
      desc: "Engaging 3D animation designed for e-commerce and social campaigns.",
    },
    {
      title: "Brand Campaign Visuals",
      category: "Marketing Campaign",
      desc: "Creative visuals crafted for global brand campaigns and promotions.",
    },
    {
      title: "Social Media Ad Creatives",
      category: "Digital Marketing",
      desc: "Scroll-stopping ad creatives optimized for Instagram, Facebook, and YouTube.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore how RenderX Media helps brands grow with high-impact visuals,
          cinematic CGI, and powerful digital marketing campaigns.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((study, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition border border-white/10 hover:border-purple-500"
          >
            <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
            <p className="text-sm text-purple-400 mb-2">{study.category}</p>
            <p className="text-gray-400">{study.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to See More?</h2>
        <p className="text-gray-400 mb-8">
          Browse our full portfolio to discover more CGI, animation, and marketing projects.
        </p>
        <a
          href="/work"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition"
        >
          View All Work
        </a>
      </div>
    </main>
  );
}