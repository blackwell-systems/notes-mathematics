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

## Selective source-based expansion, November 14, 2026

The [Assumptions of Physics: Bare Minimum, Order Theory](https://assumptionsofphysics.org/autogen/bareminima/OrderTheory.pdf) overview was used as a **topic map**, especially its treatment of lattice algebra, ideals/filters, and concrete representations of lattice operations. The site does not reproduce its prose or assume all its propositions are correct. We selected connections with high teaching value, supplied independently written proofs and examples, and excluded the source's less reliable broad claims.

| Addition | Mathematical acceptance check |
| --- | --- |
| Algebraic vs order-theoretic lattice definitions | Proved both directions: associative, commutative, idempotent, absorbing operations recover a partial order and the stipulated operations are actual joins and meets |
| Join/meet across different structures | Checked ordinary union/intersection for powersets, generated subgroup/intersection for subgroups, sum/intersection for vector subspaces, and arbitrary open-set meets as interior of intersection |
| Order ideals and filters | Explicit nonemptiness convention, downward/upward closure and directedness; proved ideals are join-closed down-sets and filters are meet-closed up-sets in lattices |
| Closure systems (Moore families) | Proved both directions of the correspondence between closure operators and intersection-closed families containing the universe, including the empty intersection |
| Closure-family worked example | Three facts with an inference rule requiring a third fact when two antecedents are present; checked seven closed subsets and the join of closed singletons versus their nonclosed union |
| Closure and Galois connection | Proved that closure regarded as a map into the fixed family is left adjoint to the inclusion map |

The [arithmetic regression harness](./scripts/check-arithmetic.mjs) now checks the displayed finite lattice equations, directedness counterexample, closure laws and all intersections of subfamilies of seven closed sets, plus finite integer witnesses for the generated-subgroup example. These computations do not certify universal proofs.

**Source caution:** The source is a compressed overview, not the authority for theorem hypotheses. It conflates the complete-lattice completion of the rational order with the ordinary real line in one remark; the two differ at their endpoints. We did not import that claim or broad descriptions of intuitionistic logic.

No new images were required: the expansion uses existing lattice and Galois diagrams. All visual-review statuses remain unchanged and pending where they were pending before this work.

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
