import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import * as Icons from 'lucide-react';
import RevealSection from '../components/UI/RevealSection';

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const program = PROGRAMS.find(p => p.id === id);

  useEffect(() => {
    if (!program) {
        navigate('/programy');
    }
  }, [program, navigate]);

  if (!program) return null;

  const IconComponent = (Icons as any)[program.iconName];

  return (
    <div className="min-h-screen pb-20">
        {/* Header */}
        <div className="relative bg-surface border-b border-white/5 pt-20 pb-32 overflow-hidden">
            <div className={`absolute top-0 right-0 w-[50%] h-full ${program.color} opacity-5 blur-[100px]`}></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <Link to="/programy" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
                    <Icons.ArrowLeft size={16} /> Zpět na programy
                </Link>
                <div className="flex items-center gap-6 mb-6">
                    <div className={`p-4 rounded-3xl bg-white/5 text-white`}>
                        <IconComponent size={40} />
                    </div>
                    <span className="font-mono text-accent uppercase tracking-widest">Modul 0{PROGRAMS.findIndex(p => p.id === id) + 1}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">{program.title}</h1>
                <p className="text-2xl text-text-muted max-w-2xl leading-relaxed">{program.description}</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <RevealSection className="bg-background border border-white/10 rounded-4xl p-10 shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6">Obsah a zaměření</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            {program.details}
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Cíle výcviku</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {program.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 bg-surface p-4 rounded-2xl border border-white/5">
                                    <Icons.CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                                    <span className="text-sm text-gray-300">{obj}</span>
                                </li>
                            ))}
                        </ul>
                    </RevealSection>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <RevealSection delay={0.2} className="sticky top-32">
                        <div className="bg-surface border border-white/10 p-8 rounded-4xl">
                            <h3 className="text-xl font-bold mb-4">Máte zájem o tento program?</h3>
                            <p className="text-sm text-text-muted mb-6">
                                Navrhneme implementaci přímo pro potřeby vašeho týmu.
                            </p>
                            <Link 
                                to="/kontakt" 
                                className="w-full block text-center bg-white text-black font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                            >
                                Poptat termín
                            </Link>
                        </div>
                    </RevealSection>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProgramDetail;