'use client';

import React from 'react';
import Image from 'next/image';
import { ServicePillarData } from '@/types';
import { Button } from '@/components/ui/Button';
import { Compass, Sparkles, Wrench, ShieldCheck, ShieldAlert, TrendingUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  pillar: ServicePillarData;
  index: number;
  onSelect?: () => void;
  onRequestQuote?: (pillarId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-bronze-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-bronze-400" />,
  Wrench: <Wrench className="w-5 h-5 text-bronze-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-bronze-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-bronze-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-bronze-400" />,
};

export function ServiceCard({ pillar, index, onSelect, onRequestQuote }: ServiceCardProps) {
  return (
    <article
      id={pillar.id}
      className={cn(
        'group relative bg-charcoal-900/80 border border-charcoal-700/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-bronze-500/40 hover:shadow-elevated-dark',
      )}
    >
      {/* Top Banner with Authentic Photography */}
      <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-charcoal-950">
        <Image
          src={pillar.image}
          alt={pillar.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
        />
        {/* Subtle gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

        {/* Pillar Number Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded bg-charcoal-950/85 backdrop-blur-md border border-bronze-500/30">
          <span className="font-mono text-xs font-semibold text-bronze-300">
            {pillar.pillarNumber}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-ivory-300 font-medium">
            PILLAR
          </span>
        </div>

        {/* Dynamic Metric Pill */}
        <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded bg-charcoal-950/90 backdrop-blur-md border border-charcoal-700 text-right">
          <div className="font-display text-base font-bold text-bronze-300 leading-tight">
            {pillar.metric.value}
          </div>
          <div className="text-[10px] text-ivory-300 font-normal leading-tight">
            {pillar.metric.label}
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-2">
          {iconMap[pillar.iconName]}
          <span className="font-mono text-xs tracking-widest text-bronze-400 font-semibold uppercase">
            {pillar.name}
          </span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors mb-3 leading-snug">
          {pillar.tagline}
        </h3>

        <p className="text-sm text-ivory-300/80 leading-relaxed mb-6 font-normal">
          {pillar.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2.5 pt-4 border-t border-charcoal-800 mb-8 mt-auto">
          {pillar.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-ivory-200">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 mt-1.5 shrink-0" />
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {onRequestQuote ? (
            <button
              type="button"
              onClick={() => onRequestQuote(pillar.id)}
              className="w-full text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-sm border border-bronze-500/40 text-bronze-300 hover:bg-bronze-500 hover:text-charcoal-950 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{pillar.ctaLabel}</span>
            </button>
          ) : (
            <Button
              href="#contact"
              variant="outline"
              size="sm"
              withArrow
              className="w-full justify-between"
            >
              {pillar.ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
