
import React, { useState } from 'react';
import { Clock, ChevronRight, Star, ShieldCheck, Layers } from 'lucide-react';
import { COURSES } from '../constants';
import { Course } from '../types';

const Courses: React.FC = () => {
  const categories = [
    "Informatique de gestion",
    "Bureautique",
    "Réseau informatique",
    "Logiciel comptable et financier"
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCourses = COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="formations" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Layers className="text-[#C5A059] w-6 h-6" />
            <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase">Parcours de Progression</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
            Cursus <span className="text-[#C5A059]">Techniques</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Une organisation structurée pour passer du statut d'initié à celui d'expert incontesté.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-black text-[#C5A059] border-black shadow-xl scale-105'
                  : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
              }`}
            >
              <span className="mr-3 opacity-50">{index + 1}.</span> {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-[3rem] border border-gray-100 p-6 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-inner">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-md text-[#C5A059] text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-black mb-4 text-gray-900 group-hover:text-[#C5A059] transition-colors leading-tight">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center text-gray-400 space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-[#C5A059] space-x-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Attestation</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info in section */}
        <div className="mt-24 text-center">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em]">Tous nos modules incluent une attestation de réussite TESLATECHN</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
