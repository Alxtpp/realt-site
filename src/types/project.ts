export interface Project {
  slug: string;
  name: string;
  location: string;
  address?: string;
  description: {
    fr: string;
    en: string;
  };
  type: "Résidentiel" | "Commercial" | "Mixte";
  surfaceSBP?: number;
  nombreLogements: number;
  maitreOuvrage: string;
  architecte: string;
  developpement: string;
  livraison?: string;
  hyperlink?: string;
  heroImage: string;
  galleryImages: string[];
  status: "completed" | "in-progress" | "upcoming";
  featured: boolean;
  order: number;
}
