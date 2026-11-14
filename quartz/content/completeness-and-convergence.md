---
title: "Completeness and Convergence: Proofs from First Principles"
prerequisites: ["calculus", "sequences-and-series"]
enables: ["real-analysis", "general-topology-compactness", "functional-analysis"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Calculus](./calculus) (limits, inequalities) · [Sequences & Series](./sequences-and-series) (indexed sequences, partial sums). To see why these properties hold for the constructed real numbers, read [Construction of the Reals](./construction-of-the-reals).
> **Leads to:** [Real Analysis](./real-analysis) (continuity, differentiation and integration) · [Compactness and Connectedness](./general-topology-compactness) · [Functional Analysis](./functional-analysis).

A sequence may have infinitely many terms without having a limit. A bounded sequence may fail to converge; a bounded *monotone* sequence cannot. A sequence whose late terms become arbitrarily close to one another converges over the real numbers, but the same claim is false over the rationals. **Completeness explains each difference.**

This chapter develops that explanation as a chain of proofs. The [Real Analysis](./real-analysis) chapter remains the overview; here we establish the foundational results it uses, rather than merely naming them. We assume familiar arithmetic and inequalities, but **not** the sequence-convergence theorems we are about to prove.

> [!intuition] The main idea
> The real line has no missing finite limit points. To make that precise, we first assume that every nonempty set bounded above has a least upper bound. From that single property, we will derive convergence results and see exactly where they fail without completeness.

## 1. Start with bounds, not with limits

Let $S\subseteq\mathbb R$ be a nonempty set. An **upper bound** is a real number $u$ satisfying $x\le u$ for every $x\in S$. A **lower bound** reverses the inequality. The **supremum** (read "soo-PREE-mum"), denoted $\sup S$, is the least upper bound; the **infimum** (read "in-FEE-mum"), denoted $\inf S$, is the greatest lower bound.

An upper bound need not belong to $S$. That distinction between a *bound* and an *attained maximum* matters throughout analysis.

> [!axiom] Least-upper-bound completeness
> Every nonempty subset $S\subseteq\mathbb R$ that has an upper bound has a supremum in $\mathbb R$. When $\mathbb R$ is **constructed** from rational Cauchy sequences or Dedekind cuts, this becomes a theorem proved from the construction, not an independent assumption. See [Construction of the Reals](./construction-of-the-reals#proving-completeness-the-central-result).

**Example (an unattained bound).** Take $S:=\{1-1/n:n\in\mathbb N,\ n\ge1\}$. Every element is less than $1$, but for any $u<1$ the [Archimedean property](#the-archimedean-property-follows-from-completeness), proved below, supplies an $n$ with $1/n<1-u$. Then $1-1/n>u$. Thus $\sup S=1$, yet $1\notin S$. Meanwhile $\inf S=0$, and $0\in S$. Neither an extremum nor membership should be inferred merely from the existence of a supremum or infimum.

### A sharp test for the supremum

> [!theorem] Approximation from below
> A real number $s$ equals $\sup S$ precisely when it is an upper bound of $S$ and, for every $\varepsilon>0$, there is an $x\in S$ with $s-\varepsilon<x$.

We read $\varepsilon$ as "epsilon": a positive tolerance chosen as small as desired.

**Proof.** Suppose $s=\sup S$. The number $s-\varepsilon$ cannot be an upper bound, because it is strictly smaller than the *least* upper bound. Hence some $x\in S$ satisfies $x>s-\varepsilon$.

Conversely, suppose $s$ is an upper bound and the approximation property holds. If another upper bound $u$ were smaller than $s$, choose $\varepsilon:=s-u>0$. The property would produce $x\in S$ with $x>s-\varepsilon=u$, contradicting that $u$ is an upper bound. Therefore no smaller upper bound exists. $\square$

That single argument is the engine behind the Monotone Convergence Theorem.

### The Archimedean property follows from completeness

> [!theorem] Archimedean property
> For every real $x$, some natural number $n$ satisfies $n>x$. Equivalently, for every $\varepsilon>0$ there is an $n$ with $1/n<\varepsilon$.

**Proof.** Suppose instead that $\mathbb N$ had an upper bound. Completeness would give $s:=\sup\mathbb N$. Since $s-1$ is smaller than $s$, some natural $n$ would satisfy $n>s-1$. But then the natural number $n+1$ would exceed $s$, contradicting that $s$ bounds $\mathbb N$. Thus $\mathbb N$ is unbounded above.

For the equivalent formulation, apply the first statement to $1/\varepsilon$ and take reciprocals of the resulting positive numbers. $\square$

**Worked example.** Why does $1/n\to0$? Given an arbitrary $\varepsilon>0$, choose $N>1/\varepsilon$. Every $n\ge N$ then satisfies $0<1/n\le1/N<\varepsilon$. We have exhibited a single threshold that works for all later indices.

### Density is not completeness

The **rational numbers are dense** in $\mathbb R$: every open interval $(a,b)$ contains a rational. To prove this, choose a positive integer $n$ with $n(b-a)>1$. The Archimedean property and the integer-part property allow an integer $m$ with $na<m<nb$; therefore $a<m/n<b$. (One convenient choice is the smallest integer strictly greater than $na$.)

Yet density does **not** fill every limit gap. The rationals approximate $\sqrt2$ arbitrarily well without containing it. Completeness is the stronger assertion that bounded sets have the required suprema *inside the chosen number system*.

## 2. What it means to converge

A **sequence** is a function $a:\mathbb N\to\mathbb R$, with terms $a_n:=a(n)$. We write $a_n\to L$ when the terms eventually remain arbitrarily close to one real number $L$.

> [!definition] Epsilon-N convergence
> The sequence $(a_n)$ converges to $L\in\mathbb R$ if
>
> $$
> \forall\varepsilon>0\ \exists N\in\mathbb N\ \forall n\ge N:
> \quad |a_n-L|<\varepsilon.
> $$

Read the quantifiers from left to right: **for every tolerance**, **there exists a threshold**, **such that every later index works**. The chosen $N$ may depend on $\varepsilon$; it cannot depend on the later $n$. Convergence requires the whole tail, not merely infinitely many favorable terms.

**Proof from the definition.** Consider $a_n:=\dfrac{2n+1}{3n+5}$. We claim that $a_n\to2/3$. Indeed,

$$
\left|\frac{2n+1}{3n+5}-\frac23\right|
=\frac{7}{3(3n+5)}
\le\frac{7}{9n}.
$$

Given $\varepsilon>0$, choose an integer $N>\dfrac{7}{9\varepsilon}$. For every $n\ge N$, the displayed bound is strictly smaller than $\varepsilon$. The proof identifies *why* convergence holds rather than guessing from the leading coefficients.

### Limits are unique

> [!theorem] Uniqueness
> A real sequence cannot converge to two distinct limits.

**Proof.** Suppose $a_n\to L$ and $a_n\to M$. If $L\ne M$, choose $\varepsilon:=|L-M|/3>0$. Convergence to $L$ gives a threshold $N_L$; convergence to $M$ gives a threshold $N_M$. For any $n\ge\max(N_L,N_M)$, the triangle inequality yields

$$
|L-M|\le|L-a_n|+|a_n-M|<2\varepsilon
=\frac23|L-M|,
$$

which is impossible. Hence $L=M$. $\square$

### Every convergent sequence is bounded

**Proof.** If $a_n\to L$, use $\varepsilon=1$ to obtain $N$ such that $|a_n-L|<1$ for $n\ge N$. The tail is bounded by $|L|+1$, and there are only finitely many preceding terms. The maximum of their absolute values together with $|L|+1$ bounds the entire sequence. $\square$

The converse fails: $a_n:=(-1)^n$ is bounded between $-1$ and $1$, but it alternates forever and has no limit.

### Algebra of limits: why multiplication works

> [!theorem] Algebraic limit laws
> If $a_n\to a$ and $b_n\to b$, then $a_n+b_n\to a+b$, $a_nb_n\to ab$, and $ca_n\to ca$ for every fixed real $c$. If $b\ne0$, then $a_n/b_n\to a/b$ for all sufficiently late indices.

**Proof.** Addition follows by the triangle inequality: choose thresholds making the two errors smaller than $\varepsilon/2$. Scalar multiplication follows by controlling $|c||a_n-a|$ (and is immediate when $c=0$).

For multiplication, use the decomposition

$$
a_nb_n-ab=(a_n-a)b_n+a(b_n-b).
$$

The preceding boundedness result gives $|b_n|\le M$ for some $M\ge1$. For a requested $\varepsilon>0$, choose a threshold at which

$$
|a_n-a|<\frac{\varepsilon}{2M},
\qquad
|b_n-b|<\frac{\varepsilon}{2(|a|+1)}.
$$

Then $|a_nb_n-ab|<\varepsilon$. Finally, when $b\ne0$, convergence of $b_n$ gives $|b_n|\ge|b|/2$ eventually, so the denominators are nonzero and

$$
\left|\frac1{b_n}-\frac1b\right|
=\frac{|b-b_n|}{|b_n||b|}
\le\frac{2}{|b|^2}|b_n-b|\to0.
$$

Apply the product law to $a_n(1/b_n)$. $\square$

**What fails without the hypothesis?** If $b_n:=1/n\to0$, then every $b_n\ne0$, but $1/b_n=n$ does not converge in $\mathbb R$. The quotient law cannot be used when the limiting denominator is zero.

### Order survives limits

If $a_n\le b_n$ for all sufficiently large $n$ and $a_n\to a$, $b_n\to b$, then $a\le b$. Otherwise $a-b>0$ and the limit laws would make $a_n-b_n>0$ eventually, a contradiction. The **squeeze theorem** follows: if $a_n\le c_n\le b_n$ eventually and both outside sequences tend to $L$, then $c_n\to L$.

A subtlety: strict inequalities may become non-strict at the limit. For instance $1/n>0$ for every $n$, but $\lim 1/n=0$.

## 3. Monotone sequences: the first payoff of completeness

A sequence is **nondecreasing** (often called increasing in this context) if $a_n\le a_{n+1}$, and **nonincreasing** if $a_n\ge a_{n+1}$. The order of the terms supplies information that ordinary boundedness does not.

> [!theorem] Monotone Convergence Theorem for sequences
> Every nondecreasing real sequence bounded above converges, and its limit is the supremum of its terms. Every nonincreasing real sequence bounded below likewise converges to the infimum of its terms.

This is the **sequence** version of monotone convergence, distinct from the measure-theoretic theorem about integrals in [Measure Theory](./measure-theory).

**Proof.** Let $S:=\{a_n:n\in\mathbb N\}$. It is nonempty and bounded above, so completeness supplies $s:=\sup S$. Given $\varepsilon>0$, the approximation-from-below property produces an index $N$ with $s-\varepsilon<a_N$. Because the sequence is nondecreasing, for every $n\ge N$ we have

$$
s-\varepsilon<a_N\le a_n\le s.
$$

Consequently $|a_n-s|<\varepsilon$, exactly the definition of convergence to $s$. For the nonincreasing case, apply the proven result to $(-a_n)$, or argue directly with the infimum. $\square$

**Worked example (a limit we obtain before guessing its value).** Define $a_1:=0$ and

$$
a_{n+1}:=\sqrt{2+a_n}.
$$

The first terms are $0,\sqrt2,\sqrt{2+\sqrt2},\ldots$. We prove by induction that $0\le a_n<2$: if $a_n<2$, then $a_{n+1}=\sqrt{2+a_n}<2$, and nonnegativity is automatic. Moreover $a_2>a_1$; because the square-root function is increasing, $a_{n+1}\ge a_n$ implies $a_{n+2}\ge a_{n+1}$. Thus the entire sequence is nondecreasing and bounded above by $2$.

The theorem guarantees a limit $L$ without requiring us to know it first. Continuity of the square root gives $L=\sqrt{2+L}$. Hence $L^2-L-2=0$, or $(L-2)(L+1)=0$. As $L\ge0$, the only permissible value is $L=2$.

> [!distinction] Bounded is not the same as convergent
> The sequence $(-1)^n$ is bounded but not monotone, and it does not converge. The sequence $n$ is monotone but unbounded, and it does not converge in $\mathbb R$. **Both hypotheses matter.**
