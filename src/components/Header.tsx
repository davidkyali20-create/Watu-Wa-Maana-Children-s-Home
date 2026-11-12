import React, { useState } from 'react';
import { Menu, X, Heart, ShieldAlert, PhoneCall } from 'lucide-react';
import { ORG_DETAILS } from '../data/content';

interface HeaderProps {
  onOpenDonate: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Impact & Transparency", href: "#transparency" },
    { name: "Safeguarding", href: "#safeguarding" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice: Child Safeguarding & Legal Accreditation */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-amber-400 shrink-0">Official Registered CCI</span>
            <span className="text-stone-400">·</span>
            <span className="truncate text-stone-300">Reg. No: {ORG_DETAILS.registrationNumber} ({ORG_DETAILS.generalLocation})</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-stone-300 shrink-0">
            <a href="tel:+254712345678" className="hover:text-white transition-colors flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{ORG_DETAILS.phone}</span>
            </a>
            <span>·</span>
            <a href="#safeguarding" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-xs">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              <span>Safeguarding Standards</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex flex-col text-left group shrink-0">
            <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight leading-none group-hover:text-amber-800 transition-colors">
              Watu Wa Maana
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-stone-500 mt-1">
              Children's Home · Kenya
            </span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-amber-600/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDonate}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>Donate Now</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider px-3 pb-2 border-b border-stone-100">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:bg-amber-50 hover:text-amber-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart className="w-4 h-4" />
                <span>Give via M-Pesa or Card</span>
              </button>
              <div className="text-center text-xs text-stone-500 pt-1">
                Direct M-Pesa Paybill: <span className="font-mono font-semibold text-stone-800">{ORG_DETAILS.mpesa.paybillNumber}</span> · Acc: <span className="font-mono font-semibold text-stone-800">{ORG_DETAILS.mpesa.accountNumber}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
