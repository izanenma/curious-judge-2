import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const parts = [
  "There is a word in no language you know, for the moment",
  "a question first forms and has not yet found its shape.",
  "You have felt it a thousand times. You have never named it.",
  "It is waiting, just past the edge of what you can say.",
];

function main(): void {
  const text = parts.join(" ");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
}

main();
