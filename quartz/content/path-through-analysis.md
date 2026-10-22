---
title: "Path Through Analysis"
prerequisites: ["calculus", "sequences-and-series"]
enables: ["real-analysis", "measure-theory", "functional-analysis", "complex-analysis", "information-geometry"]
---

> [!abstract] Two branches from limits
> **Start with:** [Calculus](./calculus) and [Sequences and Series](./sequences-and-series). **Branch toward:** [Functional Analysis](./functional-analysis), [Complex Analysis](./complex-analysis), [Measure Theory](./measure-theory) and [Information Geometry](./information-geometry). This is a suggested study route, not a claim that every destination needs every preceding chapter.

Analysis turns the intuitive idea of **approaching a value** into precise statements. The most useful question to ask at every step is: *What converges, in what sense, and which operations are legal to perform on that limit?*

## Stage 1: Limits and completeness

[Calculus](./calculus) introduces derivatives and integrals; [Real Analysis](./real-analysis) asks why their rules are correct. Work carefully through Cauchy sequences, completeness, convergence theorems and $\varepsilon$–$\delta$ continuity.

**Checkpoint:** Explain the difference between saying that each value $f_n(x)$ approaches $f(x)$ and saying that $f_n$ approaches $f$ **uniformly over all** $x$. The distinction becomes crucial when exchanging limits with other operations.

## Stage 2: Three kinds of convergence

The sequence $f_n(x)=x^n$ on $[0,1]$ ties several chapters together:

- For each $0\leq x<1$, $f_n(x)\to0$, but $f_n(1)=1$: the pointwise limit is discontinuous.
- The maximum error does not shrink: $\|f_n\|_\infty=1$.
- Yet $\int_0^1|f_n(x)|\,dx=1/(n+1)\to0$.

[Real Analysis](./real-analysis#sequences-and-series-of-functions) teaches pointwise and uniform convergence. [Measure Theory](./measure-theory) introduces almost-everywhere convergence, integral norms, and the conditions under which limits pass inside integrals. [Functional Analysis](./functional-analysis) studies norm convergence, completeness, and weak convergence in **spaces of functions**.

**Checkpoint:** Never say simply "the functions converge" when the **type of convergence** determines whether the next step is valid.

## Stage 3: Measure and integration

Read [Measure Theory](./measure-theory) for sigma-algebras, measurable functions, the Lebesgue integral and its monotone/dominated convergence theorems. These are not just more complicated versions of the Riemann integral: they permit statements about almost-everywhere behavior and integrable limits that the Riemann framework cannot handle as naturally.

**Checkpoint:** Before interchanging a limit and an integral, state **which convergence theorem** applies and verify its hypotheses.

## Stage 4A: The real/infinite-dimensional branch

[Functional Analysis](./functional-analysis) asks what happens when an entire function is a vector. Normed spaces and Banach spaces tell us where norm limits live. Hilbert spaces restore orthogonality and projection; bounded operators tell us when linear maps respect convergence.

This branch is particularly useful for optimization, PDEs, approximation, inverse problems, and functional forms of statistical learning.

**Checkpoint:** Give an example of a linear map bounded in one norm but unbounded in another, and explain what that changes about continuity.

## Stage 4B: The complex branch

[Complex Analysis](./complex-analysis) starts from complex differentiability. It leads to Cauchy's integral formula, Taylor and Laurent series, residues, and the argument principle.

Its first surprise is that having a complex derivative forces much stronger structure than ordinary real differentiability. Its second is that **the geometry of an integration contour** can detect poles and zeros.

**Checkpoint:** Compute $\int_{|z|=1}\frac1z\,dz=2\pi i$ by parametrizing the circle, then explain why the holomorphic closed-contour theorem does **not** apply across the removed origin.

The two branches are independent enough to study in parallel. Neither should be treated as a prerequisite for every result in the other.

## Stage 5: Probability and local geometry

[Probability](./probability), [Information Theory](./information-theory), and [Information Geometry](./information-geometry) combine integrals, derivatives and statistical models.

**Recurring model:** $X\mid w\sim\mathcal N(w^2,1)$ with truth $\mathcal N(0,1)$ gives a KL loss $K(w)=w^4/2$, which has one minimizer but vanishing quadratic curvature. This links ordinary differentiation, Fisher information and the higher-order singular asymptotics in [Singular Learning Theory](./singular-learning-theory).

**Checkpoint:** Show independently why $W_0=\{0\}$ and $I(0)=0$. An isolated minimum need not have positive-definite curvature.

## Destination and what still lies beyond

For the [Path to SLT](./path-to-slt), the essential analysis is the ability to justify Bayesian integrals, changing coordinates and large-sample asymptotics **under explicit hypotheses**. The new complex-analysis chapter supplies intuition for poles; it does *not* imply that every real zeta integral has a meromorphic continuation without further work.

Full Fourier analysis, distribution theory, Sobolev spaces, several-complex-variable theory, PDE regularity and infinite-dimensional spectral theory remain specialized extensions. This map intentionally distinguishes the solid foundations here from those advanced subjects.

**Unifying theme:** First name the space and its notion of convergence. Then state the theorem permitting the operation you want to perform. Finally check the theorem's assumptions on the actual example.
