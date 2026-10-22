'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Menu, ChevronDown, Sparkles, Compass, Wrench, ShieldCheck, ShieldAlert, TrendingUp, Layers, ArrowRight, Cpu } from 'lucide-react';
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
  const isCorporateProfilePage = pathname === '/corporate-profile';
  const isBrochurePage = pathname === '/brochure';
  const isBookletPage = pathname === '/booklet';

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
            ? 'bg-charcoal-950/98 backdrop-blur-md border-charcoal-700/80 py-3.5 shadow-subtle-dark'
            : 'bg-charcoal-950/90 backdrop-blur-md border-white/10 py-4 sm:py-5'
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
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
              {/* 1. Home */}
              <Link
                href="/"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isHomePage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-white hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                Home
              </Link>

              {/* 2. About */}
              <Link
                href="/about"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isAboutPage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-white hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                About
              </Link>

              {/* 3. Product & Services (Dropdown Menu including Pillars and Technology) */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href={isHomePage ? '#pillars' : '/#pillars'}
                  className={cn(
                    'whitespace-nowrap inline-flex items-center gap-1.5 text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1',
                    servicesDropdownOpen ? 'text-bronze-300' : 'text-white hover:text-bronze-300'
                  )}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <span>Product & Services</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', servicesDropdownOpen ? 'rotate-180 text-bronze-400' : 'text-ivory-200')} />
                </a>

                {/* Services Dropdown Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-12 pt-3 w-80 sm:w-[420px] animate-fade-in z-50">
                    <div className="p-4 bg-charcoal-950 border-2 border-charcoal-700 rounded-sm shadow-elevated-dark">
                      <div className="px-2.5 pb-2.5 mb-2 border-b border-charcoal-800 flex items-center justify-between">
                        <span className="text-xs font-mono tracking-widest uppercase text-bronze-300 font-bold">
                          Hospitality Offerings
                        </span>
                        <span className="text-xs font-mono text-ivory-200 font-semibold">
                          Integrated Solutions
                        </span>
                      </div>

                      {/* The 5 Core Physical & Facilities Pillars */}
                      <div className="space-y-1.5">
                        {SERVICE_PILLARS.slice(0, 5).map((pillar) => (
                          <a
                            key={pillar.id}
                            href={isHomePage ? `#${pillar.id}` : `/#${pillar.id}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-sm hover:bg-charcoal-850 transition-colors group/item"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-sm bg-charcoal-900 border border-charcoal-700 flex items-center justify-center group-hover/item:border-bronze-400">
                                {pillarIcons[pillar.id]}
                              </div>
                              <div>
                                <span className="font-display text-sm sm:text-base font-bold text-white group-hover/item:text-bronze-300 transition-colors block">
                                  {pillar.name}
                                </span>
                                <span className="text-xs text-ivory-200 block line-clamp-1 font-medium">
                                  {pillar.tagline}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-mono text-bronze-300 font-bold">
                              {pillar.pillarNumber}
                            </span>
                          </a>
                        ))}

                        {/* Technology (Scinovalities) placed under Product & Services */}
                        <a
                          href={isHomePage ? '#technology' : '/#technology'}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-sm bg-bronze-400/10 hover:bg-charcoal-850 border border-bronze-400/30 hover:border-bronze-400 transition-colors group/item mt-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-sm bg-charcoal-900 border border-bronze-400/40 flex items-center justify-center text-bronze-300">
                              <Cpu className="w-4 h-4 text-bronze-400" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-display text-sm sm:text-base font-bold text-white group-hover/item:text-bronze-300 transition-colors block">
                                  Technology
                                </span>
                                <span className="text-[11px] font-mono text-bronze-300 font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-charcoal-900 border border-bronze-400/40">
                                  Scinovalities
                                </span>
                              </div>
                              <span className="text-xs text-ivory-200 block line-clamp-1 font-medium">
                                Websites, Digital Menus & AI Automation
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-bronze-300 shrink-0" />
                        </a>
                      </div>

                      {/* Collateral & PDF Resources */}
                      <div className="mt-3 pt-2.5 border-t border-charcoal-800 grid grid-cols-3 gap-2">
                        <Link
                          href="/corporate-profile"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2 rounded bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700 hover:border-bronze-400 text-xs font-mono text-white hover:text-bronze-300 transition-colors block text-center"
                        >
                          <span className="font-bold block text-white">Profile</span>
                          <span className="text-[11px] text-ivory-200">22p Master</span>
                        </Link>
                        <Link
                          href="/brochure"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2 rounded bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700 hover:border-bronze-400 text-xs font-mono text-white hover:text-bronze-300 transition-colors block text-center"
                        >
                          <span className="font-bold block text-white">Brochure</span>
                          <span className="text-[11px] text-ivory-200">12p Visual</span>
                        </Link>
                        <Link
                          href="/booklet"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2 rounded bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700 hover:border-bronze-400 text-xs font-mono text-white hover:text-bronze-300 transition-colors block text-center"
                        >
                          <span className="font-bold block text-white">Booklet</span>
                          <span className="text-[11px] text-ivory-200">36p Guide</span>
                        </Link>
                      </div>

                      {/* Dropdown Quick Action */}
                      <div className="mt-3 pt-2.5 border-t border-charcoal-800">
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
                          className="w-full flex items-center justify-between p-2.5 rounded-sm bg-bronze-400 text-charcoal-950 hover:bg-bronze-300 font-bold text-xs font-mono uppercase tracking-wider transition-colors text-left"
                        >
                          <span>Assess Your Venue</span>
                          <ArrowRight className="w-3.5 h-3.5 text-charcoal-950" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Corporate Profile */}
              <Link
                href="/corporate-profile"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isCorporateProfilePage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-white hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                Profile
              </Link>

              {/* 5. Brochure */}
              <Link
                href="/brochure"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isBrochurePage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-white hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                Brochure
              </Link>

              {/* 6. Support Booklet */}
              <Link
                href="/booklet"
                className={cn(
                  'whitespace-nowrap text-sm tracking-wider uppercase font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-bronze-400 after:transition-all after:duration-300',
                  isBookletPage
                    ? 'text-bronze-300 after:w-full'
                    : 'text-white hover:text-bronze-300 after:w-0 hover:after:w-full'
                )}
              >
                Booklet
              </Link>

              {/* 6. Ecosystem */}
              <a
                href={isHomePage ? '#ecosystem' : '/#ecosystem'}
                className="whitespace-nowrap text-sm tracking-wider uppercase font-bold text-white hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Ecosystem
              </a>

              {/* 7. Contact */}
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                className="whitespace-nowrap text-sm tracking-wider uppercase font-bold text-white hover:text-bronze-300 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Single Clean Primary CTA */}
            <div className="hidden sm:flex items-center shrink-0">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenAudit ? onOpenAudit : undefined}
                href={!onOpenAudit ? (isHomePage ? '#audit-tool' : '/#audit-tool') : undefined}
                withArrow
                className="whitespace-nowrap font-semibold"
              >
                Assess Venue
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
