export type Language = 'EN' | 'FR' | 'AR';
export type Currency = 'MAD' | 'EUR' | 'USD';

export type PropertyType = 'All' | 'Villas' | 'Apartments' | 'Commercial' | 'Under Development';

export interface Project {
  id: string;
  name: string;
  codeName: string;
  location: string;
  category: 'Villas' | 'Apartments' | 'Commercial';
  isUnderDevelopment: boolean;
  surfaceArea: string;
  priceFrom: {
    MAD: number;
    EUR: number;
    USD: number;
  };
  deliveryDate: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  galleryImages: string[];
  keyFeatures: string[];
  architecturalStyle: string;
  paymentPlan: {
    reservation: number;
    foundation: number;
    structure: number;
    handover: number;
  };
  availableUnits: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface ConsultationLead {
  id: string;
  createdAt: string;
  status: string;
  fullName: string;
  phone: string;
  email: string;
  preferredContactMethod: string;
  propertyType: string;
  preferredProject: string;
  budget: string;
  purpose: string;
  timeline: string;
  message?: string;
  consent: boolean;
  assignedAdvisor: string;
}

export interface ContactMessage {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
