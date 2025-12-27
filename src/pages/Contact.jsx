import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Contact Vector Auto</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have questions about our services or need to schedule an appointment? Get in touch with our Osseo team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="(999) 123-4567"
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your vehicle or service needs..."
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent resize-none h-32"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent-dark transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visit Us in Osseo</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Vector Auto<br />
                    219 country Road 81<br />
                    Osseo, MN 55369
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(651) 775-3300</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">vectorautomn@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday & Sunday:</strong> Closed</p>
              </div>
              <p className="mt-4 text-sm text-gray-500">Emergency services available by appointment</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
              <div className="space-y-3">
                <a href="/directions" className="block w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-center font-medium hover:bg-gray-200 transition">
                  Get Directions to Osseo Shop
                </a>
                <a href="tel:6517753300" className="block w-full px-4 py-2 rounded-md bg-accent text-white text-center font-medium hover:bg-accent-dark transition">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
