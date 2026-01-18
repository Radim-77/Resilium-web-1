import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealSection from '../components/UI/RevealSection';

const Methodology: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

  return (
    <div className="pb-20 relative overflow-hidden">
      {/* Background Neural Parallax */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
        style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/technological-ecology-concept-background_23-2148430030.jpg?w=1380&t=st=1706649641~exp=1706650241~hmac=a4b0d0c0d0e0f0g0')", // Placeholder for neural network
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) invert(1)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-10">
        <RevealSection>
            <div className="mb-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">RES-CON</h1>
                <p className="text-2xl text-accent font-mono tracking-tight">Vědecký motor funkční odolnosti.</p>
            </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
            <RevealSection className="bg-surface/80 backdrop-blur-md p-10 rounded-4xl border border-white/5 hover:border-white/20 transition-all">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                    Neurobiologie stresu
                </h2>
                <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                    <p>
                        Stres představuje biologickou reakci organismu, která prokazatelně omezuje funkce prefrontálního kortexu.
                    </p>
                    <p>
                        Důsledkem je zvýšená chybovost, zúžené vnímání (tunelové vidění) a zhoršená schopnost logického rozhodování. 
                    </p>
                    <p className="text-white font-medium border-l-2 border-accent pl-4 mt-4">
                        Resilium trénuje mechanismy, které udržují kognitivní výkon aktivní i během vysoké stresové zátěže.
                    </p>
                </div>
            </RevealSection>

            <RevealSection delay={0.3} className="bg-surface/80 backdrop-blur-md p-10 rounded-4xl border border-white/5 hover:border-white/20 transition-all">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                    Stresová inokulace
                </h2>
                <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                    <p>
                        Metodika využívá princip řízeného vystavení tlaku. Podobně jako očkování připravuje imunitní systém, my připravujeme nervový systém.
                    </p>
                    <p>
                        Postupným zvyšováním zátěže v simulovaných scénářích dochází k neurologické adaptaci.
                    </p>
                    <p className="text-white font-medium border-l-2 border-accent pl-4 mt-4">
                        Účastníci si vytvářejí nové, robustní vzorce pro profesionální reakci namísto "fight-or-flight".
                    </p>
                </div>
            </RevealSection>
        </div>
      </div>
    </div>
  );
};

export default Methodology;