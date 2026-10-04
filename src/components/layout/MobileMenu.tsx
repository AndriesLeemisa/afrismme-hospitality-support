'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, PhoneCall, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  onOpenAudit?: () => void;
}

export function MobileMenu({ isOpen, onClose, links, onOpenAudit }: MobileMenuProps) {
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

  return (
    <div
      className="fixed inset-0 z-[100] xl:hidden bg-charcoal-950/80 backdrop-blur-xl animate-fade-in"
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

        {/* Navigation list */}
        <nav className="flex flex-col gap-2 py-6">
          <span className="text-[10px] tracking-cinematic uppercase text-ivory-400 font-semibold mb-2">
            Pillars & Solutions
          </span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-sm text-lg font-display text-ivory-100 hover:text-bronze-300 hover:bg-charcoal-800/60 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-bronze-500/60" />
            </a>
          ))}
        </nav>

        {/* Emergency Hotline Box */}
        <div className="mt-auto pt-6 border-t border-charcoal-800 flex flex-col gap-4">
          <div className="p-4 rounded-sm bg-charcoal-950 border border-charcoal-800 flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0 animate-pulse" />
            <div>
              <p className="text-xs font-semibold text-ivory-100">Rapid Response Hotline</p>
              <p className="text-xs text-ivory-400 mt-0.5">Emergency kitchen & facility dispatch 24/7</p>
              <a
                href="tel:+27110000000"
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
              href="#contact"
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
