import React from 'react';
import { WEBSITE_BUDGET_GUIDE } from '../data/content';
import { X, DollarSign, Globe, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface BudgetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BudgetGuideModal: React.FC<BudgetGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Institutional Planning & Technical Guide
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
              Estimated Website Budget & Nonprofit Setup in Kenya
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-6 text-xs sm:text-sm text-stone-600">
          <p className="leading-relaxed">
            Costs in Kenya vary depending on whether you engage a freelance developer or agency. Below is the realistic market budget breakdown for launching and hosting <strong className="text-stone-900">watuwamaana.or.ke</strong>:
          </p>

          {/* Table */}
          <div className="overflow-x-auto border border-stone-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100/80 text-stone-700 border-b border-stone-200">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Expense Item</th>
                  <th className="py-2.5 px-3 font-semibold">Estimated Cost (KES)</th>
                  <th className="py-2.5 px-3 font-semibold">Billing Cycle & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {WEBSITE_BUDGET_GUIDE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50">
                    <td className="py-2.5 px-3 font-medium text-stone-900">{row.item}</td>
                    <td className="py-2.5 px-3 font-mono font-semibold text-amber-900 whitespace-nowrap">{row.costKes}</td>
                    <td className="py-2.5 px-3 text-[11px] text-stone-500">{row.notes}</td>
                  </tr>
                ))}
                <tr className="bg-amber-50/70 font-semibold text-stone-900">
                  <td className="py-3 px-3 font-serif">Estimated Total Initial Cost</td>
                  <td className="py-3 px-3 font-mono text-base text-amber-900">KES 46,000 – 114,500</td>
                  <td className="py-3 px-3 text-[11px] text-amber-950 font-normal">Covers complete build, launch & 1 full year of hosting & domain</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Non-Profit Programs in Kenya */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Free Tech Grants for Registered Kenyan Non-Profits</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Once officially registered as a Charitable Children’s Institution (CCI) or NGO in Kenya, Watu Wa Maana is eligible for:
            </p>
            <ul className="space-y-1.5 text-xs text-stone-700 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Google for Nonprofits:</strong> Free Google Workspace accounts for staff (e.g., <code>info@watuwamaana.or.ke</code>) and $10,000/month in Google Ad Grants to help local and international donors discover the home.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Paystack / Flutterwave Charity Tiers:</strong> Streamlined NGO onboarding with reduced transaction rates for M-Pesa STK push and international Visa/Mastercard processing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>KeNIC .or.ke Domain:</strong> Designated specifically for Kenyan non-profit societies, enhancing trust and authenticity.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
