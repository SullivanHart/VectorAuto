import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Comprehensive Services</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Specializing in European and Japanese vehicles with expert care and precision
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/engine_out.jpg" alt="Engine Diagnostics & Repair" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Engine Diagnostics & Repair</h2>
              <p className="text-gray-600 mb-4">From complex diagnostics to complete engine overhauls, our certified technicians ensure your engine runs smoothly and efficiently.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Check Engine Light Diagnostics</li>
                <li>Engine Tune-ups</li>
                <li>Timing Belt Replacement</li>
                <li>Cylinder Head Repair</li>
              </ul>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/brakes.jpg" alt="Brake System Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Brake System Services</h2>
              <p className="text-gray-600 mb-4">Your safety is our priority. We offer comprehensive brake inspections, repairs, and replacements using high-quality parts.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Brake Pad & Rotor Replacement</li>
                <li>Brake Fluid Flush</li>
                <li>ABS System Diagnosis & Repair</li>
                <li>Parking Brake Adjustment</li>
              </ul>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/oil_change.jpg" alt="Oil Change & Fluid Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Oil Change & Fluid Services</h2>
              <p className="text-gray-600 mb-4">Regular oil changes and fluid checks are crucial for vehicle longevity. We use premium oils and filters.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Standard & Synthetic Oil Changes</li>
                <li>Transmission Fluid Service</li>
                <li>Coolant Flush</li>
                <li>Power Steering Fluid Check</li>
              </ul>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/tire.jpg" alt="Tire Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Tire Services</h2>
              <p className="text-gray-600 mb-4">Ensure optimal performance and safety with our tire services, including rotations, balancing, and new tire installation.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Tire Rotation & Balancing</li>
                <li>New Tire Sales & Installation</li>
                <li>Flat Tire Repair</li>
                <li>Wheel Alignment</li>
              </ul>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/knuckle.jpg" alt="Suspension & Steering" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Suspension & Steering</h2>
              <p className="text-gray-600 mb-4">Maintain a smooth and controlled ride with our expert suspension and steering system inspections and repairs.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Shock & Strut Replacement</li>
                <li>Power Steering Repair</li>
                <li>Ball Joint & Tie Rod Replacement</li>
                <li>Alignment Checks</li>
              </ul>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <img src="/images/maintenance.jpg" alt="AC & Heating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-15 transition"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">AC & Heating</h2>
              <p className="text-gray-600 mb-4">Stay comfortable year-round with our automotive AC and heating system diagnostics, repair, and recharge services.</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>AC Recharge & Repair</li>
                <li>Heater Core Replacement</li>
                <li>Blower Motor Repair</li>
                <li>Climate Control Diagnostics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* European & Japanese Specialization */}
        <div className="mt-16 bg-red-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">European & Japanese Specialists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">European Vehicles</h3>
              <p className="text-gray-600 mb-3">We specialize in servicing premium European brands with factory-level diagnostics and repair capabilities.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• BMW, Mercedes-Benz, Audi</li>
                <li>• Volkswagen, Porsche, Volvo</li>
                <li>• Advanced electrical diagnostics</li>
                <li>• Factory-scheduled maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Japanese Vehicles</h3>
              <p className="text-gray-600 mb-3">Reliable and affordable service for all Japanese makes and models, from economy to luxury.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Toyota, Honda, Subaru</li>
                <li>• Nissan, Mazda, Lexus</li>
                <li>• Engine and transmission specialists</li>
                <li>• Preventive maintenance experts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">All Makes & Models</h3>
              <p className="text-gray-600 mb-3">We work on all domestic and Asian vehicles, trucks, SUVs, and classic cars with comprehensive diagnostics.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Domestic & Asian vehicles</li>
                <li>• Trucks & SUVs</li>
                <li>• Classic & modern cars</li>
                <li>• Comprehensive diagnostics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Need a Service Not Listed?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to discuss your specific automotive needs. We're here to help!</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-2xl bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}