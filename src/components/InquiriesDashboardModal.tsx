import React, { useState, useEffect } from 'react';
import { X, Database, Download, RefreshCw, Search, Phone, Mail, Clock, Calendar, CheckCircle2, User, Building } from 'lucide-react';
import { ConsultationLead } from '../types';

interface InquiriesDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: ConsultationLead[];
  onRefresh: () => void;
}

export const InquiriesDashboardModal: React.FC<InquiriesDashboardModalProps> = ({
  isOpen,
  onClose,
  leads,
  onRefresh
}) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');
  const [filterProject, setFilterProject] = useState('All');

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProject = filterProject === 'All' || lead.preferredProject === filterProject;
    return matchesSearch && matchesProject;
  });

  const exportToCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      'Lead ID',
      'Date',
      'Full Name',
      'Phone',
      'Email',
      'Contact Method',
      'Property Type',
      'Preferred Project',
      'Budget',
      'Purpose',
      'Timeline',
      'Status',
      'Assigned Advisor'
    ];

    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${l.createdAt}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.preferredContactMethod}"`,
      `"${l.propertyType}"`,
      `"${l.preferredProject}"`,
      `"${l.budget}"`,
      `"${l.purpose}"`,
      `"${l.timeline}"`,
      `"${l.status}"`,
      `"${l.assignedAdvisor}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `atlas_signature_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#141414] border border-[#C5A46D]/30 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0D0D0D] border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded border border-[#C5A46D]/30 bg-[#171717] text-[#C5A46D]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl sm:text-2xl text-[#F8F6F1] font-semibold">
                  Executive Client Inquiries & Lead Registry
                </h2>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono rounded">
                  Live Persistent Storage
                </span>
              </div>
              <p className="text-xs text-[#E8DDCC]/60 font-sans">
                Real-time lead qualification data recorded across backend and client synchronization.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="p-2 text-[#E8DDCC]/80 hover:text-white bg-[#171717] border border-white/10 rounded transition-colors"
              title="Refresh leads"
            >
              <RefreshCw className="w-4 h-4 text-[#C5A46D]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#E8DDCC]/80 hover:text-white bg-[#171717] border border-white/10 rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#C5A46D]" />
            </button>
          </div>
        </div>

        {/* Toolbar & KPI bar */}
        <div className="p-4 sm:p-6 bg-[#171717]/60 border-b border-white/5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-[#111111] border border-white/5 rounded">
              <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Total Inquiries</span>
              <span className="font-serif text-xl font-bold text-[#C5A46D]">{leads.length}</span>
            </div>
            <div className="p-3 bg-[#111111] border border-white/5 rounded">
              <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Active Desk</span>
              <span className="font-serif text-sm font-medium text-white truncate block">Concierge Prime</span>
            </div>
            <div className="p-3 bg-[#111111] border border-white/5 rounded">
              <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Sync Mode</span>
              <span className="font-serif text-sm font-medium text-emerald-400">REST API + JSON</span>
            </div>
            <div className="p-3 bg-[#111111] border border-white/5 rounded">
              <span className="text-[10px] font-mono text-[#E8DDCC]/60 uppercase block">Exportable</span>
              <button
                onClick={exportToCSV}
                disabled={leads.length === 0}
                className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-[#C5A46D] hover:underline disabled:opacity-40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV Export</span>
              </button>
            </div>
          </div>

          {/* Search & Project Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by client name, email, or reference ID..."
                className="w-full bg-[#111111] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-[#F8F6F1] placeholder-[#E8DDCC]/30 focus:border-[#C5A46D] outline-none"
              />
            </div>

            <select
              value={filterProject}
              onChange={(e) => setFilterProject(e.target.value)}
              className="bg-[#111111] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#E8DDCC] focus:border-[#C5A46D] outline-none"
            >
              <option value="All">All Inquired Projects</option>
              <option value="Atlas Residence">Atlas Residence</option>
              <option value="Palm Hills Villas">Palm Hills Villas</option>
              <option value="The Signature Tower">The Signature Tower</option>
              <option value="Azure Living">Azure Living</option>
              <option value="General Portfolio Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-[#E8DDCC]/60 border border-dashed border-white/10 rounded-lg space-y-3">
              <Database className="w-10 h-10 text-[#C5A46D]/40 mx-auto" />
              <p className="text-sm font-sans">
                {leads.length === 0
                  ? 'No consultation requests recorded yet. Submit the "Request a Consultation" form to test live persistent recording!'
                  : 'No leads match your current search criteria.'}
              </p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-5 bg-[#171717] rounded-xl border border-white/5 hover:border-[#C5A46D]/30 transition-colors space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D]/40 flex items-center justify-center font-serif text-sm font-bold text-[#C5A46D]">
                      {lead.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-[#F8F6F1] font-semibold">{lead.fullName}</h4>
                      <span className="text-[10px] font-mono text-[#E8DDCC]/50">{lead.id}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-[#222222] text-[#C5A46D] font-mono text-[10px] rounded border border-white/5">
                      {lead.budget}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 text-[10px] font-mono rounded">
                      {lead.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-[#E8DDCC]/80">
                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span className="font-mono">{lead.phone}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#E8DDCC]/80">
                    <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span className="truncate">{lead.email}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#E8DDCC]/80">
                    <Building className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span className="truncate">{lead.preferredProject}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#E8DDCC]/80">
                    <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{lead.timeline}</span>
                  </div>
                </div>

                {lead.message && (
                  <div className="p-2.5 bg-[#111111] rounded border border-white/5 text-xs text-[#E8DDCC]/70 italic">
                    "{lead.message}"
                  </div>
                )}

                <div className="flex items-center justify-between text-[10px] font-mono text-[#E8DDCC]/50 pt-2 border-t border-white/5">
                  <span>Method: {lead.preferredContactMethod} · Purpose: {lead.purpose}</span>
                  <span>Registered: {new Date(lead.createdAt).toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
