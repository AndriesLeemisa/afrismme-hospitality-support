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
  number: string;
  image: string;
  alt: string;
  title: string;
  location: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'courtyard-bistro',
    number: '01',
    image: '/images/hero_courtyard_bistro.jpg',
    alt: 'Shaded outdoor garden bistro courtyard with canvas parasols, dining tables with checkered tablecloths, and leafy trees',
    title: 'Garden Courtyard & Veranda Bistros',
    location: 'Historic Verandas & Shaded Courtyards',
  },
  {
    id: 'safari-lodge',
    number: '02',
    image: '/images/hero_safari_lodge.jpg',
    alt: 'Luxury African safari lodge outdoor dining deck with timber flooring and warm ambient lanterns overlooking the African bush',
    title: 'Wilderness Lodges & Safari Verandas',
    location: 'Private Reserves & Safari Destinations',
  },
  {
    id: 'coastal-terrace',
    number: '03',
    image: '/images/hero_coastal_terrace.jpg',
    alt: 'Upscale coastal dining terrace with striped umbrellas and wicker armchairs looking out to the azure sea',
    title: 'Coastal Terraces & Oceanfront Venues',
    location: 'Atlantic Seaboard & Coastal Waterfronts',
  },
  {
    id: 'rooftop-skyline',
    number: '04',
    image: '/images/hero_rooftop_skyline.jpg',
    alt: 'Metropolitan sunset rooftop dining pavilion with glass edge overlooking glowing city skyline',
    title: 'Urban Sky Lounges & Rooftop Pavilions',
    location: 'Metropolitan City Skylines',
  },
  {
    id: 'estate-garden',
    number: '05',
    image: '/images/hero_estate_garden.jpg',
    alt: 'Historic wine estate outdoor garden dining pergola surrounded by lush trees and manicured lawns',
    title: 'Heritage Estates & Veranda Pavilions',
    location: 'Historic Cape Dutch Wine Valleys',
  },
  {
    id: 'luxury-lounge',
    number: '06',
    image: '/images/hero_luxury_lounge.jpg',
    alt: 'Sophisticated boutique hotel lounge and bar interior with custom architectural millwork and warm ambient lighting',
    title: 'Executive Hotel Lounges & Dining Salons',
    location: 'Boutique Hotels & Private Dining Suites',
  },
];

const SLIDE_DURATION = 6500; // ms per slide

export function Hero({ onOpenAudit }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const slideElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initial GSAP Entrance Animation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.5'
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.6'
        )
        .fromTo(
          navRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Slide Switch Handler with GSAP Transitions
  const goToSlide = useCallback((newIndex: number) => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === newIndex) return prevIndex;

      const currentSlideEl = slideElementsRef.current[prevIndex];
      const nextSlideEl = slideElementsRef.current[newIndex];

      if (currentSlideEl && nextSlideEl) {
        // Fade out current slide
        gsap.to(currentSlideEl, {
          opacity: 0,
          duration: 1.1,
          ease: 'power2.inOut',
        });

        // Ken Burns zoom & fade in incoming slide
        gsap.fromTo(
          nextSlideEl,
          { opacity: 0, scale: 1.0 },
          {
            opacity: 1,
            scale: 1.04,
            duration: SLIDE_DURATION / 1000,
            ease: 'sine.out',
          }
        );
      }

      // Reset & animate progress bar
      if (progressBarRef.current) {
        gsap.killTweensOf(progressBarRef.current);
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: SLIDE_DURATION / 1000,
            ease: 'none',
            transformOrigin: 'left center',
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
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: SLIDE_DURATION / 1000,
          ease: 'none',
          transformOrigin: 'left center',
        }
      );
    }
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (progressBarRef.current) {
        gsap.getTweensOf(progressBarRef.current).forEach((t) => t.pause());
      }
      return;
    }

    if (progressBarRef.current) {
      gsap.getTweensOf(progressBarRef.current).forEach((t) => t.resume());
    }

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-8 sm:pb-10 overflow-hidden bg-charcoal-950"
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
              className="object-cover object-center filter brightness-[0.76] contrast-[1.03]"
            />
          </div>
        ))}

        {/* Sophisticated Architectural Scrim & Directional Contrast */}
        {/* Left directional scrim: maintains typography clarity without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-transparent w-full md:w-[65%]" />
        
        {/* Bottom subtle gradient for clean transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent h-full" />
        
        {/* Top vignette for clean navigation integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-transparent to-transparent h-28" />

        {/* Subtle radial focus vignette on the photography */}
        <div
          className="absolute inset-0 opacity-35 mix-blend-multiply pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, transparent 35%, rgba(8,9,11,0.7) 100%)',
          }}
        />
      </div>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT: DECLUTTERED, CONFIDENT, IMPACTFUL
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Pill */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/90 border border-bronze-500/40 mb-5 shadow-subtle-dark"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-bronze-300 font-medium">
              Restaurant & Hospitality Engineering
            </span>
          </div>

          {/* Master Headline: Large, editorial, uncluttered */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-ivory-50 tracking-tight leading-[1.08] text-balance mb-5"
          >
            We Engineer, Restore & Protect Africa’s{' '}
            <span className="italic font-light text-gold-gradient">
              Most Coveted Dining Spaces.
            </span>
          </h1>

          {/* Single Focused Editorial Subheading */}
          <p
            ref={subheadRef}
            className="text-base sm:text-lg md:text-xl text-ivory-200/90 font-normal leading-relaxed text-balance max-w-2xl mb-8"
          >
            Architectural terrace systems, dining room acoustics, and overnight dark-hours facility restoration—delivered with zero daytime service disruption.
          </p>

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
          DECLUTTERED MINIMALIST SLIDESHOW CONTROLS (UNOBTRUSIVE)
          ========================================================================= */}
      <div
        ref={navRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4"
      >
        <div className="flex items-center justify-between gap-4 py-2 border-t border-charcoal-800/60">
          {/* Subtle Venue Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-xs text-bronze-400 font-semibold tracking-wider">
              {currentSlide.number} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
            <span className="w-1 h-1 rounded-full bg-charcoal-600 hidden sm:inline-block" />
            <span className="text-xs text-ivory-300 font-medium truncate">
              {currentSlide.title}
            </span>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Slide Dots / Pills */}
            <div className="flex items-center gap-1">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Switch to slide ${slide.number}`}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-6 bg-bronze-400'
                        : 'w-2 bg-charcoal-700 hover:bg-charcoal-500'
                    }`}
                  />
                );
              })}
            </div>

            {/* Subtle Prev / Next Arrows */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-md flex items-center justify-center text-ivory-400 hover:text-ivory-100 hover:bg-charcoal-800/80 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-7 h-7 rounded-md flex items-center justify-center text-ivory-400 hover:text-ivory-100 hover:bg-charcoal-800/80 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Discreet Slide Progress Line */}
        <div className="relative w-full h-[2px] bg-charcoal-800/50 rounded-full overflow-hidden mt-1">
          <div
            ref={progressBarRef}
            className="absolute top-0 bottom-0 left-0 w-full bg-bronze-400/80 rounded-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </section>
  );
}
