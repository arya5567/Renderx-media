export default function ProcessSection() {
  const steps = [
    { title: "Strategy", desc: "We understand your brand, audience, and goals." },
    { title: "Concept", desc: "Our creative team develops powerful visual ideas." },
    { title: "Production", desc: "We produce high-end CGI, 3D animation, and video content." },
    { title: "Optimization", desc: "Content is optimized for social media and ad performance." },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">How We Create Impact</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}