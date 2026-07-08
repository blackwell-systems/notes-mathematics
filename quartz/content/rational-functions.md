---
title: "Rational Functions"
---

## What Is a Rational Function?

A **rational function** is what you get when you divide one polynomial by another. Just as a "rational number" is a ratio of two integers (like $\frac{3}{4}$), a rational function is a ratio of two polynomials.

### Why Dividing Polynomials Creates Interesting Behavior

When you divide two polynomials, something new happens that never occurs with polynomials alone: the denominator can equal zero. At those input values, the function is undefined, and the graph exhibits dramatic behavior. It may shoot off toward infinity (creating a **vertical asymptote**) or it may have a "missing point" (called a **hole**). As $x$ grows very large, the function may level off toward a horizontal line (a **horizontal asymptote**) or grow in a linear fashion (a **slant asymptote**).

### A Concrete Example

Consider the function:

$$f(x) = \frac{1}{x}$$

This is the simplest nontrivial rational function: the constant polynomial $1$ divided by the polynomial $x$. When $x = 0$, the function is undefined. As $x$ approaches $0$ from the right, $f(x)$ grows without bound. As $x$ becomes very large, $f(x)$ shrinks toward $0$. The graph has a vertical asymptote at $x = 0$ and a horizontal asymptote at $y = 0$.

With that intuition, here is the general definition.

## Formal Definition

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

## Slant/Oblique Asymptote - Worked Example

**Slant Asymptote:** When the degree of the numerator exceeds the degree of the denominator by exactly 1, the function has a slant (oblique) asymptote with equation y = mx + b.

**Finding Slant Asymptotes:**

Use polynomial long division to divide the numerator by the denominator. The quotient (ignoring the remainder) is the equation of the slant asymptote.

**Example:** Find the slant asymptote of $f(x) = \frac{x^2 + 3x + 2}{x + 1}$

**Step 1:** Check degrees
- Degree of numerator: 2
- Degree of denominator: 1
- Difference: 2 - 1 = 1 ✓ (slant asymptote exists)

**Step 2:** Perform polynomial long division

```
         x + 2
      ___________
x + 1 | x² + 3x + 2
        x² + x        (x · (x+1))
        -------
            2x + 2    (subtract)
            2x + 2    (2 · (x+1))
            -------
                0     (remainder)
```

**Step-by-step:**
1. Divide first term: x² ÷ x = x
2. Multiply: x(x + 1) = x² + x
3. Subtract: (x² + 3x + 2) - (x² + x) = 2x + 2
4. Divide: 2x ÷ x = 2
5. Multiply: 2(x + 1) = 2x + 2
6. Subtract: (2x + 2) - (2x + 2) = 0

**Result:** $f(x) = x + 2 + \frac{0}{x+1} = x + 2$

**Slant asymptote: y = x + 2**

**Example 2 (with non-zero remainder):** $f(x) = \frac{2x^2 - 3x + 1}{x - 2}$

```
         2x + 1
      ___________
x - 2 | 2x² - 3x + 1
        2x² - 4x      (2x · (x-2))
        ---------
              x + 1   (subtract)
              x - 2   (1 · (x-2))
              -----
                  3   (remainder)
```

**Result:** $f(x) = 2x + 1 + \frac{3}{x-2}$

**Slant asymptote: y = 2x + 1**

As x → ±∞, the remainder term $\frac{3}{x-2} \to 0$, so the function approaches the line y = 2x + 1.

**Key Points:**
- Slant asymptote is the quotient from polynomial long division
- Remainder becomes negligible as x → ±∞
- Graph approaches but never touches the asymptote (except possibly at finite points)

## End Behavior

**End Behavior:** Describes what happens to f(x) as x approaches positive infinity (x → +∞) or negative infinity (x → -∞).

**Three Cases:**

### Case 1: Degree of Numerator < Degree of Denominator

**Example:** $f(x) = \frac{x + 1}{x^2 + 1}$

As x → ±∞, the denominator grows much faster than the numerator:

- As x → +∞: f(x) → 0⁺
- As x → -∞: f(x) → 0⁺

**End behavior:** Approaches horizontal asymptote y = 0 from above.

**General rule:** When deg(P) < deg(Q), horizontal asymptote is y = 0.

### Case 2: Degree of Numerator = Degree of Denominator

**Example:** $f(x) = \frac{3x^2 + 2x + 1}{x^2 - 4}$

As x → ±∞, the highest degree terms dominate:

$$\frac{3x^2 + 2x + 1}{x^2 - 4} \approx \frac{3x^2}{x^2} = 3$$

- As x → +∞: f(x) → 3
- As x → -∞: f(x) → 3

**End behavior:** Approaches horizontal asymptote y = 3 from both directions.

**General rule:** When deg(P) = deg(Q), horizontal asymptote is y = a/b (ratio of leading coefficients).

### Case 3: Degree of Numerator > Degree of Denominator

**Example:** $f(x) = \frac{x^2 - 1}{x + 1}$

After polynomial division: $f(x) = x - 1 + \frac{0}{x+1} = x - 1$

- As x → +∞: f(x) → +∞
- As x → -∞: f(x) → -∞

**End behavior:** Follows slant asymptote y = x - 1.

**General rule:** When deg(P) > deg(Q), no horizontal asymptote. Follow oblique/polynomial asymptote.

**Summary Table:**

| Degree Comparison | End Behavior | Asymptote |
|-------------------|--------------|-----------|
| deg(P) < deg(Q) | f(x) → 0 as x → ±∞ | Horizontal: y = 0 |
| deg(P) = deg(Q) | f(x) → a/b as x → ±∞ | Horizontal: y = a/b |
| deg(P) = deg(Q) + 1 | f(x) → mx + b as x → ±∞ | Slant: y = mx + b |
| deg(P) > deg(Q) + 1 | f(x) → polynomial | Polynomial asymptote |

## Sign Analysis / Interval Testing

**Sign Analysis:** Determines where the function is positive (above x-axis) or negative (below x-axis) by testing intervals between critical points.

**Critical Points:**
1. **Zeros** (where numerator = 0) - function crosses x-axis
2. **Vertical asymptotes** (where denominator = 0) - function undefined
3. **Holes** (where common factors cancel) - function undefined

**Procedure:**

**Step 1:** Find all critical points

**Step 2:** Place critical points on a number line (these divide the line into intervals)

**Step 3:** Choose a test point in each interval

**Step 4:** Evaluate the function at each test point to determine sign

**Step 5:** Function cannot change sign within an interval (only at critical points)

**Example:** Analyze the sign of $f(x) = \frac{(x+2)(x-1)}{(x-3)}$

**Step 1:** Find critical points
- Zeros: x = -2, x = 1 (numerator = 0)
- Vertical asymptote: x = 3 (denominator = 0)

**Step 2:** Number line with critical points

```
    -2         1         3
-----|---------|---------|-----
 I       II       III      IV
```

**Step 3 & 4:** Test each interval

| Interval | Test Point | Sign of (x+2) | Sign of (x-1) | Sign of (x-3) | Sign of f(x) |
|----------|------------|---------------|---------------|---------------|--------------|
| I: x < -2 | x = -3 | - | - | - | - |
| II: -2 < x < 1 | x = 0 | + | - | - | + |
| III: 1 < x < 3 | x = 2 | + | + | - | - |
| IV: x > 3 | x = 4 | + | + | + | + |

**Step 5:** Sign diagram

```
    -2         1         3
-----|---------|---------|-----
  -      +        -        +
(below) (above) (below) (above)
```

**Interpretation:**
- f(x) < 0 (below x-axis): (-∞, -2) ∪ (1, 3)
- f(x) > 0 (above x-axis): (-2, 1) ∪ (3, ∞)
- f(x) = 0 (on x-axis): x = -2, x = 1

**Behavior at vertical asymptote (x = 3):**
- Left side: f(x) → -∞ (negative approaching from left)
- Right side: f(x) → +∞ (positive approaching from right)

**Example 2:** $f(x) = \frac{x^2 - 4}{x^2 - 1} = \frac{(x-2)(x+2)}{(x-1)(x+1)}$

**Critical points:**
- Zeros: x = -2, x = 2
- Vertical asymptotes: x = -1, x = 1

**Number line:**

```
    -2        -1         1         2
-----|---------|---------|---------|-----
  I      II       III      IV       V
```

**Test points:** x = -3, -1.5, 0, 1.5, 3

| Interval | Test x | f(x) sign | Above/Below |
|----------|--------|-----------|-------------|
| I: x < -2 | -3 | + | Above |
| II: -2 < x < -1 | -1.5 | - | Below |
| III: -1 < x < 1 | 0 | + | Above |
| IV: 1 < x < 2 | 1.5 | - | Below |
| V: x > 2 | 3 | + | Above |

## One-Sided Limits at Discontinuities

**One-Sided Limits:** Describe the behavior of a function as x approaches a discontinuity from the left (-) or right (+).

**Notation:**
- $\lim_{x \to a^-} f(x)$ means "limit as x approaches a from the left"
- $\lim_{x \to a^+} f(x)$ means "limit as x approaches a from the right"

### At Holes (Removable Discontinuities)

**Example:** $f(x) = \frac{x^2 - 1}{x - 1} = \frac{(x+1)(x-1)}{x-1}$

Simplified: $f(x) = x + 1$ for $x \neq 1$

Hole at x = 1.

**Left-hand limit:**
$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x+1) = 2$$

**Right-hand limit:**
$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (x+1) = 2$$

**Two-sided limit:**
$$\lim_{x \to 1} f(x) = 2$$

**Key property of holes:** Both one-sided limits exist and are equal. The limit exists, but f(1) is undefined.

### At Vertical Asymptotes

**Example 1:** $f(x) = \frac{1}{x - 2}$

Vertical asymptote at x = 2.

**Determine signs near x = 2:**

When x < 2 (x = 1.9): Numerator = 1 (positive), Denominator = -0.1 (negative)
→ f(x) is negative, approaching -∞

When x > 2 (x = 2.1): Numerator = 1 (positive), Denominator = 0.1 (positive)
→ f(x) is positive, approaching +∞

**One-sided limits:**
$$\lim_{x \to 2^-} f(x) = -\infty$$
$$\lim_{x \to 2^+} f(x) = +\infty$$

**Graphical behavior:** Function has a vertical asymptote at x = 2 with different signs on each side.

**Example 2:** $f(x) = \frac{1}{(x - 2)^2}$

Vertical asymptote at x = 2.

**Determine signs near x = 2:**

When x < 2 (x = 1.9): Numerator = 1 (positive), Denominator = (-0.1)² = 0.01 (positive)
→ f(x) is positive, approaching +∞

When x > 2 (x = 2.1): Numerator = 1 (positive), Denominator = (0.1)² = 0.01 (positive)
→ f(x) is positive, approaching +∞

**One-sided limits:**
$$\lim_{x \to 2^-} f(x) = +\infty$$
$$\lim_{x \to 2^+} f(x) = +\infty$$

**Graphical behavior:** Function approaches +∞ from both sides (even exponent in denominator).

**General Rule for Vertical Asymptotes:**

For $f(x) = \frac{N(x)}{(x-a)^n}$ where N(a) ≠ 0:

- **Odd exponent n:** Different signs on each side (one approaches +∞, other approaches -∞)
- **Even exponent n:** Same sign on both sides (both approach +∞ or both approach -∞)

**Example 3 (mixed):** $f(x) = \frac{x + 1}{x^2 - 4} = \frac{x+1}{(x-2)(x+2)}$

Vertical asymptotes at x = -2 and x = 2.

**At x = -2:**

Test x = -2.1: $\frac{-2.1+1}{(-2.1-2)(-2.1+2)} = \frac{-1.1}{(-4.1)(-0.1)} = \frac{-1.1}{0.41} < 0$

Test x = -1.9: $\frac{-1.9+1}{(-1.9-2)(-1.9+2)} = \frac{-0.9}{(-3.9)(0.1)} = \frac{-0.9}{-0.39} > 0$

$$\lim_{x \to -2^-} f(x) = -\infty, \quad \lim_{x \to -2^+} f(x) = +\infty$$

**At x = 2:**

Test x = 1.9: $\frac{1.9+1}{(1.9-2)(1.9+2)} = \frac{2.9}{(-0.1)(3.9)} = \frac{2.9}{-0.39} < 0$

Test x = 2.1: $\frac{2.1+1}{(2.1-2)(2.1+2)} = \frac{3.1}{(0.1)(4.1)} = \frac{3.1}{0.41} > 0$

$$\lim_{x \to 2^-} f(x) = -\infty, \quad \lim_{x \to 2^+} f(x) = +\infty$$

## Complete Graphing Example

**Problem:** Graph $f(x) = \frac{x^2 - x - 6}{x - 2}$ showing all key features.

**Step 1: Factor**

$$f(x) = \frac{(x-3)(x+2)}{x-2}$$

**Step 2: Domain**

Denominator = 0 when x = 2

Domain: (-∞, 2) ∪ (2, ∞)

**Step 3: Holes**

No common factors between numerator and denominator.

No holes.

**Step 4: Vertical Asymptotes**

Denominator = 0 at x = 2 (and not cancelled)

Vertical asymptote: **x = 2**

**Step 5: Horizontal/Slant Asymptote**

Degree of numerator (2) > degree of denominator (1) by 1

Slant asymptote exists. Use polynomial long division:

```
         x + 1
      ___________
x - 2 | x² - x - 6
        x² - 2x        (x · (x-2))
        --------
             x - 6     (subtract)
             x - 2     (1 · (x-2))
             -----
                -4     (remainder)
```

$$f(x) = x + 1 - \frac{4}{x-2}$$

Slant asymptote: **y = x + 1**

**Step 6: x-intercepts**

Numerator = 0 when (x-3)(x+2) = 0

x = 3 or x = -2

x-intercepts: **(-2, 0)** and **(3, 0)**

**Step 7: y-intercept**

$$f(0) = \frac{0^2 - 0 - 6}{0 - 2} = \frac{-6}{-2} = 3$$

y-intercept: **(0, 3)**

**Step 8: One-sided limits at x = 2**

As x → 2⁻ (x = 1.9):
$$f(1.9) = \frac{(1.9-3)(1.9+2)}{1.9-2} = \frac{(-1.1)(3.9)}{-0.1} = \frac{-4.29}{-0.1} > 0$$

Function → +∞

As x → 2⁺ (x = 2.1):
$$f(2.1) = \frac{(2.1-3)(2.1+2)}{2.1-2} = \frac{(-0.9)(4.1)}{0.1} = \frac{-3.69}{0.1} < 0$$

Function → -∞

**At x = 2:**
$$\lim_{x \to 2^-} f(x) = +\infty, \quad \lim_{x \to 2^+} f(x) = -\infty$$

**Step 9: Sign Analysis**

Critical points: x = -2, x = 2, x = 3

```
    -2         2         3
-----|---------|---------|-----
  I      II       III      IV
```

Test points: x = -3, 0, 2.5, 4

| Interval | Test x | f(x) value | Sign |
|----------|--------|------------|------|
| I: x < -2 | -3 | $\frac{(-6)(−1)}{-5} < 0$ | - |
| II: -2 < x < 2 | 0 | 3 | + |
| III: 2 < x < 3 | 2.5 | $\frac{(-0.5)(4.5)}{0.5} < 0$ | - |
| IV: x > 3 | 4 | $\frac{(1)(6)}{2} > 0$ | + |

**Step 10: Summary of Features**

- **Domain:** (-∞, 2) ∪ (2, ∞)
- **x-intercepts:** (-2, 0), (3, 0)
- **y-intercept:** (0, 3)
- **Vertical asymptote:** x = 2
- **Slant asymptote:** y = x + 1
- **Holes:** None
- **End behavior:** Follows y = x + 1 as x → ±∞

**Step 11: Sketch**

Key graphing points:
1. Plot intercepts: (-2, 0), (3, 0), (0, 3)
2. Draw vertical asymptote x = 2 (dashed line)
3. Draw slant asymptote y = x + 1 (dashed line)
4. Sketch in each interval using sign analysis:
   - Interval I (x < -2): Below x-axis, approaching slant asymptote as x → -∞
   - Interval II (-2 < x < 2): Above x-axis, through (0,3), approaching +∞ as x → 2⁻
   - Interval III (2 < x < 3): Below x-axis, starting from -∞ at x → 2⁺
   - Interval IV (x > 3): Above x-axis, approaching slant asymptote as x → +∞
5. Ensure curve crosses x-axis at x = -2 and x = 3

**Behavior checklist:**
- ✓ Function crosses x-axis at zeros
- ✓ Function approaches vertical asymptote from correct directions
- ✓ Function approaches slant asymptote as x → ±∞
- ✓ Sign analysis matches graphed regions

