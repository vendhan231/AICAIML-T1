/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Program } from '../types';
import { programsData } from '../data';
import { Search, GraduationCap, Clock, Award, BookOpen, Layers, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ViewProgramsProps {
  selectedProgram: Program | null;
  onClearSelectedProgram: () => void;
}

export default function ViewPrograms({ selectedProgram, onClearSelectedProgram }: ViewProgramsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'advanced' | 'certification'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal state
  const [detailProgramId, setDetailProgramId] = useState<string | null>(selectedProgram?.id || null);

  // Clear or sync selected program from props
  useMemo(() => {
    if (selectedProgram) {
      setDetailProgramId(selectedProgram.id);
      onClearSelectedProgram(); // reset in parent so user can reopen it
    }
  }, [selectedProgram]);

  const activeProgram = useMemo(() => {
    return programsData.find((p) => p.id === detailProgramId) || null;
  }, [detailProgramId]);

  const tabs: { label: string; id: 'all' | 'beginner' | 'advanced' | 'certification' }[] = [
    { label: 'All Curriculums', id: 'all' },
    { label: 'Beginner / Core', id: 'beginner' },
    { label: 'Advanced System', id: 'advanced' },
    { label: 'Professional Certs', id: 'certification' },
  ];

  // Filtering logic
  const filteredPrograms = useMemo(() => {
    return programsData.filter((p) => {
      const matchesTab = activeTab === 'all' || p.category === activeTab;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
      
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex flex-col gap-3 text-left max-w-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
            AICAIML ACADEMY & LABS
          </span>
          <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
            Curricular Pathways in Intelligence Engineering
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Every curriculum centers core mathematics and program sandboxes. We teach actual machine learning deployment pipelines—never surface-level summaries.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
          <input
            type="text"
            placeholder="Search syllabus or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-bg-secondary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
          />
        </div>
      </div>

      {/* Sliding Tab Filter */}
      <div className="flex justify-start mb-10 overflow-x-auto pb-2 scrollbar">
        <div className="relative flex p-1.5 bg-bg-secondary rounded-full border border-border shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 text-xs font-semibold rounded-full focus:outline-none transition-colors cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-programs-tab"
                    className="absolute inset-0 bg-accent-primary-tint rounded-full -z-10"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className={isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid container with fading staggered animation on tab changes */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((prog, idx) => (
            <motion.div
              key={prog.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card overflow-hidden group flex flex-col justify-between h-full"
            >
              {/* Media banner */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <span className="absolute top-4 left-4 text-[9px] font-mono font-bold uppercase tracking-wider text-accent-secondary bg-accent-secondary-tint/90 backdrop-blur px-2.5 py-1 rounded-full border border-accent-secondary/10">
                  {prog.difficulty} level
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-semibold tracking-wide text-text-tertiary uppercase">
                    <Clock className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{prog.duration} • {prog.hours} Study Hours</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-text-tertiary">BOARD SPONSOR</span>
                    <span className="text-xs text-text-primary font-semibold">{prog.instructor}</span>
                  </div>

                  <button
                    onClick={() => setDetailProgramId(prog.id)}
                    className="px-4 py-2 bg-bg-primary hover:bg-accent-primary hover:text-white border border-border group-hover:border-accent-primary text-xs font-semibold text-accent-primary rounded-xl flex items-center gap-1.5 transition-all cursor-pointer focus:outline-none"
                  >
                    View Syllabus
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No results placeholder */}
      {filteredPrograms.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-2xl text-text-tertiary">
          No curriculums found matching your filters.
        </div>
      )}

      {/* Detailed Syllabus Modal Popup */}
      <AnimatePresence>
        {activeProgram && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailProgramId(null)}
              className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 md:inset-x-auto md:w-[650px] max-h-[85vh] bg-bg-primary border border-border rounded-[18px] shadow-2xl z-50 top-[10%] bottom-[10%] mx-auto flex flex-col overflow-hidden text-left"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-start justify-between bg-bg-secondary">
                <div className="flex flex-col gap-1.5">
                  <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-accent-primary bg-accent-primary-tint px-2.5 py-0.5 rounded-full self-start">
                    {activeProgram.category} Syllabus
                  </span>
                  <h3 className="text-xl font-display font-semibold text-text-primary leading-tight">
                    {activeProgram.title}
                  </h3>
                </div>
                <button
                  onClick={() => setDetailProgramId(null)}
                  className="p-1.5 rounded-lg border border-border hover:bg-bg-tertiary transition-colors cursor-pointer focus:outline-none"
                >
                  <X className="w-4 h-4 text-text-secondary" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 scrollbar">
                
                {/* Meta block */}
                <div className="grid grid-cols-3 gap-4 border-b border-border pb-5 text-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase">DURATION</span>
                    <strong className="text-sm text-text-primary font-semibold">{activeProgram.duration}</strong>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase">LECTURES</span>
                    <strong className="text-sm text-text-primary font-semibold">{activeProgram.lessons} Modules</strong>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase">DIFFICULTY</span>
                    <strong className="text-sm text-text-primary font-semibold">{activeProgram.difficulty}</strong>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-mono text-[11px] font-bold text-text-primary uppercase tracking-wider mb-2">
                    Course Overview
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {activeProgram.description}
                  </p>
                </div>

                {/* Weekly syllabus modules */}
                <div>
                  <h4 className="font-mono text-[11px] font-bold text-text-primary uppercase tracking-wider mb-3">
                    Weekly Curriculum Modules
                  </h4>
                  <div className="flex flex-col gap-3">
                    {activeProgram.syllabus.map((week, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-3 bg-bg-secondary rounded-xl border border-border">
                        <span className="w-6 h-6 rounded-lg bg-accent-primary text-white flex items-center justify-center font-mono text-xs font-semibold shrink-0">
                          0{idx + 1}
                        </span>
                        <p className="text-xs text-text-secondary font-medium leading-relaxed mt-0.5">
                          {week}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Board / standard information */}
                <div className="border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-primary-tint flex items-center justify-center text-accent-primary text-xs font-bold font-mono">
                      AP
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-text-primary">Curricular Lead: {activeProgram.instructor}</h5>
                      <p className="text-[10px] text-text-tertiary">Governing Peer-Review Standards Board, AICAIML</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Footer */}
              <div className="p-4 border-t border-border bg-bg-secondary flex gap-3">
                <button
                  onClick={() => setDetailProgramId(null)}
                  className="w-1/2 py-2.5 text-xs font-semibold border border-border bg-bg-primary rounded-xl text-center hover:bg-bg-tertiary transition-colors cursor-pointer"
                >
                  Close Syllabus
                </button>
                <button
                  onClick={() => {
                    setDetailProgramId(null);
                    // Open contact form or mock apply
                    alert(`Application submitted for ${activeProgram.title}. We will contact you soon.`);
                  }}
                  className="w-1/2 py-2.5 text-xs font-semibold bg-accent-primary text-white rounded-xl text-center hover:bg-accent-primary-hover transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Apply For Course
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
