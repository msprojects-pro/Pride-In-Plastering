/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Image as ImageIcon, Sparkles, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'skimming', label: 'Skimming' },
    { key: 'rendering', label: 'Rendering' },
    { key: 'boarding', label: 'Dry Lining' },
    { key: 'repair', label: 'Repairs & Damp' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <section className="relative bg-slate-950 py-24 md:py-32 overflow-hidden" id="gallery">
      {/* Visual backdrop accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
              Pride in Every Trowel Sweep
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Finished Masterpiece{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Showcase
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm font-light leading-relaxed">
              Real high-definition examples of our glass-smooth plaster finishes, modern external rendering, and repair work in Doncaster. Tap any image to inspect texture quality up-close.
            </p>
          </div>

          {/* Filter Pill List */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0" id="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-gold-400 text-slate-950 border-gold-400 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
                id={`gallery-filter-btn-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(item)}
                className="group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-slate-900 bg-slate-900/50 cursor-pointer shadow-lg hover:shadow-gold-500/5 hover:border-gold-400/30 transition-all duration-300"
                id={`gallery-item-${item.id}`}
              >
                {/* Showcase Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Shimmer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 h-9 w-9 bg-slate-950/85 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 border border-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <Maximize2 className="h-4 w-4 text-gold-400" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                      {item.category.replace('_', ' ')}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Trust Statement */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-900 text-slate-400 text-xs sm:text-sm font-light max-w-4xl mx-auto gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 bg-gold-400/10 rounded-xl flex items-center justify-center border border-gold-400/25">
              <Sparkles className="h-5 w-5 text-gold-400" />
            </div>
            <span>Every single photo represents genuine, high-grade, premium plastering and rendering completed by us. We never use fake stock templates of other people’s work.</span>
          </div>
          <a href="#contact" className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-gold-400 hover:text-white transition-colors shrink-0">
            Discuss Your Space <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-md cursor-zoom-out"
              id="lightbox-backdrop"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-gold-400/15 bg-slate-900/90 shadow-2xl backdrop-blur-sm z-10 flex flex-col"
              id="lightbox-panel"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-slate-300 hover:text-gold-400 transition-colors p-1.5 bg-slate-950/80 rounded-full border border-slate-800 hover:border-gold-400/50 z-20"
                aria-label="Close image preview"
                id="close-lightbox-btn"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex-1 bg-slate-950 overflow-hidden flex items-center justify-center min-h-[300px]">
                <img
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[60vh] object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900/95 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                    {lightboxImage.category.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Project Showcase</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-slate-300 text-sm mt-1.5 font-light">
                  {lightboxImage.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
