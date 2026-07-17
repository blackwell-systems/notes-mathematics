---
title: "Graphing Functions"
prerequisites: ["functions-relations", "order-of-operations"]
enables: ["linear-functions", "polynomial-functions"]
---

**Graphing Functions:** Graphing is the visual representation of a function on a coordinate plane. The graph shows the relationship between input values ($x$, read "x") and output values ($y$, read "y"), revealing important features like intercepts, asymptotes, extrema, and overall behavior.

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Functions & Relations](./functions-relations) · [Order of Operations](./order-of-operations)
> **Leads to:** [Linear Functions](./linear-functions) · [Polynomial Functions](./polynomial-functions)

## The Coordinate Plane

**Coordinate Plane (Cartesian Plane):** A two-dimensional plane formed by two perpendicular number lines:
- **x-axis:** Horizontal axis (independent variable)
- **y-axis:** Vertical axis (dependent variable)
- **Origin:** The point $(0, 0)$ where the axes intersect

**Quadrants:** The plane is divided into four regions:
- Quadrant I: $x > 0, y > 0$ (upper right)
- Quadrant II: $x < 0, y > 0$ (upper left)
- Quadrant III: $x < 0, y < 0$ (lower left)
- Quadrant IV: $x > 0, y < 0$ (lower right)

![The coordinate plane with four quadrants labeled](./media/coordinate-plane.png)

**Ordered Pair:** A point is written as $(x, y)$ where $x$ is the horizontal coordinate and $y$ is the vertical coordinate.

## Key Features to Identify

When graphing any function, identify these key features:

**1. Domain and Range**
- Domain: All possible $x$-values (horizontal extent)
- Range: All possible $y$-values (vertical extent)

**2. Intercepts**
- **x-intercept(s):** Points where the graph crosses the x-axis (set $y = 0$)
- **y-intercept:** Point where the graph crosses the y-axis (set $x = 0$)

**3. Asymptotes**
- **Vertical asymptote:** Line $x = a$ where function approaches $\pm\infty$
- **Horizontal asymptote:** Line $y = b$ that function approaches as $x \to \pm\infty$
- **Oblique/Slant asymptote:** Diagonal line that function approaches

**4. Extrema**
- **Maximum:** Highest point (locally or globally)
- **Minimum:** Lowest point (locally or globally)
- **Vertex:** The maximum or minimum of a parabola

**5. Intervals of Increase/Decrease**
- **Increasing:** Function values rise as $x$ increases (left to right upward)
- **Decreasing:** Function values fall as $x$ increases (left to right downward)
- **Constant:** Function values remain the same

**6. Concavity**
- **Concave up:** Graph curves upward (like $\cup$)
- **Concave down:** Graph curves downward (like $\cap$)
- **Inflection point:** Where concavity changes

**7. Symmetry**
- **Even function (y-axis symmetry):** $f(-x) = f(x)$
- **Odd function (origin symmetry):** $f(-x) = -f(x)$

**Testing for symmetry.** To classify a function, substitute $-x$ for $x$, simplify, and compare the result to the original $f(x)$ and to $-f(x)$. There are three outcomes.

- *Even.* Take $f(x) = x^4 - 2x^2$. Then $f(-x) = (-x)^4 - 2(-x)^2 = x^4 - 2x^2 = f(x)$: every term survives unchanged because each power is even, so the graph is a mirror image across the y-axis.
- *Odd.* Take $f(x) = x^3 - 4x$. Then $f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)$: every term flips sign because each power is odd, so the graph has 180-degree rotational symmetry about the origin.
- *Neither.* Take $f(x) = x^2 + x$. Then $f(-x) = x^2 - x$, which is neither $f(x) = x^2 + x$ nor $-f(x) = -x^2 - x$ (mixing an even power with an odd power breaks both symmetries). Most functions fall here.

Symmetry is worth checking first because it halves the work: for an even or odd function you only need to plot points for $x \geq 0$ and then reflect (across the y-axis for even, through the origin for odd).

**8. End Behavior**
- Behavior as $x \to \infty$
- Behavior as $x \to -\infty$

## Graphing Linear Functions

**Linear Function:** $f(x) = mx + b$

**Key Features:**
- **Slope ($m$):** Rate of change, "rise over run"
  - $m > 0$: Line rises (increasing)
  - $m < 0$: Line falls (decreasing)
  - $m = 0$: Horizontal line (constant)
- **y-intercept ($b$):** Point $(0, b)$
- **x-intercept:** Solve $0 = mx + b \to x = -\frac{b}{m}$

**Graphing Steps:**
1. Identify y-intercept $(0, b)$ and plot this point
2. Use slope $m = \frac{\text{rise}}{\text{run}}$ to find a second point
3. Draw a straight line through both points

**Example:** Graph $f(x) = 2x - 3$

- y-intercept: $(0, -3)$
- Slope: $m = 2 = \frac{2}{1}$ (rise 2, run 1)
- From $(0, -3)$, move up 2 and right 1 to get $(1, -1)$
- x-intercept: $0 = 2x - 3 \to x = 1.5$, point $(1.5, 0)$
- Draw line through points

![Graph of f(x) = 2x - 3 showing slope, y-intercept, and x-intercept](./media/linear-function.png)

**Special Cases:**
- **Vertical line:** $x = a$ (undefined slope, not a function)
- **Horizontal line:** $y = b$ (slope $= 0$)

## Graphing Quadratic Functions

**Quadratic Function:** $f(x) = ax^2 + bx + c$

**Key Features:**
- **Parabola:** U-shaped curve
- **Opens upward:** $a > 0$ (minimum at vertex)
- **Opens downward:** $a < 0$ (maximum at vertex)
- **Vertex:** Turning point at $x = \frac{-b}{2a}$
  - Substitute $x$ into $f(x)$ to find y-coordinate
- **Axis of symmetry:** Vertical line $x = \frac{-b}{2a}$
- **y-intercept:** $(0, c)$
- **x-intercept(s):** Solve $ax^2 + bx + c = 0$ (0, 1, or 2 solutions)

**Vertex Form:** $f(x) = a(x - h)^2 + k$
- Vertex: $(h, k)$
- Makes graphing easier when in this form

**Graphing Steps:**
1. Find vertex: $x = \frac{-b}{2a}$, then find $y$
2. Determine direction ($a > 0$ up, $a < 0$ down)
3. Find y-intercept: $(0, c)$
4. Find x-intercepts (if they exist): factor or quadratic formula
5. Plot vertex, intercepts, and use symmetry to find additional points
6. Draw smooth parabola

**Example:** Graph $f(x) = x^2 - 4x + 3$

- Vertex: $x = \frac{-(-4)}{2 \cdot 1} = 2$, $y = 4 - 8 + 3 = -1$, vertex $(2, -1)$
- Opens upward ($a = 1 > 0$)
- y-intercept: $(0, 3)$
- x-intercepts: $x^2 - 4x + 3 = 0 \to (x-1)(x-3) = 0 \to x = 1, 3$
- Points: $(1, 0)$, $(2, -1)$, $(3, 0)$
- Symmetric points from vertex

![Graph of f(x) = x² - 4x + 3 showing vertex, intercepts, and axis of symmetry](./media/quadratic-function.png)

## Graphing Polynomial Functions

**Polynomial Function:** $f(x) = a_n x^n + \ldots + a_1 x + a_0$

**Key Features:**
- **Degree $n$:** Determines maximum number of turning points ($n-1$)
- **End behavior:** Determined by leading term $a_n x^n$
  - Even degree: Both ends go same direction
  - Odd degree: Ends go opposite directions
  - Positive leading coefficient: Right end goes up
  - Negative leading coefficient: Right end goes down

**Zeros/Roots:**
- **x-intercepts:** Where $f(x) = 0$
- **Multiplicity:** Affects graph behavior at zeros
  - Odd multiplicity: Graph crosses x-axis
  - Even multiplicity: Graph touches x-axis (bounces)

**Graphing Steps:**
1. Find all zeros (factor if possible)
2. Determine end behavior from leading term
3. Find y-intercept: $f(0)$
4. Analyze multiplicity at each zero
5. Plot zeros, y-intercept, and additional points as needed
6. Connect with smooth curve following end behavior

**Example:** Graph $f(x) = (x + 2)(x - 1)^2$

- Zeros: $x = -2$ (multiplicity 1, crosses), $x = 1$ (multiplicity 2, touches)
- Degree 3 (odd), positive leading coefficient
- End behavior: $x \to -\infty, f(x) \to -\infty$; $x \to \infty, f(x) \to \infty$
- y-intercept: $(0, 2 \cdot 1 = 2)$
- At $x = -2$: crosses axis
- At $x = 1$: touches axis (turns around)

![Graph of f(x) = (x+2)(x-1)² showing crossing at odd multiplicity and touching at even multiplicity](./media/polynomial-multiplicity.png)

## Graphing Rational Functions

**Rational Function:** $f(x) = \frac{P(x)}{Q(x)}$

**Key Features:**
- **Vertical asymptotes:** Where $Q(x) = 0$ (denominator zero)
- **Holes:** Where both $P(x)$ and $Q(x)$ have common factor
- **End behavior:** Compare degrees of $P$ and $Q$
  - $\deg(P) < \deg(Q)$: horizontal asymptote $y = 0$
  - $\deg(P) = \deg(Q)$: horizontal asymptote $y = \frac{a_n}{b_n}$ (ratio of leading coefficients)
  - $\deg(P) = \deg(Q) + 1$: no horizontal asymptote; there is an **oblique (slant) asymptote** instead
  - $\deg(P) > \deg(Q) + 1$: no horizontal or oblique asymptote (the end behavior is polynomial/curvilinear, following the quotient of the division)
- **Oblique asymptote:** An oblique asymptote occurs only when the numerator degree exceeds the denominator degree by exactly $1$ (that is, $\deg(P) = \deg(Q) + 1$). Find it by polynomial division: the linear quotient is the asymptote.

**Graphing Steps:**
1. Factor numerator and denominator completely
2. Identify and cancel common factors (these are holes)
3. Find vertical asymptotes: remaining zeros of denominator
4. Find horizontal/oblique asymptote based on degree
5. Find x-intercepts: zeros of numerator (excluding holes)
6. Find y-intercept: $f(0)$ if defined
7. Test points in each region between asymptotes
8. Draw curve approaching asymptotes

**Example:** Graph $f(x) = \frac{x - 2}{x + 1}$

- No common factors, no holes
- Vertical asymptote: $x = -1$
- Horizontal asymptote: $y = 1$ (equal degrees, $\frac{1}{1}$)
- x-intercept: $(2, 0)$
- y-intercept: $(0, -2)$

The vertical asymptote $x = -1$ and the x-intercept $x = 2$ cut the number line into three regions. The function can only change sign at those two spots, so we **test one convenient point inside each region** to learn whether the curve sits above or below the x-axis there:

| Region | Test point | $f(x) = \frac{x-2}{x+1}$ | Sign |
|---|---|---|---|
| $x < -1$ | $x = -2$ | $\frac{-2-2}{-2+1} = \frac{-4}{-1} = 4$ | $+$ (above axis) |
| $-1 < x < 2$ | $x = 0$ | $\frac{0-2}{0+1} = -2$ | $-$ (below axis) |
| $x > 2$ | $x = 3$ | $\frac{3-2}{3+1} = \frac{1}{4}$ | $+$ (above axis) |

Reading the signs: the left branch ($x < -1$) is positive, rising toward $+\infty$ as it nears the asymptote from the left and flattening toward $y = 1$ from above as $x \to -\infty$. The middle branch is negative, diving to $-\infty$ just right of $x = -1$ and passing through the x-intercept at $(2, 0)$. The right branch is positive, coming up from $0$ at the intercept and settling toward $y = 1$ from below. Which side of the horizontal asymptote each branch hugs follows from $f(x) - 1 = \frac{x - 2}{x + 1} - 1 = \frac{-3}{x + 1}$, which is positive (curve above $y = 1$) when $x < -1$ and negative (curve below $y = 1$) when $x > -1$. The curve approaches both asymptotes but never touches the vertical one.

![Graph of f(x) = (x-2)/(x+1) showing vertical and horizontal asymptotes](./media/rational-function.png)

**Example (oblique asymptote):** Graph $f(x) = \dfrac{x^2 + x + 1}{x + 1}$.

Here the numerator degree ($2$) is exactly one more than the denominator degree ($1$), so there is a slant asymptote rather than a horizontal one, and we find it by polynomial long division. Divide $x^2 + x + 1$ by $x + 1$:

- $x^2 \div x = x$. Multiply back: $x(x + 1) = x^2 + x$. Subtract: $(x^2 + x + 1) - (x^2 + x) = 1$.
- The remainder $1$ has degree $0$, which is less than the divisor's degree $1$, so division stops.

The quotient is $x$ with remainder $1$, which means

$$
f(x) = x + \frac{1}{x + 1}.
$$

As $x \to \pm\infty$ the term $\frac{1}{x+1} \to 0$, so the graph hugs the line $y = x$: that is the **oblique asymptote**. (Check: at $x = 100$, $f = \frac{10101}{101} \approx 100.0099$, just above $y = x = 100$ by $\frac{1}{101}$.) The remainder's sign tells you which side: $\frac{1}{x+1} > 0$ for $x > -1$, so the right branch approaches $y = x$ from above, and $\frac{1}{x+1} < 0$ for $x < -1$, so the left branch approaches from below. The vertical asymptote is still $x = -1$, where the denominator vanishes.

## Graphing Exponential Functions

**Exponential Function:** $f(x) = a \cdot b^x + c$

**Key Features:**
- **Growth:** $b > 1$ (increases exponentially)
- **Decay:** $0 < b < 1$ (decreases exponentially)
- **Horizontal asymptote:** $y = c$
- **y-intercept:** $(0, a + c)$
- **No x-intercept** (unless vertically shifted to cross axis)
- **Domain:** $(-\infty, \infty)$
- **Range:** $(c, \infty)$ if $a > 0$, or $(-\infty, c)$ if $a < 0$

**Graphing Steps:**
1. Identify horizontal asymptote $y = c$
2. Find y-intercept: $f(0) = a + c$
3. Determine growth or decay
4. Plot several points using convenient x-values
5. Draw smooth curve approaching asymptote

**Example:** Graph $f(x) = 2^x - 1$

- Horizontal asymptote: $y = -1$
- y-intercept: $(0, 0)$
- Growth ($b = 2 > 1$)
- Points: $(-2, -0.75)$, $(-1, -0.5)$, $(0, 0)$, $(1, 1)$, $(2, 3)$
- Curve increases rapidly, approaches $y = -1$ as $x \to -\infty$

![Graph of f(x) = 2^x - 1 showing exponential growth and horizontal asymptote](./media/exponential-function.png)

## Graphing Logarithmic Functions

**Logarithmic Function:** $f(x) = a \cdot \log_b(x) + c$

**Key Features:**
- **Vertical asymptote:** $x = 0$ (unless horizontally shifted)
- **x-intercept:** Where $\log_b(x) = -\frac{c}{a}$
- **y-intercept:** None (undefined at $x = 0$)
- **Domain:** $(0, \infty)$ for parent function
- **Range:** $(-\infty, \infty)$
- **Increasing:** if $a > 0$ and $b > 1$
- **Decreasing:** if $a < 0$ and $b > 1$

**Graphing Steps:**
1. Identify vertical asymptote (usually $x = 0$)
2. Find x-intercept
3. Plot key point: $(b, a)$ for parent function
4. Plot several points with convenient x-values
5. Draw smooth curve approaching asymptote

**Example:** Graph $f(x) = \log_2(x)$

- Vertical asymptote: $x = 0$
- x-intercept: $(1, 0)$ since $\log_2(1) = 0$
- Key point: $(2, 1)$ since $\log_2(2) = 1$
- Points: $(0.5, -1)$, $(1, 0)$, $(2, 1)$, $(4, 2)$, $(8, 3)$
- Increases slowly, approaches $x = 0$ as $x \to 0^+$

![Graph of f(x) = log₂(x) showing vertical asymptote and key points](./media/logarithmic-function.png)

## Graphing Absolute Value Functions

**Absolute Value Function:** $f(x) = a|x - h| + k$

**Key Features:**
- **Vertex:** $(h, k)$
- **V-shape:** Sharp corner at vertex
- **Opens upward:** $a > 0$ (minimum at vertex)
- **Opens downward:** $a < 0$ (maximum at vertex)
- **Slope:** $\pm a$ on each side of vertex
- **Axis of symmetry:** $x = h$

**Graphing Steps:**
1. Identify vertex: $(h, k)$
2. Determine direction: up if $a > 0$, down if $a < 0$
3. Find x-intercepts: Solve $a|x - h| + k = 0$
4. Find y-intercept: $f(0)$
5. Use symmetry to plot points on both sides of vertex
6. Connect with V-shape

**Example:** Graph $f(x) = |x - 2| - 1$

- Vertex: $(2, -1)$
- Opens upward ($a = 1$)
- Slope: $\pm 1$
- x-intercepts: $0 = |x - 2| - 1 \to |x - 2| = 1 \to x = 1$ or $x = 3$
- y-intercept: $(0, 1)$
- V-shape with vertex at $(2, -1)$

![Graph of f(x) = |x-2| - 1 showing V-shape with vertex and intercepts](./media/absolute-value-function.png)

## Graphing Piecewise Functions

**Piecewise Function:** Different formulas for different intervals of $x$

**Graphing Steps:**
1. Identify each piece and its domain interval
2. Graph each piece separately within its interval
3. Check endpoints:
   - Open circle: Point not included ($<$ or $>$)
   - Closed circle: Point included ($\leq$ or $\geq$)
4. Ensure no gaps or overlaps unless specified

**Example:** Graph $f(x) = \begin{cases} x + 1 & \text{if } x < 0 \\ x^2 & \text{if } x \geq 0 \end{cases}$

- For $x < 0$: Graph line $y = x + 1$, open circle at $(0, 1)$
- For $x \geq 0$: Graph parabola $y = x^2$, closed circle at $(0, 0)$
- Discontinuity at $x = 0$ (jump discontinuity)

![Piecewise function with open and closed circles at the boundary](./media/piecewise-function.png)

## Graphing Radical Functions

**Square Root Function:** $f(x) = a\sqrt{x - h} + k$

**Key Features:**
- **Starting point:** $(h, k)$
- **Domain:** $[h, \infty)$
- **Range:** $[k, \infty)$ if $a > 0$
- **Increasing:** Slowly, concave down if $a > 0$
- **Shape:** Half-parabola on its side

**Graphing Steps:**
1. Find starting point: $(h, k)$
2. Determine domain: $x \geq h$
3. Plot starting point
4. Calculate several points for $x > h$
5. Draw smooth curve starting at $(h, k)$

**Example:** Graph $f(x) = \sqrt{x + 1} - 2$

- Starting point: $(-1, -2)$
- Domain: $[-1, \infty)$
- Points: $(-1, -2)$, $(0, -1)$, $(3, 0)$, $(8, 1)$
- Increases slowly, concave down

![Graph of f(x) = sqrt(x+1) - 2 showing starting point and intercepts](./media/radical-function.png)

## Graphing Inequalities

**Inequality on Number Line:**
- **Open circle:** $<$ or $>$ (not included)
- **Closed circle:** $\leq$ or $\geq$ (included)
- **Shade:** Direction of solution

**Inequality in Two Variables:**

**Steps:**
1. Graph the boundary line/curve
   - Use dashed line for $<$ or $>$ (not included)
   - Use solid line for $\leq$ or $\geq$ (included)
2. Test a point not on the line (often $(0, 0)$)
3. Shade the region containing the test point if it satisfies the inequality
4. Shade the opposite region if the test point doesn't satisfy

**Example:** Graph $y < 2x + 1$

- Graph $y = 2x + 1$ with dashed line
- Test $(0, 0)$: $0 < 1$ ✓
- Shade below the line

**System of Inequalities:**
- Graph all boundary lines
- Shade each inequality
- Solution region is where all shadings overlap

## Common Transformations Summary

Starting with parent function $f(x)$ (read "f of x"):

The explorer below lets you pick a base function and drag the parameters $a$ ("a"), $b$ ("b"), $h$ ("h"), and $k$ ("k") in the combined form $y = a \cdot f\big(b(x - h)\big) + k$. The faint curve is the base function, the bold curve is the transformed result, and the readout states in words what each parameter is doing.

<iframe src="/static/interactive/function-transformer.html" width="100%" height="580" style="border:none;"></iframe>

**Vertical Transformations:**
- $f(x) + k$: Shift up $k$ units
- $f(x) - k$: Shift down $k$ units
- $a \cdot f(x)$: Vertical stretch by $|a|$ (if $|a| > 1$) or compression (if $|a| < 1$)
- $-f(x)$: Reflect across x-axis

**Horizontal Transformations:** (taking $h > 0$; a negative $h$ reverses the direction)
- $f(x - h)$: Shift right $h$ units
- $f(x + h)$: Shift left $h$ units
- $f(bx)$: Horizontal compression toward the y-axis by a factor of $\frac{1}{b}$ if $|b| > 1$ (points move $b$ times closer to the axis), or a stretch away from it if $|b| < 1$
- $f(-x)$: Reflect across y-axis

**Combined:** the transformed function is $g(x) = a \cdot f(b(x - h)) + k$
1. Horizontal shift $h$
2. Horizontal stretch/compression $b$
3. Vertical stretch/compression $a$
4. Vertical shift $k$

**Worked example (tracing a point through a combined transformation).** Start with the parabola $f(x) = x^2$ and build $g(x) = 2 \cdot f\big(3(x - 1)\big) - 4$. Expanding, $g(x) = 2\big(3(x-1)\big)^2 - 4 = 18(x - 1)^2 - 4$, but the power of the combined form is that we can locate the new graph by moving known points of $f$ one parameter at a time. Track two reference points of the base parabola.

*The vertex $(0, 0)$ of $f$.* The vertex is the input where $f$'s argument is $0$. In $g$ that argument is $3(x - 1)$, which equals $0$ exactly when $x = 1$. So the vertex lands at $x = h = 1$, and its height is $a \cdot 0 + k = -4$: the new vertex is $(1, -4)$. Notice it moved to $x = h = 1$ regardless of the stretch factor $b$; that is the point of writing the form factored as $b(x - h)$ rather than expanded.

*The point $(1, 1)$ of $f$* (one unit right of the vertex, since $f(1) = 1$). We need $g$'s inner argument to equal that base input $1$: $3(x - 1) = 1$, so $x - 1 = \frac{1}{3}$ and $x = \frac{4}{3}$. The offset from the anchor shrank from $1$ to $\frac{1}{3}$, a horizontal compression by the factor $\frac{1}{b} = \frac{1}{3}$. The height is $a \cdot 1 + k = 2 - 4 = -2$. So $(1, 1)$ on $f$ maps to $\left(\frac{4}{3}, -2\right)$ on $g$, which checks against the expanded form: $g\left(\frac{4}{3}\right) = 18\left(\frac{1}{3}\right)^2 - 4 = 2 - 4 = -2$.

**Why the shift is $h$ and not $\frac{h}{b}$.** Because the form is written factored as $f\big(b(x - h)\big)$, the inner argument is zero exactly at $x = h$, independent of $b$. If instead you meet the *expanded* version $f(bx - c)$, the anchor sits where $bx - c = 0$, that is $x = \frac{c}{b}$. The two agree because $c = bh$, so $\frac{c}{b} = h$: the factored form simply reads the shift off directly, while the expanded form hides it. Always factor out $b$ before reading the horizontal shift.

![Four panels showing vertical shifts, horizontal shifts, stretch/compression, and reflections of f(x) = x²](./media/transformations-summary.png)
