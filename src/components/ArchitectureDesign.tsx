import React, { useState } from 'react';
import { Eye, Sparkles, Layers, Maximize } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ArchitectureDesignProps {
  currentLang: Language;
}

export const ArchitectureDesign: React.FC<ArchitectureDesignProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 'interior',
      title: t.architecture.tagInterior,
      category: 'Luxury Interiors',
      description: 'Double-height volume with monolithic bookmatched Calacatta marble fireplace and floor-to-ceiling glass envelope.',
      image: '/images/luxury-interior-living.jpg',
      aspect: 'col-span-12 lg:col-span-7 h-[380px] sm:h-[480px]'
    },
    {
      id: 'facade',
      title: t.architecture.tagFacade,
      category: 'Contemporary Architecture',
      description: 'Tactile natural fluted travertine stone meeting precision bronze anodized thermal louvers.',
      image: '/images/architectural-details.jpg',
      aspect: 'col-span-12 lg:col-span-5 h-[380px] sm:h-[480px]'
    },
    {
      id: 'kitchen',
      title: t.architecture.tagKitchen,
      category: 'Interior Joinery',
      description: 'Monolithic honed Nero Marquina marble island with custom fluted smoked oak floor-to-ceiling cabinetry.',
      image: '/images/luxury-kitchen-suite.jpg',
      aspect: 'col-span-12 lg:col-span-5 h-[380px] sm:h-[440px]'
    },
    {
      id: 'landscape',
      title: t.architecture.tagLandscape,
      category: 'Landscaping & Wellness',
      description: 'Ancient sculpted olive tree, dark basalt water features, and private linen-shaded cabana pavilion.',
      image: '/images/lifestyle-gardens-pool.jpg',
      aspect: 'col-span-12 lg:col-span-7 h-[380px] sm:h-[440px]'
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.architecture.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.architecture.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-12 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className={`${item.aspect} relative rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#C5A46D]/50 transition-all duration-500 shadow-xl`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#141414]/80 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-[#C5A46D] border border-[#C5A46D]/30 rounded">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#141414]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#E8DDCC] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize className="w-3.5 h-3.5 text-[#C5A46D]" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F8F6F1] font-medium tracking-tight mb-2 group-hover:text-[#C5A46D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E8DDCC]/80 font-sans font-light max-w-lg line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg border border-[#C5A46D]/40">
            <img
              src={selectedImage}
              alt="Architectural Full Detail"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
