
import React from 'react';
import { Monitor, Linkedin, Twitter, Facebook, Mail, Phone, ArrowUpRight, Lock } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center space-x-3 text-2xl font-black text-white mb-8 group">
              <div className="bg-[#C5A059] p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-[#C5A059]/20">
                <Monitor className="w-8 h-8 text-black" />
              </div>
              <span>TESLA<span className="text-[#C5A059]">TECHN</span></span>
            </a>
            <p className="text-xl text-gray-500 font-medium mb-12 max-w-md leading-relaxed italic">
              "L'expertise locale, la vision globale."
            </p>
            <div className="flex space-x-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#C5A059] hover:border-[#C5A059] transition-all transform hover:-translate-y-1">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.3em] mb-10">Académie</h4>
              <ul className="space-y-4">
                {['Cursus Or', 'Mentors Experts', 'Attestations', 'Placement'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 font-bold hover:text-white transition-colors flex items-center group text-sm uppercase tracking-widest">
                      {item} <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all text-[#C5A059]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.3em] mb-10">Légal</h4>
              <ul className="space-y-4">
                {['CGV', 'Confidentialité', 'Mentions', 'Sécurité'].map(item => (
                  <li key={item}><a href="#" className="text-gray-400 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.3em] mb-10">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-center text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Mail className="w-4 h-4 mr-3 text-[#C5A059]" />
                  jsphsagno@gmail.com
                </li>
                <li className="flex items-center text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Phone className="w-4 h-4 mr-3 text-[#C5A059]" />
                  +224 621 25 43 48
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.2em]">© 2024 TESLATECHN Global Academy.</p>
          <div className="mt-8 md:mt-0 flex items-center space-x-8">
            <button 
              onClick={onAdminClick}
              className="flex items-center text-[10px] font-black text-gray-700 hover:text-[#C5A059] uppercase tracking-widest transition-colors"
            >
              <Lock className="w-3 h-3 mr-2" />
              Accès Administrateur
            </button>
            <span className="flex items-center text-[10px] font-black text-white uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full mr-2 shadow-[0_0_10px_#C5A059]"></span>
              Systèmes Opérationnels
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
