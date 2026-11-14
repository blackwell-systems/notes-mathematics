# Real Analysis proof and prerequisite audit

**Scope:** Real Analysis and its immediate proof dependencies, November 14, 2026. This is an **editorial proof inspection**, not a formal verification in Lean/Coq and not a claim that every page in the 95-topic site has been reviewed. The purpose is to distinguish *a theorem with a displayed statement* from *a theorem with an accessible, logically complete argument*.

## Method

For each core claim, verify five items separately:

1. **Dependencies.** Every invoked theorem was established earlier in the path or linked to a chapter that proves it.
2. **Quantifiers.** The order of $\forall/\exists$ is correct; one epsilon/delta or index threshold works across exactly the stated domain.
3. **Hypotheses.** Compactness, nonempty domains, continuity, boundedness, integrability, completeness and endpoint assumptions are explicit where needed.
4. **Argument.** The proof supplies the crucial construction and deduction, not only "by continuity" or "apply compactness."
5. **Counterexample.** If a hypothesis is removed, the example actually violates the conclusion while meeting the remaining conditions.

The **automatic** Quartz checks validate Markdown renderability, links, figure metadata, and selected numerical examples. They do not certify any of the five mathematical items above. New chapters remain *pending* in the semantic review manifest until independently reviewed.

## Dependency path and inspected claims

| Theorem or concept | Where the complete proof is located | Specific dependency or obstruction checked |
| --- | --- | --- |
| Least-upper-bound characterization | [Completeness and Convergence](./content/completeness-and-convergence.md) | A smaller candidate upper bound contradicts supremum minimality |
| Monotone convergence | Same chapter | Upper-bounded **nondecreasing** sequence; epsilon approximation to the supremum |
| Monotone subsequence extraction | Same chapter | Infinite peaks versus finitely many peaks, ensuring strictly increasing indices |
| Bolzano-Weierstrass | Same chapter | Bounded extracted monotone subsequence, then monotone convergence |
| Cauchy criterion over $\mathbb R$ | Same chapter | Boundedness, subsequential limit, and Cauchy control of the **whole tail** |
| Nested closed intervals | Same chapter | Real supremum of lower endpoints; uniqueness requires shrinking widths |
| Limsup/liminf as subsequential extrema | Same chapter | Supremum approximation with indices forced beyond previous selections |
| Sequential continuity | [Continuity and Compactness](./content/continuity-and-compactness.md) | Failure of continuity yields a sequence chosen using $\delta=1/n$ |
| Sequential compactness on $\mathbb R$ | Same chapter | Bolzano-Weierstrass and limit preservation by closed sets; unbounded/nonclosed counterexamples |
| Intermediate Value Theorem | Same chapter | Two separate contradictions $f(c)<v$ and $f(c)>v$ at a supremum |
| Extreme Value Theorem | Same chapter | Continuous image bounded via subsequence, then supremum realized by compactness |
| Heine-Cantor | Same chapter | Contradiction pairs approach the **same** compactness-selected point |
| Differentiability implies continuity | [Rigorous Differentiation](./content/rigorous-differentiation.md) | Finite difference quotient multiplied by vanishing increment |
| Product and chain rules | Same chapter | Insert/subtract an intermediate product; zero inner increment handled without division |
| Fermat, Rolle and MVT | Same chapter | Endpoint continuity, interior differentiability, and auxiliary affine function |
| Darboux property of derivatives | Same chapter | Minimum of $f(x)-\lambda x$ cannot occur at either endpoint |
| Taylor Lagrange remainder | Same chapter | Repeated Rolle applied to error function with matched derivatives at base point |
| Darboux epsilon criterion | [Rigorous Integration](./content/rigorous-integration.md) | Common refinements of two partitions, not incorrectly comparing unrelated partitions |
| Continuous and monotone integrability | Same chapter | Uniform oscillation control; monotone telescoping gap |
| FTC I and FTC II | Same chapter | Pointwise continuity needed for derivative of accumulation; MVT on subintervals for evaluation |
| Uniform Cauchy and continuous limits | [Sequences of Functions](./content/sequences-of-functions.md) | Completeness point by point, then **one shared index threshold** |
| Weierstrass M-test | Same chapter | Majorant numerical tail controls all function tails independently of $x$ |
| Integral of a uniform limit | Same chapter | Both integrability of limit and convergence of integrals proved separately |
| Differentiating limits | Same chapter | Uniform convergence of derivatives **plus one anchor value**, not uniform convergence of functions alone |
| Arzelà-Ascoli on intervals | Same chapter | Diagonal dense-set extraction, equicontinuity, and finite nets |
| Polynomial approximation on $[0,1]$ | Same chapter | Bernstein weights, second-moment bound, uniform continuity and a global error estimate |

## Corrected in this pass

- **Survey derivative-interchange claim:** replaced the underqualified statement with an interval theorem requiring endpoint continuity, uniformly convergent derivatives, and convergence at one anchor point.
- **Survey term-by-term differentiation:** uniform convergence of $\sum x^n$ alone does not license differentiation. The survey now checks that $\sum nx^{n-1}$ also converges uniformly on each $[-r,r]$, $r<1$.
- **Survey FTC II:** corrected the wording to require a continuous candidate antiderivative on the closed interval and its derivative on the interior, avoiding an undefined two-sided endpoint derivative.
- **EVT counterexample:** corrected a discontinuous, bounded function on a compact interval that was mistakenly described as attaining both extrema; its infimum is not attained.
- **Darboux integrability:** replaced the slogan "upper/lower sums meet as mesh shrinks" with the actual all-partitions supremum/infimum and proved the common-refinement epsilon criterion.
- **Pointwise integral interchange:** provided continuous triangular spikes with unit integral but pointwise limit zero, establishing a clean failure where all individual functions are integrable.

## Prerequisite bridges audited

| Earlier topic | Concept it supplies | Downstream use |
| --- | --- | --- |
| [Calculus](./content/calculus.md) | Derivative/integral vocabulary, secants, computational examples | Proof-oriented differentiation and integration |
| [Sequences and Series](./content/sequences-and-series.md) | Partial sums, recurrence intuition, convergence tests | Numerical Cauchy criterion and function series |
| [Construction of the Reals](./content/construction-of-the-reals.md) | Why $\mathbb R$ is complete | The ordered-field completeness assumption |
| [Completeness and Convergence](./content/completeness-and-convergence.md) | Subsequence, Cauchy, supremum, real convergence | IVT, sequential compactness, uniform Cauchy |
| [Continuity and Compactness](./content/continuity-and-compactness.md) | EVT, IVT, Heine-Cantor | Rolle/MVT, Darboux integrability, equicontinuity |
| [Rigorous Differentiation](./content/rigorous-differentiation.md) | MVT and derivative bounds | FTC II and uniform derivative-limit theorem |
| [Rigorous Integration](./content/rigorous-integration.md) | Darboux partition estimates | Uniform limit/integral exchange |
| [General Topology: Compactness](./content/general-topology-compactness.md) | Open-cover characterization, connectedness and metric compactness | Extends interval arguments to more abstract spaces |

The sequence does **not** require learners to complete all general topology before proving IVT or EVT on the real line. When generalizations are needed, they are linked rather than proved twice.

## Explicitly not certified or still open

- The new chapter arguments have been inspected and edited in this pass; they have **not** been independently peer-reviewed or machine-checked.
- The older [Real Analysis survey](./content/real-analysis.md) contains compact summaries of additional metric-space and power-series results. Not all theorems there have complete proofs in the survey itself; links to the proof companions do not by themselves resolve **every** advanced theorem in the chapter.
- [General Topology](./content/general-topology-compactness.md) has open-cover arguments that should receive an independent theorem-by-theorem audit, especially the compactness equivalences outside $\mathbb R$.
- The full Stone-Weierstrass theorem for separating subalgebras on arbitrary compact Hausdorff spaces remains outside this sequence. We **do** prove its fundamental one-variable uniform polynomial approximation result by Bernstein polynomials.
- Lebesgue convergence theorems, differentiation under the integral sign, multivariable implicit/inverse function theorems, and functional-analytic compactness are separate advanced courses, **not** results established by these real-variable proofs.
- A complete cross-repository semantic audit of all topics remains pending. Passing CI must not be reported as finishing that audit.

## Acceptance tests

The current milestone should be treated as merged only after the repository's editorial inventory, mathematical figure audit, Quartz/KaTeX build, link-and-orphan quality gate, and numeric example harness all pass. This is **structural and numeric** acceptance, not universal mathematical proof certification.
