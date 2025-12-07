export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl: string;
  image?: string;
  skills: string[];
  featured?: boolean;
  category: "cloud" | "development" | "design" | "management" | "security" | "education" | "other";
}
