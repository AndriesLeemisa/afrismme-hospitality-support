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
  metric: {
    value: string;
    label: string;
  };
  ctaLabel: string;
  route: string;
}

export interface CaseStudyData {
  id: string;
  clientName: string;
  venueType: string;
  location: string;
  challenge: string;
  intervention: string;
  results: string[];
  turnaroundTime: string;
  image: string;
  pillarsInvolved: ServicePillarId[];
}

export interface HotspotData {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
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
    score: number;
    recommendedPillars: ServicePillarId[];
  }[];
}
