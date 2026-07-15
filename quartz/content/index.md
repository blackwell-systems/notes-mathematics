---
title: Mathematics Reference
---

Comprehensive mathematics reference covering logic, algebra, functions, geometry, and combinatorics, building toward machine learning research.

Currently covering **42 topics** across 12 branches of mathematics, from basic algebra through singular learning theory.

## How to Use These Notes

1. **As a reference:** Jump to any topic. Use the search (top left) or explorer (left sidebar) to find what you need.

2. **As a learning path:** The topics build on each other. A suggested reading order for someone starting from scratch:

```
Logic → Set Theory → Algebra (start with Functions, then work through
the function types) → Linear Algebra (Foundations first, then Computation)
→ Calculus → Multivariable Calculus → Differential Equations
→ Probability → Statistics → Bayesian Inference → Optimization
→ Information Theory → Discrete Math
→ Real Analysis → Measure Theory
```

3. **For ML researchers:** If you already know the basics and want to understand *why* neural networks work at a theoretical level:
   - Linear Algebra Foundations (eigenvalues, SVD)
   - Calculus (chain rule = backpropagation)
   - Probability → Statistics → Bayesian Inference
   - Optimization (gradient descent variants, convexity)
   - Information Theory (cross-entropy loss)
   - Real Analysis → Measure Theory (singular learning theory)

## Logic & Proofs

- [Mathematical Notations](./mathematical-notations) (symbols, conventions, proof notation)
- [Propositional Logic](./propositional-logic-zeroth-order-logic) (truth tables, connectives, inference rules)
- [Predicate Logic](./predicate-logic-first-order-logic) (quantifiers, predicates, formal proofs)

## Set Theory

- [Set Theory](./set-theory) (operations, relations, cardinality, power sets)

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
- [Symbolic Methods vs. Numerical Methods](./symbolic-methods-vs-numerical-methods)

## Linear Algebra

- [Linear Algebra Foundations](./linear-algebra-foundations) (vector spaces, four fundamental subspaces, eigenvalues, SVD)
- [Linear Algebra for Computation](./linear-algebra-computation) (norms, factorizations, positive definiteness, matrix calculus)
- [Matrices](./matrices) (operations, determinants, inverses)
- [Systems of Linear Equations](./systems-of-linear-equations) (Gaussian elimination, row reduction)
- [Vectors](./vector) (dot product, cross product, projections)

## Geometry & Trigonometry

- [Geometry & Trigonometry](./geometry-trigonometry) (trig functions, identities, unit circle, coordinate geometry)

## Calculus

- [Calculus](./calculus) (limits, derivatives, chain rule, integrals, Fundamental Theorem)
- [Multivariable Calculus](./multivariable-calculus) (partial derivatives, gradients, gradient descent, convexity)
- [Differential Equations](./differential-equations) (ODEs, systems, stability, Laplace transforms, neural ODEs)

## Combinatorics & Probability

- [Permutations](./permutation) (arrangements, factorial, with repetition)
- [Combinations](./combination) (selections, binomial coefficients, Pascal's triangle)
- [Probability](./probability) (axioms, Bayes' theorem, distributions, CLT)

## Statistics

- [Statistics](./statistics) (estimation, hypothesis testing, regression, bias-variance tradeoff)
- [Bayesian Inference](./bayesian-inference) (priors, posteriors, MCMC, variational inference, model selection, SLT connection)

## Optimization

- [Optimization](./optimization) (convexity, gradient descent, Adam, constrained optimization, regularization)

## Information Theory

- [Information Theory](./information-theory) (entropy, KL divergence, cross-entropy, mutual information)

## Discrete Mathematics

- [Asymptotic Notation](./asymptotic-notation) (Big-O, Big-Theta, Big-Omega, growth rates)
- [Graph Theory](./graph-theory) (paths, trees, connectivity, algorithms)

## Advanced Mathematics

- [Real Analysis](./real-analysis) (sequences, series, metric spaces, uniform convergence, rigorous calculus)
- [Measure Theory](./measure-theory) (sigma-algebras, Lebesgue integral, convergence theorems, $L^p$ spaces, measure-theoretic probability)
- [Algebraic Geometry](./algebraic-geometry) (varieties, singularities, resolution of singularities, RLCT, connection to SLT)
