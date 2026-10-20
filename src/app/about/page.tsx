'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuditModal } from '@/components/interactive/AuditModal';
import { FloatingScrollDock } from '@/components/layout/FloatingScrollDock';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Clock, ShieldCheck, ArrowUpRight, ChevronRight, Layers } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

const DIVISIONS = [
  {
    number: '01',
    name: 'The Wood Doctor',
    role: 'Furniture & Timber Restoration',
    description: 'Master workshop restoring dining tables, hardwood millwork, and fine joinery in scheduled batches with food-safe natural oils.',
    image: '/images/furniture_restoration_detail.jpg',
    website: 'https://wooddoctor.co.za/',
  },
  {
    number: '02',
    name: 'AfriShades',
    role: 'Terrace & Outdoor Shading',
    description: 'Commercial cantilever umbrellas, tensioned shade, and storm-resistant patio protection to maximize outdoor capacity.',
    image: '/images/outdoor_umbrellas_terrace.jpg',
    website: 'https://afrishades.co.za/',
  },
  {
    number: '03',
    name: 'Cane Africa',
    role: 'Woven Hospitality Seating',
    description: 'Handcrafted cane, rattan, and contract-grade woven furniture engineered for high-turnover hospitality durability.',
    image: '/images/acoustic_privacy_booth.jpg',
    website: 'https://www.caneafrica.co.za/',
  },
  {
    number: '04',
    name: 'Textile Doctor',
    role: 'Upholstery & Contract Fabrics',
    description: 'Reviving leather banquettes, dining booth cushions, and outdoor terrace seating with stain-resistant protective finishes.',
    image: '/images/mockup_uniform_crest.jpg',
  },
  {
    number: '05',
    name: 'AfriHealth & Safety',
    role: 'OHS, Hygiene & Fire Compliance',
    description: 'Kitchen extraction fire checks, HACCP food hygiene registers, and municipal health inspection audit preparation.',
    image: '/images/mockup_fleet_vehicle.jpg',
  },
  {
    number: '06',
    name: 'Scinovalities',
    role: 'Digital, AI & Technology Partner',
    description: 'High-converting hospitality websites, dynamic digital QR menus, local SEO, and AI-driven guest communication systems.',
    image: '/images/hospitality_tech_ai.jpg',
    website: 'https://scinovalities.co.za/',
  },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Single Accountability',
    description: 'One team, one contract, zero contractor finger-pointing. We oversee diagnosis, coordination, and quality control.',
  },
  {
    icon: Clock,
    title: 'Scheduled Daytime & Maintenance Windows',
    description: 'Physical work is planned around your standard daytime maintenance slots, quieter trading periods, and phased workshop batches.',
  },
  {
    icon: Layers,
    title: 'Physical & Digital Harmony',
    description: 'We connect physical atmosphere, seating ergonomics, and facilities care with Scinovalities digital and AI technology.',
  },
];

export default function AboutPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory-100 text-charcoal-950 flex flex-col">
      <Navbar onOpenAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="pt-36 sm:pt-44 pb-20 sm:pb-24 bg-charcoal-900 border-b border-charcoal-800 text-ivory-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-mono text-ivory-300 mb-6">
              <Link href="/" className="hover:text-bronze-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-charcoal-500" />
              <span className="text-bronze-300 font-semibold uppercase tracking-wider">
                About AfriSMME Hub
              </span>
            </div>

            <div className="max-w-3xl">
              <span className="text-xs font-mono tracking-widest uppercase text-bronze-300 font-semibold block mb-4">
                From Supplier to Strategic Support Partner
              </span>

              <h1 className="text-4xl sm:text-6xl font-display font-medium text-ivory-50 tracking-tight leading-[1.08] mb-6">
                One integrated ecosystem for{' '}
                <span className="italic font-light text-gold-gradient">hospitality excellence.</span>
              </h1>

              <p className="text-lg sm:text-xl text-ivory-200/90 leading-relaxed font-normal mb-8">
                AfriSMME Hub helps restaurants and hospitality venues identify, solve, maintain, and improve the physical, operational, digital, and compliance aspects of their business through one coordinated partnership.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  onClick={() => setIsAuditModalOpen(true)}
                >
                  Assess Your Venue
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="#divisions"
                >
                  Explore Divisions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="py-20 sm:py-24 bg-ivory-200 border-b border-ivory-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFloatReveal direction="up" delay={30}>
              <SectionHeading
                theme="light"
                badge="Our Model"
                title="Built for the realities"
                highlightedTitle="of hospitality trading."
                align="center"
              />
            </ScrollFloatReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRINCIPLES.map(({ icon: Icon, title, description }, idx) => (
                <ScrollFloatReveal
                  key={title}
                  direction="up"
                  delay={idx * 80}
                  hoverFloat
                >
                  <div className="p-8 rounded-sm bg-ivory-50 border border-ivory-300 shadow-sm float-card-shadow transition-all h-full">
                    <div className="w-10 h-10 rounded-sm bg-charcoal-900 flex items-center justify-center text-bronze-300 mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-charcoal-950 mb-3">{title}</h3>
                    <p className="text-sm text-charcoal-800 leading-relaxed font-normal">{description}</p>
                  </div>
                </ScrollFloatReveal>
              ))}
            </div>
          </div>
        </section>

        {/* The 6 Specialist Divisions */}
        <section id="divisions" className="py-20 sm:py-28 bg-ivory-100 border-b border-ivory-300 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFloatReveal direction="up" delay={30}>
              <SectionHeading
                theme="light"
                badge="Operating Divisions"
                title="Six specialist capabilities."
                highlightedTitle="One master SLA."
                description="Each division brings deep craft and technical competence. AfriSMME Hub integrates them into a single, cohesive service delivery."
                align="center"
              />
            </ScrollFloatReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIVISIONS.map((div, idx) => (
                <ScrollFloatReveal
                  key={div.name}
                  direction="up"
                  delay={idx * 75}
                  hoverFloat
                >
                  <div className="rounded-sm bg-ivory-50 border border-ivory-300 overflow-hidden flex flex-col justify-between group hover:border-bronze-500 float-card-shadow transition-all shadow-sm h-full">
                    <div>
                      <div className="relative aspect-[16/10] bg-charcoal-900">
                        <Image
                          src={div.image}
                          alt={div.name}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 text-[10px] font-mono text-bronze-300 font-semibold px-2 py-0.5 rounded bg-charcoal-900/90 border border-bronze-500/30">
                          DIVISION {div.number}
                        </span>
                      </div>

                      <div className="p-6">
                        <span className="text-[11px] font-mono text-bronze-700 font-semibold uppercase tracking-wider block mb-1">
                          {div.role}
                        </span>
                        <h3 className="font-display text-2xl font-semibold text-charcoal-950 mb-3">{div.name}</h3>
                        <p className="text-sm text-charcoal-800 leading-relaxed">{div.description}</p>
                      </div>
                    </div>

                    {div.website && (
                      <div className="px-6 pb-6 pt-3 border-t border-ivory-300 mt-auto">
                        <a
                          href={div.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-charcoal-900 hover:text-bronze-700 transition-colors"
                        >
                          <span>Visit Specialist Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </ScrollFloatReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Footprint & Final CTA */}
        <section className="py-20 sm:py-24 bg-charcoal-900 text-ivory-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono tracking-widest uppercase text-bronze-400 font-semibold block mb-3">
              National Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ivory-50 mb-4">
              Supporting venues across South Africa.
            </h2>
            <p className="text-sm sm:text-base text-ivory-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Active operations in Johannesburg, Sandton, Cape Town, the Atlantic Seaboard, Pretoria, Durban, Umhlanga, and the Cape Winelands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => setIsAuditModalOpen(true)}
              >
                Assess Your Venue
              </Button>
              <Link
                href="/#contact"
                className="text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-sm bg-charcoal-800 text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-700 transition-colors"
              >
                Direct Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingScrollDock onOpenAudit={() => setIsAuditModalOpen(true)} />

      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
