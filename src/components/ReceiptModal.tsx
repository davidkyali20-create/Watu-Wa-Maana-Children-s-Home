import React from 'react';
import { DonationReceipt } from '../types';
import { ORG_DETAILS } from '../data/content';
import { CheckCircle, Printer, X, Download, ShieldCheck } from 'lucide-react';

interface ReceiptModalProps {
  receipt: DonationReceipt | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ receipt, onClose }) => {
  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-8">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle className="w-4 h-4" />
            <span>Official Electronic Charitable Receipt</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Receipt Body */}
        <div id="printable-receipt" className="mt-6 p-6 sm:p-7 bg-stone-50 rounded-xl border border-stone-200">
          
          {/* Organization Stamp & Logo */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-xl tracking-tight">
                {ORG_DETAILS.name}
              </h3>
              <div className="text-xs text-amber-800 font-medium">
                Registered Charitable Children's Institution (CCI)
              </div>
              <div className="text-[11px] font-mono text-stone-500 mt-1">
                Reg No: {ORG_DETAILS.registrationNumber} · {ORG_DETAILS.generalLocation}
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase font-semibold text-stone-400">Receipt Voucher</div>
              <div className="font-mono text-xs font-bold text-stone-900 mt-0.5">
                {receipt.transactionId}
              </div>
              <div className="text-[11px] text-stone-500 font-mono mt-0.5">{receipt.date}</div>
            </div>
          </div>

          {/* Donor & Contribution Grid */}
          <div className="py-5 grid grid-cols-2 gap-4 text-xs border-b border-stone-200">
            <div>
              <span className="text-stone-400 font-medium uppercase tracking-wider text-[10px]">Received From:</span>
              <div className="font-semibold text-stone-900 text-sm mt-0.5">{receipt.donorName}</div>
              <div className="text-stone-500 text-[11px]">{receipt.email}</div>
            </div>

            <div>
              <span className="text-stone-400 font-medium uppercase tracking-wider text-[10px]">Payment Method:</span>
              <div className="font-semibold text-stone-900 text-sm mt-0.5">{receipt.method}</div>
              <div className="text-emerald-700 text-[11px] font-semibold">Payment Status: Verified & Completed</div>
            </div>

            <div className="col-span-2 pt-2">
              <span className="text-stone-400 font-medium uppercase tracking-wider text-[10px]">Designated Pillar:</span>
              <div className="font-serif font-bold text-stone-900 text-sm mt-0.5">{receipt.program}</div>
            </div>
          </div>

          {/* Amount Box */}
          <div className="my-5 p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
              Total Amount Acknowledged
            </span>
            <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
              {receipt.currency} {receipt.amount.toLocaleString()}
            </div>
          </div>

          {/* Legal Non-profit Statement */}
          <div className="text-[10px] text-stone-500 leading-relaxed border-t border-stone-200 pt-4 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              Watu Wa Maana Children's Home certifies that this gift has been applied directly toward the care, education, and welfare of resident children under our guardianship. No goods or services of commercial value were exchanged for this charitable gift.
            </div>
          </div>

          {/* Signature Line */}
          <div className="mt-5 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between text-[11px] text-stone-600">
            <div>
              <div className="font-serif italic font-semibold text-stone-800">David Mwangi Njoroge</div>
              <div className="text-[10px] text-stone-400">Head Social Worker & Administrator</div>
            </div>
            <div className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-300 font-mono">
              OFFICIAL STAMP
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close
          </button>
          
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print or Save PDF Receipt</span>
          </button>
        </div>

      </div>
    </div>
  );
};
