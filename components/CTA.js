export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-pink-700 text-white py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
      <p className="text-gray-100 max-w-2xl mx-auto mb-8">
        Let’s create something extraordinary together.
      </p>
      <a
        href="/contact"
        className="px-8 py-3 rounded-full bg-black font-semibold hover:scale-105 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}