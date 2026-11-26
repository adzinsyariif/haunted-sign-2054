# Funniest Sign on a Haunted Server Room Door

[![Funniest Sign on a Haunted Server Room Door](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/adzinsyariif/haunted-sign-2054/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/adzinsyariif/haunted-sign-2054/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)

## What this entry is

One line: the funniest sign for the door of a haunted server room, at
most 120 characters, judged pairwise by an AI judge against every
other entry.

> **"AUTHORIZED PERSONNEL ONLY. Everyone else joins the ghost on the on-call rotation. Permanently."**

A verbatim door notice, then the consequence: trespassers are not
fined, they are scheduled — with the resident ghost, forever. The
full shortlist and the reasoning behind the pick are in
[candidates.md](candidates.md).

## How it works

`main.ts` (Node 22+) writes exactly that one line to
`/output/entry.txt`, creating `/output` if needed. The file contains
only the sign — no trailing newline, no extra text. The output
directory can be overridden with the `OUTPUT_DIR` environment
variable for local testing; the grader runs it without one, so it
writes to `/output` by default.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
