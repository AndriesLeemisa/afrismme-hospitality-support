'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  value: string;
  label: string;
  sub?: string;
  className?: string;
}

export function AnimatedCounter({ value, label, sub, className }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Parse numeric part and suffix
    const match = value.match(/([+\-]?\d+\.?\d*)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[1]);
    const suffix = match[2] || '';
    const isDecimal = match[1].includes('.');
    const decimalPlaces = isDecimal ? match[1].split('.')[1].length : 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const counterObj = { count: 0 };

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      gsap.to(counterObj, {
        count: targetNumber,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          const current = decimalPlaces > 0
            ? counterObj.count.toFixed(decimalPlaces)
            : Math.floor(counterObj.count).toString();
          setDisplayValue(`${current}${suffix}`);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [value]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex flex-col p-6 sm:p-8 bg-charcoal-900/60 border border-charcoal-700/50 rounded-sm hover:border-bronze-500/30 transition-colors duration-300 relative overflow-hidden group',
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-bronze-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ivory-50 tracking-tight text-gold-gradient">
        {displayValue}
      </span>
      <span className="mt-2 text-sm sm:text-base font-medium text-ivory-100">
        {label}
      </span>
      {sub && (
        <span className="mt-1 text-xs text-ivory-400 font-normal">
          {sub}
        </span>
      )}
    </div>
  );
}
