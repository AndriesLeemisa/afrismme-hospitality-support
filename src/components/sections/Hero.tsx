'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { BRAND_STATS } from '@/data/services';
import { ArrowDown, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

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
  const statsRef = useRef<HTMLDivElement>(null);
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
          statsRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' },
          '0'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-16 overflow-hidden bg-charcoal-950"
      aria-label="AfriSMME Hospitality Support Introduction"
    >
      {/* Background authentic luxury dining photograph with subtle cinematic overlay */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="/images/hero_luxury_dining.jpg"
          alt="Atmospheric luxury dining room with polished timber and warm ambient illumination"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.05]"
        />
        {/* Subtle layered vignette and directional gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/40 to-charcoal-950/90" />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-900/80 border border-bronze-500/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-bronze-300 font-medium">
              Turnkey Hospitality Engineering & Facility Support
            </span>
          </div>

          {/* Master Headline: Large, confident, editorial */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-medium text-ivory-50 tracking-tight leading-[1.05] text-balance mb-6"
          >
            We Engineer, Restore & Protect Africa’s{' '}
            <span className="italic font-light text-gold-gradient">
              Most Coveted Dining Spaces.
            </span>
          </h1>

          {/* Subheading */}
          <p
            ref={subheadRef}
            className="text-lg sm:text-xl md:text-2xl text-ivory-200/90 font-normal leading-relaxed text-balance max-w-3xl mb-10"
          >
            From bespoke architectural terrace systems and discrete dining room acoustics to overnight timber restoration and 24/7 preventative kitchen fleet care—delivered with{' '}
            <strong className="text-bronze-300 font-semibold">zero daytime service disruption</strong>.
          </p>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
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

            <a
              href="#contact"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-wider text-ivory-300 hover:text-bronze-300 transition-colors py-2 px-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Overnight SLAs Available</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Key Performance Metrics Strip */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-charcoal-700/60">
          {BRAND_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 rounded-sm bg-charcoal-900/60 backdrop-blur-md border border-charcoal-700/40 hover:border-bronze-500/30 transition-colors"
            >
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ivory-50 tracking-tight text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-ivory-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs text-ivory-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
