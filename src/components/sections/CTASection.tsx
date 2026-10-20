'use client';

import React from 'react';
import { ContactForm } from './ContactForm';
import { PhoneCall, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

interface CTASectionProps {
  preselectedPillarId?: string;
}

export function CTASection({ preselectedPillarId }: CTASectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory-100 border-t border-ivory-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Access */}
          <ScrollFloatReveal direction="up" delay={50} className="lg:col-span-5">
            <span className="text-xs tracking-cinematic uppercase text-bronze-700 font-semibold">
              Start The Conversation
            </span>
            <h2 className="mt-3 text-display-2 font-display font-medium text-charcoal-950 tracking-tight leading-[1.08]">
              Let&apos;s assess{' '}
              <span className="italic font-light text-bronze-700">your venue.</span>
            </h2>

            <p className="mt-4 text-lead text-charcoal-800/85 leading-relaxed font-normal">
              Tell us about your challenges or goals. We assess your space, prioritise high-impact solutions, and coordinate execution around your scheduled maintenance and operating hours.
            </p>

            {/* Direct Access Hotlines */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+27113465018"
                className="p-4 rounded-sm bg-ivory-50 border border-ivory-300 hover:border-bronze-500 flex items-center gap-4 transition-all hover:-translate-y-1 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-sm bg-charcoal-900 flex items-center justify-center shrink-0 text-bronze-300">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-600 block">
                    Direct Office Hotline
                  </span>
                  <span className="font-display text-lg font-semibold text-charcoal-950 group-hover:text-bronze-700 transition-colors">
                    +27 (0) 11 346 5018
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/27834328394?text=Hello%20AfriSMME%20Hospitality%20Support,%20I%20would%20like%20to%20enquire%20about%20a%20venue%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-ivory-50 border border-ivory-300 hover:border-emerald-600/60 flex items-center gap-4 transition-all hover:-translate-y-1 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-sm bg-charcoal-900 flex items-center justify-center shrink-0 text-emerald-300">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-600 block">
                    WhatsApp Priority Support
                  </span>
                  <span className="font-display text-lg font-semibold text-charcoal-950 group-hover:text-charcoal-800 transition-colors">
                    +27 (0) 83 432 8394
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 pt-6 border-t border-ivory-300 flex items-center gap-6 text-xs text-charcoal-800 font-mono">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-bronze-700" />
                Phased daytime scheduling
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-700" />
                Single accountable partner
              </span>
            </div>
          </ScrollFloatReveal>

          {/* Right Column: Contact Form */}
          <ScrollFloatReveal direction="up" delay={150} className="lg:col-span-7">
            <ContactForm preselectedPillarId={preselectedPillarId} />
          </ScrollFloatReveal>
        </div>
      </div>
    </section>
  );
}
