'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'symbol' | 'monochrome';
  className?: string;
}

export function BrandLogo({ size = 'md', variant = 'full', className }: BrandLogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  return (
    <div className={cn('flex items-center gap-3.5 select-none', className)}>
      {/* Official Interlocking Quad-Nexus & Compass Emblem */}
      <div className={cn('relative shrink-0', iconSizes)}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Quadrant 01: Top-Right (Operations & Advisory) */}
          <path
            d="M 106 20 A 78 78 0 0 1 180 94 L 148 94 A 46 46 0 0 0 106 52 Z"
            fill="#C5A880"
          />
          {/* Quadrant 02: Bottom-Right (Facilities Management & FF&E) */}
          <path
            d="M 180 106 A 78 78 0 0 1 106 180 L 106 148 A 46 46 0 0 0 148 106 Z"
            fill="#DDD4C4"
          />
          {/* Quadrant 03: Bottom-Left (Supply Chain & Sourcing) */}
          <path
            d="M 94 180 A 78 78 0 0 1 20 106 L 52 106 A 46 46 0 0 0 94 148 Z"
            fill="#C5A880"
          />
          {/* Quadrant 04: Top-Left (Technology & Guest Systems) */}
          <path
            d="M 20 94 A 78 78 0 0 1 94 20 L 94 52 A 46 46 0 0 0 52 94 Z"
            fill="#DDD4C4"
          />
          {/* Central Hub Star: 4-Point Curved Diamond Compass Rose */}
          <path
            d="M 100 80 Q 100 100 120 100 Q 100 100 100 120 Q 100 100 80 100 Q 100 100 100 80 Z"
            fill="#C5A880"
          />
        </svg>
      </div>

      {variant !== 'symbol' && (
        <div className="flex flex-col">
          <span className="font-sans text-base sm:text-lg font-extrabold tracking-[0.16em] uppercase text-ivory-50 leading-none">
            AFRISMME HUB
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-bronze-400 mt-1 leading-none">
            HOSPITALITY SUPPORT ECOSYSTEM
          </span>
        </div>
      )}
    </div>
  );
}
