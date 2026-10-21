---
title: "Group Theory Foundations"
prerequisites: ["set-theory", "functions-relations"]
enables: ["group-homomorphisms-quotients", "algebraic-structures"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Set Theory](./set-theory) (sets, subsets, partitions) · [Functions & Relations](./functions-relations) (maps, composition, bijections)
> **Leads to:** [Homomorphisms & Quotient Groups](./group-homomorphisms-quotients) · [Algebraic Structures](./algebraic-structures)

<div class="ed-opt-in" aria-hidden="true"></div>

<span class="ed-term ed-term--definition">A group</span> captures one kind of reversible behavior: combining actions in an associative way, having an action that does nothing, and being able to undo every action. The objects can be numbers, geometric transformations, permutations, matrices, or operations on a program state. None of these must commute.

This chapter starts with the **axioms** and derives the elementary theorems before studying subgroups, cyclic groups, cosets, and Lagrange's theorem. It does not require real-number completeness, complex numbers, or algebraic closure. Examples involving integers use the construction already developed in [Construction of the Integers](./construction-of-the-integers), but **the group axioms themselves require only sets, functions, and equality**.

## A binary operation and the group axioms

A **binary operation on** a set $G$ is a function

$$
*:G\times G\longrightarrow G.
$$

Read $*$ as "the group operation" and $\times$ here as the Cartesian product. The codomain $G$ makes **closure** explicit: whenever $a,b\in G$, the result $a*b$ is in $G$. We often write $ab$ instead of $a*b$, but that juxtaposition need not mean ordinary multiplication.

> [!definition] Group
> A **group** is a set $G$ with a binary operation $*:G\times G\to G$ that is **associative**, has a two-sided **identity**, and gives every element a two-sided **inverse**. These are axioms; the cancellation rules and other familiar properties must be proved.

A **group** $(G,*)$ satisfies three further conditions:

1. **Associativity:** $(ab)c=a(bc)$ for every $a,b,c\in G$.
2. **Identity:** there is an $e\in G$ such that $ea=ae=a$ for every $a\in G$.
3. **Inverses:** for each $a\in G$ there is a $b\in G$ such that $ab=ba=e$.

The symbol $e$ denotes the identity. The inverse will be written $a^{-1}$, read "a inverse," once uniqueness has been proved.

> [!distinction] Associativity is not commutativity
> **Associativity** permits regrouping: $(ab)c=a(bc)$. **Commutativity** permits reordering: $ab=ba$. Every group is associative, but only an **abelian group** is commutative. Those are different laws.

The operation need not be commutative. A group satisfying $ab=ba$ for all $a,b$ is called **abelian**. The group axioms deliberately distinguish associativity, which is mandatory, from commutativity, which is optional.

### Why examples really satisfy the axioms

**Integer addition:** take $G=\mathbb Z$ and $a*b=a+b$. The integer construction already proved associativity, identity $0$, and inverse $-a$. Since addition is commutative this group is abelian.

**Nonzero rational multiplication:** take $G=\mathbb Q\setminus\{0\}$. The rational field construction proves closure of products of nonzero elements, associativity, identity $1$, and reciprocal $a^{-1}$. This is also abelian.

**Bijections:** let $X$ be a set and $S_X$ all bijections $X\to X$. Composition $f\circ g$ means "apply $g$, then $f$." Composition of functions is associative; the identity function is an identity; and every bijection has an inverse. Thus $S_X$ is a group. This argument never uses numbers. For $X=\{1,2,3\}$, there are $3\cdot2\cdot1=6$ bijections.

A nonempty subset of the integers is **not** automatically a group under addition. For instance, the positive integers contain neither $0$ nor additive inverses.

## The first consequences of the axioms

### Identity and inverse are unique

Suppose $e$ and $u$ are both two-sided identities. Then

$$
e=eu=u,
$$

using the identity property of $u$ for the first equality and of $e$ for the second. So the identity is unique.

If $b$ and $c$ are both inverses of $a$, then

$$
b=be=b(ac)=(ba)c=ec=c.
$$

Every element therefore has **one** inverse, so the notation $a^{-1}$ is unambiguous.

We can prove the **product inverse rule** without assuming commutativity:

$$
\boxed{(ab)^{-1}=b^{-1}a^{-1}.}
$$

Indeed,

$$
(ab)(b^{-1}a^{-1})
=a(bb^{-1})a^{-1}=aa^{-1}=e
$$

and, in the other order, $(b^{-1}a^{-1})(ab)=e$. Uniqueness proves the formula. The order **reverses** when an entire product is inverted. Also $(a^{-1})^{-1}=a$ and $e^{-1}=e$ by inverse uniqueness.

### Cancellation is a theorem

> [!proof] Derive cancellation from inverses
> If $ab=ac$, **left-multiply** by $a^{-1}$ and regroup using associativity. Since $a^{-1}a=e$, both leading factors disappear and $b=c$. The hypothesis that $a$ belongs to a group supplies the inverse; cancellation is **not** an independent axiom.


If $ab=ac$, multiply on the **left** by $a^{-1}$:

$$
a^{-1}(ab)=a^{-1}(ac)
\Longrightarrow (a^{-1}a)b=(a^{-1}a)c
\Longrightarrow b=c.
$$

Similarly $ba=ca\Longrightarrow b=c$, by multiplying on the **right**. These are separate laws; swapping the side of a factor is generally invalid.

### Equations have unique solutions

The equation $ax=b$ has solution $x=a^{-1}b$; substituting gives $a(a^{-1}b)=b$. It is unique by left cancellation. The equation $ya=b$ similarly has unique solution $y=ba^{-1}$.

**Worked example in a noncommutative group.** Let $a,b$ be permutations. The solution to $ax=b$ is $a^{-1}b$, **not** generally $ba^{-1}$. The distinction is visible if $a=(1\ 2)$ and $b=(2\ 3)$ in $S_{\{1,2,3\}}$: the products $ab$ and $ba$ send vertex $1$ to different places.

### The Latin-square property

For any fixed $a$, the left translation $L_a:G\to G$, $L_a(x)=ax$, is a bijection, with inverse $L_{a^{-1}}$. Similarly right translation $R_a(x)=xa$ is bijective.

When $G$ is finite, the **Cayley table** of its operation contains every element exactly once in each row and exactly once in each column. This is a consequence of translation bijectivity, not an additional axiom. The converse requires an associative operation with an appropriate identity; an arbitrary Latin square need not be a group.

## Powers and element order

For $a\in G$, define $a^0=e$, $a^{n+1}=a^na$ for natural $n$, and $a^{-n}=(a^{-1})^n$. Read $a^k$ as "a to the integer power k." Associativity proves by induction that

$$
\boxed{a^{m+n}=a^ma^n,\qquad (a^m)^n=a^{mn}}
$$

for all integers $m,n$. For negative exponents use $a^na^{-n}=e$ and inverse uniqueness; no commutativity between different group elements is involved because these formulas use powers of **one** element.

The **order of an element** $a$, written $\operatorname{ord}(a)$, is the least positive integer $n$ with $a^n=e$, when such an $n$ exists. If no such positive integer exists, $a$ has **infinite order**. Do not confuse the order of an element with the number of elements in the whole group.

**Lemma (divisibility of exponents):** if $\operatorname{ord}(a)=d<\infty$, then

$$
\boxed{a^k=e\quad\Longleftrightarrow\quad d\mid k}
$$

for every integer $k$. The symbol $\mid$ is read "divides." Apply integer division with remainder $k=qd+r$, $0\leq r<d$. Then $a^k=(a^d)^qa^r=a^r$. By minimality of $d$, the equality $a^r=e$ forces $r=0$. The converse follows from $(a^d)^q=e$.

**Worked example:** in the additive group $\mathbb Z/7\mathbb Z$, the element $2$ has order $7$, since its multiples $2,4,6,1,3,5,0$ reach zero for the first time on the seventh addition. In contrast, in the multiplicative group of nonzero residues modulo $7$, the element $2$ has order $3$, because $2,4,1$ is the power cycle.

## Subgroups and their tests

A **subgroup** $H\leq G$ is a subset which is a group under the *same* operation. The symbol $\leq$ here means "is a subgroup of," not numerical less-than.

**Subgroup test:** a nonempty subset $H\subseteq G$ is a subgroup if and only if it is closed under the operation and inverses.

**Proof.** If $H$ is a subgroup, those properties hold by definition. Conversely choose $h\in H$. Since $h^{-1}\in H$ and products remain in $H$, the product $hh^{-1}=e$ lies in $H$. Associativity is inherited from $G$. All group axioms therefore hold.

A convenient **one-step subgroup test** says: a nonempty $H$ is a subgroup exactly when $ab^{-1}\in H$ for every $a,b\in H$. To see sufficiency, put $a=b$ to get $e\in H$; then put $a=e$ to get $b^{-1}\in H$; closure under products follows by applying the test to $a$ and $b^{-1}$. Necessity follows from closure and inverses.

**Example:** the even integers $2\mathbb Z$ form a subgroup of $(\mathbb Z,+)$. They contain zero, the sum of even integers is even, and the negative of an even integer is even.

**Intersections:** the intersection of any nonempty family of subgroups is a subgroup, because every subgroup contains $e$ and every subgroup is closed under products and inverses. The intersection of an empty family is conventionally $G$ and is also a subgroup.

### Generated subgroups

Given a subset $A\subseteq G$, define the **subgroup generated by** $A$ as

$$
\boxed{\langle A\rangle
=\bigcap\{H\leq G:A\subseteq H\}.}
$$

Read $\langle A\rangle$ as "the subgroup generated by A." The family is nonempty because it includes $G$, so the intersection is a subgroup. It contains $A$ and lies inside every subgroup containing $A$, making it the **smallest** subgroup containing $A$.

Equivalently, $\langle A\rangle$ consists of all finite products $a_1^{\varepsilon_1}\cdots a_k^{\varepsilon_k}$ with $a_i\in A$ and each $\varepsilon_i$ equal to $1$ or $-1$, including the empty product $e$. The finite-product set is a subgroup, since inverses reverse factor order, and is contained in every subgroup containing $A$. Therefore it equals the intersection.

## Cyclic groups

A group is **cyclic** when some single element generates it: $G=\langle a\rangle=\{a^k:k\in\mathbb Z\}$.

If $a$ has infinite order, the map $\mathbb Z\to\langle a\rangle$ defined by $k\mapsto a^k$ is bijective and respects addition: $a^{m+n}=a^ma^n$. So every infinite cyclic group is isomorphic to $(\mathbb Z,+)$.

If $a$ has finite order $d$, the same map factors through the integer congruence classes modulo $d$. Two exponents give the same power exactly when $a^{m-n}=e$, or equivalently $d\mid(m-n)$. Thus

$$
\boxed{\langle a\rangle\cong\mathbb Z/d\mathbb Z.}
$$

Read $\cong$ as "is isomorphic to." The equivalence is established directly by exponent divisibility; the general isomorphism theorem comes in the next chapter.

Consequently **every cyclic group is abelian**, since $a^ma^n=a^{m+n}=a^{n+m}=a^na^m$.

### Generators and subgroups of a finite cyclic group

Suppose $G=\langle a\rangle$ has order $n$. The element $a^k$ generates $G$ exactly when $\gcd(k,n)=1$.

**Proof.** If $d=\gcd(k,n)>1$, all powers of $a^k$ have exponents divisible by $d$, so none equals $a$; hence $a^k$ does not generate. If $\gcd(k,n)=1$, Bézout's identity gives integers $u,v$ with $uk+vn=1$. Therefore $(a^k)^u=a^{uk}=a^{1-vn}=a$, so $a^k$ generates.

**Worked example:** in $\mathbb Z/12\mathbb Z$ under addition, $5$ generates all twelve residues because $\gcd(5,12)=1$. The element $4$ generates only $\{0,4,8\}$, a subgroup of order $3$.

Every subgroup of a cyclic group is cyclic. For an infinite cyclic group, any nontrivial subgroup of $\langle a\rangle$ contains a least positive exponent $d$ with $a^d$ in it. Integer division of any exponent $k=qd+r$ and subgroup closure shows $a^r$ is in the subgroup; minimality forces $r=0$. Therefore that subgroup is $\langle a^d\rangle$. The finite case uses the same argument after taking a positive exponent whose power lies in the subgroup, with the trivial subgroup generated by $e$ handled separately.

## Cosets: turning a subgroup into a partition

Let $H\leq G$. For $g\in G$, the **left coset** is

$$
\boxed{gH=\{gh:h\in H\}.}
$$

Read $gH$ as "g H" or "the left coset of H by g." A **right coset** is $Hg=\{hg:h\in H\}$; left and right cosets need not coincide.

**Coset equality test:**

$$
\boxed{aH=bH\quad\Longleftrightarrow\quad b^{-1}a\in H.}
$$

**Proof.** If $aH=bH$, then $a\in bH$ because $e\in H$, so $a=bh$ for some $h\in H$ and $b^{-1}a=h\in H$. Conversely if $b^{-1}a=h\in H$, then $a=bh$ and $aH=bhH=bH$ because $hH=H$ (multiplication by $h$ is a bijection of $H$).

Two left cosets are either identical or disjoint. If $x\in aH\cap bH$, write $x=ah_1=bh_2$; then $b^{-1}a=h_2h_1^{-1}\in H$, so they coincide. Every $g\in G$ lies in $gH$ because $e\in H$. Therefore the left cosets form a **partition** of $G$.

### Lagrange's theorem, completely proved

> [!theorem] Lagrange's theorem
> For a **finite** group $G$ and subgroup $H$, the index of $H$ counts equal-sized left cosets, giving $|G|=[G:H]|H|$. In particular, the order of a subgroup divides the order of the group.


For finite $G$, left multiplication $h\mapsto gh$ is a bijection $H\to gH$, with inverse $x\mapsto g^{-1}x$. Thus **every coset has exactly $|H|$ elements**. Here $|H|$ denotes the cardinality, read "the number of elements of H."

Let $[G:H]$ (read "the index of H in G") be the number of distinct left cosets. The cosets partition $G$ into $[G:H]$ disjoint blocks of size $|H|$. Hence

$$
\boxed{|G|=[G:H]\,|H|.}
$$

This is <span class="ed-term ed-term--theorem">Lagrange's theorem</span>. In particular, $|H|$ divides $|G|.

Take $H=\langle a\rangle$. Its size is $\operatorname{ord}(a)$, so every element's order divides $|G|$. Consequently, for every $a$ in a finite group,

$$
\boxed{a^{|G|}=e.}
$$

If $|G|$ is prime, every nonidentity element has order greater than one and dividing that prime, so its order is $|G|$ and it generates $G$. **Every group of prime order is cyclic.**

**Important limitation:** Lagrange gives necessary divisibility, not existence of a subgroup for every divisor. The assertion that a group of order $12$ has a subgroup of order $6$, for instance, does not follow from Lagrange alone.

### Fermat's little theorem from group theory

For prime $p$, Bézout's identity proves each nonzero class modulo $p$ has a multiplicative inverse: if $p\nmid a$, then $\gcd(a,p)=1$ and some integers $u,v$ satisfy $ua+vp=1$. Thus the $p-1$ nonzero residue classes form a group under multiplication.

Lagrange applied to this group proves

$$
\boxed{a^{p-1}\equiv1\pmod p\qquad(p\nmid a).}
$$

This is **Fermat's little theorem**, and it does **not** say every nonzero residue has order $p-1$. It only says its order **divides** $p-1$.

> [!example] Element order is not always group order
> Modulo $7$, the powers of $2$ are $2,4,1$, so $\operatorname{ord}(2)=3$, yet $2^6=(2^3)^2\equiv1$. Lagrange establishes **divisibility of the order**, not that every nonidentity element generates the full group.

## What has been proved and what comes next?

| Result | Depends on |
| --- | --- |
| Uniqueness of identity and inverses | associativity, identity, inverse axioms |
| Cancellation and solving $ax=b$ | inverse existence |
| Subgroup test | closure, identity, inverses |
| Cyclic-group classification | exponent laws and integer divisibility |
| Coset partition | subgroup closure and inverses |
| Lagrange's theorem | coset partition and bijection $H\to gH$ |
| Fermat's theorem | Bézout's identity and Lagrange's theorem |

One thing is **not** yet defined: multiplying *cosets themselves*. The fact that $gH$ and $Hg$ are different in general is the obstruction. [Homomorphisms & Quotient Groups](./group-homomorphisms-quotients) explains the exact condition, called **normality**, that makes quotient multiplication well-defined.
