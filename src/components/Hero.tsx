import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Hero Image with Subtle Zoom & Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-luxury-villa.jpg"
          alt="ATLAS SIGNATURE luxury contemporary villa at twilight overlooking infinity pool and horizon"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        
        {/* Measured Luxury Architectural Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/65 to-[#0D0D0D]/40" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#0D0D0D]/20 to-[#0D0D0D]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 border border-[#C5A46D]/30 bg-[#171717]/80 backdrop-blur-md rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E8DDCC]">
            {t.hero.kicker}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F8F6F1] font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          {t.hero.headline.split('.').map((part, index) => (
            part.trim() ? (
              <span key={index} className="block last:text-[#E8DDCC] first:text-[#F8F6F1]">
                {part.trim()}{index === 0 ? '.' : ''}
              </span>
            ) : null
          ))}
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E8DDCC]/80 font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#0D0D0D] bg-[#C5A46D] hover:bg-[#D8BC8B] transition-all duration-300 rounded shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.ctaExplore}</span>
            <ArrowUpRight className="w-4 h-4 text-[#0D0D0D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#consultation"
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#F8F6F1] bg-[#171717]/80 hover:bg-[#262626] border border-[#C5A46D]/40 hover:border-[#C5A46D] transition-all duration-300 rounded flex items-center justify-center"
          >
            <span>{t.hero.ctaConsultation}</span>
          </a>
        </div>

        {/* Curated Structural Proof Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-3 rounded bg-[#171717]/40 backdrop-blur-sm border border-white/5">
            <span className="font-serif text-xl sm:text-2xl text-[#C5A46D] font-semibold tracking-wide">
              {t.hero.statPortfolio}
            </span>
            <span className="text-[11px] font-sans text-[#E8DDCC]/70 tracking-wider uppercase mt-1">
              {t.hero.statPortfolioLabel}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded bg-[#171717]/40 backdrop-blur-sm border border-white/5">
            <span className="font-serif text-xl sm:text-2xl text-[#F8F6F1] font-semibold tracking-wide">
              {t.hero.statExcellence}
            </span>
            <span className="text-[11px] font-sans text-[#E8DDCC]/70 tracking-wider uppercase mt-1">
              {t.hero.statExcellenceLabel}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded bg-[#171717]/40 backdrop-blur-sm border border-white/5">
            <span className="font-serif text-xl sm:text-2xl text-[#C5A46D] font-semibold tracking-wide">
              {t.hero.statLocations}
            </span>
            <span className="text-[11px] font-sans text-[#E8DDCC]/70 tracking-wider uppercase mt-1">
              {t.hero.statLocationsLabel}
            </span>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
    </section>
  );
};
