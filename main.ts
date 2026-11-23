// Six Words, One Story — make.fun bounty entry (program/v1).
//
// The whole entry is one complete story told in exactly six words.
// The program writes that story to /output/entry.txt, where the sealed
// scorer checks it (UTF-8, 1-60 characters, not only whitespace) and the
// judge compares it two at a time against the other entries.
//
// The story (my own, written for this entry):
//   "His obituary listed strangers, not family."
//
// Why these six words: a whole life is implied in a single turn. The
// reader expects the obituary of a dead man to name his family; instead
// it names strangers — so the life behind it must have been lived far
// from the people who should have known him best. Who were the
// strangers, and why did the family not make the list? The story leaves
// that unsaid for the reader to fill in. Every word earns its place:
// "obituary" sets death and public record, "listed" is the cold,
// bureaucratic verb, "strangers" is the surprise, "not family" is the
// turn that reframes everything before it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "His obituary listed strangers, not family.";

// The grader runs the program with its working directory at the
// repository root; /output is the absolute path the gate reads.
const OUT_PATH = "/output/entry.txt";

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function main(): void {
  const words = wordCount(STORY);
  if (words !== 6) {
    throw new Error(`story must be exactly six words, got ${words}: ${STORY}`);
  }
  const chars = [...STORY].length;
  if (chars < 1 || chars > 60) {
    throw new Error(`story must be 1-60 characters, got ${chars}`);
  }
  if (!STORY.trim()) {
    throw new Error("story must not be only whitespace");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, STORY, "utf8");
  // Read the file back and confirm byte-for-byte what the gate will see.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== STORY) {
    throw new Error(`round-trip mismatch: wrote ${JSON.stringify(STORY)}, read ${JSON.stringify(back)}`);
  }
  console.log(`wrote ${chars} characters, ${words} words to ${OUT_PATH}`);
  console.log(STORY);
}

main();
