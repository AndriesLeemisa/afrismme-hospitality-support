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
  category: string;
  title: string;
  location: string;
  highlight: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'coastal-terrace',
    image: '/images/hero/hero-camps-bay-sunset.jpg',
    alt: 'Luxury coastal outdoor restaurant terrace with dining umbrellas and tables overlooking the ocean',
    category: 'Outdoor Terraces & Shading Architecture',
    title: 'Africa’s Premier Dining & Hospitality Spaces',
    location: 'Hospitality Support Across South Africa',
    highlight: 'Commercial cantilever shade systems & ambient outdoor pergolas',
  },
  {
    id: 'safari-lodge',
    image: '/images/hero/hero-03-thatched-lodge.jpg',
    alt: 'Luxury African safari lodge outdoor dining pavilion with thatched roofing and infinity deck',
    category: 'Premier Safari Lodges & Bush Escapes',
    title: 'Thatched Dining Decks & Hardwood Joinery',
    location: 'Greater Kruger & Sabi Sands',
    highlight: 'Organic timber oils & scheduled preventative maintenance',
  },
  {
    id: 'country-estate',
    image: '/images/hero/hero-04-country-estate.jpg',
    alt: 'Historic wine estate outdoor dining courtyard with parasols and lush gardens',
    category: 'Historic Wine Estates & Courtyards',
    title: 'Heritage Dining Pergolas & Restored Oak Tables',
    location: 'Stellenbosch & Franschhoek',
    highlight: 'Artisanal table restoration completed in scheduled batches',
  },
  {
    id: 'hotel-poolside',
    image: '/images/hero/hero-06-palm-resort.jpg',
    alt: '5-star luxury hotel outdoor pool terrace with palm trees and sun umbrellas',
    category: 'Boutique Hotels & Pool Lounges',
    title: 'Commercial Cantilever Umbrellas & Cabanas',
    location: 'Umhlanga Rocks & Coastal Hubs',
    highlight: 'Weather-resistant shade hardware & contract upholstery',
  },
  {
    id: 'hotel-dusk',
    image: '/images/hero/hero-07-hotel-dusk.jpg',
    alt: 'Grand luxury hotel dining courtyard illuminated at dusk',
    category: 'Metropolitan Hotels & Bistros',
    title: 'Atmospheric Courtyards & Facade Illumination',
    location: 'Sandton & Johannesburg',
    highlight: 'Turnkey physical facility management with single-partner accountability',
  },
  {
    id: 'bistro-patio',
    image: '/images/hero/hero-08-bistro-patio.jpg',
    alt: 'Luxury outdoor bistro streetfront patio with tables, chairs, and large dining umbrellas',
    category: 'Gourmet Bistros & Street Terraces',
    title: 'Streetfront Terraces & Café Shading',
    location: 'Bree Street, Kloof & Rosebank',
    highlight: 'All-weather terrace protection & custom architectural parasols',
  },
  {
    id: 'atrium-lounge',
    image: '/images/hero/hero-13-atrium-lounge.jpg',
    alt: 'Grand architectural atrium lounge with illuminated arches and luxury teal banquettes',
    category: 'Grand Atriums & Architectural Lounges',
    title: 'Vaulted Atrium Lounges & Custom Banquettes',
    location: 'Sandton, Menlyn & Pretoria',
    highlight: 'Architectural lighting & bespoke banquette seating',
  },
  {
    id: 'canopy-garden',
    image: '/images/hero/hero-14-canopy-garden.jpg',
    alt: 'Lush tree canopy shaded garden terrace dining on hardwood timber deck',
    category: 'Forest Canopies & Garden Dining Decks',
    title: 'Garden Terraces & Hardwood Decking',
    location: 'Constantia Valley & Country Escapes',
    highlight: 'Weather-resistant timber decking & outdoor seating suites',
  },
];

const SLIDE_DURATION = 4600; // ms per slide (immersive, cinematic cadence)

const HEADLINE_LINE1 = 'Identify. Solve. Restore. Maintain. Grow.';

export function Hero({ onOpenAudit }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isFirstMount = useRef(true);
  const [line1Typed, setLine1Typed] = useState(HEADLINE_LINE1);
  const [line2Typed, setLine2Typed] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const slideElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Real-Time Title Writing Animation:
  // On mount: writes Line 1 ("We Engineer, Restore & Protect"), then writes Line 2 (first title).
  // On every subsequent GSAP slide change: Line 1 remains steady while Line 2 types the new image's title in real-time.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setLine1Typed(HEADLINE_LINE1);
        setLine2Typed(HERO_SLIDES[activeIndex].title);
        setIsTypingDone(true);
        return;
      }
    }

    const targetLine2 = HERO_SLIDES[activeIndex].title;
    let timeoutId: NodeJS.Timeout | null = null;
    let intervalId: NodeJS.Timeout | null = null;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      setLine1Typed('');
      setLine2Typed('');
      setIsTypingDone(false);

      let l1Index = 0;
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          l1Index++;
          setLine1Typed(HEADLINE_LINE1.slice(0, l1Index));
          if (l1Index >= HEADLINE_LINE1.length) {
            if (intervalId) clearInterval(intervalId);

            timeoutId = setTimeout(() => {
              let l2Index = 0;
              intervalId = setInterval(() => {
                l2Index++;
                setLine2Typed(targetLine2.slice(0, l2Index));
                if (l2Index >= targetLine2.length) {
                  if (intervalId) clearInterval(intervalId);
                  setIsTypingDone(true);
                }
              }, 22);
            }, 60);
          }
        }, 22);
      }, 120);
    } else {
      setLine1Typed(HEADLINE_LINE1);
      setLine2Typed('');
      setIsTypingDone(false);

      let l2Index = 0;
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          l2Index++;
          setLine2Typed(targetLine2.slice(0, l2Index));
          if (l2Index >= targetLine2.length) {
            if (intervalId) clearInterval(intervalId);
            setIsTypingDone(true);
          }
        }, 22);
      }, 80);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeIndex]);

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

        // Smooth subtle pulse on headline as slide changes
        if (headlineRef.current) {
          gsap.fromTo(
            headlineRef.current,
            { opacity: 0.4 },
            { opacity: 1, duration: 0.35, ease: 'power2.out' }
          );
        }
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
              priority={idx < 2}
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
          MAIN EDITORIAL CONTENT: CINEMATIC SOPHISTICATION & HIGH CONVERSION
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Ecosystem Pillar Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-bronze-500/30 text-[11px] font-mono uppercase tracking-wider text-bronze-300 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AfriSMME Hub • Restaurant & Hospitality Support Ecosystem</span>
          </div>

          {/* Master Headline: Fluid Scale with Real-Time Live Writing for Each Image */}
          <h1
            ref={headlineRef}
            className="text-display-1 font-display font-medium text-ivory-50 tracking-tight leading-[1.04] mb-5 sm:mb-6"
          >
            <span className="block min-h-[1.1em]">
              {line1Typed}
            </span>
            <span className="block mt-1 sm:mt-2 italic font-light text-gold-gradient min-h-[2.2em] sm:min-h-[1.15em]">
              {line2Typed}
              {/* Real-time Blinking Bronze Cursor */}
              <span
                className={`inline-block w-[3px] md:w-[4px] lg:w-[5px] h-[0.85em] bg-bronze-400 ml-2 align-baseline shadow-[0_0_12px_#c5a880] transition-opacity duration-300 ${
                  isTypingDone ? 'animate-pulse opacity-75' : 'opacity-100'
                }`}
              />
            </span>
          </h1>

          {/* Core Strategic Narrative Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-ivory-200/90 font-normal leading-relaxed mb-8 max-w-2xl text-pretty">
            We help restaurants, lodges, and hospitality venues improve their guest experience, physical spaces, operations, and technology through one coordinated ecosystem.
          </p>

          {/* High-Impact Action Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {onOpenAudit ? (
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAudit}
                withArrow
                className="text-center shadow-lg shadow-bronze-500/10"
              >
                Assess Your Venue
              </Button>
            ) : (
              <Button
                href="#audit-tool"
                variant="primary"
                size="lg"
                withArrow
                className="text-center shadow-lg shadow-bronze-500/10"
              >
                Assess Your Venue
              </Button>
            )}

            <Button
              href="#pillars"
              variant="secondary"
              size="lg"
              className="text-center"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DISCREET CINEMATIC INDICATORS & LOCATION STAMP WITH INTERACTIVE SWITCHING
          ========================================================================= */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-2 gap-3">
        {/* Subtle Architectural Location Stamp */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-ivory-300/80 bg-charcoal-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 transition-opacity duration-300 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
          <span className="text-ivory-200 font-medium">{HERO_SLIDES[activeIndex].location}</span>
          <span className="text-white/30">•</span>
          <span className="text-bronze-300/90 hidden md:inline">{HERO_SLIDES[activeIndex].category}</span>
        </div>

        {/* 17 Slide Navigation Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-1">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Switch to slide ${idx + 1}: ${slide.title}`}
                title={`${slide.title} (${slide.location})`}
                className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-bronze-400 ${
                  isActive
                    ? 'w-7 sm:w-8 bg-bronze-400 shadow-sm shadow-bronze-400/60'
                    : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/70'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
