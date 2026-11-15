---
title: Mathematics Reference
---

**Mathematics is connected. Its explanations should be, too.**

This site grew from **more than a decade of my handwritten mathematics notes**. I am developing those notes into a single, evolving reference, with one pedagogical approach running from elementary foundations through algebra, analysis, geometry, and more. The choices of explanations, examples, diagrams, and connections are informed by that long-running work, rather than assembled as unrelated treatments of individual subjects.

**The connections are part of the teaching.** Ideas are introduced, then deliberately recalled, tested, and extended in later chapters. An order tells us which objects precede others, but not how far apart they are; metric spaces introduce that different kind of structure. Equivalence relations return as quotient spaces. Completeness appears in analysis and resurfaces in Banach and Hilbert spaces. These callbacks explain **what carries over, what changes, and why an additional assumption matters**, so readers do not have to reconstruct the connections for themselves.

**Mathematics, with the missing steps shown.** Each subject aims to start with an intuitive question, define the relevant objects and notation precisely, work through small complete examples and proofs, and examine cases where familiar conclusions fail. Diagrams and interactive explorations support the reasoning where they clarify it. The goal is a **continuous understanding of mathematics**, not simply a collection of accurate definitions.

These are **learning notes and a reference, not a problem-set workbook**. Start from a question, follow connections backward or forward, and return to earlier concepts as your understanding deepens. There is no single mandatory reading order.

## Explore the reference

**Start with your question, not a prescribed syllabus.** Choose the kind of explanation you need:

- **Understand one topic:** Browse the complete subject catalog below, or use search and the sidebar to find a specific definition, worked example, or proof. Each chapter links to its own prerequisites.
- **See the bigger mathematical picture:** The [Atlas of Mathematical Spaces](./atlas-of-mathematical-spaces) compares sets, orders, topologies, distances, vector spaces, manifolds, and categories, showing what each additional structure lets us express.
- **Connect ideas across subjects:** [Cross-Disciplinary Bridges](./cross-disciplinary-bridges) works through examples of quotients, stability, cyclic obstructions, likelihood/KL, and projection as conditional expectation, while stating when an analogy does not apply.
- **Follow a subject-guided route:** [Topology](./path-to-topology), [Algebra](./path-through-algebra), [Analysis](./path-through-analysis), and [Discrete Mathematics](./discrete-mathematics) offer suggested sequences rather than artificial chains of mandatory prerequisites.
- **Work toward a research topic:** The [Path to SLT](./path-to-slt) connects relevant foundations to [Singular Learning Theory](./singular-learning-theory).

> [!tip] Follow a concept beyond its first chapter
> A **set** tells us which objects we have, **additional structure** specifies relationships or operations, and **axioms** determine what follows. This same pattern returns in relations, orders, groups, vector spaces, and spaces with notions of closeness. Each return asks a little more of the idea. See [Set Theory: the common thread](./set-theory#the-common-thread-set-structure-axioms) for a side-by-side comparison.

**Use individual chapters for definitions and worked proofs; use the [Atlas of Mathematical Spaces](./atlas-of-mathematical-spaces) when you want to see how the subjects connect.** Learning maps are optional aids, not claims that every subject depends on every other one.

### Jump to a subject

**Foundations:** [Logic & Proofs](#logic-proofs) · [Set Theory](#set-theory) · [Relations & Order](#relations-order) · [Number Systems & Foundations](#number-systems-foundations) · [Number Theory](#number-theory)

**Algebra and structures:** [Algebra](#algebra) · [Linear Algebra](#linear-algebra) · [Group Theory](#group-theory) · [Ring & Field Theory](#ring-field-theory) · [Category Theory](#category-theory)

**Analysis and geometry:** [Geometry & Trigonometry](#geometry-trigonometry) · [Calculus](#calculus) · [General Topology](#general-topology) · [Advanced Mathematics](#advanced-mathematics)

**Counting, statistics, and applications:** [Combinatorics & Probability](#combinatorics-probability) · [Statistics](#statistics) · [Optimization](#optimization) · [Information Theory](#information-theory) · [Discrete Mathematics](#discrete-mathematics) · [Mathematical Physics](#mathematical-physics)

The complete catalog below retains every subject link, including more specialized chapters and guided reading routes.

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

**Where do the natural numbers come from?** In the **von Neumann model**, begin with the empty set $0:=\varnothing$ and repeatedly apply the successor operation $S(n):=n\cup\{n\}$.

This yields $1=\{0\}$, $2=\{0,1\}$, and $3=\{0,1,2\}$: each natural number is represented by the set of all earlier naturals. We write $\mathbb N:=\omega$ for the **least inductive set** containing zero and closed under successor; its existence relies on the set-theoretic axiom of infinity. This is **one concrete construction** of the naturals, not a claim that numbers must intrinsically be sets. [Construction of the Natural Numbers](./construction-of-the-natural-numbers) develops the full model and proves its properties; [Peano Arithmetic](./peano-arithmetic) derives arithmetic laws from its axioms; [Number Systems](./number-systems#formal-definitions-of-the-number-sets) compares the successive systems.

- [Order of Operations](./order-of-operations) (PEMDAS/BODMAS, left-to-right tie-breakers, common pitfalls)
- [Construction of the Natural Numbers](./construction-of-the-natural-numbers) (von Neumann sets, infinity, least inductive set, Peano conditions, arithmetic by recursion)
- [Peano Arithmetic](./peano-arithmetic) (successor, induction, recursive arithmetic, complete proofs of the elementary laws)
- [Construction of the Integers](./construction-of-the-integers) (difference pairs, quotient equality, ring laws, order)
- [Construction of the Rationals](./construction-of-the-rationals) (fractions, well-defined operations, field and order axioms)
- [Construction of the Reals](./construction-of-the-reals) (Cauchy completion, field and order laws, proof of completeness)
- [Construction of the Complex Numbers](./construction-of-the-complex-numbers) (pair arithmetic, inverses, ordering obstruction, algebraic closure)
- [Number Systems](./number-systems) ([formal set-theoretic definitions](./number-systems#formal-definitions-of-the-number-sets), naturals through complex, irrational/algebraic/transcendental)
- [Hypercomplex Numbers & Beyond](./hypercomplex-numbers) (quaternions, octonions, Cayley-Dickson, dual numbers, p-adics, surreals)
- [Number Bases](./number-bases) (binary, octal, hexadecimal, conversions, two's complement, floating point)

## Number Theory

Divisibility tells us when integers share a factor. **Congruence** asks when their difference is divisible by a chosen modulus, then turns those equivalence classes into a new arithmetic system. This is a concrete route from familiar integer calculations to [groups](./group-theory-foundations), [rings](./ring-theory-foundations), and [fields](./field-theory-foundations).

- [Number Theory](./number-theory) (divisibility, Euclid's algorithm, [modular arithmetic](./number-theory#modular-arithmetic), congruence classes, inverses, Fermat, CRT, Euler)
- [Prime Factorization](./prime-factorization) (GCD, LCM, fundamental theorem of arithmetic)

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

- [Functions & Relations](./functions-relations) (domain, range, composition, inverses)
- [Graphing Functions](./graphing-functions) (transformations, symmetry, asymptotes)
- [Linear Functions](./linear-functions) (slope, intercepts, linear models)
- [Polynomial Functions](./polynomial-functions) (roots, end behavior, polynomial division)
- [Factoring Polynomials](./factoring-polynomials) (meaning, methods, worked examples, irreducibility)
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

**Linear algebra is the study of vector spaces and linear transformations between them, rather than fundamentally the manipulation of matrices.** A *vector* can be an arrow, a polynomial, a function, or any other element of a vector space. A *matrix* is a coordinate representation of a linear map once bases have been chosen. Start with [what a vector space is and why it matters](./linear-algebra-foundations#the-fundamental-setting-vector-spaces-not-matrices), then see how the same ideas apply to very different objects.

- [Linear Algebra Foundations](./linear-algebra-foundations) (**vector spaces and linear maps first**; then bases, kernels, images, eigenvectors, and SVD)
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
- [Multivariable Calculus](./multivariable-calculus) (partial derivatives, total differentiability, Jacobians, Hessians, optimization)
- [Multivariable Integration](./multivariable-integration) **(new)** (regions, double and triple integrals, polar/cylindrical/spherical coordinates, Jacobians)
- [Vector Calculus](./vector-calculus) **(new)** (line and surface integrals, divergence, curl, Green's, Stokes', and divergence theorems)
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

Probability begins with a **set of possible outcomes**, a **sigma-algebra of measurable events**, and a **probability measure** that assigns each event a consistent likelihood. Counting is a convenient way to compute probabilities when outcomes are equally likely, but probability is more general than counting. The [Probability](./probability) chapter constructs a complete example and connects these structures to [Set Theory](./set-theory), [Measure Theory](./measure-theory), and the [Atlas](./atlas-of-mathematical-spaces).

- [Permutations](./permutation) (arrangements, factorial, with repetition)
- [Combinations](./combination) (selections, binomial coefficients, Pascal's triangle)
- [Probability](./probability) (axioms, Bayes' theorem, distributions, CLT)

## Statistics

Statistics builds on those probability spaces and adds **observed random variables, datasets, statistics, and models** for inference. The kind of data matters: nominal values are categories, ordinal values can be ranked without measured gaps, and quantitative values may support numerical operations. The [Statistics](./statistics) introduction shows how probability becomes statistical inference, using three coin flips as one complete example.

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

> The [Discrete Mathematics Learning Map](./discrete-mathematics) connects logic, sets, number theory, relations, counting, probability and graphs with the deeper discrete mathematics chapters below. It is a possible route through the material, not a list of mandatory prerequisites.

- [Structural Induction and Recursive Definitions](./structural-induction) (inductive trees and lists, recursion on constructors, structural proofs)
- [State Machines, Invariants, and Termination](./state-machines-invariants) (reachable states, loop invariants, ranking functions, Euclid's algorithm)
- [Combinatorial Reasoning and Counting Identities](./combinatorial-reasoning) (bijections, double counting, Catalan and Stirling numbers)
- [Generating Functions](./generating-functions) (formal power series, convolution, recurrence solutions, coin counting)
- [Graph Theory](./graph-theory) (paths, trees, traversals, shortest paths, spanning trees)
- [Advanced Graph Theory](./advanced-graph-theory) (DAGs, topological sorts, matching, Hall's theorem, max-flow/min-cut)
- [Asymptotic Notation](./asymptotic-notation) (Big-O, Big-Theta, Big-Omega, growth rates)

## Mathematical Physics

Mathematical physics puts abstract tools to work by asking what mathematical structure a physical state needs and what its operations can predict.

- **[Mathematical Foundations of Quantum Mechanics](./mathematical-foundations-of-quantum-mechanics)** (complex states, measurement, interference, unitary evolution, entanglement, and an introductory bridge to gradient descent and quantum state geometry)

**Suggested prerequisites:** [Complex Numbers](./complex-numbers), [Linear Algebra Foundations](./linear-algebra-foundations), [Probability](./probability), and [Calculus](./calculus). The chapter starts with a single qubit and carefully distinguishes ordinary statistical training from quantum-state optimization.

## Advanced Mathematics

**A continuation of the foundations, not a ladder of prestige.** These subjects overlap: geometry uses analysis; topology creates algebraic invariants; sheaves organize local information; algebraic geometry uses rings and topology. The entries below link to developed chapters, including subjects that also appear in their original branches above.

**A useful conceptual route:** [Differential Geometry](./differential-geometry) asks how to calculate without one global grid; [Algebraic Topology](./algebraic-topology) asks which properties survive deformation; [Sheaf Theory](./sheaf-theory) asks exactly when compatible local information determines global information. These are connections, **not mandatory prerequisites** for one another.

### Advanced analysis and operators

- [Real Analysis](./real-analysis) (rigorous limits, continuity, metric spaces, function sequences)
- [Completeness and Convergence](./completeness-and-convergence) (suprema, subsequences, Cauchy criterion, and convergence theorems)
- [Continuity and Compactness](./continuity-and-compactness) (complete IVT, EVT, and Heine-Cantor proofs)
- [Rigorous Differentiation](./rigorous-differentiation) (Rolle, MVT, Darboux, and Taylor remainders)
- [Rigorous Integration](./rigorous-integration) (Darboux criterion, integrability, both FTC proofs)
- [Sequences of Functions](./sequences-of-functions) (uniform convergence, limit interchanges, Arzelà-Ascoli)
- [Multivariable Integration](./multivariable-integration) (coordinate changes and geometric integration)
- [Vector Calculus](./vector-calculus) (fields, work, flux, circulation, boundary integral theorems)
- [Measure Theory](./measure-theory) (sigma-algebras, Lebesgue integration, convergence, $L^p$ spaces)
- [Complex Analysis](./complex-analysis) (holomorphic functions, contour integrals, residues)
- [Functional Analysis](./functional-analysis) (Banach and Hilbert spaces, bounded operators, weak convergence)
- [Differential Equations](./differential-equations) (ordinary differential equations, systems, existence and stability; partial differential equations are **not** developed as a standalone chapter yet)

### Geometry and topology

- [General Topology](./general-topology-foundations) (open sets, continuity, quotient spaces and compactness)
- [Differential Geometry](./differential-geometry) **(new)** (local coordinates, smooth manifolds, tangent spaces, differential forms, curvature)
- [Algebraic Topology](./algebraic-topology) **(new)** (fundamental groups, winding numbers, cycles, homology and Euler characteristic)
- [Algebraic Geometry](./algebraic-geometry) (polynomial varieties, singularities, resolution and RLCT)

### Algebra, abstraction and local-to-global structure

- [Commutative Algebra](./commutative-algebra) (ideals, modules, localization and local rings)
- [Category Theory](./category-theory-foundations) (categories, maps and universal constructions); continue with [Functors and Yoneda](./category-functors-naturality), [Limits and Colimits](./category-limits-colimits), and [Adjunctions and Monads](./category-adjunctions-monads)
- [Sheaf Theory](./sheaf-theory) **(new)** (local data, restrictions, sheaf gluing, stalks and global obstructions)

### Dynamics, probability and mathematics of learning

- [Optimization](./optimization) (convexity, gradient methods, constraints and convergence)
- [Information Geometry](./information-geometry) (Fisher information, KL divergence and singular statistical models)
- [Bayesian Inference](./bayesian-inference) (posterior updates, approximate inference, asymptotic model selection)
- [Singular Learning Theory](./singular-learning-theory) (free energy, RLCT, WAIC/WBIC, local learning coefficients)

**Guided route:** [Path to Singular Learning Theory](./path-to-slt) joins the relevant prerequisites in a deliberate sequence and culminates in SLT. It is a reading path, **not another branch of mathematics**.

**Further gaps, honestly labeled:** Full introductions to scheme theory, homological algebra, Galois theory, stochastic processes, partial differential equations and advanced proof/model theory remain to be developed. Existing chapters may preview some of their ideas; this list does not claim they are covered.
