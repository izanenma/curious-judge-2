import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "There is a word in no language you know, for the moment a question",
  "first forms and has not yet found its shape. You have felt it a",
  "thousand times. You have never named it. It is waiting, just past",
  "the edge of what you can say.",
];

function main(): void {
  const text = LINES.join(" ");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
