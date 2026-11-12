import React, { useState } from 'react';
import { ORG_DETAILS } from '../data/content';
import { Users, Calendar, ShieldCheck, Clock, CheckCircle2, HeartHandshake, AlertCircle } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [visitorType, setVisitorType] = useState<string>('corporate');
  const [fullName, setFullName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [groupSize, setGroupSize] = useState<number>(5);
  const [proposedDate, setProposedDate] = useState<string>('');
  const [activityInterest, setActivityInterest] = useState<string>('Mentorship & Reading Tutoring');
  const [codeAccepted, setCodeAccepted] = useState<boolean>(false);
  
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codeAccepted) return;

    const ref = "VISIT-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(ref);
  };

  return (
    <section id="get-involved" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Volunteering & Community Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Visit or Volunteer With Our Family
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            We welcome corporate CSR delegations, university mentors, church groups, and skilled medical or trade volunteers to share love, skills, and encouragement with our children.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Volunteer Application Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            
            {!submittedRef ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-3 border-b border-stone-100">
                  <h3 className="font-serif font-bold text-stone-900 text-lg">
                    Schedule a Visit or Volunteer Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Please submit at least <strong>7 days prior</strong> to your requested date to allow vetting and avoid disrupting school timetables.
                  </p>
                </div>

                {/* Visitor Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    You Are Applying As
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'corporate', label: 'Corporate CSR Team' },
                      { id: 'church', label: 'Church / Community Group' },
                      { id: 'individual', label: 'Skilled Individual Mentor' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setVisitorType(type.id)}
                        className={`py-2 px-3 rounded-lg border text-center transition-colors cursor-pointer ${
                          visitorType === type.id
                            ? 'border-amber-700 bg-amber-50 font-semibold text-amber-900'
                            : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Lead Contact Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Christine Wangari"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Organization / Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Safaricom CSR / St. Marks Church"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>

                {/* Visit Logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Proposed Visit Date (7+ Days Out) *
                    </label>
                    <input
                      type="date"
                      required
                      value={proposedDate}
                      onChange={(e) => setProposedDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Estimated Group Size (Persons)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={40}
                      value={groupSize}
                      onChange={(e) => setGroupSize(parseInt(e.target.value) || 1)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Primary Activity Focus
                  </label>
                  <select
                    value={activityInterest}
                    onChange={(e) => setActivityInterest(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600 cursor-pointer"
                  >
                    <option value="Mentorship & Reading Tutoring">Academic Mentorship, Storytelling & Reading</option>
                    <option value="Cooking & Feast Sponsorship">Cooking Wholesome Lunch & Sharing Meal with Children</option>
                    <option value="Sports, Games & Athletics">Outdoor Football, Games & Music Day</option>
                    <option value="Facility Cleaning & Green Garden">Painting, Compound Clean-up & Tree Planting</option>
                    <option value="Skilled Medical/Dental Outreach">Medical/Dental Checkup (Licensed Professionals)</option>
                  </select>
                </div>

                {/* Code of Conduct Checkbox */}
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={codeAccepted}
                      onChange={(e) => setCodeAccepted(e.target.checked)}
                      className="mt-0.5 rounded border-stone-300 text-amber-800 focus:ring-amber-600 cursor-pointer"
                    />
                    <span className="text-stone-700 leading-relaxed">
                      I agree to uphold the <strong className="text-stone-900">Watu Wa Maana Child Protection Code of Conduct</strong>. I understand that unauthorized photography of children, unsupervised dorm access, and unvetted gifts are strictly prohibited.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!codeAccepted}
                  className="w-full py-3.5 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                >
                  Submit Visit Request for Vetting
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-xl">
                    Visit Request Registered
                  </h3>
                  <div className="font-mono text-sm font-semibold text-amber-800 mt-1">
                    Application Reference: {submittedRef}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our Head Social Worker David Mwangi has received your inquiry for <strong>{proposedDate || 'the requested date'}</strong>.
                </p>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs text-stone-600 space-y-1.5 max-w-md mx-auto">
                  <div className="font-semibold text-stone-800">Next Steps:</div>
                  <div>1. Our administrative office will review within 48 hours.</div>
                  <div>2. You will receive an official approval email and visitor briefing pack.</div>
                  <div>3. Exact gate directions in Ruiru will be released upon appointment clearance.</div>
                </div>

                <button
                  onClick={() => setSubmittedRef(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
                >
                  Submit Another Visit Request
                </button>
              </div>
            )}

          </div>

          {/* Visitor Guidelines Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
                <Clock className="w-4 h-4" />
                <span>Visit Hours & Routines</span>
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-lg mb-2">
                Preserving School & Rest Routines
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Our primary goal is to ensure our children maintain normal, balanced childhoods without disruptions to their school hours and sleep.
              </p>

              <div className="space-y-2.5 text-xs text-stone-700 border-t border-stone-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-800">Saturday Visits (Preferred):</span>
                  <span className="text-amber-900 font-mono">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-800">Sunday Church / Fellowship:</span>
                  <span className="text-amber-900 font-mono">1:00 PM – 4:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-800">Weekdays (School Terms):</span>
                  <span className="text-stone-500 font-mono">Administrative Only</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Corporate CSR Partnerships</span>
              </div>
              <h4 className="font-serif font-bold text-white text-lg mb-2">
                Looking for Corporate CSR Sponsorship?
              </h4>
              <p className="text-xs text-stone-200 leading-relaxed mb-4">
                We partner with banks, tech firms, manufacturers, and local enterprises to fund term tuition, solar energy, and computer lab equipment with full donor reporting.
              </p>
              <a
                href={`mailto:${ORG_DETAILS.email}?subject=Corporate%20CSR%20Partnership%20Inquiry`}
                className="inline-block px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Inquire About Corporate CSR
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
