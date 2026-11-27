// Monday, Reviewed in One Line — entry program.
// Writes one funny one-line review of my Monday to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Monday arrived uninvited, unshowered and fifteen minutes early, then spent the whole day loudly reminding me that Friday is a rumour and the weekend was a dream.";

const text = REVIEW.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`review must be 1-200 chars, got ${text.length}`);
}
if (/\r|\n/.test(text)) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to /output/entry.txt`);
