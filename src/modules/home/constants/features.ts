import { FeatureGroup } from "../home.types";

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "professionals",
    title: "For professionals",
    columns: 3,
    cards: [
      {
        id: "placements",
        eyebrow: "Placements",
        title: "Make a referral",
        description:
          "Local authority referrals for young people aged 16–17, with written matching before any placement.",
        action: "Start a referral →",
        href: "#referrals",
        variant: "black",
      },
      {
        id: "transparency",
        eyebrow: "Transparency",
        title: "Live tracker",
        description:
          "Real-time view of our compliance, safety checks and quality assurance — always open.",
        action: "Open tracker →",
        href: "#",
        variant: "black",
        live: true,
      },
      {
        id: "availability",
        eyebrow: "Availability",
        title: "Current vacancies",
        description:
          "Up-to-date bed availability across our Peterborough properties.",
        action: "Check availability →",
        href: "#",
      },
    ],
  },

  {
    id: "young-people",
    title: "For young people",
    columns: 3,
    cards: [
      {
        id: "your-voice",
        eyebrow: "Your voice",
        title: "MyRegwell portal",
        description: "Give feedback, raise concerns and see what changed.",
        action: "Go to portal →",
        href: "#",
      },
      {
        id: "safeguarding",
        eyebrow: "Safeguarding",
        title: "Report a concern",
        description:
          "Worried about yourself or someone else? Contact us, day or night.",
        action: "Safeguarding contacts →",
        href: "#",
      },
      {
        id: "independence",
        eyebrow: "Independence",
        title: "Your journey",
        description:
          "Independence Passports — practical skills, tracked and celebrated.",
        action: "Learn more →",
        href: "#",
      },
    ],
  },

  {
    id: "about",
    title: "About Kenley",
    columns: 4,
    cards: [
      {
        id: "approach",
        eyebrow: "Our approach",
        title: "How we work",
        description: 'Research-informed support and "You Said, We Did".',
        action: "Learn more →",
        href: "#approach",
      },
      {
        id: "statement",
        eyebrow: "Documents",
        title: "Statement of Purpose",
        description: "Who we are, who we support and how — in full.",
        action: "Download PDF →",
        href: "#",
      },
      {
        id: "team",
        eyebrow: "Team",
        title: "Work with us",
        description: "Support worker roles with proper training and purpose.",
        action: "Careers →",
        href: "#",
      },
      {
        id: "contact",
        eyebrow: "Contact",
        title: "Get in touch",
        description:
          "Commissioners, social workers and personal advisers — talk to us directly.",
        action: "Contact us →",
        href: "#contact",
      },
    ],
  },
];
