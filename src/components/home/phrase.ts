const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Headings in Japanese have no spaces, so browsers break lines mid-word. A "|" in the copy marks
 * phrase boundaries; each phrase becomes an unbreakable span, so lines only break between phrases.
 * Safari has no `word-break: auto-phrase`, which is why this is done in the markup.
 */
export const phrased = (s: string) =>
  s.includes('|') ? s.split('|').map((p) => `<span class="ph">${escape(p)}</span>`).join('') : escape(s);
