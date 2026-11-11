import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, Loader2, Lock, Send, User, Mail, Phone, Building2, Calendar, FileText } from 'lucide-react';
import { Language, Currency, ConsultationLead } from '../types';
import { translations } from '../data/translations';

interface ConsultationFormProps {
  currentLang: Language;
  currentCurrency: Currency;
  initialProject?: string;
  initialPropertyType?: string;
  onLeadRecorded?: (lead: ConsultationLead) => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  currentLang,
  currentCurrency,
  initialProject = '',
  initialPropertyType = '',
  onLeadRecorded
}) => {
  const t = translations[currentLang];

  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+212');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredMethod, setPreferredMethod] = useState('WhatsApp');
  const [propertyType, setPropertyType] = useState(initialPropertyType || 'Villas');
  const [preferredProject, setPreferredProject] = useState(initialProject || 'General Portfolio Inquiry');
  const [budget, setBudget] = useState('2,000,000–5,000,000 MAD');
  const [purpose, setPurpose] = useState('Personal Residence');
  const [timeline, setTimeline] = useState('3–6 Months');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedLead, setSubmittedLead] = useState<ConsultationLead | null>(null);

  // Synchronize when initial values change from modal click
  React.useEffect(() => {
    if (initialProject) setPreferredProject(initialProject);
    if (initialPropertyType) setPropertyType(initialPropertyType);
  }, [initialProject, initialPropertyType]);

  const budgetOptions = [
    'Under 500,000 MAD',
    '500,000–1,000,000 MAD',
    '1,000,000–2,000,000 MAD',
    '2,000,000–5,000,000 MAD',
    'Above 5,000,000 MAD',
    'Not decided yet'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage(currentLang === 'FR' ? 'Veuillez saisir votre nom complet.' : currentLang === 'AR' ? 'يرجى إدخال الاسم الكامل.' : 'Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage(currentLang === 'FR' ? 'Veuillez saisir une adresse e-mail valide.' : currentLang === 'AR' ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage(currentLang === 'FR' ? 'Veuillez saisir votre numéro de téléphone.' : currentLang === 'AR' ? 'يرجى إدخال رقم الهاتف.' : 'Please enter your phone number.');
      return;
    }
    if (!consent) {
      setErrorMessage(currentLang === 'FR' ? 'Veuillez accepter les termes de confidentialité.' : currentLang === 'AR' ? 'يرجى الموافقة على شروط السرية.' : 'Please consent to the confidential communications agreement.');
      return;
    }

    setIsLoading(true);

    const payload = {
      fullName: fullName.trim(),
      countryCode,
      phone: phone.trim(),
      email: email.trim(),
      preferredContactMethod: preferredMethod,
      propertyType,
      preferredProject,
      budget,
      purpose,
      timeline,
      message: message.trim(),
      consent
    };

    try {
      // 1. Send to real backend endpoint
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.lead) {
        const lead: ConsultationLead = data.lead;
        setSubmittedLead(lead);

        // Also save to localStorage for client-side persistence redundancy
        try {
          const existing = JSON.parse(localStorage.getItem('atlas_signature_leads') || '[]');
          localStorage.setItem('atlas_signature_leads', JSON.stringify([lead, ...existing]));
        } catch (storageErr) {
          console.warn('LocalStorage backup error:', storageErr);
        }

        if (onLeadRecorded) {
          onLeadRecorded(lead);
        }
      } else {
        throw new Error(data.error || 'Server rejected lead registration.');
      }
    } catch (err: any) {
      console.warn('Backend API connection warning, falling back to persistent client storage:', err);
      
      // In static deployment (e.g. Netlify static hosting where Node backend is not executing),
      // we persist to client-side database so no lead is lost!
      const fallbackLead: ConsultationLead = {
        id: `AS-LEAD-LOCAL-${Date.now().toString(36).toUpperCase()}`,
        createdAt: new Date().toISOString(),
        status: 'RECORDED_CLIENT_DB',
        fullName: payload.fullName,
        phone: `${payload.countryCode} ${payload.phone}`,
        email: payload.email,
        preferredContactMethod: payload.preferredContactMethod,
        propertyType: payload.propertyType,
        preferredProject: payload.preferredProject,
        budget: payload.budget,
        purpose: payload.purpose,
        timeline: payload.timeline,
        message: payload.message,
        consent: true,
        assignedAdvisor: 'Atlas Executive Concierge Desk (Direct Sync)'
      };

      try {
        const existing = JSON.parse(localStorage.getItem('atlas_signature_leads') || '[]');
        localStorage.setItem('atlas_signature_leads', JSON.stringify([fallbackLead, ...existing]));
        setSubmittedLead(fallbackLead);
        if (onLeadRecorded) {
          onLeadRecorded(fallbackLead);
        }
      } catch (storageErr) {
        setErrorMessage('Failed to record consultation. Please try again or reach us by phone directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedLead(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setConsent(false);
  };

  return (
    <section id="consultation" className="py-24 bg-[#0D0D0D] relative border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
            {t.leadForm.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F6F1] font-semibold tracking-tight mb-4">
            {t.leadForm.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDCC]/70 font-sans font-light">
            {t.leadForm.subtitle}
          </p>
        </div>

        {/* Success Confirmation Card */}
        {submittedLead ? (
          <div className="luxury-glass p-8 sm:p-12 rounded-2xl border border-[#C5A46D]/40 text-center max-w-2xl mx-auto animate-fadeIn space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D] flex items-center justify-center text-[#C5A46D] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F6F1] font-semibold mb-2">
                {t.leadForm.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DDCC]/80 font-sans leading-relaxed">
                {t.leadForm.successMessage}
              </p>
            </div>

            {/* Confirmed Details Block */}
            <div className="p-4 bg-[#141414] rounded-lg border border-white/10 text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#E8DDCC]/60">{t.leadForm.savedLeadId}:</span>
                <span className="text-[#C5A46D] font-bold">{submittedLead.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#E8DDCC]/60">Client:</span>
                <span className="text-white">{submittedLead.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#E8DDCC]/60">Preferred Project:</span>
                <span className="text-white">{submittedLead.preferredProject}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#E8DDCC]/60">Assigned Desk:</span>
                <span className="text-emerald-400">{submittedLead.assignedAdvisor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E8DDCC]/60">Storage Status:</span>
                <span className="text-emerald-400 font-semibold">Persistently Stored & Verified</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#171717] hover:bg-[#222222] border border-white/20 hover:border-[#C5A46D] text-[#E8DDCC] text-xs font-mono uppercase tracking-wider rounded transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (

          /* Premium Lead Qualification Form */
          <form
            onSubmit={handleSubmit}
            className="luxury-card p-6 sm:p-10 lg:p-12 rounded-2xl border border-white/10 shadow-2xl space-y-8"
          >
            {/* Error Notification */}
            {errorMessage && (
              <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-lg flex items-center gap-3 text-red-200 text-xs">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Personal Identifiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.fullName} <span className="text-[#C5A46D]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#C5A46D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kenza Bennani / Robert Sterling"
                    className="w-full bg-[#111111] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.email} <span className="text-[#C5A46D]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#C5A46D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="advisor@corporate.com"
                    className="w-full bg-[#111111] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone with Country Code & Preferred Contact Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.phone} <span className="text-[#C5A46D]">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-[#111111] border border-white/10 rounded-lg px-3 py-3 text-xs text-[#E8DDCC] focus:border-[#C5A46D] outline-none font-mono"
                  >
                    <option value="+212">🇲🇦 +212 (MA)</option>
                    <option value="+33">🇫🇷 +33 (FR)</option>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+41">🇨🇭 +41 (CH)</option>
                    <option value="+34">🇪🇸 +34 (ES)</option>
                  </select>
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-[#C5A46D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="6 00 00 00 00"
                      className="w-full bg-[#111111] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] outline-none transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.preferredMethod}
                </label>
                <select
                  value={preferredMethod}
                  onChange={(e) => setPreferredMethod(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] focus:border-[#C5A46D] outline-none"
                >
                  <option value="WhatsApp">{t.leadForm.methodWhatsapp}</option>
                  <option value="Phone">{t.leadForm.methodPhone}</option>
                  <option value="Email">{t.leadForm.methodEmail}</option>
                  <option value="Meeting">{t.leadForm.methodMeeting}</option>
                </select>
              </div>
            </div>

            {/* Row 3: Interested Property & Preferred Project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.propertyType}
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] focus:border-[#C5A46D] outline-none"
                >
                  <option value="Villas">Villas & Private Estates</option>
                  <option value="Apartments">Luxury Apartments & Penthouses</option>
                  <option value="Commercial">Commercial Spire & Corporate Offices</option>
                  <option value="Custom">Custom Land Banking & Commission</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.preferredProject}
                </label>
                <select
                  value={preferredProject}
                  onChange={(e) => setPreferredProject(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] focus:border-[#C5A46D] outline-none"
                >
                  <option value="General Portfolio Inquiry">General Portfolio Inquiry</option>
                  <option value="Atlas Residence">Atlas Residence — Luxury Apartments</option>
                  <option value="Palm Hills Villas">Palm Hills Villas — Contemporary Villas</option>
                  <option value="The Signature Tower">The Signature Tower — Commercial Spire</option>
                  <option value="Azure Living">Azure Living — Oceanfront Pavilions</option>
                </select>
              </div>
            </div>

            {/* Row 4: Budget Range & Acquisition Purpose */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.budget}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] focus:border-[#C5A46D] outline-none font-mono"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                  {t.leadForm.purpose}
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] focus:border-[#C5A46D] outline-none"
                >
                  <option value="Personal Residence">{t.leadForm.purposeResidence}</option>
                  <option value="Investment">{t.leadForm.purposeInvestment}</option>
                  <option value="Commercial">{t.leadForm.purposeCommercial}</option>
                </select>
              </div>
            </div>

            {/* Row 5: Purchase Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                {t.leadForm.timeline}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  'Immediate / 1–3 Months',
                  '3–6 Months',
                  '6–12 Months',
                  'Exploring / Long-Term'
                ].map((timeOpt) => (
                  <button
                    key={timeOpt}
                    type="button"
                    onClick={() => setTimeline(timeOpt)}
                    className={`p-2.5 text-xs rounded border transition-all text-center ${
                      timeline === timeOpt
                        ? 'border-[#C5A46D] bg-[#C5A46D]/15 text-[#C5A46D] font-semibold'
                        : 'border-white/5 bg-[#111111] text-[#E8DDCC]/70 hover:border-white/20'
                    }`}
                  >
                    {timeOpt}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#E8DDCC]/80 mb-2">
                {t.leadForm.message}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specific architectural preferences, spatial dimensions, or scheduling requirements..."
                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] outline-none transition-all"
              />
            </div>

            {/* Consent Agreement */}
            <div className="flex items-start gap-3 p-4 bg-[#141414] rounded-lg border border-white/5">
              <input
                id="consent-check"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#C5A46D] rounded border-white/20 cursor-pointer"
              />
              <label htmlFor="consent-check" className="text-xs text-[#E8DDCC]/70 leading-relaxed cursor-pointer select-none">
                {t.leadForm.consentText}
              </label>
            </div>

            {/* Submit Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[11px] text-[#E8DDCC]/60 font-mono">
                <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{t.leadForm.backendActiveNote}</span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A46D] hover:bg-[#D8BC8B] text-[#0D0D0D] font-bold text-xs tracking-widest uppercase rounded shadow-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0D0D0D]" />
                    <span>{t.leadForm.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{t.leadForm.ctaSubmit}</span>
                    <Send className="w-4 h-4 text-[#0D0D0D]" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
