'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Clock } from 'lucide-react';

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-ivory-200 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          badge="How We Work"
          title="One assessment."
          highlightedTitle="One coordinated solution."
          align="center"
        />

        {/* 5-step flow */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ivory-300 border border-ivory-300 rounded-sm overflow-hidden shadow-sm">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="bg-ivory-50 p-6 sm:p-7 group hover:bg-white transition-colors">
              <span className="font-display text-3xl font-bold text-bronze-700 group-hover:text-charcoal-900 transition-colors">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-charcoal-950">{step.title}</h3>
              <p className="mt-2 text-sm text-charcoal-800/85 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Single operational promise */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-charcoal-800">
          <Clock className="w-4 h-4 text-bronze-700 shrink-0" />
          <span>
            <span className="text-charcoal-950 font-semibold">Coordinated daytime & scheduled maintenance windows.</span> Work is planned around your venue&apos;s operating schedule and phased zones.
          </span>
        </div>
      </div>
    </section>
  );
}
