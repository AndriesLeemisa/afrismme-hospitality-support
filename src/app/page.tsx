'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { RestaurantOwnerProblemSection } from '@/components/sections/RestaurantOwnerProblemSection';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ServicePillarsSection } from '@/components/sections/ServicePillarsSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { TechnologyPartnerSection } from '@/components/sections/TechnologyPartnerSection';
import { VenueShowcaseSection } from '@/components/sections/VenueShowcaseSection';
import { ComparisonMatrix } from '@/components/sections/ComparisonMatrix';
import { DigitalAssessmentTool } from '@/components/interactive/DigitalAssessmentTool';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { AuditModal } from '@/components/interactive/AuditModal';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedPillarForQuote, setSelectedPillarForQuote] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = () => {
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
      <Navbar onOpenAudit={handleOpenAuditModal} />

      <main className="flex-1">
        {/* 1. Hero: Identify. Solve. Restore. Maintain. Grow. */}
        <Hero onOpenAudit={handleOpenAuditModal} />

        {/* 2. The Operator's Reality: 6 Core Venue Challenges */}
        <RestaurantOwnerProblemSection onOpenAudit={handleOpenAuditModal} />

        {/* 3. Methodology: 5 Steps + Zero Daytime Disruption */}
        <ProcessTimeline />

        {/* 4. Hospitality Solutions: Six Pillars */}
        <ServicePillarsSection onRequestQuote={handleRequestQuote} />

        {/* 5. The Ecosystem: Six Specialist Divisions */}
        <EcosystemSection />

        {/* 6. Technology Partner: Scinovalities */}
        <TechnologyPartnerSection />

        {/* 7. Who We Support: Hospitality Sectors Across South Africa */}
        <VenueShowcaseSection />

        {/* 8. The Difference: Strategic Comparison */}
        <ComparisonMatrix />

        {/* 9. Interactive Assessment Tool */}
        <DigitalAssessmentTool />

        {/* 10. Direct Inquiry & Contact */}
        <CTASection preselectedPillarId={selectedPillarForQuote} />
      </main>

      <Footer />

      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
      />
    </div>
  );
}
