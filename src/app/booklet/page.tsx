'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
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
} from 'lucide-react';

const BOOKLET_SLIDES = [
  {
    id: 1,
    title: 'Executive Cover',
    category: 'Title & Positioning',
    heading: 'Hospitality Infrastructure, Craftsmanship & Operational Resilience',
    sub: 'An integrated corporate ecosystem delivering physical facility restoration, commercial terrace architecture, acoustic dining comfort, and preventative maintenance for premier destinations.',
    tag: 'Cover • 2026 Edition',
    dark: true,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        <div>
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest text-bronze-300 bg-bronze-400/15 border border-bronze-400/40 mb-4">
            Field Presentation Deck &amp; Corporate Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            Preserving Prime Venue Capacity with Master Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-ivory-100 font-medium leading-relaxed mb-6">
            AfriSMME Hub unifies master artisanal woodcraft, commercial terrace architecture, acoustic dining comfort, and kitchen technical maintenance under one single corporate standard.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-charcoal-950 border border-charcoal-700 p-3.5 rounded-sm">
              <div className="text-xl font-extrabold text-bronze-300">Phased</div>
              <div className="text-xs sm:text-sm font-semibold text-ivory-200">Daytime Care</div>
            </div>
            <div className="bg-charcoal-950 border border-charcoal-700 p-3.5 rounded-sm">
              <div className="text-xl font-extrabold text-emerald-400">6 Pillars</div>
              <div className="text-xs sm:text-sm font-semibold text-ivory-200">Turnkey Care</div>
            </div>
            <div className="bg-charcoal-950 border border-charcoal-700 p-3.5 rounded-sm">
              <div className="text-xl font-extrabold text-white">Zero-VOC</div>
              <div className="text-xs sm:text-sm font-semibold text-ivory-200">Food-Safe Cured</div>
            </div>
          </div>
        </div>
        <div className="relative h-80 sm:h-96 rounded-sm overflow-hidden border border-bronze-400/40 shadow-2xl">
          <Image
            src="/real_showcase/luxury_sunlit_restaurant_terrace.jpg"
            alt="Premier Dining Terrace"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/80 to-transparent flex justify-between items-end">
            <div>
              <div className="text-base font-extrabold text-white">Johannesburg Headquarters &amp; Workshops</div>
              <div className="text-xs sm:text-sm font-medium text-ivory-200">77 Wilmington Crescent, Lyndhurst, Johannesburg • Servicing Premier Venues</div>
            </div>
            <span className="text-xs sm:text-sm font-extrabold text-bronze-300 border border-bronze-400/50 px-2.5 py-1 rounded-sm">
              2026 EDITION
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'The Operational Dilemma',
    category: 'Strategic Context',
    heading: 'The Hidden Revenue Toll of High-Traffic Facility Wear',
    sub: 'Commercial hospitality operations endure relentless physical wear. Empty terrace tables, echoing dining rooms, and equipment breakdowns directly bleed revenue.',
    tag: 'Problem & Opportunity',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-stretch">
        <div className="bg-white border-2 border-ivory-300 p-6 rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-3">☀️</div>
            <h4 className="text-lg font-extrabold text-charcoal-950 mb-2">Empty Terrace Capacity</h4>
            <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
              Wind, harsh afternoon sun, and unpredictable weather force guests indoors, forfeiting 35% to 50% of peak dining covers on prime outdoor patios.
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3.5 text-xs sm:text-sm font-medium text-amber-950 rounded-r-sm">
            <strong className="font-extrabold">Lost Yield:</strong> R25,000+ per weekend in abandoned terrace covers.
          </div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-6 rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-3">🔊</div>
            <h4 className="text-lg font-extrabold text-charcoal-950 mb-2">80dB+ Dining Room Din</h4>
            <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
              Hard concrete and glass reflect noise, creating painful dining din where guests shout across tables. This acoustic fatigue cuts dwell time and lowers wine orders.
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3.5 text-xs sm:text-sm font-medium text-amber-950 rounded-r-sm">
            <strong className="font-extrabold">Acoustic Impact:</strong> 22% drop in dessert, coffee, and digestif spend.
          </div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-6 rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-3">⚠️</div>
            <h4 className="text-lg font-extrabold text-charcoal-950 mb-2">Downtime Friction &amp; Risk</h4>
            <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
              Standard contractors demand daytime closures and leave toxic lacquer odors. Grease buildup in unmaintained kitchen extraction risks catastrophic fire and health fines.
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3.5 text-xs sm:text-sm font-medium text-amber-950 rounded-r-sm">
            <strong className="font-extrabold">Operating Danger:</strong> Municipal inspection audits and insurance invalidation.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'The 6-Pillar Ecosystem',
    category: 'Architecture',
    heading: 'The Integrated Six-Pillar Support Ecosystem',
    sub: 'A single strategic partner managing exterior, interior, restoration, facilities maintenance, and operational technology.',
    tag: 'Ecosystem Matrix',
    dark: true,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">01 / ATTRACT</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">Exterior &amp; Shade</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Cantilever umbrellas, all-weather windbreaks, solid brass signage, and entrance lighting.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Partner: Afrishades</span>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">02 / ENHANCE</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">Acoustics &amp; Booths</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Concealed sound absorption, bespoke banquette booths, and intimate spatial zoning.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Standard: &lt;0.8s Reverberation</span>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">03 / RESTORE</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">Master Timber &amp; Cane</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Phased table refinishing, food-safe zero-VOC oils, leather revival, and cane re-weaving.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Specialist: The Wood Doctor</span>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">04 / MAINTAIN</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">Kitchen &amp; Cold-Chain</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Extraction hood degreasing, airflow balancing, refrigeration coil care, and rapid dispatch.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Model: Scheduled &amp; Rapid SLA</span>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">05 / PROTECT</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">OHS &amp; Uniforms</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Municipal health inspection prep, fire safety checks, and tailored staff uniforms.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Standard: Full SANS Compliance</span>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-5 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-bronze-300">06 / GROW</div>
            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 mb-2">Digital Yield &amp; SEO</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed">
              Interactive QR menus, Google Maps search dominance, and floorplan yield optimization.
            </p>
          </div>
          <span className="text-xs font-extrabold text-bronze-300 mt-3">Partner: Scinovalities</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Pillar 01 — ATTRACT',
    category: 'Exterior Architecture',
    heading: 'Terrace Shading & Architectural Curbside Presence',
    sub: 'Maximizing high-margin outdoor covers in all weather with commercial cantilever systems and brass signage.',
    tag: 'Division 01',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Terrace Infrastructure</span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-950 mt-1 mb-3">All-Weather Outdoor Dining</h3>
          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
            In partnership with <strong className="font-extrabold text-charcoal-950">Afrishades</strong>, we deploy engineered commercial cantilever shade systems that withstand harsh coastal winds and intense UV radiation.
          </p>
          <ul className="text-sm sm:text-base text-charcoal-900 font-medium space-y-2.5 mb-4">
            <li>• <strong className="font-extrabold text-charcoal-950">Cantilever Canopies:</strong> Marine-grade 360° rotating masts with Sunbrella fabric.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Terrace Windbreaks:</strong> Motorized glass &amp; textile screens extending outdoor service.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Milled Brass Signage:</strong> Architectural facade letters with warm halo illumination.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Ambient Lighting:</strong> Glare-free amber exterior schemes enhancing curbside charm.</li>
          </ul>
          <div className="p-3.5 bg-ivory-200 border border-ivory-300 rounded-sm text-xs sm:text-sm font-medium text-charcoal-900">
            <strong className="font-extrabold text-charcoal-950">Capacity Impact:</strong> Adds up to 45 extra outdoor trading days annually.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="relative h-48 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/real_showcase/cantilever_umbrella_beachside.jpg" alt="Cantilever Umbrella" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/images/mockup_brass_signage.jpg" alt="Brass Signage" fill className="object-cover" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Pillar 02 — ENHANCE',
    category: 'Interior Comfort',
    heading: 'Acoustic Dining Balance & Bespoke Banquettes',
    sub: 'Transforming painful 80dB echo into conversational warmth while maximizing seating comfort and intimacy.',
    tag: 'Division 02',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div className="grid grid-cols-1 gap-3">
          <div className="relative h-48 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/images/acoustic_privacy_booth.jpg" alt="Acoustic Booth" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/real_showcase/intimate_acoustic_dining_interior.jpg" alt="Acoustic Dining" fill className="object-cover" />
          </div>
        </div>
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Sound &amp; Ergonomics</span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-950 mt-1 mb-3">Quiet Luxury &amp; Intimate Seating</h3>
          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
            Guests return to restaurants where they can hear each other. We engineer discrete acoustic treatments concealed behind timber battens and art panels to optimize reverberation.
          </p>
          <ul className="text-sm sm:text-base text-charcoal-900 font-medium space-y-2.5 mb-4">
            <li>• <strong className="font-extrabold text-charcoal-950">Acoustic Absorption:</strong> Reduces room resonance below 0.8s without killing energy.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Handcrafted Banquettes:</strong> Commercial frames with stain-resistant contract leather.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Spatial Zoning:</strong> Converting awkward floor space into coveted intimate booths.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Ergonomic Cleared Pitch:</strong> Seamless pathways for servers and comfortable patron dwell.</li>
          </ul>
          <div className="p-3.5 bg-ivory-200 border border-ivory-300 rounded-sm text-xs sm:text-sm font-medium text-charcoal-900">
            <strong className="font-extrabold text-charcoal-950">Target Sound Level:</strong> 62dB comfortable conversational dining.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Pillar 03 — RESTORE',
    category: 'Master Restoration',
    heading: 'Phased & Scheduled Timber, Leather & Cane Revival',
    sub: 'Master craftsmanship coordinated via phased daytime batches and our Lyndhurst workshop so your dining room stays welcoming.',
    tag: 'Division 03',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">The Wood Doctor &amp; Cane Africa</span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-950 mt-1 mb-3">Scheduled Artisanal Restoration</h3>
          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
            Daily service, wine spills, and UV exposure wear down solid timber tables and wicker. Our craftsmen restore surfaces in scheduled batches with certified food-safe finishes.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="relative h-32 rounded-sm overflow-hidden border border-ivory-300">
              <Image src="/real_showcase/teak_armchair_before_perfect.jpg" alt="Teak Before" fill className="object-cover" />
              <span className="absolute top-2 left-2 bg-charcoal-950/90 text-red-300 text-xs font-extrabold px-2 py-0.5 rounded-sm">Before • UV Bleached</span>
            </div>
            <div className="relative h-32 rounded-sm overflow-hidden border border-ivory-300">
              <Image src="/real_showcase/teak_armchair_after_perfect.jpg" alt="Teak After" fill className="object-cover" />
              <span className="absolute top-2 left-2 bg-emerald-950/90 text-emerald-300 text-xs font-extrabold px-2 py-0.5 rounded-sm">After • Deep Oiled</span>
            </div>
          </div>

          <div className="p-3.5 bg-ivory-200 border border-ivory-300 rounded-sm text-xs sm:text-sm font-medium text-charcoal-900">
            <strong className="font-extrabold text-charcoal-950">Protocol:</strong> Scheduled batch rotation &amp; on-site care • Food-safe zero-VOC oil • Odorless &amp; ready for service.
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-32 rounded-sm overflow-hidden border border-ivory-300">
              <Image src="/real_showcase/wicker_arm_before_clean.jpg" alt="Wicker Before" fill className="object-cover" />
              <span className="absolute top-2 left-2 bg-charcoal-950/90 text-red-300 text-xs font-extrabold px-2 py-0.5 rounded-sm">Before • Broken Cane</span>
            </div>
            <div className="relative h-32 rounded-sm overflow-hidden border border-ivory-300">
              <Image src="/real_showcase/wicker_arm_after_clean.jpg" alt="Wicker After" fill className="object-cover" />
              <span className="absolute top-2 left-2 bg-emerald-950/90 text-emerald-300 text-xs font-extrabold px-2 py-0.5 rounded-sm">After • Re-Woven</span>
            </div>
          </div>

          <div className="relative h-44 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/images/furniture_restoration_detail.jpg" alt="Craftsman Wood Finishing" fill className="object-cover" />
            <div className="absolute bottom-2 left-2 bg-charcoal-950/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-sm">
              Artisan Hand Applying Natural Oil Finish
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Pillar 04 — MAINTAIN',
    category: 'Facilities & Kitchen',
    heading: 'Kitchen Hood Extraction & Cold-Chain Compliance',
    sub: 'Scheduled degreasing, airflow balancing, and rapid technician dispatch protecting your fire insurance and food freshness.',
    tag: 'Division 04',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Back-of-House Reliability</span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-950 mt-1 mb-3">Preventative Mechanical Support</h3>
          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
            An extractor failure or cold-room fault halts dinner service and ruins stock. Our certified commercial technicians prevent breakdowns before they occur.
          </p>
          <ul className="text-sm sm:text-base text-charcoal-900 font-medium space-y-2.5 mb-4">
            <li>• <strong className="font-extrabold text-charcoal-950">Kitchen Extraction Hoods:</strong> Deep chemical degreasing &amp; impeller balancing (SANS 1850).</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Refrigeration Coils:</strong> Preventative condenser cleaning and door seal renewal.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Gas &amp; Electrical Dispatch:</strong> Rapid mobile technician support vans on-call.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Fire Compliance Certificates:</strong> Maintenance registers to keep insurance underwriters satisfied.</li>
          </ul>
          <div className="p-3.5 bg-ivory-200 border border-ivory-300 rounded-sm text-xs sm:text-sm font-medium text-charcoal-900">
            <strong className="font-extrabold text-charcoal-950">Safety Certification:</strong> Scheduled service logs provided for municipal authorities.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="relative h-48 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/real_showcase/commercial_kitchen_stainless_extraction.jpg" alt="Kitchen Hood" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/images/mockup_fleet_vehicle.jpg" alt="Fleet Vehicle" fill className="object-cover" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Pillars 05 & 06 — PROTECT & GROW',
    category: 'Compliance & Digital',
    heading: 'OHS Readiness, Staff Apparel & Digital Yield',
    sub: 'Ensuring total inspection compliance, bespoke uniform presentation, and high-performance digital menus.',
    tag: 'Divisions 05 & 06',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch">
        <div className="bg-white border-2 border-ivory-300 p-6 rounded-sm flex flex-col justify-between">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Pillar 05 / PROTECT</span>
            <h4 className="text-xl font-extrabold text-charcoal-950 mt-1 mb-2">Compliance &amp; Staff Apparel</h4>
            <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300 mb-3">
              <Image src="/images/mockup_uniform_crest.jpg" alt="Uniform Crest" fill className="object-cover" />
            </div>
            <ul className="text-sm text-charcoal-800 font-medium space-y-2">
              <li>• Municipal health audit readiness &amp; hygiene logs</li>
              <li>• Kitchen fire suppression checks &amp; exit signs</li>
              <li>• Bespoke tailored uniforms with embroidered crests</li>
            </ul>
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-emerald-700 mt-3">Full SANS &amp; Municipal Compliance</span>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-6 rounded-sm flex flex-col justify-between">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Pillar 06 / GROW</span>
            <h4 className="text-xl font-extrabold text-charcoal-950 mt-1 mb-2">Digital Intelligence (Scinovalities)</h4>
            <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300 mb-3">
              <Image src="/images/hospitality_tech_ai.jpg" alt="Tech AI" fill className="object-cover" />
            </div>
            <ul className="text-sm text-charcoal-800 font-medium space-y-2">
              <li>• High-speed digital QR menus with allergen filters</li>
              <li>• Local Google Maps search dominance &amp; review shields</li>
              <li>• Floorplan yield optimization maximizing RevPASH</li>
            </ul>
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-bronze-600 mt-3">Technology Partner: Scinovalities</span>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Product Catalog — Dining & Lounge',
    category: 'Commercial Furniture',
    heading: 'Handcrafted Furniture: Dining & Lounge Suites',
    sub: 'Directly from the AfriSMME Hub catalog. Built for generational outdoor durability and commercial resilience.',
    tag: 'Catalog Collection 01',
    dark: false,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full items-stretch">
        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/zim_teak_8_clean.jpg" alt="Zim Teak 8" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Zim Teak 8-Seater Suite</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Genuine Zimbabwean Teak</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Heavy solid teak outdoor dining set for fine dining terraces.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Generational Durability</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/zimbali_lounge_clean.jpg" alt="Zimbali Lounge" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Zimbali Luxury Lounge</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Modular Sectional Suite</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Woven wicker modular lounge with Sunbrella-grade cushions.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Hotel &amp; Resort Lounges</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/alu_wood_morris_clean.jpg" alt="Alu-Wood Morris" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Alu-Wood Morris Suite</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Aluminum + Teak Slats</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Rust-free white frame with teak arms and red cushions.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Modern Coastal Terraces</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/gabriella_10_clean.jpg" alt="Gabriella 10" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Gabriella 10-Seater Set</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Poolside &amp; Terrace Dining</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Large banquet table with parasol hole and 10 cane armchairs.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Large Group Bookings</div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Product Catalog — Slabs, Pool & Domes',
    category: 'Commercial Furniture',
    heading: 'Live Edge Tables, Pool Loungers & Domes',
    sub: 'Statement architectural pieces and four-season terrace activation structures.',
    tag: 'Catalog Collection 02',
    dark: false,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full items-stretch">
        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/live_edge_boardroom_slab.jpg" alt="Live Edge Slab" fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Live Edge Slab Tables</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Single-Slab African Hardwood</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Monumental single-slab tables with sculpted steel bases.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">VIP Tasting &amp; Boardrooms</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/wooden_pool_lounger_clean.jpg" alt="Pool Lounger" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Solid Wood Pool Loungers</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Adjustable Back + Wheels</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Heavy timber loungers with water-resistant quick-dry foam.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Boutique Hotel Pools</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/transparent_geodesic_domes.jpg" alt="Dining Domes" fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Transparent Dining Domes</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Geodesic Outdoor Igloos</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Clear geodesic dining domes monetizing winter terraces.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Winter Terrace Activation</div>
        </div>

        <div className="bg-white border-2 border-ivory-300 p-4 rounded-sm flex flex-col justify-between">
          <div className="relative h-32 rounded-sm overflow-hidden bg-ivory-100 border border-ivory-300 mb-3">
            <Image src="/real_showcase/composite_decking_clean.jpg" alt="Composite Decking" fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-charcoal-950">Composite &amp; Timber Decks</div>
            <div className="text-xs font-bold text-bronze-600 mb-1.5">Commercial Anti-Slip</div>
            <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-snug">Zero-splinter UV-resistant decking for high-traffic walkways.</p>
          </div>
          <div className="text-xs font-extrabold text-bronze-700 mt-2">Slip-Resistant &amp; Durable</div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Social Empowerment & Craftsmanship',
    category: 'Mission & ESG Impact',
    heading: 'Uplifting Communities Through Certified Artisan Training',
    sub: 'Every table restored and chair woven directly creates dignified, skilled employment in South Africa.',
    tag: 'Social Mandate',
    dark: false,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-600">Enterprise Development</span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-950 mt-1 mb-3">Our Artisanal Community</h3>
          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed mb-4">
            AfriSMME Hub is built on training and certifying local youth and women artisans in our Lyndhurst, Johannesburg workshops in fine carpentry, cane weaving, and commercial facilities care.
          </p>
          <ul className="text-sm sm:text-base text-charcoal-900 font-medium space-y-2.5 mb-4">
            <li>• <strong className="font-extrabold text-charcoal-950">Female Artisan Weavers:</strong> Skilled women hand-weaving all cane and wicker furniture.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">Youth Apprenticeships:</strong> Accredited vocational training in timber and HVAC.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">100% Domestic Manufacturing:</strong> Supporting ethical local supply chains.</li>
            <li>• <strong className="font-extrabold text-charcoal-950">B-BBEE Level 1 Contributor:</strong> Direct procurement and ESG enhancement.</li>
          </ul>
          <div className="p-3.5 bg-ivory-200 border border-ivory-300 rounded-sm text-xs sm:text-sm font-medium text-charcoal-900">
            <strong className="font-extrabold text-charcoal-950">B-BBEE Status:</strong> Level 1 Contributor • 135% Procurement Recognition.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="relative h-48 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/real_showcase/artisans_handweaving_clean.jpg" alt="Artisans Weaving" fill className="object-cover" />
            <span className="absolute bottom-2 left-2 bg-charcoal-950/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-sm">
              AfriSMME Female Artisans Hand-Weaving Wicker (Lyndhurst Workshop)
            </span>
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden border border-ivory-300">
            <Image src="/real_showcase/staircase_restoration_craftsman.jpg" alt="Craftsman Restoring Stairs" fill className="object-cover" />
            <span className="absolute bottom-2 left-2 bg-charcoal-950/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-sm">
              Artisan Restoring Architectural Timber
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Partnership Models & Audit Offer',
    category: 'Engagement & Contacts',
    heading: 'Retainer Packages & The Complimentary 360° Audit',
    sub: 'Select an on-demand response, seasonal refresh, or full monthly care retainer.',
    tag: 'Next Steps',
    dark: true,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-bronze-300">Service Tiers</span>
            <h3 className="text-2xl font-display font-extrabold text-white mt-1 mb-3">Engagement Models</h3>
            <div className="space-y-3 mb-4">
              <div className="p-3.5 bg-charcoal-950 border border-charcoal-700 rounded-sm">
                <div className="text-xs sm:text-sm font-extrabold text-bronze-300">TIER 01 • On-Demand Rapid Response</div>
                <p className="text-xs sm:text-sm text-ivory-100 font-medium mt-0.5">Fixed-price emergency callouts, chair repairs, and spot table refinishing.</p>
              </div>
              <div className="p-3.5 bg-charcoal-950 border border-charcoal-700 rounded-sm">
                <div className="text-xs sm:text-sm font-extrabold text-bronze-300">TIER 02 • Seasonal Deep Refresh</div>
                <p className="text-xs sm:text-sm text-ivory-100 font-medium mt-0.5">Bi-annual deep overhaul: terrace umbrellas, timber oiling, and kitchen extraction.</p>
              </div>
              <div className="p-3.5 bg-charcoal-950 border-2 border-bronze-400/50 rounded-sm">
                <div className="text-xs sm:text-sm font-extrabold text-bronze-300">TIER 03 • Facility Care Retainer</div>
                <p className="text-xs sm:text-sm text-ivory-100 font-medium mt-0.5">Monthly diagnostic audits, priority emergency dispatch, and continuous maintenance.</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-2 border-dashed border-bronze-400/70 rounded-sm bg-bronze-400/10">
            <div className="text-sm font-extrabold text-white">Complimentary 360° Physical Venue Audit</div>
            <p className="text-xs sm:text-sm text-ivory-100 font-medium mt-0.5">45-minute on-site review between lunch and dinner. Leaves zero disruption.</p>
          </div>
        </div>

        <div className="bg-charcoal-950 border border-charcoal-700 p-6 rounded-sm flex flex-col justify-between">
          <div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-bronze-300 font-extrabold mb-1">Corporate Headquarters</div>
            <h4 className="text-xl font-extrabold text-white mb-2">AfriSMME Hub</h4>
            <p className="text-sm text-ivory-100 font-medium leading-relaxed mb-4">
              77 Wilmington Crescent, Lyndhurst, 2192<br />
              Johannesburg, South Africa
            </p>

            <div className="space-y-2 text-sm text-ivory-100 font-medium border-t border-charcoal-700 pt-4">
              <div>Office: <strong className="font-extrabold text-white">+27 (0) 11 346 5018</strong></div>
              <div>Priority WhatsApp: <strong className="font-extrabold text-bronze-300">083 432 8394</strong></div>
              <div>Email: <strong className="font-extrabold text-white">info@afrismmehub.co.za</strong></div>
              <div>Portal: <strong className="font-extrabold text-bronze-300">www.afrismmehub.co.za</strong></div>
            </div>
          </div>

          <div className="pt-4 border-t border-charcoal-700">
            <a
              href="mailto:info@afrismmehub.co.za?subject=Schedule%20Hospitality%20Audit"
              className="block w-full py-3 text-center bg-bronze-400 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider rounded-sm hover:bg-bronze-300 transition-colors shadow-lg"
            >
              Schedule Complimentary Audit
            </a>
          </div>
        </div>
      </div>
    ),
  },
];

export default function BookletPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = BOOKLET_SLIDES[currentSlide];

  const handleNext = () => {
    if (currentSlide < BOOKLET_SLIDES.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-ivory-200 text-charcoal-950 selection:bg-bronze-400 selection:text-charcoal-950 flex flex-col justify-between">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-white hover:text-bronze-300 transition-colors uppercase tracking-wider font-extrabold"
          >
            <ChevronLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-charcoal-700">|</span>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-bronze-300 font-extrabold">
            Document C • Hospitality Support Booklet (36 Pages)
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/PDFs/AfriSMME_Hospitality_Support_Booklet.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-extrabold bg-bronze-400 text-charcoal-950 hover:bg-bronze-300 transition-colors shadow-subtle-dark"
          >
            <Download className="w-4 h-4" />
            Download Booklet PDF (36p)
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold bg-charcoal-800 text-white hover:bg-charcoal-700 border border-charcoal-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <Link
            href="/corporate-profile"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs sm:text-sm font-bold bg-charcoal-900 text-ivory-100 hover:text-white border border-charcoal-700 transition-colors"
          >
            Corporate Profile
          </Link>
          <Link
            href="/brochure"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold bg-charcoal-900 text-bronze-300 hover:text-white border border-bronze-500/40 transition-colors"
          >
            Sales Brochure
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col justify-center">
        {/* Slide Canvas */}
        <div
          className={`w-full rounded-sm border-2 shadow-2xl transition-all duration-300 min-h-[600px] flex flex-col justify-between p-6 sm:p-10 ${
            slide.dark
              ? 'bg-charcoal-900 border-charcoal-700 text-white'
              : 'bg-white border-ivory-300 text-charcoal-950'
          }`}
        >
          {/* Slide Header */}
          <div className="flex items-center justify-between border-b pb-4 mb-6 border-bronze-400/30">
            <div className="flex items-baseline gap-3">
              <span className="font-extrabold text-sm sm:text-base tracking-widest text-bronze-500">AFRISMME HUB</span>
              <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${slide.dark ? 'text-ivory-200' : 'text-charcoal-700'}`}>{slide.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest px-3 py-1 rounded-sm border border-bronze-400/50 text-bronze-500">
                {slide.tag}
              </span>
              <span className={`text-xs sm:text-sm font-mono font-bold ${slide.dark ? 'text-ivory-200' : 'text-charcoal-700'}`}>
                Slide {currentSlide + 1} / {BOOKLET_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Slide Body */}
          <div className="flex-1">{slide.content}</div>

          {/* Slide Footer */}
          <div className={`flex items-center justify-between border-t pt-3 mt-6 border-bronze-400/30 text-xs sm:text-sm font-semibold ${slide.dark ? 'text-ivory-200' : 'text-charcoal-700'}`}>
            <div>AfriSMME Hub Hospitality Support • Corporate Presentation</div>
            <div>Sandton, Johannesburg • Confidential &amp; Proprietary</div>
          </div>
        </div>

        {/* Presenter Controls & Slide Thumbnails */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-charcoal-900 border border-charcoal-700 p-4 rounded-sm">
          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="p-2.5 rounded-sm bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-30 disabled:hover:bg-charcoal-800 text-white transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-extrabold text-white">
              Slide {currentSlide + 1} of {BOOKLET_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentSlide === BOOKLET_SLIDES.length - 1}
              className="p-2.5 rounded-sm bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-30 disabled:hover:bg-charcoal-800 text-white transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide quick picker dots */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {BOOKLET_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`w-8 h-8 rounded-sm text-xs sm:text-sm font-extrabold transition-all ${
                  currentSlide === idx
                    ? 'bg-bronze-400 text-charcoal-950 shadow-md'
                    : 'bg-charcoal-800 text-ivory-200 hover:text-white hover:bg-charcoal-700'
                }`}
                title={s.title}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Presenter Tips */}
          <div className="text-xs sm:text-sm font-medium text-ivory-200 text-right">
            <span>Use <strong className="font-extrabold text-white">← / →</strong> keyboard arrows to present</span>
          </div>
        </div>
      </div>
    </div>
  );
}
