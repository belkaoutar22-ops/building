import React from 'react';
import { Layers, Compass, Leaf, Landmark } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const pillarIcons = [Layers, Compass, Leaf, Landmark];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.about.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Image on Left / Story & Philosophy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Architectural Atelier & Scale Model Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-lg border border-[#C5A46D]/20 shadow-2xl group">
              <img
                src="/images/company-vision-architecture.jpg"
                alt="ATLAS SIGNATURE architectural design atelier with scale model and blueprints"
                className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md border border-white/10 rounded">
                <span className="text-[10px] font-mono tracking-widest text-[#C5A46D] uppercase block mb-1">
                  Design Atelier · Casablanca & Milan
                </span>
                <p className="text-xs text-[#E8DDCC]/90 italic font-editorial">
                  "{t.about.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Philosophy Text */}
          <div className="lg:col-span-6 space-y-6 text-[#E8DDCC]/80 font-sans font-light leading-relaxed">
            <p className="text-base sm:text-lg text-[#F8F6F1] font-normal leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base">
              {t.about.p2}
            </p>
            <p className="text-sm sm:text-base">
              {t.about.p3}
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#C5A46D]">100%</span>
                <span className="text-[10px] font-mono tracking-wider text-[#E8DDCC]/60 uppercase">
                  Verified Escrow Phasing
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#F8F6F1]">Bespoke</span>
                <span className="text-[10px] font-mono tracking-wider text-[#E8DDCC]/60 uppercase">
                  Architectural Signatures
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#C5A46D]">Tier-1</span>
                <span className="text-[10px] font-mono tracking-wider text-[#E8DDCC]/60 uppercase">
                  European Materials
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: t.about.pillars.p1Title,
              desc: t.about.pillars.p1Desc,
              icon: Layers
            },
            {
              title: t.about.pillars.p2Title,
              desc: t.about.pillars.p2Desc,
              icon: Landmark
            },
            {
              title: t.about.pillars.p3Title,
              desc: t.about.pillars.p3Desc,
              icon: Leaf
            },
            {
              title: t.about.pillars.p4Title,
              desc: t.about.pillars.p4Desc,
              icon: Compass
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-6 rounded-lg relative group"
              >
                <div className="w-10 h-10 rounded border border-[#C5A46D]/30 bg-[#171717] flex items-center justify-center text-[#C5A46D] mb-5 group-hover:border-[#C5A46D] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#F8F6F1] font-medium mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#E8DDCC]/70 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
