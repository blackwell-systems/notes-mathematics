---
title: "Partial Fraction Decomposition"
---

**Partial Fraction Decomposition:** A method for rewriting a proper rational function (where the degree of the numerator is less than the degree of the denominator) as a sum of simpler fractions. This is the inverse process of finding a common denominator.

**Prerequisite:** The rational function must be **proper**. If it is improper (degree of numerator $\geq$ degree of denominator), first perform polynomial long division to extract the polynomial part, then decompose the remaining proper fraction.

## The Four Cases

### Case 1: Distinct Linear Factors

If the denominator factors into distinct linear factors:

$$
\frac{P(x)}{(x - a_1)(x - a_2) \cdots (x - a_n)} = \frac{A_1}{x - a_1} + \frac{A_2}{x - a_2} + \cdots + \frac{A_n}{x - a_n}
$$

**Example:** Decompose $\frac{5x + 3}{(x + 1)(x - 2)}$

Set up: $\frac{5x + 3}{(x + 1)(x - 2)} = \frac{A}{x + 1} + \frac{B}{x - 2}$

Multiply both sides by $(x + 1)(x - 2)$:

$$
5x + 3 = A(x - 2) + B(x + 1)
$$

**Method 1 (strategic substitution):**

Set $x = 2$: $13 = 3B$, so $B = \frac{13}{3}$

Set $x = -1$: $-2 = -3A$, so $A = \frac{2}{3}$

**Result:** $\frac{5x + 3}{(x + 1)(x - 2)} = \frac{2/3}{x + 1} + \frac{13/3}{x - 2}$

### Case 2: Repeated Linear Factors

If a linear factor appears with multiplicity $m$:

$$
\frac{P(x)}{(x - a)^m} = \frac{A_1}{x - a} + \frac{A_2}{(x - a)^2} + \cdots + \frac{A_m}{(x - a)^m}
$$

Each power of the repeated factor gets its own term.

**Example:** Decompose $\frac{3x + 5}{(x - 1)^2}$

Set up: $\frac{3x + 5}{(x - 1)^2} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2}$

Multiply both sides by $(x - 1)^2$:

$$
3x + 5 = A(x - 1) + B
$$

Set $x = 1$: $8 = B$

Compare $x$ coefficients: $3 = A$

**Result:** $\frac{3x + 5}{(x - 1)^2} = \frac{3}{x - 1} + \frac{8}{(x - 1)^2}$

### Case 3: Distinct Irreducible Quadratic Factors

If the denominator contains an irreducible quadratic factor (one that cannot be factored over the reals):

$$
\frac{P(x)}{(ax^2 + bx + c)} = \frac{Ax + B}{ax^2 + bx + c}
$$

The numerator of the partial fraction is linear ($Ax + B$), not just a constant.

**Example:** Decompose $\frac{2x^2 + x + 3}{(x + 1)(x^2 + 1)}$

Set up: $\frac{2x^2 + x + 3}{(x + 1)(x^2 + 1)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 1}$

Multiply by $(x + 1)(x^2 + 1)$:

$$
2x^2 + x + 3 = A(x^2 + 1) + (Bx + C)(x + 1)
$$

Set $x = -1$: $2 - 1 + 3 = A(2)$, so $A = 2$

Expand and compare coefficients:

$x^2$: $2 = A + B = 2 + B$, so $B = 0$

$x^0$: $3 = A + C = 2 + C$, so $C = 1$

**Result:** $\frac{2x^2 + x + 3}{(x + 1)(x^2 + 1)} = \frac{2}{x + 1} + \frac{1}{x^2 + 1}$

### Case 4: Repeated Irreducible Quadratic Factors

If an irreducible quadratic appears with multiplicity $m$:

$$
\frac{P(x)}{(ax^2 + bx + c)^m} = \frac{A_1 x + B_1}{ax^2 + bx + c} + \frac{A_2 x + B_2}{(ax^2 + bx + c)^2} + \cdots + \frac{A_m x + B_m}{(ax^2 + bx + c)^m}
$$

**Example:** Decompose $\frac{x^3}{(x^2 + 1)^2}$

Set up: $\frac{x^3}{(x^2 + 1)^2} = \frac{Ax + B}{x^2 + 1} + \frac{Cx + D}{(x^2 + 1)^2}$

Multiply by $(x^2 + 1)^2$:

$$
x^3 = (Ax + B)(x^2 + 1) + Cx + D
$$

$$
x^3 = Ax^3 + Bx^2 + Ax + B + Cx + D
$$

Compare coefficients:

$x^3$: $1 = A$

$x^2$: $0 = B$

$x^1$: $0 = A + C = 1 + C$, so $C = -1$

$x^0$: $0 = B + D = D$, so $D = 0$

**Result:** $\frac{x^3}{(x^2 + 1)^2} = \frac{x}{x^2 + 1} + \frac{-x}{(x^2 + 1)^2}$

## Solving for Coefficients

Two main approaches:

**Strategic substitution:** Choose $x$ values that make factors zero to isolate coefficients. Fast when you have linear factors.

**Comparing coefficients:** Expand the right side, then match coefficients of like powers of $x$. Works for all cases, especially when substitution alone is not enough.

In practice, use substitution first to find as many coefficients as possible, then compare coefficients for the rest.

## Mixed Example

Decompose $\frac{x^2 + 2x + 3}{(x - 1)(x + 2)^2}$

This combines Case 1 (distinct factor $x - 1$) and Case 2 (repeated factor $(x + 2)^2$).

Set up:

$$
\frac{x^2 + 2x + 3}{(x - 1)(x + 2)^2} = \frac{A}{x - 1} + \frac{B}{x + 2} + \frac{C}{(x + 2)^2}
$$

Multiply by $(x - 1)(x + 2)^2$:

$$
x^2 + 2x + 3 = A(x + 2)^2 + B(x - 1)(x + 2) + C(x - 1)
$$

Set $x = 1$: $1 + 2 + 3 = A(9)$, so $A = \frac{2}{3}$

Set $x = -2$: $4 - 4 + 3 = C(-3)$, so $C = -1$

Compare $x^2$ coefficients: $1 = A + B$, so $B = 1 - \frac{2}{3} = \frac{1}{3}$

**Result:**

$$
\frac{x^2 + 2x + 3}{(x - 1)(x + 2)^2} = \frac{2/3}{x - 1} + \frac{1/3}{x + 2} + \frac{-1}{(x + 2)^2}
$$

## Where It Shows Up

- **Calculus:** Integration of rational functions requires partial fractions to break complex integrands into forms that can be integrated directly (each case maps to a known integral).
- **Differential equations:** Solving linear ODEs with the Laplace transform involves inverse transforms, which require partial fraction decomposition.
- **Control theory:** Transfer functions in control systems are rational functions. Partial fractions decompose them into first- and second-order components for analysis.
- **Signal processing:** Z-transforms of discrete signals are rational functions. Partial fractions enable inverse Z-transform computation.

