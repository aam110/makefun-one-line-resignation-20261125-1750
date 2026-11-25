import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I resign: I work one day every four years, and HR still docked me for the other three.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
