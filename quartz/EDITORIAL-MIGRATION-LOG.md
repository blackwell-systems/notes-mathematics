# Editorial migration log

This log records **content-design migrations**, not independent proof certification. A `pilot` status means semantic structures have been added and the chapter is ready for visual and editorial review. It is not the same as `complete`.

## Batch 1: logic, notation and set theory (2026-10-20)

| Article | Semantic work | Remaining |
| --- | --- | --- |
| [Mathematical Notations](./content/mathematical-notations.md) | Seven authored callouts distinguishing equality, equivalence, congruence, definitions, subset notation, derivability and semantic consequence | visual checks, diagrams, full semantic pass |
| [Set Theory](./content/set-theory.md) | Definitions of sets/subsets/ordered pairs, extensionality axiom, proper-subset and comprehension distinctions, Cantor's theorem with diagonal proof, Russell counterexample, double-inclusion proof method | visual checks, diagrams, full semantic pass, separate proof review |
| [Predicate Logic](./content/predicate-logic-first-order-logic.md) | Models, universal/existential/unique quantifiers, scope, quantifier order, satisfaction/entailment, and first- vs higher-order distinctions | visual checks, diagram review, independent logical content review |
| [Propositional Logic](./content/propositional-logic-zeroth-order-logic.md) | Additional definitions of propositions and truth functions, and proof-relevant distinctions between syntax/semantics, valid/sound, and proof methods | visual checks and full editorial pass |

**Substantive clarification:** Predicate Logic previously said that a first-order structure has a **nonempty** domain but later taught vacuous truth as though the *whole* domain could be empty. The page now explicitly distinguishes the standard nonempty-domain convention used throughout the chapter from quantifying over an **empty restricted set** in that nonempty domain. Empty-domain first-order semantics remain an optional alternative convention, not a silently admitted model of the main theory.

**Substantive clarification:** Set Theory's Cantor section now explicitly states both components needed for the strict cardinality inequality: a singleton injection and an arbitrary-map diagonal obstruction to surjectivity. Its full existing argument remains below.

**Scope:** all four articles are tagged `semanticReview: "pilot"` in `editorial-coverage.json`. Mathematical proof correctness has **not** been independently certified. Mobile, dark-mode and diagram statuses remain pending because no screenshot/accessibility visual acceptance review was performed.

## Site-wide baseline

There are 63 tracked Markdown pages, including 61 topic articles, the index, and the guided learning path. All receive global layout and typographic styling. After this batch, **six pages are pilots**, **57 await semantic migration**, and **zero are marked completely reviewed**. The parser-based inventory can be regenerated with `npm run editorial:report`; its counts represent structural candidates, not certified mathematical results.

Next batches should proceed through number constructions and abstract algebra, then functions, analysis, linear algebra, geometry, probability/statistics and advanced material, as documented in [Editorial rollout](./EDITORIAL-ROLLOUT.md).
