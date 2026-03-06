export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-gray-400 text-center px-6 py-8"
    >
      <div className="mb-4">
        <a href="#hero" className="text-purple-400 hover:text-purple-300 mx-2">
          Home
        </a>
        <a href="#about" className="text-purple-400 hover:text-purple-300 mx-2">
          About
        </a>
        <a href="#services" className="text-purple-400 hover:text-purple-300 mx-2">
          Services
        </a>
        <a href="#cta" className="text-purple-400 hover:text-purple-300 mx-2">
          Contact
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} My Startup. All rights reserved.
      </p>
    </footer>
  );
}