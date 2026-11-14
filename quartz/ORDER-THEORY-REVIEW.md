# Order Theory: mathematical and diagram review

**Scope:** [Order Theory](./content/order-theory.md), November 14, 2026. This is a source-level correctness and accessibility pass, not independent peer review or proof-assistant certification.

## Mathematical checks

| Topic | Verification performed |
| --- | --- |
| Preorder comparison and quotient | Reflexivity, transitivity, injectivity test for antisymmetry, representative independence and quotient order |
| Divisibility and strict orders | Positive-integer restriction, antisymmetry proof, strict-order construction |
| Hasse diagrams, extrema and lattices | Cover relations, maximal versus greatest, set and divisor join/meet examples |
| Order duality | Verified opposite poset axioms, the 3-element V-poset example, and swapped extrema |
| Knaster-Tarski | Complete-lattice and monotonicity assumptions, least fixed point proof and complete fixed-point lattice proof |
| Finite fixed-point iteration | Increasing chain, finite stabilization and leastness; exhausted all 16 dependency states |
| Infinite iteration caution | Verified monotone piecewise map on $[0,1]$, its finite iterate formula and nonfixed supremum |
| Galois connection | Proved image/preimage equivalence and exhausted all 8 named-role subsets against all 4 tier subsets |
| Closure/interior | Derived unit/counit, monotonicity, extensiveness/reductiveness and idempotence |

The finite checks in [the arithmetic harness](./scripts/check-arithmetic.mjs) validate worked examples. They do not replace the mathematical proofs.

## Figure and presentation checks

- The Order Theory chapter now uses **12** source-editable SVG figures, including two newly authored duality and Galois-closure diagrams.
- Checked every image is used exactly once, has meaningful Markdown alt text and an adjacent explanatory caption, and has SVG title/description metadata.
- Checked the new figures' viewBox dimensions, consistent dark editorial colors, explicit text labels and accessibility structure.
- Converted pre-existing standalone single-dollar display equations to proper paired double-dollar math delimiters, including inside callouts.
- Updated the diagram audit's inventory from 147 to **149** figures overall and Order Theory's catalog entry from 10 to **12**.

**Remaining visual review:** Source inspection and XML correctness alone cannot certify small-viewport legibility or the appearance of the entire Quartz page in both light and dark themes. These require rendered-browser review. Accordingly, the editorial coverage entry remains **semanticReview: pilot**, **mobileReview: pending**, **darkReview: pending**, and **diagramReview: pending**. Do not change those statuses to complete merely because the build passes.

## Publication and scope

The PR is acceptable for publication after editorial inventory, SVG/XML audit, Quartz and KaTeX build, link quality gate, and arithmetic harness all pass. These checks validate structure, rendering and sampled calculations, not universal proof truth.

This chapter is intended to be a substantial introduction, not a treatise on order theory. Zorn's lemma, transfinite iteration, domain theory, full distributive-lattice representation theorems and general categorical adjunctions remain topics for advanced follow-on material.
