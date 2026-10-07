'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowUpRight, ArrowRight } from 'lucide-react';


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
    website: 'https://scinovalities.com/',
    featured: true,
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-charcoal-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Ecosystem"
          title="One ecosystem."
          highlightedTitle="Specialist capabilities."
          description="You deal with AfriSMME. We coordinate the right specialists behind the scenes."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-800 border border-charcoal-800 rounded-sm overflow-hidden">
          {DIVISIONS.map((div, idx) => {
            const inner = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-bronze-400/80">0{idx + 1}</span>
                  {div.website && (
                    <ArrowUpRight className="w-4 h-4 text-ivory-400 group-hover:text-bronze-300 transition-colors" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors">
                  {div.name}
                </h3>
                <p className="mt-1 text-sm text-ivory-400">{div.category}</p>
                {div.featured && (
                  <span className="mt-4 inline-block text-[10px] font-mono uppercase tracking-wider text-bronze-300 border border-bronze-500/40 rounded px-2 py-0.5">
                    Technology Partner
                  </span>
                )}
              </>
            );

            const cls = 'group block bg-charcoal-950 p-7 sm:p-8 hover:bg-charcoal-900 transition-colors';

            return div.website ? (
              <a key={div.name} href={div.website} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={div.name} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-bronze-300 hover:text-ivory-50 transition-colors"
          >
            About AfriSMME Hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
