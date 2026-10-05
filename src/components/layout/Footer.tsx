'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { PhoneCall, Mail, MapPin, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 text-ivory-300 pt-16 sm:pt-20 pb-12 overflow-hidden relative">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-bronze-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-charcoal-800/80">
          {/* Column 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="mb-6 focus:outline-none focus:ring-2 focus:ring-bronze-400 rounded-sm">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-sm sm:text-base text-ivory-300/80 font-normal leading-relaxed mb-6 max-w-md">
              The premier turnkey engineering and facility support ecosystem for luxury restaurants, fine-dining bistros, and boutique hospitality venues across Southern Africa. Zero daytime disruption.
            </p>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-700/80 text-[11px] font-mono text-ivory-200">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                HACCP & NFPA 96 Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-700/80 text-[11px] font-mono text-ivory-200">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Overnight Dark-Hours Deploy
              </span>
            </div>
          </div>

          {/* Column 3: The Six Pillars */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Support Pillars
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#attract" className="text-ivory-300 hover:text-bronze-300 transition-colors font-medium">
                  01. Attract (Exterior & Terrace)
                </a>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 pl-3 text-xs">
                  <a
                    href="https://afrishades.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze-400/90 hover:text-bronze-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Afrishades</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-charcoal-700">&bull;</span>
                  <a
                    href="https://www.caneafrica.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze-400/90 hover:text-bronze-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Cane Africa</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <a href="#enhance" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  02. Enhance (Acoustics & Booths)
                </a>
              </li>
              <li>
                <a href="#restore" className="text-ivory-300 hover:text-bronze-300 transition-colors font-medium">
                  03. Restore (Overnight Revival)
                </a>
                <div className="mt-1 pl-3 text-xs">
                  <a
                    href="https://wooddoctor.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze-400/90 hover:text-bronze-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>The Wood Doctor</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <a href="#maintain" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  04. Maintain (Rapid Fleet SLA)
                </a>
              </li>
              <li>
                <a href="#protect" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  05. Protect (Compliance Shield)
                </a>
              </li>
              <li>
                <a href="#grow" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  06. Grow (Kitchen Tech & Yield)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hubs */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Operational Hubs
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory-300/90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Johannesburg & Sandton
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Cape Town & Atlantic Seaboard
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Pretoria & Menlyn Maine
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Durban & Umhlanga Rocks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Franschhoek & Stellenbosch
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Dispatch & Contact */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Rapid Response
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-ivory-400 uppercase tracking-wider">Emergency Hotline</p>
                  <a href="tel:+27110000000" className="text-ivory-100 font-mono hover:text-bronze-300">
                    +27 (0) 11 884 9200
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-ivory-400 uppercase tracking-wider">Audit & Proposals</p>
                  <a href="mailto:hospitality@afrismme.com" className="text-ivory-100 hover:text-bronze-300">
                    hospitality@afrismme.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <p className="text-xs text-ivory-300 leading-relaxed">
                  Central Engineering Workshop, Sandton Technical District, Gauteng
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & AfriSMME Ecosystem */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <p>
            &copy; {currentYear} AfriSMME Hub. All rights reserved. A Scinovalities enterprise.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-bronze-300 transition-colors">
              About Us
            </Link>
            <a href="/#audit-tool" className="hover:text-bronze-300 transition-colors">
              Facility Diagnostic
            </a>
            <a href="/#contact" className="hover:text-bronze-300 transition-colors">
              Request Assessment
            </a>
            <span className="text-charcoal-700">|</span>
            <span className="text-ivory-400 font-mono">
              Zero-Downtime Hospitality Engineering
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
