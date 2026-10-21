# Mathematics Notes

A comprehensive mathematics reference covering logic and set theory through
real analysis, measure theory, and algebraic geometry, built toward the
foundations of machine learning research (up to singular learning theory).

The notes are published as a [Quartz](https://quartz.jzhao.xyz/) site and
deployed to GitHub Pages on every push to `main`.

## Vision

**The resource you come to for clarity.** Not a course with drills, and not a
terse formula sheet: the aim is to be the place you reach for *precisely when
another source lost you at the step that actually confused you*. The
highest-leverage content here is the **detailed, highly precise worked-example
walkthrough** — every step shown (including the algebra most sources skip),
every step justified, every symbol pronounced, and the genuinely confusing
branch (the sign, the quadrant, the edge case, the "why not the other reading")
walked explicitly rather than waved past.

Guiding principles:

- **Foundations-first.** Define the basic terms and motivate a concept before any
  formula; pronounce every symbol at first use (how to read it aloud, not just
  what it means).
- **Textbook-level coverage, minus the problem sets.** Everything a standard
  textbook would cover — theorems, techniques, edge cases — but **no exercises**.
  Practice problems are abundant elsewhere; a genuinely complete, clear worked
  example is rare, so that is where the effort goes.
- **Worked examples are the product.** Prefer one example done exhaustively over
  three done fast, with the diagram pinned to that same example so picture and
  steps can never drift.
- **Clarity is enforced by tooling.** Every numeric worked example
  is re-proved from scratch in CI (the arithmetic harness), and the reasoning
  (definitions, hypotheses, proofs) is checked by a separate resumable review
  process. See below.

The whole thing is built deliberately toward one destination — the foundations of
**singular learning theory** for interpretability research — which gives the
otherwise-broad coverage a spine and a reading order.

## Editorial design system

A shared typography system now styles **every Markdown page**, while semantic labels for definitions, theorems, proofs, proof sketches, distinctions, examples, and counterexamples are added deliberately during a separate editorial review. The original test pages are [Propositional Logic: Truth](./quartz/content/propositional-logic-zeroth-order-logic.md#truth), [Group Theory Foundations](./quartz/content/group-theory-foundations.md), and [Construction of the Reals](./quartz/content/construction-of-the-reals.md). The full 66-page coverage manifest and parser-backed inventory are described in the [Editorial rollout guide](./quartz/EDITORIAL-ROLLOUT.md). [Editorial migration log](./quartz/EDITORIAL-MIGRATION-LOG.md) records which subjects have actually received authored semantic treatment and which still await visual review. CI checks that the manifest remains complete; semantic and responsive reviews are not falsely marked finished.

## Content

All content lives in [`quartz/content/`](./quartz/content/) as one Markdown file
per topic (64 topic pages, plus a landing page and a guided reading path toward
singular learning theory). The landing page and reading-order guide are in
[`quartz/content/index.md`](./quartz/content/index.md).

Pages are illustrated densely: **hundreds of purpose-built diagrams** (currently
366 figures in [`quartz/content/media/`](./quartz/content/media/)), each pinned to
a page's own worked example so the figure and the prose cannot drift apart.

Broad areas covered:

- **Logic & Proofs** — propositional and predicate logic, inference, proof techniques
- **Set Theory** — operations, relations, cardinality, countability
- **Foundations of number systems** — derivations of the integers, rationals, reals, and complex numbers from natural arithmetic, including well-definedness and completeness
- **Group theory foundations** — groups from the axioms, cyclic groups and Lagrange's theorem, homomorphisms and quotients, group actions, orbit-stabilizer, Cayley, and Burnside
- **Ring and field theory** — ring axioms, zero divisors, ideals and quotient rings, first/second/third isomorphism theorems, prime/maximal ideals, fractions of domains, field extensions, splitting fields and finite fields
- **Algebra** — number theory, functions, polynomial/rational/exponential/log/radical functions, complex numbers, sequences and series, conic sections
- **Linear Algebra** — vector spaces, four fundamental subspaces, eigenvalues, SVD, factorizations, matrix calculus
- **Geometry & Trigonometry** — Euclidean geometry from points to solids, transformations, trig functions, identities, unit circle, coordinate geometry
- **Calculus** — limits, derivatives, integrals, multivariable calculus, differential equations
- **Probability & Statistics** — combinatorics, distributions, estimation, hypothesis testing, regression, Bayesian inference
- **Optimization & Information Theory** — convexity, gradient descent variants, entropy, KL divergence
- **Discrete Math** — asymptotic notation, graph theory
- **Advanced** — real analysis, measure theory, algebraic geometry (with the connection to singular learning theory)

## Interactive widgets & quality gates

Most pages embed self-contained interactive widgets (vanilla JS + `<canvas>`, no
external dependencies) that live in
[`quartz/quartz/static/interactive/`](./quartz/quartz/static/interactive/):
**73 widgets across 43 pages**, including a Gaussian-elimination stepper, an
eccentricity morph for conic sections, a BFS/DFS graph explorer, and growth-rate
comparisons. Each widget sizes its own frame to its content, so nothing needs a
scrollbar.

Every push runs two CI gates before deploy:

- **Quality gate** (`quartz/scripts/check-quality.mjs`) — fails on KaTeX render
  errors, broken internal links or `#anchors`, broken image references, and empty
  image alt text (ratcheted to zero).
- **Mathematical figure audit** (`quartz/scripts/check-math-figures.mjs`) — verifies all 38 original ring, field, group and number-construction SVGs, authored alt text, captions and accessible diagram descriptions
  - [**Diagram guide and complete 38-figure catalog**](./quartz/MATHEMATICS-DIAGRAM-GUIDE.md)
- **Arithmetic harness** (`quartz/scripts/check-arithmetic.mjs`) — re-proves every
  numeric worked example in the notes from scratch (over 1,000 assertions, including recursive-arithmetic regression checks).
  When you add or change a worked example, add or adjust an assertion so it stays
  machine-verified.

The five new number-system foundations chapters have a **focused dependency audit** recorded in the review ledger; this is explicitly **not** a completed line-by-line rubric review. `check-review-status.mjs` displays such pages as `partial` and retains their open findings in the review frontier.

## Prose / proof review

The arithmetic harness guarantees the *numbers*; a separate, resumable process
covers the *reasoning* (definitions, theorem hypotheses, proof gaps, notation
consistency) — the layer no numeric check can reach. It is a tracked review
process, not a fatal CI gate (a judgment call should never block a deploy):

- **Rubric** (`quartz/scripts/REVIEW-RUBRIC.md`) — a versioned, example-anchored
  checklist applied identically to every page (the consistency layer).
- **Status script** (`quartz/scripts/check-review-status.mjs`) — computes each
  page's foundational depth from its `prerequisites:` frontmatter, hashes its
  contents, and reports the review frontier (lowest-depth page not yet reviewed).
  Editing a page changes its hash, which auto-flags it *stale* for re-review. Run
  it to resume exactly where the last pass left off.
- **Ledger** (`quartz/content/review-status.json`) — per-page findings with a
  lifecycle (`open` / `resolved` / `false-positive`).

Review proceeds foundations-first, so errors in the roots are caught before the
pages that build on them.

## File Structure

```
notes-mathematics/
├── quartz/                  # Quartz static-site generator
│   ├── content/             # All notes (one Markdown file per topic)
│   │   ├── index.md         # Landing page + reading-order guide
│   │   ├── set-theory.md
│   │   ├── ...
│   │   ├── media/           # Images and diagrams (~366 figures)
│   │   └── review-status.json  # Prose/proof review ledger
│   ├── quartz/static/interactive/  # Self-contained interactive widgets
│   ├── scripts/             # CI gates (quality + arithmetic), review tooling, build injectors
│   │   ├── check-quality.mjs
│   │   ├── check-arithmetic.mjs
│   │   ├── check-review-status.mjs
│   │   └── REVIEW-RUBRIC.md
│   └── quartz.config.default.yaml  # Site configuration
├── .github/workflows/       # GitHub Pages deploy workflow
└── README.md                # This file
```

## Local Development

```bash
cd quartz
npm ci
npx quartz plugin install
npx quartz build --serve   # preview locally
```

## Adding Content

Add or edit Markdown files in `quartz/content/`. Save images to
`quartz/content/media/` and reference them relatively:

```markdown
![Description of image](./media/my-diagram.png)
```

Avoid fixed dimension attributes like `{width="..." height="..."}` so images
render responsively.

## License

This work is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).

You are free to share and adapt this material for any purpose, provided you give
appropriate credit and distribute contributions under the same license.
