/** Single source of truth for the guide library: index, homepage teaser and related links. */

export const PUBLISHED = '2026-05-07';
export const UPDATED = '2026-08-23';

export interface Guide {
  slug: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  icon: string;
  related: string[];
}

/** Topical graph: which guides genuinely help a reader of this one. */
const RELATED: Record<string, string[]> = {
  'coffee-to-water-ratio': ['coffee-grind-size-chart', 'extraction-yield-guide', 'how-to-brew-v60'],
  'how-to-brew-v60': ['coffee-to-water-ratio', 'coffee-grind-size-chart', 'aeropress-recipes'],
  'coffee-tasting-notes': ['what-is-specialty-coffee', 'extraction-yield-guide', 'arabica-vs-robusta'],
  'aeropress-recipes': ['coffee-to-water-ratio', 'coffee-grind-size-chart', 'french-press-guide'],
  'extraction-yield-guide': ['coffee-to-water-ratio', 'coffee-grind-size-chart', 'coffee-tasting-notes'],
  'cold-brew-coffee': ['coffee-to-water-ratio', 'how-to-brew-v60', 'how-to-store-coffee-beans'],
  'coffee-grind-size-chart': ['coffee-to-water-ratio', 'extraction-yield-guide', 'espresso-for-beginners'],
  'french-press-guide': ['coffee-to-water-ratio', 'coffee-grind-size-chart', 'aeropress-recipes'],
  'espresso-for-beginners': ['coffee-grind-size-chart', 'extraction-yield-guide', 'caffeine-in-coffee'],
  'caffeine-in-coffee': ['arabica-vs-robusta', 'espresso-for-beginners', 'cold-brew-coffee'],
  'arabica-vs-robusta': ['what-is-specialty-coffee', 'caffeine-in-coffee', 'coffee-tasting-notes'],
  'how-to-store-coffee-beans': ['coffee-grind-size-chart', 'cold-brew-coffee', 'what-is-specialty-coffee'],
  'what-is-specialty-coffee': ['arabica-vs-robusta', 'coffee-tasting-notes', 'mushroom-coffee'],
  'mushroom-coffee': ['caffeine-in-coffee', 'what-is-specialty-coffee', 'arabica-vs-robusta'],
};

const entries = [
  {
    slug: 'coffee-to-water-ratio',
    category: 'Fundamentals',
    title: 'Coffee-to-Water Ratio Guide',
    desc: 'A visual breakdown of the golden ratio for every brew method, from espresso to cold brew.',
    readTime: '8 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6"/><path d="M10 2v6L6 15a3.5 3.5 0 0 0 3.1 5h5.8A3.5 3.5 0 0 0 18 15l-4-7V2"/><path d="M6.7 15h10.6"/></svg>`,
  },
  {
    slug: 'how-to-brew-v60',
    category: 'Brew Guide',
    title: 'How to Brew V60 Pour-Over Coffee',
    desc: 'A step-by-step walkthrough with timing, technique and troubleshooting, from your first pour to dialing in.',
    readTime: '10 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 1 1 0 4h-2"/><path d="M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/></svg>`,
  },
  {
    slug: 'coffee-tasting-notes',
    category: 'Flavour',
    title: 'How to Taste Coffee',
    desc: 'Learn the coffee flavour wheel, train your palate and start picking out what different origins taste like.',
    readTime: '9 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  },
  {
    slug: 'aeropress-recipes',
    category: 'Brew Guide',
    title: 'AeroPress Brewing: 3 Recipes from Beginner to Advanced',
    desc: 'The classic method, the inverted technique and a championship-winning recipe, all with exact measurements.',
    readTime: '7 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>`,
  },
  {
    slug: 'extraction-yield-guide',
    category: 'Science',
    title: 'Understanding Extraction Yield & TDS',
    desc: 'What extraction yield means, how to measure it, and how it helps you brew more consistent coffee.',
    readTime: '8 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,
  },
  {
    slug: 'cold-brew-coffee',
    category: 'Brew Guide',
    title: 'How to Make Cold Brew Coffee at Home',
    desc: 'Ratios, steep times, and how to make cold brew concentrate or a ready-to-drink batch.',
    readTime: '7 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>`,
  },
  {
    slug: 'coffee-grind-size-chart',
    category: 'Fundamentals',
    title: 'Coffee Grind Size Chart (With Grinder Numbers)',
    desc: 'Grind size for every brew method, click settings for popular grinders, and a taste chart for fixing sour or bitter cups.',
    readTime: '7 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>`,
  },
  {
    slug: 'french-press-guide',
    category: 'Brew Guide',
    title: 'How to Make French Press Coffee',
    desc: 'Ratio, grind size, steep time and James Hoffmann\'s technique for the most forgiving brew method.',
    readTime: '6 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8"/><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 6v8"/><path d="M6 18h12"/></svg>`,
  },
  {
    slug: 'espresso-for-beginners',
    category: 'Brew Guide',
    title: 'Espresso for Beginners: Everything You Need to Know',
    desc: 'What espresso is, the equipment you need, your first recipe, how to dial in, and the common café drinks.',
    readTime: '10 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 0 4h-2"/><path d="M3 8h14v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V8z"/></svg>`,
  },
  {
    slug: 'caffeine-in-coffee',
    category: 'Fundamentals',
    title: 'How Much Caffeine Is in Coffee?',
    desc: 'Caffeine content by brew method, what affects it, daily safe limits, and why espresso has less than you think.',
    readTime: '6 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    slug: 'arabica-vs-robusta',
    category: 'Fundamentals',
    title: 'Arabica vs. Robusta: What\'s the Difference?',
    desc: 'The two coffee species compared: taste, caffeine, price, and why "100% Arabica" doesn\'t mean quality.',
    readTime: '6 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    slug: 'how-to-store-coffee-beans',
    category: 'Fundamentals',
    title: 'How to Store Coffee Beans (And Keep Them Fresh)',
    desc: 'The four enemies of freshness, best storage methods ranked, whether to freeze beans, and the freshness timeline.',
    readTime: '6 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 0 1 8 0"/><rect x="3" y="7" width="18" height="14" rx="2"/></svg>`,
  },
  {
    slug: 'what-is-specialty-coffee',
    category: 'Culture',
    title: 'What is Specialty Coffee?',
    desc: 'The 80-point scale, the three waves of coffee, specialty vs. commercial, and how to start exploring it.',
    readTime: '7 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    slug: 'mushroom-coffee',
    category: 'Trends',
    title: 'Mushroom Coffee: Is It Worth It?',
    desc: 'What\'s in mushroom coffee, what the research says, and whether it\'s worth trying.',
    readTime: '7 min',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 0 1 7-7z"/><path d="M10 16v6"/><path d="M14 16v6"/><path d="M8 22h8"/></svg>`,
  },
];

export const GUIDES: Guide[] = entries.map((g) => ({ ...g, related: RELATED[g.slug] ?? [] }));

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** Related guides for a slug, topped up with same-category siblings if the list is short. */
export function relatedGuides(slug: string, count = 3): Guide[] {
  const self = getGuide(slug);
  const picked = (self?.related ?? [])
    .map((s) => getGuide(s))
    .filter((g): g is Guide => Boolean(g));

  if (picked.length < count && self) {
    for (const g of GUIDES) {
      if (picked.length >= count) break;
      if (g.slug !== slug && g.category === self.category && !picked.includes(g)) picked.push(g);
    }
  }

  return picked.slice(0, count);
}
