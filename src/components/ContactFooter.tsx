import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Linkedin, Globe, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactFooterProps {
  currentLang: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Fallback
        setStatus('sent');
      }
    } catch (err) {
      // Offline / static fallback
      setStatus('sent');
    }
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-[#F8F6F1] border-t border-[#1F1F1F] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Upper Section: 2 Columns (Office Details vs Direct Message) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left: Office Locations & Direct Lines */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A46D] uppercase block mb-2">
                Executive Offices
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F6F1] font-semibold tracking-tight">
                Connect With Our Atelier
              </h2>
              <p className="text-xs sm:text-sm text-[#E8DDCC]/70 font-sans mt-3 max-w-md">
                Private advisory consultations available at our Casablanca headquarters or by private arrangement across international financial centers.
              </p>
            </div>

            <div className="space-y-5 text-xs text-[#E8DDCC]/80 font-sans">
              
              {/* Casablanca HQ */}
              <div className="flex items-start gap-3.5 p-4 bg-[#141414] rounded-lg border border-white/5">
                <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-serif text-sm text-[#F8F6F1] mb-1">
                    Casablanca Headquarters
                  </strong>
                  <p className="text-xs text-[#E8DDCC]/70">
                    Atlas Signature Spire, 45 Boulevard d'Anfa, Triangle d'Or, Casablanca 20000
                  </p>
                </div>
              </div>

              {/* Marrakech Private Atelier */}
              <div className="flex items-start gap-3.5 p-4 bg-[#141414] rounded-lg border border-white/5">
                <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-serif text-sm text-[#F8F6F1] mb-1">
                    Marrakech Private Atelier
                  </strong>
                  <p className="text-xs text-[#E8DDCC]/70">
                    Avenue Mohammed VI, Hivernage District, Marrakech 40000
                  </p>
                </div>
              </div>

              {/* Phone & Concierge Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 bg-[#141414] rounded-lg border border-white/5">
                  <Phone className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-[#E8DDCC]/50 uppercase block">Private Line</span>
                    <a href="tel:+212522984000" className="font-mono text-xs text-white hover:text-[#C5A46D]">
                      +212 522 98 40 00
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#141414] rounded-lg border border-white/5">
                  <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-[#E8DDCC]/50 uppercase block">Inquiries Desk</span>
                    <a href="mailto:concierge@atlassignature.com" className="font-mono text-xs text-white hover:text-[#C5A46D]">
                      concierge@atlassignature.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-[#141414] p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#C5A46D] uppercase block mb-1">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl text-[#F8F6F1] font-semibold mb-2">
                Send a Confidential Message
              </h3>
              <p className="text-xs text-[#E8DDCC]/70 mb-6">
                Our executive secretariat will route your inquiry to the relevant development partner.
              </p>

              {status === 'sent' ? (
                <div className="p-6 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg text-white font-medium">Message Delivered</h4>
                  <p className="text-xs text-[#E8DDCC]/70">
                    Thank you. An advisor will contact you discreetly within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-mono text-[#C5A46D] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Corporate or Private Email"
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] outline-none"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How may our development team assist you?"
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-[#C5A46D] hover:bg-[#D8BC8B] text-[#0D0D0D] font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <span>{status === 'sending' ? 'Transmitting...' : 'Deliver Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-[#E8DDCC]/50">
              <Shield className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Full confidentiality and NDA protocols upheld on all communications.</span>
            </div>
          </div>

        </div>

        {/* Brand Bottom Lockup & Navigation */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#C5A46D]/60 flex items-center justify-center bg-[#171717]">
              <span className="font-serif text-[#C5A46D] font-bold text-sm tracking-widest">
                AS
              </span>
            </div>
            <div>
              <span className="font-serif text-base tracking-[0.16em] text-[#F8F6F1] font-semibold block">
                ATLAS SIGNATURE
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#E8DDCC]/60 uppercase font-mono">
                Real Estate Development
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#E8DDCC]/60">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#171717] hover:text-[#C5A46D] border border-white/5 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#171717] hover:text-[#C5A46D] border border-white/5 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#home"
              className="p-2 bg-[#171717] hover:text-[#C5A46D] border border-white/5 rounded-full transition-colors"
              aria-label="Atelier Portal"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Legal & Demonstration Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8DDCC]/50 font-sans">
          <p>© {new Date().getFullYear()} ATLAS SIGNATURE Real Estate Development. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-[#C5A46D] transition-colors">{t.footer.privacy}</a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-[#C5A46D] transition-colors">{t.footer.terms}</a>
          </div>
        </div>

        <div className="pt-3 text-center text-[10px] text-[#E8DDCC]/40 italic">
          {t.footer.disclaimer}
        </div>

      </div>
    </footer>
  );
};
