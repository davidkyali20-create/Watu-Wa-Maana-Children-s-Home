import React, { useState } from 'react';
import { NEWS_UPDATES } from '../data/content';
import { NewsArticle } from '../types';
import { Calendar, Tag, ArrowRight, X, Newspaper } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="news" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Life at Watu Wa Maana · News & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Community News & Updates
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Explore the latest academic triumphs, facility upgrades, and family events taking place at our home in Ruiru.
            </p>
          </div>
          
          <div className="text-xs text-stone-500 font-mono">
            Updated November 2026
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_UPDATES.map((article) => (
            <article
              key={article.id}
              className="bg-stone-50/60 rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:border-amber-400 transition-all shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-amber-800 uppercase tracking-wider">{article.category}</span>
                  <span className="font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span>{article.date}</span>
                  </span>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug group-hover:text-amber-900 transition-colors">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded">
                  #{article.tag}
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-stone-200">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-amber-800" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    {selectedArticle.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <div className="text-xs text-stone-500 font-mono mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-xl leading-tight">
                  {selectedArticle.title}
                </h3>
                <div className="mt-4 text-sm text-stone-700 leading-relaxed space-y-3">
                  <p>{selectedArticle.summary}</p>
                  <p className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 text-stone-800">
                    {selectedArticle.fullText}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400">Published by Watu Wa Maana Care Office</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
