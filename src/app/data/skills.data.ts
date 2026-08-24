export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export const SKILLS: SkillItem[] = [
  { name: 'Java / JEE / Spring', level: 92 },
  { name: 'Angular', level: 88 },
  { name: 'SQL', level: 90 },
  { name: 'Kubernetes / Docker', level: 78 },
  { name: 'JavaScript / VueJs', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Cloud (AWS · IBM)', level: 70 },
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
