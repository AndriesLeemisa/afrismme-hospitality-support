'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, PhoneCall, ShieldAlert, ArrowRight, ChevronDown, Compass, Sparkles, Wrench, ShieldCheck, TrendingUp } from 'lucide-react';
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
        <nav className="flex flex-col gap-1 py-6">
          <span className="text-[10px] tracking-cinematic uppercase text-ivory-400 font-semibold mb-2">
            Navigation
          </span>

          {/* Home */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-base font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
          >
            <span>Home</span>
            <ArrowRight className="w-4 h-4 text-bronze-500/60" />
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-base font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
          >
            <span>About Us</span>
            <ArrowRight className="w-4 h-4 text-bronze-500/60" />
          </Link>

          {/* Services with Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between py-3 px-3 rounded-sm text-base font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-bronze-400 transition-transform duration-200',
                  servicesExpanded && 'rotate-180'
                )}
              />
            </button>

            {servicesExpanded && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-charcoal-950/60 rounded-sm my-1 border-l-2 border-bronze-500/40">
                {SERVICE_PILLARS.map((pillar) => (
                  <a
                    key={pillar.id}
                    href={`/#${pillar.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2 text-xs font-mono text-ivory-200 hover:text-bronze-300 hover:bg-charcoal-900 rounded transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {pillarIcons[pillar.id]}
                      <div>
                        <span className="block">{pillar.pillarNumber}. {pillar.name}</span>
                        {pillar.externalLinks && pillar.externalLinks.length > 0 && (
                          <span className="text-[9px] text-bronze-400 block font-sans">
                            {pillar.externalLinks.map((l) => l.name).join(' & ')}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] text-ivory-400">View</span>
                  </a>
                ))}
                <a
                  href="/#blueprint"
                  onClick={onClose}
                  className="flex items-center gap-2 pt-2 pb-1 px-2 text-[11px] font-mono text-bronze-300 hover:text-ivory-50 border-t border-charcoal-800 mt-2"
                >
                  <span>Interactive Blueprint →</span>
                </a>
              </div>
            )}
          </div>

          {/* The Difference */}
          <a
            href="/#comparison"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-base font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
          >
            <span>The Difference</span>
            <ArrowRight className="w-4 h-4 text-bronze-500/60" />
          </a>

          {/* Contact */}
          <a
            href="/#contact"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-sm text-base font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 text-bronze-500/60" />
          </a>
        </nav>

        {/* Emergency Hotline Box */}
        <div className="mt-auto pt-6 border-t border-charcoal-800 flex flex-col gap-4">
          <div className="p-4 rounded-sm bg-charcoal-950 border border-charcoal-800 flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0 animate-pulse" />
            <div>
              <p className="text-xs font-semibold text-ivory-100">Rapid Response Hotline</p>
              <p className="text-xs text-ivory-400 mt-0.5">Emergency kitchen & facility dispatch 24/7</p>
              <a
                href="tel:+27118849200"
                className="inline-flex items-center gap-1.5 text-xs text-bronze-400 font-mono font-medium mt-2 hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                +27 (0) 11 884 9200
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
                Diagnostic Audit
              </Button>
            )}
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              onClick={onClose}
              withArrow
            >
              Request Venue Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
