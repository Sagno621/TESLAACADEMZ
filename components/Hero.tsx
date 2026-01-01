
import React from 'react';
import { ArrowRight as ArrowRightIcon, Play as PlayIcon, ShieldCheck as ShieldCheckIcon, Monitor as MonitorIcon, GraduationCap as GraduationCapIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] text-white pt-20 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10">
              <span className="text-xs font-black text-[#C5A059] tracking-[0.2em] uppercase">L'expertise locale, la vision globale</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
              TESLA<span className="text-[#C5A059]">TECHN</span> <br/>
              <span className="text-4xl md:text-5xl font-light text-gray-400 tracking-normal block mt-4 italic">Academy d'Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Développez vos compétences ici en Guinée et ouvrez-vous aux standards internationaux. Nos formations pratiques en audit, finance et technologies, accompagnées d’attestations reconnues, vous préparent à relever les défis locaux et mondiaux.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <a href="#formations" className="group bg-[#C5A059] hover:bg-[#b38f4a] text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center transition-all duration-300 shadow-2xl shadow-[#C5A059]/20 hover:-translate-y-1">
                Explorer les cursus
                <ArrowRightIcon className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="flex items-center space-x-4 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                  <PlayIcon className="w-5 h-5 fill-white group-hover:fill-black text-transparent" />
                </div>
                <span className="font-black text-sm uppercase tracking-widest text-white group-hover:text-[#C5A059] transition-colors">Notre vision</span>
              </button>
            </div>

            <div className="mt-24 flex items-center justify-center lg:justify-start space-x-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex flex-col">
                  <span className="text-2xl font-black">2.5k</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Alumni</span>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-black">98.4%</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Placement</span>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-black">2026</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Promotion</span>
               </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 p-2 bg-gradient-to-b from-[#C5A059]/30 to-transparent rounded-[3rem] shadow-2xl border border-white/5">
              <div className="relative rounded-[2.8rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="TESLATECHN Excellence" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              
              {/* Gold Badge Overlay */}
              <div className="absolute -bottom-10 -left-10 bg-black border border-[#C5A059] p-8 rounded-[2rem] shadow-2xl hidden xl:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A059] p-3 rounded-2xl">
                    <ShieldCheckIcon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#C5A059] font-black uppercase tracking-[0.2em]">Accrédité</p>
                    <p className="text-lg font-black text-white">Attestation Or</p>
                  </div>
                </div>
              </div>

              {/* Logo Replica floating */}
              <div className="absolute -top-10 -right-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-full hidden xl:flex items-center justify-center animate-bounce duration-[3000ms]">
                 <div className="relative">
                    <MonitorIcon className="w-16 h-16 text-[#C5A059]" />
                    <GraduationCapIcon className="w-8 h-8 text-white absolute top-2 left-4" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
