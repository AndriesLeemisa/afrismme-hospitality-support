'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, PhoneCall, ShieldAlert, ArrowRight, ChevronDown, Compass, Sparkles, Wrench, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { SERVICE_PILLARS } from '@/data/services';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit?: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenAudit }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pillarIcons: Record<string, React.ReactNode> = {
    attract: <Compass className="w-3.5 h-3.5 text-bronze-400" />,
    enhance: <Sparkles className="w-3.5 h-3.5 text-bronze-400" />,
    restore: <Wrench className="w-3.5 h-3.5 text-bronze-400" />,
    maintain: <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />,
    protect: <ShieldAlert className="w-3.5 h-3.5 text-bronze-400" />,
    grow: <TrendingUp className="w-3.5 h-3.5 text-bronze-400" />,
  };

  return (
    <div
      className="fixed inset-0 z-[100] lg:hidden bg-charcoal-950/85 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="flex flex-col h-full max-w-md ml-auto bg-charcoal-900 border-l border-charcoal-700/80 p-6 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-charcoal-800">
          <BrandLogo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-sm bg-charcoal-800 text-ivory-300 hover:text-ivory-50 border border-charcoal-700 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Main Navigation links */}
        <nav className="flex flex-col gap-1.5 py-6">
          <span className="text-xs tracking-widest uppercase text-bronze-300 font-extrabold mb-2">
            Navigation
          </span>

          {/* 1. Home */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <span>Home</span>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </Link>

          {/* 2. About */}
          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <span>About</span>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </Link>

          {/* 3. Product & Services with Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
            >
              <span>Product & Services</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-bronze-400 transition-transform duration-200',
                  servicesExpanded && 'rotate-180'
                )}
              />
            </button>

            {servicesExpanded && (
              <div className="pl-4 pr-2 py-2.5 space-y-1.5 bg-charcoal-950 rounded-sm my-1 border-l-2 border-bronze-400">
                {SERVICE_PILLARS.slice(0, 5).map((pillar) => (
                  <a
                    key={pillar.id}
                    href={`/#${pillar.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-2.5 text-sm font-mono font-bold text-white hover:text-bronze-300 hover:bg-charcoal-900 rounded transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      {pillarIcons[pillar.id]}
                      <div>
                        <span className="block">{pillar.pillarNumber}. {pillar.name}</span>
                        <span className="text-xs text-ivory-200 block font-sans font-medium">{pillar.tagline}</span>
                      </div>
                    </div>
                    <span className="text-xs text-bronze-300 font-bold">View</span>
                  </a>
                ))}

                {/* Technology (Scinovalities) placed under Product & Services */}
                <a
                  href="/#technology"
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-2.5 text-sm font-mono text-bronze-300 hover:text-white hover:bg-charcoal-900 rounded transition-colors bg-bronze-400/15 mt-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-bronze-400" />
                    <div>
                      <span className="block font-bold text-white">Technology (Scinovalities)</span>
                      <span className="text-xs text-ivory-200 block font-sans font-medium">Websites, Menus & AI</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-bronze-300" />
                </a>

                <a
                  href="/#process"
                  onClick={onClose}
                  className="flex items-center gap-2 pt-2.5 pb-1 px-2 text-xs font-mono font-bold text-bronze-300 hover:text-white border-t border-charcoal-800 mt-2"
                >
                  <span>How We Work →</span>
                </a>
              </div>
            )}
          </div>

          {/* 4. Corporate Profile (22-Page Master) */}
          <Link
            href="/corporate-profile"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>Corporate Profile</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-bronze-400/20 text-bronze-300 border border-bronze-400/40">
                22p Master
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </Link>

          {/* 5. Brochure (12-Page Visual) */}
          <Link
            href="/brochure"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>Sales Brochure</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-bronze-400/20 text-bronze-300 border border-bronze-400/40">
                12p Visual
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </Link>

          {/* 6. Support Booklet (36-Page Guide) */}
          <Link
            href="/booklet"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>Support Booklet</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-bronze-400/20 text-bronze-300 border border-bronze-400/40">
                36p Guide
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </Link>

          {/* 6. Ecosystem */}
          <a
            href="/#ecosystem"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <span>Ecosystem</span>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </a>

          {/* 7. Contact */}
          <a
            href="/#contact"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display font-bold text-white hover:text-bronze-300 hover:bg-charcoal-800 transition-colors"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 text-bronze-400" />
          </a>
        </nav>

        {/* Support Hotline Box */}
        <div className="mt-auto pt-6 border-t border-charcoal-800 flex flex-col gap-4">
          <div className="p-4 rounded-sm bg-charcoal-950 border border-charcoal-700 flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse" />
            <div>
              <p className="text-sm font-bold text-white">Hospitality Support Hotline</p>
              <p className="text-xs text-ivory-200 font-medium mt-0.5">Rapid maintenance & venue consultation</p>
              <a
                href="tel:+27113465018"
                className="inline-flex items-center gap-1.5 text-sm text-bronze-300 font-mono font-bold mt-2 hover:underline"
              >
                <PhoneCall className="w-4 h-4" />
                +27 (0) 11 346 5018
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {onOpenAudit && (
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenAudit();
                }}
              >
                Hospitality Assessment
              </Button>
            )}
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              onClick={onClose}
              withArrow
            >
              Request Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
