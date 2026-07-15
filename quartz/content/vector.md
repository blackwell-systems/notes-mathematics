---
title: "Vector"
prerequisites: ["geometry-trigonometry", "number-systems"]
enables: ["linear-algebra-foundations", "multivariable-calculus"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Geometry & Trigonometry](./geometry-trigonometry) · [Number Systems](./number-systems)
> **Leads to:** [Linear Algebra Foundations](./linear-algebra-foundations) · [Multivariable Calculus](./multivariable-calculus)

## Why Numbers Alone Are Not Enough

If someone tells you "the airport is 5 miles away," you still cannot get there: you need to know *which direction*. "5 miles northeast" gives you everything you need. The same is true for wind speed ("20 mph from the northwest"), forces ("10 newtons to the right"), and velocity ("60 km/h due south"). In each case, a single number (the magnitude) is incomplete without a direction.

A plain number that has size but no direction is called a **scalar**. Temperature, mass, and speed are scalars. A **vector** bundles a magnitude and a direction into one object. Displacement, velocity, force, and acceleration are vectors.

**The key insight:** a vector packages both "how much" and "which way" into a single mathematical object, and the rules for adding and scaling vectors mirror the way these quantities combine in the physical world. Two forces acting on a box produce a single net force; adding the two force vectors gives you that result.

> **Scope note:** This page covers vectors as geometric objects and the operations you can perform on them (addition, scaling, dot product, cross product). For the deeper algebraic theory (vector spaces, linear independence, span, basis), see [Linear Algebra Foundations](./linear-algebra-foundations).

---

**Vector:** A vector is a geometric object that has **magnitude
(length/size)** and **direction**.

It has an **initial point**, where it begins, and a **terminal point**,
where it ends.

Geometrically, we can picture a vector as a directed line segment, whose
length is the magnitude of the vector and with an arrow indicating the
direction.

![A vector as a directed line segment: an arrow from its initial point A to its terminal point B, with the length labeled magnitude and the arrowhead indicating direction](./media/vec-directed-segment.png)

## Writing Vectors

**Writing Vectors:**

-   **Boldface notation:** **v**, **u**, **w**

-   **Arrow notation:** $\vec{v}$, $\vec{u}$, $\vec{w}$

-   **Directional notation:** If starting at point $A$ and moving toward point $B$, we write $\vec{AB}$ to represent the vector

-   **Component notation:** Given an initial point $(0,0)$ and terminal point $(a,b)$, a vector may be represented as $\langle a, b \rangle$

    -   The symbol $\langle a, b \rangle$ has special significance. It is called the **standard position**. A vector in standard position has initial point $(0,0)$ and terminal point $(a,b)$

## Position Vector

**Position Vector:** A position vector is a vector that represents the
position of a point in space relative to a reference origin. It is also
called a location vector or radius vector.

The position vector is typically defined with respect to the origin of
the coordinate system. The origin is the point where all the coordinates
are zero.

The position vector will "point" from the origin of the coordinate
system to the terminal point.

There are several advantages to converting vectors into position vectors:

- Because the tail is fixed at the origin, a position vector is uniquely determined by the coordinates of its head alone. There is no separate initial point to track.
- This makes the algebra coordinate-wise: adding two position vectors adds their coordinates, and scaling one scales its coordinates.
- It sets up a clean point-to-vector correspondence: every point $(a, b)$ in the plane matches exactly one position vector $\langle a, b \rangle$, so geometry (points) and algebra (vectors) become interchangeable.

### Calculate the Position Vector

To find the position vector of a point, subtract the coordinates of the tail from the coordinates of the head. For a vector $\vec{AB}$ with initial point $A = (a_1, a_2)$ and terminal point $B = (b_1, b_2)$:

$$
\vec{AB} = \langle b_1 - a_1,\; b_2 - a_2 \rangle
$$

The result is the equivalent vector drawn from the origin, so its head lies at $(b_1 - a_1,\; b_2 - a_2)$. When the tail is already the origin, the head's coordinates are the position vector directly.

![A directed segment from point A to point B and the equal position vector drawn from the origin to (b1 - a1, b2 - a2), shown parallel and the same length](./media/vec-position-vector.png)

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

Both a unit vector and a position vector can be pictured with their tail at the origin, so they are easy to confuse. The difference is what each one carries:

- A **position vector** records both magnitude and direction. Its head sits at the actual coordinates of the point it represents, so its length can be anything.
- A **unit vector** records direction only. It is normalized to length 1, discarding the magnitude.

In short, a position vector answers "where is the point," while a unit vector answers "which way does it point." Dividing a position vector by its own magnitude produces the unit vector in the same direction.

## Magnitude

**Magnitude:** The magnitude of a vector is depicted by two vertical bars surrounding the vector: $\|\mathbf{a}\|$ or $|\mathbf{a}|$

**Vector magnitude** is calculated using the distance formula:

$$
\|\mathbf{a}\| = \sqrt{x^2 + y^2}
$$

**For 3D vectors:**

$$
\|\mathbf{a}\| = \sqrt{x^2 + y^2 + z^2}
$$

## Scalar

**Scalars:** A scalar is just a number, having size/magnitude only.
Remember, vectors have magnitude and direction. Scalars lack direction
and only have magnitude.

Scalars are often used to "scale" vectors by a constant factor.

## Vector Operations

### Vector Addition

**Vector Addition:** Add corresponding components.

For vectors $\mathbf{u} = \langle u_1, u_2 \rangle$ and $\mathbf{v} = \langle v_1, v_2 \rangle$:

$$
\mathbf{u} + \mathbf{v} = \langle u_1 + v_1, u_2 + v_2 \rangle
$$

**Geometric Interpretation:** Place tail of **v** at head of **u**, or use parallelogram rule.

**Example 1:** $\langle 3, 4 \rangle + \langle 1, 2 \rangle = \langle 4, 6 \rangle$

**Example 2:** $\langle -2, 5 \rangle + \langle 3, -1 \rangle = \langle 1, 4 \rangle$

![Tip-to-tail and parallelogram construction of vector addition: u = (3,4) in blue and v = (1,2) in red placed head to tail, with the resultant u plus v = (4,6) drawn in green as the diagonal of the parallelogram they span](./media/vec-addition.png)

**Properties:**
- **Commutative:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
- **Associative:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
- **Identity:** $\mathbf{u} + \mathbf{0} = \mathbf{u}$

### Vector Subtraction

**Vector Subtraction:** Subtract corresponding components.

$$
\mathbf{u} - \mathbf{v} = \langle u_1 - v_1, u_2 - v_2 \rangle
$$

**Geometric Interpretation:** Vector from head of **v** to head of **u**.

**Example:** $\langle 5, 7 \rangle - \langle 2, 3 \rangle = \langle 3, 4 \rangle$

![Vector subtraction u minus v: u = (5,7) and v = (2,3) drawn from the origin, with u minus v = (3,4) shown as the green arrow from the head of v to the head of u, and the same vector redrawn from the origin](./media/vec-subtraction.png)

### Scalar Multiplication

**Scalar Multiplication:** Multiply each component by the scalar.

$$
c\mathbf{v} = c\langle v_1, v_2 \rangle = \langle cv_1, cv_2 \rangle
$$

**Effect:**
- Changes magnitude by factor $|c|$
- Reverses direction if $c < 0$
- Does not change direction if $c > 0$

**Example 1:** $3\langle 2, -1 \rangle = \langle 6, -3 \rangle$

**Example 2:** $-2\langle 1, 4 \rangle = \langle -2, -8 \rangle$

![Scalar multiples of v = (2,1) all lying on one line through the origin: 2v = (4,2) is twice as long, one-half v is shorter, and negative v = (-2,-1) points the opposite way](./media/vec-scalar-multiplication.png)

**Properties:**
- $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$
- $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$
- $c(d\mathbf{v}) = (cd)\mathbf{v}$
- $1\mathbf{v} = \mathbf{v}$

### Magnitude (Length)

**Magnitude:** The length of vector $\mathbf{v} = \langle v_1, v_2 \rangle$:

$$
|\mathbf{v}| = \sqrt{v_1^2 + v_2^2}
$$

**3D:** For $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$:

$$
|\mathbf{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}
$$

**Examples:**

1. $|\langle 3, 4 \rangle| = \sqrt{9 + 16} = 5$
2. $|\langle -2, 5 \rangle| = \sqrt{4 + 25} = \sqrt{29}$
3. $|\langle 1, 2, 2 \rangle| = \sqrt{1 + 4 + 4} = 3$

### Unit Vector

**Unit Vector:** A vector with magnitude 1.

To find unit vector in direction of **v**:

$$
\hat{\mathbf{v}} = \frac{\mathbf{v}}{|\mathbf{v}|}
$$

**Example:** Find unit vector for $\mathbf{v} = \langle 3, 4 \rangle$

$|\mathbf{v}| = 5$

$\hat{\mathbf{v}} = \frac{1}{5}\langle 3, 4 \rangle = \langle \frac{3}{5}, \frac{4}{5} \rangle$

Check: $|\hat{\mathbf{v}}| = \sqrt{\left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2} = \sqrt{\frac{9}{25} + \frac{16}{25}} = 1$ ✓

### Dot Product (Scalar Product)

**Meaning first:** The dot product measures how much two vectors align, since $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$. It is positive when the vectors point in similar directions, zero when they are perpendicular, and negative when they point in opposing directions.

Drag the two vectors below to build intuition for all the operations at once: sum, difference, dot product, the angle between them, the projection of one onto the other, and the 2D cross product (the signed area of the parallelogram they span).

<iframe src="/static/interactive/vector-playground.html" width="100%" height="640" style="border:none;"></iframe>

**Dot Product:** For $\mathbf{u} = \langle u_1, u_2 \rangle$ and $\mathbf{v} = \langle v_1, v_2 \rangle$:

$$
\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2
$$

**Result is a scalar, not a vector.**

**Geometric Form:**

$$
\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|\cos(\theta)
$$

Where $\theta$ is the angle between the vectors.

**Example 1:** $\langle 2, 3 \rangle \cdot \langle 4, -1 \rangle = 2(4) + 3(-1) = 8 - 3 = 5$

**Example 2:** $\langle 1, 0 \rangle \cdot \langle 0, 1 \rangle = 0$ (perpendicular vectors)

**Properties:**
- **Commutative:** $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
- **Distributive:** $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$
- $\mathbf{v} \cdot \mathbf{v} = |\mathbf{v}|^2$

**Finding Angle Between Vectors:**

$$
\cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}
$$

**Example:** Find angle between $\mathbf{u} = \langle 1, 0 \rangle$ and $\mathbf{v} = \langle 1, 1 \rangle$

$\cos(\theta) = \frac{1}{\sqrt{1} \times \sqrt{2}} = \frac{1}{\sqrt{2}}$

$\theta = 45° = \frac{\pi}{4}$

**Orthogonality (Perpendicular Vectors):**

Two vectors are **orthogonal** (perpendicular) if and only if:

$$
\mathbf{u} \cdot \mathbf{v} = 0
$$

### Cross Product (Vector Product)

**Cross Product:** For 3D vectors $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ and $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$:

$$
\mathbf{u} \times \mathbf{v} = \langle u_2 v_3 - u_3 v_2,\; u_3 v_1 - u_1 v_3,\; u_1 v_2 - u_2 v_1 \rangle
$$

**Result is a vector perpendicular to both u and v.**

**Determinant Form:** Uses determinant with unit vectors $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ in first row

**Magnitude:**

$$
|\mathbf{u} \times \mathbf{v}| = |\mathbf{u}||\mathbf{v}|\sin(\theta)
$$

Where $\theta$ is the angle between vectors.

**Example:** $\langle 1, 0, 0 \rangle \times \langle 0, 1, 0 \rangle$

$= \langle 0(0) - 0(1),\; 0(0) - 1(0),\; 1(1) - 0(0) \rangle = \langle 0, 0, 1 \rangle$

![Three-dimensional right-hand-rule diagram: i = (1,0,0) and j = (0,1,0) span a unit square of area 1 in the xy-plane, and their cross product i cross j = k = (0,0,1) points straight up, perpendicular to both](./media/vec-cross-product.png)

**Properties:**
- **NOT commutative:** $\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})$ (anti-commutative)
- **Distributive:** $\mathbf{u} \times (\mathbf{v} + \mathbf{w}) = \mathbf{u} \times \mathbf{v} + \mathbf{u} \times \mathbf{w}$
- $\mathbf{v} \times \mathbf{v} = \mathbf{0}$ (parallel vectors have zero cross product)
- **Right-hand rule:** Direction given by right-hand rule

**Applications:**
- Finding normal vector to plane
- Computing area of parallelogram: $|\mathbf{u} \times \mathbf{v}|$
- Torque in physics

### Projection

**Vector Projection:** The projection of **u** onto **v** is:

$$
\text{proj}_{\mathbf{v}}(\mathbf{u}) = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|^2} \mathbf{v}
$$

**Scalar Projection (Component):**

$$
\text{comp}_{\mathbf{v}}(\mathbf{u}) = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|}
$$

**Example:** Project $\mathbf{u} = \langle 3, 4 \rangle$ onto $\mathbf{v} = \langle 1, 0 \rangle$

$\text{proj}_{\mathbf{v}}(\mathbf{u}) = \frac{3(1) + 4(0)}{1^2 + 0^2} \langle 1, 0 \rangle = 3\langle 1, 0 \rangle = \langle 3, 0 \rangle$

![Projection of u = (3,4) onto v = (1,0): a dashed perpendicular drops from the head of u to the x-axis, and the green projection vector (3,0) is the shadow of u along the direction of v](./media/vec-projection.png)

## Component and Direction Form

Physics and navigation usually hand you a vector as a **magnitude and a direction** ("a 10 newton force at 30 degrees above horizontal"), but the componentwise algebra above needs it as $\langle x, y \rangle$. Converting between the two forms is one of the most common vector operations.

**From magnitude and angle to components.** If a vector has magnitude $r$ (read "r") and points at an angle $\theta$ (read "theta") measured counterclockwise from the positive $x$-axis, then its components are

$$
\langle x, y \rangle = \langle r\cos\theta,\; r\sin\theta \rangle
$$

The horizontal leg is $r\cos\theta$ and the vertical leg is $r\sin\theta$: the vector is the hypotenuse of a right triangle whose legs are its components.

![Resolving a force of magnitude 10 at 30 degrees into a horizontal component 10 cos 30 approximately 8.66 and a vertical component 10 sin 30 equals 5, drawn as the two legs of a right triangle under the vector](./media/vec-components.png)

**Worked Example (physics):** A force of magnitude $10$ N acts at $30°$ above the horizontal. Its components are

$$
F_x = 10\cos 30° = 10\cdot\tfrac{\sqrt{3}}{2} \approx 8.66 \text{ N}, \qquad F_y = 10\sin 30° = 10\cdot\tfrac{1}{2} = 5 \text{ N}
$$

so $\mathbf{F} = \langle 8.66,\; 5 \rangle$ N.

**From components to magnitude and angle.** Going the other way, the magnitude is the length $\lVert\mathbf v\rVert = \sqrt{x^2+y^2}$ and the direction angle is

$$
\theta = \operatorname{atan2}(y, x)
$$

read aloud as "arc-tangent-two of y and x." The two-argument $\operatorname{atan2}$ is used instead of $\arctan(y/x)$ because it returns the correct angle in all four quadrants (plain $\arctan$ cannot tell $\langle 1,1\rangle$ from $\langle -1,-1\rangle$, since their ratio $y/x$ is the same).

**Worked Example:** The displacement $\langle 3, 4 \rangle$ has magnitude $\sqrt{9+16}=5$ and direction $\theta = \operatorname{atan2}(4,3) \approx 53.13°$.

**Net force by components.** Because addition is componentwise, resolving each vector into components makes summing them trivial. A $3$ N force pointing east, $\langle 3, 0 \rangle$, plus a $4$ N force pointing north, $\langle 0, 4 \rangle$, gives a net force $\langle 3, 4 \rangle$ of magnitude $5$ N at $53.13°$ north of east.

Writing $\langle x, y \rangle = x\langle 1,0\rangle + y\langle 0,1\rangle$ expresses the vector as a weighted sum of the two axis directions. That "weighted sum of building-block vectors" idea, called a linear combination, is the bridge to everything that follows.

## Vectors in n Dimensions

Everything so far used two or three components, but nothing forces that. A vector can have any number of components:

$$
\mathbf v = \langle v_1, v_2, \dots, v_n \rangle
$$

Such a vector lives in $\mathbb{R}^n$ (read "R-n"), the set of all ordered lists of $n$ real numbers. Every operation defined above except the cross product extends unchanged, componentwise:

- **Addition and scaling** act component by component.
- **Dot product:** $\mathbf u \cdot \mathbf v = \sum_{i=1}^{n} u_i v_i$ (read "the sum over $i$ of $u_i$ times $v_i$").
- **Magnitude:** $\lVert \mathbf v \rVert = \sqrt{\sum_{i=1}^{n} v_i^2}$.

The cross product is the exception: it is defined only in three dimensions. The dot product, by contrast, works in every dimension, which is why it does so much of the heavy lifting later.

**Standard basis vectors.** In $\mathbb{R}^n$ the standard basis is $\mathbf e_1 = \langle 1,0,\dots,0\rangle,\ \mathbf e_2 = \langle 0,1,0,\dots,0\rangle,\ \dots,\ \mathbf e_n$ (each $\mathbf e_i$, read "e-sub-i," has a $1$ in slot $i$ and $0$ elsewhere). Any vector is the sum of its components times these basis vectors: $\mathbf v = v_1\mathbf e_1 + \dots + v_n\mathbf e_n$. In three dimensions these are the familiar $\mathbf i, \mathbf j, \mathbf k$.

**Linear combination.** A **linear combination** of vectors $\mathbf v_1, \dots, \mathbf v_k$ is any sum

$$
a_1\mathbf v_1 + a_2\mathbf v_2 + \dots + a_k\mathbf v_k
$$

where the $a_i$ (read "a-sub-i") are scalars. This single scale-and-add operation is the most important idea built on vectors: the set of all linear combinations of some vectors is their **span**, and the questions of which combinations are redundant (linear independence) and which minimal set generates everything (a basis) are the starting point of [Linear Algebra Foundations](./linear-algebra-foundations).

**Worked Example:** $2\langle 1,0\rangle + 3\langle 0,1\rangle = \langle 2,3\rangle$, and in three dimensions $\langle 1,2,3\rangle\cdot\langle 4,5,6\rangle = 4+10+18 = 32$.

**Distance between vectors.** Treating vectors as points, the distance between $\mathbf u$ and $\mathbf v$ is the magnitude of their difference:

$$
d(\mathbf u, \mathbf v) = \lVert \mathbf u - \mathbf v \rVert = \sqrt{\sum_{i=1}^{n}(u_i - v_i)^2}
$$

This is the ordinary Euclidean distance. For $\mathbf u = \langle 1,2,2\rangle$ and $\mathbf v = \langle 4,6,2\rangle$, the difference is $\langle -3,-4,0\rangle$, so $d = \sqrt{9+16+0} = 5$.

## Applications: Physics and Machine Learning

The same handful of operations power two very different fields.

### Physics

- **Work** is the dot product of force and displacement: $W = \mathbf F \cdot \mathbf d$ (read "W equals F dot d"). A force $\mathbf F = \langle 3, 4\rangle$ N moving an object through displacement $\mathbf d = \langle 2, 0\rangle$ m does $W = 3(2) + 4(0) = 6$ joules. Only the part of the force along the motion counts, which is exactly what the dot product measures.
- **Torque** is the cross product of the lever arm and the force: $\boldsymbol\tau = \mathbf r \times \mathbf F$ (read "tau equals r cross F"). With $\mathbf r = \langle 2,0,0\rangle$ m and $\mathbf F = \langle 0,3,0\rangle$ N, $\boldsymbol\tau = \langle 0,0,6\rangle$ newton-meters: a magnitude-$6$ torque about the $z$-axis. The perpendicular direction from the cross product is the axis the force twists around.
- **Net force** is vector addition, resolved by components as shown above.

### Machine Learning

In machine learning a single data example is stored as a **feature vector**: a point in $\mathbb{R}^n$ whose components are measured features. A house might be $\langle \text{square feet},\ \text{bedrooms},\ \text{age}\rangle$; a $28\times 28$ pixel image is a vector in $\mathbb{R}^{784}$. The vector operations then become the core computations.

- **Cosine similarity** measures how alike two vectors are in direction, ignoring their lengths:
$$
\cos\theta = \frac{\mathbf u \cdot \mathbf v}{\lVert\mathbf u\rVert\,\lVert\mathbf v\rVert} \in [-1, 1]
$$
It is $1$ for vectors pointing the same way, $0$ for perpendicular, and $-1$ for opposite. This is the standard way to compare word or document embeddings. For $\mathbf u = \langle 1,1\rangle$ and $\mathbf v = \langle 1,0\rangle$, $\cos\theta = \frac{1}{\sqrt 2} \approx 0.707$ (a $45°$ angle).

![Cosine similarity between a reference vector and three others: a nearly aligned vector with cosine about 0.94, a perpendicular vector with cosine 0, and an opposing vector with negative cosine, all drawn from a common origin](./media/vec-cosine-similarity.png)

- **Euclidean distance** $\lVert\mathbf u - \mathbf v\rVert$ measures how far apart two examples are; the k-nearest-neighbors classifier labels a new point by the labels of the closest feature vectors.
- **The linear model, or neuron.** The fundamental computation in a linear model (and in one unit of a neural network) is a weighted sum of inputs, which is a dot product of a weight vector $\mathbf w$ with the input $\mathbf x$ plus a bias $b$:
$$
s = \mathbf w \cdot \mathbf x + b
$$
With weights $\mathbf w = \langle 0.5, -1, 2\rangle$, input $\mathbf x = \langle 4, 1, 0.5\rangle$, and bias $b = 1$, the score is $s = (2 - 1 + 1) + 1 = 3$. Training a model means adjusting $\mathbf w$ and $b$ so these scores are useful.
- **Normalization.** Dividing a vector by its magnitude, $\mathbf x / \lVert\mathbf x\rVert$, rescales every example to length $1$, a common preprocessing step so that magnitude differences do not dominate.

These uses all reduce to addition, scaling, the dot product, and magnitude: the operations on this page. The theory of what collections of vectors can represent continues in [Linear Algebra Foundations](./linear-algebra-foundations).
