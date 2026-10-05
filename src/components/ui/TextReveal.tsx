'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}: TextRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component
      ref={elementRef as any}
      className={cn('will-change-[transform,opacity]', className)}
    >
      {children}
    </Component>
  );
}
