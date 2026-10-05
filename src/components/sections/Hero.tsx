'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOpenAudit?: () => void;
}

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'luxury-dining',
    image: '/images/hero_luxury_dining.jpg',
    alt: 'High-end luxury restaurant dining room with architectural lighting and bespoke furniture',
  },
  {
    id: 'courtyard-bistro',
    image: '/images/hero_courtyard_bistro.jpg',
    alt: 'Shaded outdoor garden bistro courtyard with canvas parasols and dining tables under leafy trees',
  },
  {
    id: 'safari-lodge',
    image: '/images/hero_safari_lodge.jpg',
    alt: 'Luxury African safari lodge outdoor dining deck with timber flooring and warm ambient lanterns overlooking the African bush',
  },
  {
    id: 'coastal-terrace',
    image: '/images/hero_coastal_terrace.jpg',
    alt: 'Upscale coastal dining terrace with striped umbrellas and wicker armchairs looking out to the azure sea',
  },
  {
    id: 'rooftop-skyline',
    image: '/images/hero_rooftop_skyline.jpg',
    alt: 'Metropolitan sunset rooftop dining pavilion with glass edge overlooking glowing city skyline',
  },
  {
    id: 'estate-garden',
    image: '/images/hero_estate_garden.jpg',
    alt: 'Historic wine estate outdoor garden dining pergola surrounded by lush trees and manicured lawns',
  },
  {
    id: 'luxury-lounge',
    image: '/images/hero_luxury_lounge.jpg',
    alt: 'Sophisticated boutique hotel lounge and bar interior with custom architectural millwork and warm ambient lighting',
  },
];

const SLIDE_DURATION = 3800; // ms per slide (fast, engaging, cinematic)

export function Hero({ onOpenAudit }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const slideElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initial GSAP Entrance Animation (Crisp & Snappy)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.25'
        );

      // Start gentle Ken Burns push on initial slide
      if (slideElementsRef.current[0]) {
        gsap.fromTo(
          slideElementsRef.current[0],
          { scale: 1.0 },
          { scale: 1.035, duration: SLIDE_DURATION / 1000, ease: 'sine.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Slide Switch Handler with Crisp GSAP Crossfade and Continuous Cinematic Zoom
  const goToSlide = useCallback((newIndex: number) => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === newIndex) return prevIndex;

      const currentSlideEl = slideElementsRef.current[prevIndex];
      const nextSlideEl = slideElementsRef.current[newIndex];

      if (currentSlideEl && nextSlideEl) {
        gsap.killTweensOf(currentSlideEl);
        gsap.killTweensOf(nextSlideEl);

        // Fast, smooth crossfade out
        gsap.to(currentSlideEl, {
          opacity: 0,
          duration: 0.65,
          ease: 'power2.inOut',
        });

        // Fast fade-in for opacity so the photo is promptly vivid
        gsap.fromTo(
          nextSlideEl,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
          }
        );

        // Continuous subtle Ken Burns push across the slide duration
        gsap.fromTo(
          nextSlideEl,
          { scale: 1.0 },
          {
            scale: 1.035,
            duration: SLIDE_DURATION / 1000,
            ease: 'sine.out',
          }
        );
      }

      return newIndex;
    });
  }, []);

  const nextSlide = useCallback(() => {
    const nextIdx = (activeIndex + 1) % HERO_SLIDES.length;
    goToSlide(nextIdx);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx = (activeIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prevIdx);
  }, [activeIndex, goToSlide]);

  // Automatic slideshow timer with pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="group relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-6 overflow-hidden bg-charcoal-950"
      aria-label="AfriSMME Hospitality Support Introduction"
    >
      {/* =========================================================================
          AUTHENTIC HOSPITALITY PHOTOGRAPHY: CRISP, UNBLURRED, CINEMATIC
          ========================================================================= */}
      <div
        ref={slidesContainerRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            ref={(el) => {
              slideElementsRef.current[idx] = el;
            }}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: idx === 0 ? 1 : 0,
              zIndex: idx === activeIndex ? 10 : 1,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.88] contrast-[1.02]"
            />
          </div>
        ))}

        {/* Directional scrim: maintains typography clarity on the left while keeping the photography bright and unobstructed */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/50 to-transparent w-full md:w-[60%] pointer-events-none" />

        {/* Soft bottom edge transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />

        {/* Soft top edge transition for navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-charcoal-950/70 to-transparent pointer-events-none" />
      </div>

      {/* Floating Side Navigation Chevrons (Subtle, appear on hover, zero clutter) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-charcoal-950/40 hover:bg-charcoal-950/80 text-ivory-300 hover:text-white backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-charcoal-950/40 hover:bg-charcoal-950/80 text-ivory-300 hover:text-white backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT: TITLE ONLY, PURE CINEMATIC LUXURY
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Master Headline: Title Only */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-display font-medium text-ivory-50 tracking-tight leading-[1.06] text-balance mb-8"
          >
            Africa’s Premier Turnkey{' '}
            <span className="italic font-light text-gold-gradient">
              Hospitality Support Fleet.
            </span>
          </h1>

          {/* Clean Action Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {onOpenAudit ? (
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAudit}
                withArrow
                className="text-center shadow-lg shadow-bronze-500/10"
              >
                Launch Diagnostic Audit
              </Button>
            ) : (
              <Button
                href="#audit-tool"
                variant="primary"
                size="lg"
                withArrow
                className="text-center shadow-lg shadow-bronze-500/10"
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
        </div>
      </div>

      {/* =========================================================================
          DISCREET CINEMATIC INDICATORS (PURE MINIMALISM, ZERO OBSTRUCTION)
          ========================================================================= */}
      <div className="relative z-20 flex items-center justify-center gap-2 pt-6">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                isActive
                  ? 'w-7 bg-bronze-400 shadow-sm shadow-bronze-400/50'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
