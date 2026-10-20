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
              The integrated hospitality support ecosystem helping restaurants, boutique hotels, and safari lodges identify, solve, restore, maintain, and grow—through one coordinated partnership and scheduled maintenance execution.
            </p>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-700/80 text-[11px] font-mono text-ivory-200">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Scheduled Daytime & Maintenance Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-700/80 text-[11px] font-mono text-ivory-200">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                Coordinated Ecosystem
              </span>
            </div>
          </div>

          {/* Column 3: The Six Pillars */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Support Pillars
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#attract" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  01. Attract (Exterior & Shade)
                </a>
              </li>
              <li>
                <a href="/#enhance" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  02. Enhance (Acoustics & Booths)
                </a>
              </li>
              <li>
                <a href="/#restore" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  03. Restore (Furniture & Timber)
                </a>
              </li>
              <li>
                <a href="/#maintain" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  04. Maintain (Preventative Care)
                </a>
              </li>
              <li>
                <a href="/#protect" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  05. Protect (Safety & Compliance)
                </a>
              </li>
              <li>
                <a href="/#grow" className="text-ivory-300 hover:text-bronze-300 transition-colors">
                  06. Grow (Digital, AI & Menus)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hubs */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Hospitality Footprint
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
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                Greater Kruger & Safari Lodges
              </li>
            </ul>

            {/* Field Collateral & Downloadable Resources */}
            <div className="mt-6 pt-4 border-t border-charcoal-800">
              <h4 className="text-[11px] uppercase tracking-cinematic text-bronze-400 font-semibold mb-2.5 font-mono">
                Executive Publications
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/corporate-profile" className="text-ivory-300 hover:text-bronze-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                    Corporate Profile (22p Master)
                  </Link>
                </li>
                <li>
                  <Link href="/brochure" className="text-ivory-300 hover:text-bronze-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                    Premium Sales Brochure (12p)
                  </Link>
                </li>
                <li>
                  <Link href="/booklet" className="text-ivory-300 hover:text-bronze-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                    Hospitality Support Booklet (36p)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Direct Dispatch & Contact */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-cinematic text-bronze-400 font-semibold mb-5 font-mono">
              Support & Inquiries
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-ivory-400 uppercase tracking-wider">Direct Hotline</p>
                  <a href="tel:+27113465018" className="text-ivory-100 font-mono hover:text-bronze-300">
                    +27 (0) 11 346 5018
                  </a>
                  <span className="text-ivory-400 text-xs block font-mono">+27 (0)83 432 8394</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-ivory-400 uppercase tracking-wider">Assessments & Proposals</p>
                  <a href="mailto:info@afrismmehub.co.za" className="text-ivory-100 hover:text-bronze-300">
                    info@afrismmehub.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-ivory-400 uppercase tracking-wider">Corporate Headquarters</p>
                  <p className="text-xs text-ivory-200 leading-relaxed font-sans">
                    77 Wilmington Crescent, Lyndhurst, Johannesburg
                  </p>
                  <p className="text-[11px] text-ivory-400 leading-relaxed">
                    Gauteng, Western Cape, KZN &amp; Southern Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & AfriSMME Ecosystem */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <p>
            &copy; {currentYear} AfriSMME Hub. All rights reserved. Digital & Technology Partner — Scinovalities.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-bronze-300 transition-colors">
              About Us
            </Link>
            <a href="/#pillars" className="hover:text-bronze-300 transition-colors">
              Product & Services
            </a>
            <Link href="/brochure" className="hover:text-bronze-300 transition-colors text-bronze-300">
              Brochure
            </Link>
            <Link href="/booklet" className="hover:text-bronze-300 transition-colors text-bronze-300">
              Company Profile
            </Link>
            <a href="/#ecosystem" className="hover:text-bronze-300 transition-colors">
              Ecosystem
            </a>
            <a href="/#technology" className="hover:text-bronze-300 transition-colors">
              Technology
            </a>
            <a href="/#audit-tool" className="hover:text-bronze-300 transition-colors">
              Assessment
            </a>
            <a href="/#contact" className="hover:text-bronze-300 transition-colors">
              Contact
            </a>
            <span className="text-charcoal-700">|</span>
            <span className="text-ivory-400 font-mono">
              Identify. Solve. Restore. Maintain. Grow.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
