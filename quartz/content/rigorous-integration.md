---
title: "Rigorous Integration: Darboux Sums and the Fundamental Theorem"
prerequisites: ["continuity-and-compactness", "rigorous-differentiation"]
enables: ["sequences-of-functions", "measure-theory"]
---

> [!abstract] Where integration gets its justification
> **Builds on:** [Continuity and Compactness](./continuity-and-compactness) for uniform continuity and [Rigorous Differentiation](./rigorous-differentiation) for the Mean Value Theorem. [Calculus](./calculus#integrals) introduces computational techniques.
> **Leads to:** [Sequences of Functions](./sequences-of-functions) for exchanging limits with integrals, then [Measure Theory](./measure-theory) for integration beyond Riemann's theory.

The symbol $\int_a^b f(x)\,dx$ is not automatically meaningful for every function. Before we compute an integral, we need to show that increasingly precise finite measurements agree. We will construct the Riemann integral from upper and lower bounds, prove which familiar functions are integrable, and derive both parts of the Fundamental Theorem of Calculus.

## 1. Build the integral from finite partitions

Assume $a<b$ and $f:[a,b]\to\mathbb R$ is **bounded**. A partition is a list

$$
P:\quad a=x_0<x_1<\cdots<x_m=b.
$$

Write $\Delta x_i:=x_i-x_{i-1}$, and define $m_i:=\inf\{f(x):x\in[x_{i-1},x_i]\}$ and $M_i:=\sup\{f(x):x\in[x_{i-1},x_i]\}$. Boundedness and completeness ensure these are finite real numbers. The **Darboux sums** are

$$
L(f,P):=\sum_{i=1}^{m}m_i\Delta x_i,
\qquad
U(f,P):=\sum_{i=1}^{m}M_i\Delta x_i.
$$

Every possible tagged Riemann sum $\sum_i f(\xi_i)\Delta x_i$, with $\xi_i\in[x_{i-1},x_i]$, lies between $L(f,P)$ and $U(f,P)$.

### Why refining a partition improves the bounds

> [!lemma] Refinement inequality
> If $Q$ is a refinement of $P$ (it includes all of $P$'s division points), then
>
> $$
> L(f,P)\le L(f,Q)\le U(f,Q)\le U(f,P).
> $$

**Proof.** Consider the insertion of one point $z$ into $[u,v]$. Each new subinterval is contained in $[u,v]$, so its infimum is at least the original infimum and its supremum is at most the original supremum. Multiplying by the lengths and adding gives the two outward inequalities. Insert additional division points one at a time. The middle inequality follows term by term from infimum $\le$ supremum. $\square$

**Common refinements matter.** Two arbitrary partitions $P,Q$ need not refine one another, but their union $R:=P\cup Q$ refines both. Therefore

$$
L(f,P)\le L(f,R)\le U(f,R)\le U(f,Q).
$$

In particular **every lower sum is at most every upper sum**, even when the partitions differ.

> [!definition] Darboux integrability
> Let
>
> $$
> I_*:=\sup_P L(f,P),\qquad I^*:=\inf_P U(f,P).
> $$
>
> A bounded function is **Riemann (Darboux) integrable** on $[a,b]$ if $I_*=I^*$. Their common value is $\int_a^b f(x)\,dx$.

Here the suprema and infima run over **all finite partitions** of $[a,b]$. The common-refinement inequality guarantees $I_*\le I^*$.

### The epsilon criterion

> [!theorem] Integrability test
> A bounded function $f$ is Riemann integrable on $[a,b]$ if and only if, for every $\varepsilon>0$, there exists a partition $P$ with
>
> $$
> U(f,P)-L(f,P)<\varepsilon.
> $$

**Proof.** If such partitions exist, then $0\le I^*-I_*\le U(f,P)-L(f,P)<\varepsilon$ for every $\varepsilon>0$, forcing $I^*=I_*$.

Conversely, if $I^*=I_*=:I$, choose a partition $P_L$ with $L(f,P_L)>I-\varepsilon/2$ and a partition $P_U$ with $U(f,P_U)<I+\varepsilon/2$. Their common refinement $P:=P_L\cup P_U$ satisfies

$$
U(f,P)-L(f,P)
\le U(f,P_U)-L(f,P_L)<\varepsilon.
$$

This is the defining test, with every quantifier justified. $\square$

**Worked example from scratch.** For $f(x)=x$ on $[0,1]$, divide into $n$ equal intervals. Since $x$ increases, the lower sum uses left endpoints and the upper uses right endpoints:

$$
L_n=\frac1{n^2}\sum_{i=1}^{n}(i-1)=\frac{n-1}{2n},
\qquad
U_n=\frac1{n^2}\sum_{i=1}^{n}i=\frac{n+1}{2n}.
$$

Their gap is $U_n-L_n=1/n$. Given $\varepsilon>0$, choose $n>1/\varepsilon$. Integrability follows, and because $\frac{n-1}{2n}\le\int_0^1x\,dx\le\frac{n+1}{2n}$, squeezing gives $\int_0^1x\,dx=1/2$. We have computed the integral **from its definition**, without assuming an antiderivative.

## 2. Why continuous functions are integrable

> [!theorem] Continuous implies Riemann integrable
> Every continuous $f:[a,b]\to\mathbb R$ is Riemann integrable.

**Proof.** By EVT, $f$ is bounded. By [Heine-Cantor](./continuity-and-compactness#5-pointwise-continuity-versus-one-delta-for-the-whole-set), $f$ is uniformly continuous on the closed interval.

Given $\varepsilon>0$, choose $\delta>0$ such that any two points less than $\delta$ apart have function values differing by less than $\varepsilon/(2(b-a))$. Take a partition whose mesh $\max_i\Delta x_i$ is less than $\delta$. On each subinterval, the difference between supremum and infimum is at most $\varepsilon/(2(b-a))$. Therefore

$$
U(f,P)-L(f,P)
=\sum_i(M_i-m_i)\Delta x_i
\le\frac{\varepsilon}{2(b-a)}\sum_i\Delta x_i
=\frac{\varepsilon}{2}<\varepsilon.
$$

The epsilon criterion proves integrability. $\square$

The closed, bounded interval is doing work here. On a general unbounded domain, a continuous function need not be bounded or Riemann integrable in this finite-interval sense.

## 3. Why monotone functions are integrable even with jumps

> [!theorem] Monotone implies Riemann integrable
> Every bounded monotone real function on a closed finite interval is Riemann integrable, even when it is discontinuous.

**Proof for a nondecreasing function.** Partition $[a,b]$ into $n$ equal pieces of width $h:=(b-a)/n$. Monotonicity gives $m_i=f(x_{i-1})$ and $M_i=f(x_i)$. Thus

$$
\begin{aligned}
U(f,P)-L(f,P)
&=h\sum_{i=1}^{n}(f(x_i)-f(x_{i-1}))\\
&=h(f(b)-f(a)).
\end{aligned}
$$

The differences telescope. The right side tends to zero because $f(b)-f(a)$ is fixed and $h\to0$. The epsilon criterion applies. For nonincreasing $f$, apply the result to $-f$. $\square$

**Example.** Define $f(x)=0$ for $x<1/2$ and $f(x)=1$ for $x\ge1/2$ on $[0,1]$. It has a jump, yet is nondecreasing, so it is Riemann integrable. The integral is $1/2$.

### A bounded function that is not Riemann integrable

The **Dirichlet function** $d(x):=1$ for rational $x$ and $d(x):=0$ for irrational $x$ on $[0,1]$ has both values on every nondegenerate subinterval, by density of rationals and irrationals. Every partition satisfies

$$
L(d,P)=0,\qquad U(d,P)=1.
$$

The gap stays $1$. No partition can satisfy the epsilon criterion for $\varepsilon=1/2$. It is not Riemann integrable.

The later [Lebesgue integral](./measure-theory) can integrate this function because its set of rational points has measure zero; the distinction is not an algebraic trick with antiderivatives.

## 4. Basic integral estimates and additivity

> [!lemma] Additivity and bounds
> For Riemann integrable $f,g$ on $[a,b]$, scalar combinations are integrable and
>
> $$
> \int_a^b(\alpha f+\beta g)
> =\alpha\int_a^b f+\beta\int_a^b g.
> $$
>
> If $f\le g$ pointwise, then $\int f\le\int g$. If $|f(x)|\le M$, then $|\int_a^b f|\le M(b-a)$. If $c\in[a,b]$, then $\int_a^b f=\int_a^c f+\int_c^b f$.

**Proof of the main estimates.** Each tagged sum is linear, and Darboux integrability means all tagged sums on sufficiently fine partitions converge to the common integral; the linearity formula follows by taking those limits. More explicitly, for sums with the same partition and tags, $\sum_i(\alpha f(\xi_i)+\beta g(\xi_i))\Delta x_i$ equals the corresponding combination of sums. Uniformly small gaps for $f$ and $g$ control the gap for their linear combination: $U(\alpha f+\beta g,P)-L(\alpha f+\beta g,P)\le|\alpha|(U(f,P)-L(f,P))+|\beta|(U(g,P)-L(g,P))$. Order and the $M$-bound follow by comparing each tagged sum, then taking limits.

For **interval additivity**, refine a partition to include $c$. All its lower and upper contributions split into the portions on $[a,c]$ and $[c,b]$. Integrability restricts to subintervals (refine a partition of the whole interval to include their endpoints); using partitions on both subintervals and combining them then pins the whole integral to the sum. The cases $c=a,b$ are immediate with the usual convention $\int_a^a f=0$. $\square$

A useful consequence is, for any integrable $f$,

$$
\left|\int_u^v f(t)\,dt\right|
\le \sup_{t\in[u,v]}|f(t)|\,|v-u|
\quad (u\le v).
$$

The supremum is finite because every Riemann integrable function is bounded.

## 5. Fundamental Theorem of Calculus, Part I

> [!theorem] FTC I: integrating then differentiating
> Let $f$ be Riemann integrable on $[a,b]$, and set
>
> $$
> F(x):=\int_a^x f(t)\,dt.
> $$
>
> Then $F$ is continuous on $[a,b]$. At every interior point $c$ where $f$ is continuous, $F$ is differentiable and $F'(c)=f(c)$.

**Proof of continuity of $F$.** Boundedness gives $|f(t)|\le M$. For any $x,y\in[a,b]$, integral additivity and the estimate above imply

$$
|F(y)-F(x)|=\left|\int_x^y f(t)\,dt\right|\le M|y-x|,
$$

with reversed endpoint orientation handled by $\int_y^x=-\int_x^y$. Thus $F$ is Lipschitz, hence continuous.

**Proof of the derivative claim.** For $h\ne0$ with $c+h\in[a,b]$,

$$
\frac{F(c+h)-F(c)}h-f(c)
=\frac1h\int_c^{c+h}(f(t)-f(c))\,dt.
$$

Using the integral bound (with the orientation correctly handled) gives

$$
\left|\frac{F(c+h)-F(c)}h-f(c)\right|
\le \sup_{t\ \text{between}\ c\ \text{and}\ c+h}|f(t)-f(c)|.
$$

Continuity of $f$ at $c$ makes the right side tend to zero as $h\to0$. Therefore $F'(c)=f(c)$. $\square$

**Why pointwise continuity matters.** If $f$ jumps at $c$, the accumulation function $F$ remains continuous, but may have different left and right derivatives there. In the step-function example of Section 3, $F$ has a corner at $c=1/2$.

## 6. Fundamental Theorem of Calculus, Part II

> [!theorem] FTC II: evaluating an integral from an antiderivative
> Suppose $f$ is Riemann integrable on $[a,b]$, and $G$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with $G'(x)=f(x)$ for every $x\in(a,b)$. Then
>
> $$
> \int_a^b f(x)\,dx=G(b)-G(a).
> $$

**Proof.** Choose an arbitrary partition $P:a=x_0<\cdots<x_m=b$. Apply the Mean Value Theorem to $G$ on each subinterval. It yields a point $\xi_i\in(x_{i-1},x_i)$ with

$$
G(x_i)-G(x_{i-1})=G'(\xi_i)(x_i-x_{i-1})
=f(\xi_i)\Delta x_i.
$$

Sum over $i$. The left side telescopes, giving

$$
G(b)-G(a)=\sum_{i=1}^{m}f(\xi_i)\Delta x_i.
$$

This is a tagged Riemann sum, so it lies between $L(f,P)$ and $U(f,P)$. By integrability, for every $\varepsilon>0$ we can choose a partition with $U(f,P)-L(f,P)<\varepsilon$. Both $G(b)-G(a)$ and $\int_a^b f$ lie in that same interval, so their difference in absolute value is less than $\varepsilon$. As $\varepsilon$ is arbitrary, they are equal. $\square$

**Worked example.** For $f(x)=2x$ on $[1,3]$, $G(x)=x^2$ meets the hypotheses. Therefore $\int_1^3 2x\,dx=G(3)-G(1)=9-1=8$. Now the familiar calculation has a proof beneath it.

## 7. Why pointwise convergence does not permit moving the limit inside

Consider the continuous triangular spikes, for integers $n\ge2$,

$$
f_n(x):=
\begin{cases}
n^2x,&0\le x\le1/n,\\
n(2-nx),&1/n<x\le2/n,\\
0,&2/n<x\le1.
\end{cases}
$$

Each spike has base $2/n$ and height $n$, hence area $1$. For each fixed $x>0$, the support eventually lies to the left of $x$, and $f_n(x)=0$; also $f_n(0)=0$. Therefore $f_n(x)\to0$ **pointwise everywhere** on $[0,1]$. But

$$
\lim_{n\to\infty}\int_0^1 f_n(x)\,dx=1
\quad\ne\quad
\int_0^1\lim_{n\to\infty}f_n(x)\,dx=0.
$$

There is no contradiction with FTC: every $f_n$ can be integrated correctly. The problem is **interchanging a limit with an integral without a convergence theorem**.

The next chapter proves why **uniform convergence of Riemann integrable functions** is enough, and why differentiating a uniform limit is a separate question.
