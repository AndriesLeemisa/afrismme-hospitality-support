'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExternalLink, ArrowRight, Umbrella, Tent, Hotel, UtensilsCrossed, Wine, WineOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface VenueShowcaseSectionProps {
  onRequestQuote?: (pillarId: string) => void;
}

const VENUE_SECTORS = [
  {
    id: 'outdoor-terraces',
    title: 'Outdoor Terraces & Shaded Dining',
    category: 'Pillar 01 — ATTRACT',
    pillarId: 'attract',
    image: '/images/venues/venue-alfresco.jpg',
    imageAlt: 'Bustling luxury restaurant outdoor terrace with canvas umbrellas and alfresco dining tables',
    description: 'Heavy-duty commercial cantilever systems, windbreaks, and contract woven seating engineered for all-weather high-density covers.',
    specialistPartners: [
      { name: 'Afrishades', url: 'https://afrishades.co.za/' },
      { name: 'Cane Africa', url: 'https://www.caneafrica.co.za/' },
    ],
    metric: '+28% Outdoor Cover Yield',
  },
  {
    id: 'safari-lodges',
    title: 'Luxury Safari Lodges & Bush Retreats',
    category: 'Pillar 03 & 04 — RESTORE & MAINTAIN',
    pillarId: 'restore',
    image: '/images/venues/venue-bush-lodge.jpg',
    imageAlt: 'Luxury African safari lodge deck overlooking panoramic savanna bush landscape',
    description: 'Specialist balau and teak deck refurbishment, organic weather-resistant timber treatments, and silent dark-hours servicing.',
    specialistPartners: [
      { name: 'The Wood Doctor', url: 'https://wooddoctor.co.za/' },
    ],
    metric: 'Zero Guest Disturbance',
  },
  {
    id: 'boutique-hotels',
    title: 'Boutique Hotels & Resort Pavilions',
    category: 'Pillar 01 & 02 — ATTRACT & ENHANCE',
    pillarId: 'attract',
    image: '/images/venues/venue-boutique-hotel.jpg',
    imageAlt: 'Modern luxury boutique hotel courtyard and pool deck with loungers and architectural shading',
    description: 'Poolside cabanas, weather-resistant woven cane loungers, facade lighting, and turnkey common-area facility maintenance.',
    specialistPartners: [
      { name: 'Cane Africa', url: 'https://www.caneafrica.co.za/' },
      { name: 'Afrishades', url: 'https://afrishades.co.za/' },
    ],
    metric: '100% Salt-Mist Shield',
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining Rooms & Intimate Bistros',
    category: 'Pillar 02 & 03 — ENHANCE & RESTORE',
    pillarId: 'enhance',
    image: '/images/hero/hero-michelin-dining-room.jpg',
    imageAlt: 'Upscale fine dining restaurant interior with ambient warm lighting and ergonomic upholstered banquettes',
    description: 'Concealed acoustic wall/ceiling baffles that eliminate cacophony, paired with ergonomic velvet and leather banquettes.',
    specialistPartners: [
      { name: 'The Wood Doctor', url: 'https://wooddoctor.co.za/' },
    ],
    metric: '1.8 hrs Longer Table Dwell',
  },
  {
    id: 'wine-estates',
    title: 'Wine Estates & Historic Courtyards',
    category: 'Pillar 01 & 03 — ATTRACT & RESTORE',
    pillarId: 'restore',
    image: '/images/venues/venue-wine-estate.jpg',
    imageAlt: 'Sunlit heritage wine estate patio surrounded by lush vineyards and shaded dining pergolas',
    description: 'Overnight non-toxic restoration of heritage oak tables and wine-tasting counters, plus bespoke pergola terrace shade architecture.',
    specialistPartners: [
      { name: 'The Wood Doctor', url: 'https://wooddoctor.co.za/' },
      { name: 'Afrishades', url: 'https://afrishades.co.za/' },
    ],
    metric: 'Food-Safe Zero-VOC Cure',
  },
  {
    id: 'cocktail-lounges',
    title: 'High-Volume Bars & Cocktail Lounges',
    category: 'Pillar 03 & 04 — RESTORE & MAINTAIN',
    pillarId: 'maintain',
    image: '/images/venues/venue-cocktail-bar.jpg',
    imageAlt: 'Sophisticated cocktail lounge bar with illuminated brass shelves and warm atmospheric lighting',
    description: 'Solid brass and marble bar counter polishing, antimicrobial sealing, and overnight kitchen extraction hood degreasing.',
    specialistPartners: [
      { name: 'The Wood Doctor', url: 'https://wooddoctor.co.za/' },
    ],
    metric: 'Sub-60min Rapid Fleet SLA',
  },
];

export function VenueShowcaseSection({ onRequestQuote }: VenueShowcaseSectionProps) {
  return (
    <section id="venues" className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Specialized Hospitality Sectors"
          title="Engineered for Africa’s Most Prestigious"
          highlightedTitle="Dining & Lodging Venues."
          description="From ocean-facing Cape terraces to secluded Kruger safari decks and Sandton fine-dining bistros—our turnkey divisions deliver immaculate craftsmanship with zero service disruption."
        />

        {/* 6-Sector Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VENUE_SECTORS.map((venue) => (
            <article
              key={venue.id}
              className="group relative bg-charcoal-950/80 border border-charcoal-800 rounded-sm overflow-hidden flex flex-col justify-between hover:border-bronze-500/50 hover:shadow-elevated-dark transition-all duration-500"
            >
              {/* Photo Pane */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-950">
                <Image
                  src={venue.image}
                  alt={venue.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                {/* Metric Badge */}
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-charcoal-950/90 backdrop-blur-sm border border-bronze-500/30 text-[10px] font-mono text-bronze-300 font-semibold">
                  {venue.metric}
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded bg-charcoal-950/90 border border-charcoal-700 text-[10px] font-mono text-ivory-300">
                  {venue.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors mb-2 leading-snug">
                    {venue.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-normal mb-5">
                    {venue.description}
                  </p>
                </div>

                {/* Specialist Division Links & Action */}
                <div className="pt-4 border-t border-charcoal-800/80 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase text-bronze-400 font-semibold mr-1">
                      Divisions:
                    </span>
                    {venue.specialistPartners.map((partner) => (
                      <a
                        key={partner.url}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-700 text-[11px] text-ivory-200 hover:text-bronze-300 hover:border-bronze-400 transition-colors"
                      >
                        <span>{partner.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-bronze-400" />
                      </a>
                    ))}
                  </div>

                  {onRequestQuote ? (
                    <button
                      type="button"
                      onClick={() => onRequestQuote(venue.pillarId)}
                      className="w-full text-xs font-mono uppercase tracking-wider font-semibold py-2.5 px-3 rounded-sm border border-bronze-500/40 text-bronze-300 hover:bg-bronze-500 hover:text-charcoal-950 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request Sector Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Button
                      href="#contact"
                      variant="outline"
                      size="sm"
                      withArrow
                      className="w-full justify-between"
                    >
                      Request Sector Proposal
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
