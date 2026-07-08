---
title: "Complex Numbers"
---

## The Problem: Some Equations Have No Real Solution

Try solving this equation: $x^2 = -1$. You need a number that, when multiplied by itself, gives $-1$. But any positive number squared is positive, and any negative number squared is also positive, and $0^2 = 0$. No real number works. The equation has no solution among the real numbers.

### What If We Invented a Solution?

Mathematicians faced this problem for centuries. Their breakthrough was to simply **define** a new number, called $i$, with the property that $i^2 = -1$. This is not a number you can find on the ordinary number line; it is an extension of the number system, created to fill a gap.

Once you have $i$, you can build more new numbers. For example, $2i$ is a number whose square is $-4$ (since $(2i)^2 = 4i^2 = 4 \cdot (-1) = -4$). Numbers like $i$, $2i$, $-3i$, and $\frac{1}{2}i$ are called **imaginary numbers**.

### From Real to Imaginary to Complex

- **Real numbers** are the familiar numbers on the number line: $1, -3, 0.5, \pi, \sqrt{2}$.
- **Imaginary numbers** are real multiples of $i$: $2i, -7i, \frac{\sqrt{3}}{2}i$.
- **Complex numbers** combine both: a real part plus an imaginary part, written as $a + bi$ where $a$ and $b$ are real numbers.

Every real number is also a complex number (with $b = 0$), and every imaginary number is also a complex number (with $a = 0$).

### Why Mathematicians Did This

The primary motivation was the **Fundamental Theorem of Algebra**: every polynomial equation of degree $n$ has exactly $n$ roots (counting multiplicity) if we allow complex numbers. Without complex numbers, equations like $x^2 + 1 = 0$ have no roots at all. With complex numbers, every polynomial can be completely factored, and the theory of equations becomes clean and complete.

## Definition

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

