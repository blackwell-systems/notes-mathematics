---
title: Mathematics Reference
---

Comprehensive mathematics reference covering logic, algebra, functions, geometry, and combinatorics, building toward machine learning research.

Currently covering **82 topics** across 18 topic branches of mathematics, from basic algebra through singular learning theory, with self-contained interactive widgets throughout.

The aim is to be the place you come to for **clarity**: every topic is built foundations-first and carried by detailed, fully-worked examples, with each step shown and justified rather than hand-waved. It is a reference and explainer, not a problem set (practice is left to other resources), so if another source lost you at the step that actually mattered, this is meant to be where you see it done in full.

> **Heading for singular learning theory?** There is a dedicated guided route: [Path to SLT](./path-to-slt) orders every prerequisite from set notation to the [Singular Learning Theory](./singular-learning-theory) capstone, with a note on why each step is needed.

## How to Use These Notes

> [!distinction] A map is not a prerequisite proof
> The reading order is **one suggested route**, not a claim that every chapter depends on every earlier chapter. Follow each page's **Builds on** links when you need its formal assumptions; independent branches (such as early group theory) can be studied in parallel.


1. **As a reference:** Jump to any topic. Use the search (top left) or explorer (left sidebar) to find what you need.

2. **As a learning path:** The topics build on each other. A suggested reading order for someone starting from scratch:

```
Logic → Set Theory → Relations & Order → Peano Arithmetic → Integers → Rationals → Reals
→ Complex Numbers → Number Systems & Foundations → Algebra (start with
Functions, then work through the function types) → Linear Algebra
(Foundations first, then Computation)
→ Calculus → Multivariable Calculus → Differential Equations
→ Probability → Statistics (Descriptive → Inferential → Statistical Learning)
→ Bayesian Inference → Optimization
→ Information Theory → Discrete Math
→ Real Analysis → Measure Theory
```

3. **For ML researchers:** If you already know the basics and want to understand *why* neural networks work at a theoretical level:
   - Linear Algebra Foundations (eigenvalues, SVD)
   - Calculus (chain rule = backpropagation)
   - Probability → Statistics (Descriptive → Inferential → Statistical Learning) → Bayesian Inference
   - Optimization (gradient descent variants, convexity)
   - Information Theory (cross-entropy loss)
   - Real Analysis → Measure Theory → Algebraic Geometry → [Singular Learning Theory](./singular-learning-theory)

   For a single ordered trail to the last item, follow the [Path to SLT](./path-to-slt).

The [group-theory branch](./group-theory-foundations) can begin after sets and functions, in parallel with the natural-to-complex number-system construction chain. [Category theory](./category-theory-foundations) is most concrete after learning those group and ring examples; [general topology](./general-topology-foundations) can be entered through metric-space intuition or direct open-set axioms; see the [Topology map](./path-to-topology). The branches reconnect at [Algebraic Structures](./algebraic-structures). Neither real completeness nor complex algebraic closure is needed to prove the group axioms.

## Logic & Proofs

- [Mathematical Notations](./mathematical-notations) (symbols, conventions, proof notation)
- [Propositional Logic](./propositional-logic-zeroth-order-logic) (truth tables, connectives, inference rules)
- [Predicate Logic](./predicate-logic-first-order-logic) (quantifiers, predicates, formal proofs)

## Set Theory

- [Set Theory](./set-theory) (operations, cardinality, power sets, partitions)

## Relations & Order

Relations define which objects may be identified or compared. These foundational chapters develop the two directions, with worked proofs and counterexamples.

- [Equivalence Relations and Quotients](./equivalence-relations) (classes, partitions, congruence, quotient factorization)
- [Order Theory: Preorders, Posets, and Lattices](./order-theory) (total and partial orders, Hasse diagrams, bounds, lattices, well-orders, order isomorphisms)

## Number Systems & Foundations

- [Order of Operations](./order-of-operations) (PEMDAS/BODMAS, left-to-right tie-breakers, common pitfalls)
- [Peano Arithmetic](./peano-arithmetic) (successor, induction, recursive arithmetic, complete proofs of the elementary laws)
- [Construction of the Integers](./construction-of-the-integers) (difference pairs, quotient equality, ring laws, order)
- [Construction of the Rationals](./construction-of-the-rationals) (fractions, well-defined operations, field and order axioms)
- [Construction of the Reals](./construction-of-the-reals) (Cauchy completion, field and order laws, proof of completeness)
- [Construction of the Complex Numbers](./construction-of-the-complex-numbers) (pair arithmetic, inverses, ordering obstruction, algebraic closure)
- [Number Systems](./number-systems) (naturals through complex, the building-up story, rational/algebraic/transcendental)
- [Hypercomplex Numbers & Beyond](./hypercomplex-numbers) (quaternions, octonions, Cayley-Dickson, dual numbers, p-adics, surreals)
- [Number Bases](./number-bases) (binary, octal, hexadecimal, conversions, two's complement, floating point)

## Path Through Algebra

The [Path Through Algebra](./path-through-algebra) connects constructions of number systems, groups, quotient rings, field extensions, local rings and algebraic geometry without assuming that every subject depends on every earlier one.

## Group Theory

> [!example] One independent branch
> From **sets and functions**, you can study groups, homomorphisms, quotients and actions without first constructing the real or complex number fields. Those branches reconnect when studying rings, fields and linear algebra.


- [Group Theory Foundations](./group-theory-foundations) (group axioms, cancellation, subgroups, cyclic groups, cosets, Lagrange, Fermat)
- [Homomorphisms and Quotient Groups](./group-homomorphisms-quotients) (normality, kernels, quotient well-definedness, isomorphism theorems, direct products)
- [Group Actions and Symmetry](./group-actions-symmetry) (permutations, Cayley, orbit-stabilizer, dihedral groups, conjugacy, Burnside)
- [Algebraic Structures](./algebraic-structures) (group, ring, and field laws; bridge from constructions to abstractions)

## Ring & Field Theory

The next proof-oriented branch follows the additive group structure into **rings**, identifies which subsets permit quotient multiplication, and then constructs **field extensions** and finite fields.

- [Ring Theory Foundations](./ring-theory-foundations) (axioms, units, zero divisors, cancellation, integral domains, characteristic, polynomial division)
- [Ideals, Quotient Rings & Homomorphisms](./ring-ideals-quotients) (well-defined coset multiplication, isomorphism theorems, prime and maximal ideals, Chinese remainder theorem)
- [Commutative Algebra](./commutative-algebra) (localization, local rings, modules, finite constraints)
- [Field Theory Foundations](./field-theory-foundations) (fraction fields, extensions, minimal polynomials, splitting fields and finite fields)

## Category Theory

Category theory studies **objects, arrows and universal mapping properties**, bringing the group, ring, function and vector-space branches under a common language. Each step has concrete worked constructions and commutative diagrams.

- [Category Theory Foundations](./category-theory-foundations) (categories, examples, morphisms, isomorphisms, opposites)
- [Functors, Natural Transformations and Yoneda](./category-functors-naturality) (covariance/contravariance, naturality, representable functors, a proof of Yoneda)
- [Limits, Colimits and Universal Properties](./category-limits-colimits) (products, coproducts, equalizers, pullbacks, pushouts)
- [Adjunctions, Free Constructions and Monads](./category-adjunctions-monads) (free monoids, adjoint functors, list monad, Kleisli composition)

## Algebra

- [Number Theory](./number-theory) (divisibility, modular arithmetic, primes)
- [Prime Factorization](./prime-factorization) (GCD, LCM, fundamental theorem of arithmetic)
- [Functions & Relations](./functions-relations) (domain, range, composition, inverses)
- [Graphing Functions](./graphing-functions) (transformations, symmetry, asymptotes)
- [Linear Functions](./linear-functions) (slope, intercepts, linear models)
- [Polynomial Functions](./polynomial-functions) (roots, factoring, end behavior)
- [Rational Functions](./rational-functions) (asymptotes, sign analysis, graphing)
- [Radical Functions](./radical-functions) (nth roots, domain restrictions, solving)
- [Exponential Functions](./exponential-functions) (growth, decay, compound interest)
- [Logarithms](./logarithms) (properties, change of base, applications)
- [Complex Numbers](./complex-numbers) (arithmetic, polar form, Euler's formula)
- [Partial Fraction Decomposition](./partial-fraction-decomposition)
- [Sequences & Series](./sequences-and-series) (arithmetic, geometric, convergence tests)
- [Systems of Equations](./systems-of-equations) (substitution, elimination, matrices)
- [Inequalities](./inequalities) (linear, polynomial, absolute value)
- [Conic Sections](./conic-sections) (circles, ellipses, parabolas, hyperbolas)
- [Parametric & Polar](./parametric-and-polar) (parametric curves, eliminating the parameter, polar coordinates, polar graphs)
- [Symbolic Methods vs. Numerical Methods](./symbolic-methods-vs-numerical-methods)

## Linear Algebra

- [Linear Algebra Foundations](./linear-algebra-foundations) (vector spaces, four fundamental subspaces, eigenvalues, SVD)
- [Linear Algebra for Computation](./linear-algebra-computation) (norms, factorizations, positive definiteness, matrix calculus)
- [Matrices](./matrices) (operations, determinants, inverses)
- [Systems of Linear Equations](./systems-of-linear-equations) (Gaussian elimination, row reduction)
- [Vectors](./vector) (dot product, cross product, projections)

## Geometry & Trigonometry

- [Euclidean Geometry](./euclidean-geometry) (points, lines, angles, postulates, polygons, triangles, quadrilaterals, circles, solids, transformations)
- [Geometry & Trigonometry](./geometry-trigonometry) (trig functions, identities, unit circle, coordinate geometry)

## Path Through Analysis

The [Path Through Analysis](./path-through-analysis) follows limits through function-space convergence, integration, complex contours and Fisher geometry. Its real and complex branches can be studied in parallel.

## Calculus

- [Calculus](./calculus) (limits, derivatives, chain rule, integrals, Fundamental Theorem)
- [Multivariable Calculus](./multivariable-calculus) (partial derivatives, gradients, gradient descent, convexity)
- [Differential Equations](./differential-equations) (ODEs, systems, stability, Laplace transforms, neural ODEs)
- [Functional Analysis](./functional-analysis) (Banach/Hilbert spaces, operators, weak convergence)
- [Complex Analysis](./complex-analysis) (holomorphicity, contours, residues)

## General Topology

Topology generalizes the open sets of real and metric analysis to spaces with **no distance function**. Begin with the [Path Through Topology](./path-to-topology) for two entry routes (metric intuition or abstract axioms) and one interval-to-circle example developed across three chapters.

- **[Path Through Topology](./path-to-topology)** (guided learning map: two entry routes, constructions, global properties, interval-to-circle proof)
- [General Topology Foundations](./general-topology-foundations) (open sets, bases, closure, continuity, homeomorphisms)
- [Subspaces, Products and Quotient Topologies](./general-topology-constructions) (universal mapping properties, infinite products, the circle as a quotient)
- [Compactness, Connectedness and Separation](./general-topology-compactness) (finite subcovers, Hausdorffness, IVT from connectedness)

## Combinatorics & Probability

- [Permutations](./permutation) (arrangements, factorial, with repetition)
- [Combinations](./combination) (selections, binomial coefficients, Pascal's triangle)
- [Probability](./probability) (axioms, Bayes' theorem, distributions, CLT)

## Statistics

- [Statistics](./statistics) (the hub: data types, populations vs samples, producing good data)
- [Descriptive Statistics](./descriptive-statistics) (central tendency, spread, visualization)
- [Inferential Statistics](./inferential-statistics) (estimation, hypothesis testing, ANOVA, nonparametrics)
- [Statistical Learning](./statistical-learning) (correlation, regression, bias-variance, cross-validation)
- [Information Geometry](./information-geometry) (KL divergence, Fisher curvature, isolated singular model)
- [Bayesian Inference](./bayesian-inference) (priors, posteriors, MCMC, variational inference, model selection, SLT connection)

## Optimization

- [Optimization](./optimization) (convexity, gradient descent, Adam, constrained optimization, regularization)

## Information Theory

- [Information Theory](./information-theory) (entropy, KL divergence, cross-entropy, mutual information)

## Discrete Mathematics

> **Start with the [Discrete Mathematics Learning Map](./discrete-mathematics).** It combines existing logic, sets, number theory, relations, counting, probability, and graph chapters with the deeper discrete mathematics sequence below. The map is a route, not a claim that every topic requires every earlier one.

- [Structural Induction and Recursive Definitions](./structural-induction) (inductive trees and lists, recursion on constructors, structural proofs)
- [State Machines, Invariants, and Termination](./state-machines-invariants) (reachable states, loop invariants, ranking functions, Euclid's algorithm)
- [Combinatorial Reasoning and Counting Identities](./combinatorial-reasoning) (bijections, double counting, Catalan and Stirling numbers)
- [Generating Functions](./generating-functions) (formal power series, convolution, recurrence solutions, coin counting)
- [Graph Theory](./graph-theory) (paths, trees, traversals, shortest paths, spanning trees)
- [Advanced Graph Theory](./advanced-graph-theory) (DAGs, topological sorts, matching, Hall's theorem, max-flow/min-cut)
- [Asymptotic Notation](./asymptotic-notation) (Big-O, Big-Theta, Big-Omega, growth rates)

## Advanced Mathematics

- [Real Analysis](./real-analysis) (sequences, series, metric spaces, uniform convergence, rigorous calculus)
- [Measure Theory](./measure-theory) (sigma-algebras, Lebesgue integral, convergence theorems, $L^p$ spaces, measure-theoretic probability)
- [Algebraic Geometry](./algebraic-geometry) (varieties, singularities, resolution of singularities, RLCT, connection to SLT)
- [Singular Learning Theory](./singular-learning-theory) (free energy, Watanabe's formula, RLCT as effective dimension, WAIC/WBIC, local learning coefficient) — the capstone
- [Path to SLT](./path-to-slt) (the guided prerequisite sequence to the capstone)
