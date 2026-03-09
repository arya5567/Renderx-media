"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "3D Animation & Product Visualization",
      desc: "High-quality 3D animations that showcase products in a cinematic and engaging way.",
      tags: ["Product launches", "E-commerce ads", "Social media campaigns", "Website visuals"],
    },
    {
      title: "CGI Advertising",
      desc: "Scroll-stopping CGI advertisements designed for modern brands and social media.",
      tags: ["Instagram Reels", "Brand campaigns", "Product promotions", "Viral marketing content"],
    },
    {
      title: "Visual Effects (VFX)",
      desc: "Transform ordinary videos into cinematic visual experiences with professional VFX.",
      tags: ["Commercial videos", "Brand films", "Promotional content"],
    },
    {
      title: "Video Editing",
      desc: "Professional editing that makes videos engaging and dynamic.",
      tags: ["Color grading", "Motion graphics", "Sound design", "Social media formatting"],
    },
    {
      title: "Graphic Design",
      desc: "Creative design that builds strong brand identity.",
      tags: ["Social media posts", "Brand identity", "Product packaging", "Advertising creatives"],
    },
    {
      title: "Social Media Management",
      desc: "We manage and grow your brand across social platforms.",
      tags: ["Content planning", "Post creation", "Audience engagement", "Growth strategies"],
    },
    {
      title: "Google Ads Management",
      desc: "High-converting Google Ads campaigns to bring targeted traffic.",
      tags: ["Search Ads", "Display Ads", "YouTube Ads", "Performance tracking"],
    },
    {
      title: "Facebook & Instagram Ads",
      desc: "Data-driven advertising campaigns to increase leads and sales.",
      tags: ["Audience targeting", "Ad creative strategy", "Conversion tracking"],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          RenderX Media offers premium CGI, 3D animation, VFX, video production,
          graphic design, and digital marketing services to help brands stand out
          in today’s competitive digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition border border-white/10 hover:border-purple-500"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.desc}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {service.tags.map((tag, j) => (
                <li key={j}>• {tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}