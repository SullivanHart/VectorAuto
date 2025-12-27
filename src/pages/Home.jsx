import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to <span className="text-accent">Vector Auto</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Osseo's Trusted European & Japanese Auto Specialists
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300">
            Family-owned & operated since 2010. Professional automotive repair and maintenance center serving the Twin Cities metro area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-2xl bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition">
              Book an Appointment
            </button>
            <button className="px-8 py-3 rounded-2xl border-2 border-accent text-accent font-semibold hover:bg-accent/20 transition">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Family Business Emphasis */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Small Business, Personal Service</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            As a family-owned business, we believe in honest work at fair prices. 
            When you bring your car to Vector Auto, you're not just another customer - you're part of our community.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/images/blank.jpeg" alt="Engine Repair" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Engine Repair</h3>
              <p className="text-gray-600">Complete engine diagnostics, repairs, and maintenance for all vehicle makes and models.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/images/blank.jpeg" alt="Brake Service" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Brake Service</h3>
              <p className="text-gray-600">Professional brake inspection, repair, and replacement to ensure your safety on the road.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/images/blank.jpeg" alt="Oil Changes" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Oil Changes</h3>
              <p className="text-gray-600">Quick and affordable oil change services with high-quality filters and lubricants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">European & Japanese Specialists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">European Expertise</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• BMW, Mercedes-Benz, Audi</li>
                <li>• Volkswagen, Porsche, Volvo</li>
                <li>• Advanced electrical diagnostics</li>
                <li>• Factory-scheduled maintenance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Japanese Excellence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Toyota, Honda, Subaru</li>
                <li>• Nissan, Mazda, Lexus</li>
                <li>• Engine and transmission specialists</li>
                <li>• Preventive maintenance experts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">All Makes & Models</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Domestic & Asian vehicles</li>
                <li>• Trucks & SUVs</li>
                <li>• Classic & modern cars</li>
                <li>• Comprehensive diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Vector Auto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Certified Technicians</h3>
              <p className="text-gray-600">ASE certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fast Service</h3>
              <p className="text-gray-600">Get back on the road quickly with efficient service</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Quality Parts</h3>
              <p className="text-gray-600">Only high-quality OEM and aftermarket parts</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Comfortable Lobby</h3>
              <p className="text-gray-600">WiFi and comfortable seating while you wait</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent">
              <p className="text-gray-700 mb-4 italic">"Really good service and take care of your car. Affordable price. Aleksei is a great specialist and knows what he's doing."</p>
              <p className="font-semibold text-gray-900">Dmitri</p>
              <p className="text-sm text-gray-600">BMW 3 Series</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent">
              <p className="text-gray-700 mb-4 italic">"I had a great experience with Vector Auto! Aleksey is a very knowledgeable and helpful mechanic. He even stayed late to make sure everything was done right."</p>
              <p className="font-semibold text-gray-900">Nick</p>
              <p className="text-sm text-gray-600">Satisfied Customer</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/testimonials" className="inline-block px-8 py-3 rounded-2xl bg-accent text-white font-semibold hover:bg-accent-dark transition">
              Read More Testimonials
            </a>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Our Osseo Shop</h2>
          <p className="text-lg text-gray-600 mb-8">
            Conveniently located in Osseo, serving the entire Twin Cities metro area. 
            We're just around the back of the building - follow our detailed directions to find us easily.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/directions" className="px-8 py-3 rounded-2xl bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition">
              Get Directions
            </a>
            <a href="/contact" className="px-8 py-3 rounded-2xl border-2 border-accent text-accent font-semibold hover:bg-accent/20 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
