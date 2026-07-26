const BN_TO_EN: Record<string, string> = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

const EN_TO_BN: Record<string, string> = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};

/**
 * Parses a Bengali price string (e.g. "৳ ১,৫৯০") into an integer.
 */
export function parseBanglaPrice(price: string): number {
  const ascii = price
    .split("")
    .map((ch) => BN_TO_EN[ch] ?? ch)
    .join("");
  const match = ascii.match(/[\d,]+/);
  if (!match) return 0;
  return parseInt(match[0].replace(/,/g, ""), 10);
}

/**
 * Formats an integer into a Bengali price string (e.g. 1590 → "৳ ১,৫৯০").
 */
export function formatBanglaPrice(n: number): string {
  const formatted = n.toLocaleString("en-IN");
  const bn = formatted
    .split("")
    .map((ch) => EN_TO_BN[ch] ?? ch)
    .join("");
  return `৳ ${bn}`;
}
