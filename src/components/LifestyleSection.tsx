import React from 'react';
import { Sun, Shield, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LifestyleSectionProps {
  currentLang: Language;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="lifestyle" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.lifestyle.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.lifestyle.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.lifestyle.subtitle}
          </p>
        </div>

        {/* 2 Lifestyle Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Private Oasis Landscaping */}
          <div className="luxury-card rounded-xl overflow-hidden group">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="/images/lifestyle-gardens-pool.jpg"
                alt="ATLAS SIGNATURE private garden and basalt reflecting pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#0D0D0D]/80 backdrop-blur-md rounded border border-[#C5A46D]/30 text-[10px] font-mono text-[#C5A46D] uppercase tracking-wider">
                Wellness & Nature
              </div>
            </div>
            
            <div className="p-7 space-y-3">
              <h3 className="font-serif text-2xl text-[#F8F6F1] font-semibold group-hover:text-[#C5A46D] transition-colors">
                {t.lifestyle.feature1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DDCC]/70 font-sans leading-relaxed">
                {t.lifestyle.feature1Desc}
              </p>
              <div className="flex items-center gap-4 pt-3 text-[11px] text-[#C5A46D] font-mono">
                <span>Drought-Tolerant Native Flora</span>
                <span aria-hidden="true">·</span>
                <span>Submerged Basalt Daybeds</span>
              </div>
            </div>
          </div>

          {/* Card 2: Dedicated VIP Advisory Suite */}
          <div className="luxury-card rounded-xl overflow-hidden group">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="/images/executive-consultation-lounge.jpg"
                alt="ATLAS SIGNATURE executive VIP consultation lounge overlooking city"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#0D0D0D]/80 backdrop-blur-md rounded border border-[#C5A46D]/30 text-[10px] font-mono text-[#C5A46D] uppercase tracking-wider">
                Discreet Advisory
              </div>
            </div>
            
            <div className="p-7 space-y-3">
              <h3 className="font-serif text-2xl text-[#F8F6F1] font-semibold group-hover:text-[#C5A46D] transition-colors">
                {t.lifestyle.feature2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DDCC]/70 font-sans leading-relaxed">
                {t.lifestyle.feature2Desc}
              </p>
              <div className="flex items-center gap-4 pt-3 text-[11px] text-[#C5A46D] font-mono">
                <span>Private Boardrooms</span>
                <span aria-hidden="true">·</span>
                <span>Fiduciary Concierge Desk</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
