'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';

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
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isHomePage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-ivory-200/90 hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isAboutPage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-ivory-200/90 hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                About
              </Link>

              {/* Services with Dropdown Menu */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href={isHomePage ? '#pillars' : '/#pillars'}
                  className={cn(
                    'whitespace-nowrap inline-flex items-center gap-1.5 text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative py-1',
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
                            href={isHomePage ? `#${pillar.id}` : `/#${pillar.id}`}
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
                                {pillar.externalLinks && pillar.externalLinks.length > 0 && (
                                  <span className="text-[9px] font-mono text-bronze-400/90 block mt-0.5">
                                    {pillar.externalLinks.map((l) => l.name).join(' & ')}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-bronze-400 font-semibold">
                              {pillar.pillarNumber}
                            </span>
                          </a>
                        ))}
                      </div>

                      {/* Dropdown Quick Actions */}
                      <div className="mt-3 pt-2.5 border-t border-charcoal-800 space-y-1.5">
                        <a
                          href={isHomePage ? '#comparison' : '/#comparison'}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center justify-between p-2 rounded-sm bg-charcoal-900/60 hover:bg-charcoal-900 border border-charcoal-800 text-[11px] font-mono text-bronze-300 hover:text-ivory-50 transition-colors"
                        >
                          <span>The Difference (Strategic Comparison)</span>
                          <ArrowRight className="w-3 h-3 text-bronze-400" />
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            if (onOpenAudit) {
                              onOpenAudit();
                            } else {
                              const el = document.getElementById('audit-tool');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-sm bg-bronze-500/10 hover:bg-bronze-500/20 border border-bronze-500/30 text-[11px] font-mono text-bronze-300 hover:text-ivory-50 transition-colors text-left"
                        >
                          <span>Facility Diagnostic Audit</span>
                          <ArrowRight className="w-3 h-3 text-bronze-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Ecosystem */}
              <a
                href={isHomePage ? '#ecosystem' : '/#ecosystem'}
                className="whitespace-nowrap text-sm tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Ecosystem
              </a>

              {/* Contact */}
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                className="whitespace-nowrap text-sm tracking-wider uppercase font-medium text-ivory-200/90 hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Single Clean Primary CTA */}
            <div className="hidden sm:flex items-center shrink-0">
              <Button href={isHomePage ? '#contact' : '/#contact'} variant="primary" size="sm" withArrow className="whitespace-nowrap font-semibold">
                Request Support
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
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
