'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Moon, Sparkles, ArrowRight, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenAudit?: () => void;
}

export function AboutSection({ onOpenAudit }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-800 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About AfriSMME Hub"
          title="Turnkey Infrastructure & Restoration for"
          highlightedTitle="Africa's Most Coveted Dining Spaces."
          description="We are the unified engineering and architectural support partner for fine-dining restaurants, wine estates, safari lodges, and luxury bistros. We operate when your dining room is closed—ensuring zero daytime service disruption."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/11] rounded-sm overflow-hidden border border-charcoal-700/80 shadow-elevated-dark group">
              <Image
                src="/images/furniture_restoration_detail.jpg"
                alt="AfriSMME master craftsman restoring solid hardwood dining furniture using food-safe natural oils"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              
              {/* Floating Dark-Hours Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-charcoal-950/90 backdrop-blur-md border border-charcoal-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0">
                    <Moon className="w-5 h-5 text-bronze-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-bronze-400 font-semibold">
                      The Dark-Hours Protocol
                    </p>
                    <p className="text-sm font-display font-medium text-ivory-100">
                      23:00 to 07:00 Silent Execution
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                  Zero Lost Covers
                </span>
              </div>
            </div>

            {/* Specialist Operating Divisions strip */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wooddoctor.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal-900/60 hover:bg-charcoal-900 border border-charcoal-800 hover:border-bronze-500/40 rounded-sm transition-all group/div"
              >
                <span className="text-[10px] font-mono uppercase text-bronze-400 block mb-1">Division 01</span>
                <span className="text-xs font-display font-semibold text-ivory-100 group-hover/div:text-bronze-300 flex items-center gap-1">
                  Wood Doctor
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </span>
                <span className="text-[10px] text-ivory-400 block mt-0.5 line-clamp-1">Timber Restoration</span>
              </a>

              <a
                href="https://afrishades.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal-900/60 hover:bg-charcoal-900 border border-charcoal-800 hover:border-bronze-500/40 rounded-sm transition-all group/div"
              >
                <span className="text-[10px] font-mono uppercase text-bronze-400 block mb-1">Division 02</span>
                <span className="text-xs font-display font-semibold text-ivory-100 group-hover/div:text-bronze-300 flex items-center gap-1">
                  Afrishades
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </span>
                <span className="text-[10px] text-ivory-400 block mt-0.5 line-clamp-1">Terrace Architecture</span>
              </a>

              <a
                href="https://www.caneafrica.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal-900/60 hover:bg-charcoal-900 border border-charcoal-800 hover:border-bronze-500/40 rounded-sm transition-all group/div"
              >
                <span className="text-[10px] font-mono uppercase text-bronze-400 block mb-1">Division 03</span>
                <span className="text-xs font-display font-semibold text-ivory-100 group-hover/div:text-bronze-300 flex items-center gap-1">
                  Cane Africa
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </span>
                <span className="text-[10px] text-ivory-400 block mt-0.5 line-clamp-1">Woven Cane Seating</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-ivory-50 leading-snug">
                Engineering Hospitality Excellence Behind the Scenes
              </h3>
              <p className="text-base text-ivory-300 leading-relaxed font-normal">
                Africa’s luxury dining and hospitality sector operates on uncompromising guest expectations. The subtle acoustics of a private alcove, the tactile warmth of hand-rubbed African hardwood, and the comfort of an all-weather terrace directly drive guest dwell time, spend per head, and repeat reservations.
              </p>
              <p className="text-base text-ivory-300 leading-relaxed font-normal">
                Traditional contractors create chaos: daytime drilling, noxious chemical fumes, displaced tables, and compromised reservations. AfriSMME Hub solves this by deploying specialized master artisans and technical engineers under our strict dark-hours execution protocol.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-charcoal-900/40 border border-charcoal-800 rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ivory-100">07:00 Ready-for-Service Guarantee</h4>
                  <p className="text-xs text-ivory-400 mt-0.5">
                    Every workspace is certified pristine, sanitized, and odor-free before breakfast service begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-charcoal-900/40 border border-charcoal-800 rounded-sm">
                <ShieldCheck className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ivory-100">SANS 10400 & NFPA 96 Full Compliance</h4>
                  <p className="text-xs text-ivory-400 mt-0.5">
                    Municipal fire safety clearance, HACCP food-contact hygiene certification, and NRC acoustic testing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-charcoal-900/40 border border-charcoal-800 rounded-sm">
                <Award className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ivory-100">Bespoke African Hospitality Craftsmanship</h4>
                  <p className="text-xs text-ivory-400 mt-0.5">
                    Authentic materials tailored to coastal salt mist, high-altitude sun, and high-turnover dining wear.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual CTAs: Dedicated About Page & Diagnostic Audit */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-bronze-500 text-charcoal-950 font-semibold hover:bg-bronze-400 transition-colors shadow-lg shadow-bronze-500/10 text-sm"
              >
                <span>Read Our Full Story & Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {onOpenAudit ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenAudit}
                  className="text-center"
                >
                  Diagnostic Audit
                </Button>
              ) : (
                <Button
                  href="#audit-tool"
                  variant="outline"
                  size="md"
                  className="text-center"
                >
                  Diagnostic Audit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
