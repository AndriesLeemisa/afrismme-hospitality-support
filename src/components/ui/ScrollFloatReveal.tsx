'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ScrollFloatRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number; // Milliseconds
  duration?: number; // Seconds
  distance?: number; // Pixels
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
  hoverFloat?: boolean;
  ambientFloat?: boolean;
}

export function ScrollFloatReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 28,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  className = '',
  as: Component = 'div',
  hoverFloat = false,
  ambientFloat = false,
}: ScrollFloatRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setHasReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold, rootMargin]);

  const getInitialTransform = () => {
    if (hasReducedMotion) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.985)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.985)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.985)`;
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.94)';
      case 'none':
        return 'none';
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
    }
  };

  const style: React.CSSProperties = hasReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      };

  return (
    <Component
      ref={elementRef as unknown as React.Ref<never>}
      style={style}
      className={cn(
        className,
        hoverFloat && 'hover-float',
        ambientFloat && isVisible && 'animate-float-gentle'
      )}
    >
      {children}
    </Component>
  );
}
