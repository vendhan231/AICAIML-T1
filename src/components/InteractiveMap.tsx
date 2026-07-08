/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter } from '../types';
import { chaptersData } from '../data';
import { MapPin, Search, Users, Calendar, Shield, ArrowRight } from 'lucide-react';

export default function InteractiveMap() {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch-1');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedChapter = useMemo(() => {
    return chaptersData.find((c) => c.id === selectedChapterId) || chaptersData[0];
  }, [selectedChapterId]);

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chaptersData;
    return chaptersData.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Search and List Side - 5 cols */}
      <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-display font-semibold text-text-primary">
            AICAIML Chapter Network
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            Locate a localized professional branch or student chapter to join debugging circles, peer reviews, and local roundtables.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
          <input
            type="text"
            placeholder="Search city, state or chapter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-bg-secondary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint transition-all"
          />
        </div>

        {/* Chapters List */}
        <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-2 scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredChapters.map((chapter) => {
              const isSelected = chapter.id === selectedChapterId;
              return (
                <motion.button
                  key={chapter.id}
                  layoutId={`chapter-item-${chapter.id}`}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start justify-between transition-all relative ${
                    isSelected
                      ? 'border-accent-primary bg-accent-primary-tint/40 shadow-sm'
                      : 'border-border bg-bg-primary hover:border-accent-primary hover:bg-bg-secondary'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-accent-primary text-white'
                          : 'bg-bg-tertiary text-text-secondary'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary text-sm">
                        {chapter.name}
                      </h5>
                      <p className="text-xs text-text-tertiary">
                        {chapter.city}, {chapter.state}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-mono font-medium text-accent-secondary bg-accent-secondary-tint px-2.5 py-1 rounded-full">
                      {chapter.members} Members
                    </span>
                  </div>
                </motion.button>
              );
            })}
            {filteredChapters.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 border border-dashed border-border rounded-xl text-text-tertiary text-sm"
              >
                No chapters found matching your search.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Map Graphic and Statistics Side - 7 cols */}
      <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
        <div className="border border-border rounded-2xl p-6 bg-bg-secondary relative overflow-hidden min-h-[420px] flex flex-col md:flex-row gap-6 items-center">
          
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          {/* Interactive Vector Map Segment */}
          <div className="relative w-full md:w-1/2 aspect-square flex items-center justify-center">
            {/* Minimalist vector outline of India representing chapters spatial density */}
            <svg
              viewBox="0 0 200 240"
              className="w-[90%] h-full opacity-15 stroke-text-primary fill-none stroke-2 stroke-dasharray-[2,2]"
            >
              {/* Simplified India bounding map path for aesthetic positioning */}
              <path
                d="M 90 20 L 105 25 L 115 15 L 120 28 L 135 32 L 142 42 L 138 52 L 125 58 L 132 70 L 148 76 L 158 92 L 178 98 L 182 110 L 175 118 L 165 112 L 152 118 L 148 135 L 140 138 L 128 152 L 125 170 L 122 188 L 112 205 L 105 220 L 98 228 L 94 220 L 96 200 L 92 185 L 85 172 L 78 155 L 74 142 L 68 135 L 54 132 L 40 128 L 32 120 L 22 115 L 28 105 L 42 102 L 54 94 L 62 82 L 75 74 L 84 55 L 80 40 L 86 28 Z"
              />
            </svg>

            {/* Glowing nodes overlay representing chapter locations */}
            {chaptersData.map((chapter) => {
              const isSelected = chapter.id === selectedChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className="absolute cursor-pointer group focus:outline-none"
                  style={{
                    top: `${chapter.lat}%`,
                    left: `${chapter.lng}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {/* Ring Pulse */}
                    <motion.span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-accent-secondary' : 'bg-accent-primary'
                      }`}
                      style={{ animationDuration: isSelected ? '1.5s' : '3s' }}
                    />
                    {/* Anchor Solid Dot */}
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white transition-all duration-300 ${
                        isSelected
                          ? 'bg-accent-secondary scale-125 shadow-md shadow-accent-secondary/50'
                          : 'bg-accent-primary scale-100 group-hover:scale-110'
                      }`}
                    />
                  </span>
                  {/* Small tooltip label */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-6 bg-text-primary text-[10px] text-white px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                    {chapter.city}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Chapter Details Panel - right-aligned inside card */}
          <div className="w-full md:w-1/2 z-10 flex flex-col justify-between h-full bg-bg-primary border border-border p-5 rounded-xl shadow-sm min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4 h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-accent-primary bg-accent-primary-tint px-2.5 py-0.5 rounded-full">
                      {selectedChapter.state}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-text-primary">
                    {selectedChapter.name}
                  </h4>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-xs text-text-secondary">
                    <Users className="w-4 h-4 text-accent-primary" />
                    <span>
                      <strong className="text-text-primary font-semibold">{selectedChapter.members}</strong> active AI/ML members
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-text-secondary">
                    <Calendar className="w-4 h-4 text-accent-secondary" />
                    <span>
                      <strong className="text-text-primary font-semibold">{selectedChapter.eventsCount}</strong> local workshops & meetups
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-text-secondary mt-1 border-t border-border pt-2.5">
                    <Shield className="w-4 h-4 text-accent-primary mt-0.5" />
                    <div>
                      <span className="text-[10px] text-text-tertiary block">CHAPTER DIRECTOR</span>
                      <span className="text-text-primary font-medium">{selectedChapter.lead}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors group">
                    Connect with Chapter
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
