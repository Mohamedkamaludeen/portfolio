export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}
