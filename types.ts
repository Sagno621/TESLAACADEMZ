
export interface NewsItem {
  title: string;
  date: string;
  category: 'Comptabilité' | 'Informatique' | 'Finance' | 'Audit';
  summary: string;
  image: string;
}

export interface Course {
  title: string;
  duration: string;
  category: 'Informatique de gestion' | 'Bureautique' | 'Réseau informatique' | 'Logiciel comptable et financier';
  level: 'Débutant' | 'Avancée' | 'Performance' | 'Maîtrise';
  image: string;
  description: string;
  price?: string;
}

export interface Software {
  name: string;
  category: string;
  iconName: string;
  description: string;
  link: string;
}

export interface Tutorial {
  title: string;
  description: string;
  image: string;
  pdfAvailable: boolean;
}

export interface Document {
  title: string;
  description: string;
  type: string;
  size: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Added Testimonial interface to support the Testimonials component
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
