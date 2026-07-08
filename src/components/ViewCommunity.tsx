/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import InteractiveMap from './InteractiveMap';
import { ShieldCheck, GraduationCap, Users, FileText, ArrowRight } from 'lucide-react';

export default function ViewCommunity() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col gap-16">
      
      {/* Page Header */}
      <div className="flex flex-col gap-3 text-left max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
          AICAIML CHAPTER CIRCLES
        </span>
        <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
          A Decentralized Infrastructure of Active AI/ML Researchers
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          Locate localized professional branches or register your institution as an accredited student chapter circle to access computing allocations and debug panels.
        </p>
      </div>

      {/* Interactive Map Core Block */}
      <section className="bg-bg-primary">
        <InteractiveMap />
      </section>

      {/* Corporate & Student Branches Guidelines Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border pt-16 text-left">
        
        {/* Card 1: Student Branches */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent-primary-tint text-accent-primary rounded-xl">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              Chartering Student Branches
            </h3>
          </div>
          
          <div className="flex flex-col gap-4 text-xs text-text-secondary leading-relaxed">
            <p>
              We accredit student branch circles at premier computer science institutes. Registered branches gain access to our custom board-approved Applied Machine Learning curricula, hardware compute pools, and annual hack-symposium allocations.
            </p>
            <div className="flex flex-col gap-2.5 mt-2 glass-card p-5">
              <div className="flex gap-2 items-center text-text-primary font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-secondary" />
                <span>Requires minimum 15 active enrollments</span>
              </div>
              <div className="flex gap-2 items-center text-text-primary font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-secondary" />
                <span>Sponsored by an active CS/Math faculty peer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Professional Corridors */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent-secondary-tint text-accent-secondary rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              Professional Corridors
            </h3>
          </div>

          <div className="flex flex-col gap-4 text-xs text-text-secondary leading-relaxed">
            <p>
              Professional chapters unite researchers, industry CAIOs, and core ML engineers in metropolitan corridors. These branches serve as regional hubs for peer-led debug roundtables, enterprise security panels, and placement standard boards.
            </p>
            <div className="flex flex-col gap-2.5 mt-2 glass-card p-5">
              <div className="flex gap-2 items-center text-text-primary font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-primary" />
                <span>Organizes bi-monthly physical roundtables & clinics</span>
              </div>
              <div className="flex gap-2 items-center text-text-primary font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-primary" />
                <span>Governs placement auditing for localized graduates</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Chapter Accreditation Application Banner */}
      <section className="glass-card p-8 md:p-10 text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2.5 max-w-xl">
          <h4 className="text-lg font-display font-bold text-text-primary">
            Ready to accredit your campus?
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Submit a formal proposal to the AICAIML Institutional Review Committee. Approved campuses receive curriculum licenses, compute credits, and placement board sponsorships.
          </p>
        </div>
        <button className="px-5 py-3 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer focus:outline-none">
          Download Charter Proposal Kit
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
