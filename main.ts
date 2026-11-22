// judge-feel-held-20261122: writes one short text to /output/entry.txt.
// The text is a small scene of the judge's own day ending — the last
// verdict read, the screen dark, a dog asleep with its whole warm weight
// against your leg, and a kettle that can wait. It shows calm; it never
// tells the reader to relax.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The last verdict is in, the screen has gone dark, and the dog has chosen your seat — leaning its whole warm weight against your leg, sighing once, asleep before you. The kettle can wait. So can everything else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
