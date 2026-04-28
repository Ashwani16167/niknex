'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi NIKNEX, I am ${formData.name}. ${formData.message}. My contact: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/917318196299?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are here to help. Contact us for any inquiries or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/30 rounded-lg p-6 hover:border-accent/50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/30 p-3 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-sm text-gray-400">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>
              <a href="tel:+917318196299" className="text-primary font-bold hover:text-accent transition">
                +91 7318196299
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500/15 to-green-400/15 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500/30 p-3 rounded-lg">
                  <MessageCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-sm text-gray-400">Instant Response</p>
                </div>
              </div>
              <a
                href="https://wa.me/917318196299"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-bold hover:text-green-300 transition"
              >
                Message Us
              </a>
            </div>

            {/* Address */}
            <div className="bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/30 rounded-lg p-6 hover:border-accent/50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/30 p-3 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-sm text-gray-400">Office Location</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Niknex+IT+Solutions/@25.2790195,82.9971307,17z/data=!3m1!4b1!4m6!3m5!1s0x398e3165fed12a4d:0x48ba2ff47908c935!8m2!3d25.2790195!4d82.9971307!16s%2Fg%2F11z2d43zcy!18m1!1e1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-accent transition"
              >
                Niknex IT Solutions<br />
                Varanasi, Uttar Pradesh
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-secondary/50 border border-primary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary/50 border border-primary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition"
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-secondary/50 border border-primary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition resize-none"
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 text-white font-bold py-3 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send via WhatsApp</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}