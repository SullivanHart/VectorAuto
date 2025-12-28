import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          <span className="text-accent">Vector</span> Auto
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <a href="/services" className="hover:text-accent transition">
            Services
          </a>
          <a href="/directions" className="hover:text-accent transition">
            Directions
          </a>
          <a href="/about" className="hover:text-accent transition">
            About
          </a>
          <a href="/testimonials" className="hover:text-accent transition">
            Testimonials
          </a>
        </nav>

        {/* Desktop Appointment button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="px-4 py-2 rounded-md bg-accent text-white font-semibold hover:bg-accent-dark transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            <a
              href="/services"
              className="block text-gray-300 hover:text-accent transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/directions"
              className="block text-gray-300 hover:text-accent transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Directions
            </a>
            <a
              href="/about"
              className="block text-gray-300 hover:text-accent transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/testimonials"
              className="block text-gray-300 hover:text-accent transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/contact"
              className="block text-gray-300 hover:text-accent transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
