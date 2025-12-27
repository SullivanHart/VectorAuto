import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dmitri",
      vehicle: "BMW 3 Series",
      rating: 5,
      text: "Really good service and take care of your car. Affordable price. Aleksei is a great specialist and knows what he's doing."
    },
    {
      id: 2,
      name: "Nick",
      rating: 5,
      text: "I had a great experience with Vector Auto! Aleksey is a very knowledgeable and helpful mechanic. He sourced a full set of rotors that aren't easy to find and managed to get everything installed the same day. He even stayed late to make sure everything was done right."
    },
    {
      id: 3,
      name: "TJ",
      rating: 5,
      text: "Aleksei, owner of Vector Auto in Osseo Mn, is an open and honest mechanic. He has impeccable customer service! Not only does he explain the problem he sees, he will SHOW you what the problem is after a thorough inspection."
    },
    {
      id: 4,
      name: "Drive",
      vehicle: "Wholesale Dealer",
      rating: 5,
      text: "As an automotive wholesale dealer it is critical to have a mechanic that you can trust and understands how important turn around time is, all while being fair with pricing. I recently discovered Vector Auto and I'm so glad I did. I now refer everyone I know to them."
    },
    {
      id: 5,
      name: "Richard",
      vehicle: "VW Beetle",
      rating: 5,
      text: "I have a 2015 VW beetle that was losing about a quart of oil in under 1000 miles. Alexey suggested a chemical solution that he heard could fix the issue before doing a more expensive mechanical fix. We tried the chemical solution and have not lost a drop of oil since. Alexey is very knowledgeable, thorough and fair."
    },
    {
      id: 6,
      name: "Leonid",
      rating: 5,
      text: "Let me just say, Alexey is the man for the job. He explains everything clearly, orders quality parts, and does his job efficiently, including video recording. He's simply brilliant. Thank you so much for your work!"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = 27;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See what our satisfied customers are saying about Vector Auto
          </p>
          
          {/* Rating Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl font-bold text-gray-900">{averageRating}</span>
              <div className="text-left">
                <div className="flex text-yellow-400 text-2xl">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 mt-1">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-600">Recommend</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-accent">5.0</div>
                <div className="text-sm text-gray-600">Average</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-accent">{totalReviews}</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-accent hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  {testimonial.vehicle && (
                    <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
                  )}
                </div>
                <div className="flex text-yellow-400">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Customers Choose Vector Auto
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Honest Pricing</h3>
              <p className="text-sm text-gray-600">No surprises, no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Fast Service</h3>
              <p className="text-sm text-gray-600">Get back on the road quickly</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Detailed Explanations</h3>
              <p className="text-sm text-gray-600">We show you what's wrong</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Quality Parts</h3>
              <p className="text-sm text-gray-600">OEM and premium aftermarket</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of satisfied customers who trust Vector Auto
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition"
            >
              Book Your Service
            </a>
            <a
              href="/directions"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-gray-900 transition"
            >
              Visit Our Shop
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}