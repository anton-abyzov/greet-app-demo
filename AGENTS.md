<!-- SW:META template="agents" version="3.1.0" sections="header,loop,rules" -->

<!-- SW:SECTION:header version="3.1.0" -->
# greet-app

This project uses SpecWeave. Plan increments in `.specweave/increments/NNNN-slug/spec.md`: Problem, Scope, Acceptance Criteria, Approach and Tasks. Adjacent `ledger.jsonl` records claims and completions. Start sessions with `specweave pickup`.
<!-- SW:END:header -->

<!-- SW:SECTION:loop version="3.1.0" -->
## The loop

1. `specweave pickup`: applies the latest handoff and prints the open increment, next task and ACs, other claims, branch state, notes and project memory.
2. New work needing ACs or handoff: `specweave create-increment "title"`, then fill spec.md. First ask the user only their critical decisions, one at a time with a recommended answer, and record them under `## Decisions` (sw-increment). If an open increment owns the files, add ACs and tasks there. Small fixes need no increment.
3. `specweave task claim T-NN`, edit only that task's Files, commit as `NNNN: what changed`, then `specweave task done T-NN --run "<its Test>"`.
4. `specweave verify`, a review in a fresh session for anything that ships, then `specweave complete NNNN`.
5. Before stopping or switching tools/accounts: `specweave handoff --reason "<why>"`.

**Handoff.** When the user says "hand off", "out of tokens" or "switching accounts", or "[Usage limit reached" appears (outside SpecWithCode), run `specweave handoff --reason "<why>"`; tell them to say "pick up" in the other tool. "[Usage limit approaching" or usage heads-ups mean keep working; say so. When the user says "pick up", run `specweave pickup`; continue its task, passing any given id/title. Take the newest handoff if several; say which.

Tasks in spec.md: `### T-01 Title`, then `- AC: AC-01 | Files: src/a.ts, tests/e2e/a.test.ts | Test: npm test -- e2e/a`. An AC is met when its tasks are done. Leave notes with `specweave note "<text>"`. Skills: `.agents/skills/sw-*` and `.claude/skills/sw-*`; other tools: `npx vskill install anton-abyzov/specweave/sw-do`.
<!-- SW:END:loop -->

<!-- SW:SECTION:rules version="3.1.0" -->
## Rules

- Use headless Chrome/Playwright CLI for browser tests and automation: `headless: true`, `PWDEBUG=0`, `PLAYWRIGHT_HTML_OPEN=never`, HTML reports `open: 'never'`. Save captures to files; propagate to subagents. Before opening an essential visible browser, ask the user and wait for explicit approval. Headless failure is not approval.
- A task is done when its Test exits 0 and you have seen the real output. A Test checks the AC as users would (CLI, HTTP, UI, API); add unit tests only when asked or when config or conventions require them. Never skip, weaken or delete a test to pass, and never set a status by hand.
- One agent per branch/worktree: `git worktree add ../NNNN-<agent> -b inc/NNNN-<agent>`. Claims older than 2h are stale. Merge `ledger.jsonl` conflicts keeping every line from both sides.
- Decisions that must outlive this session go in spec.md Approach, or as one file per fact in `.specweave/memory/` with a line in its `MEMORY.md` index. Memory is committed, so every tool and account sees it.
- Check a secret exists without printing it; never commit `.env*`.
- Without the CLI, append ledger lines yourself, one JSON object per line, UTF-8, LF: `{"t":"T-01","e":"claim","by":"<tool>@<host>","at":"<ISO time>"}` (`e` is claim, done, release, skip or block; `done` needs `"evidence":"<commit sha>"`, `skip` needs `"note":"<why>"`).
<!-- SW:END:rules -->

## Commands

| Action | Command |
|---|---|
| Build | TODO: not detected — fill in the build command |
| Test | `npm test` |
| Lint | TODO: not detected — fill in the lint command |

If a cell still says TODO, fill it in from `package.json`/`Makefile` and commit; `specweave verify` runs these rows.

## Project notes

(architecture map, things agents get wrong here, recurring mistakes; keep it short)
