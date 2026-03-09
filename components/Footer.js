export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-white font-bold text-2xl mb-4">RenderX Media</h3>
          <p className="text-gray-400 leading-relaxed">
            Creative Studio for CGI, 3D Animation, VFX & Digital Marketing.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/work" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Expertise</h4>
          <ul className="space-y-2">
            <li>CGI Advertising</li>
            <li>3D Animation</li>
            <li>Visual Effects</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <ul className="space-y-2">
            <li><a href="https://www.instagram.com/rend.erxmedia?igsh=ODkzbWdiNnBvY2po" className="hover:text-white transition">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/renderex-media/" className="hover:text-white transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center space-y-2">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} RenderX Media. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Designed & Developed by{" "}
          <a href="https://expandiq.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition">
            Expandiq Media
          </a>
        </p>
      </div>
    </footer>
  );
}