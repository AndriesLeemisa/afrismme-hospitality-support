'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SERVICE_PILLARS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Check, Compass, Sparkles, Wrench, ShieldCheck, ShieldAlert, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

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
      if (matched) setActiveTabId(matched.id);
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
    <section id="pillars" className="py-20 sm:py-28 bg-charcoal-900 border-t border-charcoal-800 relative scroll-mt-20">
      {/* Invisible anchor targets for direct deep-linking */}
      {SERVICE_PILLARS.map((pillar) => (
        <span key={pillar.id} id={pillar.id} className="absolute -top-28 pointer-events-none" />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            badge="What We Do"
            title="Six pillars."
            highlightedTitle="One partner."
            align="center"
          />
        </ScrollFloatReveal>

        {/* Pillar tabs */}
        <ScrollFloatReveal direction="up" delay={90}>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8" role="tablist">
            {SERVICE_PILLARS.map((pillar) => {
              const isActive = pillar.id === activeTabId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelectPillar(pillar.id)}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 px-3 rounded-sm border-2 text-sm sm:text-base font-mono tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bronze-400 hover:-translate-y-0.5',
                    isActive
                      ? 'bg-bronze-400 border-bronze-400 text-charcoal-950 font-extrabold shadow-bronze-glow'
                      : 'bg-charcoal-950 border-charcoal-700 text-white font-bold hover:text-bronze-300 hover:border-bronze-400/60'
                  )}
                >
                  <span className="hidden sm:inline">{pillarIcons[pillar.iconName]}</span>
                  {pillar.name}
                </button>
              );
            })}
          </div>
        </ScrollFloatReveal>

        {/* Active pillar with floating presentation */}
        <ScrollFloatReveal direction="up" delay={160} hoverFloat>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border-2 border-charcoal-700 bg-charcoal-950 shadow-elevated-dark">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
              <Image
                src={activePillar.image}
                alt={activePillar.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-sm font-mono font-bold tracking-widest text-bronze-300">
                {activePillar.pillarNumber} — {activePillar.name}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
                {activePillar.tagline}
              </h3>
              <p className="mt-4 text-base sm:text-lg font-medium text-ivory-100 leading-relaxed">{activePillar.description}</p>

              <ul className="mt-6 space-y-3">
                {activePillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base font-medium text-white">
                    <Check className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant="outline"
                  size="md"
                  withArrow
                  {...(onRequestQuote
                    ? { onClick: () => onRequestQuote(activePillar.id) }
                    : { href: '#contact' })}
                >
                  {activePillar.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </ScrollFloatReveal>
      </div>
    </section>
  );
}
