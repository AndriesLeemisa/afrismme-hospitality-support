'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Clock,
  Layers,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sliders,
  Sparkles,
} from 'lucide-react';

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
  category: string;
  location: string;
  spec: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'safari-lodge',
    number: '01',
    image: '/images/hero_safari_lodge.jpg',
    alt: 'Luxury African safari lodge outdoor dining deck with timber flooring and warm ambient lanterns overlooking the African bush',
    title: 'Wilderness Lodges & Safari Verandas',
    category: 'Eco-Tourism & Concession Dining',
    location: 'Greater Kruger & Sabi Sands Private Reserves',
    spec: 'Weatherized Teak Decks • Anti-Termite Shielding • Off-Grid Solar Stability',
  },
  {
    id: 'coastal-terrace',
    number: '02',
    image: '/images/hero_coastal_terrace.jpg',
    alt: 'Upscale coastal dining terrace with striped umbrellas and wicker armchairs looking out to the azure sea',
    title: 'Coastal Terraces & Oceanfront Venues',
    category: 'Waterfront & Marine Hospitality',
    location: 'Atlantic Seaboard & Umhlanga Rocks Waterfronts',
    spec: 'Marine-Grade 316 Stainless • High-Wind Umbrella Anchors • Salt-Mist Barriers',
  },
  {
    id: 'rooftop-skyline',
    number: '03',
    image: '/images/hero_rooftop_skyline.jpg',
    alt: 'Metropolitan sunset rooftop dining pavilion with glass edge overlooking glowing city skyline',
    title: 'Urban Sky Lounges & Rooftop Pavilions',
    category: 'Metropolitan High-Altitude Venues',
    location: 'Sandton, Rosebank & Cape Town City Bowl Skylines',
    spec: 'High-Altitude Acoustic Dampening • Wind-Load Glass Balustrades • Concealed Patio Heating',
  },
  {
    id: 'estate-garden',
    number: '04',
    image: '/images/hero_estate_garden.jpg',
    alt: 'Historic wine estate outdoor garden dining pergola surrounded by lush trees and manicured lawns',
    title: 'Heritage Cape Dutch Estates & Verandas',
    category: 'Historic Wine Valley Destinations',
    location: 'Franschhoek & Stellenbosch Historic Wine Valleys',
    spec: 'Historic Masonry Preservation • Retractable Louvred Pergolas • Microclimate Misting',
  },
  {
    id: 'luxury-lounge',
    number: '05',
    image: '/images/hero_luxury_lounge.jpg',
    alt: 'Sophisticated boutique hotel lounge and bar interior with custom architectural millwork and warm ambient lighting',
    title: 'Executive Hotel Suites & Cocktail Salons',
    category: 'Five-Star Boutique Interiors',
    location: 'Flagship Urban Hotels & Diplomatic Salons',
    spec: 'Zero-VOC Food-Safe Hardwax Finishes • Whisper-Quiet Concealed HVAC • Micro-Zoned Illumination',
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
  const badgesRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const hudTextRef = useRef<HTMLDivElement>(null);
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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.1 },
          '-=0.5'
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          hudRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
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
          duration: 1.2,
          ease: 'power2.inOut',
        });

        // Ken Burns push-in & fade in incoming slide
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

      // Animate HUD caption text change
      if (hudTextRef.current) {
        gsap.fromTo(
          hudTextRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
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

  // Automatic slideshow timer with pause-on-hover support
  useEffect(() => {
    // Initial progress bar animation on first mount
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
      className="relative min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-charcoal-950"
      aria-label="AfriSMME Hospitality Support Introduction"
    >
      {/* =========================================================================
          CINEMATIC GSAP BACKGROUND SLIDESHOW: CRISP, UNBLURRED, SOPHISTICATED
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
              className="object-cover object-center filter brightness-[0.74] contrast-[1.03]"
            />
          </div>
        ))}

        {/* Sophisticated Architectural Scrim & Directional Lighting */}
        {/* Left directional scrim: keeps typography 100% legible without blurring imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent w-full md:w-[70%]" />
        
        {/* Bottom fade: seamless transition into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-transparent h-full" />
        
        {/* Top subtle vignette: clean header integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-transparent to-transparent h-36" />

        {/* Subtle radial focus vignette on the photography */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 72% 42%, transparent 35%, rgba(8,9,11,0.75) 100%)',
          }}
        />

        {/* Soft luxury champagne bronze ambient glow in upper corner */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-bronze-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
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

          {/* Master Headline: Confident, architectural, editorial */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-display font-medium text-ivory-50 tracking-tight leading-[1.06] text-balance mb-6"
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

          {/* Verified Standards Badges (Honest, capability-based) */}
          <div
            ref={badgesRef}
            className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-charcoal-700/60 text-xs text-ivory-300 font-mono"
          >
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

      {/* =========================================================================
          CINEMATIC VENUE HUD & GSAP SLIDESHOW CONTROLS (BOTTOM BAR)
          ========================================================================= */}
      <div
        ref={hudRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 mt-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 p-4 sm:p-5 rounded-xl bg-charcoal-950/85 border border-charcoal-800/80 backdrop-blur-md shadow-2xl">
          {/* Active Venue Caption HUD */}
          <div ref={hudTextRef} className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-bronze-500/20 text-bronze-300 font-mono text-[10px] tracking-wider uppercase font-semibold">
                Venue Environment {currentSlide.number} / {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
              <span className="text-xs text-ivory-400 font-sans truncate">
                {currentSlide.category}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h2 className="text-base sm:text-lg font-display font-medium text-ivory-100 tracking-tight truncate">
                {currentSlide.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-bronze-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-bronze-400 shrink-0" />
                <span className="truncate">{currentSlide.location}</span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-ivory-300 font-mono mt-1 truncate">
              <span className="text-bronze-400 font-medium">Engineered Focus:</span> {currentSlide.spec}
            </p>
          </div>

          {/* Slideshow Timeline Controls */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Numbered Slide Selectors */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Jump to venue slide ${slide.number}: ${slide.title}`}
                    className={`relative px-2.5 py-1.5 rounded text-xs font-mono transition-all duration-300 ${
                      isActive
                        ? 'text-bronze-300 bg-bronze-500/20 font-bold border border-bronze-500/50'
                        : 'text-ivory-400 hover:text-ivory-100 hover:bg-charcoal-800/60'
                    }`}
                  >
                    <span>{slide.number}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-bronze-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next / Prev Navigation Chevrons */}
            <div className="flex items-center gap-1 pl-2 border-l border-charcoal-800">
              <button
                onClick={prevSlide}
                aria-label="Previous venue slide"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-charcoal-900 border border-charcoal-700 text-ivory-300 hover:text-bronze-300 hover:border-bronze-500/60 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next venue slide"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-charcoal-900 border border-charcoal-700 text-ivory-300 hover:text-bronze-300 hover:border-bronze-500/60 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Slide Progress Bar Indicator */}
        <div className="relative w-full h-1 bg-charcoal-800/80 rounded-full overflow-hidden mt-2">
          <div
            ref={progressBarRef}
            className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-bronze-500 to-bronze-300 rounded-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </section>
  );
}
