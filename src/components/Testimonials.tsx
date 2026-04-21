'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      comment: 'Outstanding CCTV installation and support. Professional team, fast service. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      role: 'School Principal',
      comment: 'Excellent networking setup for our school. Fast, reliable, and very affordable. Great service!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Shop Owner',
      comment: 'Fixed my computer issues quickly. Very professional technicians. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      role: 'Freelancer',
      comment: 'Amazing laptop repair service. Same day service and very affordable. Highly satisfied!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Factory Manager',
      comment: 'Complete IT solution provider. CCTV, networking, repairs - everything is top-notch!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real testimonials from satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6 hover:border-accent/50 transition transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
