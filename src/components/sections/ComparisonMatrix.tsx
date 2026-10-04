'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Clock, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ComparisonMatrix() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'operations' | 'craftsmanship' | 'governance'>('all');

  const criteria = [
    {
      category: 'operations',
      label: 'Operational Work Hours',
      afriSMME: {
        text: 'Strict Dark-Hours (23:00–07:00)',
        status: 'positive',
        note: 'Zero lost covers; venue is 100% clean and ready for morning prep.',
      },
      corporateFM: {
        text: 'Standard Daytime (08:00–17:00)',
        status: 'negative',
        note: 'Requires closing dining rooms or working around lunch guests.',
      },
      siloedTrades: {
        text: 'Uncoordinated / Sporadic',
        status: 'warning',
        note: 'Trades arrive at conflicting times; constant operational friction.',
      },
      consultants: {
        text: 'Office Advisory Hours Only',
        status: 'neutral',
        note: 'Deliver reports and recommendations; zero physical deployment.',
      },
    },
    {
      category: 'operations',
      label: 'Emergency Kitchen Breakdown SLA',
      afriSMME: {
        text: 'Sub-60 Minute Fleet Dispatch (24/7)',
        status: 'positive',
        note: 'Stocked mobile workshops with extraction motors, valves, and cold-chain spares.',
      },
      corporateFM: {
        text: '24–48hr Helpdesk Ticketing',
        status: 'negative',
        note: 'Designed for office parks; fatal for a busy Saturday dinner rush.',
      },
      siloedTrades: {
        text: '"Call back on Monday morning"',
        status: 'negative',
        note: 'Independent contractors rarely respond during peak evening shifts.',
      },
      consultants: {
        text: 'N/A (No Physical Capability)',
        status: 'neutral',
        note: 'Cannot dispatch tools, technicians, or repair trucks.',
      },
    },
    {
      category: 'craftsmanship',
      label: 'Hospitality Acoustic Engineering',
      afriSMME: {
        text: 'NRC-Rated Architectural Dampening',
        status: 'positive',
        note: 'Micro-perforated timber & concealed acoustic baffles extending guest dwell time.',
      },
      corporateFM: {
        text: 'Zero Acoustic Competency',
        status: 'negative',
        note: 'Limited to basic ceiling tile replacement and janitorial tasks.',
      },
      siloedTrades: {
        text: 'Crude Foam / Visual Clutter',
        status: 'warning',
        note: 'Ugly exposed acoustic panels that degrade luxury dining aesthetics.',
      },
      consultants: {
        text: 'Theoretical Recommendations',
        status: 'neutral',
        note: 'Provide advice on sound levels without fabricating or installing panels.',
      },
    },
    {
      category: 'craftsmanship',
      label: 'Artisanal Wood & Leather Revival',
      afriSMME: {
        text: 'Master Joiners & Overnight Hardwax Oils',
        status: 'positive',
        note: 'Food-safe zero-VOC natural oils, leather pigmenting, and brass de-tarnishing.',
      },
      corporateFM: {
        text: 'Industrial Chemical Cleaning',
        status: 'negative',
        note: 'Harsh chemicals that strip natural timber oils and ruin leather patina.',
      },
      siloedTrades: {
        text: 'Variable Quality Handymen',
        status: 'warning',
        note: 'Lack high-end cabinetmaking standards and specialized curing knowledge.',
      },
      consultants: {
        text: 'Spec Sheets Only',
        status: 'neutral',
        note: 'Advise on furniture styles without in-house restoration workshops.',
      },
    },
    {
      category: 'governance',
      label: 'Vendor Accountability & Billing',
      afriSMME: {
        text: 'Single Accountable SLA & Consolidated Ledger',
        status: 'positive',
        note: 'One dedicated Technical Account Director; zero finger-pointing.',
      },
      corporateFM: {
        text: 'Rigid Institutional Contracts',
        status: 'warning',
        note: 'Bureaucratic change orders, complex ticketing, and multi-tier overhead.',
      },
      siloedTrades: {
        text: '6–10 Disconnected Invoices',
        status: 'negative',
        note: 'Multiple vendor statements; each trade blames the other when systems fail.',
      },
      consultants: {
        text: 'Separate Advisory Retainer',
        status: 'neutral',
        note: 'Client still bears the burden of contracting and managing physical trades.',
      },
    },
    {
      category: 'governance',
      label: 'Municipal Compliance & Food Safety',
      afriSMME: {
        text: 'Turnkey HACCP, NFPA 96 & SANS 10400',
        status: 'positive',
        note: 'Airflow velocity certificates, fire suppression tests, and hygiene registers.',
      },
      corporateFM: {
        text: 'Generic Commercial Building Code',
        status: 'warning',
        note: 'Lacks specialized understanding of local liquor boards and kitchen health inspectors.',
      },
      siloedTrades: {
        text: 'Uncertified / No Legal Sign-off',
        status: 'negative',
        note: 'Leaves the restaurateur exposed to sudden municipal closure and insurance invalidation.',
      },
      consultants: {
        text: 'Mock Audit Checklists',
        status: 'warning',
        note: 'Can flag non-compliance but cannot physically rectify mechanical kitchen faults.',
      },
    },
  ];

  const filteredCriteria = activeFilter === 'all'
    ? criteria
    : criteria.filter((c) => c.category === activeFilter);

  return (
    <section id="comparison" className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Strategic Market Differentiation"
          title="Why South Africa's Premier Restaurants"
          highlightedTitle="Choose AfriSMME Over Traditional Models."
          description="High-end dining rooms cannot survive on 9-to-5 corporate office cleaners, fragmented local handymen, or advisory slide decks. Examine how our integrated hospitality engineering model fundamentally outperforms traditional alternatives."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-ivory-400 mr-2">
            Filter Dimension:
          </span>
          {[
            { id: 'all', label: 'All Dimensions' },
            { id: 'operations', label: 'Dark-Hours & Operations' },
            { id: 'craftsmanship', label: 'Acoustics & Craftsmanship' },
            { id: 'governance', label: 'Governance & Compliance' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={cn(
                'text-xs font-mono tracking-wider px-3.5 py-1.5 rounded-sm transition-all duration-200 select-none',
                activeFilter === tab.id
                  ? 'bg-bronze-500 text-charcoal-950 font-bold shadow-subtle-dark'
                  : 'bg-charcoal-950/80 text-ivory-300 hover:text-ivory-50 border border-charcoal-700'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison Table for Desktop / Tablet */}
        <div className="hidden lg:block overflow-x-auto rounded-sm border border-charcoal-700/80 shadow-elevated-dark bg-charcoal-950/80 backdrop-blur-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-charcoal-700/80 bg-charcoal-900/90 text-xs font-mono tracking-wider text-ivory-300 uppercase">
                <th className="py-5 px-6 font-semibold w-1/4">Evaluation Criterion</th>
                <th className="py-5 px-6 font-semibold w-1/4 text-bronze-300 bg-bronze-500/10 border-x border-bronze-500/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bronze-400" />
                    <span>AFRISMME HUB</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-semibold w-1/6 text-ivory-400">
                  Generic Corporate FM
                  <span className="block text-[10px] text-ivory-500 font-normal lowercase">(Servest, Empact, Motech)</span>
                </th>
                <th className="py-5 px-6 font-semibold w-1/6 text-ivory-400">
                  Siloed Trade Contractors
                  <span className="block text-[10px] text-ivory-500 font-normal lowercase">(Ad-hoc handymen, single trades)</span>
                </th>
                <th className="py-5 px-6 font-semibold w-1/6 text-ivory-400">
                  Pure Advisory Consultants
                  <span className="block text-[10px] text-ivory-500 font-normal lowercase">(Concept, marketing & audits)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800 text-sm">
              {filteredCriteria.map((item, idx) => (
                <tr key={idx} className="hover:bg-charcoal-900/40 transition-colors">
                  {/* Criterion Title */}
                  <td className="py-5 px-6 font-display font-medium text-ivory-50 align-top">
                    {item.label}
                  </td>

                  {/* AfriSMME Hub (Hero Column) */}
                  <td className="py-5 px-6 bg-bronze-500/[0.04] border-x border-bronze-500/30 align-top">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-ivory-50 block leading-tight">
                          {item.afriSMME.text}
                        </span>
                        <p className="text-xs text-bronze-200/90 mt-1 leading-relaxed">
                          {item.afriSMME.note}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Corporate FM */}
                  <td className="py-5 px-6 align-top">
                    <div className="flex items-start gap-2 text-ivory-300">
                      {item.corporateFM.status === 'negative' ? (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-xs font-medium text-ivory-200 block">
                          {item.corporateFM.text}
                        </span>
                        <p className="text-[11px] text-ivory-400 mt-1 leading-snug">
                          {item.corporateFM.note}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Siloed Trades */}
                  <td className="py-5 px-6 align-top">
                    <div className="flex items-start gap-2 text-ivory-300">
                      {item.siloedTrades.status === 'negative' ? (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-xs font-medium text-ivory-200 block">
                          {item.siloedTrades.text}
                        </span>
                        <p className="text-[11px] text-ivory-400 mt-1 leading-snug">
                          {item.siloedTrades.note}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Pure Consultants */}
                  <td className="py-5 px-6 align-top">
                    <div className="flex items-start gap-2 text-ivory-300">
                      <span className="text-xs text-charcoal-400 shrink-0 mt-0.5 font-mono">•</span>
                      <div>
                        <span className="text-xs font-medium text-ivory-200 block">
                          {item.consultants.text}
                        </span>
                        <p className="text-[11px] text-ivory-400 mt-1 leading-snug">
                          {item.consultants.note}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Mobile / Card Breakdown for Small Screens */}
        <div className="lg:hidden space-y-6">
          {filteredCriteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-charcoal-950 border border-charcoal-700/80 rounded-sm p-5 shadow-elevated-dark"
            >
              <h3 className="font-display text-lg font-semibold text-ivory-50 pb-3 border-b border-charcoal-800 mb-4">
                {item.label}
              </h3>

              {/* AfriSMME Highlight */}
              <div className="p-4 rounded-sm bg-bronze-500/10 border border-bronze-500/40 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono uppercase font-bold text-bronze-300">
                    AFRISMME HUB
                  </span>
                </div>
                <p className="text-sm font-semibold text-ivory-50">
                  {item.afriSMME.text}
                </p>
                <p className="text-xs text-bronze-200/90 mt-1">
                  {item.afriSMME.note}
                </p>
              </div>

              {/* Competitors List */}
              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <span className="font-mono uppercase text-[10px] text-ivory-400 block mb-0.5">
                    Generic Corporate FM (Servest, Empact):
                  </span>
                  <p className="text-ivory-300">{item.corporateFM.text} — {item.corporateFM.note}</p>
                </div>
                <div>
                  <span className="font-mono uppercase text-[10px] text-ivory-400 block mb-0.5">
                    Siloed Trade Contractors:
                  </span>
                  <p className="text-ivory-300">{item.siloedTrades.text} — {item.siloedTrades.note}</p>
                </div>
                <div>
                  <span className="font-mono uppercase text-[10px] text-ivory-400 block mb-0.5">
                    Pure Hospitality Consultants:
                  </span>
                  <p className="text-ivory-300">{item.consultants.text} — {item.consultants.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Takeaway Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-charcoal-950 border border-bronze-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle-dark">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bronze-400 mb-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              The Operator&apos;s Bottom Line
            </div>
            <h4 className="font-display text-xl font-semibold text-ivory-50">
              One Partner for Architectural Heritage, Facilities & Revenue Protection
            </h4>
            <p className="text-xs sm:text-sm text-ivory-300 mt-1 max-w-2xl">
              AfriSMME eliminates vendor chaos by providing institutional-grade facilities management delivered with the meticulous eye of a master hospitality craftsman.
            </p>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="md"
            withArrow
            className="shrink-0"
          >
            Commission Facility Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
