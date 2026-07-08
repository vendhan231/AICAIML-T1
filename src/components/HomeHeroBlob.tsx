/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function HomeHeroBlob() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Soft Background Glowing Blobs */}
      <motion.div
        className="absolute w-[80%] h-[80%] rounded-full opacity-30 blur-[60px]"
        style={{
          background: 'radial-gradient(circle, #7E2E39 0%, #A54F5A 40%, #63232B 100%)',
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '50% 50% 30% 70% / 50% 60% 30% 70%', '60% 40% 50% 50% / 40% 30% 70% 60%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[60%] h-[60%] rounded-full opacity-25 blur-[40px]"
        style={{
          background: 'radial-gradient(circle, #A54F5A 0%, #FCF7F8 60%, #7E2E39 100%)',
        }}
        animate={{
          scale: [1.1, 0.9, 1.05, 1.1],
          rotate: [360, 240, 120, 0],
          borderRadius: ['50% 50% 30% 70% / 50% 60% 30% 70%', '40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 50% 50% / 40% 30% 70% 60%', '50% 50% 30% 70% / 50% 60% 30% 70%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Vector Line Network Map */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full z-10 filter drop-shadow-[0_8px_24px_rgba(126,46,57,0.12)]"
      >
        {/* Connection Paths */}
        <motion.path
          d="M 100 100 L 200 120 L 300 100 L 280 240 L 200 280 L 120 240 Z"
          stroke="url(#grid-gradient-1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 200 120 L 200 280"
          stroke="url(#grid-gradient-2)"
          strokeWidth="1"
        />
        <motion.path
          d="M 100 100 L 280 240"
          stroke="url(#grid-gradient-2)"
          strokeWidth="1"
        />
        <motion.path
          d="M 300 100 L 120 240"
          stroke="url(#grid-gradient-2)"
          strokeWidth="1"
        />

        {/* Dynamic Nodes with hover states & pulsing glows */}
        {/* Node 1 */}
        <g>
          <circle cx="100" cy="100" r="14" fill="#FCF7F8" />
          <motion.circle
            cx="100"
            cy="100"
            r="18"
            stroke="#7E2E39"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="100" cy="100" r="6" fill="#7E2E39" />
        </g>

        {/* Node 2 - Center */}
        <g>
          <circle cx="200" cy="120" r="16" fill="#FCF7F8" />
          <motion.circle
            cx="200"
            cy="120"
            r="22"
            stroke="#A54F5A"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <circle cx="200" cy="120" r="8" fill="#A54F5A" />
        </g>

        {/* Node 3 */}
        <g>
          <circle cx="300" cy="100" r="14" fill="#FCF7F8" />
          <motion.circle
            cx="300"
            cy="100"
            r="18"
            stroke="#7E2E39"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <circle cx="300" cy="100" r="6" fill="#7E2E39" />
        </g>

        {/* Node 4 */}
        <g>
          <circle cx="280" cy="240" r="15" fill="#FCF7F8" />
          <motion.circle
            cx="280"
            cy="240"
            r="20"
            stroke="#A54F5A"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.9, 0.1, 0.9] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          <circle cx="280" cy="240" r="6" fill="#A54F5A" />
        </g>

        {/* Node 5 - Bottom Center */}
        <g>
          <circle cx="200" cy="280" r="18" fill="#FCF7F8" />
          <motion.circle
            cx="200"
            cy="280"
            r="26"
            stroke="#7E2E39"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <circle cx="200" cy="280" r="8" fill="#7E2E39" />
        </g>

        {/* Node 6 */}
        <g>
          <circle cx="120" cy="240" r="14" fill="#FCF7F8" />
          <motion.circle
            cx="120"
            cy="240"
            r="18"
            stroke="#7E2E39"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
          <circle cx="120" cy="240" r="6" fill="#7E2E39" />
        </g>

        {/* Orbit Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="130"
          stroke="url(#grid-gradient-1)"
          strokeWidth="0.75"
          strokeDasharray="8 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Tiny orbiting satellites */}
        <motion.circle
          cx="200"
          cy="70"
          r="4"
          fill="#A54F5A"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
        <motion.circle
          cx="200"
          cy="330"
          r="3"
          fill="#7E2E39"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Definitions */}
        <defs>
          <linearGradient id="grid-gradient-1" x1="0" y1="0" x2="400" y2="400">
            <stop offset="0%" stopColor="#7E2E39" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A54F5A" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="grid-gradient-2" x1="200" y1="100" x2="200" y2="300">
            <stop offset="0%" stopColor="#7E2E39" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#A54F5A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7E2E39" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
