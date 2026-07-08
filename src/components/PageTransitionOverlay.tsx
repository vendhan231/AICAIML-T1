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

  // Compute transform origins and initial/animate scales based on spatial directions
  let origin = 'left';
  let initialScaleX = 0;
  let initialScaleY = 1;
  let animateScaleX = 1;
  let animateScaleY = 1;
  let exitScaleX = 0;
  let exitScaleY = 1;
  let exitOrigin = 'right';

  if (direction === 'left-to-right') {
    origin = 'left';
    initialScaleX = 0;
    initialScaleY = 1;
    animateScaleX = 1;
    animateScaleY = 1;
    exitScaleX = 0;
    exitScaleY = 1;
    exitOrigin = 'right';
  } else if (direction === 'right-to-left') {
    origin = 'right';
    initialScaleX = 0;
    initialScaleY = 1;
    animateScaleX = 1;
    animateScaleY = 1;
    exitScaleX = 0;
    exitScaleY = 1;
    exitOrigin = 'left';
  } else if (direction === 'bottom-to-top') {
    origin = 'bottom';
    initialScaleX = 1;
    initialScaleY = 0;
    animateScaleX = 1;
    animateScaleY = 1;
    exitScaleX = 1;
    exitScaleY = 0;
    exitOrigin = 'top';
  } else if (direction === 'top-to-bottom') {
    origin = 'top';
    initialScaleX = 1;
    initialScaleY = 0;
    animateScaleX = 1;
    animateScaleY = 1;
    exitScaleX = 1;
    exitScaleY = 0;
    exitOrigin = 'bottom';
  }

  const isCovering = stage === 'covering';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* 2px teal progress reassurance line running along the very top of the viewport */}
      {isCovering && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-accent-secondary z-50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      )}

      {/* Main Solid Curtain Panel */}
      <motion.div
        className="w-full h-full bg-accent-primary"
        style={{
          transformOrigin: isCovering ? origin : exitOrigin,
          scaleX: direction.includes('horizontal') || direction.includes('left') || direction.includes('right') ? undefined : 1,
          scaleY: direction.includes('vertical') || direction.includes('top') || direction.includes('bottom') ? undefined : 1,
        }}
        initial={{
          scaleX: direction.includes('left') || direction.includes('right') ? initialScaleX : 1,
          scaleY: direction.includes('top') || direction.includes('bottom') ? initialScaleY : 1,
        }}
        animate={{
          scaleX: direction.includes('left') || direction.includes('right') ? (isCovering ? 1 : 0) : 1,
          scaleY: direction.includes('top') || direction.includes('bottom') ? (isCovering ? 1 : 0) : 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1], // premium smooth-out curve
        }}
      />
    </div>
  );
}
