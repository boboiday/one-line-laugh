import { writeFileSync, mkdirSync } from "node:fs";

// One funny line for make.fun's The One-Line Laugh bounty.
// Writes a single sentence (<=200 chars) to /output/entry.txt, deterministically.
const line =
  "My washing machine has one job, and it still eats exactly one sock per load like it's paying rent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
