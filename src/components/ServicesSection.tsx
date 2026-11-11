import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { SERVICES } from '../data/services';
import { translations } from '../data/translations';

interface ServicesSectionProps {
  currentLang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.services.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Services Grid: 3 columns x 2 rows with distinct visual crops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="luxury-card rounded-xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Service Visual Header */}
              <div className="relative h-48 overflow-hidden bg-[#171717]">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                
                {/* Index numbering badge */}
                <div className="absolute top-4 left-4 w-7 h-7 rounded border border-[#C5A46D]/40 bg-[#0D0D0D]/80 backdrop-blur-sm flex items-center justify-center font-mono text-[11px] text-[#C5A46D] font-bold">
                  0{index + 1}
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#C5A46D] uppercase block mb-1">
                    {srv.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#F8F6F1] font-semibold tracking-tight mb-3 group-hover:text-[#C5A46D] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#E8DDCC]/70 font-sans leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Bullet deliverables */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[#E8DDCC]/80">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A46D] hover:text-[#D8BC8B] transition-colors uppercase tracking-wider"
                  >
                    <span>Engage Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
