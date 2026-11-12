import { Program, WishListItem, TeamMember, NewsArticle, SuccessStory } from '../types';

export const ORG_DETAILS = {
  name: "Watu Wa Maana Children's Home",
  swahiliMeaning: "People of Importance",
  motto: "Every Child Deserves to Know They Are Important",
  registrationNumber: "CCI/REG/2019/0482",
  regulatoryBody: "Department of Children Services, Ministry of Labour and Social Protection, Republic of Kenya",
  generalLocation: "Ruiru Sub-County, Kiambu County, Kenya",
  postalAddress: "P.O. Box 482 - 00232, Ruiru, Kenya",
  phone: "+254 712 345 678",
  whatsapp: "+254 712 345 678",
  email: "info@watuwamaana.or.ke",
  safeguardingEmail: "safeguarding@watuwamaana.or.ke",
  safeguardingPhone: "+254 701 999 888",
  officeHours: "Monday – Saturday: 8:00 AM – 5:00 PM EAT",
  mpesa: {
    paybillNumber: "522522",
    accountNumber: "1289456#DONATION",
    tillNumber: "7845129",
    accountName: "WATU WA MAANA CHILDREN HOME",
  },
  images: {
    hero: "/src/assets/images/hero_children_home_1794506925357.jpg",
    education: "/src/assets/images/education_library_study_1794506925835.jpg",
    dining: "/src/assets/images/nutritious_dining_hall_1794506927191.jpg",
    vocational: "/src/assets/images/vocational_skills_mentorship_1794506927406.jpg",
  }
};

export const IMPACT_METRICS = [
  {
    number: "48",
    suffix: "+",
    label: "Children in Residential Care",
    subtext: "Provided with clean shelter, loving house parents, and 24/7 physical protection.",
  },
  {
    number: "4,320",
    suffix: "+",
    label: "Balanced Meals Monthly",
    subtext: "3 hot nutritious meals daily supplemented by fresh vegetables from our on-site garden.",
  },
  {
    number: "100",
    suffix: "%",
    label: "School Enrollment Rate",
    subtext: "Every school-age child attends accredited local primary, secondary, or special need schools.",
  },
  {
    number: "12",
    suffix: " Alumni",
    label: "In Higher & Vocational Studies",
    subtext: "Young adults enrolled in universities, technical polytechnics, and trade apprenticeships.",
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "residential-care",
    title: "Residential Care & Wholesome Nutrition",
    category: "Pillar 01 · Basic Human Rights",
    tagline: "A safe, clean, and affectionate family home under dedicated house parents.",
    description: "Raising a child starts with security and warmth. We provide spacious, sanitized dormitories partitioned for age and gender dignity, continuous warm water, clean clothing, and structured daily routines. Our kitchen team crafts three balanced meals every single day to overcome malnutrition and ensure healthy physical growth.",
    bullets: [
      "Three hot, balanced meals daily plus mid-day porridge for younger children",
      "Dedicated resident house mothers providing emotional warmth and 24/7 care",
      "Safe, secure fenced compound with solar security and evening study spaces",
      "Personal hygiene supplies, sanitized bedding, and clean clothing care"
    ],
    metrics: "48 resident children · 4,320+ meals monthly",
    image: ORG_DETAILS.images.dining,
    imageAlt: "Clean dining hall and kitchen garden at Watu Wa Maana in Kenya"
  },
  {
    id: "education-tutoring",
    title: "Formal Education & Academic Tutoring",
    category: "Pillar 02 · Breaking the Cycle of Poverty",
    tagline: "Unlocking human potential through 100% formal schooling and evening mentoring.",
    description: "Education is the cornerstone of lifelong self-reliance. We cover school fees, government-approved uniforms, textbooks, mathematical sets, and stationery for every child attending local primary and secondary schools in Kiambu. In the evenings, volunteer teachers and social workers guide supervised prep and tutoring sessions.",
    bullets: [
      "100% enrollment in accredited Kiambu primary and secondary schools",
      "Full provision of CBC curriculum textbooks, stationery, and backpacks",
      "Dedicated on-site library and quiet evening study rooms with solar power",
      "Individualized tutoring and remedial academic support for slower learners"
    ],
    metrics: "34 primary pupils · 14 high school students",
    image: ORG_DETAILS.images.education,
    imageAlt: "Children studying with books in the classroom library"
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare & Psychosocial Wellness",
    category: "Pillar 03 · Healing Hearts & Minds",
    tagline: "Routine preventive medicine, pediatric dentistry, and trauma-informed counseling.",
    description: "Many children arrive with untreated illnesses, dental cavities, or deep emotional trauma from abandonment. Our volunteer medical officer conducts quarterly physical examinations, pediatric immunizations, and prompt dispensary treatment. In tandem, our certified social worker provides compassionate trauma counseling and art therapy.",
    bullets: [
      "Comprehensive medical intake and routine quarterly health & dental checkups",
      "Prompt outpatient treatment and hospital accompaniment for any acute illness",
      "Trauma-informed one-on-one counseling and restorative group circle therapy",
      "Physical wellness through football, athletics, music, and weekend outdoor play"
    ],
    metrics: "100% immunization coverage · Weekly counseling circles",
    image: ORG_DETAILS.images.hero,
    imageAlt: "Healthy children walking together across the sunny courtyard"
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment & Life Skills",
    category: "Pillar 04 · Transition to Independence",
    tagline: "Preparing teens and young adults to step out into society confident and self-sufficient.",
    description: "Turning 18 should never mean falling off an institutional cliff. Our transition program equips adolescents with financial literacy, practical vocational skills (carpentry, tailoring, culinary arts, basic ICT), driver training, and personal career mentorship to ensure smooth transition into independent adulthood.",
    bullets: [
      "Vocational apprenticeships in carpentry, tailoring, electronics, and catering",
      "Digital literacy lab with basic computing, typing, and digital safety training",
      "Personal banking, budgeting, and savings mentorship for older teens",
      "Transition housing stipends and mentorship during first year of tertiary study"
    ],
    metrics: "12 young adults in tertiary/trades · 100% transition success",
    image: ORG_DETAILS.images.vocational,
    imageAlt: "Youth learning practical woodwork and craftsmanship with an artisan mentor"
  }
];

export const INITIAL_WISH_LIST: WishListItem[] = [
  {
    id: "w1",
    name: "Maize Flour (Grade 1 Unga)",
    category: "dry_foods",
    targetQty: 30,
    receivedQty: 18,
    unit: "Bags (25kg)",
    priority: "Urgent",
    note: "Primary staple for daily ugali and nutritious lunch/dinner meals."
  },
  {
    id: "w2",
    name: "Pishori Rice (Grade A)",
    category: "dry_foods",
    targetQty: 25,
    receivedQty: 14,
    unit: "Bags (25kg)",
    priority: "High",
    note: "Essential weekly dinner staple served alongside fresh beans and stew."
  },
  {
    id: "w3",
    name: "Green Grams (Ndengu) & Dry Beans",
    category: "dry_foods",
    targetQty: 20,
    receivedQty: 9,
    unit: "Sacks (50kg)",
    priority: "Urgent",
    note: "Vital plant protein source rich in iron for growing children."
  },
  {
    id: "w4",
    name: "Cooking Vegetable Oil",
    category: "dry_foods",
    targetQty: 15,
    receivedQty: 6,
    unit: "Jerricans (20L)",
    priority: "High",
    note: "Needed for daily kitchen food preparation across all 3 meals."
  },
  {
    id: "w5",
    name: "Primary & Junior Secondary Exercise Books",
    category: "school_supplies",
    targetQty: 300,
    receivedQty: 195,
    unit: "Dozen (200 pgs)",
    priority: "Urgent",
    note: "Required for CBC curriculum homework, class notes, and weekly assignments."
  },
  {
    id: "w6",
    name: "Mathematical Sets & Scientific Calculators",
    category: "school_supplies",
    targetQty: 48,
    receivedQty: 26,
    unit: "Sets",
    priority: "High",
    note: "For upper primary and secondary students doing mathematics and science."
  },
  {
    id: "w7",
    name: "Black Leather School Shoes (Sizes 30 - 42)",
    category: "clothing_bedding",
    targetQty: 48,
    receivedQty: 22,
    unit: "Pairs",
    priority: "Urgent",
    note: "Sturdy Bata-style formal shoes required for daily school uniform compliance."
  },
  {
    id: "w8",
    name: "Heavy Winter Blankets & Bed Sheets",
    category: "clothing_bedding",
    targetQty: 35,
    receivedQty: 20,
    unit: "Sets",
    priority: "High",
    note: "Warm fleece blankets for cool Kiambu evenings and chilly seasons."
  },
  {
    id: "w9",
    name: "Bathing Soap & Multi-Purpose Detergent",
    category: "hygiene_cleaning",
    targetQty: 40,
    receivedQty: 25,
    unit: "Cartons",
    priority: "High",
    note: "Daily personal hygiene, handwashing stations, and laundry sanitation."
  },
  {
    id: "w10",
    name: "Sanitary Towels (Pads) for Adolescent Girls",
    category: "hygiene_cleaning",
    targetQty: 60,
    receivedQty: 38,
    unit: "Bales (Cartons)",
    priority: "Urgent",
    note: "Ensures our adolescent schoolgirls maintain dignity and never miss school."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Grace Wanjiku Karanja",
    role: "Founder & Executive Director",
    qualification: "B.A. Community Development, Egerton University",
    bio: "Over 16 years leading community child welfare initiatives in Kenya. Founded Watu Wa Maana in 2018 driven by the deep conviction that every orphaned child is a person of vital importance.",
    focus: "Institutional governance, government liaison, and child rights advocacy"
  },
  {
    name: "David Mwangi Njoroge",
    role: "Head Social Worker & Safeguarding Lead",
    qualification: "Higher Dip. Medical Social Work, KMTC",
    bio: "Dedicated child protection specialist with specialized training in trauma counseling, child case management, and family tracing protocols under the Kenya Children Act.",
    focus: "Child protection protocols, psychosocial healing, and school liaison"
  },
  {
    name: "Mama Mary Adhiambo",
    role: "Head Resident House Mother",
    qualification: "Certified Caregiver & Early Childhood Development",
    bio: "The warm heart of the residential home. Mama Mary oversees daily meals, dorm hygiene, bedtime stories, and creates a true family embrace where every child feels loved.",
    focus: "Daily domestic care, balanced nutrition, and emotional nurture"
  },
  {
    name: "Patrick Otieno",
    role: "Education Coordinator & Youth Mentor",
    qualification: "B.Ed. Science, Kenyatta University",
    bio: "Coordinates formal school admissions, tracks termly academic report cards, runs evening prep, and leads vocational mentorship partnerships with local polytechnics.",
    focus: "Academic performance, CBC curriculum support, and vocational skills"
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    pseudonym: "Faith K.",
    currentStage: "2nd Year B.Sc. Agricultural Engineering",
    timeline: "Joined age 7 · Now age 20",
    quote: "When I arrived, I was timid and convinced my life had stopped. Watu Wa Maana gave me sisters, brothers, textbooks, and the belief that my dreams mattered. Today I am designing drip irrigation systems.",
    narrative: "Rescued from extreme vulnerability in peri-urban Kiambu, Faith completed primary school with 382 marks, excelled at high school, and earned a government merit university scholarship.",
    field: "Higher Education & Engineering"
  },
  {
    id: "story-2",
    pseudonym: "Joseph M.",
    currentStage: "Certified Automotive Technician & Small Business Owner",
    timeline: "Joined age 11 · Graduated age 19",
    quote: "Watu Wa Maana didn't just feed me; they apprenticed me with master mechanics in Thika. Today I run my own repair bay and employ two younger apprentices.",
    narrative: "Through the Youth Empowerment Pillar, Joseph completed his NITA Grade 1 Automotive Certification. He now returns on weekends to mentor younger boys in the home.",
    field: "Vocational Entrepreneurship"
  },
  {
    id: "story-3",
    pseudonym: "Amina & Sarah (Siblings)",
    currentStage: "Junior Secondary School (Grades 7 & 8)",
    timeline: "Joined 4 years ago",
    quote: "We used to sleep hungry on cold sacks. Now we have warm beds, clean uniforms, and our teachers say we are in the top five in mathematics.",
    narrative: "Reunited and sheltered together after losing both parents, the sisters are thriving academically with consistent A-grade performance and active participation in music and debate.",
    field: "Academic Excellence"
  }
];

export const NEWS_UPDATES: NewsArticle[] = [
  {
    id: "n1",
    title: "Term 3 Academic Excellence: 100% Transition to Junior Secondary",
    date: "November 2, 2026",
    category: "Academic Milestones",
    summary: "All 8 candidates scored over 80% in their summative assessments and have secured placements in top county junior secondary schools.",
    fullText: "We celebrate our outstanding young scholars who sat for their national evaluations. Thanks to dedicated evening tutoring and donors who funded textbook supplies, each child exceeded their personal targets.",
    tag: "Education"
  },
  {
    id: "n2",
    title: "Commissioning Our Solar Water Heating & Sustainable Kitchen Garden",
    date: "October 18, 2026",
    category: "Facility Upgrade",
    summary: "Thanks to generous partner donations, the home completed installation of solar water heaters for the dormitories and expanded our spinach greenhouse.",
    fullText: "The new solar heating ensures the children have hot morning showers during the cold seasons without increasing electricity costs. Our children's agriculture club harvested over 120kg of fresh organic kale and spinach this month.",
    tag: "Sustainability"
  },
  {
    id: "n3",
    title: "Annual Sports Day & Cultural Thanksgiving with Kiambu Community",
    date: "September 27, 2026",
    category: "Community & Culture",
    summary: "Neighbors, church partners, and visiting mentors joined our children for an uplifting Saturday of athletics, poetry, and a shared lunch feast.",
    fullText: "Community integration is vital so our children know they are respected members of the broader society. The day featured exciting football friendlies, Swahili choral poetry performances, and lots of laughter.",
    tag: "Community"
  }
];

export const FINANCIAL_ALLOCATION = [
  { category: "Direct Child Care & Nutrition", percentage: 52, color: "#166534", description: "Food staples, 3 daily meals, fresh vegetables, kitchen cooking gas, and clothing." },
  { category: "Formal Education & Tuition Fees", percentage: 24, color: "#0284c7", description: "School fees, CBC textbooks, uniforms, exam fees, and tutoring materials." },
  { category: "Healthcare & Psychosocial Support", percentage: 10, color: "#d97706", description: "Medical checkups, prescription medication, dental clinics, and counseling services." },
  { category: "Facility Maintenance & Solar Utilities", percentage: 9, color: "#78716c", description: "Clean water, solar power, dormitory sanitation, repairs, and compound security." },
  { category: "Administrative & Regulatory Audits", percentage: 5, color: "#64748b", description: "Annual independent financial audit, statutory filings, and office logistics." },
];

export const WEBSITE_BUDGET_GUIDE = [
  {
    item: "Domain Registration (.or.ke or .org)",
    costKes: "1,000 – 2,500",
    cycle: "Annual renewal",
    notes: "Recommended .or.ke via accredited KeNIC registrar or .org for international credibility."
  },
  {
    item: "Fast Cloud Web Hosting & SSL Certificate",
    costKes: "5,000 – 12,000",
    cycle: "Annual renewal",
    notes: "Ensures SSL encryption (HTTPS), fast low-bandwidth load times, and automated weekly backups."
  },
  {
    item: "Web Design, Architecture & Development",
    costKes: "35,000 – 75,000",
    cycle: "One-time fee",
    notes: "Mobile-first responsive build, donation modules, wish list, safeguarding notices & forms."
  },
  {
    item: "M-Pesa STK Push & Card Gateway Setup",
    costKes: "0 – 10,000",
    cycle: "Setup is free on Paystack/Flutterwave",
    notes: "Transaction fees (approx. 1.5%–3.5%) apply per donation; supports M-Pesa + Visa/Mastercard."
  },
  {
    item: "Ethical Copywriting & Visual Curation",
    costKes: "5,000 – 15,000",
    cycle: "Optional",
    notes: "Included directly in this website's comprehensive content and ethical photo curation."
  },
  {
    item: "Maintenance & Security Updates Retainer",
    costKes: "3,000 – 5,000",
    cycle: "Monthly (or free in-house)",
    notes: "WordPress/CMS core updates, firewall monitoring, and wish list refreshes."
  }
];
