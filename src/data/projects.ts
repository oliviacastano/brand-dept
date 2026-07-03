import bergmannImage from "../assets/referenz-bergmann.png";

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

export const projects: Project[] = [
  {
    slug: "bergmann-partner",
    title: "Bergmann & Partner",
    subtitle: "Rechtsanwaltskanzlei — München",
    category: "Website · Texte",
    year: "2024",
    description:
      "Neue Website für eine Kanzlei aus München. Klare Struktur, seriöse Gestaltung und direkter Kontaktweg für Anfragen.",
    intro:
      "Bergmann & Partner brauchte einen digitalen Auftritt, der fachliche Autorität vermittelt, Mandantinnen und Mandanten schnell orientiert und die Kanzlei auch online so präzise wirken lässt wie in der persönlichen Beratung.",
    challenge:
      "Die bisherige Website war inhaltlich gewachsen, aber nicht klar geführt. Leistungsbereiche, Ansprechpartner und Kontaktwege waren schwer zu erfassen, wodurch qualifizierte Anfragen oft erst nach mehreren Klicks entstanden.",
    solution:
      "NIORA entwickelte eine reduzierte Informationsarchitektur, eine ruhige visuelle Sprache und pointierte Texte für die wichtigsten Rechtsgebiete. Die neue Seite führt Besucher strukturiert von der ersten Orientierung bis zur Kontaktaufnahme.",
    result:
      "Der neue Auftritt wirkt seriös, modern und vertrauensbildend. Anfragen lassen sich schneller einordnen, die Kanzlei präsentiert ihre Spezialisierung klarer und das Team hat eine robuste Basis für weitere Inhalte.",
    industry: "Rechtsberatung",
    services: ["Webdesign", "Textkonzept", "Struktur", "Umsetzung"],
    duration: "5 Wochen",
    clientType: "Etablierte Kanzlei",
    technologies: ["Astro", "Responsive CSS", "SEO-Grundlagen", "Performance Setup"],
    processSteps: [
      {
        title: "Analyse",
        text: "Bestehende Inhalte, Zielgruppen und Kontaktwege wurden geordnet und priorisiert.",
      },
      {
        title: "Struktur",
        text: "Die Leistungsbereiche erhielten eine klare Navigation und eine nachvollziehbare Seitenlogik.",
      },
      {
        title: "Design",
        text: "Ein ruhiges Layout, klare Typografie und dezente Farbkontraste schaffen Vertrauen.",
      },
      {
        title: "Launch",
        text: "Die finale Website wurde responsiv umgesetzt, getestet und sauber veröffentlicht.",
      },
    ],
    quote: {
      text: "Die neue Website bringt unsere Kanzlei auf den Punkt: klar, hochwertig und ohne unnötige Ablenkung.",
      author: "Dr. Matthias Bergmann",
      role: "Partner, Bergmann & Partner",
    },
    tags: ["Website", "Texte"],
    theme: "dark",
    image: bergmannImage,
    imageAlt: "Website von Bergmann & Partner",
  },
  {
    slug: "atelier-wolff",
    title: "Atelier Wolff",
    subtitle: "Innenarchitektur — Berlin",
    category: "Website · Logo",
    year: "2024",
    description:
      "Ruhiger Online-Auftritt für ein Innenarchitektur-Studio mit Fokus auf Atmosphäre, Klarheit und hochwertigen Eindruck.",
    intro:
      "Atelier Wolff steht für stille Räume, feine Materialien und präzise Gestaltung. Die Website sollte diese Haltung digital übersetzen und Projektanfragen von privaten Bauherrschaften sowie Architekturbüros gezielt unterstützen.",
    challenge:
      "Das Studio hatte starke Referenzen, aber keinen Webauftritt, der die kuratierte Arbeitsweise sichtbar machte. Bildmaterial, Leistungsbeschreibung und Markenwirkung mussten zu einem ruhigen, hochwertigen Erlebnis zusammenfinden.",
    solution:
      "Es entstand ein reduziertes digitales Portfolio mit großzügigen Bildflächen, klaren Projekttexten und einem neuen Logo-System. Die Seitenarchitektur stellt Atmosphäre und Orientierung gleichermaßen in den Mittelpunkt.",
    result:
      "Atelier Wolff kann Projekte jetzt selbstbewusst präsentieren und Anfragen besser qualifizieren. Der Auftritt wirkt editorial, warm und professionell, ohne die Arbeiten zu überlagern.",
    industry: "Innenarchitektur",
    services: ["Webdesign", "Logo", "Portfolio-Struktur", "Art Direction"],
    duration: "6 Wochen",
    clientType: "Studio",
    technologies: ["Astro", "Bildoptimierung", "Responsive CSS", "Designsystem"],
    processSteps: [
      {
        title: "Positionierung",
        text: "Ton, Bildwelt und Zielgruppen wurden zu einer klaren digitalen Haltung verdichtet.",
      },
      {
        title: "Logo-System",
        text: "Ein reduziertes Zeichen und flexible Typografie schaffen Wiedererkennung ohne Lautstärke.",
      },
      {
        title: "Portfolio",
        text: "Projektseiten und Übersichten wurden für ruhiges Scannen und starke Bildwirkung gestaltet.",
      },
      {
        title: "Feinschliff",
        text: "Abstände, Bildformate und mobile Ansichten wurden bis zur finalen Präzision abgestimmt.",
      },
    ],
    quote: {
      text: "NIORA hat verstanden, dass unsere Arbeit Raum braucht. Die Website fühlt sich ruhig, präzise und sehr nach uns an.",
      author: "Clara Wolff",
      role: "Gründerin, Atelier Wolff",
    },
    tags: ["Website", "Logo"],
    theme: "light",
    image: bergmannImage,
    imageAlt: "Website von Atelier Wolff",
  },
  {
    slug: "sonnleitner-consulting",
    title: "Sonnleitner Consulting",
    subtitle: "Unternehmensberatung — Wien",
    category: "Website · Branding",
    year: "2025",
    description:
      "Professioneller Webauftritt für eine Beratung mit klarer Struktur, moderner Gestaltung und vertrauensvoller Wirkung.",
    intro:
      "Sonnleitner Consulting begleitet mittelständische Unternehmen bei Strategie, Organisation und Wachstum. Der neue Auftritt sollte Expertise sichtbar machen, komplexe Leistungen ordnen und Vertrauen bei Entscheiderinnen und Entscheidern aufbauen.",
    challenge:
      "Die Beratung hatte ein breites Leistungsspektrum, das digital zu allgemein wirkte. Es fehlten eine klare Botschaft, wiedererkennbare Markenbausteine und ein Weg, um Erstgespräche gezielt vorzubereiten.",
    solution:
      "NIORA entwickelte eine markante, aber zurückhaltende Gestaltung mit klaren Leistungsclustern, präzisen Nutzenargumenten und einer stringenten Kontaktführung. Branding und Website wurden gemeinsam gedacht.",
    result:
      "Der neue Auftritt positioniert Sonnleitner Consulting als fokussierten Partner für strategische Transformation. Die Inhalte sind leichter erfassbar, wirken hochwertiger und führen schneller zum passenden Gespräch.",
    industry: "Unternehmensberatung",
    services: ["Branding", "Webdesign", "Content-Struktur", "Umsetzung"],
    duration: "7 Wochen",
    clientType: "Beratung",
    technologies: ["Astro", "Modulares CSS", "SEO-Grundlagen", "Analytics Vorbereitung"],
    processSteps: [
      {
        title: "Markenkern",
        text: "Angebot, Zielgruppen und Differenzierung wurden in eine klare kommunikative Richtung gebracht.",
      },
      {
        title: "Informationsdesign",
        text: "Leistungen und Themen wurden so strukturiert, dass Entscheider schnell Relevanz erkennen.",
      },
      {
        title: "Interface",
        text: "Die visuelle Sprache verbindet analytische Klarheit mit einer warmen, persönlichen Wirkung.",
      },
      {
        title: "Übergabe",
        text: "Nach Tests, Optimierung und Launch erhielt das Team eine flexible Basis für neue Inhalte.",
      },
    ],
    quote: {
      text: "Der neue Auftritt macht unser Angebot endlich greifbar und gibt Mandanten schon vor dem ersten Termin Orientierung.",
      author: "Eva Sonnleitner",
      role: "Managing Partner, Sonnleitner Consulting",
    },
    tags: ["Website", "Branding"],
    theme: "purple",
    image: bergmannImage,
    imageAlt: "Website von Sonnleitner Consulting",
  },
];
