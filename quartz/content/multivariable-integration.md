---
title: "Multivariable Integration: Regions, Coordinates, and Jacobians"
prerequisites: ["calculus", "multivariable-calculus", "parametric-and-polar"]
enables: ["vector-calculus", "differential-geometry"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Calculus](./calculus) (accumulation and substitution), [Multivariable Calculus](./multivariable-calculus) (functions of several variables and rectangular double integrals), [Parametric and Polar Coordinates](./parametric-and-polar) (alternative descriptions of curves).
> **Leads to:** [Vector Calculus](./vector-calculus) (work, flux and integral theorems), [Differential Geometry](./differential-geometry) (integration on curved spaces), and [Measure Theory](./measure-theory) (general integration and Fubini).
>
> The central question is not merely "How can we integrate twice or three times?" It is **how we divide space into pieces, attach a quantity to each piece, and add them without counting anything twice**.

## 1. From area sums to volume sums

In single-variable calculus, a Riemann sum adds values on short intervals. In two dimensions, the pieces are small patches of **area**, and in three dimensions they are small pieces of **volume**.

For a scalar function $f(x,y)$ over a region $R$ in the plane,

$$
\iint_R f(x,y)\,dA
$$

is read "the double integral over R of f, d-A." Here $dA$ represents an infinitesimal area element, not an independent variable.

For $f\geq0$ it is the volume between the graph $z=f(x,y)$ and the region $R$. If $f$ changes sign, the integral is **signed accumulation**: negative values contribute negatively.

For a function $g(x,y,z)$ on a solid region $E$,

$$
\iiint_E g(x,y,z)\,dV
$$

is read "the triple integral over E of g, d-V." Setting $g=1$ computes volume; using $g=\rho$, a density, computes mass.

**Mental model:** A coordinate description gives labels to points. An integral depends not just on those labels, but on how much **physical area or volume** a small change in the labels represents. That distinction explains every Jacobian factor later.

## 2. Double integrals on curved and triangular regions

A **Type I region** can be described as vertical slices

$$
R=\{(x,y):a\leq x\leq b,\quad g_1(x)\leq y\leq g_2(x)\}.
$$

For continuous $f$ on a suitable compact region, integrate from bottom to top in each slice, then add the slices:

$$
\iint_R f\,dA
=\int_a^b\left[\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\right]dx.
$$

A **Type II region** is described by horizontal slices: $c\leq y\leq d$ and $h_1(y)\leq x\leq h_2(y)$. You can use either description when the region admits both.

### Worked example: area of a triangle, two ways

Let $R$ be the triangle with vertices $(0,0)$, $(2,0)$ and $(2,2)$. It is bounded by $y=0$, $y=x$ and $x=2$.

Vertical slices give

$$
\operatorname{Area}(R)
=\int_0^2\int_0^x 1\,dy\,dx
=\int_0^2 x\,dx=2.
$$

Horizontal slices give

$$
\operatorname{Area}(R)
=\int_0^2\int_y^2 1\,dx\,dy
=\int_0^2(2-y)\,dy=2.
$$

Different iterated integrals, same region. **Changing the order means redrawing the bounds**, not simply swapping $dx$ and $dy$ in the old formula.

### Worked example: accumulate a nonconstant density

On the same triangle, let the density be $\rho(x,y)=x+y$. The mass is

$$
\begin{aligned}
M&=\int_0^2\int_0^x(x+y)\,dy\,dx\\
&=\int_0^2\left[x y+\frac{y^2}{2}\right]_0^x\,dx\\
&=\int_0^2\frac{3x^2}{2}\,dx=4.
\end{aligned}
$$

This connects the integral to a physical question: a triangle's area is $2$, but its mass is $4$ because the density increases with position.

## 3. Polar coordinates: why an extra factor appears

A disk looks awkward in rectangular coordinates: its boundary is $x^2+y^2=a^2$. Polar coordinates use **radius** $r$ and **angle** $\theta$ (read "theta"):

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

A small patch bounded by two radii $r$ and $r+\Delta r$ and two angles $\theta$ and $\theta+\Delta\theta$ is nearly a narrow sector.

Its area is approximately

$$
\Delta A\approx r\,\Delta r\,\Delta\theta.
$$

The reason is geometric: the patch's radial thickness is $\Delta r$, while its arc length is approximately $r\Delta\theta$. **Farther from the center, the same angle spans a wider patch.**

Thus the area element is

$$
\boxed{dA=r\,dr\,d\theta.}
$$

You cannot replace $dx\,dy$ with $dr\,d\theta$ without the factor $r$: those coordinate rectangles represent different amounts of area.

### Worked example: area of a disk

For a disk of radius $a>0$,

$$
\begin{aligned}
\operatorname{Area}(D)
&=\int_0^{2\pi}\int_0^a r\,dr\,d\theta\\
&=\int_0^{2\pi}\frac{a^2}{2}\,d\theta=\pi a^2.
\end{aligned}
$$

The factor $r$ is what makes the familiar area formula emerge correctly.

### Worked example: a Gaussian integral in the plane

Consider the nonnegative function $e^{-(x^2+y^2)}$. In polar coordinates, $x^2+y^2=r^2$:

$$
\begin{aligned}
\iint_{\mathbb R^2}e^{-(x^2+y^2)}\,dA
&=\int_0^{2\pi}\int_0^\infty e^{-r^2}r\,dr\,d\theta\\
&=2\pi\left[-\frac12e^{-r^2}\right]_{r=0}^{r=\infty}
=\pi.
\end{aligned}
$$

The region is unbounded, so this is an **improper integral**. Nonnegativity also makes the passage to expanding bounded regions safe by monotone convergence. This computation is the key to the classic one-dimensional Gaussian integral.

## 4. Jacobians: local area scaling

Polar coordinates are one case of a general method. Suppose coordinates $(u,v)$ describe the plane through a differentiable map

$$
\Phi(u,v)=(x(u,v),y(u,v)).
$$

Near a point, $\Phi$ acts approximately like its **Jacobian matrix**

$$
D\Phi=
\begin{bmatrix}
x_u&x_v\\
y_u&y_v
\end{bmatrix}.
$$

This matrix sends a tiny coordinate rectangle to an approximate parallelogram. Its determinant is the **oriented area scale**. The physical area uses its absolute value:

$$
\boxed{dA=|\det D\Phi(u,v)|\,du\,dv.}
$$

For suitable regions and a continuously differentiable, one-to-one change of variables with the needed nondegeneracy assumptions (up to harmless boundary exceptions),

$$
\iint_{\Phi(S)} f(x,y)\,dx\,dy
=\iint_S f(\Phi(u,v))\,|\det D\Phi(u,v)|\,du\,dv.
$$

Read $\det D\Phi$ as "the determinant of the derivative of Phi." The absolute value is crucial: **area does not become negative just because the coordinate transformation reverses orientation**.

> [!proof] Re-derive the polar Jacobian
> With $x=r\cos\theta$ and $y=r\sin\theta$,
>
> $$
> D\Phi=
> \begin{bmatrix}
> \cos\theta&-r\sin\theta\\
> \sin\theta&r\cos\theta
> \end{bmatrix}.
> $$
>
> Its determinant is $r(\cos^2\theta+\sin^2\theta)=r$. This matches the sector-area argument. The two explanations agree because both measure **how a tiny coordinate region changes size**.

### Worked example: an ellipse becomes a disk

The ellipse $x^2/9+y^2/4\leq1$ becomes the unit disk under

$$
x=3u,\qquad y=2v.
$$

The Jacobian determinant is $3\cdot2=6$. Therefore

$$
\operatorname{Area}(\text{ellipse})
=\iint_{u^2+v^2\leq1}6\,du\,dv
=6\pi.
$$

Here the transformation multiplies every unit of area by $6$. The formula is no more mysterious than multiplying lengths by $3$ and $2$ along perpendicular directions.

### Why the hypotheses matter

A coordinate change must not count the same physical region multiple times without accounting for that multiplicity. Polar coordinates identify angles separated by $2\pi$, and the origin corresponds to every angle. We use a standard angle interval and treat boundaries of area zero carefully. A general map that folds several regions on top of one another needs a more advanced **area formula**; blindly applying the simple one-to-one substitution formula gives the wrong answer.

## 5. Triple integrals: volume, density, center of mass

For a solid $E$ and continuous density $\rho$, the total mass is

$$
M=\iiint_E\rho(x,y,z)\,dV.
$$

The average density over a finite-volume solid is $M/\operatorname{Vol}(E)$. The center-of-mass coordinates are weighted averages:

$$
\bar x=\frac{1}{M}\iiint_E x\rho\,dV,\qquad
\bar y=\frac{1}{M}\iiint_E y\rho\,dV,\qquad
\bar z=\frac{1}{M}\iiint_E z\rho\,dV,
$$

provided $M>0$.

### Worked example: a variable-density rectangular box

Let $E=[0,2]\times[0,1]\times[0,1]$ and $\rho(x,y,z)=1+x$. The mass is

$$
\begin{aligned}
M&=\int_0^2\int_0^1\int_0^1(1+x)\,dz\,dy\,dx\\
&=\int_0^2(1+x)\,dx=4.
\end{aligned}
$$

The $x$-coordinate of its center of mass is

$$
\bar x=\frac14\int_0^2x(1+x)\,dx
=\frac14\left[ \frac{x^2}{2}+\frac{x^3}{3}\right]_0^2
=\frac76.
$$

The geometric center would be at $x=1$. The mass center shifts toward larger $x$ because the box is denser there.

## 6. Cylindrical coordinates: polar coordinates plus height

**Cylindrical coordinates** describe a point by $(r,\theta,z)$:

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad z=z.
$$

The small three-dimensional volume is

$$
\boxed{dV=r\,dr\,d\theta\,dz,}
$$

up to the order of integration. It is the polar area element multiplied by vertical thickness.

### Worked example: volume of a cylinder

A cylinder of radius $a$ and height $h$, for $a,h>0$, occupies $0\leq r\leq a$, $0\leq\theta<2\pi$, $0\leq z\leq h$:

$$
\iiint_E1\,dV
=\int_0^h\int_0^{2\pi}\int_0^a r\,dr\,d\theta\,dz
=\pi a^2h.
$$

A cylinder, a pipe, and many rotationally symmetric probability distributions naturally invite these coordinates.

## 7. Spherical coordinates: two angles and a radius

One common convention for **spherical coordinates** is

$$
x=\rho\sin\phi\cos\theta,\quad
y=\rho\sin\phi\sin\theta,\quad
z=\rho\cos\phi.
$$

Here $\rho\geq0$ is radial distance, $\theta$ is the azimuth angle around the $z$-axis, and $\phi\in[0,\pi]$ is the polar angle down from the positive $z$-axis. Other textbooks swap the names of the angles, so always check their convention.

The volume element is

$$
\boxed{dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.}
$$

Why two factors? A radial step contributes $d\rho$; a small change in azimuth sweeps arc length approximately $\rho\sin\phi\,d\theta$, while a change in polar angle sweeps $\rho\,d\phi$. Multiply the three lengths to get $\rho^2\sin\phi$.

### Worked example: the volume of a ball

For radius $a$,

$$
\begin{aligned}
\operatorname{Vol}(B_a)
&=\int_0^{2\pi}\int_0^\pi\int_0^a
\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\\
&=(2\pi)(2)\frac{a^3}{3}
=\frac{4\pi a^3}{3}.
\end{aligned}
$$

A spherical shell between radii $a$ and $b$ has volume $4\pi(b^3-a^3)/3$: another example of subtracting accumulated volume.

## 8. Integrating probabilities and functions, not only geometric volumes

Integration over regions is not restricted to pictures of physical solids. For a joint probability density $p(x,y)$, the probability of a region $R$ is

$$
\Pr((X,Y)\in R)=\iint_R p(x,y)\,dA.
$$

In polar coordinates, the transformed density in $(r,\theta)$ includes the same factor $r$. It is this Jacobian, not an arbitrary normalization trick, that explains why the radial distribution of a two-dimensional Gaussian has a factor of $r$.

Similarly, [Measure Theory](./measure-theory) generalizes integrals beyond well-behaved Euclidean regions; [Differential Geometry](./differential-geometry) studies coordinate changes on manifolds, where different geometric structures can supply different volume elements.

## 9. Mistakes that reveal the real idea

| Common mistake | Why it fails | Repair |
| --- | --- | --- |
| Swap $dx\,dy$ to $dy\,dx$ without changing bounds | The bounds describe *slices of a region* | Redraw the region and compute the new inner limits |
| Write $dA=dr\,d\theta$ in polar coordinates | Equal coordinate rectangles have unequal actual area | Include the factor $r$ |
| Omit the absolute value of the Jacobian for ordinary area | Orientation is signed, but area is not | Use $|\det D\Phi|$ |
| Use spherical coordinates without stating the angle convention | Different books swap $\theta$ and $\phi$ | Define the transformation first |
| Interpret a signed integral as ordinary geometric volume | Negative contributions cancel positive ones | Separate signed accumulation from volume |
| Apply one-to-one substitution to a folding map | Points are counted repeatedly | Check injectivity or use an appropriate multiplicity theorem |

## 10. Concept checks and next step

1. **Why do circles become easier to integrate over in polar coordinates?** The region becomes rectangular in the $(r,\theta)$ labels, but its area element needs the factor $r$.
2. **What does the determinant of a Jacobian mean geometrically?** The oriented local volume scale of the linear approximation; take its absolute value for unsigned area or volume.
3. **Can two different orders of integration give different answers for the same continuous function on a compact region?** No, provided both describe the same region correctly.
4. **Does a triple integral always mean volume?** Only for integrand $1$; a density gives mass, and a signed integrand gives signed accumulation.
5. **Why is the mass center of a denser-on-the-right box shifted right?** A weighted average gives more influence to the denser part.

**Scope:** This chapter establishes concrete iterated integrals, coordinate transformations, Jacobian intuition, and worked applications. Full measure-theoretic change-of-variables and arbitrary multiplicity formulas require further hypotheses and belong to [Measure Theory](./measure-theory).

**Continue with [Vector Calculus](./vector-calculus).** A scalar integral accumulates quantities *inside* a region. Vector calculus asks how fields circulate *along boundaries* or flow *through surfaces*, and why those two viewpoints are linked.
