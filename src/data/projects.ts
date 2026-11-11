import { Project } from '../types';

export const DEMO_PROJECTS: Project[] = [
  {
    id: 'atlas-residence',
    name: 'Atlas Residence',
    codeName: 'AR-01',
    location: 'Hivernage, Marrakech / Anfa, Casablanca',
    category: 'Apartments',
    isUnderDevelopment: true,
    surfaceArea: '140 m² – 420 m²',
    priceFrom: {
      MAD: 3800000,
      EUR: 350000,
      USD: 385000
    },
    deliveryDate: 'Q4 2027',
    status: 'Under Construction (Structure 65% Complete)',
    shortDescription: 'Sculptural residential mid-rise with cantilevered private terraces, champagne aluminum louvers, and integrated vertical botanical gardens.',
    fullDescription: 'Atlas Residence introduces a bold sculptural silhouette to the cityscape. Conceived as a vertical oasis, each residence enjoys double-height glazed living spaces, extensive cantilevered teak balconies, and customized bronze sun screens that filter the daylight. Residents benefit from a private underground wellness spa, temperature-regulated rooftop infinity pool, dedicated subterranean parking, and round-the-clock white-glove concierge services.',
    mainImage: '/images/atlas-residence.jpg',
    galleryImages: [
      '/images/atlas-residence.jpg',
      '/images/luxury-interior-living.jpg',
      '/images/luxury-kitchen-suite.jpg',
      '/images/architectural-details.jpg'
    ],
    keyFeatures: [
      'Cantilevered private balconies with integrated vertical flora',
      'Double-height ceilings (3.4m clear height) & acoustic triple glazing',
      'Bookmatched Italian marble bathrooms & custom smoked oak joinery',
      'Underground private automated parking with EV high-speed chargers',
      'Exclusive rooftop lap pool and private residents-only fitness sanctuary',
      'LEED Gold targeted energy performance and smart home automation'
    ],
    architecturalStyle: 'Contemporary Biophilic Brutalism',
    paymentPlan: {
      reservation: 10,
      foundation: 20,
      structure: 20,
      handover: 50
    },
    availableUnits: [
      '2-Bedroom Garden Duplex (140 m²)',
      '3-Bedroom Signature Apartment (215 m²)',
      '4-Bedroom Sky Villa with Pool (340 m²)',
      'Palatial Penthouse with 360° Terrace (420 m²)'
    ]
  },
  {
    id: 'palm-hills-villas',
    name: 'Palm Hills Villas',
    codeName: 'PH-VILLA',
    location: 'Palmeraie Reserve, Marrakech',
    category: 'Villas',
    isUnderDevelopment: false,
    surfaceArea: '650 m² – 1,100 m²',
    priceFrom: {
      MAD: 7900000,
      EUR: 730000,
      USD: 800000
    },
    deliveryDate: 'Q2 2027',
    status: 'Limited Release (Phase II Open)',
    shortDescription: 'Monolithic ivory limestone estates featuring sunken gas fire pits, 25m private lap pools, and curated desert-modern botanical landscaping.',
    fullDescription: 'Nestled discreetly within an ancient olive and palm enclave, Palm Hills Villas harmonizes raw earth tones with pure architectural minimalism. Designed for seamless indoor-outdoor living, the main living pavilions dissolve completely into open-air travertine terraces through motorized sliding glass panels. Features include private sunken exterior lounges with fire tables, reflection channels, staff quarters, and dedicated wine cellars.',
    mainImage: '/images/palm-hills-villa.jpg',
    galleryImages: [
      '/images/palm-hills-villa.jpg',
      '/images/lifestyle-gardens-pool.jpg',
      '/images/luxury-interior-living.jpg',
      '/images/architectural-details.jpg'
    ],
    keyFeatures: [
      '25-meter private black basalt lap pool with submerged daybeds',
      'Travertine sunken outdoor lounge with integrated linear fire feature',
      'Custom Boffi designer kitchen with monolithic honed marble island',
      'Separate private guest pavilion and independent caretaker quarters',
      'Motorized 4-meter high sliding glass walls with solar insulation',
      'Solar microgrid with battery storage for off-grid resilience'
    ],
    architecturalStyle: 'Desert Modern Travertine Sanctuary',
    paymentPlan: {
      reservation: 15,
      foundation: 25,
      structure: 20,
      handover: 40
    },
    availableUnits: [
      'Villa Serenade — 4 Ensuite Bedrooms (650 m² built / 1,800 m² plot)',
      'Villa Mirage — 5 Ensuite Bedrooms (820 m² built / 2,400 m² plot)',
      'The Grand Estate — 7 Ensuite Suites (1,100 m² built / 4,200 m² plot)'
    ]
  },
  {
    id: 'signature-tower',
    name: 'The Signature Tower',
    codeName: 'ST-COMMERCIAL',
    location: 'Casablanca Finance City (CFC)',
    category: 'Commercial',
    isUnderDevelopment: true,
    surfaceArea: '320 m² – 28,000 m² GLA',
    priceFrom: {
      MAD: 12500000,
      EUR: 1150000,
      USD: 1270000
    },
    deliveryDate: 'Q1 2028',
    status: 'Foundation & Substructure Underway',
    shortDescription: 'Sculptural crystalline commercial spire with bronze mullions, stepped open-air sky gardens, and LEED Platinum corporate headquarters.',
    fullDescription: 'The Signature Tower redefines the commercial skyline as a symbol of financial stature and forward-looking architecture. Its crystalline glass facade shifts dynamically with the Atlantic sun, while stepped outdoor sky gardens provide executive teams with light-drenched breathing spaces. Outfitted with high-speed destination-dispatch elevators, fiber redundancy, private boardrooms, and helipad facilities.',
    mainImage: '/images/signature-tower.jpg',
    galleryImages: [
      '/images/signature-tower.jpg',
      '/images/executive-consultation-lounge.jpg',
      '/images/architectural-details.jpg',
      '/images/company-vision-architecture.jpg'
    ],
    keyFeatures: [
      'LEED Platinum & WELL Building Standard Gold certifications',
      'Floor-to-ceiling high performance low-E smart facade glazing',
      'Stepped executive sky terraces with panoramic ocean and skyline views',
      'Destination-dispatch touchless high-speed elevator banks',
      'Subterranean 4-level parking with VIP executive private staging',
      'Independent 24/7 backup power generation and dual fiber connectivity'
    ],
    architecturalStyle: 'Crystalline Parametric Commercial Spire',
    paymentPlan: {
      reservation: 20,
      foundation: 20,
      structure: 30,
      handover: 30
    },
    availableUnits: [
      'Executive Floor Plate (650 m²)',
      'Duplex Penthouse Headquarters (1,400 m²)',
      'Full Multi-Floor Anchor Block (4,500 m²)',
      'Commercial Street-Level Flagship Showroom (880 m²)'
    ]
  },
  {
    id: 'azure-living',
    name: 'Azure Living',
    codeName: 'AL-COASTAL',
    location: 'Taghazout Bay / Malabata Coast',
    category: 'Villas',
    isUnderDevelopment: true,
    surfaceArea: '220 m² – 580 m²',
    priceFrom: {
      MAD: 5200000,
      EUR: 480000,
      USD: 530000
    },
    deliveryDate: 'Q3 2027',
    status: 'Phase I Selling (60% Reserved)',
    shortDescription: 'Cliffside coastal luxury residences and modern pavilions with panoramic ocean horizons, white limestone colonnades, and cascading infinity pools.',
    fullDescription: 'Azure Living is an intimate coastal retreat engineered atop dramatic seaside bluffs. Designed to capture the rhythmic sound of the waves and the restorative sea breeze, these low-slung pavilions feature bleached limestone, warm teak pergola shading, and cantilevered infinity pools that visually merge with the horizon. A dedicated private beach club and oceanfront wellness club cater exclusively to residents.',
    mainImage: '/images/azure-living.jpg',
    galleryImages: [
      '/images/azure-living.jpg',
      '/images/hero-luxury-villa.jpg',
      '/images/luxury-interior-living.jpg',
      '/images/lifestyle-gardens-pool.jpg'
    ],
    keyFeatures: [
      'Frontline ocean panorama with unobstructed Atlantic sunset views',
      'Zero-edge saltwater infinity pool overlooking the coastal cliff',
      'Shaded architectural pergola dining decks with outdoor kitchens',
      'Direct private funicular access to secluded sandy cove and beach club',
      'Geothermal climate regulation and saltwater-resistant structural alloys',
      'Turnkey bespoke interior furniture curation available upon request'
    ],
    architecturalStyle: 'Mediterranean Minimalist Coastal Pavilion',
    paymentPlan: {
      reservation: 10,
      foundation: 25,
      structure: 25,
      handover: 40
    },
    availableUnits: [
      '3-Bedroom Horizon Villa (220 m²)',
      '4-Bedroom Ocean Pavilion (360 m²)',
      '5-Bedroom Cliffside Sanctuary with Private Spa (580 m²)'
    ]
  }
];
