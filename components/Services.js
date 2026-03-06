export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build fast, modern, and responsive websites.",
    },
    {
      title: "UI/UX Design",
      description: "Clean, user-friendly designs that delight customers.",
    },
    {
      title: "Digital Marketing",
      description: "Helping your brand grow with smart strategies.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-purple-400">
        Our Services
      </h2>
     <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-300">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}