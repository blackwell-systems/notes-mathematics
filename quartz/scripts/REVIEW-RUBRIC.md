# Prose / Proof Review Rubric

`rubricVersion: 1`

This rubric is the **consistency layer** for prose/proof review: the same checks,
applied identically to every page. It covers what the [arithmetic harness](./check-arithmetic.mjs)
cannot: the correctness of *statements, definitions, and reasoning*, not numbers.

**How to use.** Read a page against every check below. For each issue, record a finding
in `content/review-status.json` (see `check-review-status.mjs`) as
`{ "id": "<CHECK-ID>", "severity": 1|2|3, "quote": "<short offending text>", "issue": "<what's wrong>", "status": "open" }`.
When a page is edited to fix a finding, its content hash changes, so the status script
re-flags it as **stale** and the fix is re-confirmed on the next pass. Resolved findings
stay in the ledger (audit trail) with `"status": "resolved"`.

**Severity.** `1` = wrong/misleading (a false statement, a real proof gap, a dropped
hypothesis). `2` = imprecise/incomplete (ambiguous quantifier, missing edge case, a sketch
passed off as a proof). `3` = polish (undefined term used slightly early, notation drift).
A build never fails on findings; they are triaged, not gated. Treat "reviewed" as
"checked against this rubric, findings triaged," **not** "proven correct."

**Calibration.** Each check has a ✗ (fails) and ✓ (passes) example so different sessions and
subagents flag the same things. When in doubt, match the examples, not your own taste.

---

## Definitions

- **DEF-1 — defined before use.** Every technical term is defined (or explicitly linked to
  its defining page) before it is used to define something else.
  - ✗ "The kernel of $f$ is the fiber partition." (fiber not yet defined)
  - ✓ "…its preimage of a single point, the **fiber**, …" then uses fiber.

- **DEF-2 — quantifier order and scope.** $\forall/\exists$ appear in the correct order and
  bind the intended variables; "for all … there exists" is not silently swapped.
  - ✗ "there is an $n_0$ such that for all $c$…" when the definition needs "for some $c$, for all $n \ge n_0$."
  - ✓ "there exist $c, n_0$ such that for all $n \ge n_0$, …".

- **DEF-3 — edge cases.** Boundary/degenerate inputs are handled or explicitly excluded:
  empty set, $n=0$, $0!$, division by zero, singleton, the whole set, negative/complex where relevant.
  - ✗ "$x = -b/m$" with no note that $m \ne 0$.
  - ✓ "$x = -b/m$ (provided $m \ne 0$)".

- **DEF-4 — symbol pronounced at first use.** Per project convention, each new symbol is
  introduced with how to read it aloud, not just its meaning.
  - ✗ introduces $\hat\lambda$ with only "the local learning coefficient."
  - ✓ "$\hat\lambda$ (read 'lambda-hat'), the local learning coefficient."

## Theorem / claim statements

- **THM-1 — all hypotheses present.** A named theorem states **every** hypothesis it needs;
  none is silently dropped. (The classic failure: omitting coprimality, continuity,
  finiteness, positive-definiteness, independence.)
  - ✗ "If $a^{p-1} \equiv 1 \pmod p$" with no "$\gcd(a,p)=1$".
  - ✓ "If $p$ is prime and $\gcd(a,p)=1$, then $a^{p-1}\equiv 1\pmod p$."

- **THM-2 — existence vs uniqueness.** "There exists" and "there is a unique" are
  distinguished; uniqueness is claimed only when it holds.
  - ✗ "the solution is…" for a system with many solutions.
  - ✓ "a solution is…" or "the unique solution (since the matrix is invertible) is…".

- **THM-3 — direction / converse.** Implications are not silently treated as biconditionals;
  a converse is asserted only if true.
  - ✗ "differentiable, therefore … iff continuous."
  - ✓ "differentiable implies continuous (the converse fails: $|x|$)."

- **THM-4 — conventions/constants.** Stated constants, signs, and conventions are correct and
  internally consistent (e.g. RLCT pole/sign convention, layout of the gradient, base of log).

## Proofs / reasoning

- **PRF-1 — justified steps.** Each "therefore / thus / so" follows from what precedes; no
  jump hides a nontrivial lemma.
- **PRF-2 — hypotheses used.** Every hypothesis stated is actually used (or its non-use is
  intentional and noted); nothing load-bearing is assumed without statement.
- **PRF-3 — no circularity.** The argument does not assume what it is proving (directly or via
  a linked result that depends back on it).
- **PRF-4 — sketch labeled as sketch.** An intuition or outline is presented as such, not as a
  complete proof; genuine gaps are acknowledged ("we omit the measure-theoretic details").

## Consistency

- **CON-1 — notation within page.** One symbol means one thing throughout the page; reused
  letters are disambiguated.
  - ✗ $n$ is sample size in one section and a vector dimension in the next with no note.
- **CON-2 — consistency with linked pages.** A claim, definition, or convention agrees with
  the page it links to (or the difference is flagged, e.g. numerator vs denominator layout).

## Scope

- **SCO-1 — no overclaiming.** Statements are bounded to the regime where they hold; "always /
  every / any" is literally true or softened.
  - ✗ "gradient descent finds the global minimum."
  - ✓ "gradient descent finds a local minimum; for convex $f$, the global one."
