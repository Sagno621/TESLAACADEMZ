
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Ils nous font <span className="text-[#C5A059]">Confiance</span></h2>
          <p className="text-gray-500 font-medium">Découvrez les retours de nos alumni qui ont propulsé leur carrière grâce à nos cursus d'élite.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 p-10 rounded-[3rem] relative hover:bg-white/[0.04] transition-all">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-[#C5A059]/10" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />)}
              </div>
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover grayscale" />
                <div>
                  <h4 className="font-black text-white">{t.name}</h4>
                  <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
