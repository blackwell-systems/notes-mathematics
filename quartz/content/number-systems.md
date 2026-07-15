---
title: "Number Systems"
---

The numbers we use every day did not arrive all at once. They were built up, one layer at a time, each new layer added to repair a specific limitation of the one before it. You can count with the natural numbers, but you cannot always subtract. You can subtract with the integers, but you cannot always divide. You can divide with the rationals, but you cannot always take a limit. Following this chain of "but you cannot..." is the cleanest way to understand what each number system is *for*.

This page tells that story, shows how the systems nest inside one another, and then classifies the numbers that live within them.

## The Building-Up Story

### Natural numbers $\mathbb{N}$

The symbol $\mathbb{N}$ is read "the natural numbers" (or just "N"). These are the counting numbers:

$$\mathbb{N} = \{0, 1, 2, 3, \ldots\}.$$

**A convention to settle first.** There is a genuine disagreement about whether $\mathbb{N}$ starts at $0$ or at $1$. Set theorists and logicians usually include $0$ (an empty collection has a count, namely zero); some analysis and number-theory texts start at $1$. **This site includes $0$**, so $\mathbb{N} = \{0, 1, 2, \ldots\}$. When we need the positive naturals only, we write $\mathbb{N}_{>0} = \{1, 2, 3, \ldots\}$ or $\mathbb{Z}^{+}$.

The naturals do everything counting requires. If you add two naturals you get a natural, and if you multiply two naturals you get a natural. In the language of [Algebraic Structures](./algebraic-structures), $\mathbb{N}$ is *closed* under addition and multiplication: the operation never takes you outside the set.

**But you cannot always subtract.** The expression $3 - 5$ has no answer inside $\mathbb{N}$. There is no natural number that counts "two fewer than nothing." Subtraction is only partially defined, and that is the limitation we fix next.

### Integers $\mathbb{Z}$

The symbol $\mathbb{Z}$ is read "the integers" (from the German *Zahlen*, "numbers"). We extend $\mathbb{N}$ by adjoining a negative for every positive number:

$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}.$$

Now every subtraction has an answer: $3 - 5 = -2$, and $-2$ is a bona fide integer. Concretely, each negative number $-n$ is defined to be the thing you add to $n$ to get $0$ (its *additive inverse*). Once inverses exist, subtraction is just "add the inverse," and it is defined everywhere.

The integers are closed under addition, subtraction, and multiplication. In the vocabulary of [Algebraic Structures](./algebraic-structures), $(\mathbb{Z}, +)$ is a *group* and $(\mathbb{Z}, +, \times)$ is a *ring*.

**But you cannot always divide.** The expression $1 \div 2$ has no answer inside $\mathbb{Z}$: there is no integer $n$ with $2n = 1$. Division, like subtraction before it, is only partially defined. That is the next thing to fix.

### Rational numbers $\mathbb{Q}$

The symbol $\mathbb{Q}$ is read "the rationals" (from *quotient*). We extend $\mathbb{Z}$ by adjoining a quotient $p/q$ for every pair of integers $p$ and $q$ with $q \neq 0$:

$$\mathbb{Q} = \left\{\, \frac{p}{q} \;\middle|\; p, q \in \mathbb{Z},\; q \neq 0 \,\right\}.$$

The number $\frac{p}{q}$ is read "$p$ over $q$." Two fractions name the same rational when they cross-multiply equally: $\frac{p}{q} = \frac{r}{s}$ exactly when $ps = qr$. So $\frac{1}{2} = \frac{2}{4} = \frac{3}{6}$, all the same point.

Now every division by a nonzero number has an answer, because $q/q = 1$ means every nonzero rational has a multiplicative inverse. In the terms of [Algebraic Structures](./algebraic-structures), $\mathbb{Q}$ is the first system on our list that is a *field*: you can add, subtract, multiply, and divide (except by zero) and never leave the set.

**Decimals: terminating and repeating.** Every rational, written as a decimal, either *terminates* or *eventually repeats* forever:

$$\tfrac{1}{4} = 0.25 \quad(\text{terminates}), \qquad \tfrac{1}{3} = 0.3333\ldots = 0.\overline{3} \quad(\text{repeats}),$$

where the bar in $0.\overline{3}$ marks the block of digits that repeats without end. This is not a coincidence: dividing $p$ by $q$ by long division produces only $q$ possible remainders, so a remainder must eventually recur, and once a remainder recurs the digits cycle. The converse holds too, as the worked example below shows.

**But there are gaps.** Consider the diagonal of a unit square. By the Pythagorean theorem its length $d$ satisfies $d^2 = 1^2 + 1^2 = 2$. There *ought* to be a number whose square is $2$, yet **no rational number squares to $2$**. The classic proof supposes $\sqrt{2} = p/q$ in lowest terms, deduces that $p$ and $q$ are both even, and hits a contradiction; it is carried out in full in [Real Analysis](./real-analysis), and the underlying style of argument appears in [Set Theory](./set-theory). The rationals are riddled with such holes: points the number line clearly wants but $\mathbb{Q}$ does not supply. That is the gap we fill next.

### Real numbers $\mathbb{R}$

The symbol $\mathbb{R}$ is read "the reals." Informally, the reals are all the points on a continuous, gapless number line, the rationals *together with* every irrational number like $\sqrt{2}$, $\pi$, and $e$ that fills the holes.

Making "gapless" precise is the whole content of the **completeness axiom**: every set of reals that is bounded above has a *least upper bound* inside $\mathbb{R}$. Completeness is what guarantees that $\sqrt{2}$ actually exists (it is the least upper bound of all rationals whose square is below $2$), and it is the foundation on which limits, continuity, derivatives, and integrals are built. The precise statement and its consequences are developed in [Real Analysis](./real-analysis).

$\mathbb{R}$ is a field, like $\mathbb{Q}$, but it adds completeness, and that single extra property is what makes calculus possible.

**But you still cannot solve every equation.** The equation

$$x^2 + 1 = 0$$

has no real solution, because $x^2 \geq 0$ for every real $x$, so $x^2 + 1 \geq 1 > 0$ always. No amount of filling gaps on the number line produces a square root of $-1$. That is the last limitation we fix.

### Complex numbers $\mathbb{C}$

The symbol $\mathbb{C}$ is read "the complex numbers." We adjoin a single new number $i$, read "$i$," defined by the rule

$$i^2 = -1,$$

and then take every combination $a + bi$ with $a, b \in \mathbb{R}$:

$$\mathbb{C} = \{\, a + bi \mid a, b \in \mathbb{R} \,\}.$$

Here $a$ is the *real part* and $b$ the *imaginary part*. Now $x^2 + 1 = 0$ has solutions $x = i$ and $x = -i$. The construction, arithmetic, and geometry of these numbers are covered in [Complex Numbers](./complex-numbers).

The payoff is enormous and final. The **Fundamental Theorem of Algebra** says that *every* non-constant polynomial with complex coefficients has a complex root (see [Polynomial Functions](./polynomial-functions)). We say $\mathbb{C}$ is **algebraically closed**: you can never write down a polynomial equation that forces you outside $\mathbb{C}$ to solve it. The chain of "but you cannot..." finally stops here.

## The Containment $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$

Each system we built contains the previous one as a genuine subset. The symbol $\subset$ is read "is a subset of" (see [Set Theory](./set-theory)):

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}.$$

Every natural number *is* an integer, every integer *is* a rational (write $n$ as $n/1$), every rational *is* a real, and every real $a$ *is* the complex number $a + 0i$. The systems nest like Russian dolls.

![Nested number systems: the naturals inside the integers inside the rationals inside the reals inside the complex numbers, with example numbers in each layer](./media/number-systems-containment.png)

It helps to watch a few sample numbers find their innermost home:

| Number | Innermost system it lives in | Why not the one before |
| --- | --- | --- |
| $7$ | $\mathbb{N}$ | it is a counting number |
| $-4$ | $\mathbb{Z}$ | negative, so not a natural |
| $\tfrac{3}{5}$ | $\mathbb{Q}$ | not a whole number |
| $\sqrt{2}$ | $\mathbb{R}$ | irrational, so not a rational |
| $2 + 3i$ | $\mathbb{C}$ | has a nonzero imaginary part |

Each containment is *strict* (the $\subset$, not $\subseteq$): each layer contains numbers the previous one lacks, which is exactly why we needed to build it.

## Classifying Real Numbers

Inside $\mathbb{R}$ there are two independent ways to sort numbers. The first asks whether a number is a fraction; the second asks whether it solves a polynomial.

### Rational vs irrational

A real number is **rational** if it can be written as $p/q$ with integers $p, q$ and $q \neq 0$, and **irrational** otherwise. The cleanest test is the decimal expansion:

- **Rational** $\iff$ its decimal *terminates* or *eventually repeats*. Examples: $\tfrac{1}{3} = 0.\overline{3}$, $\tfrac{1}{4} = 0.25$, $\tfrac{2}{7} = 0.\overline{285714}$.
- **Irrational** $\iff$ its decimal runs forever with *no* repeating block. Examples: $\sqrt{2} = 1.41421356\ldots$ and $\pi = 3.14159265\ldots$

The word "irrational" here means "not a *ratio*," not "unreasonable."

**Worked example: a repeating decimal is a fraction.** The forward direction of the rule (rational implies terminating-or-repeating) we sketched earlier by long division. The converse, that any repeating decimal is rational, is proved by a clean trick. Take $x = 0.\overline{3}$ and multiply by $10$ to shift one repeating block:

$$
\begin{aligned}
x &= 0.3333\ldots \\
10x &= 3.3333\ldots \\
10x - x &= 3.3333\ldots - 0.3333\ldots \\
9x &= 3 \\
x &= \tfrac{3}{9} = \tfrac{1}{3}.
\end{aligned}
$$

Subtracting cancels the entire infinite repeating tail, leaving an ordinary equation.

**Worked example: a two-digit repeat.** For $y = 0.\overline{27} = 0.272727\ldots$ the repeating block has length $2$, so we shift by $100$:

$$
100y - y = 27.2727\ldots - 0.2727\ldots \;\Longrightarrow\; 99y = 27 \;\Longrightarrow\; y = \tfrac{27}{99} = \tfrac{3}{11}.
$$

The pattern generalizes: a block of length $k$ calls for multiplying by $10^k$.

### Algebraic vs transcendental

A second, deeper classification. A real number is **algebraic** if it is a root of some nonzero polynomial with integer coefficients, and **transcendental** if it is not.

- $\sqrt{2}$ is algebraic: it is a root of $x^2 - 2 = 0$.
- The golden ratio $\varphi = \tfrac{1 + \sqrt{5}}{2}$ is algebraic: it is a root of $x^2 - x - 1 = 0$.
- Every rational $p/q$ is algebraic: it is a root of $qx - p = 0$.
- $\pi$ and $e$ are **transcendental**: no polynomial with integer coefficients has either as a root. (These facts are hard to prove; they were established in the late nineteenth century.)

The two classifications relate as follows. Every rational is algebraic, and every transcendental number is irrational, but not conversely: $\sqrt{2}$ is irrational yet still algebraic. So "algebraic" is a strictly larger, more forgiving class than "rational."

A striking fact for later: **most real numbers are transcendental.** The algebraic numbers, despite including every rational and every root you can build by hand, form a *countable* set, whereas $\mathbb{R}$ is *uncountable*. In the precise sense of the next section, the transcendental numbers vastly outnumber the algebraic ones, even though the two celebrities we can name are $\pi$ and $e$.

## How Big Are These Sets? (cardinality)

Infinite sets can still have different sizes, and the number systems split cleanly into two size classes. The sets $\mathbb{N}$, $\mathbb{Z}$, and $\mathbb{Q}$ are all **countably infinite**: their elements can be listed in an endless sequence, so they all have the *same* size, written $\aleph_0$ ("aleph-null"). Remarkably, this means there are exactly as many fractions as counting numbers. By contrast, $\mathbb{R}$ and $\mathbb{C}$ are **uncountable**: no list can exhaust them, so they are strictly larger than $\mathbb{Q}$. The proof that $\mathbb{R}$ cannot be listed (Cantor's diagonal argument) and the meaning of countability are developed in [Set Theory](./set-theory).

## Beyond the Complex Numbers

Since $\mathbb{C}$ is algebraically closed, extending it can never buy you new roots: the original motive for building each layer runs out. You can still extend further, but now every extension *trades away* a property rather than adding one. The **quaternions** $\mathbb{H}$ are four-dimensional numbers of the form $a + bi + cj + dk$; they give up *commutativity*, so multiplication depends on order ($ij = k$ but $ji = -k$), and in exchange they encode 3D rotations so cleanly that graphics and robotics rely on them. Push further and even more structure is surrendered (the octonions lose *associativity*), while entirely different constructions such as the *$p$-adic numbers* re-imagine what "close together" means. Each such system is best understood as a specific axiom deliberately given up, a perspective made precise in [Algebraic Structures](./algebraic-structures).

## Summary

| System | Symbol | Fixes | Key property gained |
| --- | --- | --- | --- |
| Naturals | $\mathbb{N}$ | counting | closed under $+, \times$ |
| Integers | $\mathbb{Z}$ | subtraction | additive inverses (a ring) |
| Rationals | $\mathbb{Q}$ | division | multiplicative inverses (a field) |
| Reals | $\mathbb{R}$ | gaps / limits | completeness |
| Complex | $\mathbb{C}$ | polynomial roots | algebraically closed |

The single sentence to remember: **each number system is the smallest one in which some previously impossible operation always works.** For how these operations are captured as axioms, see [Algebraic Structures](./algebraic-structures); for the way we actually write numbers down in binary and hexadecimal, see [Number Bases](./number-bases).
