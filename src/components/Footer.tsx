/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ActivePage } from '../types';
import { Send, Twitter, Linkedin, Github, Mail, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border mt-auto pt-16 pb-8 z-10 relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
        
        {/* Column 1: Brand & Tagline - 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 focus:outline-none text-left self-start group cursor-pointer"
          >
            <span className="font-display font-bold text-2xl tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
              AICAIML
            </span>
            <span className="h-2 w-2 rounded-full bg-accent-secondary animate-accent-pulse" />
          </button>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
            Establishing credible, mathematically rigorous benchmarks for Artificial Intelligence and Applied Machine Learning.
          </p>
          
          {/* Social Links with circular fill & rotate effects */}
          <div className="flex items-center gap-3.5 mt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:border-accent-primary hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <social.icon className="w-4 h-4 group-hover:rotate-8 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Explore links - 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
            Explore
          </h5>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: 'Home Page', id: 'home' },
              { label: 'About Roster', id: 'about' },
              { label: 'Programs & Labs', id: 'programs' },
              { label: 'Events Timeline', id: 'events' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as ActivePage)}
                className="text-sm text-text-secondary hover:text-accent-primary text-left transition-colors flex items-center gap-1 group cursor-pointer focus:outline-none"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>
        </div>

        {/* Column 3: Resource links - 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
            Organization
          </h5>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: 'Research Resources', id: 'resources' },
              { label: 'Interactive Map', id: 'community' },
              { label: 'Contact Details', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as ActivePage)}
                className="text-sm text-text-secondary hover:text-accent-primary text-left transition-colors flex items-center gap-1 group cursor-pointer focus:outline-none"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>
        </div>

        {/* Column 4: Newsletter Signup - 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
            Newsletter
          </h5>
          <p className="text-sm text-text-secondary leading-relaxed">
            Get program announcements, research deep-dives, and certification schedules direct in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter professional email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed}
              className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-border bg-bg-primary text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary-tint disabled:opacity-60 transition-all"
            />
            <button
              type="submit"
              disabled={subscribed}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8.5 h-8.5 rounded-lg bg-accent-primary hover:bg-accent-primary-hover active:scale-95 disabled:bg-accent-secondary disabled:scale-100 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Success toast animation inside newsletter block */}
          {subscribed && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-accent-secondary font-semibold flex items-center gap-1.5 mt-1"
            >
              <span className="w-1.5 h-1.5 bg-accent-secondary rounded-full animate-ping" />
              Successfully subscribed to our dispatch list.
            </motion.div>
          )}
        </div>

      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-text-tertiary text-[13px]">
        <p>© 2026 AICAIML. Registered Professional Association. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent-primary transition-colors cursor-pointer">Privacy Charter</a>
          <a href="#" className="hover:text-accent-primary transition-colors cursor-pointer">Terms of Service</a>
          <a href="#" className="hover:text-accent-primary transition-colors cursor-pointer">Ethics Code</a>
        </div>
      </div>
    </footer>
  );
}
