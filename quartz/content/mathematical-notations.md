---
title: "Mathematical Notations"
---

Mathematical writing relies on a compact symbolic vocabulary. This page collects the symbols used throughout these notes, grouped by area, with a one-line meaning for each. It also flags a few symbols whose meaning shifts with context, since those are a common source of confusion.

A useful distinction to keep in mind is between **object-level** symbols, which appear inside the formulas being studied (for example $\land$ inside $P \land Q$), and **meta-level** symbols, which we use to talk *about* formulas or objects (for example $\iff$ in "$A \subseteq B \iff \forall x\,(x \in A \to x \in B)$"). Some symbols, such as $\iff$, are used at both levels depending on context.

## Equivalence and Equality Symbols

### Equality ( = )

**Type:** Object-level symbol.

**Meaning:** Two mathematical objects are the same (same number, same set, same function).

**Used with:** Sets, numbers, functions, and other objects.

### Biconditional / Equivalence ( ⟺ , ↔ )

**Meaning:** "if and only if" (iff). The two sides have the same truth value.

Both meanings coexist:

- As an **object-level** connective inside a formula, $P \leftrightarrow Q$ (or $P \iff Q$) is the biconditional, a truth-functional connective true exactly when $P$ and $Q$ share a truth value. This is genuine logical syntax.
- As a **meta-level** shorthand in derivations, "$\phi \iff \psi$" asserts that two statements are equivalent or that one holds by definition exactly when the other does.

By convention $\leftrightarrow$ (or $\Leftrightarrow$) is often reserved for the object-level connective and $\iff$ for the meta-level claim, but usage varies between authors.

### Congruence / Identity ( ≡ )

**Type:** Varies by context.

**Meaning:**

- In logic: **logical equivalence** of two propositions (they have the same truth value under every valuation), e.g. $\neg\neg P \equiv P$.
- In number theory: **congruence modulo $n$**, e.g. $a \equiv b \pmod{n}$.
- In analysis: sometimes "identically equal", e.g. a function that is $\equiv 0$ everywhere.

### Definition ( := )

**Meaning:** "is defined to be." The left side is introduced as a name for the right side, e.g. $(a, b) := \{\{a\}, \{a, b\}\}$.

## Set-Theory Notation

| Symbol | Meaning |
|--------|---------|
| $\in$ | "is an element of": $a \in A$ means $a$ belongs to set $A$ |
| $\notin$ | "is not an element of": $a \notin A$ |
| $\subseteq$ | "is a subset of": every element of the left set is in the right set |
| $\subset$ , $\subsetneq$ | "is a proper subset of": subset but not equal |
| $\cup$ | union: elements in either set (or both) |
| $\cap$ | intersection: elements in both sets |
| $\setminus$ | set difference: elements in the left set but not the right |
| $\triangle$ | symmetric difference: elements in exactly one of the two sets |
| $A'$ , $A^c$ | complement: elements of the universe not in $A$ |
| $\varnothing$ , $\emptyset$ , $\{\}$ | the empty set (no elements) |
| $\mathcal{P}(A)$ , $2^A$ | power set: the set of all subsets of $A$ |
| $\times$ | Cartesian product: the set of ordered pairs $(a, b)$ |
| $\{x \mid P(x)\}$ , $\{x : P(x)\}$ | set-builder: the set of all $x$ satisfying property $P$ |
| $\lvert A \rvert$ | cardinality: the number of elements in $A$ |
| $\bigcup_{i \in I}$ , $\bigcap_{i \in I}$ | union or intersection over an indexed family of sets |

## Logic Notation

| Symbol | Meaning |
|--------|---------|
| $\neg$ | negation ("not") |
| $\land$ | conjunction ("and"), true when both operands are true |
| $\lor$ | disjunction ("or"), true when at least one operand is true |
| $\oplus$ | exclusive or (XOR), true when exactly one operand is true |
| $\to$ , $\Rightarrow$ | implication ("if ... then ...") |
| $\leftrightarrow$ , $\Leftrightarrow$ | biconditional ("if and only if") |
| $\forall$ | universal quantifier ("for all") |
| $\exists$ | existential quantifier ("there exists") |
| $\exists!$ | unique existential quantifier ("there exists exactly one") |
| $\vDash$ | semantic entailment ("every model of the premises is a model of the conclusion") |
| $\vdash$ | syntactic derivability ("provable from" via inference rules) |
| $\top$ | verum: a constant that is always true (tautology) |
| $\bot$ | falsum: a constant that is always false (contradiction) |
| $\therefore$ | "therefore", introducing a conclusion |

## Number Sets (Blackboard Bold)

| Symbol | Meaning |
|--------|---------|
| $\mathbb{N}$ | natural numbers: $0, 1, 2, 3, \ldots$ (some authors start at $1$) |
| $\mathbb{Z}$ | integers: $\ldots, -2, -1, 0, 1, 2, \ldots$ |
| $\mathbb{Q}$ | rational numbers: fractions $p/q$ with $p, q \in \mathbb{Z}$, $q \neq 0$ |
| $\mathbb{R}$ | real numbers: all points on the number line |
| $\mathbb{C}$ | complex numbers: $a + bi$ with $a, b \in \mathbb{R}$ |

## Functions and Mappings

| Symbol | Meaning |
|--------|---------|
| $f: A \to B$ | $f$ is a function from domain $A$ to codomain $B$ |
| $\mapsto$ | "maps to": describes where an element goes, e.g. $x \mapsto x^2$ |
| $\hookrightarrow$ | an injection (one-to-one map) |
| $\cong$ | isomorphism or bijection between two sets or structures |

## Operators and Constants

| Symbol | Meaning |
|--------|---------|
| $\sum$ | summation: $\sum_{i=1}^{n} a_i = a_1 + a_2 + \cdots + a_n$ |
| $\prod$ | product: $\prod_{i=1}^{n} a_i = a_1 \cdot a_2 \cdots a_n$ |
| $\infty$ | infinity (an unbounded quantity or limit, not a real number) |
| $\lceil x \rceil$ | ceiling: the smallest integer $\geq x$ |
| $\lfloor x \rfloor$ | floor: the largest integer $\leq x$ |
| $\blacksquare$ , $\square$ , QED | marks the end of a proof |
