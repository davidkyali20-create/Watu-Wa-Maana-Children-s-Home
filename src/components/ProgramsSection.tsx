import React, { useState } from 'react';
import { PROGRAMS } from '../data/content';
import { Program } from '../types';
import { CheckCircle2, Heart, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface ProgramsSectionProps {
  onSponsorProgram: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSponsorProgram }) => {
  const [activeTab, setActiveTab] = useState<string>(PROGRAMS[0].id);

  const selectedProgram: Program = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="programs" className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Holistic Care for Every Stage of Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Our Core Pillars of Care
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            At Watu Wa Maana Children’s Home, we believe raising a child takes more than a roof over their head. Our programs address the physical, emotional, educational, and social needs of every child in our family.
          </p>
        </div>

        {/* Tab Controls for Desktop / Segmented Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-stone-200/80 rounded-xl mb-10">
          {PROGRAMS.map((program) => {
            const isActive = program.id === activeTab;
            return (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all text-left flex flex-col cursor-pointer ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-300/80'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                <span className="text-[10px] text-amber-800 uppercase tracking-wider">
                  {program.category.split('·')[0].trim()}
                </span>
                <span className="truncate mt-0.5">{program.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Program Spotlight Card */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Image Side */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-200">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">{selectedProgram.category}</span>
                <h4 className="text-lg font-serif font-bold text-white">{selectedProgram.title}</h4>
              </div>
            </div>

            {/* Narrative & Pillars Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
                  <span>{selectedProgram.category}</span>
                  <span>·</span>
                  <span className="text-stone-500">{selectedProgram.metrics}</span>
                </div>

                <h3 className="hidden lg:block text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                  {selectedProgram.title}
                </h3>

                <p className="mt-3 text-base font-serif italic text-amber-900">
                  "{selectedProgram.tagline}"
                </p>

                <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                    Program Safeguards & Commitments:
                  </div>
                  {selectedProgram.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Schedule strip */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Year-round continuous daily care</span>
                  <span>·</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Licensed under Kenya Children Act</span>
                </div>

                <button
                  onClick={() => onSponsorProgram(selectedProgram.title)}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Heart className="w-4 h-4" />
                  <span>Sponsor This Pillar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Pillars Quick Overview Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeTab === prog.id
                  ? 'bg-amber-50/50 border-amber-600/60 shadow-xs'
                  : 'bg-white border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1">
                {prog.category.split('·')[0]}
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">
                {prog.title}
              </h4>
              <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                {prog.description}
              </p>
              <div className="mt-4 text-xs font-semibold text-amber-700 flex items-center gap-1">
                <span>View Details & Schedule</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
