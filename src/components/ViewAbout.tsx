/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { teamData } from '../data';
import TeamCard from './TeamCard';
import { Target, Landmark, Shield, Compass, ChevronRight, UserCheck } from 'lucide-react';

export default function ViewAbout() {
  const [activeSection, setActiveSection] = useState<'mission' | 'history' | 'team' | 'values'>('mission');

  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  // Scroll spy setup
  useEffect(() => {
    const sections = [
      { id: 'mission', ref: missionRef },
      { id: 'history', ref: historyRef },
      { id: 'team', ref: teamRef },
      { id: 'values', ref: valuesRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // detects intersecting elements near upper center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as 'mission' | 'history' | 'team' | 'values');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      if (sec.ref.current) {
        observer.observe(sec.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: 'mission' | 'history' | 'team' | 'values') => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const sectionsList = [
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Institutional History', id: 'history' },
    { label: 'Board of Directors', id: 'team' },
    { label: 'Governing Values', id: 'values' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
      
      {/* Intro Header */}
      <div className="flex flex-col gap-3 text-left max-w-2xl mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
          WHO WE ARE
        </span>
        <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
          A Peer-Reviewed, Mathematically Rigorous Professional Association
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          AICAIML stands as the credible, modern vanguard representing deep research and professional execution in India and worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Left Column: STICKY navigation (desktop only) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start text-left">
          <div className="flex flex-col gap-4 border-l-2 border-border pl-4">
            <span className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest block mb-1">
              INDEX OF PORTRAIT
            </span>
            {sectionsList.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id as any)}
                  className={`text-left text-[15px] font-medium transition-all relative flex items-center gap-1 cursor-pointer focus:outline-none py-1 ${
                    isActive
                      ? 'text-accent-primary font-semibold translate-x-1.5'
                      : 'text-text-secondary hover:text-accent-primary hover:translate-x-1'
                  }`}
                >
                  {sec.label}

                  {/* Left horizontal line active indicator */}
                  {isActive && (
                    <span className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Scrollable Content - 9 cols */}
        <div className="lg:col-span-9 flex flex-col gap-24 text-left">
          
          {/* Section 1: Mission */}
          <div id="mission" ref={missionRef} className="scroll-mt-24 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-accent-primary-tint text-accent-primary rounded-xl">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                Mission & Curricular Vision
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                Our core mission is to replace generic, high-level certificates with deep mathematical foundations. We believe that professional engineering in Artificial Intelligence and Machine Learning is a discipline requiring formal, verifiable understanding, not just API copy-pasting.
              </p>
              <p className="font-medium text-text-primary bg-bg-secondary p-5 border-l-4 border-accent-secondary rounded-r-xl">
                "We operate with structural honesty. By providing open compute logs, mathematical standards, and physical verification panels, we assure that our practitioners are highly reliable, independent scholars."
              </p>
              <p>
                Through a robust network of research laboratories, student branches, and regional chapters in key Indian tech corridors, we provide direct mentorship, computational support, and career acceleration.
              </p>
            </div>
          </div>

          {/* Section 2: History */}
          <div id="history" ref={historyRef} className="scroll-mt-24 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-accent-secondary-tint text-accent-secondary rounded-xl">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                Institutional Genesis (Replacing the Stale)
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                AICAIML was founded in 2024 by an international coalition of computer scientists and academic heads who recognized a growing gap. Existing professional computing associations, built in the early 2010s, treat AI and Machine Learning as supplementary notice-board listings underneath older IT silos.
              </p>
              <p>
                We established AICAIML to treat Intelligence engineering as a native, stand-alone core discipline. Since our inception, we have established 48 active regional chapters, certified 2,400+ specialists, and structured 15 specialized sandbox laboratories supporting independent open-source initiatives.
              </p>
            </div>
          </div>

          {/* Section 3: Team */}
          <div id="team" ref={teamRef} className="scroll-mt-24 flex flex-col gap-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-accent-primary-tint text-accent-primary rounded-xl">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                Academic & Standards Board
              </h2>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              AICAIML is steered exclusively by active practitioners and academic researchers who review each syllabus, capstone, and project.
            </p>

            {/* Team Grid with Grayscale to Color hover effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamData.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Section 4: Values */}
          <div id="values" ref={valuesRef} className="scroll-mt-24 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-accent-secondary-tint text-accent-secondary rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                Our Governing Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-xl bg-bg-secondary flex gap-4">
                <Compass className="w-8 h-8 text-accent-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1.5">
                    Mathematical Rigor
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    No abstractions. We enforce a firm understanding of linear systems, matrix factoring, and empirical gradient optimization.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-border rounded-xl bg-bg-secondary flex gap-4">
                <Target className="w-8 h-8 text-accent-secondary shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1.5">
                    Open-Source Sandbox
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    We believe in empirical testing. Our labs publish raw training data, logs, and evaluation benchmarks.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-border rounded-xl bg-bg-secondary flex gap-4">
                <Shield className="w-8 h-8 text-accent-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1.5">
                    Structural Honesty
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    We reject marketing hype. If a technique is untested or highly speculative, we label it clearly.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-border rounded-xl bg-bg-secondary flex gap-4">
                <UserCheck className="w-8 h-8 text-accent-secondary shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1.5">
                    Peer Governance
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Our certifications are guarded by active peers, requiring a continuous portfolio defense.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
