import React, { useState } from 'react';
import { TEAM_MEMBERS, ORG_DETAILS } from '../data/content';
import { ShieldCheck, Heart, Users, Eye, Target, Sparkles, Award, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  const values = [
    {
      title: "Dignity (Heshima)",
      desc: "Every child carries inherent, priceless worth. We never allow poverty or past circumstances to define a child's human dignity.",
      icon: Sparkles
    },
    {
      title: "Holistic Care (Utunzaji Kamili)",
      desc: "Beyond food and shelter, we provide emotional healing, psychological therapy, spiritual warmth, and academic empowerment.",
      icon: Heart
    },
    {
      title: "Radical Transparency",
      desc: "Every donated shilling, gift, and grant is tracked under rigorous financial audits and open donor reporting.",
      icon: ShieldCheck
    },
    {
      title: "Community & Re-Integration",
      desc: "We build bonds with local schools, churches, and neighbours, preparing every child for joyful integration into wider society.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Who We Are · Founded 2018 · Ruiru, Kenya
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            The Story of Watu Wa Maana
          </h2>
          <p className="mt-4 text-stone-600 text-base leading-relaxed">
            In the Swahili language, <strong className="text-stone-900 font-serif">"Watu Wa Maana"</strong> translates directly to <em className="text-amber-900 font-serif font-semibold">"People of Importance."</em> Founded on the unwavering conviction that no orphaned or vulnerable child should ever feel cast aside, our home serves as a safe haven of warmth, structure, and renewal.
          </p>
        </div>

        {/* 2-Column Story and Mission Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              We go far beyond providing basic beds and plates of food. For children who have experienced profound trauma, family dissolution, or extreme material deprivation across Kiambu and peri-urban Nairobi communities, we provide an enduring family unit.
            </p>
            <p>
              Under the tender guidance of dedicated resident house mothers, certified social workers, and volunteer educators, each child is welcomed by name. We nurture their minds with quality primary and secondary education, heal their emotional scars through trauma-informed therapy, and equip older adolescents with hands-on trade skills so they enter adulthood self-sufficient and confident.
            </p>

            {/* Official Registration Callout Box */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 mt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      Official Republic of Kenya Accreditation
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Watu Wa Maana Children’s Home is a duly registered Charitable Children’s Institution (CCI) operating in full compliance with the Kenya Children Act (2022).
                    </p>
                    <div className="mt-2 text-xs font-mono text-stone-800 font-semibold">
                      Registration Certificate: {ORG_DETAILS.registrationNumber}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-3 py-1.5 bg-white border border-stone-300 hover:border-amber-600 text-stone-700 hover:text-amber-900 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors shadow-2xs"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-amber-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                <Target className="w-4 h-4" />
                <span>Our Sacred Mission</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                To Provide a Secure, Nurturing & Empowering Sanctuary
              </h3>
              <p className="text-stone-200 text-sm leading-relaxed">
                To provide a secure, nurturing, and empowering home for orphaned and vulnerable children through holistic care, quality education, and dedicated community reintegration.
              </p>
            </div>

            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <Eye className="w-4 h-4" />
                <span>Our Long-Term Vision</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                A Society Where Every Child Grows Up Valued
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                A resilient society where every child—regardless of their background—grows up valued, protected, educated, and equipped to reach their highest human potential.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values 4-Grid */}
        <div className="pt-10 border-t border-stone-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-6">
            Guiding Institutional Values
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                  <val.icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base">{val.title}</h4>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Caregiving Team */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Caregiver & Governance Stewardship
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Our Leadership & Care Team
            </h3>
            <p className="mt-2 text-stone-600 text-sm">
              Our team combines licensed social work credentials, early childhood development experience, and profound compassionate dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-amber-800/10 text-amber-900 font-serif font-bold text-lg flex items-center justify-center mb-3 border border-amber-800/20">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || 'M'}
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">{member.name}</h4>
                  <div className="text-xs font-semibold text-amber-800 mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">{member.qualification}</div>
                  <p className="text-xs text-stone-600 mt-3 leading-relaxed">{member.bio}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  <span className="font-semibold text-stone-700">Area of focus:</span> {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Registration Certificate Modal */}
        {showCertModal && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-300">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-800" />
                  <h4 className="font-serif font-bold text-stone-900 text-base">Certificate of Registration Preview</h4>
                </div>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 p-6 bg-amber-50/50 rounded-xl border border-amber-200/80 text-center space-y-3">
                <div className="text-xs uppercase font-serif tracking-widest text-amber-900 font-bold">
                  Republic of Kenya · Ministry of Labour and Social Protection
                </div>
                <div className="text-xs text-stone-600">Department of Children's Services</div>
                
                <div className="py-3 border-y border-amber-300/60 my-2">
                  <div className="text-xs text-stone-500 uppercase tracking-wider">Charitable Children's Institution</div>
                  <div className="font-serif font-bold text-stone-900 text-lg mt-0.5">
                    WATU WA MAANA CHILDREN'S HOME
                  </div>
                  <div className="text-sm font-mono text-amber-900 font-semibold mt-1">
                    Registration No: {ORG_DETAILS.registrationNumber}
                  </div>
                </div>

                <div className="text-xs text-stone-600 text-left space-y-1">
                  <div><strong>County:</strong> Kiambu County</div>
                  <div><strong>Sub-County:</strong> Ruiru Sub-County</div>
                  <div><strong>Mandate:</strong> Full Residential Child Care & Protection</div>
                  <div><strong>Annual Inspection:</strong> Passed 2025/2026 Comprehensive Child Welfare Audit</div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end gap-2">
                <button
                  onClick={() => setShowCertModal(false)}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 cursor-pointer"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
