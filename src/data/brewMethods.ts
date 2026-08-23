/**
 * Brew method reference, ported from the Brewio app's own source of truth
 * (constants/brewMethods.ts + messages/en.json). Keep in sync with the app.
 */

export interface BrewStep {
  label: string;
  note: string;
  /** Seconds; 0 means an untimed prep step. */
  duration: number;
}

export interface BrewMethod {
  id: string;
  name: string;
  emoji: string;
  label: string;
  /** 1:N — grams of coffee to grams of water (or liquid out, for espresso). */
  defaultRatio: number;
  ratioBasis: 'water' | 'liquid';
  grindSize: string;
  grindHint: string;
  /** 0 = finest, 1 = coarsest. Position on the grind scale. */
  grindPos: number;
  eyCompatible: boolean;
  steps: BrewStep[];
}

export const BREW_METHODS: BrewMethod[] = [
  {
    "id": "v60",
    "name": "V60 Pour Over",
    "emoji": "☕",
    "label": "V60",
    "defaultRatio": 15,
    "ratioBasis": "water",
    "grindSize": "Medium-Fine",
    "grindHint": "Similar to table salt",
    "grindPos": 0.35,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Rinse & preheat",
        "note": "Rinse the filter with hot water, then discard the water.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add your ground coffee and create a small well in the centre.",
        "duration": 0
      },
      {
        "label": "Bloom pour",
        "note": "Pour twice the coffee weight in water (e.g. 36 g water for 18 g coffee). Wait for the bloom.",
        "duration": 45
      },
      {
        "label": "First pour",
        "note": "Pour in a slow spiral to 60% of your total water weight.",
        "duration": 30
      },
      {
        "label": "Second pour",
        "note": "Continue pouring in a spiral to reach full water weight.",
        "duration": 30
      },
      {
        "label": "Drawdown",
        "note": "Let all the water draw through the filter. Total brew time ~3 min.",
        "duration": 60
      }
    ]
  },
  {
    "id": "aeropress",
    "name": "AeroPress",
    "emoji": "🔧",
    "label": "AERO",
    "defaultRatio": 14,
    "ratioBasis": "water",
    "grindSize": "Medium-Fine",
    "grindHint": "Slightly finer than V60",
    "grindPos": 0.3,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Preheat & rinse",
        "note": "Rinse the filter and preheat the chamber with hot water.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add ground coffee to the chamber (inverted or standard position).",
        "duration": 0
      },
      {
        "label": "First pour",
        "note": "Pour water up to level 2 on the chamber.",
        "duration": 0
      },
      {
        "label": "Stir & steep",
        "note": "Stir gently for 10 seconds, then steep.",
        "duration": 60
      },
      {
        "label": "Flip & press",
        "note": "Flip onto your cup and press slowly and steadily.",
        "duration": 30
      },
      {
        "label": "Dilute if needed",
        "note": "Add hot water to taste if you prefer a longer drink.",
        "duration": 0
      }
    ]
  },
  {
    "id": "french_press",
    "name": "French Press",
    "emoji": "🫖",
    "label": "PRESS",
    "defaultRatio": 14,
    "ratioBasis": "water",
    "grindSize": "Coarse",
    "grindHint": "Like coarse sea salt",
    "grindPos": 0.75,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Preheat",
        "note": "Preheat the French press with hot water, then discard.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add coarsely ground coffee to the press.",
        "duration": 0
      },
      {
        "label": "Pour & stir",
        "note": "Pour all hot water over the grounds and stir gently.",
        "duration": 0
      },
      {
        "label": "Place lid",
        "note": "Place the lid on top with the plunger pulled up. Do not press yet.",
        "duration": 0
      },
      {
        "label": "Steep",
        "note": "Let steep for 4 minutes.",
        "duration": 240
      },
      {
        "label": "Press & pour",
        "note": "Press the plunger down slowly and pour immediately.",
        "duration": 0
      }
    ]
  },
  {
    "id": "chemex",
    "name": "Chemex",
    "emoji": "⚗️",
    "label": "CHEMEX",
    "defaultRatio": 16,
    "ratioBasis": "water",
    "grindSize": "Medium-Coarse",
    "grindHint": "Coarser than V60",
    "grindPos": 0.55,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Rinse filter",
        "note": "Fold and rinse the Chemex filter with hot water, then discard.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add ground coffee and give the Chemex a gentle shake to level.",
        "duration": 0
      },
      {
        "label": "Bloom pour",
        "note": "Pour twice the coffee weight in water and wait for the bloom.",
        "duration": 45
      },
      {
        "label": "First pour",
        "note": "Pour in a slow spiral to 50% of total water weight.",
        "duration": 45
      },
      {
        "label": "Second pour",
        "note": "Continue pouring to 75% of total water weight.",
        "duration": 45
      },
      {
        "label": "Final pour",
        "note": "Pour remaining water. Total drawdown ~4–5 min.",
        "duration": 90
      }
    ]
  },
  {
    "id": "moka_pot",
    "name": "Moka Pot",
    "emoji": "🫙",
    "label": "MOKA",
    "defaultRatio": 10,
    "ratioBasis": "water",
    "grindSize": "Fine",
    "grindHint": "Almost like espresso",
    "grindPos": 0.15,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Fill boiler",
        "note": "Fill the bottom chamber with hot water up to the safety valve.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Fill the basket with finely ground coffee. Level without tamping.",
        "duration": 0
      },
      {
        "label": "Assemble",
        "note": "Screw the top and bottom chambers together firmly.",
        "duration": 0
      },
      {
        "label": "Heat on stove",
        "note": "Place on medium-low heat. Keep the lid open to watch the flow.",
        "duration": 240
      },
      {
        "label": "Remove from heat",
        "note": "When coffee turns blonde/sputters, remove from heat immediately.",
        "duration": 0
      },
      {
        "label": "Serve",
        "note": "Stir in the pot to mix layers, then pour and enjoy.",
        "duration": 0
      }
    ]
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "emoji": "⚡",
    "label": "ESP",
    "defaultRatio": 2,
    "ratioBasis": "liquid",
    "grindSize": "Extra Fine",
    "grindHint": "Like powdered sugar",
    "grindPos": 0.05,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Warm up machine",
        "note": "Turn on the machine and let it reach temperature. Run a blank shot through the group head to stabilise.",
        "duration": 0
      },
      {
        "label": "Purge group head",
        "note": "Flush the group head briefly with water to clear old grounds and stabilise brew temperature.",
        "duration": 0
      },
      {
        "label": "Dose & distribute",
        "note": "Dose your ground coffee into the portafilter (e.g. 18 g for a double). Distribute evenly — tap, shake, or use a WDT tool.",
        "duration": 0
      },
      {
        "label": "Tamp",
        "note": "Tamp with ~15 kg of pressure. Keep the puck level and flat — no angled edges.",
        "duration": 0
      },
      {
        "label": "Lock & pull",
        "note": "Lock the portafilter into the group head and start the shot immediately.",
        "duration": 0
      },
      {
        "label": "Extract",
        "note": "Watch the flow: it should start as a slow drip, then a thin steady stream. Aim for 25–30 seconds.",
        "duration": 28
      },
      {
        "label": "Assess the shot",
        "note": "Check colour and flow. If sour/fast → grind finer. If bitter/slow → grind coarser.",
        "duration": 0
      },
      {
        "label": "Serve",
        "note": "Serve immediately. Stir gently to mix crema. Espresso waits for no one.",
        "duration": 0
      }
    ]
  },
  {
    "id": "cold_brew",
    "name": "Cold Brew",
    "emoji": "🧊",
    "label": "COLD",
    "defaultRatio": 8,
    "ratioBasis": "water",
    "grindSize": "Coarse",
    "grindHint": "Like coarse sea salt",
    "grindPos": 0.8,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Grind coarsely",
        "note": "Grind coffee very coarse — like raw sugar or breadcrumbs.",
        "duration": 0
      },
      {
        "label": "Combine",
        "note": "Add coffee to a jar or pitcher. Pour room-temperature or cold water over the grounds.",
        "duration": 0
      },
      {
        "label": "Stir gently",
        "note": "Stir to make sure all grounds are saturated. No dry clumps.",
        "duration": 0
      },
      {
        "label": "Cover & steep",
        "note": "Cover and place in the fridge. Steep for 12–24 hours.",
        "duration": 0
      },
      {
        "label": "Filter",
        "note": "Strain through a fine mesh sieve or paper filter. Discard grounds.",
        "duration": 0
      },
      {
        "label": "Serve",
        "note": "Dilute concentrate with water or milk to taste. Serve over ice.",
        "duration": 0
      }
    ]
  },
  {
    "id": "drip_machine",
    "name": "Drip Machine",
    "emoji": "🔌",
    "label": "DRIP",
    "defaultRatio": 16,
    "ratioBasis": "water",
    "grindSize": "Medium",
    "grindHint": "Like sand",
    "grindPos": 0.45,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Add water & filter",
        "note": "Fill the reservoir with fresh, cold water. Place a paper or reusable filter in the basket.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add medium-ground coffee — about 60 g per litre of water (roughly 1 g per 16 ml).",
        "duration": 0
      },
      {
        "label": "Start & brew",
        "note": "Close the basket and press start. Wait for the full brew cycle — don't pull the carafe early.",
        "duration": 300
      },
      {
        "label": "Remove grounds",
        "note": "Remove the filter and grounds promptly once brewing is done to avoid bitterness.",
        "duration": 0
      },
      {
        "label": "Serve",
        "note": "Pour and enjoy. If using a thermal carafe, coffee stays good for about an hour.",
        "duration": 0
      }
    ]
  },
  {
    "id": "freddo",
    "name": "Freddo Espresso",
    "emoji": "🍦",
    "label": "FRED",
    "defaultRatio": 2,
    "ratioBasis": "liquid",
    "grindSize": "Extra Fine",
    "grindHint": "Like powdered sugar",
    "grindPos": 0.05,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Pull espresso",
        "note": "Pull a double shot of espresso (18 g in, ~36 g out).",
        "duration": 0
      },
      {
        "label": "Cool briefly",
        "note": "Let the espresso rest for 30 seconds — don't pour it hot over ice.",
        "duration": 30
      },
      {
        "label": "Add sugar (optional)",
        "note": "Stir sugar into the warm espresso now — it dissolves much better than in cold.",
        "duration": 0
      },
      {
        "label": "Chill the shaker",
        "note": "Fill a cocktail shaker with 5–6 ice cubes. Let it pre-chill for 30 seconds.",
        "duration": 30
      },
      {
        "label": "Pour over ice",
        "note": "Pour the cooled espresso into the shaker over the ice.",
        "duration": 0
      },
      {
        "label": "Shake vigorously",
        "note": "Seal and shake hard for 20 seconds until frothy and well chilled.",
        "duration": 20
      },
      {
        "label": "Strain & serve",
        "note": "Strain into a cold glass with fresh ice. Top with cold milk for a freddo cappuccino.",
        "duration": 0
      }
    ]
  },
  {
    "id": "kalita",
    "name": "Kalita Wave",
    "emoji": "🌊",
    "label": "WAVE",
    "defaultRatio": 16,
    "ratioBasis": "water",
    "grindSize": "Medium-Fine",
    "grindHint": "Similar to V60, slightly coarser",
    "grindPos": 0.4,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Rinse & preheat",
        "note": "Place the filter in the Kalita Wave and rinse with hot water. Discard.",
        "duration": 0
      },
      {
        "label": "Add coffee",
        "note": "Add your ground coffee and give a gentle shake to level the bed.",
        "duration": 0
      },
      {
        "label": "Bloom pour",
        "note": "Pour twice the coffee weight in water. Wait for the bloom to degas.",
        "duration": 45
      },
      {
        "label": "First pour",
        "note": "Pour in concentric circles to 60% of total water weight.",
        "duration": 30
      },
      {
        "label": "Second pour",
        "note": "Pour to full water weight. Keep the water level steady.",
        "duration": 30
      },
      {
        "label": "Drawdown",
        "note": "Let it drain completely. Total brew time ~3:00–3:30.",
        "duration": 75
      }
    ]
  },
  {
    "id": "siphon",
    "name": "Siphon",
    "emoji": "🔬",
    "label": "SIPH",
    "defaultRatio": 15,
    "ratioBasis": "water",
    "grindSize": "Medium-Fine",
    "grindHint": "Similar to table salt, slightly finer than drip",
    "grindPos": 0.38,
    "eyCompatible": true,
    "steps": [
      {
        "label": "Prepare filter",
        "note": "If using a cloth filter, soak it in hot water for a few minutes first. Metal filters can be used dry.",
        "duration": 0
      },
      {
        "label": "Add water",
        "note": "Fill the bottom chamber with hot water (pre-boiled speeds things up). Place on the heat source.",
        "duration": 0
      },
      {
        "label": "Attach top chamber",
        "note": "Insert the filter in the top globe, pull the chain taut, and attach it to the bottom. Ensure a tight seal.",
        "duration": 0
      },
      {
        "label": "Water rises",
        "note": "As water heats, it rises into the top chamber. Wait until nearly all water has risen — a small amount stays below.",
        "duration": 90
      },
      {
        "label": "Add coffee",
        "note": "Add medium-ground coffee to the top chamber. Stir gently to submerge all grounds. Start your timer.",
        "duration": 0
      },
      {
        "label": "Brew",
        "note": "Maintain a gentle boil for 60–90 seconds. Adjust heat to keep temperature steady — don't let it rage.",
        "duration": 75
      },
      {
        "label": "Remove heat",
        "note": "Remove the heat source. A vacuum pulls the brewed coffee back down through the filter into the bottom chamber.",
        "duration": 45
      },
      {
        "label": "Serve",
        "note": "Detach the top globe carefully (it's hot). Serve directly from the bottom chamber.",
        "duration": 0
      }
    ]
  },
  {
    "id": "ibrik",
    "name": "Ibrik / Cezve",
    "emoji": "☕",
    "label": "IBRIK",
    "defaultRatio": 10,
    "ratioBasis": "water",
    "grindSize": "Extra Fine",
    "grindHint": "Finer than espresso, like flour",
    "grindPos": 0.02,
    "eyCompatible": false,
    "steps": [
      {
        "label": "Add water",
        "note": "Add cold water to the cezve/ibrik — one demitasse cup per serving.",
        "duration": 0
      },
      {
        "label": "Add coffee & sugar",
        "note": "Add extra-fine ground coffee (and sugar if desired). Stir to combine. Do not stir again after this.",
        "duration": 0
      },
      {
        "label": "Heat slowly",
        "note": "Place on low heat. Let it warm slowly — patience is key.",
        "duration": 90
      },
      {
        "label": "Watch for foam",
        "note": "As it heats, a dark foam will form on top. Do not let it boil.",
        "duration": 60
      },
      {
        "label": "Rise & remove",
        "note": "When the foam rises to the rim, remove from heat immediately.",
        "duration": 0
      },
      {
        "label": "Serve",
        "note": "Pour slowly into demitasse cups, distributing the foam evenly. Let grounds settle before drinking.",
        "duration": 30
      }
    ]
  }
];

export function getMethod(id: string): BrewMethod | undefined {
  return BREW_METHODS.find((m) => m.id === id);
}

/** Total timed seconds for a method (untimed prep steps count as 0). */
export function totalTime(m: BrewMethod): number {
  return m.steps.reduce((s, st) => s + st.duration, 0);
}

/** Extraction-yield reference, matching the app's bands exactly. */
export const EY = {
  /** EY% = TDS% x beverage weight / dose */
  compute: (dose: number, beverage: number, tds: number): number | null =>
    dose > 0 && beverage > 0 && tds > 0 ? (tds / 100) * beverage / dose * 100 : null,
  scaleMin: 10,
  scaleMax: 30,
  sweetLow: 18,
  sweetHigh: 22,
  tds: {
    filter: { min: 1.0, max: 1.8, typical: 1.35, inputMax: 5, bevMax: 2000 },
    espresso: { min: 7, max: 13, typical: 9.5, inputMax: 25, bevMax: 200 },
  },
} as const;
