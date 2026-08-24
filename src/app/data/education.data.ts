export interface EducationItem {
  period: string;
  title: { fr: string; en: string };
  place: string;
}

export const EDUCATION: EducationItem[] = [
  {
    period: '2015 — 2018',
    title: { fr: "Cycle d'ingénieur", en: 'Engineering degree' },
    place: 'Télécom Saint-Étienne',
  },
  {
    period: '2013 — 2015',
    title: { fr: 'Classe préparatoire MPSI', en: 'MPSI preparatory classes' },
    place: 'Casablanca',
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'PSD1', issuer: 'Professional Scrum Developer' },
  { name: 'OWASP API Security', issuer: 'OWASP' },
];

export interface LanguageItem {
  name: { fr: string; en: string };
  level: { fr: string; en: string };
}

export const LANGUAGES: LanguageItem[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Bilingue', en: 'Bilingual' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant', en: 'Fluent' } },
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Langue maternelle', en: 'Native' } },
];
