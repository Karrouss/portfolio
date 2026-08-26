import {
  siAngular,
  siCss,
  siDocker,
  siHtml5,
  siJavascript,
  siOpenjdk,
  siPostgresql,
  siSpringboot,
  siTypescript,
  siVuedotjs,
} from 'simple-icons';

export interface OrbitItem {
  name: string;
  hex?: string;
  path?: string;
  /** Short initials used when no official brand logo is available. */
  monogram?: string;
}

export const LANGUAGES: OrbitItem[] = [
  // Java/Angular official brand marks are near-black; swapped for their
  // classic recognizable colors so the glow reads against a dark card.
  { name: 'Java', hex: 'ED8B00', path: siOpenjdk.path },
  { name: 'Spring', hex: siSpringboot.hex, path: siSpringboot.path },
  { name: 'HTML5', hex: siHtml5.hex, path: siHtml5.path },
  { name: 'CSS3', hex: siCss.hex, path: siCss.path },
  { name: 'TypeScript', hex: siTypescript.hex, path: siTypescript.path },
  { name: 'JavaScript', hex: siJavascript.hex, path: siJavascript.path },
  { name: 'Angular', hex: 'DD0031', path: siAngular.path },
  { name: 'Apache Camel', monogram: 'AC' },
  { name: 'SQL', hex: siPostgresql.hex, path: siPostgresql.path },
  { name: 'Vue 3', hex: siVuedotjs.hex, path: siVuedotjs.path },
  { name: 'Docker', hex: siDocker.hex, path: siDocker.path },
  { name: 'IBM Cloud', monogram: 'IBM' },
];
