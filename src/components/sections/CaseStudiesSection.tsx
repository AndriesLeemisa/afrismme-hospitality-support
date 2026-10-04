'use client';

import React from 'react';
import Image from 'next/image';
import { CASE_STUDIES } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, Clock, MapPin, TrendingUp } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Operational Turnarounds"
          title="Engineered Results from"
          highlightedTitle="Premier Dining Rooms."
          description="Examine how leading restaurateurs, hospitality groups, and boutique hotel operators transformed revenue loss, acoustic discomfort, and furniture degradation into verifiable margin gains."
        />

        <div className="space-y-16 sm:space-y-20">
          {CASE_STUDIES.map((study, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-charcoal-900/60 border border-charcoal-700/60 rounded-sm p-6 sm:p-10 shadow-elevated-dark"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden border border-charcoal-700 group ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={`${study.clientName} Intervention`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                  {/* Turnaround Badge */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded bg-charcoal-950/90 backdrop-blur-md border border-bronze-500/40 text-xs font-mono text-bronze-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{study.turnaroundTime}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs uppercase tracking-cinematic text-bronze-400 font-mono font-semibold">
                        {study.venueType}
                      </span>
                      <span className="text-charcoal-600">&bull;</span>
                      <span className="inline-flex items-center gap-1 text-xs text-ivory-400">
                        <MapPin className="w-3 h-3 text-bronze-500/80" />
                        {study.location}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50 mb-4 leading-tight">
                      {study.clientName}
                    </h3>

                    {/* Problem Statement */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-400 block mb-1">
                        Operational Friction:
                      </span>
                      <p className="text-xs sm:text-sm text-ivory-300/90 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* AfriSMME Intervention */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-400 block mb-1">
                        AfriSMME Turnkey Intervention:
                      </span>
                      <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-medium">
                        {study.intervention}
                      </p>
                    </div>

                    {/* Quantified Results */}
                    <div className="p-4 sm:p-5 rounded-sm bg-charcoal-950/80 border border-charcoal-800 space-y-2 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-400 block mb-1">
                        Quantified Business Outcomes:
                      </span>
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-ivory-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pillars Involved Tags */}
                  <div className="pt-4 border-t border-charcoal-800 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-ivory-400">
                      Pillars Applied:
                    </span>
                    {study.pillarsInvolved.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-charcoal-800 text-bronze-300 border border-charcoal-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
