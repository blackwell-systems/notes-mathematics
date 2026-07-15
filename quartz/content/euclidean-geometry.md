---
title: "Euclidean Geometry"
prerequisites: ["set-theory"]
enables: ["geometry-trigonometry", "conic-sections"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Set Theory](./set-theory)
> **Leads to:** [Geometry & Trigonometry](./geometry-trigonometry) · [Conic Sections](./conic-sections)

Geometry is the study of shape, size, position, and space. This page builds the subject the way Euclid did around 300 BCE: starting from a handful of primitive notions and self-evident assumptions, then deriving everything else step by step. This is **synthetic** (axiom-based) geometry, as opposed to the **coordinate** (algebraic) approach on the [Geometry & Trigonometry](./geometry-trigonometry) page, where points become number pairs. Start here for the vocabulary and the logical scaffolding; go there for measurement with coordinates and trigonometry.

## The Building Blocks: Point, Line, Plane

Every mathematical system has to start somewhere. If you try to define every term using earlier terms, you eventually run in a circle or never stop. Euclidean geometry breaks the regress by leaving three terms **undefined**, describing them only by how they behave. These are the primitive notions from which everything else is built.

- A **point** has a location but no size: no length, width, or thickness. It marks a position. We label points with capital letters: $A$, $B$, $P$.
- A **line** is straight, has no thickness, and extends without end in both directions. It has one dimension (length). A line is determined by any two distinct points on it, so the line through $A$ and $B$ is written $\overleftrightarrow{AB}$ (read "line AB").
- A **plane** is a flat surface with no thickness that extends without end in two dimensions. It is determined by any three points not all on the same line.

![Three panels showing the three undefined terms: a single labeled point A, an infinite line drawn with arrowheads on both ends through points A and B, and a shaded parallelogram representing a plane P with three non-collinear points A, B, C](./media/geof-point-line-plane.png)

Two more words describe how these relate. Points that lie on one common line are **collinear** (read "co-linear"); points that lie in one common plane are **coplanar**. Two lines that cross share exactly one point, called their point of **intersection**.

## Segments, Rays, and Distance

From a line we carve out the two most useful finite and half-infinite pieces.

- A **line segment** $\overline{AB}$ (read "segment AB") is the portion of a line between two **endpoints** $A$ and $B$, including both endpoints. It has a finite length.
- A **ray** $\overrightarrow{AB}$ (read "ray AB") starts at an endpoint $A$ and extends without end through $B$. The starting point $A$ is the ray's **vertex**.
- Two rays that share a vertex and point in exactly opposite directions, together forming a straight line, are **opposite rays**.

![Three panels: a line segment AB with two solid endpoints and a midpoint M marked with equal tick marks on each half, a ray AB with a dot at A and an arrowhead past B, and a point O with two opposite rays extending left and right to form a straight line](./media/geof-segment-ray.png)

The **distance** between two points is the length of the segment joining them, written $AB$ or $|AB|$. Two segments with equal length are **congruent**, written $\overline{AB} \cong \overline{CD}$ (the symbol $\cong$ is read "is congruent to"). The **midpoint** $M$ of $\overline{AB}$ is the point that divides it into two congruent halves, so $AM = MB$. A line, ray, or segment through the midpoint is a **segment bisector** ("bisect" means to cut into two equal parts).

## Angles

An **angle** is the figure formed by two rays that share a common vertex. The two rays are the angle's **sides** and the shared point is its **vertex**. The angle formed by rays $\overrightarrow{BA}$ and $\overrightarrow{BC}$ is written $\angle ABC$ or just $\angle B$ (the symbol $\angle$ is read "angle," and the vertex letter always goes in the middle).

We measure how "open" an angle is in **degrees**, written with the symbol $°$. One full turn is $360°$, a half turn is $180°$, and a quarter turn is $90°$. Angles are classified by size:

- **Acute** angle: between $0°$ and $90°$.
- **Right** angle: exactly $90°$, marked with a small square at the vertex.
- **Obtuse** angle: between $90°$ and $180°$.
- **Straight** angle: exactly $180°$ (the two sides are opposite rays).
- **Reflex** angle: between $180°$ and $360°$.

![Five small angle sketches labeled with name and measure: an acute angle near 45 degrees, a right angle of 90 degrees marked with a square, an obtuse angle near 130 degrees, a straight angle of 180 degrees, and a reflex angle near 300 degrees drawn with the large arc](./media/geof-angle-types.png)

### Angle Pairs

Angles that occur together have special names, and each name carries a fact you can use.

- **Complementary** angles are two angles whose measures add to $90°$. If one measures $35°$, its complement measures $55°$.
- **Supplementary** angles are two angles whose measures add to $180°$. If one measures $110°$, its supplement measures $70°$.
- **Adjacent** angles share a vertex and a side but do not overlap.
- A **linear pair** is two adjacent angles whose non-shared sides are opposite rays. A linear pair is always supplementary (they add to $180°$).
- **Vertical angles** are the two opposite angles formed when two lines cross. Vertical angles are always congruent (equal).

![Three panels: complementary angles that together form a right angle labeled sum equals 90 degrees, a supplementary linear pair splitting a straight line labeled sum equals 180 degrees, and two crossing lines whose opposite vertical angles are marked equal](./media/geof-angle-pairs.png)

A ray that splits an angle into two congruent angles is an **angle bisector**.

## Euclid's Postulates

Euclid organized geometry into theorems proved from a short list of **postulates** (assumptions taken as true without proof) and **common notions** (general logical truths, such as "things equal to the same thing are equal to each other"). His five postulates are:

1. A straight line segment can be drawn joining any two points.
2. Any straight line segment can be extended indefinitely into a line.
3. Given any segment, a circle can be drawn with that segment as radius and one endpoint as center.
4. All right angles are equal to one another.
5. **The parallel postulate:** through a point not on a given line, there is exactly one line parallel to the given line.

![A horizontal line labeled l with a point P above it, and exactly one line drawn through P parallel to l, both marked with matching parallel arrowheads, captioned that exactly one parallel exists through the point](./media/geof-parallel-postulate.png)

The first four postulates are simple and were never controversial. The fifth, the parallel postulate, is different: it is less obvious, and for two thousand years mathematicians tried to derive it from the other four. They failed, because it cannot be derived. Replacing it with alternatives produces perfectly consistent **non-Euclidean geometries** (on a sphere there are no parallels; on a saddle-shaped surface there are many). Everything on this page assumes the Euclidean fifth postulate.

## Parallel and Perpendicular Lines

Two lines in a plane are **parallel**, written $\ell \parallel m$ (the symbol $\parallel$ is read "is parallel to"), if they never meet no matter how far they are extended. Two lines are **perpendicular**, written $\ell \perp m$ (the symbol $\perp$ is read "is perpendicular to"), if they meet at a right angle. In three dimensions, two lines that are not parallel and never meet are called **skew**.

A **transversal** is a line that crosses two or more other lines. When a transversal crosses two parallel lines, it creates eight angles with important relationships:

- **Corresponding angles** (same position at each intersection) are congruent.
- **Alternate interior angles** (between the parallels, on opposite sides of the transversal) are congruent.
- **Alternate exterior angles** (outside the parallels, on opposite sides) are congruent.
- **Co-interior angles**, also called same-side interior angles (between the parallels, on the same side) are supplementary.

![Two horizontal parallel lines cut by a slanted transversal, forming eight numbered angles at the two intersection points, with a legend identifying corresponding, alternate interior, alternate exterior, and co-interior angle pairs](./media/geof-transversal.png)

These equalities run both ways: if a transversal makes a pair of corresponding (or alternate) angles equal, the two lines must be parallel. That converse is how parallelism is proved in practice.

## Polygons

A **polygon** is a closed plane figure made of straight line segments joined end to end. Each segment is a **side** and each corner is a **vertex** (plural **vertices**). Polygons are named by their number of sides.

![A grid of regular polygons labeled with names and side counts: triangle with 3 sides, quadrilateral with 4, pentagon with 5, hexagon with 6, heptagon with 7, and octagon with 8](./media/geof-polygon-names.png)

A polygon is **convex** if every interior angle is less than $180°$ (no vertex points inward); otherwise it is **concave**. A polygon is **regular** if all its sides are congruent and all its angles are congruent (like a square or a regular hexagon).

### Angle Sums

Pick any vertex of a polygon with $n$ sides and draw diagonals to every other vertex. This splits the polygon into exactly $n - 2$ triangles. Since each triangle's angles sum to $180°$ (the next section proves this), the interior angles of the whole polygon sum to:

$$
\text{interior angle sum} = (n - 2) \times 180°
$$

![A regular pentagon with diagonals drawn from one vertex, splitting it into three triangles, annotated with interior angle sum equals (5 minus 2) times 180 equals 540 degrees](./media/geof-polygon-angles.png)

For a pentagon ($n = 5$) the sum is $(5 - 2) \times 180° = 540°$; for an octagon ($n = 8$) it is $(8 - 2) \times 180° = 1080°$. In a **regular** polygon all angles are equal, so each interior angle measures $\dfrac{(n-2) \times 180°}{n}$: a regular hexagon has interior angles of $\dfrac{720°}{6} = 120°$. No matter the number of sides, the **exterior angles** (one per vertex, turning from each side to the next) always sum to exactly $360°$, one full turn.

## Triangles

The triangle is the simplest polygon and the foundation of the rest of geometry, because every polygon can be cut into triangles.

![Two rows of triangles: the top row classifies by sides as scalene with no equal sides, isosceles with two tick-marked equal sides, and equilateral with three equal sides; the bottom row classifies by angles as acute, right with a square at the right angle, and obtuse](./media/geof-triangle-classification.png)

Triangles are classified two ways. **By sides:** *scalene* (no equal sides), *isosceles* (two equal sides), or *equilateral* (all three equal). **By angles:** *acute* (all angles less than $90°$), *right* (one $90°$ angle), or *obtuse* (one angle greater than $90°$).

### The Angle Sum

**The angles of any triangle sum to $180°$.** To see why, draw a line through one vertex parallel to the opposite side. The two "outer" angles at that vertex are equal to the triangle's other two angles (alternate interior angles with the parallel line), and together with the vertex angle they form a straight angle of $180°$. So the three triangle angles sum to $180°$.

### Congruence

Two triangles are **congruent** (written with $\cong$) if they have the same size and shape, so one can be laid exactly on top of the other. You do not need to check all six parts (three sides and three angles); a few matching parts force the rest. The shortcuts are:

- **SSS** (side-side-side): all three pairs of sides equal.
- **SAS** (side-angle-side): two sides and the angle between them equal.
- **ASA** (angle-side-angle): two angles and the side between them equal.
- **AAS** (angle-angle-side): two angles and a non-included side equal.
- **HL** (hypotenuse-leg): for right triangles only, the hypotenuse and one leg equal.

![Five triangles illustrating the congruence criteria SSS, SAS, ASA, AAS, and HL, each with the given equal sides marked by tick marks, equal angles marked by arcs, and HL showing a right-angle square with the hypotenuse and one leg marked](./media/geof-triangle-congruence.png)

Note that there is no "SSA" or "AAA" congruence rule: SSA can produce two different triangles (the ambiguous case discussed under the [Law of Sines](./geometry-trigonometry)), and AAA fixes only the shape, not the size.

### Similarity

Two triangles are **similar**, written $\triangle ABC \sim \triangle DEF$ (the symbol $\sim$ is read "is similar to"), if they have the same shape but not necessarily the same size: equal corresponding angles and proportional corresponding sides. The shortcuts are **AA** (two equal angles force the third, so the triangles are similar), **SSS~** (all sides in the same ratio), and **SAS~** (two sides in ratio with the included angle equal). Congruence is the special case of similarity where the ratio is $1$.

## Quadrilaterals

A **quadrilateral** is a four-sided polygon. Its interior angles always sum to $(4 - 2) \times 180° = 360°$. Special quadrilaterals form a family, each a special case of a more general one.

![A classification tree of quadrilaterals: quadrilateral at the top branches to trapezoid and parallelogram; parallelogram branches to rectangle and rhombus; rectangle and rhombus both meet at square at the bottom; kite branches separately from quadrilateral, each box labeled with its defining property](./media/geof-quadrilateral-hierarchy.png)

- A **trapezoid** has at least one pair of parallel sides.
- A **parallelogram** has two pairs of parallel sides; opposite sides and opposite angles are equal, and the diagonals bisect each other.
- A **rectangle** is a parallelogram with four right angles.
- A **rhombus** is a parallelogram with four equal sides.
- A **square** is both a rectangle and a rhombus: four equal sides and four right angles.
- A **kite** has two pairs of adjacent equal sides.

Reading the chart downward, each shape inherits every property of the shapes above it: a square is a rectangle, so it has four right angles, and it is a rhombus, so it has four equal sides.

## Circles

A **circle** is the set of all points in a plane at a fixed distance (the **radius**, $r$) from a fixed point (the **center**). It is the first curved figure, and it comes with its own vocabulary.

![A labeled circle centered at O showing a radius, a diameter through the center, a chord joining two points, a highlighted arc, a shaded sector wedge, a tangent line touching at one point, a secant line crossing at two points, and a central angle at O](./media/geof-circle-parts.png)

- A **chord** is a segment joining two points on the circle.
- A **diameter** is a chord through the center; it has length $2r$ and is the longest chord.
- An **arc** is a portion of the circle itself; a **sector** is the pie-slice region between two radii and an arc.
- A **tangent** line touches the circle at exactly one point; a **secant** line crosses it at two.
- A **central angle** has its vertex at the center; an **inscribed angle** has its vertex on the circle.

**The inscribed angle theorem:** an inscribed angle is half the central angle that subtends (opens onto) the same arc.

![A circle with a central angle of 80 degrees at the center and an inscribed angle of 40 degrees on the circle subtending the same arc, showing that the inscribed angle is half the central angle, with a note that an angle inscribed in a semicircle is 90 degrees](./media/geof-inscribed-angle.png)

A famous special case is **Thales' theorem**: if the subtended arc is a semicircle (the central angle is the $180°$ straight angle of a diameter), the inscribed angle is exactly $90°$. Any triangle inscribed in a circle with one side as a diameter is therefore a right triangle.

## Perimeter, Area, and Volume

**Perimeter** is the total distance around a two-dimensional figure (the circumference for a circle). **Area** is the amount of surface a flat figure covers, measured in square units. Every area formula below can be derived by cutting and rearranging the shape into a rectangle.

![A reference chart of six shapes labeled with their area formulas: square s squared, rectangle length times width, triangle one-half base times height, parallelogram base times height, trapezoid one-half the sum of the parallel sides times height, and circle pi r squared](./media/geof-area-formulas.png)

For example, a trapezoid with parallel sides of length $6$ and $10$ and height $4$ has area $\frac{1}{2}(6 + 10)(4) = 32$ square units, and a circle of radius $5$ has area $\pi (5)^2 = 25\pi \approx 78.54$ square units.

**Volume** is the amount of space a three-dimensional solid occupies, measured in cubic units.

![A reference chart of six solids labeled with their volume formulas: cube s cubed, rectangular prism length times width times height, cylinder pi r squared h, cone one-third pi r squared h, sphere four-thirds pi r cubed, and square pyramid one-third base squared times height](./media/geof-volume-formulas.png)

A sphere of radius $3$ has volume $\frac{4}{3}\pi (3)^3 = 36\pi \approx 113.10$ cubic units. Notice that a cone is exactly one third of the cylinder with the same base and height, and a pyramid is one third of the corresponding prism.

## Solids and Euler's Formula

A **polyhedron** (plural **polyhedra**) is a solid whose faces are all flat polygons. Its flat surfaces are **faces**, the segments where faces meet are **edges**, and the corners are **vertices**. For any convex polyhedron these three counts obey **Euler's formula**:

$$
V - E + F = 2
$$

where $V$ is the number of vertices, $E$ the number of edges, and $F$ the number of faces.

![Three polyhedra with their vertex, edge, and face counts: a tetrahedron with V equals 4, E equals 6, F equals 4; a cube with V equals 8, E equals 12, F equals 6; and an octahedron with V equals 6, E equals 12, F equals 8; each satisfying V minus E plus F equals 2](./media/geof-platonic-euler.png)

A cube has $V = 8$, $E = 12$, $F = 6$, and indeed $8 - 12 + 6 = 2$. There are exactly **five** regular convex polyhedra, the **Platonic solids**: the tetrahedron, cube, octahedron, dodecahedron, and icosahedron. Other common solids include **prisms** (two parallel congruent bases joined by rectangles), **pyramids** (a base and a single apex), **cylinders**, **cones**, and **spheres**.

## Transformations and Symmetry

A **transformation** moves or resizes a figure. A **rigid motion** (or **isometry**) preserves distance, so the image is congruent to the original. There are three basic rigid motions, plus a fourth that combines two of them:

- **Translation:** slide every point the same distance in the same direction.
- **Rotation:** turn every point by the same angle about a fixed center.
- **Reflection:** flip every point across a fixed line (the mirror).
- **Glide reflection:** a reflection followed by a translation along the mirror line.

![Three panels showing the same asymmetric shape and its image under a translation with the slide arrow drawn, a rotation about a marked center point with the turn angle shown, and a reflection across a dashed mirror line](./media/geof-transformations.png)

Two figures are congruent exactly when some sequence of rigid motions maps one onto the other. A transformation that instead scales a figure by a fixed ratio about a center point is a **dilation**; it preserves shape but not size, producing a figure that is **similar** to the original.

**Symmetry** is when a figure maps onto itself under a transformation. A figure has **line (reflection) symmetry** if reflecting it across some line leaves it unchanged, and **rotational symmetry** if rotating it by some angle less than a full turn leaves it unchanged.

![Two panels: line symmetry shown by a shape with a dashed axis of symmetry that reflects it onto itself, and rotational symmetry shown by a pinwheel-like figure that maps onto itself under a rotation about its center](./media/geof-symmetry.png)

## Where This Leads

From these foundations the subject branches in several directions. Placing points on a coordinate grid turns geometry into algebra: distances, midpoints, slopes, and the trigonometry of triangles all live on the [Geometry & Trigonometry](./geometry-trigonometry) page. The circle and the other curves cut from a cone are studied as equations in [Conic Sections](./conic-sections). Relaxing the parallel postulate opens the non-Euclidean geometries that underlie modern physics, and treating rigid motions as an algebraic system of their own leads to the group theory of symmetry in [Algebraic Structures](./algebraic-structures).
