# Editorial design system and exhaustive rollout

**State as of 2026-10-20:** global editorial typography is enabled for all content articles. The **semantic review of most chapters is not complete**. Three earlier pilot pages contain authored semantic treatment. This document defines the next migration and its acceptance gate without conflating page renderability with mathematical correctness.

## Architecture

### A. Global, automatic styling (every Markdown page)

- Source: `quartz/styles/editorial.scss`, included once by `quartz/styles/custom.scss`.
- Quartz fonts stay **Schibsted Grotesk** for headings, **Source Sans Pro** for body, and **IBM Plex Mono** for code.
- Global scale covers H2/H3/H4, paragraph rhythm, width of long paragraphs, wide equations, tables, images, separators, and responsive spacing.
- Heading and table styles are **structural**. They do not attempt to decide whether a statement is true, proved, definitional, or merely illustrative.
- Styling inherits Quartz's **light/dark theme** variables; color accents never carry information by themselves.

### B. Authored, semantic styling (review page by page)

Use Markdown so KaTeX, links, and normal Quartz conversion still work:

~~~md
> [!definition] Group
> A set with an associative operation, identity and inverses.

> [!axiom] Associativity
> The operation satisfies $(ab)c=a(bc)$.

> [!lemma] Identity is unique
> No group can have two distinct two-sided identity elements.

> [!theorem] Lagrange's theorem
> If $H\leq G$ and $G$ is finite, $|H|$ divides $|G|$.

> [!proof] Proof
> Supply the complete justification here. Do not shorten it to a summary.

> [!proof-sketch] Main idea
> This is explicitly not a complete proof.

> [!distinction] Necessary vs sufficient
> These are different logical relationships between conditions.

> [!example] Multiplicative order
> $2^3\equiv1\pmod7$ but $2^6\equiv1\pmod7$ as well.

> [!counterexample] Why commutativity cannot be assumed
> Function composition need not commute.
~~~

**Semantic tokens:** `--ed-modal` (violet), `--ed-meaning` (teal), `--ed-knowledge` (ochre), and `--ed-logic` (blue). They indicate content roles: theorem/lemma, definition/axiom, distinction/counterexample, and proof/example respectively. Text labels are mandatory even when colors are displayed.

**Keywords:** use `<span class="ed-term ed-term--definition">...</span>` or the corresponding `--theorem`, `--distinction`, `--modal`, `--meaning`, `--knowledge`, or `--logic` classes on carefully chosen first mentions and confusing contrasts. Do not automatically decorate **bold** text or mathematical symbols.

**Proof integrity:** a `[!proof]` callout must contain an actual proof. A `[!proof-sketch]` callout should never appear to close a theorem's full proof obligation. The existing mathematical proof-review ledger remains the source of record for rigorous proof review. No green badge, style class or CI check is a proof certificate.

### C. Content-specific diagrams

Diagrams must communicate mathematical relationships (e.g., the distinct axes of truth), not merely decorate pages. Preserve good existing figures. Review each figure for mathematical accuracy, readable labels, meaningful alternatives, and whether a separate small-screen version is necessary.

The Truth page uses `pl-truth-axes.svg` for wide screens and `pl-truth-axes-mobile.svg` for narrow screens. Both carry meaningful alt text and have equivalent adjacent prose. That dual layout is a **pattern to consider**, not a demand that every diagram have two images.

## Site inventory and editorial coverage

`editorial-coverage.json` lists **every Markdown article**, including the landing page and Path to SLT. The manifest distinguishes:

- `semanticReview`: `pending`, `pilot` or `complete`;
- `mobileReview` and `darkReview`: `pending` or `complete`;
- `diagramReview`: `pending`, `complete` or `not-applicable` when no images exist;
- `kind`: `topic`, `landing`, or `learning-path`;
- `track`: content group to make migration batching manageable.

Three original prototypes are `pilot`. They have **not** been marked `complete`. The rest are `pending` until actually inspected and edited. A global CSS rule is not an editorial review.

From the `quartz/` directory:

~~~bash
node scripts/editorial-inventory.mjs --check
node scripts/editorial-inventory.mjs --json > editorial-inventory.report.json
node scripts/editorial-inventory.mjs --write
~~~

The **check** command compares the manifest against the Markdown directory, detects duplicates, missing pages, invalid statuses, and invalid no-diagram exemptions. It also parses Markdown via **remark-parse** to report headings, theorem/definition/proof/example candidates, existing callouts and images. The **JSON** command outputs a structured audit report (including headings) for editors. The **write** command adds newly discovered files while preserving existing review decisions.

These candidate counts are only heuristics. They are **not** inferred certifications: an unlabeled theorem might exist in prose, and a heading called "Proof" might introduce an incomplete argument.

The GitHub Pages workflow runs `--check` **before the site build** and fails when an article is absent from the manifest. The existing build, mathematical notation, link and arithmetic checks still run afterward.

## Migration progress

Four batches now cover logic, number constructions, groups, functions and elementary algebra, linear algebra and geometry. **38 of 63 pages** are tagged `pilot`; none is certified `complete`. The remaining 25 are pending, and responsive/diagram statuses are still unreviewed. See [Editorial migration log](./EDITORIAL-MIGRATION-LOG.md) for the precise content-level changes and substantive clarifications.

## Recommended migration batches

Each batch should remain reviewable: source change, rendered screenshot, mathematical spot check and status update together.

1. **Logic, notation and set theory**: taxonomy terminology, proofs, logical forms, symbolic cross-references.
2. **Number constructions**: Peano, integer/rational/real/complex quotient definitions, proof dependencies, completeness.
3. **Groups and abstract algebra**: operations, subgroups, theorems, quotient well-definedness, concrete counterexamples.
4. **Functions and elementary algebra**: assumptions and domains, equivalent transformations, common failure modes.
5. **Linear algebra and geometry**: vector/matrix diagrams, axes and coordinate labels, transformations.
6. **Calculus and analysis**: theorem hypotheses, sequential arguments, derivative/integral transformations, convergence.
7. **Probability, combinatorics and statistics**: events and conditioning, model assumptions, distribution graphics, inference.
8. **Advanced mathematics and SLT**: definition chains, proof caveats, theorem provenance, dependency map.
9. **Navigation**: homepage and guided route consistent with the new hierarchy.

The exact batching can follow the `track` field, but **nothing should be silently skipped** if a page sits outside the expected subject group.

## Acceptance checklist for one page

A page may be changed to `semanticReview:"complete"` only after:

- Every definition, axiom, theorem, lemma, proof, proof sketch, example and counterexample that warrants emphasis is **correctly identified**.
- The visual treatment is deliberately selective and does not turn every paragraph into a callout.
- Formal theorem hypotheses and full derivations remain intact. No proof has been replaced by a summary.
- No term is styled based on a guess about its mathematical role.
- Links, references and inline/displayed math render.
- Every diagram is correctly described, readable and mathematically aligned with its prose.

Mark `mobileReview:"complete"` and `darkReview:"complete"` **separately**, only after actual rendered checks. Suggested widths are **320, 390, 768 and 1280 pixels**, with both color schemes represented. Check viewport overflow, mathematics scrolling, table legibility, chart labels, and keyboard access. Any outstanding critical accessibility failure blocks final acceptance.

Diagrams require their own status; a page can pass semantic review while its diagram work remains unfinished. **Proof review is a distinct process** with independent sign-off.

## Rollout completion gate

All 63 Markdown pages must be present in the coverage manifest, and all review fields must be `complete` or valid `not-applicable`, with no blocking render, accessibility or mathematical regression. The global typography rollout alone does not satisfy this gate.

**Next implementation work:** migrate the content group by group, add screenshot and accessibility checks as separate CI jobs, and only then mark individual pages complete. The manifest makes progress explicit rather than assuming that deployment means editorial approval.
