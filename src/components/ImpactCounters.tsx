import React, { useState } from 'react';
import { IMPACT_METRICS } from '../data/content';
import { Sparkles, Utensils, BookOpen, HeartHandshake } from 'lucide-react';

interface ImpactCountersProps {
  onSelectAmountForDonate: (amount: number, currency: string) => void;
}

export const ImpactCounters: React.FC<ImpactCountersProps> = ({ onSelectAmountForDonate }) => {
  const [selectedCalc, setSelectedCalc] = useState<number>(2500);

  const donationTiers = [
    {
      kes: 1000,
      usd: 8,
      title: "1 Week of Hot Meals & Fruit",
      desc: "Supplies 21 balanced home-cooked meals including vegetables from our greenhouse garden.",
      icon: Utensils,
    },
    {
      kes: 2500,
      usd: 20,
      title: "1 Month Wholesome Nutrition",
      desc: "Guarantees a growing child receives breakfast porridge, lunch, and dinner every day.",
      icon: HeartHandshake,
    },
    {
      kes: 5000,
      usd: 40,
      title: "1 School Term CBC Learning Kit",
      desc: "Provides official curriculum textbooks, 10 exercise books, uniform replacement, and geometry set.",
      icon: BookOpen,
    },
    {
      kes: 10000,
      usd: 80,
      title: "Full Holistic Monthly Child Care",
      desc: "Covers shelter, 3 daily meals, healthcare checkups, school tuition, and house mother care.",
      icon: Sparkles,
    },
  ];

  const currentTier = donationTiers.find((t) => t.kes === selectedCalc) || donationTiers[1];

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Measurable Outcomes · Ruiru, Kiambu County
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Our Everyday Community Impact
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Every child who enters our gate receives uncompromised dignity, daily nutrition, and the tools to chart their own self-sufficient path.
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-stone-50/80 rounded-xl p-6 border border-stone-200/90 hover:border-amber-400 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 tabular-nums">
                {metric.number}
                <span className="text-amber-700 font-sans text-2xl">{metric.suffix}</span>
              </div>
              <div className="mt-2 text-base font-semibold text-stone-900">
                {metric.label}
              </div>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Impact Calculator / Power of Giving */}
        <div className="mt-14 bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                Transparency in Action
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                See What Your Donation Accomplishes
              </h3>
              <p className="mt-2 text-stone-300 text-sm leading-relaxed">
                We maintain an ultra-lean operational overhead so that <span className="text-amber-300 font-semibold">86% of funds</span> directly support the children's daily food, education, and healthcare.
              </p>
              
              {/* Preset buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.kes}
                    onClick={() => setSelectedCalc(tier.kes)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCalc === tier.kes
                        ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-400'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    KES {tier.kes.toLocaleString()} (~${tier.usd})
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone-800/80 border border-stone-700/80 rounded-xl p-5 sm:p-6 backdrop-blur-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-700/30 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <currentTier.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-amber-300 font-medium">Selected Gift: KES {selectedCalc.toLocaleString()} (~${currentTier.usd} USD)</div>
                  <h4 className="text-lg font-serif font-bold text-white mt-0.5">
                    {currentTier.title}
                  </h4>
                  <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                    {currentTier.desc}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-stone-700 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-stone-400">
                      Payment via M-Pesa STK Push or Visa/Mastercard
                    </span>
                    <button
                      onClick={() => onSelectAmountForDonate(selectedCalc, 'KES')}
                      className="px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Give KES {selectedCalc.toLocaleString()} Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
