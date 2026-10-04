'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Menu, X, PhoneCall, Sparkles, Shield, Wrench, Compass, TrendingUp } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navbar({ onOpenAudit }: { onOpenAudit?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Attract', href: '#attract' },
    { label: 'Enhance', href: '#enhance' },
    { label: 'Restore', href: '#restore' },
    { label: 'Maintain', href: '#maintain' },
    { label: 'Protect', href: '#protect' },
    { label: 'Grow', href: '#grow' },
    { label: 'Blueprint', href: '#blueprint' },
    { label: 'Case Studies', href: '#case-studies' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-charcoal-950/90 backdrop-blur-md border-charcoal-700/60 py-3.5 shadow-subtle-dark'
            : 'bg-transparent border-transparent py-5 sm:py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Tagline */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-bronze-400 rounded-sm"
              aria-label="AfriSMME Hospitality Support Home"
            >
              <BrandLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wider uppercase font-medium text-ivory-200/80 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Live Status & CTA Cluster */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Emergency Fleet indicator */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 border border-charcoal-700/80 text-[11px] font-mono text-ivory-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-ivory-400">Fleet Dispatch:</span>
                <span className="text-emerald-400 font-medium">Standby</span>
              </div>

              {onOpenAudit ? (
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="text-xs uppercase tracking-wider font-semibold py-2.5 px-4 rounded-sm border border-bronze-500/40 text-bronze-300 hover:bg-bronze-500/10 hover:border-bronze-300 transition-all duration-200"
                >
                  Diagnostic Audit
                </button>
              ) : (
                <Button href="#audit-tool" variant="outline" size="sm">
                  Diagnostic Audit
                </Button>
              )}

              <Button href="#contact" variant="primary" size="sm" withArrow>
                Request Support
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3 xl:hidden">
              <a
                href="#contact"
                className="hidden xs:inline-flex text-xs uppercase tracking-wider font-semibold py-2 px-3 rounded-sm bg-bronze-500 text-charcoal-950 hover:bg-bronze-400"
              >
                Quote
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-sm bg-charcoal-900 text-ivory-200 hover:text-ivory-50 border border-charcoal-700 hover:border-bronze-500/50 transition-colors"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onOpenAudit={onOpenAudit}
      />
    </>
  );
}
