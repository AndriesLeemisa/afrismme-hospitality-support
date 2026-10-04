import { AssessmentQuestion } from '@/types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'venue_type',
    title: 'What type of hospitality venue do you operate?',
    subtitle: 'This calibrates the engineering, acoustic, and aesthetic standards required for your clientele.',
    category: 'Venue Profile',
    options: [
      {
        label: 'Fine Dining / Chef’s Table',
        description: 'High-ticket dinner services where acoustic intimacy and pristine furniture finishes are paramount.',
        recommendedPillars: ['enhance', 'restore'],
      },
      {
        label: 'Upscale Bistro & Cocktail Lounge',
        description: 'High volume, vibrant evening crowd, requiring durable banquettes and terrace maximization.',
        recommendedPillars: ['attract', 'enhance', 'grow'],
      },
      {
        label: 'Boutique Hotel Restaurant & Veranda',
        description: 'Multi-service all-day dining with outdoor patio exposure, cold-chain dependency, and compliance scrutiny.',
        recommendedPillars: ['maintain', 'protect', 'attract'],
      },
      {
        label: 'High-Volume Eatery / Multi-Site Group',
        description: 'Fast turn-times, relentless kitchen equipment strain, needing zero-downtime preventative fleet support.',
        recommendedPillars: ['maintain', 'grow', 'restore'],
      },
    ],
  },
  {
    id: 'primary_friction',
    title: 'What is currently your greatest operational or guest friction point?',
    subtitle: 'Identify the physical or mechanical challenge affecting your operation the most.',
    category: 'Facility Diagnosis',
    options: [
      {
        label: 'Noise & Dining Room Cacophony',
        description: 'Guests struggle to converse comfortably due to hard reflective surfaces, polished concrete, or marble reverberation.',
        recommendedPillars: ['enhance'],
      },
      {
        label: 'Outdoor Weather Forfeiture',
        description: 'Wind, rain, or heat leaves patio/terrace seats empty during prime dining windows.',
        recommendedPillars: ['attract'],
      },
      {
        label: 'Worn Furniture & Scuffed Millwork',
        description: 'High-traffic tables, banquettes, or bar counters look tired, but you cannot afford closing during normal trading hours.',
        recommendedPillars: ['restore'],
      },
      {
        label: 'Kitchen Equipment Breakdowns & Maintenance Chaos',
        description: 'Extraction hoods, walk-in fridges, or plumbing fails during busy services with slow contractor response.',
        recommendedPillars: ['maintain', 'protect'],
      },
    ],
  },
  {
    id: 'turnaround_sensitivity',
    title: 'What is your required operational schedule for interventions?',
    subtitle: 'AfriSMME specializes in dark-hours overnight execution so you never lose daytime trading.',
    category: 'Deployment Protocol',
    options: [
      {
        label: 'Zero Downtime (Strict Dark Hours Only)',
        description: 'All work must happen between 23:00 and 07:00 with complete cleanup before morning service.',
        recommendedPillars: ['restore', 'maintain'],
      },
      {
        label: 'Phased Zonal Upgrades',
        description: 'Can cordon off one section or patio while keeping the main dining room 100% active.',
        recommendedPillars: ['enhance', 'attract'],
      },
      {
        label: 'Scheduled Mid-Week Maintenance Window',
        description: 'Coordinated execution during low-volume days for comprehensive mechanical overhauls.',
        recommendedPillars: ['grow', 'protect'],
      },
    ],
  },
];
