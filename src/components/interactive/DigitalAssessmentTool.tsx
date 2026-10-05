'use client';

import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '@/data/assessmentQuestions';
import { SERVICE_PILLARS } from '@/data/services';
import { ServicePillarId } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, RefreshCw, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DigitalAssessmentToolProps {
  isModal?: boolean;
}

export function DigitalAssessmentTool({ isModal = false }: DigitalAssessmentToolProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [venueName, setVenueName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const question = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (qId: string, optionIdx: number) => {
    setSelectedOptions((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleNext = () => {
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedOptions({});
    setCurrentStep(0);
    setIsCompleted(false);
    setSubmitted(false);
  };

  // Determine matching pillars based on real selections
  const calculateResults = () => {
    const recommendedPillarsSet = new Set<ServicePillarId>();

    ASSESSMENT_QUESTIONS.forEach((q) => {
      const selectedIdx = selectedOptions[q.id];
      if (selectedIdx !== undefined) {
        const opt = q.options[selectedIdx];
        opt.recommendedPillars.forEach((p) => recommendedPillarsSet.add(p));
      }
    });

    const recommendedPillars = Array.from(recommendedPillarsSet).map((pId) => {
      return SERVICE_PILLARS.find((p) => p.id === pId);
    }).filter(Boolean);

    return { recommendedPillars };
  };

  const { recommendedPillars } = calculateResults();

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const assessmentCard = (
    <div className="bg-charcoal-950 border border-charcoal-700/80 rounded-sm p-6 sm:p-10 shadow-elevated-dark relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

          {!isCompleted ? (
            <div>
              {/* Progress Tracker */}
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-800 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-bronze-400 font-semibold">
                    STEP {currentStep + 1} OF {ASSESSMENT_QUESTIONS.length}
                  </span>
                  <span className="text-charcoal-600">&bull;</span>
                  <span className="text-xs text-ivory-400 font-medium">
                    {question.category}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {ASSESSMENT_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'w-8 h-1 rounded-full transition-colors',
                        idx === currentStep
                          ? 'bg-bronze-400'
                          : idx < currentStep
                          ? 'bg-bronze-600'
                          : 'bg-charcoal-800'
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Question Headline */}
              <div className="mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50 mb-2">
                  {question.title}
                </h3>
                <p className="text-sm text-ivory-300">
                  {question.subtitle}
                </p>
              </div>

              {/* Options Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {question.options.map((opt, optIdx) => {
                  const isSelected = selectedOptions[question.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(question.id, optIdx)}
                      className={cn(
                        'text-left p-5 rounded-sm border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-bronze-400',
                        isSelected
                          ? 'bg-charcoal-900 border-bronze-400 shadow-bronze-glow'
                          : 'bg-charcoal-900/40 border-charcoal-700/80 hover:border-charcoal-600 hover:bg-charcoal-900/80'
                      )}
                    >
                      <div className="flex items-start justify-between mb-3 w-full">
                        <span className="font-display text-base font-semibold text-ivory-50 group-hover:text-bronze-300 transition-colors">
                          {opt.label}
                        </span>
                        <div
                          className={cn(
                            'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2 transition-colors',
                            isSelected
                              ? 'border-bronze-400 bg-bronze-500 text-charcoal-950'
                              : 'border-charcoal-600'
                          )}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      <p className="text-xs text-ivory-300/80 leading-relaxed font-normal">
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-charcoal-800">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={cn(
                    'text-xs uppercase tracking-wider font-semibold py-2.5 px-4 rounded-sm border border-charcoal-700 transition-colors',
                    currentStep === 0
                      ? 'opacity-40 cursor-not-allowed text-ivory-400'
                      : 'text-ivory-200 hover:text-ivory-50 hover:bg-charcoal-800'
                  )}
                >
                  Previous
                </button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={handleNext}
                  disabled={selectedOptions[question.id] === undefined}
                  withArrow
                >
                  {currentStep === ASSESSMENT_QUESTIONS.length - 1 ? 'Review Priority Plan' : 'Next Step'}
                </Button>
              </div>
            </div>
          ) : (
            /* Diagnostic Results & Lead Request */
            <div className="animate-fade-in">
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-800 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Venue Priorities Mapped
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-ivory-400 hover:text-ivory-200"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset Assessment
                </button>
              </div>

              {/* Operational Needs Summary Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 rounded-sm bg-charcoal-900 border border-charcoal-700/80">
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-mono uppercase text-ivory-400 mb-1">
                    Diagnostic Status
                  </span>
                  <div className="font-display text-2xl font-bold text-bronze-300">
                    Profile Mapped
                  </div>
                  <span className="text-xs text-ivory-300 mt-1">
                    Scope of work defined
                  </span>
                </div>

                <div className="md:col-span-2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-charcoal-800 pt-4 md:pt-0 md:pl-6">
                  <span className="text-[11px] font-mono uppercase text-bronze-400 mb-1">
                    Operational Deployment Recommendation
                  </span>
                  <h4 className="font-display text-xl font-semibold text-ivory-50 mb-2">
                    Turnkey Engineering Protocol
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed">
                    Based on your venue profile and primary operational friction points, the pillars below represent the required mechanical, acoustic, and physical restoration steps. All works are pre-fabricated off-site and deployed overnight.
                  </p>
                </div>
              </div>

              {/* Recommended Pillars List */}
              <div className="mb-10">
                <h4 className="text-xs uppercase font-mono tracking-cinematic text-bronze-400 font-semibold mb-4">
                  Recommended Engineering Pillars for Your Venue:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {recommendedPillars.map((pillar) => (
                    <div
                      key={pillar?.id}
                      className="p-4 rounded-sm bg-charcoal-900/60 border border-charcoal-800 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-semibold text-bronze-400">
                            PILLAR {pillar?.pillarNumber}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                            Identified Need
                          </span>
                        </div>
                        <h5 className="font-display text-lg font-semibold text-ivory-50 mb-1">
                          {pillar?.name}
                        </h5>
                        <p className="text-xs text-ivory-300 line-clamp-2">
                          {pillar?.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-charcoal-800">
                        <span className="text-[11px] text-bronze-300 font-mono block truncate">
                          {pillar?.technicalStandard.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Capture / On-site Visit Form */}
              {!submitted ? (
                <form
                  onSubmit={handleSubmitAudit}
                  className="p-6 rounded-sm bg-charcoal-900 border border-bronze-500/30"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-bronze-400" />
                    <h4 className="font-display text-lg font-semibold text-ivory-50">
                      Request Technical Specification & On-Site Survey
                    </h4>
                  </div>
                  <p className="text-xs text-ivory-300 mb-6">
                    Our Senior Technical Director will review your diagnostic profile and conduct a physical acoustic & equipment inspection at your venue.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-ivory-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Marc Rossi"
                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-3.5 py-2.5 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-ivory-300 block mb-1.5">
                        Venue / Restaurant Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={venueName}
                        onChange={(e) => setVenueName(e.target.value)}
                        placeholder="e.g. The Grillhouse"
                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-3.5 py-2.5 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-ivory-300 block mb-1.5">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+27 82 000 0000"
                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-3.5 py-2.5 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-ivory-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="director@venue.co.za"
                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-3.5 py-2.5 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-sm bg-bronze-500 text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-bronze-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Schedule On-Site Technical Audit</span>
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-sm bg-charcoal-900 border border-emerald-500/40 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-ivory-50 mb-2">
                    Diagnostic Request Received
                  </h4>
                  <p className="text-sm text-ivory-300 max-w-lg mx-auto mb-4">
                    Thank you, {contactName}. Our Technical Director is reviewing {venueName}&apos;s profile. We will contact you at {contactPhone} to confirm your on-site acoustic and facility audit.
                  </p>
                  <span className="text-xs font-mono text-bronze-300">
                    Emergency rapid fleet dispatch remains on active standby.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      );

  if (isModal) {
    return (
      <div className="w-full">
        <div className="mb-6 pb-4 border-b border-charcoal-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-400 font-semibold block mb-1">
            Rapid Facility Diagnostic
          </span>
          <h3 className="font-display text-2xl font-semibold text-ivory-50">
            Identify Your Venue&apos;s Operational Priorities
          </h3>
        </div>
        {assessmentCard}
      </div>
    );
  }

  return (
    <section id="audit-tool" className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Rapid Facility Diagnostic"
          title="Identify Your Venue’s"
          highlightedTitle="Operational Priorities."
          description="Answer 3 targeted operational questions to map your physical and mechanical challenges to specific engineering solutions and schedule a zero-downtime dark-hours audit."
          align="center"
        />
        {assessmentCard}
      </div>
    </section>
  );
}
