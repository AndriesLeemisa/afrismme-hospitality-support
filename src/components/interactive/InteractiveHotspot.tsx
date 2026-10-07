'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VENUE_HOTSPOTS } from '@/data/services';
import { HotspotData } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles, ArrowRight, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InteractiveHotspot() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotData>(VENUE_HOTSPOTS[1]); // Default to acoustic
  const [activeId, setActiveId] = useState<string>(VENUE_HOTSPOTS[1].id);

  const handleSelect = (hotspot: HotspotData) => {
    setActiveHotspot(hotspot);
    setActiveId(hotspot.id);
  };

  return (
    <section id="blueprint" className="py-24 sm:py-32 bg-charcoal-900 border-y border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Anatomy of a Thriving Venue"
          title="Where Coordinated Interventions"
          highlightedTitle="Directly Elevate Experience & Margin."
          description="Explore the hotspots below to see how acoustic comfort, furniture restoration, all-weather terrace shading, and digital systems work together to transform hospitality performance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Blueprint Canvas with Hotspot Markers */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-sm overflow-hidden border border-charcoal-700 bg-charcoal-950 shadow-elevated-dark group">
            <Image
              src="/images/hero/hero-michelin-dining-room.jpg"
              alt="Interactive Dining Room Architectural Layout"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover filter brightness-[0.7] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-charcoal-950/30" />

            {/* Hotspot Pins */}
            {VENUE_HOTSPOTS.map((hotspot) => {
              const isSelected = hotspot.id === activeId;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => handleSelect(hotspot)}
                  aria-label={`Inspect hotspot: ${hotspot.title}`}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none"
                  style={{
                    left: `${hotspot.xPercent}%`,
                    top: `${hotspot.yPercent}%`,
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing beacon rings */}
                    <span
                      className={cn(
                        'absolute w-8 h-8 rounded-full transition-all duration-300',
                        isSelected
                          ? 'bg-bronze-400/40 animate-ping'
                          : 'bg-ivory-100/20 group-hover/pin:bg-bronze-400/30'
                      )}
                    />
                    <div
                      className={cn(
                        'w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shadow-lg',
                        isSelected
                          ? 'bg-bronze-500 border-ivory-50 text-charcoal-950 scale-110 shadow-bronze-glow'
                          : 'bg-charcoal-950/90 border-bronze-400/60 text-bronze-300 hover:scale-105 hover:border-bronze-300'
                      )}
                    >
                      +
                    </div>
                  </div>

                  {/* Desktop floating hover chip */}
                  <div
                    className={cn(
                      'hidden sm:block absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-2.5 py-1 rounded bg-charcoal-950/90 border border-charcoal-700 text-[11px] font-mono text-ivory-100 pointer-events-none transition-opacity',
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover/pin:opacity-100'
                    )}
                  >
                    {hotspot.title}
                  </div>
                </button>
              );
            })}

            {/* Bottom hint overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ivory-400 bg-charcoal-950/80 px-3 py-1 rounded border border-charcoal-800">
                Interactive Architectural Hotspots
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-mono text-bronze-400 bg-charcoal-950/80 px-3 py-1 rounded border border-charcoal-800">
                Tap pins to inspect impact
              </span>
            </div>
          </div>

          {/* Hotspot Detailed Inspector Panel */}
          <div className="lg:col-span-4 flex flex-col h-full bg-charcoal-950 border border-charcoal-700/80 rounded-sm p-6 sm:p-7 shadow-subtle-dark">
            <div className="flex items-center justify-between pb-4 border-b border-charcoal-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-bronze-400" />
                <span className="text-xs font-mono tracking-widest uppercase text-bronze-400 font-semibold">
                  {activeHotspot.category} INTERVENTION
                </span>
              </div>
              <span className="text-[11px] font-mono text-ivory-400">
                Active Zone
              </span>
            </div>

            <div className="my-auto py-6">
              <h3 className="font-display text-2xl font-semibold text-ivory-50 mb-3">
                {activeHotspot.title}
              </h3>

              <p className="text-sm text-ivory-300 leading-relaxed mb-6 font-normal">
                {activeHotspot.description}
              </p>

              {/* Engineering Specification Box */}
              <div className="p-4 rounded-sm bg-charcoal-900 border border-bronze-500/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-bronze-400 block mb-1">
                  Implementation Impact
                </span>
                <p className="text-sm font-medium text-ivory-100 leading-relaxed">
                  {activeHotspot.technicalSpec}
                </p>
              </div>
            </div>

            {/* Quick switcher buttons */}
            <div className="pt-4 border-t border-charcoal-800">
              <p className="text-[11px] font-mono uppercase text-ivory-400 mb-2">
                Switch Focus Zone:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {VENUE_HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => handleSelect(h)}
                    className={cn(
                      'text-[11px] px-2.5 py-1 rounded transition-colors font-mono',
                      h.id === activeId
                        ? 'bg-bronze-500 text-charcoal-950 font-semibold'
                        : 'bg-charcoal-900 text-ivory-300 hover:bg-charcoal-800 hover:text-ivory-50'
                    )}
                  >
                    {h.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
