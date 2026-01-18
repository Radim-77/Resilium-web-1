import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CORE_PHASES } from '../constants';
import * as Icons from 'lucide-react';
import RevealSection from '../components/UI/RevealSection';

const CoreFramework: React.FC = () => {
  const [activePhase, setActivePhase] = useState(CORE_PHASES[0]);

  return (
    <div className="min-h-screen pb-20 max-w-7xl mx-auto px-4">
      <RevealSection>
        <div className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">C.O.R.E.</h1>
          <p className="text-xl text-text-muted">Jednotný jazyk pro rozhodování pod tlakem.</p>
        </div>
      </RevealSection>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Interactive Diagram */}
        <div className="relative aspect-square max-w-[500px] mx-auto w-full">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
            {CORE_PHASES.map((phase, index) => {
               // Dynamic Icon
               const IconComponent = (Icons as any)[phase.iconName];
               const isActive = activePhase.id === phase.id;

               return (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(phase)}
                  className={`
                    relative rounded-3xl border-2 flex flex-col items-center justify-center gap-2 p-6 transition-all duration-300 interactive-target
                    ${isActive 
                        ? 'bg-accent border-accent text-white shadow-lg shadow-accent/40 z-10 scale-105' 
                        : 'bg-surface border-white/10 text-text-muted hover:border-white/30 hover:bg-white/5'}
                  `}
                  whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                    <IconComponent size={32} />
                    <span className="font-mono font-bold uppercase tracking-wider">{phase.title}</span>
                    {isActive && (
                        <motion.div 
                            layoutId="active-indicator"
                            className="absolute -inset-1 border border-accent rounded-4xl opacity-50 animate-pulse"
                        />
                    )}
                </motion.button>
               )
            })}
          </div>
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 bg-background rounded-full border-4 border-surface flex items-center justify-center z-20 shadow-2xl">
                <span className="font-bold text-lg tracking-tighter">CORE</span>
            </div>
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className="h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activePhase.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-surface/50 backdrop-blur-md border border-white/10 p-10 rounded-4xl h-full flex flex-col justify-center"
                >
                    <h2 className="text-6xl font-bold mb-2 opacity-10 font-mono absolute top-4 right-8 select-none">
                        0{CORE_PHASES.indexOf(activePhase) + 1}
                    </h2>
                    <h3 className="text-4xl font-bold mb-6 text-accent flex items-center gap-4">
                        {activePhase.title}
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </h3>
                    <p className="text-xl text-text leading-relaxed">
                        {activePhase.description}
                    </p>
                </motion.div>
             </AnimatePresence>
        </div>

      </div>

      <RevealSection delay={0.4} className="mt-20">
         <div className="bg-gradient-to-r from-surface-light to-surface p-8 rounded-4xl border border-white/5 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-accent/20 rounded-full text-accent">
                <Icons.Network size={32} />
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">Přenositelnost</h4>
                <p className="text-text-muted">
                    C.O.R.E. tvoří komunikační standard napříč celou organizací. Odstraňuje šumy a sjednocuje postup týmu od operativy po management.
                </p>
            </div>
         </div>
      </RevealSection>
    </div>
  );
};

export default CoreFramework;