---
title: "Radical Functions"
---

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

