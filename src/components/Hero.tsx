import React from 'react';
import { Heart, BookOpen, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { ORG_DETAILS } from '../data/content';

interface HeroProps {
  onOpenDonate: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onExplorePrograms }) => {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/70 via-stone-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Mission Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Curatorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-4">
              <span className="w-6 h-px bg-amber-700"></span>
              <span>Watu Wa Maana · Meaning "People of Importance"</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-serif font-bold text-stone-900 leading-[1.12] tracking-tight text-balance">
              Every Child Deserves to Know They Are Important.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              At Watu Wa Maana Children’s Home, we provide a safe, loving family environment, quality education, and holistic care so vulnerable children can heal, grow, and become confident, self-reliant adults.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="px-6 py-3.5 text-base font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-lg transition-all shadow-md shadow-amber-900/10 flex items-center gap-2.5 cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white/20" />
                <span>Donate Now (M-Pesa / Card)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="px-6 py-3.5 text-base font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Sponsor a Program</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Trust Markers and Accountability */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Government Registered</div>
                  <div className="text-stone-500">CCI/REG/2019/0482</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">100% In School</div>
                  <div className="text-stone-500">CBC & Secondary Enrolled</div>
                </div>
              </div>
              <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
                <Heart className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">86% Child Care Ratio</div>
                  <div className="text-stone-500">Audited Direct Impact</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Authentic Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 shadow-xl border border-stone-200/90 group">
              <img
                src={ORG_DETAILS.images.hero}
                alt="Children walking cheerfully across the sunlit courtyard in Ruiru Kenya"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                  <span>Ruiru, Kiambu County</span>
                  <span>·</span>
                  <span>Safe Community Sanctuary</span>
                </div>
                <p className="text-sm text-stone-200 font-serif italic line-clamp-2">
                  "No child in our family will ever feel forgotten. Here, they find security, brotherhood, and a future."
                </p>
                <div className="mt-2 text-[11px] text-stone-400">
                  Ethical Safeguarding: Wide-angle activity shot preserving children's identity and dignity.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Urgent Needs Highlight Bar */}
        <div className="mt-12 bg-amber-900/95 text-white rounded-xl p-4 sm:p-5 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-amber-800/80 flex items-center justify-center shrink-0 border border-amber-600/40">
              <Heart className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Urgent Monthly Need: Nutrition & School Uniforms</div>
              <div className="text-sm font-medium text-stone-100">
                Current shortage: 12 bags of grade 1 maize flour & 26 pairs of school shoes for Term 1.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#wishlist"
              className="w-full md:w-auto text-center px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-white rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              View Wish List
            </a>
            <button
              onClick={onOpenDonate}
              className="w-full md:w-auto text-center px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Support Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
