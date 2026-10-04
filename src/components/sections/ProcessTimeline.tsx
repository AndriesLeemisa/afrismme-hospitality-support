'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Clock, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Execution Methodology"
          title="The Dark-Hours Cadence:"
          highlightedTitle="Zero Daytime Disruption."
          description="Most restaurant renovations require closing dining rooms, sacrificing tens of thousands of Rands daily. AfriSMME re-engineered the renovation cadence: all fabrication happens off-site, and on-site works occur exclusively while your venue sleeps."
        />

        {/* Process steps horizontal/vertical card flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-8 bg-charcoal-900/70 border border-charcoal-700/60 rounded-sm flex flex-col justify-between hover:border-bronze-500/40 transition-all duration-300 group shadow-subtle-dark"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-display font-bold text-bronze-400 group-hover:text-bronze-300 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-charcoal-950 border border-charcoal-700 text-ivory-300">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-ivory-50 mb-3 group-hover:text-bronze-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-ivory-300/80 leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bottom deliverable token */}
              <div className="pt-4 border-t border-charcoal-800 mt-auto">
                <span className="text-[10px] uppercase font-mono tracking-wider text-bronze-400 block mb-1">
                  Verified Deliverable
                </span>
                <p className="text-xs text-ivory-200 font-medium">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overnight Guarantee Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-bronze-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle-dark">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-300">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-ivory-50">
                The 07:00 Ready-for-Service Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-ivory-300 mt-0.5">
                All timber curing oils are zero-VOC and food-safe. Extraction, dust extraction, and industrial deep clean completed before your chef arrives.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-sm bg-bronze-500 text-charcoal-950 hover:bg-bronze-400 transition-colors shrink-0"
          >
            Review Overnight Protocol
          </a>
        </div>
      </div>
    </section>
  );
}
