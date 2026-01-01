
import React from 'react';
import * as Icons from 'lucide-react';
import { SOFTWARES } from '../constants';
import { ShieldCheck, Zap } from 'lucide-react';

const Software: React.FC = () => {
  return (
    <section id="logiciels" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Outils de Production</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Écosystème <br/>
              <span className="text-[#C5A059]">Elite</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Nous formons sur les outils leaders utilisés par les cabinets d'audit nationaux et les directions financières.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-white font-black text-sm uppercase tracking-widest">Mastery Level</p>
                  <p className="text-[#C5A059] text-xs font-bold uppercase tracking-tighter">Accréditation TESLATECHN</p>
                </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOFTWARES.map((sw, index) => {
            const IconComponent = (Icons as any)[sw.iconName] || Icons.Box;
            return (
              <div 
                key={index} 
                className="group relative h-[400px] bg-white/[0.03] border border-white/5 rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-white/[0.06] hover:border-[#C5A059]/30 hover:-translate-y-2 shadow-2xl"
              >
                {/* Background Number */}
                <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-[#C5A059]/10 transition-colors duration-500">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center border border-white/10 mb-10 group-hover:scale-110 group-hover:bg-[#C5A059] transition-all duration-500 group-hover:rotate-12 shadow-xl shadow-black/50">
                    <IconComponent className="w-8 h-8 text-[#C5A059] group-hover:text-black transition-colors" />
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-lg mb-6 group-hover:bg-black/20 transition-colors">
                    <span className="text-[10px] font-black text-gray-500 group-hover:text-white uppercase tracking-[0.2em]">{sw.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6 group-hover:text-[#C5A059] transition-colors">{sw.name}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                    {sw.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="flex items-center space-x-2 text-[#C5A059]">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Standard Industriel</span>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <Icons.ArrowRight className="w-4 h-4 text-white" />
                   </div>
                </div>

                {/* Corner Gradient Decor */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Brand Bar / Partners subtle hint */}
        <div className="mt-32 pt-20 border-t border-white/5">
           <p className="text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12">Ils exigent ces compétences</p>
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-20 grayscale">
              <span className="text-2xl font-black text-white italic">BigFour</span>
              <span className="text-2xl font-black text-white italic">Banks</span>
              <span className="text-2xl font-black text-white italic">Corporates</span>
              <span className="text-2xl font-black text-white italic">FinTech</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
