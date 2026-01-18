import React from 'react';
import RevealSection from '../components/UI/RevealSection';
import { Briefcase, Gavel, Users, HeartPulse } from 'lucide-react';

const ForOrganizations: React.FC = () => {
  const metrics = [
    {
      title: "Snížení chybovosti",
      desc: "Eliminace kognitivních selhání v klíčových momentech.",
      icon: Briefcase
    },
    {
      title: "Ochrana reputace",
      desc: "Prevence neprofesionálního chování navenek.",
      icon: Users
    },
    {
      title: "Právní jistota",
      desc: "Průkazná příprava zaměstnanců na krizové stavy snižuje právní rizika.",
      icon: Gavel
    },
    {
      title: "Prevence vyhoření",
      desc: "Udržitelnost výkonu expertů skrze systémovou práci se zátěží.",
      icon: HeartPulse
    }
  ];

  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-5xl font-bold mb-6">Business Case</h1>
                <p className="text-2xl text-accent font-mono">Resilium jako systémová pojistka organizace.</p>
            </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
                <RevealSection key={index} delay={index * 0.1}>
                    <div className="h-full bg-surface border border-white/10 p-10 rounded-4xl hover:border-accent/50 transition-colors flex flex-col items-start gap-6">
                        <div className="p-4 bg-white/5 rounded-3xl text-accent">
                            <metric.icon size={40} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">{metric.title}</h3>
                            <p className="text-lg text-text-muted leading-relaxed">{metric.desc}</p>
                        </div>
                    </div>
                </RevealSection>
            ))}
        </div>
        
        <RevealSection className="mt-20">
            <div className="bg-accent/10 border border-accent/20 rounded-4xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Investice do bezpečnosti</h2>
                <p className="max-w-2xl mx-auto text-text-muted mb-8">
                    Selhání v krizi je násobně dražší než příprava. Spočítáme ROI pro vaši organizaci.
                </p>
                <a href="#/kontakt" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors">
                    Konzultovat řešení
                </a>
            </div>
        </RevealSection>
      </div>
    </div>
  );
};

export default ForOrganizations;