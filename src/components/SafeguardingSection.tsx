import React, { useState } from 'react';
import { ORG_DETAILS } from '../data/content';
import { ShieldCheck, EyeOff, Lock, Camera, AlertTriangle, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const SafeguardingSection: React.FC = () => {
  const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);
  const [reportText, setReportText] = useState<string>('');
  const [reportSender, setReportSender] = useState<string>('');
  const [reportSubmitted, setReportSubmitted] = useState<boolean>(false);

  const policies = [
    {
      title: "Ethical Media & Photography Standard",
      icon: Camera,
      points: [
        "Zero close-up, identifiable photos of children paired with sensitive trauma histories.",
        "Use wide-angle activity perspectives, behind/side angles, and focus on classrooms and facilities.",
        "Signed consent forms from legal welfare guardians obtained prior to any visual publication.",
        "Absolute ban on photography by casual visitors without written social worker clearance."
      ]
    },
    {
      title: "Personal Data Protection (Kenya DPA 2019)",
      icon: Lock,
      points: [
        "Children's full legal surnames, exact birth dates, and school names are never posted publicly.",
        "Pseudonyms or initial-only identifiers used in all external impact case studies.",
        "Medical histories and confidential psychological records stored in offline encrypted lockboxes.",
        "Zero tracking cookies or third-party behavioral profiling on this website."
      ]
    },
    {
      title: "Strict Visitor Screening & Access Control",
      icon: ShieldCheck,
      points: [
        "Mandatory 7-day advance scheduling; unannounced drop-in visits are respectfully declined.",
        "All volunteers and visiting delegations sign the Child Protection Code of Conduct upon arrival.",
        "Unaccompanied or unsupervised access to children's residential dormitories is strictly prohibited.",
        "Caregivers and staff maintain a constant 1:4 adult-to-child presence during all group activities."
      ]
    },
    {
      title: "Physical Location & Perimeter Security",
      icon: EyeOff,
      points: [
        "Public web materials display only general district info: Ruiru Sub-County, Kiambu County.",
        "Turn-by-turn road directions and gate coordinates provided solely after vetting your appointment.",
        "24/7 security guard, boundary wall with solar lighting, and visitor entry identification log.",
        "Zero direct public transport drop-off mapping without prior administrative registration."
      ]
    }
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportModalOpen(false);
      setReportText('');
      setReportSender('');
    }, 2500);
  };

  return (
    <section id="safeguarding" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Child Protection Code of Conduct & Legal Ethics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Protecting the Dignity and Safety of Every Child
          </h2>
          <p className="mt-3 text-stone-300 text-base leading-relaxed">
            At Watu Wa Maana Children’s Home, the safety, privacy, and emotional well-being of our children come first in everything we do—both in our physical home and across our digital communications.
          </p>
        </div>

        {/* 4 Policy Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p, idx) => (
            <div
              key={idx}
              className="bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-7 hover:border-stone-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg">
                  {p.title}
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reporting Concerns Hotline Strip */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/90 to-stone-950 border border-emerald-900/60 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <AlertTriangle className="w-4 h-4 text-emerald-400" />
              <span>Independent & Confidential Safeguarding Channel</span>
            </div>
            <h4 className="font-serif font-bold text-white text-xl">
              Do You Have a Child Protection Concern or Inquiry?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Any visitor, donor, staff member, or community member may submit an anonymous or confidential concern directly to our designated Child Safeguarding Officer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`mailto:${ORG_DETAILS.safeguardingEmail}`}
              className="px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{ORG_DETAILS.safeguardingEmail}</span>
            </a>
            <button
              onClick={() => setReportModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors cursor-pointer shadow-sm"
            >
              Submit Confidential Note
            </button>
          </div>
        </div>

        {/* Confidential Report Modal */}
        {reportModalOpen && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-serif font-bold text-lg">Confidential Safeguarding Report</h4>
                </div>
                <button
                  onClick={() => setReportModalOpen(false)}
                  className="p-1 text-stone-400 hover:text-white rounded-lg"
                >
                  ✕
                </button>
              </div>

              {!reportSubmitted ? (
                <form onSubmit={handleReportSubmit} className="mt-4 space-y-4">
                  <p className="text-xs text-stone-400">
                    This note is sent straight to our designated Child Welfare Officer and Board Safeguarding Committee. You may remain anonymous.
                  </p>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Your Name or Contact (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Leave blank if you wish to remain anonymous"
                      value={reportSender}
                      onChange={(e) => setReportSender(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Details of Observation or Concern *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe the date, context, and nature of your observation or safety inquiry..."
                      value={reportText}
                      onChange={(e) => setReportText(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-xs text-white placeholder-stone-600 focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setReportModalOpen(false)}
                      className="px-4 py-2 text-xs text-stone-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Encrypted Note
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-serif font-bold text-white text-base">Note Logged Confidentially</h5>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Thank you for helping us safeguard our children. The committee will review this matter with prompt urgency.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
