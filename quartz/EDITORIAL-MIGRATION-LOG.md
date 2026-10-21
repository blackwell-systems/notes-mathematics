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

## Batch 5: calculus, analysis, differential equations and optimization (2026-10-20)

| Article | Semantic work |
| --- | --- |
| [Calculus](./content/calculus.md) | limits, continuity, derivative, IVT, MVT, FTC, L'Hopital conditions |
| [Real Analysis](./content/real-analysis.md) | completeness, epsilon-N/epsilon-delta, domain-relative continuity, uniform continuity and convergence, Riemann integrability |
| [Multivariable Calculus](./content/multivariable-calculus.md) | multivariable domains, partial and directional derivatives, gradient, convexity, gradient descent, multiplier regularity |
| [Differential Equations](./content/differential-equations.md) | separability and equilibrium solutions, integrating factors, Euler's method, local uniqueness, Laplace domain |
| [Optimization](./content/optimization.md) | stationary points, convexity, subgradients, convergence hypotheses, Newton limitations, KKT qualifications, regularization |
| [Measure Theory](./content/measure-theory.md) | sigma-algebras, measure additivity, measurability, convergence theorems, $L^p$ equivalence classes |

**Corrections and scope qualifications:**

- **Intermediate Value Theorem:** a value **strictly** between unequal endpoint values is attained in the **interior**; an endpoint value is only guaranteed on the closed interval, not necessarily at an interior point.
- **Limits and derivatives:** the quick L'Hopital preview now explicitly depends on the derivative-quotient theorem's hypotheses, while epsilon-delta continuity restricts $x$ to the function's actual domain.
- **ODE separability:** dividing by $g(y)$ can erase equilibrium solutions with $g(c)=0$. The worked $y'=xy$ family now restores $y=0$ rather than treating division by $y$ as reversible everywhere.
- **Optimization:** a zero gradient is a critical-point criterion, not proof of a minimum. KKT complementary slackness permits **zero multiplier on an active constraint**, and KKT necessity needs appropriate constraint qualifications. Gradient-descent and Newton convergence statements now include their required regularity, domain and numerical caveats.
- **Real vs Lebesgue integration:** uniform convergence is a useful **sufficient**, not **necessary**, condition for exchanging limits and Riemann integrals. Monotone and dominated convergence have their own explicit hypotheses.
- **Measure theory:** $L^p$ elements are equivalence classes modulo almost-everywhere equality, not literal pointwise functions.

The arithmetic harness adds counterexamples for IVT endpoints, separable-equation equilibria, positive Hessian at one point, KKT active-zero multipliers, and concentration of integral mass in a pointwise-convergent spike sequence.

**Coverage after batch 5:** 44 pilot pages, 19 pending, 0 complete. No visual screenshot review or independent proof certification is asserted.

## Batch 6: probability, statistics, information theory and discrete mathematics (2026-10-20)

| Article | Semantic focus |
| --- | --- |
| [Probability](./content/probability.md) | probability axioms, conditional independence, law of large numbers, central limit theorem |
| [Statistics](./content/statistics.md) | population versus sample, simple random sampling, observational versus experimental claims |
| [Descriptive Statistics](./content/descriptive-statistics.md) | center, spread, standardization, histogram interpretation |
| [Inferential Statistics](./content/inferential-statistics.md) | confidence intervals, null-conditional p-values, error rates, multiplicity |
| [Bayesian Inference](./content/bayesian-inference.md) | priors, likelihood, proper posteriors, conjugacy, predictive distribution, singular BIC failure |
| [Information Theory](./content/information-theory.md) | coordinate-dependent differential entropy, KL, cross-entropy, mutual information and data processing |
| [Statistical Learning](./content/statistical-learning.md) | OLS rank conditions, adjusted $R^2$, causality, cross-validation leakage, bootstrap assumptions |
| [Combinations](./content/combination.md) | subsets, repetition, inclusion-exclusion, stars and bars, pigeonhole principle |
| [Permutations](./content/permutation.md) | ordered arrangements, repetition, indistinguishable objects, circular symmetry |
| [Graph Theory](./content/graph-theory.md) | graph conventions, handshaking lemma, trees, paths, shortest-path hypotheses, Eulerian/Hamiltonian distinctions |
| [Asymptotic Notation](./content/asymptotic-notation.md) | eventual Big-O, Big-Omega, Theta and strict little-o/little-omega growth |

**Substantive corrections:**

- **Sampling:** equal per-unit inclusion probabilities do **not** suffice to define a simple random sample. For a fixed-size SRS without replacement, all subsets of that size have equal probability. Neither SRS nor stratification guarantees that one realized sample perfectly represents a population.
- **Information theory:** differential entropy and even its numerical differences can change under separate transformations of variables. The blanket claim that entropy differences are always meaningful was removed.
- **Statistical learning:** the **normal equations** remain valid even with rank-deficient predictors, although the explicit inverse solution requires full column rank. An increase in adjusted $R^2$ does not prove a new feature has genuine predictive value.

Regression examples were added for combination counts, degree sums, KL asymmetry, differential-entropy scaling, equal inclusion probabilities with nonuniform subsets, Big-O bounds and the distinction between training $R^2$ and adjusted $R^2$.

**Coverage after batch 6:** 55 pilot pages, 8 pending, 0 fully reviewed. Mobile, dark-theme and diagram acceptance remain pending; semantic migration is not a substitute for mathematical peer review.

## Batch 7: remaining foundations, advanced chapters and navigation (2026-10-20)

| Article | Semantic work |
| --- | --- |
| [Number Bases](./content/number-bases.md) | positional notation, conversions, fixed-width two's complement, terminating base expansions |
| [Number Systems](./content/number-systems.md) | canonical embeddings, rational quotient representation, real completeness, complex quotient construction |
| [Order of Operations](./content/order-of-operations.md) | precedence and associativity, undefined operations, ambiguity requiring explicit parentheses |
| [Hypercomplex Numbers](./content/hypercomplex-numbers.md) | Cayley-Dickson doubling, quaternion noncommutativity, octonion alternativity, sedenion zero divisors |
| [Algebraic Geometry](./content/algebraic-geometry.md) | zero sets, real versus algebraically closed fields, precise Nullstellensatz, distinctions between geometric and statistical singularity, RLCT hypotheses |
| [Singular Learning Theory](./content/singular-learning-theory.md) | identifiability versus Fisher rank, assumptions for free-energy asymptotics, RLCT pole multiplicity, Bayesian generalization scope, WAIC versus WBIC |
| [Mathematics Reference](./content/index.md) | navigation callouts, learning path versus proof dependencies, corrected topic and branch counts |
| [Path to SLT](./content/path-to-slt.md) | reading route versus formal theorem dependencies, prerequisites for asymptotic integrals, analytic-zero-set caveats, Bayesian scope |

**Substantive corrections:**

- The site contains **61 topic chapters**, plus the landing page and guided SLT path, for **63 total Markdown pages**. The landing page now reports 61 topics and 14 topic branches instead of 62 and 13.
- The real algebraic-geometric dictionary needs a **ground-field qualifier**. Nullstellensatz's ordinary radical-ideal formulation applies over algebraically closed fields; the real setting needs extra care.
- SLT expansions are not universal over arbitrary models; they require analytic/model/prior assumptions. The zeta pole's **order** is the intrinsic multiplicity, not a naïve count of tied coordinate directions across all resolution charts. Singularity alone does not automatically justify $\lambda<d/2$ in every context.
- **WAIC** estimates predictive performance, whereas **WBIC** approximates free energy under asymptotic conditions; describing both as free-energy estimators was misleading.
- The main guided path now distinguishes the global identifiability and local Fisher-rank notions rather than treating them as identical.

**Coverage after batch 7:** all **63/63 Markdown pages have pilot semantic treatment**. This is **first-pass editorial migration**, not final acceptance. The coverage manifest correctly keeps **0 pages** at \`semanticReview:"complete"\`, with mobile, dark-mode, diagram, and independent mathematical proof review still outstanding.

The arithmetic harness now checks finite-width binary examples, terminating representations and quaternion noncommutativity, plus basic monomial RLCT coefficients.

## Site-wide baseline

There are 63 tracked Markdown pages, including 61 topic articles, the index, and the guided learning path. All receive global layout and typographic styling. After batches 1 through 7, **all 63 pages have pilot semantic treatment** and **zero are marked completely reviewed**. Subsequent work must audit and accept mobile/dark-mode rendering, diagrams, accessibility, and proof accuracy. The parser-based inventory can be regenerated with `npm run editorial:report`; its counts represent structural candidates, not certified mathematical results.

The next stage is not another wholesale semantic migration: perform **visual regression and accessibility checks**, review the existing diagrams, and complete page-by-page mathematical/editorial acceptance without marking proof review as finished merely because CI passes.
