export type ServicePillarId = 
  | 'attract'
  | 'enhance'
  | 'restore'
  | 'maintain'
  | 'protect'
  | 'grow';

export interface ServiceDetail {
  title: string;
  description: string;
  deliverables: string[];
}

export interface PillarPartnerLink {
  name: string;
  url: string;
  label?: string;
  description?: string;
}

export interface ServicePillarData {
  id: ServicePillarId;
  pillarNumber: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  features: string[];
  detailedServices: ServiceDetail[];
  technicalStandard: {
    title: string;
    description: string;
  };
  ctaLabel: string;
  route: string;
  externalLinks?: PillarPartnerLink[];
}

export interface HotspotData {
  id: string;
  title: string;
  category: string;
  description: string;
  technicalSpec: string;
  xPercent: number; // 0 - 100% position on desktop layout
  yPercent: number;
}

export interface AssessmentQuestion {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  options: {
    label: string;
    description: string;
    recommendedPillars: ServicePillarId[];
  }[];
}

export interface ProcessStepData {
  step: string;
  title: string;
  tagline?: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface EcosystemDivisionData {
  id: string;
  number: string;
  name: string;
  role: string;
  category: string;
  website?: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

