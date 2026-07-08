/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function ViewContact() {
  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    interest: 'program',
    message: '',
  });

  // Focus states for floating labels
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});

  // Submission states
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleFocus = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState !== 'idle') return;

    setSubmitState('loading');

    // Simulate network delay of 1500ms
    setTimeout(() => {
      setSubmitState('success');
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        org: '',
        interest: 'program',
        message: '',
      });

      // Reset submit state back to idle after 3000ms
      setTimeout(() => {
        setSubmitState('idle');
      }, 3000);
    }, 1500);
  };

  // Helper to determine if label should float
  const isFloating = (field: string, value: string) => {
    return focusedFields[field] || value !== '';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
      
      {/* Intro Header */}
      <div className="flex flex-col gap-3 text-left max-w-xl mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
          SECURE DISPATCH PANEL
        </span>
        <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
          Connect with AICAIML Review Board
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Inquire about executive certifications, research lab compute pools, or establish a student chapter branch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
        
        {/* Left Side: Contact Form - 7 cols */}
        <div className="lg:col-span-7 bg-bg-secondary border border-border p-8 rounded-2xl relative overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            
            {/* Name Input with Floating Label */}
            <div className="relative">
              <label
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-text-tertiary transition-all duration-200 pointer-events-none origin-left ${
                  isFloating('name', formData.name)
                    ? '-translate-y-7 scale-90 text-accent-primary font-semibold bg-bg-secondary px-1.5 left-2.5 z-10'
                    : ''
                }`}
              >
                Full Practitioner Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
              />
            </div>

            {/* Email Input with Floating Label */}
            <div className="relative">
              <label
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-text-tertiary transition-all duration-200 pointer-events-none origin-left ${
                  isFloating('email', formData.email)
                    ? '-translate-y-7 scale-90 text-accent-primary font-semibold bg-bg-secondary px-1.5 left-2.5 z-10'
                    : ''
                }`}
              >
                Professional Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
              />
            </div>

            {/* Organization Input with Floating Label */}
            <div className="relative">
              <label
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-text-tertiary transition-all duration-200 pointer-events-none origin-left ${
                  isFloating('org', formData.org)
                    ? '-translate-y-7 scale-90 text-accent-primary font-semibold bg-bg-secondary px-1.5 left-2.5 z-10'
                    : ''
                }`}
              >
                Affiliated Corporate or Academic Institution
              </label>
              <input
                type="text"
                name="org"
                required
                value={formData.org}
                onFocus={() => handleFocus('org')}
                onBlur={() => handleBlur('org')}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
              />
            </div>

            {/* Interest dropdown selection */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-wider pl-1">
                Area of Interest
              </span>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
              >
                <option value="program">Professional Certification Admissions</option>
                <option value="chapter">Campus Student Chapter Accreditation</option>
                <option value="labs">Research Laboratory Compute Allocations</option>
                <option value="general">General Administrative Inquiry</option>
              </select>
            </div>

            {/* Message with Floating Label */}
            <div className="relative">
              <label
                className={`absolute left-4 top-4 text-xs font-medium text-text-tertiary transition-all duration-200 pointer-events-none origin-left ${
                  isFloating('message', formData.message)
                    ? '-translate-y-7 scale-90 text-accent-primary font-semibold bg-bg-secondary px-1.5 left-2.5 z-10'
                    : ''
                }`}
              >
                Detailed Proposal or Inquiry
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all resize-none"
              />
            </div>

            {/* Submit Button with Spinner & Success SVG draws */}
            <button
              type="submit"
              disabled={submitState !== 'idle'}
              className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden focus:outline-none cursor-pointer ${
                submitState === 'success'
                  ? 'bg-accent-secondary text-white'
                  : 'bg-accent-primary text-white hover:bg-accent-primary-hover active:scale-[0.98]'
              }`}
            >
              <AnimatePresence mode="wait">
                {submitState === 'idle' && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Submit Secure Form
                    <Send className="w-4 h-4" />
                  </motion.span>
                )}

                {submitState === 'loading' && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    {/* Inline spinner */}
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </motion.span>
                )}

                {submitState === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    {/* Checkmark drawing */}
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    </svg>
                    Proposal Transmitted
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </form>
        </div>

        {/* Right Side: Coordinates / Details - 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between h-full">
          
          {/* Information box */}
          <div className="border border-border bg-bg-secondary p-7 rounded-2xl flex flex-col gap-6">
            <h4 className="font-display font-semibold text-text-primary text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-secondary" />
              Administrative Registry
            </h4>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-3.5">
                <MapPin className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary block">PHYSICAL OFFICE</span>
                  <span className="text-sm font-medium text-text-primary">
                    AICAIML Headquarters, <br />
                    Outer Ring Road, Block 4-C, <br />
                    Bengaluru, Karnataka 560103
                  </span>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Mail className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary block">SECURE DISPATCH</span>
                  <span className="text-sm font-semibold text-accent-primary">
                    board@aicaiml.org
                  </span>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Phone className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary block">OFFICIAL CALL LINE</span>
                  <span className="text-sm font-medium text-text-primary">
                    +91 80 4920 1200
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ethics guidelines note card */}
          <div className="border border-border bg-bg-primary p-7 rounded-2xl flex flex-col gap-3">
            <h5 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
              <Building className="w-4 h-4 text-accent-primary" />
              Accreditation Notice
            </h5>
            <p className="text-xs text-text-secondary leading-relaxed">
              Inquiries regarding Chapter Accreditation are routed directly to the Academic Standards Council. All submissions must represent registered colleges or registered corporate structures. Anonymous submissions will not be logged.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
