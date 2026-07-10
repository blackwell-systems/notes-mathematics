---
title: "Symbolic Methods vs. Numerical Methods"
---

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
    $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$, following the tangent line
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

