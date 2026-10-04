'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  pillarNumber?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  badge,
  pillarNumber,
  title,
  highlightedTitle,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClass, className)}>
      <div className="flex items-center gap-3 mb-4">
        {pillarNumber && (
          <span className="font-mono text-xs tracking-widest text-bronze-400 font-semibold px-2.5 py-1 rounded border border-bronze-500/30 bg-bronze-500/10">
            PILLAR {pillarNumber}
          </span>
        )}
        {badge && (
          <span className="text-xs tracking-cinematic uppercase text-bronze-400 font-medium">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-ivory-50 leading-[1.1] text-balance">
        {title}{' '}
        {highlightedTitle && (
          <span className="italic font-light text-bronze-300 font-display">
            {highlightedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base sm:text-lg md:text-xl text-ivory-300/80 font-normal leading-relaxed text-balance max-w-2xl">
          {description}
        </p>
      )}

      <div className={cn(
        'w-16 h-0.5 bg-gradient-to-r from-bronze-500 to-transparent mt-6',
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
}
