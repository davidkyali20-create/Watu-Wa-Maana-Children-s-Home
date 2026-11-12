export interface Program {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  bullets: string[];
  metrics: string;
  image: string;
  imageAlt: string;
}

export interface WishListItem {
  id: string;
  name: string;
  category: 'dry_foods' | 'school_supplies' | 'clothing_bedding' | 'hygiene_cleaning';
  targetQty: number;
  receivedQty: number;
  unit: string;
  priority: 'Urgent' | 'High' | 'Ongoing';
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  focus: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  fullText: string;
  tag: string;
}

export interface SuccessStory {
  id: string;
  pseudonym: string;
  currentStage: string;
  timeline: string;
  quote: string;
  narrative: string;
  field: string;
}

export interface DonationReceipt {
  transactionId: string;
  donorName: string;
  email: string;
  amount: number;
  currency: string;
  method: string;
  frequency: 'one-time' | 'monthly';
  program: string;
  date: string;
}
