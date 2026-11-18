/**
 * Pages written natively for one language, not translations of the English guides.
 * Each answers a question people in that market actually type into Google, in their
 * own units (moka sizes, kaffemått, colheres, 杯), so there is no English equivalent.
 */
export interface NativePage {
  locale: string;
  slug: string;
  /** <title>, built around the native search phrasing. */
  title: string;
  description: string;
  /** Link text on the landing page and in "more" lists. */
  label: string;
  kind: 'tool' | 'guide';
  /** Overrides the locale's language, e.g. Brazilian copy under /pt/. */
  lang?: string;
  ogLocale?: string;
  /** Pages answering the same question in different languages share an hreflang cluster. */
  cluster?: 'per-cup' | '46-method';
  /** For pages added after the 11 Oct batch; defaults to that date. */
  updated?: string;
}

export const NATIVE_PAGES: NativePage[] = [
  {
    locale: 'ja',
    slug: '46-method',
    title: '46メソッド（4:6メソッド）計算ツール｜粉15g・20gの湯量と注ぐタイミング | Brewio',
    description: '粕谷哲さんの46メソッドを、粉の量を入れるだけで計算。5投それぞれの湯量・累計・注ぐタイミングを表示し、甘さと酸味のバランス、濃さの調整、アイスコーヒーにも対応します。',
    label: '46メソッド計算ツール',
    kind: 'tool',
    cluster: '46-method',
  },
  {
    locale: 'ja',
    slug: 'coffee-amount',
    title: 'コーヒー粉の量は1杯何グラム？杯数・マグカップ・500mlの早見表 | Brewio',
    description: 'ハンドドリップのコーヒー粉の量を、1杯10g・120mlの目安から計算。2杯・3杯・4杯、マグカップ、500ml、急冷式アイスコーヒーの分量と、メジャースプーン・大さじ換算もまとめました。',
    label: 'コーヒー粉の量 早見表',
    kind: 'tool',
    cluster: 'per-cup',
  },
  {
    locale: 'ja',
    slug: 'grind-size',
    title: 'コーヒーの挽き目の目安｜コマンダンテ・タイムモアのクリック数、みるっこ・ナイスカットGの目盛り | Brewio',
    description: 'ペーパードリップ、46メソッド、フレンチプレス、エスプレッソの挽き目を、コマンダンテとタイムモアのクリック数、みるっこ・ナイスカットGの目盛りで一覧に。酸っぱい・苦いときの直し方も。',
    label: '挽き目の目安（ミル別）',
    kind: 'guide',
  },
  {
    locale: 'it',
    slug: 'dosi-moka',
    title: 'Quanto caffè nella moka? Grammi per moka da 1, 2, 3, 4 e 6 tazze | Brewio',
    description: 'Quanti grammi di caffè servono per ogni moka, da 1 a 6 tazze, e quanto caffè esce. Più macinatura, fuoco e gli errori che rendono il caffè della moka amaro.',
    label: 'Quanto caffè nella moka',
    kind: 'tool',
  },
  {
    locale: 'pt',
    slug: 'quantas-colheres-de-cafe',
    title: 'Quantas colheres de café para 1 litro de água? Tabela de 200 ml a 2 L | Brewio',
    description: 'De 5 a 7 colheres de sopa cheias por litro. Veja quantas usar para 200 ml, 300 ml, meio litro, 600 ml, 2 litros ou a garrafa térmica, em colheres e gramas.',
    label: 'Quantas colheres de café por litro',
    kind: 'tool',
    lang: 'pt-BR',
    ogLocale: 'pt_BR',
    cluster: 'per-cup',
    updated: '2026-11-18',
  },
  {
    locale: 'sv',
    slug: 'hur-mycket-kaffe-per-kopp',
    title: 'Hur mycket kaffe per kopp? Räknare för Moccamaster, bryggkaffe och kokkaffe | Brewio',
    description: 'Räkna ut hur många kaffemått och gram du behöver till 2–10 koppar i Moccamaster eller bryggare – och hur du kokar riktigt kokkaffe.',
    label: 'Hur mycket kaffe per kopp',
    kind: 'tool',
    cluster: 'per-cup',
  },
  {
    locale: 'no',
    slug: 'hvor-mye-kaffe-per-kopp',
    title: 'Hvor mye kaffe per liter og per kopp? Gram og kaffemål | Brewio',
    description: 'Minst 60 gram kaffe per liter vann, eller 6 kaffemål. Se hvor mange mål du trenger til 2, 4 eller 10 kopper i Moccamaster eller trakter, og til kokekaffe.',
    label: 'Hvor mye kaffe per kopp',
    kind: 'tool',
    cluster: 'per-cup',
    updated: '2026-11-18',
  },
  {
    locale: 'da',
    slug: 'hvor-meget-kaffe-pr-kop',
    title: 'Hvor meget kaffe pr. kop? Beregner til Moccamaster, filterkaffe og stempelkande | Brewio',
    description: 'Find ud af, hvor mange gram og skefulde kaffe du skal bruge til 2–10 kopper i Moccamaster eller kaffemaskine – og den rigtige mængde i stempelkanden.',
    label: 'Hvor meget kaffe pr. kop',
    kind: 'tool',
    cluster: 'per-cup',
  },
  {
    locale: 'fi',
    slug: 'kuinka-paljon-kahvia',
    title: 'Kuinka paljon kahvia kuppiin? Kahvimitta, Moccamaster ja pannukahvi | Brewio',
    description: 'Kuinka iso on kahvimitta ja montako mittaa kuppiin? Laske grammat ja kahvimitat 2–10 kupilliseen Moccamasterilla, kahvinkeittimellä tai pannulla.',
    label: 'Kuinka paljon kahvia kuppiin',
    kind: 'tool',
    cluster: 'per-cup',
    updated: '2026-11-18',
  },
  {
    locale: 'nl',
    slug: 'hoeveel-koffie-per-kopje',
    title: 'Hoeveel koffie per kopje? Rekenhulp voor Moccamaster, filterkoffie en french press | Brewio',
    description: 'Reken uit hoeveel schepjes en grammen koffie je nodig hebt voor 2 tot 10 kopjes in een Moccamaster of filterapparaat, en de juiste verhouding voor de french press.',
    label: 'Hoeveel koffie per kopje',
    kind: 'tool',
    cluster: 'per-cup',
  },
  {
    locale: 'de',
    slug: 'siebtraeger-mahlgrad',
    title: 'Siebträger Mahlgrad einstellen: Bezugszeit-Check & Sage Barista Express | Brewio',
    description: 'Espresso zu schnell, zu langsam, sauer oder bitter? Gib Dosis, Ausbeute und Bezugszeit ein und erfahre, ob du feiner oder gröber mahlen musst – plus Tipps für die Sage Barista Express.',
    label: 'Siebträger: Mahlgrad einstellen',
    kind: 'tool',
  },
  {
    locale: 'tr',
    slug: 'turk-kahvesi-olcusu',
    title: 'Türk kahvesi kaç gram? Fincan başına kahve, su ve pişirme süresi | Brewio',
    description: 'Bir fincan Türk kahvesi için kaç gram kahve ve kaç ml su gerekir, cezvede kaç dakika pişer? 1–4 fincan için hesaplayıcı, şeker ölçüleri ve bol köpüklü kahvenin püf noktaları.',
    label: 'Türk kahvesi ölçüsü',
    kind: 'tool',
  },
  {
    locale: 'el',
    slug: 'freddo-espresso',
    title: 'Φρέντο εσπρέσο στο σπίτι, με ή χωρίς μηχανή – συνταγή βήμα βήμα | Brewio',
    description: 'Πώς φτιάχνεις φρέντο εσπρέσο και φρέντο καπουτσίνο στο σπίτι, με μηχανή εσπρέσο ή με καφετιέρα μόκα. Δόσεις, ζάχαρη (σκέτο, μέτριο, γλυκό), αφρόγαλα και ελληνικός καφές.',
    label: 'Φρέντο εσπρέσο στο σπίτι',
    kind: 'guide',
  },
  {
    locale: 'ko',
    slug: 'grind-size',
    title: '원두 분쇄도 가이드: 코만단테·타임모어 클릭 수와 그라인더 변환기 | Brewio',
    description: '핸드드립, 에스프레소, 프렌치프레스, 콜드브루에 맞는 분쇄도를 코만단테, 타임모어, 바라짜 엔코, 펠로우 오드 기준으로 정리하고 그라인더 사이의 클릭 수를 변환해 줍니다.',
    label: '원두 분쇄도 가이드 & 변환기',
    kind: 'tool',
  },
  {
    locale: 'ko',
    slug: '46-method',
    title: '4:6 레시피 계산기 | 카스야 테츠 4:6 메소드, 원두 15g·20g 물양과 타이밍 | Brewio',
    description: '카스야 테츠의 4:6 레시피를 원두 양만 넣으면 계산해 줍니다. 푸어마다 물양·누적량·붓는 타이밍을 보여 주고, 단맛과 산미의 밸런스, 농도 조절, 급랭식 아이스도 지원해요.',
    label: '4:6 레시피 계산기',
    kind: 'tool',
    cluster: '46-method',
    updated: '2026-10-29',
  },
  {
    locale: 'ko',
    slug: 'coffee-amount',
    title: '원두 몇 g? 핸드드립 1인분 원두 양 계산기 | 물 비율·머그컵·아이스·모카포트 | Brewio',
    description: '핸드드립 1인분 원두 양을 1:15 비율로 계산해 드려요. 머그컵·텀블러·2인분, 급랭식 아이스 아메리카노, 모카포트 컵수별 원두 g과 계량스푼 환산까지 한 번에.',
    label: '원두 양 계산기 (1인분 몇 g)',
    kind: 'tool',
    cluster: 'per-cup',
    updated: '2026-10-31',
  },
  {
    locale: 'es',
    slug: 'cuanto-cafe-por-taza',
    title: '¿Cuánto café por taza? Calculadora para cafetera italiana, prensa francesa y goteo | Brewio',
    description: 'Cuántos gramos y cucharadas de café molido necesitas por taza en cafetera italiana, prensa francesa o cafetera de goteo, con la proporción café-agua de cada método.',
    label: 'Cuánto café por taza',
    kind: 'tool',
    cluster: 'per-cup',
  },
  {
    locale: 'fr',
    slug: 'dosage-cafe',
    title: 'Dosage café : combien de café par tasse ? Calculateur piston, italienne et filtre | Brewio',
    description: 'Combien de grammes et de cuillères de café moulu par tasse pour une cafetière à piston, italienne ou filtre, avec le bon ratio café/eau pour chaque méthode.',
    label: 'Dosage du café par tasse',
    kind: 'tool',
    cluster: 'per-cup',
  },
];

export const pagesFor = (locale: string) => NATIVE_PAGES.filter((p) => p.locale === locale);

export const findPage = (locale: string, slug: string) => {
  const page = NATIVE_PAGES.find((p) => p.locale === locale && p.slug === slug);
  if (!page) throw new Error(`No native page registered for /${locale}/${slug}/`);
  return page;
};
