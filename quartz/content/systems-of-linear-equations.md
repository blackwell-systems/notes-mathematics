---
title: "Systems of Linear Equations"
---

## The Problem

You walk into a fruit stand. You buy 3 apples and 2 oranges and pay \$8. Your friend buys 1 apple and 4 oranges and pays \$9. What does each fruit cost?

Let $a$ be the price of one apple and $o$ be the price of one orange. The two purchases give you two equations:

$$
3a + 2o = 8
$$

$$
a + 4o = 9
$$

Neither equation alone is enough to pin down both prices; you need both equations working together. That pair of equations is a **system of linear equations**, and solving it means finding the values of $a$ and $o$ that make both equations true at the same time.

### Geometric Intuition

Each linear equation in two variables describes a **line** in the plane. A system of two equations therefore gives you two lines, and the solution is the point where those lines cross. Three things can happen:

- **The lines cross at exactly one point:** there is one solution (one price for apples, one for oranges).
- **The lines are actually the same line:** every point on that line is a solution, so there are infinitely many solutions.
- **The lines are parallel and never meet:** no point satisfies both equations, so there is no solution.

The same idea extends to three or more dimensions: three equations in three unknowns correspond to three planes, and the solution is where all three planes intersect.

---

**Systems of Linear Equations:** A system of linear equations is a
collection of two or more linear equations involving the same set of
variables.

The goal of solving a system of linear equations is to find the values
of the variables that satisfy all the equations simultaneously.

***The solution to a system of linear equations is the point where all
equations intersect.***

![A black screen with white text and black text Description
automatically
generated](./media/image63.png)

The double subscripting on the coefficients *a~ij~* of the unknowns
gives their location in the system---the first subscript indicates the
equation in which the coefficient occurs, and the second indicates which
unknown it multiplies. Thus, *a*~12~ is in the first equation and
multiplies *x*~2~.

## Types of Solutions

A system of linear equations can have:

**1. Exactly one solution (consistent and independent)**
- Lines intersect at a single point
- The system has a unique solution

**2. Infinitely many solutions (consistent and dependent)**
- Lines are coincident (same line)
- All points on the line are solutions

**3. No solution (inconsistent)**
- Lines are parallel (never intersect)
- No point satisfies all equations

## Methods to Solve Systems of Linear Equations

There are several methods to solve systems of linear equations:

1. **Substitution Method** - Solve one equation for a variable, substitute into others
2. **Elimination Method (Addition/Subtraction)** - Add or subtract equations to eliminate variables
3. **Graphing Method** - Graph equations and find intersection point(s)
4. **Matrix Method** - Use matrices and row operations
5. **Cramer's Rule** - Use determinants (for square systems)

## Substitution Method

**Substitution Method:** Solve one equation for one variable in terms of the others, then substitute that expression into the remaining equations.

**Steps:**

1. Solve one equation for one variable
2. Substitute that expression into the other equation(s)
3. Solve the resulting equation
4. Back-substitute to find remaining variables
5. Check the solution in all original equations

**Example 1:** Solve the system:

$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$

**Step 1:** Solve first equation for y:
$$y = 5 - x$$

**Step 2:** Substitute into second equation:
$$2x - (5 - x) = 1$$

**Step 3:** Solve for x:
$$2x - 5 + x = 1$$
$$3x = 6$$
$$x = 2$$

**Step 4:** Back-substitute into y = 5 - x:
$$y = 5 - 2 = 3$$

**Solution:** $(2, 3)$

**Check:** 
- $2 + 3 = 5$ ✓
- $2(2) - 3 = 1$ ✓

**Example 2:** Solve the system:

$$
\begin{cases}
3x + 2y = 7 \\
x - y = 1
\end{cases}
$$

**Step 1:** Solve second equation for x:
$$x = y + 1$$

**Step 2:** Substitute into first equation:
$$3(y + 1) + 2y = 7$$

**Step 3:** Solve for y:
$$3y + 3 + 2y = 7$$
$$5y = 4$$
$$y = \frac{4}{5}$$

**Step 4:** Back-substitute:
$$x = \frac{4}{5} + 1 = \frac{9}{5}$$

**Solution:** $\left(\frac{9}{5}, \frac{4}{5}\right)$

## Elimination Method

**Elimination Method (Addition/Subtraction Method):** Multiply equations by constants to make coefficients of one variable opposites, then add equations to eliminate that variable.

**Steps:**

1. Align equations with variables in columns
2. Multiply one or both equations by constants to make coefficients of one variable opposites
3. Add equations to eliminate one variable
4. Solve the resulting single-variable equation
5. Back-substitute to find remaining variables
6. Check the solution

**Example 1:** Solve the system:

$$
\begin{cases}
2x + 3y = 7 \\
5x - 3y = 14
\end{cases}
$$

**Step 1:** Notice y-coefficients are already opposites (3 and -3)

**Step 2:** Add equations:
$$
\begin{align}
2x + 3y &= 7 \\
5x - 3y &= 14 \\
\hline
7x + 0y &= 21
\end{align}
$$

**Step 3:** Solve for x:
$$7x = 21$$
$$x = 3$$

**Step 4:** Substitute x = 3 into first equation:
$$2(3) + 3y = 7$$
$$6 + 3y = 7$$
$$3y = 1$$
$$y = \frac{1}{3}$$

**Solution:** $\left(3, \frac{1}{3}\right)$

**Example 2:** Solve the system:

$$
\begin{cases}
3x + 4y = 10 \\
2x + 5y = 9
\end{cases}
$$

**Step 1:** Multiply first equation by 2 and second by -3 to eliminate x:

$$
\begin{align}
6x + 8y &= 20 \\
-6x - 15y &= -27
\end{align}
$$

**Step 2:** Add equations:
$$-7y = -7$$
$$y = 1$$

**Step 3:** Substitute y = 1 into first original equation:
$$3x + 4(1) = 10$$
$$3x = 6$$
$$x = 2$$

**Solution:** $(2, 1)$

**Example 3:** Solve the system:

$$
\begin{cases}
4x - 2y = 6 \\
6x - 3y = 12
\end{cases}
$$

**Step 1:** Multiply first equation by 3:
$$12x - 6y = 18$$

**Step 2:** Multiply second equation by -2:
$$-12x + 6y = -24$$

**Step 3:** Add equations:
$$0 = -6$$

This is a contradiction! The system is **inconsistent** (no solution).

The lines are parallel.

## Matrix Method (Augmented Matrix)

**Matrix Method:** Represent the system as an augmented matrix and use row operations to solve.

**Augmented Matrix:** Combines coefficient matrix with constant terms:

For system:
$$
\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}
$$

Augmented matrix:
$$
\left[\begin{array}{cc|c}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2
\end{array}\right]
$$

**Elementary Row Operations:**

1. **Swap two rows** - $R_i \leftrightarrow R_j$
2. **Multiply a row by a nonzero constant** - $kR_i \rightarrow R_i$
3. **Add a multiple of one row to another** - $R_i + kR_j \rightarrow R_i$

**Goal:** Transform to **row echelon form** or **reduced row echelon form**

**Row Echelon Form:**
- Leading entry (pivot) in each row is to the right of the pivot in the row above
- All entries below a pivot are zero
- Rows of all zeros are at the bottom

**Reduced Row Echelon Form (RREF):**
- All pivots are 1
- Each pivot is the only nonzero entry in its column
- Satisfies row echelon form conditions

**Example:** Solve the system:

$$
\begin{cases}
2x + y = 7 \\
x - 3y = -8
\end{cases}
$$

**Step 1:** Write augmented matrix:
$$
\left[\begin{array}{cc|c}
2 & 1 & 7 \\
1 & -3 & -8
\end{array}\right]
$$

**Step 2:** Swap rows to get 1 in upper-left:
$$
R_1 \leftrightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
2 & 1 & 7
\end{array}\right]
$$

**Step 3:** Eliminate below pivot:
$$
R_2 - 2R_1 \rightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
0 & 7 & 23
\end{array}\right]
$$

**Step 4:** Make second pivot equal to 1:
$$
\frac{1}{7}R_2 \rightarrow R_2: \left[\begin{array}{cc|c}
1 & -3 & -8 \\
0 & 1 & \frac{23}{7}
\end{array}\right]
$$

**Step 5:** Eliminate above second pivot (RREF):
$$
R_1 + 3R_2 \rightarrow R_1: \left[\begin{array}{cc|c}
1 & 0 & \frac{13}{7} \\
0 & 1 & \frac{23}{7}
\end{array}\right]
$$

**Solution:** $x = \frac{13}{7}$, $y = \frac{23}{7}$

## Gaussian Elimination

**Gaussian Elimination:** A systematic matrix method using forward elimination followed by back-substitution.

**Process:**

**Phase 1: Forward Elimination** - Transform to row echelon form

**Phase 2: Back-substitution** - Solve for variables starting from bottom row

**Example:** Solve the 3×3 system:

$$
\begin{cases}
x + 2y + z = 8 \\
2x + 5y + 2z = 18 \\
x + y + 3z = 11
\end{cases}
$$

**Step 1:** Augmented matrix:
$$
\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
2 & 5 & 2 & 18 \\
1 & 1 & 3 & 11
\end{array}\right]
$$

**Step 2:** Eliminate first column below pivot:

$R_2 - 2R_1 \rightarrow R_2$:
$$
\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
1 & 1 & 3 & 11
\end{array}\right]
$$

$R_3 - R_1 \rightarrow R_3$:
$$
\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
0 & -1 & 2 & 3
\end{array}\right]
$$

**Step 3:** Eliminate second column below pivot:

$R_3 + R_2 \rightarrow R_3$:
$$
\left[\begin{array}{ccc|c}
1 & 2 & 1 & 8 \\
0 & 1 & 0 & 2 \\
0 & 0 & 2 & 5
\end{array}\right]
$$

**Now in row echelon form**

**Step 4: Back-substitution**

From row 3: $2z = 5$ → $z = \frac{5}{2}$

From row 2: $y = 2$

From row 1: $x + 2(2) + \frac{5}{2} = 8$ → $x + 4 + 2.5 = 8$ → $x = 1.5$

**Solution:** $\left(\frac{3}{2}, 2, \frac{5}{2}\right)$

## Gauss-Jordan Elimination

**Gauss-Jordan Elimination:** Extends Gaussian elimination to achieve reduced row echelon form, eliminating need for back-substitution.

**Process:** Continue row operations until the matrix is in RREF (diagonal of 1's with zeros above and below).

**Example:** Solve:

$$
\begin{cases}
x + y = 3 \\
2x - y = 0
\end{cases}
$$

**Step 1:** Augmented matrix:
$$
\left[\begin{array}{cc|c}
1 & 1 & 3 \\
2 & -1 & 0
\end{array}\right]
$$

**Step 2:** $R_2 - 2R_1 \rightarrow R_2$:
$$
\left[\begin{array}{cc|c}
1 & 1 & 3 \\
0 & -3 & -6
\end{array}\right]
$$

**Step 3:** $-\frac{1}{3}R_2 \rightarrow R_2$:
$$
\left[\begin{array}{cc|c}
1 & 1 & 3 \\
0 & 1 & 2
\end{array}\right]
$$

**Step 4:** $R_1 - R_2 \rightarrow R_1$ (eliminate above pivot):
$$
\left[\begin{array}{cc|c}
1 & 0 & 1 \\
0 & 1 & 2
\end{array}\right]
$$

**Solution:** $x = 1$, $y = 2$ (read directly from RREF)

## Special Cases

**Infinitely Many Solutions:**

If row operations produce a row of all zeros (like [0 0 | 0]), the system has infinitely many solutions.

**Example:**
$$
\begin{cases}
2x + 4y = 6 \\
x + 2y = 3
\end{cases}
$$

These are the same line (second equation is first ÷ 2). Solution: All points on line $x + 2y = 3$.

**No Solution:**

If row operations produce a contradiction (like [0 0 | k] where k ≠ 0), the system has no solution.

**Example:**
$$
\begin{cases}
x + y = 2 \\
x + y = 5
\end{cases}
$$

These are parallel lines. No solution.

## Systems with More than Two Variables

The same methods apply to systems with 3 or more variables:
- Substitution becomes more tedious
- Elimination and matrix methods scale better
- Solutions are points in 3D space (for 3 variables) or higher dimensions

**Example:** Already shown in Gaussian Elimination section above.

