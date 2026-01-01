
import { Course, Software, Tutorial, Document, FAQItem, Testimonial } from './types';

export const COURSES: Course[] = [
  // 1. Informatique de gestion en général
  {
    title: "Fondamentaux de l'Informatique de Gestion",
    duration: "45 heures",
    category: "Informatique de gestion",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=640&auto=format&fit=crop",
    description: "Comprendre l'écosystème numérique de l'entreprise moderne.",
    price: "Attestation"
  },

  // 2. La bureautique
  {
    title: "Bureautique Fondamentale",
    duration: "30 heures",
    category: "Bureautique",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=640&auto=format&fit=crop",
    description: "Prise en main des outils essentiels : Word et Excel base.",
    price: "Attestation"
  },
  {
    title: "Bureautique Avancée",
    duration: "40 heures",
    category: "Bureautique",
    level: "Avancée",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&auto=format&fit=crop",
    description: "Fonctions complexes et mise en page professionnelle.",
    price: "Attestation"
  },
  {
    title: "Bureautique Performance",
    duration: "40 heures",
    category: "Bureautique",
    level: "Performance",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=640&auto=format&fit=crop",
    description: "Optimisation du temps et automatisation de documents.",
    price: "Attestation"
  },
  {
    title: "Bureautique Maîtrise",
    duration: "50 heures",
    category: "Bureautique",
    level: "Maîtrise",
    image: "https://images.unsplash.com/photo-1504868584819-f8eec0421d50?q=80&w=640&auto=format&fit=crop",
    description: "Expertise totale, Macros VBA et intégration de données.",
    price: "Attestation Or"
  },

  // 3. Le réseau informatique
  {
    title: "Réseaux Débutant",
    duration: "35 heures",
    category: "Réseau informatique",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=640&auto=format&fit=crop",
    description: "Comprendre les bases du hardware et des protocoles IP.",
    price: "Attestation"
  },
  {
    title: "Réseaux Avancé",
    duration: "45 heures",
    category: "Réseau informatique",
    level: "Avancée",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=640&auto=format&fit=crop",
    description: "Configuration de routeurs et switchs intelligents.",
    price: "Attestation"
  },
  {
    title: "Réseaux Performance",
    duration: "50 heures",
    category: "Réseau informatique",
    level: "Performance",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=640&auto=format&fit=crop",
    description: "Sécurité périmétrale et optimisation des flux.",
    price: "Attestation"
  },
  {
    title: "Réseaux Maîtrise",
    duration: "60 heures",
    category: "Réseau informatique",
    level: "Maîtrise",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=640&auto=format&fit=crop",
    description: "Administration système complexe et cybersécurité avancée.",
    price: "Attestation Or"
  },

  // 4. Logiciel comptable et financier
  {
    title: "Gestion Comptable Débutant",
    duration: "40 heures",
    category: "Logiciel comptable et financier",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=640&auto=format&fit=crop",
    description: "Initiation aux logiciels de saisie et principes de base.",
    price: "Attestation"
  },
  {
    title: "Logiciel Compta Avancé",
    duration: "50 heures",
    category: "Logiciel comptable et financier",
    level: "Avancée",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=640&auto=format&fit=crop",
    description: "Maîtrise des écritures complexes et lettrage automatisé.",
    price: "Attestation"
  },
  {
    title: "Compta & Paie Performance",
    duration: "55 heures",
    category: "Logiciel comptable et financier",
    level: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=640&auto=format&fit=crop",
    description: "États financiers, bilans et gestion de la paie.",
    price: "Attestation"
  },
  {
    title: "Expertise Logicielle Maîtrise",
    duration: "70 heures",
    category: "Logiciel comptable et financier",
    level: "Maîtrise",
    image: "https://images.unsplash.com/photo-1543286386-713bdd54867e?q=80&w=640&auto=format&fit=crop",
    description: "Audit informatisé, consolidation et reporting stratégique.",
    price: "Attestation Or"
  }
];

export const SOFTWARES: Software[] = [
  { name: "Microsoft Excel", category: "Data & Finance", iconName: "Table", description: "Le standard mondial pour l'analyse de données financières et la modélisation.", link: "#" },
  { name: "Sage 100 Cloud", category: "Comptabilité", iconName: "Database", description: "Gestion comptable, commerciale et paie pour les entreprises structurées.", link: "#" },
  { name: "Dolibarr ERP", category: "Gestion Intégrée", iconName: "Package", description: "Solution flexible pour piloter l'ensemble de l'activité commerciale et RH.", link: "#" },
  { name: "Power BI", category: "Business Intelligence", iconName: "BarChart", description: "Visualisation stratégique et tableaux de bord décisionnels en temps réel.", link: "#" },
  { name: "Odoo", category: "ERP Moderne", iconName: "Cpu", description: "L'écosystème modulaire le plus dynamique pour la transformation digitale.", link: "#" },
  { name: "MS Project", category: "Gestion de Projet", iconName: "Calendar", description: "Planification complexe et suivi des ressources pour les grands comptes.", link: "#" }
];

export const TUTORIALS: Tutorial[] = [
  {
    title: "Maîtrise Excel en 10 min",
    description: "Apprenez les fonctions de recherche V et X rapidement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&auto=format&fit=crop",
    pdfAvailable: true
  },
  {
    title: "Clôture Comptable Sage",
    description: "Les étapes clés pour ne jamais rater sa clôture d'exercice.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=640&auto=format&fit=crop",
    pdfAvailable: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Les formations donnent-elles droit à une attestation ?",
    answer: "Oui, chaque parcours complet donne lieu à une attestation de réussite TESLATECHN reconnue par nos entreprises partenaires."
  },
  {
    question: "Puis-je suivre les cours à distance ?",
    answer: "Absolument. Nous proposons une plateforme hybride avec des sessions live et du contenu en replay."
  },
  {
    question: "Quels sont les prérequis ?",
    answer: "Ils varient selon le module, mais une connaissance de base de l'outil informatique est généralement suffisante."
  }
];

export const DOCUMENTS: Document[] = [
  { title: "Guide Fiscal 2025", description: "Les nouvelles régulations décryptées.", type: "PDF", size: "3.2 MB", link: "#" },
  { title: "Modèle Audit Excel", description: "Check-list automatisée pour audit.", type: "XLSX", size: "1.5 MB", link: "#" }
];

// Added TESTIMONIALS array to fix missing export error in components/Testimonials.tsx
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mamadou Bah",
    role: "Expert Comptable",
    content: "La formation Sage 100 m'a permis d'automatiser 70% de mes tâches quotidiennes. Un gain de temps inestimable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Fatoumata Keita",
    role: "Analyste Financière",
    content: "L'approche pratique de TESLATECHN est unique. On n'apprend pas juste des concepts, on apprend à maîtriser des outils.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Abdoulaye Sylla",
    role: "Admin Réseau",
    content: "Grâce au cursus Réseaux Maîtrise, j'ai pu décrocher un poste dans une multinationale. L'attestation Or a fait la différence.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];
