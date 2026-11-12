import React, { useState } from 'react';
import { INITIAL_WISH_LIST, ORG_DETAILS } from '../data/content';
import { WishListItem } from '../types';
import { Package, Check, AlertCircle, Plus, MapPin, Truck, Phone, X } from 'lucide-react';

export const WishListSection: React.FC = () => {
  const [items, setItems] = useState<WishListItem[]>(INITIAL_WISH_LIST);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Pledge Modal state
  const [pledgeModalItem, setPledgeModalItem] = useState<WishListItem | null>(null);
  const [pledgeQty, setPledgeQty] = useState<number>(1);
  const [pledgeName, setPledgeName] = useState<string>('');
  const [pledgePhone, setPledgePhone] = useState<string>('');
  const [pledgeMethod, setPledgeMethod] = useState<'dropoff' | 'courier'>('dropoff');
  const [pledgeSuccess, setPledgeSuccess] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Essential Items' },
    { id: 'dry_foods', label: 'Dry Foods & Grains' },
    { id: 'school_supplies', label: 'CBC School Supplies' },
    { id: 'clothing_bedding', label: 'Clothing & Bedding' },
    { id: 'hygiene_cleaning', label: 'Hygiene & Cleaning' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((i) => i.category === selectedCategory);

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeModalItem) return;

    // Update item quantity
    setItems((prev) =>
      prev.map((item) =>
        item.id === pledgeModalItem.id
          ? { ...item, receivedQty: Math.min(item.targetQty, item.receivedQty + pledgeQty) }
          : item
      )
    );

    setPledgeSuccess(true);
    setTimeout(() => {
      setPledgeSuccess(false);
      setPledgeModalItem(null);
      setPledgeQty(1);
      setPledgeName('');
      setPledgePhone('');
    }, 2200);
  };

  return (
    <section id="wishlist" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              In-Kind Giving · Real-Time Operational Needs
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Our Current In-Kind Wish List
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              We warmly accept physical food, school stationery, clothing, and hygiene supplies from individuals, families, churches, and corporate CSR teams.
            </p>
          </div>

          <div className="bg-amber-100/70 border border-amber-300/80 rounded-xl p-4 text-xs text-amber-950 shrink-0 max-w-sm">
            <div className="font-semibold flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>Receiving Station & Delivery</span>
            </div>
            <p className="text-stone-700">
              Goods can be delivered in person to our Ruiru gate (scheduled) or sent via parcel courier. Call <span className="font-semibold">{ORG_DETAILS.phone}</span> prior to dispatch.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Wish List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const percent = Math.min(100, Math.round((item.receivedQty / item.targetQty) * 100));
            const needed = Math.max(0, item.targetQty - item.receivedQty);
            const isFull = needed === 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-200/90 p-5 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      item.priority === 'Urgent'
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : item.priority === 'High'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {item.priority} Priority
                    </span>
                    <span className="text-xs text-stone-500 font-mono">
                      {needed > 0 ? `${needed} ${item.unit} needed` : 'Goal Fulfilled'}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-base leading-snug">
                    {item.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    {item.note}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100">
                  {/* Progress bar */}
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-1.5 font-mono">
                    <span>Fulfilled: {item.receivedQty} / {item.targetQty} {item.unit}</span>
                    <span className="font-semibold text-stone-800">{percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        percent >= 100 ? 'bg-emerald-500' : 'bg-amber-600'
                      }`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setPledgeModalItem(item)}
                      disabled={isFull}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        isFull
                          ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                          : 'bg-stone-900 hover:bg-stone-800 text-white'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isFull ? 'Target Met Asante!' : 'Pledge to Donate Item'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dropoff Instructions Card */}
        <div className="mt-12 bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">Delivery & Couriers</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Send via Fargo Courier, G4S, or Easy Coach directly to Ruiru Branch addressed to Watu Wa Maana Care Office.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">In-Person Drop-Off</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Open Monday to Saturday (8:00 AM – 5:00 PM). Please call 24 hours prior so our caregivers can welcome you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">Direct Food Coordination</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  For bulk perishables (potatoes, vegetables, milk), call our House Mother directly at <span className="font-semibold">{ORG_DETAILS.phone}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pledge Item Modal */}
        {pledgeModalItem && (
          <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-700" />
                  <h3 className="font-serif font-bold text-stone-900 text-lg">Pledge In-Kind Donation</h3>
                </div>
                <button
                  onClick={() => setPledgeModalItem(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!pledgeSuccess ? (
                <form onSubmit={handlePledgeSubmit} className="mt-4 space-y-4">
                  <div>
                    <span className="text-xs text-stone-500 uppercase tracking-wider">Item Selected</span>
                    <div className="font-semibold text-stone-900 text-base">{pledgeModalItem.name}</div>
                    <div className="text-xs text-stone-500 font-mono mt-0.5">
                      Needed: {Math.max(0, pledgeModalItem.targetQty - pledgeModalItem.receivedQty)} {pledgeModalItem.unit}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Quantity You Wish to Pledge ({pledgeModalItem.unit})
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={pledgeQty}
                      onChange={(e) => setPledgeQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-amber-600 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Kamau"
                        value={pledgeName}
                        onChange={(e) => setPledgeName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-600 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="07XX XXX XXX"
                        value={pledgePhone}
                        onChange={(e) => setPledgePhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-600 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Handover Method</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPledgeMethod('dropoff')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                          pledgeMethod === 'dropoff' ? 'border-amber-700 bg-amber-50 font-semibold text-amber-900' : 'border-stone-200'
                        }`}
                      >
                        In-Person Ruiru Dropoff
                      </button>
                      <button
                        type="button"
                        onClick={() => setPledgeMethod('courier')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                          pledgeMethod === 'courier' ? 'border-amber-700 bg-amber-50 font-semibold text-amber-900' : 'border-stone-200'
                        }`}
                      >
                        Courier / Parcel Delivery
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                  >
                    Confirm My In-Kind Pledge
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-lg">Pledge Received Asante Sana!</h4>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    Thank you {pledgeName || 'dear friend'}. Our caregiving team in Ruiru has logged your pledge for {pledgeQty} {pledgeModalItem.unit} of {pledgeModalItem.name}.
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
