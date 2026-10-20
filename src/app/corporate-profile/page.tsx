'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  Sparkles,
  Compass,
  Wrench,
  ShieldCheck,
  ShieldAlert,
  TrendingUp,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Layers,
  Cpu,
} from 'lucide-react';

interface ProfileSlide {
  id: number;
  title: string;
  category: string;
  tag: string;
  dark?: boolean;
  content: React.ReactNode;
}

const PROFILE_PAGES: ProfileSlide[] = [
  {
    id: 1,
    title: 'Executive Cover',
    category: 'Title & Positioning',
    tag: 'Cover • 2026/2027',
    dark: true,
    content: (
      <div className="flex flex-col justify-between h-full p-4 sm:p-8">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-400">
              AFRISMME HUB
            </span>
            <div className="text-xs uppercase tracking-wider text-charcoal-400 mt-1">
              HOSPITALITY SUPPORT ECOSYSTEM
            </div>
          </div>
          <span className="text-[11px] font-mono border border-bronze-500/40 px-3 py-1 text-bronze-300 rounded-sm">
            DOCUMENT A • CORPORATE PROFILE
          </span>
        </div>

        <div className="relative h-64 sm:h-80 my-6 rounded-sm overflow-hidden border border-bronze-500/30 shadow-2xl">
          <Image
            src="/images/ai_generated/01_luxury_restaurant_terrace.jpg"
            alt="Luxury Camps Bay Restaurant Terrace"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-3 bg-charcoal-950/85 backdrop-blur-sm text-[11px] text-charcoal-300 font-mono flex justify-between">
            <span>REPRESENTATIVE VISUALISATION • CAMPS BAY COASTAL TERRACE</span>
            <span>PHASED &amp; SCHEDULED EXECUTION</span>
          </div>
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest text-bronze-400 bg-bronze-400/10 border border-bronze-400/30 mb-3">
            IDENTIFY • SOLVE • RESTORE • MAINTAIN • GROW
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-warm-ivory leading-tight mb-3">
            One Coordinated Partner for the Hospitality Environment.
          </h1>
          <p className="text-sm text-charcoal-300 max-w-2xl leading-relaxed">
            Turnkey architectural enhancement, commercial shade, acoustic comfort, bespoke artisanal furniture restoration, preventative maintenance, compliance, and digital hospitality technology.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Executive Statement',
    category: 'Executive Foreword',
    tag: 'Strategic Mandate',
    dark: false,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Executive Statement</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1 mb-4">
            The Modern Hospitality Reality
          </h2>
          <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
            Hospitality is not simply a building, a dining room, or a menu. It is the synchronized expression of architectural space, physical comfort, surface condition, acoustic intimacy, air hygiene, operational continuity, and digital relevance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-xs text-charcoal-600 leading-relaxed">
              <p>
                In premier hotels, high-volume restaurants, luxury safari lodges, and historic wine estates across Southern Africa, executive general managers face relentless physical degradation. A single failing condenser or an uncomfortably reverberant dining room directly erodes covers, guest satisfaction, and bottom-line revenue.
              </p>
              <p>
                Historically, maintaining these complex environments forced operators to manage eight to twelve disconnected single-trade contractors. AfriSMME Hub replaces vendor fragmentation with one accountable corporate ecosystem.
              </p>
              <div className="p-3 bg-bronze-50 border-l-4 border-bronze-500 rounded-r-sm text-bronze-900 font-medium">
                “Coordinate seamlessly around the venue’s daytime schedule, executing in phased zones and workshop batches so quality and trading continuity go hand in hand.”
              </div>
            </div>
            <div className="relative h-60 rounded-sm overflow-hidden border border-stone-200">
              <Image
                src="/images/ai_generated/03_five_star_hotel_terrace.jpg"
                alt="Five Star Hotel Outdoor Terrace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-200 mt-4 text-center">
          <div className="bg-white p-2.5 rounded border border-stone-200">
            <div className="text-lg font-bold text-bronze-600">6 Pillars</div>
            <div className="text-[10px] text-charcoal-500 uppercase">Turnkey Coverage</div>
          </div>
          <div className="bg-white p-2.5 rounded border border-stone-200">
            <div className="text-lg font-bold text-bronze-600">Phased</div>
            <div className="text-[10px] text-charcoal-500 uppercase">Daytime &amp; Batch Delivery</div>
          </div>
          <div className="bg-white p-2.5 rounded border border-stone-200">
            <div className="text-lg font-bold text-bronze-600">1 SLA</div>
            <div className="text-[10px] text-charcoal-500 uppercase">Single Accountability</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'The Coordinated Ecosystem',
    category: 'Architecture',
    tag: 'Ecosystem Architecture',
    dark: true,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-400">
            CENTRAL GOVERNANCE &amp; SPECIALIST DIVISIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-ivory mt-1 mb-4">
            The Hospitality Support Ecosystem
          </h2>
          <div className="relative h-72 sm:h-80 w-full rounded-sm overflow-hidden border border-bronze-500/30 bg-charcoal-950 my-4">
            <Image
              src="/images/diagrams/diagram_01_ecosystem.svg"
              alt="AfriSMME Support Ecosystem Diagram"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-charcoal-300">
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">The Wood Doctor</strong>
            Scheduled solid hardwood table refinishing &amp; dustless floor sanding.
          </div>
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">AfriShades</strong>
            Wind-rated commercial cantilever umbrellas &amp; architectural signage.
          </div>
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">Cane Africa</strong>
            Handcrafted natural cane &amp; synthetic wicker structural re-weaving.
          </div>
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">Textile Doctor</strong>
            Contract leather rejuvenation &amp; bespoke fluted banquette booths.
          </div>
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">AfriHealth &amp; Safety</strong>
            SANS 10400 fire safety, municipal hygiene readiness &amp; uniforms.
          </div>
          <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded-sm">
            <strong className="text-bronze-400 block mb-0.5">Scinovalities</strong>
            Smart QR menus, AI guest concierges &amp; capacity yield modeling.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'The Six Pillars Overview',
    category: 'Capability Architecture',
    tag: '6 Support Pillars',
    dark: false,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Six Core Pillars</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1 mb-4">
            Total Hospitality Environment Coverage
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">01 / ATTRACT</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Exterior &amp; Shade</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Commercial cantilever umbrellas, windbreaks, and architectural brass entry signage.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">02 / ENHANCE</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Acoustics &amp; Banquettes</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Discrete sound absorption panels, custom leather booths, and spatial dining zoning.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">03 / RESTORE</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Furniture &amp; Timber</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Phased food-safe zero-VOC oil table renewal, cane weaving, and contract upholstery.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">04 / MAINTAIN</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Facilities &amp; Fleet</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Kitchen extraction degreasing, cold-chain HVAC audits, and rapid technical dispatch.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">05 / PROTECT</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Safety &amp; Compliance</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                SANS 10400 fire egress, gas isolation checks, HACCP food hygiene, and staff apparel.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded border border-stone-200">
              <span className="text-xs font-bold text-bronze-600">06 / GROW</span>
              <h4 className="text-sm font-bold text-charcoal-900 mt-1 mb-1">Digital, AI &amp; Yield</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Interactive QR menus, AI automated booking concierges, local SEO, and seating yield.
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 bg-stone-100 rounded border border-stone-200 mt-4 text-xs text-charcoal-700">
          <strong>Single-Source Governance:</strong> All six pillars are delivered under one master SLA agreement, backed by R20M Commercial General Liability insurance.
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Phased & Scheduled Operating Model',
    category: 'Operations',
    tag: 'Daytime & Batch Execution',
    dark: true,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-400">
            DAYTIME &amp; SCHEDULED MAINTENANCE WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-ivory mt-1 mb-4">
            Coordinated Zonal &amp; Workshop Execution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-xs text-charcoal-300 leading-relaxed">
              <div className="p-2.5 bg-charcoal-900 border border-charcoal-800 rounded">
                <strong className="text-bronze-400">Step 01 — On-Site Diagnostic &amp; Zone Planning:</strong> We coordinate with your general manager to schedule work during quieter daytime periods or planned maintenance slots.
              </div>
              <div className="p-2.5 bg-charcoal-900 border border-charcoal-800 rounded">
                <strong className="text-bronze-400">Step 02 — Dustless HEPA Sanding &amp; Workshop Batches:</strong> Furniture is restored in phased batches at our Kew workshop or on-site with HEPA dust containment.
              </div>
              <div className="p-2.5 bg-charcoal-900 border border-charcoal-800 rounded">
                <strong className="text-bronze-400">Step 03 — Zero-VOC Hardwax Oil Application:</strong> Natural food-safe plant oils are buffed into timber grain with zero harsh fumes.
              </div>
              <div className="p-2.5 bg-charcoal-900 border border-charcoal-800 rounded">
                <strong className="text-emerald-400">Step 04 — Ready-for-Service Handover:</strong> Odor-free, dust-free quality sign-off with your duty manager upon completion of each phase.
              </div>
            </div>
            <div className="relative h-64 rounded-sm overflow-hidden border border-bronze-500/30">
              <Image
                src="/images/ai_generated/05_furniture_restoration_workshop.jpg"
                alt="Master Artisan Restoring Furniture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 pt-4 border-t border-charcoal-800 text-center">
          <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
            <div className="text-base font-bold text-bronze-400">Phased</div>
            <div className="text-[10px] text-charcoal-400">Zonal Delivery</div>
          </div>
          <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
            <div className="text-base font-bold text-bronze-400">0.0 ppm</div>
            <div className="text-[10px] text-charcoal-400">VOC Odor</div>
          </div>
          <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
            <div className="text-base font-bold text-bronze-400">99.97%</div>
            <div className="text-[10px] text-charcoal-400">Dust Captured</div>
          </div>
          <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
            <div className="text-base font-bold text-emerald-400">100%</div>
            <div className="text-[10px] text-charcoal-400">Service Ready</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'The Venue Assessment Protocol',
    category: 'Consulting',
    tag: '10-Point Audit',
    dark: false,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Consultative Diagnostic</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1 mb-4">
            The 10-Point Venue Diagnostic Protocol
          </h2>
          <div className="relative h-56 w-full rounded border border-stone-200 bg-charcoal-950 my-3 overflow-hidden">
            <Image
              src="/images/diagrams/diagram_02_cycle.svg"
              alt="The Venue Improvement Cycle"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-charcoal-700 mt-3">
            <div className="bg-white p-2.5 rounded border border-stone-200">
              <strong className="text-red-700 block text-[11px]">P1: Critical</strong>
              Gas leaks, extraction fire risks, and compliance shutdowns.
            </div>
            <div className="bg-white p-2.5 rounded border border-stone-200">
              <strong className="text-orange-700 block text-[11px]">P2: High Impact</strong>
              Terrace wind shading &amp; dining room acoustic echo.
            </div>
            <div className="bg-white p-2.5 rounded border border-stone-200">
              <strong className="text-amber-700 block text-[11px]">P3: Improvement</strong>
              Tabletop oil refinishing, cane re-weaving, and booth leather.
            </div>
            <div className="bg-white p-2.5 rounded border border-stone-200">
              <strong className="text-emerald-700 block text-[11px]">P4: Optimisation</strong>
              AI guest concierges, QR smart menus, and predictive care.
            </div>
          </div>
        </div>
        <div className="p-3 bg-stone-100 rounded border border-stone-200 mt-3 text-xs text-charcoal-700">
          <strong>90-Minute Audit Turnaround:</strong> Our technical team conducts an on-site audit and delivers a fully costed, prioritized executive proposal within 48 hours.
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Executive Service Matrix',
    category: 'Commercial Benchmark',
    tag: 'ROI & Outcomes',
    dark: false,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Strategic Value</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1 mb-3">
            Executive Service &amp; Commercial Outcome Matrix
          </h2>
          <div className="overflow-x-auto border border-stone-200 rounded">
            <table className="w-full text-left text-[11px] text-charcoal-700">
              <thead className="bg-charcoal-950 text-bronze-400 uppercase text-[10px] font-mono">
                <tr>
                  <th className="p-2.5">Venue Area</th>
                  <th className="p-2.5">Operational Problem</th>
                  <th className="p-2.5">AfriSMME Intervention</th>
                  <th className="p-2.5">Commercial Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-2 font-bold">Outdoor Terrace</td>
                  <td className="p-2">Wind, heat, rain leave seats empty</td>
                  <td className="p-2">Heavy-duty commercial cantilevers</td>
                  <td className="p-2 font-semibold text-emerald-800">+35% to 50% cover yield</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Dining Tables</td>
                  <td className="p-2">Scratches, heat rings, wine stains</td>
                  <td className="p-2">Phased zero-VOC hardwax oil</td>
                  <td className="p-2 font-semibold text-emerald-800">80% CapEx savings vs new</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Room Acoustics</td>
                  <td className="p-2">Deafening echo; shouting diners</td>
                  <td className="p-2">Discrete NRC &gt; 0.85 timber panels</td>
                  <td className="p-2 font-semibold text-emerald-800">+25 min dwell; higher wine spend</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Kitchen Hoods</td>
                  <td className="p-2">Grease buildup, smoke, fire hazard</td>
                  <td className="p-2">NFPA 96 scheduled degreasing</td>
                  <td className="p-2 font-semibold text-emerald-800">100% fire audit compliance</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Digital Menus</td>
                  <td className="p-2">Clunky PDFs, static prices</td>
                  <td className="p-2">Interactive QR menus &amp; wine pairing</td>
                  <td className="p-2 font-semibold text-emerald-800">+18% beverage conversion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-3 bg-bronze-50 border-l-4 border-bronze-500 rounded-r-sm text-xs text-bronze-900 mt-4">
          <strong>The Executive Bottom Line:</strong> Preserve capital, protect venue asset value, and focus your management team 100% on guest hospitality.
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Executive Onboarding & Contact',
    category: 'Engagement',
    tag: 'Next Steps',
    dark: true,
    content: (
      <div className="p-4 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-400">
            INITIATE PARTNERSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-ivory mt-1 mb-4">
            Schedule Your On-Site Venue Assessment
          </h2>
          <p className="text-sm text-charcoal-300 max-w-2xl leading-relaxed mb-6">
            Our technical directors evaluate your physical space, dining acoustics, terrace shading, kitchen ventilation, and digital presence—delivering a prioritized roadmap within 48 hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-charcoal-900 border border-charcoal-800 p-4 rounded-sm">
              <strong className="text-bronze-400 block text-xs uppercase tracking-wider mb-2">
                Headquarters &amp; Central Workshops
              </strong>
              <div className="text-xs text-charcoal-300 space-y-1.5 font-mono">
                <div>AfriSMME Hub (Pty) Ltd</div>
                <div>146 10th Road, Kew, Sandton, Johannesburg</div>
                <div>Office: +27 (0)11 346 5018</div>
                <div>Mobile / WhatsApp: +27 (0)83 432 8394</div>
                <div>Email: info@hospitalitysupport.co.za</div>
              </div>
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-4 rounded-sm flex flex-col justify-between">
              <div>
                <strong className="text-bronze-400 block text-xs uppercase tracking-wider mb-2">
                  Official Digital Portal
                </strong>
                <p className="text-xs text-charcoal-400 mb-3">
                  Access our interactive audit tool, explore high-resolution case histories, or book a priority maintenance or restoration dispatch:
                </p>
              </div>
              <a
                href="https://www.hospitalitysupport.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 bg-bronze-500 hover:bg-bronze-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                www.hospitalitysupport.co.za
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 border-t border-charcoal-800 text-xs text-charcoal-500 font-mono">
          AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM • CONFIDENTIAL 2026/2027 SPECIFICATION
        </div>
      </div>
    ),
  },
];

export default function CorporateProfilePage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = PROFILE_PAGES[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < PROFILE_PAGES.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-ivory-200 text-charcoal-950 selection:bg-bronze-400 selection:text-charcoal-950">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-ivory-300 hover:text-bronze-400 transition-colors uppercase tracking-wider font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-charcoal-700">|</span>
          <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">
            Document A • Corporate Company Profile
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/PDFs/AfriSMME_Corporate_Profile_Master.pdf"
            download
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-bronze-400 text-charcoal-950 hover:bg-bronze-300 transition-colors shadow-subtle-dark"
          >
            <Download className="w-3.5 h-3.5" />
            Download Profile PDF (22 Pages)
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-charcoal-800 text-warm-ivory hover:bg-charcoal-700 border border-charcoal-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
          <Link
            href="/brochure"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-charcoal-900 text-bronze-400 hover:text-warm-ivory border border-bronze-500/30 transition-colors"
          >
            Sales Brochure
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

      {/* Main Presentation Stage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center">
        {/* Slide Canvas */}
        <div
          className={`w-full rounded-sm border shadow-2xl transition-all duration-300 min-h-[620px] flex flex-col justify-between ${
            slide.dark
              ? 'bg-charcoal-900 border-charcoal-800 text-warm-ivory'
              : 'bg-[#FAF8F5] border-stone-200 text-charcoal-950'
          }`}
        >
          {slide.content}
        </div>

        {/* Presenter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-charcoal-900 border border-charcoal-800 p-4 rounded-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2 rounded bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-warm-ivory"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-bronze-400 px-3">
              Section {currentSlideIndex + 1} of {PROFILE_PAGES.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === PROFILE_PAGES.length - 1}
              className="p-2 rounded bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-warm-ivory"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
            {PROFILE_PAGES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? 'w-8 bg-bronze-400'
                    : 'w-2 bg-charcoal-700 hover:bg-charcoal-600'
                }`}
                title={s.title}
              />
            ))}
          </div>

          <div className="text-xs text-charcoal-400">
            {slide.title}
          </div>
        </div>
      </div>
    </div>
  );
}
