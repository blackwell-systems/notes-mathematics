---
title: "Number Theory"
prerequisites: ["prime-factorization", "number-systems"]
enables: ["algebraic-structures"]
---

Number theory is about understanding the patterns and structure hidden in the whole numbers (0, 1, 2, 3, ...). At its core, it asks deceptively simple questions: Why can some numbers only be divided evenly by 1 and themselves? Is there a pattern to how prime numbers are distributed? These questions turn out to have deep consequences far beyond pure mathematics. Modern cryptography (RSA encryption), hash functions, and large parts of computer science rely directly on results from number theory.

**Number Theory:** The branch of mathematics dealing with properties and relationships of integers.

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Prime Factorization](./prime-factorization) · [Number Systems](./number-systems)
> **Leads to:** [Algebraic Structures](./algebraic-structures)

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

**Greatest Common Divisor:** The largest positive integer that divides both **a** and **b**. The GCD is used in simplifying fractions and in [Prime Factorization](./prime-factorization).

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

![A 252 by 105 rectangle tiled with the largest possible squares, the geometric picture of the Euclidean algorithm. Two large blue 105 by 105 squares fill most of the rectangle, leaving a tall thin strip. That strip is filled by two red 42 by 42 squares, leaving a smaller strip, which is filled by two green 21 by 21 squares with nothing left over. The side of the smallest square that tiles the whole rectangle evenly is 21, which equals the greatest common divisor. The algorithm steps 252 equals 105 times 2 plus 42, 105 equals 42 times 2 plus 21, and 42 equals 21 times 2 plus 0 appear alongside, matching the three square sizes.](./media/nt-euclidean-squares.png)

Each line of the algorithm is one size of square: fitting as many $105$-squares as possible into the rectangle leaves a $42$-wide strip, fitting $42$-squares into that leaves a $21$-strip, and the $21$-squares finish it exactly. The last (smallest) square is the gcd, because it is the largest tile that divides both original sides evenly.

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

![A Venn diagram of the prime factors of 12 and 18. The left circle is labeled 12 equals 2 times 2 times 3 and the right circle 18 equals 2 times 3 times 3. The overlapping region holds the shared factors, one 2 and one 3, which multiply to the greatest common divisor 6. The left-only region holds an extra 2 (since 12 has two 2s but 18 has one), and the right-only region holds an extra 3 (since 18 has two 3s but 12 has one). Taking every factor across both circles, 2 times 2 times 3 times 3, gives the least common multiple 36. A caption notes gcd times lcm equals 6 times 36 equals 216 equals 12 times 18.](./media/nt-gcd-lcm-venn.png)

The picture explains the identity $\gcd \times \operatorname{lcm} = a \times b$: the gcd collects the prime factors *shared* by both numbers (the overlap), the lcm collects *every* prime factor that appears in either (the union), and multiplying them counts every prime factor of $a$ and of $b$ exactly once each, which is just $a \times b$.

## Modular Arithmetic

**Modular Arithmetic:** A system of arithmetic for integers where numbers "wrap around" after reaching a certain value (the modulus). Modular arithmetic is the foundation of modern cryptography (RSA) and hash functions in computer science.

**Intuition - Clock Arithmetic:**

Think of a 12-hour clock. When it's 10 o'clock and you add 5 hours, you get 3 o'clock (not 15 o'clock). This is modular arithmetic: $10 + 5 \equiv 3 \pmod{12}$.

The clock "wraps around" after 12. In general, modular arithmetic wraps around after reaching the modulus **n**.

![Modular arithmetic visualized as a clock face showing 17 mod 12 = 5](./media/modular-arithmetic-clock.png)

**Explore it:** Set the modulus **n** and two integers **a**, **b**, then combine them on the dial with $a + b \pmod{n}$ or $a \times b \pmod{n}$. The companion panel runs the [Euclidean algorithm](#euclidean-algorithm) for $\gcd(a, b)$ step by step, so you can watch coprimality (whether $\gcd(a, b) = 1$) fall out of the same numbers.

<iframe src="/static/interactive/nt-modular-clock.html" width="100%" height="560" style="border:none;"></iframe>

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

![A diagram showing that congruence mod 5 partitions the integers into 5 classes. At the top, a number line from negative 5 to 14 has each integer colored by its remainder mod 5, so the coloring repeats every five steps in a fixed pattern. Below, five labeled buckets collect the members of each class: class 0 holds the multiples of 5 such as negative 5, 0, 5, 10; class 1 holds negative 4, 1, 6, 11; class 2 holds negative 3, 2, 7, 12; class 3 holds negative 2, 3, 8, 13; and class 4 holds negative 1, 4, 9, 14. Each bucket header is colored to match the number line.](./media/nt-residue-classes.png)

This is why congruence is an **equivalence relation**: it sorts every integer into exactly one of $n$ classes (its remainder), and two numbers are congruent precisely when they fall in the same bucket. Working "mod $n$" means treating all the numbers in a bucket as interchangeable.

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

**Why it is efficient:** Square-and-multiply performs one squaring per bit of the exponent, so it uses $O(\log b)$ modular multiplications, versus $O(b)$ for the naive approach of multiplying by $a$ one factor at a time. This exponential speedup is what makes cryptosystems like RSA practical, since they raise numbers to exponents with hundreds of digits.

### Fermat's Little Theorem

**Fermat's Little Theorem:** If **p** is prime and $\gcd(a, p) = 1$, then:
$$a^{p-1} \equiv 1 \pmod{p}$$

**Corollary:** $a^p \equiv a \pmod{p}$ for all integers a. Unlike the main theorem, this form needs no coprimality assumption: it holds even when $p \mid a$, since then both sides are $\equiv 0 \pmod{p}$.

![A directed cycle illustrating Fermat's little theorem for base 3 modulo 7. Six nodes, the nonzero residues, are arranged on a circle in the order the powers of 3 visit them: 3, then 2, then 6, then 4, then 5, then 1, and an arrow back to 3. Each arrow is labeled times 3, and each node carries the power that produces it, so 3 is 3 to the 1, 2 is 3 squared, 6 is 3 cubed, 4 is 3 to the 4th, 5 is 3 to the 5th, and 1 is 3 to the 6th. The node 1 is highlighted, marking that after six multiplications the cycle returns to 1.](./media/nt-fermat-cycle.png)

The picture is the theorem: repeatedly multiplying by $3$ modulo $7$ marches through all six nonzero residues and lands back on $1$ after exactly $p-1 = 6$ steps, which is precisely the statement $3^{6} \equiv 1 \pmod 7$. Because every $a$ coprime to $p$ generates such a returning walk, $a^{p-1} \equiv 1 \pmod p$ in general.

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

![A three by five grid illustrating the Chinese Remainder Theorem for the coprime moduli 3 and 5. The three rows are labeled by the remainder mod 3 (0, 1, 2) and the five columns by the remainder mod 5 (0, 1, 2, 3, 4). Each cell holds the unique integer from 0 to 14 whose remainders mod 3 and mod 5 match its row and column. Every one of the fifteen integers appears exactly once, so the grid is completely filled with no repeats. The cell in row 2, column 3, holding the value 8, is highlighted because x congruent to 2 mod 3 and 3 mod 5 pins down x equals 8.](./media/nt-crt-grid.png)

Because $3$ and $5$ share no factors, the pair of remainders (one from each modulus) acts like a two-part address, and every address $0..14$ is used exactly once. That bijection is the theorem: the remainders *together* determine $x$ uniquely modulo $3 \times 5 = 15$. The worked example below just adds a third coprime modulus, extending the same idea to a unique answer mod $105$.

**Statement:** If $n_1, n_2, \ldots, n_k$ are pairwise coprime, then the system:
$$
\begin{cases}
x \equiv a_1 \pmod{n_1} \\
x \equiv a_2 \pmod{n_2} \\
\vdots \\
x \equiv a_k \pmod{n_k}
\end{cases}
$$

has a unique solution modulo $N = n_1 n_2 \cdots n_k$.

**Example:** Solve:
$$
\begin{cases}
x \equiv 2 \pmod{3} \\
x \equiv 3 \pmod{5} \\
x \equiv 2 \pmod{7}
\end{cases}
$$

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

![A clock-style dial with the numbers 1 through 12 placed evenly around a circle, 12 at the top. The four numbers coprime to 12, namely 1, 5, 7, and 11, are highlighted in green and tagged gcd equals 1. The remaining numbers are faded grey and tagged with the factor they share with 12: 2, 4, 8, and 10 share the factor 2; 3, 6, and 9 share 3; and 12 shares 12. The center reads phi of 12 equals 4, showing that exactly four of the twelve numbers are coprime to 12.](./media/nt-totient-dial.png)

Those four coprime numbers, $1, 5, 7, 11$, are exactly the residues that have a **multiplicative inverse** mod $12$ (the [units](#modular-inverses)); every other number shares a factor with $12$ and so cannot be inverted. Counting them is what $\phi(n)$ does.

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

**Application:** Computing modular inverses when n is not prime. Provided $\gcd(a, n) = 1$ (an inverse of $a$ modulo $n$ exists only when $a$ and $n$ are coprime):
$$a^{-1} \equiv a^{\phi(n) - 1} \pmod{n}$$

