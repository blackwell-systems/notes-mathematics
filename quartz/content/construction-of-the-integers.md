---
title: "Construction of the Integers"
prerequisites: ["peano-arithmetic"]
enables: ["construction-of-the-rationals"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Peano Arithmetic](./peano-arithmetic), including natural-number addition, multiplication, cancellation, order, and induction
> **Leads to:** [Construction of the Rationals](./construction-of-the-rationals) · [Number Systems](./number-systems) · [Algebraic Structures](./algebraic-structures)

The natural numbers can express $5+3$ but not $3-5$. We want to extend arithmetic so that **every** equation $b+x=a$ has a solution, while preserving the arithmetic we already proved. We cannot declare $a-b$ to be an integer and then use subtraction to construct it: subtraction is exactly the missing operation. Instead, we build integers using **pairs of natural numbers**, plus an equivalence relation that uses only known natural-number addition.

We will establish, in order: that our equality of representations is legitimate, that the proposed operations respect it, that the resulting system satisfies the ring laws, and that its order and division properties can be proved without assuming integers at the start.

## Before construction: what can we already use?

From [Peano Arithmetic](./peano-arithmetic) we may use the following natural-number theorems:

- Addition and multiplication are closed, associative, and commutative; zero is the additive identity and one the multiplicative identity.
- Multiplication distributes over addition.
- Addition cancellation: $u+w=v+w$ implies $u=v$.
- $u\leq v$ means that $v=u+k$ for some $k\in\mathbb N$; the order is total and compatible with both operations.
- A natural-number sum is zero only when both summands are zero.
- Induction and well-ordering hold.

When we cite any of these properties, we are using a **previously proved theorem**, not taking an integer law for granted.

## A pair is a proposed difference, not yet an integer

> [!definition] Differences before subtraction exists
> A natural pair $(a,b)$ stands for the intended difference $a-b$, but **does not rely on preexisting integer subtraction**. The equivalence relation defines when two such pairs represent the same integer.


Let

$$
D=\mathbb N\times\mathbb N.
$$

Read $\times$ here as "Cartesian product." Its elements are ordered pairs $(a,b)$. We *intend* $(a,b)$ to represent the difference "$a$ minus $b$," but this interpretation is motivation, not the definition.

For example, $(5,3)$, $(7,5)$, and $(2,0)$ should represent the same integer. To test equality **without subtraction**, define

$$
\boxed{(a,b)\sim(c,d)\quad\Longleftrightarrow\quad a+d=b+c.}\tag{Z1}
$$

Read $\sim$ as "is equivalent to." Notice that the right-hand side contains only natural-number addition. This is crucial: the construction cannot depend on the operation it is trying to create.

**Worked example: equal representations.** We have $(5,3)\sim(2,0)$ because $5+0=3+2=5$. But $(5,3)\not\sim(3,5)$, because $5+5=10\ne6=3+3$. The pair $(3,5)$ will represent a negative integer only **after** we have finished the construction.

## Prove that equivalence really is an equivalence relation

An **equivalence relation** must be reflexive, symmetric, and transitive. Otherwise the proposed "same integer" classes cannot be used as identities of mathematical objects.

**Reflexivity.** For every $(a,b)$, $a+b=b+a$ by natural addition commutativity. Thus $(a,b)\sim(a,b)$.

**Symmetry.** If $a+d=b+c$, commutativity and symmetry of equality give $c+b=d+a$. Thus $(c,d)\sim(a,b)$.

**Transitivity.** Suppose $(a,b)\sim(c,d)$ and $(c,d)\sim(e,f)$. By definition,

$$
a+d=b+c,\qquad c+f=d+e.
$$

Adding these equations gives

$$
(a+d)+(c+f)=(b+c)+(d+e).
$$

Reassociate and commute to obtain

$$
(a+f)+(c+d)=(b+e)+(c+d).
$$

Cancel the common natural-number sum $c+d$. We conclude $a+f=b+e$, precisely $(a,b)\sim(e,f)$.

**Dependency check:** transitivity relied on *natural addition cancellation*. We did not use integer subtraction to prove it.

## Integers are equivalence classes

The integer represented by $(a,b)$ is the set of all equivalent pairs:

$$
[(a,b)]=\{(c,d)\in D:(c,d)\sim(a,b)\}.
$$

Square brackets mean "the equivalence class of." Define

$$
\boxed{\mathbb Z:=D/{\sim}.}\tag{Z2}
$$

Read $D/{\sim}$ as "D modulo this equivalence relation." Two classes are equal exactly when their representing pairs are equivalent:

$$
[(a,b)]=[(c,d)]\quad\Longleftrightarrow\quad a+d=b+c.
$$

We write $0_{\mathbb Z}:=[(0,0)]$ and $1_{\mathbb Z}:=[(1,0)]$. The notation "$-2$" will eventually abbreviate $[(0,2)]$; it is **not** a primitive symbol needed for the construction.

**Worked example: an entire equivalence class.** The integer $[(2,0)]$ also contains $(3,1)$, $(4,2)$, $(5,3)$, and every $(2+k,k)$. It represents a single object with infinitely many encodings. Operations must return the same integer regardless of which encoding is used.

## Defining addition and proving independence of representatives

> [!distinction] A formula on representatives is not yet an operation on classes
> After proposing addition for pairs, prove that **equivalent input pairs always produce equivalent output pairs**. Without that well-definedness step, the purported integer operation depends on arbitrary representatives.


For classes $x=[(a,b)]$ and $y=[(c,d)]$, propose

$$
\boxed{x+y:=[(a+c,b+d)].}\tag{Z+}
$$

The proposed sum is a class of a pair of naturals, so **closure** is immediate. However, we still need **well-definedness**: replacing either input by an equivalent pair must not change the output class.

Suppose $(a,b)\sim(a',b')$ and $(c,d)\sim(c',d')$. We know

$$
a+b'=b+a',\qquad c+d'=d+c'.
$$

Adding these two equalities and rearranging with the known natural addition laws gives

$$
(a+c)+(b'+d')=(b+d)+(a'+c').
$$

This is exactly the condition

$$
(a+c,b+d)\sim(a'+c',b'+d').
$$

Therefore class addition is well-defined.

**Worked example: use two different encodings of the same operands.**

$$
[(5,3)]+[(1,4)]=[(6,7)].
$$

Represent the first operand instead by $(2,0)$ and the second by $(0,3)$. Then

$$
[(2,0)]+[(0,3)]=[(2,3)].
$$

The outputs agree because $6+3=7+2=9$, so $(6,7)\sim(2,3)$. We did not calculate "$2-3$" to decide equality.

## Addition laws and additive inverses

All the identities below concern **classes**, not merely their representatives.

**Associativity.**

$$
\begin{aligned}
([(a,b)]+[(c,d)])+[(e,f)]
 &=[((a+c)+e,(b+d)+f)]\\
 &=[(a+(c+e),b+(d+f))]\\
 &=[(a,b)]+([(c,d)]+[(e,f)]).
\end{aligned}
$$

The middle equality uses *natural addition associativity* componentwise.

**Commutativity.** Since $a+c=c+a$ and $b+d=d+b$, the pair for $x+y$ is the same as the pair for $y+x$.

**Identity.** $[(a,b)]+[(0,0)]=[(a+0,b+0)]=[(a,b)]$.

**Inverse.** Define

$$
\boxed{-[(a,b)]:=[(b,a)].}\tag{Z-}
$$

This must itself be well-defined. If $a+d=b+c$, the same equality rearranged gives $b+c=a+d$, proving $(b,a)\sim(d,c)$. Thus equivalent encodings have equivalent swapped pairs.

Now

$$
\begin{aligned}
[(a,b)]+[(b,a)]
  &=[(a+b,b+a)]\\
  &=[(0,0)]
\end{aligned}
$$

because $(a+b)+0=(b+a)+0$. Each integer therefore has an additive inverse.

An **abelian group** is a set with an associative, commutative operation, an identity, and inverses. We have proved, rather than stipulated, that $(\mathbb Z,+)$ is an abelian group.

Define subtraction by $x-y:=x+(-y)$, read "x minus y is x plus the additive inverse of y." Subtraction is now a genuine, everywhere-defined operation.

## Multiplication: constructing signs without assuming them

If our pairs behave as intended, the formal expansion

$$
(a-b)(c-d)=ac+bd-(ad+bc)
$$

suggests the following definition, written entirely in natural-number operations:

$$
\boxed{[(a,b)]\cdot[(c,d)]:=[(ac+bd,ad+bc)].}\tag{Z×}
$$

The right side is a valid pair of naturals, so closure holds. Again, **well-definedness comes first**: formal expansion is a motivation, not a proof about equivalence classes.

### Well-definedness of multiplication

First hold $(c,d)$ fixed, and suppose $(a,b)\sim(a',b')$, so $a+b'=b+a'$. Distributivity in $\mathbb N$ gives

$$
ac+b'c=bc+a'c,\qquad ad+b'd=bd+a'd.
$$

Use the first equality together with the **reverse** of the second equality, adding the matching sides and rearranging terms:

$$
(ac+bd)+(a'd+b'c)=(ad+bc)+(a'c+b'd).
$$

This is a sum of two valid natural-number equalities, with the second read in reverse. Ordinary multiplication by a formal difference $c-d$ has **not** been used.

This is the equivalence condition between

$$
(ac+bd,ad+bc)\quad\text{and}\quad(a'c+b'd,a'd+b'c).
$$

Thus changing the first representative leaves the product class unchanged. The same argument, exchanging the roles of the factors, shows that changing the second representative also leaves it unchanged. Two changes can be performed successively, proving full well-definedness.

**Worked example: a negative product with no negative primitive.**

$$
\begin{aligned}
[(0,2)]\cdot[(0,3)]
 &=[(0\cdot0+2\cdot3,\;0\cdot3+2\cdot0)]\\
 &=[(6,0)].
\end{aligned}
$$

In the notation now justified, $(-2)(-3)=6$. The positive result follows from the pair operation, not from assuming a memorized sign rule.

## Proving the ring properties

**Multiplicative identity.**

$$
[(a,b)]\cdot[(1,0)]=[(a\cdot1+b\cdot0,a\cdot0+b\cdot1)]=[(a,b)].
$$

**Commutativity.** Swap the factors in Z×. Natural multiplication and addition commutativity make the two resulting coordinates equal.

**Associativity.** Write $x=[(a,b)]$, $y=[(c,d)]$, and $z=[(e,f)]$. Computing $(xy)z$ yields the pair

$$
(ace+bde+adf+bcf,\quad acf+bdf+ade+bce).
$$

Computing $x(yz)$ yields

$$
(ace+adf+bcf+bde,\quad acf+ade+bce+bdf).
$$

Natural addition and multiplication associativity and commutativity show these coordinates are equal after rearrangement. Thus $(xy)z=x(yz)$.

**Distributivity.** Compute $x(y+z)$ from Z+ and Z×:

$$
\begin{aligned}
x(y+z)
=[(&a(c+e)+b(d+f),\\
   &a(d+f)+b(c+e))].
\end{aligned}
$$

Expand using **natural** distributivity, obtaining

$$
[(ac+ae+bd+bf,\quad ad+af+bc+be)].
$$

Now compute $xy+xz$ separately using Z× and Z+. Its two coordinates are the same four-term sums. Therefore $x(y+z)=xy+xz$. Distributivity on the other side follows by multiplication commutativity.

**Zero absorbs multiplication.** Directly from Z×,

$$
[(a,b)]\cdot[(0,0)]=[(0,0)].
$$

**The sign rules are consequences.** Multiplying $x+(-x)=0$ by $y$ and distributing gives $xy+(-x)y=0$. By uniqueness of additive inverses, $(-x)y=-(xy)$. Applying this twice proves $(-x)(-y)=xy$. Nothing about these signs needed to be assumed in the construction.

We have proved that $(\mathbb Z,+,\cdot,0,1)$ is a **commutative ring with identity**, meaning addition is an abelian group, multiplication is associative with identity, and multiplication distributes over addition.

## Embedding the naturals

Define

$$
\iota:\mathbb N\to\mathbb Z,\qquad
\boxed{\iota(n)=[(n,0)].}
$$

Read $\iota$ as "iota," the name of this embedding map.

It preserves zero and one immediately. It also preserves addition:

$$
\iota(a)+\iota(b)=[(a+b,0)]=\iota(a+b),
$$

and multiplication:

$$
\iota(a)\iota(b)=[(ab,0)]=\iota(ab).
$$

It is injective: if $\iota(a)=\iota(b)$, the relation Z1 gives $a+0=0+b$, hence $a=b$.

Thus we may **identify** the old natural number $n$ with its embedded copy $\iota(n)$, without claiming that a von Neumann natural set literally equals an equivalence class of pairs. The usual notation $\mathbb N\subseteq\mathbb Z$ uses this standard identification.

Every integer is a difference of two embedded naturals:

$$
[(a,b)]=\iota(a)-\iota(b).
$$

This equation is now valid because integer subtraction was defined above.

## Constructing the integer order

Define order on integer classes using only natural order:

$$
\boxed{[(a,b)]\leq[(c,d)]\quad\Longleftrightarrow\quad a+d\leq b+c.}\tag{Z≤}
$$

Read the left side "the first integer is less than or equal to the second." We must prove that the choice of representative does not affect this relation.

An equivalent and more convenient characterization is

$$
\boxed{x\leq y\quad\Longleftrightarrow\quad
\exists k\in\mathbb N:\ y=x+\iota(k).}\tag{ZP}
$$

To see the equivalence, write $x=[(a,b)]$, $y=[(c,d)]$. The equation $y=x+\iota(k)$ means $[(c,d)]=[(a+k,b)]$, which means $c+b=a+k+d$. By the natural-order definition, such a $k$ exists exactly when $a+d\leq b+c$. Since ZP is phrased entirely in terms of classes and already well-defined operations, it also **proves well-definedness of Z≤**.

**Totality.** Natural order compares $a+d$ with $b+c$, so either $x\leq y$ or $y\leq x$.

**Reflexivity.** $x=x+0$ witnesses $x\leq x$.

**Transitivity.** If $y=x+\iota(k)$ and $z=y+\iota(\ell)$, then $z=x+\iota(k+\ell)$. Hence $x\leq z$.

**Antisymmetry.** If $y=x+\iota(k)$ and $x=y+\iota(\ell)$, then $x=x+\iota(k+\ell)$. Additive cancellation in the group gives $\iota(k+\ell)=0$. Injectivity of $\iota$ and the zero-sum law in $\mathbb N$ force $k=\ell=0$, so $x=y$.

**Translation invariance.** If $y=x+\iota(k)$, then $y+z=(x+z)+\iota(k)$, so $x+z\leq y+z$. Applying the same argument to $-z$ gives the reverse implication, so

$$
x\leq y\quad\Longleftrightarrow\quad x+z\leq y+z.
$$

**Positive products.** If $0\leq x$, then $x=\iota(k)$ for some natural $k$. Likewise $0\leq y$ means $y=\iota(\ell)$. Therefore $xy=\iota(k\ell)\geq0$. Together with translation invariance and distributivity, this makes $\mathbb Z$ an **ordered ring**.

**Worked example: comparing a positive and a negative integer.** Let $x=[(5,2)]$ and $y=[(1,4)]$. Z≤ says $y\leq x$ exactly when $1+2\leq4+5$, that is $3\leq9$, which is true. Their ordinary names are $3$ and $-3$, and we have justified $-3\leq3$ without treating sign intuition as a proof.

## No zero divisors and multiplicative cancellation

An **integral domain** is a commutative ring with identity $1\neq0$ and no zero divisors: $xy=0$ implies $x=0$ or $y=0$.

Here $1\neq0$ because $\iota$ is injective and $1\neq0$ among naturals. To prove the zero-divisor property, first note that a nonzero integer is either positive or negative by totality. Every positive integer equals $\iota(k)$ for some nonzero natural $k$, by ZP; every negative integer has positive additive inverse.

A product of positive integers is $\iota(k\ell)$, and natural multiplication of nonzero naturals is nonzero (it is a sum of positive naturals, proved by induction). The sign laws already proved show that the product of any two nonzero integers is nonzero, regardless of their signs.

Therefore $\mathbb Z$ is an integral domain. As a consequence, if $x\neq0$ and $xy=xz$, then $x(y-z)=0$, so $y-z=0$ and $y=z$. **Multiplicative cancellation is a theorem**, not an assertion that every integer has a reciprocal.

## Why integers still cannot always divide

The equation $2x=1$ has no integer solution. If $x\leq0$, then $2x\leq0<1$. If $x>0$, then $x\geq1$ and so $2x\geq2>1$. Hence $2$ has no multiplicative inverse in $\mathbb Z$.

Integers form a ring and an integral domain, **not a field**. The next construction adds precisely the missing nonzero reciprocals.

## Division with remainder, from well-ordering

> [!theorem] Integer division with remainder
> Given integers $a$ and positive $b$, there are **unique** integers $q,r$ with $a=bq+r$ and $0\leq r<b$. Existence and uniqueness need proof; the well-ordering argument below supplies it.


Although not every division has an *integer* result, division with remainder is available.

**Division algorithm.** For any integer $a$ and positive integer $b$, there exist unique integers $q,r$ such that

$$
\boxed{a=bq+r,\qquad 0\leq r<b.}
$$

Read $q$ as "quotient" and $r$ as "remainder."

**Existence for $a\geq0$.** Use induction on $a$. For $a=0$, choose $q=r=0$. Suppose $a=bq+r$ with $0\leq r<b$. Then $a+1=bq+(r+1)$. If $r+1<b$, retain $q$ and set the new remainder to $r+1$. Otherwise $r+1=b$ (there is no integer strictly between $b-1$ and $b$); use $a+1=b(q+1)+0$. Thus the theorem holds for all nonnegative $a$.

**Existence for $a<0$.** Apply the nonnegative result to $-a=bq+r$. If $r=0$, then $a=b(-q)+0$. If $0<r<b$, then

$$
a=b(-q-1)+(b-r)
$$

and $0<b-r<b$.

**Uniqueness.** Suppose $a=bq+r=bq'+r'$ with both remainders in $[0,b)$. If $q<q'$, then $q'\geq q+1$ and

$$
bq'+r'\geq b(q+1)>bq+r,
$$

contradicting equality. Similarly $q'<q$ is impossible by the symmetric argument. Hence $q=q'$ and then $r=r'$ by additive cancellation.

**Worked example: the negative remainder trap.** For $a=-17$ and $b=5$, write

$$
-17=5(-4)+3,\qquad 0\leq3<5.
$$

The tempting equation $-17=5(-3)-2$ has the correct value but its remainder $-2$ does *not* satisfy the theorem. Both equations are arithmetic identities; only the first is the standard Euclidean division representation.

## Greatest common divisors and the Euclidean algorithm

> [!example] Why repeated remainders matter
> The Euclidean algorithm replaces $(a,b)$ by $(b,r)$ with $a=bq+r$. The **set of common divisors stays the same** while the nonnegative remainder decreases, which is why the method terminates.


The division-with-remainder theorem does more than justify quotient notation. It constructs the **greatest common divisor**, proves Bézout's identity, and eventually establishes why prime factorization is unique.

For integers $a,b$ not both zero, a **common divisor** is a positive integer $d$ with $a=du$ and $b=dv$ for some integers $u,v$. Read $d\mid a$ as "d divides a." The **greatest common divisor** $\gcd(a,b)$ (read "g-c-d of a and b") is the greatest positive common divisor. Excluding $(a,b)=(0,0)$ avoids ambiguity about a *greatest positive* common divisor; some conventions additionally define $\gcd(0,0)=0$.

### Bézout's identity from well-ordering

**Theorem:** for integers $a,b$ not both zero there exist integers $x,y$ such that

$$
\boxed{ax+by=\gcd(a,b).}
$$

**Proof.** Let $T$ be the collection of all **positive** integer linear combinations:

$$
T=\{ax+by:x,y\in\mathbb Z,\ ax+by>0\}.
$$

Because at least one of $a,b$ is nonzero and integer additive inverses exist, we can choose a sign to produce a positive multiple. Thus $T$ is nonempty. By well-ordering of the positive integers, it has a least element $d$. By definition, $d=ax_0+by_0$ for some integers $x_0,y_0$.

We claim $d$ divides both $a$ and $b$. Apply division with remainder to $a$ and the **positive** divisor $d$:

$$
a=qd+r,\qquad 0\leq r<d.
$$

But

$$
r=a-q(ax_0+by_0)=a(1-qx_0)+b(-qy_0),
$$

so $r$ is itself an integer linear combination of $a$ and $b$. If $r>0$, then $r\in T$, contradicting the minimality of $d$. Therefore $r=0$, so $d\mid a$. The same argument gives $d\mid b$.

If $c>0$ is **any** common divisor of $a,b$, write $a=cu$, $b=cv$. Then $d=ax_0+by_0=c(ux_0+vy_0)$, so $c\mid d$. Since $d$ is positive, this implies $c\leq d$. Therefore $d$ is the greatest positive common divisor and

$$
d=\gcd(a,b)=ax_0+by_0.
$$

The existence of Bézout coefficients has been **proved from the integer division theorem and well-ordering**, not assumed as another axiom.

### Why the Euclidean algorithm works and terminates

Given integers $a,b$ with $b\ne0$, use positive divisors by replacing inputs with their absolute values, then repeatedly divide:

$$
a=bq+r,\qquad 0\leq r<b.
$$

The common divisors of $a$ and $b$ are exactly the common divisors of $b$ and $r$: if $c$ divides $a,b$ then it divides $r=a-bq$, and if it divides $b,r$ then it divides $a=bq+r$. Thus

$$
\gcd(a,b)=\gcd(b,r)
$$

when $b>0$.

At each nonterminal step, the **new positive remainder is strictly smaller than the previous divisor**. A strictly decreasing sequence of nonnegative integers cannot continue indefinitely: otherwise its set of terms would have a least member followed by an even smaller one. Hence the algorithm terminates at remainder zero. At that point the last nonzero divisor is the gcd.

**Worked example:**

$$
\begin{aligned}
252&=105\cdot2+42,\\
105&=42\cdot2+21,\\
42&=21\cdot2+0.
\end{aligned}
$$

Therefore $\gcd(252,105)=21$. Reverse the equations:

$$
21=105-2(252-2\cdot105)=5\cdot105-2\cdot252.
$$

This is a concrete Bézout identity. The **extended Euclidean algorithm** simply performs that back-substitution systematically.

## Euclid's lemma and unique prime factorization

Define a **prime** to be a positive integer $p>1$ whose only positive divisors are $1$ and $p$.

### Euclid's lemma

**Theorem:** if a prime $p$ divides a product $ab$, then it divides $a$ or it divides $b$.

**Proof.** If $p\mid a$, the conclusion already holds. Otherwise $\gcd(p,a)=1$, because any positive common divisor of $p$ and $a$ must be either $1$ or $p$, and $p\nmid a$. Bézout's identity supplies integers $x,y$ with

$$
px+ay=1.
$$

Multiply by $b$:

$$
pbx+aby=b.
$$

Both terms on the left are divisible by $p$: the first visibly, the second because $p\mid ab$. Therefore $p\mid b$. This proves the lemma.

By repeated application, if $p$ divides a product of finitely many integers, it divides at least one factor.

### Fundamental theorem of arithmetic

**Theorem:** every positive integer $n>1$ can be written as a product of primes. This factorization is unique up to the ordering of factors.

**Existence, by strong induction.** Suppose every positive integer strictly between $1$ and $n$ is a product of primes. If $n$ is prime, it is already such a product. Otherwise $n$ is composite, so $n=ab$ with integers $1<a<n$ and $1<b<n$. By the strong-induction hypothesis, each of $a,b$ is a product of primes, and multiplying their factorizations gives one for $n$.

**Uniqueness, using Euclid's lemma.** Suppose

$$
n=p_1p_2\cdots p_r=q_1q_2\cdots q_s
$$

with all factors positive primes. Since $p_1$ divides the product on the right, Euclid's lemma says $p_1\mid q_j$ for some $j$. The only positive divisors of the prime $q_j$ are $1$ and $q_j$, so $p_1=q_j$. Reorder the factors to put that match first and **cancel it** using integer multiplication cancellation. Repeat with the remaining products. This must consume both lists: a nonempty product of primes is greater than $1$, so it cannot equal the empty product $1$. Hence $r=s$ and the prime factors agree after reordering.

For a negative integer, factor its positive opposite and prepend the unit $-1$. The only invertible integers (units) are $1$ and $-1$, as follows from their absolute values and the integral-domain order. Thus integer factorizations are unique **up to ordering and multiplication by units**.

These results supply the non-circular foundation for prime factorization, coprimality, modular inverses, and many later [Number Theory](./number-theory) proofs. In particular, rational fractions can be reduced to lowest terms because dividing numerator and denominator by their positive gcd produces an equivalent representation.

## What has been earned, and what comes next?

| Fact about $\mathbb Z$ | Where it came from |
| --- | --- |
| Integers exist as classes of pairs | the natural-number equivalence relation |
| Integer operations are meaningful | well-definedness proofs |
| Addition is an abelian group | componentwise addition and pair swapping |
| Multiplication is associative and commutative | expansion using natural-number laws |
| Distributivity holds | natural-number distributivity |
| Every natural embeds faithfully | the injective map $\iota$ |
| Integers have a total compatible order | natural-number order plus ZP |
| There are no zero divisors | positivity of products |
| Division with remainder exists and is unique | induction, order, cancellation |
| Bézout's identity and Euclid's algorithm | well-ordering and division with remainder |
| Prime factorization exists uniquely | strong induction, Euclid's lemma, and cancellation |

The key distinction is now visible: **the rules of signed arithmetic are consequences of the quotient construction, not prerequisites smuggled into it.** Next, [Construction of the Rationals](./construction-of-the-rationals) takes pairs of integers and performs a new quotient construction to make division by every nonzero element possible.
