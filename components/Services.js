const services = [
  {
    title: "3D Animation and CGI & VFX Advertising",
    desc: "Scroll-stopping reels  advertisements designed for modern brands and social media.",
    tags: ["Product launches", "Social Media Campaigns", "Viral Marketing Content"],
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
    title: "Google and Facebook Ads",
    desc: "High-converting Google Ads campaigns to bring targeted traffic.",
    tags: ["Audience targeting", "Ad creative strategy", "Conversion tracking","Performance tracking"],
  },
    {
    title: "Website Creation",
    desc: "Premium, responsive websites with cinematic UI, agency-level branding, and seamless deployment.",
    tags: ["Custom design", "Responsive layouts", "SEO optimization", "Domain & hosting setup"],
  },

];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
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
    </section>
  );
}