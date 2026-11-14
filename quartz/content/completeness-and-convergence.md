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

## 4. Every sequence has a monotone subsequence

A **subsequence** is made by choosing terms without changing their order. If $n_1<n_2<\cdots$ are natural-number indices, then $(a_{n_k})$ is a subsequence of $(a_n)$. Read $a_{n_k}$ as "the term whose index is the $k$-th selected index." The selected indices must increase strictly, so a subsequence cannot repeat a single convenient term forever.

> [!lemma] Monotone subsequence lemma
> Every real sequence has a nondecreasing subsequence or a nonincreasing subsequence, whether or not the original sequence is bounded.

**Proof.** Call an index $n$ a **peak** if its term is at least as large as every later term:

$$
a_n\ge a_m\qquad\text{for every }m>n.
$$

There are two mutually exclusive cases.

**Case 1: infinitely many peaks.** List their indices as $n_1<n_2<\cdots$. Since $n_1$ is a peak and $n_2>n_1$, we have $a_{n_1}\ge a_{n_2}$. The same argument applies to every consecutive pair. Thus $(a_{n_k})$ is nonincreasing.

**Case 2: only finitely many peaks.** Choose $n_1$ larger than every peak index (or any index if there are none). Because $n_1$ is not a peak, there exists $n_2>n_1$ with $a_{n_2}>a_{n_1}$. The new index is likewise beyond all peaks, so it too has a later index $n_3$ with $a_{n_3}>a_{n_2}$. Repeating this construction gives a strictly increasing subsequence.

These cases exhaust the possibilities, proving the lemma. $\square$

This is a typical analysis proof: we did not calculate any limits. We built an infinite subsequence using a structural distinction between indices that dominate all future terms and indices that do not.

## 5. Bolzano-Weierstrass: bounded sequences contain convergence

> [!theorem] Bolzano-Weierstrass theorem in $\mathbb R$
> Every bounded real sequence has a convergent subsequence.

**Proof.** Take a bounded sequence $(a_n)$. The monotone subsequence lemma gives a subsequence $(a_{n_k})$ that is nondecreasing or nonincreasing. Because every subsequence of a bounded sequence remains bounded, that subsequence satisfies both hypotheses of the Monotone Convergence Theorem. It therefore converges. $\square$

Two earlier results do distinct jobs: the lemma **extracts order** and completeness **converts bounded order into a limit**.

**Worked example (two cluster points).** Let $a_n:=(-1)^n+1/n$. Its even-index subsequence satisfies

$$
a_{2k}=1+\frac1{2k}\to1,
$$

while its odd-index subsequence satisfies

$$
a_{2k-1}=-1+\frac1{2k-1}\to-1.
$$

The full sequence is bounded but cannot converge: any subsequence of a convergent sequence would have to share the same limit, while these two limits differ. Bolzano-Weierstrass promises *at least one convergent subsequence*, not convergence of the original sequence.

### Why subsequences preserve an existing limit

If $a_n\to L$ and $n_k$ increases strictly, then $n_k\ge k$ (for indices beginning at $1$). Given $\varepsilon>0$, choose the original threshold $N$. For all $k\ge N$, we have $n_k\ge N$, so $|a_{n_k}-L|<\varepsilon$. Thus $a_{n_k}\to L$.

The converse is false: a sequence can have many convergent subsequences with different limits.

## 6. Cauchy sequences: convergence without knowing the answer

For a convergent sequence, late terms are close to the *limit*. A **Cauchy sequence** is one whose late terms are close to *each other*. This definition requires no proposed limit.

> [!definition] Cauchy condition
> $(a_n)$ is Cauchy if, for every $\varepsilon>0$, there exists $N$ such that
>
> $$
> m,n\ge N\quad\Longrightarrow\quad |a_m-a_n|<\varepsilon.
> $$

Compare the quantifiers carefully: the same $N$ must work for **every pair** of later indices $m,n$. It is not enough that adjacent terms satisfy $|a_{n+1}-a_n|\to0$.

### One direction needs only the triangle inequality

> [!lemma] Convergent implies Cauchy
> In every metric space, every convergent sequence is Cauchy.

**Proof in $\mathbb R$.** If $a_n\to L$, choose $N$ so that $|a_n-L|<\varepsilon/2$ for all $n\ge N$. For any $m,n\ge N$,

$$
|a_m-a_n|\le|a_m-L|+|L-a_n|<\varepsilon.
$$

No completeness property was needed. $\square$

The reverse implication is the interesting one.

### The converse is where completeness enters

> [!theorem] Cauchy criterion for real sequences
> A real sequence converges if and only if it is Cauchy.

**Proof of the remaining direction.** Assume $(a_n)$ is Cauchy.

First show it is bounded. Apply the Cauchy condition with $\varepsilon=1$ and choose $N$. All $a_n$ for $n\ge N$ lie within $1$ of $a_N$. The finitely many earlier terms have a finite maximum absolute value, so the whole sequence is bounded.

By Bolzano-Weierstrass, this bounded sequence has a convergent subsequence $(a_{n_k})$, say $a_{n_k}\to L$.

Now fix an arbitrary $\varepsilon>0$. Because the original sequence is Cauchy, choose $N$ so that $|a_m-a_n|<\varepsilon/2$ for all $m,n\ge N$. Because the chosen subsequence converges, we may pick one selected index $n_k\ge N$ with $|a_{n_k}-L|<\varepsilon/2$. Every $n\ge N$ then obeys

$$
|a_n-L|
\le |a_n-a_{n_k}|+|a_{n_k}-L|
<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
=\varepsilon.
$$

Thus the *entire* sequence converges to $L$. $\square$

Notice the exact dependency: **Cauchy** gives boundedness; **Bolzano-Weierstrass** supplies a candidate limit; **Cauchy again** pulls every late term toward that same limit. The proof does not first guess what $L$ must be.

### A useful nonexample: small steps are insufficient

For the partial sums of the harmonic series,

$$
s_n:=\sum_{k=1}^{n}\frac1k,
\qquad
|s_{n+1}-s_n|=\frac1{n+1}\to0.
$$

Nevertheless $(s_n)$ is not Cauchy. For every $n$, compare $s_n$ with $s_{2n}$:

$$
s_{2n}-s_n=\sum_{k=n+1}^{2n}\frac1k
\ge n\cdot\frac1{2n}=\frac12.
$$

Both indices $n$ and $2n$ can be arbitrarily late, yet their values remain at least $1/2$ apart. That violates the Cauchy definition with $\varepsilon:=1/2$, even though adjacent differences shrink to zero.

### Why the rational numbers are not complete

Let $q_n$ be the truncation of $\sqrt2$ to $n$ decimal places:

$$
q_n:=\frac{\lfloor10^n\sqrt2\rfloor}{10^n}\in\mathbb Q,
\qquad
0\le\sqrt2-q_n<10^{-n}.
$$

The symbol $\lfloor x\rfloor$ means the greatest integer not exceeding $x$. The estimate shows $q_n\to\sqrt2$ in $\mathbb R$ and hence, by the first Cauchy lemma, $(q_n)$ is Cauchy under the usual absolute-value distance on $\mathbb Q$.

But $\sqrt2\notin\mathbb Q$. Indeed, if $\sqrt2=p/q$ in lowest integer terms, then $p^2=2q^2$ makes $p$ even; writing $p=2r$ makes $q^2=2r^2$ and $q$ even too, contradicting that the fraction was reduced.

If $(q_n)$ had a rational limit $q$, it would also converge to $q$ as a real sequence. Uniqueness of real limits would force $q=\sqrt2$, impossible. Thus the Cauchy condition alone does not manufacture a missing element of the underlying space.

> [!distinction] A property of sequences versus a property of spaces
> **Cauchy** describes how a sequence behaves. **Complete** describes a space in which every Cauchy sequence has a limit *belonging to that space*. This distinction generalizes from $\mathbb R$ and $\mathbb Q$ to function spaces, where it motivates the definition of a Banach space.

## 7. Nested intervals: another face of completeness

> [!theorem] Nested closed interval property
> If $I_n:=[a_n,b_n]$ are nonempty closed bounded real intervals and $I_{n+1}\subseteq I_n$ for all $n$, then $\bigcap_{n=1}^{\infty}I_n$ is nonempty. If also $b_n-a_n\to0$, the intersection contains exactly one real number.

**Proof.** Nestedness makes $(a_n)$ nondecreasing and $(b_n)$ nonincreasing. For any two indices $m,n$, nestedness implies $a_n\le b_m$: the interval with the larger index lies inside the other. In particular, each $b_m$ is an upper bound of the set $A:=\{a_n:n\ge1\}$.

Completeness gives $s:=\sup A$. By definition $a_n\le s$ for every $n$, and because every $b_n$ bounds $A$ above, $s\le b_n$ for every $n$. Therefore $s\in I_n$ for all $n$, proving that the intersection is nonempty.

If $x,y$ both belong to every interval, then $|x-y|\le b_n-a_n$ for every $n$. As these widths tend to zero, the only possibility is $x=y$. $\square$

**Why closed matters.** The nested open intervals $(0,1/n)$ have empty intersection: any positive $x$ eventually exceeds $1/n$, while $0$ belongs to none of them. Boundedness of each interval without closedness is not enough.

**Why the underlying number system matters.** Nested intervals with rational endpoints can shrink toward $\sqrt2$ and have no common *rational* point, even though the corresponding real intervals meet at $\sqrt2$. See the [nested brackets used to construct the real numbers](./construction-of-the-reals#proving-completeness-the-central-result).

## 8. Limsup and liminf: where bounded sequences accumulate

Not every bounded sequence converges, but the long-run upper and lower extremes of its tails always settle down.

For a bounded real sequence, define the tail bounds

$$
u_n:=\sup\{a_k:k\ge n\},
\qquad
\ell_n:=\inf\{a_k:k\ge n\}.
$$

Read $\ell_n$ as "ell sub n." As $n$ increases, the set of remaining terms shrinks. Therefore $u_n$ is nonincreasing and $\ell_n$ is nondecreasing. Both sequences are bounded, so the Monotone Convergence Theorem supplies limits:

$$
\limsup_{n\to\infty}a_n:=\lim_{n\to\infty}u_n,
\qquad
\liminf_{n\to\infty}a_n:=\lim_{n\to\infty}\ell_n.
$$

These are read "limit superior" and "limit inferior."

> [!theorem] Subsequential meaning
> For a bounded real sequence, the limsup is its greatest subsequential limit and the liminf is its least subsequential limit.

**Proof for limsup.** Write $s:=\lim u_n$. Any convergent subsequence $(a_{n_j})$ with limit $L$ satisfies $a_{n_j}\le u_{n_j}$, and $u_{n_j}\to s$. The order-preservation law therefore implies $L\le s$.

We must still prove that $s$ is actually attained as a subsequential limit. Choose indices $N_1<N_2<\cdots$ inductively, with each $N_j$ beyond the last selected term, and choose $m_j\ge N_j$ for which

$$
u_{N_j}-\frac1j<a_{m_j}\le u_{N_j}.
$$

The sharp supremum property guarantees each choice. Since $N_j\to\infty$, the upper and lower bounds both converge to $s$, and squeezing gives $a_{m_j}\to s$. The indices $m_j$ were selected strictly increasing, so these terms form a valid subsequence. The liminf claim is symmetric, using infima. $\square$

**Worked example.** For $a_n:=(-1)^n+1/n$, the even terms approach $1$ and the odd terms approach $-1$. Every subsequential limit must be one of these two values, and both occur. Hence

$$
\limsup a_n=1,\qquad \liminf a_n=-1.
$$

> [!theorem] A convergence test
> A bounded real sequence converges if and only if $\limsup a_n=\liminf a_n$.

**Proof.** The tail bounds always satisfy $\ell_n\le a_n\le u_n$. If the outer limits coincide at $L$, the squeeze theorem forces $a_n\to L$. Conversely, if $a_n\to L$, for every $\varepsilon>0$ the entire tail eventually lies between $L-\varepsilon$ and $L+\varepsilon$; so do its supremum and infimum. Thus both tail-bound sequences converge to $L$. $\square$

## 9. Infinite series are sequences in disguise

An infinite series $\sum_{n=1}^{\infty}c_n$ is defined to converge when its **partial sums** converge:

$$
s_n:=\sum_{k=1}^{n}c_k,\qquad
\sum_{n=1}^{\infty}c_n:=\lim_{n\to\infty}s_n.
$$

The symbol $\sum$ is read "sum" or "sigma." There is no independent operation of adding infinitely many real numbers without a convergence definition.

> [!theorem] Cauchy criterion for a series
> A real series $\sum c_n$ converges if and only if, for every $\varepsilon>0$, some $N$ makes
>
> $$
> \left|\sum_{k=n+1}^{m}c_k\right|<\varepsilon
> \qquad\text{whenever }m>n\ge N.
> $$

**Proof.** The difference between two partial sums is exactly $s_m-s_n=\sum_{k=n+1}^{m}c_k$. Therefore this condition is precisely the Cauchy condition for $(s_n)$. Apply the proved real Cauchy criterion. $\square$

### Absolute convergence is enough

> [!theorem] Absolute convergence implies convergence
> If $\sum |c_n|$ converges, then $\sum c_n$ converges.

**Proof.** The absolute-value series has Cauchy partial sums. Given $\varepsilon>0$, choose $N$ such that for all $m>n\ge N$,

$$
\sum_{k=n+1}^{m}|c_k|<\varepsilon.
$$

By the triangle inequality,

$$
\left|\sum_{k=n+1}^{m}c_k\right|
\le\sum_{k=n+1}^{m}|c_k|<\varepsilon.
$$

The series Cauchy criterion now proves convergence of $\sum c_n$. $\square$

The converse fails. A series can converge conditionally even when the corresponding series of absolute values diverges.

### A full proof of the alternating series test

> [!theorem] Alternating series test
> Suppose $d_n\ge0$ is nonincreasing and $d_n\to0$. Then $\sum_{n=1}^{\infty}(-1)^{n+1}d_n$ converges.

**Proof.** Let $s_n$ denote the partial sums. The even partial sums form a nondecreasing sequence because

$$
s_{2k+2}-s_{2k}=d_{2k+1}-d_{2k+2}\ge0.
$$

The odd partial sums form a nonincreasing sequence because

$$
s_{2k+3}-s_{2k+1}=-d_{2k+2}+d_{2k+3}\le0.
$$

Moreover $s_{2k}\le s_{2k+1}$, with gap $s_{2k+1}-s_{2k}=d_{2k+1}\to0$. Every even sum lies below the first odd sum, and every odd sum lies above the first even sum. Both subsequences are therefore bounded and monotone, so both converge. Their gap tends to zero, forcing a common limit $L$. Every sufficiently late partial sum is an even or odd partial sum close to $L$, hence the entire sequence $(s_n)$ converges. $\square$

**Worked contrast.** The alternating harmonic series $\sum_{n\ge1}(-1)^{n+1}/n$ converges by this theorem, but it does not converge absolutely: its absolute-value series is the harmonic series. To see divergence of $\sum1/n$, group terms in blocks

$$
\frac12+
\left(\frac13+\frac14\right)+
\left(\frac15+\cdots+\frac18\right)+
\left(\frac19+\cdots+\frac1{16}\right)+\cdots .
$$

Each parenthesized block has $2^{j-1}$ terms, each at least $1/2^j$, and therefore contributes at least $1/2$. The partial sums are unbounded. The [Sequences & Series](./sequences-and-series) chapter develops other practical convergence tests; the aim here is to prove the underlying completeness arguments.

## 10. A proof dependency map

The arguments in this chapter form a single logical chain:

1. **Least-upper-bound completeness** gives sharp supremum approximation, the Archimedean property and the Monotone Convergence Theorem.
2. **Monotone subsequence lemma + monotone convergence** give Bolzano-Weierstrass.
3. **Bolzano-Weierstrass + the Cauchy condition** show that every real Cauchy sequence converges.
4. **Cauchy convergence of partial sums** gives the series criterion and absolute-convergence theorem.
5. **Monotone convergence of tail bounds** gives limsup and liminf, even for bounded sequences that never converge.

The dependencies matter more than the names. In particular, we did not assume Bolzano-Weierstrass to prove the Monotone Convergence Theorem and then accidentally use the reverse implication without justification. We derived both from the same concrete completeness assumption in a transparent order.

## 11. What would break the proofs?

**Remove boundedness:** $a_n:=n$ is nondecreasing but has no finite real limit, so the Monotone Convergence Theorem no longer applies.

**Remove monotonicity:** $a_n:=(-1)^n$ is bounded but divergent. Bolzano-Weierstrass still supplies convergent subsequences, showing precisely what survives.

**Remove completeness of the space:** rational truncations of $\sqrt2$ form a Cauchy sequence in $\mathbb Q$ without a rational limit. The triangle inequality does not fail; the missing limit does.

**Remove the tail-wide quantifier:** $|a_{n+1}-a_n|\to0$ for harmonic partial sums, but widely separated late terms stay apart. A small step is not the same as a small tail diameter.

**Remove absolute convergence:** $\sum(-1)^{n+1}/n$ still converges, but its absolute values do not. Absolute convergence is sufficient, not necessary.

These examples explain why the hypotheses in the theorems are actual work, not decorative fine print.

## Where this proof chain goes next

In [Real Analysis](./real-analysis#continuity-rigorous), completeness and sequences support continuity, the Intermediate Value Theorem, and uniform continuity. The [Compactness chapter](./general-topology-compactness#metric-compactness-and-convergent-subsequences) compares sequential compactness and finite-subcover compactness, with full proofs of their relationship for metric spaces. [Measure Theory](./measure-theory) develops a different Monotone Convergence Theorem about integrals. [Functional Analysis](./functional-analysis) asks whether sequences of *functions* converge in the spaces and norms we care about.

The next real-analysis companion is **Continuity and Compactness**, where these sequence tools will become existence theorems about functions. This page is the first proof-focused expansion of the [Path Through Analysis](./path-through-analysis).
