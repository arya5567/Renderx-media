"use client";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ready to elevate your brand? Let’s create something extraordinary together.
          Fill out the form below or reach us directly — we’d love to hear about your project.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <form className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-400">
              RenderX Media <br />
              Creative Studio for CGI, 3D & Digital Marketing
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400">media.renderx@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+91 0000000000</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rend.erxmedia?igsh=ODkzbWdiNnBvY2po" className="hover:text-purple-400 transition">Instagram</a>
              <a href="https://www.linkedin.com/company/renderex-media/" className="hover:text-purple-400 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}