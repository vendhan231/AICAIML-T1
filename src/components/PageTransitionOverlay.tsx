/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ActivePage } from '../types';

interface PageTransitionOverlayProps {
  stage: 'idle' | 'covering' | 'uncovering';
  direction: 'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom';
}

export default function PageTransitionOverlay({ stage, direction }: PageTransitionOverlayProps) {
  if (stage === 'idle') return null;

  const isCovering = stage === 'covering';

  const getTopClip = (progress: number, isExit: boolean) => {
    if (isExit) progress = 1 - progress;
    switch (direction) {
      case 'left-to-right':
        return `polygon(0 0, ${progress * 100}% 0, ${progress * 100}% 50%, 0 50%)`;
      case 'right-to-left':
        return `polygon(${100 - progress * 100}% 0, 100% 0, 100% 50%, ${100 - progress * 100}% 50%)`;
      case 'bottom-to-top':
        return `polygon(0 0, 100% 0, 100% ${progress * 50}%, 0 ${progress * 50}%)`;
      case 'top-to-bottom':
        return `polygon(0 ${100 - progress * 50}%, 100% ${100 - progress * 50}%, 100% 100%, 0 100%)`;
      default:
        return `polygon(0 0, ${progress * 100}% 0, ${progress * 100}% 50%, 0 50%)`;
    }
  };

  const getBottomClip = (progress: number, isExit: boolean) => {
    if (isExit) progress = 1 - progress;
    switch (direction) {
      case 'left-to-right':
        return `polygon(0 50%, ${progress * 100}% 50%, ${progress * 100}% 100%, 0 100%)`;
      case 'right-to-left':
        return `polygon(${100 - progress * 100}% 50%, 100% 50%, 100% 100%, ${100 - progress * 100}% 100%)`;
      case 'bottom-to-top':
        return `polygon(0 ${progress * 50}%, 100% ${progress * 50}%, 100% 100%, 0 100%)`;
      case 'top-to-bottom':
        return `polygon(0 0, 100% 0, 100% ${100 - progress * 50}%, 0 ${100 - progress * 50}%)`;
      default:
        return `polygon(0 50%, ${progress * 100}% 50%, ${progress * 100}% 100%, 0 100%)`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Thin progress accent bar */}
      {isCovering && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Top half wipe */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-white origin-top"
        initial={{ clipPath: getTopClip(0, false) }}
        animate={{ clipPath: getTopClip(1, !isCovering) }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Bottom half wipe */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-white origin-bottom"
        initial={{ clipPath: getBottomClip(0, false) }}
        animate={{ clipPath: getBottomClip(1, !isCovering) }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Accent edge glow */}
      {isCovering && (
        <motion.div
          className="absolute inset-x-0 top-1/2 h-[2px] bg-accent-primary/60 blur-sm z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}
