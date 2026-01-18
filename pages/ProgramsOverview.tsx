import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import * as Icons from 'lucide-react';
import RevealSection from '../components/UI/RevealSection';

const ProgramsOverview: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 max-w-7xl mx-auto px-4">
      <RevealSection>
        <div className="mb-16 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Programy</h1>
          <p className="text-xl text-text-muted">Architektura tréninkových modulů.</p>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-fr">
        {PROGRAMS.map((program, index) => {
            const IconComponent = (Icons as any)[program.iconName];
            
            return (
                <RevealSection key={program.id} delay={index * 0.1} className="h-full">
                    <Link to={program.path} className="group h-full flex flex-col">
                        <div className="relative h-full bg-surface border border-white/10 p-8 rounded-4xl overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 flex flex-col justify-between interactive-target">
                            
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${program.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <IconComponent size={32} />
                                    </div>
                                    <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                                <p className="text-sm text-text-muted group-hover:text-white transition-colors">
                                    {program.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <ul className="text-xs space-y-2 text-text-muted">
                                    {program.objectives.slice(0, 2).map((obj, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                                            {obj}
                                        </li>
                                    ))}
                                    <li className="text-accent font-medium mt-2">Zjistit více &rarr;</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </RevealSection>
            );
        })}
      </div>
    </div>
  );
};

export default ProgramsOverview;