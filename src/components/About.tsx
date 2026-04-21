'use client';

import { Zap, Users, Shield, Headphones, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick response and efficient problem-solving',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description: 'Best value for premium IT solutions',
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      description: 'Highly skilled and certified professionals',
    },
    {
      icon: Shield,
      title: 'On-Site Support',
      description: 'Professional service at your location',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">NIKNEX IT SOLUTION</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are a trusted IT service provider committed to delivering excellence in every project. 
            With years of experience, we've earned the trust of hundreds of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 hover:border-accent/50 transition transform hover:scale-105 cursor-pointer"
              >
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-8">
          <p className="text-lg text-gray-300 text-center">
            <span className="text-accent font-bold">Founded with a vision</span> to provide reliable, affordable, and professional IT solutions. 
            We're not just a service provider; we're your technology partner committed to your success.
          </p>
        </div>
      </div>
    </section>
  );
}
