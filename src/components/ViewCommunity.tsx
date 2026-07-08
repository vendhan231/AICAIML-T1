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

      {/* Membership Tiers & Access Levels */}
      <section className="border-t border-border pt-16 text-left flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
            INDIVIDUAL & INSTITUTIONAL MEMBERSHIP
          </span>
          <h2 className="text-2xl font-display font-semibold text-text-primary tracking-tight">
            AICAIML Membership Registry
          </h2>
          <p className="text-xs text-text-tertiary">
            Unlock developer-level sandboxes, verified program accreditation, and active community roundtable invitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1: Student Membership */}
          <div className="glass-card p-6 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-accent-primary">
            <div className="absolute top-3 right-3 bg-accent-primary-tint text-accent-primary text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
              POPULAR FOR ACADEMIA
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 bg-accent-primary-tint text-accent-primary rounded-xl">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-sm">Student Associate</h4>
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-semibold font-mono">Academic Tier</span>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-2xl font-display font-bold text-text-primary">$0</span>
                <span className="text-[11px] text-text-tertiary"> / forever (Verified .edu)</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary mb-8">
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>Access to Shared ML compute nodes (60h/mo)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>Interactive debug boards & forum access</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>10% discount on official Core Certifications</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>Invitations to student branch local meetups</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-colors cursor-pointer focus:outline-none">
              Register Verified Student
            </button>
          </div>

          {/* Tier 2: Professional Researcher */}
          <div className="glass-card p-6 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-accent-secondary">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 bg-accent-secondary-tint text-accent-secondary rounded-xl">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-sm">Professional Researcher</h4>
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-semibold font-mono">Individual Core</span>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-2xl font-display font-bold text-text-primary">$49</span>
                <span className="text-[11px] text-text-tertiary"> / annually</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary mb-8">
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                  <span>Dedicated GPU accelerator node (120h/mo)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                  <span>Bi-monthly physical roundtable invitation</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                  <span>Enterprise debug clinic consulting allocation</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                  <span>Standard placement board registry & portfolio</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-colors cursor-pointer focus:outline-none">
              Apply Professional License
            </button>
          </div>

          {/* Tier 3: Institutional Campus */}
          <div className="glass-card p-6 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-text-primary">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 bg-bg-tertiary text-text-primary rounded-xl">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-sm">Institutional Campus</h4>
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-semibold font-mono">Departmental Level</span>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-2xl font-display font-bold text-text-primary">Fully Funded</span>
                <span className="text-[11px] text-text-tertiary"> / grant supported</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary mb-8">
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-text-primary shrink-0 mt-0.5" />
                  <span>Official department accreditation license</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-text-primary shrink-0 mt-0.5" />
                  <span>AICAIML-approved curricula integration toolkit</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-text-primary shrink-0 mt-0.5" />
                  <span>Unlimited local student associate accounts</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-text-primary shrink-0 mt-0.5" />
                  <span>Annual hack-symposium hosting allowance</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-colors cursor-pointer focus:outline-none">
              Propose Institutional Charter
            </button>
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
