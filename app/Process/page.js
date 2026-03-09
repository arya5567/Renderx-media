"use client";

export default function ProcessPage() {
  const steps = [
    {
      title: "Strategy",
      desc: "We understand your brand, audience, and goals to lay the foundation for impactful campaigns.",
    },
    {
      title: "Concept",
      desc: "Our creative team develops powerful visual ideas that align with your brand identity.",
    },
    {
      title: "Production",
      desc: "We produce high-end CGI, 3D animation, and video content with cinematic quality.",
    },
    {
      title: "Optimization",
      desc: "Content is optimized for social media and ad performance to maximize reach and engagement.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Create Impact</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our process blends creativity, technology, and strategy to deliver premium visuals
          and marketing campaigns that help brands stand out globally.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition border border-white/10 hover:border-purple-500"
          >
            <div className="text-4xl font-bold text-purple-500 mb-4">{index + 1}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}