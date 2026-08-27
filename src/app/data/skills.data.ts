export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export const SKILLS: SkillItem[] = [
  { name: 'Java / JEE / Spring', level: 90 },
  { name: 'Angular', level: 85 },
  { name: 'SQL', level: 90 },
  { name: 'Kubernetes / Docker', level: 65 },
  { name: 'JavaScript / VueJs', level: 70 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Cloud', level: 70 },
  { name: 'Git', level: 92 },
];

export const TOOLS: string[] = [
  'JAVA/SpringBoot',
  'SQL',
  'JUnit / Mockito',
  'Apache Camel',
  'Kafka',
  'SonarQube',
  'ElasticSearch',
  'Jenkins',
  'GitLab CI/CD',
  'Docker / IBM Cloud',
  'Rest APIs',
  'Angular',
  'Vue 3'
];
