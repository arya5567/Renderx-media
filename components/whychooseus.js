export default function WhyChooseUs() {
  const points = [
    "Creative CGI specialists",
    "Premium visual storytelling",
    "Marketing + creative in one place",
    "Fast delivery and professional workflow",
    "Content optimized for social media",
  ];

  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Brands Choose RenderX Media</h2>
      <ul className="max-w-3xl mx-auto space-y-4 text-gray-300">
        {points.map((p, i) => (
          <li key={i} className="bg-gray-900 p-4 rounded-lg hover:scale-105 transition">{p}</li>
        ))}
      </ul>
    </section>
  );
}