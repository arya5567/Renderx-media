export default function CTA() {
  return (
    <section
      id="cta"
      className="min-h-[50vh] flex flex-col items-center justify-center bg-purple-700 text-white text-center px-6 py-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
        Join us today and take your business to the next level with our modern solutions.
      </p>
      <a
        href="#footer"
        className="bg-black text-purple-400 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-900 transition duration-300"
      >
        Contact Us
      </a>
    </section>
  );
}