'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Menu, ChevronDown, Sparkles, Compass, Wrench, ShieldCheck, ShieldAlert, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { SERVICE_PILLARS } from '@/data/services';

interface NavbarProps {
  onOpenAudit?: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const pillarIcons: Record<string, React.ReactNode> = {
    attract: <Compass className="w-4 h-4 text-bronze-400" />,
    enhance: <Sparkles className="w-4 h-4 text-bronze-400" />,
    restore: <Wrench className="w-4 h-4 text-bronze-400" />,
    maintain: <ShieldCheck className="w-4 h-4 text-bronze-400" />,
    protect: <ShieldAlert className="w-4 h-4 text-bronze-400" />,
    grow: <TrendingUp className="w-4 h-4 text-bronze-400" />,
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-charcoal-950/92 backdrop-blur-md border-charcoal-700/60 py-3 shadow-subtle-dark'
            : 'bg-charcoal-950/40 backdrop-blur-sm border-white/5 py-4 sm:py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Tagline */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-bronze-400 rounded-sm shrink-0"
              aria-label="AfriSMME Hospitality Support Home"
            >
              <BrandLogo size="md" />
            </Link>

            {/* Clean, Uncrowded Main Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
              {/* Home */}
              <Link
                href="/"
                className="text-xs tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>

              {/* About Us */}
              <a
                href="#about"
                className="text-xs tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </a>

              {/* Services with Dropdown Menu */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href="#pillars"
                  className={cn(
                    'inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium transition-colors duration-200 relative py-1',
                    servicesDropdownOpen ? 'text-bronze-300' : 'text-ivory-200/90 hover:text-bronze-300'
                  )}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', servicesDropdownOpen ? 'rotate-180 text-bronze-400' : 'text-ivory-400')} />
                </a>

                {/* Services Dropdown Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-12 pt-3 w-80 sm:w-96 animate-fade-in z-50">
                    <div className="p-4 bg-charcoal-950/95 border border-charcoal-700/90 rounded-sm shadow-elevated-dark backdrop-blur-xl">
                      <div className="px-2.5 pb-2.5 mb-2 border-b border-charcoal-800 flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-bronze-400 font-semibold">
                          The 6 Support Pillars
                        </span>
                        <span className="text-[10px] font-mono text-ivory-400">
                          Turnkey Ecosystem
                        </span>
                      </div>

                      <div className="space-y-1">
                        {SERVICE_PILLARS.map((pillar) => (
                          <a
                            key={pillar.id}
                            href={`#${pillar.id}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-sm hover:bg-charcoal-900 transition-colors group/item"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-sm bg-charcoal-900 border border-charcoal-800 flex items-center justify-center group-hover/item:border-bronze-500/40">
                                {pillarIcons[pillar.id]}
                              </div>
                              <div>
                                <span className="font-display text-sm font-semibold text-ivory-50 group-hover/item:text-bronze-300 transition-colors block">
                                  {pillar.name}
                                </span>
                                <span className="text-[10px] text-ivory-400 block line-clamp-1">
                                  {pillar.tagline}
                                </span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-bronze-400 font-semibold">
                              {pillar.pillarNumber}
                            </span>
                          </a>
                        ))}
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-charcoal-800 flex items-center justify-between px-2">
                        <a
                          href="#blueprint"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-[11px] font-mono text-bronze-300 hover:text-ivory-50 flex items-center gap-1 transition-colors"
                        >
                          <Layers className="w-3 h-3 text-bronze-400" />
                          <span>Interactive Blueprint</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                        <a
                          href="#pillars"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-[10px] font-mono text-ivory-400 hover:text-ivory-200"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* The Difference */}
              <a
                href="#comparison"
                className="text-xs tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                The Difference
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="text-xs tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Live Status & CTA Cluster */}
            <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
              {/* Emergency Fleet indicator */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 border border-charcoal-700/80 text-[11px] font-mono text-ivory-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-ivory-400">Fleet Dispatch:</span>
                <span className="text-emerald-400 font-medium">Standby</span>
              </div>

              {onOpenAudit ? (
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="text-xs uppercase tracking-wider font-semibold py-2.5 px-3.5 sm:px-4 rounded-sm border border-bronze-500/40 text-bronze-300 hover:bg-bronze-500/10 hover:border-bronze-300 transition-all duration-200"
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
            <div className="flex items-center gap-2.5 lg:hidden">
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
        onOpenAudit={onOpenAudit}
      />
    </>
  );
}
