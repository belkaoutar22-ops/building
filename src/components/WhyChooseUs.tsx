import React from 'react';
import { Award, Compass, MapPin, CheckCircle, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const values = [
    {
      title: 'Architectural Excellence',
      description: 'We collaborate exclusively with leading architects and structural engineers to create distinctive, enduring properties that redefine contemporary living.',
      icon: Award
    },
    {
      title: 'Attention to Detail',
      description: 'From bookmatched marble veins to the acoustic calibration of double-glazed glass, no element is too minute for our obsessive standard of craft.',
      icon: Compass
    },
    {
      title: 'Strategic Locations',
      description: 'We secure premier parcels in sought-after urban, coastal, and private enclave destinations with high appreciation potential and sovereign prestige.',
      icon: MapPin
    },
    {
      title: 'Quality Standards',
      description: 'Every phase is executed following strict European building codes, environmental benchmarks, and independent third-party structural auditing.',
      icon: CheckCircle
    },
    {
      title: 'Client-Focused Approach',
      description: 'Our advisory partners provide transparent milestone tracking, discreet legal structuring, and customized interior curation tailored to each client.',
      icon: Users
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.whyChooseUs.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 5 Professional Values in Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-7 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg border border-[#C5A46D]/30 bg-[#171717] flex items-center justify-center text-[#C5A46D] mb-5 group-hover:border-[#C5A46D] group-hover:bg-[#C5A46D]/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F8F6F1] font-medium mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#E8DDCC]/70 font-sans leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C5A46D] font-mono">
                  <span>Principle 0{idx + 1}</span>
                  <span className="text-[#E8DDCC]/40">ATLAS SIGNATURE</span>
                </div>
              </div>
            );
          })}

          {/* Quote Card */}
          <div className="p-7 rounded-xl bg-gradient-to-br from-[#171717] to-[#121212] border border-[#C5A46D]/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A46D] uppercase block">
                Executive Creed
              </span>
              <p className="font-editorial italic text-base sm:text-lg text-[#F8F6F1] leading-relaxed">
                "We do not build for transient trends. We build spaces that hold their dignity, proportion, and sovereign value across generations."
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E8DDCC]/70">
              <span className="font-serif font-semibold text-[#C5A46D]">Board of Directors</span>
              <span className="font-mono text-[10px] text-stone-500">Atlas Signature Atelier</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
