'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Clock } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-ivory-200 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            theme="light"
            badge="How We Work"
            title="One assessment."
            highlightedTitle="One coordinated solution."
            align="center"
          />
        </ScrollFloatReveal>

        {/* 5-step flow with lazy floating reveal */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollFloatReveal
              key={step.step}
              as="li"
              direction="up"
              delay={idx * 85}
              hoverFloat
              className="bg-white p-6 sm:p-7 rounded-sm border-2 border-ivory-300 group hover:border-bronze-500 float-card-shadow transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-bronze-600 group-hover:text-charcoal-950 transition-colors">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-charcoal-950">{step.title}</h3>
                <p className="mt-2.5 text-base font-medium text-charcoal-800 leading-relaxed">{step.description}</p>
              </div>
            </ScrollFloatReveal>
          ))}
        </ol>

        {/* Single operational promise */}
        <ScrollFloatReveal direction="up" delay={450}>
          <div className="mt-8 flex items-center justify-center gap-3 text-base font-medium text-charcoal-900">
            <Clock className="w-5 h-5 text-bronze-600 shrink-0" />
            <span>
              <span className="text-charcoal-950 font-bold">Coordinated daytime & scheduled maintenance windows.</span> Work is planned around your venue&apos;s operating schedule and phased zones.
            </span>
          </div>
        </ScrollFloatReveal>
      </div>
    </section>
  );
}
