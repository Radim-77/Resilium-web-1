import React from 'react';
import RevealSection from '../components/UI/RevealSection';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <RevealSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Kontakt</h1>
            <p className="text-xl text-text-muted mb-12 max-w-md">
                Systémová příprava začíná auditem. Navrhneme tréninkový plán odpovídající rizikovému profilu vaší organizace.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <Mail />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Email</p>
                        <p className="text-xl font-bold">info@resilium.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <Phone />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Telefon</p>
                        <p className="text-xl font-bold">+420 123 456 789</p>
                    </div>
                </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <MapPin />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Adresa</p>
                        <p className="text-xl font-bold">Prague, Czech Republic</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
                <p className="text-2xl font-bold italic text-white/50">
                    "Pro ty, kteří nesou odpovědnost v momentech, kdy selhává improvizace."
                </p>
            </div>
        </RevealSection>

        {/* Form Side */}
        <RevealSection delay={0.2}>
            <form className="bg-surface/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-4xl shadow-2xl space-y-6">
                <div>
                    <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Jméno</label>
                    <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        placeholder="Jan Novák"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Organizace</label>
                    <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        placeholder="Název společnosti"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Sektor</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                        <option className="bg-surface">B2B - Soukromý sektor</option>
                        <option className="bg-surface">B2G - Státní správa</option>
                        <option className="bg-surface">NGO - Neziskový sektor</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Zpráva</label>
                    <textarea 
                        rows={4}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        placeholder="Popište vaše potřeby..."
                    ></textarea>
                </div>
                <button type="button" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-5 rounded-2xl mt-4 transition-colors">
                    Odeslat poptávku
                </button>
            </form>
        </RevealSection>
      </div>
    </div>
  );
};

export default Contact;