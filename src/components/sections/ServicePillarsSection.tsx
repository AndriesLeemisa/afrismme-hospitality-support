'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICE_PILLARS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { Button } from '@/components/ui/Button';
import { ServicePillarData } from '@/types';
import { Check, ShieldCheck, ArrowRight, Clock, Award, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicePillarsSectionProps {
  onRequestQuote?: (pillarId: string) => void;
}

export function ServicePillarsSection({ onRequestQuote }: ServicePillarsSectionProps) {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICE_PILLARS[0].id);

  const activePillar = SERVICE_PILLARS.find((p) => p.id === activeTabId) || SERVICE_PILLARS[0];

  return (
    <section id="pillars" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative ambient subtle lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-charcoal-700 to-transparent" />
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-charcoal-700 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Turnkey Engineering Architecture"
          title="The Six Support Pillars of"
          highlightedTitle="Hospitality Excellence."
          description="Most hospitality operators juggle separate signmakers, acoustic consultants, woodworkers, refrigeration contractors, and compliance auditors. AfriSMME integrates the entire physical and technical lifecycle under a single contract with zero daytime disruption."
        />

        {/* Interactive Master Pillar Deep Dive (Tabbed Showcase) */}
        <div className="mb-20 bg-charcoal-900/90 border border-charcoal-700/80 rounded-sm p-6 sm:p-10 backdrop-blur-xl shadow-elevated-dark">
          {/* Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-charcoal-800 scrollbar-none">
            {SERVICE_PILLARS.map((pillar) => {
              const isActive = pillar.id === activeTabId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTabId(pillar.id)}
                  className={cn(
                    'flex items-center gap-2.5 px-4 py-3 rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-200 shrink-0 select-none',
                    isActive
                      ? 'bg-bronze-500 text-charcoal-950 font-bold shadow-subtle-dark'
                      : 'text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800/60'
                  )}
                >
                  <span className={cn('text-[11px]', isActive ? 'text-charcoal-950' : 'text-bronze-400')}>
                    {pillar.pillarNumber}
                  </span>
                  <span>{pillar.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Featured Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal-700 group">
              <Image
                src={activePillar.image}
                alt={activePillar.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-bronze-300 font-semibold bg-charcoal-950/80 px-2.5 py-1 rounded border border-bronze-500/30">
                  PILLAR {activePillar.pillarNumber} SHOWCASE
                </span>
                <p className="mt-2 text-sm text-ivory-200 max-w-md line-clamp-2">
                  {activePillar.imageAlt}
                </p>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-cinematic text-bronze-400 font-mono font-semibold">
                    Strategic Focus
                  </span>
                  <span className="w-8 h-[1px] bg-bronze-500/40" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ivory-50 mb-4 leading-tight">
                  {activePillar.tagline}
                </h3>

                <p className="text-sm sm:text-base text-ivory-300/90 leading-relaxed mb-6">
                  {activePillar.description}
                </p>

                {/* Sub-services breakdown */}
                <div className="space-y-4 mb-8">
                  {activePillar.detailedServices.map((service, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-sm bg-charcoal-950/60 border border-charcoal-800">
                      <h4 className="text-sm font-semibold text-ivory-100 flex items-center gap-2">
                        <Check className="w-4 h-4 text-bronze-400" />
                        {service.title}
                      </h4>
                      <p className="text-xs text-ivory-300/80 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        {service.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="text-[10px] font-mono text-bronze-300 bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-700">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom metric & consultation trigger */}
              <div className="pt-4 border-t border-charcoal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-display text-2xl font-bold text-bronze-300">
                    {activePillar.metric.value}
                  </span>
                  <p className="text-xs text-ivory-300">
                    {activePillar.metric.label}
                  </p>
                </div>

                {onRequestQuote ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onRequestQuote(activePillar.id)}
                    withArrow
                  >
                    {activePillar.ctaLabel}
                  </Button>
                ) : (
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    withArrow
                  >
                    {activePillar.ctaLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Pillars Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_PILLARS.map((pillar, idx) => (
            <ServiceCard
              key={pillar.id}
              pillar={pillar}
              index={idx}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
