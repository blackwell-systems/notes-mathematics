---
title: "Sequences of Functions: Which Limits May Be Exchanged?"
prerequisites: ["continuity-and-compactness", "rigorous-differentiation", "rigorous-integration"]
enables: ["functional-analysis", "measure-theory"]
---

> [!abstract] The final core Real Analysis proof sequence
> **Builds on:** [Completeness and Convergence](./completeness-and-convergence), [Continuity and Compactness](./continuity-and-compactness), [Rigorous Differentiation](./rigorous-differentiation), and [Rigorous Integration](./rigorous-integration).
> **Leads to:** [Functional Analysis](./functional-analysis), [Measure Theory](./measure-theory), and the broader [Path Through Analysis](./path-through-analysis).

A sequence of numbers converges to another number. A sequence of **functions** can converge in different senses, and the sense determines what survives: continuity, integration, or differentiation. The issue is not whether limits exist, but whether a single error threshold controls **all points in the domain**.

**For review:** See the [Chapter Reference](#chapter-reference) for definitions, key concepts, and theorem statements in tables.

## 1. A quantifier changes the mathematics

> [!definition] Pointwise versus uniform convergence
> Functions $f_n:D\to\mathbb R$ converge **pointwise** to $f$ when
>
> $$
> \forall x\in D\ \forall\varepsilon>0\ \exists N=N(x,\varepsilon)\
> \forall n\ge N:\ |f_n(x)-f(x)|<\varepsilon.
> $$
>
> They converge **uniformly** to $f$ when
>
> $$
> \forall\varepsilon>0\ \exists N=N(\varepsilon)\
> \forall n\ge N\ \forall x\in D:\ |f_n(x)-f(x)|<\varepsilon.
> $$

In the pointwise statement, the chosen index $N$ may depend on $x$. Uniform convergence moves "for every $x$" **after** "there exists $N$": one threshold must work simultaneously everywhere.

For bounded differences, uniform convergence is equivalently

$$
\|f_n-f\|_\infty:=\sup_{x\in D}|f_n(x)-f(x)|\to0.
$$

The symbol $\|\cdot\|_\infty$ is the **supremum norm**, and the displayed finite supremum measures the worst error anywhere on the domain. A boundedness assumption for the difference is automatic once uniform convergence holds sufficiently far along the sequence.

### The key counterexample: powers of x

For $f_n(x):=x^n$ on $[0,1]$, we have $f_n(x)\to0$ at every $x<1$ but $f_n(1)=1$. Hence

$$
f(x):=\begin{cases}0,&0\le x<1,\\1,&x=1.\end{cases}
$$

Each $f_n$ is continuous; the pointwise limit $f$ is not continuous at $1$. Moreover $\sup_{x\in[0,1)}x^n=1$ for every $n$. Thus $\|f_n-f\|_\infty=1$: the convergence is not uniform.

The explanation is not that polynomials are badly behaved. It is that, near $1$, the threshold needed to make $x^n$ small grows without bound as $x\to1^-$.

## 2. Uniform Cauchy criterion

> [!theorem] Uniform Cauchy criterion for real functions
> A sequence $f_n:D\to\mathbb R$ converges uniformly to a real-valued function on $D$ if and only if
>
> $$
> \forall\varepsilon>0\ \exists N\ \forall m,n\ge N\ \forall x\in D:
> \quad |f_m(x)-f_n(x)|<\varepsilon.
> $$

**Proof, convergence implies Cauchy.** If $f_n\to f$ uniformly, choose $N$ so that $|f_n(x)-f(x)|<\varepsilon/2$ for all $n\ge N$ and every $x$. For $m,n\ge N$ the triangle inequality gives $|f_m(x)-f_n(x)|<\varepsilon$.

**Proof, Cauchy implies convergence.** Fix any $x\in D$. The uniform Cauchy condition makes $(f_n(x))$ a Cauchy sequence of real numbers. By completeness, it converges to some $f(x)\in\mathbb R$. This defines a function $f$ on all of $D$.

Given $\varepsilon>0$, use the uniform Cauchy condition with $\varepsilon/2$ and obtain $N$. For all $n\ge N$, all $m\ge N$, and all $x\in D$, we have $|f_n(x)-f_m(x)|<\varepsilon/2$. Fix $n\ge N$ and $x$, then let $m\to\infty$. We get $|f_n(x)-f(x)|\le\varepsilon/2<\varepsilon$. Crucially the original $N$ did **not depend on $x$**, so convergence is uniform. $\square$

This is the function-space version of the [real Cauchy criterion](./completeness-and-convergence#6-cauchy-sequences-convergence-without-knowing-the-answer). The completeness of the output space is essential; for rational-valued functions the pointwise limits might not be rational.

## 3. Uniform limits preserve continuity

> [!theorem] Uniform limit theorem
> If every $f_n:D\to\mathbb R$ is continuous at $c\in D$ and $f_n\to f$ uniformly on $D$, then $f$ is continuous at $c$.

**Proof.** Fix $\varepsilon>0$. Uniform convergence supplies an index $N$ such that

$$
|f_N(x)-f(x)|<\frac\varepsilon3
\quad\text{for every }x\in D.
$$

Continuity of the **single selected function** $f_N$ at $c$ supplies $\delta>0$ such that $|x-c|<\delta$ implies $|f_N(x)-f_N(c)|<\varepsilon/3$. For such $x$,

$$
\begin{aligned}
|f(x)-f(c)|
&\le |f(x)-f_N(x)|\\
&\quad+|f_N(x)-f_N(c)|+|f_N(c)-f(c)|\\
&<\varepsilon.
\end{aligned}
$$

Every term is controlled, and the same $N$ works at $x$ and $c$. $\square$

A similar proof shows a **uniform limit of uniformly continuous functions** is uniformly continuous: choose $f_N$ uniformly continuous to obtain one delta for all pairs $x,y$.

**Why pointwise is too weak.** The $x^n$ example shows exactly which of the three error terms loses its uniform bound near $1$.

## 4. The Weierstrass M-test

> [!theorem] M-test
> Let $u_n:D\to\mathbb R$ be functions and let $M_n\ge0$ be numbers such that $|u_n(x)|\le M_n$ for every $x\in D$ and every $n$. If $\sum_{n=1}^{\infty}M_n$ converges, then $\sum_{n=1}^{\infty}u_n$ converges **uniformly and absolutely** on $D$.

**Proof.** For $m>n$ and any $x\in D$, the triangle inequality gives

$$
\left|\sum_{k=n+1}^{m}u_k(x)\right|
\le\sum_{k=n+1}^{m}|u_k(x)|
\le\sum_{k=n+1}^{m}M_k.
$$

Since the numerical majorant series converges, its tails can be made smaller than any $\varepsilon>0$, independently of $x$ and $m>n$. Thus the partial sums of $\sum u_n$ are uniformly Cauchy. The criterion of Section 2 gives uniform convergence. Also $\sum|u_n(x)|\le\sum M_n<\infty$ for each $x$, giving absolute convergence. $\square$

**Worked example.** The series $\sum_{n=1}^{\infty}\sin(nx)/n^2$ converges uniformly on all of $\mathbb R$, because $|\sin(nx)/n^2|\le1/n^2$ and $\sum1/n^2$ converges. Each partial sum is continuous; the uniform limit theorem shows the resulting function is continuous everywhere.

A warning about the order of conclusions: the M-test establishes convergence and continuity of this particular limit, but does not by itself justify term-by-term differentiation.

## 5. Exchanging a uniform limit and a Riemann integral

> [!theorem] Uniform convergence preserves Riemann integrability
> Suppose every $f_n:[a,b]\to\mathbb R$ is **Riemann integrable** and $f_n\to f$ uniformly. Then $f$ is Riemann integrable and
>
> $$
> \lim_{n\to\infty}\int_a^b f_n(x)\,dx
> =\int_a^b f(x)\,dx.
> $$

**Proof of integrability.** Given $\varepsilon>0$, choose $n$ so that $\|f-f_n\|_\infty<\varepsilon/[4(b-a)]$ (for $a<b$). Since $f_n$ is integrable, choose a partition $P$ with

$$
U(f_n,P)-L(f_n,P)<\frac\varepsilon2.
$$

On each subinterval, the supremum of $f$ differs from that of $f_n$ by at most $\|f-f_n\|_\infty$; likewise for infima. Hence

$$
\begin{aligned}
U(f,P)-L(f,P)
&\le U(f_n,P)-L(f_n,P)\\
&\quad+2(b-a)\|f-f_n\|_\infty
<\varepsilon.
\end{aligned}
$$

The [Darboux epsilon criterion](./rigorous-integration#the-epsilon-criterion) proves that $f$ is integrable.

**Proof of convergence of integrals.** The integral estimate gives

$$
\left|\int_a^b f_n-\int_a^b f\right|
\le(b-a)\|f_n-f\|_\infty\to0.
$$

Both parts of the conclusion have now been established. $\square$

**Failure without uniform convergence.** The [triangular-spike functions](./rigorous-integration#7-why-pointwise-convergence-does-not-permit-moving-the-limit-inside) converge pointwise to zero while their integrals stay equal to one. The problem is not merely integrability of the limit, which is zero and integrable; it is the missing uniform error estimate.

## 6. Why exchanging derivatives needs a different theorem

Uniform convergence of differentiable functions **does not** ensure that their limit is differentiable.

**Counterexample.** Let $f_n(x):=\sqrt{x^2+1/n}$ on $[-1,1]$. Every $f_n$ is differentiable, and

$$
0\le f_n(x)-|x|
=\frac{1/n}{\sqrt{x^2+1/n}+|x|}
\le\frac1{\sqrt n}.
$$

Thus $f_n\to|x|$ uniformly. Yet the limit has a corner at $x=0$ and is not differentiable there.

> [!theorem] A sufficient theorem for differentiating a limit
> Let $f_n:[a,b]\to\mathbb R$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Assume:
>
> 1. $f_n'(x)$ converges **uniformly** on $(a,b)$ to a function $g(x)$;
> 2. for one fixed $c\in(a,b)$, the numerical sequence $f_n(c)$ converges.
>
> Then $f_n$ converges uniformly on $[a,b]$ to a continuous $f$, and $f$ is differentiable on $(a,b)$ with $f'=g$.

**Proof of uniform convergence.** Apply the MVT to $f_n-f_m$ between $c$ and any $x\in[a,b]$ (for $x=c$ use the trivial difference). It gives

$$
|f_n(x)-f_m(x)|
\le |f_n(c)-f_m(c)|
+(b-a)\sup_{t\in(a,b)}|f_n'(t)-f_m'(t)|.
$$

The first term tends to zero as $m,n\to\infty$ by the Cauchy criterion for the convergent sequence $f_n(c)$. The second tends to zero by uniform convergence of derivatives. The bound is independent of $x$, so $(f_n)$ is uniformly Cauchy and therefore converges uniformly to some $f$. The continuity theorem makes $f$ continuous.

**Proof of differentiability.** Fix any interior $x$. For every $h\ne0$ small enough that $x+h\in(a,b)$, use MVT on $f_m-f_n$ between $x$ and $x+h$ and let $m\to\infty$:

$$
\left|\frac{(f-f_n)(x+h)-(f-f_n)(x)}h\right|
\le\sup_{t\in(a,b)}|g(t)-f_n'(t)|.
$$

Given $\varepsilon>0$, choose $n$ so that the right side is less than $\varepsilon/3$ **and** $|f_n'(x)-g(x)|<\varepsilon/3$. Differentiability of this fixed $f_n$ at $x$ supplies $\delta>0$ such that the difference quotient of $f_n$ is within $\varepsilon/3$ of $f_n'(x)$ whenever $0<|h|<\delta$. Splitting the difference quotient of $f$ into the quotient for $f_n$ and their difference makes it within $\varepsilon$ of $g(x)$. Hence $f'(x)=g(x)$. $\square$

**Series version.** If $\sum u_n(c)$ converges at one point and $\sum u_n'$ converges uniformly on an interval, the same theorem applied to the partial sums justifies differentiating the sum term by term. Merely knowing $\sum u_n$ converges uniformly is not enough.

## 7. A compactness application: Arzelà-Ascoli on a closed interval

So far the theorems began with known convergence. Can we guarantee that *some* subsequence of functions converges uniformly?

A family $\mathcal F$ of functions on $[a,b]$ is **equicontinuous** when, for every $\varepsilon>0$, there is one $\delta>0$ that works for **every** $f\in\mathcal F$ and every pair $x,y\in[a,b]$ with $|x-y|<\delta$:

$$
|f(x)-f(y)|<\varepsilon.
$$

This is stronger than saying every function is individually uniformly continuous. **Uniformly bounded** means there is one $M$ with $|f(x)|\le M$ for all $f\in\mathcal F$ and all $x$.

> [!theorem] Arzelà-Ascoli on $[a,b]$ (sequence form)
> Every sequence of real-valued functions on $[a,b]$ belonging to a uniformly bounded, equicontinuous family has a **uniformly convergent subsequence**. Its limit is continuous.

**Proof.** Choose a countable dense set $D=\{q_1,q_2,\ldots\}$ in $[a,b]$ (for example rational points in the interval together with endpoints as needed). The bounded numerical sequence $(f_n(q_1))$ has a convergent subsequence by Bolzano-Weierstrass. From that subsequence extract a further subsequence converging at $q_2$; continue through all $q_j$. Take the **diagonal subsequence** $g_k$ (its $k$-th function is the $k$-th selected member at extraction stage $k$). For every fixed $q_j$, the values $g_k(q_j)$ converge as $k\to\infty$.

We prove this subsequence is uniformly Cauchy, not merely pointwise Cauchy on $D$. Fix $\varepsilon>0$. Equicontinuity supplies $\delta>0$ such that

$$
|g_k(x)-g_k(y)|<\varepsilon/3
\quad\text{whenever }|x-y|<\delta,
$$

simultaneously for every $k$. Compactness of $[a,b]$ allows finitely many points $q_{j_1},\ldots,q_{j_r}\in D$ so every $x\in[a,b]$ is within $\delta$ of one of them (a finite $\delta$-net). The numerical sequences $g_k(q_{j_i})$ converge at each of these finitely many points. Therefore one $N$ makes $|g_m(q_{j_i})-g_n(q_{j_i})|<\varepsilon/3$ for all $m,n\ge N$ and all $i$.

For arbitrary $x$, choose a nearby $q_{j_i}$ and use the triangle inequality:

$$
|g_m(x)-g_n(x)|
\le |g_m(x)-g_m(q_{j_i})|
+|g_m(q_{j_i})-g_n(q_{j_i})|
+|g_n(q_{j_i})-g_n(x)|<\varepsilon.
$$

Thus $(g_k)$ is uniformly Cauchy, so it converges uniformly to a real function. Every $g_k$ is continuous because equicontinuity implies continuity, and the uniform limit theorem makes the limit continuous. $\square$

**Why both hypotheses matter.** The sequence $f_n(x):=x^n$ on $[0,1]$ is uniformly bounded but not equicontinuous; no subsequence can converge uniformly, because its pointwise limit is discontinuous. The constant functions $f_n(x):=n$ are equicontinuous but not uniformly bounded; no subsequence can converge to a finite function.

## 8. Uniform polynomial approximation: a constructive theorem

Uniform convergence is not only a way of preserving properties. It also tells us whether a simple class of functions can **approximate** a more complicated one.

> [!theorem] Weierstrass approximation theorem on a closed interval
> Every continuous real-valued function $f$ on $[0,1]$ can be approximated arbitrarily closely in the supremum norm by polynomials. More precisely, for every $\varepsilon>0$, a polynomial $p$ exists with
>
> $
> \sup_{x\in[0,1]}|f(x)-p(x)|<\varepsilon.
> $

**Proof by Bernstein polynomials.** For $n\ge1$ define

$
B_nf(x):=\sum_{k=0}^{n}f(k/n)\binom{n}{k}x^k(1-x)^{n-k}.
$

For fixed $n$, this is a polynomial in $x$. The weights

$
w_{n,k}(x):=\binom{n}{k}x^k(1-x)^{n-k}
$

are nonnegative for $x\in[0,1]$, and the binomial theorem shows $\sum_k w_{n,k}(x)=1$. Thus $B_nf(x)$ is a weighted average of the sampled values $f(k/n)$.

We need to show that its weights concentrate near $k/n=x$. Two identities, obtained by differentiating the binomial formula (or counting binomial terms), are

$
\sum_k k\,w_{n,k}(x)=nx,\qquad
\sum_k k(k-1)\,w_{n,k}(x)=n(n-1)x^2.
$

Since $k^2=k(k-1)+k$, these imply

$
\sum_{k=0}^{n}\left(\frac{k}{n}-x\right)^2w_{n,k}(x)
=\frac{x(1-x)}{n}\le\frac1{4n}.
$

Now fix a target $\varepsilon>0$. Continuity on $[0,1]$ gives uniform continuity, so choose $\delta>0$ such that $|f(u)-f(v)|<\varepsilon/2$ whenever $|u-v|<\delta$. EVT supplies $M\ge1$ with $|f(x)|\le M$ everywhere.

Split the weighted error into **near** indices $|k/n-x|<\delta$ and **far** indices $|k/n-x|\ge\delta$. Near indices contribute at most $\varepsilon/2$ because the weights sum to at most one. For far indices, the weight sum is bounded by

$
\sum_{\lvert k/n-x\rvert\ge\delta}w_{n,k}(x)
\le\frac1{\delta^2}\sum_k(k/n-x)^2w_{n,k}(x)
\le\frac1{4n\delta^2}.
$

Since $|f(k/n)-f(x)|\le2M$, the far contribution is at most $M/(2n\delta^2)$. Consequently, **for every** $x\in[0,1]$,

$
|B_nf(x)-f(x)|\le\frac\varepsilon2+\frac{M}{2n\delta^2}.
$

Choose $n>M/(\varepsilon\delta^2)$. The right side is then less than $\varepsilon$, uniformly in $x$. This proves the theorem. $\square$

**Worked instance.** For $f(x)=x^2$, the weighted-moment calculation gives

$
B_n f(x)=x^2+\frac{x(1-x)}n.
$

Its maximum error is $\max_{[0,1]}x(1-x)/n=1/(4n)$; the approximation converges uniformly with an **explicit global error bound**, not merely pointwise accuracy.

This is a constructive proof of the interval version of the approximation theorem. The more general **Stone-Weierstrass theorem**, dealing with separating subalgebras of continuous functions on compact Hausdorff spaces, is a deeper extension; it is **not proved here**.

## 9. A decision table for limit operations

| What you know | What you may conclude | Why |
| --- | --- | --- |
| Pointwise convergence of continuous $f_n$ | No guarantee that the limit is continuous | $x^n$ on $[0,1]$ |
| Uniform convergence of continuous $f_n$ | Continuous limit | Uniform limit theorem |
| Uniform convergence of Riemann integrable $f_n$ | Integrable limit and exchanged integral | Darboux bound and sup-norm estimate |
| Uniform convergence of differentiable $f_n$ | **Not** necessarily a differentiable limit | $\sqrt{x^2+1/n}\to|x|$ |
| Uniform convergence of $f_n'$ plus convergence of $f_n(c)$ | Uniform convergence of $f_n$ and $f'= \lim f_n'$ | MVT plus difference quotient estimate |
| Uniform boundedness and equicontinuity on $[a,b]$ | A uniformly convergent **subsequence** | Arzelà-Ascoli |

The recurring question is never merely "do these functions converge?" It is **what converges, in which sense, and which hypothesis licenses the next operation?**

This completes the core proof-focused path from [Completeness](./completeness-and-convergence) through [Continuity](./continuity-and-compactness), [Differentiation](./rigorous-differentiation) and [Integration](./rigorous-integration). The [Real Analysis](./real-analysis) overview ties those theorems to metric spaces, and [Functional Analysis](./functional-analysis) studies analogous questions in infinite-dimensional function spaces.

---

## Chapter Reference

A quick reference to the chapter's definitions and results, with links to their original treatment. This table does not replace the full explanations, hypotheses, diagrams, or proofs.

### Definitions

| Definition | Statement / meaning |
| :--- | :--- |
| **[Pointwise versus uniform convergence](#1-a-quantifier-changes-the-mathematics)** | Functions $f_n:D\to\mathbb R$ converge pointwise to $f$ when They converge uniformly to $f$ when |

### Key Concepts

| Concept | Statement / meaning |
| :--- | :--- |
| **[1. A quantifier changes the mathematics](#1-a-quantifier-changes-the-mathematics)** | In the pointwise statement, the chosen index $N$ may depend on $x$. Uniform convergence moves "for every $x$" after "there exists $N$": one threshold must work simultaneously everywhere. |
| **[The key counterexample: powers of x](#the-key-counterexample-powers-of-x)** | For $f_n(x):=x^n$ on $[0,1]$, we have $f_n(x)\to0$ at every $x<1$ but $f_n(1)=1$. Hence Each $f_n$ is continuous; the pointwise limit $f$ is not continuous at $1$. Moreover $\sup_{x\in[0,1)}x^n=1$ for every $n$. |
| **[2. Uniform Cauchy criterion](#2-uniform-cauchy-criterion)** | Proof, convergence implies Cauchy. If $f_n\to f$ uniformly, choose $N$ so that $\vert f_n(x)-f(x)\vert <\varepsilon/2$ for all $n\ge N$ and every $x$. For $m,n\ge N$ the triangle inequality gives $\vert f_m(x)-f_n(x)\vert <\varepsilon$. |
| **[3. Uniform limits preserve continuity](#3-uniform-limits-preserve-continuity)** | Proof. Fix $\varepsilon>0$. Uniform convergence supplies an index $N$ such that |
| **[4. The Weierstrass M-test](#4-the-weierstrass-m-test)** | Proof. For $m>n$ and any $x\in D$, the triangle inequality gives $\left\vert \sum_{k=n+1}^{m}u_k(x)\right\vert \le\sum_{k=n+1}^{m}\vert u_k(x)\vert \le\sum_{k=n+1}^{m}M_k.$ |
| **[5. Exchanging a uniform limit and a Riemann integral](#5-exchanging-a-uniform-limit-and-a-riemann-integral)** | Proof of integrability. Given $\varepsilon>0$, choose $n$ so that $\\vert f-f_n\\vert _\infty<\varepsilon/[4(b-a)]$ (for $a<b$). Since $f_n$ is integrable, choose a partition $P$ with |
| **[6. Why exchanging derivatives needs a different theorem](#6-why-exchanging-derivatives-needs-a-different-theorem)** | Uniform convergence of differentiable functions does not ensure that their limit is differentiable. |
| **[7. A compactness application: Arzelà-Ascoli on a closed interval](#7-a-compactness-application-arzel-ascoli-on-a-closed-interval)** | So far the theorems began with known convergence. Can we guarantee that *some* subsequence of functions converges uniformly? |
| **[8. Uniform polynomial approximation: a constructive theorem](#8-uniform-polynomial-approximation-a-constructive-theorem)** | Uniform convergence is not only a way of preserving properties. It also tells us whether a simple class of functions can approximate a more complicated one. |
| **[9. A decision table for limit operations](#9-a-decision-table-for-limit-operations)** | The recurring question is never merely "do these functions converge?" It is what converges, in which sense, and which hypothesis licenses the next operation? |

### Theorems and Key Results

Some results have full proofs here; others are introduced and discussed. Check the linked section for each result's assumptions.

| Theorem / result | Statement / meaning |
| :--- | :--- |
| **[Uniform Cauchy criterion for real functions](#2-uniform-cauchy-criterion)** | A sequence $f_n:D\to\mathbb R$ converges uniformly to a real-valued function on $D$ if and only if |
| **[Uniform limit theorem](#3-uniform-limits-preserve-continuity)** | If every $f_n:D\to\mathbb R$ is continuous at $c\in D$ and $f_n\to f$ uniformly on $D$, then $f$ is continuous at $c$. |
| **[M-test](#4-the-weierstrass-m-test)** | Let $u_n:D\to\mathbb R$ be functions and let $M_n\ge0$ be numbers such that $\vert u_n(x)\vert \le M_n$ for every $x\in D$ and every $n$. If $\sum_{n=1}^{\infty}M_n$ converges, then $\sum_{n=1}^{\infty}u_n$ converges uniformly and absolutely on $D$. |
| **[Uniform convergence preserves Riemann integrability](#5-exchanging-a-uniform-limit-and-a-riemann-integral)** | Suppose every $f_n:[a,b]\to\mathbb R$ is Riemann integrable and $f_n\to f$ uniformly. Then $f$ is Riemann integrable and |
| **[A sufficient theorem for differentiating a limit](#6-why-exchanging-derivatives-needs-a-different-theorem)** | Let $f_n:[a,b]\to\mathbb R$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Assume: 1. $f_n'(x)$ converges uniformly on $(a,b)$ to a function $g(x)$; 2. for one fixed $c\in(a,b)$, the numerical sequence $f_n(c)$ converges. |
| **[Arzelà-Ascoli on $(a,b)$ (sequence form)](#7-a-compactness-application-arzel-ascoli-on-a-closed-interval)** | Every sequence of real-valued functions on $[a,b]$ belonging to a uniformly bounded, equicontinuous family has a uniformly convergent subsequence. Its limit is continuous. |
| **[Weierstrass approximation theorem on a closed interval](#8-uniform-polynomial-approximation-a-constructive-theorem)** | See the linked section for the formal statement and hypotheses. |
