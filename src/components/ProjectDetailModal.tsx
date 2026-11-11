import React, { useState } from 'react';
import { X, MapPin, Maximize2, Calendar, CheckCircle2, ArrowRight, Shield, Layers } from 'lucide-react';
import { Project, Language, Currency } from '../types';
import { translations } from '../data/translations';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentCurrency: Currency;
  onSelectProjectForConsultation: (projectName: string, propertyType: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  currentLang,
  currentCurrency,
  onSelectProjectForConsultation
}) => {
  if (!isOpen || !project) return null;

  const t = translations[currentLang];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const formatPrice = (amount: number, currency: Currency) => {
    if (currency === 'MAD') {
      return `${amount.toLocaleString()} MAD`;
    }
    if (currency === 'EUR') {
      return `€${amount.toLocaleString()}`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const startingPrice = project.priceFrom[currentCurrency];

  const handleInquire = () => {
    onSelectProjectForConsultation(project.name, project.category);
    onClose();
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-[#121212] border border-[#C5A46D]/30 rounded-xl shadow-2xl overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#E8DDCC]/80 hover:text-white bg-[#0D0D0D]/70 hover:bg-[#171717] border border-white/10 rounded-full transition-colors"
          aria-label={t.modal.close}
        >
          <X className="w-5 h-5 text-[#C5A46D]" />
        </button>

        {/* Modal Body */}
        <div className="max-h-[85vh] overflow-y-auto">
          
          {/* Main Gallery Showcase */}
          <div className="relative bg-[#0D0D0D]">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full max-h-[460px] overflow-hidden">
              <img
                src={project.galleryImages[activeImageIndex] || project.mainImage}
                alt={`${project.name} - view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Gallery Thumbnails Strip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 overflow-x-auto p-1.5 bg-[#0D0D0D]/75 backdrop-blur-md rounded border border-white/10 max-w-max">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-10 rounded overflow-hidden border transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#C5A46D] ring-1 ring-[#C5A46D] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Status & Architectural Style Pill */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#171717]/90 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-[#C5A46D] border border-[#C5A46D]/30 rounded">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-[#171717]/90 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-emerald-400 border border-emerald-500/30 rounded">
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Details Content */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Header Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#C5A46D] uppercase block mb-1">
                  Reference: {project.codeName}
                </span>
                <h2 id="modal-project-title" className="font-serif text-3xl sm:text-4xl text-[#F8F6F1] font-semibold tracking-tight">
                  {project.name}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#E8DDCC]/70 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Price & Delivery Quick Bar */}
              <div className="flex flex-col md:text-right">
                <span className="text-[11px] font-mono text-[#E8DDCC]/60 uppercase tracking-wider">
                  {t.projects.startingFrom}
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#C5A46D] font-bold">
                  {formatPrice(startingPrice, currentCurrency)}
                </span>
                <span className="text-xs text-[#E8DDCC]/70 mt-1">
                  {t.projects.delivery}: <strong className="text-white font-mono">{project.deliveryDate}</strong>
                </span>
              </div>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#171717] rounded-lg border border-white/5">
              <div>
                <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Surface Area</span>
                <span className="font-serif text-base text-[#F8F6F1] font-medium">{project.surfaceArea}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Architectural Concept</span>
                <span className="font-serif text-sm text-[#F8F6F1] font-medium line-clamp-1">{project.architecturalStyle}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Escrow Phasing</span>
                <span className="font-serif text-base text-emerald-400 font-medium">Certified Tier-1</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Curated Units</span>
                <span className="font-serif text-base text-[#C5A46D] font-medium">{project.availableUnits.length} Typologies</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <div>
              <h3 className="font-serif text-lg text-[#F8F6F1] font-medium mb-3">
                {t.modal.overview}
              </h3>
              <p className="text-sm text-[#E8DDCC]/80 leading-relaxed font-sans font-light">
                {project.fullDescription}
              </p>
            </div>

            {/* Available Typologies / Units */}
            <div>
              <h3 className="font-serif text-lg text-[#F8F6F1] font-medium mb-3">
                {t.modal.availableUnits}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.availableUnits.map((unit, idx) => (
                  <div key={idx} className="p-3 bg-[#171717]/80 border border-white/5 rounded flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span className="text-xs text-[#E8DDCC] font-sans">{unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Architectural & Lifestyle Features */}
            <div>
              <h3 className="font-serif text-lg text-[#F8F6F1] font-medium mb-3">
                {t.modal.keyFeatures}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E8DDCC]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestone Payment Plan (Interactive Demo Schedule) */}
            <div className="p-5 bg-[#171717] border border-[#C5A46D]/20 rounded-lg space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base text-[#F8F6F1] font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#C5A46D]" />
                    {t.modal.paymentPlanTitle}
                  </h3>
                  <span className="text-[10px] font-mono text-[#C5A46D] uppercase">
                    Escrow Guaranteed
                  </span>
                </div>
                <p className="text-xs text-[#E8DDCC]/60 mt-1">
                  {t.modal.paymentPlanSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#111111] rounded border border-white/5">
                  <span className="font-serif text-lg font-bold text-[#C5A46D]">{project.paymentPlan.reservation}%</span>
                  <span className="text-[10px] text-[#E8DDCC]/70 block mt-1">{t.modal.reservation}</span>
                  <span className="text-[10px] font-mono text-[#E8DDCC]/50 mt-1 block">
                    {formatPrice((startingPrice * project.paymentPlan.reservation) / 100, currentCurrency)}
                  </span>
                </div>
                <div className="p-3 bg-[#111111] rounded border border-white/5">
                  <span className="font-serif text-lg font-bold text-[#F8F6F1]">{project.paymentPlan.foundation}%</span>
                  <span className="text-[10px] text-[#E8DDCC]/70 block mt-1">{t.modal.foundation}</span>
                  <span className="text-[10px] font-mono text-[#E8DDCC]/50 mt-1 block">
                    {formatPrice((startingPrice * project.paymentPlan.foundation) / 100, currentCurrency)}
                  </span>
                </div>
                <div className="p-3 bg-[#111111] rounded border border-white/5">
                  <span className="font-serif text-lg font-bold text-[#F8F6F1]">{project.paymentPlan.structure}%</span>
                  <span className="text-[10px] text-[#E8DDCC]/70 block mt-1">{t.modal.structure}</span>
                  <span className="text-[10px] font-mono text-[#E8DDCC]/50 mt-1 block">
                    {formatPrice((startingPrice * project.paymentPlan.structure) / 100, currentCurrency)}
                  </span>
                </div>
                <div className="p-3 bg-[#111111] rounded border border-white/5">
                  <span className="font-serif text-lg font-bold text-[#C5A46D]">{project.paymentPlan.handover}%</span>
                  <span className="text-[10px] text-[#E8DDCC]/70 block mt-1">{t.modal.handover}</span>
                  <span className="text-[10px] font-mono text-[#E8DDCC]/50 mt-1 block">
                    {formatPrice((startingPrice * project.paymentPlan.handover) / 100, currentCurrency)}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#E8DDCC]/50 italic">
                {t.modal.calculatorNote}
              </p>
            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <span className="text-xs text-[#E8DDCC]/60 font-sans">
                Confidential advisory dossier prepared by Atlas Signature Development Atelier.
              </span>
              <button
                onClick={handleInquire}
                className="w-full sm:w-auto px-6 py-3 bg-[#C5A46D] hover:bg-[#D8BC8B] text-[#0D0D0D] font-bold text-xs tracking-widest uppercase rounded shadow-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>{t.modal.inquireCTA}</span>
                <ArrowRight className="w-4 h-4 text-[#0D0D0D]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
