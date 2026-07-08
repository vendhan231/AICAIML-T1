/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, Program, EventItem } from '../types';
import { programsData, eventsData, testimonialsData } from '../data';
import StatCounter from './StatCounter';
import { ArrowRight, Star, Calendar, Users, GraduationCap, ChevronLeft, ChevronRight, Play, BookOpen, Quote, Shield, ShieldCheck, FileText } from 'lucide-react';

interface ViewHomeProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProgram: (program: Program) => void;
}

export default function ViewHome({ onNavigate, onSelectProgram }: ViewHomeProps) {
  // Testimonial state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto testimonial loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trust partners list
  const partners = [
    { name: 'CognitiveFlow', style: 'font-semibold tracking-wider text-lg' },
    { name: 'Indian Institute of Science', style: 'font-bold tracking-tight text-[15px]' },
    { name: 'AeroCore Systems', style: 'font-display font-medium text-lg' },
    { name: 'Jio Research', style: 'italic font-bold text-lg' },
    { name: 'AutoML Labs', style: 'font-mono text-[14px] font-semibold' },
    { name: 'Neural Core', style: 'tracking-widest font-semibold uppercase text-sm' }
  ];

  const upcomingEvents = eventsData.filter(e => e.type === 'upcoming').slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION - full view on dot grid */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
          alt="AI and Machine Learning visualization"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[60%] h-[70%] object-cover rounded-l-3xl shadow-2xl opacity-90 pointer-events-none hidden lg:block"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary-tint text-accent-primary font-mono text-xs font-semibold uppercase tracking-wider self-start"
            >
              <span className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
              THE NEW BENCHMARK IN AI/ML EXCELLENCE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-text-primary leading-[1.05]"
            >
              Where AI Rigor <br />
              Meets Applied <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-primary to-accent-secondary">
                Machine Learning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Diverging from dated, notice-board repositories. AICAIML delivers structured professional certifications, peer-led debug workshops, and active research sandboxes designed for 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('programs')}
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-accent-primary text-white hover:bg-accent-primary-hover active:scale-[0.97] transition-all btn-glow flex items-center gap-2 group cursor-pointer"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-transparent text-accent-primary border border-accent-primary hover:bg-accent-primary-tint active:scale-[0.97] transition-all flex items-center gap-2 cursor-pointer"
              >
                Meet Leadership
              </button>
            </motion.div>
        </div>
      </section>

      {/* 2. TRUST PARTNERS MARQUEE */}
      <section className="border-y border-border py-8 bg-bg-secondary overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="text-xs font-mono font-bold tracking-widest text-text-tertiary uppercase shrink-0">
            AFFILIATED INSTITUTIONS & PARTNERS
          </div>
          
          <div className="relative w-full overflow-hidden flex items-center md:max-w-2xl">
            {/* Soft gradient edges to marquee */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex gap-12 py-1 items-center">
              {/* First loop */}
              {partners.map((partner, idx) => (
                <div
                  key={`p1-${idx}`}
                  className={`${partner.style} text-text-tertiary hover:text-accent-primary transition-colors cursor-default whitespace-nowrap`}
                >
                  {partner.name}
                </div>
              ))}
              {/* Duplicate loop for seamless infinite marquee scroll */}
              {partners.map((partner, idx) => (
                <div
                  key={`p2-${idx}`}
                  className={`${partner.style} text-text-tertiary hover:text-accent-primary transition-colors cursor-default whitespace-nowrap`}
                >
                  {partner.name}
                </div>
              ))}
                   </div>
               </div>

         </div>
       </section>

      {/* 5. STATS STRIP - dark panel, only dark section */}
      <section className="bg-text-primary text-white py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          
          <div className="flex flex-col gap-1 text-center">
            <span className="text-accent-secondary text-3xl md:text-4xl font-display font-semibold flex items-center justify-center">
              <StatCounter target={12400} suffix="+" />
            </span>
            <span className="text-text-tertiary/90 text-xs uppercase tracking-wider font-semibold">
              Practitioners Enrolled
            </span>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <span className="text-accent-secondary text-3xl md:text-4xl font-display font-semibold flex items-center justify-center">
              <StatCounter target={15} suffix="+" />
            </span>
            <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">
              Specialist AI Labs
            </span>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <span className="text-accent-secondary text-3xl md:text-4xl font-display font-semibold flex items-center justify-center">
              <StatCounter target={48} />
            </span>
            <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">
              Active Regional Chapters
            </span>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <span className="text-accent-secondary text-3xl md:text-4xl font-display font-semibold flex items-center justify-center">
              <StatCounter target={98} suffix=".4%" />
            </span>
            <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">
              Placement Audit Rating
            </span>
          </div>

        </div>
      </section>

      {/* HIGHLIGHTED MEMBERSHIP PLANS SECTION */}
      <section className="py-24 bg-bg-secondary border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-3 text-left max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
                AICAIML MEMBER TRACKS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-text-primary">
                Choose Your Membership Track
              </h2>
              <p className="text-sm text-text-tertiary">
                Connect with verified academic, individual, and research-grade computing licenses tailored for developers and institutions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('community')}
              className="px-5 py-2.5 text-xs font-semibold border border-border bg-bg-primary hover:border-accent-primary hover:text-accent-primary rounded-full flex items-center gap-1.5 transition-all group cursor-pointer focus:outline-none"
            >
              Go to Community Registry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1: Student Membership */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-accent-primary text-left bg-bg-primary"
            >
              <div className="absolute top-3 right-3 bg-accent-primary-tint text-accent-primary text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                Academia
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent-primary-tint text-accent-primary rounded-xl">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base">Student Associate</h4>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-semibold font-mono">Verified .edu</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-display font-bold text-text-primary">$0</span>
                  <span className="text-xs text-text-tertiary"> / forever (Free)</span>
                </div>
                <ul className="flex flex-col gap-3.5 text-xs text-text-secondary mb-8">
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Access to Shared ML compute nodes (60h/mo)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Interactive debug boards & forum access</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>10% discount on official Core Certifications</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Invitations to student branch local meetups</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('community')}
                className="w-full py-3 px-4 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-all cursor-pointer focus:outline-none text-center active:scale-[0.98]"
              >
                Register Verified Student
              </button>
            </motion.div>

            {/* Tier 2: Professional Researcher */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-accent-primary text-left bg-bg-primary shadow-md ring-2 ring-accent-primary/20"
            >
              <div className="absolute top-3 right-3 bg-accent-primary text-white text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent-primary-tint text-accent-primary rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base">Professional Researcher</h4>
                    <span className="text-[10px] text-accent-primary uppercase tracking-wider font-bold font-mono">Individual Core</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-display font-bold text-text-primary">$49</span>
                  <span className="text-xs text-text-tertiary"> / annually</span>
                </div>
                <ul className="flex flex-col gap-3.5 text-xs text-text-secondary mb-8">
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Dedicated GPU accelerator node (120h/mo)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Bi-monthly physical roundtable invitation</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Enterprise debug clinic consulting allocation</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Standard placement board registry & portfolio</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('community')}
                className="w-full py-3 px-4 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-all cursor-pointer focus:outline-none text-center active:scale-[0.98] shadow-sm"
              >
                Apply Professional License
              </button>
            </motion.div>

            {/* Tier 3: Institutional Campus */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between h-full relative overflow-hidden border-t-4 border-t-accent-secondary text-left bg-bg-primary"
            >
              <div className="absolute top-3 right-3 bg-accent-secondary-tint text-text-secondary text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-border">
                Departmental
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-bg-tertiary text-text-primary rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base">Institutional Campus</h4>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-semibold font-mono">Grant Supported</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-display font-bold text-text-primary">Fully Funded</span>
                  <span className="text-xs text-text-tertiary"> / grant authorized</span>
                </div>
                <ul className="flex flex-col gap-3.5 text-xs text-text-secondary mb-8">
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                    <span>Official department accreditation license</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                    <span>AICAIML-approved curricula integration toolkit</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                    <span>Unlimited local student associate accounts</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <ShieldCheck className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                    <span>Annual hack-symposium hosting allowance</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('community')}
                className="w-full py-3 px-4 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold transition-all cursor-pointer focus:outline-none text-center active:scale-[0.98]"
              >
                Propose Institutional Charter
              </button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. UPCOMING EVENTS & TIMELINE */}
      <section className="py-24 bg-bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Intro Text Block - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
              EVENTS SCHEDULE
            </span>
            <h2 className="text-3xl font-display font-semibold tracking-tight text-text-primary leading-tight">
              A Active Regional Timeline
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Join live model-debugging sandbox sessions, annual research symposiums, and localized chapter clinics.
            </p>
            <button
              onClick={() => onNavigate('events')}
              className="px-5 py-3 rounded-full text-xs font-semibold bg-bg-secondary text-text-primary border border-border hover:border-accent-primary hover:text-accent-primary transition-all flex items-center gap-1.5 self-start mt-2 cursor-pointer focus:outline-none"
            >
              See All Upcoming & Past Events
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Timeline Listings - 8 cols */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative pl-6 border-l border-border text-left">
            {upcomingEvents.map((event, idx) => (
              <div key={event.id} className="relative group pb-4 border-b border-border last:border-0 last:pb-0">
                {/* Bullet node connector */}
                <div className="absolute -left-[31px] top-1.5 flex items-center justify-center">
                  {idx === 0 ? (
                    <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-secondary" />
                    </span>
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-accent-primary border-2 border-bg-primary" />
                  )}
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-accent-primary bg-accent-primary-tint px-2.5 py-0.5 rounded-full">
                        {event.category}
                      </span>
                      <span className="text-xs text-text-tertiary font-medium">
                        {event.date} • {event.time}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                      {event.title}
                    </h4>
                    
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="text-[11px] text-text-tertiary flex items-center gap-1.5 mt-1">
                      <Users className="w-3.5 h-3.5 text-accent-secondary" />
                      <span>Led by: <strong className="text-text-primary font-semibold">{event.speaker}</strong> ({event.speakerTitle})</span>
                    </div>
                   </div>
                 </div>
             ))}
           </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-bg-secondary border-t border-border relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-8 relative z-10">
          <Quote className="w-10 h-10 text-accent-primary/20" />

          {/* Testimonial container with elegant crossfades */}
          <div className="min-h-[220px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <p className="text-lg md:text-xl font-medium text-text-primary leading-relaxed italic max-w-3xl">
                  "{testimonialsData[activeTestimonialIdx].quote}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="text-left">
                    <h5 className="font-bold text-text-primary text-sm leading-tight">
                      {testimonialsData[activeTestimonialIdx].author}
                    </h5>
                    <p className="text-xs text-text-tertiary leading-normal">
                      {testimonialsData[activeTestimonialIdx].role}, {testimonialsData[activeTestimonialIdx].organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination controls */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => {
                setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
              }}
              className="w-9 h-9 rounded-full border border-border bg-bg-primary flex items-center justify-center text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors cursor-pointer focus:outline-none"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer focus:outline-none ${
                    idx === activeTestimonialIdx ? 'w-6 bg-accent-primary' : 'w-2 bg-border-strong'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
              }}
              className="w-9 h-9 rounded-full border border-border bg-bg-primary flex items-center justify-center text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors cursor-pointer focus:outline-none"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. CTA GRADIENT BANNER */}
      <section className="py-20 bg-bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-14 text-center text-white bg-gradient-to-br from-accent-primary via-accent-primary to-accent-secondary flex flex-col items-center gap-6 justify-center shadow-xl">

            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10">
              JOIN THE MODERN ADVANCEMENT
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-bold max-w-2xl leading-tight tracking-tight">
              Empower Your Career With Verified AI/ML Competence
            </h2>

            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
              Begin your application for certification panels or connect with a local Indian corridor chapter today.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full text-sm font-bold bg-bg-primary text-accent-primary hover:bg-bg-secondary active:scale-[0.97] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
             </button>
                    </div>
                </div>
        </section>
    </div>
  );
}
