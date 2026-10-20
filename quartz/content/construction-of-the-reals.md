---
title: "Construction of the Reals"
prerequisites: ["construction-of-the-rationals"]
enables: ["construction-of-the-complex-numbers", "real-analysis"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Construction of the Rationals](./construction-of-the-rationals), the ordered-field laws and the rational Cauchy criterion
> **Leads to:** [Construction of the Complex Numbers](./construction-of-the-complex-numbers) · [Real Analysis](./real-analysis) · [Number Systems](./number-systems)

The rationals form an ordered field: addition, subtraction, multiplication, and nonzero division work correctly. But being able to calculate every **finite fraction** does not guarantee that a sequence of improving approximations converges to a number in the same system. The rational bisections around a hypothetical square root of two are Cauchy, yet no rational number can be their limit.

Our next goal is to construct a field in which **every Cauchy sequence converges**. We will use *only rationals* to build it. Then we will prove that this new field has the order, completeness, and familiar real-number properties needed for analysis.

The essential warning is that **completeness cannot be presumed halfway through its own construction**. Every appearance of a limit before the real numbers exist must be a definition involving rational tolerances, not a hidden invocation of real analysis.

## The input: rational Cauchy sequences

A **sequence of rationals** is a function $x:\mathbb N\to\mathbb Q$. We write $x_n$ for its value at index $n$, read "x sub n." Starting the index at zero or one does not affect the construction.

A rational sequence $(x_n)$ is **Cauchy** if

$$
\boxed{
\forall\varepsilon\in\mathbb Q_{>0}\ \exists N\in\mathbb N\
\forall m,n\geq N:\ |x_m-x_n|<\varepsilon .
}\tag{R1}
$$

Read $\forall$ as "for every," $\exists$ as "there exists," $\varepsilon$ as "epsilon," and $|u|$ as "the absolute value of u." All inequalities in R1 are **rational** inequalities already justified in the preceding chapter.

Intuitively, late terms become arbitrarily close to each other, whether or not their putative limit is rational. We do not require any limit to exist yet.

**Every rational Cauchy sequence is bounded.** Choose tolerance $\varepsilon=1$ and a corresponding index $N$. All later terms lie between $x_N-1$ and $x_N+1$. The finitely many earlier terms also have a rational upper bound on their absolute values. Taking the largest of those finitely many bounds and $|x_N|+1$ yields $M\in\mathbb Q$ with $|x_n|\leq M$ for all $n$.

This boundedness fact will justify multiplication of Cauchy sequences.

## When do two sequences represent the same number?

Different approximation procedures ought to give the same real number when their differences become arbitrarily small. For rational Cauchy sequences $x=(x_n)$ and $y=(y_n)$ define

$$
\boxed{x\sim y\quad\Longleftrightarrow\quad
\forall\varepsilon\in\mathbb Q_{>0}\ \exists N\
\forall n\geq N:\ |x_n-y_n|<\varepsilon.}\tag{R2}
$$

Read $x\sim y$ as "x is equivalent to y." The condition says "$x_n-y_n$ tends to zero" **in the rational epsilon sense**; it does not claim the sequence has a pre-existing real limit.

This is an equivalence relation:

- **Reflexive:** $|x_n-x_n|=0<\varepsilon$ for any positive $\varepsilon$.
- **Symmetric:** $|x_n-y_n|=|y_n-x_n|$.
- **Transitive:** if $x\sim y$ and $y\sim z$, apply the two conditions with tolerance $\varepsilon/2$. For large $n$, the triangle inequality in $\mathbb Q$ gives

$$
|x_n-z_n|
\leq|x_n-y_n|+|y_n-z_n|
<\varepsilon/2+\varepsilon/2=\varepsilon.
$$

Therefore $x\sim z$.

Let $C$ be the set of all rational Cauchy sequences. Define the new number system

$$
\boxed{\mathbb R:=C/{\sim}.}\tag{R3}
$$

A real number $X$ is an **equivalence class** $[x]$ of rational Cauchy sequences. We distinguish the class $X=[x]$ from its particular rational representative sequence $x=(x_n)$.

**Worked example: distinct sequences, one real.** Consider the rational sequences

$$
x_n=1,\qquad y_n=1+\frac1{n+1},\qquad
z_n=1-\frac1{n+1}.
$$

They are Cauchy. Moreover $|x_n-y_n|=1/(n+1)$ and $|x_n-z_n|=1/(n+1)$, which eventually fall below every positive rational tolerance. Consequently $[x]=[y]=[z]$. The construction does not create three different real numbers for three different ways of approaching one.

## Defining addition, negation, and multiplication

For two classes $X=[x]$ and $Y=[y]$, propose termwise operations:

$$
\boxed{
X+Y:=[(x_n+y_n)],\qquad
XY:=[(x_ny_n)],\qquad
-X:=[(-x_n)].
}\tag{R4}
$$

Two distinct obligations must be proved:

1. **Closure:** the new sequences must themselves be Cauchy.
2. **Well-definedness:** replacing $x$ or $y$ by an equivalent sequence must not change the resulting class.

### Addition closure and well-definedness

For any $m,n$,

$$
|(x_m+y_m)-(x_n+y_n)|
\leq|x_m-x_n|+|y_m-y_n|.
$$

If $x$ and $y$ are Cauchy, make each term on the right smaller than $\varepsilon/2$. Then the sum sequence is Cauchy. If $x\sim x'$ and $y\sim y'$, the same estimate applied at each index shows

$$
|(x_n+y_n)-(x'_n+y'_n)|<\varepsilon
$$

eventually, so the class of the sum does not depend on representatives.

Negation preserves the Cauchy property because $|-x_m-(-x_n)|=|x_m-x_n|$. It preserves equivalence by the identical absolute-value identity.

### Multiplication closure and well-definedness

Cauchy sequences are bounded. Choose rational bounds $|x_n|\leq M$ and $|y_n|\leq K$ for all indices. Then

$$
\begin{aligned}
|x_my_m-x_ny_n|
&=|x_m(y_m-y_n)+y_n(x_m-x_n)|\\
&\leq M|y_m-y_n|+K|x_m-x_n|.
\end{aligned}
$$

For a given $\varepsilon>0$, choose $m,n$ late enough that each difference is smaller than $\varepsilon/[2(M+K+1)]$. The right-hand side is then smaller than $\varepsilon$, proving the product sequence is Cauchy.

For well-definedness, let $x\sim x'$ and $y\sim y'$, and bound $|x_n|\leq M$, $|y'_n|\leq K$. Then

$$
|x_ny_n-x'_ny'_n|
\leq |x_n|\,|y_n-y'_n|+|y'_n|\,|x_n-x'_n|.
$$

Both differences tend to zero in the rational epsilon sense and the multipliers are bounded. Hence the whole expression tends to zero. Therefore multiplication is well-defined.

The boundedness requirement is substantive: the product of an arbitrary sequence approaching zero with an **unbounded** sequence need not approach zero. The Cauchy condition prevents that problem here.

## The field laws that are inherited

Define the real zero and one as classes of constant rational sequences:

$$
0_{\mathbb R}=[(0,0,0,\ldots)],\qquad
1_{\mathbb R}=[(1,1,1,\ldots)].
$$

Every term of a representative calculation obeys rational addition and multiplication laws. Since the class operations are well-defined, those laws pass to classes.

For example, if $X=[x]$, $Y=[y]$, and $Z=[z]$, then

$$
\begin{aligned}
(X+Y)+Z
 &= [((x_n+y_n)+z_n)]\\
 &= [(x_n+(y_n+z_n))]\\
 &= X+(Y+Z).
\end{aligned}
$$

The middle equality holds **at every rational index** by rational associativity. The same argument gives addition commutativity, multiplication associativity and commutativity, identities, and distributivity:

$$
[(x_n(y_n+z_n))]=[(x_ny_n+x_nz_n)].
$$

The additive inverse $-X=[(-x_n)]$ satisfies $X+(-X)=0$ term by term.

But a **field** also requires reciprocals for every nonzero element, and that is not automatic from taking termwise operations: a representative can occasionally equal zero even when its class does not. We must solve that separately.

## The reciprocal theorem: nonzero classes stay away from zero

First prove a key fact.

**Lemma.** If a rational Cauchy sequence $x$ does not represent the real zero, then there are rational $\delta>0$ and an index $N$ such that

$$
|x_n|\geq\delta\qquad\text{for all }n\geq N.
$$

**Proof.** The negation of $x\sim0$ says that for some rational $\varepsilon>0$, arbitrarily late terms satisfy $|x_n|\geq\varepsilon$. By the Cauchy property choose $N$ so that $|x_m-x_n|<\varepsilon/2$ for all $m,n\geq N$. Choose one $m\geq N$ with $|x_m|\geq\varepsilon$. Then, for every $n\geq N$,

$$
|x_n|\geq|x_m|-|x_m-x_n|
>\varepsilon/2.
$$

Take $\delta=\varepsilon/2$. This proves the claim.

For a nonzero $X=[x]$, choose such an $N$ and define a new rational sequence $u$:

$$
u_n=\begin{cases}
1,&n<N,\\
1/x_n,&n\geq N.
\end{cases}
$$

The finite prefix is harmless; later terms are defined because $|x_n|\geq\delta>0$. The reciprocal sequence is Cauchy since, for $m,n\geq N$,

$$
\left|\frac1{x_m}-\frac1{x_n}\right|
=\frac{|x_m-x_n|}{|x_mx_n|}
\leq\frac{|x_m-x_n|}{\delta^2}.
$$

It also depends only on $X$, not on the chosen representative: equivalent nonzero Cauchy sequences are eventually separated from zero by a common positive lower bound, and the same quotient estimate proves their reciprocal sequences equivalent.

For every $n\geq N$, $x_nu_n=1$, so the product sequence is equivalent to the constant-one sequence. Hence

$$
X[u]=1_{\mathbb R}.
$$

We have now proved that every nonzero real class has a multiplicative inverse.

Finally $0_{\mathbb R}\ne1_{\mathbb R}$: the difference of the constant-zero and constant-one sequences has absolute value $1$ at every index and cannot approach zero. Thus **$\mathbb R$ is a field**, constructed from the rational field and Cauchy sequences.

## Embedding the rationals faithfully

Define

$$
\eta:\mathbb Q\to\mathbb R,\qquad
\boxed{\eta(q):=[(q,q,q,\ldots)].}\tag{R5}
$$

Read $\eta$ as "eta." This map preserves sum, product, zero, one, and inverses by constant-sequence calculations. It is injective: if constant sequences $q$ and $r$ are equivalent, then $|q-r|<\varepsilon$ for **every** positive rational $\varepsilon$. If $q\ne r$, choosing $\varepsilon=|q-r|/2$ gives a contradiction. Therefore $q=r$.

When we now write $\mathbb Q\subseteq\mathbb R$, we are identifying each rational with its embedded constant-sequence class.

## Constructing order on the real classes

We cannot simply say $[x]<[y]$ whenever $x_n<y_n$ for some index: an early approximation can be misleading, and equivalent sequences can fluctuate above and below one another.

Instead define **strict positivity**:

$$
\boxed{
X=[x]>0\quad\Longleftrightarrow\quad
\exists\delta\in\mathbb Q_{>0}\ \exists N\
\forall n\geq N:\ x_n\geq\delta.
}\tag{R+}
$$

Then define $X<Y$ if $Y-X>0$, and $X\leq Y$ if $X<Y$ or $X=Y$.

### Positivity is independent of representatives

Suppose $x\sim x'$ and $x_n\geq\delta$ for all $n\geq N$. For sufficiently late indices, $|x_n-x'_n|<\delta/2$. Therefore

$$
x'_n>x_n-\delta/2\geq\delta/2>0.
$$

Thus the positive property does not depend on the representative.

### Trichotomy

For every real class $X$, exactly one of these holds:

$$
X=0,\qquad X>0,\qquad -X>0.
$$

If $X\ne0$, the reciprocal lemma says its representative is eventually bounded away from zero by some positive $\delta$. Cauchy closeness prevents late terms from switching signs: if one late term is at least $\delta$, every sufficiently late term is positive; similarly if one is at most $-\delta$, all sufficiently late terms are negative. Hence $X$ or $-X$ is positive.

Both cannot be positive because their eventual representatives would have contradictory signs; and neither can be positive when $X=0$ because a sequence eventually bounded away from zero cannot be equivalent to the zero sequence.

### Ordered-field compatibility

If $X,Y>0$, choose eventual positive lower bounds $\delta_X,\delta_Y$. Then late representatives of $X+Y$ exceed $\delta_X+\delta_Y>0$, and those of $XY$ exceed $\delta_X\delta_Y>0$. Therefore the positive elements are closed under addition and multiplication.

These facts, together with trichotomy and the field laws, prove the usual ordered-field axioms. In particular:

$$
X<Y\Longrightarrow X+Z<Y+Z,
$$

and

$$
X<Y,\quad Z>0\Longrightarrow XZ<YZ.
$$

The order extends the rational order: a constant rational $q$ is positive under R+ exactly when $q>0$ in $\mathbb Q$.

**What was earned:** we did not merely impose an order on an arbitrary quotient. We derived an order from eventual, *uniformly separated* rational positivity and showed that it respects equivalence classes and field operations.

## The rationals are dense in the reals

**Theorem.** For every real $X$ and positive rational $\varepsilon$, there is a rational $q$ with

$$
|X-\eta(q)|<\varepsilon.
$$

**Proof.** Choose a rational Cauchy representative $x$ of $X$. By R1, there exists $N$ such that for all $n\geq N$,

$$
|x_n-x_N|<\varepsilon/2.
$$

Compare the class $X$ with the constant-sequence class $\eta(x_N)$. Their difference has representatives with absolute value eventually below $\varepsilon/2$. By the constructed real order, this means $|X-\eta(x_N)|<\varepsilon$. Choose $q=x_N$.

Thus every real can be approximated arbitrarily closely by a rational. We did not assume density to construct $\mathbb R$; it follows from how its elements were built.

**Archimedean property.** Every representative rational Cauchy sequence is bounded by a rational $M$, so $|X|<n$ for some natural $n>M+1$ embedded as a real. Hence $\mathbb R$ is Archimedean. In particular, $1/n$ approaches zero in the real order.

## Proving completeness: the central result

Up to this point we have proved that $\mathbb R$ is an Archimedean ordered field. Now we justify the defining reason for constructing it: **every real Cauchy sequence converges to a real**.

A sequence $(X_k)$ of reals is called Cauchy if, for every positive rational $\varepsilon$, there is $K$ such that $|X_m-X_n|<\varepsilon$ for all $m,n\geq K$. Rational tolerances suffice because positive rationals can be found smaller than any positive real, using rational density.

**Theorem (Cauchy completeness).** Every Cauchy sequence in $\mathbb R$ has a limit in $\mathbb R$.

**Proof, step by step.**

1. For each $k\geq1$, use rational density to choose $q_k\in\mathbb Q$ such that

   $$
   |X_k-\eta(q_k)|<\frac1k.
   $$

   This choice uses only the density already proved, not completeness.

2. The **rational sequence** $(q_k)$ is Cauchy. Given rational $\varepsilon>0$, take $m,n$ large enough that $1/m<\varepsilon/3$, $1/n<\varepsilon/3$, and $|X_m-X_n|<\varepsilon/3$. The triangle inequality gives

   $$
   |q_m-q_n|
   \leq|q_m-X_m|+|X_m-X_n|+|X_n-q_n|
   <\varepsilon.
   $$

   Here the rationals are identified with their constant-sequence embeddings, whose order we proved compatible.

3. Since $(q_k)$ is a rational Cauchy sequence, its equivalence class $Y:=[(q_k)]$ **already is an element of our constructed $\mathbb R$**.

4. The constant-sequence rationals $\eta(q_k)$ converge to $Y$. To see why, fix rational $\varepsilon>0$. Because $(q_k)$ is Cauchy, for sufficiently large $k$ and all sufficiently large $n$,

   $$
   |q_n-q_k|<\varepsilon/2.
   $$

   By the construction of real order, this says $|\eta(q_k)-Y|<\varepsilon$ for sufficiently large $k$.

5. Finally,

   $$
   |X_k-Y|
   \leq|X_k-\eta(q_k)|+|\eta(q_k)-Y|
   <1/k+\varepsilon
   $$

   for sufficiently large $k$. Given any requested tolerance, first choose the preceding bounds with half that tolerance; then the right side is smaller than the requested tolerance. Therefore $X_k\to Y$.

This completes the proof.

**There is no infinite regress.** The limit $Y$ was explicitly built from the rational Cauchy sequence $(q_k)$, and the construction of $Y$ used no prior assumption that the sequence had a limit.

## From Cauchy completeness to least-upper-bound completeness

Real analysis often defines completeness differently: every nonempty bounded-above set has a **least upper bound** (supremum).

For an ordered field that is Archimedean, Cauchy completeness implies this least-upper-bound property. We can prove it by **bisection**, now within our constructed $\mathbb R$.

Let $A\subseteq\mathbb R$ be nonempty and bounded above. If $A$ has a greatest element, it is immediately the supremum. Otherwise choose $a\in A$ and an upper bound $u$ with $a<u$, and choose $\ell=a-1$. Then $\ell$ is **not** an upper bound of $A$, while $u$ is an upper bound.

Bisect the interval $[\ell,u]$ repeatedly. At each midpoint $m$:

- If $m$ is an upper bound for $A$, replace the upper endpoint with $m$.
- If $m$ is not an upper bound, replace the lower endpoint with $m$.

After $n$ steps we have an interval $[\ell_n,u_n]$ with:

$$
\ell_n\ \text{not an upper bound},\qquad
u_n\ \text{an upper bound},\qquad
u_n-\ell_n=\frac{u-\ell}{2^n}.
$$

The intervals are nested, and their widths approach zero by the Archimedean property. Both endpoint sequences are Cauchy: all later endpoints remain inside any earlier interval. By the just-proved Cauchy completeness, they converge in $\mathbb R$. Their difference tends to zero, so they share a common limit $L$.

**Why $L$ is an upper bound.** If some $x\in A$ satisfied $x>L$, then for sufficiently large $n$, $u_n<x$. That contradicts the fact that every $u_n$ is an upper bound.

**Why $L$ is the least upper bound.** If $v<L$, then for sufficiently large $n$, $v<\ell_n$. But $\ell_n$ is not an upper bound, so some $x\in A$ exceeds $\ell_n>v$. Thus $v$ is not an upper bound.

Therefore $L=\sup A$.

We have now constructed an **ordered field satisfying the least-upper-bound property**, rather than writing a completeness axiom and leaving its justification at an intuitive "number line without gaps."

## Building the square root of two inside the new field

Let

$$
A=\{q\in\mathbb Q:q\geq0,\ q^2<2\},
$$

where $\mathbb Q$ is viewed inside $\mathbb R$ through $\eta$. This set is nonempty, since $1\in A$, and bounded above, since $2$ is an upper bound. By the completeness theorem just proved, it has a real supremum $s$.

We will show

$$
\boxed{s^2=2.}
$$

We know $1\leq s\leq2$.

**Suppose $s^2<2$.** Choose a small rational $h>0$ such that

$$
2sh+h^2<2-s^2.
$$

This is possible because real quantities are bounded by rationals and rationals can be arbitrarily small and positive. Then $(s+h)^2<2$. By rational density choose a rational $q$ with $s<q<s+h$. Since $q>0$ and $q^2<(s+h)^2<2$, we have $q\in A$, contradicting that $s$ is an upper bound.

**Suppose $s^2>2$.** Choose a small rational $h>0$ with $h<s$ and

$$
2sh< s^2-2.
$$

Then $(s-h)^2=s^2-2sh+h^2>2$. Because every $q\in A$ is nonnegative, $q\geq s-h$ would imply $q^2\geq(s-h)^2>2$, impossible. Thus $s-h$ is itself an upper bound of $A$, smaller than $s$, contradicting the least-upper-bound property.

Neither strict inequality is possible. Therefore $s^2=2$. We call the nonnegative solution $s=\sqrt2$ (read "square root of two"). It exists because **we proved completeness**.

**Worked comparison:** the rational bisection chapter gave intervals $[1,2]$, $[1.25,1.5]$, $[1.375,1.5]$, and successively narrower rational intervals surrounding a hypothetical square root. Here their Cauchy class is an actual real object, and its square is proven to be two. Approximation and exact existence have different logical jobs.

## A second construction: Dedekind cuts

There is another standard way to build $\mathbb R$ from $\mathbb Q$, especially illuminating for order theory.

A **Dedekind cut** is a subset $A\subset\mathbb Q$ that is nonempty, not all of $\mathbb Q$, downward closed, and has no greatest element:

$$
q\in A,\ p<q\Longrightarrow p\in A,
$$

and for every $q\in A$ some $r\in A$ satisfies $q<r$.

The real number corresponding to $\sqrt2$ is represented by the cut

$$
A_{\sqrt2}=
\{q\in\mathbb Q:q<0\ \text{or}\ q^2<2\}.
$$

Read $A_{\sqrt2}$ as "the cut at square root two." The negative-rational clause is important: a cut must contain **all** rationals below its boundary, including large negative ones whose squares exceed two.

Order of cuts is inclusion: $A\leq B$ when $A\subseteq B$. Addition can be defined by taking the downward closure of pairwise sums. Multiplication first uses positive cuts and then signs. Proving that these are well-defined field operations takes substantial additional work, but it leads to the same complete Archimedean ordered field up to a unique order-preserving field isomorphism that fixes $\mathbb Q$.

**Do not conflate the methods:** our primary construction was the Cauchy-sequence quotient, whose field and completeness proofs were given above. Dedekind cuts provide an alternative construction and an especially direct picture of the least-upper-bound property. The claim that they agree is a theorem, not an identity between literally identical sets.

## Why the result is unique up to isomorphism

**Theorem.** Any two **complete Archimedean ordered fields** are isomorphic by a unique order-preserving field isomorphism fixing the rational numbers.

**Proof outline with the decisive steps.** Both fields contain a unique ordered copy of $\mathbb Q$ because $1$ generates the integers and their reciprocals generate the rationals. For any $x$ in the first field, choose a rational Cauchy sequence converging to $x$, possible by rational density. Map $x$ to the limit of the same rational sequence in the second field. Cauchy completeness guarantees existence there. If two rational sequences approach the same $x$, their difference approaches zero, so their images have the same limit: the map is well-defined. Rational approximations and limit laws show that it preserves addition, multiplication, and order. Constructing the map in the opposite direction shows it is bijective, and density forces uniqueness.

The **Archimedean** qualifier matters. There exist non-Archimedean ordered fields, including fields containing elements larger than every natural number. Least-upper-bound completeness rules those out, but when comparing alternative formulations of metric completeness one must not simply omit the Archimedean hypothesis.

## What we can now assume in real analysis

| Property of $\mathbb R$ | How it was obtained |
| --- | --- |
| Real numbers exist | quotient of rational Cauchy sequences |
| Equality is well-defined | equivalence relation R2 |
| Addition and multiplication are valid | closure and representative-independence proofs |
| The structure is a field | rational laws plus the reciprocal theorem |
| The order is total and compatible | eventual, uniformly separated rational positivity |
| Rational numbers embed faithfully | constant-sequence map $\eta$ |
| Rational numbers are dense | approximations from any representative sequence |
| The field is Archimedean | boundedness of rational Cauchy representatives |
| Every real Cauchy sequence converges | rational-approximation diagonal construction |
| Every nonempty bounded-above subset has a supremum | bisection and Cauchy completeness |
| $\sqrt2$ exists | supremum construction and continuity of squaring |

The next step is [Construction of the Complex Numbers](./construction-of-the-complex-numbers). There we gain solutions to $x^2+1=0$ and, eventually, every nonconstant complex polynomial. But that final **algebraic closure** statement is a deep theorem requiring more than the field axioms alone.

For continued study of limits, compactness, continuity, derivatives, and integration, proceed to [Real Analysis](./real-analysis). That chapter may now cite a constructed complete ordered field rather than simply assuming one.
