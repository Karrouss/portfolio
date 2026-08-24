export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  achievements: string[];
  stack: string[];
}

export const EXPERIENCE_FR: ExperienceItem[] = [
  {
    company: 'Estreem',
    role: 'Concepteur / Développeur',
    period: 'Janvier 2025 — Aujourd\'hui',
    location: 'Freelance',
    context:
      "Gestion des autorisations de paiement (Input/Output) basée sur les dictionnaires du protocole CBAE, en liaison avec les réseaux bancaires STET / Visa / Mastercard.",
    achievements: [
      'Mise en place de la connexion TCP via Netty sur le réseau STET',
      'Développement full backend des fonctionnalités du domaine monétique',
      'Création de micro-services REST (passage du monolithique aux microservices)',
      'Intégration continue GitLab CI / Jenkins',
      'Gestion des charts Helm pour le déploiement Cloud',
      'Mise en place des tests unitaires avec JUnit',
    ],
    stack: ['Spring Boot', 'Java 21', 'Apache Camel', 'Netty', 'TCP', 'GitLab CI', 'Jenkins', 'Docker', 'SonarQube', 'ElasticSearch'],
  },
  {
    company: 'Carrefour',
    role: 'Concepteur / Développeur',
    period: 'Mars 2024 — Décembre 2024',
    location: 'Freelance',
    achievements: [
      "Développement d'un écran de représentation cartographique du parcours d'un camion en livraison (Leaflet / OpenStreetMap)",
      "Gestion des droits d'utilisateurs (accès et affichage)",
      "Écran de régularisation pour une tournée déjà validée",
      'Écran de gestion des retours (client & magasin)',
      "Adaptation / refonte de plusieurs écrans, streaming via Kafka",
      'Tests unitaires, intégration et acceptance (JUnit / Mockito / Jest)',
    ],
    stack: ['Spring Boot', 'Spring Data', 'Java 17', 'Kafka', 'Angular 16', 'RxJs', 'NgRx', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Carrefour',
    role: 'Concepteur / Développeur',
    period: 'Juillet 2023 — Mars 2024',
    location: 'Freelance',
    achievements: [
      'Écran de suivi et gestion des commandes (préparation / livraison / mise en rayon)',
      'Participation à la synthèse de cadencement des livraisons',
      'Intégration d\'un système de gestion des rôles',
      'Correction des anomalies et veille technologique',
      'Tests automatisés en TDD avec JUnit / Mockito',
    ],
    stack: ['Spring Boot', 'Java 17', 'Angular 16', 'RxJs', 'NgRx', 'NgxS', 'PostgreSQL', 'GitLab', 'Jenkins'],
  },
  {
    company: 'Groupama',
    role: 'Concepteur / Développeur',
    period: 'Août 2022 — Juillet 2023',
    location: 'Freelance',
    achievements: [
      'Développement full stack en TDD, contexte ScrumBan',
      'Mise en place de micro-services (API REST)',
      "Refonte d'une application de gestion des sinistres en Angular",
      'Participation au développement du GBH (Groupama Box Habitat)',
      'Conception technique et corrections de bugs en production',
    ],
    stack: ['Spring Boot', 'Spring Data', 'Angular 19', 'PostgreSQL', 'GitLab', 'Jenkins', 'SonarQube', 'Dynatrace'],
  },
  {
    company: 'Sogeti — SNCF : Repère',
    role: 'Concepteur / Développeur',
    period: 'Septembre 2020 — Juillet 2022',
    location: 'Mission client',
    achievements: [
      'Participation aux cérémonies SCRUM, chiffrages et conception technique',
      'Développement des fonctionnalités du référentiel via MDM',
      'Front-end : IHM en HTML / CSS / Angular 8',
      'Back-end : création d\'API REST en Java / Spring Boot',
    ],
    stack: ['MDM (IBM)', 'Script WPCS', 'Spring Boot v8', 'Angular 8', 'PostgreSQL', 'GitLab'],
  },
  {
    company: 'Sogeti — SNCF : IC@RE',
    role: 'Concepteur / Développeur',
    period: 'Septembre 2018 — Avril 2020',
    location: 'Mission client',
    achievements: [
      'Participation aux chiffrages et à la conception technique',
      "Optimisation des performances (requêtes SQL, méthodes Java)",
      'Synchronisation Web / Tablette',
      'Génération de PDF via XSL-FO / XSD',
      'Montée en compétence et correction d\'anomalies (MCO)',
    ],
    stack: ['Spring Boot', 'XSL-FO', 'XSD', 'AngularJS', 'PostgreSQL', 'SQLite', 'GitLab'],
  },
  {
    company: 'Sogeti — Capgemini (PFE)',
    role: 'Concepteur / Développeur — Projet de fin d\'études',
    period: 'Mars 2018 — Août 2018',
    location: 'Stage',
    achievements: [
      'Recueil des besoins et rédaction des SFD / STD',
      'Préparation de la base de données et de l\'environnement de dev',
      "Conception technique et développement des fonctionnalités",
      'Participation aux tests fonctionnels (pair testing)',
    ],
    stack: ['Spring Boot', 'JSP', 'Servlet', 'jQuery', 'PostgreSQL', 'JBoss (WildFly)'],
  },
];

export const EXPERIENCE_EN: ExperienceItem[] = [
  {
    company: 'Estreem',
    role: 'Designer / Developer',
    period: 'January 2025 — Present',
    location: 'Freelance',
    context:
      'Payment authorization management (Input/Output) based on the CBAE protocol dictionaries, connected to the STET / Visa / Mastercard banking networks.',
    achievements: [
      'Set up the TCP connection via Netty on the STET network',
      'Full-backend development of card-payment domain features',
      'Built REST microservices (migration from monolith to microservices)',
      'Continuous integration with GitLab CI / Jenkins',
      'Managed Helm charts for Cloud deployment',
      'Set up unit tests with JUnit',
    ],
    stack: ['Spring Boot', 'Java 21', 'Apache Camel', 'Netty', 'TCP', 'GitLab CI', 'Jenkins', 'Docker', 'SonarQube', 'ElasticSearch'],
  },
  {
    company: 'Carrefour',
    role: 'Designer / Developer',
    period: 'March 2024 — December 2024',
    location: 'Freelance',
    achievements: [
      'Built a map screen tracking a delivery truck route (Leaflet / OpenStreetMap)',
      'User rights management (access and display)',
      'Built a regularization screen for an already validated round',
      'Built a returns management screen (customer & store)',
      'Adapted / redesigned several screens, streaming via Kafka',
      'Unit, integration and acceptance tests (JUnit / Mockito / Jest)',
    ],
    stack: ['Spring Boot', 'Spring Data', 'Java 17', 'Kafka', 'Angular 16', 'RxJs', 'NgRx', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Carrefour',
    role: 'Designer / Developer',
    period: 'July 2023 — March 2024',
    location: 'Freelance',
    achievements: [
      'Order tracking and management screen (prep / delivery / shelving)',
      'Contributed to the delivery scheduling synthesis',
      'Integrated a role management system',
      'Bug fixes and technology watch',
      'TDD automated testing with JUnit / Mockito',
    ],
    stack: ['Spring Boot', 'Java 17', 'Angular 16', 'RxJs', 'NgRx', 'NgxS', 'PostgreSQL', 'GitLab', 'Jenkins'],
  },
  {
    company: 'Groupama',
    role: 'Designer / Developer',
    period: 'August 2022 — July 2023',
    location: 'Freelance',
    achievements: [
      'Full stack development in TDD, ScrumBan context',
      'Built REST API microservices',
      'Redesigned a claims management application in Angular',
      'Contributed to the GBH (Groupama Box Habitat) product',
      'Technical design and production bug fixes',
    ],
    stack: ['Spring Boot', 'Spring Data', 'Angular 19', 'PostgreSQL', 'GitLab', 'Jenkins', 'SonarQube', 'Dynatrace'],
  },
  {
    company: 'Sogeti — SNCF: Repère',
    role: 'Designer / Developer',
    period: 'September 2020 — July 2022',
    location: 'Client mission',
    achievements: [
      'Took part in SCRUM ceremonies, estimations and technical design',
      'Developed reference-data features through MDM',
      'Frontend: UI in HTML / CSS / Angular 8',
      'Backend: built REST APIs in Java / Spring Boot',
    ],
    stack: ['MDM (IBM)', 'WPCS Script', 'Spring Boot v8', 'Angular 8', 'PostgreSQL', 'GitLab'],
  },
  {
    company: 'Sogeti — SNCF: IC@RE',
    role: 'Designer / Developer',
    period: 'September 2018 — April 2020',
    location: 'Client mission',
    achievements: [
      'Took part in estimations and technical design',
      'Performance optimization (SQL queries, Java methods)',
      'Web / tablet synchronization',
      'PDF generation via XSL-FO / XSD',
      'Skill transfer and maintenance bug fixes (MCO)',
    ],
    stack: ['Spring Boot', 'XSL-FO', 'XSD', 'AngularJS', 'PostgreSQL', 'SQLite', 'GitLab'],
  },
  {
    company: 'Sogeti — Capgemini (Graduation project)',
    role: 'Designer / Developer — Final year project',
    period: 'March 2018 — August 2018',
    location: 'Internship',
    achievements: [
      'Requirements gathering and functional/technical specs',
      'Prepared the database and dev environment',
      'Technical design and feature development',
      'Took part in functional testing (pair testing)',
    ],
    stack: ['Spring Boot', 'JSP', 'Servlet', 'jQuery', 'PostgreSQL', 'JBoss (WildFly)'],
  },
];
