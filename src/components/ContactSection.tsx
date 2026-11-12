import React, { useState } from 'react';
import { ORG_DETAILS } from '../data/content';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('General Inquiry');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Reach Out to Our Caregiving Office
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Get in Touch With Watu Wa Maana
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Have a question about donating, scheduling a group visit, or partnering with our home? Reach out to our team—we would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Location Security Notice */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="font-serif font-bold text-stone-900 text-lg">
                Official Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs font-medium">Telephone & WhatsApp</div>
                    <a href={`tel:${ORG_DETAILS.phone}`} className="font-semibold text-stone-900 hover:text-amber-800 transition-colors">
                      {ORG_DETAILS.phone}
                    </a>
                    <div className="text-[11px] text-stone-500">Direct line to Executive Social Worker</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs font-medium">General Administration Email</div>
                    <a href={`mailto:${ORG_DETAILS.email}`} className="font-semibold text-stone-900 hover:text-amber-800 transition-colors">
                      {ORG_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs font-medium">Postal Mailing Address</div>
                    <div className="font-semibold text-stone-900">{ORG_DETAILS.postalAddress}</div>
                    <div className="text-[11px] text-stone-500">{ORG_DETAILS.generalLocation}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs font-medium">Administrative Office Hours</div>
                    <div className="font-semibold text-stone-900">{ORG_DETAILS.officeHours}</div>
                    <div className="text-[11px] text-stone-500">Emergency child intake: 24/7 with Children's Dept</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial Child Protection Location Security Box */}
            <div className="bg-amber-950/5 border border-amber-800/30 rounded-2xl p-5 sm:p-6 text-stone-700">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Location Security Policy
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    For the security, dignity, and privacy of our 48 resident children, exact physical gate coordinates and turn-by-turn driving directions are never published publicly. They are released only to verified donors and visitors after their appointment is officially confirmed.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif font-bold text-stone-900 text-lg pb-2 border-b border-stone-100">
                  Send a Message to Our Office
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Mutiso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. samuel@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Subject / Topic of Discussion
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600 cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Donation & M-Pesa Inquiry">Donation & M-Pesa Receipt Follow-up</option>
                    <option value="In-Kind Wish List Delivery">In-Kind Food / Supplies Drop-off</option>
                    <option value="Volunteer or Group Visit">Volunteer or Group Visit Question</option>
                    <option value="Corporate CSR & Church Partnership">Corporate CSR or Church Partnership</option>
                    <option value="Child Safeguarding Concern">Child Safeguarding Concern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your note or question here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-3 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Administrative Team</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-xl">
                  Inquiry Successfully Received
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your message regarding <em>"{subject}"</em> has been routed to our caregiving desk at Ruiru. We will respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
