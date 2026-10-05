'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Award,
  Layers,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Compass,
  Sparkles,
  Clock,
} from 'lucide-react';

interface EcosystemSectionProps {
  onRequestQuote?: (pillarId: string) => void;
}

const DIVISIONS = [
  {
    id: 'wood-doctor',
    number: '01',
    name: 'The Wood Doctor',
    category: 'Timber & Leather Restoration',
    website: 'https://wooddoctor.co.za/',
    image: '/images/furniture_restoration_detail.jpg',
    alt: 'Master artisan hand-rubbing natural food-safe oil into hardwood dining table',
    description:
      'Artisanal workshop restoring solid oak, teak, and exotic hardwoods overnight. Food-safe zero-VOC finishes, fine leather re-pigmenting, and brass de-tarnishing.',
    features: ['Overnight de-staining & scratch repair', 'Zero-VOC food-contact oils', 'Leather pigment revival'],
  },
  {
    id: 'afrishades',
    number: '02',
    name: 'Afrishades',
    category: 'Architectural Terrace & Shade',
    website: 'https://afrishades.co.za/',
    image: '/images/outdoor_umbrellas_terrace.jpg',
    alt: 'Luxury outdoor dining terrace with heavy-duty commercial cantilever umbrellas',
    description:
      'Commercial cantilever systems, motorized windbreak zip screens, and tensioned shade structures engineered to maximize year-round terrace dining yield.',
    features: ['Gust-rated cantilever parasols', 'Motorized storm-resistant screens', 'Subterranean anchors'],
  },
  {
    id: 'cane-africa',
    number: '03',
    name: 'Cane Africa',
    category: 'Bespoke Woven Seating',
    website: 'https://www.caneafrica.co.za/',
    image: '/images/acoustic_privacy_booth.jpg',
    alt: 'Bespoke hospitality seating and woven furniture handcrafted for upscale restaurants',
    description:
      'Artisanal masters of woven natural cane, rattan, and synthetic wicker furniture reinforced with commercial steel frames for high-turnover dining resilience.',
    features: ['High-Martindale contract foams', 'UV & salt-stabilized synthetic weave', 'Dark-hours frame repair'],
  },
  {
    id: 'engineering',
    number: '04',
    name: 'AfriSMME Hospitality Engineering',
    category: 'Acoustics, Infrastructure & SLA',
    website: 'https://afrismme.com/',
    image: '/images/hero/hero-michelin-dining-room.jpg',
    alt: 'Luxury dining room with acoustic ceiling treatment and ambient architectural lighting',
    description:
      'The technical nerve center delivering NRC-certified acoustic damping, commercial kitchen extraction compliance, and our 24/7 rapid response mobile fleet.',
    features: ['NRC acoustic reverberation tuning', 'NFPA 96 & SANS 10400 certification', 'Sub-60min emergency fleet dispatch'],
  },
];

const EXECUTIVE_STANDARDS = [
  {
    title: 'Architectural Naval Brass Signage',
    category: 'EXTERIOR PRESTIGE',
    image: '/images/mockup_brass_signage.jpg',
    alt: 'AfriSMME Hospitality architectural etched brass signage on dark stone facade',
    description: 'Solid milled naval brass, hand-patinated to museum standard and sealed against coastal salt mist and urban oxidation.',
  },
  {
    title: 'Consolidated SLA Audit & Governance',
    category: 'SINGLE-LEDGER ACCOUNTABILITY',
    image: '/images/mockup_business_card.jpg',
    alt: 'Executive black and gold embossed AfriSMME Hospitality business cards and collateral',
    description: 'One dedicated Technical Account Director, single monthly consolidated billing, and certified compliance logbooks.',
  },
];

export function EcosystemSection({ onRequestQuote }: EcosystemSectionProps) {
  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Integrated Ecosystem"
          title="Four Specialist Divisions."
          highlightedTitle="One Master SLA."
          description="In traditional hospitality operations, multiple disconnected contractors create friction, finger-pointing, and runaway billing. AfriSMME converges South Africa's premier artisanal workshops and technical engineering divisions under a single accountable contract."
        />

        {/* 4 Specialist Operating Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DIVISIONS.map((div) => (
            <article
              key={div.id}
              className="group bg-charcoal-950/80 border border-charcoal-700/80 rounded-sm overflow-hidden flex flex-col justify-between hover:border-bronze-500/50 hover:shadow-elevated-dark transition-all duration-300"
            >
              {/* Image Pane */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-950">
                <Image
                  src={div.image}
                  alt={div.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-charcoal-950/90 border border-bronze-500/30 text-[10px] font-mono text-bronze-300 font-semibold">
                  DIVISION {div.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-400 block mb-1">
                    {div.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors mb-2.5">
                    {div.name}
                  </h3>
                  <p className="text-xs text-ivory-300/80 leading-relaxed font-normal mb-4">
                    {div.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-3 border-t border-charcoal-800/80 mb-5">
                    {div.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-ivory-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Portal Link */}
                <div className="pt-3 border-t border-charcoal-800">
                  <a
                    href={div.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-2 rounded bg-charcoal-900 border border-charcoal-700/80 hover:border-bronze-400 text-xs font-mono text-bronze-300 hover:text-ivory-50 transition-colors group/link"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3 h-3 text-bronze-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tangible Executive Standards & Craftsmanship */}
        <div className="p-6 sm:p-10 rounded-sm bg-charcoal-950 border border-charcoal-700/80 shadow-elevated-dark">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-charcoal-800 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-bronze-500/10 border border-bronze-500/30 text-[10px] font-mono text-bronze-300 font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                EXECUTIVE CRAFTSMANSHIP & GOVERNANCE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50">
                Tangible Physical Assets & Single-Contract Accountability
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-charcoal-900 border border-bronze-500/40 text-bronze-300 hover:bg-bronze-500 hover:text-charcoal-950 transition-colors text-xs font-mono font-semibold uppercase tracking-wider shrink-0 self-start lg:self-auto"
            >
              <span>Explore Full Company Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXECUTIVE_STANDARDS.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-5 items-start p-4 sm:p-5 rounded-sm bg-charcoal-900/60 border border-charcoal-800"
              >
                <div className="relative w-full sm:w-40 aspect-[4/3] rounded-sm overflow-hidden shrink-0 border border-charcoal-700">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-mono text-bronze-400 uppercase tracking-wider font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-ivory-50 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ivory-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>AfriSMME Executive Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
