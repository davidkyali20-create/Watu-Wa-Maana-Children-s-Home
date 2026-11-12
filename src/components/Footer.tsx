import React from 'react';
import { ORG_DETAILS } from '../data/content';
import { Heart, ShieldCheck, Mail, Phone, MapPin, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenBudgetGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate, onOpenBudgetGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Watu Wa Maana
              </span>
              <div className="text-xs text-amber-400 font-medium tracking-wider uppercase mt-1">
                "People of Importance" Children's Home
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Founded on the belief that no child should ever feel forgotten. Providing residential shelter, 100% school enrollment, healthcare, and life skills for 48 vulnerable children in Ruiru, Kiambu County, Kenya.
            </p>

            <div className="pt-2 text-stone-400 text-[11px] space-y-1">
              <div><strong>Registration:</strong> {ORG_DETAILS.registrationNumber} (CCI)</div>
              <div><strong>Regulator:</strong> Department of Children Services, Kenya</div>
            </div>
          </div>

          {/* Core Programs Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Our 4 Pillars of Care
            </div>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">Residential Care & Wholesome Nutrition</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">Formal Education & Evening Tutoring</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">Healthcare & Psychosocial Wellness</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">Youth Empowerment & Life Skills</a></li>
              <li><a href="#transparency" className="hover:text-amber-400 transition-colors">86% Child Care Ratio & Financial Audits</a></li>
            </ul>
          </div>

          {/* Quick Nav & Ways to Help */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Get Involved
            </div>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={onOpenDonate} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  M-Pesa & Card Giving
                </button>
              </li>
              <li><a href="#wishlist" className="hover:text-amber-400 transition-colors">Live In-Kind Wish List</a></li>
              <li><a href="#get-involved" className="hover:text-amber-400 transition-colors">Volunteer & Group Visits</a></li>
              <li><a href="#safeguarding" className="hover:text-amber-400 transition-colors">Child Safeguarding Code</a></li>
              <li>
                <button onClick={onOpenBudgetGuide} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 cursor-pointer">
                  <FileText className="w-3 h-3 text-amber-500" />
                  <span>Web Budget & NGO Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support & M-Pesa Quick Reference */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Official M-Pesa Channels
            </div>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-3.5 space-y-1.5 font-mono text-[11px]">
              <div className="text-stone-400">Paybill: <span className="text-white font-bold">{ORG_DETAILS.mpesa.paybillNumber}</span></div>
              <div className="text-stone-400">Account: <span className="text-amber-400 font-bold">{ORG_DETAILS.mpesa.accountNumber}</span></div>
              <div className="text-stone-400">Till Number: <span className="text-white font-bold">{ORG_DETAILS.mpesa.tillNumber}</span></div>
            </div>
            <p className="text-[11px] text-stone-500">
              Direct inquiries: <a href={`mailto:${ORG_DETAILS.email}`} className="text-stone-300 hover:text-white underline">{ORG_DETAILS.email}</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Privacy Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Watu Wa Maana Children’s Home. All rights reserved. Registered Charitable Children's Institution (Kenya).
          </div>

          <div className="flex items-center gap-4">
            <a href="#safeguarding" className="hover:text-stone-300 transition-colors">
              Child Protection Policy
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-stone-300 transition-colors">
              Location Privacy Notice
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-stone-200 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
