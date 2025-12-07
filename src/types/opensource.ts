export interface OpenSourceContribution {
  id: string;
  title: string;
  description: string;
  type: "github" | "npm" | "article" | "tutorial" | "blog";
  url: string;
  image?: string;
  tags: string[];
  stars?: number;
  downloads?: number;
  date: string;
  featured?: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    downloads?: number;
    issues?: number;
  };
}
