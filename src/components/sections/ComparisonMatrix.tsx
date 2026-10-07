'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, XCircle } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    area: 'Working Hours',
    traditional: 'Daytime trade disruptions, noise during prep, and lost tables.',
    afrismme: 'Overnight dark-hours (23:00–07:00). Pristine and ready by morning.',
  },
  {
    area: 'Accountability',
    traditional: 'Multiple disconnected contractors; finger-pointing when problems arise.',
    afrismme: 'Single accountable partner coordinating all specialist disciplines.',
  },
  {
    area: 'Emergency Support',
    traditional: 'Slow ticketing or "call back Monday" during busy weekend dinner shifts.',
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
    <section id="comparison" className="py-20 sm:py-28 bg-charcoal-900 border-t border-charcoal-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Difference"
          title="Why operators choose"
          highlightedTitle="one coordinated partner."
          description="Traditional hospitality support is fragmented across multiple suppliers. AfriSMME brings everything together through one ecosystem."
          align="center"
        />

        {/* Desktop Comparison Table */}
        <div className="hidden md:block rounded-sm border border-charcoal-800 bg-charcoal-950 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-charcoal-800 text-xs font-mono tracking-wider text-ivory-400 uppercase">
                <th className="py-4 px-6 w-1/4">Operational Area</th>
                <th className="py-4 px-6 w-3/8 text-ivory-400">Traditional Fragmented Contractors</th>
                <th className="py-4 px-6 w-3/8 text-bronze-300 bg-bronze-500/10 border-l border-bronze-500/20">
                  AfriSMME Coordinated Ecosystem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800/80 text-sm">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.area} className="hover:bg-charcoal-900/40 transition-colors">
                  <td className="py-4 px-6 font-display font-medium text-ivory-100">{row.area}</td>
                  <td className="py-4 px-6 text-ivory-400">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-ivory-100 bg-bronze-500/[0.03] border-l border-bronze-500/20 font-medium">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.afrismme}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {COMPARISON_ROWS.map((row) => (
            <div key={row.area} className="p-5 rounded-sm bg-charcoal-950 border border-charcoal-800 space-y-3">
              <h3 className="font-display text-base font-semibold text-ivory-50 pb-2 border-b border-charcoal-800">
                {row.area}
              </h3>
              <div className="flex items-start gap-2 text-xs text-ivory-400">
                <XCircle className="w-3.5 h-3.5 text-red-400/80 shrink-0 mt-0.5" />
                <span>{row.traditional}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-ivory-100 font-medium pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{row.afrismme}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
