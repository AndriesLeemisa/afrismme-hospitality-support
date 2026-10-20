'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RotateCcw, ShieldCheck, Clock, Sparkles } from 'lucide-react';

const STATEMENT_PREFIX = 'We Engineer, Restore & Protect ';
const STATEMENT_HIGHLIGHT = 'Africa’s Most Coveted Dining Spaces.';
const FULL_STATEMENT = STATEMENT_PREFIX + STATEMENT_HIGHLIGHT;

export function HorizontalStatementBanner() {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTyping = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayedLength(0);
    setIsTypingComplete(false);

    let current = 0;
    intervalRef.current = setInterval(() => {
      current++;
      setDisplayedLength(current);
      if (current >= FULL_STATEMENT.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTypingComplete(true);
      }
    }, 34); // ~34ms per character for an organic, smooth real-time writing pace (~2.3s total)
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setDisplayedLength(FULL_STATEMENT.length);
        setIsTypingComplete(true);
        return;
      }
    }

    // Start typing shortly after person opens website
    const timer = setTimeout(() => {
      startTyping();
    }, 300);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Compute what is currently visible
  const visibleText = FULL_STATEMENT.slice(0, displayedLength);
  const prefixLength = STATEMENT_PREFIX.length;

  const currentPrefix = visibleText.slice(0, Math.min(displayedLength, prefixLength));
  const currentHighlight = displayedLength > prefixLength ? visibleText.slice(prefixLength) : '';

  return (
    <section
      id="mission-statement"
      className="relative w-full overflow-hidden bg-charcoal-950 border-y border-bronze-500/30"
      aria-label="AfriSMME Master Mission Statement"
    >
      {/* =========================================================================
          PANORAMIC ARCHITECTURAL STRIP (AUTHENTIC USER IMAGE)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero_panorama_strip.jpg"
          alt="Panoramic luxury hospitality pavilion overlooking mountain range at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.15]"
        />
        {/* Dark directional glass overlay for 100% typography contrast */}
        <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-charcoal-950" />
        
        {/* Soft champagne ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.12)_0%,transparent_75%)]" />
      </div>

      {/* =========================================================================
          HORIZONTAL REAL-TIME WRITING HEADLINE
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        {/* Top Kicker Row */}
        <div className="flex items-center justify-between gap-4 mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-charcoal-900/90 border border-bronze-500/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze-300 font-semibold">
              The AfriSMME Mandate
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs sm:text-sm font-mono text-ivory-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-bronze-400" />
              <span>SANS 10400 & NFPA 96 Aligned</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Scheduled Maintenance & Phased Delivery</span>
            </span>
          </div>
        </div>

        {/* The Live Horizontal Typing Statement */}
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-medium text-ivory-50 tracking-tight leading-[1.18] text-balance">
            <span>{currentPrefix}</span>
            {currentHighlight && (
              <span className="italic font-light text-gold-gradient font-display ml-1">
                {currentHighlight}
              </span>
            )}
            {/* Real-time Blinking Bronze Cursor */}
            <span
              className={`inline-block w-[3px] md:w-[4px] h-[0.85em] bg-bronze-400 ml-1.5 align-middle shadow-[0_0_10px_#c5a880] transition-opacity duration-300 ${
                isTypingComplete ? 'animate-pulse opacity-80' : 'opacity-100'
              }`}
            />
          </h2>
        </div>

        {/* Bottom Details & Replay */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 sm:mt-8 pt-5 border-t border-charcoal-800/80">
          <p className="text-sm sm:text-base text-ivory-300/90 font-sans max-w-3xl leading-relaxed">
            A single accountable master partner delivering turnkey exterior architecture, acoustic dining intimacy, and precision facility restoration across Africa’s finest dining venues.
          </p>

          <button
            onClick={startTyping}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-bronze-400 hover:text-bronze-300 transition-colors self-start sm:self-auto shrink-0 px-3 py-1.5 rounded bg-charcoal-900/60 border border-charcoal-700/80 hover:border-bronze-500/50"
            title="Replay real-time writing"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Writing</span>
          </button>
        </div>
      </div>
    </section>
  );
}
