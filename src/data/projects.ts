import type { ImageMetadata } from "astro";

export interface ProjectProcessStep {
  title: string;
  text: string;
}

export interface ProjectQuote {
  text: string;
  author: string;
  role: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  intro: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
  services: string[];
  duration: string;
  clientType: string;
  technologies: string[];
  processSteps: ProjectProcessStep[];
  quote: ProjectQuote;
  tags: string[];
  theme: string;
  image: ImageMetadata;
  imageAlt: string;
}

// Noch keine abgeschlossenen Projekte – sobald welche dazukommen, hier eintragen.
// Der "Projekte"-Navigationspunkt und die Projekte-Sektionen blenden sich automatisch
// ein, sobald dieses Array nicht mehr leer ist.
export const projects: Project[] = [];
