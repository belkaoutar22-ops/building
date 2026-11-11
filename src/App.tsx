import React, { useState, useEffect } from 'react';
import { Language, Currency, ConsultationLead } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureDesign } from './components/ArchitectureDesign';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LifestyleSection } from './components/LifestyleSection';
import { ConsultationForm } from './components/ConsultationForm';
import { ContactFooter } from './components/ContactFooter';
import { InquiriesDashboardModal } from './components/InquiriesDashboardModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('MAD');
  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [leads, setLeads] = useState<ConsultationLead[]>([]);

  // Selected project for consultation prefill
  const [consultationProject, setConsultationProject] = useState('');
  const [consultationPropertyType, setConsultationPropertyType] = useState('');

  // Fetch leads on mount from backend and local storage
  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/consultations');
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.leads)) {
          // Merge with any client-side localStorage leads
          let localLeads: ConsultationLead[] = [];
          try {
            localLeads = JSON.parse(localStorage.getItem('atlas_signature_leads') || '[]');
          } catch (e) {
            // ignore
          }
          const allMap = new Map<string, ConsultationLead>();
          data.leads.forEach((l: ConsultationLead) => allMap.set(l.id, l));
          localLeads.forEach((l: ConsultationLead) => allMap.set(l.id, l));
          const merged = Array.from(allMap.values()).sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setLeads(merged);
          return;
        }
      }
    } catch (err) {
      console.warn('API fetch warning, checking client persistence:', err);
    }

    // Local storage fallback
    try {
      const stored = JSON.parse(localStorage.getItem('atlas_signature_leads') || '[]');
      if (Array.isArray(stored)) {
        setLeads(stored);
      }
    } catch (e) {
      console.warn('Storage parse error:', e);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleLeadRecorded = (newLead: ConsultationLead) => {
    setLeads((prev) => [newLead, ...prev.filter((l) => l.id !== newLead.id)]);
  };

  const handleSelectProjectForConsultation = (projectName: string, propertyType: string) => {
    setConsultationProject(projectName);
    setConsultationPropertyType(propertyType);
  };

  const isRTL = currentLang === 'AR';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#0D0D0D] text-[#F8F6F1] font-sans selection:bg-[#C5A46D] selection:text-[#0D0D0D] ${
        isRTL ? 'font-arabic' : ''
      }`}
    >
      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        onOpenInquiries={() => setInquiriesModalOpen(true)}
        leadsCount={leads.length}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* About Us */}
        <AboutSection currentLang={currentLang} />

        {/* Featured Projects */}
        <ProjectsSection
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onSelectProjectForConsultation={handleSelectProjectForConsultation}
        />

        {/* Architecture & Design Gallery */}
        <ArchitectureDesign currentLang={currentLang} />

        {/* Our Services */}
        <ServicesSection currentLang={currentLang} />

        {/* Why Choose Us */}
        <WhyChooseUs currentLang={currentLang} />

        {/* Location & Lifestyle */}
        <LifestyleSection currentLang={currentLang} />

        {/* Lead Generation — Request a Consultation */}
        <ConsultationForm
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          initialProject={consultationProject}
          initialPropertyType={consultationPropertyType}
          onLeadRecorded={handleLeadRecorded}
        />
      </main>

      {/* Footer */}
      <ContactFooter currentLang={currentLang} />

      {/* Executive Inquiries / Registered Leads Dashboard Modal */}
      <InquiriesDashboardModal
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
        leads={leads}
        onRefresh={fetchLeads}
      />
    </div>
  );
}
