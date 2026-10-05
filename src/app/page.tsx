'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { VenueShowcaseSection } from '@/components/sections/VenueShowcaseSection';
import { ServicePillarsSection } from '@/components/sections/ServicePillarsSection';
import { InteractiveHotspot } from '@/components/interactive/InteractiveHotspot';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ComparisonMatrix } from '@/components/sections/ComparisonMatrix';
import { DigitalAssessmentTool } from '@/components/interactive/DigitalAssessmentTool';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { AuditModal } from '@/components/interactive/AuditModal';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedPillarForQuote, setSelectedPillarForQuote] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = () => {
    // If the audit tool is already present on the page, scroll smoothly to it
    const inlineAudit = document.getElementById('audit-tool');
    if (inlineAudit) {
      inlineAudit.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsAuditModalOpen(true);
    }
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleRequestQuote = (pillarId: string) => {
    setSelectedPillarForQuote(pillarId);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAudit={handleOpenAuditModal} />

      <main className="flex-1">
        {/* 1. Immersive Editorial Hero with Realistic Outdoor & Lodge Photography */}
        <Hero onOpenAudit={handleOpenAuditModal} />

        {/* 2. Specialized Hospitality Sectors (Terraces, Lodges, Boutique Hotels, Estates, Bistros, Bars) */}
        <VenueShowcaseSection onRequestQuote={handleRequestQuote} />

        {/* 3. The 6 Support Pillars (Interactive Architectural Deep Dive) */}
        <ServicePillarsSection onRequestQuote={handleRequestQuote} />

        {/* 4. Interactive Architectural Blueprint */}
        <InteractiveHotspot />

        {/* 5. The Dark-Hours Execution Cadence (23:00 to 07:00 Silent Protocol) */}
        <ProcessTimeline />

        {/* 6. Strategic Market Differentiation Matrix */}
        <ComparisonMatrix />

        {/* 7. Rapid Facility Diagnostic Tool */}
        <DigitalAssessmentTool />

        {/* 9. Commission & Emergency SLA CTA */}
        <CTASection preselectedPillarId={selectedPillarForQuote} />
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer />

      {/* Floating Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
      />
    </div>
  );
}
