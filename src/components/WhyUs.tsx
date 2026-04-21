'use client';

import { CheckCircle } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      title: 'Fast Service',
      description: 'Quick response time and same-day service available',
      icon: '⚡',
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising quality',
      icon: '💰',
    },
    {
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience',
      icon: '👨‍💼',
    },
    {
      title: 'On-Site Support',
      description: 'Professional service at your home or office',
      icon: '🏢',
    },
    {
      title: 'Trusted by Customers',
      description: 'Hundreds of satisfied clients across the region',
      icon: '⭐',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">NIKNEX?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We deliver exceptional IT solutions with customer satisfaction at our core
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/30 rounded-lg p-6 hover:border-accent/60 transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-300 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">500+</div>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">10+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">24/7</div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
