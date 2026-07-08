/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, Program, ResourceArticle } from '../types';
import { programsData, articlesData } from '../data';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Terminal, Activity, FileText, Compass, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onSelectProgram?: (program: Program) => void;
  onSelectArticle?: (article: ResourceArticle) => void;
}

export default function Header({ activePage, onNavigate, onSelectProgram, onSelectArticle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hover states for mega-menus
  const [hoveredMenu, setHoveredMenu] = useState<'programs' | 'resources' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll observer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = (menu: 'programs' | 'resources') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // 120ms delay-in to prevent accidental trigger
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(menu);
    }, 120);
  };

  const handleMenuLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // 200ms delay-out
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  const navItems: { label: string; id: ActivePage; hasDropdown?: 'programs' | 'resources' }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs', hasDropdown: 'programs' },
    { label: 'Events', id: 'events' },
    { label: 'Resources', id: 'resources', hasDropdown: 'resources' },
    { label: 'Community', id: 'community' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-300 flex items-center ${
          isScrolled
            ? 'glass-header'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Left Wordmark Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-1.5 focus:outline-none group cursor-pointer"
          >
            <span className="font-display font-semibold text-2xl tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
              AICAIML
            </span>
            {/* Pulsing Status indicator dot */}
            <span className="h-2 w-2 rounded-full bg-accent-secondary animate-accent-pulse" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <div
                  key={item.id}
                  className="relative h-full flex items-center py-6"
                  onMouseEnter={() => item.hasDropdown && handleMenuEnter(item.hasDropdown)}
                  onMouseLeave={() => item.hasDropdown && handleMenuLeave()}
                >
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setHoveredMenu(null);
                    }}
                    className={`font-sans text-[15px] font-medium transition-all relative flex items-center gap-1 cursor-pointer focus:outline-none py-1.5 ${
                      isActive
                        ? 'text-accent-primary font-semibold'
                        : 'text-text-secondary hover:text-accent-primary'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredMenu === item.hasDropdown ? 'rotate-180 text-accent-primary' : 'text-text-tertiary'
                        }`}
                      />
                    )}

                    {/* Left-to-right underline drawing on hover / active state */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary transition-transform duration-250 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 hover:scale-x-100'
                      }`}
                    />
                  </button>

                  {/* Dropdown / Mega-menu Panel */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {hoveredMenu === item.hasDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[600px] bg-bg-primary border border-border rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 z-50 overflow-hidden"
                          onMouseEnter={() => handleMenuEnter(item.hasDropdown)}
                          onMouseLeave={handleMenuLeave}
                        >
                          {item.hasDropdown === 'programs' ? (
                            <>
                              <div className="col-span-2 border-b border-border pb-2.5 mb-2">
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-tertiary">
                                  Featured Courses & Syllabi
                                </span>
                              </div>
                              {programsData.map((prog) => (
                                <button
                                  key={prog.id}
                                  onClick={() => {
                                    onNavigate('programs');
                                    if (onSelectProgram) onSelectProgram(prog);
                                    setHoveredMenu(null);
                                  }}
                                  className="group/mega flex gap-3.5 p-3.5 rounded-xl border border-transparent hover:border-accent-primary-tint relative overflow-hidden text-left focus:outline-none transition-all cursor-pointer"
                                >
                                  {/* Left-to-right background wipe on hover */}
                                  <div className="absolute inset-0 bg-accent-primary-tint/30 scale-x-0 group-hover/mega:scale-x-100 transition-transform duration-300 origin-left -z-10" />
                                  
                                  <div className="p-2.5 rounded-lg bg-accent-primary-tint text-accent-primary group-hover/mega:bg-accent-primary group-hover/mega:text-white transition-all">
                                    <GraduationCap className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-text-primary text-sm mb-0.5 group-hover/mega:text-accent-primary transition-colors">
                                      {prog.title}
                                    </h5>
                                    <p className="text-xs text-text-tertiary line-clamp-2 leading-relaxed">
                                      {prog.description}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </>
                          ) : (
                            <>
                              <div className="col-span-2 border-b border-border pb-2.5 mb-2">
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-tertiary">
                                  Scientific Resources & Insights
                                </span>
                              </div>
                              {articlesData.map((art) => (
                                <button
                                  key={art.id}
                                  onClick={() => {
                                    onNavigate('resources');
                                    if (onSelectArticle) onSelectArticle(art);
                                    setHoveredMenu(null);
                                  }}
                                  className="group/mega flex gap-3.5 p-3.5 rounded-xl border border-transparent hover:border-accent-primary-tint relative overflow-hidden text-left focus:outline-none transition-all cursor-pointer"
                                >
                                  {/* Left-to-right background wipe */}
                                  <div className="absolute inset-0 bg-accent-primary-tint/30 scale-x-0 group-hover/mega:scale-x-100 transition-transform duration-300 origin-left -z-10" />

                                  <div className="p-2.5 rounded-lg bg-accent-secondary-tint text-accent-secondary group-hover/mega:bg-accent-secondary group-hover/mega:text-white transition-all">
                                    <BookOpen className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-text-primary text-sm mb-0.5 group-hover/mega:text-accent-secondary transition-colors">
                                      {art.title}
                                    </h5>
                                    <p className="text-xs text-text-tertiary line-clamp-2 leading-relaxed">
                                      {art.description}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-accent-primary text-white hover:bg-accent-primary-hover active:scale-[0.97] transition-all btn-glow relative overflow-hidden group cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              {/* Lines morphing into an 'X' using cubic-bezier overshoot */}
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 origin-left ${
                  mobileMenuOpen ? 'rotate-[43deg] translate-y-[2px]' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 origin-left ${
                  mobileMenuOpen ? '-rotate-[43deg] -translate-y-[2px]' : ''
                }`}
              />
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-30 lg:hidden"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ translateX: '100%' }}
              animate={{ translateX: '0%' }}
              exit={{ translateX: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-[360px] bg-bg-primary border-l border-border z-30 p-8 pt-28 lg:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary">
                  NAVIGATION DIRECTORY
                </span>
                <nav className="flex flex-col gap-5">
                  {navItems.map((item, idx) => {
                    const isActive = activePage === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + idx * 0.04, // staggered 40ms apart
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={() => {
                          onNavigate(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left font-display text-lg font-semibold flex items-center justify-between transition-colors cursor-pointer focus:outline-none ${
                          isActive ? 'text-accent-primary' : 'text-text-primary hover:text-accent-primary'
                        }`}
                      >
                        {item.label}
                        <span className="text-xs font-mono opacity-40">0{idx + 1}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Action Button at bottom of mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-col gap-3"
              >
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-accent-primary text-white font-semibold py-3 px-4 rounded-xl text-center text-sm hover:bg-accent-primary-hover active:scale-[0.98] transition-all"
                >
                  Apply Now
                </button>
                <p className="text-[11px] text-text-tertiary text-center leading-relaxed">
                  © 2026 AICAIML Professional Board
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
