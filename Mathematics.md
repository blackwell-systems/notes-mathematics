# Mathematics Reference

Comprehensive mathematics reference covering logic, algebra, functions, geometry, and combinatorics.

## Table of Contents

- [Propositional Logic / zeroth-order logic](#propositional-logic--zeroth-order-logic)
- [Predicate Logic / first-order logic](#predicate-logic--first-order-logic)
- [Mathematical Notations](#mathematical-notations)
- [Set Theory](#set-theory)
- [Prime Factorization](#prime-factorization)
- [Number Theory](#number-theory)
- [Partial Fraction Decomposition](#partial-fraction-decomposition)
- [Symbolic Methods vs. Numerical Methods](#symbolic-methods-vs-numerical-methods)
- [Functions & Relations](#functions--relations)
- [Graphing Functions](#graphing-functions)
- [Complex Numbers](#complex-numbers)
- [Linear Functions d=1](#linear-functions-d1)
- [Matrices](#matrices)
- [Systems of Linear Equations](#systems-of-linear-equations)
- [Polynomial Functions](#polynomial-functions)
- [Rational Functions](#rational-functions)
- [Exponential Functions](#exponential-functions)
- [Logarithms](#logarithms)
- [Radical Functions](#radical-functions)
- [Inequalities](#inequalities)
- [Geometry & Trigonometry](#geometry--trigonometry)
- [Vector](#vector)
- [Permutation](#permutation)
- [Combination](#combination)
- [Graph Theory](#graph-theory)

# Propositional Logic / zeroth-order logic

**Propositional Logic:** Propositional Logic, is a formal system in
logic that deals with statements or propositions as whole, indivisible
units. In this system, each proposition is considered atomic, meaning it
does not analyze the internal structure or content of the proposition
itself.

The primary focus of 0th-order logic is on how these propositions relate
to one another through logical connectives such as AND (∧), OR (∨), NOT
(¬), and IMPLIES (→). It is a foundational form of logic, where the
truth or falsity of complex statements is determined by the truth values
of their constituent propositions.

Unlike first-order logic, propositional logic does not deal with
non-logical objects, predicates about them, or quantifiers. However, all
the machinery of propositional logic is included in first-order logic
and higher-order logics. In this sense, propositional logic is the
foundation of first-order logic and higher-order logic.

The most thoroughly researched branch of propositional logic is
[classical truth-functional propositional logic

## Truth

When studying logic and mathematics, it is important to understand what
truth is and what forms of truth exist.

In the study of philosophy, there are 6 distinct types of truth.

**Logical Truth**: Always true due to logical structure; used in logic
and math.

**Empirical Truth**: True based on observation; used in science and
daily life.

**Necessary Truth**: True in all possible worlds due to inherent nature;
used in philosophy and logic.

**Analytic Truth:** True by definition; used in conceptual analysis.

**Synthetic Truth:** True based on actual facts; used in empirical
sciences.

**Contingent Truth:** True under specific conditions; used in everyday
reasoning and empirical studies.

In propositional and first order logic, we are only concerned with
**logical truths** and **necessary truths**.

### Logical Truth

**Logical Truth:** Logical truth refers to a statement or proposition
that is [true in all possible scenarios, purely based on its logical
structure rather than any specific facts or content about the
world. It is a foundational concept in formal logic,
philosophy, and mathematics, where the focus is on the form of reasoning
rather than empirical content.

Logical truths are often expressed in symbolic language, but they don't
need to be. They can also be expressed using ordinary language.

The reason that symbolic language is preferred in propositional logic is
that symbolic language offers significant advantages when it comes to
making generalized statements. Symbolic language eliminates the
ambiguity of natural language and clearly expresses the truth functional
nature of each logical form expressed.

**Comparison with Other Types of Truths**

**Versus Empirical Truth:** Unlike empirical truths, which are based on
observations or experiences and can vary depending on the state of the
world, logical truths are independent of the actual world. They are true
regardless of any empirical facts.

**Versus Necessary Truth:** *All logical truths are necessary truths*,
but not all necessary truths are logical truths[. Necessary truths are
true in all possible worlds, often because of the meanings of the
concepts involved, such as \"All bachelors are unmarried.\"
**Logical truths, on the other hand, are true due to their logical
form.**

**Versus Analytic Truth:** Analytic truths are true by definition or
based on the meanings of words. Logical truths may overlap with analytic
truths, but they are more broadly applicable, as they are not tied to
specific definitions but rather to the logical structure.

### Necessary Truth

**Necessary Truth:** Necessary truth refers to a statement or
proposition that must be true in all possible worlds or under any
conceivable circumstances. Unlike contingent truths, which are true only
under certain conditions, necessary truths hold universally and cannot
be false. They are true by necessity, meaning their truth is not
dependent on specific facts or conditions in the world but on the nature
of the concepts or relationships they describe.

**Necessary Truths encompass both analytic and synthetic truths.**

In the traditional framework, necessary truths are divided into analytic
(true by definition) and synthetic (true by virtue of the way the world
is) truths. **These two categories are often considered exhaustive.**

#### Analytic Necessary Truths

**Analytic Necessary Truths:**

These are truths that are true by definition. Their necessity comes from
the meanings of the terms involved.

Example: \"All bachelors are unmarried.\"

Explanation: This is necessarily true because \"bachelor\" is defined as
an unmarried man. The truth of the statement is self-evident once you
understand the terms.

#### Synthetic Necessary Truths

**Synthetic Necessary Truths:**

These are truths that are necessarily true but not by virtue of the
meanings of words alone. They often involve empirical or metaphysical
facts.

Example: \"Water is H2O.\"

Explanation: This is a necessary truth because, in any possible world
where water exists, it must be composed of H2O. However, this truth is
not analytic because it is not true by definition; it was discovered
through empirical investigation.

### Analytic Truth

**Analytic Truth:** Analytic truths are inherently true because the
predicate is contained within the subject, making them tautological in
nature.

**Analytic truths** are true by definition. The truth of the statement
is guaranteed by the meanings of the words used.

**Analytic truths** are typically known a priori, meaning they can be
known independently of any experience. You do not need to observe or
investigate the world to know that an analytic truth is true;
understanding the meanings of the words is sufficient.

**Analytic truths** are often tautological, meaning they are statements
that repeat the same idea in different words. Because of this, they are
considered true in a trivial sense.

**Distinction from Synthetic Truth:**

The real crux of the difference between these two types of truths lies
in how we come to know them. With analytic truths, all you
need is a good understanding of the concepts or definitions involved.
You can figure them out just by thinking about the meanings of the
words---no need to step outside and check the world.

But synthetic truths are more tied to reality. They aren't true just
because of the way we define words; they're true because that's the way
things actually are in the world. To know these truths, you have to
engage with the world, gather evidence, and sometimes, even conduct
experiments.

### Synthetic Truth

**Synthetic Truth:**

### Empirical Truth

**Empirical Truth:** Empirical truth refers to statements or
propositions that are true because they accurately describe the way the
world is, based on observation, experience, or experiment.

**Unlike analytic truths, which are true by definition, or necessary
truths, which hold in all possible worlds, empirical truths are
contingent on the actual state of affairs.**

While empirical truths are vital for understanding the world, they have
their limits. Since they depend on observation and experience, they can
be subject to change as new evidence emerges. What's considered an
empirical truth today might be revised or even overturned tomorrow if
new data suggests otherwise. This is especially true in science, where
empirical truths are often provisional, pending further research.

### Contingent Truth

**Contingent Truth**: Contingent truth refers to a type of truth that is
dependent on the way the world actually is, rather than being true in
all possible worlds or by definition. In other words, a contingent truth
is a statement that could have been false if circumstances were
different. Contingent truths are true in our world, but they are not
necessarily true in every conceivable situation or possible world.

**Characteristics of Contingent Truth:**

1.  **Dependence on Facts:**

    -   Contingent truths are true because of the specific state of
        affairs in the world. They rely on actual facts, events, or
        conditions that could have been different.

    -   Example: \"The Eiffel Tower is in Paris\" is a contingent truth.
        It is true in the actual world because the Eiffel Tower is
        indeed located in Paris, but it could have been built in a
        different city, making the statement false in that scenario.

2.  **Possibility of Being False:**

    -   Unlike necessary truths, which are true in all possible worlds,
        contingent truths could be false in some possible worlds.

    -   Example: \"Water boils at 100°C at sea level\" is a contingent
        truth that depends on the specific physical conditions, such as
        atmospheric pressure. If these conditions were different, the
        boiling point of water would also be different.

3.  **Contrast with Necessary Truth:**

    -   Necessary truths are true in all possible worlds, by virtue of
        logic or the nature of the concepts involved (e.g., \"2 + 2 =
        4\").

    -   Contingent truths, on the other hand, are true in the actual
        world but could be false in other possible worlds. For example,
        \"Humans exist\" is a contingent truth because, while humans do
        exist in the actual world, it is conceivable that humans might
        not have evolved, making the statement false in some other
        possible world.

4.  **Empirical Nature:**

    -   Many contingent truths are empirical, meaning they are known
        through observation or experience. These truths are discovered
        by examining the world around us, rather than through pure
        reasoning or logical deduction.

    -   Example: \"The sky is blue\" is an empirical contingent truth.
        It is true under normal daylight conditions due to the way the
        Earth\'s atmosphere scatters light, but it would not be true at
        night or on a cloudy day.

## Proposition

**Proposition: Propositions** are declarative statements that have a
truth value, which can either be true or false, but not both.

Propositions in propositional logic respect the *[bi-variance
principle* and the *[principle of the excluded
middle*. This is why their truth value can assume only 2
values and why each proposition can be assigned only a single
value---not both or neither.

Declarative statements make assertions or declare some fact about the
state of affairs of something.

Examples:

-   \"The sky is blue.\"

-   \"She is a doctor.\"

-   \"Paris is the capital of France.\"

-   \"The meeting starts at 10 AM.\"

Propositions are the fundamental units of reasoning and logical
analysis.

They assert facts about the world that could either be true or false.

Propositions can be represented symbolically using letters:

-   \"The sky is blue.\" : **B**

-   \"She is a doctor.\" : **D**

-   \"Paris is the capital of France.\" : **F**

-   \"The meeting starts at 10 AM.\" : **M**

Propositions are sometimes called statements.

Propositions or statements can either be:

-   **Atomic:** Atomic propositions are the simplest form of
    propositions. They do not contain any logical connectives and cannot
    be broken down into simpler propositions. Each atomic proposition is
    a declarative statement that is either true or false.

-   **Compound:** Compound propositions are formed by combining two or
    more atomic propositions using logical connectives. The truth value
    of a compound proposition depends on the truth values of its
    component propositions and the specific logical connectives used.

**Propositional logic is concerned with the *[form and structure of
propositions* rather than their content or the actual truth
of their components in the real world.**

### Validity

**Validity:** When we talk about a single proposition being valid, we
usually mean that it is a **tautology**---a statement that is true in
all possible circumstances. This means the proposition cannot be false,
regardless of the truth values of any variables it might contain**.**

### Unsatisfiable

**Unsatisfiable:** If a proposition is unsatisfiable, it means that
there is no possible scenario or interpretation under which the
proposition can be true. In other words, the proposition is false in
every possible situation, regardless of the truth values assigned to its
components.

Unsatisfiability is a key concept in logic and relates to the idea of a
**contradiction**.

### Contingent

**Contingent:** Contingency refers to the status of a proposition that
is neither necessarily true nor necessarily false. A contingent
proposition is one that could be true in some circumstances and false in
others, depending on the particular state of the world or the specific
assignment of truth values to its components.

In a truth table, a contingent proposition will have at least one row
where it is true and at least one row where it is false.

Most statements we encounter in everyday life are contingent. We often
make decisions based on contingent truths, which are context-dependent
and require us to consider the specific conditions at hand.

## Truth Function

**Truth Function**: In logic, a truth function is a function that
accepts truth values as input and produces a truth value as output. They
play a crucial role in propositional logic by defining how compound
statements (or propositions) are constructed from atomic ones.

## Logical / Propositional Constants

Logical / Propositional Constants: In the context of propositional
logic, **contradiction** and **tautology** are often referred to as
logical constants or propositional constants because their truth values
are fixed, regardless of the truth values of any propositions they are
combined with.

### Contradiction

**Contradiction:** A contradiction (also known as a logical falsehood)
is a proposition that is always false.

It is denoted by symbols such as **⊥**(falsum/up-tack) or false.

Example: The statement

𝑃 ∧ ¬𝑃 (It is raining and it is not raining) is a contradiction because
it can never be true.

### Tautology

**Tautology**: A tautology (also known as a logical truth) is a
proposition that is always true. It is denoted by symbols such as
**⊤(verum / down-tack**) or true.

Example: The statement

𝑃 ∨ ¬𝑃 (It is raining or it is not raining) is a tautology because it is
always true.

#### Proving that a proposition is a Tautology

There are 2 methods that can be used:

-   Truth table method

-   Simplification / Manipulation of Logical Equivalences

##### Truth table method of proving a Tautology:

To prove a tautology using a truth table, it is required to demonstrate
that the formula is true for every possible combination of assignments
of truth values to the constituent parts of the formula.

For a formula containing n number of variables, it will require a truth
table having $2^{n}$ rows.

If a formula has 3 variables, it will require a truth table with 8 rows.

![A screenshot of a math test Description automatically
generated](./media/image1.png)

## Compound Proposition / Statement

**Compound Proposition / Statement:** A compound proposition (or
compound statement) is a proposition that is formed by combining one or
more simpler propositions, called atomic propositions, using logical
connectives. The truth value of a compound proposition is determined by
the truth values of its component propositions and the specific logical
connectives used.

## Propositional / Logical Connectives / Operators

**Logical Connectives:** Logical connectives, also known as logical
operators, are symbols or words used to connect propositions (or
statements) to form compound propositions.

They determine the truth value of the compound proposition based on the
truth values of the individual propositions

![A black background with white text Description automatically
generated](./media/image2.png)

### Unary Logical Connectives / Unary Operators

**Unary Logical Connectives / Unary Operators:** A unary logical
connective (or unary operator) is a logical operator that [operates on a
single proposition (or statement) to produce a new
proposition.

In classical logic, the most common unary logical connective is
**negation**.

#### Negation

**Negation:** Negation is a fundamental unary logical connective that
inverts the truth value of a proposition.

In ordinary language, negation is referred to as *['NOT'*.

Symbolically, we express negation with: ¬

Example: If 𝑃 is a proposition, ¬𝑃 denotes its **negation**.

![A screenshot of a computer Description automatically
generated](./media/image3.png)

Properties of Negation:

**Double Negation:** Within a system of classical logic, double
negation, that is, the negation of the negation of a proposition 𝑃, is
logically equivalent to 𝑃.

Expressed in symbolic terms: ¬¬𝑃 ≡ 𝑃

**Distributivity:** De Morgan\'s laws provide a way of distributing
negation over conjunction and disjunction.

**¬(𝑃 ∧ 𝑄) ≡ (¬𝑃 ∨ ¬𝑄)**

**¬(𝑃 ∨ 𝑄) ≡ (¬𝑃 ∧ ¬𝑄)**

**Negation of Quantifiers:** In first-order logic, there are two
quantifiers, one is the universal quantifier

**∀** (means \"for all\") and the other is the existential quantifier
**∃** (means \"there exists\").

The negation of one quantifier is the other quantifier (¬∀𝑥𝑃(𝑥) ≡
∃𝑥¬𝑃(𝑥) and ¬∃𝑥𝑃(𝑥) ≡ ∀𝑥¬𝑃(𝑥)).

### Properties of Binary Operations

**Properties of Binary Operations**

#### Associative Property / Associativity

Associativity refers to the ability to group operations in any order
without changing the outcome.

![](./media/image4.png)

![](./media/image5.png)

#### Commutative property / Commutativity

**Commutative property / Commutativity:**

In mathematics, a binary operation is commutative if changing the order
of the operands does not change the result.

![](./media/image6.png)

#### Distributive Property / Distributivity

**Distributive Property:**

**∀a∀b∀c( a × (b+c) = (a×b) + (a×c) )**

### Binary Logical Connectives / Binary Operators

**Binary Logical Connectives / Binary Operators:** Binary logical
connectives, also known as binary logical operators, are used to
[combine two propositions (or statements) to form a compound
proposition. The truth value of the resulting compound
proposition is determined by the truth values of the individual
propositions and the specific binary connective used.

#### Logical Equivalence

**Logical Equivalence** Logical equality is a logical operator that
corresponds to equality in Boolean algebra and to the **logical
biconditional** in propositional calculus. It gives the functional value
true if both functional arguments have the same logical value, and false
if they are different. The symbol for logical equivalence is **≡.**

![A screenshot of a computer Description automatically
generated](./media/image7.png)

**Logical equivalence tells you whether two statements are always true
or always false together. If they are, they are logically equivalent.**

-   **Proposition 𝑃: \"Light A is on.\"**

-   **Proposition 𝑄: \"Light B is on.\"**

If both lights are on (𝑃 is true and 𝑄 is true), then 𝑃 ≡ 𝑄 is true.

If both lights are off (𝑃 is false and 𝑄 is false), then 𝑃 ≡ 𝑄 is true.

![A red and white logo Description automatically
generated](./media/image8.png)

The Venn diagram of A EQ B (red part is true)

#### Conjunction

**Conjunction**: In logic and mathematics ∧ is the truth-functional
operator of conjunction or logical conjunction.

This is also known as 'AND'

A logical conjunction is a binary operation, typically the values of two
propositions, that produces a value of true if and only if both of its
operands are true.

![A screenshot of a truth table Description automatically
generated](./media/image9.png)

!Venn diagram of Logical
conjunction](./media/image10.png) ![A red and black circle with black lines
Description automatically
generated](./media/image11.png)

#### Disjunction

**Disjunction:** In logic, disjunction, also known as **logical
disjunction** or **logical or** or **logical addition** or **inclusive
disjunction**, is a logical connective typically notated as ∨ and read
aloud as \"or\".

In classical logic, disjunction is given a truth functional semantics
according to which a formula 𝜙 ∨ 𝜓 is true unless both are false.

![A white and pink squares with black letters Description automatically
generated](./media/image12.png)

![A red circle with black lines Description automatically
generated](./media/image13.png)

#### Exclusive Disjunction / Exclusive OR

**Exclusive OR:**

Exclusive disjunction essentially means \'either one, but not both nor
none\'. In other words, the statement is true if and only if one is true
and the other is false.

It gains the name \"exclusive or\" because the meaning of \"or\" is
ambiguous when both operands are true.

*[**XOR** excludes that case*. Some informal ways of
describing **XOR** are \"one or the other but not both\", \"either one
or the other\", and \"A or B, but not A and B\".

Symbolically, XOR is expressed as: $\mathbf{\oplus , ≢}$**, ...**

![A white background with black text Description automatically
generated](./media/image14.png)

!Venn diagram of Exclusive
or](./media/image15.png)

#### Conditional Statement / Material Condition / Material Implication / Hypothetical Proposition

**Conditional Statement / Material condition / Material Implication:**

A conditional statement, also known as an implication, is a fundamental
concept in logic that expresses a relationship between two propositions.
It is often written in the form \"if 𝑃, then 𝑄\" and is denoted by the
symbol →

The term material implication / material condition is particularly
important because it differentiates the usage of the conditional
statement in logic from how it is normally understood in normal
language.

In a conditional formula A → B

-   The sub formula **A** is referred to as the **antecedent**

-   **B** is called the consequent of the **conditional**.

![A screenshot of a table Description automatically
generated](./media/image16.png)

The logical cases where the antecedent A is false and A → B is true, are
called \"vacuous truths\". Examples are \...

-   \... with **B** false: \"If Marie Curie is a sister of Galileo
    Galilei, then Galileo Galilei is a brother of Marie Curie\",

-   \... with **B** true: \"If Marie Curie is a sister of Galileo
    Galilei, then Marie Curie has a sibling.\".

![A screenshot of a computer Description automatically
generated](./media/image17.png)

##### Vacuous Truth

**Vacuous Truth:** Vacuous truth refers to a conditional statement
(implication) that is considered true solely because its antecedent (the
\"if\" part) is false, regardless of the truth value of the consequent
(the \"then\" part).

A vacuous truth is a conditional or universal statement (a universal
statement that can be converted to a conditional statement) that is
*[true because the antecedent cannot be satisfied*.

Examples common to everyday speech include conditional phrases used as
*[idioms of improbability* like \"when hell freezes over
\...\" and \"when pigs can fly \...\", indicating that not before the
given (impossible) condition is met will the speaker accept some
respective (typically false or absurd) proposition.

##### Inverse

**Inverse:** In logic, an inverse is a type of conditional sentence
which is an immediate inference made from another conditional sentence.

Given a conditional sentence of the form **P → Q**, the inverse refers
to the sentence **¬P → ¬Q**

For example, substituting propositions in natural language for logical
variables, the inverse of the following conditional proposition

\"If it\'s raining, then Sam will meet Jack at the movies.\"

would be

\"If it\'s not raining, then Sam will not meet Jack at the movies.\"

##### Converse

The converse of a categorical or implicational statement is the result
of reversing its two constituent statements.

For the implication **P → Q**, the converse is **Q → P**.

##### Contrapositive

**T**he contrapositive of a statement has its antecedent and consequent
inverted and flipped.

Conditional statement **P → Q**

In formulas: the contrapositive of **P →** **Q** is **¬Q → ¬P**

![](./media/image18.png)

#### Logical Biconditional / Biconditional Statement

**Logical Biconditional / Biconditional Statement:** The biconditional,
also known as the equivalence operator, is a logical connective that
combines two propositions and states that both **propositions** have the
same truth value.

In other words, 𝑃 ↔ 𝑄 is true if both 𝑃 and 𝑄 are either true or false.

In the propositional interpretation, 𝑃 ↔ 𝑄 means that P implies Q and Q
implies P; in other words, the propositions are logically equivalent, in
the sense that both are either jointly true or jointly false.

Again, this does not mean that they need to have the same meaning, as P
could be \"the triangle ABC has two equal sides\" and Q could be \"the
triangle ABC has two equal angles\". In general, the antecedent is the
premise, or the cause, and the consequent is the consequence.

When an implication is translated by a hypothetical (or conditional)
judgment, the antecedent is called the hypothesis (or the condition) and
the consequent is called the thesis.

![A screenshot of a table Description automatically
generated](./media/image19.png)

![A screenshot of a computer screen Description automatically
generated](./media/image20.png)

### Connective Precedence

Just like in mathematics, parentheses can be used in compound
expressions to indicate the order in which the operators are to be
evaluated. In the absence of parentheses, the order of evaluation is
determined by precedence rules.

![A table with text and arrows Description automatically generated with
medium confidence](./media/image21.png)

# Predicate Logic / first-order logic

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

# Mathematical Notations

## Equivalence Symbols

### Equality ( = )

**Type:** Object-level symbol.

**Meaning:** Two mathematical objects are the same.

**Used with:** Sets, numbers, functions, etc.

### Equivalence (⟺)

**Type:** Meta-level notation in mathematics writing.

**Meaning:** "These two statements are equivalent" or "by definition,
one holds iff the other holds."

**Not part of formal logic syntax** --- shorthand used in derivations.

### Congruence (≡)

**Type:** Varies by context.

**Meaning:**

-   In algebra/number theory: congruence (e.g. a≡b (mod n)

-   In logic: syntactic identity (two expressions are literally the
    same)

-   In analysis: sometimes used for "identically equal" functions

# Set Theory

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
conceptually, [order is meaningless and not included in the formal
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

A is a subset of B, (denoted A ⊆ B ), if every element of A is also an
element of B.

If A is not a subset of B, we write A ⊈ B.

![](./media/image26.png)

## Proper Subset

We can say that A is proper subset of B when there exists an element in
B that does not exist in A. Everything in A is also in B, but B contains
something not in A.

∃x( x ∈ B ∧ x ∉ A)

![A yellow and green circle with black text Description automatically
generated](./media/image27.png)

## Set Equality

Two sets are **equal** iff they have the **same members**. Formally
**(Axiom of Extensionality):**

$$A = B  \Longleftrightarrow  \forall x (x \in A  \Longleftrightarrow  x \in B)
$$

Equivalently (very handy in proofs):

A = B ⟺ ( A ⊆ B) ∧ ( B ⊆ A )

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

$$\lceil\frac{m}{n}\rceil
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

-   $\mid A \mid \leq \mid B \mid iff there exists an **injection**
    $A \rightarrow B$.

-   $\mid A \mid \geq \mid B \mid iff there exists an **injection**
    $B \rightarrow A$ (equivalently, a surjection $A \rightarrow B$).

-   **Schröder--Bernstein:** injections both ways
    $A \hookrightarrow B$ and $B \hookrightarrow A$ ⇒ bijection
    $A \cong B$.

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

**Ordered pair:** Formally, an ordered pair with **first
coordinate** *a*, and **second coordinate** *b*, usually denoted by
**(*a*, *b*),** can be defined as the
set $\mathbf{\{\{ a\},\{ a,b\}\}}.$

**What an ordered pair must satisfy**

We want a set-theoretic object ⟨a,b⟩ so that

$$\langle a,b\rangle = \langle c,d\rangle  \Longleftrightarrow  a = c and b = d.
$$

The naive set $\{ a,b\}$fails (it ignores order: $\{ a,b\} = \{ b,a\}$).

**Kuratowski's definition:**

⟨a,b⟩:={{a},{a,b}} 

**Why it works (key property)**

**Assume** $\mathbf{\{\{ a\},\{ a,b\}\} = \{\{ c\},\{ c,d\}\}}$

Since $\{ a\}$ is an element on the left, it must equal $\{ c\}$ or
$\{ c,d\}$

In either case we get $a = c$ (if $\{ a\} = \{ c \}$ then
$a = c$

if $\{ a\} = \{ c,d\}$ then that set is a singleton, so $c = d = a$)

With $a = c$ now fixed, the other elements must match, so
$\{ a,b\} = \{ c,d\} = \{ a,d\}$, hence $b = d$

Thus equality of the sets forces $a = c$ and $b = d$. Conversely, if
$a = c$ and $b = d$, the two sides are literally the same set

*(Edge case* $a = b$*: then* $\langle a,a\rangle = \{\{ a\}\}$*; the
same argument still gives* $c = a$ *and* $d = a$*)*

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

# Prime Factorization

**Prime Factorization:** Prime factorization is a process of factoring a
**composite number** in terms of **prime numbers**.

*Every composite number has a unique prime factorization---this is
guaranteed by the Fundamental Theorem of
Arithmetic.*

Because every composite number has a unique prime factorization, there
is only one way to reduce a composite number into a product of primes.

## Factor tree method of prime factorization

**Factor tree method of prime factorization:**

To find the prime factorization of the given number using factor tree
method, follow the below steps:

-   **Step 1:** Consider the given number as the root of the tree

-   **Step 2:** Write down the pair of factors as the branches of a tree

-   **Step 3:** Again factorize the composite factors, and write down
    the factors pairs as the branches

-   **Step 4:** Repeat the step, until to find the prime factors of all
    the composite factors

![A yellow circles with purple numbers and a yellow rectangle with
purple circles Description automatically
generated](./media/image39.png)

# Number Theory

**Number Theory:** The branch of mathematics dealing with properties and relationships of integers.

## Divisibility

**Divisibility:** An integer **a** is divisible by an integer **b** (where $b \neq 0$) if there exists an integer **k** such that $a = bk$.

**Notation:** $b \mid a$ (read as "b divides a")

**Example:**
- $3 \mid 12$ because $12 = 3 \times 4$
- $5 \nmid 13$ because there is no integer k such that $13 = 5k$

**Properties of Divisibility:**

1. **Reflexive:** $a \mid a$ for all $a \neq 0$
2. **Transitive:** If $a \mid b$ and $b \mid c$, then $a \mid c$
3. **Linear combination:** If $a \mid b$ and $a \mid c$, then $a \mid (bx + cy)$ for any integers x, y
4. **Product:** If $a \mid b$, then $a \mid bc$ for any integer c
5. **Division by GCD:** If $a \mid bc$ and $\gcd(a,b) = 1$, then $a \mid c$

## Greatest Common Divisor (GCD)

**Greatest Common Divisor:** The largest positive integer that divides both **a** and **b**.

**Notation:** $\gcd(a, b)$ or $(a, b)$

**Definition:** $\gcd(a, b) = \max\{d \in \mathbb{Z}^+ : d \mid a \text{ and } d \mid b\}$

**Example:**
- $\gcd(12, 18) = 6$
- $\gcd(17, 19) = 1$ (coprime/relatively prime)

### Euclidean Algorithm

**Euclidean Algorithm:** Efficient method to compute GCD using repeated division.

**Algorithm:**
1. Divide **a** by **b** to get remainder **r**
2. Replace **a** with **b** and **b** with **r**
3. Repeat until remainder is 0
4. The last non-zero remainder is the GCD

**Example:** Find $\gcd(252, 105)$
```
252 = 105 × 2 + 42
105 = 42 × 2 + 21
42 = 21 × 2 + 0
```
$\gcd(252, 105) = 21$

### Extended Euclidean Algorithm

**Extended Euclidean Algorithm:** Finds integers **x** and **y** such that $ax + by = \gcd(a, b)$

**Example:** Express $\gcd(252, 105) = 21$ as a linear combination
- $21 = 105 - 42 \times 2$
- $21 = 105 - (252 - 105 \times 2) \times 2$
- $21 = 105 \times 5 - 252 \times 2$
- Result: $252 \times (-2) + 105 \times 5 = 21$

## Least Common Multiple (LCM)

**Least Common Multiple:** The smallest positive integer that is divisible by both **a** and **b**.

**Notation:** $\text{lcm}(a, b)$ or $[a, b]$

**Definition:** $\text{lcm}(a, b) = \min\{m \in \mathbb{Z}^+ : a \mid m \text{ and } b \mid m\}$

**Example:**
- $\text{lcm}(12, 18) = 36$
- $\text{lcm}(7, 5) = 35$

**Relationship between GCD and LCM:**
$$\gcd(a, b) \times \text{lcm}(a, b) = a \times b$$

**Example:** $\gcd(12, 18) \times \text{lcm}(12, 18) = 6 \times 36 = 216 = 12 \times 18$ ✓

## Modular Arithmetic

**Modular Arithmetic:** A system of arithmetic for integers where numbers "wrap around" after reaching a certain value (the modulus).

**Intuition - Clock Arithmetic:**

Think of a 12-hour clock. When it's 10 o'clock and you add 5 hours, you get 3 o'clock (not 15 o'clock). This is modular arithmetic: $10 + 5 \equiv 3 \pmod{12}$.

The clock "wraps around" after 12. In general, modular arithmetic wraps around after reaching the modulus **n**.

**Why it matters:**
- Cryptography (RSA encryption, digital signatures)
- Hashing algorithms
- Computer science (array indexing, scheduling)
- Calendar calculations (day of week)
- Music theory (note intervals wrapping around octaves)

### Congruence

**Congruence Modulo n:** Two integers **a** and **b** are congruent modulo **n** if they have the same remainder when divided by **n**.

**Intuitive meaning:** "a and b are in the same position on the cycle"

**Notation:** $a \equiv b \pmod{n}$

**Definition:** $a \equiv b \pmod{n}$ if and only if $n \mid (a - b)$

**Example:**
- $17 \equiv 5 \pmod{12}$ because $17 - 5 = 12$ and $12 \mid 12$
- $23 \equiv 3 \pmod{10}$ because $23 - 3 = 20$ and $10 \mid 20$
- $-8 \equiv 4 \pmod{12}$ because $-8 - 4 = -12$ and $12 \mid -12$

### Properties of Congruence

Congruence is an **equivalence relation**:
1. **Reflexive:** $a \equiv a \pmod{n}$
2. **Symmetric:** If $a \equiv b \pmod{n}$, then $b \equiv a \pmod{n}$
3. **Transitive:** If $a \equiv b \pmod{n}$ and $b \equiv c \pmod{n}$, then $a \equiv c \pmod{n}$

**Arithmetic Properties:**

If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:
1. **Addition:** $a + c \equiv b + d \pmod{n}$
2. **Subtraction:** $a - c \equiv b - d \pmod{n}$
3. **Multiplication:** $ac \equiv bd \pmod{n}$
4. **Power:** $a^k \equiv b^k \pmod{n}$ for any positive integer k

**Example:**
- $17 \equiv 5 \pmod{12}$ and $23 \equiv 11 \pmod{12}$
- Addition: $17 + 23 = 40 \equiv 4 \pmod{12}$ and $5 + 11 = 16 \equiv 4 \pmod{12}$ ✓
- Multiplication: $17 \times 23 = 391 \equiv 7 \pmod{12}$ and $5 \times 11 = 55 \equiv 7 \pmod{12}$ ✓

### Modular Addition and Multiplication Tables

**Example - Arithmetic modulo 5:**

**Addition table ($\mathbb{Z}_5$):**

| + | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

**Multiplication table ($\mathbb{Z}_5$):**

| × | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 2 | 3 | 4 |
| 2 | 0 | 2 | 4 | 1 | 3 |
| 3 | 0 | 3 | 1 | 4 | 2 |
| 4 | 0 | 4 | 3 | 2 | 1 |

### Modular Inverses

**Modular Inverse:** An integer **a** has a multiplicative inverse modulo **n** if there exists an integer **x** such that $ax \equiv 1 \pmod{n}$.

**Notation:** $a^{-1} \pmod{n}$

**Intuition:** Just like $3 \times \frac{1}{3} = 1$ in regular arithmetic, we want $3 \times ? \equiv 1$ in modular arithmetic. The "?" is the modular inverse.

**Existence:** **a** has an inverse modulo **n** if and only if $\gcd(a, n) = 1$ (a and n are coprime).

**Why coprime matters:** If $\gcd(a, n) = d > 1$, then $ax$ is always divisible by $d$, but 1 is not divisible by $d$. So $ax$ can never equal 1 (or any number congruent to 1 mod n).

**Example 1:** Find the inverse of 3 modulo 7
- We need $3x \equiv 1 \pmod{7}$
- Try values: $3 \times 1 = 3$, $3 \times 2 = 6$, $3 \times 3 = 9 \equiv 2$, $3 \times 4 = 12 \equiv 5$, $3 \times 5 = 15 \equiv 1$ ✓
- $3^{-1} \equiv 5 \pmod{7}$

**Example 2:** 6 has no inverse modulo 9
- $\gcd(6, 9) = 3 \neq 1$, so no inverse exists

**Finding inverses using Extended Euclidean Algorithm:**
- To find $a^{-1} \pmod{n}$, use extended Euclidean algorithm to find x, y such that $ax + ny = 1$
- Then $a^{-1} \equiv x \pmod{n}$

### Modular Division

**Modular Division:** To compute $\frac{a}{b} \pmod{n}$, find $b^{-1} \pmod{n}$ and compute $a \times b^{-1} \pmod{n}$.

**Example:** Compute $\frac{7}{3} \pmod{11}$
- Find $3^{-1} \pmod{11}$: $3 \times 4 = 12 \equiv 1 \pmod{11}$, so $3^{-1} \equiv 4$
- $\frac{7}{3} \equiv 7 \times 4 \equiv 28 \equiv 6 \pmod{11}$

**Note:** Division is only defined when the divisor is coprime to the modulus.

### Modular Exponentiation

**Modular Exponentiation:** Computing $a^b \pmod{n}$ efficiently.

**Naive approach:** Compute $a^b$ then take mod n (inefficient for large b)

**Efficient approach - Repeated squaring:**

**Example:** Compute $3^{13} \pmod{7}$
```
13 in binary = 1101
3^1 ≡ 3 (mod 7)
3^2 ≡ 9 ≡ 2 (mod 7)
3^4 ≡ 2^2 ≡ 4 (mod 7)
3^8 ≡ 4^2 ≡ 16 ≡ 2 (mod 7)

3^13 = 3^8 × 3^4 × 3^1 ≡ 2 × 4 × 3 ≡ 24 ≡ 3 (mod 7)
```

**Algorithm (Square-and-multiply):**
1. Express exponent in binary
2. Square base repeatedly
3. Multiply corresponding powers where binary digit is 1

### Fermat's Little Theorem

**Fermat's Little Theorem:** If **p** is prime and $\gcd(a, p) = 1$, then:
$$a^{p-1} \equiv 1 \pmod{p}$$

**Corollary:** $a^p \equiv a \pmod{p}$ for all integers a

**Application - Computing modular inverses:**
If p is prime and $\gcd(a, p) = 1$, then:
$$a^{-1} \equiv a^{p-2} \pmod{p}$$

**Example:** Find $3^{-1} \pmod{7}$
- $3^{-1} \equiv 3^{7-2} \equiv 3^5 \pmod{7}$
- $3^5 = 243 = 7 \times 34 + 5$, so $3^{-1} \equiv 5 \pmod{7}$

### Chinese Remainder Theorem

**Chinese Remainder Theorem (CRT):** Given a system of congruences with pairwise coprime moduli, there exists a unique solution modulo the product of the moduli.

**Intuition:** Imagine you know someone's position on multiple independent cycles (days of week, months, years). You can uniquely determine their position in the combined cycle.

**Real-world example:** "It's a Tuesday in March during a leap year" uniquely identifies a specific day in a 4-year cycle, even though each piece of information alone doesn't.

**Statement:** If $n_1, n_2, \ldots, n_k$ are pairwise coprime, then the system:
$$\begin{cases}
x \equiv a_1 \pmod{n_1} \\
x \equiv a_2 \pmod{n_2} \\
\vdots \\
x \equiv a_k \pmod{n_k}
\end{cases}$$

has a unique solution modulo $N = n_1 n_2 \cdots n_k$.

**Example:** Solve:
$$\begin{cases}
x \equiv 2 \pmod{3} \\
x \equiv 3 \pmod{5} \\
x \equiv 2 \pmod{7}
\end{cases}$$

**Solution:**
1. $N = 3 \times 5 \times 7 = 105$
2. $N_1 = 105/3 = 35$, $N_2 = 105/5 = 21$, $N_3 = 105/7 = 15$
3. Find inverses:
   - $35 y_1 \equiv 1 \pmod{3}$ → $2y_1 \equiv 1 \pmod{3}$ → $y_1 = 2$
   - $21 y_2 \equiv 1 \pmod{5}$ → $1y_2 \equiv 1 \pmod{5}$ → $y_2 = 1$
   - $15 y_3 \equiv 1 \pmod{7}$ → $1y_3 \equiv 1 \pmod{7}$ → $y_3 = 1$
4. $x \equiv 2(35)(2) + 3(21)(1) + 2(15)(1) \pmod{105}$
5. $x \equiv 140 + 63 + 30 \equiv 233 \equiv 23 \pmod{105}$

**Verification:**
- $23 = 7 \times 3 + 2$, so $23 \equiv 2 \pmod{3}$ ✓
- $23 = 4 \times 5 + 3$, so $23 \equiv 3 \pmod{5}$ ✓
- $23 = 3 \times 7 + 2$, so $23 \equiv 2 \pmod{7}$ ✓

**Why CRT works:**

Each congruence gives partial information about x. Since the moduli are coprime (no common factors), the constraints are independent - knowing x's remainder mod 3 tells you nothing about its remainder mod 5 or 7.

The combined information uniquely determines x within the cycle of length $3 \times 5 \times 7 = 105$. Any two numbers that satisfy all three congruences must differ by a multiple of 105.

**Simplified analogy:** If you know:
- Position in a 3-item cycle: slot 2
- Position in a 5-item cycle: slot 3  
- Position in a 7-item cycle: slot 2

There's exactly one position (23) in the combined 105-item cycle that matches all three slots.

**Applications:**
- Solving systems of linear congruences
- Fast modular exponentiation
- RSA cryptography
- Calendar calculations

## Euler's Totient Function

**Euler's Totient Function:** $\phi(n)$ counts the number of integers from 1 to n that are coprime to n.

**Definition:** $\phi(n) = |\{k \in \mathbb{Z} : 1 \leq k \leq n \text{ and } \gcd(k, n) = 1\}|$

**Intuition:** How many numbers from 1 to n can "see" n without any common factors blocking the view? These are the numbers that have modular inverses modulo n.

**Examples:**
- $\phi(1) = 1$ (only 1 is coprime to 1)
- $\phi(6) = 2$ (1 and 5 are coprime to 6)
- $\phi(7) = 6$ (1, 2, 3, 4, 5, 6 are all coprime to 7)
- $\phi(12) = 4$ (1, 5, 7, 11 are coprime to 12)

**Formula for prime p:** $\phi(p) = p - 1$

**Formula for prime power:** $\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1)$

**Formula for coprime integers:** If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$

**General formula using prime factorization:**
If $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then:
$$\phi(n) = n \left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right)$$

**Example:** Find $\phi(36)$
- $36 = 2^2 \times 3^2$
- $\phi(36) = 36 \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{3}\right) = 36 \times \frac{1}{2} \times \frac{2}{3} = 12$

### Euler's Theorem

**Euler's Theorem:** If $\gcd(a, n) = 1$, then:
$$a^{\phi(n)} \equiv 1 \pmod{n}$$

**Note:** Fermat's Little Theorem is a special case where n is prime (since $\phi(p) = p - 1$).

**Application:** Computing modular inverses when n is not prime:
$$a^{-1} \equiv a^{\phi(n) - 1} \pmod{n}$$

# Partial Fraction Decomposition

**Partial Fraction Decomposition:** Partial fraction decomposition is a
method used to express a rational function (a fraction where the
numerator and the denominator are both polynomials) as a sum of simpler
fractions, known as partial fractions. This technique is particularly
useful for integrating rational functions and solving differential
equations.

Partial fraction decomposition is the inverse process of finding the
lowest common denominator.

![](./media/image40.png)

![A table of mathematical equations Description automatically
generated](./media/image41.png)

So what if we have factors not falling into one of these 4 forms above?

*When dealing with higher-degree factors (such as cubic or higher), you
can use polynomial long division or other algebraic techniques to reduce
the problem to a form that can then be handled by the four
cases.*

# Symbolic Methods vs. Numerical Methods

## Symbolic Methods

**Symbolic Methods:** Symbolic methods involve manipulating mathematical
expressions algebraically to find exact solutions. These methods rely on
**symbolic computation**, where the results are expressed in terms of
algebraic formulas.

Ex:

-   **Quadratic Formula**

-   **Cubic and Quartic Formulas**

-   **Factoring**

**Advantages:**

-   **Precision:** Solutions are exact and not subject to rounding
    errors.

-   **Insight:** Provides deeper understanding of the mathematical
    structure of the problem.

**Disadvantages:**

**Complexity:** Symbolic solutions can be very complex, especially for
higher-degree polynomials.

**Limitations:** *General symbolic solutions are not available for
polynomials of degree five or higher due to the **Abel-Ruffini
theorem**.*

## Numerical Methods

**Numerical Methods:** Numerical methods involve approximating solutions
through iterative algorithms and numerical computations. The results are
given as approximate numerical values.

Ex:

-   **Newton's Method**

-   **Bisection Method**

-   **Secant Method**

  -----------------------------------------------------------------------
  Aspect            Symbolic Methods      Numerical Methods
  ----------------- --------------------- -------------------------------
  Nature of         Exact, closed-form    Approximate, iterative
  Solution          solutions             solutions

  Precision         Exact (subject to     Approximate (with controllable
                    algebraic             accuracy)
                    manipulation)         

  Applicability     Limited to certain    Broad applicability to various
                    classes of problems   types of problems

  Complexity        Can be complex,       Iterative, often simpler
                    especially for higher algorithms
                    degrees               

  Convergence       Guaranteed for        Convergence depends on the
                    solvable forms        method and problem

  Insight           Provides deeper       Practical and efficient for
                    mathematical          computational tasks
                    understanding         

  Example           **Quadratic formula,  **Newton's method, bisection
  Techniques        factoring, Cardano's  method, secant method**
                    method**              
  -----------------------------------------------------------------------

# Functions & Relations

## Relation

**Relation:** A **relation** is a set of ordered pairs, where each pair
consists of an element from one set, called the **domain**, and an
element from another set, called the **codomain**.

The relation specifies a relationship between these elements, indicating
how elements from the **domain** are associated with elements in the
**codomain**.

**Definition**: A relation **𝑅** from set **𝐴** to set **𝐵** is a
[subset](#subset) of the Cartesian
product](#ordered-pairs-kuratowskis-definition) **𝐴×𝐵**, which means

**𝑅 ⊆ 𝐴×𝐵**

Each element of **𝑅** is an ordered pair **(𝑎,𝑏)** where **𝑎 ∈ 𝐴** and
**𝑏 ∈ 𝐵**.

We may state that **x** bears relation **R** to **y** by writing **xRy**

Key Concepts

1.  **Domain, Codomain**, **Range, Image**

-   The **domain** of a relation is the set of all possible first
    elements (inputs) in the ordered pairs.

-   The **codomain** (or target set) is the set of all possible second
    elements (outputs) in the ordered pairs.

-   The **range** is the set of *[actual outputs* in the
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

**Range**: The ***[actual outputs produced by the
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

∀a ∈ A(a ∈ A → R(a, a))

The reflexive property of relations can be understood from a directed
graph by looking for a loop on each element going back to itself.

The reflexive property of relations can be understood from a matrix by
looking for a diagonal connecting from top left corner to bottom right
corner

![A diagram of a graph Description automatically
generated](./media/image42.png)

#### Symmetric Property

**Symmetric Property:**

A relation **R** on a set **A** is said to be **symmetric** if, whenever
an element a is related to an element **b**, then **b** is also related
to **a**.

In other words, if **(a,b) ∈ R** and **(b,c) ∈ R**, then **(a,c)** must
also be in **R**.

∀a,b ∈ A ( R(a,b) → R(b,a) )

#### Transitive Property

**Transitive Property:**

A relation **R** on a set **A** is said to be **transitive** if,
whenever an element **a** is related to an element **b** and **b** is
related to an element **c**, then **a** must also be related to **c**.

In other words, if **(a,b) ∈ R** and **(b,c) ∈ R** then **(a,c)** must
also be in **R**.

∀a,b,c ∈ A ( ( R(a,b) ∧ R(b,c) ) → R(a,c) )

#### Antisymmetric Property

**Antisymmetric Property:** A relation **R** on a set **A** is **antisymmetric** if whenever both (a,b) and (b,a) are in R, then a must equal b.

∀a,b ∈ A ( (R(a,b) ∧ R(b,a)) → a = b )

**Example:** The "less than or equal to" relation (≤) on real numbers is antisymmetric:
- If a ≤ b and b ≤ a, then a = b

**Non-example:** The "divides" relation on positive integers is NOT antisymmetric:
- 2 divides 4 and 4 does not divide 2 (so it's not even close to being antisymmetric in the traditional sense, but actually it IS antisymmetric because if a|b and b|a, then a=b for positive integers)

#### Asymmetric Property

**Asymmetric Property:** A relation **R** on a set **A** is **asymmetric** if whenever (a,b) is in R, then (b,a) cannot be in R.

∀a,b ∈ A ( R(a,b) → ¬R(b,a) )

**Example:** The "less than" relation (<) on real numbers is asymmetric:
- If a < b, then b ≮ a (b is not less than a)

**Note:** Asymmetric implies antisymmetric, but not vice versa.

#### Irreflexive Property

**Irreflexive Property:** A relation **R** on a set **A** is **irreflexive** if no element is related to itself.

∀a ∈ A ( ¬R(a,a) )

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

1. **Subset relation (⊆)** on sets:
   - Every set is a subset of itself (reflexive)
   - If A ⊆ B and B ⊆ A, then A = B (antisymmetric)
   - If A ⊆ B and B ⊆ C, then A ⊆ C (transitive)

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
- Transitivity implied: {} ⊆ {a} ⊆ {a, b}

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
4. **Total:** ∀a,b ∈ A ( R(a,b) ∨ R(b,a) )

**Examples:**
- ≤ on real numbers (you can always compare two numbers)
- Alphabetical order on strings

**Non-example:**
- Subset relation (⊆) is NOT a total order because some sets are incomparable

### Equivalence Relation

**Equivalence Relation:** An equivalence relation is a way to formally
define when two elements of a set can be considered \"equivalent\" or
\"similar\" in some sense, according to specific criteria.

Equivalence relations are fundamental in mathematics because they allow
us to group elements of a set into distinct classes of equivalent items,
which simplifies the study and understanding of complex structures.

A relation **R** on a set **A** is called an **equivalence relation** if
it satisfies the following three properties:

1.  **Reflexivity:**

∀a ∈ A : (a,a) ∈ R

This means that every element is related to itself.

2.  **Symmetry:**

∀a,b ∈ A (R(a,b)→R(b,a))

This means that if a is related to b, then b is also related to a.

3.  **Transitivity:**

∀a,b,c ∈ A (( R(a,b) ∧ R(b,c) ) → R(a,c))

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
\"congruence modulo 3\" divides this set into three equivalence classes:
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

**Equivalence Class:** Given an equivalence relation **R** on a set **A** and an element **a ∈ A**, the equivalence class of **a** is the set of all elements in **A** that are related to **a** under **R**.

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
- If **R** and **S** are both **transitive**, $S \circ R$ may not be transitive
- If **R** is **reflexive**, then $R \circ R = R$ (only if R is also transitive)

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

![A group of black letters Description automatically
generated](./media/image43.png)

**1. Domain of a Function:**

The **domain** of a function **f : X → Y** is the set **X**. It includes
[all the possible inputs that the function can accept.

**Example**: For the function **f(x) =** $\sqrt{\mathbf{x}}$, the domain
is **X = { x ∈ R ∣ x ≥ 0 }**, because the square root function is only
defined for non-negative real numbers.

**2. Codomain of a Function:**

The **codomain** of a function **f : X → Y**, which includes [all
possible outputs that the function is allowed to produce according to
its definition.

The **codomain** is specified as part of the function\'s definition,
[even if not all elements of the **codomain** are actually reached by
the function.

**3. Range of a Function:**

The range of a function **f : X → Y** is the [set of all actual
outputs that the function produces when applied to every
element in its domain **X**.

The range is therefore a subset of the codomain.

**4. Image of a Function:**

The **image** of a function is similar to the **range** but often refers
to the outputs corresponding to a specific subset of the domain. If the
subset in question is the entire **domain**, then the **image** and the
**range** are the same. For a particular subset **A ⊆ X**, the image of
**A** under **f** is denoted as **f(A)**.

![A close up of text Description automatically
generated](./media/image44.png)

### Domain

The domain of a function **f** is the set **X**, which includes all the
possible inputs for the function. In terms of ordered pairs, the domain
is the set of all possible first values (the input values) in those
pairs.

Dom(f) = A ⟺ ∀x(x ∈ A ↔ ∃y f(x)=y)

Dom(f) = { x ∣ ∃y f(x) = y}

### Codomain

The **codomain** of a function **f : X → Y**

includes [all possible outputs that the function is allowed to produce
according to its definition

The **codomain** is specified as part of the function\'s definition,
even if not all elements of the **codomain** are actually reached by the
function. This contrasts with range, which represents the actually
mapped values of the **codomain**.

Cod(f) = B ⟺ ∀x ∈ Dom(f) ,∃y ∈ B (f(x)=y)

### Range

The range of a function **f : X → Y** is the [set of all actual
outputs that the function produces when applied to every
element in its domain **X**. The range is therefore a subset of the
codomain.

Range(f) = { y ∈ Cod(f) ∣ ∃x ∈ Dom(f), f(x) = y}

Range(f) = { f(x) ∣ x ∈ Dom(f) }

Explanation:

-   **∀y**: For all elements **y** in the codomain.

-   **y ∈ Range (f)↔ ∃x ( x ∈ X ∧ f(x)=y)**:

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

For a particular subset **A ⊆ X**, the image of **A** under **f** is
denoted as **f(A)**.

### Preimage

The **preimage** of a set under a function is a concept that refers to
the set of all elements in the domain that map to a given subset of the
codomain.

In other words, for a function:

**f : X → Y** and a subset **B** of the codomain **Y**, the preimage of
**B** under **f** is the set of all elements in the domain **X** that
**f** maps into **B**.

$f^{- 1}(B)$= { x ∈ X ∣ f(x) ∈ B }

The **preimage** of a set **B** under a function **f** is the set of all
elements in the domain **X** that map to elements in **B** in the
codomain **Y**.

One should not be mislead by the notation into thinking of the preimage
as having to do with an inverse of **f**. The preimage is define whether
f has an inverse or not. **Note that however** if f does have an
inverse, then the preimage is exactly the image of Y under the inverse
map.

### Injection (one-to-one)

**Injection:** A function is **injective** if every element in the
domain maps to one and only one element in the codomain.

∀x~1~​∀x~2~​( (f(x~1~​) = f(x~2~​) ) → ( x~1~​ = x~2~​) )

*For every x~1~,x~2~ if f(x~1~) = f(x~2~), then x~1~ must equal x~2~*

![](./media/image45.png)

![PPT - Discrete Mathematics: Functions PowerPoint Presentation, free
download -
ID:5251074](./media/image46.jpeg)

### Surjection (onto)

**Surjection:** A surjective function is a function whose image is equal
to it's codomain.

A surjective function is one whose codomain is equal to its range.

![A math equation with black text Description automatically
generated](./media/image47.png)

![](./media/image48.png)

![PPT - Discrete Mathematics: Functions PowerPoint Presentation, free
download - ID:5251074](./media/image49.jpeg)

![A screenshot of a math equation Description automatically
generated](./media/image50.png)

### Bijection (injective and surjective)

A function is bijective if and only if it is
both **injective** **(or *one-to-one*)---**meaning that each element in
the codomain is mapped to from at most one element of the
domain---and **surjective** **(or *onto*)---**meaning that each element
of the codomain is mapped to from at least one element of the domain. 

![A black background with white text Description automatically
generated](./media/image51.png)

### Invertibility

**Let f: A → B**

**f is invertible if there exists a function g: B → A such that:**

∀x ∈ A, g(f(x)) = x ∧ ∀y ∈ B, f(g(y)) = y.

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

$$f(x) = \begin{cases}
f_1(x) & \text{if } x \in I_1 \\
f_2(x) & \text{if } x \in I_2 \\
\vdots & \vdots \\
f_n(x) & \text{if } x \in I_n
\end{cases}$$

Where $I_1, I_2, \ldots, I_n$ are disjoint intervals that cover the domain.

**Example 1: Absolute Value Function**

$$|x| = \begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}$$

**Example 2: Tax Bracket System**

$$\text{tax}(income) = \begin{cases}
0.10 \cdot income & \text{if } income \leq 10000 \\
1000 + 0.15(income - 10000) & \text{if } 10000 < income \leq 50000 \\
7000 + 0.25(income - 50000) & \text{if } income > 50000
\end{cases}$$

**Example 3: Heaviside Step Function**

$$H(x) = \begin{cases}
0 & \text{if } x < 0 \\
1 & \text{if } x \geq 0
\end{cases}$$

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

$$f(x) = |x| = \begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}$$

**Properties:**
- Domain: $\mathbb{R}$
- Range: $[0, \infty)$
- Even function: $|-x| = |x|$
- $|xy| = |x||y|$
- Triangle inequality: $|x + y| \leq |x| + |y|$

**Graph:** V-shaped, vertex at origin

### Signum Function

**Signum Function (Sign Function):** Returns the sign of a number.

$$\text{sgn}(x) = \begin{cases}
-1 & \text{if } x < 0 \\
0 & \text{if } x = 0 \\
1 & \text{if } x > 0
\end{cases}$$

**Properties:**
- Domain: $\mathbb{R}$
- Range: $\{-1, 0, 1\}$
- Odd function: $\text{sgn}(-x) = -\text{sgn}(x)$

**Relationship to absolute value:**

$$x = \text{sgn}(x) \cdot |x|$$

### Step Functions

**Step Function:** A piecewise constant function with finitely many pieces.

**Heaviside Step Function:**

$$H(x) = \begin{cases}
0 & \text{if } x < 0 \\
1 & \text{if } x \geq 0
\end{cases}$$

Used in signal processing, differential equations, and control theory.

**Unit Step Function (shifted):**

$$u_a(x) = H(x - a) = \begin{cases}
0 & \text{if } x < a \\
1 & \text{if } x \geq a
\end{cases}$$

# Graphing Functions

**Graphing Functions:** Graphing is the visual representation of a function on a coordinate plane. The graph shows the relationship between input values (x) and output values (y), revealing important features like intercepts, asymptotes, extrema, and overall behavior.

## The Coordinate Plane

**Coordinate Plane (Cartesian Plane):** A two-dimensional plane formed by two perpendicular number lines:
- **x-axis:** Horizontal axis (independent variable)
- **y-axis:** Vertical axis (dependent variable)
- **Origin:** The point (0, 0) where the axes intersect

**Quadrants:** The plane is divided into four regions:
- Quadrant I: x > 0, y > 0 (upper right)
- Quadrant II: x < 0, y > 0 (upper left)
- Quadrant III: x < 0, y < 0 (lower left)
- Quadrant IV: x > 0, y < 0 (lower right)

**Ordered Pair:** A point is written as (x, y) where x is the horizontal coordinate and y is the vertical coordinate.

## Key Features to Identify

When graphing any function, identify these key features:

**1. Domain and Range**
- Domain: All possible x-values (horizontal extent)
- Range: All possible y-values (vertical extent)

**2. Intercepts**
- **x-intercept(s):** Points where the graph crosses the x-axis (set y = 0)
- **y-intercept:** Point where the graph crosses the y-axis (set x = 0)

**3. Asymptotes**
- **Vertical asymptote:** Line x = a where function approaches ±∞
- **Horizontal asymptote:** Line y = b that function approaches as x → ±∞
- **Oblique/Slant asymptote:** Diagonal line that function approaches

**4. Extrema**
- **Maximum:** Highest point (locally or globally)
- **Minimum:** Lowest point (locally or globally)
- **Vertex:** The maximum or minimum of a parabola

**5. Intervals of Increase/Decrease**
- **Increasing:** Function values rise as x increases (left to right upward)
- **Decreasing:** Function values fall as x increases (left to right downward)
- **Constant:** Function values remain the same

**6. Concavity**
- **Concave up:** Graph curves upward (like ∪)
- **Concave down:** Graph curves downward (like ∩)
- **Inflection point:** Where concavity changes

**7. Symmetry**
- **Even function (y-axis symmetry):** f(-x) = f(x)
- **Odd function (origin symmetry):** f(-x) = -f(x)

**8. End Behavior**
- Behavior as x → ∞
- Behavior as x → -∞

## Graphing Linear Functions

**Linear Function:** f(x) = mx + b

**Key Features:**
- **Slope (m):** Rate of change, "rise over run"
  - m > 0: Line rises (increasing)
  - m < 0: Line falls (decreasing)
  - m = 0: Horizontal line (constant)
- **y-intercept (b):** Point (0, b)
- **x-intercept:** Solve 0 = mx + b → x = -b/m

**Graphing Steps:**
1. Identify y-intercept (0, b) - plot this point
2. Use slope m = rise/run to find a second point
3. Draw a straight line through both points

**Example:** Graph f(x) = 2x - 3

- y-intercept: (0, -3)
- Slope: m = 2 = 2/1 (rise 2, run 1)
- From (0, -3), move up 2 and right 1 to get (1, -1)
- x-intercept: 0 = 2x - 3 → x = 1.5, point (1.5, 0)
- Draw line through points

**Special Cases:**
- **Vertical line:** x = a (undefined slope, not a function)
- **Horizontal line:** y = b (slope = 0)

## Graphing Quadratic Functions

**Quadratic Function:** f(x) = ax² + bx + c

**Key Features:**
- **Parabola:** U-shaped curve
- **Opens upward:** a > 0 (minimum at vertex)
- **Opens downward:** a < 0 (maximum at vertex)
- **Vertex:** Turning point at x = -b/(2a)
  - Substitute x into f(x) to find y-coordinate
- **Axis of symmetry:** Vertical line x = -b/(2a)
- **y-intercept:** (0, c)
- **x-intercept(s):** Solve ax² + bx + c = 0 (0, 1, or 2 solutions)

**Vertex Form:** f(x) = a(x - h)² + k
- Vertex: (h, k)
- Makes graphing easier when in this form

**Graphing Steps:**
1. Find vertex: x = -b/(2a), then find y
2. Determine direction (a > 0 up, a < 0 down)
3. Find y-intercept: (0, c)
4. Find x-intercepts (if they exist): factor or quadratic formula
5. Plot vertex, intercepts, and use symmetry to find additional points
6. Draw smooth parabola

**Example:** Graph f(x) = x² - 4x + 3

- Vertex: x = -(-4)/(2·1) = 2, y = 4 - 8 + 3 = -1, vertex (2, -1)
- Opens upward (a = 1 > 0)
- y-intercept: (0, 3)
- x-intercepts: x² - 4x + 3 = 0 → (x-1)(x-3) = 0 → x = 1, 3
- Points: (1, 0), (2, -1), (3, 0)
- Symmetric points from vertex

## Graphing Polynomial Functions

**Polynomial Function:** f(x) = aₙxⁿ + ... + a₁x + a₀

**Key Features:**
- **Degree n:** Determines maximum number of turning points (n-1)
- **End behavior:** Determined by leading term aₙxⁿ
  - Even degree: Both ends go same direction
  - Odd degree: Ends go opposite directions
  - Positive leading coefficient: Right end goes up
  - Negative leading coefficient: Right end goes down

**Zeros/Roots:**
- **x-intercepts:** Where f(x) = 0
- **Multiplicity:** Affects graph behavior at zeros
  - Odd multiplicity: Graph crosses x-axis
  - Even multiplicity: Graph touches x-axis (bounces)

**Graphing Steps:**
1. Find all zeros (factor if possible)
2. Determine end behavior from leading term
3. Find y-intercept: f(0)
4. Analyze multiplicity at each zero
5. Plot zeros, y-intercept, and additional points as needed
6. Connect with smooth curve following end behavior

**Example:** Graph f(x) = (x + 2)(x - 1)²

- Zeros: x = -2 (multiplicity 1, crosses), x = 1 (multiplicity 2, touches)
- Degree 3 (odd), positive leading coefficient
- End behavior: x → -∞, f(x) → -∞; x → ∞, f(x) → ∞
- y-intercept: (0, 2·1 = 2)
- At x = -2: crosses axis
- At x = 1: touches axis (turns around)

## Graphing Rational Functions

**Rational Function:** f(x) = P(x)/Q(x)

**Key Features:**
- **Vertical asymptotes:** Where Q(x) = 0 (denominator zero)
- **Holes:** Where both P(x) and Q(x) have common factor
- **Horizontal asymptote:** Compare degrees of P and Q
  - deg(P) < deg(Q): y = 0
  - deg(P) = deg(Q): y = aₙ/bₙ (ratio of leading coefficients)
  - deg(P) > deg(Q): No horizontal asymptote (may have oblique)
- **Oblique asymptote:** If deg(P) = deg(Q) + 1, use polynomial division

**Graphing Steps:**
1. Factor numerator and denominator completely
2. Identify and cancel common factors (these are holes)
3. Find vertical asymptotes: remaining zeros of denominator
4. Find horizontal/oblique asymptote based on degree
5. Find x-intercepts: zeros of numerator (excluding holes)
6. Find y-intercept: f(0) if defined
7. Test points in each region between asymptotes
8. Draw curve approaching asymptotes

**Example:** Graph f(x) = (x - 2)/(x + 1)

- No common factors, no holes
- Vertical asymptote: x = -1
- Horizontal asymptote: y = 1 (equal degrees, 1/1)
- x-intercept: (2, 0)
- y-intercept: (0, -2)
- Test regions: x < -1, -1 < x < 2, x > 2
- Curve approaches asymptotes but never touches

## Graphing Exponential Functions

**Exponential Function:** f(x) = a·bˣ + c

**Key Features:**
- **Growth:** b > 1 (increases exponentially)
- **Decay:** 0 < b < 1 (decreases exponentially)
- **Horizontal asymptote:** y = c
- **y-intercept:** (0, a + c)
- **No x-intercept** (unless vertically shifted to cross axis)
- **Domain:** (-∞, ∞)
- **Range:** (c, ∞) if a > 0, or (-∞, c) if a < 0

**Graphing Steps:**
1. Identify horizontal asymptote y = c
2. Find y-intercept: f(0) = a + c
3. Determine growth or decay
4. Plot several points using convenient x-values
5. Draw smooth curve approaching asymptote

**Example:** Graph f(x) = 2ˣ - 1

- Horizontal asymptote: y = -1
- y-intercept: (0, 0)
- Growth (b = 2 > 1)
- Points: (-2, -0.75), (-1, -0.5), (0, 0), (1, 1), (2, 3)
- Curve increases rapidly, approaches y = -1 as x → -∞

## Graphing Logarithmic Functions

**Logarithmic Function:** f(x) = a·logᵦ(x) + c

**Key Features:**
- **Vertical asymptote:** x = 0 (unless horizontally shifted)
- **x-intercept:** Where logᵦ(x) = -c/a
- **y-intercept:** None (undefined at x = 0)
- **Domain:** (0, ∞) for parent function
- **Range:** (-∞, ∞)
- **Increasing:** if a > 0 and b > 1
- **Decreasing:** if a < 0 and b > 1

**Graphing Steps:**
1. Identify vertical asymptote (usually x = 0)
2. Find x-intercept
3. Plot key point: (b, a) for parent function
4. Plot several points with convenient x-values
5. Draw smooth curve approaching asymptote

**Example:** Graph f(x) = log₂(x)

- Vertical asymptote: x = 0
- x-intercept: (1, 0) since log₂(1) = 0
- Key point: (2, 1) since log₂(2) = 1
- Points: (0.5, -1), (1, 0), (2, 1), (4, 2), (8, 3)
- Increases slowly, approaches x = 0 as x → 0⁺

## Graphing Absolute Value Functions

**Absolute Value Function:** f(x) = a|x - h| + k

**Key Features:**
- **Vertex:** (h, k)
- **V-shape:** Sharp corner at vertex
- **Opens upward:** a > 0 (minimum at vertex)
- **Opens downward:** a < 0 (maximum at vertex)
- **Slope:** ±a on each side of vertex
- **Axis of symmetry:** x = h

**Graphing Steps:**
1. Identify vertex: (h, k)
2. Determine direction: up if a > 0, down if a < 0
3. Find x-intercepts: Solve a|x - h| + k = 0
4. Find y-intercept: f(0)
5. Use symmetry to plot points on both sides of vertex
6. Connect with V-shape

**Example:** Graph f(x) = |x - 2| - 1

- Vertex: (2, -1)
- Opens upward (a = 1)
- Slope: ±1
- x-intercepts: 0 = |x - 2| - 1 → |x - 2| = 1 → x = 1 or x = 3
- y-intercept: (0, 1)
- V-shape with vertex at (2, -1)

## Graphing Piecewise Functions

**Piecewise Function:** Different formulas for different intervals of x

**Graphing Steps:**
1. Identify each piece and its domain interval
2. Graph each piece separately within its interval
3. Check endpoints:
   - Open circle: Point not included (< or >)
   - Closed circle: Point included (≤ or ≥)
4. Ensure no gaps or overlaps unless specified

**Example:** Graph f(x) = {x + 1 if x < 0; x² if x ≥ 0}

- For x < 0: Graph line y = x + 1, open circle at (0, 1)
- For x ≥ 0: Graph parabola y = x², closed circle at (0, 0)
- Discontinuity at x = 0 (jump discontinuity)

## Graphing Radical Functions

**Square Root Function:** f(x) = a√(x - h) + k

**Key Features:**
- **Starting point:** (h, k)
- **Domain:** [h, ∞)
- **Range:** [k, ∞) if a > 0
- **Increasing:** Slowly, concave down if a > 0
- **Shape:** Half-parabola on its side

**Graphing Steps:**
1. Find starting point: (h, k)
2. Determine domain: x ≥ h
3. Plot starting point
4. Calculate several points for x > h
5. Draw smooth curve starting at (h, k)

**Example:** Graph f(x) = √(x + 1) - 2

- Starting point: (-1, -2)
- Domain: [-1, ∞)
- Points: (-1, -2), (0, -1), (3, 0), (8, 1)
- Increases slowly, concave down

## Graphing Inequalities

**Inequality on Number Line:**
- **Open circle:** < or > (not included)
- **Closed circle:** ≤ or ≥ (included)
- **Shade:** Direction of solution

**Inequality in Two Variables:**

**Steps:**
1. Graph the boundary line/curve
   - Use dashed line for < or > (not included)
   - Use solid line for ≤ or ≥ (included)
2. Test a point not on the line (often (0, 0))
3. Shade the region containing the test point if it satisfies the inequality
4. Shade the opposite region if the test point doesn't satisfy

**Example:** Graph y < 2x + 1

- Graph y = 2x + 1 with dashed line
- Test (0, 0): 0 < 1 ✓
- Shade below the line

**System of Inequalities:**
- Graph all boundary lines
- Shade each inequality
- Solution region is where all shadings overlap

## Common Transformations Summary

Starting with parent function f(x):

**Vertical Transformations:**
- f(x) + k: Shift up k units
- f(x) - k: Shift down k units
- a·f(x): Vertical stretch by |a| (if |a| > 1) or compression (if |a| < 1)
- -f(x): Reflect across x-axis

**Horizontal Transformations:**
- f(x - h): Shift right h units
- f(x + h): Shift left h units
- f(bx): Horizontal compression by b (if |b| > 1) or stretch (if |b| < 1)
- f(-x): Reflect across y-axis

**Combined:** f(x) = a·f(b(x - h)) + k
1. Horizontal shift h
2. Horizontal stretch/compression b
3. Vertical stretch/compression a
4. Vertical shift k

# Complex Numbers

**Complex Numbers:** A Complex Number is a combination of a Real Number
and an Imaginary Number.

Complex numbers allow solutions to all polynomial equations, even those
that have no solutions in real numbers.

For example, the equation
$\mathbf{(x + 1)}^{\mathbf{2}}\mathbf{=  - 9}$ has no real solution,
because the square of a real number cannot be negative but has the two
nonreal complex solutions **-1+3i** and **-1-3i**.

![A black background with yellow and blue text Description automatically
generated](./media/image52.png)

!Venn Diagram of Complex
Numbers](./media/image53.png)

## Complex Plane

**Complex Plane:**

In the complex plane, there is a real axis and a
perpendicular, imaginary axis.

The complex number 𝑎+𝑏𝑖 is graphed on this plane just as the ordered
pair (*a*,*b*) would be graphed on the Cartesian coordinate plane.

The real axis corresponds to the 𝑥-axis and the imaginary axis
corresponds to the *y*-axis.

![](./media/image54.png)

Polar Form / Trigonometric form of Complex Number

**Polar Form / Trigonometric form of Complex Numbers:** The polar form
of a complex number is a different way to represent a complex number
apart from rectangular form.

The horizontal axis denotes the real axis, and the vertical axis denotes
the imaginary.

!Polar form of complex
numbers](./media/image55.png)

## Imaginary Unit

**Imaginary Unit:**

![PPT - Chapter 3 PowerPoint Presentation, free download -
ID:1210953](./media/image56.jpeg)

**Powers of i:**

The powers of $i$ follow a cyclic pattern:

- $i^1 = i$
- $i^2 = -1$
- $i^3 = i^2 \cdot i = -1 \cdot i = -i$
- $i^4 = i^2 \cdot i^2 = (-1)(-1) = 1$
- $i^5 = i^4 \cdot i = 1 \cdot i = i$ (cycle repeats)

**General Formula:** To find $i^n$, divide $n$ by 4 and use the remainder:
- Remainder 0: $i^n = 1$
- Remainder 1: $i^n = i$
- Remainder 2: $i^n = -1$
- Remainder 3: $i^n = -i$

**Example:** Find $i^{47}$

$47 \div 4 = 11$ remainder $3$

Therefore: $i^{47} = i^3 = -i$

## Standard Form (Rectangular Form)

**Standard Form:** A complex number in standard form is written as:

$$z = a + bi$$

Where:
- $a$ = real part, denoted $\text{Re}(z)$
- $b$ = imaginary part, denoted $\text{Im}(z)$
- Both $a$ and $b$ are real numbers

**Examples:**
- $3 + 4i$ (real part: 3, imaginary part: 4)
- $-2 + 5i$ (real part: -2, imaginary part: 5)
- $7$ (real part: 7, imaginary part: 0, purely real)
- $-3i$ (real part: 0, imaginary part: -3, purely imaginary)

## Operations with Complex Numbers

### Addition and Subtraction

**Addition:** Add real parts and imaginary parts separately.

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

**Example 1:** $(3 + 4i) + (2 + 5i) = 5 + 9i$

**Example 2:** $(-1 + 3i) + (4 - 2i) = 3 + i$

**Subtraction:** Subtract real parts and imaginary parts separately.

$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

**Example 1:** $(7 + 2i) - (3 + 5i) = 4 - 3i$

**Example 2:** $(5 - 4i) - (-2 + 3i) = 7 - 7i$

### Multiplication

**Multiplication:** Use FOIL and remember $i^2 = -1$.

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

**Example 1:** $(3 + 2i)(1 + 4i)$

$$= 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$$

**Example 2:** $(2 + 3i)(2 - 3i) = 4 - 9i^2 = 4 + 9 = 13$

### Division

**Division:** Multiply by conjugate of denominator.

$$\frac{a + bi}{c + di} = \frac{a + bi}{c + di} \cdot \frac{c - di}{c - di}$$

**Example:** $\frac{2 + 3i}{1 + 2i}$

$$= \frac{(2 + 3i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \frac{8 - i}{5} = \frac{8}{5} - \frac{1}{5}i$$

## Complex Conjugate

**Complex Conjugate:** The conjugate of $z = a + bi$ is:

$$\bar{z} = a - bi$$

**Properties:**

1. $z \cdot \bar{z} = a^2 + b^2$ (always real!)
2. $z + \bar{z} = 2a$
3. $z - \bar{z} = 2bi$

**Use:** Eliminates $i$ from denominators in division.

## Modulus (Absolute Value)

**Modulus:** The modulus of $z = a + bi$ is:

$$|z| = \sqrt{a^2 + b^2}$$

Distance from origin in complex plane.

**Examples:**

1. $|3 + 4i| = \sqrt{9 + 16} = 5$
2. $|-2 + 5i| = \sqrt{4 + 25} = \sqrt{29}$

## Polar Form

**Polar Form:** 

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

Where:
- $r = |z| = \sqrt{a^2 + b^2}$ (modulus)
- $\theta = \arg(z) = \arctan(b/a)$ (argument, adjust for quadrant)

**Converting:**

**Rectangular to Polar:**
1. $r = \sqrt{a^2 + b^2}$
2. $\theta = \arctan(b/a)$ (check quadrant)

**Polar to Rectangular:**
1. $a = r\cos\theta$
2. $b = r\sin\theta$

## De Moivre's Theorem

**De Moivre's Theorem:** For any integer $n$:

$$[r(\cos\theta + i\sin\theta)]^n = r^n(\cos(n\theta) + i\sin(n\theta))$$

**Example:** $(1 + i)^{10}$

Convert: $r = \sqrt{2}$, $\theta = \pi/4$

$$(1 + i)^{10} = (\sqrt{2})^{10}(\cos\frac{10\pi}{4} + i\sin\frac{10\pi}{4}) = 32i$$

## nth Roots

The $n$ distinct $n$th roots of $z = r(\cos\theta + i\sin\theta)$:

$$z_k = \sqrt[n]{r}\left(\cos\frac{\theta + 2\pi k}{n} + i\sin\frac{\theta + 2\pi k}{n}\right)$$

For $k = 0, 1, 2, \ldots, n-1$

**Example:** Three cube roots of $8i$ are: $\sqrt{3} + i$, $-\sqrt{3} + i$, $-2i$

# Linear Functions d=1

**Linear Functions:** A linear function is a function that can be used
to express a constant rate of change.

*This constant rate of change is reflected in the function\'s slope,
which remains the same regardless of the interval over which it is
measured.*

Linear functions have a maximum degree of 1.

When graphed, a linear function will create a straight line.

![](./media/image57.png)

## Linear Equation Forms


### Slope-Intercept Form

**Slope-Intercept Form**

f(x) = mx + b

-   **f(x)** (or **y**) is the output or dependent variable.

-   𝑥 is the input or independent variable.

-   𝑚 is the slope of the line, representing the constant rate of
    change.

-   𝑏 is the y-intercept, representing the value of 𝑓(𝑥) when 𝑥 = 0.

### Calculating Slope

**Calculating Slope:**

The slope, or rate of change, of a function *m* can be calculated
according to the following:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x}$$

Where $(x_1, y_1)$ and $(x_2, y_2)$ are two distinct points on the line.

### Standard Form

**Standard Form:**

$$Ax + By = C$$

Where $A$, $B$, $C$ are real numbers and $A$ and $B$ are not both zero.

Why use standard form?

The standard form of a line can be particularly helpful when solving a
system of equations. For instance, when using the elimination method to
solve a system of equations, we can easily align the variables using
standard form.

### Point-Slope Form

**Point-Slope Form:**

$$y - y_1 = m(x - x_1)$$

Where $(x_1, y_1)$ is a known point on the line and $m$ is the slope.

### Domain and Range

**Domain and Range of Linear Functions:**

- **Domain:** $(-\infty, \infty)$ or $\mathbb{R}$ (all real numbers)
- **Range:** $(-\infty, \infty)$ or $\mathbb{R}$ (all real numbers)

A linear function (that is not constant) is defined for all real numbers and can output all real numbers.

### Finding Intercepts

**x-intercept (zero):**

To find the x-intercept, set $f(x) = 0$ and solve for $x$:

$$0 = mx + b$$
$$x = -\frac{b}{m}$$ (provided $m \neq 0$)

**y-intercept:**

To find the y-intercept, set $x = 0$:

$$f(0) = m(0) + b = b$$

The y-intercept is simply the constant term $b$ in slope-intercept form.

## Parallel Lines

Parallel Lines are lines having the same slope M

M = M

## Perpendicular Lines

Perpendicular Lines are lines having a slope equal to the negative
reciprocal

M \* M = -1

# Matrices

**Matrices:** A matrix is a rectangular array of numbers, symbols, or
expressions arranged in rows and columns.

A ***m*** x ***n*** matrix is a rectangular grid of numbers with ***m***
rows and ***n*** columns.

A square matrix is a ***m*** x ***m*** matrix for some ***m***, or a
***n*** x ***n*** matrix for some ***n***.

The ***i,j*** entry of a matrix means the number in row ***i*** and
column ***j***.

It is important to get these in the correct order: Usually when
you give **(x,y)** coordinates, **x** refers to the horizontal direction
and **y** refers to the vertical direction.

When we talk about the ***I,j*** entry of a matrix, however, the first
number [***i*** refers to the row number (i.e. the vertical
direction) [and the second number ***j*** refers to the column
number (i.e. the horizontal direction).

**Matrix Notation:**

A matrix **A** with $m$ rows and $n$ columns is written:

$$A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}$$

Or more compactly: $A = [a_{ij}]$ where $1 \leq i \leq m$ and $1 \leq j \leq n$

## Matrix Addition

**Matrix Addition:** Two matrices can be added if and only if they have the **same dimensions** (same number of rows and columns).

**Rule:** Add corresponding entries

$$A + B = [a_{ij}] + [b_{ij}] = [a_{ij} + b_{ij}]$$

**Example:**

$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$$

**Properties:**

- **Commutative:** $A + B = B + A$
- **Associative:** $(A + B) + C = A + (B + C)$
- **Zero matrix:** $A + 0 = A$ (where 0 is the matrix of all zeros)

## Scalar Multiplication

**Scalar Multiplication:** Multiply every entry of the matrix by a scalar (constant).

$$cA = c[a_{ij}] = [ca_{ij}]$$

**Example:**

$$3 \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 9 & 12 \end{bmatrix}$$

**Properties:**

- $c(A + B) = cA + cB$
- $(c + d)A = cA + dA$
- $c(dA) = (cd)A$
- $1A = A$

## Matrix Multiplication

**Matrix Multiplication:** To multiply matrices $A$ (size $m \times n$) and $B$ (size $n \times p$), the **number of columns in A must equal the number of rows in B**.

The result is a matrix $C$ of size $m \times p$.

**Rule:** The entry $c_{ij}$ in row $i$, column $j$ of the result is the dot product of row $i$ from $A$ and column $j$ from $B$:

$$c_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}$$

**Example:**

$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

**Step-by-step:**
- $c_{11} = 1(5) + 2(7) = 5 + 14 = 19$
- $c_{12} = 1(6) + 2(8) = 6 + 16 = 22$
- $c_{21} = 3(5) + 4(7) = 15 + 28 = 43$
- $c_{22} = 3(6) + 4(8) = 18 + 32 = 50$

**Properties:**

- **NOT commutative:** $AB \neq BA$ in general
- **Associative:** $(AB)C = A(BC)$
- **Distributive:** $A(B + C) = AB + AC$
- **Identity:** $AI = IA = A$ (where $I$ is the identity matrix)

## Identity Matrix

**Identity Matrix:** A square matrix with 1's on the main diagonal and 0's elsewhere.

$$I_n = \begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}$$

**Property:** For any $n \times n$ matrix $A$: $AI = IA = A$

**Examples:**

$$I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

## Zero Matrix

**Zero Matrix:** A matrix where all entries are 0.

$$0_{m \times n} = \begin{bmatrix}
0 & 0 & \cdots & 0 \\
0 & 0 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 0
\end{bmatrix}$$

**Property:** $A + 0 = A$ and $A \cdot 0 = 0$

## Matrix Transpose

**Transpose:** The transpose of a matrix $A$, denoted $A^T$, is obtained by swapping rows and columns.

If $A = [a_{ij}]$ is $m \times n$, then $A^T = [a_{ji}]$ is $n \times m$

**Example:**

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \Rightarrow A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

**Properties:**
- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$ (order reverses!)
- $(cA)^T = cA^T$

## Inverse Matrix

**Inverse Matrix:** For a square matrix $A$, the inverse $A^{-1}$ (if it exists) satisfies:

$$AA^{-1} = A^{-1}A = I$$

**Not all matrices have inverses.** A matrix is **invertible** (or **non-singular**) if its determinant is non-zero.

**For 2×2 matrix:**

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

$$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

Where $ad - bc$ is the **determinant** of $A$.

**Example:**

$$A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$$

Determinant: $2(4) - 3(1) = 8 - 3 = 5$

$$A^{-1} = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 0.8 & -0.6 \\ -0.2 & 0.4 \end{bmatrix}$$

**Verification:**

$$AA^{-1} = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix} \begin{bmatrix} 0.8 & -0.6 \\ -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$

**Properties:**
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$ (order reverses!)
- $(A^T)^{-1} = (A^{-1})^T$

# Systems of Linear Equations

**Systems of Linear Equations:** A system of linear equations is a
collection of two or more linear equations involving the same set of
variables.

The goal of solving a system of linear equations is to find the values
of the variables that satisfy all the equations simultaneously.

***The solution to a system of linear equations is the point where all
equations intersect.***

![A black screen with white text and black text Description
automatically
generated](./media/image63.png)

The double subscripting on the coefficients *a~ij~* of the unknowns
gives their location in the system---the first subscript indicates the
equation in which the coefficient occurs, and the second indicates which
unknown it multiplies. Thus, *a*~12~ is in the first equation and
multiplies *x*~2~.

## Types of Solutions

A system of linear equations can have:

**1. Exactly one solution (consistent and independent)**
- Lines intersect at a single point
- The system has a unique solution

**2. Infinitely many solutions (consistent and dependent)**
- Lines are coincident (same line)
- All points on the line are solutions

**3. No solution (inconsistent)**
- Lines are parallel (never intersect)
- No point satisfies all equations

## Methods to Solve Systems of Linear Equations

There are several methods to solve systems of linear equations:

1. **Substitution Method** - Solve one equation for a variable, substitute into others
2. **Elimination Method (Addition/Subtraction)** - Add or subtract equations to eliminate variables
3. **Graphing Method** - Graph equations and find intersection point(s)
4. **Matrix Method** - Use matrices and row operations
5. **Cramer's Rule** - Use determinants (for square systems)

## Substitution Method

**Substitution Method:** Solve one equation for one variable in terms of the others, then substitute that expression into the remaining equations.

**Steps:**

1. Solve one equation for one variable
2. Substitute that expression into the other equation(s)
3. Solve the resulting equation
4. Back-substitute to find remaining variables
5. Check the solution in all original equations

**Example 1:** Solve the system:

$$\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}$$

**Step 1:** Solve first equation for y:
$$y = 5 - x$$

**Step 2:** Substitute into second equation:
$$2x - (5 - x) = 1$$

**Step 3:** Solve for x:
$$2x - 5 + x = 1$$
$$3x = 6$$
$$x = 2$$

**Step 4:** Back-substitute into y = 5 - x:
$$y = 5 - 2 = 3$$

**Solution:** $(2, 3)$

**Check:** 
- $2 + 3 = 5$ ✓
- $2(2) - 3 = 1$ ✓

**Example 2:** Solve the system:

$$\begin{cases}
3x + 2y = 7 \\
x - y = 1
\end{cases}$$

**Step 1:** Solve second equation for x:
$$x = y + 1$$

**Step 2:** Substitute into first equation:
$$3(y + 1) + 2y = 7$$

**Step 3:** Solve for y:
$$3y + 3 + 2y = 7$$
$$5y = 4$$
$$y = \frac{4}{5}$$

**Step 4:** Back-substitute:
$$x = \frac{4}{5} + 1 = \frac{9}{5}$$

**Solution:** $\left(\frac{9}{5}, \frac{4}{5}\right)$

## Elimination Method

**Elimination Method (Addition/Subtraction Method):** Multiply equations by constants to make coefficients of one variable opposites, then add equations to eliminate that variable.

**Steps:**

1. Align equations with variables in columns
2. Multiply one or both equations by constants to make coefficients of one variable opposites
3. Add equations to eliminate one variable
4. Solve the resulting single-variable equation
5. Back-substitute to find remaining variables
6. Check the solution

**Example 1:** Solve the system:

$$\begin{cases}
2x + 3y = 7 \\
5x - 3y = 14
\end{cases}$$

**Step 1:** Notice y-coefficients are already opposites (3 and -3)

**Step 2:** Add equations:
$$\begin{align}
2x + 3y &= 7 \\
5x - 3y &= 14 \\
\hline
7x + 0y &= 21
\end{align}$$

**Step 3:** Solve for x:
$$7x = 21$$
$$x = 3$$

**Step 4:** Substitute x = 3 into first equation:
$$2(3) + 3y = 7$$
$$6 + 3y = 7$$
$$3y = 1$$
$$y = \frac{1}{3}$$

**Solution:** $\left(3, \frac{1}{3}\right)$

**Example 2:** Solve the system:

$$\begin{cases}
3x + 4y = 10 \\
2x + 5y = 9
\end{cases}$$

**Step 1:** Multiply first equation by 2 and second by -3 to eliminate x:

$$\begin{align}
6x + 8y &= 20 \\
-6x - 15y &= -27
\end{align}$$

**Step 2:** Add equations:
$$-7y = -7$$
$$y = 1$$

**Step 3:** Substitute y = 1 into first original equation:
$$3x + 4(1) = 10$$
$$3x = 6$$
$$x = 2$$

**Solution:** $(2, 1)$

**Example 3:** Solve the system:

$$\begin{cases}
4x - 2y = 6 \\
6x - 3y = 12
\end{cases}$$

**Step 1:** Multiply first equation by 3:
$$12x - 6y = 18$$

**Step 2:** Multiply second equation by -2:
$$-12x + 6y = -24$$

**Step 3:** Add equations:
$$0 = -6$$

This is a contradiction! The system is **inconsistent** (no solution).

The lines are parallel.

## Matrix Method (Augmented Matrix)

**Matrix Method:** Represent the system as an augmented matrix and use row operations to solve.

**Augmented Matrix:** Combines coefficient matrix with constant terms:

For system:
$$\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}$$

Augmented matrix:
$$\left[\begin{array}{cc|c}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2
\end{array}\right]$$

**Elementary Row Operations:**

1. **Swap two rows** - $R_i \leftrightarrow R_j$
2. **Multiply a row by a nonzero constant** - $kR_i \rightarrow R_i$
3. **Add a multiple of one row to another** - $R_i + kR_j \rightarrow R_i$

**Goal:** Transform to **row echelon form** or **reduced row echelon form**

**Row Echelon Form:**
- Leading entry (pivot) in each row is to the right of the pivot in the row above
- All entries below a pivot are zero
- Rows of all zeros are at the bottom

**Reduced Row Echelon Form (RREF):**
- All pivots are 1
- Each pivot is the only nonzero entry in its column
- Satisfies row echelon form conditions

**Example:** Solve the system:

$$\begin{cases}
2x + y = 7 \\
x - 3y = -8
\end{cases}$$

**Step 1:** Write augmented matrix:
$$\left[\begin{array}{cc|c}
2 & 1 & 7 \\
1 & -3 & -8
\end{array}\right]$$

**Step 2:** Swap rows to get 1 in upper-left:
$$R_1 \leftrightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
2 & 1 & 7
\end{array}\right]$$

**Step 3:** Eliminate below pivot:
$$R_2 - 2R_1 \rightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
0 & 7 & 23
\end{array}\right]$$

**Step 4:** Make second pivot equal to 1:
$$\frac{1}{7}R_2 \rightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
0 & 1 & \frac{23}{7}
\end{array}\right]$$

**Step 5:** Eliminate above second pivot (RREF):
$$R_1 + 3R_2 \rightarrow R_1: \left[\begin{array}{cc|c}
1 & 0 & \frac{13}{7} \\
0 & 1 & \frac{23}{7}
\end{array}\right]$$

**Solution:** $x = \frac{13}{7}$, $y = \frac{23}{7}$

## Gaussian Elimination

**Gaussian Elimination:** A systematic matrix method using forward elimination followed by back-substitution.

**Process:**

**Phase 1: Forward Elimination** - Transform to row echelon form

**Phase 2: Back-substitution** - Solve for variables starting from bottom row

**Example:** Solve the 3×3 system:

$$\begin{cases}
x + 2y + z = 8 \\
2x + 5y + 2z = 18 \\
x + y + 3z = 11
\end{cases}$$

**Step 1:** Augmented matrix:
$$\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
2 & 5 & 2 & 18 \\
1 & 1 & 3 & 11
\end{array}\right]$$

**Step 2:** Eliminate first column below pivot:

$R_2 - 2R_1 \rightarrow R_2$:
$$\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
1 & 1 & 3 & 11
\end{array}\right]$$

$R_3 - R_1 \rightarrow R_3$:
$$\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
0 & -1 & 2 & 3
\end{array}\right]$$

**Step 3:** Eliminate second column below pivot:

$R_3 + R_2 \rightarrow R_3$:
$$\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
0 & 0 & 2 & 5
\end{array}\right]$$

**Now in row echelon form**

**Step 4: Back-substitution**

From row 3: $2z = 5$ → $z = \frac{5}{2}$

From row 2: $y = 2$

From row 1: $x + 2(2) + \frac{5}{2} = 8$ → $x + 4 + 2.5 = 8$ → $x = 1.5$

**Solution:** $\left(\frac{3}{2}, 2, \frac{5}{2}\right)$

## Gauss-Jordan Elimination

**Gauss-Jordan Elimination:** Extends Gaussian elimination to achieve reduced row echelon form, eliminating need for back-substitution.

**Process:** Continue row operations until the matrix is in RREF (diagonal of 1's with zeros above and below).

**Example:** Solve:

$$\begin{cases}
x + y = 3 \\
2x - y = 0
\end{cases}$$

**Step 1:** Augmented matrix:
$$\left[\begin{array}{cc|c}
1 & 1 & 3 \\
2 & -1 & 0
\end{array}\right]$$

**Step 2:** $R_2 - 2R_1 \rightarrow R_2$:
$$\left[\begin{array}{cc|c}
1 & 1 & 3 \\
0 & -3 & -6
\end{array}\right]$$

**Step 3:** $-\frac{1}{3}R_2 \rightarrow R_2$:
$$\left[\begin{array}{cc|c}
1 & 1 & 3 \\
0 & 1 & 2
\end{array}\right]$$

**Step 4:** $R_1 - R_2 \rightarrow R_1$ (eliminate above pivot):
$$\left[\begin{array}{cc|c}
1 & 0 & 1 \\
0 & 1 & 2
\end{array}\right]$$

**Solution:** $x = 1$, $y = 2$ (read directly from RREF)

## Special Cases

**Infinitely Many Solutions:**

If row operations produce a row of all zeros (like [0 0 | 0]), the system has infinitely many solutions.

**Example:**
$$\begin{cases}
2x + 4y = 6 \\
x + 2y = 3
\end{cases}$$

These are the same line (second equation is first ÷ 2). Solution: All points on line $x + 2y = 3$.

**No Solution:**

If row operations produce a contradiction (like [0 0 | k] where k ≠ 0), the system has no solution.

**Example:**
$$\begin{cases}
x + y = 2 \\
x + y = 5
\end{cases}$$

These are parallel lines. No solution.

## Systems with More than Two Variables

The same methods apply to systems with 3 or more variables:
- Substitution becomes more tedious
- Elimination and matrix methods scale better
- Solutions are points in 3D space (for 3 variables) or higher dimensions

**Example:** Already shown in Gaussian Elimination section above.

# Polynomial Functions

**Polynomial Functions:**

$$a_{n}x^{n} + a_{n - 1}x^{n - 1} + \ldots + a_{2}x^{2} + a_{1}x^{1} + a_{0}$$

This can be expressed more concisely by using summation notation:

$$\sum_{k = 0}^{n}{a_{k}x^{k}}$$

-   The domain of a **polynomial** **function** is (−∞,∞)

-   **Polynomials** may not have negative power indeterminants /
    variables: $x^{- 2}$

-   The graphs of **polynomial** **functions** are smooth and continuous
    at all points.

-   The **degree** of the **polynomial** is the highest power appearing
    in the **polynomial**.

-   The roots/zeros/solutions of **polynomial** **functions** are those
    values of ***x*** for which ***P(x) = 0***

-   A **polynomial** of degree ***n*** could have up to ***n-many
    possible roots***, but it could have less.

## Quadratic Functions d=2

**Quadratic Functions:**

### Standard Form of a Quadratic Equation

**Standard Form of a Quadratic Equation**

$$f(x) = ax^{2} + bx + c$$

Where a,b,c are real numbers and $a \neq 0$

A quadratic equation is a **polynomial** equation having degree of 2.

### Vertex Form of a Quadratic Equation

**Vertex Form of a Quadratic Equation**

The vertex form of a quadratic equation allows you to read the
vertex/axis of symmetry directly from the equation.

$$f(x) = a(x - h)^{2} + k$$

![A graph of a function Description automatically
generated](./media/image64.png)

$$f(x) = x^{2}$$

The graph of quadratic function is called a parabola.

Quadratic functions are symmetric around a line called the **axis of
symmetry**.

### Axis of Symmetry

**Axis of Symmetry:** Every parabola has an axis of symmetry which is
the line that divides the graph into two perfect halves.

$$x = \frac{- b}{2a}$$

![A graph of a function Description automatically
generated](./media/image65.png)

### Methods for Solving Quadratic Equations


#### What does it mean to "solve" a quadratic / polynomial?

Solving a polynomial means finding all the values of the variable that
make the polynomial equal to zero.

These values are called the \"**roots**\" or \"**zeros**\" of the
polynomial.

The roots/solutions/zeroes of a polynomial occur at the x-intercepts.

For polynomials of degree five or higher, exact algebraic solutions may
not always be possible (***Abel-Ruffini theorem***
states that there is no general solution in radicals for polynomials of
degree five or higher). In such cases, numerical and graphical methods
are often used.

### Zero Product Property

**Zero Product Property:** The Zero Product Property is crucial for
solving polynomial equations that can be factored. Once a polynomial
equation is factored into a product of binomials, each binomial is set
to zero to find the solutions.

The zero product property states that if two or more factors are
multiplied and the product is zero, then a least one of those factors is
also zero.

If ab = 0, then either a = 0 or b = 0

![A black background with white text Description automatically
generated](./media/image66.png)

The zero product property can be used to solve polynomial equations of
**[any degree** as long as the polynomial can be factored
into a product of simpler polynomials.

### Special Factoring Forms


  ---------------------------------------------------------------------------------
  Special Factoring     Expression                Factored Form
  Form                                            
  --------------------- ------------------------- ---------------------------------
  Difference of Squares $$a^{2} - b^{2}$$         $$(a - b)(a + b)$$

  Perfect Square        $$a^{2} + 2ab + b^{2}$$   $${(a + b)}^{2}$$
  Trinomial (Sum)                                 

  Perfect Square        $$a^{2} - 2ab + b^{2}$$   $$(a - b)^{2}$$
  Trinomial                                       
  (Difference)                                    

  Sum of Cubes          $$a^{3} + b^{3}$$         $$(a + b)(a^{2} - ab + b^{2})$$

  Difference of Cubes   $$a^{3} - b^{3}$$         $$(a + b)(a^{2} + ab + b^{2})$$

  Factoring by Grouping $$ax + ay + bx + by$$     $$(a + b)(x + y)$$

  Quadratic Trinomial   $${ax}^{2} + bx + c$$     $$(px + q)(rx + s)$$

  Factoring out the GCF $$ab + ac$$               $$a(b + c)$$
  ---------------------------------------------------------------------------------

### Factoring by Grouping

**Factoring by Grouping:** A technique used to factor polynomials with four or more terms by grouping terms with common factors.

**Algorithm:**

1. Group terms in pairs (usually first two and last two)
2. Factor out the GCF from each pair
3. If a common binomial factor appears, factor it out
4. If no common factor emerges, try different groupings

**Example 1:** Factor $x^3 + 3x^2 + 2x + 6$

Group terms: $(x^3 + 3x^2) + (2x + 6)$

Factor each group:
- $x^3 + 3x^2 = x^2(x + 3)$
- $2x + 6 = 2(x + 3)$

Result: $x^2(x + 3) + 2(x + 3)$

Factor out common $(x + 3)$:

$$(x + 3)(x^2 + 2)$$

**Example 2:** Factor $6x^2 - 9x + 4x - 6$

Group: $(6x^2 - 9x) + (4x - 6)$

Factor each group:
- $6x^2 - 9x = 3x(2x - 3)$
- $4x - 6 = 2(2x - 3)$

Result: $3x(2x - 3) + 2(2x - 3)$

Factor out $(2x - 3)$:

$$(2x - 3)(3x + 2)$$

**Example 3:** Factor $xy + 5x + 3y + 15$

Group: $(xy + 5x) + (3y + 15)$

Factor each group:
- $xy + 5x = x(y + 5)$
- $3y + 15 = 3(y + 5)$

Result: $x(y + 5) + 3(y + 5)$

Factor out $(y + 5)$:

$$(y + 5)(x + 3)$$

**Example 4:** When grouping doesn't work immediately

Factor $2x^3 - 3x^2 - 2x + 3$

Try: $(2x^3 - 3x^2) + (-2x + 3)$

- $2x^3 - 3x^2 = x^2(2x - 3)$
- $-2x + 3 = -1(2x - 3)$

Result: $x^2(2x - 3) - 1(2x - 3)$

Factor out $(2x - 3)$:

$$(2x - 3)(x^2 - 1) = (2x - 3)(x - 1)(x + 1)$$

**Note:** Sometimes you need to rearrange terms or factor out a negative to make the common factor visible.

### Square Root Property

**Square Root Property:** When there is no linear term in the equation,
another method of solving a quadratic equation is by using the square
root property.

![A screenshot of a math problem Description automatically
generated](./media/image67.png)

### Completing the Square

**Completing the Square: Not all quadratic equations can be factored or
can be solved *[in their original form* using the square
root property.**

In this case, it is necessary to transform the equation such that it is
expressed as something that can be factored as a perfect square.

**All Quadratic equations can be solved using this method.**

### Quadratic Formula

**Quadratic Formula:** The fourth method of solving a quadratic equation
is by using the quadratic formula, a formula that will solve all
quadratic equations.

![A math equation with square and square symbols Description
automatically generated with medium
confidence](./media/image68.png)

**All Quadratic equations can be solved using this method.**

#### Discriminant

**Discriminant:** The quadratic formula not only generates the solutions
to a quadratic equation, it tells us about the nature of the solutions.

The discriminant tells us whether the solutions are real numbers or
complex numbers, and how many solutions of each type to expect.

Discriminant:

![](./media/image69.png)

![A screenshot of a white box Description automatically
generated](./media/image70.png)

## Cubic Functions d=3

**Cubic Functions**: a cubic function is a function of the form

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{= a}\mathbf{x}^{\mathbf{3}}\mathbf{+ b}\mathbf{x}^{\mathbf{2}}\mathbf{+ cx + d}$$

A cubic function is a polynomial function of degree 3. So a cubic
function may have a maximum of 3 roots. i.e., it may intersect the
x-axis at a maximum of 3 points.

***Since complex roots always occur in pairs, a cubic function always
has either 1 or 3 real zeros. It cannot have 2 real
zeros.***

![A graph of a function Description automatically
generated](./media/image71.png)

### Domain / Range of Cubic Function

**Domain / Range of Cubic Functions:**

-   The domain of a cubic function is *R*.

-   The range of a cubic function is *R*.

### Y-Intercepts of a Cubic Function

**Y-Intercepts of a Cubic function:**

A cubic function always has exactly one y-intercept.

To find the y-intercept of a cubic function, we just substitute x = 0
and solve for y-value.

### Cardano's Method

**Cardano's Method:**

## Polynomial Degree

**Polynomial Degree:** The degree of the polynomial is defined as the
highest power the variable is raised to in the polynomial.

The degree also dictates *[how many zeros a polynomial can
have* and *[what the end behavior is*.

![](./media/image72.png)

## Turning Points

Understanding the Relationship between Degree and Turning Points

**Turning points:** A turning point is a point of the graph where the
graph changes from increasing to decreasing (rising to falling) or
decreasing to increasing (falling to rising).

[A polynomial of degree **n** will have at most **n−1** turning
points.

![A diagram of a graph Description automatically
generated](./media/image73.png)

Graph of f(x)= $x^{4} - x^{3} - 4x^{2} + 4x$

This function is a 4th degree polynomial function and has 3 turning
points. The maximum number of turning points of a polynomial function is
always one less than the degree of the function.

## End Behavior

**End Behavior:** A polynomial's end-behavior is completely determined
by its leading term.

**Even power, positive leading coefficient:**

![A diagram of a graph Description automatically
generated](./media/image74.png)

$$\mathbf{x \rightarrow \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \ \infty}$$

$$\mathbf{x \rightarrow - \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \ \infty}$$

**Even power, negative leading coefficient:**

![A diagram of a graph Description automatically
generated](./media/image75.png)

$$\mathbf{x \rightarrow \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \  - \infty}$$

$$\mathbf{x \rightarrow - \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow - \infty}$$

**Odd power, positive leading coefficient:**

![A graph of a function Description automatically
generated](./media/image76.png)

$$\mathbf{x \rightarrow \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \ \infty}$$

$$\mathbf{x \rightarrow - \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow - \infty}$$

**Odd power, negative leading coefficient:**

![A diagram of a graphing function Description automatically
generated](./media/image77.png)

$$\mathbf{x \rightarrow \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \ \infty}$$

$$\mathbf{x \rightarrow - \infty, f}\left( \mathbf{x} \right)\mathbf{\rightarrow \ \infty}$$

## Factor Multiplicity

**Factor Multiplicity:** The multiplicity of a factor determines how the
graph behaves at the x-intercept.

-   If the multiplicity of a zero is even, the *[graph will touch the
    x-axis* at that zero. *[(think about*
    $x^{2}$*[)*

-   If the multiplicity of a zero is odd, the *[graph will cross the
    x-axis* at that zero.

![](./media/image78.png)

![](./media/image79.png)

![A graph of a function Description automatically
generated](./media/image80.png)

## The Fundamental Theorem of Algebra

**The Fundamental Theorem of Algebra:**

The Fundamental Theorem of Algebra tells us that every polynomial
function with degree greater than 1 has at least one
*[complex* zero.

![](./media/image81.png)

Every polynomial:
$f(x) =  a_{n}x^{n} + a_{n - 1}x^{n - 1} + \ldots + a_{1}x^{1} + a_{0}$
of degree n can be factored as

$f(x) = m*\left( x - c_{1} \right)*\left( x - c_{2} \right)\ldots(x - c_{n})$
*[(m multiplied by a series of linear factors...)*

Every polynomial of degree ***n*** has at most ***n*** roots. (However,
these roots may be real or complex.)

The factor ***(x-c)*** for a root ***c*** could appear multiple times in
the above product. We could write $\mathbf{(x - c)}^{\mathbf{k}}$ as a
factor of ***f.***

If $f(x)
= a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$
has only real coefficients, and ***c = a+bi*** is a complex root of
***f***, then the complex conjugate ***c = a-bi*** is also a root of
***f***. (Complex roots containing the imaginary unit always appear in
pairs / conjugates)

## Zero Product Property

**Zero Product Property:** The Zero Product Property is used for solving
polynomial equations that can be factored. Once a polynomial equation is
factored into a product of binomials, each binomial is set to zero to
find the solutions.

The zero product property states that if two or more factors are
multiplied and the product is zero, then a least one of those factors is
also zero.

If ab = 0, then either a = 0 or b = 0

## The Remainder Theorem

**The Remainder Theorem:**

**p(x)/(x-a) = q(x) + r(x)**

**p(x) = (x-a)·q(x) + r(x),**

**Dividend = (Divisor × Quotient) + Remainder**

**p(x) = (x-a)·q(x) + r**

**Observe what happens when we have x equal to a:**

**p(a) = (a-a)·q(a) + r**

**p(a) = (0)·q(a) + r**

**p(a) = r**

**Therefore, when p(x) is evaluated at a, p(a) will give the
remainder.**

**If p(a) = 0, a is a root / solution to the equation.**

**p(x): polynomial**

**(x-a): linear factor**

**q(x): quotient at x**

**r(x): Remainder at x**

**What is the point of the Remainder Theorem?**

The point of the Remainder Theorem is that *[there is a simpler, quicker
way to evaluate a polynomial p(x) at a given value of x, and this
simpler way is to not evaluate p(x) at all, but to instead do the
synthetic division at that same value of x.*

The last number in the synthetic-division result is the value you\'re
wanting, being the evaluated value of the polynomial.

## The Rational Roots Theorem

**The Rational Roots Theorem**: If a polynomial function

![](./media/image82.png)

written in descending order of the exponents, has integer coefficients,
then any *[rational zero* must be of the form [± p/
q,

Where [p and [q are integers and:

-   [p is a factor of the constant term a~0~

-   [q is a factor of the leading coefficient a~n~

![](./media/image83.png)

The Rational Zero Theorem helps us to narrow down the number of
possible rational zeros using the ratio of the factors of the constant
term and factors of the leading coefficient of the polynomial

Of course, not all zeros will be rational. The rational zeroes theorem
will not help find irrational zeroes of a polynomial.

![](./media/image84.png)

### How to use it

-   Determine all factors of the constant term and all factors of the
    leading coefficient.

-   Determine all possible values of $\frac{p}{q}$, where p is a
    factor of the constant term and q is a factor of the leading
    coefficient. ***Be sure to include both positive and negative
    candidates.***

-   Determine which possible zeros are actual zeros by evaluating each
    case of f($\frac{p}{q}$).

![](./media/image85.png)

![A close up of words Description automatically
generated](./media/image86.png)

![A math problem with numbers Description automatically
generated](./media/image87.png)

So what about the irrational roots of a polynomial? How do we find those
when the rational roots theorem fails?

For polynomial of degree 2, you can use the quadratic formula.

## Polynomial Long Division

**Polynomial Long Division:**

![A math equations on a white background Description automatically
generated](./media/image88.png)

Where:

-   **d(x)** is the divisor where the degree of d(x) must be less than
    or equal the degree of f(x)

-   **q(x)** is the quotient

-   **r(x)** is the remainder where r(x) is either equal zero, or has a
    degree less than d(x)

$$\frac{f(x)}{d(x)} = q(x) + \frac{r(x)}{d(x)}$$

If r(x) is 0, then d(x) is a factor of f, so it divides evenly leaving
no remainder.

*Polynomial long division may always be performed---so long as the
degree of the divisor is equal to or less than the degree of the
dividend f(x). This is the only restriction.*

*Algorithm: Divide, multiply, subtract, repeat as needed.*

![A math equations on a white background Description automatically
generated](./media/image89.png)

Divisor: The quantity by which another quantity is divided

Dividend: The quantity that is being divided.

## Synthetic Division

**Synthetic Division:** Synthetic division is a shorthand method for dividing a polynomial by a linear factor of the form $(x - c)$.

**When to use synthetic division:**

- **Only when dividing by a linear factor** $(x - c)$ where $c$ is a constant
- If the degree of the denominator is greater than 1, you must use polynomial long division

**Algorithm:**

1. Write the coefficients of the polynomial in descending order of degree
2. If any terms are missing, use 0 as the coefficient
3. Write the value of $c$ (from $x - c$) to the left
4. Bring down the first coefficient
5. Multiply by $c$, add to next coefficient, repeat
6. The last number is the remainder; all others are coefficients of the quotient

**Example:** Divide $2x^3 + 3x^2 - 5x + 4$ by $(x - 2)$

```
  2 |  2   3  -5   4
    |      4  14  18
    ----------------
      2   7   9  22
```

**Result:** Quotient = $2x^2 + 7x + 9$, Remainder = $22$

So: $\frac{2x^3 + 3x^2 - 5x + 4}{x - 2} = 2x^2 + 7x + 9 + \frac{22}{x - 2}$

## Descartes Rule of Signs

**Descartes Rule of Signs**: **Descartes\' Rule of Signs** is a theorem
that provides a way to determine the possible number of positive and
negative ***[real*** roots (zeros) of a polynomial
equation.

It gives an upper bound on the number of positive and negative roots and
helps in identifying potential root structures without solving the
polynomial.

-   The number of positive real zeros is equal to the number of sign
    changes in f(x), minus an even integer.

-   The number of negative real zeros is equal to the number of sign
    changes in f(-x), minus an even integer.

Because we also know the maximum number of possible roots (By the
Fundamental Theorem of Algebra), knowing the maximum possible number of
real roots also gives insight into the number of possible imaginary
roots as well.

## Binomial Expansion Theorem

**Binomial Expansion Theorem:** The Binomial Expansion theorem (also called the Binomial Theorem) allows you to calculate the expansion of any binomial raised to a positive integer power.

**Formula:**

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

Where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient ("n choose k").

**Expanded form:**

$$(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n-1}ab^{n-1} + \binom{n}{n}b^n$$

**Examples:**

$(a + b)^2 = a^2 + 2ab + b^2$

$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$

$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$

**Pascal's Triangle:** The binomial coefficients form Pascal's Triangle:

```
       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
```

Each number is the sum of the two numbers above it.

**Properties:**

- The coefficients are symmetric: $\binom{n}{k} = \binom{n}{n-k}$
- The sum of all coefficients: $(1 + 1)^n = 2^n = \sum_{k=0}^{n} \binom{n}{k}$
- The powers of $a$ decrease from $n$ to $0$, while powers of $b$ increase from $0$ to $n$
- There are always $n + 1$ terms in the expansion

# Rational Functions

**Rational Functions:** A rational function is an expression of the form
$\frac{P(x)}{Q(x)}$, *p,q* are polynomials and q is not 0.

$$f(x) =  \frac{a_{n}x^{n} + a_{n - 1}x^{n - 1} + \ldots + a_{1}x^{1}{+ a}_{0}}{b_{n}x^{n} + b_{n - 1}x^{n - 1} + \ldots + b_{1}x^{1}{+ b}_{0}}$$

## Domain

**Domain:** The domain of a rational function is the set of all real
numbers (or complex numbers) for which the function is defined.

Since a rational function is a ratio of two polynomials, it is defined
everywhere except where the denominator is zero.

Those locations where the denominator is zero are responsible for
creating vertical asymptotes in the graph.

## Range

**Range:** The range of a rational function is the set of all possible
y-values (outputs) that the function can produce. To determine the
range, you need to consider the behavior of the function across its
domain, particularly focusing on any asymptotes, critical points, and
intervals where the function is defined.

Here are key steps and considerations for finding the range of a
rational function:

-   Identify the Domain: The first step in finding the range is to
    identify the domain of the function, which is the set of all
    x-values for which the function is defined. Rational functions are
    undefined where their denominators are zero.

-   Find Vertical Asymptotes: Vertical asymptotes occur where the
    denominator of the rational function is zero, but the numerator is
    not zero. These points indicate where the function tends to infinity
    or negative infinity.

-   Determine Horizontal or Oblique Asymptotes: Horizontal or oblique
    asymptotes describe the behavior of the function as x approaches
    positive or negative infinity. They indicate y-values that the
    function approaches but does not necessarily reach.

-   Analyze the Function\'s Behavior: Consider the function\'s behavior
    around asymptotes, zeros of the numerator (where the function
    crosses the x-axis), and any other critical points (such as turning
    points) identified through calculus techniques like finding
    derivatives.

-   Combine Findings to Determine the Range: Based on the asymptotic
    behavior, zeros, and critical points, determine which y-values the
    function can take. Note if any values are excluded due to asymptotes
    or other factors.

## Proper / Improper Rational Function

**Proper / Improper Rational Function:**

Just as with normal fractions, rational functions also have the concept
of 'proper' and 'improper.'

-   A rational function is considered **improper** if the degree of the
    numerator is greater than or equal to the degree of the denominator.

$$\frac{x^{3} + 1}{x^{2}}$$

*N\<D*

-   A rational function is considered **proper** when the degree of the
    numerator is less than the degree of the denominator.

$$\frac{x^{2} + 1}{x^{5}}$$

*N\>D*

**Handling Improper Rational Functions**

To work with improper rational functions, one common technique is to use
polynomial long division to rewrite the function as a polynomial plus a
proper rational function.

## Finding x-intercepts

**Finding x-intercepts:** Factor numerator and solve for x.

![A graph of a function Description automatically
generated](./media/image91.png)

## Finding y-intercept

**Finding y-intercept:** To find the y-intercept of a rational function,
you need to evaluate the function at *𝑥 = 0*. The y-intercept is the
point where the graph of the function crosses the y-axis, which
corresponds to 𝑥 = 0.

![A screenshot of a black background with white text Description
automatically
generated](./media/image92.png)

## Vertical Asymptote

**Vertical Asymptote:** A vertical asymptote of a graph is a vertical
line x = a, where the graph tends toward a positive or negative infinity
as the input value approaches to the line x =a from either the left or
right side.

![](./media/image93.png)

Above, the line ***x = 2*** is the vertical asymptote. ***x = 2*** is
undefined in ***f(x)***, producing division by zero / vertical
asymptote.

x → $a^{-}$ , f(x) → ± ∞

OR

x → $a^{+}$ , f(x) → ± ∞

The vertical asymptote is caused by having values in the denominator
which result in division by zero / are undefined.

### Finding the vertical asymptote

**Finding the vertical asymptote:**

**Set the denominator equal to zero and solve for x.**

![A screenshot of a math problem Description automatically
generated](./media/image94.png)

## Horizontal Asymptote

**Horizontal Asymptote:** A horizontal asymptote of a graph is a
horizontal line y = b, where the graph approaches the line as the input
value increases/decreases without bound.

How do you find the horizontal asymptote?

$$f(x) =  \frac{ax^{n} + \ldots + a}{bx^{m} + \ldots + b}$$

Where a,b are the leading co-efficient of the polynomials having degree
n,m respectively.

  -----------------------------------------------------------------------
  numerator \<         Horizontal Asymptote is the x-axis
  denominator          
  -------------------- --------------------------------------------------
  numerator =          Horizontal Asymptote is the line y = a/b
  denominator          

  numerator \>         Slant / Oblique Asymptote
  denominator          
  -----------------------------------------------------------------------

![](./media/image95.png)

### Numerator \< Denominator (proper fraction)

Numerator \< Denominator

Horizontal asymptote: y = 0

![A screenshot of a graph Description automatically
generated](./media/image96.png)

$$f(x) = \ \frac{x^{2} + 1}{x^{3}}$$

This is a proper fraction, where the denominator is greater than the
numerator. This produces a horizontal asymptote at ***y = 0***.

### Numerator = Denominator

Numerator = Denominator

Horizontal asymptote : y = 1/1

![A graph on a graph Description automatically
generated](./media/image97.png)

### Numerator \> Denominator (improper fraction)

Numerator \> Denominator

![A graph with red lines and dots Description automatically
generated](./media/image98.png)

Num\>Denom by 1

*(Because the degree of the numerator exceeds the degree of the
denominator by 1, the graph of the asymptote will be linear: **mx +
b**)*

![A graph on a grid Description automatically
generated](./media/image99.png)

Num\>Denom by 2

*(Because the degree of the numerator exceeds the degree of the
denominator by 2, the graph of the asymptote will be quadratic:
**x\^2**)*

![A graph on a graph Description automatically
generated](./media/image100.png)

Num\>Denom by 3

*(Because the degree of the numerator exceeds the degree of the
denominator by 3, the graph of the asymptote will be quadratic:
**x\^***3*)*

Use Polynomial Long Division to find the asymptote of a rational
function.

The amount by which the degree of the numerator exceeds the degree of
the denominator determines the type of asymptotic behavior displayed.

-   If numerator \> denominator by degree of 1, the asymptote will be
    linear.

-   If numerator \> denominator by degree of 2, the asymptote will be
    quadratic.

-   If numerator \> denominator by degree of 3, the asymptote will look
    like a polynomial of degree 3

-   If numerator \> denominator by degree of 4, the asymptote will look
    like polynomial of degree 4

#### Procedure for Identifying Horizontal Asymptotes when Deg(Numerator) \> Deg(Denominator)

**Procedure for Identifying Horizontal Asymptotes (Deg(Px) \> Deg(Qx))**

Perform Polynomial Long Division

-   Divide the numerator *𝑃(𝑥)* by the denominator *𝑄(𝑥)* to find the
    quotient.

-   The quotient represents the asymptote. If the quotient is linear, it
    will be an oblique/linear asymptote; if it\'s of higher degree, it
    will be a polynomial asymptote resembling the equation of the
    polynomial retrieved by long division.

## Hole / Discontinuity / Removable Discontinuity

**Hole / Removable Discontinuity:** A hole occurs in a rational function when there is a common factor between the numerator and the denominator that can be cancelled.

At the point where this factor equals zero, the function is undefined, creating a "hole" in the graph.

**How to identify:**

1. Factor both numerator and denominator completely
2. Find common factors
3. Cancel the common factors
4. The values that make the cancelled factors zero are holes

**Example 1:**

$$f(x) =  \frac{x^{2} - 1}{x^{2} - 2x - 3} = \frac{(x + 1)(x - 1)}{(x + 1)(x - 3)}$$

Factor and cancel:

$$f(x) = \frac{x - 1}{x - 3} \text{ for } x \neq -1$$

- **Hole at $x = -1$** (common factor $(x + 1)$ cancelled)
- **Vertical asymptote at $x = 3$** (denominator zero after cancellation)

**Finding the y-coordinate of the hole:**

Substitute $x = -1$ into the simplified function:

$$y = \frac{-1 - 1}{-1 - 3} = \frac{-2}{-4} = \frac{1}{2}$$

Hole is at $(-1, \frac{1}{2})$

**Example 2:**

$$f(x) = \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2}$$

Simplified: $f(x) = x + 2$ for $x \neq 2$

Hole at $(2, 4)$ since $f(2)$ would be $2 + 2 = 4$ if it were defined.

**Hole vs Vertical Asymptote:**

- **Hole:** Common factor cancels, function is undefined but has a finite limit
- **Vertical Asymptote:** Denominator is zero after all cancellations, function approaches $\pm\infty$

**Summary:**

| Feature | Numerator at $x = a$ | Denominator at $x = a$ | Result |
|---------|---------------------|------------------------|--------|
| Hole | Zero | Zero (cancels) | Undefined, finite limit |
| Vertical Asymptote | Non-zero | Zero | Undefined, $f(x) \to \pm\infty$ |
| x-intercept | Zero | Non-zero | $f(a) = 0$ |

# Exponential Functions

**Exponential Functions:** An exponential function is a function where the variable appears in the exponent.

## General Form

$$f(x) = a \cdot b^x + c$$

Where:
- **a:** Vertical stretch/compression factor (also affects growth/decay rate)
- **b:** Base (must be positive, $b > 0$ and $b \neq 1$)
- **x:** The exponent (independent variable)
- **c:** Vertical shift

**Special case (parent function):** $f(x) = b^x$

## Growth vs Decay

**Exponential Growth:** When $b > 1$

The function increases as x increases.

**Example:** $f(x) = 2^x$ doubles for every unit increase in x

**Exponential Decay:** When $0 < b < 1$

The function decreases as x increases.

**Example:** $f(x) = \left(\frac{1}{2}\right)^x$ halves for every unit increase in x

**Note:** $\left(\frac{1}{2}\right)^x = 2^{-x}$ (decay can be written with negative exponents)

## The Natural Exponential Function

**Natural Exponential:** $f(x) = e^x$

Where $e \approx 2.71828$ (Euler's number)

**Why $e$ is important:**
- Appears naturally in continuous growth/decay problems
- Has unique property: its derivative equals itself
- Used in compound interest, population growth, radioactive decay

**Example:** Continuous compound interest formula:

$$A = Pe^{rt}$$

Where P = principal, r = rate, t = time

## Domain and Range

**Domain:** $(-\infty, \infty)$ or $\mathbb{R}$ (all real numbers)

Exponential functions accept any real number as input.

**Range (for $f(x) = a \cdot b^x + c$ with $a > 0$):**

- If $c = 0$: Range is $(0, \infty)$
- If $c > 0$: Range is $(c, \infty)$
- If $c < 0$: Range is $(c, \infty)$

**General rule:** Range is $(c, \infty)$ when $a > 0$, or $(-\infty, c)$ when $a < 0$

## Intercepts

### y-intercept

**Finding the y-intercept:** Set $x = 0$

$$f(0) = a \cdot b^0 + c = a \cdot 1 + c = a + c$$

**Example:** For $f(x) = 3 \cdot 2^x - 1$

$f(0) = 3 \cdot 2^0 - 1 = 3 - 1 = 2$

y-intercept is $(0, 2)$

### x-intercept

**Finding x-intercept:** Set $f(x) = 0$ and solve for x

$$0 = a \cdot b^x + c$$
$$b^x = -\frac{c}{a}$$

**Important cases:**

1. **If $c = 0$:** No x-intercept (function never crosses x-axis, has horizontal asymptote at $y = 0$)

2. **If $-\frac{c}{a} > 0$:** One x-intercept exists
   
   Solve: $x = \log_b\left(-\frac{c}{a}\right)$

3. **If $-\frac{c}{a} \leq 0$:** No x-intercept (cannot take log of negative/zero)

**Example:** Find x-intercept of $f(x) = 2^x - 4$

$0 = 2^x - 4$

$2^x = 4$

$x = \log_2(4) = 2$

x-intercept is $(2, 0)$

## Horizontal Asymptote

**Horizontal Asymptote:** $y = c$

As $x \to \infty$ or $x \to -\infty$, the function approaches $y = c$ but never reaches it (unless $b = 1$, which is not a valid exponential).

**For growth ($b > 1$):**
- As $x \to \infty$: $f(x) \to \infty$
- As $x \to -\infty$: $f(x) \to c$

**For decay ($0 < b < 1$):**
- As $x \to \infty$: $f(x) \to c$
- As $x \to -\infty$: $f(x) \to \infty$

## Properties of Exponents

**Product Rule:** $b^x \cdot b^y = b^{x+y}$

**Quotient Rule:** $\frac{b^x}{b^y} = b^{x-y}$

**Power Rule:** $(b^x)^y = b^{xy}$

**Zero Exponent:** $b^0 = 1$ (for any $b \neq 0$)

**Negative Exponent:** $b^{-x} = \frac{1}{b^x}$

**Fractional Exponent:** $b^{1/n} = \sqrt[n]{b}$

## Examples

**Example 1: Exponential Growth**

Population of bacteria: $P(t) = 100 \cdot 2^t$

- Initial population: $P(0) = 100$
- After 1 hour: $P(1) = 200$
- After 3 hours: $P(3) = 800$

**Example 2: Exponential Decay**

Radioactive substance: $A(t) = 50 \cdot (0.5)^t$

- Initial amount: $A(0) = 50$ grams
- After 1 half-life: $A(1) = 25$ grams
- After 2 half-lives: $A(2) = 12.5$ grams

**Example 3: Vertical Shift**

$f(x) = 2^x - 3$

- Horizontal asymptote: $y = -3$
- y-intercept: $f(0) = 1 - 3 = -2$
- x-intercept: Solve $2^x = 3$, so $x = \log_2(3) \approx 1.585$

**Example 4: Compound Interest**

$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

Where:
- P = principal ($1000)
- r = annual rate (5% = 0.05)
- n = compounds per year (12 for monthly)
- t = years (10)

$$A = 1000\left(1 + \frac{0.05}{12}\right)^{12 \cdot 10} \approx \$1647.01$$

## Transformations

Starting with $f(x) = b^x$:

- **Vertical stretch:** $af(x) = a \cdot b^x$
- **Horizontal shift:** $f(x - h) = b^{x-h}$ (shift right by $h$)
- **Vertical shift:** $f(x) + k = b^x + k$ (shift up by $k$)
- **Reflection across x-axis:** $-f(x) = -b^x$
- **Reflection across y-axis:** $f(-x) = b^{-x}$ (converts growth to decay)

**Example:** Transform $f(x) = 2^x$ to $g(x) = -3 \cdot 2^{x-1} + 5$

1. Shift right 1: $2^{x-1}$
2. Stretch vertically by 3: $3 \cdot 2^{x-1}$
3. Reflect across x-axis: $-3 \cdot 2^{x-1}$
4. Shift up 5: $-3 \cdot 2^{x-1} + 5$

# Logarithms

**Logarithm:** A logarithm is the inverse of an exponential function. It answers the question: "To what exponent must we raise the base to get a certain number?"

## Definition

Let $a \in \mathbb{R}$, $a > 0$, $a \neq 1$

$$\log_a : (0,\infty) \rightarrow \mathbb{R}$$

$$\forall x \in \mathbb{R}, \forall y \in (0,\infty), \quad y = a^x \Longleftrightarrow x = \log_a(y)$$

In words: If $y = a^x$, then $x = \log_a(y)$

**Example:** $2^3 = 8 \Longleftrightarrow \log_2(8) = 3$

## Common Logarithms

### Natural Logarithm (ln)

**Natural Logarithm:** The logarithm with base $e$ (Euler's number, approximately 2.71828).

$$\ln(x) = \log_e(x)$$

The natural logarithm is the inverse of $e^x$.

### Common Logarithm (log)

**Common Logarithm:** The logarithm with base 10. Often written as $\log(x)$ without a base specified.

$$\log(x) = \log_{10}(x)$$

The common logarithm is the inverse of $10^x$.

### Binary Logarithm (lg)

**Binary Logarithm:** The logarithm with base 2. Common in computer science.

$$\lg(x) = \log_2(x)$$

The binary logarithm is the inverse of $2^x$.

## Fundamental Properties

### Product Rule

$$\log_a(xy) = \log_a(x) + \log_a(y)$$

The logarithm of a product is the sum of the logarithms.

**Example:** $\log_2(8 \cdot 4) = \log_2(8) + \log_2(4) = 3 + 2 = 5$

### Quotient Rule

$$\log_a\left(\frac{x}{y}\right) = \log_a(x) - \log_a(y)$$

The logarithm of a quotient is the difference of the logarithms.

**Example:** $\log_2\left(\frac{8}{4}\right) = \log_2(8) - \log_2(4) = 3 - 2 = 1$

### Power Rule

$$\log_a(x^n) = n \cdot \log_a(x)$$

The logarithm of a power is the exponent times the logarithm of the base.

**Example:** $\log_2(8^2) = 2 \cdot \log_2(8) = 2 \cdot 3 = 6$

### Change of Base Formula

$$\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$$

This allows converting between different logarithm bases. Particularly useful for converting to natural or common logarithms for calculator use.

**Example:** $\log_2(8) = \frac{\ln(8)}{\ln(2)} = \frac{2.079}{0.693} \approx 3$

## Special Values

### Identity

$$\log_a(a) = 1$$

Any base raised to the power 1 equals itself.

**Example:** $\log_2(2) = 1$, $\ln(e) = 1$, $\log(10) = 1$

### Zero

$$\log_a(1) = 0$$

Any base raised to the power 0 equals 1.

**Example:** $\log_2(1) = 0$, $\ln(1) = 0$, $\log(1) = 0$

### Undefined Values

- $\log_a(0)$ is undefined (no power of $a$ gives 0)
- $\log_a(x)$ is undefined for $x < 0$ (in real numbers)
- $\log_1(x)$ is undefined ($1^n = 1$ for all $n$)

## Inverse Relationship

### Logarithm cancels Exponential

$$\log_a(a^x) = x$$

**Example:** $\log_2(2^5) = 5$

### Exponential cancels Logarithm

$$a^{\log_a(x)} = x$$

**Example:** $2^{\log_2(8)} = 8$

## Domain and Range

**Domain:** $(0, \infty)$ - Logarithms are only defined for positive real numbers.

**Range:** $(-\infty, \infty)$ - Logarithms can output any real number.

## Graph Properties

The graph of $y = \log_a(x)$:

- Passes through the point $(1, 0)$ (since $\log_a(1) = 0$)
- Passes through the point $(a, 1)$ (since $\log_a(a) = 1$)
- Has a vertical asymptote at $x = 0$
- Increases without bound as $x \rightarrow \infty$ (for $a > 1$)
- Is concave down (for $a > 1$)
- Is the reflection of $y = a^x$ across the line $y = x$

### Base Effects

- When $a > 1$: function is increasing
- When $0 < a < 1$: function is decreasing
- Larger bases grow more slowly

## Applications

### Solving Exponential Equations

Logarithms are used to solve equations where the variable is in the exponent.

**Example:** Solve $2^x = 10$

$$x = \log_2(10) = \frac{\ln(10)}{\ln(2)} \approx 3.32$$

### Logarithmic Scales

Many real-world phenomena use logarithmic scales:

- **pH scale** (acidity/alkalinity)
- **Richter scale** (earthquake magnitude)
- **Decibels** (sound intensity)
- **Orders of magnitude** (scientific notation)

### Growth and Decay

Logarithms appear in models of:

- Population growth
- Radioactive decay
- Compound interest
- Algorithm complexity analysis

# Radical Functions

**Radical Functions:** A radical function is a function that contains a variable under a radical symbol (root). The most common are square root and cube root functions.

## General Form

$$f(x) = a\sqrt[n]{bx + c} + d$$

Where:
- **n:** The index of the root (n = 2 for square root, n = 3 for cube root, etc.)
- **a:** Vertical stretch/compression
- **b:** Horizontal stretch/compression
- **c:** Horizontal shift (affects domain)
- **d:** Vertical shift

## Square Root Function

**Square Root Function (parent):** $f(x) = \sqrt{x}$

**Domain:** $[0, \infty)$ (only non-negative numbers, since $\sqrt{x}$ is undefined for $x < 0$ in real numbers)

**Range:** $[0, \infty)$

**Key Points:**
- $(0, 0)$ - starting point
- $(1, 1)$
- $(4, 2)$
- $(9, 3)$

**Graph:** Starts at origin, increases slowly (concave down)

### Domain of Transformed Square Root

For $f(x) = \sqrt{bx + c}$, solve for where the radicand is non-negative:

$$bx + c \geq 0$$

**Example 1:** Find domain of $f(x) = \sqrt{x - 3}$

$x - 3 \geq 0$

$x \geq 3$

Domain: $[3, \infty)$

**Example 2:** Find domain of $f(x) = \sqrt{5 - 2x}$

$5 - 2x \geq 0$

$5 \geq 2x$

$x \leq \frac{5}{2}$

Domain: $(-\infty, \frac{5}{2}]$

## Cube Root Function

**Cube Root Function (parent):** $f(x) = \sqrt[3]{x}$

**Domain:** $(-\infty, \infty)$ (all real numbers, since cube roots of negative numbers are defined)

**Range:** $(-\infty, \infty)$

**Key Points:**
- $(-8, -2)$
- $(-1, -1)$
- $(0, 0)$
- $(1, 1)$
- $(8, 2)$

**Graph:** Passes through origin, extends in both directions

**Key Difference:** Cube root (and all odd-index roots) accept negative inputs; square root (and all even-index roots) do not.

## nth Root Function

**General nth Root:** $f(x) = \sqrt[n]{x}$

**Domain:**
- **Even n:** $[0, \infty)$ (only non-negative)
- **Odd n:** $(-\infty, \infty)$ (all real numbers)

**Range:**
- **Even n:** $[0, \infty)$
- **Odd n:** $(-\infty, \infty)$

## Solving Radical Equations

**Steps for solving radical equations:**

1. Isolate the radical on one side
2. Raise both sides to the power that eliminates the radical
3. Solve the resulting equation
4. **Check solutions** in original equation (extraneous solutions are common)

**Example 1:** Solve $\sqrt{x + 3} = 5$

Square both sides:
$$x + 3 = 25$$
$$x = 22$$

Check: $\sqrt{22 + 3} = \sqrt{25} = 5$ ✓

**Example 2:** Solve $\sqrt{2x - 1} = x - 2$

Square both sides:
$$2x - 1 = (x - 2)^2$$
$$2x - 1 = x^2 - 4x + 4$$
$$0 = x^2 - 6x + 5$$
$$0 = (x - 5)(x - 1)$$

Potential solutions: $x = 5$ or $x = 1$

Check $x = 5$: $\sqrt{2(5) - 1} = \sqrt{9} = 3$ and $5 - 2 = 3$ ✓

Check $x = 1$: $\sqrt{2(1) - 1} = \sqrt{1} = 1$ and $1 - 2 = -1$ ✗ (extraneous)

Solution: $x = 5$ only

**Example 3:** Solve $\sqrt{x + 1} + \sqrt{x - 4} = 5$

Isolate one radical:
$$\sqrt{x + 1} = 5 - \sqrt{x - 4}$$

Square both sides:
$$x + 1 = 25 - 10\sqrt{x - 4} + (x - 4)$$
$$x + 1 = 21 + x - 10\sqrt{x - 4}$$
$$10\sqrt{x - 4} = 20$$
$$\sqrt{x - 4} = 2$$

Square again:
$$x - 4 = 4$$
$$x = 8$$

Check: $\sqrt{8 + 1} + \sqrt{8 - 4} = \sqrt{9} + \sqrt{4} = 3 + 2 = 5$ ✓

**Why Check?** Squaring both sides can introduce extraneous solutions that don't satisfy the original equation.

## Rational Exponents

**Connection to Radicals:**

$$x^{1/n} = \sqrt[n]{x}$$

$$x^{m/n} = \sqrt[n]{x^m} = (\sqrt[n]{x})^m$$

**Examples:**
- $16^{1/2} = \sqrt{16} = 4$
- $8^{1/3} = \sqrt[3]{8} = 2$
- $27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$
- $16^{-1/2} = \frac{1}{\sqrt{16}} = \frac{1}{4}$

**Properties:** All exponent rules apply to rational exponents.

# Inequalities

**Inequalities:** An inequality is a mathematical statement that compares two expressions using inequality symbols. Unlike equations, which state that two expressions are equal, inequalities show that one expression is greater than, less than, greater than or equal to, or less than or equal to another expression.

**Inequality Symbols:**

- $<$ : less than
- $>$ : greater than
- $\leq$ : less than or equal to
- $\geq$ : greater than or equal to
- $\neq$ : not equal to

## Properties of Inequalities

**Addition/Subtraction Property:**

If $a < b$, then $a + c < b + c$ and $a - c < b - c$

You can add or subtract the same value from both sides without changing the inequality direction.

**Multiplication/Division by Positive Number:**

If $a < b$ and $c > 0$, then $ac < bc$ and $\frac{a}{c} < \frac{b}{c}$

**Multiplication/Division by Negative Number:**

If $a < b$ and $c < 0$, then $ac > bc$ and $\frac{a}{c} > \frac{b}{c}$

**Critical:** The inequality sign **reverses** when multiplying or dividing by a negative number.

**Transitive Property:**

If $a < b$ and $b < c$, then $a < c$

## Linear Inequalities

**Linear Inequality:** An inequality involving a linear expression (degree 1).

**General Form:** $ax + b < c$ (or $>$, $\leq$, $\geq$)

**Solving Steps:**

1. Isolate the variable using addition/subtraction
2. Divide/multiply by the coefficient
3. Remember to flip the sign if dividing/multiplying by a negative number

**Example 1:** Solve $3x - 5 > 7$

$3x - 5 > 7$

$3x > 12$

$x > 4$

**Solution:** $x \in (4, \infty)$

**Example 2:** Solve $-2x + 3 \leq 11$

$-2x + 3 \leq 11$

$-2x \leq 8$

$x \geq -4$ (sign flips when dividing by -2)

**Solution:** $x \in [-4, \infty)$

**Example 3:** Solve $5 - 2x < 3x + 15$

$5 - 2x < 3x + 15$

$-5x < 10$

$x > -2$ (sign flips)

**Solution:** $x \in (-2, \infty)$

## Compound Inequalities

**Compound Inequality:** Combines two inequalities using "and" or "or".

**Conjunction (AND):** $a < x < b$ means $x > a$ AND $x < b$

**Example:** Solve $-3 < 2x + 1 < 7$

Split into two inequalities:

$-3 < 2x + 1$ AND $2x + 1 < 7$

$-4 < 2x$ AND $2x < 6$

$-2 < x$ AND $x < 3$

**Solution:** $x \in (-2, 3)$

**Disjunction (OR):** $x < a$ OR $x > b$

**Example:** Solve $x - 3 < -5$ OR $x + 2 > 8$

$x < -2$ OR $x > 6$

**Solution:** $x \in (-\infty, -2) \cup (6, \infty)$

## Quadratic Inequalities

**Quadratic Inequality:** An inequality involving a quadratic expression (degree 2).

**General Form:** $ax^2 + bx + c < 0$ (or $>$, $\leq$, $\geq$)

**Solving Method:**

1. Move all terms to one side (set to 0 on the other side)
2. Factor the quadratic (or use quadratic formula to find roots)
3. Find the critical points (zeros)
4. Test intervals between critical points
5. Determine which intervals satisfy the inequality

**Example 1:** Solve $x^2 - 5x + 6 < 0$

Factor: $(x - 2)(x - 3) < 0$

Critical points: $x = 2$ and $x = 3$

Test intervals:
- $x < 2$: Test $x = 0$: $(0-2)(0-3) = 6 > 0$ ✗
- $2 < x < 3$: Test $x = 2.5$: $(0.5)(-0.5) = -0.25 < 0$ ✓
- $x > 3$: Test $x = 4$: $(2)(1) = 2 > 0$ ✗

**Solution:** $x \in (2, 3)$

**Example 2:** Solve $x^2 + 2x - 8 \geq 0$

Factor: $(x + 4)(x - 2) \geq 0$

Critical points: $x = -4$ and $x = 2$

Test intervals:
- $x < -4$: Test $x = -5$: $(-1)(-7) = 7 > 0$ ✓
- $-4 < x < 2$: Test $x = 0$: $(4)(-2) = -8 < 0$ ✗
- $x > 2$: Test $x = 3$: $(7)(1) = 7 > 0$ ✓

**Solution:** $x \in (-\infty, -4] \cup [2, \infty)$

**Sign Chart Method:**

Draw a number line with critical points and test the sign of each factor in each interval.

```
         -4          2
    +  +  |  -  -  |  +  +
    +  +  |  -  -  |  +  +
    ─────────────────────
(x+4)     -    +       +
(x-2)     -    -       +
Product   +    -       +
```

## Rational Inequalities

**Rational Inequality:** An inequality involving a rational expression (fraction with polynomials).

**General Form:** $\frac{P(x)}{Q(x)} < 0$ (or $>$, $\leq$, $\geq$)

**Solving Method:**

1. Move all terms to one side
2. Find a common denominator if needed
3. Factor numerator and denominator
4. Find critical points (zeros of numerator and denominator)
5. **Important:** Exclude values that make denominator zero
6. Test intervals between critical points
7. Use sign chart

**Example 1:** Solve $\frac{x - 1}{x + 2} > 0$

Critical points:
- Numerator zero: $x = 1$
- Denominator zero: $x = -2$ (excluded from solution)

Test intervals:
- $x < -2$: Test $x = -3$: $\frac{-4}{-1} = 4 > 0$ ✓
- $-2 < x < 1$: Test $x = 0$: $\frac{-1}{2} = -0.5 < 0$ ✗
- $x > 1$: Test $x = 2$: $\frac{1}{4} = 0.25 > 0$ ✓

**Solution:** $x \in (-\infty, -2) \cup (1, \infty)$

**Example 2:** Solve $\frac{x^2 - 4}{x - 3} \leq 0$

Factor: $\frac{(x-2)(x+2)}{x-3} \leq 0$

Critical points: $x = -2, 2$ (zeros), $x = 3$ (excluded)

Test intervals:
- $x < -2$: negative/negative = positive ✗
- $-2 < x < 2$: positive/negative = negative ✓
- $2 < x < 3$: positive/negative = negative ✓
- $x > 3$: positive/positive = positive ✗

**Solution:** $x \in [-2, 2] \cup (2, 3)$ which simplifies to $x \in [-2, 3)$

**Note:** We include $x = -2$ and $x = 2$ (where numerator is zero) but exclude $x = 3$ (where denominator is zero).

## Absolute Value Inequalities

**Absolute Value Inequality:** An inequality involving absolute value.

**Recall:** $|x|$ represents the distance from zero on the number line.

### Type 1: $|x| < a$

**Interpretation:** Distance from zero is less than $a$.

**Solution:** $-a < x < a$

**Example:** Solve $|x - 3| < 5$

$-5 < x - 3 < 5$

$-2 < x < 8$

**Solution:** $x \in (-2, 8)$

### Type 2: $|x| > a$

**Interpretation:** Distance from zero is greater than $a$.

**Solution:** $x < -a$ OR $x > a$

**Example:** Solve $|2x + 1| \geq 7$

$2x + 1 \leq -7$ OR $2x + 1 \geq 7$

$2x \leq -8$ OR $2x \geq 6$

$x \leq -4$ OR $x \geq 3$

**Solution:** $x \in (-\infty, -4] \cup [3, \infty)$

### Complex Absolute Value Inequalities

**Example:** Solve $|x + 2| < 3x - 1$

For absolute value inequalities with variable expressions, consider two cases:

**Case 1:** $x + 2 \geq 0$ (expression inside is non-negative)

Then $|x + 2| = x + 2$

$x + 2 < 3x - 1$

$3 < 2x$

$x > 1.5$

Combined with $x + 2 \geq 0$ → $x \geq -2$

This case gives: $x > 1.5$

**Case 2:** $x + 2 < 0$ (expression inside is negative)

Then $|x + 2| = -(x + 2)$

$-(x + 2) < 3x - 1$

$-x - 2 < 3x - 1$

$-1 < 4x$

$x > -0.25$

Combined with $x + 2 < 0$ → $x < -2$

This case gives: no solution (contradiction)

**Solution:** $x \in (1.5, \infty)$

## Systems of Inequalities

**System of Inequalities:** Multiple inequalities that must be satisfied simultaneously.

**Solving Method:**

1. Solve each inequality individually
2. Find the intersection of all solutions (values that satisfy ALL inequalities)
3. Graph the solution region (for two variables)

**Example 1 (one variable):** Solve the system:

$$\begin{cases}
x + 3 > 1 \\
2x - 5 \leq 7
\end{cases}$$

Solve each:
- $x + 3 > 1$ → $x > -2$
- $2x - 5 \leq 7$ → $2x \leq 12$ → $x \leq 6$

**Solution:** $x \in (-2, 6]$

**Example 2 (two variables):** Graph the solution region for:

$$\begin{cases}
y < 2x + 1 \\
y \geq -x + 3
\end{cases}$$

Steps:
1. Graph $y = 2x + 1$ (dashed line, shade below)
2. Graph $y = -x + 3$ (solid line, shade above)
3. Solution is the overlapping shaded region

**Example 3 (three inequalities):** Solve:

$$\begin{cases}
x + y \leq 4 \\
x - y < 2 \\
x \geq 0, y \geq 0
\end{cases}$$

This defines a bounded region in the first quadrant. The solution is the polygon formed by the intersection of all constraints.

## Interval Notation Summary

| Inequality | Interval Notation | Meaning |
|------------|-------------------|---------|
| $x < a$ | $(-\infty, a)$ | Open at $a$ |
| $x \leq a$ | $(-\infty, a]$ | Closed at $a$ |
| $x > a$ | $(a, \infty)$ | Open at $a$ |
| $x \geq a$ | $[a, \infty)$ | Closed at $a$ |
| $a < x < b$ | $(a, b)$ | Open at both |
| $a \leq x \leq b$ | $[a, b]$ | Closed at both |
| $a \leq x < b$ | $[a, b)$ | Closed at $a$, open at $b$ |
| $x < a$ OR $x > b$ | $(-\infty, a) \cup (b, \infty)$ | Union of two intervals |

# Geometry & Trigonometry

## Coordinate Geometry

### Distance Formula

**Distance Formula:** The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ in the coordinate plane is:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This is derived from the Pythagorean theorem.

**Example 1:** Find the distance between $(1, 2)$ and $(4, 6)$

$$d = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

**Example 2:** Find the distance between $(-3, 5)$ and $(2, -7)$

$$d = \sqrt{(2 - (-3))^2 + (-7 - 5)^2} = \sqrt{5^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

**3D Distance Formula:**

For points $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ in 3D space:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

### Midpoint Formula

**Midpoint Formula:** The midpoint between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

The midpoint is simply the average of the x-coordinates and the average of the y-coordinates.

**Example 1:** Find the midpoint between $(2, 3)$ and $(8, 7)$

$$M = \left(\frac{2 + 8}{2}, \frac{3 + 7}{2}\right) = \left(\frac{10}{2}, \frac{10}{2}\right) = (5, 5)$$

**Example 2:** Find the midpoint between $(-4, 6)$ and $(2, -2)$

$$M = \left(\frac{-4 + 2}{2}, \frac{6 + (-2)}{2}\right) = \left(\frac{-2}{2}, \frac{4}{2}\right) = (-1, 2)$$

**3D Midpoint Formula:**

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)$$

**Application:** Finding the center of a circle given two endpoints of a diameter.

## Triangle

**Triangle:** A triangle is a polygon with 3 corners and 3 edges /
sides.

The corners are called **Vertices.**

Sometimes an arbitrary edge is chosen to be the **Base**, in which case
the opposite vertex is taken to be the **Apex.**

### Area of Triangle

**Area of Triangle: ½ bh**

!Area of Triangle - Definition, Formula & Examples \|
ChiliMath](./media/image106.png)

### Angle Sum Property

**Angle Sum Property:** The sum of the three interior angles of any
triangle must equal 180.

!Angle Sum Property \| Theorem \| Proof \| Examples-
Cuemath](./media/image107.png)

### Exterior Angles in a Triangle

**Exterior Angles in a Triangle:**

-   Every triangle has 6 exterior angles, two at each vertex.

-   Angles 1 through 6 are exterior angles.

-   Notice that the \"outside\" angles that are \"vertical\" to the
    angles inside the triangle are NOT called exterior angles of a
    triangle.

![](./media/image108.png)

### Measure of an Exterior Angle of a Triangle

**Measure of an exterior angle of a triangle:** The measure of an
exterior angle of a triangle is equal to the sum of the non-adjacent
interior angles of the triangle.

-   An exterior ∠ is equal to the addition of the two non-adjacent Δ
    angles.

-   140º = 60º + 80º; 120º = 80º + 40º;

-   100º = 60º + 40º

-   An exterior angle is supplementary to its adjacent Δ angle. 140º is
    supp to 40º

-   The 2 exterior angles at each vertex are = in measure because they
    are vertical angles.

-   The exterior angles (taken one at a vertex) always total 360º

![](./media/image109.png)

### Triangle Inequality 

**Triangle Inequality:** For all triangles, p + q \> r

The sum of any two sides must be greater than the third side.

![](./media/image110.png)

We cannot use the triangle inequality to find the exact lengths of the
sides of a triangle, but when two sides are known, the triangle
inequality allows us to find upper and lower bounds for the length of
the third side.

### Pythagorean Theorem

Pythagorean Theorem: It states that in a right-angled triangle, the
square of the length of the hypotenuse (the side opposite the right
angle) is equal to the sum of the squares of the lengths of the other
two sides

${a^{2} + b^{2} = c}^{2}$

Where:

-   𝑐 is the length of the hypotenuse.

-   𝑎 and b are the lengths of the other two sides.

The Pythagorean theorem establishes relationships between the sides of
right triangles and their hypotenuse. It can be used to solve unknown
side lengths when two sides are known.

![A triangle with colorful text on it Description automatically
generated with medium
confidence](./media/image111.png)

### Law of Sines

**Law of Sines:** The law of sines establishes relationships that hold
true for ALL triangles, not only right triangles. This is important to
understand, because the trig functions only relate the angles and sides
of RIGHT ANGLED triangles. To establish relationships on oblique /
non-right-angled triangles, we must use the **Law of Sines**.

$$\frac{a}{sin A} = \frac{b}{sin\ B} = \frac{c}{sin\ C}$$

The ratios between all angles and their opposite side lengths are
directly proportional to each other.

The Sine Law is applicable to ALL TRIANGLES. Some sources will say it
is used for oblique triangles only. This is not the case.

### Law of Cosines

**Law of Cosines:** The **Law of Cosines** is a formula used to relate
the lengths of the sides of any triangle to the cosine of one of its
angles.

*It generalizes the Pythagorean theorem for all types of triangles,
including those without a right angle.*

**You can start thinking about using the cosine law when you have an
oblique triangle, but you do not have the information necessary to apply
the law of sines.**

**There are 2 situations in which you have enough information to apply
the law of cosines.**

**SAS -- Side, Angle, Side**

**SSS -- Side, Side, Side**

**You must have 2 sides known with a known angle included between them**

**OR**

**You must have all 3 sides.**

The law of cosines can be remembered as a "extended" Pythagorean
Theorem.

Pythagorean Theorem: a\^2 + b\^2 = c\^2.

Law(s) of Cosines:

$$b^{2} + c^{2} - 2bc*\cos(a) = a^{2}$$

$$a^{2} + c^{2} - 2ac*\cos(b) = b^{2}$$

$$a^{2} + b^{2} - 2ab*\cos(c) = c^{2}$$

![A black background with white text Description automatically
generated](./media/image112.png)

**All of the writings above are specifically solved for a side.**

**The cosine law can also be used to find an angle.**

### Comparison of Law of Sines / Law of Cosines to Trigonometric functions

**Comparison of Law of Sines / Law of Cosines to Trigonometric
functions**

The basic trigonometric functions (sine, cosine, and tangent) are used
for right-angled triangles

The Law of Sines extends the basic trigonometric functions to apply to
any triangle, not just right-angled ones. It is particularly useful in
oblique triangles when:

-   **You have two angles and a side (AAS or ASA).**

-   **You have two sides and a non-included angle (SSA).**

$$\frac{a}{sin A} = \frac{b}{sin\ B} = \frac{c}{sin\ C}$$

### Similarity

**Similarity:** *Similar shapes are the same shape, but they are a
different size.*

The corresponding sides are in the same ratio and the corresponding
angles are the same. Similar triangles are not "equivalent" because
equivalence in geometry is expressed using congruence.

Similar triangles are different only in scale, so similar triangles
could be resized to become congruent.

*Same angles, different---but proportional---side
lengths.*

![A black background with white text Description automatically
generated](./media/image113.png)

#### Proving Similar triangles

##### AA (Angle-Angle) similarity

**AA (Angle-Angle) similarity:** If a pair of triangles have 2
corresponding angles that are the same, then we can prove that these
triangles are similar. We can do this by using the Angle Sum Property.

If the interior angles of a triangle are always equal to 180° AND IF we
have a pair of triangles having 2 congruent angles, then by extension,
the third angle must also be congruent.

##### SSS (Side-Side-Side) similarity

**SSS (Side-Side-Side) similarity:** If 3 sides of a triangle are
proportional to three sides of a different triangle then the triangles
are similar.

![A diagram of triangles with dots and lines Description automatically
generated](./media/image114.png)

$$\frac{BC}{EF} = \frac{AC}{DF} = \frac{AB}{DE}$$

##### SAS (Side-Angle-Side) similarity

**SAS (Side-Angle-Side) similarity:** If any two sides and the angle
contained between them are equivalent to the same two sides and included
angle of a different triangle, then these 2 triangles are similar.

![](./media/image115.png)

### Congruence

**Congruence:** Congruent shapes are exactly the same shape and the same
size. Congruence is equality expressed geometrically. Congruent shapes
may be made to sit together using transposition.

![](./media/image116.png)

*Congruent shapes have the same ANGLES AND the same
SIDES.*

![A screenshot of a computer screen Description automatically
generated](./media/image117.png)

#### Proving Congruence (not done)

**Proving Congruence**

#### Congruence Statement

**Congruence Statement:**

#### SSS (Side-Side-Side) Congruence

**SSS (Side-Side-Side) Congruence:**

If all the three sides of one triangle are equivalent to the
corresponding three sides of the second triangle, then the two triangles
are said to be congruent by SSS rule.

![](./media/image118.png)

#### Side-Angle-Side Congruence

**Side-Angle-Side Congruence:**

If any two sides and the angle included between the sides of one
triangle are equivalent to the corresponding two sides and the angle
between the sides of the second triangle, then the two triangles are
said to be congruent by SAS rule.

![](./media/image115.png)

### Types of Triangles

**Types of Triangles:** Triangles are broadly categorized into 2 types:

-   Triangles based on the lengths of their sides

-   Triangles based on their interior angles

  -----------------------------------------------------------------------
  **Based on their Sides**           **Based on their Angles**
  ---------------------------------- ------------------------------------
  Scalene Triangle                   Acute Triangle

  Isosceles Triangle                 Obtuse Triangle

  Equilateral Triangle               Right Triangle
  -----------------------------------------------------------------------

#### Types of Triangles: Based on Side length

**Types of Triangles: Based on Side length**

According to the lengths of their sides, triangles can be classified
into three types which are:

##### Scalene

**Scalene:** Triangle has all side lengths *[different*.

![](./media/image119.png)

##### Isosceles

**Isosceles:** Triangle with 2 sides having the same length.

![](./media/image120.png)

##### Equilateral

**Equilateral:** Triangle with *[all sides having the same
length.*

![](./media/image121.png)

#### Types of Triangles: Based on Angles

**Types of Triangles: Based on Angles**

Triangles can be classified into three types with respect to their
interior angles which are:

##### Acute

**Acute triangle:** Triangle with *all 3 interior angles less than 90°*.

![](./media/image122.png)

##### Obtuse

**Obtuse triangle:** Triangle which has *one interior angle greater than
90°*.

![](./media/image123.png)

##### Right

**Right triangle:** Triangle that contains a 90° interior angle.

-   A right triangle has one right angle. (A right angle measures
    exactly 90º.)

-   A \"box\" is used to indicate the location of the right angle.

-   The longest side of the right triangle (across from the \"box\") is
    called the \"hypotenuse\".

-   The remaining two sides are referred to as \"legs\", which may, or
    may not, be of equal length.

![](./media/image124.png)

###### Types of Right Triangles

There are 2 types of right triangles

####### Scalene Right Triangle

**Scalene Right Triangle:**

-   A right triangle has one angle equal to 90 degrees.

-   A scalene triangle has all sides of different lengths and all angles
    of different measures.

-   Therefore, a scalene right triangle is a right triangle where all
    three sides have different lengths, and the two non-right angles are
    different.

!Scalene Triangles \| Measuring, Properties, Types,
Examples,](./media/image125.png)

Some scalene right triangles are known as 30-60-90 triangles.

####### Isosceles Right Triangle

**Isosceles Right Triangle:**

-   One angle is 90 degrees (right angle).

-   The other two angles are equal, each measuring 45 degrees.

Summary:

Based on Side length: **Scalene**, **Isosceles**, **Equilateral**

Based on Angles: **Right**, **Obtuse**, **Acute**.

![A screenshot of a black screen Description automatically
generated](./media/image126.png)

#### Oblique Triangle

**Oblique Triangles:** An oblique triangle is a triangle that does not
contain any right angles. Logically, we know that if a triangle is not a
right triangle, then it must be either an Obtuse or Acute triangle.

[**Oblique triangles** are triangles that are either Obtuse or
Acute.

Relationships between oblique triangles can be understood using the law
of sines and law of cosines.

### Special Triangles

**Special Triangles:** A special right triangle is a right triangle with
some regular feature that makes calculations on the triangle easier, or
for which simple formulas exist.

Why are special triangles considered 'special' ?

*The fact that the sides of these special triangles are represented by
integers or simple square roots, [rather than irrational
numbers, is a significant reason why they are considered
special.*

***The trigonometric ratios for most angles are irrational
numbers.***

The angles 30°, 60°, 45° are "special" because we can easily find exact
values for their trig ratios, and use those exact values to find exact
lengths for the sides of triangles with those angles.

#### 45-45-90 (Isosceles right triangle)

**45-45-90:** A **45-45-90** triangle is a special type of right
triangle where the two non-right angles are both 45 degrees. This makes
the triangle ***isosceles***, as the two legs opposite the 45-degree
angles are of equal length.

*All 45-45-90 triangles are isosceles right
triangles.*

!Mr. Escalante\'s Geometry
Class](./media/image127.jpeg)

**Properties**

-   Each leg **x** is of equal length

-   If each leg is **x**, hypotenuse is **x**$\sqrt{\mathbf{2}}$

[45-45-90 triangles can also be expressed as π/4 -- π/4 -- π/2

#### 30-60-90 (Scalene right triangle)

**30-60-90:**

![30-60-90 Triangles \| Properties, Formula & Examples - Lesson \|
Study.com](./media/image128.png)

**Properties**

-   The side lengths are in the ratio 1 :$\sqrt{3}$: 2

-   The sides are represented by simple square roots, making the
    relationships between the sides straightforward and easy to work
    with.

In a 30°-60°-90° triangle, notice how the size of the angles corresponds
to the size of the sides.

The largest side will always be opposite to the largest angle.
Similarly, the smallest side would always be opposite to the smallest
angle.

[30-60-90 triangles can also be expressed in radians as π/6 -- π/3 --
π/2

## Circle

**Circle:** A circle is a shape consisting of all points in a plane that
are at a given distance from the center.

### General Equation

General equation: (x-h)^2^ + (y-k)^2^ = r^2^

![A circle drawn in the first quadrant, with center labeled as the point
h comma k. A line labeled r is drawn from the center out to a point on
the circle labeled x comma
y](./media/image129.png)

### π Pi

π **Pi:** Pi is a constant that represents the ratio of a circle's
circumference to it's diameter. Pi is an irrational number and equals
approximately 3.14159

π = Circumference / diameter

### Circumference

**Circumference:** The distance around the boundary of a circle is
called the circumference.

C = π d

C = 2 πr

![](./media/image130.png)

### Radius

Radius**:** The distance from the center of a circle to any point on the
boundary is called the **radius**. The radius is half of the diameter;
2r=d

Radius = d/2

The length of the radius can also be calculated using the distance
formula:

![](./media/image131.png)

.![A blue circle with red line Description automatically
generated](./media/image132.png)

### Diameter

**Diameter:** The distance across a circle through the center is called
the diameter.

D = 2r

![](./media/image133.png)

### Sector

**Sector:** The area inside a circle and bounded by two radii is a
**sector**.

The area of the sector is: (1/2) \* r^2^θ

![](./media/image134.png)

### Arc

**Arc:** The length between two points around the circumference of a
circle is an arc.

### Arc Length

**Arc length**: The distance between two points on a curve.

Arc length is: rθ

![](./media/image135.png)

**Area of a Circle:** Area is the total amount of space taken up by a
flat, 2D shape. It is the measurement of a shape's size on a surface.
Therefore, the area of a circle is the measurement of the interior space
occupied by a circle.

!Area of a Circle - Definition, Formula, Derivation with Solved
Examples](./media/image136.png)

## Line

Lines: A line is an infinitely long object with no width, depth or
curvature. It is an abstract geometric form that represents perfect
straightness on a cartesian coordinate plane.

### Types of Lines

**Types of Lines**

+-----------+--------------------------+------------------------------+
| **P       | ![](./                   | Two lines are parallel when  |
| arallel** | media/image137.png){widt | the distance between the two |
|           | h="1.2174475065616799in" | straight lines is the same   |
|           | height=                  | at all points.               |
|           | "0.43056102362204723in"} |                              |
+===========+==========================+==============================+
| **Perpen  | ![](./                   | Two lines are perpendicular  |
| dicular** | media/image138.png){widt | to each other if they meet,  |
|           | h="2.0659612860892387in" | or intersect at 90°.         |
|           | height                   |                              |
|           | ="0.5463320209973753in"} |                              |
+-----------+--------------------------+------------------------------+
| **V       | ![](./m                  | A vertical line is a line    |
| ertical** | edia/image139.png){width | that is perpendicular to the |
|           | ="0.30611001749781275in" | surface or another line that |
|           | height                   | is considered as the base.   |
|           | ="0.6805041557305337in"} | In coordinate geometry, the  |
|           |                          | *[vertical lines are         |
|           |                          | parallel to the y-axis and   |
|           |                          | are perpendicular to the     |
|           |                          | horizontal lines and the     |
|           |                          | x-axis*         |
+-----------+--------------------------+------------------------------+
| **Hor     | ![](./                   | A horizontal line is a       |
| izontal** | media/image140.png){widt | straight line that goes from |
|           | h="0.9178543307086614in" | left to right or right to    |
|           | height                   | left. In coordinate          |
|           | ="0.6933792650918635in"} | geometry, a line is said to  |
|           |                          | be horizontal if two points  |
|           |                          | on the line have the same Y- |
|           |                          | coordinate points. It comes  |
|           |                          | from the term "horizon*[".   |
|           |                          | It means that the horizontal |
|           |                          | lines are always parallel to |
|           |                          | the horizon or the           |
|           |                          | x-axis.*        |
+-----------+--------------------------+------------------------------+
| *         | ![](./                   | Secant line is a line that   |
| *Secant** | media/image141.png){widt | intersects a                 |
|           | h="1.2577548118985127in" | ***[curve*** at |
|           | height                   | a minimum of two distinct    |
|           | ="0.9766097987751531in"} | points                       |
+-----------+--------------------------+------------------------------+
| **Tran    | ![](./                   | A transversal is a line that |
| sversal** | media/image142.png){widt | passes through two lines in  |
|           | h="2.3204779090113736in" | the same plane at two        |
|           | height                   | distinct points.             |
|           | ="1.0490791776027997in"} |                              |
|           |                          | Transversals may intersect   |
|           |                          | parallel or non-parallel     |
|           |                          | lines---it does not matter.  |
+-----------+--------------------------+------------------------------+
| **        | ![](./                   | A tangent line is a line     |
| Tangent** | media/image143.png){widt | that touches a curve at a    |
|           | h="1.6569903762029747in" | single point ***[without     |
|           | heig                     | crossing*** it  |
|           | ht="0.92791447944007in"} | at that point.               |
+-----------+--------------------------+------------------------------+

![](./media/image144.png)

## Angle

**Angle:** An angle is the union of two rays having a common endpoint.
The endpoint is called the vertex of the angle, and the two rays are the
sides of the angle.

!Illustration of Angle DEF, with vertex E and points D and
F.](./media/image145.jpeg)

Angle creation is a dynamic process. We start with two rays lying on top
of one another. We leave one fixed in place and rotate the other.

The fixed ray is the **initial side**, and the rotated ray is the
**terminal side**. In order to identify the different sides, we indicate
the rotation with a small arc and arrow close to the vertex.

![](./media/image146.png)

**Positive and Negative Angles:**

**Positive Angle:** An angle is positive when it's initial side begins
on the positive x axis and rotates counter-clockwise.

**Negative Angle:** An angle is negative when its initial side begins on
the positive x axis and rotates clockwise.

!Positive and Negative Angles -- Definitions with
Examples](./media/image147.jpeg)

**Naming an angle:** Angles are named using 3 points.

![A diagram of a triangle Description automatically
generated](./media/image148.png)

The **vertex** is always the center point in the name of the angle. It
will be surrounded by the arm names.

Angle BOR is equal to angle ROB. Only the central, vertex letter is
required to be fixed in one place.

### Types of Angles

**Types of Angles:**

  -----------------------------------------------------------------------
  **Acute**              **Angle \< 90**°
  ---------------------- ------------------------------------------------
  **Obtuse**             **90**° **\< Angle \< 180**°

  **Right**              **90**°

  **Straight**           **180**°

  **Reflex**             **Angle \> 180**°

  **Complete angle /     **360**°
  Full Angle**           

  **Coterminal**         **Any angle sharing the same position, separated
                         by multiples of 360.**
  -----------------------------------------------------------------------

![](./media/image149.png)![A diagram of angles and angles
Description automatically
generated](./media/image150.png)

### Angle Relationships

**Angle Relationships**

+--------------+-------------------+-----------------------------------+
| Congruent    |                   |                                   |
+==============+===================+===================================+
| Adjacent     | ![]               | Two angles which share a common   |
|              | (./media/image151 | vertex and side, but have no      |
|              | .png) |                                   |
+--------------+-------------------+-----------------------------------+
| Vertical     | ![]               | The angles opposite each other    |
|              | (./media/image152 | when two lines cross. Angles 1    |
|              | .png) | and 4.                            |
|              |                   |                                   |
|              |                   | ***Vertical angles are named    |
|              |                   | such because they share a         |
|              |                   | vertex.***   |
|              |                   |                                   |
|              |                   | ***Vertical angles are formed   |
|              |                   | whenever lines intersect at a     |
|              |                   | point.***    |
+--------------+-------------------+-----------------------------------+
| C            | ![                | The angles in matching corners    |
| orresponding | ](./media/image15 | when two lines are crossed by     |
| Angles       | 3.png) | equals if the two intersected     |
|              |                   | lines by the transversal are      |
|              |                   | parallel. 1 is external and 2 is  |
|              |                   | internal.                         |
+--------------+-------------------+-----------------------------------+
| C            | ![]               | Two angles are called             |
| omplementary | (./media/image154 | complementary when their sum is   |
|              | .png) |                                   |
+--------------+-------------------+-----------------------------------+
| S            | ![]               | Two angles are called             |
| upplementary | (./media/image155 | supplementary when their sum is   |
|              | .png) |                                   |
+--------------+-------------------+-----------------------------------+
| Alternate    | ![]               | Angles that are on opposite sides |
| Exterior     | (./media/image156 | of the transversal of two other   |
|              | .png) | parallel. In the figure, angles 1 |
|              |                   | and 4 are alternate exterior      |
|              |                   | angles.                           |
+--------------+-------------------+-----------------------------------+
| Alternate    | ![]               | Angles that are on opposite sides |
| Interior     | (./media/image157 | of the transversal of two other   |
|              | .png) | parallel. In the figure, angles 2 |
|              |                   | and 3 are alternate interior      |
|              |                   | angles.                           |
+--------------+-------------------+-----------------------------------+

## Angle Measurements

### Degree

**Degree:** A degree, usually denoted by °, is a measurement of a plane
angle in which one full rotation is 360°.

1° is equal to π /180.

1° is equal to 1/360 of a circular rotation.

![A green circle with a blue and white circle Description automatically
generated](./media/image158.png)

### Minute

**Minute:** When measuring angles, a minute is 1/60^th^ of a degree. The
symbol for minute is '

1° = 60'

### Second

**Second:** When measuring angles, a second is 1/60^th^ of a minute. The
symbol for second is ''.

1' = 60''

### Radian

**Radian:** One radian is defined as the *[angle*
**subtended** from the center of a circle which intercepts an arc equal
in length to the radius of the circle.

Radian is a measurement of ANGLE.

1 Radian is 1 "radius-worth" of angle.

***If you take a radius of 1 and "stretch it out" along the boundary of
the unit circle, this arc length subtends an angle equal to 1
radius.***

Radian is a UNITLESS MEASUREMENT. It is unitless because it is the
result of dividing two distances having the same unit, so the units
cancel out and a dimensionless number is left.

**Subtended angle:** In geometry, an angle is subtended by an arc, line
segment or any other section of a curve, when its two rays pass through
the endpoints of that arc, line segment or curve section.

![A diagram of a circle with text Description automatically
generated](./media/image159.png)

![](./media/image160.png)

!Radian - Formula, Definition \| Radians and
Degrees](./media/image161.png)

### Reference Angle

**Reference Angle:** The reference angle is the smallest possible angle
made by the terminal side of the given angle with the x-axis.

It is always an acute angle (except when it is exactly 90
degrees).

A reference angle is always positive irrespective of which side of the
axis it is falling.

![reference angle](./media/image162.png)

A reference angle is an angle falling within quadrant 1 which is
equivalent by reflection to an angle in some other quadrant.

This concept is useful because it allows you to work with any angle by
referring to their equivalent angle in the first quadrant.

**Rules for Reference Angles in Each Quadrant**

  ----------------------------------------------------------------------------
  **Quadrant**   **Angle, θ**      **Reference Angle     **Reference Angle
                                   Formula in Degrees**  Formula in Radians**
  -------------- ----------------- --------------------- ---------------------
  **I**          **lies between 0° **θ**                 **θ**
                 and 90°**                               

  **II**         **lies between    **180 - θ**           **π - θ**
                 90° and 180°**                          

  **III**        **lies between    **θ - 180**           **θ - π**
                 180° and 270°**                         

  **IV**         **lies between    **360 - θ**           **2π - θ**
                 270° and 360°**                         
  ----------------------------------------------------------------------------

## Trigonometric Functions

**Trigonometric Functions: Trigonometric functions** are real functions
which relate an angle θ of a right-angled triangle to ratios of two of
its side lengths.

-   Trig functions relate an angle θ of a right triangle to the ratios
    of 2 of its side lengths.

There are 6 basic trig functions which have as their domain value the
angle of a right triangle and have a numerical value representing the
ratio of 2 sides of a right triangle as their range.

-   **Domain**: The domain values of θ are angles in degrees or radians
    from a right triangle

-   **Range**: A numerical value representing the ratio of 2 sides of a
    right-angled triangle.

Consider an angle in standard position, such that the point (x, y) on
the terminal side of the angle is a point on a circle with radius 1:

![](./media/image163.png)

This circle is called the unit circle. With r = 1, we can define the
trigonometric functions in the unit circle:

![A math equations with numbers Description automatically generated with
medium confidence](./media/image164.png)

### Sine

**Sine (sin):** The output is the *[y-coordinate of the corresponding
point on the unit circle.*

The sine of an angle θ equals the **y-value** of the endpoint on the
unit circle of an arc of length *t*.

#### Graphing Sine

**Graphing Sine:**

$$A sin(Bx + C) + D$$

**\|A\|** is the **amplitude**

**2pi/\|B\|** is the **period**

**C** is the **phase shift**

**D** is the **vertical shift**

**Amplitude:** The amplitude determines the height of the wave from the
midline (vertical displacement) to the peak or trough.

![](./media/image165.png)

**Period / Wavelength:** The period is the length of one complete cycle
of the wave.

The period is given by : 2pi / \|B\|

!Period of the Sine Function - Formulas and Examples -
Neurochispas](./media/image166.jpeg)

**Phase Shift:** The phase shift determines the *[horizontal
displacement of the wave*, along x-axis.

The phase shift is given by -C/B

The phase shift effectively controls where on the x-axis the graph
begins. Normally, the graph begins at the origin, but phase shift will
result in some horizontal displacement along the x-axis.

**Vertical Shift:** The vertical shift moves the entire wave up or down
along the y-axis.

![A graph of a function Description automatically
generated](./media/image167.png)

![A diagram of maths Description automatically
generated](./media/image168.png)

### Cosine

**Cosine (cos):** The output is the *[x-coordinate of the corresponding
point on the unit circle*.

The cosine function of an angle θ equals the **x-value** of the endpoint
on the unit circle of an arc of length *t*.

### Tangent

**Tangent (tan):** The output is the ratio of the y-coordinate to the
x-coordinate of the corresponding point on the unit circle:
$\frac{y}{x}$

The tangent of an angle is the ratio of the y-value to the x-value of
the corresponding point on the unit circle.

### Cotangent

**Cotangent:** The cotangent function is the reciprocal of the tangent
function.

The output is the ratio of the y-coordinate to the x-coordinate of the
corresponding point on the unit circle: y/x

### Secant

**Secant:** The secant function is the reciprocal of the cosine
function.

The secant of angle t is equal to 1/cost = 1/x , x≠0.

### Cosecant

**Cosecant:** The cosecant is the reciprocal of the sine function.

The cosecant of angle t is equal to 1/sin(t) = 1/y , y≠0.

![A diagram of a trigonometry Description automatically
generated](./media/image169.png)

Key Elements of the Diagram:

**Unit Circle:** The circle shown is the unit circle, which has a radius
of 1. Any point on the unit circle satisfies the equation:
$x^{2} + y^{2} = 1$

**Angle θ:** The angle θ is measured from the positive x-axis to a line
segment that intersects the circle:

![A circle with a point in the center Description automatically
generated](./media/image170.png)

**sin θ:** Represented by the vertical line segment from the point on
the circle down to the x-axis.

It is the y-coordinate of the point on the unit circle

![](./media/image171.png)

**cos θ:** Represented by the horizontal line segment from the origin to
the point directly below the intersection of the circle and the angle 𝜃.

It is the x-coordinate of the point on the unit circle.

**tan θ:** Represented by the line segment extending from the circle to
the tangent line that touches the unit circle at the x-coordinate: x =
1.

It is the ratio of the sine to the cosine (sin 𝜃/cos 𝜃).

**cot 𝜃:** Represented by the line segment extending from the circle to
the tangent line that touches the unit circle at the y-coordinate: y=1.

It is the ratio of the cosine to the sine (cos 𝜃/sin 𝜃).

## Trigonometric Identities

**Trigonometric Identities:**

**sin 𝜃 :** $\frac{\mathbf{opp}}{\mathbf{hyp}}$

**cos 𝜃 :** $\frac{\mathbf{adj}}{\mathbf{hyp}}$

**tan 𝜃 :** $\frac{\mathbf{opp}}{\mathbf{adj}}$ **= sinx/cosx**

**cot 𝜃 :** $\frac{\mathbf{1}}{\mathbf{tan }\mathbf{\theta}}$ **=**
$\frac{\mathbf{adj}}{\mathbf{opp}}$

**sec 𝜃 :** $\frac{\mathbf{1}}{\mathbf{cos }\mathbf{\theta}}$

**csc 𝜃 :** $\frac{\mathbf{1}}{\mathbf{sin }\mathbf{\theta}}$

### Pythagorean Identities

**Pythagorean Identities:** For any angle 𝜃

1.  $\sin^{2}\theta + \cos^{2}\theta = 1$

2.  ${1 + cot}^{2}\theta =  \csc^{2}\theta$

3.  ${1 + tan}^{2}\theta =  \sec^{2}\theta$

![A white paper with black text Description automatically
generated](./media/image172.png)

### Sum & Difference Identities

**Sum & Difference Identities:** The sum and difference identities allow
you to express trigonometric functions of non-standard angles *[in terms
of the trigonometric functions of standard angles (e.g., 0°, 30°, 45°,
60°, 90°, etc.)*. These identities are particularly useful
for angles that can be expressed as sums or differences of these
standard angles.

**Some angles do not appear on the unit circle, but can be made by
adding or subtracting angles which are found in the unit
circle.**

### Double Angle Formulas

**Double Angle Formulas**: A \"double angle\" refers to an angle that is
twice the measure of another angle. In trigonometry, double angle
formulas are used to express trigonometric functions of twice an angle
(2A) in terms of trigonometric functions of the original angle (A).

These formulas simplify expressions and solve problems involving angles
that are multiples of a given angle.

### Half Angle Formulas

**Half Angle Formulas:** The half-angle formulas are trigonometric
identities that express the trigonometric functions of half an angle in
terms of the trigonometric functions of the original angle.

### Sum-to-product Formulas

**Sum-to-product Formulas:** The **sum-to-product** and
**product-to-sum** formulas are trigonometric identities that allow you
to convert sums or differences of trigonometric functions into products
and vice versa.

### Product-to-sum Formulas

**Product-to-sum Formulas:** The **sum-to-product** and
**product-to-sum** formulas are trigonometric identities that allow you
to convert sums or differences of trigonometric functions into products
and vice versa.

## Unit Circle

**Unit Circle:** A unit circle has a center at (0,0) and radius 1. The
length of the intercepted arc is equal to the radian measure of the
central angle t.

### Formula of a Unit Circle

**Formula of a Unit Circle:** x^2^ + y^2^ = 1

### Coordinates of the point on a circle at a given angle

**Coordinates of the point on a circle at a given angle**

On a circle of radius r at an angle of θ, we can find the coordinates of
the point (x,y) on a Circle at that angle using:

x = r \* cos(θ)

y = r \* sin(θ)

**Sine and Cosine on the Unit Circle:**

(x,y)=(cos(θ),sin(θ))

Therefore, for any angle 𝜃, the outputs of the sine and cosine
functions (sin(𝜃) and cos(θ)) represent the y and x coordinates,
respectively, of a point on the unit circle. This fundamental
relationship between the unit circle and the trigonometric functions is
a cornerstone of trigonometry.

### Drawing the Unit Circle

**Drawing the Unit Circle**

1)  Divide circle by **30**°**.**

!Polar Grid In Degrees With Radius 1 \| ClipArt
ETC](./media/image173.gif)

2)  Finish by dividing by **45**° **markers.** Notice how the **45**°
    interval markers divide the **central 30**° **segment** into 2 equal
    parts**.**

!Blank Unit Circle Chart Printable \| Fill in the Unit Circle
Worksheet](./media/image174.png)

3)  **Because** π **= 180**°**,** when we divide by **30**°**,** we
    produce **6 segments. Each segment will equal** π**/6.**

The entire circle should be labeled by counting in π/6 intervals.

![](./media/image175.png)

4)  **Because** π **= 180**, when we divide by **45 degrees,** we
    produce **4 segments. Each segment will equal** π**/4.**

The entire circle should be labeled by counting up in π/4 intervals.

![](./media/image176.png)

**After reducing to lowest terms, the following circle is produced:**

![A circular math graph with numbers and lines Description automatically
generated with medium
confidence](./media/image177.png)

**Looking at the circle divided by** π**/3 can also be useful, because
some segments will reduce to a multiple of 1/3^rd^.**

!Output image](./media/image178.png)

![](./media/image179.png)

!Graph of a quarter circle with angles of 0, 30, 45, 60, and 90 degrees
inscribed. Equivalence of angles in radians shown. Points along circle
are marked. ](./media/image180.jpeg)

## Defining Sine and Cosine Functions

!Illustration of an angle t, with terminal side length equal to 1, and
an arc created by angle with length t. The terminal side of the angle
intersects the circle at the point (x,y), which is equivalent to (cos t,
sin t). ](./media/image181.jpeg)

# Vector

**Vector:** A vector is a geometric object that has **magnitude
(length/size)** and **direction**.

It has an **initial point**, where it begins, and a **terminal point**,
where it ends.

Geometrically, we can picture a vector as a directed line segment, whose
length is the magnitude of the vector and with an arrow indicating the
direction.

![A blue line on a black background Description automatically
generated](./media/image182.png)

## Writing Vectors

**Writing Vectors:**

-   Lower case, boldfaced type, with or without an arrow on top such as
    **v**, **u**, **w**, $\overrightarrow{\mathbf{v}}$,
    $\overrightarrow{\mathbf{u}}$**,** $\overrightarrow{\mathbf{w}}$

-   If starting at the point A, a vector moves toward point B, we can
    write $\overrightarrow{\mathbf{AB}}$ to represent the vector.

-   Given an initial point **(0,0)** and terminal point **(a,b)**, a
    vector may be represented as **\<a,b\>**

    -   The symbol **⟨a,b⟩** has special significance. It is called the
        standard position. A vector located in the standard position
        will have an initial point **(0,0)** and terminal point
        **(a,b).**

## Position Vector

**Position Vector:** A position vector is a vector that represents the
position of a point in space relative to a reference origin. It is also
called a location vector or radius vector.

The position vector is typically defined with respect to the origin of
the coordinate system. The origin is the point where all the coordinates
are zero.

The position vector will "point" from the origin of the coordinate
system to the terminal point.

There are many advantages to converting vectors into position vectors:

### Calculate the Position Vector

**Calculate the Position Vector**

![A math equation with black text Description automatically generated
with medium
confidence](./media/image183.png)

## Unit Vector

**Unit Vector:** Similarly to the unit circle, a unit vector has a
magnitude of 1.

A vector can be scaled "off" the unit vector.

Because scalars only change the magnitude of a vector and not the
direction, the vector will still be oriented in the same direction after
having been scaled.

A unit vector is similar to a position vector, except it has the
additional restriction that the magnitude must be 1.

### Unit Vector vs Position Vector

**Unit Vector vs Position Vector**

## Magnitude

**Magnitude:** The magnitude of a vector is depicted by two vertical
bars surrounding the vector:

\|\|a\|\|

**Vector magnitude** is calculated using the distance formula:

$$\left| |a| \right| = \sqrt{x^{2} + y^{2}}$$

## Scalar

**Scalars:** A scalar is just a number, having size/magnitude only.
Remember, vectors have magnitude and direction. Scalars lack direction
and only have magnitude.

Scalars are often used to "scale" vectors by a constant factor.

## Vector Operations

### Vector Addition

**Vector Addition:** Add corresponding components.

For vectors $\vec{u} = \langle u_1, u_2 \rangle$ and $\vec{v} = \langle v_1, v_2 \rangle$:

$$\vec{u} + \vec{v} = \langle u_1 + v_1, u_2 + v_2 \rangle$$

**Geometric Interpretation:** Place tail of $\vec{v}$ at head of $\vec{u}$, or use parallelogram rule.

**Example 1:** $\langle 3, 4 \rangle + \langle 1, 2 \rangle = \langle 4, 6 \rangle$

**Example 2:** $\langle -2, 5 \rangle + \langle 3, -1 \rangle = \langle 1, 4 \rangle$

**Properties:**
- **Commutative:** $\vec{u} + \vec{v} = \vec{v} + \vec{u}$
- **Associative:** $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$
- **Identity:** $\vec{u} + \vec{0} = \vec{u}$

### Vector Subtraction

**Vector Subtraction:** Subtract corresponding components.

$$\vec{u} - \vec{v} = \langle u_1 - v_1, u_2 - v_2 \rangle$$

**Geometric Interpretation:** Vector from head of $\vec{v}$ to head of $\vec{u}$.

**Example:** $\langle 5, 7 \rangle - \langle 2, 3 \rangle = \langle 3, 4 \rangle$

### Scalar Multiplication

**Scalar Multiplication:** Multiply each component by the scalar.

$$c\vec{v} = c\langle v_1, v_2 \rangle = \langle cv_1, cv_2 \rangle$$

**Effect:**
- Changes magnitude by factor $|c|$
- Reverses direction if $c < 0$
- Does not change direction if $c > 0$

**Example 1:** $3\langle 2, -1 \rangle = \langle 6, -3 \rangle$

**Example 2:** $-2\langle 1, 4 \rangle = \langle -2, -8 \rangle$

**Properties:**
- $c(\vec{u} + \vec{v}) = c\vec{u} + c\vec{v}$
- $(c + d)\vec{v} = c\vec{v} + d\vec{v}$
- $c(d\vec{v}) = (cd)\vec{v}$
- $1\vec{v} = \vec{v}$

### Magnitude (Length)

**Magnitude:** The length of vector $\vec{v} = \langle v_1, v_2 \rangle$:

$$|\vec{v}| = \sqrt{v_1^2 + v_2^2}$$

**3D:** For $\vec{v} = \langle v_1, v_2, v_3 \rangle$:

$$|\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

**Examples:**

1. $|\langle 3, 4 \rangle| = \sqrt{9 + 16} = 5$
2. $|\langle -2, 5 \rangle| = \sqrt{4 + 25} = \sqrt{29}$
3. $|\langle 1, 2, 2 \rangle| = \sqrt{1 + 4 + 4} = 3$

### Unit Vector

**Unit Vector:** A vector with magnitude 1.

To find unit vector in direction of $\vec{v}$:

$$\hat{v} = \frac{\vec{v}}{|\vec{v}|}$$

**Example:** Find unit vector for $\vec{v} = \langle 3, 4 \rangle$

$$|\vec{v}| = 5$$

$$\hat{v} = \frac{1}{5}\langle 3, 4 \rangle = \langle \frac{3}{5}, \frac{4}{5} \rangle$$

Check: $|\hat{v}| = \sqrt{(3/5)^2 + (4/5)^2} = \sqrt{9/25 + 16/25} = 1$ ✓

### Dot Product (Scalar Product)

**Dot Product:** For $\vec{u} = \langle u_1, u_2 \rangle$ and $\vec{v} = \langle v_1, v_2 \rangle$:

$$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2$$

**Result is a scalar, not a vector.**

**Geometric Form:**

$$\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}|\cos\theta$$

Where $\theta$ is the angle between the vectors.

**Example 1:** $\langle 2, 3 \rangle \cdot \langle 4, -1 \rangle = 2(4) + 3(-1) = 8 - 3 = 5$

**Example 2:** $\langle 1, 0 \rangle \cdot \langle 0, 1 \rangle = 0$ (perpendicular vectors)

**Properties:**
- **Commutative:** $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$
- **Distributive:** $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$
- $\vec{v} \cdot \vec{v} = |\vec{v}|^2$

**Finding Angle Between Vectors:**

$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|}$$

**Example:** Find angle between $\vec{u} = \langle 1, 0 \rangle$ and $\vec{v} = \langle 1, 1 \rangle$

$$\cos\theta = \frac{1}{\sqrt{1}\sqrt{2}} = \frac{1}{\sqrt{2}}$$

$$\theta = 45° = \frac{\pi}{4}$$

**Orthogonality (Perpendicular Vectors):**

Two vectors are **orthogonal** (perpendicular) if and only if:

$$\vec{u} \cdot \vec{v} = 0$$

### Cross Product (Vector Product)

**Cross Product:** For 3D vectors $\vec{u} = \langle u_1, u_2, u_3 \rangle$ and $\vec{v} = \langle v_1, v_2, v_3 \rangle$:

$$\vec{u} \times \vec{v} = \langle u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1 \rangle$$

**Result is a vector perpendicular to both $\vec{u}$ and $\vec{v}$.**

**Determinant Form:**

$$\vec{u} \times \vec{v} = \begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3
\end{vmatrix}$$

**Magnitude:**

$$|\vec{u} \times \vec{v}| = |\vec{u}||\vec{v}|\sin\theta$$

Where $\theta$ is the angle between vectors.

**Example:** $\langle 1, 0, 0 \rangle \times \langle 0, 1, 0 \rangle$

$$= \langle 0(0) - 0(1), 0(0) - 1(0), 1(1) - 0(0) \rangle = \langle 0, 0, 1 \rangle$$

**Properties:**
- **NOT commutative:** $\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})$ (anti-commutative)
- **Distributive:** $\vec{u} \times (\vec{v} + \vec{w}) = \vec{u} \times \vec{v} + \vec{u} \times \vec{w}$
- $\vec{v} \times \vec{v} = \vec{0}$ (parallel vectors have zero cross product)
- **Right-hand rule:** Direction given by right-hand rule

**Applications:**
- Finding normal vector to plane
- Computing area of parallelogram: $|\vec{u} \times \vec{v}|$
- Torque in physics

### Projection

**Vector Projection:** The projection of $\vec{u}$ onto $\vec{v}$ is:

$$\text{proj}_{\vec{v}}\vec{u} = \frac{\vec{u} \cdot \vec{v}}{|\vec{v}|^2}\vec{v}$$

**Scalar Projection (Component):**

$$\text{comp}_{\vec{v}}\vec{u} = \frac{\vec{u} \cdot \vec{v}}{|\vec{v}|}$$

**Example:** Project $\vec{u} = \langle 3, 4 \rangle$ onto $\vec{v} = \langle 1, 0 \rangle$

$$\text{proj}_{\vec{v}}\vec{u} = \frac{3(1) + 4(0)}{1^2 + 0^2}\langle 1, 0 \rangle = 3\langle 1, 0 \rangle = \langle 3, 0 \rangle$$

# Permutation

**Permutation:** A permutation refers to an arrangement of elements in a specific order. The order matters in permutations.

**Permutation Formula (without repetition):**

$$P(n,r) =  \frac{n!}{(n - r)!}$$

Alternate notation: $_nP_r$ or $P_r^n$

**Where:**

- **n:** The total number of items in the set
- **r:** The number of items to select and arrange
- **(n-r)!:** The number of ways to arrange the remaining elements not chosen

**Special case:** When selecting all n items: $P(n,n) = n!$

**Examples:**

1. **How many ways can you arrange 3 books from a shelf of 5 books?**
   
   $P(5,3) = \frac{5!}{(5-3)!} = \frac{5!}{2!} = \frac{120}{2} = 60$

2. **How many 4-digit PIN codes can be formed using digits 0-9 without repetition?**
   
   $P(10,4) = \frac{10!}{6!} = 10 \times 9 \times 8 \times 7 = 5040$

3. **How many ways can 5 people be arranged in a line?**
   
   $P(5,5) = 5! = 120$

## Permutations with Repetition

**Permutations with Repetition:** When elements can be repeated, the formula changes.

**Formula:**

$$n^r$$

Where:
- **n:** Number of choices for each position
- **r:** Number of positions to fill

**Example:** How many 4-digit PIN codes can be formed using digits 0-9 **with repetition allowed**?

$10^4 = 10000$ possible codes

## Permutations with Indistinguishable Objects

**Formula:** When you have n objects where some are identical:

$$\frac{n!}{n_1! \cdot n_2! \cdot \ldots \cdot n_k!}$$

Where:
- **n:** Total number of objects
- **$n_1, n_2, \ldots, n_k$:** Number of each type of identical object

**Example:** How many distinct arrangements of the letters in "MISSISSIPPI"?

- Total letters: 11
- M: 1, I: 4, S: 4, P: 2

$$\frac{11!}{1! \cdot 4! \cdot 4! \cdot 2!} = \frac{39916800}{1 \cdot 24 \cdot 24 \cdot 2} = 34650$$

# Combination

**Combination:** A combination refers to a selection of items from a larger set, where the **order does not matter**. Unlike permutations, where order is important, combinations consider only which items are selected, not the arrangement.

**Combination Formula (without repetition):**

$$C(n,r) = \binom{n}{r} =  \frac{n!}{r!(n - r)!}$$

Alternate notation: $_nC_r$ or $C_r^n$ or $\binom{n}{r}$ ("n choose r")

**Where:**

- **n:** The total number of items in the set
- **r:** The number of items to select
- **r!:** Divides out the arrangements within the selection (since order doesn't matter)

**Relationship to Permutations:**

$$C(n,r) = \frac{P(n,r)}{r!}$$

Combinations are permutations divided by the number of ways to arrange r items, because order doesn't matter.

**Examples:**

1. **How many ways can you choose 3 books from a shelf of 5 books?**
   
   $C(5,3) = \frac{5!}{3! \cdot 2!} = \frac{120}{6 \cdot 2} = 10$

2. **A pizza shop offers 10 toppings. How many 3-topping pizzas can you make?**
   
   $C(10,3) = \frac{10!}{3! \cdot 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$

3. **A committee of 4 people must be formed from a group of 12. How many ways?**
   
   $C(12,4) = \frac{12!}{4! \cdot 8!} = 495$

## Properties of Combinations

**Symmetry Property:**

$$\binom{n}{r} = \binom{n}{n-r}$$

Choosing r items is the same as choosing which (n-r) items to leave out.

**Example:** $\binom{5}{2} = \binom{5}{3} = 10$

**Pascal's Identity:**

$$\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$$

This forms Pascal's Triangle:

```
         1
       1   1
     1   2   1
   1   3   3   1
 1   4   6   4   1
1  5  10  10  5  1
```

Each number is the sum of the two numbers above it.

**Connection to Binomial Theorem:**

$\binom{n}{r}$ represents the coefficient of $x^r$ in the expansion of $(1+x)^n$.

## Combinations with Repetition

**Formula:** When items can be selected more than once:

$$C(n+r-1, r) = \binom{n+r-1}{r} = \frac{(n+r-1)!}{r!(n-1)!}$$

Where:
- **n:** Number of different types of items
- **r:** Number of items to select (repetition allowed)

**Example:** How many ways can you select 3 donuts from 5 types if you can choose the same type multiple times?

$$C(5+3-1, 3) = C(7,3) = \frac{7!}{3! \cdot 4!} = 35$$

## Permutation vs Combination Summary

| Aspect | Permutation | Combination |
|--------|-------------|-------------|
| **Order matters?** | Yes | No |
| **Formula** | $\frac{n!}{(n-r)!}$ | $\frac{n!}{r!(n-r)!}$ |
| **Example** | Arranging books | Selecting books |
| **Relationship** | $C(n,r) = \frac{P(n,r)}{r!}$ | $P(n,r) = C(n,r) \cdot r!$ |

**Key Question to Ask:** Does the order of selection matter?

- **Yes** → Use Permutation
- **No** → Use Combination

# Graph Theory

**Graph Theory:** The mathematical study of graphs, which are structures used to model pairwise relations between objects. Graphs consist of vertices (nodes) connected by edges (links).

**Applications:**
- Computer networks and routing
- Social network analysis
- Transportation and logistics
- Circuit design
- Molecular structures in chemistry
- Scheduling and resource allocation

## Basic Definitions

### Graph

**Graph:** A graph G = (V, E) consists of:
- V: A set of vertices (also called nodes)
- E: A set of edges (also called links or arcs)

**Example:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- A
    A --- C
```

This graph has:
- V = {A, B, C, D} (4 vertices)
- E = {AB, BC, CD, DA, AC} (5 edges)

### Vertex (Node)

**Vertex:** A fundamental unit in a graph, representing an object or point.

**Notation:** Usually labeled with letters (A, B, C) or numbers (1, 2, 3)

### Edge (Link, Arc)

**Edge:** A connection between two vertices.

**Notation:** An edge between vertices u and v is written as (u,v) or {u,v}

**Types:**
- **Undirected edge:** Connection with no direction (e.g., friendship)
- **Directed edge (arc):** Connection with direction (e.g., following on social media)

### Directed vs Undirected Graphs

**Undirected Graph:** A graph where edges have no direction. If there is an edge between u and v, you can traverse it in either direction.

**Formal definition:** G = (V, E) where E is a set of unordered pairs {u, v}

```mermaid
graph LR
    A --- B
    B --- C
    C --- A
```

**Examples:**
- Friendship networks (mutual relationships)
- Road networks (two-way streets)
- Physical connections (cables, pipes)

**Directed Graph (Digraph):** A graph where edges have direction. An edge from u to v does not imply an edge from v to u.

**Formal definition:** G = (V, E) where E is a set of ordered pairs (u, v)

```mermaid
graph LR
    A --> B
    B --> C
    C --> A
```

**Examples:**
- Social media follows (one-way relationships)
- Web page links
- Task dependencies
- One-way streets

### Adjacent and Incident

**Adjacent Vertices:** Two vertices are adjacent if they are connected by an edge.

**Example:**
```mermaid
graph LR
    A --- B
    B --- C
```

- A and B are adjacent
- B and C are adjacent
- A and C are NOT adjacent (no direct edge)

**Adjacent Edges:** Two edges are adjacent if they share a common vertex.

**Example:** In the graph above, edge AB and edge BC are adjacent (both connect to B)

**Incident:** An edge is incident to a vertex if the vertex is one of the edge's endpoints.

**Example:** In the graph above:
- Edge AB is incident to both A and B
- Edge BC is incident to both B and C

### Isolated, Pendant, and Null Vertices

**Isolated Vertex:** A vertex with degree 0 (no edges connected to it).

**Example:**
```mermaid
graph LR
    A --- B
    
    C
```

Vertex C is isolated (deg(C) = 0)

**Pendant Vertex (Leaf):** A vertex with degree 1 (exactly one edge connected to it).

**Example:**
```mermaid
graph LR
    A --- B
    B --- C
    B --- D
```

Vertices A, C, and D are pendant vertices (each has degree 1)

**Null Graph:** A graph with no edges (all vertices are isolated).

**Example:** A graph with vertices {A, B, C} but no edges

### Degree

**Degree of a Vertex:** The number of edges connected to a vertex.

**Notation:** deg(v) or d(v)

**Example:**

```mermaid
graph LR
    A --- B
    A --- C
    A --- D
    B --- C
```

- deg(A) = 3 (connected to B, C, D)
- deg(B) = 2 (connected to A, C)
- deg(C) = 2 (connected to A, B)
- deg(D) = 1 (connected to A)

**Handshaking Lemma:** The sum of all vertex degrees equals twice the number of edges.

**Formula:** Sum of deg(v) for all v in V = 2|E|

**Why:** Each edge contributes 1 to the degree of both its endpoints.

### In-degree and Out-degree (Directed Graphs)

**In-degree:** Number of edges pointing into a vertex.

**Out-degree:** Number of edges pointing out of a vertex.

```mermaid
graph LR
    A --> B
    C --> B
    B --> D
```

- deg⁻(B) = 2 (in-degree: A→B, C→B)
- deg⁺(B) = 1 (out-degree: B→D)

## Special Types of Graphs

### Complete Graph

**Complete Graph (Kₙ):** A graph where every pair of vertices is connected by an edge.

**K₃ (Triangle):**

```mermaid
graph LR
    A --- B
    B --- C
    C --- A
```

**K₄:**

```mermaid
graph LR
    A --- B
    A --- C
    A --- D
    B --- C
    B --- D
    C --- D
```

**Properties:**
- Kₙ has n vertices
- Kₙ has n(n-1)/2 edges
- Every vertex has degree n-1

### Cycle Graph

**Cycle Graph (Cₙ):** A graph forming a single closed loop with n vertices.

**C₄:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- A
```

**C₅:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- E
    E --- A
```

**Properties:**
- Cₙ has n vertices and n edges
- Every vertex has degree 2
- Minimum cycle length is 3 (triangle)

### Path Graph

**Path Graph (Pₙ):** A graph forming a single path with n vertices.

**P₄:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
```

**Properties:**
- Pₙ has n vertices and n-1 edges
- Two vertices has degree 1 (endpoints)
- All other vertices have degree 2

### Bipartite Graph

**Bipartite Graph:** A graph whose vertices can be divided into two disjoint sets such that every edge connects a vertex in one set to a vertex in the other set.

**Example:**

```mermaid
graph LR
    A1[A] --- B1[D]
    A1 --- B2[E]
    A2[B] --- B1
    A2 --- B2
    A3[C] --- B1
    A3 --- B2
```

- Set 1: {A, B, C}
- Set 2: {D, E}
- No edges within the same set

**Complete Bipartite Graph (K_{m,n}):** Every vertex in one set is connected to every vertex in the other set.

**Properties:**
- Bipartite if and only if the graph contains no odd-length cycles
- Applications: Matching problems, scheduling

### Tree

**Tree:** A connected graph with no cycles.

**Example:**

```mermaid
graph TD
    A --- B
    A --- C
    B --- D
    B --- E
    C --- F
```

**Properties:**
- A tree with n vertices has exactly n-1 edges
- There is exactly one path between any two vertices
- Removing any edge disconnects the graph
- Adding any edge creates exactly one cycle

**Rooted Tree:** A tree with one vertex designated as the root.

```mermaid
graph TD
    A[Root] --> B
    A --> C
    B --> D
    B --> E
    C --> F
```

**Terms:**
- **Root:** The top vertex (A)
- **Parent:** Vertex directly above (A is parent of B and C)
- **Child:** Vertex directly below (B and C are children of A)
- **Leaf:** Vertex with no children (D, E, F)
- **Height:** Maximum distance from root to any leaf

### Forest

**Forest:** A graph consisting of multiple disconnected trees.

```mermaid
graph TD
    A --- B
    A --- C
    
    D --- E
    E --- F
```

This forest has 2 trees (components).

## Graph Representation

### Adjacency Matrix

**Adjacency Matrix:** A matrix where entry A[i][j] = 1 if there's an edge from vertex i to vertex j, otherwise 0.

**Example:**

```mermaid
graph LR
    1 --- 2
    1 --- 3
    2 --- 3
```

**Adjacency Matrix:**

|   | 1 | 2 | 3 |
|---|---|---|---|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 0 | 1 |
| 3 | 1 | 1 | 0 |

**Properties:**
- Symmetric for undirected graphs
- Space complexity: O(V²)
- Edge lookup: O(1)

### Adjacency List

**Adjacency List:** Each vertex stores a list of its adjacent vertices.

**Example (same graph):**

```
1: [2, 3]
2: [1, 3]
3: [1, 2]
```

**Properties:**
- Space complexity: O(V + E) (more efficient for sparse graphs)
- Edge lookup: O(deg(v))

### Edge List

**Edge List:** A simple list of all edges.

**Example:**

```
[(1,2), (1,3), (2,3)]
```

**Properties:**
- Space complexity: O(E)
- Simple but inefficient for many operations

## Paths and Connectivity

### Path

**Path:** A sequence of vertices where each consecutive pair is connected by an edge, with no repeated vertices.

**Example:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- E
```

Path from A to E: A → B → C → D → E

**Path Length:** The number of edges in the path (4 edges in the example above)

### Walk

**Walk:** Like a path, but vertices and edges can be repeated.

**Example:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- A
```

Walk: A → B → C → A → B (vertices A and B repeated)

### Cycle

**Cycle:** A path that starts and ends at the same vertex (with at least 3 vertices in simple cycles).

**Example:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- A
```

Cycle: A → B → C → D → A

### Connected Graph

**Connected Graph:** A graph where there is a path between every pair of vertices.

**Connected:**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
```

**Disconnected:**

```mermaid
graph LR
    A --- B
    
    C --- D
```

**Connected Components:** Maximal connected subgraphs.

The disconnected graph above has 2 connected components: {A, B} and {C, D}.

## Graph Algorithms

### Depth-First Search (DFS)

**DFS:** Explores as far as possible along each branch before backtracking.

**Algorithm:**
1. Start at a vertex
2. Mark it as visited
3. Recursively visit all unvisited neighbors
4. Backtrack when no unvisited neighbors remain

**Example:**

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
```

DFS starting from A: A → B → D → E → C → F

**Applications:**
- Finding connected components
- Detecting cycles
- Topological sorting
- Solving mazes

### Breadth-First Search (BFS)

**BFS:** Explores all neighbors at the current depth before moving to the next level.

**Algorithm:**
1. Start at a vertex, add to queue
2. While queue not empty:
   - Dequeue a vertex
   - Visit all unvisited neighbors
   - Add neighbors to queue

**Example (same graph):**

BFS starting from A: A → B → C → D → E → F

**Applications:**
- Finding shortest path (unweighted graphs)
- Level-order traversal
- Testing bipartiteness

### Shortest Path

**Shortest Path Problem:** Find the path with minimum total edge weight between two vertices.

**Dijkstra's Algorithm:** Finds shortest paths from a source vertex to all other vertices (non-negative weights only).

**Example:**

```mermaid
graph LR
    A -->|2| B
    A -->|4| C
    B -->|1| C
    B -->|7| D
    C -->|3| D
```

Shortest path from A to D: A → B → C → D (weight: 2+1+3 = 6)

### Spanning Tree

**Spanning Tree:** A subgraph that includes all vertices and is a tree (connected, no cycles).

**Example:**

Original graph:
```mermaid
graph LR
    A --- B
    A --- C
    B --- C
    B --- D
    C --- D
```

One possible spanning tree:
```mermaid
graph LR
    A --- B
    A --- C
    B --- D
```

**Properties:**
- A graph with n vertices has a spanning tree with n-1 edges
- A connected graph can have multiple spanning trees

**Minimum Spanning Tree (MST):** A spanning tree with minimum total edge weight.

**Algorithms:**
- **Kruskal's Algorithm:** Add edges in order of increasing weight, skip if creates cycle
- **Prim's Algorithm:** Grow tree from starting vertex, always add minimum-weight edge

## Special Properties

### Eulerian Path and Circuit

**Eulerian Path:** A path that visits every edge exactly once.

**Eulerian Circuit:** An Eulerian path that starts and ends at the same vertex.

**Example (Eulerian Circuit):**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- A
```

Circuit: A → B → C → D → A (visits all 4 edges once)

**Theorem (Euler):**
- A connected graph has an **Eulerian circuit** if and only if every vertex has even degree
- A connected graph has an **Eulerian path** if and only if exactly 0 or 2 vertices have odd degree

### Hamiltonian Path and Circuit

**Hamiltonian Path:** A path that visits every vertex exactly once.

**Hamiltonian Circuit:** A Hamiltonian path that starts and ends at the same vertex.

**Example (Hamiltonian Circuit):**

```mermaid
graph LR
    A --- B
    B --- C
    C --- D
    D --- A
    A --- C
```

Circuit: A → B → C → D → A (visits all 4 vertices once)

**Note:** No simple theorem exists for determining if a Hamiltonian path/circuit exists (NP-complete problem).

### Graph Coloring

**Graph Coloring:** Assign colors to vertices such that no two adjacent vertices have the same color.

**Chromatic Number:** The minimum number of colors needed.

**Example:**

```mermaid
graph LR
    A --- B
    A --- C
    B --- C
```

This triangle needs 3 colors (chromatic number = 3):
- A: Red
- B: Blue  
- C: Green

**Applications:**
- Scheduling (avoiding conflicts)
- Register allocation in compilers
- Map coloring
- Sudoku solving

**Four Color Theorem:** Any planar graph can be colored with at most 4 colors.
