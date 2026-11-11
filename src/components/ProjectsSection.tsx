import React, { useState } from 'react';
import { MapPin, Maximize2, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { Project, PropertyType, Language, Currency } from '../types';
import { DEMO_PROJECTS } from '../data/projects';
import { translations } from '../data/translations';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectProjectForConsultation: (projectName: string, propertyType: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  currentCurrency,
  onSelectProjectForConsultation
}) => {
  const t = translations[currentLang];
  const [activeFilter, setActiveFilter] = useState<PropertyType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { key: PropertyType; label: string }[] = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'Villas', label: t.projects.filterVillas },
    { key: 'Apartments', label: t.projects.filterApartments },
    { key: 'Commercial', label: t.projects.filterCommercial },
    { key: 'Under Development', label: t.projects.filterUnderDev }
  ];

  const filteredProjects = DEMO_PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Under Development') return proj.isUnderDevelopment;
    return proj.category === activeFilter;
  });

  const formatPrice = (amount: number, currency: Currency) => {
    if (currency === 'MAD') return `${amount.toLocaleString()} MAD`;
    if (currency === 'EUR') return `€${amount.toLocaleString()}`;
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section id="projects" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
              {t.projects.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-sm text-[#E8DDCC]/70 font-sans font-light mt-2 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="text-xs text-[#E8DDCC]/50 italic md:text-right max-w-xs">
            {t.projects.disclaimer}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded transition-all whitespace-nowrap ${
                activeFilter === f.key
                  ? 'bg-[#C5A46D] text-[#0D0D0D] font-bold shadow-md'
                  : 'bg-[#171717] text-[#E8DDCC]/70 hover:text-white hover:bg-[#222222]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2 Columns of Large Architectural Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const price = project.priceFrom[currentCurrency];

            return (
              <div
                key={project.id}
                className="luxury-card rounded-xl overflow-hidden group flex flex-col"
              >
                {/* Large Architectural Photography */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                  <img
                    src={project.mainImage}
                    alt={`${project.name} - ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#0D0D0D]/85 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-[#C5A46D] border border-[#C5A46D]/30 rounded">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#0D0D0D]/85 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-white/90 border border-white/10 rounded">
                      {project.codeName}
                    </span>
                  </div>

                  {/* Status Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#E8DDCC]/90">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0D0D0D]/85 backdrop-blur-md rounded border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span className="font-mono">{project.status}</span>
                    </div>

                    <div className="px-2.5 py-1 bg-[#0D0D0D]/85 backdrop-blur-md rounded border border-white/10 font-mono text-[#C5A46D]">
                      {t.projects.delivery}: {project.deliveryDate}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Project Name & Location */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-2xl text-[#F8F6F1] font-semibold tracking-tight group-hover:text-[#C5A46D] transition-colors">
                        {project.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-mono text-[#E8DDCC]/50 uppercase block">
                          {t.projects.startingFrom}
                        </span>
                        <span className="font-serif text-lg font-bold text-[#C5A46D]">
                          {formatPrice(price, currentCurrency)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#E8DDCC]/70 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <Maximize2 className="w-3 h-3 text-[#C5A46D] shrink-0" />
                      <span>{project.surfaceArea}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#E8DDCC]/80 font-sans font-light leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Highlights & View Button */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-[#E8DDCC]/60 truncate">
                      {project.architecturalStyle}
                    </span>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0D0D0D] bg-[#C5A46D] hover:bg-[#D8BC8B] rounded flex items-center gap-1.5 transition-colors whitespace-nowrap shadow-sm group-hover:shadow"
                    >
                      <span>{t.projects.viewProject}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0D0D0D]" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onSelectProjectForConsultation={onSelectProjectForConsultation}
      />
    </section>
  );
};
