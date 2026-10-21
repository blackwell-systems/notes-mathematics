---
title: "Group Actions and Symmetry"
prerequisites: ["group-homomorphisms-quotients"]
enables: ["algebraic-structures"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Group Theory Foundations](./group-theory-foundations) (subgroups, cosets and Lagrange) · [Homomorphisms & Quotient Groups](./group-homomorphisms-quotients) (homomorphisms and kernels)
> **Leads to:** [Algebraic Structures](./algebraic-structures) · [Graph Theory](./graph-theory) · later permutation, representation, and geometric group theory

A group describes a family of reversible operations. A **group action** specifies what those operations actually *do* to another set. This chapter connects abstract group multiplication to concrete permutations, geometric symmetries, orbit structure, conjugacy, and symmetry counting.

We will not treat familiar pictures as substitutes for proofs. Every action needs an identity law and a compatibility law, and the central counting theorems follow from explicit maps and bijections.

## What exactly is a group action?

Let $G$ be a group with identity $e$, and let $X$ be a set. A **left action** of $G$ on $X$ is a function

$$
G\times X\to X,\qquad (g,x)\mapsto g\cdot x,
$$

satisfying, for all $g,h\in G$ and $x\in X$,

$$
\boxed{e\cdot x=x,\qquad (gh)\cdot x=g\cdot(h\cdot x).}\tag{ACT}
$$

Read $g\cdot x$ as "g acts on x." The **order** is significant: $gh$ acts by $h$ first and then $g$, consistent with function composition. A right action uses a different convention; we use left actions throughout.

### Actions are the same as homomorphisms into permutations

For every $g\in G$, define $\rho(g):X\to X$ by $\rho(g)(x)=g\cdot x$ (read $\rho$ as "rho"). This function is bijective, because

$$
\rho(g^{-1})(\rho(g)(x))
=g^{-1}\cdot(g\cdot x)
=(g^{-1}g)\cdot x
=e\cdot x=x.
$$

The reverse composition also gives the identity. Moreover ACT gives

$$
\rho(gh)(x)=(gh)\cdot x=g\cdot(h\cdot x)
=(\rho(g)\circ\rho(h))(x).
$$

Therefore $\rho:G\to S_X$ is a **group homomorphism** into the group $S_X$ of all bijections of $X$.

Conversely any homomorphism $\rho:G\to S_X$ defines an action by $g\cdot x=\rho(g)(x)$, because $\rho(e)$ is the identity map and $\rho(gh)=\rho(g)\circ\rho(h)$. So **actions and permutation-valued homomorphisms are equivalent descriptions**, a concrete bridge between the preceding chapters.

The **kernel of an action** is

$$
\ker(\rho)=\{g\in G:g\cdot x=x\text{ for every }x\in X\}.
$$

An action is **faithful** if its kernel is trivial. Thus "faithful" means different group elements induce different permutations, **not** merely that multiplication is preserved.

## Permutation groups, constructed concretely

The symmetric group $S_n$ is the set of all bijections of $\{1,\ldots,n\}$ under function composition.

**Closure:** composing bijections gives a bijection. **Associativity:** composition of functions is associative. **Identity:** the identity permutation fixes every element. **Inverse:** the inverse bijection reverses each relabeling. Therefore $S_n$ is a group.

There are

$$
\boxed{|S_n|=n!}
$$

elements, because a bijection has $n$ choices for the image of $1$, then $n-1$ for the image of $2$, and so on. This counting uses the elementary product rule for finite sets.

### Cycle notation and noncommutativity

A cycle $(1\ 2\ 3)$ sends $1$ to $2$, $2$ to $3$, and $3$ to $1$, fixing all other labels. A transposition $(1\ 2)$ exchanges those two labels.

Let $r=(1\ 2\ 3)$ and $s=(1\ 2)$. We compose **right to left**. Then

$$
rs=(1\ 3),\qquad sr=(2\ 3),
$$

as direct calculations on the three labels show. Thus $rs\neq sr$ and $S_3$ is nonabelian.

**Worked verification:** to compute $rs$, apply $s$ first, then $r$:
- $1\xrightarrow{s}2\xrightarrow{r}3$;
- $2\xrightarrow{s}1\xrightarrow{r}2$;
- $3\xrightarrow{s}3\xrightarrow{r}1$.

Thus $rs$ exchanges $1$ and $3$, fixing $2$. In the other order, $sr$ exchanges $2$ and $3$.

## Cayley's theorem: every group is a permutation group

**Theorem (Cayley).** Every group $G$ is isomorphic to a subgroup of $S_G$, the bijections of its underlying set.

**Proof.** Let $G$ act on itself by **left multiplication**:

$$
g\cdot x=gx.
$$

ACT holds because $ex=x$ and $(gh)x=g(hx)$ by the group axioms. For each $g$, the resulting permutation is $L_g(x)=gx$. Thus $\rho:g\mapsto L_g$ is a homomorphism.

If $\rho(g)$ is the identity permutation, then applying it to $e$ gives $ge=e$, hence $g=e$. Therefore the kernel is trivial, so $\rho$ is injective by the injectivity-kernel theorem. It is a bijection from $G$ onto its image, which is a subgroup of $S_G$. Thus

$$
\boxed{G\cong \rho(G)\leq S_G.}
$$

For a finite group of order $n$, Cayley's theorem embeds it into $S_n$. This does **not** mean it equals the entire $S_n$: the image may be much smaller.

The conceptual payoff is that abstract groups are genuinely made of **reversible permutations**, in the precise sense of admitting such a faithful representation.

## Orbits and stabilizers

For $x\in X$, define its **orbit**

$$
\boxed{G\cdot x=\{g\cdot x:g\in G\}}
$$

and its **stabilizer**

$$
\boxed{G_x=\{g\in G:g\cdot x=x\}.}
$$

The orbit is everything reachable from $x$ by the group action; the stabilizer is the subgroup of symmetries leaving $x$ fixed.

### Stabilizers are subgroups

The identity fixes $x$, so $e\in G_x$. If $g,h$ fix $x$, then

$$
(gh^{-1})\cdot x=g\cdot(h^{-1}\cdot x)=g\cdot x=x,
$$

because $h^{-1}$ also fixes $x$: applying $h^{-1}$ to $h\cdot x=x$ yields $h^{-1}\cdot x=x$. The one-step subgroup test proves $G_x\leq G$.

### Orbits partition the set

Define $x\sim y$ if some $g\in G$ satisfies $y=g\cdot x$. This relation is:

- Reflexive, by $e\cdot x=x$.
- Symmetric, because $y=g\cdot x$ implies $x=g^{-1}\cdot y$.
- Transitive, because $y=g\cdot x$ and $z=h\cdot y$ imply $z=(hg)\cdot x$.

Therefore $\sim$ is an equivalence relation, and its equivalence classes are precisely the orbits. **Distinct orbits do not overlap**; every point belongs to one orbit.

## Orbit-stabilizer theorem: a bijection, not a formula guessed from counting

For a fixed $x\in X$, consider the left cosets of $G_x$. Define

$$
\boxed{\psi:G/G_x\to G\cdot x,\qquad
\psi(gG_x)=g\cdot x.}\tag{OS}
$$

Here $G/G_x$ means **the set of left cosets**, not necessarily a quotient *group*: $G_x$ need not be normal.

**Well-definedness:** if $gG_x=hG_x$, then $h^{-1}g\in G_x$, so $(h^{-1}g)\cdot x=x$, and hence $g\cdot x=h\cdot x$.

**Injectivity:** if $g\cdot x=h\cdot x$, act on both sides with $h^{-1}$. Then $(h^{-1}g)\cdot x=x$, so $h^{-1}g\in G_x$ and $gG_x=hG_x$.

**Surjectivity:** by definition every point in the orbit is $g\cdot x$ for some $g$, the image of $gG_x$.

Thus OS is a bijection. For finite $G$, Lagrange's theorem counts its left cosets and gives

$$
\boxed{|G\cdot x|=[G:G_x]=\frac{|G|}{|G_x|}.}\tag{OST}
$$

This is the **orbit-stabilizer theorem**. The size of an orbit times the size of a point's stabilizer equals the size of the entire finite group.

**Worked example: triangle vertices.** The six symmetries of an equilateral triangle act on its three vertices. The orbit of any vertex has size three: the rotations move it to all three positions. Exactly two symmetries fix a chosen vertex, the identity and reflection through that vertex. Orbit-stabilizer gives $3\cdot2=6$.

## Dihedral groups: rotations and reflections

Consider a regular $n$-gon, with $n\geq3$. Label its vertices by residues $k\in\mathbb Z/n\mathbb Z$. Define two bijections

$$
r(k)=k+1,\qquad s(k)=-k\pmod n.
$$

The permutation $r$ rotates the labels one step; $s$ reflects them. Direct substitution gives

$$
r^n=e,\qquad s^2=e,\qquad srs=r^{-1}.
$$

The last relation is proved by evaluating both sides on an arbitrary vertex:

$$
srs(k)=sr(-k)=s(-k+1)=k-1=r^{-1}(k).
$$

The **dihedral group** $D_n$ consists of all rotations and reflections of the $n$-gon under composition. Moving $s$ past $r$ using $sr=r^{-1}s$ reduces every word in these generators to one of

$$
e,r,r^2,\ldots,r^{n-1},
\qquad
s,sr,sr^2,\ldots,sr^{n-1}.
$$

There are at most $2n$ such functions. The first $n$ are distinct because they move vertex zero to distinct vertices. The other $n$ are distinct for the same reason. No reflection equals a rotation for $n\geq3$: if $sr^j=r^k$ as functions, then $s=r^{k-j}$; evaluating both sides on labels $0$ and $1$ would require a rotation simultaneously to send $0\mapsto0$ and $1\mapsto-1$, impossible when $n\geq3$. Thus

$$
\boxed{|D_n|=2n.}
$$

Our convention is that $D_n$ has **$2n$ elements**; some books instead denote the same group by $D_{2n}$, so always check the convention.

**Worked example:** $D_4$, the symmetry group of a square, has eight elements: four rotations and four reflections. It is nonabelian because $sr=r^{-1}s$ and $r^{-1}\ne r$ for a quarter-turn.

### The kernel of the polygon action

The action of $D_n$ on its $n$ vertices is faithful: a symmetry fixing every vertex must be the identity, as the explicit functions $r^k$ and $sr^k$ show. This makes $D_n$ a concrete subgroup of $S_n$, consistent with Cayley's theorem.

## Conjugation as an action on the group itself

Let $G$ act on itself by **conjugation**:

$$
g\cdot x=gxg^{-1}.
$$

The identity fixes each $x$, and

$$
(gh)x(gh)^{-1}
=g(hxh^{-1})g^{-1},
$$

so ACT holds. The orbits are **conjugacy classes**:

$$
\operatorname{Cl}(x)=\{gxg^{-1}:g\in G\}.
$$

The stabilizer of $x$ is its **centralizer**

$$
\boxed{C_G(x)=\{g\in G:gx=xg\}.}
$$

Indeed $gxg^{-1}=x$ if and only if $gx=xg$. Orbit-stabilizer therefore gives

$$
\boxed{|\operatorname{Cl}(x)|=[G:C_G(x)]}
$$

for finite groups.

The **center** $Z(G)=\{z\in G:zg=gz\text{ for all }g\in G\}$ is the collection of elements commuting with every group element. Exactly those elements have singleton conjugacy classes, since $gxg^{-1}=x$ for all $g$.

### Class equation

Conjugacy classes partition $G$. Separate the singleton classes, which are the elements of $Z(G)$, from the nonsingleton classes. Choose one representative $x_i$ from each nonsingleton class. Counting the partition gives

$$
\boxed{|G|=|Z(G)|+\sum_i [G:C_G(x_i)].}\tag{CEQ}
$$

Read $\sum_i$ as "sum over the chosen nonsingleton class representatives." This **class equation** is not an unexplained pattern: it is the orbit partition for the conjugation action plus orbit-stabilizer.

**Example: $S_3$.** The six permutations split into three conjugacy classes: the identity alone; the three transpositions; and the two three-cycles. The center has size one. The class equation reads

$$
6=1+3+2.
$$

The sizes follow either by listing permutations or by orbit-stabilizer: a transposition commutes only with itself and the identity (centralizer order two), and a three-cycle has centralizer of order three.

## A structural consequence: groups of prime-square order are abelian

Let $|G|=p^2$ for a prime $p$. We will use the class equation to show $G$ is abelian, a deeper result than Lagrange alone.

Each centralizer $C_G(x)$ is a subgroup containing $x$ and $e$. By Lagrange, its order divides $p^2$. For a **noncentral** $x$, it is a proper subgroup, so its order is either $1$ or $p$. It cannot have order $1$ if $x\ne e$, and the identity element is central. Thus every noncentral conjugacy class has size

$$
[G:C_G(x)]=p^2/p=p.
$$

The class equation shows $p$ divides $|Z(G)|$. Since $e\in Z(G)$, the center is nontrivial, and Lagrange implies $|Z(G)|$ is either $p$ or $p^2$.

Suppose $|Z(G)|=p$. Then the quotient $G/Z(G)$ has order $p$, hence is cyclic. But **if $G/Z(G)$ is cyclic then $G$ is abelian**: if $gZ(G)$ generates the quotient, any $a,b\in G$ can be written $a=g^mz$, $b=g^nw$ with $z,w\in Z(G)$. Since central elements commute with everything,

$$
ab=g^{m+n}zw=g^{n+m}wz=ba.
$$

Therefore $G$ would be abelian, giving $Z(G)=G$, contradicting $|Z(G)|=p$. Thus $|Z(G)|=p^2$, so $Z(G)=G$ and $G$ is abelian.

This theorem illustrates how **cosets, quotient groups, Lagrange, orbit-stabilizer, and conjugation** combine to prove a structural fact about groups.

## Burnside's lemma: count objects up to symmetry

For a finite group $G$ acting on a finite set $X$, define the **fixed-point set**

$$
\operatorname{Fix}(g)=\{x\in X:g\cdot x=x\}.
$$

**Burnside's lemma** states

$$
\boxed{|X/G|=\frac1{|G|}\sum_{g\in G}|\operatorname{Fix}(g)|.}\tag{BUR}
$$

Read $X/G$ as "the set of orbits," not necessarily a group. The formula says that the number of distinct objects **up to symmetry** is the average number of objects fixed by a symmetry.

### Proof by counting pairs twice

Consider

$$
P=\{(g,x)\in G\times X:g\cdot x=x\}.
$$

Count $P$ first by $g$. For each $g$, there are $|\operatorname{Fix}(g)|$ choices of $x$, so

$$
|P|=\sum_{g\in G}|\operatorname{Fix}(g)|.
$$

Count it instead by $x$. For each $x$, there are $|G_x|$ choices of $g$, so

$$
|P|=\sum_{x\in X}|G_x|.
$$

Partition $X$ into orbits. Within one orbit, all stabilizers have the same size: if $y=h\cdot x$, then $G_y=hG_xh^{-1}$, and conjugation is a bijection. An orbit with $m$ elements therefore contributes $m|G_x|=|G|$ by orbit-stabilizer.

Thus every orbit contributes exactly $|G|$ to the total sum of stabilizer sizes. With $|X/G|$ orbits,

$$
|P|=|G|\cdot|X/G|.
$$

Comparing the two counts and dividing by $|G|$ proves BUR.

### Worked example: coloring the corners of a square

Suppose each of the four **vertex positions** of a square is colored either black or white. Two colorings count as the same if a rotation of the square maps one to the other. There are $2^4=16$ raw colorings. Let $G=C_4$, the four rotations.

Count colorings fixed by each rotation:
- **Identity:** all $2^4=16$ colorings.
- **Quarter-turn:** every vertex must have the same color, so $2$ fixed colorings.
- **Half-turn:** opposite vertices must share colors, giving $2^2=4$ fixed colorings.
- **Three-quarter-turn:** as for the quarter-turn, $2$ fixed colorings.

Burnside's lemma gives

$$
\boxed{|X/C_4|=\frac{16+2+4+2}{4}=6.}
$$

There are exactly **six distinct binary square-vertex colorings up to rotation**. This result is not reached by assuming each orbit has four elements: symmetric colorings have smaller orbits, which is exactly why naïvely computing $16/4$ would be wrong.

## What the group-action perspective buys us

| Theorem or construction | Foundation |
| --- | --- |
| Actions correspond to homomorphisms into $S_X$ | action axioms and permutation composition |
| Cayley's theorem | faithful left-regular action and trivial kernel |
| Orbit partition | equivalence relation induced by the action |
| Orbit-stabilizer | bijection between left cosets and the orbit |
| Dihedral groups | explicit rotations/reflections and normal forms |
| Conjugacy class formula | orbit-stabilizer applied to conjugation |
| Class equation | partition into conjugacy classes |
| Prime-square groups are abelian | class equation, Lagrange and quotient cyclicity |
| Burnside's lemma | double counting and orbit-stabilizer |

The next deeper group-theory topics would be **Sylow theorems**, classification of finite abelian groups, free groups and presentations, semidirect products, and group representations. The results in these three chapters supply a proof-level basis for those extensions and for working with symmetry in [Linear Algebra Foundations](./linear-algebra-foundations), [Graph Theory](./graph-theory), and [Algebraic Structures](./algebraic-structures).
