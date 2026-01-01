
import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, GraduationCap, ChevronRight, ShieldAlert } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tutoriels', href: '#tutoriels' },
    { name: 'Formations', href: '#formations' },
    { name: 'Téléchargements', href: '#cours-telechargement' },
    { name: 'Logiciels', href: '#logiciels' },
    { name: 'Assistant IA', href: '#ai-chat' },
    { name: 'Casier Expert', href: '#casier-expert' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative">
            <Monitor className="w-8 h-8 text-[#C5A059]" />
            <GraduationCap className="w-4 h-4 text-white absolute top-1 left-2" />
          </div>
          <span className={`text-xl font-black tracking-[0.15em] transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
            TESLA<span className="text-[#C5A059]">TECHN</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                link.name === 'Casier Expert' ? 'text-amber-500 hover:bg-amber-500/10' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
             <a href="#formations" className="bg-[#C5A059] text-black px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg shadow-[#C5A059]/20">
              S'inscrire
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-5 text-xl font-black text-white border-b border-white/5 flex justify-between items-center group uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ChevronRight className="w-6 h-6 text-[#C5A059]" />
            </a>
          ))}
          <div className="mt-12">
            <a href="#formations" className="block w-full py-5 bg-[#C5A059] text-black rounded-2xl text-center text-lg font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              Nous Rejoindre
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
