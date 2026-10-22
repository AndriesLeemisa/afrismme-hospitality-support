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
              'font-mono text-xs sm:text-sm tracking-widest font-bold px-3 py-1 rounded border-2',
              isLight
                ? 'text-bronze-800 border-bronze-600/50 bg-bronze-100'
                : 'text-bronze-300 border-bronze-400/50 bg-bronze-400/15'
            )}
          >
            PILLAR {pillarNumber}
          </span>
        )}
        {badge && (
          <span
            className={cn(
              'text-xs sm:text-sm tracking-widest uppercase font-extrabold',
              isLight ? 'text-bronze-700' : 'text-bronze-300'
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <h2
        className={cn(
          'text-display-2 font-display font-extrabold tracking-tight leading-[1.12] text-balance',
          isLight ? 'text-charcoal-950' : 'text-white'
        )}
      >
        {title}{' '}
        {highlightedTitle && (
          <span
            className={cn(
              'font-extrabold font-display',
              isLight ? 'text-bronze-600' : 'text-bronze-300'
            )}
          >
            {highlightedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 text-lead font-medium leading-relaxed text-pretty max-w-2xl',
            isLight ? 'text-charcoal-800' : 'text-ivory-100'
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          'w-20 h-1 bg-gradient-to-r from-bronze-500 to-transparent mt-6 rounded-full',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
