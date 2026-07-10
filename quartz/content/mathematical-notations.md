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

**Type:** Both object-level and meta-level, depending on context (see below).

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

**Type:** Meta-level notation.

**Meaning:** "is defined to be." The left side is introduced as a name for the right side, e.g. $(a, b) := \{\{a\}, \{a, b\}\}$. Also written $\stackrel{\text{def}}{=}$ or $\equiv$.

## Set-Theory Notation

| Symbol | Meaning |
|--------|---------|
| $\in$ | "is an element of": $a \in A$ means $a$ belongs to set $A$ |
| $\notin$ | "is not an element of": $a \notin A$ |
| $\subseteq$ | "is a subset of": every element of the left set is in the right set |
| $\subsetneq$ | "is a proper subset of": subset but not equal |
| $\subset$ | proper subset in these notes, but context-dependent: many authors use $\subset$ for *any* subset (what we write $\subseteq$). Check each source's convention |
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
| $\circ$ | function composition: $(g \circ f)(x) = g(f(x))$ |
| $f^{-1}$ | inverse function (or preimage of a set under $f$) |
| $\hookrightarrow$ | an injection (one-to-one map), or an inclusion/embedding |
| $\twoheadrightarrow$ | a surjection (onto map) |
| $\cong$ | isomorphism (a structure-preserving bijection); also geometric congruence, e.g. $\triangle ABC \cong \triangle DEF$ |
| $\sim$ , $\approx$ | equinumerous / similar; for cardinality of plain sets, $A \sim B$ (or $\lvert A \rvert = \lvert B \rvert$) means a bijection exists |

## Analysis and Calculus

| Symbol | Meaning |
|--------|---------|
| $\lim$ | limit, e.g. $\lim_{x \to a} f(x)$; one-sided limits $\lim_{x \to a^-}$, $\lim_{x \to a^+}$ |
| $\to$ | "tends to" / "approaches" (as in $x \to a$ or $a_n \to L$); also the function-arrow and implication elsewhere |
| $\frac{d}{dx}$ , $f'$ | derivative with respect to $x$ |
| $\partial$ | partial derivative, e.g. $\frac{\partial f}{\partial x}$ |
| $\nabla$ | gradient (vector of partial derivatives); also "del" for divergence/curl |
| $\int$ , $\iint$ , $\oint$ | integral, double integral, contour integral |
| $\sum$ , $\prod$ | summation and product over an index range |
| $\lVert x \rVert$ | norm (length) of a vector; $\lvert x \rvert$ is absolute value or modulus |
| $\approx$ | approximately equal |
| $\propto$ | proportional to (e.g. posterior $\propto$ likelihood $\times$ prior) |
| $\to$ , $\rightrightarrows$ | pointwise vs uniform convergence of functions |
| $O$ , $\Theta$ , $\Omega$ , $o$ , $\omega$ | asymptotic growth rates (see [Asymptotic Notation](./asymptotic-notation)) |
| $\infty$ | infinity (an unbounded quantity or limit, not a real number) |

## Probability and Statistics

| Symbol | Meaning |
|--------|---------|
| $\mathbb{P}(A)$ , $P(A)$ | probability of event $A$ |
| $\mathbb{E}[X]$ | expected value (mean) of random variable $X$ |
| $\operatorname{Var}(X)$ , $\operatorname{Cov}(X,Y)$ | variance and covariance |
| $X \sim \mathcal{D}$ | "$X$ is distributed as" distribution $\mathcal{D}$, e.g. $X \sim \mathcal{N}(\mu, \sigma^2)$ |
| $\mid$ | "given" (conditioning), e.g. $P(A \mid B)$; also "divides" in number theory, e.g. $a \mid b$ |
| $\xrightarrow{d}$ , $\xrightarrow{p}$ | convergence in distribution and in probability |
| $\hat{\theta}$ | an estimator or estimate of parameter $\theta$ |
| $\binom{n}{k}$ | binomial coefficient ("$n$ choose $k$") |
| $!$ | factorial: $n! = n \cdot (n-1) \cdots 2 \cdot 1$ |

## Miscellaneous Symbols

| Symbol | Meaning |
|--------|---------|
| $\lceil x \rceil$ | ceiling: the smallest integer $\geq x$ |
| $\lfloor x \rfloor$ | floor: the largest integer $\leq x$ |
| $\pm$ | plus-or-minus (both $+$ and $-$ cases), e.g. $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| $\cdot$ , $\times$ | multiplication (the $\times$ symbol also denotes the Cartesian product of sets) |
| $\therefore$ , $\because$ | "therefore" and "because" |
| $\blacksquare$ , $\square$ , QED | marks the end of a proof |
