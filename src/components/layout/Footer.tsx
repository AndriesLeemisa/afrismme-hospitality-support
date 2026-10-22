'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { PhoneCall, Mail, MapPin, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t-2 border-charcoal-800 text-ivory-100 pt-16 sm:pt-20 pb-12 overflow-hidden relative">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-bronze-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-charcoal-800">
          {/* Column 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="mb-6 focus:outline-none focus:ring-2 focus:ring-bronze-400 rounded-sm">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-base text-ivory-100 font-medium leading-relaxed mb-6 max-w-md">
              The integrated hospitality support ecosystem helping restaurants, boutique hotels, and safari lodges identify, solve, restore, maintain, and grow—through one coordinated partnership and scheduled maintenance execution.
            </p>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-charcoal-900 border border-charcoal-700 text-xs font-mono font-bold text-white">
                <Clock className="w-4 h-4 text-emerald-400" />
                Scheduled Daytime & Maintenance Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-charcoal-900 border border-charcoal-700 text-xs font-mono font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-bronze-400" />
                Coordinated Ecosystem
              </span>
            </div>
          </div>

          {/* Column 3: The Six Pillars */}
          <div className="flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-bronze-300 font-extrabold mb-5 font-mono">
              Support Pillars
            </h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <a href="/#attract" className="text-white hover:text-bronze-300 transition-colors">
                  01. Attract (Exterior & Shade)
                </a>
              </li>
              <li>
                <a href="/#enhance" className="text-white hover:text-bronze-300 transition-colors">
                  02. Enhance (Acoustics & Booths)
                </a>
              </li>
              <li>
                <a href="/#restore" className="text-white hover:text-bronze-300 transition-colors">
                  03. Restore (Furniture & Timber)
                </a>
              </li>
              <li>
                <a href="/#maintain" className="text-white hover:text-bronze-300 transition-colors">
                  04. Maintain (Preventative Care)
                </a>
              </li>
              <li>
                <a href="/#protect" className="text-white hover:text-bronze-300 transition-colors">
                  05. Protect (Safety & Compliance)
                </a>
              </li>
              <li>
                <a href="/#grow" className="text-white hover:text-bronze-300 transition-colors">
                  06. Grow (Digital, AI & Menus)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hubs */}
          <div className="flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-bronze-300 font-extrabold mb-5 font-mono">
              Hospitality Footprint
            </h3>
            <ul className="space-y-3 text-base font-medium text-white">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Johannesburg & Sandton
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Cape Town & Atlantic Seaboard
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Pretoria & Menlyn Maine
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Durban & Umhlanga Rocks
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Franschhoek & Stellenbosch
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                Greater Kruger & Safari Lodges
              </li>
            </ul>

            {/* Field Collateral & Downloadable Resources */}
            <div className="mt-6 pt-4 border-t border-charcoal-800">
              <h4 className="text-xs uppercase tracking-widest text-bronze-300 font-extrabold mb-3 font-mono">
                Executive Publications
              </h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link href="/corporate-profile" className="text-white hover:text-bronze-300 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                    Corporate Profile (22p Master)
                  </Link>
                </li>
                <li>
                  <Link href="/brochure" className="text-white hover:text-bronze-300 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                    Premium Sales Brochure (12p)
                  </Link>
                </li>
                <li>
                  <Link href="/booklet" className="text-white hover:text-bronze-300 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bronze-400 shrink-0" />
                    Hospitality Support Booklet (36p)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Direct Dispatch & Contact */}
          <div className="flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-bronze-300 font-extrabold mb-5 font-mono">
              Support & Inquiries
            </h3>
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-ivory-200 font-bold uppercase tracking-wider">Direct Hotline</p>
                  <a href="tel:+27113465018" className="text-white font-mono font-bold hover:text-bronze-300 block">
                    +27 (0) 11 346 5018
                  </a>
                  <span className="text-ivory-200 text-sm block font-mono font-semibold">+27 (0)83 432 8394</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-ivory-200 font-bold uppercase tracking-wider">Assessments & Proposals</p>
                  <a href="mailto:info@afrismmehub.co.za" className="text-white font-semibold hover:text-bronze-300">
                    info@afrismmehub.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-ivory-200 font-bold uppercase tracking-wider">Corporate Headquarters</p>
                  <p className="text-sm text-white font-medium leading-relaxed font-sans">
                    77 Wilmington Crescent, Lyndhurst, Johannesburg
                  </p>
                  <p className="text-xs text-ivory-200 font-medium leading-relaxed mt-0.5">
                    Gauteng, Western Cape, KZN &amp; Southern Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & AfriSMME Ecosystem */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-ivory-200">
          <p>
            &copy; {currentYear} AfriSMME Hub. All rights reserved. Digital & Technology Partner —{' '}
            <a
              href="https://scinovalities.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-bronze-300 transition-colors underline underline-offset-2 decoration-bronze-400"
            >
              Scinovalities
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about" className="text-white hover:text-bronze-300 transition-colors">
              About Us
            </Link>
            <a href="/#pillars" className="text-white hover:text-bronze-300 transition-colors">
              Product & Services
            </a>
            <Link href="/brochure" className="hover:text-white transition-colors text-bronze-300 font-bold">
              Brochure
            </Link>
            <Link href="/booklet" className="hover:text-white transition-colors text-bronze-300 font-bold">
              Company Profile
            </Link>
            <a href="/#ecosystem" className="text-white hover:text-bronze-300 transition-colors">
              Ecosystem
            </a>
            <a href="/#technology" className="text-white hover:text-bronze-300 transition-colors">
              Technology
            </a>
            <a href="/#audit-tool" className="text-white hover:text-bronze-300 transition-colors">
              Assessment
            </a>
            <a href="/#contact" className="text-white hover:text-bronze-300 transition-colors">
              Contact
            </a>
            <span className="text-charcoal-600">|</span>
            <span className="text-bronze-300 font-mono font-bold">
              Identify. Solve. Restore. Maintain. Grow.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
