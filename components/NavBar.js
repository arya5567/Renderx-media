"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-6xl
        rounded-full px-5 md:px-6
        flex items-center justify-between
        border transition-all duration-500
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10 h-[56px]"
            : "bg-black/40 backdrop-blur-lg border-white/5 h-[64px]"
        }
        shadow-lg`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="RenderX Logo"
            width={90}
            height={28}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="relative group">
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold text-white
            rounded-full
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:scale-105 transition
            shadow-md hover:shadow-purple-500/40"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl
        flex flex-col items-center justify-center gap-8
        text-white text-xl
        transition-all duration-500 z-40
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div ref={menuRef} className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-full
            bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold
            hover:scale-105 transition"
          >
            Start Project
          </Link>
        </div>
      </div>
    </>
  );
}