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

## Batch 2: number constructions and abstract groups (2026-10-20)

| Article | Semantic work |
| --- | --- |
| [Peano Arithmetic](./content/peano-arithmetic.md) | Axioms, recursion, natural-number order and first- vs second-order induction |
| [Construction of the Integers](./content/construction-of-the-integers.md) | Difference pairs, representative independence, division with remainder and the Euclidean algorithm |
| [Construction of the Rationals](./content/construction-of-the-rationals.md) | Equivalence classes of fractions, well-defined arithmetic, reciprocals and rational incompleteness |
| [Construction of the Complex Numbers](./content/construction-of-the-complex-numbers.md) | Pair construction, inverse theorem, ordering obstruction and Fundamental Theorem of Algebra |
| [Homomorphisms and Quotient Groups](./content/group-homomorphisms-quotients.md) | Homomorphism, kernel/image, quotient normality and first isomorphism theorem |
| [Group Actions and Symmetry](./content/group-actions-symmetry.md) | Group actions, Cayley's theorem, orbit-stabilizer and Burnside's lemma |
| [Algebraic Structures](./content/algebraic-structures.md) | Field axioms, group/ring/field distinctions, injectivity versus operation preservation |

The original theorem statements and detailed proofs remain in place. These additions are **semantic cues and proof-obligation summaries**, not independent theorem certifications. Each article now has `semanticReview:"pilot"`. Visual and mathematical acceptance remain pending.

**Coverage after batch 2:** 13 pilot pages, 50 pending, 0 marked complete.

## Batch 3: functions and elementary algebra (2026-10-20)

| Article | Semantic work |
| --- | --- |
| [Functions & Relations](./content/functions-relations.md) | Relation, equivalence, function with explicit domain/codomain, injectivity/surjectivity, representative-independent mappings |
| [Graphing Functions](./content/graphing-functions.md) | Graph as a set of pairs, original domain, rational-function holes and coordinate transformations |
| [Linear Functions](./content/linear-functions.md) | Constant rate of change, affine versus linear terminology, slope restrictions, vertical lines and perpendicular slopes |
| [Polynomial Functions](./content/polynomial-functions.md) | Nonnegative integer exponents, zero-product property, discriminant, algebraic closure and root multiplicity |
| [Rational Functions](./content/rational-functions.md) | Original domain versus reduced expression, cancelled factors, holes, poles, sign intervals |
| [Radical Functions](./content/radical-functions.md) | Principal root, even/odd root domain, extraneous solutions from squaring, rational exponent restrictions |
| [Exponential Functions](./content/exponential-functions.md) | Base conditions, growth factor versus rate, negative scale factors reversing monotonicity |
| [Logarithms](./content/logarithms.md) | Inverse domain, positivity hypotheses for log laws, invalid sum rule, candidate verification |
| [Inequalities](./content/inequalities.md) | Order reversal, interval sign checks, absolute values, conjunction of constraints |
| [Systems of Equations](./content/systems-of-equations.md) | Simultaneous solutions, equivalent transformations, nonlinear intersections |

**Mathematical fixes uncovered during the editorial pass:**

- [Inequalities](./content/inequalities.md) had an incorrect sign chart for $(x^2-4)/(x-3)\leq0$. The correct answer is **$(-\infty,-2]\cup[2,3)$**, not $[-2,3)$. The sign of the quotient is negative to the **left** of $-2$ and positive between $-2$ and $2$. The arithmetic harness now checks its truth value at 80+ quarter-step inputs.
- [Rational Functions](./content/rational-functions.md) incorrectly suggested that all denominator zeros create vertical asymptotes. A cancelled factor can instead produce a **removable hole**. The corrected explanation distinguishes original-domain exclusions from the simplified expression.
- [Exponential Functions](./content/exponential-functions.md) described monotonicity in terms of the base alone even when a negative scale factor $a$ was present. The new description distinguishes the increasing/decreasing behavior of $b^x$ from that of $ab^x+c$.

These are substantive clarifications, not aesthetic decoration. The ten chapters receive **pilot** status only; no screenshot acceptance or independent proof review was performed.

**Coverage after batch 3:** 23 pilot pages, 40 pending, 0 complete.

## Batch 4: remaining elementary algebra, linear algebra and geometry (2026-10-20)

| Article | Semantic emphasis |
| --- | --- |
| [Complex Numbers](./content/complex-numbers.md) | rectangular form, conjugation, multivalued complex logarithms |
| [Conic Sections](./content/conic-sections.md) | conic definition, discriminant caveat, degenerate conics and empty real loci |
| [Number Theory](./content/number-theory.md) | divisibility, congruence, inverses modulo n, element orders in Fermat's theorem |
| [Prime Factorization](./content/prime-factorization.md) | primality, factorization uniqueness, gcd exponents |
| [Partial Fraction Decomposition](./content/partial-fraction-decomposition.md) | proper fractions, repeated factors, irreducible quadratic numerators |
| [Parametric & Polar](./content/parametric-and-polar.md) | curve orientation, parameter restrictions, nonunique polar coordinates |
| [Sequences & Series](./content/sequences-and-series.md) | partial-sum convergence, the term test and harmonic divergence |
| [Symbolic vs Numerical Methods](./content/symbolic-methods-vs-numerical-methods.md) | exact answers versus approximation, roundoff versus algorithmic error |
| [Linear Algebra Foundations](./content/linear-algebra-foundations.md) | linear combinations, independence, vector-space axioms, four subspaces, eigenvectors |
| [Linear Algebra for Computation](./content/linear-algebra-computation.md) | norms, basis changes, definiteness, condition numbers, factorizations |
| [Matrices](./content/matrices.md) | shapes, products, inverse criteria |
| [Vectors](./content/vector.md) | coordinate vectors, dot/cross products, projection restrictions |
| [Systems of Linear Equations](./content/systems-of-linear-equations.md) | consistency versus uniqueness, elementary row operations, Cramer's rule |
| [Euclidean Geometry](./content/euclidean-geometry.md) | primitive objects, parallel axiom, similarity versus congruence, isometries |
| [Geometry & Trigonometry](./content/geometry-trigonometry.md) | radians, Pythagorean hypotheses, the unit circle, identity domains |

**Substantive corrections:**

- The [Conic Sections](./content/conic-sections.md) table now distinguishes **classification of the quadratic part** from an actual real, nondegenerate conic. $x^2+y^2=0$ gives a point and $x^2+y^2+1=0$ gives no real points despite the same negative quadratic discriminant.
- [Systems of Linear Equations](./content/systems-of-linear-equations.md) no longer treats any all-zero row as evidence of infinitely many solutions. **Consistency plus at least one free variable** are both necessary for infinitely many solutions over the reals.
- [Linear Algebra for Computation](./content/linear-algebra-computation.md) now distinguishes a positive-definite Hessian **at one point** from positive-semidefinite Hessians **throughout a convex domain**, and distinguishes matrix condition number one from the narrower class of orthogonal matrices. Numerical regression checks cover counterexamples.

**Coverage after batch 4:** 38 pilot pages, 25 pending, 0 fully reviewed. Responsive, dark-theme and diagram reviews remain pending. These editorial markers do not certify proof correctness.

## Site-wide baseline

There are 63 tracked Markdown pages, including 61 topic articles, the index, and the guided learning path. All receive global layout and typographic styling. After batches 1 through 4, **38 pages are pilots**, **25 await semantic migration**, and **zero are marked completely reviewed**. The parser-based inventory can be regenerated with `npm run editorial:report`; its counts represent structural candidates, not certified mathematical results.

Next batches should cover calculus, analysis, probability/statistics, discrete mathematics, advanced material, and the navigation pages, as documented in [Editorial rollout](./EDITORIAL-ROLLOUT.md).
