'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuditModal } from '@/components/interactive/AuditModal';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  ShieldCheck,
  Clock,
  Wrench,
  Sparkles,
  Compass,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Building2,
  ChevronRight,
  MapPin,
  Flame,
  VolumeX,
  Hammer
} from 'lucide-react';

export default function AboutPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const divisions = [
    {
      id: 'wood-doctor',
      name: 'The Wood Doctor',
      badge: 'DIVISION 01 — TIMBER & LEATHER RESTORATION',
      website: 'https://wooddoctor.co.za/',
      image: '/images/furniture_restoration_detail.jpg',
      alt: 'Master artisan hand-rubbing natural food-safe oil into hardwood dining table',
      description:
        'South Africa’s premier artisanal workshop for high-end dining furniture restoration. From removing deep wine and heat stains on antique teak and oak tables to reviving luxury leather banquettes with organic pigments—executed overnight with zero-VOC, food-safe cures.',
      capabilities: [
        'On-site overnight hardwood de-staining & scratch elimination',
        'Hand-rubbed natural oils with food-contact certification',
        'Fine leather pigment rejuvenation & structural seam reinforcement',
        'Bespoke architectural millwork & joinery adjustments',
      ],
    },
    {
      id: 'afrishades',
      name: 'Afrishades',
      badge: 'DIVISION 02 — ARCHITECTURAL TERRACE & SHADE',
      website: 'https://afrishades.co.za/',
      image: '/images/outdoor_umbrellas_terrace.jpg',
      alt: 'Luxury outdoor dining terrace with heavy-duty architectural shade systems and umbrellas',
      description:
        'Engineers of heavy-duty architectural shade, tensioned fabric structures, and automated all-weather terrace enclosures for Africa’s most scenic restaurants. We transform vulnerable outdoor patios into high-yield, weatherproof dining zones operating 365 days a year.',
      capabilities: [
        'Commercial heavy-duty cantilever parasols and giant umbrellas',
        'Automated wind-resistant zip screens and rain-drop barriers',
        'Architectural tensile membrane shade sails and pergolas',
        'Sub-14 day rapid custom terrace fabrication & dark-hours mounting',
      ],
    },
    {
      id: 'cane-africa',
      name: 'Cane Africa',
      badge: 'DIVISION 03 — BESPOKE WOVEN HOSPITALITY SEATING',
      website: 'https://www.caneafrica.co.za/',
      image: '/images/acoustic_privacy_booth.jpg',
      alt: 'Bespoke hospitality seating and woven furniture handcrafted for upscale restaurants',
      description:
        'Artisanal masters of woven natural cane, rattan, and synthetic wicker furniture built specifically for commercial hospitality rigors. Every chair, banquette frame, and acoustic divider combines African craft heritage with structural steel reinforcement for decades of service.',
      capabilities: [
        'Custom dining chairs, barstools, and lounge club chairs',
        'High-density contract foams with commercial Martindale wear ratings',
        'All-weather UV-stabilized synthetic weave for coastal exposure',
        'Rapid dark-hours re-weaving and structural frame refurbishment',
      ],
    },
    {
      id: 'engineering',
      name: 'AfriSMME Hospitality Engineering',
      badge: 'DIVISION 04 — ACOUSTICS, INFRASTRUCTURE & SLA',
      website: 'https://afrismme.com/',
      image: '/images/hero_luxury_dining.jpg',
      alt: 'Luxury dining room with acoustic ceiling treatment and ambient architectural lighting',
      description:
        'The technical nerve center delivering NRC-certified acoustic comfort, commercial kitchen extraction maintenance, municipal compliance assurance, and our 24/7 dark-hours rapid response mobile fleet for sudden hospitality emergencies.',
      capabilities: [
        'Concealed acoustic ceiling baffles & NRC sound intimacy tuning',
        'SANS 10400 & NFPA 96 commercial kitchen extraction certification',
        'Sub-60 minute dispatch mobile workshops across key metro hubs',
        'AI dining room floorplan density & cover turnover optimization',
      ],
    },
  ];

  const operationalHubs = [
    { name: 'Johannesburg & Sandton', role: 'Central Technical Depot & Mobile Fleet Command' },
    { name: 'Cape Town & Atlantic Seaboard', role: 'Coastal Architecture & Wine Estate Field Team' },
    { name: 'Pretoria & Menlyn Maine', role: 'Executive Dining & Diplomatic Hospitality Support' },
    { name: 'Durban & Umhlanga', role: 'Subtropical Terrace & Marine-Grade Treatment Hub' },
    { name: 'Franschhoek & Stellenbosch', role: 'Wine Valley Cellar Door & Fine-Dining Guild' },
  ];

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAudit={handleOpenAuditModal} />

      <main className="flex-1">
        {/* =========================================================================
            ABOUT HERO / EDITORIAL HEADER
            ========================================================================= */}
        <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 bg-charcoal-950 border-b border-charcoal-800 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-bronze-500/10 via-bronze-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-ivory-400 mb-6">
              <Link href="/" className="hover:text-bronze-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
              <span className="text-bronze-400 font-semibold uppercase tracking-wider">
                About Us & Specialist Divisions
              </span>
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-charcoal-900 border border-bronze-500/30 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                <span className="text-xs font-mono tracking-widest uppercase text-bronze-300 font-semibold">
                  About AfriSMME Hub
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-ivory-50 tracking-tight leading-[1.08] mb-8">
                We Engineer, Restore & Protect{' '}
                <span className="italic font-light text-gold-gradient block sm:inline">
                  Africa’s Leading Dining Spaces.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-ivory-200/90 font-normal leading-relaxed mb-10 max-w-3xl">
                AfriSMME Hub is the unified engineering and architectural support partner for fine-dining restaurants, wine estate tasting rooms, safari lodges, and luxury bistros. We combine centuries of artisanal craft heritage with rigorous engineering standards—executed exclusively during dark hours so daytime covers are never compromised.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleOpenAuditModal}
                  withArrow
                >
                  Launch Diagnostic Audit
                </Button>
                <Button
                  href="#divisions"
                  variant="secondary"
                  size="lg"
                >
                  Explore Operating Divisions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            THE DARK-HOURS EXECUTION PHILOSOPHY
            ========================================================================= */}
        <section className="py-24 sm:py-32 bg-charcoal-900/40 border-b border-charcoal-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Our Operational Philosophy"
              title="The 23:00 to 07:00 Protocol:"
              highlightedTitle="Zero Daytime Disruption."
              description="A single displaced table during a Saturday dinner service costs a fine-dining establishment thousands in lost revenue and irreversible guest frustration. We refuse to operate during your trading hours."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="p-8 rounded-sm bg-charcoal-900/80 border border-charcoal-700/80 hover:border-bronze-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-bronze-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ivory-50 mb-3">
                    Overnight Dark Hours
                  </h3>
                  <p className="text-sm text-ivory-300 leading-relaxed font-normal">
                    Our technical crews arrive at 23:00 once the last dinner guests have departed. Acoustic baffles are mounted, furniture is hand-rubbed with fast-curing natural oils, and kitchen extraction ducts are deep-cleaned in complete discretion.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-charcoal-800 text-xs font-mono text-bronze-400">
                  <span>Execution: 23:00 — 07:00</span>
                </div>
              </div>

              <div className="p-8 rounded-sm bg-charcoal-900/80 border border-charcoal-700/80 hover:border-bronze-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ivory-50 mb-3">
                    07:00 Ready Guarantee
                  </h3>
                  <p className="text-sm text-ivory-300 leading-relaxed font-normal">
                    By 07:00, our mobile crews conduct a white-glove dust inspection, air quality purification check, and HEPA vacuum run. Your general manager walks into a dining room that is pristine, odor-free, and fully set for breakfast service.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-charcoal-800 text-xs font-mono text-emerald-400">
                  <span>Zero Odor & Zero Residue</span>
                </div>
              </div>

              <div className="p-8 rounded-sm bg-charcoal-900/80 border border-charcoal-700/80 hover:border-bronze-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-bronze-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ivory-50 mb-3">
                    Regulatory Compliance Shield
                  </h3>
                  <p className="text-sm text-ivory-300 leading-relaxed font-normal">
                    We maintain comprehensive compliance with SANS 10400 national building regulations, NFPA 96 kitchen ventilation standards, and municipal health inspector protocols—protecting your liquor license and operational insurance.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-charcoal-800 text-xs font-mono text-bronze-400">
                  <span>Fully Audited & Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            OUR 4 SPECIALIZED OPERATING DIVISIONS
            ========================================================================= */}
        <section id="divisions" className="py-24 sm:py-32 bg-charcoal-950 border-b border-charcoal-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Integrated Turnkey Ecosystem"
              title="Four Specialist Operating Divisions,"
              highlightedTitle="One Master SLA."
              description="Rather than juggling multiple unreliable subcontractors, hospitality directors deal with a single consolidated technical partner powered by South Africa's most respected specialist workshops."
            />

            <div className="space-y-16 pt-8">
              {divisions.map((div, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={div.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-sm bg-charcoal-900/60 border border-charcoal-700/80 hover:border-bronze-500/40 transition-all duration-300`}
                  >
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden border border-charcoal-700 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <Image
                        src={div.image}
                        alt={div.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded bg-charcoal-950/90 backdrop-blur-md border border-bronze-500/30">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-300 font-semibold">
                          {div.badge}
                        </span>
                      </div>
                    </div>

                    {/* Text Narrative Column */}
                    <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-3xl sm:text-4xl font-display font-medium text-ivory-50">
                            {div.name}
                          </h2>
                          {div.website && (
                            <a
                              href={div.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-bronze-400 hover:text-bronze-300 transition-colors py-1 px-2.5 rounded bg-charcoal-900 border border-charcoal-700 hover:border-bronze-500/50"
                            >
                              <span>Official Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-base text-ivory-300 leading-relaxed font-normal mt-3">
                          {div.description}
                        </p>
                      </div>

                      {/* Capabilities checklist */}
                      <div className="space-y-2.5 pt-2 border-t border-charcoal-800">
                        <p className="text-xs font-mono uppercase tracking-wider text-bronze-400 font-semibold mb-3">
                          Specialized Capabilities:
                        </p>
                        {div.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5 text-sm text-ivory-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <a
                          href={div.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-400 hover:text-bronze-300 transition-colors"
                        >
                          <span>Explore {div.name} Portfolio</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            OPERATIONAL FOOTPRINT ACROSS SOUTHERN AFRICA
            ========================================================================= */}
        <section className="py-24 sm:py-32 bg-charcoal-900/40 border-b border-charcoal-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="National Hospitality Footprint"
              title="Deploying Where Africa's"
              highlightedTitle="Culinary Capital Gathers."
              description="Our mobile workshops and rapid dispatch engineering vans maintain permanent readiness across primary dining corridors."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {operationalHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-charcoal-900/80 border border-charcoal-700/80 flex items-start gap-4 hover:border-bronze-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-bronze-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ivory-50">
                      {hub.name}
                    </h3>
                    <p className="text-xs text-ivory-400 mt-1 leading-relaxed">
                      {hub.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CALL TO ACTION SECTION
            ========================================================================= */}
        <section className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-bronze-400 font-semibold mb-4 block">
              Direct Partnership Inquiry
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-ivory-50 mb-6 leading-tight">
              Ready to Secure Zero-Disruption Support for Your Dining Room?
            </h2>
            <p className="text-base sm:text-lg text-ivory-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a confidential facility diagnostic audit or request executive SLA onboarding for your restaurant, boutique hotel, or wine estate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleOpenAuditModal}
                withArrow
                className="w-full sm:w-auto"
              >
                Launch Diagnostic Audit
              </Button>
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-charcoal-900 border border-charcoal-700 text-ivory-100 hover:text-bronze-300 hover:border-bronze-500/50 font-medium transition-colors text-sm"
              >
                Direct Contact & Dispatch
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer />

      {/* Floating Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
      />
    </div>
  );
}
