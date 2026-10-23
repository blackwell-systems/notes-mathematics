---
title: "Sheaf Theory: From Local Data to Global Structure"
prerequisites: ["general-topology-foundations", "functions-relations"]
enables: []
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Topological Spaces](./general-topology-foundations) (open sets and intersections), [Functions and Relations](./functions-relations) (restriction and composition), and [Subspaces and Gluing](./general-topology-constructions) (local descriptions).
> **Helpful, not required:** [Category Theory](./category-functors-naturality) (contravariant functors), [Differential Geometry](./differential-geometry) (local coordinate functions), and [Algebraic Topology](./algebraic-topology) (global obstructions).
> **Leads to:** Sheaf cohomology, schemes, geometric descent, and precise local-to-global arguments.

**Start with the intuition:** Imagine a landscape covered by overlapping maps. Each map describes part of the landscape. When the maps give the **same answer in every overlap**, can they be assembled into one description of the whole?

A **sheaf** is a mathematical rule for assigning data to each open region of a space, restricting data to smaller regions, and assembling **compatible** local pieces into a **unique** global piece.

The caveat is essential. A sheaf does **not** promise that any collection of local solutions can be glued. It promises that *if* they agree on all overlaps, then they glue, and glue uniquely.

## 1. The three ingredients: regions, restrictions, compatibility

Let $X$ be a topological space. For each open set $U\subseteq X$, imagine a collection $\mathcal F(U)$ (read "script F of U") of allowed **sections over $U$**.

The most immediate example is

$$
\mathcal C(U)=\{f:U\to\mathbb R\mid f\text{ is continuous}\}.
$$

So a section is simply a continuous real-valued function on an open region.

If $V\subseteq U$ are open, any function on $U$ can be **restricted** to $V$. Write

$$
\rho^U_V:\mathcal F(U)\longrightarrow\mathcal F(V),
\qquad
\rho^U_V(s)=s|_V.
$$

Read $s|_V$ as "the restriction of s to V."

Restrictions obey two rules:

1. Restricting to the same region does nothing: $\rho^U_U=\mathrm{id}$.
2. Restricting from $U$ to $V$ to $W$ is the same as restricting straight from $U$ to $W$:
   $\rho^V_W\circ\rho^U_V=\rho^U_W$ whenever $W\subseteq V\subseteq U$.

An assignment satisfying these rules is called a **presheaf**. It has local data and coherent restriction maps, but it need not allow every compatible patching.

## 2. The sheaf axiom: one exact promise

Suppose an open region $U$ is covered by open sets $U_i$:

$$
U=\bigcup_{i\in I}U_i.
$$

We have a section $s_i\in\mathcal F(U_i)$ on each piece. The sections are **compatible** if for every pair

$$
s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}.
$$

This says both descriptions give the same answer wherever they describe the same place.

A presheaf is a **sheaf** if these two conditions hold for every open cover:

- **Locality (uniqueness):** If two global sections agree after restriction to every $U_i$, they were the same global section.
- **Gluing (existence):** Every compatible family $(s_i)$ comes from a global section $s\in\mathcal F(U)$ whose restriction to $U_i$ is $s_i$.

Together they give **one and only one** global section for each compatible family of local sections.

> [!theorem] Continuous real-valued functions form a sheaf
> For every topological space $X$, the assignment $U\mapsto\mathcal C(U)$ with ordinary restriction is a sheaf.
>
> **Proof of uniqueness:** If $f,g:U\to\mathbb R$ agree on every $U_i$, take any point $x\in U$. Some $U_i$ contains $x$, so $f(x)=g(x)$. Thus $f=g$.
>
> **Proof of existence:** Define $f(x)=f_i(x)$ for any $i$ with $x\in U_i$. Compatibility means this choice does not depend on $i$, so $f$ is well-defined. It is continuous: for any open $W\subseteq\mathbb R$, the inverse image $f^{-1}(W)$ intersects each $U_i$ in $f_i^{-1}(W)$, which is open in $U_i$, and hence open in $U$. As a union of such sets, $f^{-1}(W)$ is open. Its restrictions are exactly the given $f_i$.

The proof works because **continuity is local**: a function continuous on a cover by open regions is continuous on their union.

## 3. Worked example: glue genuinely different local formulas

Let

$$
U=(-2,1),\qquad V=(-1,2),\qquad U\cup V=(-2,2).
$$

On $U$ define the continuous function $f_U(x)=0$.

On $V$ define

$$
f_V(x)=\bigl(\max\{0,x-1\}\bigr)^2.
$$

These are different functions on their full domains. But the overlap is

$$
U\cap V=(-1,1),
$$

where $x<1$, so $f_V(x)=0=f_U(x)$. The two pieces are **compatible**.

Their unique glued continuous function on $(-2,2)$ is

$$
f(x)=
\begin{cases}
0,&x\leq1,\\
(x-1)^2,&x>1.
\end{cases}
$$

It is continuous at $x=1$ because the right-hand branch tends to zero there.

What did the sheaf axiom contribute? The formulas never needed to be identical on all their domains. We needed only **agreement wherever both were defined**. That agreement allowed a single unambiguous global function.

> [!distinction] A sheaf does not upgrade regularity
> The function just constructed is continuous and once differentiable, but its second derivative jumps at $1$. The construction therefore illustrates the **sheaf of continuous functions**, not the sheaf of smooth functions. If we work with smooth sections, the local pieces must each be smooth and match on overlaps; then the glued result will be smooth.

## 4. Counterexample: a presheaf that cannot glue

It is tempting to assign to each nonempty open set $U$ the set of **constant real-valued functions** on $U$. Restrictions of constants are constant, so this defines a presheaf (with one section on the empty set).

But take the disconnected open set

$$
U=(-2,-1)\cup(1,2).
$$

On the left component choose the constant function $0$; on the right component choose the constant function $1$.

The two regions are disjoint, so there is no overlap where they could disagree. They form a compatible family. Yet no **single constant function on all of $U$** restricts to both $0$ and $1$.

So this presheaf **fails the gluing axiom**.

The repair is important: assign to every open $U$ the **locally constant functions** on $U$, functions that are constant near each point but may take different values on different connected pieces. This assignment *is* a sheaf, commonly called the **constant sheaf** with values in $\mathbb R$.

The distinction matters because a globally constant function and a locally constant function are not the same notion on a disconnected space.

## 5. Germs and stalks: what can we know at one point?

Sometimes the value of a function at one point is not enough. We want to know its **behavior in some sufficiently small neighborhood**.

Two local sections near $p$ define the same **germ at $p$** if they agree on some (possibly smaller) open neighborhood of $p$. The collection of all such germs is the **stalk** $\mathcal F_p$, read "script F at p."

In category-theoretic notation the stalk is a direct limit of the sections over neighborhoods of $p$:

$$
\mathcal F_p=\varinjlim_{p\in U}\mathcal F(U).
$$

Intuitively, this means: keep shrinking the neighborhood, and identify descriptions that eventually become identical.

### Worked distinction: a value is not a germ

Consider the smooth functions on $\mathbb R$

$$
f(x)=0,\qquad g(x)=x^2.
$$

At $0$, both have value $0$, but they have **different germs**: no open interval around $0$ makes the two functions equal.

A more surprising distinction holds for smooth functions. Define

$$
h(x)=
\begin{cases}
e^{-1/x^2},&x\ne0,\\
0,&x=0.
\end{cases}
$$

Every derivative of $h$ at $0$ is zero, just as for $f(x)=0$. Thus their Taylor-series data at that point agree. Nevertheless $h$ is nonzero at every nearby nonzero point, so **their smooth germs differ**.

This illustrates why a stalk can capture more local information than either a function's value or its collection of derivatives at one point.

## 6. Local solutions do not imply a global solution

Here is the most important limitation of gluing.

On the circle $S^1$, every sufficiently small open arc has a continuous **angle coordinate** $\theta$ satisfying

$$
(\cos\theta,\sin\theta)=(x,y).
$$

But there is no continuous real-valued function $\theta:S^1\to\mathbb R$ that assigns an angle to every point and returns to the same real value after going around once. Any angle followed around one complete circuit changes by $2\pi$.

The local angle functions differ by multiples of $2\pi$ on suitable overlaps. They **exist locally**, but they cannot all be chosen to **agree as real-valued functions** on every overlap. Thus the sheaf axiom for continuous real functions is not violated: its compatibility hypothesis has failed.

Another way to see the same obstruction is through a differential form. The smooth $1$-form

$$
\alpha=-y\,dx+x\,dy
$$

restricted to the unit circle is **locally exact**: on short arcs it equals $d\theta$ for a local angle. Yet [its integral around the circle](./differential-geometry#4-from-tangent-vectors-to-measurements-differential-forms) is $2\pi$, while a globally exact form integrates to zero around a closed loop. So no global real-valued potential $\theta$ exists.

> [!warning] Three claims that must not be confused
> **Local existence:** Every small region admits some solution.
>
> **Compatibility:** We can choose local solutions that agree on all overlaps.
>
> **Global existence:** There is one global solution.
>
> The sheaf axiom says *compatibility implies unique gluing*. It does **not** say that local existence implies compatibility.

This distinction sits at the heart of local-to-global reasoning, and it is one reason higher geometric invariants are useful.

## 7. The categorical viewpoint: presheaves reverse arrows

If $V\subseteq U$, there is an inclusion $V\hookrightarrow U$. But restriction goes the other way:

$$
\mathcal F(U)\longrightarrow\mathcal F(V).
$$

This arrow reversal is why a presheaf is a **contravariant functor** from the poset of open subsets of $X$ to sets (or groups, vector spaces, etc.):

$$
\mathcal F:\mathcal O(X)^{\mathrm{op}}\longrightarrow\mathbf{Set}.
$$

Here $\mathcal O(X)$ is the category whose objects are open subsets and whose arrows are inclusions. The superscript $\mathrm{op}$ means **reverse the arrows**. See [Functors and Naturality](./category-functors-naturality) for the underlying definition.

The sheaf axiom can also be written using an **equalizer**: for a cover $U=\bigcup_iU_i$, global sections correspond exactly to families of local sections that give equal answers under the two restrictions to each overlap:

$$
\mathcal F(U)\longrightarrow
\prod_i\mathcal F(U_i)
\rightrightarrows
\prod_{i,j}\mathcal F(U_i\cap U_j).
$$

The two parallel arrows both restrict a family to overlaps, one using the $i$th piece and the other using the $j$th. A sheaf says the first map identifies $\mathcal F(U)$ with the subset where the two parallel arrows agree.

**The deeper pattern:** A global object is reconstructed from local objects together with compatibility data. More sophisticated forms of this idea are called **descent**.

## 8. What is sheaf cohomology trying to measure?

Sheaf theory tells us how to glue local data *when it matches*. What if locally valid choices consistently fail to match, even though the mismatch has structure?

For sheaves of abelian groups, **sheaf cohomology** studies obstructions and higher compatibility phenomena using groups $H^k(X,\mathcal F)$ (read "H-k of X with coefficients in script F"). One approach uses **Čech cohomology** (pronounced approximately "check cohomology"), recording differences of local choices on overlaps and relationships on triple overlaps.

Here is the first hint of the mechanism. Suppose local potential functions $f_i$ obey

$$
df_i=\alpha|_{U_i}
$$

for a closed $1$-form $\alpha$. On any overlap,

$$
d(f_i-f_j)=0,
$$

so $f_i-f_j$ is locally constant. These overlap differences obey a consistency condition on triple overlaps:

$$
(f_i-f_j)+(f_j-f_k)+(f_k-f_i)=0.
$$

They record the obstruction to choosing the potentials so that all overlap differences vanish after permissible local adjustments. For the circle's angle form, that obstruction is nontrivial.

> [!scope] What this sketch does and does not prove
> The example motivates the relationship among local potentials, Čech cocycles and global cohomology classes. The full statement requires choosing the relevant sheaf, coefficients, topology and cohomology theory, then proving the comparison theorem. **Not every sheaf-cohomology group is simply "the number of gluing failures."**

This is a bridge to [algebraic topology's cohomology](./algebraic-topology#8-a-bridge-to-differential-forms), rather than a substitute for that theory.

## 9. Applications: the same pattern in different mathematical worlds

| Sheaf or assignment | Section on an open region | What compatibility means |
| --- | --- | --- |
| Continuous functions | Continuous $f:U\to\mathbb R$ | Equal function values on overlaps |
| Smooth functions on a manifold | Smooth $f:U\to\mathbb R$ | Equal smooth functions on overlaps |
| Locally constant functions | Functions constant near each point | Agreed locally constant values |
| Differential forms | Smooth $k$-form on $U$ | Equal restricted forms |
| Local solutions to a differential equation | Solutions defined on $U$ | The same solution on every overlap |
| Algebraic geometry's structure sheaf | Regular functions on appropriate open sets | Compatible restrictions in the algebraic topology |

The last example explains why sheaves are central to modern **scheme theory**. A space's local rings and the restrictions between them carry algebraic information invisible if we record only its points. The distinction between $(x)$ and $(x^2)$ in [Commutative Algebra](./commutative-algebra#the-algebrageometry-dictionary-with-a-caveat) is an early example of why point sets alone can forget crucial multiplicity data.

### A careful connection to distributed consistency and confluence

A distributed system often has local views that must agree on shared information. That resembles overlapping sections, but the resemblance is **not automatically a mathematical equivalence**.

A sheaf captures **static local data, restriction, and exact compatibility-based gluing**. A distributed system may additionally involve time, partial information, causal dependencies, conflict resolution, termination, and iteration. To use sheaf machinery, one must first define:

1. What counts as a region or observable context?
2. What counts as a section in that region?
3. What restriction maps mean?
4. What agreement on overlaps requires?
5. Whether compatible sections really have unique global amalgamations.

Only after checking those axioms is a sheaf theorem applicable. **Existence of local normal forms** and **convergence to a global normal form** are different propositions; the sheaf axiom alone does not establish either convergence or confluence.

## 10. A compact mental model

| Question | Mathematical language |
| --- | --- |
| What data exists in region $U$? | Section $s\in\mathcal F(U)$ |
| What remains when I look at a smaller region? | Restriction $s|_V$ |
| Do two descriptions disagree on shared territory? | Compare restrictions to $U_i\cap U_j$ |
| Does compatibility guarantee exactly one assembled description? | The sheaf locality and gluing axioms |
| What does the data look like arbitrarily near one point? | Germ, stalk $\mathcal F_p$ |
| Why do local choices fail to assemble? | Compatibility obstructions; cohomology in suitable settings |

**Self-check:** A collection of local functions can disagree only outside their overlaps and still glue; that is what the worked example demonstrated. Constant functions on disconnected regions do not form a sheaf because compatible componentwise choices need not glue to one constant. Continuous functions do form a sheaf, yet a global angle on the circle need not exist, because local angle branches cannot all be made compatible as real functions.

**Scope:** This chapter develops presheaves, restrictions, sheaf gluing with proof, a counterexample, germs and stalks, the functorial viewpoint, and the beginnings of cohomological obstructions. A full treatment would develop sheafification formally, morphisms and exact sequences of sheaves, injective or flabby resolutions, derived functors, Čech comparison theorems, ringed spaces, and Grothendieck topologies. Those results are **not claimed here**.

Continue with [Category Theory](./category-functors-naturality), [Algebraic Topology](./algebraic-topology), [Differential Geometry](./differential-geometry), and [Commutative Algebra](./commutative-algebra), depending on which kind of local-to-global problem interests you.
