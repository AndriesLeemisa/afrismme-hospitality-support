'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShieldCheck, Award, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export function ExecutiveStandards() {
  const standards = [
    {
      title: 'Architectural Etched Brass Signage',
      category: 'EXTERIOR PRESTIGE',
      image: '/images/mockup_brass_signage.jpg',
      alt: 'AfriSMME Hospitality architectural etched brass signage on dark stone facade',
      description: 'Solid milled naval brass, hand-patinated to museum standard and sealed against coastal salt mist and urban oxidation.',
    },
    {
      title: 'Executive Onboarding & Service SLA Collateral',
      category: 'GOVERNANCE & CONTRACTS',
      image: '/images/mockup_business_card.jpg',
      alt: 'Executive black and gold embossed AfriSMME Hospitality business cards and collateral',
      description: 'Consolidated monthly engineering audit ledgers, dedicated technical account manager, and rapid dispatch credentials.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Uncompromising Physical Craftsmanship"
          title="The Physical Reality of"
          highlightedTitle="Executive Hospitality Standards."
          description="We do not supply abstract consulting. Our workshops deliver tangible, architectural-grade physical assets that immediately elevate guest perception and asset valuation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="group bg-charcoal-900/70 border border-charcoal-700/70 rounded-sm overflow-hidden flex flex-col justify-between hover:border-bronze-500/40 transition-all duration-300 shadow-elevated-dark"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-charcoal-950/85 backdrop-blur-md border border-bronze-500/30">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-300 font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ivory-50 mb-3 group-hover:text-bronze-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ivory-300/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs text-bronze-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Bespoke Custom Commission
                  </span>
                  <span>AfriSMME Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
