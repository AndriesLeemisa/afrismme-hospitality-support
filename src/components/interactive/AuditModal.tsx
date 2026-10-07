'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { DigitalAssessmentTool } from './DigitalAssessmentTool';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
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
      className="fixed inset-0 z-[120] bg-charcoal-950/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Restaurant & Hospitality Support Assessment Modal"
    >
      <div className="relative w-full max-w-4xl my-8 bg-charcoal-950 border border-charcoal-700 rounded-sm shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-sm bg-charcoal-900 text-ivory-300 hover:text-ivory-50 border border-charcoal-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6">
          <DigitalAssessmentTool isModal />
        </div>
      </div>
    </div>
  );
}
