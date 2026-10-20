'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Wrench,
  Compass,
  TrendingUp,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const BEFORE_AFTER_CASES = [
  {
    id: 'teak',
    title: 'Commercial Teak & Hardwood Tables',
    badge: 'Phased Batch Service • Food-Safe',
    beforeImg: '/images/brochure_showcase/teak_dining_before_luxury.jpg',
    beforeTag: 'Before • UV Sun-Bleached & Dried Patina',
    afterImg: '/images/brochure_showcase/teak_dining_after_luxury.jpg',
    afterTag: 'After • Deep Penetrating Danish Hardwax Oil',
    problem:
      'Severe UV bleaching, wine rings, and drying micro-cracks from sun and rain exposure degrade guest perception.',
    solution:
      'Multi-stage grain sanding, pore cleansing, and hand-rubbed food-safe zero-VOC natural hardwax oil that creates a water-beading satin shield.',
    turnaround: 'Executed via phased daytime batches & scheduled maintenance windows',
    savings: 'Saves 80% vs purchasing imported new teak furniture',
  },
  {
    id: 'wicker',
    title: 'Outdoor Wicker & Cane Structural Repair',
    badge: 'Artisanal Hand-Weaving',
    beforeImg: '/images/brochure_showcase/wicker_chair_before_luxury.jpg',
    beforeTag: 'Before • Snapped Weave & Frayed Cane',
    afterImg: '/images/brochure_showcase/wicker_chair_after_luxury.jpg',
    afterTag: 'After • Hand Re-Woven & Re-Tensioned',
    problem:
      'UV brittleness and heavy patron use snap synthetic and natural cane strands, exposing sharp internal aluminum frames.',
    solution:
      'Master female artisans in our Kew/Sandton workshop hand-weave matching commercial-grade cane, restoring full structural integrity.',
    turnaround: 'Collected & returned in phased batches so terrace capacity is preserved',
    savings: '75% replacement cost savings',
  },
  {
    id: 'floors',
    title: 'Dustless Hardwood Dining Floor Sanding',
    badge: 'Zero Dust Contamination',
    beforeImg: '/images/brochure_showcase/floor_sanding_before_luxury.jpg',
    beforeTag: 'Before • Scuffed Service Lanes & Worn Finish',
    afterImg: '/images/brochure_showcase/floor_sanding_after_luxury.jpg',
    afterTag: 'After • Dustless Satin Oak Parquet Shield',
    problem:
      'High-traffic service lanes, chair leg dragging, and heel scuffs wear away protective sealants down to discolored wood.',
    solution:
      'Planetary sanding machines connected to commercial HEPA dust extractors, followed by fast-curing commercial polyurethane.',
    turnaround: 'Completed during scheduled maintenance windows with zero dust contamination',
    savings: 'Restores venue grandeur at a fraction of replacement',
  },
  {
    id: 'banquette',
    title: 'Commercial Banquettes & Reupholstery',
    badge: 'Contract-Grade Durability',
    beforeImg: '/images/brochure_showcase/banquette_booth_before_luxury.jpg',
    beforeTag: 'Before • Collapsed Foam & Cracked Leather',
    afterImg: '/images/brochure_showcase/banquette_booth_after_luxury.jpg',
    afterTag: 'After • CMHR Memory Core & Nourished Saddle Leather',
    problem:
      'Collapsed foam cushions, broken seat springs, and scuffed leather reduce guest dwell time and comfort.',
    solution:
      'Full internal frame reinforcement, high-resilience memory foam, tensioned webbing, and spill-resistant commercial performance fabrics.',
    turnaround: 'Scheduled on-site leather nourishment or phased booth renewal',
    savings: 'Significantly extends dwell time and average table spend',
  },
  {
    id: 'cantilever',
    title: 'Commercial Cantilever Shade Systems',
    badge: '316 Marine Grade • 65 km/h Wind Rated',
    beforeImg: '/images/cantilevers/cantilever_engineering_detail.jpg',
    beforeTag: 'Engineering • 316 Stainless Winch & Offset Mast',
    afterImg: '/images/cantilevers/cantilever_umbrella_luxury.jpg',
    afterTag: 'Flagship Installation • 5-Star Ocean Terrace',
    problem:
      'Unshaded terraces and cheap market parasols collapse in sudden gusts, driving diners indoors and wiping out lucrative outdoor table turns.',
    solution:
      'Heavy-duty commercial cantilever systems featuring 360-degree rotating masts, Sunbrella UPF 50+ marine canvas, and concealed 2700K in-rib LED dining illumination.',
    turnaround: 'Precision turnkey ground anchor or heavyweight granite base installation',
    savings: '+35% to 50% increase in usable year-round terrace seating capacity',
  },
];

export default function BrochurePage() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-950 selection:bg-bronze-400 selection:text-charcoal-950">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-ivory-300 hover:text-bronze-400 transition-colors uppercase tracking-wider font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-charcoal-700">|</span>
          <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">
            Document 01 • Before &amp; After Brochure
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/PDFs/AfriSMME_Premium_Sales_Brochure.pdf"
            download
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-bronze-400 text-charcoal-950 hover:bg-bronze-300 transition-colors shadow-subtle-dark"
          >
            <Download className="w-3.5 h-3.5" />
            Download Brochure PDF
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-charcoal-800 text-warm-ivory hover:bg-charcoal-700 border border-charcoal-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save
          </button>
          <Link
            href="/corporate-profile"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-charcoal-900 text-bronze-400 hover:text-warm-ivory border border-bronze-500/30 transition-colors"
          >
            Corporate Profile
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/booklet"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-charcoal-900 text-bronze-400 hover:text-warm-ivory border border-bronze-500/30 transition-colors"
          >
            Support Booklet
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative border-b border-charcoal-800 bg-gradient-to-b from-charcoal-900 to-charcoal-950 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bronze-500/30 bg-bronze-500/10 text-bronze-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Official Sales Leave-Behind Document
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-warm-ivory tracking-tight max-w-3xl mb-4">
            Physical Facility &amp; Furniture Renewal
          </h1>

          <p className="text-base sm:text-lg text-charcoal-300 max-w-2xl leading-relaxed mb-8">
            High-traffic commercial dining takes an unrelenting physical toll on hardwood, wicker, and leather. AfriSMME Hub restores prime capacity through phased daytime batches and scheduled maintenance windows.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            <div className="bg-charcoal-900/80 border border-charcoal-800 p-3.5 rounded-sm">
              <div className="text-xl font-bold text-bronze-400">Phased Care</div>
              <div className="text-xs text-charcoal-400">Scheduled Maintenance Windows</div>
            </div>
            <div className="bg-charcoal-900/80 border border-charcoal-800 p-3.5 rounded-sm">
              <div className="text-xl font-bold text-emerald-400">Batch Rotation</div>
              <div className="text-xs text-charcoal-400">Kew Workshop &amp; On-Site</div>
            </div>
            <div className="bg-charcoal-900/80 border border-charcoal-800 p-3.5 rounded-sm">
              <div className="text-xl font-bold text-warm-ivory">Zero-VOC</div>
              <div className="text-xs text-charcoal-400">Food-Safe Cured Oils</div>
            </div>
            <div className="bg-charcoal-900/80 border border-charcoal-800 p-3.5 rounded-sm">
              <div className="text-xl font-bold text-bronze-400">45-Point</div>
              <div className="text-xs text-charcoal-400">Complimentary Audit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Before & After Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-700">
              Authentic Hospitality Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-950 mt-1">
              Realistic Commercial Wear vs. Master Renewal
            </h2>
            <p className="text-sm text-charcoal-700 max-w-xl mt-1.5">
              Authentic case studies of real South African restaurant tables, wicker chairs, and dining spaces rejuvenated to luxury hospitality standards.
            </p>
          </div>

          {/* Case Navigation Tabs */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-3 py-1.5 rounded-sm text-xs font-semibold transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-charcoal-900 text-bronze-300 font-bold shadow-sm border border-charcoal-900'
                    : 'bg-ivory-50 text-charcoal-800 hover:text-charcoal-950 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Card */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-charcoal-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bronze-400">
                Case Study 0{activeCaseIndex + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-warm-ivory mt-0.5">
                {activeCase.title}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {activeCase.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-charcoal-800">
            {/* Before Photo */}
            <div className="relative p-6 bg-charcoal-950 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-charcoal-800">
              <div className="relative w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-charcoal-800 bg-charcoal-900">
                <Image
                  src={activeCase.beforeImg}
                  alt={activeCase.beforeTag}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-950/90 text-red-300 border border-red-700/50 px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {activeCase.beforeTag}
                </div>
              </div>
            </div>

            {/* After Photo */}
            <div className="relative p-6 bg-charcoal-900 flex flex-col items-center justify-center">
              <div className="relative w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-charcoal-800 bg-charcoal-950">
                <Image
                  src={activeCase.afterImg}
                  alt={activeCase.afterTag}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 border border-emerald-600/50 px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {activeCase.afterTag}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-charcoal-900/60">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                The Commercial Wear
              </div>
              <p className="text-sm text-charcoal-200 leading-relaxed">{activeCase.problem}</p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-bronze-400 mb-1">
                The Master Renewal
              </div>
              <p className="text-sm text-charcoal-200 leading-relaxed">{activeCase.solution}</p>
            </div>
            <div className="bg-charcoal-950 p-4 rounded-sm border border-charcoal-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Turnaround &amp; Value
                </div>
                <div className="text-xs text-charcoal-300 mb-2">⏱ {activeCase.turnaround}</div>
              </div>
              <div className="text-xs font-semibold text-warm-ivory bg-charcoal-900 p-2 rounded-sm border border-charcoal-800">
                💰 {activeCase.savings}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails of all cases */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`p-3 rounded-sm border text-left transition-all ${
                activeCaseIndex === idx
                  ? 'bg-charcoal-900 border-bronze-400 shadow-lg text-warm-ivory'
                  : 'bg-ivory-50 border-ivory-300 hover:border-bronze-500 text-charcoal-950'
              }`}
            >
              <div className={`text-[11px] font-bold uppercase ${activeCaseIndex === idx ? 'text-bronze-400' : 'text-bronze-700'}`}>Case 0{idx + 1}</div>
              <div className={`text-xs font-semibold truncate mt-0.5 ${activeCaseIndex === idx ? 'text-warm-ivory' : 'text-charcoal-950'}`}>{item.title}</div>
              <div className={`text-[11px] truncate mt-0.5 ${activeCaseIndex === idx ? 'text-charcoal-300' : 'text-charcoal-700'}`}>{item.badge}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Commercial Cantilever & Architectural Shade Systems Showcase */}
      <div className="border-t border-charcoal-800 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bronze-500/30 bg-bronze-500/10 text-bronze-400 text-xs font-semibold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Exterior Architecture • Afrishades
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-warm-ivory">
                Commercial Cantilever Umbrellas &amp; Weather Systems
              </h2>
              <p className="text-sm text-charcoal-300 max-w-2xl mt-2 leading-relaxed">
                Engineered for five-star hotels, rooftop lounges, and prestigious Cape wine estates. Our heavy-duty cantilever systems withstand up to 65 km/h gusts and intense high-UV exposure, converting sun-baked patios into high-yielding all-weather dining rooms.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-bronze-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              UPF 50+ Sunbrella • 316 Stainless Rigging
            </div>
          </div>

          {/* Primary 4-Feature Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1: Oceanfront Hotel Pool & Dining Terrace */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm overflow-hidden group hover:border-bronze-500/50 transition-all shadow-xl">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-950">
                <Image
                  src="/images/cantilevers/cantilever_umbrella_luxury.jpg"
                  alt="Flagship Commercial Cantilever Terrace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-charcoal-950/85 backdrop-blur-sm border border-bronze-500/40 text-bronze-400 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Flagship Installation
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-warm-ivory mb-1">
                  5-Star Oceanfront Hotel Pool &amp; Dining Terrace
                </h3>
                <p className="text-xs text-charcoal-300 leading-relaxed mb-3">
                  Dual 4.0m square charcoal canopies with offset bronze aluminum masts shading solid teak dining suites and woven armchairs.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-charcoal-800 text-[11px] text-charcoal-400">
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">360° Rotating Mast</span>
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">Sunbrella Canvas</span>
                  <span className="text-bronze-400 font-semibold">+45% Usable Covers</span>
                </div>
              </div>
            </div>

            {/* Card 2: Twilight Terrace with Integrated LED Ribs */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm overflow-hidden group hover:border-bronze-500/50 transition-all shadow-xl">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-950">
                <Image
                  src="/images/cantilevers/cantilever_evening_glow.jpg"
                  alt="Twilight Rooftop Dining with LED Cantilever Umbrellas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-amber-950/85 backdrop-blur-sm border border-amber-500/40 text-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  All-Day &amp; Evening Ambience
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-warm-ivory mb-1">
                  Warm Ambient Dining with Concealed 2700K LED Ribs
                </h3>
                <p className="text-xs text-charcoal-300 leading-relaxed mb-3">
                  Integrated low-voltage warm LED light strips recessed into structural ribs provide inviting ambient illumination across your terrace.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-charcoal-800 text-[11px] text-charcoal-400">
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">Remote Dimmable</span>
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">Concealed Wiring</span>
                  <span className="text-bronze-400 font-semibold">Zero Floor Trip Hazard</span>
                </div>
              </div>
            </div>

            {/* Card 3: Wine Estate Pool Deck & Loungers */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm overflow-hidden group hover:border-bronze-500/50 transition-all shadow-xl">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-950">
                <Image
                  src="/images/cantilevers/cantilever_poolside_resort.jpg"
                  alt="Cape Winelands Resort Poolside Cantilever Umbrellas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-charcoal-950/85 backdrop-blur-sm border border-bronze-500/40 text-bronze-400 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Heritage Wine Estate
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-warm-ivory mb-1">
                  Cape Winelands Resort Poolside Deck
                </h3>
                <p className="text-xs text-charcoal-300 leading-relaxed mb-3">
                  Architectural ivory canvas cantilevers shading luxury teak pool loungers overlooking vineyard valleys and mountain ranges.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-charcoal-800 text-[11px] text-charcoal-400">
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">UPF 50+ Certified</span>
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">Marine Finish</span>
                  <span className="text-bronze-400 font-semibold">Resort Durability</span>
                </div>
              </div>
            </div>

            {/* Card 4: Precision 316 Stainless Rigging & Engineering */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm overflow-hidden group hover:border-bronze-500/50 transition-all shadow-xl">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-950">
                <Image
                  src="/images/cantilevers/cantilever_engineering_detail.jpg"
                  alt="Commercial Cantilever 316 Stainless Rigging and Winch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-charcoal-950/85 backdrop-blur-sm border border-bronze-500/40 text-bronze-400 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Precision Engineering
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-warm-ivory mb-1">
                  316 Marine Stainless Winch &amp; Granite Anchor
                </h3>
                <p className="text-xs text-charcoal-300 leading-relaxed mb-3">
                  Multi-gear internal winch mechanism with 8-position tilt articulation, industrial anodized alloy mast, and 220kg granite paver base plate.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-charcoal-800 text-[11px] text-charcoal-400">
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">65 km/h Wind Tested</span>
                  <span className="bg-charcoal-950 px-2 py-0.5 rounded border border-charcoal-800">Anti-Corrosion 316</span>
                  <span className="text-bronze-400 font-semibold">5-Year Structural Frame Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tertiary Real Photography Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-44 rounded-sm overflow-hidden border border-charcoal-800 group">
              <Image
                src="/images/cantilevers/unsplash_luxury_patio_dining.jpg"
                alt="Upscale Patio Dining Shade"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-warm-ivory">Upscale Terrace Dining Ambience</span>
              </div>
            </div>
            <div className="relative h-44 rounded-sm overflow-hidden border border-charcoal-800 group">
              <Image
                src="/images/cantilevers/unsplash_terrace_umbrellas.jpg"
                alt="All-Weather Terrace Umbrellas"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-warm-ivory">High-Capacity Outdoor Parasol Array</span>
              </div>
            </div>
            <div className="relative h-44 rounded-sm overflow-hidden border border-charcoal-800 group">
              <Image
                src="/images/cantilevers/unsplash_resort_pool_patio.jpg"
                alt="Resort Poolside Patio Loungers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-warm-ivory">Luxury Hospitality Poolside Cabana Shading</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 6 Pillars Breakdown */}
      <div className="border-t border-ivory-300 bg-ivory-200 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-700">
              Integrated Hospitality Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal-950 mt-1">
              Six Pillars of Operational Support
            </h2>
            <p className="text-sm text-charcoal-700 mt-2">
              Beyond furniture renewal, AfriSMME Hub acts as your strategic facilities partner across exterior, interior, and technical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">ATTRACT</h4>
                  <p className="text-xs text-charcoal-400">Exterior • Shade • Signage</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• Commercial cantilever umbrellas (Afrishades Sunbrella canvas)</li>
                <li>• Motorized &amp; glass windbreaks extending terrace seasons</li>
                <li>• Milled solid brass &amp; patinated bronze facade signage</li>
                <li>• Warm ambient entrance and patio illumination</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Partner: <strong className="text-bronze-400">Afrishades &amp; Cane Africa</strong>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">ENHANCE</h4>
                  <p className="text-xs text-charcoal-400">Interiors • Acoustics • Booths</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• Acoustic balancing reducing painful 80dB din to 62dB</li>
                <li>• Handcrafted banquette seating &amp; privacy dining booths</li>
                <li>• Architectural timber screening &amp; spatial zoning</li>
                <li>• Seat-to-table pitch ergonomics improving dwell time</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Standard: <strong className="text-bronze-400">&lt;0.8s Reverberation Time</strong>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">RESTORE</h4>
                  <p className="text-xs text-charcoal-400">Master Timber • Leather • Cane</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• Phased batch &amp; scheduled table refinishing</li>
                <li>• 100% Food-safe, zero-VOC Danish &amp; hardwax oils</li>
                <li>• On-site leather conditioning, color matching &amp; stain barriers</li>
                <li>• Cane Africa master female artisans hand-weaving wicker</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Specialist: <strong className="text-bronze-400">The Wood Doctor</strong>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">MAINTAIN</h4>
                  <p className="text-xs text-charcoal-400">Kitchen Hoods • Cold Chain • Repairs</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• Kitchen hood degreasing &amp; impeller balancing (SANS 1850)</li>
                <li>• Cold-room &amp; refrigeration coil preventative checks</li>
                <li>• Rapid response technical fleet dispatched across JHB/Sandton</li>
                <li>• Certified maintenance logs for insurance underwriters</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Service: <strong className="text-bronze-400">Scheduled Care &amp; Rapid Callout</strong>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  05
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">PROTECT</h4>
                  <p className="text-xs text-charcoal-400">OHS • Health Readiness • Uniforms</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• Municipal health inspection pre-audits &amp; hygiene registers</li>
                <li>• Kitchen fire suppression checks &amp; emergency exit readiness</li>
                <li>• Cross-contamination zoning for prep lines &amp; food stations</li>
                <li>• Bespoke tailored uniforms with embroidered crests</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Standard: <strong className="text-bronze-400">Municipal &amp; OHS Inspection Ready</strong>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-sm hover:border-bronze-400/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-bronze-400/10 border border-bronze-400/30 text-bronze-400 flex items-center justify-center font-bold text-sm">
                  06
                </div>
                <div>
                  <h4 className="font-bold text-warm-ivory text-base">GROW</h4>
                  <p className="text-xs text-charcoal-400">Digital • Menus • Tech Yield</p>
                </div>
              </div>
              <ul className="text-xs text-charcoal-300 space-y-2 mb-4">
                <li>• High-conversion websites with zero-commission bookings</li>
                <li>• Dynamic QR digital menus with live allergen filtering</li>
                <li>• Google Maps local search dominance &amp; review shields</li>
                <li>• Floorplan yield strategies maximizing RevPASH</li>
              </ul>
              <div className="text-[11px] text-charcoal-400 border-t border-charcoal-900 pt-3">
                Partner: <strong className="text-bronze-400">Scinovalities Technology</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complimentary Audit Voucher & Leave-Behind Contact */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="border-2 border-dashed border-bronze-400/60 bg-charcoal-900/90 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-bronze-400/5 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-4">
            Complimentary Hospitality Voucher
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-ivory mb-3">
            Request Your 360° Physical Facility Audit
          </h3>

          <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl leading-relaxed mb-6">
            A senior AfriSMME facility specialist will conduct a complimentary, no-obligation 45-point inspection of your dining furniture, patio shading, kitchen extraction hoods, acoustics, and compliance registers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Dining Timber &amp; Surface Wear Analysis
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Acoustic Din &amp; Reverberation Testing
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Terrace Shade &amp; Umbrella Wind Resilience
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Kitchen Extraction &amp; Grease Risk Review
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Banquette Spring &amp; Upholstery Health
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Municipal Health Safety Register
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-charcoal-800">
            <div className="text-xs text-charcoal-400 italic">
              * Completed in 45 minutes between lunch and dinner. Leaves zero disruption to your service.
            </div>
            <a
              href="mailto:info@afrismmehub.co.za?subject=Request%20Complimentary%20Hospitality%20Audit"
              className="px-6 py-2.5 bg-bronze-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-bronze-300 transition-colors shadow-lg"
            >
              Book Complimentary Audit
            </a>
          </div>
        </div>

        {/* Corporate Contact Details */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-sm p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-bronze-400 font-bold mb-1">Headquarters</div>
            <h4 className="text-base font-bold text-warm-ivory mb-2">AfriSMME Hub</h4>
            <p className="text-xs text-charcoal-300 leading-relaxed">
              146 10th Road Kew, Sandton, 2090<br />
              Johannesburg, South Africa
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-bronze-400 font-bold mb-1">Direct Lines</div>
            <div className="text-xs text-charcoal-300 space-y-1">
              <div>Office: <strong className="text-warm-ivory">011 346 5018</strong></div>
              <div>Priority WhatsApp: <strong className="text-bronze-400">083 432 8394</strong></div>
              <div>Email: <strong className="text-warm-ivory">info@afrismmehub.co.za</strong></div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-bronze-400 font-bold mb-1">Community Impact</div>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                Uplifting communities through accredited artisan training, female weaver employment, and ethical domestic production.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-charcoal-800 text-[11px] text-charcoal-400">
              B-BBEE Level 1 Contributor • Certified Hospitality Care
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
