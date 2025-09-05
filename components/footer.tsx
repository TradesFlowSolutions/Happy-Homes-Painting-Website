
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { businessConfig } from '@/config/business-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-32 h-8 mr-3">
                <Image
                  src={businessConfig.branding.logo.src}
                  alt={businessConfig.branding.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {businessConfig.business.name} has been serving {businessConfig.business.location.fullLocation} since {businessConfig.business.established}. 
              {businessConfig.owner.name}, our {businessConfig.owner.title}, brings {businessConfig.owner.experience} of expertise to every project.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[color:var(--color-secondary)]" />
                <a href={`tel:${businessConfig.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {businessConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[color:var(--color-secondary)]" />
                <a href={`mailto:${businessConfig.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {businessConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[color:var(--color-secondary)]" />
                <span className="text-gray-300">{businessConfig.business.location.fullLocation}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {businessConfig.services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 block">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {businessConfig.social?.facebook && (
              <a
                href={businessConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:var(--color-secondary)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {businessConfig.social?.instagram && (
              <a
                href={businessConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:var(--color-secondary)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} {businessConfig.business.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Licensed Contractor serving {businessConfig.business.location.city}, {businessConfig.business.location.state}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
