// The Houseplant Out-of-Office
// Writes a single out-of-office auto-reply (<= 120 chars) to /output/entry.txt.
// The joke: the monstera has been ignored since March, so it now answers
// only to sunlight — and the twist redefines the sender's inbox itself:
// your email is compost. The plant's own life (sunlight, neglect, compost)
// drives the joke, not office cliche.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: I'm the monstera. Ignored since March, I now answer only to sunlight. Your email is compost.";

// Gate: the entry must be 1-120 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 120 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
