# Editorial prototype reference

The Truth, Group Theory Foundations, and Construction of the Reals articles were the first **three experimental pages** for semantic mathematics presentation. Their typography and callout rules informed the global design system.

**Current status:** typography now applies to all Markdown pages; semantic labels remain authored and require review. The three original pages are recorded as `pilot`, not `complete`, in `editorial-coverage.json`.

See **[Editorial design system and exhaustive rollout](./EDITORIAL-ROLLOUT.md)** for the canonical guide to colors, typography, mathematical callouts, editorial review, accessibility, the coverage manifest, the parser-based audit tool, migration phases, and acceptance criteria.

The prototype still demonstrates:

- [Truth](./content/propositional-logic-zeroth-order-logic.md#truth): conceptual axes, two responsive SVG versions, term emphasis, paired examples.
- [Group Theory Foundations](./content/group-theory-foundations.md): definitions, axioms, theorem emphasis, proof descriptions, counterexamples.
- [Construction of the Reals](./content/construction-of-the-reals.md): technical definitions, field-completeness theorem, explicit proof-dependency caveats.

The reusable implementation lives in `quartz/styles/editorial.scss`, imported through `quartz/styles/custom.scss`. Subject-specific Truth styling remains local to the Truth components; there is no blanket styling of arbitrary bold words.

The new CI coverage gate verifies that **every page is in the manifest**, not that every mathematical theorem or diagram has been reviewed.
