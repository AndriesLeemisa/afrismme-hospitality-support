'use client';

import React from 'react';
import { ContactForm } from './ContactForm';
import { PhoneCall, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

interface CTASectionProps {
  preselectedPillarId?: string;
}

export function CTASection({ preselectedPillarId }: CTASectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-charcoal-950 border-t border-charcoal-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Access */}
          <div className="lg:col-span-5">
            <span className="text-xs tracking-cinematic uppercase text-bronze-400 font-medium">
              Start The Conversation
            </span>
            <h2 className="mt-3 text-display-2 font-display font-medium text-ivory-50 tracking-tight leading-[1.08]">
              Let&apos;s assess{' '}
              <span className="italic font-light text-gold-gradient">your venue.</span>
            </h2>

            <p className="mt-4 text-lead text-ivory-300/85 leading-relaxed font-normal">
              Tell us about your challenges or goals. We assess your space, prioritise high-impact solutions, and coordinate execution outside trading hours.
            </p>

            {/* Direct Access Hotlines */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+27118849200"
                className="p-4 rounded-sm bg-charcoal-900 border border-charcoal-800 hover:border-bronze-500/40 flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-300">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-400 block">
                    Direct Line
                  </span>
                  <span className="font-display text-lg font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors">
                    +27 (0) 11 884 9200
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/27118849200?text=Hello%20AfriSMME%20Hospitality%20Support,%20I%20would%20like%20to%20enquire%20about%20a%20venue%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-charcoal-900 border border-charcoal-800 hover:border-emerald-500/40 flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-400 block">
                    WhatsApp Support
                  </span>
                  <span className="font-display text-lg font-semibold text-ivory-50 group-hover:text-emerald-300 transition-colors">
                    Connect on WhatsApp
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 pt-6 border-t border-charcoal-800 flex items-center gap-6 text-xs text-ivory-300 font-mono">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-bronze-400" />
                Zero daytime disruption
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                Single accountable partner
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm preselectedPillarId={preselectedPillarId} />
          </div>
        </div>
      </div>
    </section>
  );
}
