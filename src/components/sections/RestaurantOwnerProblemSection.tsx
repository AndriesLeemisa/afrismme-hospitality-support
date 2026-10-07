'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Volume2, Umbrella, Armchair, Globe, AlertTriangle, ClipboardCheck } from 'lucide-react';

interface RestaurantOwnerProblemSectionProps {
  onOpenAudit?: () => void;
}

const CHALLENGES = [
  { icon: Volume2, title: 'Guests complain about noise' },
  { icon: Umbrella, title: 'Outdoor seating sits empty' },
  { icon: Armchair, title: 'Furniture looks tired' },
  { icon: Globe, title: 'Website and menus are outdated' },
  { icon: AlertTriangle, title: 'Equipment keeps breaking' },
  { icon: ClipboardCheck, title: 'Compliance feels uncertain' },
];

export function RestaurantOwnerProblemSection({ onOpenAudit }: RestaurantOwnerProblemSectionProps) {
  return (
    <section id="the-challenge" className="py-20 sm:py-28 bg-charcoal-900 border-t border-charcoal-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Message */}
          <div className="lg:col-span-5">
            <SectionHeading
              badge="The Challenge"
              title="Is your venue performing"
              highlightedTitle="at its best?"
              description="Most owners don't need ten suppliers. They need one partner who can see the whole picture."
              className="mb-8 sm:mb-8"
            />
            <Button
              variant="primary"
              size="md"
              withArrow
              {...(onOpenAudit ? { onClick: onOpenAudit } : { href: '#audit-tool' })}
            >
              Assess Your Venue
            </Button>
          </div>

          {/* Pain points */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CHALLENGES.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-5 rounded-sm bg-charcoal-950/70 border border-charcoal-800 hover:border-bronze-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-base sm:text-lg text-ivory-50">{title}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 pl-4 border-l-2 border-bronze-500 font-display text-lg sm:text-xl italic text-ivory-200">
              Call us. We assess the business, identify the gaps and coordinate the solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
