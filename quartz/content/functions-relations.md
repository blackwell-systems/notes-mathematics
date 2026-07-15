---
title: "Functions & Relations"
prerequisites: ["set-theory"]
enables: ["calculus", "statistics"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Set Theory](./set-theory)
> **Leads to:** [Calculus](./calculus) · [Statistics](./statistics)


## Why Study Functions?

Much of mathematics, science, and everyday life involves understanding how one quantity depends on another. When you check the weather forecast, you are looking at a relationship between time and temperature. When you calculate how far you travel at a given speed, you are connecting distance to time. These input-output relationships are everywhere, and **functions** are the mathematical tool we use to describe them precisely.

Before we define functions formally, we need a broader concept: the **relation**.

**Relation (informal):** A relation is any rule or association that pairs elements from one set with elements of another. For example, "is the capital of" is a relation that pairs cities with countries (Ottawa with Canada, Tokyo with Japan).

**Function (informal):** A function is a special kind of relation where each input is paired with exactly one output. If you input a specific time into a temperature function, you get back one temperature, not two or three.

Consider a simple example: suppose you are driving at a constant 60 miles per hour. The distance you have traveled depends on the time you have been driving:

| Time (hours) | Distance (miles) |
|---|---|
| 1 | 60 |
| 2 | 120 |
| 3 | 180 |

Each input (time) produces exactly one output (distance), so this is a function. We could write it as $f(t) = 60t$.

Not every relation is a function. For instance, the relation "is a student at" might pair one person with multiple schools (if they transferred). A function requires that each input maps to a single output.

With this intuition in place, we can now state the formal definitions.

## Relation

**Relation:** A **relation** is a set of ordered pairs, where each pair
consists of an element from one set, called the **domain**, and an
element from another set, called the **codomain**.

The relation specifies a relationship between these elements, indicating
how elements from the **domain** are associated with elements in the
**codomain**.

**Definition**: A relation **𝑅** from set **𝐴** to set **𝐵** is a
subset of the Cartesian product **𝐴×𝐵**, which means

$R \subseteq A \times B$

Each element of $R$ is an ordered pair $(a,b)$ where $a \in A$ and
$b \in B$.

We may state that **x** bears relation **R** to **y** by writing **xRy**

Key Concepts

1.  **Domain, Codomain**, **Range, Image**

-   The **domain** of a relation is the set of all possible first
    elements (inputs) in the ordered pairs.

-   The **codomain** (or target set) is the set of all possible second
    elements (outputs) in the ordered pairs.

-   The **range** is the set of *actual outputs* in the
    relation, which is a subset of the codomain.

-   The **image** a relation, often used in the context of specific
    subsets of the domain, is the set of actual outputs that the
    relation produces when applied to a particular subset of its domain.
    For a given subset of the domain, the image refers to the outputs
    that the function generates from that subset.

**In summary:**

**Domain**: All possible inputs.

**Codomain**: All possible outputs (as defined for the function or
relation).

**Range**: The ***actual outputs produced by the
relation*** over its entire domain (a subset of the
codomain).

**Image**: The set of actual outputs for a specific subset of inputs
(may be the same as the range if considering the whole domain).

2.  **Ordered Pairs**

-   An **ordered pair** (𝑎,𝑏) consists of two elements, where 𝑎 is from
    the domain and 𝑏 is from the codomain. The order of elements
    matters, meaning (𝑎,𝑏) ≠ (𝑏,𝑎) unless 𝑎 = 𝑏.

3.  Types of Relation

-   **Function**: A special type of relation where each element in the
    domain is associated with exactly one element in the codomain. For
    every 𝑎 in the domain, there is a unique 𝑏 in the codomain such that
    (𝑎,𝑏) is in the relation.

### Properties of Relations

**Properties of Relations**

#### Reflexive Property

**Reflexive Property:** A relation R on a set A is said to be reflexive
if every element of A is related to itself. In other words, for all a in
A, the pair **(a,a)** is in the relation R.

$$
\forall a \in A \, (a \in A \to R(a, a))
$$

The reflexive property of relations can be understood from a directed
graph by looking for a loop on each element going back to itself.

The reflexive property of relations can be understood from a matrix by
looking for a diagonal connecting from top left corner to bottom right
corner

![Reflexive relation shown as directed graph with self-loops and adjacency matrix with filled diagonal](./media/image42.png)

#### Symmetric Property

**Symmetric Property:**

A relation **R** on a set **A** is said to be **symmetric** if, whenever
an element a is related to an element **b**, then **b** is also related
to **a**.

In other words, if $(a,b) \in R$, then $(b,a)$ must
also be in $R$.

$$
\forall a,b \in A \, ( R(a,b) \to R(b,a) )
$$

#### Transitive Property

**Transitive Property:**

A relation **R** on a set **A** is said to be **transitive** if,
whenever an element **a** is related to an element **b** and **b** is
related to an element **c**, then **a** must also be related to **c**.

In other words, if $(a,b) \in R$ and $(b,c) \in R$ then $(a,c)$ must
also be in $R$.

$$
\forall a,b,c \in A \, ( ( R(a,b) \wedge R(b,c) ) \to R(a,c) )
$$

#### Antisymmetric Property

**Antisymmetric Property:** A relation **R** on a set **A** is **antisymmetric** if whenever both (a,b) and (b,a) are in R, then a must equal b.

$$
\forall a,b \in A \, ( (R(a,b) \wedge R(b,a)) \to a = b )
$$

**Example:** The "less than or equal to" relation (≤) on real numbers is antisymmetric:
- If a ≤ b and b ≤ a, then a = b

**Non-example:** The relation "x and y have the same absolute value" on integers is NOT antisymmetric:
- $(2,-2)$ and $(-2,2)$ both hold (since $|2| = |-2|$), but $2 \neq -2$

#### Asymmetric Property

**Asymmetric Property:** A relation **R** on a set **A** is **asymmetric** if whenever (a,b) is in R, then (b,a) cannot be in R.

$$
\forall a,b \in A \, ( R(a,b) \to \neg R(b,a) )
$$

**Example:** The "less than" relation (<) on real numbers is asymmetric:
- If a < b, then b ≮ a (b is not less than a)

**Note:** Asymmetric implies antisymmetric, but not vice versa.

#### Irreflexive Property

**Irreflexive Property:** A relation **R** on a set **A** is **irreflexive** if no element is related to itself.

$$
\forall a \in A \, ( \neg R(a,a) )
$$

**Example:** The "less than" relation (<) on real numbers is irreflexive:
- No number is less than itself

**Note:** Irreflexive is NOT the same as "not reflexive." A relation can be neither reflexive nor irreflexive.

### Partial Order

**Partial Order:** A relation **R** on a set **A** is a **partial order** if it is:
1. **Reflexive:** Every element is related to itself
2. **Antisymmetric:** If a R b and b R a, then a = b
3. **Transitive:** If a R b and b R c, then a R c

Notation: Often written as ≤ or ⊑

**Examples:**

1. **Subset relation** ($\subseteq$) on sets:
   - Every set is a subset of itself (reflexive)
   - If $A \subseteq B$ and $B \subseteq A$, then $A = B$ (antisymmetric)
   - If $A \subseteq B$ and $B \subseteq C$, then $A \subseteq C$ (transitive)

2. **"Divides" relation (|)** on positive integers:
   - Every number divides itself (reflexive)
   - If a|b and b|a, then a = b (antisymmetric)
   - If a|b and b|c, then a|c (transitive)

3. **Less than or equal (≤)** on real numbers

**Partially ordered set (poset):** A set **A** together with a partial order relation is called a poset, denoted (A, ≤).

**Why "partial"?** Not every pair of elements needs to be comparable. For example, with subset relation, {1,2} and {3,4} are incomparable (neither is a subset of the other).

### Hasse Diagrams

**Hasse Diagram:** A visual representation of a finite partially ordered set (poset) that shows the ordering relationships between elements.

**Construction Rules:**
1. Place elements vertically - if a ≤ b, place b above a
2. Draw a line from a to b if a < b and there is no c such that a < c < b (direct covering)
3. Omit reflexive loops (implied by definition)
4. Omit transitive edges (can be inferred)

**Example 1 - Divisibility on {1, 2, 3, 4, 6, 12}:**

```mermaid
graph TB
    12 --- 6
    12 --- 4
    6 --- 3
    6 --- 2
    4 --- 2
    3 --- 1
    2 --- 1
```

Reading the diagram:
- 1 divides everything (bottom)
- 12 is divisible by everything (top)
- 2 divides 4 and 6 (connected below)
- 3 divides 6 (connected below)
- 4 and 3 are incomparable (no path between them)

**Example 2 - Subset relation on P({a, b}) (power set of {a, b}):**

```mermaid
graph TB
    AB["{a, b}"] --- A["{a}"]
    AB --- B["{b}"]
    A --- E["{}"]
    B --- E
```

Reading the diagram:
- {} (empty set) is at the bottom (subset of all)
- {a, b} is at the top (contains all elements)
- {a} and {b} are incomparable (neither is subset of the other)
- Transitivity implied: $\{\} \subseteq \{a\} \subseteq \{a, b\}$

**Example 3 - Divisibility on {1, 2, 3, 5, 6, 10, 15, 30}:**

```mermaid
graph TB
    30 --- 15
    30 --- 10
    30 --- 6
    15 --- 5
    15 --- 3
    10 --- 5
    10 --- 2
    6 --- 3
    6 --- 2
    5 --- 1
    3 --- 1
    2 --- 1
```

**Key Properties:**

1. **Maximal Elements:** Elements with no elements above them
   - In divisibility example: 12 is maximal
   - In power set example: {a, b} is maximal

2. **Minimal Elements:** Elements with no elements below them
   - In divisibility example: 1 is minimal
   - In power set example: {} is minimal

3. **Greatest Element (Top):** Element greater than or equal to all others
   - Exists if there's a single maximal element comparable to everything
   - Example: {a, b} in power set

4. **Least Element (Bottom):** Element less than or equal to all others
   - Exists if there's a single minimal element comparable to everything
   - Example: {} in power set, 1 in divisibility

5. **Covering Relation:** In the diagram, a covers b (written a ⋗ b) if a > b and there is no c with a > c > b
   - Hasse diagrams show only covering relations

**Reading Hasse Diagrams:**

- **Comparable:** Two elements are comparable if there's a path between them (going up or down)
- **Incomparable:** Two elements are incomparable if there's no path between them
- **To find a ≤ b:** Check if you can go upward from a to reach b

**Applications:**
- Visualizing partial orders
- Finding maximal/minimal elements
- Identifying chains (totally ordered subsets)
- Analyzing lattice structures

### Total Order (Linear Order)

**Total Order:** A partial order where **every pair** of elements is comparable.

A relation **R** on **A** is a total order if it is:
1. Reflexive
2. Antisymmetric  
3. Transitive
4. **Total:** $\forall a,b \in A \, ( R(a,b) \vee R(b,a) )$

**Examples:**
- ≤ on real numbers (you can always compare two numbers)
- Alphabetical order on strings

**Non-example:**
- Subset relation ($\subseteq$) is NOT a total order because some sets are incomparable

### Equivalence Relation

**Equivalence Relation:** An equivalence relation is a way to formally
define when two elements of a set can be considered "equivalent" or
"similar" in some sense, according to specific criteria.

Equivalence relations are fundamental in mathematics because they allow
us to group elements of a set into distinct classes of equivalent items,
which simplifies the study and understanding of complex structures.

A relation **R** on a set **A** is called an **equivalence relation** if
it satisfies the following three properties:

1.  **Reflexivity:**

$$
\forall a \in A : (a,a) \in R
$$

This means that every element is related to itself.

2.  **Symmetry:**

$$
\forall a,b \in A \, (R(a,b) \to R(b,a))
$$

This means that if a is related to b, then b is also related to a.

3.  **Transitivity:**

$$
\forall a,b,c \in A \, (( R(a,b) \wedge R(b,c) ) \to R(a,c))
$$

This means that if a is related to b and b is related to c, then a is
also related to c.

**Key Concepts and Why They Matter:**

**1. Partitioning a Set:**

**Definition:** An equivalence relation partitions a set into
equivalence classes. Each equivalence class is a subset of the original
set, containing elements that are all equivalent to each other under the
given relation.

**Importance:** This partitioning allows us to break down large or
complex sets into smaller, more manageable subsets. Instead of dealing
with individual elements, we can work with entire classes, which
simplifies many problems in mathematics.

**Example:** Consider the set of all integers. The equivalence relation
"congruence modulo 3" divides this set into three equivalence classes:
numbers that leave a remainder of 0, 1, or 2 when divided by 3. Instead
of analyzing each integer separately, we can study the properties of
these three classes.

**Why Equivalence Relations Matter:**

-   **Classification and Simplification:** They provide a systematic way
    to classify and simplify mathematical objects by grouping elements
    that share a common property. This is particularly valuable in
    reducing complexity.

-   **Revealing Structure:** Equivalence relations often reveal hidden
    structure in a set, allowing us to understand it more deeply by
    studying its equivalence classes rather than individual elements.

-   **Generalization:** They generalize the concept of equality,
    enabling broader comparisons and connections between different
    mathematical entities.

-   **Applications Across Mathematics:** They are fundamental in many
    areas of mathematics and its applications, from abstract algebra and
    geometry to computer science and topology.

### Equivalence Classes

**Equivalence Class:** Given an equivalence relation **R** on a set **A** and an element $a \in A$, the equivalence class of **a** is the set of all elements in **A** that are related to **a** under **R**.

**Notation:** $[a]_R$ or simply $[a]$

**Definition:** $[a] = \{x \in A \mid (a,x) \in R\}$ or $[a] = \{x \in A \mid aRx\}$

**Example 1 - Congruence modulo 3:**
- Let **R** be "congruence modulo 3" on integers: $a R b$ if $3 \mid (a-b)$
- $[0] = \{\ldots, -6, -3, 0, 3, 6, 9, \ldots\}$ (all multiples of 3)
- $[1] = \{\ldots, -5, -2, 1, 4, 7, 10, \ldots\}$ (numbers with remainder 1)
- $[2] = \{\ldots, -4, -1, 2, 5, 8, 11, \ldots\}$ (numbers with remainder 2)
- Note: $[3] = [0]$, $[4] = [1]$, $[5] = [2]$ (classes repeat)

**Example 2 - Same age relation:**
- Let **R** be "has the same age" on a set of people
- $[Alice] = \{\text{all people who are the same age as Alice}\}$
- If Alice is 25, then $[Alice] = \{\text{all 25-year-olds}\}$

**Properties of Equivalence Classes:**

1. **Non-empty:** Every equivalence class contains at least one element (itself)
   - $a \in [a]$ (by reflexivity)

2. **Partition property:** Either $[a] = [b]$ or $[a] \cap [b] = \emptyset$
   - Two equivalence classes are either identical or completely disjoint
   - No element belongs to more than one equivalence class

3. **Union equals the whole set:** $\bigcup_{a \in A} [a] = A$
   - Every element belongs to some equivalence class

4. **Representative element:** Any element of an equivalence class can serve as its representative
   - If $b \in [a]$, then $[b] = [a]$

### Quotient Set (Set of Equivalence Classes)

**Quotient Set:** The set of all distinct equivalence classes under an equivalence relation **R** on set **A**.

**Notation:** $A/R$ (read as "A modulo R" or "A mod R")

**Definition:** $A/R = \{[a] \mid a \in A\}$

**Example 1 - Integers modulo 3:**
- $\mathbb{Z}/R = \{[0], [1], [2]\}$
- Only three distinct equivalence classes

**Example 2 - Rational numbers:**
- Consider fractions: $(a,b) R (c,d)$ if $ad = bc$ (equivalent fractions)
- $\mathbb{Z} \times \mathbb{Z}^* / R = \mathbb{Q}$ (the rational numbers)
- $[(2,3)] = [(4,6)] = [(6,9)] = \ldots$ (all representations of 2/3)

**Example 3 - Points on a circle:**
- Let **R** be "has the same distance from origin" on $\mathbb{R}^2$
- Each equivalence class is a circle
- The quotient set represents all possible distances (all non-negative reals)

### Composition of Relations

**Composition of Relations:** Given relations $R \subseteq A \times B$ and $S \subseteq B \times C$, the composition $S \circ R$ is a relation from **A** to **C**.

**Definition:** $(a,c) \in S \circ R$ if and only if there exists $b \in B$ such that $(a,b) \in R$ and $(b,c) \in S$

**Notation:** $S \circ R$ (read as "S composed with R" or "S after R")

**Note:** Order matters - apply **R** first, then **S**

**Example 1:**
- Let $R = \{(1,2), (1,3), (2,4)\}$ on $A = \{1,2,3\}$ to $B = \{2,3,4\}$
- Let $S = \{(2,5), (3,6), (4,5)\}$ on $B = \{2,3,4\}$ to $C = \{5,6\}$
- $S \circ R$:
  - $(1,2) \in R$ and $(2,5) \in S$ → $(1,5) \in S \circ R$
  - $(1,3) \in R$ and $(3,6) \in S$ → $(1,6) \in S \circ R$
  - $(2,4) \in R$ and $(4,5) \in S$ → $(2,5) \in S \circ R$
- Result: $S \circ R = \{(1,5), (1,6), (2,5)\}$

**Example 2 - Parent relation:**
- Let **P** be "is a parent of"
- $P \circ P$ means "is a grandparent of"
- If $(a,b) \in P$ (a is parent of b) and $(b,c) \in P$ (b is parent of c), then $(a,c) \in P \circ P$ (a is grandparent of c)

**Properties:**
- Composition is **associative:** $(T \circ S) \circ R = T \circ (S \circ R)$
- Composition is generally **not commutative:** $S \circ R \neq R \circ S$

**Composition and Relation Properties:**
- If **R** and **S** are both **transitive**, $S \circ R$ may not be transitive. For example, let $R = \{(1,2),(3,4)\}$ and $S = \{(2,3),(4,5)\}$; both are transitive (no two pairs chain together). But $S \circ R = \{(1,3),(3,5)\}$, which contains $(1,3)$ and $(3,5)$ yet not $(1,5)$, so it is not transitive
- If **R** is **reflexive** and **transitive**, then $R \circ R = R$

### Closure of Relations

**Closure:** The closure of a relation **R** with respect to a property **P** is the smallest relation that:
1. Contains **R** as a subset
2. Has property **P**

#### Reflexive Closure

**Reflexive Closure:** The smallest reflexive relation containing **R**.

**Notation:** $r(R)$

**Definition:** $r(R) = R \cup \{(a,a) \mid a \in A\}$

**Construction:** Add all pairs $(a,a)$ for every element in the set.

**Example:**
- Let $R = \{(1,2), (2,3)\}$ on $A = \{1,2,3\}$
- $r(R) = \{(1,2), (2,3), (1,1), (2,2), (3,3)\}$

#### Symmetric Closure

**Symmetric Closure:** The smallest symmetric relation containing **R**.

**Notation:** $s(R)$

**Definition:** $s(R) = R \cup R^{-1}$ where $R^{-1} = \{(b,a) \mid (a,b) \in R\}$

**Construction:** For every pair $(a,b)$ in **R**, add $(b,a)$ if not already present.

**Example:**
- Let $R = \{(1,2), (2,3), (3,3)\}$
- $R^{-1} = \{(2,1), (3,2), (3,3)\}$
- $s(R) = \{(1,2), (2,1), (2,3), (3,2), (3,3)\}$

#### Transitive Closure

**Transitive Closure:** The smallest transitive relation containing **R**.

**Notation:** $t(R)$ or $R^+$

**Definition:** $t(R) = R \cup R^2 \cup R^3 \cup \ldots$ where $R^n = R \circ R \circ \ldots \circ R$ (n times)

**Construction:** Keep composing **R** with itself until no new pairs are added.

**Example:**
- Let $R = \{(1,2), (2,3), (3,4)\}$ on $A = \{1,2,3,4\}$
- $R^2 = R \circ R = \{(1,3), (2,4)\}$
- $R^3 = R^2 \circ R = \{(1,4)\}$
- $R^4 = R^3 \circ R = \emptyset$ (no new pairs)
- $t(R) = R \cup R^2 \cup R^3 = \{(1,2), (2,3), (3,4), (1,3), (2,4), (1,4)\}$

**Interpretation:** If you can get from **a** to **b** in one or more steps, then $(a,b)$ is in the transitive closure.

**Warshall's Algorithm:** Efficient method to compute transitive closure using matrices (not covered here).

#### Reflexive-Transitive Closure

**Reflexive-Transitive Closure:** The smallest relation that is both reflexive and transitive containing **R**.

**Notation:** $R^*$

**Definition:** $R^* = R^0 \cup R^1 \cup R^2 \cup \ldots$ where $R^0 = \{(a,a) \mid a \in A\}$

**Construction:** Add reflexivity, then compute transitive closure (or vice versa).

**Example:**
- Let $R = \{(1,2), (2,3)\}$ on $A = \{1,2,3\}$
- $R^* = \{(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)\}$

**Application:** Used in defining "reachability" in graphs, regular expressions, and formal languages.

### Inverse Relations

**Inverse Relation:** Given a relation $R \subseteq A \times B$, the inverse relation $R^{-1} \subseteq B \times A$ reverses the order of all pairs.

**Definition:** $R^{-1} = \{(b,a) \mid (a,b) \in R\}$

**Example:**
- Let $R = \{(1,2), (1,3), (2,4)\}$
- $R^{-1} = \{(2,1), (3,1), (4,2)\}$

**Properties:**
- $(R^{-1})^{-1} = R$
- $(S \circ R)^{-1} = R^{-1} \circ S^{-1}$ (order reverses)
- If **R** is symmetric, then $R = R^{-1}$

## Function

### Vertical Line Test

**Vertical Line Test:** A graph in the coordinate plane represents a function if and only if every vertical line intersects the graph at most once.

**Why this works:** A function assigns exactly one output to each input. A vertical line at $x = a$ passes through every point with that $x$-value. If the line crosses the graph at two or more points, then the input $a$ would map to multiple outputs, violating the definition of a function.

**Examples:**
- The graph of $y = x^2$ passes the vertical line test (each vertical line hits the parabola at most once), so it is a function.
- The graph of $x^2 + y^2 = 1$ (a circle) fails the vertical line test. For instance, the vertical line $x = 0$ intersects the circle at both $(0, 1)$ and $(0, -1)$.

**Function:** A function is a relation that uniquely associates each
element of a set, called the **domain**, with exactly one element of
another set, called the **codomain**.

A function **f** from a set **X** (called the **domain**) to a set **Y**
(called the **codomain**) is a **rule or mapping** that **assigns to
each element** **x** in **X** **exactly one element** **y** in **Y**.

The element **y** is called the **image** of **x** under the function
**f**, and it is often denoted as **f(x)**.

Precise definition of a function:

A function is formed by three sets, the **domain** **X,** the
**codomain** **Y**, and the **graph R** that satisfy the three following
conditions.

![Three conditions defining a function: graph as subset of X times Y, totality, and single-valuedness](./media/image43.png)

Each function type has characteristic domain restrictions. See [Rational Functions](./rational-functions) (excluded zeros of denominator), [Radical Functions](./radical-functions) (non-negative under even roots), and [Logarithms](./logarithms) (positive arguments only).

**1. Domain of a Function:**

The **domain** of a function **f : X → Y** is the set **X**. It includes
all the possible inputs that the function can accept.

**Example**: For the function **f(x) =** $\sqrt{\mathbf{x}}$, the domain
is $X = \{ x \in \mathbb{R} \mid x \geq 0 \}$, because the square root function is only
defined for non-negative real numbers.

**2. Codomain of a Function:**

The **codomain** of a function **f : X → Y**, which includes all
possible outputs that the function is allowed to produce according to
its definition.

The **codomain** is specified as part of the function's definition,
even if not all elements of the **codomain** are actually reached by
the function.

**3. Range of a Function:**

The range of a function **f : X → Y** is the set of all actual
outputs that the function produces when applied to every
element in its domain **X**.

The range is therefore a subset of the codomain.

**4. Image of a Function:**

The **image** of a function is similar to the **range** but often refers
to the outputs corresponding to a specific subset of the domain. If the
subset in question is the entire **domain**, then the **image** and the
**range** are the same. For a particular subset $A \subseteq X$, the image of
**A** under **f** is denoted as **f(A)**.

![Definition callout: f(a) is the image of a under the function f from X to Y](./media/image44.png)

### Domain

The domain of a function **f** is the set **X**, which includes all the
possible inputs for the function. In terms of ordered pairs, the domain
is the set of all possible first values (the input values) in those
pairs.

$$
\text{Dom}(f) = A \iff \forall x \, (x \in A \leftrightarrow \exists y \, f(x) = y)
$$

$$
\text{Dom}(f) = \{ x \mid \exists y \, f(x) = y \}
$$

### Codomain

The **codomain** of a function **f : X → Y**

includes all possible outputs that the function is allowed to produce
according to its definition

The **codomain** is specified as part of the function's definition,
even if not all elements of the **codomain** are actually reached by the
function. This contrasts with range, which represents the actually
mapped values of the **codomain**.

$$
\text{Cod}(f) = B \iff \forall x \in \text{Dom}(f), \, \exists y \in B \, (f(x) = y)
$$

### Range

The range of a function **f : X → Y** is the set of all actual
outputs that the function produces when applied to every
element in its domain **X**. The range is therefore a subset of the
codomain.

$$
\text{Range}(f) = \{ y \in \text{Cod}(f) \mid \exists x \in \text{Dom}(f), \, f(x) = y \}
$$

$$
\text{Range}(f) = \{ f(x) \mid x \in \text{Dom}(f) \}
$$

Explanation:

-   $\forall y$: For all elements **y** in the codomain.

-   $y \in \text{Range}(f) \leftrightarrow \exists x \, ( x \in X \wedge f(x) = y)$:

    -   This states that **y** is in the **range** of the function **f**
        iff. there exists an element **x** in the domain **X** such that
        **(x) = y**.

    -   In other words, for each **y** in the **range**, there is at
        least one **x** in the **domain** that maps to **y**.

### Image

The **image** of a function is similar to the **range** but often refers
to the outputs corresponding to a specific subset of the domain.

*If the subset in question is the entire **domain**, then the **image**
and the **range** are the same.*

For a particular subset $A \subseteq X$, the image of **A** under **f** is
denoted as **f(A)**.

### Preimage

The **preimage** of a set under a function is a concept that refers to
the set of all elements in the domain that map to a given subset of the
codomain.

In other words, for a function:

**f : X → Y** and a subset **B** of the codomain **Y**, the preimage of
**B** under **f** is the set of all elements in the domain **X** that
**f** maps into **B**.

$f^{-1}(B) = \{ x \in X \mid f(x) \in B \}$

The **preimage** of a set **B** under a function **f** is the set of all
elements in the domain **X** that map to elements in **B** in the
codomain **Y**.

One should not be misled by the notation into thinking of the preimage
as having to do with an inverse of **f**. The preimage is defined whether
f has an inverse or not. **Note that however** if f does have an
inverse, then the preimage is exactly the image of Y under the inverse
map.

### Injection (one-to-one)

**Injection:** A function is **injective** if every element in the
domain maps to one and only one element in the codomain.

$\forall x_1 \forall x_2 ( (f(x_1) = f(x_2)) \rightarrow (x_1 = x_2) )$

*For every $x_1$, $x_2$ if $f(x_1) = f(x_2)$, then $x_1$ must equal $x_2$*

![Symbolic definition of surjective: for every y in Y there exists x in X with f(x) equals y](./media/image47.png)

![Mapping diagram of a non-surjective function where the image is a small yellow oval not filling codomain Y](./media/image50.png)

### Bijection (injective and surjective)

A function is bijective if and only if it is
both **injective** **(or *one-to-one*)---**meaning that each element in
the codomain is mapped to from at most one element of the
domain---and **surjective** **(or *onto*)---**meaning that each element
of the codomain is mapped to from at least one element of the domain. 

![Combined bijection definition conjoining injectivity and surjectivity conditions with explanation](./media/image51.png)

### Invertibility

**Let f: A → B**

**f is invertible if there exists a function g: B → A such that:**

$\forall x \in A, \, g(f(x)) = x \wedge \forall y \in B, \, f(g(y)) = y.$

**In this case, g is called the inverse of f, written f^−1**

**Important:** A function is invertible if and only if it is bijective (both injective and surjective).

## Identity Function

**Identity Function:** The identity function on a set **X**, denoted **id_X** or simply **id**, is a function that maps every element to itself.

**Definition:** $id_X : X \rightarrow X$ defined by $id_X(x) = x$ for all $x \in X$

**Properties:**
- The identity function is bijective
- For any function $f: A \rightarrow B$:
  - $f \circ id_A = f$ (composing with identity on domain)
  - $id_B \circ f = f$ (composing with identity on codomain)
- The identity function is its own inverse: $id_X^{-1} = id_X$

**Example:** For the set of real numbers $\mathbb{R}$, the identity function is $id(x) = x$. So $id(5) = 5$, $id(-3.7) = -3.7$, etc.

## Inverse Functions

The exponential and logarithm are the most important pair of inverse functions. See [Exponential Functions](./exponential-functions) and [Logarithms](./logarithms).

**Inverse Function:** If a function **f: A → B** is bijective, then there exists a unique function **f^−1: B → A** called the inverse function, such that:

- $f^{-1}(f(x)) = x$ for all $x \in A$
- $f(f^{-1}(y)) = y$ for all $y \in B$

**Finding an Inverse:**

1. Start with $y = f(x)$
2. Solve for $x$ in terms of $y$
3. Swap variables: write $y = f^{-1}(x)$

**Example:** Find the inverse of $f(x) = 2x + 3$

1. Let $y = 2x + 3$
2. Solve for $x$: $x = \frac{y - 3}{2}$
3. Therefore: $f^{-1}(x) = \frac{x - 3}{2}$

**Verification:**
- $f^{-1}(f(x)) = f^{-1}(2x + 3) = \frac{(2x + 3) - 3}{2} = \frac{2x}{2} = x$ ✓
- $f(f^{-1}(x)) = f\left(\frac{x - 3}{2}\right) = 2\left(\frac{x - 3}{2}\right) + 3 = x - 3 + 3 = x$ ✓

**Properties of Inverse Functions:**

- The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$
- $(f^{-1})^{-1} = f$ (inverse of inverse is the original function)
- If $f$ and $g$ are both invertible, then $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ (reverse order)
- Domain of $f^{-1}$ = Range of $f$
- Range of $f^{-1}$ = Domain of $f$

**When Does an Inverse Exist?**

A function has an inverse if and only if it is bijective:
- **Injective** (one-to-one): No two inputs map to the same output
- **Surjective** (onto): Every element in the codomain is mapped to

**Horizontal Line Test:** A function has an inverse if and only if every horizontal line intersects its graph at most once.

## Composition of Functions

Function composition is the mathematical foundation of the chain rule in [Calculus](./calculus), which is in turn the basis of backpropagation in machine learning.

**Function Composition:** The composition of two functions **f: A → B** and **g: B → C** is a new function **g ∘ f: A → C** defined by:

$$(g \circ f)(x) = g(f(x))$$

Read as "g composed with f" or "g of f of x".

**Important:** The order matters! $g \circ f$ means "apply f first, then apply g to the result."

**Example:**

Let $f(x) = x^2$ and $g(x) = x + 3$

- $(g \circ f)(x) = g(f(x)) = g(x^2) = x^2 + 3$
- $(f \circ g)(x) = f(g(x)) = f(x + 3) = (x + 3)^2 = x^2 + 6x + 9$

Notice: $g \circ f \neq f \circ g$ (composition is not commutative in general)

**Properties of Composition:**

1. **Associativity:** $(h \circ g) \circ f = h \circ (g \circ f)$
   
   You can compose in any grouping, as long as the order stays the same.

2. **Identity:** For any function $f: A \rightarrow B$:
   - $f \circ id_A = f$
   - $id_B \circ f = f$

3. **Inverses:** If $f$ and $g$ are invertible:
   - $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ (reverse the order)

4. **Composition preserves properties:**
   - If $f$ and $g$ are both injective, then $g \circ f$ is injective
   - If $f$ and $g$ are both surjective, then $g \circ f$ is surjective
   - If $f$ and $g$ are both bijective, then $g \circ f$ is bijective

**Domain Compatibility:**

For $g \circ f$ to be defined, the range of $f$ must be a subset of the domain of $g$.

**Example with restricted domains:**

Let $f: \mathbb{R} \rightarrow \mathbb{R}^+$ where $f(x) = x^2$ (positive reals only)

Let $g: \mathbb{R}^+ \rightarrow \mathbb{R}$ where $g(x) = \ln(x)$ (natural log)

Then $(g \circ f)(x) = g(f(x)) = g(x^2) = \ln(x^2) = 2\ln|x|$

**More Composition Examples:**

**Example 1: Composition with absolute value**

Let $f(x) = x - 5$ and $g(x) = |x|$

- $(g \circ f)(x) = g(f(x)) = |x - 5|$ (distance from 5)
- $(f \circ g)(x) = f(g(x)) = |x| - 5$ (shift absolute value down 5)

**Example 2: Showing non-commutativity**

Let $f(x) = 2x$ and $g(x) = x + 1$

- $(g \circ f)(x) = g(2x) = 2x + 1$
- $(f \circ g)(x) = f(x + 1) = 2(x + 1) = 2x + 2$

These are different functions!

**Example 3: Triple composition**

Let $f(x) = x + 1$, $g(x) = x^2$, $h(x) = \sqrt{x}$

$(h \circ g \circ f)(x) = h(g(f(x))) = h(g(x + 1)) = h((x + 1)^2) = \sqrt{(x + 1)^2} = |x + 1|$

**Example 4: Composition resulting in identity**

Let $f(x) = x + 3$ and $g(x) = x - 3$

$(g \circ f)(x) = g(x + 3) = (x + 3) - 3 = x = id(x)$

This shows $g$ is the inverse of $f$.

**Decomposing Functions:**

Sometimes you need to express a complex function as a composition. This is useful for calculus (chain rule).

**Example:** Express $h(x) = \sqrt{x^2 + 1}$ as a composition.

Let $f(x) = x^2 + 1$ (inner function) and $g(x) = \sqrt{x}$ (outer function)

Then $h(x) = (g \circ f)(x) = g(f(x)) = \sqrt{x^2 + 1}$

## Arithmetic Operations on Functions

Just as numbers can be added, subtracted, multiplied, and divided, so can functions. Given two functions $f$ and $g$, we define:

**Sum:** $(f + g)(x) = f(x) + g(x)$

**Difference:** $(f - g)(x) = f(x) - g(x)$

**Product:** $(fg)(x) = f(x) \cdot g(x)$

**Quotient:** $(f/g)(x) = \frac{f(x)}{g(x)}$, defined only where $g(x) \neq 0$

The domain of each combined function is the intersection of the domains of $f$ and $g$, with the additional restriction for the quotient that $g(x) \neq 0$.

**Example:** Let $f(x) = x^2 + 1$ and $g(x) = x - 3$

- $(f + g)(x) = x^2 + 1 + x - 3 = x^2 + x - 2$
- $(f - g)(x) = x^2 + 1 - (x - 3) = x^2 - x + 4$
- $(fg)(x) = (x^2 + 1)(x - 3) = x^3 - 3x^2 + x - 3$
- $(f/g)(x) = \frac{x^2 + 1}{x - 3}$, domain: all real numbers except $x = 3$

## Difference Quotient

**Difference Quotient:** For a function $f$, the difference quotient is:

$$\frac{f(x + h) - f(x)}{h}$$

This expression computes the **average rate of change** of $f$ between the input $x$ and the input $x + h$. Geometrically, it is the slope of the **secant line** through the points $(x, f(x))$ and $(x + h, f(x + h))$.

The difference quotient is the precursor to the derivative in [Calculus](./calculus). Taking the limit as $h \to 0$ turns the average rate of change into the instantaneous rate of change.

**Worked example:** Find the difference quotient for $f(x) = x^2$.

$$\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h}$$

Expand $(x+h)^2 = x^2 + 2xh + h^2$:

$$= \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h} = \frac{h(2x + h)}{h} = 2x + h$$

As $h \to 0$, the difference quotient approaches $2x$, which is the derivative of $x^2$.

## Domain Restrictions by Function Type

Different families of functions have characteristic domain restrictions:

- **Polynomials:** Domain is all real numbers $\mathbb{R}$. Polynomials are defined everywhere.
- **Rational functions:** Exclude values where the denominator equals zero. See [Rational Functions](./rational-functions).
- **Radical functions with even index:** The expression under the radical (the radicand) must be $\geq 0$. For example, $\sqrt{x - 3}$ requires $x \geq 3$. See [Radical Functions](./radical-functions).
- **Logarithmic functions:** The argument must be strictly positive ($> 0$). For example, $\ln(x + 2)$ requires $x > -2$. See [Logarithms](./logarithms).
- **Combinations:** When functions are combined (through arithmetic operations or composition), apply all relevant restrictions. For instance, $f(x) = \frac{\sqrt{x}}{x - 4}$ requires $x \geq 0$ (from the square root) and $x \neq 4$ (from the denominator), so the domain is $[0, 4) \cup (4, \infty)$.

## Function Properties

### Even and Odd Functions

**Even Function:** A function $f$ is even if $f(-x) = f(x)$ for all $x$ in the domain.

- Graph is symmetric about the y-axis
- Examples: $f(x) = x^2$, $f(x) = \cos(x)$, $f(x) = |x|$

**Odd Function:** A function $f$ is odd if $f(-x) = -f(x)$ for all $x$ in the domain.

- Graph is symmetric about the origin (180° rotational symmetry)
- Examples: $f(x) = x^3$, $f(x) = \sin(x)$, $f(x) = x$

**Note:** Most functions are neither even nor odd.

### Periodic Functions

**Periodic Function:** A function $f$ is periodic if there exists a positive number $p$ such that:

$$f(x + p) = f(x)$$

for all $x$ in the domain. The smallest such positive number $p$ is called the **period**.

**Examples:**
- $\sin(x)$ has period $2\pi$
- $\cos(x)$ has period $2\pi$
- $\tan(x)$ has period $\pi$

### Monotonic Functions

**Increasing Function:** A function $f$ is increasing on an interval if:

$$x_1 < x_2 \Rightarrow f(x_1) \leq f(x_2)$$

**Strictly Increasing:** If $x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$ (strict inequality)

**Decreasing Function:** A function $f$ is decreasing on an interval if:

$$x_1 < x_2 \Rightarrow f(x_1) \geq f(x_2)$$

**Strictly Decreasing:** If $x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$ (strict inequality)

**Monotonic:** A function is monotonic if it is either increasing or decreasing on its entire domain.

**Examples:**
- $f(x) = x^2$ is decreasing on $(-\infty, 0]$ and increasing on $[0, \infty)$
- $f(x) = e^x$ is strictly increasing on all of $\mathbb{R}$
- $f(x) = -x$ is strictly decreasing on all of $\mathbb{R}$

### Bounded Functions

**Bounded Above:** A function $f$ is bounded above if there exists a real number $M$ such that:

$$f(x) \leq M$$

for all $x$ in the domain.

**Bounded Below:** A function $f$ is bounded below if there exists a real number $m$ such that:

$$f(x) \geq m$$

for all $x$ in the domain.

**Bounded:** A function is bounded if it is both bounded above and bounded below.

**Examples:**
- $f(x) = \sin(x)$ is bounded: $-1 \leq \sin(x) \leq 1$
- $f(x) = x^2$ is bounded below by 0 but not bounded above
- $f(x) = e^x$ is bounded below by 0 but not bounded above

## Partial Functions

**Partial Function:** A partial function from set **A** to set **B** is a function that is not necessarily defined for every element of **A**.

Formally, a partial function $f: A \rightharpoonup B$ is a function $f: A' \rightarrow B$ where $A' \subseteq A$.

The set $A'$ is called the **domain of definition**.

**Examples:**
- $f(x) = \frac{1}{x}$ is a partial function on $\mathbb{R}$ (undefined at $x = 0$)
- $f(x) = \sqrt{x}$ is a partial function on $\mathbb{R}$ (undefined for $x < 0$ in real numbers)
- $f(x) = \log(x)$ is a partial function on $\mathbb{R}$ (undefined for $x \leq 0$)

**Total Function:** A function defined for every element in its domain. Most functions discussed in mathematics are total functions.

## One-to-One Correspondence

**One-to-One Correspondence:** Another term for a bijective function. It establishes a perfect pairing between two sets where:

1. Every element in the domain maps to exactly one element in the codomain (function property)
2. Every element in the codomain is mapped to by exactly one element in the domain (bijection)

**Significance:**

A one-to-one correspondence between sets **A** and **B** means that **A** and **B** have the same **cardinality** (size), written $|A| = |B|$.

**Examples:**

1. The function $f: \mathbb{Z} \rightarrow \mathbb{Z}$ defined by $f(x) = x + 1$ is a one-to-one correspondence from integers to integers.

2. The function $f: [0, 1] \rightarrow [0, 2]$ defined by $f(x) = 2x$ is a one-to-one correspondence showing these intervals have the same cardinality.

3. The function $f: \mathbb{N} \rightarrow \mathbb{Z}$ defined by:
   $$f(n) = \begin{cases} n/2 & \text{if } n \text{ is even} \\ -(n+1)/2 & \text{if } n \text{ is odd} \end{cases}$$
   
   This creates a bijection: 0 → 0, 1 → -1, 2 → 1, 3 → -2, 4 → 2, ...
   
   This shows that the natural numbers and integers have the same cardinality (both are countably infinite).

## **Schröder--Bernstein (Cantor--Bernstein) Theorem**

**Statement.**

If there are injections $f:A \rightarrow B$ and $g:B \rightarrow A$,
then there exists a bijection $h:A \rightarrow B$

(So $\mid A \mid \leq \mid B \mid $and
$\mid B \mid \leq \mid A \mid $together imply
$\mid A \mid = \mid B \mid$. No Choice needed.)

## Piecewise Functions

**Piecewise Function:** A piecewise function is a function defined by multiple sub-functions, each applying to a different interval of the domain.

**General Form:**

$$
f(x) = \begin{cases}
f_1(x) & \text{if } x \in I_1 \\
f_2(x) & \text{if } x \in I_2 \\
\vdots & \vdots \\
f_n(x) & \text{if } x \in I_n
\end{cases}
$$

Where $I_1, I_2, \ldots, I_n$ are disjoint intervals that cover the domain.

**Example 1: Absolute Value Function**

$$
|x| = \begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

**Example 2: Tax Bracket System**

$$
\text{tax}(income) = \begin{cases}
0.10 \cdot income & \text{if } income \leq 10000 \\
1000 + 0.15(income - 10000) & \text{if } 10000 < income \leq 50000 \\
7000 + 0.25(income - 50000) & \text{if } income > 50000
\end{cases}
$$

**Example 3: Heaviside Step Function**

$$
H(x) = \begin{cases}
0 & \text{if } x < 0 \\
1 & \text{if } x \geq 0
\end{cases}
$$

**Domain Considerations:**

- Ensure every point in the domain is covered by exactly one piece
- Watch for overlaps or gaps at boundary points
- Specify whether boundaries use $<$ or $\leq$

**Continuity:**

A piecewise function is continuous at a boundary point $x = a$ if:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$$

## Function Transformations

**Function Transformations** describe how to shift, stretch, compress, or reflect the graph of a function.

### Vertical Transformations

**Vertical Shift:** $f(x) + k$

- $k > 0$: Shift up by $k$ units
- $k < 0$: Shift down by $|k|$ units

**Example:** $f(x) = x^2$ becomes $f(x) = x^2 + 3$ (shift up 3 units)

**Vertical Stretch/Compression:** $af(x)$

- $|a| > 1$: Vertical stretch by factor $a$
- $0 < |a| < 1$: Vertical compression by factor $a$
- $a < 0$: Reflection across x-axis (plus stretch/compression)

**Example:** $f(x) = x^2$ becomes $f(x) = 2x^2$ (stretch by factor 2)

### Horizontal Transformations

**Horizontal Shift:** $f(x - h)$

- $h > 0$: Shift **right** by $h$ units
- $h < 0$: Shift **left** by $|h|$ units

**Example:** $f(x) = x^2$ becomes $f(x) = (x - 3)^2$ (shift right 3 units)

**Note:** The direction is counterintuitive! $f(x - h)$ shifts RIGHT.

**Horizontal Stretch/Compression:** $f(bx)$

- $|b| > 1$: Horizontal **compression** by factor $b$
- $0 < |b| < 1$: Horizontal **stretch** by factor $1/b$
- $b < 0$: Reflection across y-axis (plus stretch/compression)

**Example:** $f(x) = x^2$ becomes $f(x) = (2x)^2$ (compress by factor 1/2)

### Reflections

**Reflection across x-axis:** $-f(x)$

**Reflection across y-axis:** $f(-x)$

**Example:** $f(x) = \sqrt{x}$ becomes $f(-x) = \sqrt{-x}$ (reflection across y-axis, changes domain)

### Combined Transformations

**Order matters!** General form:

$$g(x) = a \cdot f(b(x - h)) + k$$

Apply in this order:
1. Horizontal shift by $h$
2. Horizontal stretch/compression by $b$
3. Vertical stretch/compression by $a$
4. Vertical shift by $k$

**Example:** Transform $f(x) = x^2$ to $g(x) = -2(x - 3)^2 + 1$

- Shift right 3: $(x - 3)^2$
- Stretch vertically by 2: $2(x - 3)^2$
- Reflect across x-axis: $-2(x - 3)^2$
- Shift up 1: $-2(x - 3)^2 + 1$

## Floor and Ceiling Functions

### Floor Function

**Floor Function:** $\lfloor x \rfloor$ (also called the **greatest integer function**)

Returns the largest integer **less than or equal to** $x$.

**Definition:**

$$\lfloor x \rfloor = \max\{n \in \mathbb{Z} : n \leq x\}$$

**Examples:**
- $\lfloor 3.7 \rfloor = 3$
- $\lfloor -2.3 \rfloor = -3$
- $\lfloor 5 \rfloor = 5$
- $\lfloor 0.1 \rfloor = 0$

**Properties:**
- $\lfloor x \rfloor \leq x < \lfloor x \rfloor + 1$
- $\lfloor x + n \rfloor = \lfloor x \rfloor + n$ for any integer $n$
- $\lfloor x \rfloor = x$ if and only if $x$ is an integer

### Ceiling Function

**Ceiling Function:** $\lceil x \rceil$ (also called the **least integer function**)

Returns the smallest integer **greater than or equal to** $x$.

**Definition:**

$$\lceil x \rceil = \min\{n \in \mathbb{Z} : n \geq x\}$$

**Examples:**
- $\lceil 3.7 \rceil = 4$
- $\lceil -2.3 \rceil = -2$
- $\lceil 5 \rceil = 5$
- $\lceil 0.1 \rceil = 1$

**Properties:**
- $\lceil x \rceil - 1 < x \leq \lceil x \rceil$
- $\lceil x + n \rceil = \lceil x \rceil + n$ for any integer $n$
- $\lceil x \rceil = x$ if and only if $x$ is an integer

### Relationship Between Floor and Ceiling

$$\lceil x \rceil = -\lfloor -x \rfloor$$

$$\lfloor x \rfloor = -\lceil -x \rceil$$

For non-integers: $\lceil x \rceil = \lfloor x \rfloor + 1$

## Special Function Types

### Constant Function

**Constant Function:** A function that always returns the same value regardless of input.

$$f(x) = c$$

Where $c$ is a constant.

**Properties:**
- Domain: $\mathbb{R}$ (or any set)
- Range: $\{c\}$ (single value)
- Graph: Horizontal line at $y = c$
- Derivative: $f'(x) = 0$

**Example:** $f(x) = 5$ for all $x$

### Absolute Value Function

**Absolute Value Function:** Returns the magnitude (distance from zero) of a number.

$$
f(x) = |x| = \begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

**Properties:**
- Domain: $\mathbb{R}$
- Range: $[0, \infty)$
- Even function: $|-x| = |x|$
- $|xy| = |x||y|$
- Triangle inequality: $|x + y| \leq |x| + |y|$

**Graph:** V-shaped, vertex at origin

### Signum Function

**Signum Function (Sign Function):** Returns the sign of a number.

$$
\text{sgn}(x) = \begin{cases}
-1 & \text{if } x < 0 \\
0 & \text{if } x = 0 \\
1 & \text{if } x > 0
\end{cases}
$$

**Properties:**
- Domain: $\mathbb{R}$
- Range: $\{-1, 0, 1\}$
- Odd function: $\text{sgn}(-x) = -\text{sgn}(x)$

**Relationship to absolute value:**

$$x = \text{sgn}(x) \cdot |x|$$

### Step Functions

**Step Function:** A piecewise constant function with finitely many pieces.

**Heaviside Step Function:**

$$
H(x) = \begin{cases}
0 & \text{if } x < 0 \\
1 & \text{if } x \geq 0
\end{cases}
$$

Used in signal processing, differential equations, and control theory.

**Unit Step Function (shifted):**

$$
u_a(x) = H(x - a) = \begin{cases}
0 & \text{if } x < a \\
1 & \text{if } x \geq a
\end{cases}
$$

