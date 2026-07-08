---
title: "Predicate Logic / first-order logic"
---

**Predicate Logic / first-order logic:** An extension of propositional logic that allows reasoning about objects, their properties, and relationships using variables and quantifiers.

## Predicates

**Predicate:** A function that takes one or more variables and returns a truth value (true or false).

**Notation:** $P(x)$, $Q(x, y)$, $R(x, y, z)$, etc.

**Examples:**
- $P(x)$ means "x is prime"
- $Q(x, y)$ means "x is greater than y"
- $R(x)$ means "x is an even number"

## Domain of Discourse

**Domain of Discourse (Universe):** The set of all possible values that variables can take.

**Example:**
- If domain is $\mathbb{N}$, then $x$ can be any natural number
- If domain is $\mathbb{R}$, then $x$ can be any real number

## Quantifiers

### Universal Quantifier (∀)

**Symbol:** $\forall$ (read as "for all" or "for every")

**Meaning:** The statement is true for all elements in the domain.

**Notation:** $\forall x P(x)$

**Example 1:** $\forall x (x + 0 = x)$
- Domain: $\mathbb{R}$
- Meaning: "For all real numbers $x$, $x + 0 = x$"
- Truth value: TRUE

**Example 2:** $\forall x (x^2 \geq 0)$
- Domain: $\mathbb{R}$
- Meaning: "For all real numbers $x$, $x^2$ is non-negative"
- Truth value: TRUE

**Example 3:** $\forall x (x > 0)$
- Domain: $\mathbb{R}$
- Meaning: "For all real numbers $x$, $x$ is positive"
- Truth value: FALSE (counterexample: $x = -1$)

### Existential Quantifier (∃)

**Symbol:** $\exists$ (read as "there exists" or "for some")

**Meaning:** The statement is true for at least one element in the domain.

**Notation:** $\exists x P(x)$

**Example 1:** $\exists x (x^2 = 4)$
- Domain: $\mathbb{R}$
- Meaning: "There exists a real number $x$ such that $x^2 = 4$"
- Truth value: TRUE (examples: $x = 2$ or $x = -2$)

**Example 2:** $\exists x (x^2 = -1)$
- Domain: $\mathbb{R}$
- Meaning: "There exists a real number $x$ such that $x^2 = -1$"
- Truth value: FALSE

**Example 3:** $\exists x (x^2 = -1)$
- Domain: $\mathbb{C}$
- Meaning: "There exists a complex number $x$ such that $x^2 = -1$"
- Truth value: TRUE (example: $x = i$)

### Unique Existential Quantifier (∃!)

**Symbol:** $\exists!$ (read as "there exists exactly one")

**Meaning:** The statement is true for exactly one element in the domain.

**Notation:** $\exists! x P(x)$

**Example:** $\exists! x (x + 5 = 7)$
- Domain: $\mathbb{R}$
- Meaning: "There exists exactly one real number $x$ such that $x + 5 = 7$"
- Truth value: TRUE (only $x = 2$)

## Multiple Quantifiers

### Order Matters

**Example 1:** $\forall x \exists y (x < y)$
- Domain: $\mathbb{R}$
- Meaning: "For every real number $x$, there exists a real number $y$ such that $x < y$"
- Truth value: TRUE (for any $x$, we can choose $y = x + 1$)

**Example 2:** $\exists y \forall x (x < y)$
- Domain: $\mathbb{R}$
- Meaning: "There exists a real number $y$ such that for all real numbers $x$, $x < y$"
- Truth value: FALSE (no single $y$ is greater than all real numbers)

### Mixed Quantifiers

**Example:** $\forall x \exists y (x + y = 0)$
- Domain: $\mathbb{R}$
- Meaning: "For every real number $x$, there exists a real number $y$ such that $x + y = 0$"
- Truth value: TRUE (for any $x$, choose $y = -x$)

## Negating Quantified Statements

**Rules:**
- $\neg(\forall x P(x)) \equiv \exists x \neg P(x)$
- $\neg(\exists x P(x)) \equiv \forall x \neg P(x)$

**Example 1:** Negate $\forall x (x > 0)$
- Original: "All $x$ are positive"
- Negation: $\exists x \neg(x > 0) \equiv \exists x (x \leq 0)$
- Result: "There exists an $x$ that is not positive"

**Example 2:** Negate $\exists x (x^2 = 2)$
- Original: "There exists an $x$ such that $x^2 = 2$"
- Negation: $\forall x \neg(x^2 = 2) \equiv \forall x (x^2 \neq 2)$
- Result: "For all $x$, $x^2 \neq 2$"

**Example 3:** Negate $\forall x \exists y (x < y)$
- Apply negation rules from outside in:
  - $\neg(\forall x \exists y (x < y))$
  - $\exists x \neg(\exists y (x < y))$
  - $\exists x \forall y \neg(x < y)$
  - $\exists x \forall y (x \geq y)$
- Result: "There exists an $x$ such that for all $y$, $x \geq y$"

## Bound vs Free Variables

**Bound Variable:** A variable that is controlled by a quantifier.

**Free Variable:** A variable that is not controlled by a quantifier.

**Example 1:** $\forall x (x + y = z)$
- $x$ is bound (controlled by $\forall$)
- $y$ and $z$ are free

**Example 2:** $\exists x \forall y (x < y + z)$
- $x$ and $y$ are bound
- $z$ is free

## Common Patterns

### "For all... if..., then..."

**Pattern:** $\forall x (P(x) \to Q(x))$

**Example:** $\forall x (x > 0 \to x^2 > 0)$
- Domain: $\mathbb{R}$
- Meaning: "For all real numbers, if $x$ is positive, then $x^2$ is positive"

### "There exists... such that... and..."

**Pattern:** $\exists x (P(x) \land Q(x))$

**Example:** $\exists x (x > 0 \land x^2 = 4)$
- Domain: $\mathbb{R}$
- Meaning: "There exists a positive real number whose square is 4"
- Truth value: TRUE ($x = 2$)

## Truth Tables for Quantified Statements

When the domain is finite, quantified statements can be expanded:

**Universal Quantifier:**
- $\forall x P(x) \equiv P(a) \land P(b) \land P(c) \land \ldots$
- TRUE only if $P$ is true for ALL elements

**Existential Quantifier:**
- $\exists x P(x) \equiv P(a) \lor P(b) \lor P(c) \lor \ldots$
- TRUE if $P$ is true for AT LEAST ONE element

**Example:** Domain = $\{1, 2, 3\}$, $P(x)$: "$x$ is even"

$\forall x P(x) \equiv P(1) \land P(2) \land P(3) \equiv F \land T \land F \equiv F$

$\exists x P(x) \equiv P(1) \lor P(2) \lor P(3) \equiv F \lor T \lor F \equiv T$

## Logical Equivalences for Quantifiers

### Distribution Over Conjunctions and Disjunctions

**Universal Quantifier with Conjunction:**
$$\forall x (P(x) \land Q(x)) \equiv \forall x P(x) \land \forall x Q(x)$$

**Example:** "All numbers are positive and even" is equivalent to "All numbers are positive AND all numbers are even"

**Universal Quantifier with Disjunction (does NOT distribute):**
$$\forall x (P(x) \lor Q(x)) \not\equiv \forall x P(x) \lor \forall x Q(x)$$

**Counterexample:** 
- Left side: $\forall x (x > 0 \lor x < 0)$ is FALSE (fails at $x = 0$)
- Right side: $\forall x (x > 0) \lor \forall x (x < 0)$ is also FALSE

But they're not equivalent to the relationship that DOES hold:
$$\forall x P(x) \lor \forall x Q(x) \Rightarrow \forall x (P(x) \lor Q(x))$$
(If all are P or all are Q, then each is at least one of them)

**Existential Quantifier with Disjunction:**
$$\exists x (P(x) \lor Q(x)) \equiv \exists x P(x) \lor \exists x Q(x)$$

**Example:** "There exists a number that is positive or even" is equivalent to "There exists a positive number OR there exists an even number"

**Existential Quantifier with Conjunction (does NOT distribute):**
$$\exists x (P(x) \land Q(x)) \not\equiv \exists x P(x) \land \exists x Q(x)$$

**Counterexample:**
- Left side: $\exists x (x = 2 \land x = 3)$ is FALSE (no number is both 2 and 3)
- Right side: $\exists x (x = 2) \land \exists x (x = 3)$ is TRUE (2 exists AND 3 exists)

But the implication holds:
$$\exists x (P(x) \land Q(x)) \Rightarrow \exists x P(x) \land \exists x Q(x)$$
(If something is both P and Q, then something is P and something is Q)

### Summary Table

| Statement | Distributes? | Equivalence |
|-----------|--------------|-------------|
| $\forall x (P(x) \land Q(x))$ | Yes | $\equiv \forall x P(x) \land \forall x Q(x)$ |
| $\forall x (P(x) \lor Q(x))$ | No | $\not\equiv \forall x P(x) \lor \forall x Q(x)$ |
| $\exists x (P(x) \lor Q(x))$ | Yes | $\equiv \exists x P(x) \lor \exists x Q(x)$ |
| $\exists x (P(x) \land Q(x))$ | No | $\not\equiv \exists x P(x) \land \exists x Q(x)$ |

**Mnemonic:** Same quantifier and same connective distribute (∀∧ and ∃∨), opposites don't (∀∨ and ∃∧)

### Quantifier Exchange Rules

**With Negation:**
$$\neg \forall x P(x) \equiv \exists x \neg P(x)$$
$$\neg \exists x P(x) \equiv \forall x \neg P(x)$$

**Example:** "Not everyone is happy" $\equiv$ "Someone is not happy"

### Nested Quantifiers - Swapping Rules

**Same Quantifiers (can swap):**
$$\forall x \forall y P(x, y) \equiv \forall y \forall x P(x, y)$$
$$\exists x \exists y P(x, y) \equiv \exists y \exists x P(x, y)$$

**Example:** $\forall x \forall y (x + y = y + x)$ is the same as $\forall y \forall x (x + y = y + x)$

**Different Quantifiers (order matters - cannot swap in general):**
$$\forall x \exists y P(x, y) \not\equiv \exists y \forall x P(x, y)$$

**Example:**
- $\forall x \exists y (x < y)$ is TRUE (for each number, there's a bigger one)
- $\exists y \forall x (x < y)$ is FALSE (no number is bigger than all numbers)

### Vacuous Truth

**Empty Domain:**
- $\forall x P(x)$ is TRUE when domain is empty (vacuously true)
- $\exists x P(x)$ is FALSE when domain is empty

**Example:** "All unicorns are blue" is vacuously true (there are no unicorns)

### Restricted Quantifiers

**Restricted Universal Quantifier:**
$$\forall x (D(x) \to P(x))$$
"For all $x$ in domain $D$, $P(x)$ holds"

**Example:** $\forall x (x \in \mathbb{N} \to x \geq 0)$
"All natural numbers are non-negative"

**Restricted Existential Quantifier:**
$$\exists x (D(x) \land P(x))$$
"There exists an $x$ in domain $D$ such that $P(x)$ holds"

**Example:** $\exists x (x \in \mathbb{N} \land x^2 = 4)$
"There exists a natural number whose square is 4"

**Important:** Note the connective difference:
- Universal uses implication ($\to$)
- Existential uses conjunction ($\land$)

**Why this matters:**
- $\forall x (x \in \mathbb{N} \land x \geq 0)$ would be FALSE (not every number is a natural number)
- $\exists x (x \in \mathbb{N} \to x \geq 0)$ would be TRUE but meaningless (true even if we pick $x = -5$)

### Equivalences with Restricted Quantifiers

**Negation of Restricted Universal:**
$$\neg \forall x (D(x) \to P(x)) \equiv \exists x (D(x) \land \neg P(x))$$

**Example:** "Not all natural numbers are even" $\equiv$ "Some natural number is not even"

**Negation of Restricted Existential:**
$$\neg \exists x (D(x) \land P(x)) \equiv \forall x (D(x) \to \neg P(x))$$

**Example:** "There is no natural number that is negative" $\equiv$ "All natural numbers are non-negative"

### Common Logical Equivalences

**Quantifier Scope:**
- If $x$ does not appear in $Q$:
  - $\forall x (P(x) \land Q) \equiv (\forall x P(x)) \land Q$
  - $\forall x (P(x) \lor Q) \equiv (\forall x P(x)) \lor Q$
  - $\exists x (P(x) \land Q) \equiv (\exists x P(x)) \land Q$
  - $\exists x (P(x) \lor Q) \equiv (\exists x P(x)) \lor Q$

**Example:** $\forall x (P(x) \land \text{sun is hot}) \equiv (\forall x P(x)) \land \text{sun is hot}$

**Quantifier over Implication:**
- $\forall x (P \to Q(x)) \equiv P \to \forall x Q(x)$ (if $x$ not in $P$)
- $\exists x (P \to Q(x)) \equiv P \to \exists x Q(x)$ (if $x$ not in $P$)
- $\forall x (P(x) \to Q) \equiv (\exists x P(x)) \to Q$ (if $x$ not in $Q$)
- $\exists x (P(x) \to Q) \equiv (\forall x P(x)) \to Q$ (if $x$ not in $Q$)

