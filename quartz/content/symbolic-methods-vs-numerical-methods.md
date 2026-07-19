---
title: "Symbolic Methods vs. Numerical Methods"
prerequisites: ["calculus"]
enables: ["differential-equations", "optimization"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Calculus](./calculus)
> **Leads to:** [Differential Equations](./differential-equations) · [Optimization](./optimization)

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

-   **Complexity:** Symbolic solutions can be very complex, especially
    for higher-degree polynomials.

-   **Limitations:** By the **Abel-Ruffini theorem**, no general
    solution *in radicals* exists for polynomials of degree five or
    higher. (Specific quintics can still be solvable in radicals, and
    non-radical methods such as elliptic or hypergeometric functions can
    express the roots.)

## Numerical Methods

**Numerical Methods:** Numerical methods involve approximating solutions
through iterative algorithms and numerical computations. The results are
given as approximate numerical values.

Ex:

-   **Newton's Method:** Starting from an initial guess, iterate
    $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ (which requires $f'(x_n) \neq 0$),
    following the tangent line
    to the function down to where it crosses the axis. It converges very
    quickly (quadratically) near a simple root but requires the
    derivative.

-   **Bisection Method:** Given an interval $[a, b]$ on which $f$ changes
    sign, repeatedly halve the interval and keep the half where the sign
    change persists. The Intermediate Value Theorem guarantees a root in
    that half, so the method always converges (though slowly).

-   **Secant Method:** Like Newton's method, but it approximates the
    derivative with a finite difference between the two most recent
    points, $x_{n+1} = x_n - f(x_n)\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$.
    This avoids computing $f'$ at the cost of slightly slower
    convergence.

## Worked Example: Three Methods Find $\sqrt{2}$

Nothing shows the difference between these methods like running all three on the *same* problem. We solve $f(x) = x^2 - 2 = 0$, whose positive root is $\sqrt{2} = 1.41421356\ldots$ (an [irrational number](./number-systems) with no finite decimal, so a numerical method is genuinely needed).

**Newton's method.** Here $f'(x) = 2x$, so the iteration $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ (read "x-sub-n-plus-one equals x-sub-n minus f of x-sub-n over f-prime of x-sub-n") becomes $x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n} = \frac{1}{2}\left(x_n + \frac{2}{x_n}\right)$ (the ancient Babylonian square-root rule). Starting from $x_0 = 1$:

| $n$ | $x_n$ | $f(x_n) = x_n^2 - 2$ |
|---|---|---|
| 0 | $1.00000000$ | $-1.000000$ |
| 1 | $1.50000000$ | $0.250000$ |
| 2 | $1.41666667$ | $0.006944$ |
| 3 | $1.41421569$ | $0.000006$ |
| 4 | $1.41421356$ | $0.000000$ |

The number of correct digits roughly *doubles* each step ($0 \to 1 \to 3 \to 6 \to 12$): this is **quadratic convergence**. Four iterations already give full double-precision accuracy.

**Bisection method.** Since $f(1) = -1 < 0$ and $f(2) = 2 > 0$, the Intermediate Value Theorem puts a root in $[1, 2]$. Each step evaluates the midpoint and keeps the half that still straddles the sign change:

| Step | Interval | Midpoint $m$ | $f(m)$ | Keep |
|---|---|---|---|---|
| 1 | $[1,\ 2]$ | $1.50000$ | $+0.25000$ | $[1,\ 1.5]$ |
| 2 | $[1,\ 1.5]$ | $1.25000$ | $-0.43750$ | $[1.25,\ 1.5]$ |
| 3 | $[1.25,\ 1.5]$ | $1.37500$ | $-0.10938$ | $[1.375,\ 1.5]$ |
| 4 | $[1.375,\ 1.5]$ | $1.43750$ | $+0.06641$ | $[1.375,\ 1.4375]$ |
| 5 | $[1.375,\ 1.4375]$ | $1.40625$ | $-0.02246$ | $[1.40625,\ 1.4375]$ |
| 6 | $[1.40625,\ 1.4375]$ | $1.42188$ | $+0.02173$ | $[1.40625,\ 1.42188]$ |

The interval width halves every step, so the error shrinks by a fixed factor of $2$ each time: **linear convergence**, gaining about one binary digit (~$0.3$ decimal digits) per step. After 6 steps the root is pinned only to an interval of width $\approx 0.016$ (so $\pm 0.008$ about its midpoint): slow, but the sign-change bracket makes convergence *guaranteed*.

**Secant method.** Using the two starting points $x_0 = 1$ and $x_1 = 2$, each new point comes from the secant line through the last two:

| $n$ | $x_n$ | $f(x_n)$ |
|---|---|---|
| 0 | $1.00000000$ | $-1.000000$ |
| 1 | $2.00000000$ | $2.000000$ |
| 2 | $1.33333333$ | $-0.222222$ |
| 3 | $1.40000000$ | $-0.040000$ |
| 4 | $1.41463415$ | $0.001190$ |
| 5 | $1.41421144$ | $-0.000006$ |
| 6 | $1.41421356$ | $0.000000$ |

Secant converges **superlinearly** (order $\approx 1.618$, the golden ratio): faster than bisection, slightly slower than Newton, and it never needed the derivative.

**The contrast in one picture.** Plotting the error $|x_n - \sqrt{2}|$ on a logarithmic scale makes the three convergence rates unmistakable: Newton plunges off a cliff, secant trails just behind, and bisection descends as a slow straight line.

![Convergence comparison of Newton, secant, and bisection methods finding the square root of 2, plotted as error on a logarithmic vertical axis against iteration number. Newton's error drops almost vertically, reaching machine precision in about four steps. The secant error follows close behind, a step or two slower. The bisection error decreases along a straight line on the log scale, halving each step, and after six steps is still far above the other two. The visual shows quadratic and superlinear convergence collapsing quickly while linear convergence crawls.](./media/snm-convergence-comparison.png)

## Comparison

| Aspect | Symbolic Methods | Numerical Methods |
| --- | --- | --- |
| Nature of Solution | Exact, closed-form solutions | Approximate, iterative solutions |
| Precision | Exact (subject to algebraic manipulation) | Approximate (with controllable accuracy) |
| Applicability | Limited to certain classes of problems | Broad applicability to various types of problems |
| Complexity | Can be complex, especially for higher degrees | Iterative, often simpler algorithms |
| Convergence | Guaranteed for solvable forms | Convergence depends on the method and problem |
| Insight | Provides deeper mathematical understanding | Practical and efficient for computational tasks |
| Example Techniques | Quadratic formula, factoring, Cardano's method | Newton's method, bisection method, secant method |

