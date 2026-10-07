'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Clock } from 'lucide-react';

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-charcoal-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="One assessment."
          highlightedTitle="One coordinated solution."
          align="center"
        />

        {/* 5-step flow */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-charcoal-800 border border-charcoal-800 rounded-sm overflow-hidden">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="bg-charcoal-950 p-6 sm:p-7 group hover:bg-charcoal-900 transition-colors">
              <span className="font-display text-3xl font-bold text-bronze-400/80 group-hover:text-bronze-300 transition-colors">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ivory-50">{step.title}</h3>
              <p className="mt-2 text-sm text-ivory-300/80 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Single operational promise */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ivory-300">
          <Clock className="w-4 h-4 text-bronze-400 shrink-0" />
          <span>
            <span className="text-ivory-50 font-medium">Zero daytime disruption.</span> Physical work is scheduled outside trading hours.
          </span>
        </div>
      </div>
    </section>
  );
}
