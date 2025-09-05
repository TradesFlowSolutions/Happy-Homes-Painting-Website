
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, ChefHat, Palette, Brush, Wrench } from 'lucide-react';
import { businessConfig } from '@/config/business-config';

// Icon mapping for dynamic icon selection
const iconMap = {
  Home,
  Building, 
  ChefHat,
  Palette,
  Brush,
  Wrench
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional painting and renovation services for your home in {businessConfig.business.location.fullLocation}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[color:var(--color-primary)] rounded-lg mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation and estimate for your project in {businessConfig.business.location.fullLocation}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-[color:var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[color:var(--color-primary)]/90 transition-colors"
              >
                Call {businessConfig.contact.phone}
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-[color:var(--color-secondary)] text-white rounded-lg font-semibold hover:bg-[color:var(--color-secondary)]/90 transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
