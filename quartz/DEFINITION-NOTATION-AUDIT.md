# Definitional notation audit

Updated: 2026-11-11. Scope: all 97 Markdown files in `quartz/content/`.

## Convention

Use `:=` for the initial stipulation of a reusable mathematical name. Prefer `: \iff` to define a predicate or a relation by an equivalent logical condition. Use `=` for equalities that are asserted, derived, checked or solved. An ordinary assignment of example data (such as “take `x=2`”) and a conditional premise (“if `A={1,2,3}`”) do not automatically require a definitional symbol.

A useful test is: *does this occurrence create notation that the following argument will reuse, or does it make a claim about objects already introduced?*

## Audit result

The Mathematical Notations chapter already made the correct distinction, but several chapters used equality in explicit definitions. The editorial pass inspected all 97 pages for first-introduction cues and corrected unambiguous cases across 29 chapters, including set theory, probability, functions and relations, general topology, algebra, category theory, vector calculus and algebraic geometry.

The repairs are semantic-preserving typography and phrasing edits. Equality between two set descriptions, calculations, proof obligations, theorem conclusions, assumed parameter values and function evaluations has intentionally been retained. It would be incorrect to globally replace `=` with `:=`.

### Representative corrections

| Kind | Previously | Now |
| --- | --- | --- |
| Named sample space | `S = {1,2,3,4,5,6}` | `S := {1,2,3,4,5,6}` |
| Named relation | `R = {(1,2),(2,3)}` | `R := {(1,2),(2,3)}` |
| Chosen topology | `τ = {∅,{a},X}` | `τ := {∅,{a},X}` |
| Defined map | `f(x) = x²` | `f(x) := x²` |
| Characterization | `S = {1/n:n≥1} = {1,1/2,...}` | `S := {1/n:n≥1} = {1,1/2,...}` |

The final row deliberately preserves the second `=` as an assertion that two expressions name the same set.

## Reproducing the scan

From `quartz/`:

```bash
node scripts/audit-definition-notation.mjs
node scripts/audit-definition-notation.mjs --details
node scripts/audit-definition-notation.mjs --json
```

The scanner inventories definitional markers and candidate first-introduction lines. It is **advisory**, because a regex cannot determine whether a mathematical equality is a definition, an assumption, or a theorem statement. The CI workflow runs its summary alongside mathematical and structural checks. Remaining flagged lines are review candidates, **not an established count of errors**.

## Review limits

This was a repository-wide targeted notation review, not a line-by-line proof audit. Formulas introduced across multiple lines, implicit definitions, diagrams, and mathematical correctness require separate manual verification. The existing arithmetic and figure checks continue to serve their own different purposes.
