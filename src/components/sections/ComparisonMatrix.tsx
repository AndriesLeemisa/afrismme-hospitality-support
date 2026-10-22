'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, XCircle } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

const COMPARISON_ROWS = [
  {
    area: 'Scheduling & Execution',
    traditional: 'Unplanned disruptions, noisy ad-hoc repairs during peak service, and lost tables.',
    afrismme: 'Planned daytime maintenance windows, phased zonal upgrades, and off-site workshop batches.',
  },
  {
    area: 'Accountability',
    traditional: 'Multiple disconnected contractors; finger-pointing when problems arise.',
    afrismme: 'Single accountable partner coordinating all specialist disciplines.',
  },
  {
    area: 'Emergency Support',
    traditional: 'Slow ticketing or "call back Monday" when critical equipment faults occur.',
    afrismme: 'Rapid-response technicians for extraction, cooling, gas, and power.',
  },
  {
    area: 'Interiors & Craft',
    traditional: 'Generic handymen, harsh chemicals, and unrefined acoustic foam.',
    afrismme: 'Artisanal wood revival, food-safe cures, and discrete sound balancing.',
  },
  {
    area: 'Compliance & Safety',
    traditional: 'Uncoordinated records leaving liquor and health certificates vulnerable.',
    afrismme: 'Turnkey OHS reviews, extraction fire verification, and hygiene logs.',
  },
  {
    area: 'Digital & Growth',
    traditional: 'Generic web agencies with no understanding of dining room flow.',
    afrismme: 'Dedicated tech partner (Scinovalities) for digital menus, SEO, and AI.',
  },
];

export function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-ivory-200 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            theme="light"
            badge="The Difference"
            title="Why operators choose"
            highlightedTitle="one coordinated partner."
            description="Traditional hospitality support is fragmented across multiple suppliers. AfriSMME brings everything together through one ecosystem."
            align="center"
          />
        </ScrollFloatReveal>

        {/* Desktop Comparison Table */}
        <ScrollFloatReveal direction="up" delay={120} hoverFloat>
          <div className="hidden md:block rounded-sm border-2 border-ivory-300 bg-white overflow-hidden shadow-md float-card-shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-ivory-300 text-xs sm:text-sm font-mono font-bold tracking-wider text-charcoal-950 uppercase bg-ivory-200">
                  <th className="py-4 px-6 w-1/4">Operational Area</th>
                  <th className="py-4 px-6 w-3/8 text-charcoal-900">Traditional Fragmented Contractors</th>
                  <th className="py-4 px-6 w-3/8 text-white bg-charcoal-950 border-l border-charcoal-800">
                    AfriSMME Coordinated Ecosystem
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-300 text-base">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.area} className="hover:bg-ivory-100 transition-colors">
                    <td className="py-5 px-6 font-display font-extrabold text-charcoal-950 text-base sm:text-lg">{row.area}</td>
                    <td className="py-5 px-6 text-charcoal-800 font-medium">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-charcoal-950 bg-bronze-50 border-l-2 border-bronze-400 font-bold">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{row.afrismme}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollFloatReveal>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 mt-4">
          {COMPARISON_ROWS.map((row, idx) => (
            <ScrollFloatReveal
              key={row.area}
              direction="up"
              delay={idx * 60}
              hoverFloat
              className="p-6 rounded-sm bg-white border-2 border-ivory-300 space-y-3 shadow-sm float-card-shadow"
            >
              <h3 className="font-display text-lg font-extrabold text-charcoal-950 pb-2 border-b border-ivory-300">
                {row.area}
              </h3>
              <div className="flex items-start gap-2.5 text-sm font-medium text-charcoal-800">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{row.traditional}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-charcoal-950 font-bold pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{row.afrismme}</span>
              </div>
            </ScrollFloatReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
