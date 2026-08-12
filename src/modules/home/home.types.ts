export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface Pillar {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
}

export interface ApproachItem {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
}

export interface Referral {
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export interface FooterData {
  location: string;
  description: string;
}

export interface FeatureCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  href: string;
  variant?: "default" | "black";
  live?: boolean;
}

export interface FeatureGroup {
  id: string;
  title: string;
  columns: 3 | 4;
  cards: FeatureCard[];
}
