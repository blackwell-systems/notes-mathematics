---
title: "Vector"
---

**Vector:** A vector is a geometric object that has **magnitude
(length/size)** and **direction**.

It has an **initial point**, where it begins, and a **terminal point**,
where it ends.

Geometrically, we can picture a vector as a directed line segment, whose
length is the magnitude of the vector and with an arrow indicating the
direction.

![A blue line on a black background Description automatically
generated](./media/image182.png)

## Writing Vectors

**Writing Vectors:**

-   **Boldface notation:** **v**, **u**, **w**

-   **Arrow notation:** →v (v with arrow on top), →u, →w

-   **Directional notation:** If starting at point A and moving toward point B, we write →AB to represent the vector

-   **Component notation:** Given an initial point (0,0) and terminal point (a,b), a vector may be represented as **⟨a,b⟩** or **<a,b>**

    -   The symbol **⟨a,b⟩** has special significance. It is called the **standard position**. A vector in standard position has initial point **(0,0)** and terminal point **(a,b)**

## Position Vector

**Position Vector:** A position vector is a vector that represents the
position of a point in space relative to a reference origin. It is also
called a location vector or radius vector.

The position vector is typically defined with respect to the origin of
the coordinate system. The origin is the point where all the coordinates
are zero.

The position vector will "point" from the origin of the coordinate
system to the terminal point.

There are many advantages to converting vectors into position vectors:

### Calculate the Position Vector

**Calculate the Position Vector**

![A math equation with black text Description automatically generated
with medium
confidence](./media/image183.png)

## Unit Vector

**Unit Vector:** Similarly to the unit circle, a unit vector has a
magnitude of 1.

A vector can be scaled "off" the unit vector.

Because scalars only change the magnitude of a vector and not the
direction, the vector will still be oriented in the same direction after
having been scaled.

A unit vector is similar to a position vector, except it has the
additional restriction that the magnitude must be 1.

### Unit Vector vs Position Vector

**Unit Vector vs Position Vector**

## Magnitude

**Magnitude:** The magnitude of a vector is depicted by two vertical bars surrounding the vector: ||a|| or |a|

**Vector magnitude** is calculated using the distance formula:

||a|| = √(x² + y²)

**For 3D vectors:** ||a|| = √(x² + y² + z²)

## Scalar

**Scalars:** A scalar is just a number, having size/magnitude only.
Remember, vectors have magnitude and direction. Scalars lack direction
and only have magnitude.

Scalars are often used to "scale" vectors by a constant factor.

## Vector Operations

### Vector Addition

**Vector Addition:** Add corresponding components.

For vectors **u** = ⟨u₁, u₂⟩ and **v** = ⟨v₁, v₂⟩:

**u** + **v** = ⟨u₁ + v₁, u₂ + v₂⟩

**Geometric Interpretation:** Place tail of **v** at head of **u**, or use parallelogram rule.

**Example 1:** ⟨3, 4⟩ + ⟨1, 2⟩ = ⟨4, 6⟩

**Example 2:** ⟨-2, 5⟩ + ⟨3, -1⟩ = ⟨1, 4⟩

**Properties:**
- **Commutative:** **u** + **v** = **v** + **u**
- **Associative:** (**u** + **v**) + **w** = **u** + (**v** + **w**)
- **Identity:** **u** + **0** = **u**

### Vector Subtraction

**Vector Subtraction:** Subtract corresponding components.

**u** - **v** = ⟨u₁ - v₁, u₂ - v₂⟩

**Geometric Interpretation:** Vector from head of **v** to head of **u**.

**Example:** ⟨5, 7⟩ - ⟨2, 3⟩ = ⟨3, 4⟩

### Scalar Multiplication

**Scalar Multiplication:** Multiply each component by the scalar.

c**v** = c⟨v₁, v₂⟩ = ⟨cv₁, cv₂⟩

**Effect:**
- Changes magnitude by factor |c|
- Reverses direction if c < 0
- Does not change direction if c > 0

**Example 1:** 3⟨2, -1⟩ = ⟨6, -3⟩

**Example 2:** -2⟨1, 4⟩ = ⟨-2, -8⟩

**Properties:**
- c(**u** + **v**) = c**u** + c**v**
- (c + d)**v** = c**v** + d**v**
- c(d**v**) = (cd)**v**
- 1**v** = **v**

### Magnitude (Length)

**Magnitude:** The length of vector **v** = ⟨v₁, v₂⟩:

|**v**| = √(v₁² + v₂²)

**3D:** For **v** = ⟨v₁, v₂, v₃⟩:

|**v**| = √(v₁² + v₂² + v₃²)

**Examples:**

1. |⟨3, 4⟩| = √(9 + 16) = 5
2. |⟨-2, 5⟩| = √(4 + 25) = √29
3. |⟨1, 2, 2⟩| = √(1 + 4 + 4) = 3

### Unit Vector

**Unit Vector:** A vector with magnitude 1.

To find unit vector in direction of **v**:

**v̂** = **v** / |**v**|

**Example:** Find unit vector for **v** = ⟨3, 4⟩

|**v**| = 5

**v̂** = (1/5)⟨3, 4⟩ = ⟨3/5, 4/5⟩

Check: |**v̂**| = √((3/5)² + (4/5)²) = √(9/25 + 16/25) = 1 ✓

### Dot Product (Scalar Product)

**Dot Product:** For **u** = ⟨u₁, u₂⟩ and **v** = ⟨v₁, v₂⟩:

**u** · **v** = u₁v₁ + u₂v₂

**Result is a scalar, not a vector.**

**Geometric Form:**

**u** · **v** = |**u**||**v**|cos(θ)

Where θ is the angle between the vectors.

**Example 1:** ⟨2, 3⟩ · ⟨4, -1⟩ = 2(4) + 3(-1) = 8 - 3 = 5

**Example 2:** ⟨1, 0⟩ · ⟨0, 1⟩ = 0 (perpendicular vectors)

**Properties:**
- **Commutative:** **u** · **v** = **v** · **u**
- **Distributive:** **u** · (**v** + **w**) = **u** · **v** + **u** · **w**
- **v** · **v** = |**v**|²

**Finding Angle Between Vectors:**

cos(θ) = (**u** · **v**) / (|**u**||**v**|)

**Example:** Find angle between **u** = ⟨1, 0⟩ and **v** = ⟨1, 1⟩

cos(θ) = 1 / (√1 × √2) = 1/√2

θ = 45° = π/4

**Orthogonality (Perpendicular Vectors):**

Two vectors are **orthogonal** (perpendicular) if and only if:

**u** · **v** = 0

### Cross Product (Vector Product)

**Cross Product:** For 3D vectors **u** = ⟨u₁, u₂, u₃⟩ and **v** = ⟨v₁, v₂, v₃⟩:

**u** × **v** = ⟨u₂v₃ - u₃v₂, u₃v₁ - u₁v₃, u₁v₂ - u₂v₁⟩

**Result is a vector perpendicular to both u and v.**

**Determinant Form:** Uses determinant with unit vectors **i**, **j**, **k** in first row

**Magnitude:**

|**u** × **v**| = |**u**||**v**|sin(θ)

Where θ is the angle between vectors.

**Example:** ⟨1, 0, 0⟩ × ⟨0, 1, 0⟩

= ⟨0(0) - 0(1), 0(0) - 1(0), 1(1) - 0(0)⟩ = ⟨0, 0, 1⟩

**Properties:**
- **NOT commutative:** **u** × **v** = -(**v** × **u**) (anti-commutative)
- **Distributive:** **u** × (**v** + **w**) = **u** × **v** + **u** × **w**
- **v** × **v** = **0** (parallel vectors have zero cross product)
- **Right-hand rule:** Direction given by right-hand rule

**Applications:**
- Finding normal vector to plane
- Computing area of parallelogram: |**u** × **v**|
- Torque in physics

### Projection

**Vector Projection:** The projection of **u** onto **v** is:

proj_**v**(**u**) = ((**u** · **v**) / |**v**|²) **v**

**Scalar Projection (Component):**

comp_**v**(**u**) = (**u** · **v**) / |**v**|

**Example:** Project **u** = ⟨3, 4⟩ onto **v** = ⟨1, 0⟩

proj_**v**(**u**) = (3(1) + 4(0)) / (1² + 0²) × ⟨1, 0⟩ = 3⟨1, 0⟩ = ⟨3, 0⟩

