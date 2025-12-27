import React from "react";

export default function Directions() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Find Vector Auto in Osseo</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Our auto shop is located in Osseo, MN, around the back of the building. Follow these detailed directions to find us easily.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location Map</h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
              <img src="/images/blank.jpeg" alt="Vector Auto Location Map" className="w-full h-full object-cover rounded-lg" />
            </div>
            <p className="text-gray-600 mb-2"><strong>Address:</strong> 219 Country Road 81, Osseo, MN 55369</p>
            <p className="text-gray-600">Our shop is located at the back of the main building in Osseo, serving the Twin Cities metro area.</p>
          </div>

          {/* Detailed Directions Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Directions</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">From Main Street (Osseo)</h3>
                    <p className="text-gray-600">Turn onto Country Road 81 and drive for approximately 0.5 miles. Look for the large red brick building with "Oak Avenue Plaza" sign on your right.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Find the Main Entrance</h3>
                    <p className="text-gray-600">Continue past the main building's front entrance. Keep driving along the right side of the building - you'll see parking spaces for various businesses.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Turn Into Our Parking Lot</h3>
                    <p className="text-gray-600">Look for the driveway that goes around the back of the building. There's a sign that says "Vector Auto - Suite B" at the entrance. Turn right into this driveway.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Find Our Entrance</h3>
                    <p className="text-gray-600">Drive around to the back and you'll see our blue and white Vector Auto sign above a glass door entrance. Our shop is the first unit on the left in the back building.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">5</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Parking Instructions</h3>
                    <p className="text-gray-600">Park in any of the three designated Vector Auto spots directly in front of our entrance. These are marked with blue lines and our logo. Additional parking is available in the general lot.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Landmarks */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visual Landmarks</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Look for the red brick building with "Oak Avenue Plaza" sign in Osseo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Find the driveway on the right side of the building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Watch for our blue and white Vector Auto sign</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Our entrance is around the back, first door on the left</span>
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

        {/* Visual Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Visual Guide - Finding Our Osseo Shop</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="/images/blank.jpeg" alt="Main Building Front" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-gray-800">Main Building Front</h3>
              <p className="text-gray-600 text-sm">Start here - look for the red brick building with "Oak Avenue Plaza" sign in Osseo</p>
            </div>
            <div className="text-center">
              <img src="/images/blank.jpeg" alt="Side View" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-gray-800">Right Side Driveway</h3>
              <p className="text-gray-600 text-sm">Drive past the front entrance and turn right at our Vector Auto sign</p>
            </div>
            <div className="text-center">
              <img src="/images/blank.jpeg" alt="Vector Auto Entrance" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-gray-800">Our Back Entrance</h3>
              <p className="text-gray-600 text-sm">Look for our blue and white sign above the glass door around the back</p>
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