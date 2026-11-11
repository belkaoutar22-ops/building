import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, DollarSign, Database, ChevronDown } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  currentCurrency: Currency;
  onSelectCurrency: (currency: Currency) => void;
  onOpenInquiries: () => void;
  leadsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  currentCurrency,
  onSelectCurrency,
  onOpenInquiries,
  leadsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currDropdownOpen, setCurrDropdownOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.architecture, href: '#architecture' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.lifestyle, href: '#lifestyle' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Identity / Architectural Logo */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A46D]"
            aria-label="ATLAS SIGNATURE Home"
          >
            {/* Geometric architectural monogram "AS" */}
            <div className="relative w-10 h-10 border border-[#C5A46D]/60 flex items-center justify-center bg-[#171717] group-hover:border-[#C5A46D] transition-colors">
              <span className="font-serif text-[#C5A46D] font-bold text-base tracking-widest">
                AS
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C5A46D]/80" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.18em] text-[#F8F6F1] font-semibold leading-tight group-hover:text-[#C5A46D] transition-colors">
                ATLAS SIGNATURE
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#E8DDCC]/60 uppercase font-sans font-medium mt-0.5">
                Real Estate Development
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-[#E8DDCC]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C5A46D] transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls: Currency, Language, Inquiries Lead Counter, and CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setCurrDropdownOpen(!currDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#E8DDCC]/80 hover:text-[#C5A46D] border border-white/10 hover:border-[#C5A46D]/40 bg-[#171717]/80 rounded transition-colors"
                title="Select Currency"
              >
                <DollarSign className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span className="font-mono text-[11px] font-semibold">{currentCurrency}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {currDropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-[#171717] border border-[#262626] rounded shadow-xl py-1 z-50">
                  {(['MAD', 'EUR', 'USD'] as Currency[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onSelectCurrency(curr);
                        setCurrDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors flex items-center justify-between ${
                        currentCurrency === curr
                          ? 'text-[#C5A46D] bg-[#262626]'
                          : 'text-[#E8DDCC]/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{curr}</span>
                      {curr === 'MAD' && <span className="text-[10px] text-stone-500">DH</span>}
                      {curr === 'EUR' && <span className="text-[10px] text-stone-500">€</span>}
                      {curr === 'USD' && <span className="text-[10px] text-stone-500">$</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setCurrDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#E8DDCC]/80 hover:text-[#C5A46D] border border-white/10 hover:border-[#C5A46D]/40 bg-[#171717]/80 rounded transition-colors"
                title="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span className="font-medium text-[11px]">{currentLang}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-[#171717] border border-[#262626] rounded shadow-xl py-1 z-50">
                  {[
                    { code: 'EN', label: 'English' },
                    { code: 'FR', label: 'Français' },
                    { code: 'AR', label: 'العربية' }
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onSelectLang(l.code as Language);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between ${
                        currentLang === l.code
                          ? 'text-[#C5A46D] bg-[#262626] font-semibold'
                          : 'text-[#E8DDCC]/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-[10px] font-mono opacity-50">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Inquiries Dashboard Button (shows real saved leads) */}
            <button
              onClick={onOpenInquiries}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E8DDCC]/80 hover:text-[#C5A46D] border border-white/10 hover:border-[#C5A46D]/40 bg-[#171717]/80 rounded transition-colors"
              title="View Registered Client Leads & Backend Storage"
            >
              <Database className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="hidden lg:inline">{t.nav.inquiriesBadge}</span>
              {leadsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#C5A46D] text-[#0D0D0D] font-mono text-[10px] font-bold rounded">
                  {leadsCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#projects"
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0D0D0D] bg-[#C5A46D] hover:bg-[#D8BC8B] transition-colors rounded shadow-sm whitespace-nowrap"
            >
              {t.nav.exploreProjects}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenInquiries}
              className="p-2 text-[#E8DDCC] hover:text-[#C5A46D] border border-white/10 bg-[#171717] rounded"
              title="View Leads"
            >
              <Database className="w-4 h-4 text-[#C5A46D]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8DDCC] hover:text-white border border-white/10 bg-[#171717] rounded focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A46D]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0D0D]/98 border-b border-[#262626] px-4 pt-4 pb-6 mt-3 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-[#E8DDCC]/90 hover:text-[#C5A46D] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                {(['EN', 'FR', 'AR'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      onSelectLang(l);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2.5 py-1 text-xs rounded ${
                      currentLang === l
                        ? 'bg-[#C5A46D] text-[#0D0D0D] font-bold'
                        : 'bg-[#171717] text-[#E8DDCC]/70'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                {(['MAD', 'EUR', 'USD'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      onSelectCurrency(c);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-xs font-mono rounded ${
                      currentCurrency === c
                        ? 'bg-[#C5A46D] text-[#0D0D0D] font-bold'
                        : 'bg-[#171717] text-[#E8DDCC]/70'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 text-xs font-bold tracking-widest uppercase bg-[#C5A46D] text-[#0D0D0D] rounded"
              >
                {t.hero.ctaConsultation}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
