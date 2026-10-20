'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, QrCode, Cpu, Search, MessageSquare, BarChart3, ArrowUpRight } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

const CAPABILITIES = [
  { icon: Globe, title: 'Websites & bookings' },
  { icon: QrCode, title: 'Digital menus' },
  { icon: Cpu, title: 'AI guest messaging' },
  { icon: Search, title: 'Local SEO & AEO' },
  { icon: MessageSquare, title: 'Review management' },
  { icon: BarChart3, title: 'Analytics & insights' },
];

export function TechnologyPartnerSection() {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-charcoal-900 border-t border-charcoal-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <ScrollFloatReveal
            direction="up"
            delay={80}
            hoverFloat
            className="relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal-800 order-2 lg:order-1 shadow-elevated-dark"
          >
            <Image
              src="/images/hospitality_tech_ai.jpg"
              alt="Digital and AI systems for hospitality venues"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </ScrollFloatReveal>

          {/* Content */}
          <ScrollFloatReveal direction="up" delay={160} className="order-1 lg:order-2">
            <span className="text-xs tracking-cinematic uppercase text-bronze-400 font-medium">
              Technology Partner
            </span>
            <h2 className="mt-4 text-display-2 font-display font-medium tracking-tight text-ivory-50 leading-[1.08]">
              Powered by{' '}
              <span className="italic font-light text-gold-gradient">Scinovalities.</span>
            </h2>
            <p className="mt-5 text-lead text-ivory-300/85 leading-relaxed max-w-xl">
              Your digital presence should match the quality of your venue. Scinovalities delivers the technology side of the ecosystem.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {CAPABILITIES.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-center gap-3 text-sm text-ivory-200">
                  <Icon className="w-4 h-4 text-bronze-400 shrink-0" />
                  {title}
                </li>
              ))}
            </ul>

            <a
              href="https://scinovalities.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-bronze-300 hover:text-ivory-50 transition-colors group"
            >
              <span>Visit Scinovalities</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </ScrollFloatReveal>
        </div>
      </div>
    </section>
  );
}
