'use client';

import { Phone, MessageCircle, ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Complete
              <span className="text-gradient block">IT & Security Solution</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional CCTV installation, computer repair, networking solutions, and premium IT services. 
              Fast service, affordable pricing, and expert support you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 border-2 border-accent hover:bg-accent/10 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                <span>Get Quote</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="https://www.google.com/maps/place/Niknex+IT+Solutions/@25.2790195,82.9971307,17z/data=!3m1!4b1!4m6!3m5!1s0x398e3165fed12a4d:0x48ba2ff47908c935!8m2!3d25.2790195!4d82.9971307!16s%2Fg%2F11z2d43zcy!18m1!1e1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-green-500 hover:bg-green-500/10 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                <MapPin size={20} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in-right hidden lg:block">
            <div className="relative w-full h-96">
              {/* CCTV Camera Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center border border-primary/30">
                <div className="text-center">
                  <div className="inline-block bg-primary/20 p-8 rounded-full mb-4 animate-pulse">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Professional IT Services</h3>
                  <p className="text-gray-300 mt-2">CCTV • Networking • Repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
