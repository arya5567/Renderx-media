export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-6 text-purple-400 fade-in-up">
        Contact Us
      </h2>
      <p className="text-lg text-gray-300 mb-8 fade-in-up">
        Have questions or want to work with us? Reach out below.
      </p>

      <form className="w-full max-w-md space-y-4 fade-in-up">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}