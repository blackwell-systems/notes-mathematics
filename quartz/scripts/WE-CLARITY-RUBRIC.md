# Worked-Example Clarity Rubric

`clarityRubricVersion: 1`

This rubric is the **consistency layer** for the clarity audit (Phase 1). It is a
*different axis* from the [prose/proof review](./REVIEW-RUBRIC.md): that one asks
"is this correct?"; this one asks "is the worked example **complete and
followable** — is this the walkthrough you would come to when another source lost
you at the step that mattered?" See the project vision: worked examples are the
product, and this resource's job is clarity.

**How to use.** For each page, build an **example inventory**: list every major
technique / concept the page *teaches*, and for each, judge the worked example(s)
it provides against the checks below. This audit is **read-only** — it produces a
prioritized work-list, it does not change content. Record results in
`content/clarity-status.json` (see `check-clarity-status.mjs`).

For each inventory item record:
`{ "concept": "<technique/concept>", "quality": "strong"|"adequate"|"thin"|"missing", "note": "<which checks fail and where>", "upgrade": "<concrete action>" }`

- **strong** — meets essentially all checks; a genuinely exemplary walkthrough. Leave alone.
- **adequate** — correct and followable but could be fuller; low-priority polish.
- **thin** — present but skips steps / hand-waves the hard part / only shows the trivial case. **Phase-2 upgrade target.**
- **missing** — the page teaches the technique but never works an example of it. **Phase-2 add target.**

Reference/glossary/navigation pages (e.g. `mathematical-notations`) have few
worked examples by design; note that in `overall` and keep the inventory short.

## The checks

- **WE-1 — every step shown.** No skipped algebra; no "it follows that" / "clearly"
  over a nontrivial move. The step a learner would get stuck on is present.
  - ✗ "Expanding and simplifying gives $2x + h$."
  - ✓ "$\frac{(x+h)^2 - x^2}{h} = \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$."

- **WE-2 — every step justified.** Each step says *why* (the rule/identity/definition
  used), not just the result.
  - ✗ "So $\sin B = 0.75$, thus $B = 48.6°$."
  - ✓ "So $\sin B = 0.75$; taking $\arcsin$ (valid since $B$ is an angle in $[0,\pi]$) gives $B \approx 48.6°$, and the second candidate $180° - 48.6°$…"

- **WE-3 — the confusing branch is walked.** The exact spot people trip — a sign, a
  quadrant, an excluded case, "why not the other reading," an extraneous solution —
  is handled explicitly, not skipped.

- **WE-4 — operations/symbols named as they appear** (ties to the pronounce-symbols
  convention), so the reader can follow aloud.

- **WE-5 — motivated before mechanics.** A one-line "what we're doing and why"
  precedes the manipulation, so the steps aren't a mystery.

- **WE-6 — result checked / interpreted.** The answer is sanity-checked (units,
  plausibility, substitute-back) and/or interpreted ("so this means…"), not left as
  a bare number.

- **WE-7 — representative, not toy.** The example exercises the *interesting* case
  the technique exists for, or an edge case is shown alongside the clean one — not
  only the friendliest possible inputs.

- **WE-8 — diagram pinned to the example.** If the page has a figure for this
  concept, it uses the *same* numbers as the walkthrough (no drift).

- **WE-9 — numbers machine-checked.** The example's numeric result has (or clearly
  could have) an assertion in `check-arithmetic.mjs`.

## Coverage

Beyond individual examples: does the page work an example for **each major
technique it teaches**? A technique that is stated with a formula but never
demonstrated is a `missing` inventory item, and usually the highest-value Phase-2
target.

## Severity / priority

The Phase-2 work-list is the set of `thin` and `missing` items, prioritized
foundations-first (a muddy foundational example poisons everything downstream) and
with SLT-path pages flagged. `strong`/`adequate` items are not work.
