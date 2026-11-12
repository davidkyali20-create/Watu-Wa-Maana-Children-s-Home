import React, { useState } from 'react';
import { FINANCIAL_ALLOCATION, SUCCESS_STORIES, ORG_DETAILS } from '../data/content';
import { FileText, Download, CheckCircle, PieChart, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export const ImpactTransparency: React.FC = () => {
  const [downloadModalDoc, setDownloadModalDoc] = useState<string | null>(null);

  const reports = [
    {
      title: "2025 Annual Impact & Financial Statement",
      period: "January 2025 – December 2025",
      filesize: "2.4 MB · Audited PDF",
      summary: "Comprehensive breakdown of the 48 resident children, CBC school transition metrics, food inventory accounts, and balance sheet verified by certified auditors."
    },
    {
      title: "2024 Independent Child Welfare & Financial Audit",
      period: "January 2024 – December 2024",
      filesize: "1.8 MB · Audited PDF",
      summary: "Unqualified audit opinion issued under Kenya Accounting Standards demonstrating 86.4% direct child welfare expenditure allocation."
    },
    {
      title: "Official Government Registration Certificate (CCI)",
      period: "Renewed & Active · Reg. CCI/REG/2019/0482",
      filesize: "850 KB · Official PDF",
      summary: "Official Gazette registration instrument from the Department of Children Services, Ministry of Labour & Social Protection."
    }
  ];

  const handleSimulateDownload = (docTitle: string) => {
    setDownloadModalDoc(docTitle);
  };

  return (
    <section id="transparency" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Stewardship & Governance · Audited Records
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Accountability You Can Trust
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            We treat every single shilling donated to Watu Wa Maana Children’s Home as a sacred trust. We are committed to full financial transparency, ethical stewardship, and measurable long-term impact.
          </p>
        </div>

        {/* Financial Allocation Visual Breakdown */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 lg:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Expenditure Allocation (2025 Audited Budget)
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Where Your Contribution Goes
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>86% Direct Child Welfare Ratio</span>
            </div>
          </div>

          {/* Allocation Bar */}
          <div className="w-full h-4 rounded-full overflow-hidden flex mb-8 shadow-xs">
            {FINANCIAL_ALLOCATION.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                className="h-full transition-all hover:opacity-90"
                title={`${item.category}: ${item.percentage}%`}
              ></div>
            ))}
          </div>

          {/* Breakdown Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINANCIAL_ALLOCATION.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: item.color }}
                ></span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif font-bold text-stone-900 text-lg tabular-nums">
                      {item.percentage}%
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Annual Reports Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Public Documentation
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Annual Reports, Audits & Official Accreditations
            </h3>
            <p className="mt-2 text-stone-600 text-sm">
              We publish complete annual audited accounts and program evaluation assessments for our individual donors, foundations, and government inspectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400 transition-colors shadow-2xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-stone-500 mb-1">{doc.period}</div>
                  <h4 className="font-serif font-bold text-stone-900 text-base leading-snug">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                    {doc.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400">{doc.filesize}</span>
                  <button
                    onClick={() => handleSimulateDownload(doc.title)}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anonymized Dignified Success Stories */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Dignified Human Transformation
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Stories of Resilience & Hope
            </h3>
            <p className="mt-2 text-stone-600 text-sm">
              In accordance with our Child Safeguarding Standards, names are anonymized to honor their privacy and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-stone-50 rounded-2xl border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                    <span className="font-semibold text-amber-800">{story.field}</span>
                    <span className="font-mono">{story.timeline}</span>
                  </div>

                  <h4 className="font-serif font-bold text-stone-900 text-lg">
                    {story.pseudonym}
                  </h4>
                  <div className="text-xs font-medium text-stone-600 mt-0.5">
                    {story.currentStage}
                  </div>

                  <blockquote className="mt-4 text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed border-l-2 border-amber-600 pl-3">
                    "{story.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-600 leading-relaxed">
                  {story.narrative}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Document Download Modal */}
        {downloadModalDoc && (
          <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-lg">Official Document Prepared</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                You have accessed: <strong className="text-stone-900">{downloadModalDoc}</strong>.
                This report is verified under registration <span className="font-mono font-semibold">{ORG_DETAILS.registrationNumber}</span>.
              </p>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-[11px] text-stone-500 text-left space-y-1">
                <div>✓ Certified Independent Auditor Review</div>
                <div>✓ Detailed Expenditure Breakdown by Program</div>
                <div>✓ Child Safeguarding Compliance Audit Certification</div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setDownloadModalDoc(null)}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Close Document Viewer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
