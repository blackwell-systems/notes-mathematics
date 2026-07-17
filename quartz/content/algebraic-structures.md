---
title: "Algebraic Structures"
prerequisites: ["number-systems"]
enables: ["linear-algebra-foundations", "algebraic-geometry"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Number Systems](./number-systems)
> **Leads to:** [Linear Algebra Foundations](./linear-algebra-foundations) · [Algebraic Geometry](./algebraic-geometry)


## Why name the obvious?

When you rewrite $2 + 3$ as $3 + 2$, factor $6x + 6y$ into $6(x+y)$, or cancel the $5$ in $5a = 5b$ to conclude $a = b$, you are using rules so familiar they feel like nothing at all. But each of these moves rests on a specific property of numbers, and those properties are neither obvious nor automatic. Change the setting slightly (to matrices, to remainders after division, to symmetries of a shape) and some of them quietly fail.

This page does two things. First, it names the small set of properties that ordinary arithmetic silently assumes, the ones the rest of this site takes for granted whenever it rearranges, factors, or cancels. Second, it shows that these same properties reappear on many different sets, and that mathematicians have given names to the recurring patterns: **group**, **ring**, **field**. Learning that vocabulary is worthwhile because it explains *why* algebra works, and because the same handful of laws unify structures you meet in [Linear Algebra Foundations](./linear-algebra-foundations), [Number Theory](./number-theory), and [Set Theory](./set-theory).

We work throughout with the number systems introduced on [Number Systems](./number-systems): the integers $\mathbb{Z}$, rationals $\mathbb{Q}$, reals $\mathbb{R}$, and complex numbers $\mathbb{C}$.

## The field axioms of the real numbers

The real numbers come equipped with two operations, addition ($+$, read "plus") and multiplication ($\times$ or $\cdot$, read "times"). Every rule of high-school algebra is a consequence of a short list of axioms these operations obey. An **axiom** is a property we take as a starting assumption rather than prove.

Let $a$, $b$, $c$ be any real numbers. The axioms come in matched pairs, one for each operation.

- **Closure.** Adding or multiplying two reals gives a real. The set does not "leak." Example: $2 + 3 = 5$ and $2 \cdot 3 = 6$ are both real.
- **Associativity.** Grouping does not matter: $(a+b)+c = a+(b+c)$. So we can write $a+b+c$ without parentheses. Example: $(1+2)+3 = 1+(2+3) = 6$.
- **Commutativity.** Order does not matter: $a+b = b+a$. Example: $4 \cdot 5 = 5 \cdot 4 = 20$.
- **Identity.** There is a special element that leaves everything unchanged. For addition it is $0$ (since $a+0 = a$); for multiplication it is $1$ (since $a \cdot 1 = a$).
- **Inverses.** Every element can be "undone." For addition, each $a$ has an additive inverse $-a$ with $a + (-a) = 0$. For multiplication, each $a \neq 0$ has a multiplicative inverse $1/a$ with $a \cdot (1/a) = 1$. (Zero is excluded here, for a reason we derive below.)

These ten properties (five for each operation) govern the operations separately. One further axiom links them:

- **Distributivity.** Multiplication distributes over addition: $a(b+c) = ab + ac$. Example: $3(4+5) = 3\cdot 4 + 3 \cdot 5 = 12 + 15 = 27$. This is the single axiom that lets us expand brackets and, read backwards, factor.

The full list, side by side:

| Axiom | Addition | Multiplication |
|---|---|---|
| Closure | $a+b \in \mathbb{R}$ | $a\cdot b \in \mathbb{R}$ |
| Associativity | $(a+b)+c = a+(b+c)$ | $(ab)c = a(bc)$ |
| Commutativity | $a+b = b+a$ | $ab = ba$ |
| Identity | $a+0 = a$ | $a\cdot 1 = a$ |
| Inverses | $a + (-a) = 0$ | $a\cdot(1/a) = 1,\ a\neq 0$ |
| Distributivity | $a(b+c) = ab + ac$ | (links $+$ and $\times$) |

A set with two operations satisfying all of these axioms is called a **field**. The rationals $\mathbb{Q}$, the reals $\mathbb{R}$, and the complex numbers $\mathbb{C}$ are all fields: they satisfy every axiom above. The integers $\mathbb{Z}$ satisfy all of them except one. Every integer has an additive inverse (the negative), but $2$ has no *integer* multiplicative inverse, since $1/2$ is not an integer. So $\mathbb{Z}$ fails only the multiplicative-inverse axiom. This single failure is exactly what separates a **ring** (defined below) from a field.

## The order axioms

The field axioms say nothing about *size*: they hold equally for $\mathbb{C}$, where "less than" makes no sense. The real numbers carry extra structure, a notion of order written $<$ (read "is less than"), governed by its own axioms. For all real $a$, $b$, $c$:

- **Trichotomy.** Exactly one of $a < b$, $a = b$, or $a > b$ holds. Any two reals can be compared, and in exactly one way.
- **Transitivity.** If $a < b$ and $b < c$, then $a < c$. Order chains together.
- **Compatibility with addition.** If $a < b$, then $a + c < b + c$. Adding the same amount to both sides preserves the inequality.
- **Compatibility with multiplication.** If $a < b$ and $c > 0$, then $ac < bc$. Multiplying by a *positive* number preserves the inequality. If instead $c < 0$, the inequality *flips*: $ac > bc$.

That last rule is the one people forget: multiplying or dividing an inequality by a negative number reverses its direction. From $-2 < 3$, multiplying by $-1$ gives $2 > -3$. These axioms and their consequences are developed further, with worked examples, on [Inequalities](./inequalities). A field carrying such an order is called an **ordered field**; $\mathbb{Q}$ and $\mathbb{R}$ are ordered fields, while $\mathbb{C}$ is not.

## Derived rules: consequences, not assumptions

A striking feature of the axioms is how much they force. Many rules that feel like separate facts are actually *theorems*, provable from the list above. Nothing new needs to be assumed. Here are the most useful, with short derivations.

**Multiplying by zero gives zero: $a \cdot 0 = 0$.** This is not an axiom; $0$ is only defined as the additive identity. We derive it. Since $0 + 0 = 0$ (identity), distributivity gives

$$a \cdot 0 = a\cdot(0 + 0) = a\cdot 0 + a \cdot 0.$$

Now add the additive inverse $-(a\cdot 0)$ to both sides. The left side becomes $0$, and the right side becomes $a\cdot 0$, so $0 = a\cdot 0$. The only thing we used was distributivity and the existence of additive inverses.

**Negation is multiplication by $-1$: $(-1)\cdot a = -a$.** We check that $(-1)\cdot a$ behaves like the additive inverse of $a$, which is unique (see below). Compute $a + (-1)\cdot a = 1\cdot a + (-1)\cdot a = (1 + (-1))\cdot a = 0 \cdot a = 0$, using the identity, distributivity, and the previous result. So $(-1)\cdot a$ added to $a$ gives $0$, which means it *is* $-a$.

**A negative times a negative is positive: $(-1)(-1) = 1$.** Apply the rule just proved with $a = -1$: $(-1)\cdot(-1) = -(-1)$. And $-(-1) = 1$, because $1$ is the additive inverse of $-1$ (their sum is $0$) and inverses are unique. Hence $(-1)(-1) = 1$. This is why the "two negatives make a positive" rule is not an arbitrary convention: it is forced by distributivity.

**Cancellation law.** If $a \neq 0$ and $ab = ac$, then $b = c$. Because $a \neq 0$, it has a multiplicative inverse $1/a$. Multiply both sides by it: $(1/a)(ab) = (1/a)(ac)$, so by associativity $b = c$. Cancellation is not a primitive move; it is "multiply both sides by the inverse" in disguise. Note the crucial hypothesis $a \neq 0$: you may never cancel a factor that could be zero.

**Uniqueness of identities and inverses.** Suppose $0$ and $0'$ were both additive identities. Then $0 = 0 + 0' = 0'$ (using each as the identity in turn), so there is only one. The same argument gives a unique multiplicative identity. Inverses are unique too: if $b$ and $b'$ are both additive inverses of $a$, then $b = b + 0 = b + (a + b') = (b + a) + b' = 0 + b' = b'$. This uniqueness is what lets us write "$-a$" and "$1/a$" as if they name single, definite elements.

**Why division by zero is undefined.** Division by $a$ means multiplication by the inverse $1/a$, the element satisfying $a \cdot (1/a) = 1$. For $a = 0$ we would need some $x$ with $0 \cdot x = 1$. But we just proved $0 \cdot x = 0$ for every $x$, and $0 \neq 1$ in any field. No such $x$ exists, so $1/0$ names nothing. Division by zero is left undefined not by fiat but because the axioms make the required element impossible.

## A bridge to abstract algebra

Look again at what we actually used. The derivations above never mentioned that $a$ was a *number*. They used only associativity, identities, inverses, and distributivity. So the same reasoning must work on *any* set whose operations obey those laws, whether the elements are numbers, matrices, functions, or symmetries. This is the central move of abstract algebra: instead of proving a fact over and over on each new set, name the pattern once and prove things about the pattern.

The three patterns you meet first are the group, the ring, and the field. Each is just a set together with operations satisfying a prescribed subset of the axioms above.

### Group

![Two Cayley tables, each showing a finite group's entire operation as a grid: the integers modulo 4 under addition, and the nonzero elements of the field F5 under multiplication modulo 5. The identity is highlighted, and because each value appears exactly once in every row and column (a Latin square) every element has a unique inverse; in F5, 2 times 3 equals 1, so the inverse of 2 is 3](./media/as-group-cayley-table.png)

A **group** is a set $G$ with one operation (call it $*$) satisfying three axioms: the operation is *associative*, there is an *identity* element $e$ with $e * a = a * e = a$, and every element $a$ has an *inverse* $a^{-1}$ with $a * a^{-1} = a^{-1} * a = e$. That is all. If the operation is also commutative ($a * b = b * a$), the group is called **abelian** (after Niels Abel). A group is the minimal setting in which "undoing" always makes sense.

Examples:

- $(\mathbb{Z}, +)$: the integers under addition. The identity is $0$, the inverse of $n$ is $-n$. Abelian.
- The nonzero rationals $\mathbb{Q}^{\times} = \mathbb{Q}\setminus\{0\}$ under multiplication. The identity is $1$, the inverse of $p/q$ is $q/p$. Abelian. (Zero must be removed, since it has no inverse.)
- Symmetries of a square, or permutations of a finite set, under composition. Here order usually matters, so these groups are *not* abelian: doing rotation-then-flip differs from flip-then-rotation.
- $\mathbb{Z}/n\mathbb{Z}$, the integers modulo $n$, under addition. This is "clock arithmetic," where $n \equiv 0$. It is the working setting of modular arithmetic on [Number Theory](./number-theory), and it is a finite abelian group.

![The six symmetries of an equilateral triangle shown as relabelings of its vertices: the identity, rotations by 120 and 240 degrees, and three reflections across axes through a vertex. Together they form a group under composition that is non-abelian, since rotating then flipping gives a different result from flipping then rotating](./media/as-symmetry-group.png)

**Worked example: verifying $(\mathbb{Z}/4\mathbb{Z}, +)$ is a group.** Take the four remainders $\{0, 1, 2, 3\}$ with addition modulo $4$ (so $3 + 2 = 5 \equiv 1$). Check the axioms directly:
- **Associativity** is inherited from ordinary integer addition, and reducing mod $4$ at the end changes nothing.
- **Identity:** $0$ works, since $a + 0 = a$ for every element.
- **Inverses:** each element has exactly one partner summing to $0 \pmod 4$: $\ -0 = 0$, $\ -1 = 3$ (since $1 + 3 = 4 \equiv 0$), $\ -2 = 2$ (since $2 + 2 = 4 \equiv 0$), and $\ -3 = 1$.

All hold, and addition is commutative, so $(\mathbb{Z}/4\mathbb{Z}, +)$ is a finite abelian group of four elements.

**Reading a Cayley table.** The table above lays out the *entire* operation as a grid, one row and column per element, and two features can be read straight off it. The **identity** is the element whose row simply repeats the column headers (the $0$-row for $+$, the $1$-row for $\times$). To find any element's **inverse**, scan along its row for the identity and read the column it lands in: in the $\mathbb{F}_5$ multiplication table, the $2$-row hits $1$ in the $3$-column, so $2^{-1} = 3$. And because every value appears *exactly once* in each row and column (the **Latin-square** property, forced by the group axioms), every element has exactly one inverse, no more and no less.

**Worked example: the triangle's symmetries do not commute.** Label the corners $1, 2, 3$. Let $r$ be the $120°$ rotation ($1 \to 2 \to 3 \to 1$) and $f$ the reflection fixing corner $1$ (so $1 \to 1$ and $2 \leftrightarrow 3$). Composition means "do the first, then the second," and we track where each corner ends up.

*Rotate then reflect* ($f \circ r$): $\ 1 \xrightarrow{r} 2 \xrightarrow{f} 3$, $\ 2 \xrightarrow{r} 3 \xrightarrow{f} 2$, $\ 3 \xrightarrow{r} 1 \xrightarrow{f} 1$. Net effect $1 \to 3,\ 2 \to 2,\ 3 \to 1$: the reflection that *fixes corner 2*.

*Reflect then rotate* ($r \circ f$): $\ 1 \xrightarrow{f} 1 \xrightarrow{r} 2$, $\ 2 \xrightarrow{f} 3 \xrightarrow{r} 1$, $\ 3 \xrightarrow{f} 2 \xrightarrow{r} 3$. Net effect $1 \to 2,\ 2 \to 1,\ 3 \to 3$: the reflection that *fixes corner 3*.

The two orders yield *different* symmetries (one fixes corner 2, the other corner 3), so $f \circ r \neq r \circ f$. That is a concrete witness that the triangle's symmetry group is **non-abelian**: unlike with numbers, here the order of operations genuinely matters.

### Ring

A **ring** is a set $R$ with *two* operations, $+$ and $\times$, such that $R$ is an abelian group under $+$ (giving $0$, negatives, commutativity of addition), multiplication is associative and has an identity element $1$ (with $1 \cdot a = a \cdot 1 = a$), and multiplication distributes over addition. What a ring does *not* require is multiplicative inverses, or even commutativity of multiplication. So a ring is a field with the multiplicative-inverse axiom (and possibly commutativity of $\times$) dropped.

Examples:

- $\mathbb{Z}$, the integers. A commutative ring that is not a field, precisely because $2$ has no integer inverse.
- Polynomials with real coefficients, $\mathbb{R}[x]$. Sums and products of polynomials are polynomials, and all the ring axioms hold, but $x$ has no polynomial inverse. See [Polynomial Functions](./polynomial-functions).
- $n \times n$ matrices over $\mathbb{R}$, under matrix addition and multiplication. This is a ring in which multiplication is *not* commutative ($AB \neq BA$ in general), a natural example of a **noncommutative ring**. See [Matrices](./matrices).
- $\mathbb{Z}/n\mathbb{Z}$ again, now with both addition and multiplication modulo $n$: a finite commutative ring.

**Worked example: matrix multiplication is not commutative.** The claim "$AB \neq BA$ in general" deserves a concrete witness. Take
$$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}.$$
Multiplying row-by-column,
$$AB = \begin{pmatrix} 1\cdot1 + 1\cdot1 & 1\cdot0 + 1\cdot1 \\ 0\cdot1 + 1\cdot1 & 0\cdot0 + 1\cdot1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \qquad BA = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}.$$
Since $AB \neq BA$, the $2 \times 2$ matrices form a ring whose multiplication is *not* commutative, a **noncommutative ring**. (They also fail to be a field for a second reason: a nonzero matrix with determinant $0$ has no inverse at all. The polynomial ring $\mathbb{R}[x]$ shows the same gap more simply, $x$ is nonzero yet no polynomial times $x$ equals $1$.)

### Field

![A structural diagram of a field as two abelian groups glued by distributivity: the whole set under addition is an abelian group with identity 0 and negatives, the nonzero elements under multiplication form an abelian group with identity 1 and reciprocals, and distributivity, a times the quantity b plus c equals ab plus ac, links the two, with examples the rationals, reals, complex numbers, and the prime fields Fp](./media/as-field-structure.png)

A **field** is a commutative ring in which every nonzero element has a multiplicative inverse. Equivalently, it is a set satisfying the full field-axiom table from the top of this page. Fields are the sets where you can add, subtract, multiply, and divide (except by zero) freely, which is exactly the arithmetic you are used to.

Examples:

- $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$: the familiar number fields.
- $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$ for a *prime* $p$: a finite field with exactly $p$ elements. When (and only when) the modulus is prime, every nonzero residue has an inverse, so the ring $\mathbb{Z}/p\mathbb{Z}$ becomes a field. For instance in $\mathbb{F}_5$, the inverse of $2$ is $3$, since $2 \cdot 3 = 6 \equiv 1 \pmod 5$.

**Worked example: why $\mathbb{Z}/n\mathbb{Z}$ is a field exactly when $n$ is prime.** The only difference between a ring and a field is whether nonzero elements can be *inverted*, so let us hunt for inverses directly.

In $\mathbb{F}_5 = \mathbb{Z}/5\mathbb{Z}$, inverting $2$ means finding $x$ with $2x \equiv 1 \pmod 5$. Run through the residues: $2\cdot1 = 2$, $2\cdot2 = 4$, $2\cdot3 = 6 \equiv 1$. Found it, $2^{-1} = 3$. (For a small modulus, scanning residues is quickest; for a large one, the [extended Euclidean algorithm](./number-theory) produces the inverse directly.) Every nonzero residue mod $5$ has an inverse this way, so $\mathbb{F}_5$ is a field.

Now try the *composite* modulus $6$. Inverting $2$ in $\mathbb{Z}/6\mathbb{Z}$ would need $2x \equiv 1 \pmod 6$, but the products $2\cdot0, 2\cdot1, \ldots, 2\cdot5$ run $0, 2, 4, 0, 2, 4$ and **never reach $1$**, so $2$ has no inverse and $\mathbb{Z}/6\mathbb{Z}$ is only a ring. The reason is written in that list: $2 \cdot 3 = 6 \equiv 0$ with *neither factor zero*. An element like this is a **zero divisor**, and a zero divisor can never be invertible, because multiplying $2 \cdot 3 = 0$ through by a hypothetical $2^{-1}$ would force $3 = 0$. Zero divisors appear exactly when $n$ is composite (its proper factors multiply to $0$), which is precisely why $\mathbb{Z}/n\mathbb{Z}$ is a field **if and only if $n$ is prime**.

Summary:

| Structure | Operations | Key extra requirement | Examples |
|---|---|---|---|
| Group | one ($*$) | identity and inverses; associative | $(\mathbb{Z},+)$; $\mathbb{Q}^\times$; permutations; $\mathbb{Z}/n\mathbb{Z}$ |
| Ring | two ($+$, $\times$) | abelian group under $+$; $\times$ associative and distributes | $\mathbb{Z}$; $\mathbb{R}[x]$; $n\times n$ matrices; $\mathbb{Z}/n\mathbb{Z}$ |
| Field | two ($+$, $\times$) | commutative ring; every nonzero element has a $\times$-inverse | $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$; $\mathbb{F}_p$ |

The three are related, but not all by simple containment. Every field *is* a ring (it satisfies extra axioms: commutative multiplication, and inverses for nonzero elements). A ring, on the other hand, is not a special *kind* of group, because it carries a second operation that a group does not have; what is true is that every ring is an abelian group under its addition alone. So each step inward adds structure: a second operation takes you from a group to a ring, and multiplicative inverses take you from a ring to a field.

![Groups, rings, and fields drawn as levels of increasing structure: a ring is an abelian group under addition equipped with a second operation, and a field is a ring in which every nonzero element has a multiplicative inverse, with example sets labeled in each level](./media/algebraic-structures-hierarchy.png)

## Maps and substructures

Naming the structures is half the story; the other half is how they relate to one another. Two ideas do most of that work: maps that *preserve* structure, and subsets that *are* structures in their own right.

### Homomorphisms: structure-preserving maps

A **homomorphism** (read "homo-morph-ism," meaning "same shape") is a map $\varphi: G \to H$ between two structures of the same kind that respects the operation:
$$\varphi(a * b) = \varphi(a) \star \varphi(b),$$
where $*$ is the operation in $G$ and $\star$ the one in $H$. It carries the *pattern* of $G$ faithfully into $H$: combine-then-map and map-then-combine land in the same place.

**Worked example: reduction modulo $4$.** Define $\varphi: (\mathbb{Z}, +) \to (\mathbb{Z}/4\mathbb{Z}, +)$ by $\varphi(n) = n \bmod 4$. Is it a homomorphism? Check $\varphi(a + b) = \varphi(a) + \varphi(b)$ on $a = 5, b = 6$: the left side is $\varphi(11) = 11 \bmod 4 = 3$, and the right side is $\varphi(5) + \varphi(6) = 1 + 2 = 3$. They agree, and in general $(a + b) \bmod 4 = \big((a \bmod 4) + (b \bmod 4)\big) \bmod 4$, so reduction *is* a homomorphism: it copies the addition of $\mathbb{Z}$ faithfully onto the four-element clock.

A homomorphism that is also a *bijection* is an **isomorphism**, and two isomorphic structures are indistinguishable as far as algebra is concerned, the same object with relabeled elements. A favorite case is $\exp: (\mathbb{R}, +) \to (\mathbb{R}_{>0}, \times)$, since $e^{a+b} = e^a e^b$ turns addition into multiplication; its inverse is the logarithm, which is exactly *why* logarithms convert products into sums.

### Subgroups: structures inside structures

A **subgroup** is a subset $H \subseteq G$ that is itself a group under $G$'s operation: it contains the identity and is closed under both the operation and inverses.

**Worked example: the even integers.** Inside $(\mathbb{Z}, +)$, the even integers $2\mathbb{Z} = \{\ldots, -2, 0, 2, 4, \ldots\}$ form a subgroup, since even $+$ even $=$ even (closed), $0$ is even (identity), and the negative of an even number is even (inverses). The *odd* integers do not: they miss $0$, and odd $+$ odd $=$ even leaks out of the set. Sliding the subgroup over by one, $1 + 2\mathbb{Z} = \{\text{odds}\}$, gives its one other **coset**, and the two cosets, evens and odds, partition $\mathbb{Z}$ into exactly the two elements of $\mathbb{Z}/2\mathbb{Z}$. A subgroup's cosets always partition the group into equal-sized blocks (this holds for any group, finite or not, as the evens/odds split of $\mathbb{Z}$ shows). When the group is *finite*, that tiling forces the subgroup's size to divide the group's, which is **Lagrange's theorem**.

## Where these structures show up

The payoff of this vocabulary is that once you recognize a structure, everything already proved about it is yours for free. A few places on this site where the same patterns recur:

- **Vector spaces are defined over a field.** The scalars you multiply vectors by must come from a field so that division and linear combinations behave. This is why the definition on [Linear Algebra Foundations](./linear-algebra-foundations) begins "let $F$ be a field."
- **Rings and their ideals are the working objects of geometry.** [Algebraic Geometry](./algebraic-geometry) studies solution sets of polynomial equations by studying the rings of polynomials that cut them out, translating geometric questions into ring theory.
- **Modular arithmetic is just the ring $\mathbb{Z}/n\mathbb{Z}$.** Every fact about remainders in [Number Theory](./number-theory) is a statement about this finite ring, and it is a field exactly when $n$ is prime.
- **Boolean algebra obeys the same laws.** The union and intersection of [set operations](./set-theory), and the "or" and "and" of [logical connectives](./propositional-logic-zeroth-order-logic), satisfy their own commutative, associative, and distributive laws, mirroring the axioms above. The abstract pattern there is called a Boolean algebra, and recognizing the shared structure is why the same simplification tricks work for sets, logic, and arithmetic alike.
- **Binary and hexadecimal** on [Number Bases](./number-bases) are the integers $\mathbb{Z}$ written differently: the underlying ring is unchanged, only the notation for its elements differs.

The lesson is not that abstraction is fancy, but that it is economical. Naming the pattern once means never having to reprove closure, cancellation, or "negative times negative" again on each new set you meet.
