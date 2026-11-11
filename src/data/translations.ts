import { Language } from '../types';

export interface Translations {
  brandName: string;
  brandSubtitle: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    architecture: string;
    services: string;
    whyUs: string;
    lifestyle: string;
    contact: string;
    exploreProjects: string;
    inquiriesBadge: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    ctaExplore: string;
    ctaConsultation: string;
    statPortfolio: string;
    statPortfolioLabel: string;
    statExcellence: string;
    statExcellenceLabel: string;
    statLocations: string;
    statLocationsLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    quote: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterVillas: string;
    filterApartments: string;
    filterCommercial: string;
    filterUnderDev: string;
    viewProject: string;
    surface: string;
    startingFrom: string;
    delivery: string;
    status: string;
    disclaimer: string;
  };
  modal: {
    overview: string;
    keyFeatures: string;
    availableUnits: string;
    paymentPlanTitle: string;
    paymentPlanSubtitle: string;
    reservation: string;
    foundation: string;
    structure: string;
    handover: string;
    inquireCTA: string;
    close: string;
    calculatorNote: string;
  };
  architecture: {
    kicker: string;
    title: string;
    subtitle: string;
    tagInterior: string;
    tagFacade: string;
    tagKitchen: string;
    tagLandscape: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  whyChooseUs: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  lifestyle: {
    kicker: string;
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
  };
  leadForm: {
    kicker: string;
    title: string;
    subtitle: string;
    fullName: string;
    phone: string;
    email: string;
    preferredMethod: string;
    methodPhone: string;
    methodWhatsapp: string;
    methodEmail: string;
    methodMeeting: string;
    propertyType: string;
    preferredProject: string;
    budget: string;
    purpose: string;
    purposeResidence: string;
    purposeInvestment: string;
    purposeCommercial: string;
    timeline: string;
    message: string;
    consentText: string;
    ctaSubmit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    savedLeadId: string;
    errorTitle: string;
    backendActiveNote: string;
  };
  footer: {
    hqAddress: string;
    phone: string;
    email: string;
    hours: string;
    rights: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    brandName: "ATLAS SIGNATURE",
    brandSubtitle: "REAL ESTATE DEVELOPMENT",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      architecture: "Architecture",
      services: "Services",
      whyUs: "Philosophy",
      lifestyle: "Lifestyle",
      contact: "Contact",
      exploreProjects: "Explore Projects",
      inquiriesBadge: "Client Inquiries"
    },
    hero: {
      kicker: "Private Real Estate Development",
      headline: "Building Spaces. Creating Legacies.",
      subheadline: "Discover exceptional real estate developments designed around elegance, quality and lasting value.",
      ctaExplore: "Explore Our Projects",
      ctaConsultation: "Request a Consultation",
      statPortfolio: "4 Curated",
      statPortfolioLabel: "Signature Flagships",
      statExcellence: "LEED & BREEAM",
      statExcellenceLabel: "Sustainability Benchmarks",
      statLocations: "Prime Havens",
      statLocationsLabel: "Casablanca, Marrakech & Coast"
    },
    about: {
      kicker: "The Development Atelier",
      title: "Sculpting Enduring Architectural Landmarks",
      subtitle: "Where timeless materials meet uncompromising modern craftsmanship.",
      p1: "ATLAS SIGNATURE represents an uncompromising pursuit of architectural distinction in luxury real estate development. We create iconic environments that harmonize monolithic forms, Mediterranean natural light, and the highest standards of structural integrity.",
      p2: "Every development begins with an extensive topographical dialogue. We believe a structure must belong naturally to its terrain — incorporating indigenous stone, tactile fluted textures, expansive thermal glass, and water geometries that reflect serene private sanctuaries.",
      p3: "Our long-term approach guarantees that each residence and commercial landmark retains its sovereign investment value and aesthetic relevance for generations to come.",
      quote: "Architecture is not merely the enclosure of volume; it is the physical manifestation of enduring culture and poise.",
      pillars: {
        p1Title: "Architectural Integrity",
        p1Desc: "Custom geometric volumes crafted with international design partners to balance human comfort and visual power.",
        p2Title: "Enduring Materials",
        p2Desc: "Natural fluted travertine, bookmatched marbles, brushed bronze, and aged European hardwoods.",
        p3Title: "Environmental Harmony",
        p3Desc: "Passive solar orientation, integrated lush vertical planters, water recycling, and low-embodied carbon concrete.",
        p4Title: "Sovereign Value",
        p4Desc: "Positioned in unrepeatable prime locations that deliver generational security and asset appreciation."
      }
    },
    projects: {
      kicker: "Curated Flagships",
      title: "Featured Real Estate Developments",
      subtitle: "A showcase of contemporary villas, luxury residential complexes, and landmark commercial buildings.",
      filterAll: "All Projects",
      filterVillas: "Villas",
      filterApartments: "Apartments",
      filterCommercial: "Commercial",
      filterUnderDev: "Under Development",
      viewProject: "View Project Details",
      surface: "Surface Area",
      startingFrom: "Starting From",
      delivery: "Target Delivery",
      status: "Status",
      disclaimer: "Demonstration portfolio showcasing architectural capabilities and design standards."
    },
    modal: {
      overview: "Development Overview",
      keyFeatures: "Architectural & Lifestyle Features",
      availableUnits: "Configuration Options",
      paymentPlanTitle: "Milestone Payment Plan",
      paymentPlanSubtitle: "Structured escrow schedule aligned with verified construction milestones",
      reservation: "Reservation Deposit",
      foundation: "Foundation Completion",
      structure: "Structural Handover",
      handover: "Keys & Title Deed Transfer",
      inquireCTA: "Inquire About This Development",
      close: "Close Window",
      calculatorNote: "Payment percentages reflect typical ATLAS SIGNATURE structured schedules. Values adjust automatically based on selected currency."
    },
    architecture: {
      kicker: "Design & Craftsmanship",
      title: "Spatial Mastery & Material Elegance",
      subtitle: "Immerse in the tactile textures, double-height volumes, and light-filled sanctuaries that define our work.",
      tagInterior: "Penthouse Living & Stone Work",
      tagFacade: "Travertine & Bronze Louvers",
      tagKitchen: "Monolithic Marble & Smoked Oak",
      tagLandscape: "Reflecting Water & Sculptural Flora"
    },
    services: {
      kicker: "Comprehensive Expertise",
      title: "End-to-End Real Estate Excellence",
      subtitle: "From raw site acquisition and master planning to turnkey executive delivery and private portfolio stewardship."
    },
    whyChooseUs: {
      kicker: "Our Commitments",
      title: "Built on Uncompromising Principles",
      subtitle: "Why distinguished owners and institutional investors trust ATLAS SIGNATURE for their prime developments."
    },
    lifestyle: {
      kicker: "Curated Living",
      title: "Location, Atmosphere & Private Sanctuaries",
      subtitle: "Every residence is calibrated for discreet luxury, wellness, and effortless entertainment.",
      feature1Title: "Private Oasis Landscaping",
      feature1Desc: "Sculpted ancient olive trees, dark basalt reflecting pools, and private cabanas crafted for year-round outdoor contemplation.",
      feature2Title: "Dedicated VIP Advisory Suite",
      feature2Desc: "Personalized executive consultations overlooking panoramic skylines with bespoke confidentiality and legal support."
    },
    leadForm: {
      kicker: "Executive Consultation",
      title: "Request a Private Consultation",
      subtitle: "Discuss off-market availabilities, private villa commissions, or investment portfolio opportunities with our senior development partners.",
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      preferredMethod: "Preferred Contact Method",
      methodPhone: "Direct Phone Call",
      methodWhatsapp: "WhatsApp Concierge",
      methodEmail: "Confidential Email",
      methodMeeting: "Private Office Meeting",
      propertyType: "Interested Property Type",
      preferredProject: "Preferred Project",
      budget: "Approximate Budget",
      purpose: "Acquisition Purpose",
      purposeResidence: "Personal Residence",
      purposeInvestment: "Capital Investment / Yield",
      purposeCommercial: "Commercial / Corporate Use",
      timeline: "Expected Purchase Timeline",
      message: "Additional Inquiries or Architectural Requirements",
      consentText: "I consent to receiving confidential communication from ATLAS SIGNATURE regarding current and forthcoming real estate developments in accordance with privacy regulations.",
      ctaSubmit: "Request a Private Consultation",
      submitting: "Recording Consultation Lead...",
      successTitle: "Consultation Request Recorded",
      successMessage: "Your inquiry has been successfully transmitted and registered with our executive concierge desk. A senior development advisor will contact you discreetly within 24 hours.",
      savedLeadId: "Confirmed Reference ID",
      errorTitle: "Submission Error",
      backendActiveNote: "Real Backend Sync: Stored in persistent leads database."
    },
    footer: {
      hqAddress: "Atlas Tower, 45 Boulevard d'Anfa, Triangle d'Or, Casablanca",
      phone: "+212 522 98 40 00",
      email: "concierge@atlassignature.com",
      hours: "Monday – Saturday: 09:00 – 19:00 (Private viewings by appointment)",
      rights: "All rights reserved. ATLAS SIGNATURE Real Estate Development.",
      privacy: "Privacy Policy",
      terms: "Terms of Engagement",
      disclaimer: "Architectural renderings and demo data shown for demonstration and development presentation purposes."
    }
  },
  FR: {
    brandName: "ATLAS SIGNATURE",
    brandSubtitle: "DÉVELOPPEMENT IMMOBILIER",
    nav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      architecture: "Architecture",
      services: "Services",
      whyUs: "Philosophie",
      lifestyle: "Art de Vivre",
      contact: "Contact",
      exploreProjects: "Explorer les Projets",
      inquiriesBadge: "Demandes Clients"
    },
    hero: {
      kicker: "Promotion Immobilière Privée d'Exception",
      headline: "Bâtir des Espaces. Forger des Héritages.",
      subheadline: "Découvrez des projets immobiliers exceptionnels conçus autour de l'élégance, de la qualité et d'une valeur pérenne.",
      ctaExplore: "Découvrir Nos Projets",
      ctaConsultation: "Demander une Consultation",
      statPortfolio: "4 Projets",
      statPortfolioLabel: "Réalisations Majeures",
      statExcellence: "LEED & BREEAM",
      statExcellenceLabel: "Excellence Environnementale",
      statLocations: "Emplacements Rares",
      statLocationsLabel: "Casablanca, Marrakech & Côte"
    },
    about: {
      kicker: "L'Atelier de Conception",
      title: "Façonner des Repères Architecturaux Pérennes",
      subtitle: "L'alliance de matériaux nobles et d'une ingénierie contemporaine sans concession.",
      p1: "ATLAS SIGNATURE incarne une quête rigoureuse de distinction architecturale dans le développement immobilier de prestige. Nous concevons des environnements d'exception mêlant volumes sculpturaux, lumière naturelle et finitions d'une précision absolue.",
      p2: "Chaque projet prend racine dans un dialogue minutieux avec son environnement naturel. Nous privilégions le travertin cannelé, les marbres d'exception, les claustras en bronze et les miroirs d'eau pour créer de véritables sanctuaires privés.",
      p3: "Notre vision à long terme garantit à chaque acquéreur la transmission d'un patrimoine pérenne et la valorisation soutenue de son investissement.",
      quote: "L'architecture ne se limite pas à délimiter l'espace ; elle est l'expression physique d'une culture et d'une sérénité durables.",
      pillars: {
        p1Title: "Intégrité Architecturale",
        p1Desc: "Des volumes épurés pensés avec des signatures internationales pour conjuguer bien-être et puissance formelle.",
        p2Title: "Matériaux Nobles",
        p2Desc: "Travertin naturel, marbres rares, menuiseries d'art en chêne fumé et finitions bronze brossé.",
        p3Title: "Harmonie Environnementale",
        p3Desc: "Conception bioclimatique, toitures végétalisées, bassins de rafraîchissement et bétons bas-carbone.",
        p4Title: "Valeur Patrimoniale",
        p4Desc: "Des adresses prestigieuses et convoitées assurant sécurité et appréciation du capital."
      }
    },
    projects: {
      kicker: "Sélection Signature",
      title: "Nos Réalisations Immobilières",
      subtitle: "Une collection exclusive de villas contemporaines, résidences haut standing et édifices d'affaires.",
      filterAll: "Tous les Projets",
      filterVillas: "Villas",
      filterApartments: "Appartements",
      filterCommercial: "Tertiaire",
      filterUnderDev: "En Développement",
      viewProject: "Consulter le Projet",
      surface: "Superficie",
      startingFrom: "À Partir De",
      delivery: "Livraison Prévue",
      status: "Statut",
      disclaimer: "Portfolio de démonstration illustrant notre savoir-faire architectural et nos standards de qualité."
    },
    modal: {
      overview: "Présentation du Projet",
      keyFeatures: "Prestations & Équipements",
      availableUnits: "Typologies Disponibles",
      paymentPlanTitle: "Échéancier de Paiement",
      paymentPlanSubtitle: "Modalités indexées sur l'avancement certifié des travaux",
      reservation: "Dépôt de Réservation",
      foundation: "Achèvement Fondations",
      structure: "Hors d'Eau / Gros Œuvre",
      handover: "Remise des Clés & Titre Foncier",
      inquireCTA: "Demander le Dossier d'Information",
      close: "Fermer",
      calculatorNote: "Les pourcentages reflètent les échéanciers standards ATLAS SIGNATURE. Les montants s'adaptent selon la devise choisie."
    },
    architecture: {
      kicker: "Conception & Savoir-Faire",
      title: "Maîtrise de l'Espace & Épure des Matières",
      subtitle: "Plongez au cœur des textures tactiles, doubles hauteurs et baies lumineuses qui définissent notre signature.",
      tagInterior: "Penthouse & Marbrerie",
      tagFacade: "Travertin & Brise-Soleil Bronze",
      tagKitchen: "Îlot Monolithe & Chêne Fumé",
      tagLandscape: "Miroirs d'Eau & Végétaux Sculptés"
    },
    services: {
      kicker: "Savoir-Faire Global",
      title: "Excellence Immobilière Intégrale",
      subtitle: "De l'acquisition foncière stratégique à la livraison clé en main et la gestion patrimoniale."
    },
    whyChooseUs: {
      kicker: "Nos Engagements",
      title: "Fondé sur des Principes Inébranlables",
      subtitle: "Pourquoi les acquéreurs exigeants et investisseurs institutionnels choisissent ATLAS SIGNATURE."
    },
    lifestyle: {
      kicker: "Art de Vivre",
      title: "Localisations Rares & Sanctuaires Privés",
      subtitle: "Chaque demeure est pensée pour le bien-être, la discrétion et la sérénité au quotidien.",
      feature1Title: "Jardins & Bassins Privatifs",
      feature1Desc: "Oliviers séculaires sculptés, bassins en basalte noir et pergolas d'ombrage pour une détente en plein air toute l'année.",
      feature2Title: "Salon Privé de Conseil VIP",
      feature2Desc: "Consultations exécutives confidentielles avec vue panoramique et accompagnement juridique personnalisé."
    },
    leadForm: {
      kicker: "Consultation Privée",
      title: "Demande de Consultation Confidentielle",
      subtitle: "Échangez avec nos directeurs de développement sur nos biens hors-marché et nos opportunités d'investissement.",
      fullName: "Nom & Prénom",
      phone: "Numéro de Téléphone",
      email: "Adresse E-mail",
      preferredMethod: "Moyen de Contact Préféré",
      methodPhone: "Appel Téléphonique Direct",
      methodWhatsapp: "Concierge WhatsApp",
      methodEmail: "Courriel Confidentiel",
      methodMeeting: "Rendez-vous à Nos Bureaux",
      propertyType: "Typologie Souhaitée",
      preferredProject: "Projet Privilégié",
      budget: "Budget Approximatif",
      purpose: "Objectif d'Acquisition",
      purposeResidence: "Résidence Principale / Secondaire",
      purposeInvestment: "Investissement Locatif / Patrimonial",
      purposeCommercial: "Usage Professionnel / Siège",
      timeline: "Horizon d'Acquisition",
      message: "Précisions ou Besoins Particuliers",
      consentText: "J'accepte de recevoir des communications confidentielles d'ATLAS SIGNATURE concernant ses projets immobiliers actuels et futurs.",
      ctaSubmit: "Solliciter un Entretien Privé",
      submitting: "Enregistrement de la Demande...",
      successTitle: "Demande Enregistrée avec Succès",
      successMessage: "Votre requête a été transmise à notre direction du développement. Un conseiller dédié vous contactera en toute discrétion sous 24 heures.",
      savedLeadId: "Référence Enregistrée",
      errorTitle: "Erreur de Transmission",
      backendActiveNote: "Synchronisation Réelle : Enregistré dans la base de données sécurisée."
    },
    footer: {
      hqAddress: "Tour Atlas, 45 Boulevard d'Anfa, Triangle d'Or, Casablanca",
      phone: "+212 522 98 40 00",
      email: "concierge@atlassignature.com",
      hours: "Lundi – Samedi : 09h00 – 19h00 (Visites privées sur rendez-vous)",
      rights: "Tous droits réservés. Promotion Immobilière ATLAS SIGNATURE.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales",
      disclaimer: "Images de synthèse et données présentées à titre de démonstration architecturale."
    }
  },
  AR: {
    brandName: "أطلس سيغنتشر",
    brandSubtitle: "التطوير العقاري الفاخر",
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      projects: "المشاريع",
      architecture: "الهندسة المعمارية",
      services: "الخدمات",
      whyUs: "فلسفتنا",
      lifestyle: "أسلوب الحياة",
      contact: "اتصل بنا",
      exploreProjects: "استكشف المشاريع",
      inquiriesBadge: "طلبات العملاء"
    },
    hero: {
      kicker: "تطوير عقاري راقٍ وخاص",
      headline: "نبني المساحات. نصنع إرثاً يدوم.",
      subheadline: "اكتشف مشاريع عقارية استثنائية صُممت حول معايير الأناقة والجودة العالية والقيمة الدائمة.",
      ctaExplore: "استكشف مشاريعنا",
      ctaConsultation: "طلب استشارة خاصة",
      statPortfolio: "4 مشاريع",
      statPortfolioLabel: "صروح معمارية رائدة",
      statExcellence: "معايير بيئية",
      statExcellenceLabel: "استدامة معمارية معتمدة",
      statLocations: "مواقع استراتيجية",
      statLocationsLabel: "الدار البيضاء، مراكش والساحل"
    },
    about: {
      kicker: "أتيليه التصميم المعماري",
      title: "صياغة معالم معمارية خالدة",
      subtitle: "حيث تلتقي المواد الطبيعية النبيلة مع أعلى درجات الإتقان الهندسي الحديث.",
      p1: "تجسد أطلس سيغنتشر التزاماً مطلقاً بالتميز المعماري في مجال التطوير العقاري الفاخر. نبتكر بيئات فريدة تجمع بين الكتلة الهندسية المنحوتة وتدفق الضوء الطبيعي وأرقى معايير الجودة الإنشائية.",
      p2: "يبدأ كل مشروع بحوار عميق مع الأرض والمكان، مستلهمين من حجر الترافرتين الطبيعي والرخام النادر وسبائك البرونز العصرية، لنصنع واحات سكنية مفعمة بالهدوء والخصوصية التامة.",
      p3: "رؤيتنا بعيدة المدى تضمن لكل مالك ومستثمر الحفاظ على القيمة الرمزية والمالية للأصول العقارية عبر الأجيال.",
      quote: "الهندسة المعمارية ليست مجرد تأطير للمساحات؛ بل هي تجسيد مادي لثقافة راسخة وهدوء مستدام.",
      pillars: {
        p1Title: "الأصالة المعمارية",
        p1Desc: "كتل وأبعاد مدروسة بالتعاون مع كبار المعماريين لتوفير أقصى درجات الراحة البصرية والإنسانية.",
        p2Title: "مواد نبيلة خالدة",
        p2Desc: "حجر الترافرتين الطبيعي، ألواح الرخام الإيطالي، خشب البلوط المدخن والبرونز المصقول.",
        p3Title: "التناغم البيئي",
        p3Desc: "عمارة تراعي المناخ، أسطح خضراء مستدامة، استرجاع للمياه وخفض البصمة الكربونية.",
        p4Title: "قيمة استثمارية سيادية",
        p4Desc: "مواقع حصرية نادرة تعزز أمان رأس المال وتضمن نمواً متواصلاً للقيمة السوقية."
      }
    },
    projects: {
      kicker: "مشاريعنا المميزة",
      title: "مشاريع التطوير العقاري المختارة",
      subtitle: "مجموعة استثنائية من الفيلات العصرية، المجمعات السكنية الراقية، والأبراج التجارية الرائدة.",
      filterAll: "كافة المشاريع",
      filterVillas: "فيلات",
      filterApartments: "شقق فاخرة",
      filterCommercial: "مشاريع تجارية",
      filterUnderDev: "قيد التطوير",
      viewProject: "تفاصيل المشروع",
      surface: "المساحة الإجمالية",
      startingFrom: "الأسعار تبدأ من",
      delivery: "تاريخ التسليم المتوقع",
      status: "الحالة",
      disclaimer: "محفظة مشاريع نموذجية توضح معاييرنا الهندسية وقدراتنا في التطوير المعماري."
    },
    modal: {
      overview: "نظرة عامة على المشروع",
      keyFeatures: "المواصفات والمزايا المعمارية",
      availableUnits: "الوحدات والمساحات المتوفرة",
      paymentPlanTitle: "خطة الدفع على دفعات",
      paymentPlanSubtitle: "جدول دفعات مرتبط بمراحل البناء والتوثيق الهندسي المعتمد",
      reservation: "دفعة حجز الوحدة",
      foundation: "اكتمال مرحلة الأساسات",
      structure: "اكتمال الهيكل الخرساني",
      handover: "استلام المفاتيح ونقل الملكية",
      inquireCTA: "طلب الملف التعريفي للمشروع",
      close: "إغلاق النافذة",
      calculatorNote: "تستند النسب المئوية إلى الجداول المعتمدة لدى أطلس سيغنتشر. تتعدل القيم تلقائياً بحسب العملة المختارة."
    },
    architecture: {
      kicker: "التصميم والحرفية",
      title: "إتقان المساحات وفخامة المواد",
      subtitle: "استكشف التفاصيل الملموسة والأسقف المرتفعة ومصادر الإنارة الطبيعية التي تميز هويتنا المعمارية.",
      tagInterior: "بنتهاوس فاخر وأعمال رخامية",
      tagFacade: "ترافرتين وواجهات برونزية",
      tagKitchen: "مطابخ رخامية وخشب مدخن",
      tagLandscape: "أحواض مائية ونباتات منحوتة"
    },
    services: {
      kicker: "خبرات متكاملة",
      title: "ريادة عقارية من الفكرة حتى التسليم",
      subtitle: "من دراسة المواقع واقتناء الأراضي حتى التخطيط المعماري والتسليم المتكامل وإدارة الأصول."
    },
    whyChooseUs: {
      kicker: "التزاماتنا المهنية",
      title: "مبادئ راسخة لا تقبل المساومة",
      subtitle: "لماذا يثق كبار الملاك والمستثمرون في أطلس سيغنتشر لتطوير مشاريعهم المرموقة."
    },
    lifestyle: {
      kicker: "أسلوب حياة راقٍ",
      title: "مواقع ساحرة وملاذات سكنية خاصة",
      subtitle: "كل مسكن مصمم بعناية لتوفير أعلى مستويات الراحة والاسترخاء والخصوصية.",
      feature1Title: "حدائق استرخاء وأحواض مائية",
      feature1Desc: "أشجار زيتون معمرة منحوتة وأحواض من البازلت الأسود وأجنحة خارجية للاسترخاء طوال العام.",
      feature2Title: "صالون استشارات كبار الشخصيات",
      feature2Desc: "جلسات استشارية خاصة وسرية بإطلالات بانورامية مع فريقنا القانوني والاستثماري المتخصص."
    },
    leadForm: {
      kicker: "استشارة كبار الشخصيات",
      title: "طلب استشارة خاصة وسرية",
      subtitle: "ناقش فرص الاستثمار والوحدات الحصرية غير المعلنة ومشاريع الفيلات الخاصة مع كبار مديري التطوير.",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف مع رمز الدولة",
      email: "البريد الإلكتروني",
      preferredMethod: "وسيلة التواصل المفضلة",
      methodPhone: "اتصال هاتفي مباشر",
      methodWhatsapp: "واتساب كونسيرج",
      methodEmail: "بريد إلكتروني سري",
      methodMeeting: "اجتماع في مكاتبنا الرئيسية",
      propertyType: "نوع العقار المطلوب",
      preferredProject: "المشروع المفضل",
      budget: "الميزانية التقديرية",
      purpose: "الغرض من الشراء",
      purposeResidence: "سكن شخصي / إقامة عائلية",
      purposeInvestment: "استثمار عقاري / عائد تأجيري",
      purposeCommercial: "مقر تجاري أو مؤسسي",
      timeline: "الجدول الزمني المتوقع للشراء",
      message: "ملاحظات أو متطلبات معمارية خاصة",
      consentText: "أوافق على استلام معلومات وتواصل سري من أطلس سيغنتشر بخصوص المشاريع العقارية الحالية والمستقبلية وفق سياسة الخصوصية.",
      ctaSubmit: "طلب استشارة خاصة",
      submitting: "جارٍ تسجيل طلب الاستشارة...",
      successTitle: "تم تسجيل طلبك بنجاح",
      successMessage: "تم استلام طلبكم وتسجيله رسمياً لدى مكتب الاستشارات التنفيذية. سيتواصل معكم مستشار التطوير العقاري خلال 24 ساعة بكل سرية.",
      savedLeadId: "رقم المرجع المسجل",
      errorTitle: "خطأ في الإرسال",
      backendActiveNote: "ربط حقيقي بالخادم: تم حفظ البيانات في قاعدة البيانات المخصصة."
    },
    footer: {
      hqAddress: "برج أطلس، 45 شارع أنفا، المثلث الذهبي، الدار البيضاء",
      phone: "+212 522 98 40 00",
      email: "concierge@atlassignature.com",
      hours: "من الإثنين إلى السبت: 09:00 – 19:00 (المعاينة الخاصة بموعد مسبق)",
      rights: "جميع الحقوق محفوظة. أطلس سيغنتشر للتطوير العقاري.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      disclaimer: "الصور المعروضة والبيانات التوضيحية هي لأغراض العرض والتصميم المعماري."
    }
  }
};
