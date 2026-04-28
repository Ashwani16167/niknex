'use client';

import Image from 'next/image';
import { MessageSquare } from 'lucide-react';

export default function Products() {
  const products = [
    { name: 'Laptop', category: 'Computer', image: '/products/LAPTOP.jpeg' },
    { name: 'Processor', category: 'Computer Parts', image: '/products/PROCESSOR.jpeg' },
    { name: 'RAM', category: 'Computer Parts', image: '/products/RAM.jpeg' },
    { name: 'Hard Disk', category: 'Storage', image: '/products/HARD DISK.jpeg' },
    { name: 'SSD', category: 'Storage', image: '/products/SSD.jpeg' },
    { name: 'Power Supply (SMPS)', category: 'Power', image: '/products/Power Supply (SMPS).jpeg' },
    { name: 'Printer', category: 'Peripherals', image: '/products/Printer.jpeg' },
    { name: 'Keyboard + Mouse Combo', category: 'Accessories', image: '/products/Keyboard + Mouse Combo.jpeg' },
    { name: 'Mouse', category: 'Accessories', image: '/products/mouse.jpeg' },
    { name: 'Ethernet Cable', category: 'Cabling', image: '/products/Ethernet Cable.jpeg' },
    { name: 'VGA Cable', category: 'Cabling', image: '/products/VGA Cable.jpeg' },
    { name: 'USB Hub', category: 'Accessories', image: '/products/USB Hub.jpeg' },
    { name: 'Pen Drive', category: 'Storage', image: '/products/PEN DRIVE.jpeg' },
    { name: 'Adaptor', category: 'Power', image: '/products/ADAPTOR.jpeg' },
    { name: 'Windows', category: 'Software', image: '/products/WINDOWS.jpeg' },
    { name: 'MS Office', category: 'Software', image: '/products/MS OFFICE.jpeg' },
  ];

  const handleEnquire = (productName: string) => {
    const message = `Hi NIKNEX, I am interested in ${productName}. Can you please provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/917318196299?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              className="group bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg overflow-hidden hover:border-accent/50 transition transform hover:scale-105 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 bg-secondary/50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={false}
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-white group-hover:text-accent transition">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{product.category}</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleEnquire(product.name)}
                  className="w-full bg-primary hover:bg-primary/80 text-white text-sm font-medium py-2 rounded transition mt-3"
                >
                  Enquire
                </button>
              </div>
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