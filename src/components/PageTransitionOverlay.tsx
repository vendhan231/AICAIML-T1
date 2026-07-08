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

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Thin progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent-primary origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isCovering ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Simple directional wipe */}
      <motion.div
        className="w-full h-full bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isCovering ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: isCovering
            ? direction === 'left-to-right'
              ? 'left'
              : direction === 'right-to-left'
                ? 'right'
                : direction === 'bottom-to-top'
                  ? 'bottom'
                  : 'top'
            : direction === 'left-to-right'
              ? 'right'
              : direction === 'right-to-left'
                ? 'left'
                : direction === 'bottom-to-top'
                  ? 'top'
                  : 'bottom',
        }}
      />
    </div>
  );
}
