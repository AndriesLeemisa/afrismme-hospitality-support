'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  revealDirection?: 'up' | 'scale' | 'curtain';
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  imageClassName,
  aspectRatio = 'auto',
  revealDirection = 'scale',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      if (revealDirection === 'scale') {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.12, filter: 'brightness(0.9)' },
          {
            scale: 1,
            filter: 'brightness(1)',
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else if (revealDirection === 'curtain') {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });

        tl.to(overlayRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power3.inOut',
        }).fromTo(
          imgRef.current,
          { scale: 1.08 },
          { scale: 1, duration: 0.85, ease: 'power2.out' },
          '-=0.5'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [revealDirection]);

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    wide: 'aspect-[21/9]',
    auto: '',
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden bg-charcoal-900 border border-charcoal-700/60 rounded-sm group',
        aspectClasses,
        className
      )}
    >
      <div ref={imgRef} className="relative w-full h-full origin-center">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              'object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]',
              imageClassName
            )}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            priority={priority}
            sizes={sizes}
            className={cn(
              'w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]',
              imageClassName
            )}
          />
        )}
      </div>

      {revealDirection === 'curtain' && (
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-charcoal-900 z-10 pointer-events-none"
        />
      )}

      {/* Subtle architectural vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none opacity-80" />
    </div>
  );
}
