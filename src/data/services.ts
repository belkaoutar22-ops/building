import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'development',
    title: 'Real Estate Development',
    subtitle: 'From Master Concept to Sovereign Delivery',
    description: 'We orchestrate end-to-end luxury developments with singular focus on architectural refinement, precision engineering, and rigorous cost discipline.',
    features: [
      'Comprehensive feasibility studies and financial modeling',
      'Site selection, zoning entitlement, and regulatory permitting',
      'General contractor management with strict European quality audits',
      'Turnkey handover with zero-defect handover protocols'
    ],
    image: '/images/company-vision-architecture.jpg'
  },
  {
    id: 'investment',
    title: 'Property Investment Consultation',
    subtitle: 'High-Yield Assets & Capital Stewardship',
    description: 'Private advisory for high-net-worth families, family offices, and institutional investors seeking prime yield and inflation-shielded capital appreciation.',
    features: [
      'Discreet off-market prime property access',
      'Tax optimization and international structure guidance',
      'Portfolio yield benchmarking and risk diversification',
      'Dedicated asset exit strategies and secondary resale support'
    ],
    image: '/images/executive-consultation-lounge.jpg'
  },
  {
    id: 'residential',
    title: 'Residential Projects',
    subtitle: 'Private Villas & Signature Penthouses',
    description: 'Bespoke residential enclaves designed as personal sanctuaries, blending generous spatial volumes with natural organic stone and timeless finishes.',
    features: [
      'Ultra-exclusive gated estates and private coastal pavilions',
      'Penthouse developments with private pools and sky lounges',
      'Custom smart-home integration and discrete security perimeters',
      'Bespoke Italian joinery and monolithic marble masonry'
    ],
    image: '/images/palm-hills-villa.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial Developments',
    subtitle: 'Landmark Corporate Towers & High-Street Retail',
    description: 'Iconic commercial spaces that reflect corporate prestige, environmental leadership (LEED Platinum), and functional efficiency for global enterprises.',
    features: [
      'Grade-A corporate spires in central business districts',
      'Column-free floor plates optimizing collaborative layout density',
      'Integrated outdoor sky terraces and executive dining facilities',
      'High-speed touchless vertical transport and advanced building BMS'
    ],
    image: '/images/signature-tower.jpg'
  },
  {
    id: 'acquisition',
    title: 'Property Acquisition Support',
    subtitle: 'Strategic Land Banking & Due Diligence',
    description: 'Navigating complex real estate transactions with institutional rigor, legal clarity, and sovereign discretion across Mediterranean and North African hubs.',
    features: [
      'Topographical, geotechnical, and hydrological site verification',
      'Title deed auditing, encumbrance checks, and boundary surveys',
      'Confidential price negotiation with off-market landholders',
      'Escrow structuring and cross-border currency conversion advisory'
    ],
    image: '/images/architectural-details.jpg'
  },
  {
    id: 'planning',
    title: 'Architectural Project Planning',
    subtitle: 'Spatial Philosophy & Master Planning',
    description: 'Translating human desire and landscape topology into timeless architectural blueprints in partnership with world-renowned design studios.',
    features: [
      'Bioclimatic orientation and passive solar shading modeling',
      'Material curation: fluted travertine, bronze, and thermal glass',
      'Landscape architecture with drought-resilient native ecosystems',
      'Photorealistic 3D visualization and physical scale maquettes'
    ],
    image: '/images/luxury-interior-living.jpg'
  }
];
