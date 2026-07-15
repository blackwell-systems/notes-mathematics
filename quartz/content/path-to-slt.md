---
title: "Path to SLT"
---

This is a guided reading sequence through these notes with a single destination: [Singular Learning Theory](./singular-learning-theory), the mathematical theory of why overparameterized models generalize. Unlike the general [reading order on the home page](./), which surveys all of mathematics, this path is ruthlessly filtered. Every page listed here exists on the route because SLT genuinely needs it, and each entry says *what* SLT borrows from it. If you only care about reaching the summit, this is the trail.

The route has four stages: the **language** you reason in, the **analysis** that makes limits and integrals rigorous, the **probability** that turns models into distributions, and the **geometry** that measures singularities. SLT sits where all four meet.

## How to Use This Path

Read top to bottom. Each stage assumes the ones above it. If a page assumes something you do not have, follow its own "builds on" links backward, then return. You do not need every worked example on every page; you need the concepts flagged below. A reader comfortable with undergraduate math can skim Stages 1-2 and focus on 3-4.

## Stage 1: The Language

SLT is stated in the language of sets, functions, and logic. You cannot define the set of true parameters $W_0$ (read "W-naught") without set-builder notation, nor the model family $p(x \mid w)$ without functions.

1. [Mathematical Notations](./mathematical-notations) — the symbols and quantifiers everything else is written in.
2. [Set Theory](./set-theory) — $W_0 = \{w : K(w) = 0\}$ is a set; you need membership, subsets, and set-builder notation to even write it.
3. [Functions & Relations](./functions-relations) — a statistical model *is* a function from parameters to distributions; identifiability is the question of whether that function is one-to-one.
4. [Number Systems](./number-systems) and [Algebraic Structures](./algebraic-structures) — the real numbers and their field/order axioms underlie every inequality and limit.

**What SLT takes from Stage 1:** the vocabulary to state the learning problem precisely, and the concept of injectivity, whose *failure* defines a singular model.

## Stage 2: Analysis, the Rigor Layer

Watanabe's fundamental formula is an asymptotic statement ($n \to \infty$) about an integral. Making it rigorous means controlling limits, swapping limits with integrals, and integrating over sets of complicated geometry. That is exactly what analysis and measure theory provide.

5. [Calculus](./calculus) — limits, derivatives, and integrals; the Fisher information is built from derivatives of the log-likelihood.
6. [Multivariable Calculus](./multivariable-calculus) — gradients, Hessians, and the Jacobian of a change of variables, the workhorse of resolution of singularities.
7. [Sequences & Series](./sequences-and-series) — convergence and asymptotic behavior; the free energy expansion is a statement about how a sequence grows.
8. [Real Analysis](./real-analysis) — when *can* you swap a limit and an integral? SLT's derivation does this repeatedly, and analysis is where the license comes from.
9. [Measure Theory](./measure-theory) — the free energy $F_n = -\log Z_n$ (read "F-sub-n") is a Lebesgue integral over parameter space; the Dominated Convergence Theorem is what justifies taking $n \to \infty$ inside it.

**What SLT takes from Stage 2:** the Lebesgue integral that *defines* the partition function $Z_n$, and the convergence theorems that make the asymptotic expansion legitimate rather than formal.

## Stage 3: Probability and Bayesian Inference

SLT is a theory of *Bayesian* learning. Its central object, the free energy, is the negative log marginal likelihood; its estimators (WAIC, WBIC) are posterior expectations. This stage turns models into distributions and gives you the inference machinery.

10. [Probability](./probability) — axioms, distributions, Bayes' theorem, and the Central Limit Theorem.
11. [Information Theory](./information-theory) — the KL divergence $K(w)$ (read "K of w") *is* the loss whose zero set is $W_0$; entropy and cross-entropy are the loss functions being minimized.
12. [Statistics](./statistics) — estimation, likelihood, the classical Fisher information, and the bias-variance tradeoff that SLT ultimately reframes.
13. [Bayesian Inference](./bayesian-inference) — priors, posteriors, MCMC, model selection, and the SLT estimators WAIC and WBIC. This is the page that hands you directly to the summit.

**What SLT takes from Stage 3:** the free energy as a model-selection criterion, the KL divergence as the loss, and the tempered-posterior estimators that measure the RLCT in practice.

## Stage 4: The Geometry of Singularities

This is the stage that makes the theory *singular* rather than classical. The complexity penalty in the free energy is not the parameter count; it is a geometric invariant of the loss landscape's singularities.

14. [Linear Algebra Foundations](./linear-algebra-foundations) — rank, eigenvalues, and positive definiteness; a model is singular exactly when the Fisher information matrix drops rank.
15. [Optimization](./optimization) — convexity and gradient descent; singular models have non-convex, degenerate loss landscapes, which is *why* classical optimization intuition misleads.
16. [Algebraic Geometry](./algebraic-geometry) — varieties, singular points, resolution of singularities (Hironaka), and the real log canonical threshold $\lambda$ (read "lambda"). This is where $\lambda$ is defined and computed.

**What SLT takes from Stage 4:** the RLCT $\lambda$ itself, extracted from the resolved normal form of the loss, and the fact that $\lambda < d/2$ for singular models.

## The Summit

17. [Singular Learning Theory](./singular-learning-theory) — everything above assembles here. Watanabe's fundamental formula, the RLCT as effective dimension, WAIC/WBIC, and the local learning coefficient $\hat\lambda$ (read "lambda-hat") that connects the theory to developmental interpretability.

## The One-Paragraph Version

If you want the throughline in a sentence before committing to the climb: a statistical model is a *function* (Stage 1) from parameters to distributions; its quality is the KL *integral* $K(w)$ (Stages 2-3); the set where that integral is zero is a geometric *variety* whose singularities (Stage 4) are measured by the RLCT $\lambda$; and Watanabe's theorem says $\lambda$, not the parameter count, is the true complexity of the model. Everything else is filling in those four nouns: function, integral, variety, invariant.
