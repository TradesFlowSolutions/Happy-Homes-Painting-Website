
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FreeEstimateModal from './free-estimate-modal';
import ColorConsultationModal from './color-consultation-modal';
import { businessConfig } from '@/config/business-config';

export default function HeroSection() {
  const [showEstimateModal, setShowEstimateModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleButtonClick = (action: string) => {
    if (action === 'estimate') {
      setShowEstimateModal(true);
    } else if (action === 'consultation') {
      setShowConsultationModal(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={businessConfig.hero.backgroundImage}
            alt={businessConfig.hero.backgroundAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-32 mx-auto mb-8 sm:w-64 sm:h-40 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <Image
              src={businessConfig.branding.logo.src}
              alt={businessConfig.branding.logo.alt}
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {businessConfig.hero.headline}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {businessConfig.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {businessConfig.hero.ctaButtons.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(button.action)}
                className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  button.type === 'primary'
                    ? 'bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90 text-white'
                    : 'bg-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary)]/90 text-white'
                }`}
              >
                {button.text}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {businessConfig.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full"></div>
                <span className="text-sm sm:text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <FreeEstimateModal 
        isOpen={showEstimateModal} 
        onClose={() => setShowEstimateModal(false)} 
      />
      <ColorConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
