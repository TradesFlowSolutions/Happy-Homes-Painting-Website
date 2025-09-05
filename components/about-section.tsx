
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Star, Award } from 'lucide-react';
import { businessConfig } from '@/config/business-config';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About {businessConfig.business.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {businessConfig.business.description} since {businessConfig.business.established}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/665cca210f92397e75bc9e4a/67d4a964-f955-416d-b828-729d4261d603/bigstock_125573201_.jpg"
                alt={`${businessConfig.owner.name} professional painter at work`}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[color:var(--color-secondary)]" />
                <span className="text-sm font-semibold text-gray-900">
                  {businessConfig.owner.experience} Experience
                </span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[color:var(--color-secondary)] text-[color:var(--color-secondary)]" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Meet {businessConfig.owner.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {businessConfig.owner.title} with {businessConfig.owner.experience} of experience serving {businessConfig.business.location.fullLocation}. 
                Committed to transforming your space with expert craftsmanship and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessConfig.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Certifications & Credentials</h4>
              <div className="flex flex-wrap gap-2">
                {businessConfig.owner.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-[color:var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <div className="text-3xl font-bold text-[color:var(--color-primary)] mb-1">
                  {businessConfig.business.experience}
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <div className="text-3xl font-bold text-[color:var(--color-primary)] mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
