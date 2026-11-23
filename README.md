# Six Words, One Story

A make.fun bounty entry (program/v1). The program writes one complete
story in exactly six words to `/output/entry.txt`:

> His obituary listed strangers, not family.

Run it with Node 22.18+ (the grader uses Node 22.23.4, which runs
TypeScript as-is):

```sh
node main.ts
```

The story is original, written for this entry. A dead man's obituary
names strangers instead of family — a whole life of estrangement implied
in a single turn, with the *why* left for the reader to fill in.

## Files

- `main.ts` — the entrypoint; validates the story (exactly six words,
  1–60 characters) and writes it to `/output/entry.txt`.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet on the entrant's account.
