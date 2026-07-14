---
title: "Mathematical Notations"
---

Mathematical writing relies on a compact symbolic vocabulary. This page collects the symbols used throughout these notes, grouped by area, with how to **read each one aloud** and a one-line meaning. Knowing the spoken form makes notation usable in speech and lectures and reinforces what each symbol means. The page also flags a few symbols whose meaning shifts with context, since those are a common source of confusion.

Most symbols link to the section where they are defined and worked through; **hover a linked symbol to preview that section** without leaving this page.

A useful distinction to keep in mind is between **object-level** symbols, which appear inside the formulas being studied (for example $\land$ inside $P \land Q$), and **meta-level** symbols, which we use to talk *about* formulas or objects (for example $\iff$ in "$A \subseteq B \iff \forall x\,(x \in A \to x \in B)$"). Some symbols, such as $\iff$, are used at both levels depending on context.

## Equivalence and Equality Symbols

### Equality ( = )

**Type:** Object-level symbol.

**Read aloud:** "equals" / "is equal to".

**Meaning:** Two mathematical objects are the same (same number, same set, same function).

### Biconditional / Equivalence ( ⟺ , ↔ )

**Type:** Both object-level and meta-level, depending on context (see below).

**Read aloud:** "if and only if" (often shortened to "iff"); also read "is equivalent to".

**Meaning:** The two sides have the same truth value.

Both meanings coexist:

- As an **object-level** connective inside a formula, $P \leftrightarrow Q$ (or $P \iff Q$) is the biconditional, a truth-functional connective true exactly when $P$ and $Q$ share a truth value. This is genuine logical syntax.
- As a **meta-level** shorthand in derivations, "$\phi \iff \psi$" asserts that two statements are equivalent or that one holds by definition exactly when the other does.

By convention $\leftrightarrow$ (or $\Leftrightarrow$) is often reserved for the object-level connective and $\iff$ for the meta-level claim, but usage varies between authors.

### Congruence / Identity ( ≡ )

**Type:** Varies by context.

**Read aloud:** "is equivalent to" (logic), "is congruent to ... modulo $n$" (number theory), or "is identically equal to" (analysis).

**Meaning:**

- In logic: **logical equivalence** of two propositions (they have the same truth value under every valuation), e.g. $\neg\neg P \equiv P$.
- In number theory: **congruence modulo $n$**, e.g. $a \equiv b \pmod{n}$.
- In analysis: sometimes "identically equal", e.g. a function that is $\equiv 0$ everywhere.

### Definition ( := )

**Type:** Meta-level notation.

**Read aloud:** "is defined to be" / "is defined as".

**Meaning:** The left side is introduced as a name for the right side, e.g. $(a, b) := \{\{a\}, \{a, b\}\}$. Also written $\stackrel{\text{def}}{=}$ or $\equiv$.

## Set-Theory Notation

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\in$](./set-theory#set) | "is an element of" / "is in" | $a \in A$ means $a$ belongs to set $A$ |
| [$\notin$](./set-theory#set) | "is not an element of" / "is not in" | $a \notin A$ |
| [$\subseteq$](./set-theory#subset) | "is a subset of" | every element of the left set is in the right set |
| [$\subsetneq$](./set-theory#subset) | "is a proper subset of" | subset but not equal |
| [$\subset$](./set-theory#subset) | "is a (proper) subset of" | proper subset in these notes, but context-dependent: many authors use $\subset$ for *any* subset (what we write $\subseteq$). Check each source's convention |
| [$\cup$](./set-theory#set-union) | "union" (or "cup") | elements in either set (or both) |
| [$\cap$](./set-theory#set-intersection) | "intersection" (or "cap") | elements in both sets |
| [$\setminus$](./set-theory#set-difference) | "minus" / "set-minus" / "without" | set difference: elements in the left set but not the right |
| [$\triangle$](./set-theory#symmetric-difference) | "symmetric difference" | elements in exactly one of the two sets |
| [$A'$](./set-theory#set-complement) , [$A^c$](./set-theory#set-complement) | "$A$ complement" / "$A$ prime" | complement: elements of the universe not in $A$ |
| [$\varnothing$](./set-theory#empty-set) , [$\emptyset$](./set-theory#empty-set) , [$\{\}$](./set-theory#empty-set) | "the empty set" | the set with no elements |
| [$\mathcal{P}(A)$](./set-theory#power-set) , [$2^A$](./set-theory#power-set) | "the power set of $A$" | the set of all subsets of $A$ |
| [$\times$](./set-theory#cartesian-product) | "cross" | Cartesian product: the set of ordered pairs $(a, b)$ |
| [$\{x \mid P(x)\}$](./set-theory#set-builder-notation) | "the set of all $x$ such that $P$ of $x$" | set-builder: the set of all $x$ satisfying property $P$ |
| [$\lvert A \rvert$](./set-theory#cardinality) | "the cardinality of $A$" / "the size of $A$" | the number of elements in $A$ |
| [$\bigcup_{i \in I}$](./set-theory#indexed-families-of-sets) , [$\bigcap_{i \in I}$](./set-theory#indexed-families-of-sets) | "the union / intersection over $i$ in $I$" | union or intersection over an indexed family of sets |

## Logic Notation

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\neg$](./propositional-logic-zeroth-order-logic#negation) | "not" | negation |
| [$\land$](./propositional-logic-zeroth-order-logic#conjunction) | "and" | conjunction, true when both operands are true |
| [$\lor$](./propositional-logic-zeroth-order-logic#disjunction) | "or" | disjunction, true when at least one operand is true |
| [$\oplus$](./propositional-logic-zeroth-order-logic#exclusive-disjunction--exclusive-or) | "exclusive or" / "x-or" | XOR, true when exactly one operand is true |
| [$\to$](./propositional-logic-zeroth-order-logic#conditional-statement--material-condition--material-implication--hypothetical-proposition) , $\Rightarrow$ | "implies" / "if ... then ..." | implication |
| [$\leftrightarrow$](./propositional-logic-zeroth-order-logic#conditional-equivalences) , $\Leftrightarrow$ | "if and only if" / "iff" | biconditional |
| [$\forall$](./predicate-logic-first-order-logic#universal-quantifier-) | "for all" / "for every" | universal quantifier |
| [$\exists$](./predicate-logic-first-order-logic#existential-quantifier-) | "there exists" / "for some" | existential quantifier |
| [$\exists!$](./predicate-logic-first-order-logic#unique-existential-quantifier-) | "there exists a unique" | there is exactly one |
| [$\vDash$](./predicate-logic-first-order-logic#structures-and-interpretations-models) | "models" / "entails" / "satisfies" | semantic entailment |
| [$\vdash$](./propositional-logic-zeroth-order-logic#syntax-and-semantics) | "proves" / "derives" | syntactic derivability (provable via inference rules) |
| [$\top$](./propositional-logic-zeroth-order-logic#tautology) | "top" / "true" | verum: a constant that is always true |
| [$\bot$](./propositional-logic-zeroth-order-logic#contradiction) | "bottom" / "false" | falsum: a constant that is always false |
| [$\therefore$](./propositional-logic-zeroth-order-logic#rules-of-inference) | "therefore" | introduces a conclusion |

## Number Sets (Blackboard Bold)

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\mathbb{N}$](./set-theory#countable-vs-uncountable-sets) | "the naturals" / "N" | natural numbers: $0, 1, 2, 3, \ldots$ (some authors start at $1$) |
| [$\mathbb{Z}$](./set-theory#countable-vs-uncountable-sets) | "the integers" / "Z" (from German *Zahlen*) | $\ldots, -2, -1, 0, 1, 2, \ldots$ |
| [$\mathbb{Q}$](./set-theory#countable-vs-uncountable-sets) | "the rationals" / "Q" (for *quotient*) | fractions $p/q$ with $p, q \in \mathbb{Z}$, $q \neq 0$ |
| [$\mathbb{R}$](./real-analysis#the-real-numbers) | "the reals" / "R" | real numbers: all points on the number line |
| [$\mathbb{C}$](./complex-numbers#from-real-to-imaginary-to-complex) | "the complexes" / "C" | complex numbers: $a + bi$ with $a, b \in \mathbb{R}$ |

## Functions and Mappings

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$f: A \to B$](./functions-relations#function) | "$f$ from $A$ to $B$" / "$f$ maps $A$ to $B$" | $f$ is a function from domain $A$ to codomain $B$ |
| [$\mapsto$](./functions-relations#function) | "maps to" | describes where an element goes, e.g. $x \mapsto x^2$ |
| [$\circ$](./functions-relations#composition-of-functions) | "composed with" / "after" / "ring" | function composition: $(g \circ f)(x) = g(f(x))$ |
| [$f^{-1}$](./functions-relations#inverse-functions) | "$f$ inverse" | inverse function (or preimage of a set under $f$) |
| [$\hookrightarrow$](./functions-relations#injection-one-to-one) | "injects into" / "embeds into" | an injection (one-to-one map), or an inclusion/embedding |
| [$\twoheadrightarrow$](./functions-relations#bijection-injective-and-surjective) | "surjects onto" | a surjection (onto map) |
| [$\cong$](./functions-relations#bijection-injective-and-surjective) | "is isomorphic to" / "is congruent to" | isomorphism (a structure-preserving bijection); also geometric congruence, e.g. $\triangle ABC \cong \triangle DEF$ |
| [$\sim$](./functions-relations#one-to-one-correspondence) , $\approx$ | "is similar to" / "is equinumerous with" | for cardinality of plain sets, $A \sim B$ (or $\lvert A \rvert = \lvert B \rvert$) means a bijection exists |

## Analysis and Calculus

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\lim$](./calculus#limits) | "the limit of" / "limit as ... approaches ..." | limit, e.g. $\lim_{x \to a} f(x)$; one-sided limits $\lim_{x \to a^-}$, $\lim_{x \to a^+}$ |
| [$\to$](./calculus#limit-notation) | "tends to" / "approaches" | as in $x \to a$ or $a_n \to L$; also the function-arrow and implication elsewhere |
| [$\frac{d}{dx}$](./calculus#the-limit-definition-of-the-derivative) , $f'$ | "$d$ by $d x$" / "$f$ prime" | derivative with respect to $x$ |
| [$\partial$](./multivariable-calculus#partial-derivatives) | "partial" | partial derivative; $\frac{\partial f}{\partial x}$ read "partial $f$ by partial $x$" |
| [$\nabla$](./multivariable-calculus#the-gradient-vector) | "del" / "nabla" | gradient (vector of partial derivatives); also divergence/curl |
| [$\int$](./calculus#the-definite-integral) , $\iint$ , $\oint$ | "the integral of" / "double integral" / "contour integral" | $\int f\,dx$ read "the integral of $f$, $dx$" |
| [$\sum$](./sequences-and-series#formal-definition-of-series-convergence) , $\prod$ | "the sum of" / "the product of" (Greek sigma, pi) | summation and product over an index range |
| [$\lVert x \rVert$](./linear-algebra-computation#norms-measuring-size) | "the norm of $x$" | norm (length) of a vector; $\lvert x \rvert$ ("the absolute value of $x$" / "mod $x$") is absolute value or modulus |
| $\approx$ | "is approximately equal to" | approximately equal |
| [$\propto$](./bayesian-inference#posterior-computation) | "is proportional to" | e.g. posterior $\propto$ likelihood $\times$ prior |
| [$\rightrightarrows$](./real-analysis#uniform-convergence-the-fix) | "converges uniformly to" | uniform convergence (versus $\to$ for pointwise convergence) |
| [$O$](./asymptotic-notation#big-o-notation-upper-bound) , [$\Theta$](./asymptotic-notation#big-theta-notation-tight-bound) , [$\Omega$](./asymptotic-notation#big-omega-notation-lower-bound) , [$o$](./asymptotic-notation#little-o-and-little-omega) , $\omega$ | "big-O", "big-theta", "big-omega", "little-o", "little-omega" | asymptotic growth rates (see [Asymptotic Notation](./asymptotic-notation)) |
| [$\infty$](./calculus#limits-at-infinity) | "infinity" | an unbounded quantity or limit, not a real number |

## Probability and Statistics

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\mathbb{P}(A)$](./probability#axioms-of-probability-kolmogorov) , $P(A)$ | "the probability of $A$" | probability of event $A$ |
| [$\mathbb{E}[X]$](./probability#expected-value) | "the expectation of $X$" / "$E$ of $X$" | expected value (mean) of random variable $X$ |
| [$\operatorname{Var}(X)$](./probability#variance-and-standard-deviation) , [$\operatorname{Cov}(X,Y)$](./probability#covariance) | "the variance of $X$" / "the covariance of $X$ and $Y$" | variance and covariance |
| [$X \sim \mathcal{D}$](./probability#normal-gaussian-distribution) | "$X$ is distributed as $\mathcal{D}$" / "$X$ follows $\mathcal{D}$" | e.g. $X \sim \mathcal{N}(\mu, \sigma^2)$ |
| [$\mid$](./probability#conditional-probability) | "given" (probability) / "divides" (number theory) | $P(A \mid B)$ is "probability of $A$ given $B$"; $a \mid b$ is "$a$ divides $b$" |
| [$\xrightarrow{d}$](./probability#central-limit-theorem) , $\xrightarrow{p}$ | "converges in distribution / in probability to" | modes of convergence |
| [$\hat{\theta}$](./statistics#point-estimation) | "theta hat" | an estimator or estimate of parameter $\theta$ |
| [$\binom{n}{k}$](./combination) | "$n$ choose $k$" | binomial coefficient |
| [$!$](./permutation) | "factorial" | $n!$ ("$n$ factorial") $= n \cdot (n-1) \cdots 2 \cdot 1$ |

## Miscellaneous Symbols

| Symbol | Read aloud | Meaning |
|--------|------------|---------|
| [$\lceil x \rceil$](./functions-relations#floor-and-ceiling-functions) | "the ceiling of $x$" | the smallest integer $\geq x$ |
| [$\lfloor x \rfloor$](./functions-relations#floor-and-ceiling-functions) | "the floor of $x$" | the largest integer $\leq x$ |
| $\pm$ | "plus or minus" | both the $+$ and $-$ cases, e.g. $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| $\cdot$ , $\times$ | "times" | multiplication (the $\times$ symbol also denotes the Cartesian product of sets) |
| [$\therefore$](./propositional-logic-zeroth-order-logic#rules-of-inference) , $\because$ | "therefore" / "because" | introduces a conclusion or a reason |
| [$\blacksquare$](./propositional-logic-zeroth-order-logic#proof-techniques) , $\square$ , QED | "Q.E.D." / "end of proof" | marks the end of a proof |
