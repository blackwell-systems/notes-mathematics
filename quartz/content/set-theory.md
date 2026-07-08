---
title: "Set Theory"
---

**Set Theory:** Set theory is the branch of mathematical logic that
studies Sets, which can be informally described as collections of
objects.

There are 2 primary branches of set theory:

-   **Naïve Set Theory**: Naive set theory is an informal approach to
    set theory that was developed in the late 19th century before the
    formalization of set theory by mathematicians such as Ernst
    **Zermelo** and **Abraham Fraenkel**. The term \"naive\"
    distinguishes it from more rigorous, formalized versions of set
    theory, like **Zermelo-Fraenkel** set theory (ZF), which are used to
    avoid certain paradoxes that arise in naive set theory.

-   **Axiomatic Set Theory**: To resolve the issues of naive set theory,
    mathematicians developed more rigorous frameworks for set theory.
    The most widely accepted is **Zermelo-Fraenkel** set theory (ZF),
    often extended with the **Axiom of Choice (ZFC).** These systems use
    axioms to carefully define the properties of sets and restrict the
    kinds of sets that can be formed, thereby avoiding the paradoxes
    inherent in naive set theory.

## Set

**Set:** A set is a collection of "*things*." These ***things*** are
called elements of the set.

Elements are normally written with lower case letters and sets are
normally written with upper case letters.

We write **a ∈ A** for \"a is an element of a set A\", and **a ∉ A**,
for \"a is not an element of a set A\".

**∅** or **{}** denotes the empty set, which contains no element.

![A white background with black text Description automatically
generated](./media/image22.png)

**Set elements are unique.** An element is either in the set or not in
the set. It makes no sense to say that an element is in the set
multiple times. It may be listed multiple times, but this is
extraneous.

![](./media/image23.png)

**Sets are unordered.** They can be written in any order you wish, but
conceptually, order is meaningless and not included in the formal
definition of a set.

## Set Membership / Set Elements

**Set Membership / Set Elements:** An element of a set is a distinct
object that belongs to the set.

Writing A = {1,2,3,4} means that the elements of the set are 1,2,3,4.

Sets can themselves be elements. B = {1,2,{1,2}}. The members of the set
B are 1,2 and the set {1,2}.

Set membership is a binary relation denoted by the symbol: **∈**

![A white background with black text Description automatically
generated](./media/image24.png)

## Roster Notation

Roster notation (also known as **enumeration notation**) involves
explicitly listing out all the elements of the set within curly braces.

![A black background with white text Description automatically
generated](./media/image25.png)

## Set-Builder Notation

**Set-Builder Notation:** Set-builder notation describes the elements of a set by specifying a
property or condition that the elements of the set satisfy, rather than
listing them out.

**General Form:** $\{x \mid P(x)\}$ or $\{x : P(x)\}$

Read as "the set of all x such that P(x) is true"

**Examples:**

- $\{x \mid x > 0\}$ = the set of all positive numbers
- $\{x \in \mathbb{Z} \mid x \text{ is even}\}$ = the set of all even integers
- $\{x^2 \mid x \in \mathbb{N}\}$ = {0, 1, 4, 9, 16, 25, ...} (perfect squares)
- $\{x \in \mathbb{R} \mid x^2 < 4\}$ = $(-2, 2)$ (interval notation)

## Empty Set

The empty set, denoted as ∅ or {}, is a set
with no members at all.

Although the empty set has no members, it can be a member of other sets.
Thus ∅ ≠ {∅}

## Subset

**Subset:** A is a subset of B, (denoted A ⊆ B ), if every element of A is also an element of B.

**Formal Definition:** A ⊆ B ⟺ ∀x (x ∈ A → x ∈ B)

If A is not a subset of B, we write A ⊈ B.

**Examples:**

- {1, 2} ⊆ {1, 2, 3, 4} (every element of {1, 2} is in {1, 2, 3, 4})
- {a, b} ⊆ {a, b, c}
- ∅ ⊆ A for any set A (the empty set is a subset of every set)
- A ⊆ A for any set A (every set is a subset of itself)
- {1, 2, 3} ⊈ {1, 2} (3 is in the first set but not the second)

**Key Property:** Every set is a subset of itself (reflexive property).

![](./media/image26.png)

## Proper Subset

**Proper Subset:** A is a proper subset of B (denoted A ⊂ B or A ⊊ B) when A is a subset of B, but A ≠ B. Everything in A is also in B, but B contains at least one element not in A.

**Formal Definition:** A ⊂ B ⟺ (A ⊆ B) ∧ (A ≠ B)

Equivalently: A ⊂ B ⟺ (∀x (x ∈ A → x ∈ B)) ∧ (∃x (x ∈ B ∧ x ∉ A))

**Examples:**

- {1, 2} ⊂ {1, 2, 3} (every element of {1, 2} is in {1, 2, 3}, and 3 is in {1, 2, 3} but not in {1, 2})
- {a} ⊂ {a, b, c}
- ∅ ⊂ {1, 2, 3} (the empty set is a proper subset of any non-empty set)
- {1, 2, 3} ⊄ {1, 2, 3} (a set is NOT a proper subset of itself, since A = A)
- {1, 2, 3} ⊄ {1, 2} (not even a subset, since 3 ∉ {1, 2})

**Key Difference from Subset:**
- A ⊆ B allows A = B (subset includes equality)
- A ⊂ B requires A ≠ B (proper subset excludes equality)

![A yellow and green circle with black text Description automatically
generated](./media/image27.png)

## Set Equality

Two sets are **equal** iff they have the **same members**. Formally
**(Axiom of Extensionality):**

$$
A = B  \Longleftrightarrow  \forall x (x \in A  \Longleftrightarrow  x \in B)
$$

Equivalently (very handy in proofs):

A = B ⟺ ( A ⊆ B) ∧ ( B ⊆ A )

**Examples:**

- {1, 2, 3} = {3, 2, 1} (order doesn't matter)
- {1, 2, 2, 3} = {1, 2, 3} (duplicates don't matter)
- {a, b} = {b, a}
- {1, 2, 3} ≠ {1, 2} (different elements)
- {1, 2} ≠ {1, 2, 3} (one has an extra element)
- ∅ = {} (two notations for the same empty set)

**Key Properties:**
- Sets with the same elements are equal, regardless of order
- Repetition of elements doesn't affect equality
- For equality, every element of A must be in B, and every element of B must be in A


**How to prove sets** $\mathbf{A = B}\mathbf{ }$**in practice:**

1.  **Show** $A \subseteq B$**:** take an arbitrary $x \in A$, prove
    $x \in B$.

2.  **Show** $B \subseteq A$**:** take an arbitrary $x \in B$, prove
    $x \in A$.\
    Done---by double containment.

**Common proof pattern (template)**

To show $A = B$: let $x$ be arbitrary

-   If $x \in A$, then ... hence $x \in B$

-   If $x \in B$, then ... hence $x \in A$

> Therefore $A = B$


**Example Proof:**

Prove {x ∈ ℤ | x is even} = {2n | n ∈ ℤ}

Let A = {x ∈ ℤ | x is even} and B = {2n | n ∈ ℤ}

**Show A ⊆ B:** Let x ∈ A. Then x is even, so x = 2k for some k ∈ ℤ. Therefore x ∈ B.

**Show B ⊆ A:** Let x ∈ B. Then x = 2n for some n ∈ ℤ. By definition, x is even, so x ∈ A.

Therefore A = B.

## Pigeonhole Principle (PHP)

If $m$ objects (pigeons) are placed into $n$ containers (holes) with
$m > n$, then at least one container holds **two or more** objects.

**Proof (counting).**\
Assume every container holds at most one object. Then there are at most
$n$ objects total. But $m > n$.

Contradiction. ∎

**Theorem (Generalized PHP).**

Placing $m$ objects into $n$ containers guarantees some container has
at least:

$$
\lceil\frac{m}{n}\rceil
$$

objects.

*Average view.* The average load is $m/n$. Some load is $\geq$the
average, thus $\geq \lceil m/n\rceil$.

## Cardinality

**Cardinality:** Let A be a set. then the number of elements in the set
A is called **cardinality** of the set A, and is denoted by **\|A\|**

![](./media/image28.png)

![A black background with white text Description automatically
generated](./media/image29.png)

### Finite vs. Infinite Sets

**Core definitions**

**Set equality (Extensionality):**

$$A = B  \Longleftrightarrow  \forall x\text{ }(x \in A \leftrightarrow x \in B)$$

**Subset:**

$A \subseteq B  \Longleftrightarrow  \forall x\text{ }(x \in A \Rightarrow x \in B)$.

**Proper subset**:

$$A \subsetneq B$$

**Functions and size (cardinality)**

**Injection (one-to-one):**

$f:A \rightarrow B$ with $x \neq y \Rightarrow f(x) \neq f(y)$

**Surjection (onto):**

$$\forall b \in B,\text{ }\exists a \in A:f(a) = b$$

**Bijection:**

both injective & surjective; write $A \cong B$ or
$\mid A \mid = \mid B \mid$

**Size comparisons (all sets):**

**Cardinality Ordering:**

- $|A| \leq |B|$ iff there exists an **injection** $A \rightarrow B$
  - Intuition: A is "no larger than" B if we can inject A into B without collisions
  - Example: $|\{1, 2\}| \leq |\{a, b, c\}|$ (we can map 1→a, 2→b)

- $|A| \geq |B|$ iff there exists an **injection** $B \rightarrow A$ (equivalently, a surjection $A \rightarrow B$)
  - Intuition: A is "at least as large as" B
  - Surjection equivalence: If we can map A onto B (covering all of B), then $|A| \geq |B|$

- $|A| = |B|$ iff there exists a **bijection** $A \cong B$
  - Intuition: A and B have the same size (one-to-one correspondence)
  - Notation: $A \cong B$ or $|A| = |B|$

**Schröder-Bernstein Theorem:**

If injections exist both ways ($A \hookrightarrow B$ and $B \hookrightarrow A$), then a bijection exists ($A \cong B$).

**Formal Statement:** If $|A| \leq |B|$ and $|B| \leq |A|$, then $|A| = |B|$.

**Why It's Important:** This theorem allows proving two sets have the same cardinality without explicitly constructing a bijection. You only need to find injections in both directions.

**Example:**

Show that $[0, 1]$ and $[0, 2]$ have the same cardinality.

- Injection $f: [0, 1] \rightarrow [0, 2]$ via $f(x) = 2x$ ✓
- Injection $g: [0, 2] \rightarrow [0, 1]$ via $g(x) = x/2$ ✓
- By Schröder-Bernstein, $|[0, 1]| = |[0, 2]|$

(The explicit bijection is $f(x) = 2x$, but Schröder-Bernstein proves existence without requiring we find it.)

#### Finite Set

**Definition (cardinal):**

A set $S$ is **finite** if $S \cong \{ 0,1,\ldots,n - 1\}$ for some
$n \in \mathbb{N}$; ($\cong$ is bijection symbol)

$\mid S \mid = n$.

#### Infinite Set

**Definition:**

A set $S$ is **infinite** if it is not finite. That is, there is no natural number $n$ such that $S$ can be bijected with $\{0, 1, \ldots, n-1\}$.

Equivalently, a set is infinite if there exists a bijection between the set and a proper subset of itself.

**Examples:**

- $\mathbb{N}$ (natural numbers) is infinite
- $\mathbb{Z}$ (integers) is infinite
- $\mathbb{Q}$ (rational numbers) is infinite
- $\mathbb{R}$ (real numbers) is infinite
- $(0, 1)$ (open interval) is infinite

**Countably Infinite:** An infinite set that can be put in one-to-one correspondence with the natural numbers $\mathbb{N}$.

Examples: $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$

**Uncountably Infinite:** An infinite set that cannot be put in one-to-one correspondence with the natural numbers.

Example: $\mathbb{R}$ (proven by Cantor's diagonal argument)

**Hierarchy of Infinities:**

$$|\mathbb{N}| = |\mathbb{Z}| = |\mathbb{Q}| < |\mathbb{R}| < |\mathcal{P}(\mathbb{R})|$$

Where $\mathcal{P}(X)$ denotes the power set of $X$.

## Universal Set

The universal set is a fundamental concept in set theory, which refers
to the set that contains all the objects or elements under consideration
for a particular discussion or problem. In other words, the universal
set is the \"superset\" of all the sets involved in a specific context.

The universal set, often denoted by 𝑈, is the set that includes every
element that is being considered in a given discussion or problem
domain. All other sets in that context are subsets of the universal set.

!Universal Set: Definition, Symbol, Venn Diagram and
Examples](./media/image30.png)

**Special Considerations:**

The Concept of an **Absolute Universal Set**:

In some discussions, the idea of an \"absolute\" universal
set---containing all possible sets---leads to paradoxes, such as
Russell\'s Paradox. To avoid these issues, most modern set theories,
like Zermelo-Fraenkel set theory, do not include an absolute universal
set.

**Instead, the universal set is always defined relative to a particular
context or domain of discourse.**

## Set Operations

**Set Operations**

### Set Union

**Set Union:** The union of two sets A and B is the set of elements
which are in **A** or **B** (or both).

∀x( x ∈ (A∪B) ↔ ( x ∈ A ∨ x ∈ B ))

**Example:** If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B = {1, 2, 3, 4, 5}

![A red circle with black lines Description automatically
generated](./media/image31.png)

### Set Intersection

**Set Intersection:** The intersection of two sets A and B is the set of elements which are in both **A** and **B**.

∀x( x∈ (A∩B) ↔ ( x ∈ A ∧ x ∈ B))

**Example:** If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B = {3}

![A red and black circle with black lines Description automatically
generated](./media/image32.png)

#### Set Difference / Relative Set Compliment

**Set Difference:** The set difference between **B** and **A** is
written as: $\mathbf{B \smallsetminus A}$.

It is the set of all elements in **B** that are not in **A** (**the
relative complement of** $\mathbf{A}$ **in** $\mathbf{B}$)

∀x( x ∈ (B∖A) ↔ ( x ∈ B ∧ x ∉ A) )

![A diagram of a circle Description automatically
generated](./media/image33.png)

### Set Compliment

#### Absolute Set Compliment

**Absolute Set Compliment:** The set compliment is the set of all
elements from the domain of discourse which are NOT in A.

∀x( x ∈ A′ ↔ ( x∈ U ∧ x ∉ A) )

![A black and white math equation Description automatically generated
with medium
confidence](./media/image34.png)

![A red circle with white circle in center Description automatically
generated](./media/image35.png)

### Symmetric Difference

**Symmetric Difference:** The symmetric difference of sets A and B, denoted A △ B or A ⊕ B, is the set of elements in either A or B but not in both.

**Definition:** A △ B = (A ∪ B) - (A ∩ B) = (A - B) ∪ (B - A)

**Logical form:** ∀x( x ∈ (A △ B) ↔ (x ∈ A ⊕ x ∈ B))

Where ⊕ is exclusive OR (XOR).

**Example:** If A = {1, 2, 3} and B = {3, 4, 5}, then:
- A △ B = {1, 2, 4, 5}

**Properties:**
- **Commutative:** A △ B = B △ A
- **Associative:** (A △ B) △ C = A △ (B △ C)
- **Identity:** A △ ∅ = A
- **Self-inverse:** A △ A = ∅
- **Distributive over intersection:** A ∩ (B △ C) = (A ∩ B) △ (A ∩ C)

**Application:** XOR operation in computer science, symmetric encryption

## Russell's Paradox

**Russell's Paradox:** A fundamental paradox in naive set theory discovered by Bertrand Russell in 1901. It demonstrates that unrestricted set comprehension (forming sets from any property) leads to contradiction.

**The Paradox:**

Consider the set R defined as:

R = {x | x is a set and x ∉ x}

In words: "R is the set of all sets that do not contain themselves as members."

**The Question:** Does R contain itself? Is R ∈ R?

**Case 1:** Suppose R ∈ R (R contains itself)
- By definition of R, if R ∈ R, then R must satisfy the condition "x ∉ x"
- This means R ∉ R (R does not contain itself)
- **Contradiction:** R both contains and doesn't contain itself

**Case 2:** Suppose R ∉ R (R does not contain itself)
- Then R satisfies the condition for membership in R (being a set that doesn't contain itself)
- Therefore R ∈ R (R must be in R by definition)
- **Contradiction:** R both doesn't contain and does contain itself

**Either way, we get a contradiction.**

**Why It Matters:**

Russell's Paradox exposed a fatal flaw in naive set theory, which allowed forming sets from any property. The paradox shows that not every property defines a valid set.

**Example - The Barber Paradox (Informal Version):**

A barber in a village shaves all and only those men who do not shave themselves. Does the barber shave himself?

- If he shaves himself, then he's someone who shaves himself, so he shouldn't shave himself
- If he doesn't shave himself, then he's someone who doesn't shave himself, so he should shave himself

**Modern Resolution:**

Modern axiomatic set theories (like Zermelo-Fraenkel set theory) avoid Russell's Paradox by:

1. **Restricting set formation:** Not every property defines a set
2. **Axiom of Separation:** You can only form subsets of existing sets, not arbitrary collections
3. **No universal set:** There is no "set of all sets"

**Historical Impact:**

- Led to the development of axiomatic set theory
- Showed that mathematical foundations needed rigorous axiomatization
- Influenced the formalist movement in mathematics

## Power Set

**Power Set:** The power set of a set **A**, denoted $\mathcal{P}(A)$ or $2^A$, is the set of all subsets of **A**, including the empty set and **A** itself.

**Definition:** $\mathcal{P}(A) = \{S \mid S \subseteq A\}$

**Example 1:** If A = {1, 2}, then:

$\mathcal{P}(A) = \{\varnothing, \{1\}, \{2\}, \{1, 2\}\}$

**Example 2:** If A = {a, b, c}, then:

$\mathcal{P}(A) = \{\varnothing, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}\}$

**Cardinality:** If $|A| = n$, then $|\mathcal{P}(A)| = 2^n$

This is why the power set is sometimes written as $2^A$.

**Examples:**
- $|\mathcal{P}(\varnothing)| = 2^0 = 1$ (only the empty set itself)
- $|\mathcal{P}(\{a\})| = 2^1 = 2$ (empty set and {a})
- $|\mathcal{P}(\{a, b\})| = 2^2 = 4$
- $|\mathcal{P}(\{a, b, c\})| = 2^3 = 8$

## Disjoint Sets

**Disjoint Sets:** Two sets **A** and **B** are disjoint if they have no elements in common.

**Definition:** $A \cap B = \varnothing$

**Example:** {1, 2, 3} and {4, 5, 6} are disjoint.

**Pairwise Disjoint:** A collection of sets $\{A_1, A_2, \ldots, A_n\}$ is pairwise disjoint if every pair of distinct sets in the collection is disjoint.

Formally: $\forall i, j : i \neq j \Rightarrow A_i \cap A_j = \varnothing$

**Example:** {1, 2}, {3, 4}, {5, 6} are pairwise disjoint.

## Partition of a Set

**Partition:** A partition of a set **A** is a collection of non-empty, pairwise disjoint subsets of **A** whose union is **A**.

**Definition:** A collection $\{A_1, A_2, \ldots, A_n\}$ is a partition of **A** if:

1. Each $A_i$ is non-empty: $A_i \neq \varnothing$
2. The sets are pairwise disjoint: $A_i \cap A_j = \varnothing$ for $i \neq j$
3. Their union is **A**: $A_1 \cup A_2 \cup \cdots \cup A_n = A$

**Example:** The sets {1, 2}, {3, 4}, {5, 6} form a partition of {1, 2, 3, 4, 5, 6}.

**Connection to Equivalence Relations:**

Every equivalence relation on a set **A** induces a partition of **A** (the equivalence classes), and every partition of **A** induces an equivalence relation on **A**.

## Countable vs Uncountable Sets

**Countable Set:** A set is countable if its elements can be put in one-to-one correspondence with the natural numbers ℕ = {0, 1, 2, 3, ...}, or if it is finite.

**Definition (Formal):** A set S is countable if there exists an injection f: S → ℕ, or equivalently, if there exists a surjection g: ℕ → S.

**Two Types of Countable:**

1. **Finite:** Sets with a specific number of elements (can be counted to completion)
2. **Countably Infinite:** Infinite sets that can be put in one-to-one correspondence with ℕ

**Examples of Countably Infinite Sets:**

**Natural Numbers (ℕ):** {0, 1, 2, 3, ...}
- Trivially countable (the definition uses ℕ itself)

**Integers (ℤ):** {..., -2, -1, 0, 1, 2, ...}
- Bijection: 0 → 0, 1 → -1, 2 → 1, 3 → -2, 4 → 2, ...
- Pattern: f(2n) = n, f(2n+1) = -n-1

**Even Numbers:** {0, 2, 4, 6, ...}
- Bijection: n → 2n

**Rational Numbers (ℚ):** All fractions p/q where p, q ∈ ℤ and q ≠ 0
- Surprising but true! Can be listed using Cantor's diagonal enumeration
- List all fractions in a grid and traverse diagonally, skipping duplicates

**Algebraic Numbers:** Solutions to polynomial equations with integer coefficients
- Countable because polynomials can be enumerated

**Why ℚ is Countable (Cantor's Enumeration):**

List all positive rationals in a grid:

```
1/1  1/2  1/3  1/4  1/5  ...
2/1  2/2  2/3  2/4  2/5  ...
3/1  3/2  3/3  3/4  3/5  ...
4/1  4/2  4/3  4/4  4/5  ...
...
```

Traverse diagonally: 1/1, 2/1, 1/2, 1/3, 2/2, 3/1, 4/1, 3/2, 2/3, 1/4, ...

Skip duplicates (like 2/2 = 1/1), then include negatives. This creates a bijection ℕ → ℚ⁺, proving ℚ is countable.

**Uncountable Set:** A set that is not countable. It cannot be put in one-to-one correspondence with ℕ.

**Examples of Uncountable Sets:**

**Real Numbers (ℝ):** All points on the number line
- Proven uncountable by Cantor's diagonal argument (see below)
- Even the interval (0, 1) is uncountable

**Irrational Numbers:** ℝ - ℚ
- Since ℝ is uncountable and ℚ is countable, the irrationals must be uncountable

**Transcendental Numbers:** Real numbers that are not algebraic (like π, e)
- Uncountable (most real numbers are transcendental)

**Power Set of ℕ:** 𝒫(ℕ) = all subsets of ℕ
- Uncountable by Cantor's theorem

**Real Interval [0, 1]:** All real numbers between 0 and 1 inclusive
- Same cardinality as all of ℝ (bijection exists)

**Cantor's Diagonal Argument (Proof that ℝ is Uncountable):**

**Theorem:** The real numbers in the interval (0, 1) are uncountable.

**Proof (by contradiction):**

1. Assume (0, 1) is countable
2. Then we can list all real numbers in (0, 1) as r₁, r₂, r₃, ... in decimal form:

```
r₁ = 0.a₁₁ a₁₂ a₁₃ a₁₄ ...
r₂ = 0.a₂₁ a₂₂ a₂₃ a₂₄ ...
r₃ = 0.a₃₁ a₃₂ a₃₃ a₃₄ ...
r₄ = 0.a₄₁ a₄₂ a₄₃ a₄₄ ...
...
```

3. Construct a new number d = 0.d₁d₂d₃d₄... where:
   - d₁ ≠ a₁₁ (differs from r₁ in the 1st decimal place)
   - d₂ ≠ a₂₂ (differs from r₂ in the 2nd decimal place)
   - d₃ ≠ a₃₃ (differs from r₃ in the 3rd decimal place)
   - dₙ ≠ aₙₙ (differs from rₙ in the nth decimal place)

4. The number d is in (0, 1) but differs from every rₙ in at least one decimal place
5. Therefore d is not in our "complete" list
6. **Contradiction:** Our list was supposed to contain all real numbers in (0, 1)
7. Therefore (0, 1) cannot be countable

**Hierarchy of Infinities:**

Not all infinities are equal. There is a strict hierarchy:

|ℕ| = |ℤ| = |ℚ| < |ℝ| < |𝒫(ℝ)| < |𝒫(𝒫(ℝ))| < ...

Where:
- |ℕ| is denoted ℵ₀ (aleph-null), the smallest infinite cardinality
- |ℝ| is denoted 𝔠 (the cardinality of the continuum)
- Each power set has strictly greater cardinality than the original set

**Key Properties:**

1. **Closure:** The union of countably many countable sets is countable
2. **Cartesian Product:** ℕ × ℕ is countable (can be enumerated diagonally)
3. **Subsets:** Any subset of a countable set is countable
4. **Complements:** If A is countable and B is uncountable, then B - A is uncountable

**Why This Matters:**

- Shows there are different "sizes" of infinity
- Establishes that most real numbers are transcendental (algebraic numbers are countable, reals are uncountable)
- Foundational for measure theory, probability, and real analysis
- Demonstrates limits of enumeration and computation

## Cantor's Theorem

**Cantor's Theorem:** For any set A, the power set 𝒫(A) has strictly greater cardinality than A itself.

**Statement:** |A| < |𝒫(A)| for all sets A.

**Why It's Fundamental:**

Cantor's theorem proves there is no "largest" infinity. Starting from any infinite set, you can always construct a larger one by taking its power set:

|ℕ| < |𝒫(ℕ)| < |𝒫(𝒫(ℕ))| < |𝒫(𝒫(𝒫(ℕ)))| < ...

This creates an infinite hierarchy of infinities, each strictly larger than the previous.

**Proof (by contradiction):**

We'll prove no bijection f: A → 𝒫(A) can exist.

**Step 1:** Assume f: A → 𝒫(A) is a bijection (onto and one-to-one)

**Step 2:** Define the "diagonal" set D:

D = {x ∈ A | x ∉ f(x)}

In words: D contains all elements of A that are not members of their own image under f.

**Step 3:** Since f is onto (surjective), D must be in the range of f. So there exists some d ∈ A such that f(d) = D.

**Step 4:** Ask: Is d ∈ D?

**Case 1:** Suppose d ∈ D
- By definition of D, this means d ∉ f(d)
- But f(d) = D
- So d ∉ D
- **Contradiction**

**Case 2:** Suppose d ∉ D
- Then d does not satisfy the condition for membership in D
- So it's not true that d ∉ f(d)
- Therefore d ∈ f(d)
- But f(d) = D
- So d ∈ D
- **Contradiction**

**Step 5:** Either way we get a contradiction. Therefore our assumption that f is a bijection must be false.

**Conclusion:** No bijection A → 𝒫(A) exists, so |A| < |𝒫(A)|. ∎

**Why the Diagonal Method Works:**

The set D is constructed to "diagonalize" against f—for every element a ∈ A, D differs from f(a) on the membership of a itself. This ensures D cannot equal f(a) for any a.

This is the same technique used in Cantor's diagonal argument for uncountability of ℝ.

**Applications:**

1. **Infinite Hierarchy:** Proves there are infinitely many sizes of infinity
2. **Uncomputability:** Related to the halting problem (diagonalization shows some functions are uncomputable)
3. **Foundations:** Shows naive set theory leads to Russell's paradox (the "set of all sets" would violate Cantor's theorem)

**Example (Finite Case):**

Let A = {1, 2}
- |A| = 2
- 𝒫(A) = {∅, {1}, {2}, {1,2}}
- |𝒫(A)| = 4 = 2²

Indeed, 2 < 4, confirming |A| < |𝒫(A)|.

**General Formula (Finite Sets):**

If |A| = n, then |𝒫(A)| = 2ⁿ.

For infinite sets, this generalizes: if |A| = κ, then |𝒫(A)| = 2^κ (using cardinal exponentiation).

## Set Operation Properties

### Commutative Laws

$$A \cup B = B \cup A$$
$$A \cap B = B \cap A$$

### Associative Laws

$$A \cup (B \cup C) = (A \cup B) \cup C$$
$$A \cap (B \cap C) = (A \cap B) \cap C$$

### Distributive Laws

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$
$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$

### Identity Laws

$$A \cup \varnothing = A$$
$$A \cap U = A$$

Where $U$ is the universal set.

### Complement Laws

$$A \cup A' = U$$
$$A \cap A' = \varnothing$$
$$(A')' = A$$

### De Morgan's Laws

**De Morgan's Laws** relate complements to unions and intersections:

$$(A \cup B)' = A' \cap B'$$

The complement of a union is the intersection of the complements.

$$(A \cap B)' = A' \cup B'$$

The complement of an intersection is the union of the complements.

**Generalized De Morgan's Laws:** For any collection of sets:

$$\left(\bigcup_{i} A_i\right)' = \bigcap_{i} A_i'$$

$$\left(\bigcap_{i} A_i\right)' = \bigcup_{i} A_i'$$

**Example:** If $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$ with universal set $U = \{1, 2, 3, 4, 5, 6\}$:

- $A \cup B = \{1, 2, 3, 4, 5\}$
- $(A \cup B)' = \{6\}$
- $A' = \{4, 5, 6\}$
- $B' = \{1, 2, 6\}$
- $A' \cap B' = \{6\}$ ✓

### Absorption Laws

$$A \cup (A \cap B) = A$$
$$A \cap (A \cup B) = A$$

### Domination Laws

$$A \cup U = U$$
$$A \cap \varnothing = \varnothing$$

### Idempotent Laws

$$A \cup A = A$$
$$A \cap A = A$$

## Ordered Pairs (Kuratowski's definition)

**Ordered Pair:** An ordered pair with **first coordinate** *a* and **second coordinate** *b*, usually denoted by **(a, b)**, is a mathematical object where **order matters**.

**Notation:** (a, b) or ⟨a, b⟩

**Key Property:** Two ordered pairs are equal if and only if their corresponding coordinates are equal:

$$(a, b) = (c, d) \Longleftrightarrow a = c \text{ and } b = d$$

**Why We Need a Formal Definition:**

Unlike sets, where {a, b} = {b, a} (order doesn't matter), ordered pairs must distinguish (a, b) from (b, a).

The naive approach using sets fails:
- {a, b} = {b, a}, so this doesn't capture order
- We need a set-theoretic construction that preserves order

**Kuratowski's Definition:**

The ordered pair (a, b) is formally defined as the set:

$$(a, b) := \{\{a\}, \{a, b\}\}$$

**Why This Definition Works:**

This construction encodes the order by:
1. First coordinate appears in a singleton: {a}
2. Both coordinates appear together: {a, b}
3. The singleton {a} uniquely identifies the first coordinate


**Proof That Kuratowski's Definition Works:**

We need to prove: $\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\} \Longleftrightarrow a = c \text{ and } b = d$

**Forward direction (⇒):**

Assume $\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$

Since sets are equal, their elements must match. The singleton {a} must equal either {c} or {c, d}.

**Case 1:** If {a} = {c}, then a = c ✓

Now the remaining elements must match: {a, b} = {c, d} = {a, d}, so b = d ✓

**Case 2:** If {a} = {c, d}, then c = d (the set is a singleton), so c = d = a

Then {a, b} must equal {c} = {a}, so b = a. Thus a = b = c = d ✓

In both cases, we get a = c and b = d.

**Backward direction (⇐):**

If a = c and b = d, then $\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$ by direct substitution ✓

**Special Case (a = b):**

When a = b, the ordered pair becomes:
$$(a, a) = \{\{a\}, \{a, a\}\} = \{\{a\}, \{a\}\} = \{\{a\}\}$$

The proof still works: if $\{\{a\}\} = \{\{c\}, \{c, d\}\}$, then {c} = {c, d}, so c = d = a.

**Cartesian Product:** The Cartesian product of two sets **A** and
**B**, written **A X B**, is the set of all ordered pairs in which the
first element belongs to **A** and the second belongs to **B**.

![A black text on a white background Description automatically
generated](./media/image36.png)

**The cardinality of \|A X B\| = \|A\|\|B\|**

A table can be created by taking the Cartesian product of a set of rows
and a set of columns. If the Cartesian product **rows** *×* **columns**
is taken, the cells of the table contain ordered pairs of the form (row
value, column value).\[4\]

![A diagram of a graph Description automatically
generated](./media/image37.png)

![](./media/image38.png)

