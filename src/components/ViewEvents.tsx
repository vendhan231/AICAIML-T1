/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EventItem } from '../types';
import { eventsData } from '../data';
import { Calendar, MapPin, Users, ToggleLeft, ArrowRight, Video, CheckCircle, Clock } from 'lucide-react';

export default function ViewEvents() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return eventsData.filter((e) => e.type === activeTab);
  }, [activeTab]);

  const handleRegister = (eventId: string) => {
    setRegisteredEventId(eventId);
    setTimeout(() => {
      setRegisteredEventId(null);
    }, 3000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
      
      {/* Intro Header */}
      <div className="flex flex-col gap-3 text-left max-w-xl mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
          AICAIML EVENTS SCHEDULE
        </span>
        <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
          Where Machine Learning Practitioners Gather
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Participate in physical debug sandbox circles, annual international symposiums, or peer-led webinars on localized Edge AI and Large Language Models.
        </p>
      </div>

      {/* Sliding Active Pill Toggle: Upcoming / Past */}
      <div className="flex justify-start mb-12">
        <div className="relative flex p-1 bg-bg-secondary rounded-full border border-border">
          <button
            onClick={() => setActiveTab('upcoming')}
            className="relative px-6 py-2.5 text-xs font-semibold rounded-full focus:outline-none cursor-pointer"
          >
            {activeTab === 'upcoming' && (
              <motion.div
                layoutId="active-events-tab"
                className="absolute inset-0 bg-accent-primary-tint rounded-full -z-10"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className={activeTab === 'upcoming' ? 'text-accent-primary' : 'text-text-secondary'}>
              Upcoming Events
            </span>
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className="relative px-6 py-2.5 text-xs font-semibold rounded-full focus:outline-none cursor-pointer"
          >
            {activeTab === 'past' && (
              <motion.div
                layoutId="active-events-tab"
                className="absolute inset-0 bg-accent-primary-tint rounded-full -z-10"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className={activeTab === 'past' ? 'text-accent-primary' : 'text-text-secondary'}>
              Past Archives
            </span>
          </button>
        </div>
      </div>

      {/* Events List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, idx) => {
            const isRegistered = registeredEventId === event.id;
            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  delay: idx * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="perspective-card group relative border border-border rounded-2xl bg-bg-secondary overflow-hidden hover:border-accent-primary transition-colors flex flex-col justify-between h-full"
              >
                {/* Subtle rotateY 4deg max tilt hover effect on inner container */}
                <div className="relative flex-1 flex flex-col justify-between transition-all duration-300 ease-out group-hover:[transform:rotateY(3deg)_rotateX(0.5deg)]">
                  
                  {/* Top Image & Category Tag */}
                  <div className="h-44 relative overflow-hidden shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent-secondary bg-accent-secondary-tint/90 backdrop-blur px-2.5 py-1 rounded-full border border-accent-secondary/10">
                        {event.category}
                      </span>
                      {event.type === 'upcoming' && (
                        <span className="w-2.5 h-2.5 bg-accent-secondary rounded-full animate-accent-pulse absolute -right-1 -top-1 border border-white" />
                      )}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-text-tertiary uppercase mb-1">
                        <Clock className="w-3.5 h-3.5 text-accent-primary" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed mt-2.5 line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2.5 border-t border-border pt-4">
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <MapPin className="w-4 h-4 text-accent-primary shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <Users className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-text-tertiary block font-mono">PANEL DIRECTOR</span>
                          <span><strong className="text-text-primary font-semibold">{event.speaker}</strong> ({event.speakerTitle})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Action Bar */}
                <div className="p-6 border-t border-border bg-bg-primary shrink-0 flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-primary">
                    {event.type === 'upcoming' ? 'Seats Available' : 'Lecture Archived'}
                  </span>

                  {event.type === 'upcoming' ? (
                    <button
                      onClick={() => handleRegister(event.id)}
                      disabled={isRegistered}
                      className={`px-4.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none ${
                        isRegistered
                          ? 'bg-accent-secondary text-white border-accent-secondary'
                          : 'bg-accent-primary text-white hover:bg-accent-primary-hover border border-accent-primary'
                      }`}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          Registered
                        </>
                      ) : (
                        <>
                          Register Slot
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  ) : (
                    <button className="px-4 py-2 border border-border hover:border-accent-secondary hover:text-accent-secondary text-xs font-semibold text-text-secondary rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer">
                      <Video className="w-3.5 h-3.5" />
                      Play Recording
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </div>
  );
}
