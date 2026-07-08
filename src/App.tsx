/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActivePage, Program, ResourceArticle } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransitionOverlay from './components/PageTransitionOverlay';

// Import views
import ViewHome from './components/ViewHome';
import ViewAbout from './components/ViewAbout';
import ViewPrograms from './components/ViewPrograms';
import ViewEvents from './components/ViewEvents';
import ViewResources from './components/ViewResources';
import ViewCommunity from './components/ViewCommunity';
import ViewContact from './components/ViewContact';

const PAGE_ORDER: ActivePage[] = ['home', 'about', 'programs', 'events', 'resources', 'community', 'contact'];

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [transitionStage, setTransitionStage] = useState<'idle' | 'covering' | 'uncovering'>('idle');
  const [transitionDirection, setTransitionDirection] = useState<'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom'>('left-to-right');

  // Shared item detail selections for deep linking/mega-menu redirects
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  const handleNavigate = (
    nextPage: ActivePage,
    options?: {
      detailProgram?: Program;
      detailArticle?: ResourceArticle;
      customDirection?: 'bottom-to-top' | 'top-to-bottom';
    }
  ) => {
    if (nextPage === activePage && !options?.detailProgram && !options?.detailArticle) return;
    if (transitionStage !== 'idle') return; // Prevent double trigger during active wipe

    // 1. Determine Directional Curtain Wipe motion
    let dir: 'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom' = 'left-to-right';

    if (options?.customDirection) {
      dir = options.customDirection;
    } else if (options?.detailProgram || options?.detailArticle) {
      dir = 'bottom-to-top'; // signals "going deeper"
    } else {
      const currIdx = PAGE_ORDER.indexOf(activePage);
      const nextIdx = PAGE_ORDER.indexOf(nextPage);
      if (nextIdx > currIdx) {
        dir = 'left-to-right'; // horizontal forward
      } else {
        dir = 'right-to-left'; // horizontal backward
      }
    }

    setTransitionDirection(dir);
    setTransitionStage('covering');

    // 2. Swapping peak cover moment (at 450ms)
    setTimeout(() => {
      setActivePage(nextPage);
      
      if (options?.detailProgram) {
        setSelectedProgram(options.detailProgram);
      } else {
        setSelectedProgram(null);
      }

      if (options?.detailArticle) {
        setSelectedArticle(options.detailArticle);
      } else {
        setSelectedArticle(null);
      }

      // Smooth scroll back to top of viewport upon mounting the new page content
      window.scrollTo({ top: 0, behavior: 'auto' });

      setTransitionStage('uncovering');

      // 3. Complete and return to idle state (after another 450ms)
      setTimeout(() => {
        setTransitionStage('idle');
      }, 450);
    }, 450);
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return (
          <ViewHome
            onNavigate={handleNavigate}
            onSelectProgram={(prog) =>
              handleNavigate('programs', { detailProgram: prog, customDirection: 'bottom-to-top' })
            }
          />
        );
      case 'about':
        return <ViewAbout />;
      case 'programs':
        return (
          <ViewPrograms
            selectedProgram={selectedProgram}
            onClearSelectedProgram={() => setSelectedProgram(null)}
          />
        );
      case 'events':
        return <ViewEvents />;
      case 'resources':
        return (
          <ViewResources
            selectedArticle={selectedArticle}
            onClearSelectedArticle={() => setSelectedArticle(null)}
          />
        );
      case 'community':
        return <ViewCommunity />;
      case 'contact':
        return <ViewContact />;
      default:
        return <ViewHome onNavigate={handleNavigate} onSelectProgram={(prog) => handleNavigate('programs', { detailProgram: prog })} />;
    }
  };

  const isTransitioning = transitionStage !== 'idle';
  const isCovering = transitionStage === 'covering';

  return (
    <div className="flex flex-col min-h-screen relative bg-bg-primary text-text-secondary select-none">
      
      {/* Desktop lag-spring Custom Cursor feedback layer */}
      <CustomCursor />

      {/* FIXED Navigation Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onSelectProgram={(prog) =>
          handleNavigate('programs', { detailProgram: prog, customDirection: 'bottom-to-top' })
        }
        onSelectArticle={(art) =>
          handleNavigate('resources', { detailArticle: art, customDirection: 'bottom-to-top' })
        }
      />

      {/* Cinematic "Settling Back" Page Container */}
      <main
        className={`flex-1 flex flex-col pt-20 transition-all duration-300 ${
          isTransitioning ? 'pointer-events-none' : ''
        }`}
        style={{
          opacity: isCovering ? 0.6 : 1,
          transform: isCovering ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="flex-1 flex flex-col items-center justify-start">
          {renderActiveView()}
        </div>
      </main>

      {/* Dynamic Curtain Overlay Panel */}
      <PageTransitionOverlay stage={transitionStage} direction={transitionDirection} />

      {/* Page Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
