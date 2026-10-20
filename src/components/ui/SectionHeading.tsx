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
  theme?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  badge,
  pillarNumber,
  title,
  highlightedTitle,
  description,
  align = 'left',
  theme = 'dark',
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const isLight = theme === 'light';

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClass, className)}>
      <div className="flex items-center gap-3 mb-4">
        {pillarNumber && (
          <span
            className={cn(
              'font-mono text-xs tracking-widest font-semibold px-2.5 py-1 rounded border',
              isLight
                ? 'text-bronze-800 border-bronze-500/40 bg-bronze-200/50'
                : 'text-bronze-400 border-bronze-500/30 bg-bronze-500/10'
            )}
          >
            PILLAR {pillarNumber}
          </span>
        )}
        {badge && (
          <span
            className={cn(
              'text-xs tracking-cinematic uppercase font-semibold',
              isLight ? 'text-bronze-700' : 'text-bronze-400'
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <h2
        className={cn(
          'text-display-2 font-display font-medium tracking-tight leading-[1.08] text-balance',
          isLight ? 'text-charcoal-950' : 'text-ivory-50'
        )}
      >
        {title}{' '}
        {highlightedTitle && (
          <span
            className={cn(
              'italic font-light font-display',
              isLight ? 'text-bronze-700' : 'text-gold-gradient'
            )}
          >
            {highlightedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 text-lead font-normal leading-relaxed text-pretty max-w-2xl',
            isLight ? 'text-charcoal-800/85' : 'text-ivory-300/85'
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          'w-16 h-0.5 bg-gradient-to-r from-bronze-500 to-transparent mt-6',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
