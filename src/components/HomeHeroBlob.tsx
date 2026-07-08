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

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full z-10 rounded-3xl overflow-hidden shadow-2xl border border-border"
      >
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
          alt="AI Machine Learning Research"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}
