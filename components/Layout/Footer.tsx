import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/50 border-t border-white/5 py-12 px-4 mt-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="text-accent" /> RESILIUM
            </h3>
            <p className="text-sm text-text-muted max-w-md">
                Powered by metodikou RES-CON. Trénink reakcí pro kritické situace.
            </p>
        </div>
        
        <div className="flex gap-6 text-sm text-text-muted font-mono">
            <a href="#" className="hover:text-accent transition-colors">Právní doložka</a>
            <a href="#" className="hover:text-accent transition-colors">Ochrana značky</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
        </div>
        
        <div className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Resilium Systems.
        </div>
      </div>
    </footer>
  );
};

export default Footer;