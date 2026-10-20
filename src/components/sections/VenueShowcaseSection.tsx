'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

const VENUES = [
  { title: 'Restaurants & bistros', image: '/images/hero/hero-michelin-dining-room.jpg' },
  { title: 'Outdoor terraces', image: '/images/venues/venue-alfresco.jpg' },
  { title: 'Hotels & resorts', image: '/images/venues/venue-boutique-hotel.jpg' },
  { title: 'Lodges', image: '/images/venues/venue-bush-lodge.jpg' },
  { title: 'Wine estates', image: '/images/venues/venue-wine-estate.jpg' },
  { title: 'Bars & lounges', image: '/images/venues/venue-cocktail-bar.jpg' },
];

export function VenueShowcaseSection() {
  return (
    <section id="venues" className="py-20 sm:py-28 bg-ivory-100 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            theme="light"
            badge="Who We Support"
            title="Hospitality support"
            highlightedTitle="across South Africa."
            align="center"
          />
        </ScrollFloatReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 mt-6">
          {VENUES.map((venue, idx) => (
            <ScrollFloatReveal
              key={venue.title}
              direction="up"
              delay={idx * 70}
              hoverFloat
              className="rounded-sm overflow-hidden float-card-shadow"
            >
              <div className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-ivory-300">
                <Image
                  src={venue.image}
                  alt={venue.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg sm:text-xl font-semibold text-ivory-50 tracking-tight">
                  {venue.title}
                </h3>
              </div>
            </ScrollFloatReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
