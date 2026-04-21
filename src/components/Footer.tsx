'use client';

import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">NIKNEX</span>
              <p className="text-xs text-accent">IT SOLUTION</p>
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for complete IT and security solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#products" className="hover:text-accent transition">Products</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">CCTV Installation</a></li>
              <li><a href="#" className="hover:text-accent transition">Computer Repair</a></li>
              <li><a href="#" className="hover:text-accent transition">Networking</a></li>
              <li><a href="#" className="hover:text-accent transition">Maintenance</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition" title="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition" title="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NIKNEX IT SOLUTION. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#contact" className="hover:text-accent transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
