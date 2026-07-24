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
