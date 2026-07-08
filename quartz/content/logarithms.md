---
title: "Logarithms"
---

## The Problem Logarithms Solve

Consider a simple question: **2 to what power gives 8?** You can figure this out by trying: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$. The answer is 3.

Now consider a harder question: **10 to what power gives 500?** The answer is not a whole number, and trial-and-error will not find it easily. We need a name and a notation for this operation, and that is exactly what a **logarithm** provides.

$$\log_{10}(500) \approx 2.699$$

This tells us $10^{2.699} \approx 500$.

### Why We Need Logarithms

We already have notation for exponentiation: $b^n = x$ means "multiply $b$ by itself $n$ times to get $x$." But what if you know $b$ and $x$, and want to find $n$? That reverse question comes up constantly. How many years until an investment doubles? How many half-lives until a substance is 1% of its original amount? Logarithms answer these questions.

### Connection to Exponentials

A logarithm is the **inverse** of an exponential function. "Inverse" here means it undoes exponentiation, just as subtraction undoes addition or division undoes multiplication.

Here is a concrete example showing both directions:

$$2^3 = 8 \qquad \Longleftrightarrow \qquad \log_2(8) = 3$$

The exponential asks: "2 raised to the 3rd power gives what?" (Answer: 8.)
The logarithm asks: "2 raised to what power gives 8?" (Answer: 3.)

With this motivation, here is the formal definition.

## Definition

**Logarithm:** A logarithm is the inverse of an exponential function. It answers the question: "To what exponent must we raise the base to get a certain number?"

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

#### Why the Change of Base Formula Works

The formula is not a trick; it follows directly from the definition of a logarithm. Start with the equation you want to solve:

$$a^y = x$$

where $y = \log_a(x)$ is the unknown. Take $\log_b$ of both sides (for any valid base $b$):

$$\log_b(a^y) = \log_b(x)$$

Apply the power rule on the left side:

$$y \cdot \log_b(a) = \log_b(x)$$

Solve for $y$:

$$y = \frac{\log_b(x)}{\log_b(a)}$$

Since $y = \log_a(x)$, we have the change of base formula.

#### Practical Use

Most calculators only have $\ln$ and $\log_{10}$ buttons. To compute a logarithm in any other base, use the formula with whichever base your calculator supports.

**Example:** Compute $\log_3(50)$.

$$\log_3(50) = \frac{\ln 50}{\ln 3} = \frac{3.912}{1.099} \approx 3.561$$

This tells us $3^{3.561} \approx 50$.

**Example:** Compute $\log_5(200)$.

$$\log_5(200) = \frac{\log_{10}(200)}{\log_{10}(5)} = \frac{2.301}{0.699} \approx 3.292$$

## Expanding Logarithmic Expressions

**Expanding** a logarithmic expression means using the product, quotient, and power rules to rewrite a single logarithm as a sum or difference of simpler logarithms. This is the standard direction when simplifying expressions for analysis or comparison.

The three rules you apply repeatedly are:

- **Product rule:** $\log_a(xy) = \log_a x + \log_a y$
- **Quotient rule:** $\log_a\!\left(\frac{x}{y}\right) = \log_a x - \log_a y$
- **Power rule:** $\log_a(x^n) = n\log_a x$

**Example 1:** Expand $\log_2(8x^3 y)$.

Break the product into a sum, then apply the power rule:

$$\log_2(8x^3 y) = \log_2 8 + \log_2(x^3) + \log_2 y = 3 + 3\log_2 x + \log_2 y$$

**Example 2:** Expand $\ln\!\left(\frac{x^2}{e^3}\right)$.

Apply the quotient rule, then the power rule:

$$\ln\!\left(\frac{x^2}{e^3}\right) = \ln(x^2) - \ln(e^3) = 2\ln x - 3$$

**Example 3:** Expand $\log\!\left(\frac{100x^4}{y^2 z}\right)$.

$$\log\!\left(\frac{100x^4}{y^2 z}\right) = \log 100 + \log(x^4) - \log(y^2) - \log z = 2 + 4\log x - 2\log y - \log z$$

**Example 4:** Expand $\log_5\!\left(\frac{\sqrt{x}}{25y^3}\right)$.

First rewrite the square root as a power of $\frac{1}{2}$:

$$\log_5\!\left(\frac{x^{1/2}}{25y^3}\right) = \log_5(x^{1/2}) - \log_5 25 - \log_5(y^3) = \frac{1}{2}\log_5 x - 2 - 3\log_5 y$$

**Example 5:** Expand $\ln\!\left(\frac{x^2(x+1)^3}{\sqrt{x-1}}\right)$.

$$\ln\!\left(\frac{x^2(x+1)^3}{\sqrt{x-1}}\right) = 2\ln x + 3\ln(x+1) - \frac{1}{2}\ln(x-1)$$

## Condensing Logarithmic Expressions

**Condensing** is the reverse of expanding: you combine multiple logarithmic terms into a single logarithm. This is the standard first step when solving logarithmic equations, because you need a single log expression to convert to exponential form.

The same three rules apply, but in reverse:

- **Sum becomes product:** $\log_a x + \log_a y = \log_a(xy)$
- **Difference becomes quotient:** $\log_a x - \log_a y = \log_a\!\left(\frac{x}{y}\right)$
- **Coefficient becomes exponent:** $n\log_a x = \log_a(x^n)$

The typical strategy is: (1) move coefficients into exponents first, then (2) combine sums and differences.

**Example 1:** Condense $2\ln x + \ln y - \frac{1}{2}\ln z$.

Move coefficients to exponents:

$$\ln(x^2) + \ln y - \ln(z^{1/2})$$

Combine using product and quotient rules:

$$\ln\!\left(\frac{x^2 y}{\sqrt{z}}\right)$$

**Example 2:** Condense $3\log_2 x - \log_2 5$.

$$\log_2(x^3) - \log_2 5 = \log_2\!\left(\frac{x^3}{5}\right)$$

**Example 3:** Condense $\frac{1}{3}\log(x+2) + \log 4 - 2\log x$.

$$\log\!\left((x+2)^{1/3}\right) + \log 4 - \log(x^2) = \log\!\left(\frac{4\sqrt[3]{x+2}}{x^2}\right)$$

**Example 4:** Condense $\ln a + \ln b + \ln c - \ln d - \ln e$.

$$\ln\!\left(\frac{abc}{de}\right)$$

**Example 5:** Condense $\frac{1}{2}\ln(x^2 + 1) - \frac{1}{2}\ln(x^2 - 1)$.

$$\frac{1}{2}\left[\ln(x^2+1) - \ln(x^2-1)\right] = \frac{1}{2}\ln\!\left(\frac{x^2+1}{x^2-1}\right) = \ln\!\sqrt{\frac{x^2+1}{x^2-1}}$$

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

For exponential functions and the exp/log connection with graphs, see [Exponential Functions](./exponential-functions).

## Domain and Range

**Domain:** $(0, \infty)$ - Logarithms are only defined for positive real numbers.

**Range:** $(-\infty, \infty)$ - Logarithms can output any real number.

## Solving Logarithmic Equations

Logarithmic equations require careful technique because not every algebraic solution is valid. The argument of every logarithm must be positive, and this constraint can eliminate solutions that otherwise satisfy the algebra. Always check your answers against the domain.

### Type 1: Single Logarithm Equals a Number

When you have one logarithmic expression equal to a constant, convert to exponential form.

**Example:** Solve $\log_2(x + 3) = 5$.

Convert to exponential form: $x + 3 = 2^5 = 32$, so $x = 29$.

**Check:** $\log_2(29 + 3) = \log_2(32) = 5$. Valid.

**Example:** Solve $\ln(2x - 1) = 4$.

Convert: $2x - 1 = e^4$, so $x = \frac{e^4 + 1}{2} \approx 27.799$.

**Check:** $2x - 1 = e^4 > 0$. Valid.

### Type 2: Logarithm Equals Logarithm

When both sides of an equation are a single logarithm with the same base, the arguments must be equal (since $\log_a$ is a one-to-one function).

**Example:** Solve $\log(x + 1) = \log(3x - 5)$.

Set the arguments equal: $x + 1 = 3x - 5$, so $6 = 2x$, giving $x = 3$.

**Check:** $\log(3 + 1) = \log 4$ and $\log(3 \cdot 3 - 5) = \log 4$. Both arguments are positive. Valid.

### Type 3: Multiple Logarithms Combined

When an equation has multiple log terms, condense them into a single logarithm first, then solve.

**Example:** Solve $\log_2 x + \log_2(x - 2) = 3$.

Condense: $\log_2[x(x-2)] = 3$.

Convert to exponential form: $x(x - 2) = 2^3 = 8$.

Expand: $x^2 - 2x - 8 = 0$, which factors as $(x-4)(x+2) = 0$.

So $x = 4$ or $x = -2$.

**Check:** For $x = 4$: $\log_2 4 + \log_2 2 = 2 + 1 = 3$. Valid.
For $x = -2$: $\log_2(-2)$ is undefined. **Extraneous; reject.**

The only solution is $x = 4$.

### Type 4: Equations with Extraneous Solutions

Extraneous solutions arise because the algebraic steps (squaring, multiplying, etc.) can introduce values outside the domain of the original logarithmic expression. You must always verify that every log argument is positive for your candidate solution.

**Example:** Solve $\log_3(x + 6) + \log_3(x + 4) = 1$.

Condense: $\log_3[(x+6)(x+4)] = 1$.

Convert: $(x+6)(x+4) = 3^1 = 3$.

Expand: $x^2 + 10x + 24 = 3$, so $x^2 + 10x + 21 = 0$, which factors as $(x+3)(x+7) = 0$.

So $x = -3$ or $x = -7$.

**Check:** For $x = -3$: arguments are $-3+6 = 3 > 0$ and $-3+4 = 1 > 0$. Then $\log_3 3 + \log_3 1 = 1 + 0 = 1$. Valid.
For $x = -7$: argument $-7 + 6 = -1 < 0$. **Extraneous; reject.**

The only solution is $x = -3$.

**Example:** Solve $\log(x) + \log(x - 3) = 1$.

Condense: $\log[x(x-3)] = 1$.

Convert: $x(x-3) = 10$.

Expand: $x^2 - 3x - 10 = 0$, which factors as $(x-5)(x+2) = 0$.

So $x = 5$ or $x = -2$.

**Check:** For $x = 5$: $\log 5 + \log 2 = \log 10 = 1$. Valid.
For $x = -2$: $\log(-2)$ is undefined. **Extraneous; reject.**

The only solution is $x = 5$.

## Natural Logarithmic Equations

Some equations involve both exponential and logarithmic expressions with base $e$. Two common techniques deserve special attention.

### Exponential Equations Reducible to Quadratics

When an equation involves $e^{2x}$ and $e^x$, the substitution $u = e^x$ converts it into a quadratic.

**Example:** Solve $e^{2x} - 5e^x + 6 = 0$.

Let $u = e^x$, so $e^{2x} = u^2$:

$$u^2 - 5u + 6 = 0$$

Factor: $(u - 2)(u - 3) = 0$, giving $u = 2$ or $u = 3$.

Since $u = e^x$:

- $e^x = 2 \implies x = \ln 2 \approx 0.693$
- $e^x = 3 \implies x = \ln 3 \approx 1.099$

Both solutions are valid because $e^x$ is always positive, so there are no domain issues.

**Example:** Solve $e^{2x} + e^x - 6 = 0$.

Let $u = e^x$: $u^2 + u - 6 = 0$, which factors as $(u+3)(u-2) = 0$.

So $u = -3$ or $u = 2$. Since $e^x > 0$ for all $x$, the solution $u = -3$ is impossible.

From $e^x = 2$: $x = \ln 2$.

### Equations with Multiple Natural Logarithms

**Example:** Solve $\ln(x - 1) + \ln(x + 1) = \ln 8$.

Condense the left side: $\ln[(x-1)(x+1)] = \ln 8$.

Since $\ln$ is one-to-one: $(x-1)(x+1) = 8$.

Expand: $x^2 - 1 = 8$, so $x^2 = 9$, giving $x = 3$ or $x = -3$.

**Check:** For $x = 3$: $\ln 2 + \ln 4 = \ln 8$. Valid.
For $x = -3$: $\ln(-4)$ is undefined. **Extraneous; reject.**

The only solution is $x = 3$.

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

![Logarithmic function family showing log base 2, natural log, and log base 10 on the same axes](./media/log-function-family.png)

### Graphing Logarithmic Functions with Transformations

The parent function $y = \log_b(x)$ (for $b > 1$) has three key reference points that are easy to plot:

| $x$ | $y = \log_b(x)$ |
|-----|-----------------|
| $\frac{1}{b}$ | $-1$ |
| $1$ | $0$ |
| $b$ | $1$ |

The vertical asymptote of the parent function is $x = 0$, and the domain is $(0, \infty)$.

**Horizontal shift:** $y = \log_b(x - h)$

Shifts the graph $h$ units to the right. The vertical asymptote moves to $x = h$, and the domain becomes $(h, \infty)$. Every key point has $h$ added to its $x$-coordinate.

**Vertical shift:** $y = \log_b(x) + k$

Shifts the graph $k$ units up. The vertical asymptote stays at $x = 0$. Every key point has $k$ added to its $y$-coordinate.

**Reflection over the $x$-axis:** $y = -\log_b(x)$

Flips the graph upside down. The asymptote and domain are unchanged, but all $y$-values are negated. The graph now decreases instead of increasing.

**Vertical stretch/compression:** $y = a\log_b(x)$

Multiplies all $y$-values by $a$. When $|a| > 1$, the graph is stretched vertically (steeper near the asymptote). When $0 < |a| < 1$, the graph is compressed. If $a < 0$, the graph is also reflected over the $x$-axis.

#### Worked Example: Graph $y = -2\log_3(x - 1) + 4$

Identify the transformations applied to the parent function $y = \log_3(x)$:

1. **Horizontal shift right by 1** (from $x - 1$): asymptote moves to $x = 1$
2. **Vertical stretch by factor 2** (from the coefficient $2$)
3. **Reflection over $x$-axis** (from the negative sign)
4. **Vertical shift up by 4** (from $+4$)

**Domain:** $(1, \infty)$

**Vertical asymptote:** $x = 1$

Transform the key points of $y = \log_3(x)$:

| Parent point | After shift right 1 | After $\times(-2)$ on $y$ | After $+4$ on $y$ |
|-------------|---------------------|---------------------------|-------------------|
| $\left(\frac{1}{3}, -1\right)$ | $\left(\frac{4}{3}, -1\right)$ | $\left(\frac{4}{3}, 2\right)$ | $\left(\frac{4}{3}, 6\right)$ |
| $(1, 0)$ | $(2, 0)$ | $(2, 0)$ | $(2, 4)$ |
| $(3, 1)$ | $(4, 1)$ | $(4, -2)$ | $(4, 2)$ |

Plot these three points and draw the curve approaching the asymptote $x = 1$ from the right. The function decreases (because of the reflection) and passes through $(2, 4)$, meaning $y = 4$ when the argument of the log is 1.

![Logarithmic transformations showing parent function and shifted version with new asymptote](./media/log-transformations.png)

## Applications

### Solving Exponential Equations

Logarithms are used to solve equations where the variable is in the exponent. See [Exponential Functions](./exponential-functions) for more on exponential equations and their properties.

**Example:** Solve $2^x = 10$

$$x = \log_2(10) = \frac{\ln(10)}{\ln(2)} \approx 3.32$$

### Logarithmic Scales

Logarithmic scales exist to compress enormous ranges of values into manageable numbers. When a quantity can vary by factors of millions or billions, a linear scale is impractical. A logarithmic scale converts multiplicative changes into additive ones: every time the underlying quantity is multiplied by a fixed factor, the scale value increases by a fixed amount.

#### pH Scale

**pH:** A measure of acidity defined as the negative common logarithm of the hydrogen ion concentration:

$$\text{pH} = -\log_{10}[\text{H}^+]$$

The negative sign makes the scale more intuitive: higher pH means lower acidity.

**Example:** A solution has $[\text{H}^+] = 3.2 \times 10^{-4}$ mol/L. Find its pH.

$$\text{pH} = -\log_{10}(3.2 \times 10^{-4}) = -[\log_{10}(3.2) + \log_{10}(10^{-4})] = -[0.505 + (-4)] = 3.495$$

The solution has a pH of approximately 3.5, which is strongly acidic.

**Key insight:** A difference of 1 pH unit corresponds to a factor of 10 in hydrogen ion concentration. A solution with pH 3 is ten times more acidic than a solution with pH 4.

#### Richter Scale

**Richter magnitude:** A measure of earthquake strength based on the logarithm of the seismograph amplitude:

$$M = \log_{10}\!\left(\frac{A}{A_0}\right)$$

where $A$ is the measured amplitude and $A_0$ is a reference amplitude.

**Example:** How many times more intense is a magnitude 7.0 earthquake than a magnitude 5.0 earthquake?

The difference in magnitudes is $7.0 - 5.0 = 2.0$. Since the scale is logarithmic:

$$\frac{A_7}{A_5} = 10^{7.0 - 5.0} = 10^2 = 100$$

A magnitude 7 earthquake has 100 times the amplitude of a magnitude 5 earthquake.

#### Decibel Scale

**Decibel (dB):** A measure of sound intensity relative to a reference intensity $I_0 = 10^{-12}$ W/m$^2$ (the threshold of human hearing):

$$\beta = 10\log_{10}\!\left(\frac{I}{I_0}\right)$$

The factor of 10 in front makes the numbers more convenient (without it, the unit would be the "bel").

**Example:** A jackhammer has a sound intensity of $I = 10^{-2}$ W/m$^2$. Find its decibel level.

$$\beta = 10\log_{10}\!\left(\frac{10^{-2}}{10^{-12}}\right) = 10\log_{10}(10^{10}) = 10 \cdot 10 = 100 \text{ dB}$$

**Example:** If one speaker produces 70 dB and you add a second identical speaker, what is the combined level?

Two identical speakers double the intensity. The increase in decibels is:

$$\Delta\beta = 10\log_{10}(2) \approx 10(0.301) = 3.01 \text{ dB}$$

The combined level is approximately 73 dB. Doubling the intensity adds about 3 dB, not double the decibels.

### Growth and Decay

Logarithms appear in models of:

- Population growth
- Radioactive decay
- Compound interest
- Algorithm complexity analysis

## Connection to Exponential Functions

Logarithmic and exponential functions are inverses of each other. The graph of $y = \log_a(x)$ is the reflection of $y = a^x$ across the line $y = x$. This inverse relationship means that every property of logarithms has a corresponding property of exponentials, and techniques for solving exponential equations rely heavily on logarithms (and vice versa). For a full treatment of exponential functions, their graphs, growth and decay models, and the inverse relationship illustrated graphically, see [Exponential Functions](./exponential-functions).

