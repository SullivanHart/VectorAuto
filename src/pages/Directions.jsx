import React from "react";

export default function Directions() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Find Vector Auto in Osseo</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Our auto shop is located in Osseo, MN. Please enter in the back of the building when it is time for your appointment.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location Map</h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=219+Country+Road+81+Osseo+MN+55369"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 overflow-hidden hover:opacity-90 transition"
            >
              <img src="/images/map.png" alt="Vector Auto Location Map - Click to open in Google Maps" className="w-full h-full object-cover" />
            </a>
            <p className="text-gray-600 mb-2"><strong>Address:</strong> 219 Country Road 81, Osseo, MN 55369</p>
            <p className="text-gray-600">Our shop is located off HWY-169 in Osseo, serving the Twin Cities metro area.</p>
          </div>

          {/* Detailed Directions Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Directions</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">From Main Street (Osseo)</h3>
                    <p className="text-gray-600 italic">TODO: Add specific directions for this step</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Find the Main Entrance</h3>
                    <p className="text-gray-600 italic">TODO: Add specific directions for this step</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Turn Into Our Parking Lot</h3>
                    <p className="text-gray-600 italic">TODO: Add specific directions for this step</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Find Our Entrance</h3>
                    <p className="text-gray-600 italic">TODO: Add specific directions for this step</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Parking Instructions</h3>
                    <p className="text-gray-600 italic">TODO: Add specific directions for this step</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Landmarks */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visual Landmarks</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span className="italic">TODO: Add visual landmark description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span className="italic">TODO: Add visual landmark description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span className="italic">TODO: Add visual landmark description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span className="italic">TODO: Add visual landmark description</span>
                </li>
              </ul>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM<br />Sat & Sun: Closed</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
                  <p className="text-gray-600">Phone: (651) 775-3300<br />Email: vectorautomn@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Video Guide to Our Shop</h2>
          <div className="rounded-lg overflow-hidden bg-gray-900" style={{ height: '500px' }}>
            <video
              controls
              className="w-full h-full object-cover"
              poster="/images/shop.jpg"
            >
              <source src="/images/directions.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-600 text-center mt-4">Watch this quick video to see exactly how to find our shop in Osseo</p>
        </div>

        {/* Visual Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Visual Guide - Finding Our Osseo Shop</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/images/front_shop.jpg" alt="Main Building Front" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition"></div>
              </div>
              <h3 className="font-semibold text-gray-800">Main Building Front</h3>
              <p className="text-gray-600 text-sm italic"><span className="text-red-600 font-bold">✓</span> TODO: Add visual guide caption</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/images/blank.jpg" alt="Side View" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition"></div>
              </div>
              <h3 className="font-semibold text-gray-800">Right Side Driveway</h3>
              <p className="text-gray-600 text-sm italic"><span className="text-red-600 font-bold">✓</span> TODO: Add visual guide caption</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/images/blank.jpg" alt="Vector Auto Entrance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition"></div>
              </div>
              <h3 className="font-semibold text-gray-800">Our Back Entrance</h3>
              <p className="text-gray-600 text-sm italic"><span className="text-red-600 font-bold">✓</span> TODO: Add visual guide caption</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Still Having Trouble Finding Us?</h2>
          <p className="text-lg text-gray-600 mb-8">Give us a call and we'll help guide you to our Osseo location. We're happy to walk you through it!</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:6517753300" className="px-8 py-3 rounded-2xl bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition">
              Call Us Now
            </a>
            <a href="/contact" className="px-8 py-3 rounded-2xl border-2 border-accent text-accent font-semibold hover:bg-accent/20 transition">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}