'use client';

import { MessageSquare } from 'lucide-react';

export default function Products() {
  const products = [
    { name: 'CCTV Camera (Dome)', category: 'Security' },
    { name: 'CCTV Camera (Bullet)', category: 'Security' },
    { name: 'IP Camera', category: 'Security' },
    { name: 'DVR System', category: 'Security' },
    { name: 'NVR System', category: 'Security' },
    { name: 'Surveillance HDD', category: 'Storage' },
    { name: 'SMPS/Power Supply', category: 'Power' },
    { name: 'POE Switch', category: 'Networking' },
    { name: 'WiFi Router', category: 'Networking' },
    { name: 'Network Switch', category: 'Networking' },
    { name: 'LAN Cable (Cat5e)', category: 'Cabling' },
    { name: 'LAN Cable (Cat6)', category: 'Cabling' },
    { name: 'Coaxial Cable', category: 'Cabling' },
    { name: 'BNC Connector', category: 'Cabling' },
    { name: 'RJ45 Connector', category: 'Cabling' },
    { name: 'HDMI Cable', category: 'Cabling' },
    { name: 'CCTV Monitor', category: 'Display' },
    { name: 'Inkjet Printer', category: 'Peripherals' },
    { name: 'Laser Printer', category: 'Peripherals' },
    { name: 'RAM', category: 'Computer Parts' },
    { name: 'SSD', category: 'Computer Parts' },
    { name: 'HDD', category: 'Computer Parts' },
    { name: 'Motherboard', category: 'Computer Parts' },
    { name: 'Keyboard', category: 'Accessories' },
    { name: 'Mouse', category: 'Accessories' },
    { name: 'Monitor', category: 'Accessories' },
    { name: 'Webcam', category: 'Accessories' },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Wide range of premium IT and security products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 hover:border-accent/50 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-white group-hover:text-accent transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{product.category}</p>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary/80 text-white text-sm font-medium py-2 rounded transition mt-3">
                Enquire
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Can not find what you need?</p>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-accent/20 hover:bg-accent/30 border border-accent/50 text-accent font-bold py-3 px-8 rounded-lg transition"
          >
            <MessageSquare size={20} />
            <span>Request Custom Product</span>
          </a>
        </div>

      </div>
    </section>
  );
}