---
title: "Matrices"
---

## Why Matrices?

Whenever you organize numbers into a grid, you are already thinking in matrices. A spreadsheet of monthly sales figures for five products is a matrix with 12 columns (months) and 5 rows (products). A digital photo is a matrix of pixel values. Any time information has two natural indices (row and column, input and output, equation and variable), a matrix is the right container.

The most important early use case is **systems of equations**. Suppose you need to solve:

$$
2x + 3y = 8
$$

$$
5x - y = 1
$$

The coefficients on the left side form a $2 \times 2$ grid, and we can write the entire system compactly as $A\mathbf{x} = \mathbf{b}$:

$$
\begin{bmatrix} 2 & 3 \\ 5 & -1 \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix}
=
\begin{bmatrix} 8 \\ 1 \end{bmatrix}
$$

For a system of 3 equations in 3 unknowns, there are 9 coefficients that naturally arrange into a $3 \times 3$ grid. Matrices give us a single symbol ($A$) to represent that entire grid, and matrix operations (addition, multiplication, inversion) let us manipulate and solve the system without rewriting every coefficient by hand.

> **Scope note:** This page covers the mechanics of matrices: how to add, multiply, transpose, and invert them. For the deeper theory of what these operations mean geometrically (linear transformations, vector spaces, eigenvalues), see [Linear Algebra Foundations](./linear-algebra-foundations).

---

**Matrices:** A matrix is a rectangular array of numbers, symbols, or
expressions arranged in rows and columns.

A ***m*** x ***n*** matrix is a rectangular grid of numbers with ***m***
rows and ***n*** columns.

A square matrix is a ***m*** x ***m*** matrix for some ***m***, or a
***n*** x ***n*** matrix for some ***n***.

The ***i,j*** entry of a matrix means the number in row ***i*** and
column ***j***.

It is important to get these in the correct order: Usually when
you give **(x,y)** coordinates, **x** refers to the horizontal direction
and **y** refers to the vertical direction.

When we talk about the ***I,j*** entry of a matrix, however, the first
number ***i*** refers to the row number (i.e. the vertical
direction) and the second number ***j*** refers to the column
number (i.e. the horizontal direction).

**Matrix Notation:**

A matrix **A** with $m$ rows and $n$ columns is written:

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

Or more compactly: $A = [a_{ij}]$ where $1 \leq i \leq m$ and $1 \leq j \leq n$

## Matrix Addition

**Matrix Addition:** Two matrices can be added if and only if they have the **same dimensions** (same number of rows and columns).

**Rule:** Add corresponding entries

$$A + B = [a_{ij}] + [b_{ij}] = [a_{ij} + b_{ij}]$$

**Example:**

$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$$

**Properties:**

- **Commutative:** $A + B = B + A$
- **Associative:** $(A + B) + C = A + (B + C)$
- **Zero matrix:** $A + 0 = A$ (where 0 is the matrix of all zeros)

## Scalar Multiplication

**Scalar Multiplication:** Multiply every entry of the matrix by a scalar (constant).

$$cA = c[a_{ij}] = [ca_{ij}]$$

**Example:**

$$3 \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 9 & 12 \end{bmatrix}$$

**Properties:**

- $c(A + B) = cA + cB$
- $(c + d)A = cA + dA$
- $c(dA) = (cd)A$
- $1A = A$

## Matrix Multiplication

**Matrix Multiplication:** To multiply matrices $A$ (size $m \times n$) and $B$ (size $n \times p$), the **number of columns in A must equal the number of rows in B**.

The result is a matrix $C$ of size $m \times p$.

**Rule:** The entry $c_{ij}$ in row $i$, column $j$ of the result is the dot product of row $i$ from $A$ and column $j$ from $B$:

$$c_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}$$

**Example:**

$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

**Step-by-step:**
- $c_{11} = 1(5) + 2(7) = 5 + 14 = 19$
- $c_{12} = 1(6) + 2(8) = 6 + 16 = 22$
- $c_{21} = 3(5) + 4(7) = 15 + 28 = 43$
- $c_{22} = 3(6) + 4(8) = 18 + 32 = 50$

**Properties:**

- **NOT commutative:** $AB \neq BA$ in general
- **Associative:** $(AB)C = A(BC)$
- **Distributive:** $A(B + C) = AB + AC$
- **Identity:** $AI = IA = A$ (where $I$ is the identity matrix)

## Identity Matrix

**Identity Matrix:** A square matrix with 1's on the main diagonal and 0's elsewhere.

$$
I_n = \begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}
$$

**Property:** For any $n \times n$ matrix $A$: $AI = IA = A$

**Examples:**

$$I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

## Zero Matrix

**Zero Matrix:** A matrix where all entries are 0.

$$
0_{m \times n} = \begin{bmatrix}
0 & 0 & \cdots & 0 \\
0 & 0 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 0
\end{bmatrix}
$$

**Property:** $A + 0 = A$ and $A \cdot 0 = 0$

## Matrix Transpose

**Transpose:** The transpose of a matrix $A$, denoted $A^T$, is obtained by swapping rows and columns.

If $A = [a_{ij}]$ is $m \times n$, then $A^T = [a_{ji}]$ is $n \times m$

**Example:**

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \Rightarrow A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

**Properties:**
- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$ (order reverses!)
- $(cA)^T = cA^T$

## Inverse Matrix

**Inverse Matrix:** For a square matrix $A$, the inverse $A^{-1}$ (if it exists) satisfies:

$$AA^{-1} = A^{-1}A = I$$

**Not all matrices have inverses.** A matrix is **invertible** (or **non-singular**) if its determinant is non-zero.

**For 2×2 matrix:**

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

$$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

Where $ad - bc$ is the **determinant** of $A$.

**Example:**

$$A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$$

Determinant: $2(4) - 3(1) = 8 - 3 = 5$

$$A^{-1} = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 0.8 & -0.6 \\ -0.2 & 0.4 \end{bmatrix}$$

**Verification:**

$$AA^{-1} = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix} \begin{bmatrix} 0.8 & -0.6 \\ -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$

**Properties:**
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$ (order reverses!)
- $(A^T)^{-1} = (A^{-1})^T$

