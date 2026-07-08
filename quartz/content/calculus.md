---
title: "Calculus"
---

Calculus is the mathematics of change. Where algebra studies fixed relationships (what is $y$ when $x = 3$?), calculus asks: how fast is $y$ changing as $x$ changes? And if we know how fast something is changing, can we figure out how much total change has accumulated? These two questions give rise to the two halves of calculus: **derivatives** (rates of change) and **integrals** (accumulated totals). Both are built on a single foundational idea: the **limit**.

## Limits

### What a Limit Is

Imagine you are walking toward a wall. You take a step that covers half the remaining distance. Then another step covering half. Then another. You never actually touch the wall, but you get arbitrarily close. The wall is the **limit** of your position.

In mathematics, a limit describes the value a function approaches as its input approaches some number. The function does not need to actually reach that value; what matters is the trend.

**Example:** Consider the function $f(x) = \frac{x^2 - 1}{x - 1}$. If you plug in $x = 1$, you get $\frac{0}{0}$, which is undefined. But watch what happens as $x$ gets close to 1:

| $x$ | $f(x)$ |
|-----|---------|
| 0.9 | 1.9 |
| 0.99 | 1.99 |
| 0.999 | 1.999 |
| 1.001 | 2.001 |
| 1.01 | 2.01 |
| 1.1 | 2.1 |

The values are approaching 2. We say the limit is 2, even though $f(1)$ itself is undefined.

### Limit Notation

We write:

$$
\lim_{x \to a} f(x) = L
$$

This reads: "the limit of $f(x)$ as $x$ approaches $a$ equals $L$." It means that as $x$ gets closer and closer to $a$ (from either side), $f(x)$ gets closer and closer to $L$.

For the example above: $\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2$.

We can verify this by factoring: $\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1$ (when $x \neq 1$). So as $x \to 1$, this approaches $1 + 1 = 2$.

### One-Sided Limits

Sometimes a function approaches different values from the left and right. The **left-hand limit** uses values less than $a$:

$$
\lim_{x \to a^-} f(x)
$$

The **right-hand limit** uses values greater than $a$:

$$
\lim_{x \to a^+} f(x)
$$

The overall limit $\lim_{x \to a} f(x)$ exists only if both one-sided limits exist and are equal.

**Example:** The function $f(x) = \frac{|x|}{x}$ equals $-1$ for negative $x$ and $+1$ for positive $x$. So $\lim_{x \to 0^-} f(x) = -1$ and $\lim_{x \to 0^+} f(x) = 1$. Since these differ, $\lim_{x \to 0} f(x)$ does not exist.

### Limits at Infinity

What happens to a function as $x$ grows without bound? This connects to the [end behavior of rational functions](./rational-functions) you have already studied.

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$

As $x$ gets larger and larger, $\frac{1}{x}$ gets closer and closer to 0. The line $y = 0$ is a **horizontal asymptote**.

For rational functions, the rule you already know still applies:

- If the degree of the numerator is less than the denominator, the limit at infinity is 0.
- If the degrees are equal, the limit is the ratio of leading coefficients.
- If the numerator's degree is greater, the limit is $\pm\infty$ (no horizontal asymptote).

### Computing Limits

**Direct substitution:** Try plugging in $a$. If you get a real number, that is the limit.

$$
\lim_{x \to 3} (x^2 + 1) = 9 + 1 = 10
$$

**Factoring:** If direct substitution gives $\frac{0}{0}$, factor and cancel:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x + 2) = 4
$$

**Rationalizing:** For expressions with square roots, multiply by the conjugate:

$$
\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x} = \lim_{x \to 0} \frac{(\sqrt{x+4} - 2)(\sqrt{x+4} + 2)}{x(\sqrt{x+4} + 2)} = \lim_{x \to 0} \frac{x + 4 - 4}{x(\sqrt{x+4} + 2)} = \lim_{x \to 0} \frac{1}{\sqrt{x+4} + 2} = \frac{1}{4}
$$

### Indeterminate Forms

When direct substitution gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$, the result is called an **indeterminate form**. The limit might be any number (or might not exist). You need algebraic manipulation (or L'Hopital's rule, below) to find the actual limit.

Other indeterminate forms include $0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$, and $\infty^0$.

### L'Hopital's Rule (Preview)

This rule requires derivatives, which we define in the next section. But the idea is simple: if $\lim_{x \to a} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

Replace the numerator and denominator with their derivatives, then try the limit again. We will use this after learning what $f'(x)$ means.

### Continuity

A function is **continuous** at a point $a$ if three things hold:

1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

In plain language: you can draw the graph through that point without lifting your pen. Polynomials, exponentials, and sine/cosine are continuous everywhere. Rational functions are continuous everywhere except where the denominator is zero.

**Why continuity matters:** Most theorems in calculus require the function to be continuous. For optimization, continuity guarantees that a continuous function on a closed interval actually achieves its maximum and minimum values (the Extreme Value Theorem).

---

## Derivatives

### The Big Idea

A **derivative** measures how fast a function's output changes as its input changes. If you are driving and your position is a function of time, the derivative of position is your speed. If your speed is changing, the derivative of speed is your acceleration.

In machine learning, the derivative tells you: "if I nudge this parameter slightly, how much does the loss change?" That information is exactly what you need to improve the model.

### From Average to Instantaneous Rate of Change

You already know how to compute the slope of a line between two points (from [linear functions](./linear-functions-d1)). Given two points on a curve, the slope of the line connecting them is the **average rate of change**:

$$
\text{average rate of change} = \frac{f(b) - f(a)}{b - a}
$$

This line connecting two points on the curve is called a **secant line**. Now imagine sliding $b$ closer and closer to $a$. The secant line rotates and approaches a line that just touches the curve at the single point $a$. This limiting line is the **tangent line**, and its slope is the **instantaneous rate of change**, which is the derivative.

![Secant lines approaching the tangent line as the second point gets closer](./media/secant-to-tangent.png)

### The Limit Definition of the Derivative

The derivative of $f$ at the point $x$ is:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

Here, $h$ is the tiny gap between $x$ and the nearby point $x + h$. The fraction $\frac{f(x+h) - f(x)}{h}$ is the slope of the secant line. As $h$ shrinks toward 0, this slope approaches the slope of the tangent line.

**Worked example:** Find the derivative of $f(x) = x^2$.

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} (2x + h) = 2x
$$

So the derivative of $x^2$ is $2x$. At $x = 3$, the slope of the tangent line is $2(3) = 6$. This means that near $x = 3$, a tiny increase in $x$ produces about 6 times as much increase in $x^2$.

### Derivative Notation

Several notations all mean the same thing:

| Notation | Name | Read as |
|----------|------|---------|
| $f'(x)$ | Lagrange notation | "f prime of x" |
| $\frac{dy}{dx}$ | Leibniz notation | "dy dx" or "the derivative of y with respect to x" |
| $\frac{d}{dx}[f(x)]$ | Operator notation | "d dx of f of x" |
| $Df(x)$ | Euler notation | "D f of x" |

Leibniz notation ($\frac{dy}{dx}$) is especially useful because it reminds you what variable you are differentiating with respect to, and it behaves nicely in the chain rule.

### Basic Derivative Rules

Instead of using the limit definition every time, we use rules:

**Constant rule:** The derivative of a constant is zero.

$$
\frac{d}{dx}[c] = 0
$$

A constant does not change, so its rate of change is zero.

**Power rule:** For any real number $n$:

$$
\frac{d}{dx}[x^n] = n x^{n-1}
$$

Bring the exponent down as a coefficient, then reduce the exponent by 1.

| Function | Derivative |
|----------|-----------|
| $x^2$ | $2x$ |
| $x^3$ | $3x^2$ |
| $x^{10}$ | $10x^9$ |
| $x^{1/2} = \sqrt{x}$ | $\frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$ |
| $x^{-1} = \frac{1}{x}$ | $-x^{-2} = -\frac{1}{x^2}$ |

**Constant multiple rule:** Constants factor out.

$$
\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)
$$

**Sum/difference rule:** Differentiate term by term.

$$
\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)
$$

**Worked example:** Find $\frac{d}{dx}[3x^4 - 5x^2 + 7x - 2]$.

$$
= 3(4x^3) - 5(2x) + 7(1) - 0 = 12x^3 - 10x + 7
$$

### Product Rule

When two functions are multiplied together:

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

The derivative of a product is not the product of the derivatives. You must use this rule.

**Worked example:** Find the derivative of $x^2 \sin(x)$.

$$
= 2x \cdot \sin(x) + x^2 \cdot \cos(x)
$$

### Quotient Rule

For a fraction of two functions:

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}
$$

A common mnemonic: "low d-high minus high d-low, over the square of what's below."

**Worked example:** Find the derivative of $\frac{x^2}{x + 1}$.

$$
= \frac{2x(x + 1) - x^2(1)}{(x+1)^2} = \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}
$$

### The Chain Rule

The chain rule is arguably the single most important rule in calculus for machine learning. **Backpropagation, the algorithm that trains neural networks, is the chain rule applied repeatedly.**

**The problem:** How do you differentiate a composite function, that is, a function inside another function? For example, what is the derivative of $(3x + 1)^5$? You cannot just use the power rule because the thing being raised to the 5th power is not $x$; it is $3x + 1$.

**The idea:** If $y = f(g(x))$, think of it as a chain of operations. First $g$ transforms $x$ into an intermediate value $u = g(x)$. Then $f$ transforms $u$ into the final output $y = f(u)$. The rate at which $y$ changes with $x$ is the rate at which $y$ changes with $u$, multiplied by the rate at which $u$ changes with $x$:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

Or equivalently:

$$
[f(g(x))]' = f'(g(x)) \cdot g'(x)
$$

In words: differentiate the outer function (leaving the inner function alone), then multiply by the derivative of the inner function.

![Chain rule: nested function composition showing how derivatives multiply through layers](./media/chain-rule-composition.png)

**Worked example 1:** Find $\frac{d}{dx}[(3x + 1)^5]$.

- Outer function: $u^5$, derivative: $5u^4$
- Inner function: $3x + 1$, derivative: $3$
- Chain rule: $5(3x + 1)^4 \cdot 3 = 15(3x + 1)^4$

**Worked example 2:** Find $\frac{d}{dx}[e^{x^2}]$.

- Outer function: $e^u$, derivative: $e^u$
- Inner function: $x^2$, derivative: $2x$
- Chain rule: $e^{x^2} \cdot 2x = 2x \, e^{x^2}$

**Worked example 3 (triple chain):** Find $\frac{d}{dx}[\sin(e^{3x})]$.

Think of this as three nested layers: $\sin(\cdot)$ wrapping $e^{(\cdot)}$ wrapping $3x$.

- Outermost derivative: $\cos(e^{3x})$
- Middle derivative: $e^{3x}$
- Innermost derivative: $3$
- Result: $\cos(e^{3x}) \cdot e^{3x} \cdot 3 = 3e^{3x}\cos(e^{3x})$

**Why this is backpropagation:** A neural network computes $y = f_n(f_{n-1}(\ldots f_2(f_1(x))\ldots))$, where each $f_i$ is a layer. To find how changing a weight in layer $k$ affects the output, you multiply the derivatives of all layers from $k$ to $n$. This chain of multiplications is exactly the chain rule, applied backward from output to input. That is backpropagation.

### Derivatives of Exponential Functions

The function $e^x$ is special because it is its own derivative:

$$
\frac{d}{dx}[e^x] = e^x
$$

This is one reason $e$ appears everywhere in mathematics. For a general base:

$$
\frac{d}{dx}[a^x] = a^x \ln(a)
$$

Using the chain rule: $\frac{d}{dx}[e^{kx}] = ke^{kx}$.

### Derivatives of Logarithmic Functions

$$
\frac{d}{dx}[\ln x] = \frac{1}{x}
$$

$$
\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}
$$

**Worked example:** $\frac{d}{dx}[\ln(x^2 + 1)] = \frac{1}{x^2 + 1} \cdot 2x = \frac{2x}{x^2 + 1}$ (chain rule).

### Derivatives of Trigonometric Functions

$$
\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x \qquad \frac{d}{dx}[\tan x] = \sec^2 x
$$

Note the negative sign on cosine. The derivatives of sine and cosine cycle: $\sin \to \cos \to -\sin \to -\cos \to \sin \to \ldots$

### Higher-Order Derivatives

The derivative of the derivative is the **second derivative**, written $f''(x)$ or $\frac{d^2y}{dx^2}$.

- If $f(x)$ is position, $f'(x)$ is velocity, and $f''(x)$ is acceleration.
- The second derivative tells you about **concavity**: whether the function curves upward ($f'' > 0$, concave up) or downward ($f'' < 0$, concave down).

**Example:** $f(x) = x^3 - 3x$, so $f'(x) = 3x^2 - 3$ and $f''(x) = 6x$.

At $x = 1$: $f''(1) = 6 > 0$, so the curve is concave up (bowl-shaped) there.

At $x = -1$: $f''(-1) = -6 < 0$, so the curve is concave down (hill-shaped) there.

### Implicit Differentiation

Sometimes you cannot solve for $y$ explicitly. For example, $x^2 + y^2 = 25$ defines a circle, but $y$ is not a single function of $x$. You can still find $\frac{dy}{dx}$ by differentiating both sides with respect to $x$, treating $y$ as a function of $x$ and applying the chain rule whenever you differentiate a $y$ term:

$$
2x + 2y \frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}
$$

---

## Applications of Derivatives

### Finding Maxima and Minima

A function can have a maximum or minimum only where its derivative equals zero (or where the derivative does not exist). These points are called **critical points**.

**First derivative test:** Find where $f'(x) = 0$. Check the sign of $f'$ on either side:

- If $f'$ changes from positive to negative: local maximum
- If $f'$ changes from negative to positive: local minimum
- If $f'$ does not change sign: neither (an inflection point)

**Worked example:** Find the extrema of $f(x) = x^3 - 3x$.

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$

Critical points: $x = -1$ and $x = 1$.

- For $x < -1$: $f'(x) > 0$ (increasing)
- For $-1 < x < 1$: $f'(x) < 0$ (decreasing)
- For $x > 1$: $f'(x) > 0$ (increasing)

So $x = -1$ is a local maximum ($f(-1) = 2$) and $x = 1$ is a local minimum ($f(1) = -2$).

![Finding maxima and minima where the derivative equals zero](./media/finding-max-min.png)

### Concavity and the Second Derivative Test

The **second derivative test** provides a faster way to classify critical points:

- If $f'(c) = 0$ and $f''(c) > 0$: local minimum (concave up, bowl-shaped)
- If $f'(c) = 0$ and $f''(c) < 0$: local maximum (concave down, hill-shaped)
- If $f'(c) = 0$ and $f''(c) = 0$: the test is inconclusive

An **inflection point** is where concavity changes (from concave up to concave down or vice versa). It occurs where $f''(x) = 0$ (and the concavity actually changes).

### Optimization

Finding maxima and minima is exactly what optimization is about.

**Example:** A farmer has 100 meters of fencing and wants to enclose the largest possible rectangular area. If the rectangle has width $x$ and length $y$, then $2x + 2y = 100$, so $y = 50 - x$. The area is:

$$
A(x) = x(50 - x) = 50x - x^2
$$

$$
A'(x) = 50 - 2x = 0 \implies x = 25
$$

So the maximum area is $A(25) = 25 \cdot 25 = 625$ square meters. The optimal rectangle is a square.

**Connection to ML:** In machine learning, the "fencing" is replaced by model parameters, and the "area" is replaced by a loss function. Finding the minimum of the loss function uses the same idea: find where the derivative is zero (or use gradient descent to walk toward that point).

### Related Rates

When two quantities are connected by an equation and both change over time, you can find how fast one changes given how fast the other changes.

**Example:** A balloon's radius grows at 2 cm/s. How fast is the volume growing when $r = 5$ cm?

$V = \frac{4}{3}\pi r^3$. Differentiate both sides with respect to time $t$:

$$
\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt} = 4\pi(25)(2) = 200\pi \approx 628 \text{ cm}^3\text{/s}
$$

### Linear Approximation

Near a point $a$, a differentiable function is well-approximated by its tangent line:

$$
f(x) \approx f(a) + f'(a)(x - a)
$$

This is the simplest version of a Taylor approximation. It says: start at the known value $f(a)$, then adjust by the slope times how far you moved.

**Example:** Approximate $\sqrt{4.1}$ without a calculator.

Let $f(x) = \sqrt{x}$, $a = 4$. Then $f(4) = 2$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(4) = \frac{1}{4}$.

$$
\sqrt{4.1} \approx 2 + \frac{1}{4}(0.1) = 2.025
$$

The actual value is $2.02485...$, so the approximation is quite good.

---

## Integrals

### The Big Idea

If derivatives answer "how fast is it changing?", integrals answer "how much total has accumulated?" They are two sides of the same coin, connected by the Fundamental Theorem of Calculus.

**Example from everyday life:** If you know your speed at every moment of a trip, the integral of your speed gives you the total distance traveled. If you know rain is falling at a changing rate, the integral of the rate gives the total amount of rain.

### Riemann Sums: Building Intuition

How do you find the area under a curve? Approximate it with rectangles.

1. Divide the interval into $n$ equal pieces
2. On each piece, build a rectangle whose height is the function value
3. Add up the areas of all rectangles

As you use more and more rectangles, the approximation gets better. In the limit (as $n \to \infty$), you get the exact area.

![Riemann sums with increasing numbers of rectangles approaching the exact area](./media/riemann-sums.png)

### The Definite Integral

The **definite integral** of $f(x)$ from $a$ to $b$ is the limit of these Riemann sums:

$$
\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \Delta x
$$

The symbol $\int$ is an elongated S (for "sum"). The $dx$ indicates what variable we are integrating with respect to. The numbers $a$ and $b$ are the **limits of integration** (lower and upper bounds).

Geometrically, $\int_a^b f(x) \, dx$ is the signed area between the curve $y = f(x)$ and the $x$-axis. Area above the axis counts as positive; area below counts as negative.

### The Fundamental Theorem of Calculus

This theorem is the central result of calculus. It says that differentiation and integration are inverse operations.

**Part 1:** If $F(x) = \int_a^x f(t) \, dt$, then $F'(x) = f(x)$.

In words: the derivative of the integral gives back the original function.

**Part 2:** If $F$ is any antiderivative of $f$ (meaning $F' = f$), then:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

In words: to compute a definite integral, find an antiderivative, plug in the upper bound, plug in the lower bound, and subtract.

**Example:** $\int_0^3 x^2 \, dx$. An antiderivative of $x^2$ is $\frac{x^3}{3}$.

$$
\int_0^3 x^2 \, dx = \frac{3^3}{3} - \frac{0^3}{3} = 9 - 0 = 9
$$

### Indefinite Integrals (Antiderivatives)

An **indefinite integral** is the general antiderivative:

$$
\int f(x) \, dx = F(x) + C
$$

where $C$ is an arbitrary constant (the **constant of integration**). This is because the derivative of a constant is zero, so any constant can be added to an antiderivative and it is still an antiderivative.

### Basic Integration Rules

These are the derivative rules in reverse:

| Function | Integral |
|----------|----------|
| $x^n$ (for $n \neq -1$) | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln |x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |

**Constant multiple:** $\int c \cdot f(x) \, dx = c \int f(x) \, dx$

**Sum/difference:** $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$

**Worked example:** $\int (3x^2 + 2x - 5) \, dx = x^3 + x^2 - 5x + C$

### U-Substitution

U-substitution is the reverse of the chain rule. When you see a composite function inside an integral, substitute the inner function.

**Method:**
1. Identify an inner function $u = g(x)$
2. Compute $du = g'(x) \, dx$
3. Rewrite the integral in terms of $u$ and $du$
4. Integrate, then substitute back

**Worked example:** $\int 2x \cdot e^{x^2} \, dx$

Let $u = x^2$, so $du = 2x \, dx$.

$$
\int 2x \cdot e^{x^2} \, dx = \int e^u \, du = e^u + C = e^{x^2} + C
$$

**Worked example 2:** $\int \frac{x}{x^2 + 1} \, dx$

Let $u = x^2 + 1$, so $du = 2x \, dx$, meaning $x \, dx = \frac{1}{2} du$.

$$
\int \frac{x}{x^2 + 1} \, dx = \frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln(x^2 + 1) + C
$$

### Integration by Parts

Integration by parts handles products of functions. It comes from the product rule for derivatives run in reverse.

$$
\int u \, dv = uv - \int v \, du
$$

**How to choose $u$ and $dv$:** Use the **LIATE** rule as a guide for choosing $u$ (the thing you differentiate). Pick whichever comes first in this list:

1. **L**ogarithmic functions ($\ln x$)
2. **I**nverse trig functions
3. **A**lgebraic functions ($x^n$)
4. **T**rigonometric functions
5. **E**xponential functions ($e^x$)

**Worked example:** $\int x \, e^x \, dx$

Let $u = x$ (algebraic), $dv = e^x \, dx$. Then $du = dx$, $v = e^x$.

$$
\int x \, e^x \, dx = x \, e^x - \int e^x \, dx = x \, e^x - e^x + C = e^x(x - 1) + C
$$

**Where it shows up:** Integration by parts is used in information theory to derive properties of entropy. It also appears when computing expected values of continuous random variables.

### Common Integrals Reference Table

| Integral | Result |
|----------|--------|
| $\int x^n \, dx$ | $\frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$) |
| $\int \frac{1}{x} \, dx$ | $\ln |x| + C$ |
| $\int e^x \, dx$ | $e^x + C$ |
| $\int e^{kx} \, dx$ | $\frac{1}{k} e^{kx} + C$ |
| $\int \ln x \, dx$ | $x \ln x - x + C$ |
| $\int \sin x \, dx$ | $-\cos x + C$ |
| $\int \cos x \, dx$ | $\sin x + C$ |
| $\int \frac{1}{1 + x^2} \, dx$ | $\arctan x + C$ |
| $\int \frac{1}{\sqrt{1 - x^2}} \, dx$ | $\arcsin x + C$ |

### The Gaussian Integral

One of the most important integrals in mathematics and statistics:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

This integral cannot be solved with any of the techniques above (there is no elementary antiderivative of $e^{-x^2}$). It is evaluated using a clever trick involving polar coordinates. We state it as a fact.

**Why it matters:** The normal distribution (bell curve) is $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-(x - \mu)^2 / (2\sigma^2)}$. The $\sqrt{2\pi}$ in the denominator is there precisely to make the total area under the curve equal 1 (as required for a probability distribution). That normalization constant comes from the Gaussian integral.

### Improper Integrals

An **improper integral** has either an infinite limit of integration or an integrand with a discontinuity. You handle them with limits:

$$
\int_1^{\infty} \frac{1}{x^2} \, dx = \lim_{b \to \infty} \int_1^b \frac{1}{x^2} \, dx = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty} \left(-\frac{1}{b} + 1\right) = 1
$$

The integral **converges** (gives a finite answer). Not all improper integrals converge:

$$
\int_1^{\infty} \frac{1}{x} \, dx = \lim_{b \to \infty} [\ln x]_1^b = \lim_{b \to \infty} (\ln b - 0) = \infty
$$

This integral **diverges** (blows up).

**Where it shows up:** Every probability density function must satisfy $\int_{-\infty}^{\infty} f(x) \, dx = 1$. This is an improper integral. The fact that it converges to 1 is what makes $f$ a valid probability distribution. When you study continuous probability distributions, you will constantly evaluate improper integrals.

---

## Summary of Key Results

### Essential Derivative Rules

| Rule | Formula |
|------|---------|
| Power rule | $(x^n)' = nx^{n-1}$ |
| Product rule | $(fg)' = f'g + fg'$ |
| Quotient rule | $(f/g)' = (f'g - fg')/g^2$ |
| Chain rule | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ |
| Exponential | $(e^x)' = e^x$ |
| Logarithm | $(\ln x)' = 1/x$ |

### Essential Integral Results

| Function | Antiderivative |
|----------|---------------|
| $x^n$ | $x^{n+1}/(n+1) + C$ |
| $1/x$ | $\ln |x| + C$ |
| $e^x$ | $e^x + C$ |

### Fundamental Theorem of Calculus

$$
\int_a^b f(x) \, dx = F(b) - F(a) \quad \text{where } F' = f
$$

### What Comes Next

This page covers single-variable calculus: functions of one input. In [Multivariable Calculus](./multivariable-calculus), we extend these ideas to functions of several variables, introducing partial derivatives, gradient vectors, and gradient descent. Those topics connect directly to the [matrix calculus](./linear-algebra-computation) already covered in the linear algebra section.
