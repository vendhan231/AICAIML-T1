/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResourceArticle } from '../types';
import { articlesData } from '../data';
import { BookOpen, Calendar, Clock, ArrowLeft, Twitter, Linkedin, Facebook, Link, Copy, CheckCircle2 } from 'lucide-react';

interface ViewResourcesProps {
  selectedArticle: ResourceArticle | null;
  onClearSelectedArticle: () => void;
}

export default function ViewResources({ selectedArticle, onClearSelectedArticle }: ViewResourcesProps) {
  const [detailArticleId, setDetailArticleId] = useState<string | null>(selectedArticle?.id || null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync article selection from props
  useMemo(() => {
    if (selectedArticle) {
      setDetailArticleId(selectedArticle.id);
      onClearSelectedArticle(); // reset in parent so user can navigate / open again
    }
  }, [selectedArticle]);

  const activeArticle = useMemo(() => {
    return articlesData.find((a) => a.id === detailArticleId) || null;
  }, [detailArticleId]);

  const handleCopyLink = () => {
    setCopiedLink(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setCopiedLink(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
      <AnimatePresence mode="wait">
        {!activeArticle ? (
          
          /* VIEW 1: Resource Catalog Grid */
          <motion.div
            key="catalog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-12 text-left"
          >
            {/* Header Block */}
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary">
                AICAIML KNOWLEDGE VAULT
              </span>
              <h1 className="text-4xl font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
                Scientific Publications & Technical Deep-Dives
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                Explore our academic reviews, benchmark logs, and technical notes published by the board.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((art, idx) => (
                <button
                  key={art.id}
                  onClick={() => setDetailArticleId(art.id)}
                  className="group glass-card overflow-hidden flex flex-col text-left focus:outline-none h-full cursor-pointer"
                >
                  {/* Media banner */}
                  <div className="h-48 relative overflow-hidden shrink-0 w-full">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <span className="absolute top-4 left-4 text-[9px] font-mono font-bold uppercase tracking-wider text-accent-secondary bg-accent-secondary-tint/90 backdrop-blur px-2.5 py-1 rounded-full border border-accent-secondary/10">
                      {art.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-text-tertiary uppercase">
                        <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                        <span>{art.date} • {art.readTime}</span>
                      </div>
                      <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                        {art.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-border pt-4 text-xs">
                      <div className="w-7 h-7 rounded-full bg-accent-primary-tint text-accent-primary flex items-center justify-center font-mono font-bold">
                        {art.author.charAt(0)}
                      </div>
                      <div>
                        <span className="font-semibold text-text-primary block">{art.author}</span>
                        <span className="text-[10px] text-text-tertiary">{art.authorTitle}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          
          /* VIEW 2: Detailed Article Reading Screen */
          <motion.div
            key="article"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-left relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Left Back and Share Sidebar - 3 cols */}
            <div className="lg:col-span-3 lg:sticky lg:top-28 flex flex-col gap-8">
              <button
                onClick={() => setDetailArticleId(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary hover:text-accent-primary-hover transition-colors cursor-pointer self-start group py-1"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to vault
              </button>

              {/* Desktop Sticky Share Rail */}
              <div className="hidden lg:flex flex-col gap-4 border-l border-border pl-4">
                <span className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest block mb-2">
                  SHARE RESOURCE
                </span>
                <button className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors cursor-pointer text-left focus:outline-none">
                  <Twitter className="w-4 h-4" />
                  Twitter / X
                </button>
                <button className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors cursor-pointer text-left focus:outline-none">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
                <button className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors cursor-pointer text-left focus:outline-none">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-accent-secondary" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Link className="w-4 h-4" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Center Reading Column - 9 cols, max-width 720px inside */}
            <article className="lg:col-span-9 max-w-[720px] mx-auto flex flex-col gap-6">
              
              {/* Header block info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-secondary bg-accent-secondary-tint px-2.5 py-0.5 rounded-full">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-text-tertiary font-medium">
                    {activeArticle.date} • {activeArticle.readTime}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-text-primary leading-[1.15]">
                  {activeArticle.title}
                </h1>
              </div>

              {/* Author bio strip */}
              <div className="flex items-center gap-3 border-y border-border py-4 my-2 text-sm">
                <div className="w-10 h-10 rounded-full bg-accent-primary-tint text-accent-primary flex items-center justify-center font-mono font-bold shrink-0">
                  {activeArticle.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-text-primary block">{activeArticle.author}</span>
                  <span className="text-[11px] text-text-tertiary">{activeArticle.authorTitle} • Governing Review Board</span>
                </div>
              </div>

              {/* Article Hero Media */}
              <div className="rounded-2xl overflow-hidden aspect-video border border-border relative my-2">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Rich Body Content - generous 1.7 line height */}
              <div className="text-base text-text-secondary leading-[1.7] flex flex-col gap-6 pt-4 whitespace-pre-line font-sans">
                {activeArticle.content.split('\n\n').map((para, idx) => {
                  // Custom rendering for section blocks
                  if (para.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-lg font-display font-bold text-text-primary mt-6 mb-2">
                        {para.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (para.startsWith('1. ') || para.startsWith('* ')) {
                    return (
                      <div key={idx} className="pl-4 border-l-2 border-accent-primary flex flex-col gap-2 bg-bg-secondary p-4 rounded-r-xl">
                        {para.split('\n').map((li, lIdx) => (
                          <p key={lIdx} className="text-xs leading-relaxed text-text-secondary font-medium">
                            {li}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="leading-[1.7]">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Tags footer */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border mt-10">
                {activeArticle.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-medium text-text-tertiary bg-bg-secondary border border-border px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
