'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SERVICE_PILLARS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  Check,
  Compass,
  Sparkles,
  Wrench,
  ShieldCheck,
  ShieldAlert,
  TrendingUp,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicePillarsSectionProps {
  onRequestQuote?: (pillarId: string) => void;
}

const pillarIcons: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
};

export function ServicePillarsSection({ onRequestQuote }: ServicePillarsSectionProps) {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICE_PILLARS[0].id);

  // Sync active pillar with URL hash if present (e.g. #restore, #enhance)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const matched = SERVICE_PILLARS.find((p) => p.id === hash);
      if (matched) {
        setActiveTabId(matched.id);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activePillar = SERVICE_PILLARS.find((p) => p.id === activeTabId) || SERVICE_PILLARS[0];

  const handleSelectPillar = (id: string) => {
    setActiveTabId(id);
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <section id="pillars" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden scroll-mt-20">
      {/* Invisible anchor targets for direct deep-linking */}
      {SERVICE_PILLARS.map((pillar) => (
        <span key={pillar.id} id={pillar.id} className="absolute -top-28 pointer-events-none" />
      ))}

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
          description="Most hospitality operators juggle separate signmakers, acoustic consultants, woodworkers, refrigeration contractors, and compliance auditors. AfriSMME integrates the entire physical and technical lifecycle under a single master SLA."
        />

        {/* 6-Pillar Interactive Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {SERVICE_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTabId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => handleSelectPillar(pillar.id)}
                className={cn(
                  'p-3.5 sm:p-4 rounded-sm border text-left transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-1 focus:ring-bronze-400',
                  isActive
                    ? 'bg-charcoal-900 border-bronze-400 shadow-bronze-glow'
                    : 'bg-charcoal-900/40 border-charcoal-800 hover:border-charcoal-700 hover:bg-charcoal-900/80'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      'text-[10px] font-mono font-bold tracking-wider',
                      isActive ? 'text-bronze-300' : 'text-ivory-400'
                    )}
                  >
                    PILLAR {pillar.pillarNumber}
                  </span>
                  <div
                    className={cn(
                      'w-6 h-6 rounded flex items-center justify-center transition-colors',
                      isActive
                        ? 'bg-bronze-500 text-charcoal-950'
                        : 'bg-charcoal-950 text-bronze-400 group-hover:text-ivory-100'
                    )}
                  >
                    {pillarIcons[pillar.iconName]}
                  </div>
                </div>

                <div>
                  <span
                    className={cn(
                      'font-display text-sm sm:text-base font-semibold block transition-colors',
                      isActive ? 'text-ivory-50' : 'text-ivory-200 group-hover:text-ivory-50'
                    )}
                  >
                    {pillar.name}
                  </span>
                  <span className="text-[10px] text-ivory-400 block line-clamp-1 mt-0.5 font-normal">
                    {pillar.features[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Featured Content Showcase */}
        <div className="bg-charcoal-900/90 border border-charcoal-700/80 rounded-sm p-6 sm:p-10 backdrop-blur-xl shadow-elevated-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal-700 group">
                <Image
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-bronze-300 font-semibold bg-charcoal-950/90 px-2.5 py-1 rounded border border-bronze-500/30">
                    PILLAR {activePillar.pillarNumber} SHOWCASE
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-ivory-200 line-clamp-2">
                    {activePillar.imageAlt}
                  </p>
                </div>
              </div>

              {/* Specialist Division Websites & Portals (if available) */}
              {activePillar.externalLinks && activePillar.externalLinks.length > 0 && (
                <div className="p-4 sm:p-5 rounded-sm bg-charcoal-950/90 border border-bronze-500/30">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-charcoal-800">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-bronze-300 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
                      Specialist Division Portals
                    </span>
                    <span className="text-[10px] font-mono text-ivory-400">
                      Official Partner Sites
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePillar.externalLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/portal p-3 rounded-sm bg-charcoal-900 border border-charcoal-700/80 hover:border-bronze-400/80 hover:bg-charcoal-850 transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-semibold text-ivory-100 group-hover/portal:text-bronze-300 transition-colors">
                              {link.name}
                            </span>
                            <ExternalLink className="w-3 h-3 text-bronze-400 group-hover/portal:translate-x-0.5 group-hover/portal:-translate-y-0.5 transition-transform shrink-0" />
                          </div>
                          {link.description && (
                            <p className="text-[11px] text-ivory-400 leading-snug mb-2 line-clamp-2">
                              {link.description}
                            </p>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-bronze-400 flex items-center gap-1 group-hover/portal:underline">
                          {link.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} &rarr;
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-cinematic text-bronze-400 font-mono font-semibold">
                    Strategic Focus
                  </span>
                  <span className="w-8 h-[1px] bg-bronze-500/40" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50 mb-3 leading-snug">
                  {activePillar.tagline}
                </h3>

                <p className="text-sm text-ivory-300 leading-relaxed mb-6 font-normal">
                  {activePillar.description}
                </p>

                {/* Sub-services breakdown */}
                <div className="space-y-3.5 mb-8">
                  {activePillar.detailedServices.map((service, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-sm bg-charcoal-950/70 border border-charcoal-800">
                      <h4 className="text-sm font-semibold text-ivory-100 flex items-center gap-2">
                        <Check className="w-4 h-4 text-bronze-400 shrink-0" />
                        {service.title}
                      </h4>
                      <p className="text-xs text-ivory-300/80 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {service.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[10px] font-mono text-bronze-300 bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-700"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical standard & consultation trigger */}
              <div className="pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-400 block mb-1">
                    Certified Technical Standard
                  </span>
                  <span className="font-display text-sm sm:text-base font-semibold text-ivory-100 block">
                    {activePillar.technicalStandard.title}
                  </span>
                  <p className="text-xs text-ivory-400 mt-0.5 max-w-sm">
                    {activePillar.technicalStandard.description}
                  </p>
                </div>

                {onRequestQuote ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onRequestQuote(activePillar.id)}
                    withArrow
                    className="shrink-0 w-full sm:w-auto"
                  >
                    {activePillar.ctaLabel}
                  </Button>
                ) : (
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    withArrow
                    className="shrink-0 w-full sm:w-auto"
                  >
                    {activePillar.ctaLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
