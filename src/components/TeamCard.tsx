/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TeamMember } from '../types';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  key?: React.Key;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      layoutId={`team-card-${member.id}`}
      className="group relative bg-bg-secondary rounded-[18px] overflow-hidden border border-border h-[380px] flex flex-col justify-end"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Image: starts grayscale, transitions to color */}
      <img
        src={member.image}
        alt={member.name}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 group-hover:scale-105"
      />

      {/* Ambient Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Card Content & Hover Drawer Reveal */}
      <div className="relative p-6 z-10 w-full flex flex-col gap-2 text-white">
        
        {/* Name and Role (always visible) */}
        <div>
          <span className="text-[10px] font-mono font-semibold tracking-wider text-accent-secondary uppercase block mb-1">
            {member.role}
          </span>
          <h4 className="text-xl font-display font-bold leading-tight">
            {member.name}
          </h4>
        </div>

        {/* Bio (Slides up on hover) */}
        <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between">
          <p className="text-xs text-border-strong line-clamp-3 leading-relaxed">
            {member.bio}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent-secondary hover:text-white flex items-center gap-1 text-[11px] font-semibold mt-1 self-start transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn Profile
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
