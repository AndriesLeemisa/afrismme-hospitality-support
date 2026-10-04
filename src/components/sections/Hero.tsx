'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, Clock, Layers } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOpenAudit?: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.1 },
          '-=0.5'
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
          '0'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-36 pb-20 overflow-hidden bg-charcoal-950"
      aria-label="AfriSMME Hospitality Support Introduction"
    >
      {/* Background authentic luxury dining photograph: CRISP, SHARP, NO BLUR */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="/images/hero_luxury_dining.jpg"
          alt="Luxury restaurant dining room with polished timber and warm ambient illumination"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.02]"
        />

        {/* Clean directional contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/25" />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Eyebrow Pill */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-950/90 border border-bronze-500/40 mb-6 shadow-subtle-dark"
          >
            <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-bronze-300 font-medium">
              Turnkey Hospitality Engineering & Facility Support
            </span>
          </div>

          {/* Master Headline: Large, confident, editorial */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-display font-medium text-ivory-50 tracking-tight leading-[1.05] text-balance mb-6"
          >
            We Engineer, Restore & Protect Africa’s{' '}
            <span className="italic font-light text-gold-gradient">
              Most Coveted Dining Spaces.
            </span>
          </h1>

          {/* Subheading */}
          <p
            ref={subheadRef}
            className="text-lg sm:text-xl md:text-2xl text-ivory-200/95 font-normal leading-relaxed text-balance max-w-3xl mb-10"
          >
            From bespoke architectural terrace systems and discrete dining room acoustics to overnight timber restoration and 24/7 preventative kitchen fleet care—delivered with{' '}
            <strong className="text-bronze-300 font-semibold">zero daytime service disruption</strong>.
          </p>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
            {onOpenAudit ? (
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAudit}
                withArrow
                className="text-center"
              >
                Launch Diagnostic Audit
              </Button>
            ) : (
              <Button
                href="#audit-tool"
                variant="primary"
                size="lg"
                withArrow
                className="text-center"
              >
                Launch Diagnostic Audit
              </Button>
            )}

            <Button
              href="#pillars"
              variant="secondary"
              size="lg"
              className="text-center"
            >
              Explore the 6 Pillars
            </Button>
          </div>

          {/* Verified Standards Badges (Honest, capability-based) */}
          <div ref={badgesRef} className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-charcoal-700/60 text-xs text-ivory-300 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Overnight Dark-Hours Protocol (23:00–07:00)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-bronze-400" />
              <span>SANS 10400 & NFPA 96 Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-bronze-400" />
              <span>Single Accountable Master SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
