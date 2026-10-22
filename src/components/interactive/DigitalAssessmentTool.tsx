'use client';

import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '@/data/assessmentQuestions';
import { SERVICE_PILLARS } from '@/data/services';
import { ServicePillarId } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, RefreshCw, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollFloatReveal } from '@/components/ui/ScrollFloatReveal';

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
    <div className="bg-charcoal-950 border-2 border-charcoal-700 rounded-sm p-6 sm:p-10 shadow-elevated-dark relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

          {!isCompleted ? (
            <div>
              {/* Progress Tracker */}
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-800 mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs sm:text-sm text-bronze-300 font-bold">
                    STEP {currentStep + 1} OF {ASSESSMENT_QUESTIONS.length}
                  </span>
                  <span className="text-charcoal-500">&bull;</span>
                  <span className="text-xs sm:text-sm text-ivory-100 font-bold">
                    {question.category}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {ASSESSMENT_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'w-8 h-1.5 rounded-full transition-colors',
                        idx === currentStep
                          ? 'bg-bronze-400'
                          : idx < currentStep
                          ? 'bg-bronze-500'
                          : 'bg-charcoal-700'
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Question Headline */}
              <div className="mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2.5">
                  {question.title}
                </h3>
                <p className="text-base font-medium text-ivory-100">
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
                        'text-left p-5 sm:p-6 rounded-sm border-2 transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-bronze-400',
                        isSelected
                          ? 'bg-charcoal-850 border-bronze-400 shadow-bronze-glow'
                          : 'bg-charcoal-900 border-charcoal-700 hover:border-bronze-400/60 hover:bg-charcoal-850'
                      )}
                    >
                      <div className="flex items-start justify-between mb-3 w-full">
                        <span className="font-display text-lg font-bold text-white group-hover:text-bronze-300 transition-colors">
                          {opt.label}
                        </span>
                        <div
                          className={cn(
                            'w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 transition-colors',
                            isSelected
                              ? 'border-bronze-400 bg-bronze-400 text-charcoal-950'
                              : 'border-charcoal-500'
                          )}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-ivory-100 leading-relaxed font-medium">
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
                    'text-sm uppercase tracking-wider font-bold py-3 px-5 rounded-sm border-2 border-charcoal-700 transition-colors',
                    currentStep === 0
                      ? 'opacity-40 cursor-not-allowed text-ivory-300'
                      : 'text-white hover:text-bronze-300 hover:bg-charcoal-800'
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
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    Venue Priorities Mapped
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ivory-200 hover:text-white"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset Assessment
                </button>
              </div>

              {/* Operational Needs Summary Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 rounded-sm bg-charcoal-900 border-2 border-charcoal-700">
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-mono font-bold uppercase text-ivory-200 mb-1">
                    Assessment Status
                  </span>
                  <div className="font-display text-2xl font-extrabold text-bronze-300">
                    Profile Mapped
                  </div>
                  <span className="text-sm font-medium text-ivory-100 mt-1">
                    Priorities & gaps identified
                  </span>
                </div>

                <div className="md:col-span-2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-charcoal-700 pt-4 md:pt-0 md:pl-6">
                  <span className="text-xs font-mono font-bold uppercase text-bronze-300 mb-1">
                    Ecosystem Roadmap Recommendation
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-2">
                    Coordinated Hospitality Support Plan
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-ivory-100 leading-relaxed">
                    Based on your venue profile and priority operational areas, the pillars below represent the most impactful physical, digital, and operational solutions. All interventions are coordinated through our specialist partners around your scheduled daytime & maintenance windows.
                  </p>
                </div>
              </div>

              {/* Recommended Pillars List */}
              <div className="mb-10">
                <h4 className="text-sm uppercase font-mono tracking-widest text-bronze-300 font-extrabold mb-4">
                  Recommended Support Pillars for Your Venue:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {recommendedPillars.map((pillar) => (
                    <div
                      key={pillar?.id}
                      className="p-5 rounded-sm bg-charcoal-900 border-2 border-charcoal-700 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-bronze-300">
                            PILLAR {pillar?.pillarNumber}
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-700">
                            Identified Need
                          </span>
                        </div>
                        <h5 className="font-display text-xl font-extrabold text-white mb-1.5">
                          {pillar?.name}
                        </h5>
                        <p className="text-sm font-medium text-ivory-100 line-clamp-2">
                          {pillar?.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-charcoal-700">
                        <span className="text-xs text-bronze-300 font-mono font-semibold block truncate">
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
                  className="p-6 sm:p-8 rounded-sm bg-charcoal-900 border-2 border-bronze-400/50"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-bronze-400" />
                    <h4 className="font-display text-xl font-extrabold text-white">
                      Request Full Hospitality Assessment & Proposal
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ivory-100 mb-6">
                    Our team will review your assessment responses and arrange a comprehensive walkthrough or consultation to evaluate physical, operational, and digital opportunities.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="text-xs font-mono font-bold uppercase text-white block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Marc Rossi"
                        className="w-full bg-charcoal-950 border-2 border-charcoal-700 rounded-sm px-4 py-3 text-base text-white placeholder:text-ivory-400/70 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold uppercase text-white block mb-1.5">
                        Venue / Restaurant Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={venueName}
                        onChange={(e) => setVenueName(e.target.value)}
                        placeholder="e.g. The Grillhouse"
                        className="w-full bg-charcoal-950 border-2 border-charcoal-700 rounded-sm px-4 py-3 text-base text-white placeholder:text-ivory-400/70 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold uppercase text-white block mb-1.5">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+27 82 000 0000"
                        className="w-full bg-charcoal-950 border-2 border-charcoal-700 rounded-sm px-4 py-3 text-base text-white placeholder:text-ivory-400/70 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold uppercase text-white block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="director@venue.co.za"
                        className="w-full bg-charcoal-950 border-2 border-charcoal-700 rounded-sm px-4 py-3 text-base text-white placeholder:text-ivory-400/70 focus:outline-none focus:border-bronze-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-sm bg-bronze-400 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider hover:bg-bronze-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Hospitality Assessment Request</span>
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-sm bg-charcoal-900 border-2 border-emerald-500/60 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-2xl font-extrabold text-white mb-2">
                    Assessment Request Received
                  </h4>
                  <p className="text-base font-medium text-ivory-100 max-w-lg mx-auto mb-4">
                    Thank you, {contactName}. We are reviewing {venueName}&apos;s assessment profile. Our team will contact you at {contactPhone} to discuss prioritized recommendations and coordinate next steps.
                  </p>
                  <span className="text-xs sm:text-sm font-mono font-bold text-bronze-300">
                    Scheduled maintenance windows. Turnkey ecosystem coordination.
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
            Venue Assessment
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory-50">
            Restaurant & Hospitality Support Assessment
          </h3>
        </div>
        {assessmentCard}
      </div>
    );
  }

  return (
    <section id="audit-tool" className="py-20 sm:py-28 bg-charcoal-900 border-t border-charcoal-800 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloatReveal direction="up" delay={30}>
          <SectionHeading
            badge="Venue Assessment"
            title="Assess your venue's"
            highlightedTitle="gaps and opportunities."
            description="A quick diagnostic across physical comfort, terrace spaces, digital presence, and maintenance to unlock better guest experiences and revenue."
            align="center"
          />
        </ScrollFloatReveal>
        <ScrollFloatReveal direction="up" delay={120} hoverFloat>
          {assessmentCard}
        </ScrollFloatReveal>
      </div>
    </section>
  );
}
