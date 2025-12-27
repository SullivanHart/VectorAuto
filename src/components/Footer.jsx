import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white">Vector Auto</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Osseo's trusted European & Japanese auto specialists. Professional service with integrity and expertise.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Serving the Twin Cities metro area since 2010
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/services" className="hover:text-accent transition">
                Services
              </a>
            </li>
            <li>
              <a href="/directions" className="hover:text-accent transition">
                Directions
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-accent transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Contact
          </h3>
          <p className="mt-3 text-sm">
            Phone: (651) 775-3300<br />
            Email: vectorautomn@gmail.com
          </p>
          <p className="mt-3 text-sm">
            Address: 219 Country Road 81<br />
            Osseo, MN 55369
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Mon-Fri: 9:00 AM - 5:00 PM<br />
            Sat & Sun: Closed
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vector Auto. All rights reserved. | Osseo, MN
      </div>
    </footer>
  );
}
