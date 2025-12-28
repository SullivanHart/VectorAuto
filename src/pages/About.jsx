import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-accent">Vector Auto</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Osseo's trusted European & Japanese auto specialists serving the Twin Cities metro area with integrity, expertise, and exceptional customer service.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Quality Workmanship</h2>
            <p className="text-gray-600">
              We use only high-quality parts and employ ASE-certified technicians to ensure every repair meets the highest standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Honest Service</h2>
            <p className="text-gray-600">
              Transparent pricing, clear explanations, and honest recommendations. We treat every vehicle like it's our own.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Customer First</h2>
            <p className="text-gray-600">
              Your satisfaction is our priority. We go above and beyond to get you back on the road safely and quickly.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Vector Auto was founded in Osseo, Minnesota with a simple mission: to provide reliable, honest, and high-quality automotive services that customers can trust.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've built a reputation for excellence in the Twin Cities metro area, serving thousands of satisfied customers with everything from routine maintenance to complex repairs.
              </p>
              <p className="text-gray-600">
                Our team of certified technicians specializes in European and Japanese vehicles, staying current with the latest automotive technology and repair techniques to provide the best possible service.
              </p>
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img src="/images/front_shop.jpg" alt="Vector Auto Shop" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition"></div>
            </div>
          </div>
        </div>

        {/* Meet Our Mechanics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Expert Mechanics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mechanic 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gray-900 text-white p-6">
                <h3 className="text-2xl font-semibold mb-1">Aleksei</h3>
                <p className="text-accent font-medium">Lead Technician</p>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent mr-4">
                    <img src="/images/maintenance.jpg" alt="Aleksei" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">15+ Years Experience</p>
                    <p className="text-sm text-gray-600">ASE Master Certified</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Our lead technician specializes in European and Japanese vehicles with extensive experience in complex diagnostics and engine repairs.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Advanced engine diagnostics & repair</li>
                    <li>• European vehicle electrical systems</li>
                    <li>• Transmission repair & rebuild</li>
                    <li>• Factory-scheduled maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mechanic 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gray-900 text-white p-6">
                <h3 className="text-2xl font-semibold mb-1">Blank Blank</h3>
                <p className="text-accent font-medium">Senior Tfechnician</p>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent mr-4">
                    <img src="/images/welding.jpg" alt="Blank Blank" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">12+ Years Experience</p>
                    <p className="text-sm text-gray-600">ASE Certified</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Our senior technician is a diagnostic specialist with a passion for solving complex automotive problems.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Computer diagnostics & programming</li>
                    <li>• Japanese vehicle specialists</li>
                    <li>• Brake & suspension systems</li>
                    <li>• AC & heating systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialization */}
        <div className="bg-red-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">European & Japanese Specialists</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">European Expertise</h3>
              <p className="text-gray-600 mb-3">We specialize in premium European brands with factory-level diagnostics:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• BMW, Mercedes-Benz, Audi</li>
                <li>• Volkswagen, Porsche, Volvo</li>
                <li>• Advanced electrical diagnostics</li>
                <li>• Factory-scheduled maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Japanese Excellence</h3>
              <p className="text-gray-600 mb-3">Reliable service for all Japanese makes and models:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Toyota, Honda, Subaru</li>
                <li>• Nissan, Mazda, Lexus</li>
                <li>• Engine and transmission specialists</li>
                <li>• Preventive maintenance experts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Community */}
        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Serving Osseo & Twin Cities Metro</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Located in Osseo, MN, we're proud to serve the entire Twin Cities metro area with professional automotive services. Our convenient location and expertise make us the go-to choice for European and Japanese vehicle owners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-accent rounded-full font-medium">Osseo, MN</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full font-medium">Twin Cities Metro</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full font-medium">European Specialists</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full font-medium">Japanese Experts</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
          <p className="text-gray-600 mb-6">
            We're proud to be ASE certified and work with leading automotive parts suppliers to ensure quality and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">ASE Certified</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">Better Business Bureau</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">AAA Approved</span>
          </div>
        </div>
      </div>
    </main>
  );
}
