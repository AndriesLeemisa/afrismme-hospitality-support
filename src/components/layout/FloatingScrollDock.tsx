'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, PhoneCall, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingScrollDockProps {
  onOpenAudit?: () => void;
}

export function FloatingScrollDock({ onOpenAudit }: FloatingScrollDockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show when scrolled past 320px
      if (scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAuditClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById('audit-tool');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Floating quick navigation and contact dock"
      className={cn(
        'fixed bottom-5 right-4 sm:right-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform',
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto scale-100'
          : 'translate-y-12 opacity-0 pointer-events-none scale-95'
      )}
    >
      <div className="flex items-center gap-2 p-2 bg-charcoal-950/95 backdrop-blur-md border-2 border-bronze-400/50 rounded-full shadow-[0_12px_36px_rgba(11,17,32,0.55)] hover:border-bronze-400 transition-all">
        {/* Floating Quick Audit CTA */}
        <button
          type="button"
          onClick={handleAuditClick}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-bronze-400 text-charcoal-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-sm hover:bg-bronze-300 hover:shadow-bronze-glow transition-all"
          title="Schedule a Complimentary 45-Minute Venue Audit"
        >
          <Sparkles className="w-4 h-4 text-charcoal-950 animate-pulse" />
          <span className="hidden sm:inline font-sans">Assess Venue</span>
          <span className="sm:hidden font-sans">Audit</span>
        </button>

        {/* Priority WhatsApp Floating Action */}
        <a
          href="https://wa.me/27834328394?text=Hello%20AfriSMME%20Hospitality%20Support,%20I%20would%20like%20to%20enquire%20about%20a%20venue%20assessment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="Priority WhatsApp Dispatch (+27 83 432 8394)"
          aria-label="Chat with AfriSMME Hub on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Direct Office Hotline Action */}
        <a
          href="tel:+27113465018"
          className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-bronze-300 hover:text-white border border-charcoal-600 flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="Direct Office Hotline: +27 (0) 11 346 5018"
          aria-label="Call AfriSMME Hub Office"
        >
          <PhoneCall className="w-4 h-4" />
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-charcoal-700 mx-0.5" />

        {/* Back to Top with Circular Scroll Progress */}
        <button
          type="button"
          onClick={scrollToTop}
          className="relative w-9 h-9 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white hover:text-bronze-300 flex items-center justify-center transition-transform hover:scale-110"
          title={`Back to top (${Math.round(scrollProgress)}% scrolled)`}
          aria-label="Scroll back to top"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-9 h-9 -rotate-90 pointer-events-none" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="#1E293B"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="#F59E0B"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray={88}
              strokeDashoffset={88 - (88 * scrollProgress) / 100}
              className="transition-[stroke-dashoffset] duration-150"
            />
          </svg>
          <ChevronUp className="w-4 h-4 relative z-10" />
        </button>
      </div>
    </aside>
  );
}
