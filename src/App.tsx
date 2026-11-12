/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactCounters } from './components/ImpactCounters';
import { ProgramsSection } from './components/ProgramsSection';
import { DonationSection } from './components/DonationSection';
import { WishListSection } from './components/WishListSection';
import { AboutSection } from './components/AboutSection';
import { SafeguardingSection } from './components/SafeguardingSection';
import { ImpactTransparency } from './components/ImpactTransparency';
import { VolunteerSection } from './components/VolunteerSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReceiptModal } from './components/ReceiptModal';
import { BudgetGuideModal } from './components/BudgetGuideModal';
import { DonationReceipt } from './types';

export default function App() {
  const [activeReceipt, setActiveReceipt] = useState<DonationReceipt | null>(null);
  const [budgetGuideOpen, setBudgetGuideOpen] = useState<boolean>(false);
  const [targetProgramForDonation, setTargetProgramForDonation] = useState<string>("General Child Welfare & Nutrition");
  const [preselectedAmount, setPreselectedAmount] = useState<number>(2500);

  const handleOpenDonate = () => {
    const el = document.getElementById('donate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSponsorProgram = (programName: string) => {
    setTargetProgramForDonation(programName);
    handleOpenDonate();
  };

  const handleSelectAmountForDonate = (amount: number, _currency: string) => {
    setPreselectedAmount(amount);
    handleOpenDonate();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950 flex flex-col">
      {/* Top Header with 3-Zone Contract */}
      <Header
        onOpenDonate={handleOpenDonate}
        activeSection="home"
      />

      <main className="flex-1">
        {/* 1. Hero Banner */}
        <Hero
          onOpenDonate={handleOpenDonate}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* 2. Impact Highlights & Interactive Donation Power */}
        <ImpactCounters
          onSelectAmountForDonate={handleSelectAmountForDonate}
        />

        {/* 3. Our Programs (4 Pillars of Holistic Care) */}
        <ProgramsSection
          onSponsorProgram={handleSponsorProgram}
        />

        {/* 4. Financial Giving & M-Pesa / Card Portal */}
        <DonationSection
          initialProgram={targetProgramForDonation}
          initialAmount={preselectedAmount}
          onReceiptGenerated={(receipt) => setActiveReceipt(receipt)}
        />

        {/* 5. Live In-Kind Wish List */}
        <WishListSection />

        {/* 6. About Us, Founding Story, Mission & Leadership */}
        <AboutSection />

        {/* 7. Child Safeguarding & Privacy Policy */}
        <SafeguardingSection />

        {/* 8. Impact & Transparency (86% Child Care Ratio & Audits) */}
        <ImpactTransparency />

        {/* 9. Volunteer & Group Visits Application */}
        <VolunteerSection />

        {/* 10. News, Milestones & Celebrations */}
        <NewsSection />

        {/* 11. Contact Us & Location Security */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={handleOpenDonate}
        onOpenBudgetGuide={() => setBudgetGuideOpen(true)}
      />

      {/* Official Charitable Receipt Modal */}
      <ReceiptModal
        receipt={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      {/* Estimated Website Budget & Kenyan Non-profit Guide */}
      <BudgetGuideModal
        isOpen={budgetGuideOpen}
        onClose={() => setBudgetGuideOpen(false)}
      />
    </div>
  );
}
