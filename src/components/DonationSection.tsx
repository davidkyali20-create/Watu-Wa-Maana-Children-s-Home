import React, { useState } from 'react';
import { ORG_DETAILS } from '../data/content';
import { DonationReceipt } from '../types';
import { Heart, Copy, Check, Smartphone, CreditCard, Shield, Download, FileText, ArrowRight } from 'lucide-react';

interface DonationSectionProps {
  initialProgram?: string;
  initialAmount?: number;
  onReceiptGenerated: (receipt: DonationReceipt) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  initialProgram = "General Child Welfare & Nutrition",
  initialAmount = 2500,
  onReceiptGenerated,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [currency, setCurrency] = useState<'KES' | 'USD' | 'EUR' | 'GBP'>('KES');
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  
  // M-Pesa Form
  const [mpesaPhone, setMpesaPhone] = useState<string>('0712 345 678');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [programTarget, setProgramTarget] = useState<string>(initialProgram);
  
  // Card Form
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');

  // STK simulation state
  const [stkStatus, setStkStatus] = useState<'idle' | 'sending' | 'prompted' | 'success'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const presetsKES = [1000, 2500, 5000, 10000];
  const presetsUSD = [10, 25, 50, 100];
  const activePresets = currency === 'KES' ? presetsKES : presetsUSD;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleMpesaStkPush = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mpesaPhone.trim()) return;

    setStkStatus('sending');
    setTimeout(() => {
      setStkStatus('prompted');
      setTimeout(() => {
        setStkStatus('success');
        const finalAmount = isCustom ? Number(customAmount) || 1000 : amount;
        const newReceipt: DonationReceipt = {
          transactionId: "MPESA-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
          donorName: donorName || "Kind Supporter",
          email: donorEmail || "donor@example.com",
          amount: finalAmount,
          currency: currency,
          method: "M-Pesa STK Push",
          frequency: frequency,
          program: programTarget,
          date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        };
        onReceiptGenerated(newReceipt);
      }, 3000);
    }, 1500);
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStkStatus('sending');
    setTimeout(() => {
      setStkStatus('success');
      const finalAmount = isCustom ? Number(customAmount) || 50 : amount;
      const newReceipt: DonationReceipt = {
        transactionId: "CARD-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
        donorName: donorName || "International Supporter",
        email: donorEmail || "donor@example.com",
        amount: finalAmount,
        currency: currency,
        method: "Credit / Debit Card (Secure)",
        frequency: frequency,
        program: programTarget,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      };
      onReceiptGenerated(newReceipt);
    }, 1800);
  };

  return (
    <section id="donate" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Secure Giving · Transparent Child Welfare
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Partner With Us to Change a Life
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Your financial contribution keeps our kitchen stocked, our classrooms supplied, and our family safe. Every donation receives an official tax-compliant receipt.
          </p>
        </div>

        {/* 2-Column Donation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Interactive Payment Portal */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Payment Method Switcher */}
            <div className="flex items-center gap-2 p-1 bg-stone-900 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('mpesa');
                  setCurrency('KES');
                }}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  paymentMethod === 'mpesa'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>M-Pesa (Kenya)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('card');
                  setCurrency('USD');
                }}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Credit / Debit Card / PayPal</span>
              </button>
            </div>

            {/* Frequency Toggle */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800 text-xs">
              <span className="text-stone-400 font-medium">Donation Frequency:</span>
              <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    frequency === 'one-time' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    frequency === 'monthly' ? 'bg-stone-800 text-amber-400 font-semibold' : 'text-stone-400'
                  }`}
                >
                  Monthly Sponsorship
                </button>
              </div>
            </div>

            {/* Currency Selector (if card) */}
            {paymentMethod === 'card' && (
              <div className="flex items-center justify-between gap-4 mb-5 text-xs">
                <span className="text-stone-400">Select Currency:</span>
                <div className="flex items-center gap-1">
                  {(['USD', 'EUR', 'GBP', 'KES'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        currency === curr ? 'bg-amber-700 text-white font-bold' : 'bg-stone-900 text-stone-400 hover:text-white'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Amount Presets */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                Select Donation Amount ({currency})
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {activePresets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setIsCustom(false);
                    }}
                    className={`py-2.5 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all text-center cursor-pointer ${
                      !isCustom && amount === val
                        ? 'bg-amber-600 text-white shadow-xs ring-1 ring-amber-400'
                        : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    {currency === 'KES' ? `KES ${val.toLocaleString()}` : `${currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}${val}`}
                  </button>
                ))}
              </div>

              {/* Custom amount input */}
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Or enter custom amount..."
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Target Program Allocation */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Designate Gift to Pillar
              </label>
              <select
                value={programTarget}
                onChange={(e) => setProgramTarget(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-sm rounded-lg px-3.5 py-2 focus:border-amber-500 focus:outline-hidden cursor-pointer"
              >
                <option value="General Child Welfare & Nutrition">General Child Welfare & Daily Nutrition (Highest Need)</option>
                <option value="Formal Education & Academic Tutoring">Formal School Fees, CBC Textbooks & Uniforms</option>
                <option value="Healthcare & Psychosocial Wellness">Healthcare, Pediatric Dental & Trauma Counseling</option>
                <option value="Youth Empowerment & Vocational Skills">Youth Apprenticeship & Career Transition Fund</option>
                <option value="Facility Solar & Clean Water Utilities">Solar Water Heaters & Clean Water Sanitation</option>
              </select>
            </div>

            {/* M-Pesa Interactive Form */}
            {paymentMethod === 'mpesa' && (
              <form onSubmit={handleMpesaStkPush} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Safaricom Phone Number (for M-Pesa STK Prompt)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0712 345 678 or 254712345678"
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-hidden font-mono"
                    />
                    <div className="absolute right-3 top-2.5 text-xs text-emerald-400 font-semibold">
                      Safaricom STK
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Your Full Name (for Receipt)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Wanjiku Muthoni"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Email Address (Instant PDF Receipt)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. donor@gmail.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Simulated STK Status Notification */}
                {stkStatus === 'sending' && (
                  <div className="p-3 bg-emerald-950/70 border border-emerald-800/80 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Initiating secure Safaricom M-Pesa STK push to {mpesaPhone}...</span>
                  </div>
                )}

                {stkStatus === 'prompted' && (
                  <div className="p-3.5 bg-emerald-900/60 border border-emerald-600 rounded-lg text-xs text-emerald-200 space-y-1">
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>Simulated STK Push Sent to Handset!</span>
                    </div>
                    <div>
                      Prompt: "Do you want to pay KES {(isCustom ? Number(customAmount) : amount).toLocaleString()} to WATU WA MAANA CHILDREN HOME (Paybill 522522)? Enter M-Pesa PIN."
                    </div>
                  </div>
                )}

                {stkStatus === 'success' && (
                  <div className="p-3.5 bg-emerald-900/80 border border-emerald-500 rounded-lg text-xs text-white space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                      <Check className="w-4 h-4" />
                      <span>Donation Verified! Confirmation SMS & Receipt Generated.</span>
                    </div>
                    <div className="text-stone-300">
                      Asante sana for bringing dignity and hope to our children. Your receipt is ready below.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={stkStatus === 'sending'}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>
                    Send M-Pesa Prompt · {currency} {(isCustom ? Number(customAmount) || 0 : amount).toLocaleString()}
                  </span>
                </button>
              </form>
            )}

            {/* Credit Card / International Form */}
            {paymentMethod === 'card' && (
              <form onSubmit={handleCardPayment} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Donor Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.org"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Card Number (Visa / Mastercard)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="4111 ···· ···· 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-hidden font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="12/28"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Security Code (CVC)
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      required
                      placeholder="•••"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-hidden font-mono"
                    />
                  </div>
                </div>

                {stkStatus === 'success' && (
                  <div className="p-3.5 bg-emerald-900/80 border border-emerald-500 rounded-lg text-xs text-white space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                      <Check className="w-4 h-4" />
                      <span>Card Payment Processed Successfully!</span>
                    </div>
                    <div className="text-stone-300">
                      Receipt has been generated and dispatched to {donorEmail || 'your email'}.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={stkStatus === 'sending'}
                  className="w-full py-3.5 px-4 bg-amber-600 hover:bg-amber-500 active:scale-98 text-white font-semibold rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>
                    Complete Gift · {currency} {(isCustom ? Number(customAmount) || 0 : amount).toLocaleString()} {frequency === 'monthly' ? '/ month' : ''}
                  </span>
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-stone-500">
              <Shield className="w-3.5 h-3.5 text-stone-400" />
              <span>256-bit SSL encrypted · No sensitive banking data stored · Official NGO Receipt</span>
            </div>

          </div>

          {/* Column 2: Direct Manual Paybill / Till Numbers & Accountability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct M-Pesa Instructions Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Direct Mobile Money Details
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Instant Safaricom Transfer
                </span>
              </div>

              <p className="text-xs text-stone-400 mb-5 leading-relaxed">
                If you prefer to transfer directly from your Safaricom SIM toolkit or M-Pesa App, use our official registered accounts:
              </p>

              {/* Paybill Block */}
              <div className="space-y-3">
                <div className="bg-stone-900 rounded-xl p-3.5 border border-stone-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-stone-400">Paybill (Business No.)</div>
                    <div className="text-lg font-mono font-bold text-white tracking-wider">{ORG_DETAILS.mpesa.paybillNumber}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(ORG_DETAILS.mpesa.paybillNumber, 'paybill')}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Paybill"
                  >
                    {copiedField === 'paybill' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Account Number Block */}
                <div className="bg-stone-900 rounded-xl p-3.5 border border-stone-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-stone-400">Account Number</div>
                    <div className="text-base font-mono font-bold text-amber-300">{ORG_DETAILS.mpesa.accountNumber}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(ORG_DETAILS.mpesa.accountNumber, 'account')}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Account"
                  >
                    {copiedField === 'account' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Buy Goods Till Number */}
                <div className="bg-stone-900 rounded-xl p-3.5 border border-stone-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-stone-400">Buy Goods Till Number</div>
                    <div className="text-lg font-mono font-bold text-white tracking-wider">{ORG_DETAILS.mpesa.tillNumber}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(ORG_DETAILS.mpesa.tillNumber, 'till')}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Till Number"
                  >
                    {copiedField === 'till' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-stone-400">
                Official Account Name registered under Safaricom: <span className="font-semibold text-stone-200">{ORG_DETAILS.mpesa.accountName}</span>.
              </div>
            </div>

            {/* In-Kind & Physical Donations Quick Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <FileText className="w-4 h-4" />
                <span>Prefer to Donate Food or Supplies?</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                We maintain an active live list of food staples, stationery, bedding, and school shoes for our 48 resident children.
              </p>
              <div className="mt-4">
                <a
                  href="#wishlist"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Explore Live In-Kind Wish List & Pledge Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
