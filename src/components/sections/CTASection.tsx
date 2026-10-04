'use client';

import React from 'react';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import { PhoneCall, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';

interface CTASectionProps {
  preselectedPillarId?: string;
}

export function CTASection({ preselectedPillarId }: CTASectionProps) {
  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Access & Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/10 border border-bronze-500/30 text-[11px] font-mono text-bronze-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE DEPLOYMENT QUEUE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ivory-50 tracking-tight leading-[1.1] mb-6">
                Protect Your Standards.{' '}
                <span className="italic font-light text-gold-gradient">
                  Elevate Your Margin.
                </span>
              </h2>

              <p className="text-base text-ivory-300/90 leading-relaxed font-normal mb-8">
                Whether you need immediate overnight timber refinishing, custom acoustic baffles to silence dining cacophony, or emergency kitchen extraction fleet dispatch—AfriSMME is your turnkey operational partner.
              </p>

              {/* Direct Access Hotlines Box */}
              <div className="space-y-4 mb-8">
                <div className="p-4 sm:p-5 rounded-sm bg-charcoal-900 border border-charcoal-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-300">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-400 block">
                      Direct Emergency Fleet Hotline (24/7)
                    </span>
                    <a
                      href="tel:+27118849200"
                      className="font-display text-xl font-semibold text-ivory-50 hover:text-bronze-300 transition-colors"
                    >
                      +27 (0) 11 884 9200
                    </a>
                    <p className="text-xs text-ivory-400 mt-0.5">
                      Sub-60 minute dispatch across Sandton, Cape Town & Pretoria
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-sm bg-charcoal-900 border border-charcoal-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-400 block">
                      Instant WhatsApp Operator Line
                    </span>
                    <a
                      href="https://wa.me/27118849200?text=Hello%20AfriSMME%20Hospitality%20Support,%20I%20would%20like%20to%20enquire%20about%20support%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl font-semibold text-ivory-50 hover:text-emerald-300 transition-colors"
                    >
                      Connect on WhatsApp
                    </a>
                    <p className="text-xs text-ivory-400 mt-0.5">
                      Send floorplan sketches, photos of worn furniture, or urgent equipment issues
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-charcoal-800">
                <div className="flex items-center gap-2 text-xs text-ivory-300">
                  <ShieldCheck className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>SANS & NFPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ivory-300">
                  <Clock className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>23:00 to 07:00 Execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ivory-300">
                  <Award className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Dedicated Account Director</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ivory-300">
                  <ShieldCheck className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Comprehensive Liability Cover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Component */}
          <div className="lg:col-span-7">
            <ContactForm preselectedPillarId={preselectedPillarId} />
          </div>
        </div>
      </div>
    </section>
  );
}
