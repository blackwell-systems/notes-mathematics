---
title: "Peano Arithmetic"
prerequisites: ["set-theory"]
enables: ["construction-of-the-integers"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Set Theory](./set-theory) (sets, functions, relations, induction as a proof method)
> **Leads to:** [Construction of the Integers](./construction-of-the-integers) (quotient pairs and additive inverses) · [Number Systems](./number-systems) (overview) · [Algebraic Structures](./algebraic-structures) (structure-level laws)

We use addition every day without wondering why it is associative, why zero is an identity, or why a number cannot have two different immediate successors. These familiar facts are not all assumptions. Many are **theorems**, and the distinction matters when an algebra course asks which properties you are entitled to use.

This chapter builds natural-number arithmetic without taking addition or multiplication for granted. We will separate three jobs: **axiomatization** (specify what a natural-number structure must satisfy), **construction** (exhibit an actual structure that satisfies the specification), and **deduction** (prove arithmetic laws from the specification and definitions). The resulting proofs are also the foundations for the group and field laws encountered later.

We take ordinary [logic](./predicate-logic-first-order-logic), [sets](./set-theory), and elementary facts about functions as background. In particular, an axiom is a stated starting condition, a definition introduces notation or an object, and a theorem requires a proof. Do not confuse these roles.

## The primitive language: zero and successor

Before defining addition, multiplication, or even the relation "less than," consider a structure

$$
(N,0,S).
$$

Read this as "a collection N, a distinguished element zero, and a successor function S." The notation $S:N\to N$ is read "S maps N to N." The expression $S(n)$ (read "the successor of n") denotes the result of applying that function to $n$. At this stage it does **not** mean "$n+1$"; we have not defined addition or the number one.

We introduce short names:

$$
1:=S(0),\qquad 2:=S(S(0)),\qquad
3:=S(S(S(0))).
$$

The symbol $:=$ is read "is defined to be." Those names are abbreviations, not extra axioms. An expression such as $S(S(0))$ can be meaningful before we know how to add two numbers.

The question is: which conditions force this structure to behave like the counting numbers, rather than like a clock, a branching graph, or several unrelated chains?

## The Peano conditions and what each excludes

> [!axiom] Peano-style axioms specify a structure
> The successor and induction conditions say **which properties a natural-number system must satisfy**. Familiar arithmetic laws such as associativity, commutativity, and cancellation are derived later, not smuggled into the definition.


Here is a common second-order presentation. The first two lines specify the kind of objects and function we work with; some textbooks count only the remaining axioms, and conventions for the number of "Peano axioms" vary.

1. **Distinguished zero:** $0\in N$.
2. **Total successor:** $S:N\to N$ is a function. Every number has exactly one specified successor in $N$.
3. **Zero is not a successor:** for all $n\in N$, $S(n)\neq 0$.
4. **Successor is injective:** for all $a,b\in N$, $S(a)=S(b)\Rightarrow a=b$.
5. **Full induction:** for every subset $P\subseteq N$, if $0\in P$ and $n\in P\Rightarrow S(n)\in P$ for every $n\in N$, then $P=N$.

The symbol $\Rightarrow$ is read "implies." The symbol $\subseteq$ is read "is a subset of." **Injective** means that different inputs cannot have the same output. **Full induction** quantifies over *every* subset of $N$; the difference between this and first-order induction will matter near the end.

### Do the first four conditions guarantee counting?

No. The third condition only says that no arrow points **into zero**. It does not, by itself, prohibit a cycle elsewhere. The fourth condition forbids two arrows merging, but still permits a completely separate chain.

**Countermodel: two disconnected chains.** Take the usual objects $0,1,2,\ldots$ and add distinct objects

$$
\ldots,a_{-2},a_{-1},a_0,a_1,a_2,\ldots
$$

with $S(a_i)=a_{i+1}$. Zero has no predecessor, and successor is injective everywhere. Yet no finite succession from zero reaches any $a_i$. Thus the first four conditions are satisfied, but this is not just the natural numbers.

Full induction excludes the extra chain. Let $P$ be exactly the elements obtained from zero by finitely many successor steps. Zero is in $P$, and taking the successor of anything in $P$ stays in $P$. Therefore the induction condition forces $P=N$.

**What induction really says:** there are no objects in our intended natural-number domain that lie outside the successor-generated part beginning at zero. It is stronger than the picture of falling dominoes, because it specifies that the entire domain is covered by the domino chain.

### Every nonzero number has a predecessor

We can already deduce something useful:

$$
\forall n\in N,\quad n=0\ \text{or}\ \exists k\in N\ (n=S(k)).
$$

Read $\forall$ as "for every" and $\exists$ as "there exists." To prove this, let $P$ be the collection of numbers satisfying the displayed claim. Zero belongs to $P$. For **any** $n$, its successor $S(n)$ belongs to $P$ by taking $k=n$. Therefore $P$ is closed under successor, so induction gives $P=N$.

This does not say that zero has a predecessor. It says every *nonzero* natural number does. Injectivity makes that predecessor unique.

## Constructing a model from sets

An axiomatic description states what a structure must do; it does not automatically exhibit a structure. In standard set theory we can build a concrete example using the **von Neumann naturals**:

$$
0:=\varnothing,\qquad
S(n):=n\cup\{n\}.
$$

Read $\varnothing$ as "the empty set," $\cup$ as "union," and $\{n\}$ as "the singleton containing n." Applying the rule gives

$$
\begin{aligned}
0&=\varnothing,\\
1&=\{\varnothing\}=\{0\},\\
2&=\{\varnothing,\{\varnothing\}\}=\{0,1\},\\
3&=\{0,1,2\},\\
4&=\{0,1,2,3\}.
\end{aligned}
$$

**Worked example: build three without counting as an unexplained operation.**

1. Begin with the empty set $0=\varnothing$.
2. Form $1=S(0)=0\cup\{0\}=\{0\}$.
3. Form $2=S(1)=1\cup\{1\}=\{0,1\}$.
4. Form $3=S(2)=2\cup\{2\}=\{0,1,2\}$.

There is no addition anywhere in this procedure. The operation used is set union together with formation of a singleton. In this particular encoding, $m<n$ will eventually correspond to $m\in n$, read "m is an element of n."

**Where does the infinite set come from?** Zermelo-Fraenkel set theory includes an **axiom of infinity**, which guarantees an inductive set containing $\varnothing$ and closed under $x\mapsto x\cup\{x\}$. Taking the intersection of all inductive subsets of such a set supplies the smallest one, conventionally written $\omega$ (read "omega"). It has precisely the elements produced by finite successor steps and satisfies full induction.

The usual set-theoretic construction proves that zero is not a successor, that successor is injective, and that induction holds. These are not claims that a finite list of displayed sets is sufficient to establish. For example, $n\in S(n)$ for each von Neumann natural $n$, whereas $\varnothing$ has no elements, proving $S(n)\neq 0$. Injectivity follows from the structure of these finite ordinals; it is not a general law of arbitrary sets under arbitrary functions.

**Two levels of assumptions.** The Peano conditions can themselves be adopted as axioms for a number structure. Alternatively, inside set theory we construct a model and *prove* those conditions there. The axiom of infinity is not secretly derived from writing down $0,S(0),S(S(0)),\ldots$.

## Induction: a theorem engine, not a repeated calculation

To prove a statement $P(n)$ for every natural $n$, full induction gives a standard method:

- **Base case:** prove $P(0)$.
- **Inductive step:** assume $P(n)$ for an arbitrary $n$, then prove $P(S(n))$.
- **Conclusion:** $P(n)$ holds for every $n\in N$.

The phrase **inductive hypothesis** means the temporary assumption $P(n)$ inside the step. It is not an assumption that the theorem is already true for every number. You use the hypothesis for one arbitrary $n$, and induction licenses the universal conclusion.

**Worked example: no successor equals zero.** This is not an application of induction at all: it is an axiom. In contrast, "every number is zero or a successor" was a theorem proved by induction. Being able to label a line **axiom**, **definition**, or **derived result** is part of following a rigorous proof.

## The recursion theorem: why operations can be defined

> [!theorem] Recursion makes arithmetic operations legitimate
> The recursion theorem supplies a **unique function** with a prescribed value at zero and a successor step. Addition and multiplication are then defined by recursion rather than assumed in advance.


A pair of recursive equations looks like a definition, but we must justify that it determines an actual function on *every* natural number.

**Recursion theorem on $N$.** Suppose $X$ is a set, $x_0\in X$, and $f:X\to X$ is a function. Then there exists a **unique** function $h:N\to X$ such that

$$
h(0)=x_0,\qquad h(S(n))=f(h(n))
$$

for every $n\in N$.

Read **unique** as "there is exactly one." The two equations specify the initial value and the rule for passing to the next value.

**Why uniqueness holds.** If $h$ and $g$ both obey the equations, then $h(0)=x_0=g(0)$. If $h(n)=g(n)$, applying the same function $f$ gives

$$
h(S(n))=f(h(n))=f(g(n))=g(S(n)).
$$

Induction proves $h(n)=g(n)$ for every $n$, so the functions are equal.

**Why existence is a separate issue.** Uniqueness rules out two different solutions; it does not create even one. We can exhibit the construction in the von Neumann model of $N$ using finite approximations.

For every $n\in N$, let $I_n=\{0,1,\ldots,n\}$ denote the finite successor chain **through** $n$ (not the integer interval notation that we will define later). We show by induction that there exists exactly one function $h_n:I_n\to X$ satisfying the initial and successor rules wherever its domain permits them.

- **Base:** $I_0=\{0\}$, so $h_0(0)=x_0$ defines the unique required function.
- **Step:** given the unique $h_n$, extend it to $I_{S(n)}=I_n\cup\{S(n)\}$ by setting $h_{S(n)}(S(n))=f(h_n(n))$. The new point $S(n)$ does not already lie in $I_n$, so this really defines a function. Any function satisfying the same rules on $I_{S(n)}$ must agree with $h_n$ on $I_n$ by its uniqueness and must assign that specified value to $S(n)$.
- **Compatibility:** if $m$ occurs before $n$ in the finite successor chain, then $h_n|_{I_m}=h_m$, by uniqueness on $I_m$. The symbol $|$ here means "restriction to the indicated domain."
- **Union:** because the finite functions agree wherever their domains overlap, their union $h=\bigcup_{n\in N}h_n$ is a function. Its domain is all of $N$ by induction. The set-theoretic axiom schema of Replacement permits forming the set-indexed family of these uniquely determined finite graphs, and Union assembles the graph of $h$.

The base equation holds in $h_0$, and each successor equation holds in $h_{S(n)}$; compatibility carries both into the union. This proves existence, while the preceding induction proved uniqueness. This is a **set-theoretic proof using the constructed standard naturals**, not a claim that first-order PA by itself has a function symbol for every recursively specified function.

In particular, simply displaying the two recursion equations without existence and uniqueness would be an incomplete definition.

We will apply recursion twice, first to addition and then to multiplication. The operations are defined *on the naturals*, not assumed in the primitive Peano language.

## Defining addition and checking the first examples

Fix a natural $a$. Apply the recursion theorem with $X=N$, starting value $a$, and step function $f=S$. Call the resulting function of $b$ by the notation $a+b$ (read "a plus b"). This gives the **definitions**

$$
\boxed{a+0=a}\tag{A0}
$$

$$
\boxed{a+S(b)=S(a+b).}\tag{AS}
$$

These are not two additional guesses about how addition happens to behave. They are the recursive specification of a unique operation, justified by the recursion theorem.

**Worked example: calculate $2+2$ with no commutativity or associativity.**

$$
\begin{aligned}
2+2
 &=2+S(1) &&\text{definition of 2}\\
 &=S(2+1) &&\text{AS}\\
 &=S(2+S(0)) &&\text{definition of 1}\\
 &=S(S(2+0)) &&\text{AS}\\
 &=S(S(2)) &&\text{A0}\\
 &=4 &&\text{definition of 4}.
\end{aligned}
$$

The calculation uses only the recursive rules, previously introduced numerals, and substitution. We have not used $a+b=b+a$.

### The other zero law must be proved

Definition A0 gives $a+0=a$. It does **not** directly give $0+a=a$ because addition was defined by recursing on its *second* argument.

**Theorem:** for all $a$, $0+a=a$.

**Proof by induction on $a$.** Base: $0+0=0$ by A0. Step: assuming $0+a=a$,

$$
0+S(a)=S(0+a)=S(a)
$$

by AS and the hypothesis. Thus the law holds for every $a$.

This is a small but essential lesson: the two sides of a familiar equation may have different logical statuses.

### Moving successor across the first argument

We will need one more lemma before proving commutativity.

**Lemma:** for all $a,b$,

$$
S(a)+b=S(a+b).
$$

**Proof by induction on $b$.** For $b=0$,

$$
S(a)+0=S(a)=S(a+0).
$$

Assume $S(a)+b=S(a+b)$. Then

$$
\begin{aligned}
S(a)+S(b)
 &=S(S(a)+b) &&\text{AS}\\
 &=S(S(a+b)) &&\text{inductive hypothesis}\\
 &=S(a+S(b)) &&\text{AS}.
\end{aligned}
$$

The last step reads AS backward inside the outer $S$. This completes the induction.

## Proving the laws of addition

### Associativity

**Theorem:** for all $a,b,c\in N$,

$$
\boxed{(a+b)+c=a+(b+c).}
$$

Read this as "parenthesizing an addition in either order gives the same result." Fix $a$ and $b$ and induct on $c$.

**Base:** by A0,

$$
(a+b)+0=a+b=a+(b+0).
$$

**Step:** assume $(a+b)+c=a+(b+c)$. Then

$$
\begin{aligned}
(a+b)+S(c)
 &=S((a+b)+c) &&\text{AS}\\
 &=S(a+(b+c)) &&\text{inductive hypothesis}\\
 &=a+S(b+c) &&\text{AS, backward}\\
 &=a+(b+S(c)) &&\text{AS}.
\end{aligned}
$$

That proves associativity for every triple. Observe that **commutativity has not been used**.

### Commutativity

**Theorem:** for all $a,b\in N$,

$$
\boxed{a+b=b+a.}
$$

Read this as "changing the order of the addends does not change the result." Fix $a$ and induct on $b$.

**Base:** $a+0=a=0+a$, using A0 and the previously proved left-zero law.

**Step:** suppose $a+b=b+a$. Then

$$
\begin{aligned}
a+S(b)
 &=S(a+b) &&\text{AS}\\
 &=S(b+a) &&\text{inductive hypothesis}\\
 &=S(b)+a &&\text{successor lemma, backward}.
\end{aligned}
$$

Thus addition is commutative. The last step is precisely why the successor lemma was necessary: AS alone rewrites the **second** argument, not the first.

### Cancellation

**Theorem:** if $a+c=b+c$, then $a=b$.

Induct on $c$. At $c=0$, A0 immediately gives $a=b$. If

$$
a+S(c)=b+S(c),
$$

then AS says $S(a+c)=S(b+c)$. **Successor injectivity** gives $a+c=b+c$. The inductive hypothesis now gives $a=b$. Hence a common addend can be cancelled.

Cancellation is not an inverse law. We have proved it without negative numbers.

## Defining multiplication

Now addition exists, so we can use the recursion theorem a second time. For fixed $a$, start at zero and repeatedly add $a$. This specifies multiplication (read $a\cdot b$ as "a times b"):

$$
\boxed{a\cdot 0=0}\tag{M0}
$$

$$
\boxed{a\cdot S(b)=a\cdot b+a.}\tag{MS}
$$

The symbol $\cdot$ denotes multiplication; it is not part of the original primitive Peano data.

**Worked example: calculate $2\cdot 3$ from the definition.**

$$
\begin{aligned}
2\cdot 3
 &=2\cdot S(2) &&\text{definition of 3}\\
 &=2\cdot 2+2 &&\text{MS}\\
 &=(2\cdot 1+2)+2 &&\text{MS}\\
 &=((2\cdot 0+2)+2)+2 &&\text{MS}\\
 &=((0+2)+2)+2 &&\text{M0}\\
 &=(2+2)+2 &&\text{left-zero law}\\
 &=4+2 &&\text{addition example}\\
 &=6 &&\text{two applications of AS}.
\end{aligned}
$$

The last line means $4+2=4+S(1)=S(4+1)=S(S(4))=6$. No ordinary multiplication table has been imported.

### Zero and one in multiplication

M0 immediately gives $a\cdot 0=0$. The reverse statement, $0\cdot a=0$, requires induction:

- Base: $0\cdot0=0$.
- Step: $0\cdot S(a)=0\cdot a+0=0+0=0$.

Since $1=S(0)$, we also have

$$
a\cdot 1=a\cdot S(0)=a\cdot0+a=0+a=a.
$$

For $1\cdot a=a$, induct on $a$. The base is $1\cdot0=0$. If $1\cdot a=a$, then

$$
1\cdot S(a)=1\cdot a+1=a+S(0)=S(a+0)=S(a).
$$

We have now proved both multiplicative identity laws.

## Proving the laws of multiplication

### Multiplying a successor in the first argument

The multiplication recursion MS changes the **second** argument. To change the first, we need a lemma analogous to the earlier addition lemma:

$$
\boxed{S(a)\cdot b=a\cdot b+b.}
$$

**Proof by induction on $b$.** At $b=0$, both sides are zero. Assume the formula holds for $b$. Then

$$
\begin{aligned}
S(a)\cdot S(b)
 &=S(a)\cdot b+S(a) &&\text{MS}\\
 &=(a\cdot b+b)+S(a) &&\text{inductive hypothesis}\\
 &=a\cdot b+(b+S(a)) &&\text{addition associativity}\\
 &=a\cdot b+(a+S(b)) &&\text{addition commutativity and AS}\\
 &=(a\cdot b+a)+S(b) &&\text{addition associativity}\\
 &=a\cdot S(b)+S(b) &&\text{MS}.
\end{aligned}
$$

The fourth step uses $b+S(a)=S(b+a)=S(a+b)=a+S(b)$, a consequence of the already established addition laws. It is not an assumed rule about multiplication.

### Distributivity in the second argument

**Theorem:** for all $a,b,c$,

$$
\boxed{a\cdot(b+c)=a\cdot b+a\cdot c.}
$$

Read "distributes over" as "multiplying a sum equals the sum of the separate products." Fix $a,b$ and induct on $c$.

**Base:** $a\cdot(b+0)=a\cdot b=a\cdot b+0=a\cdot b+a\cdot0$.

**Step:** assume $a\cdot(b+c)=a\cdot b+a\cdot c$.

$$
\begin{aligned}
a\cdot(b+S(c))
 &=a\cdot S(b+c) &&\text{AS}\\
 &=a\cdot(b+c)+a &&\text{MS}\\
 &=(a\cdot b+a\cdot c)+a &&\text{inductive hypothesis}\\
 &=a\cdot b+(a\cdot c+a) &&\text{addition associativity}\\
 &=a\cdot b+a\cdot S(c) &&\text{MS}.
\end{aligned}
$$

### Distributivity in the first argument

We also need

$$
\boxed{(a+b)\cdot c=a\cdot c+b\cdot c.}
$$

Induct on $c$. The base follows from M0 and the addition zero laws. For the step,

$$
\begin{aligned}
(a+b)\cdot S(c)
 &=(a+b)\cdot c+(a+b) &&\text{MS}\\
 &=(a\cdot c+b\cdot c)+(a+b) &&\text{inductive hypothesis}\\
 &=(a\cdot c+a)+(b\cdot c+b) &&\text{addition associativity and commutativity}\\
 &=a\cdot S(c)+b\cdot S(c) &&\text{MS}.
\end{aligned}
$$

The rearrangement in the third line uses only laws of **addition** that have already been proved.

### Commutativity

**Theorem:** $a\cdot b=b\cdot a$ for all naturals.

Fix $a$ and induct on $b$. At zero, both $a\cdot0$ and $0\cdot a$ equal zero. Assuming $a\cdot b=b\cdot a$,

$$
\begin{aligned}
a\cdot S(b)
 &=a\cdot b+a &&\text{MS}\\
 &=b\cdot a+a &&\text{inductive hypothesis}\\
 &=S(b)\cdot a &&\text{successor multiplication lemma}.
\end{aligned}
$$

### Associativity

**Theorem:** $(a\cdot b)\cdot c=a\cdot(b\cdot c)$ for all naturals.

Fix $a,b$ and induct on $c$.

**Base:** $(a\cdot b)\cdot0=0=a\cdot(b\cdot0)$.

**Step:** assuming $(a\cdot b)\cdot c=a\cdot(b\cdot c)$,

$$
\begin{aligned}
(a\cdot b)\cdot S(c)
 &=(a\cdot b)\cdot c+(a\cdot b) &&\text{MS}\\
 &=a\cdot(b\cdot c)+a\cdot b &&\text{inductive hypothesis}\\
 &=a\cdot(b\cdot c+b) &&\text{distributivity, backward}\\
 &=a\cdot(b\cdot S(c)) &&\text{MS}.
\end{aligned}
$$

Now both operations are associative and commutative, but they were proved in a deliberate order. In particular, **multiplication associativity depends on distributivity**, and distributivity depends on addition's established laws.

## Defining order instead of assuming a number line

> [!definition] Natural-number order
> Define $a\leq b$ when $b=a+k$ for some natural $k$. This uses **constructed addition** and does not depend on a picture of a number line.


We have not taken "$a$ is less than $b$" as primitive. We can define it through addition:

$$
\boxed{a\leq b\quad\Longleftrightarrow\quad
\exists k\in N\ (a+k=b).}
$$

Read $\leq$ as "less than or equal to" and $\Longleftrightarrow$ as "if and only if." The witness $k$ tells us how many successor steps separate $a$ from $b$. We define **strict** inequality by $a<b$ if $a\leq b$ and $a\neq b$.

**Worked example: why $2\leq5$.** We must give a witness, not appeal to a drawing. Choose $k=3$. Using recursive addition,

$$
2+3=2+S(2)=S(2+2)=S(4)=5.
$$

Thus $2\leq5$. In fact $2<5$, since $2\neq5$. The inequality is certified by the existence of the number $3$.

### A small lemma prevents circular order arguments

**Lemma:** if $a+k=a$, then $k=0$.

We have already proved that every $k$ is zero or a successor. If $k=S(t)$, the equation would say

$$
a+S(t)=S(a+t)=a.
$$

That cannot occur. Prove by induction on $a$ that $S(a+t)\neq a$ for every $t$: at $a=0$, no successor equals zero; if it held for $a$, then

$$
S(S(a)+t)=S(S(a+t))\neq S(a),
$$

using the successor-addition lemma and injectivity of $S$. Hence a positive number of successor steps cannot return to the starting point.

Consequently, if $a+b=0$, both $a$ and $b$ are zero: the second argument must be zero (otherwise the sum is a successor), and then the first must be zero by A0.

### Reflexivity, transitivity, and antisymmetry

**Reflexive:** $a\leq a$, since $a+0=a$.

**Transitive:** if $a+k=b$ and $b+\ell=c$, then

$$
a+(k+\ell)=(a+k)+\ell=b+\ell=c,
$$

so $a\leq c$.

**Antisymmetric:** suppose $a+k=b$ and $b+\ell=a$. Substitution and associativity give

$$
a+(k+\ell)=a.
$$

The lemma forces $k+\ell=0$, and the zero-sum fact forces $k=\ell=0$. Therefore $a=b$. This proves that $\leq$ is a **partial order**.

### Any two naturals are comparable

It is actually a **total order**: for every $a,b$, either $a\leq b$ or $b\leq a$. Prove this by induction on $b$, with the statement quantified over *all* $a$.

At $b=0$, $0\leq a$ because $0+a=a$.

Suppose every $a$ is comparable with $b$. For arbitrary $a$, either $a\leq b$, in which case $a\leq S(b)$ (add one more successor step to the witness), or $b\leq a$. In the latter case, $a=b+k$. If $k=0$, then $a=b\leq S(b)$. If $k=S(t)$, then

$$
a=b+S(t)=S(b+t)=S(b)+t,
$$

so $S(b)\leq a$. This completes induction and proves comparability.

**Order respects arithmetic.** If $a\leq b$ via $a+k=b$, then addition yields $(a+c)+k=b+c$ (after rearranging with the proven laws), so $a+c\leq b+c$. Multiplying by $c$ gives $ac+kc=bc$ by distributivity, so $ac\leq bc$. These are *derived compatibility laws*, not extra axioms.

## Successor and the strict natural order

The order defined above makes $S(a)$ the immediate successor of $a$. This is a **theorem**, not a property hidden inside the successor notation.

**Lemma 1:** $a<S(a)$ for every $a$. By the addition recursion rules,

$$
a+1=a+S(0)=S(a+0)=S(a).
$$

Thus $a\leq S(a)$, witnessed by $1$. Equality would give $a+1=a$, contradicting the previously proved lemma that $a+k=a$ forces $k=0$, since $1=S(0)\neq0$.

**Lemma 2:** if $k\neq0$, then $a<a+k$. The predecessor theorem gives $k=S(t)$ for some $t$. By recursive addition,

$$
a+k=a+S(t)=S(a+t).
$$

Since $a\leq a+t$ by the definition of order, and $a+t<S(a+t)$ by Lemma 1, we have $a<S(a+t)=a+k$. The required strict/weak transitivity follows from the established partial order: if $a\leq b<b'$ but $a=b'$, then $b'\leq b$, contradicting $b<b'$.

**Lemma 3:** there is no natural $b$ strictly between $a$ and $S(a)$. If $a<b$, then $b=a+S(t)=S(a+t)$ for some $t$. From $a\leq a+t$, adding $1$ preserves order, yielding $S(a)\leq S(a+t)=b$. Thus $b<S(a)$ is impossible.

These lemmas justify the later uses of "positive successor step," "no integer between consecutive naturals," and "adding a nonzero natural strictly increases its input."

### Well-ordering and its relation to induction

A set with an order is **well-ordered** if every nonempty subset has a least element. With the order just defined, $N$ is well-ordered. Suppose a nonempty subset $A$ has no least element. We prove by induction that no $n$ lies in $A$. Zero cannot belong to $A$, since $0\leq b$ for every natural $b$. Assume no element of $A$ is at most $n$. If $S(n)$ belonged to $A$, then by **Lemma 3** above, every $b<S(n)$ would satisfy $b\leq n$, and therefore could not belong to $A$. Hence $S(n)$ would be the least element of $A$, a contradiction. Thus $S(n)\notin A$. Induction shows $A$ is empty, contradicting nonemptiness.

Conversely, well-ordering gives an induction argument: if a subset contains zero and is successor-closed but misses some natural, choose the *least* missing one. It cannot be zero. It is $S(k)$ for some $k$, and $k<S(k)$ must be present, so successor closure puts $S(k)$ back in. Contradiction.

With the usual structural assumptions, induction and well-ordering are two ways of expressing that there is no smallest counterexample to a properly established inductive claim.

## Two more consequences used by later number systems

### Nonzero natural numbers have nonzero products

**Theorem:** if $a\neq0$ and $b\neq0$, then $a\cdot b\neq0$.

Our predecessor theorem expresses every nonzero $b$ as $S(t)$. Likewise, $a=S(u)$ for some $u$. The recursive multiplication rule and the addition-successor rule give

$$
\begin{aligned}
a\cdot b
&=a\cdot S(t)\\
&=a\cdot t+a\\
&=a\cdot t+S(u)\\
&=S(a\cdot t+u).
\end{aligned}
$$

A successor cannot equal zero. Thus $ab\neq0$. In particular, **$\mathbb N$ has no zero divisors**. This short proof is important: the integer construction will use it before it has access to negative numbers or integer multiplication cancellation.

### Strong induction and natural multiplication cancellation

**Strong induction:** suppose a property $P(n)$ has the following feature: for every $n$, assuming $P(m)$ holds for **all** $m<n$ allows us to prove $P(n)$. Then $P(n)$ holds for every natural number.

**Proof:** if not, the set of counterexamples is nonempty. By the well-ordering theorem just proved it has a least member $n$. Every $m<n$ satisfies $P(m)$, so the strong-induction premise establishes $P(n)$, a contradiction. This proves strong induction from well-ordering; it does not require a new axiom.

**Multiplication cancellation:** if $c\neq0$ and $ac=bc$, then $a=b$.

By totality, suppose $a\neq b$; either $a<b$ or $b<a$. In the first case, $b=a+k$ for some **nonzero** $k$ (because equality would force $k=0$). Multiplying by $c$ gives

$$
bc=(a+k)c=ac+kc.
$$

Since $k,c$ are nonzero, $kc\neq0$ by the previous theorem. Natural addition of a nonzero term strictly increases its input: $ac<ac+kc=bc$, contradicting $ac=bc$. The second case is symmetric. Hence $a=b$.

This distinction matters in the number-system ladder: we have proved natural cancellation by positivity and recursion. Later **integer** multiplication cancellation follows from the no-zero-divisor theorem, while **rational** multiplicative inverses make cancellation available by a third route.

## What structure have we obtained?

Summarize what came from definitions and proofs:

| Property | Status | Why |
| --- | --- | --- |
| $0\in N$, successor total | primitive data | specified at the start |
| $S(n)\neq0$, successor injective | axioms | restrictions on the primitive function |
| Induction | axiom/principle | covers the entire intended domain |
| $a+0=a$, $a+S(b)=S(a+b)$ | definitions | justified by the recursion theorem |
| Addition identity, associativity, commutativity, cancellation | theorems | proved by induction |
| $a\cdot0=0$, $a\cdot S(b)=a\cdot b+a$ | definitions | justified by recursion after addition exists |
| Multiplication identity, associativity, commutativity, distributivity | theorems | proved from earlier laws |
| Total order compatible with arithmetic | definition and theorems | derived using addition and induction |

In the terminology of [Algebraic Structures](./algebraic-structures), $(N,+,0)$ is a **commutative monoid**, $(N\setminus\{0\},\cdot,1)$ is also a commutative monoid, and $(N,+,\cdot,0,1)$ is a **commutative semiring**. The word *semiring* here records the two associative operations, their identities, and distributivity, without demanding additive inverses.

It is **not** an additive group: a positive natural $a$ has no natural $b$ with $a+b=0$. We proved above that a sum of two naturals is zero only when both are zero. This is exactly why constructing the integers is a genuine extension, not a change of notation.

For the detailed next construction, see [Construction of the Integers](./construction-of-the-integers). An integer may be represented by a pair $(a,b)$ of naturals, intended to stand for $a-b$. The relation

$$
(a,b)\sim(c,d)\quad\Longleftrightarrow\quad a+d=b+c
$$

(read $\sim$ as "is equivalent to") uses **only addition that we have now justified**. Its equivalence classes give the integers, where additive inverses finally exist. [Number Systems](./number-systems) develops this construction and then builds rationals from integer pairs.

## First-order arithmetic versus full second-order induction

> [!distinction] Two kinds of induction semantics
> Full second-order induction quantifies over **all subsets** of the domain, whereas a first-order induction **schema** supplies one axiom instance for each expressible formula. They have different model-theoretic consequences.


There is an important qualification to the phrase "the Peano axioms uniquely describe the natural numbers."

### Full second-order semantics

Our induction condition quantified over **every subset** $P\subseteq N$. Under **full second-order semantics**, that quantifier really ranges over all subsets of the domain. With the other Peano conditions, any two such structures are **isomorphic**: there is a bijection carrying zero to zero and preserving successor. An *isomorphism* is a one-to-one, onto correspondence that preserves the named operations.

**Why:** between structures $(N,0,S)$ and $(N',0',S')$, recursion defines a map $f$ by $f(0)=0'$ and $f(S(n))=S'(f(n))$. For **injectivity**, induct on $a$ to prove that $f(a)=f(b)$ implies $a=b$ for every $b$. If $a=0$, the equality $f(0)=f(b)$ cannot hold for $b=S(k)$ because $f(S(k))=S'(f(k))\neq0'$; every nonzero $b$ is a successor, so $b=0$. In the step, suppose the claim holds for $a$ and assume $f(S(a))=f(b)$. The value on the left is a successor and therefore not $0'$, so $b\neq0$ and $b=S(k)$ for some $k$. Successor injectivity in $N'$ implies $f(a)=f(k)$, the inductive hypothesis gives $a=k$, and therefore $S(a)=b$. The image of $f$ contains $0'$ and is closed under $S'$, so full induction in $N'$ makes $f$ surjective. Therefore the structures agree up to renaming their elements. This is called **categoricity**.

Categoricity does **not** mean that the objects must literally be von Neumann sets: any isomorphic representation has the same natural-number structure.

### First-order Peano arithmetic

In **first-order logic**, induction cannot be written as a single axiom quantifying over arbitrary subsets of the domain. Instead, first-order Peano arithmetic (PA) uses an **induction schema**: an induction axiom for each formula $\varphi(n)$ in its first-order language, allowing additional parameters. A schema is an infinite family of formulas, not one assertion about *all* subsets.

First-order PA has **nonstandard models**, containing elements that are not equal to any standard numeral

$$
0,\ S(0),\ S(S(0)),\ \ldots.
$$

A compactness argument explains the phenomenon. Add a new constant $c$ and the sentences $c\neq0$, $c\neq S(0)$, $c\neq S(S(0))$, and so on. Every *finite* selection of those sentences can be satisfied in the ordinary naturals by interpreting $c$ as a sufficiently large natural number. The **compactness theorem** for first-order logic therefore yields a model satisfying *all* of them. In that model, $c$ is not any standard numeral. First-order induction still holds for every formula of PA, because it is only required for definable properties, not all subsets of the model.

The bottom line is precise:

- **Full second-order induction with full semantics:** the Peano structure is categorical, up to isomorphism.
- **First-order induction schema:** PA admits nonstandard models.
- **Second-order syntax with Henkin semantics:** quantifiers need not range over all subsets, so the full-semantics categoricity argument does not apply.

The distinction is not that arithmetic suddenly becomes false in nonstandard models. It is that the logical expressive power of induction changes which structures the axioms can single out.

## The dependency chain back to abstract algebra

We can now identify where familiar algebraic facts came from, rather than simply being told to cite them:

$$
\begin{gathered}
\text{set theory and logic}\\
\Downarrow\\
\text{a model of zero, successor, and induction}\\
\Downarrow\\
\text{recursion theorem}\\
\Downarrow\\
\text{definition of natural addition}\\
\Downarrow\\
\text{proof of addition laws}\\
\Downarrow\\
\text{definition of natural multiplication}\\
\Downarrow\\
\text{proof of multiplication and distributivity laws}\\
\Downarrow\\
\mathbb N\longrightarrow\mathbb Z\longrightarrow\mathbb Q\\
\Downarrow\\
\text{groups, rings, and fields as reusable abstractions}.
\end{gathered}
$$

Read $\Downarrow$ as "provides the foundation for the next step," not as one single formal inference rule. The number-system arrows denote constructions and embeddings, not simple equality of the underlying set representations.

**What may be assumed in an abstract algebra proof?** Whatever the exercise or course has explicitly established or taken as background. For example, to test whether $(\mathbb Q,+)$ is a group, you normally invoke previously proved rational-arithmetic laws. You need not rebuild the Peano axioms each time. The important point is that those properties can be traced through a chain of definitions and proofs; they are not magic supplied by the plus sign.

**Final perspective:** the value of the Peano approach is not that calculating $2+2$ was secretly difficult. It is that it exposes a dependency that ordinary notation hides: the successor function is primitive, addition and multiplication are constructed, and associativity and commutativity are *earned*. Once that separation is clear, abstract algebra becomes the study of exactly which earned properties survive when the underlying objects and operations change.
