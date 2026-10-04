'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, PhoneCall, MessageSquare, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { SERVICE_PILLARS } from '@/data/services';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  preselectedPillarId?: string;
}

export function ContactForm({ preselectedPillarId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'General Manager',
    venueName: '',
    city: 'Johannesburg / Sandton',
    phone: '',
    email: '',
    pillar: preselectedPillarId || 'enhance',
    urgency: 'Within 7 Days',
    message: '',
    requiresOvernight: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="contact" className="w-full">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-charcoal-900 border border-charcoal-700/80 rounded-sm p-6 sm:p-10 shadow-elevated-dark relative"
        >
          <div className="mb-8 pb-6 border-b border-charcoal-800">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory-50 mb-2">
              Commission Facility Engineering or Emergency SLA
            </h3>
            <p className="text-sm text-ivory-300">
              Submit your venue specifications. Our technical engineering division will respond with a preliminary diagnostic and deployment proposal within 4 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Executive / Director Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. David van der Merwe"
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Role / Title
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
              >
                <option value="General Manager">General Manager</option>
                <option value="Executive Chef / Culinary Director">Executive Chef / Culinary Director</option>
                <option value="Managing Director / Owner">Managing Director / Owner</option>
                <option value="Operations Director">Operations Director</option>
                <option value="Facilities Manager">Facilities Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Venue or Restaurant Name *
              </label>
              <input
                type="text"
                required
                value={formData.venueName}
                onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                placeholder="e.g. Marble Restaurant"
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                City / Region
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
              >
                <option value="Johannesburg / Sandton">Johannesburg & Sandton</option>
                <option value="Cape Town / Atlantic Seaboard">Cape Town & Atlantic Seaboard</option>
                <option value="Pretoria / Menlyn">Pretoria & Menlyn</option>
                <option value="Durban / Umhlanga">Durban & Umhlanga</option>
                <option value="Cape Winelands">Franschhoek & Stellenbosch</option>
                <option value="Other Regional Center">Other Regional Hub</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Direct Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+27 (0) 82 000 0000"
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Official Business Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="gm@restaurant.co.za"
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400"
              />
            </div>
          </div>

          {/* Primary Pillar selector & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Primary Pillar of Interest
              </label>
              <select
                value={formData.pillar}
                onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
              >
                {SERVICE_PILLARS.map((p) => (
                  <option key={p.id} value={p.id}>
                    Pillar {p.pillarNumber}: {p.name} ({p.tagline})
                  </option>
                ))}
                <option value="full-audit">Comprehensive 6-Pillar Facility Audit</option>
                <option value="emergency-sla">24/7 Rapid Emergency Fleet SLA</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
                Deployment Timeline
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-bronze-400"
              >
                <option value="Immediate Emergency (<24 Hours)">Immediate Emergency (&lt;24 Hours)</option>
                <option value="Within 7 Days">Within 7 Days</option>
                <option value="Scheduled Next Month">Scheduled Next Month</option>
                <option value="Upcoming Re-concepting">Upcoming Re-concepting / Refit</option>
              </select>
            </div>
          </div>

          {/* Details / Brief Textarea */}
          <div className="mb-6">
            <label className="block text-xs font-mono uppercase text-ivory-300 mb-2">
              Specific Requirements or Current Venue Issues
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. We have 32 solid oak tables that need urgent stripping and hardwax oil sealing before the summer season. We need it done strictly overnight between dinner and breakfast service..."
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-sm p-4 text-sm text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400 resize-none"
            />
          </div>

          {/* Overnight requirement checkbox */}
          <div className="mb-8 p-4 rounded-sm bg-charcoal-950 border border-charcoal-800 flex items-start gap-3">
            <input
              type="checkbox"
              id="overnight-check"
              checked={formData.requiresOvernight}
              onChange={(e) => setFormData({ ...formData, requiresOvernight: e.target.checked })}
              className="mt-1 accent-bronze-500 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="overnight-check" className="text-xs text-ivory-200 cursor-pointer">
              <span className="font-semibold text-ivory-50 block">
                Strict Dark-Hours Overnight Protocol Required (23:00 to 07:00)
              </span>
              Ensure work takes place entirely after closing with zero daytime guest interruption.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto py-4 px-8 rounded-sm bg-bronze-500 text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-bronze-400 transition-colors flex items-center justify-center gap-2.5 shadow-subtle-dark hover:shadow-bronze-glow"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Proposal Commission'}</span>
            </button>

            <span className="text-xs text-ivory-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-bronze-400" />
              Non-disclosure & operator confidentiality assured
            </span>
          </div>
        </form>
      ) : (
        <div className="bg-charcoal-900 border border-emerald-500/50 rounded-sm p-8 sm:p-12 text-center shadow-elevated-dark animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-display text-3xl font-semibold text-ivory-50 mb-3">
            Commission Request Received
          </h3>

          <p className="text-base text-ivory-200 max-w-lg mx-auto mb-6 leading-relaxed">
            Thank you, {formData.fullName}. Your specification for <strong className="text-bronze-300">{formData.venueName}</strong> has been logged in our engineering dispatch queue.
          </p>

          <div className="p-4 rounded-sm bg-charcoal-950 border border-charcoal-800 max-w-md mx-auto text-left text-xs text-ivory-300 space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-ivory-400">Pillar:</span>
              <span className="font-mono text-bronze-300 uppercase">{formData.pillar}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ivory-400">Target Region:</span>
              <span>{formData.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ivory-400">Target Protocol:</span>
              <span>{formData.requiresOvernight ? 'Strict Dark-Hours (Overnight)' : 'Flexible Scheduled'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-sm border border-charcoal-700 text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800 transition-colors"
            >
              Submit Another Commission
            </button>

            <a
              href="https://wa.me/27118849200?text=Hello%20AfriSMME%20Hospitality%20Support,%20I%20have%20submitted%20a%20support%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-sm bg-emerald-600 text-ivory-50 hover:bg-emerald-500 transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect via WhatsApp Hotline</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
