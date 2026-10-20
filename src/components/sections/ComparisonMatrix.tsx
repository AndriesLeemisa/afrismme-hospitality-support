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
          <div className="hidden md:block rounded-sm border border-ivory-300 bg-ivory-50 overflow-hidden shadow-sm float-card-shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ivory-300 text-xs font-mono tracking-wider text-charcoal-800 uppercase bg-ivory-100">
                  <th className="py-4 px-6 w-1/4">Operational Area</th>
                  <th className="py-4 px-6 w-3/8 text-charcoal-700">Traditional Fragmented Contractors</th>
                  <th className="py-4 px-6 w-3/8 text-ivory-50 bg-charcoal-900 border-l border-charcoal-800">
                    AfriSMME Coordinated Ecosystem
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-300 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.area} className="hover:bg-ivory-100/70 transition-colors">
                    <td className="py-4 px-6 font-display font-semibold text-charcoal-950">{row.area}</td>
                    <td className="py-4 px-6 text-charcoal-700">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-600/80 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-charcoal-950 bg-bronze-100/60 border-l border-bronze-300 font-medium">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-charcoal-800 shrink-0 mt-0.5" />
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
        <div className="md:hidden space-y-3 mt-4">
          {COMPARISON_ROWS.map((row, idx) => (
            <ScrollFloatReveal
              key={row.area}
              direction="up"
              delay={idx * 60}
              hoverFloat
              className="p-5 rounded-sm bg-ivory-50 border border-ivory-300 space-y-3 shadow-sm float-card-shadow"
            >
              <h3 className="font-display text-base font-semibold text-charcoal-950 pb-2 border-b border-ivory-300">
                {row.area}
              </h3>
              <div className="flex items-start gap-2 text-xs text-charcoal-700">
                <XCircle className="w-3.5 h-3.5 text-red-600/80 shrink-0 mt-0.5" />
                <span>{row.traditional}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-charcoal-950 font-medium pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-charcoal-800 shrink-0 mt-0.5" />
                <span>{row.afrismme}</span>
              </div>
            </ScrollFloatReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
