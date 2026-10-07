'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

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
    <section id="venues" className="py-20 sm:py-28 bg-charcoal-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who We Support"
          title="Hospitality support"
          highlightedTitle="across South Africa."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {VENUES.map((venue) => (
            <div key={venue.title} className="group relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg sm:text-xl font-semibold text-ivory-50">
                {venue.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
