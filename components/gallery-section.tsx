
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { businessConfig } from '@/config/business-config';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'All Projects' 
    ? businessConfig.gallery.photos 
    : businessConfig.gallery.photos.filter(photo => photo.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const displayedPhotos = filteredPhotos.slice(startIndex, startIndex + photosPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to gallery section
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our completed projects across {businessConfig.business.location.fullLocation}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {businessConfig.gallery.categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary)]/90'
                  : 'text-gray-700 border-gray-300 hover:bg-[color:var(--color-primary)]/5 hover:border-[color:var(--color-primary)]'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={`${selectedCategory}-${startIndex + index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[color:var(--color-primary)] bg-[color:var(--color-primary)]/10 px-2 py-1 rounded-full">
                    {photo.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[color:var(--color-primary)] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center gap-2"
          >
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              className="px-3 py-2 text-sm"
            >
              Previous
            </Button>
            
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                variant={currentPage === index + 1 ? 'default' : 'outline'}
                className={`px-3 py-2 text-sm ${
                  currentPage === index + 1
                    ? 'bg-[color:var(--color-primary)] text-white'
                    : 'text-gray-700'
                }`}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              className="px-3 py-2 text-sm"
            >
              Next
            </Button>
          </motion.div>
        )}

        {/* No photos message */}
        {displayedPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No photos found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
