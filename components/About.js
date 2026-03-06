export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-purple-400">About Us</h2>
      <p className="text-lg md:text-xl max-w-2xl text-gray-300">
        We are a modern startup focused on delivering premium solutions
        for businesses. Our mission is to combine technology and design
        to create products that truly make an impact.
      </p>
    </section>
  );
}