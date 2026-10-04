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
        score: 30,
        recommendedPillars: ['enhance', 'restore'],
      },
      {
        label: 'Upscale Bistro & Cocktail Lounge',
        description: 'High volume, vibrant evening crowd, requiring durable banquettes and terrace maximization.',
        score: 25,
        recommendedPillars: ['attract', 'enhance', 'grow'],
      },
      {
        label: 'Boutique Hotel Restaurant & Veranda',
        description: 'Multi-service all-day dining with outdoor patio exposure, cold-chain dependency, and compliance scrutiny.',
        score: 35,
        recommendedPillars: ['maintain', 'protect', 'attract'],
      },
      {
        label: 'High-Volume Eatery / Multi-Site Group',
        description: 'Fast turn-times, relentless kitchen equipment strain, needing zero-downtime preventative fleet support.',
        score: 40,
        recommendedPillars: ['maintain', 'grow', 'restore'],
      },
    ],
  },
  {
    id: 'primary_friction',
    title: 'What is currently your greatest operational or guest friction point?',
    subtitle: 'Identify the issue that hurts revenue, table turnover, or online guest reviews the most.',
    category: 'Vulnerability Diagnosis',
    options: [
      {
        label: 'Noise & Cacophony',
        description: 'Guests struggle to converse, complain about loud reverberation, or leave early without ordering dessert.',
        score: 25,
        recommendedPillars: ['enhance'],
      },
      {
        label: 'Outdoor Weather Forfeiture',
        description: 'Wind, rain, or heat leaves patio/terrace seats empty during prime revenue windows.',
        score: 30,
        recommendedPillars: ['attract'],
      },
      {
        label: 'Worn Furniture & Scuffed Millwork',
        description: 'High-traffic tables, banquettes, or bar counters look tired, but you cannot afford closing for renovation.',
        score: 20,
        recommendedPillars: ['restore'],
      },
      {
        label: 'Kitchen Equipment Breakdowns & Maintenance Chaos',
        description: 'Extraction hoods, walk-in fridges, or plumbing fails during busy services with slow contractor response.',
        score: 35,
        recommendedPillars: ['maintain', 'protect'],
      },
    ],
  },
  {
    id: 'turnaround_sensitivity',
    title: 'What is your tolerance for operational downtime during interventions?',
    subtitle: 'AfriSMME specializes in dark-hours overnight execution so you never lose a daytime cover.',
    category: 'Deployment Protocol',
    options: [
      {
        label: 'Zero Downtime (Strict Dark Hours Only)',
        description: 'All work must happen between 23:00 and 07:00 with complete cleanup before morning service.',
        score: 20,
        recommendedPillars: ['restore', 'maintain'],
      },
      {
        label: 'Phased Zonal Upgrades',
        description: 'Can cordon off one section or patio while keeping the main dining room 100% active.',
        score: 15,
        recommendedPillars: ['enhance', 'attract'],
      },
      {
        label: 'Fast Turnaround 24–48hr Sprint',
        description: 'Scheduled closure during Monday/Tuesday for complete transformation.',
        score: 10,
        recommendedPillars: ['grow', 'protect'],
      },
    ],
  },
];
