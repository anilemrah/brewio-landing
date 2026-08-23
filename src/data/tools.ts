export interface Tool {
  slug: string;
  title: string;
  /** Short label for nav and cards. */
  short: string;
  desc: string;
  icon: string;
}

export const TOOLS: Tool[] = [
  {
    slug: 'coffee-ratio-calculator',
    title: 'Coffee Ratio Calculator',
    short: 'Ratio Calculator',
    desc: 'Work out the exact coffee and water for any brew method. 12 methods, each with its own ratio — change one number and the rest follows.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M9 21h6"/><path d="M5 7h14"/><path d="M6.5 7 3 14a3.5 3.5 0 0 0 7 0z"/><path d="M17.5 7 14 14a3.5 3.5 0 0 0 7 0z"/></svg>`,
  },
  {
    slug: 'grind-size-chart',
    title: 'Coffee Grind Size Chart',
    short: 'Grind Chart',
    desc: 'Where every brew method sits on the grind scale, from Turkish-fine to cold-brew coarse — with a plain-language reference for what each grind feels like.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="4.5" cy="6" r="0.9"/><circle cx="9" cy="6" r="0.9"/><circle cx="13.5" cy="6" r="0.9"/><circle cx="18" cy="6" r="0.9"/><circle cx="5.5" cy="12" r="1.5"/><circle cx="11.5" cy="12" r="1.5"/><circle cx="17.5" cy="12" r="1.5"/><circle cx="7" cy="18.5" r="2.2"/><circle cx="16" cy="18.5" r="2.2"/></svg>`,
  },
  {
    slug: 'extraction-yield-calculator',
    title: 'Extraction Yield Calculator',
    short: 'EY Calculator',
    desc: 'Turn a refractometer reading into extraction yield. Enter dose, beverage weight, and TDS% to see whether you landed in the 18–22% sweet spot.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6.5L4.5 19A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7 16h10"/></svg>`,
  },
  {
    slug: 'brew-timer',
    title: 'Brew Timer',
    short: 'Brew Timer',
    desc: 'Step-by-step timers for 12 brew methods, with the timing and technique for each stage. Start it in the browser — no install, no signup.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 2h6"/></svg>`,
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function otherTools(slug: string): Tool[] {
  return TOOLS.filter((t) => t.slug !== slug);
}
