'use client';

import {
  Camera,
  Monitor,
  Wifi,
  Printer,
  LayoutGrid,
  Zap,
  Volume2,
  Palette,
  PenTool,
  Globe,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'DVR/NVR setup with mobile view capabilities',
    },
    {
      icon: Monitor,
      title: 'Computer Repair',
      description: 'Laptop and desktop repair & upgrade services',
    },
    {
      icon: Zap,
      title: 'Software Installation',
      description: 'Windows, drivers, and all software setup',
    },
    {
      icon: LayoutGrid,
      title: 'Gaming Setup',
      description: 'Games and third-party software installation',
    },
    {
      icon: Printer,
      title: 'Printer Services',
      description: 'Printer repair, setup, and maintenance',
    },
    {
      icon: Wifi,
      title: 'Network Setup',
      description: 'WiFi, networking, and connectivity solutions',
    },
    {
      icon: Camera,
      title: 'CCTV Maintenance',
      description: 'Regular AMC and maintenance services',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Logo, banner, and graphic design creation',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Google Ads & Meta Ads campaign management',
    },
    {
      icon: Volume2,
      title: 'Video Editing',
      description: 'Video editing and audio mixing services',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6 hover:border-accent/50 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary to-accent p-3 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
