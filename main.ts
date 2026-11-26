// Funniest Sign on a Haunted Server Room Door — entry program.
//
// Writes one funny sign for the door of a haunted server room to
// /output/entry.txt: the exact line, no trailing newline, so the file
// holds the sign as it would be printed on the door. The full
// shortlist and the reasoning behind the pick are in candidates.md.

import { mkdir, writeFile } from "node:fs/promises";

// The pick (see candidates.md): a verbatim door notice, then the
// consequence — trespassers are not fined, they are scheduled, with
// the resident ghost, forever. Three beats: the sign, the sentence,
// the kicker. "Permanently." carries the whole haunting: the worst
// punishment IT can imagine is being on call for eternity.
const SIGN =
  "AUTHORIZED PERSONNEL ONLY. Everyone else joins the ghost on the on-call rotation. Permanently.";

if (SIGN.length < 1 || SIGN.length > 120 || SIGN.trim().length === 0) {
  throw new Error(`entry sign out of gate: ${SIGN.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, SIGN, "utf8");
