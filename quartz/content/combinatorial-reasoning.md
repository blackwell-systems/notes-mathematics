---
title: "Combinatorial Reasoning and Counting Identities"
prerequisites: ["combination", "permutation", "structural-induction"]
enables: ["generating-functions", "advanced-graph-theory"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Permutations](./permutation), [Combinations](./combination), and [structurally defined objects](./structural-induction).
> **Leads to:** [Generating Functions](./generating-functions), [probability](./probability), and [Advanced Graph Theory](./advanced-graph-theory).

A counting formula is more convincing when we understand **what it counts**. Combinatorial reasoning derives identities by constructing a bijection, dividing a set of objects into disjoint cases, or counting the same collection in two different ways. These proofs reveal structure that an algebraic simplification can hide.

## The product and sum principles

If a choice consists of independently selecting one of $m$ first-stage options and one of $n$ second-stage options, there are $mn$ ordered outcomes (**product principle**). If an outcome belongs to one of two *disjoint* cases of sizes $m$ and $n$, there are $m+n$ outcomes (**sum principle**).

The **disjointness** condition for addition matters. When cases overlap, naive addition double-counts, and we need [inclusion-exclusion](./combination#inclusion-exclusion-principle).

## Bijections: show two sets have equal size

A **bijection** is a one-to-one and onto function. It pairs every item in one finite set with exactly one item in the other.

> [!theorem] Counting subsets with binary strings
> A set with $n$ distinct elements has $2^n$ subsets.

> [!proof] Build an explicit bijection
> List the elements as $a_1,\ldots,a_n$. To each subset $S$, associate a bit string of length $n$: its $i$-th bit is $1$ if $a_i\in S$, and $0$ otherwise.
>
> **Injective:** different subsets differ on at least one element, so their bit strings differ.
>
> **Surjective:** each length-$n$ bit string determines a subset by including precisely the elements whose bits are $1$.
>
> Each of the $n$ bits has two possible values, giving $2^n$ strings by the product principle. Hence there are $2^n$ subsets.

This also proves the identity

$$
\sum_{k=0}^{n}\binom nk=2^n.
$$

Read $\binom nk$ as "n choose k": the number of subsets with exactly $k$ elements. The left side groups subsets by size; the right side chooses each element independently.

## Double counting: one set, two descriptions

> [!theorem] Vandermonde's identity
> For nonnegative integers $r,s,n$,
> $$
> \binom{r+s}{n}=\sum_{k=0}^{n}\binom rk\binom{s}{n-k},
> $$
> where out-of-range binomial coefficients are zero.

> [!proof] Count the same committees in two ways
> Suppose a group contains $r$ red-shirted people and $s$ blue-shirted people. We must select a committee of $n$.
>
> **First count:** choose any $n$ people from all $r+s$: $\binom{r+s}{n}$.
>
> **Second count:** partition committees by the number $k$ of red-shirted members. We choose those in $\binom rk$ ways and the remaining $n-k$ blue-shirted members in $\binom{s}{n-k}$ ways. Multiplication counts each category, and adding over all $k$ counts every committee **once**, since its red-member count is unique.
>
> Both expressions count the same finite set, so they are equal.

**Numerical check:** If $r=3$, $s=2$, $n=2$, then

$$
\binom52=\binom30\binom22+\binom31\binom21+\binom32\binom20
=1+6+3=10.
$$

### Pascal's identity by a distinguished element

For $1\leq k\leq n$, split all $k$-element subsets of an $n$-element set by whether they contain a distinguished element $x$.

- If they contain $x$, choose the remaining $k-1$ elements from $n-1$ options.
- If they omit $x$, choose all $k$ from the other $n-1$.

Thus

$$
\binom nk=\binom{n-1}{k-1}+\binom{n-1}k.
$$

Every subset goes into exactly one case; no set is missed or counted twice. That is the real reason the identity works.

## Catalan numbers: recursive objects determine a recurrence

Let $C_n$ count balanced sequences of $n$ matched pairs of parentheses, such as $()()$ and $(())$ when $n=2$.

For $n=0$ there is exactly one sequence, the empty sequence, so $C_0=1$. Every nonempty balanced sequence can be decomposed **uniquely** as

$$
(\,A\,)\,B,
$$

where $A$ and $B$ are balanced sequences. If $A$ has $k$ pairs, then $B$ has $n-1-k$ pairs. Therefore

$$
C_n=\sum_{k=0}^{n-1}C_k C_{n-1-k},\qquad n\geq1.
$$

This is not a guessed recurrence: the unique decomposition partitions the objects being counted.

> [!example] Compute the first Catalan values
> $C_0=1$.
>
> $C_1=C_0C_0=1$.
>
> $C_2=C_0C_1+C_1C_0=2$.
>
> $C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5$.
>
> The five balanced strings with three pairs are
> $((()))$, $(()())$, $(())()$, $()(())$, and $()()()$.

The same numbers count several other recursively structured families: full binary trees with $n$ internal nodes, certain lattice paths, and ways to triangulate a polygon. A **bijection** between two families explains why the same counts appear.

## Stirling numbers: partition labeled objects into blocks

Let $S(n,k)$ (read "Stirling number of the second kind") count partitions of an $n$-element labeled set into exactly $k$ **nonempty, unlabeled** blocks.

Distinguish the last element $x$:

1. If $x$ forms a block by itself, partition the other $n-1$ elements into $k-1$ blocks: $S(n-1,k-1)$ choices.
2. Otherwise partition the other $n-1$ into $k$ blocks, then insert $x$ into one of the $k$ existing blocks: $kS(n-1,k)$ choices.

The cases are disjoint and exhaustive, giving

$$
S(n,k)=S(n-1,k-1)+kS(n-1,k).
$$

Boundary conditions: $S(0,0)=1$, $S(n,0)=0$ for $n>0$, and $S(0,k)=0$ for $k>0$.

**Worked example:** for three labeled elements, $S(3,1)=1$, $S(3,2)=3$, and $S(3,3)=1$. The middle value counts exactly the partitions $\{\{1\},\{2,3\}\}$, $\{\{2\},\{1,3\}\}$, and $\{\{3\},\{1,2\}\}$.

The **Bell number** $B_n=\sum_{k=0}^n S(n,k)$ counts all partitions of an $n$-element set. For three elements, $B_3=1+3+1=5$.

> [!distinction] Labeled blocks change the answer
> The blocks of a set partition are **unlabeled**. If the $k$ blocks were assigned $k$ distinct labels, a partition into $k$ blocks would yield $k!$ assignments. Confusing labeled boxes with unlabeled blocks creates a systematic overcount.

## Counting up to symmetry

Sometimes arrangements related by rotation or reflection are considered equivalent. Then merely dividing the number of arrangements by the number of symmetries can be wrong, because some arrangements have nontrivial stabilizers. [Burnside's lemma](./group-actions-symmetry#burnsides-lemma-count-objects-up-to-symmetry) counts orbits correctly by averaging the number of configurations fixed by each symmetry.

This is another appearance of [equivalence classes and quotient sets](./equivalence-relations): an orbit is an equivalence class under a group action.

## Why generating functions come next

The Catalan recurrence and Stirling recurrence encode entire sequences. Rather than calculate each coefficient separately, we can package a sequence into one **formal generating function**, convert recursive structure into an algebraic identity, and read counts back from coefficients.

**Next:** [Generating Functions](./generating-functions), where "count objects by size" becomes algebra on power series.
