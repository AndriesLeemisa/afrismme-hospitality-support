'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

const DIVISIONS = [
  {
    name: 'The Wood Doctor',
    category: 'Furniture & timber restoration',
    website: 'https://wooddoctor.co.za/',
  },
  {
    name: 'AfriShades',
    category: 'Umbrellas & outdoor shade',
    website: 'https://afrishades.co.za/',
  },
  {
    name: 'Cane Africa',
    category: 'Cane & woven hospitality seating',
    website: 'https://www.caneafrica.co.za/',
  },
  {
    name: 'Textile Doctor',
    category: 'Upholstery & fabrics',
  },
  {
    name: 'AfriHealth & Safety',
    category: 'OHS, food safety & compliance',
  },
  {
    name: 'Scinovalities',
    category: 'Digital, AI & technology',
    website: 'https://scinovalities.co.za/',
    featured: true,
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-ivory-100 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            theme="light"
            badge="The Ecosystem"
            title="One ecosystem."
            highlightedTitle="Specialist capabilities."
            description="You deal with AfriSMME. We coordinate the right specialists behind the scenes."
            align="center"
          />
        </ScrollFloatReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
          {DIVISIONS.map((div, idx) => {
            const inner = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono font-semibold text-bronze-700">0{idx + 1}</span>
                  {div.website && (
                    <ArrowUpRight className="w-4 h-4 text-charcoal-600 group-hover:text-bronze-700 transition-colors" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal-950 group-hover:text-charcoal-800 transition-colors">
                  {div.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal-700">{div.category}</p>
                {div.featured && (
                  <span className="mt-4 inline-block text-[10px] font-mono uppercase tracking-wider text-charcoal-900 bg-bronze-200/70 border border-bronze-500/40 rounded px-2 py-0.5 font-semibold">
                    Technology Partner
                  </span>
                )}
              </>
            );

            const cls = 'group block bg-ivory-50 p-7 sm:p-8 rounded-sm border border-ivory-300 hover:border-bronze-500/60 float-card-shadow transition-all h-full';

            return (
              <ScrollFloatReveal
                key={div.name}
                direction="up"
                delay={idx * 70}
                hoverFloat
              >
                {div.website ? (
                  <a href={div.website} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>
                    {inner}
                  </div>
                )}
              </ScrollFloatReveal>
            );
          })}
        </div>

        <ScrollFloatReveal direction="up" delay={450}>
          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-bronze-700 transition-colors"
            >
              About AfriSMME Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFloatReveal>
      </div>
    </section>
  );
}
