'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Volume2, Umbrella, Armchair, Globe, AlertTriangle, ClipboardCheck } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

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
    <section id="the-challenge" className="py-20 sm:py-28 bg-ivory-100 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Message */}
          <ScrollFloatReveal direction="up" delay={50} className="lg:col-span-5">
            <SectionHeading
              theme="light"
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
          </ScrollFloatReveal>

          {/* Pain points */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CHALLENGES.map(({ icon: Icon, title }, idx) => (
                <ScrollFloatReveal
                  key={title}
                  direction="up"
                  delay={idx * 65}
                  hoverFloat
                >
                  <div className="flex items-center gap-4 p-5 rounded-sm bg-ivory-50 border border-ivory-300 hover:border-bronze-500/60 shadow-sm float-card-shadow transition-all">
                    <div className="w-10 h-10 rounded-sm bg-charcoal-900 text-bronze-300 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-base sm:text-lg font-medium text-charcoal-950">{title}</span>
                  </div>
                </ScrollFloatReveal>
              ))}
            </div>

            <ScrollFloatReveal direction="up" delay={380}>
              <p className="mt-6 pl-4 border-l-2 border-bronze-600 font-display text-lg sm:text-xl italic text-charcoal-900">
                Call us. We assess the business, identify the gaps and coordinate the solutions.
              </p>
            </ScrollFloatReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
