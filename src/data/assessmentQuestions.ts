import { AssessmentQuestion } from '@/types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'venue_type',
    title: 'What type of hospitality venue do you operate?',
    subtitle: 'This helps us understand your clientele, trading rhythm, and operational priorities.',
    category: 'Venue Profile',
    options: [
      {
        label: 'Fine Dining / Chef’s Table / Wine Estate',
        description: 'High guest expectations where acoustic comfort, immaculate furniture finishes, and brand presentation are paramount.',
        recommendedPillars: ['enhance', 'restore'],
      },
      {
        label: 'Upscale Bistro, Terrace & Cocktail Lounge',
        description: 'Vibrant daytime and evening volume requiring durable banquettes, all-weather patio shade, and fast turnover.',
        recommendedPillars: ['attract', 'enhance', 'grow'],
      },
      {
        label: 'Boutique Hotel, Safari Lodge & Resort Dining',
        description: 'Multi-service all-day hospitality with extensive outdoor terraces, timber decks, and regulatory compliance scrutiny.',
        recommendedPillars: ['maintain', 'protect', 'attract'],
      },
      {
        label: 'High-Volume Restaurant or Multi-Site Group',
        description: 'Continuous kitchen strain, heavy furniture traffic, needing coordinated preventative care and digital systems.',
        recommendedPillars: ['maintain', 'grow', 'restore'],
      },
    ],
  },
  {
    id: 'physical_presentation',
    title: 'Which physical areas of your venue need attention?',
    subtitle: 'Your physical environment directly influences guest dwell time, spend per head, and repeat visits.',
    category: 'Physical Environment',
    options: [
      {
        label: 'Worn Tables, Banquettes & High-Traffic Furniture',
        description: 'Tables show scratches or heat marks and leather is worn, requiring phased batch restoration without full venue closure.',
        recommendedPillars: ['restore', 'enhance'],
      },
      {
        label: 'Underutilised Outdoor Seating & Terrace Shade',
        description: 'Wind, rain, or harsh sun leaves patio seating empty, or umbrellas and outdoor furniture look tired.',
        recommendedPillars: ['attract'],
      },
      {
        label: 'Excessive Dining Room Noise & Echo',
        description: 'Guests struggle to converse comfortably due to hard reflective surfaces, polished concrete, or glass reverberation.',
        recommendedPillars: ['enhance'],
      },
      {
        label: 'General Refresh & Signage (Without Closing)',
        description: 'Curbside presence, exterior signage, paintwork, and lighting need an elevated aesthetic refresh.',
        recommendedPillars: ['attract', 'restore'],
      },
    ],
  },
  {
    id: 'digital_technology',
    title: 'How is your digital, marketing, and guest technology performing?',
    subtitle: 'AfriSMME integrates physical hospitality support with digital growth powered by Scinovalities.',
    category: 'Digital & Technology',
    options: [
      {
        label: 'Website, Menus & Online Booking Need Updating',
        description: 'Current website is outdated, menus are clunky or non-interactive, and online booking conversion is lower than expected.',
        recommendedPillars: ['grow'],
      },
      {
        label: 'Google Reviews, Local SEO & Marketing Need a Lift',
        description: 'Struggling with declining online reviews, low visibility in local search, or inconsistent guest communication.',
        recommendedPillars: ['grow'],
      },
      {
        label: 'Need Smart Automation & AI Guest Communication',
        description: 'Want to automate booking confirmations, guest inquiries, VIP follow-ups, and customer feedback workflows.',
        recommendedPillars: ['grow', 'enhance'],
      },
      {
        label: 'Digital Is Stable — Main Priority Is Physical & Operational',
        description: 'Our digital footprint is established; we need to solve physical venue bottlenecks and ongoing facilities care.',
        recommendedPillars: ['restore', 'maintain'],
      },
    ],
  },
  {
    id: 'operations_compliance',
    title: 'What are your biggest operational or maintenance friction points?',
    subtitle: 'From equipment reliability to health inspections, identify what keeps your team stressed.',
    category: 'Operations & Compliance',
    options: [
      {
        label: 'Reactive Maintenance Chaos & Equipment Breakdowns',
        description: 'Extraction hoods, walk-in fridges, or plumbing fail during busy services with slow contractor response.',
        recommendedPillars: ['maintain'],
      },
      {
        label: 'Fragmented Suppliers & No Single Accountability',
        description: 'Tired of calling ten different suppliers and contractors who pass blame when something goes wrong.',
        recommendedPillars: ['maintain', 'protect'],
      },
      {
        label: 'OHS, Fire Safety & Food Health Compliance Readiness',
        description: 'Need to ensure kitchen fire suppression, health inspection certificates, and hygiene registers are in order.',
        recommendedPillars: ['protect'],
      },
      {
        label: 'Staff Presentation & Service Operational Standards',
        description: 'Need tailored, durable staff apparel and standardized operational service presentation.',
        recommendedPillars: ['protect', 'enhance'],
      },
    ],
  },
  {
    id: 'turnaround_schedule',
    title: 'What is your preferred operational timing for support?',
    subtitle: 'We coordinate around your daytime schedule, quiet periods, and planned maintenance windows.',
    category: 'Execution Cadence',
    options: [
      {
        label: 'Scheduled Daytime Maintenance Windows & Quiet Trading Days',
        description: 'Coordinate physical servicing and installations during standard daytime maintenance slots or quieter morning/early-week windows.',
        recommendedPillars: ['restore', 'maintain'],
      },
      {
        label: 'Phased Zonal Upgrades & Off-Site Workshop Batches',
        description: 'Cordon off one section or rotate furniture in batches to our Kew workshop while keeping the main dining floor active.',
        recommendedPillars: ['attract', 'enhance', 'restore'],
      },
      {
        label: 'Comprehensive Venue Assessment & Roadmap First',
        description: 'Conduct a thorough daytime assessment across physical, digital, and operational areas before scheduling interventions.',
        recommendedPillars: ['grow', 'protect', 'enhance'],
      },
    ],
  },
];
