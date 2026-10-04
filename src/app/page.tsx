'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ServicePillarsSection } from '@/components/sections/ServicePillarsSection';
import { InteractiveHotspot } from '@/components/interactive/InteractiveHotspot';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { EcosystemDiagram } from '@/components/sections/EcosystemDiagram';
import { ComparisonMatrix } from '@/components/sections/ComparisonMatrix';
import { ExecutiveStandards } from '@/components/sections/ExecutiveStandards';
import { DigitalAssessmentTool } from '@/components/interactive/DigitalAssessmentTool';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { AuditModal } from '@/components/interactive/AuditModal';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedPillarForQuote, setSelectedPillarForQuote] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleRequestQuote = (pillarId: string) => {
    setSelectedPillarForQuote(pillarId);
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAudit={handleOpenAuditModal} />

      <main className="flex-1">
        {/* 1. Immersive Editorial Hero */}
        <Hero onOpenAudit={handleOpenAuditModal} />

        {/* 2. The 6 Support Pillars */}
        <ServicePillarsSection onRequestQuote={handleRequestQuote} />

        {/* 3. Interactive Architectural Blueprint */}
        <InteractiveHotspot />

        {/* 4. The Dark-Hours Execution Cadence */}
        <ProcessTimeline />

        {/* 5. Integrated Hospitality Support Ecosystem */}
        <EcosystemDiagram />

        {/* 6. Strategic Market Differentiation Matrix */}
        <ComparisonMatrix />

        {/* 8. Tangible Executive Craftsmanship & Collateral */}
        <ExecutiveStandards />

        {/* 9. Rapid Digital Diagnostic Tool */}
        <DigitalAssessmentTool />

        {/* 10. Commission & Emergency SLA CTA */}
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
