'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Compass, Sparkles, Wrench, ShieldCheck, ShieldAlert, TrendingUp, Layers, CheckCircle2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EcosystemDiagram() {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      title: 'Architectural Exterior',
      pillar: 'ATTRACT',
      icon: <Compass className="w-5 h-5" />,
      desc: 'Etched brass signage, weather cantilever umbrellas, curbside LED ambiance.',
      coordination: 'Ensures outdoor seating converts directly to higher table count without weather risk.',
      externalLinks: [
        { name: 'Afrishades', url: 'https://afrishades.co.za/' },
        { name: 'Cane Africa', url: 'https://www.caneafrica.co.za/' },
      ],
    },
    {
      title: 'Acoustic Architecture',
      pillar: 'ENHANCE',
      icon: <Sparkles className="w-5 h-5" />,
      desc: 'NRC-certified sound baffles, luxury velvet privacy booths, banquettes.',
      coordination: 'Extends reservation dwell time by 1.8 hours and boosts dessert spend.',
      externalLinks: [] as { name: string; url: string }[],
    },
    {
      title: 'Artisanal Restoration',
      pillar: 'RESTORE',
      icon: <Wrench className="w-5 h-5" />,
      desc: 'Hand-rubbed organic hardwax oils, brass de-oxidizing, leather dyeing.',
      coordination: 'Revives furniture during 23:00–07:00 dark hours with zero lost covers.',
      externalLinks: [
        { name: 'The Wood Doctor', url: 'https://wooddoctor.co.za/' },
      ],
    },
    {
      title: 'Rapid Response Fleet',
      pillar: 'MAINTAIN',
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: 'Mobile technician workshops, kitchen hood degreasing, cold-chain checks.',
      coordination: 'Prevents kitchen backdrafts and refrigeration shutdowns before service.',
    },
    {
      title: 'Compliance & Shield',
      pillar: 'PROTECT',
      icon: <ShieldAlert className="w-5 h-5" />,
      desc: 'HACCP food safety audits, automatic fire suppression, uniform cresting.',
      coordination: 'Guarantees 100% first-time municipal and liquor authority audit pass rates.',
    },
    {
      title: 'Kitchen & Yield AI',
      pillar: 'GROW',
      icon: <TrendingUp className="w-5 h-5" />,
      desc: 'KDS line balancing, floorplan cover density modeling, waste reduction.',
      coordination: 'Unlocks +24% weekend gross yield through algorithmic flow re-engineering.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 relative scroll-mt-20">
      <div id="ecosystem" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About AfriSMME Hub & Ecosystem"
          title="The AfriSMME Integrated"
          highlightedTitle="Hospitality Ecosystem."
          description="In traditional hospitality operations, six different disconnected vendors create friction, delayed finger-pointing, and runaway billing. AfriSMME converges all physical and technical disciplines under one unified orchestration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Circular / Hub Nodes Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nodes.map((node, index) => {
              const isSelected = activeNode === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveNode(index)}
                  className={cn(
                    'p-5 sm:p-6 rounded-sm border cursor-pointer transition-all duration-300 relative group',
                    isSelected
                      ? 'bg-charcoal-950 border-bronze-400 shadow-bronze-glow'
                      : 'bg-charcoal-950/50 border-charcoal-700/70 hover:border-charcoal-600 hover:bg-charcoal-950/80'
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-bronze-400 font-semibold">
                      {node.pillar}
                    </span>
                    <div
                      className={cn(
                        'w-8 h-8 rounded-sm flex items-center justify-center transition-colors',
                        isSelected
                          ? 'bg-bronze-500 text-charcoal-950'
                          : 'bg-charcoal-900 text-bronze-400 group-hover:text-ivory-50'
                      )}
                    >
                      {node.icon}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-ivory-50 mb-2">
                    {node.title}
                  </h3>

                  <p className="text-xs text-ivory-300/80 leading-relaxed font-normal">
                    {node.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-charcoal-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-ivory-400">
                      Unified SLA Node {index + 1}
                    </span>
                    <span
                      className={cn(
                        'text-xs font-mono font-medium',
                        isSelected ? 'text-bronze-300' : 'text-ivory-400 group-hover:text-ivory-200'
                      )}
                    >
                      {isSelected ? 'Active Focus' : 'Inspect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Orchestrator Preview Card */}
          <div className="lg:col-span-5 bg-charcoal-950 border border-bronze-500/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-elevated-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bronze-500/10 border border-bronze-500/30 text-[11px] font-mono text-bronze-300 mb-6">
                <Layers className="w-3.5 h-3.5" />
                CENTRAL AFRISMME ORCHESTRATION
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50 mb-2">
                {nodes[activeNode].title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-bronze-400 block mb-4">
                Pillar {nodes[activeNode].pillar} Integration
              </span>

              <p className="text-sm text-ivory-200/90 leading-relaxed mb-6 font-normal">
                {nodes[activeNode].desc}
              </p>

              {/* Cross-functional coordination highlight */}
              <div className="p-4 rounded-sm bg-charcoal-900 border border-charcoal-800 mb-6">
                <span className="text-[10px] uppercase font-mono tracking-wider text-bronze-400 block mb-1">
                  How This Amplifies Overall Operation:
                </span>
                <p className="text-xs text-ivory-200 leading-relaxed font-medium">
                  {nodes[activeNode].coordination}
                </p>
              </div>

              {/* Specialist Division Web Portals */}
              {nodes[activeNode].externalLinks && nodes[activeNode].externalLinks.length > 0 && (
                <div className="p-3.5 rounded-sm bg-charcoal-900/90 border border-bronze-500/30 mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-bronze-400 block mb-2 font-semibold">
                    Associated Division Websites:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {nodes[activeNode].externalLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-charcoal-950 border border-charcoal-700 text-xs text-ivory-100 hover:text-bronze-300 hover:border-bronze-400 transition-all duration-200"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ExternalLink className="w-3 h-3 text-bronze-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2 text-xs text-ivory-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Single point of accountability & consolidated billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pre-calibrated off-site fabrication before any on-site deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero daytime guest disruption guarantee</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal-800 mt-8">
              <a
                href="#contact"
                className="w-full text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-sm bg-bronze-500 text-charcoal-950 hover:bg-bronze-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>Deploy AfriSMME Ecosystem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
