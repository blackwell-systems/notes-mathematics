---
title: "Vector Calculus: Work, Flux, Curl, and the Boundary Theorems"
prerequisites: ["multivariable-calculus", "multivariable-integration", "linear-algebra-foundations"]
enables: ["differential-geometry", "algebraic-topology"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Multivariable Calculus](./multivariable-calculus) (gradients and derivatives), [Multivariable Integration](./multivariable-integration) (regions, coordinate changes and Jacobians), and [Linear Algebra](./linear-algebra-foundations) (vectors and dot/cross products).
> **Leads to:** [Differential Geometry](./differential-geometry) (differential forms, integration on manifolds), [Algebraic Topology](./algebraic-topology) (cycles and boundaries), and further studies of fluid mechanics, electromagnetism and PDEs.

The **Fundamental Theorem of Calculus** connects what happens **inside an interval** to what happens **at its two endpoints**:

$$
\int_a^b f'(x)\,dx=f(b)-f(a).
$$

Vector calculus generalizes that idea to curves, regions and surfaces:

**Local change in the interior can determine a total measured on the boundary.**

The theorem you use depends on whether you measure a scalar, a movement **along** a boundary or a flow **through** a boundary. All three must be distinguished.

## 1. Scalar fields and vector fields

A **scalar field** assigns a number to each point: temperature $T(x,y)$ or pressure $p(x,y,z)$.

A **vector field** assigns a vector to each point:

$$
\mathbf F(x,y)=\begin{bmatrix}P(x,y)\\Q(x,y)\end{bmatrix},
\qquad
\mathbf F(x,y,z)=\begin{bmatrix}P\\Q\\R\end{bmatrix}.
$$

Read $\mathbf F$ as "bold F," and $P,Q,R$ as its component functions.

A wind map provides an intuition: each location has a velocity **direction** and **magnitude**. But a field is not itself a trajectory. To get a trajectory, solve an equation relating the velocity of a moving particle to the field, such as $\mathbf r'(t)=\mathbf F(\mathbf r(t))$.

Three questions motivate three differential operations:

- **Gradient** $\nabla f$: if a scalar changes, which direction increases it fastest, and how fast?
- **Divergence** $\nabla\cdot\mathbf F$: how much does a field spread outward from a very small region?
- **Curl** $\nabla\times\mathbf F$: how much does a field circulate around a very small loop?

The symbol $\nabla$ is pronounced "nabla" or "del." These are different operations, with different inputs and outputs.

## 2. Curves, velocity and arc length

Describe a smooth curve by a parameter $t$:

$$
\mathbf r(t)=\begin{bmatrix}x(t)\\y(t)\\z(t)\end{bmatrix},
\qquad a\leq t\leq b.
$$

Its derivative $\mathbf r'(t)$ is a velocity or **tangent vector**. If the curve is traversed once, its length is

$$
L=\int_a^b\|\mathbf r'(t)\|\,dt.
$$

The integrand is **speed**, not displacement. A curve can return to its starting point with total displacement zero but strictly positive length.

### Worked example: a quarter of the unit circle

Let $\mathbf r(t)=(\cos t,\sin t)$, $0\leq t\leq\pi/2$. Then

$$
\mathbf r'(t)=(-\sin t,\cos t),
\qquad
\|\mathbf r'(t)\|=1.
$$

Its length is $\int_0^{\pi/2}1\,dt=\pi/2$, as expected for one quarter of the unit circle.

## 3. Line integrals: work along a path

A scalar line integral accumulates a scalar quantity along a curve **weighted by length**:

$$
\int_C f\,ds
=\int_a^b f(\mathbf r(t))\|\mathbf r'(t)\|\,dt.
$$

For example, if $f$ is mass per unit length along a wire, this integral gives its mass. The scalar integral is independent of which direction the curve is traversed.

A **vector line integral**, by contrast, measures a field's component **along the motion**:

$$
\boxed{\int_C\mathbf F\cdot d\mathbf r
=\int_a^b \mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt.}
$$

Read "$\mathbf F\cdot d\mathbf r$" as "the dot product of F with an infinitesimal displacement." In physics this measures **work** done by a force field. Reversing the direction of the path reverses the sign.

### Worked example: a nonconstant force

Let $\mathbf F(x,y)=(y,x)$ and travel along $\mathbf r(t)=(t,t^2)$ for $0\leq t\leq1$.

Along the curve,

$$
\mathbf F(\mathbf r(t))=(t^2,t),
\qquad
\mathbf r'(t)=(1,2t).
$$

Their dot product is $t^2+2t^2=3t^2$. Thus

$$
\int_C\mathbf F\cdot d\mathbf r
=\int_0^1 3t^2\,dt=1.
$$

The result is a scalar. It depends on both the field and the oriented path, not just a sum of vector magnitudes.

## 4. Conservative fields: when the path does not matter

A field is a **gradient field** on a region if there exists a differentiable scalar potential $\phi$ such that $\mathbf F=\nabla\phi$.

The chain rule along a curve says

$$
\frac{d}{dt}\phi(\mathbf r(t))
=\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t).
$$

Integrating proves the **fundamental theorem for line integrals**:

$$
\boxed{\int_C\nabla\phi\cdot d\mathbf r
=\phi(\mathbf r(b))-\phi(\mathbf r(a)).}
$$

For the example $\mathbf F(x,y)=(y,x)$, a potential is $\phi(x,y)=xy$. Our path begins at $(0,0)$ and ends at $(1,1)$, so the work equals $1-0=1$ without any parameter integral. The two methods agree.

> [!intuition] A potential stores everything needed for work
> If $\mathbf F=\nabla\phi$, **all paths between the same endpoints give the same work** in the relevant connected region. The accumulated change depends only on endpoints. Around every closed loop the total is zero. This is the curved-path analogue of evaluating an antiderivative at the endpoints.

### Counterexample: zero curl is not always enough

On the punctured plane $\mathbb R^2\setminus\{0\}$ let

$$
\mathbf F(x,y)=
\left(-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}\right).
$$

A calculation gives $\partial Q/\partial x-\partial P/\partial y=0$ at every point of its domain. Yet along the counterclockwise unit circle, $\mathbf r(t)=(\cos t,\sin t)$, we have $\mathbf F(\mathbf r(t))=\mathbf r'(t)$, so

$$
\oint_{S^1}\mathbf F\cdot d\mathbf r=2\pi\ne0.
$$

The field is **locally** a gradient, but has no single-valued global potential on the punctured plane. This is the same obstruction as the globally missing angle function in [Sheaf Theory](./sheaf-theory#6-local-solutions-do-not-imply-a-global-solution). On a **simply connected open region** in the plane, a continuously differentiable curl-free field *is* conservative. The hole changes the conclusion.

## 5. Divergence: infinitesimal outflow

For a continuously differentiable field $\mathbf F=(P,Q,R)$ in three dimensions, its **divergence** is the scalar field

$$
\boxed{\nabla\cdot\mathbf F
=\frac{\partial P}{\partial x}
+\frac{\partial Q}{\partial y}
+\frac{\partial R}{\partial z}.}
$$

In two dimensions omit the $z$ component. Positive divergence suggests **net outward flux from a tiny region**; negative divergence suggests net inward flux.

> [!example] Uniform expansion versus rotation
> For $\mathbf F(x,y)=(x,y)$, divergence is $1+1=2$: arrows point away from the origin, and a small patch experiences net outward flow.
>
> For $\mathbf G(x,y)=(-y,x)$, divergence is $0+0=0$: the flow rotates locally but has no net expansion or contraction. A field can have **zero divergence and nonzero circulation**.

Divergence is not the speed of the field; a constant flow $\mathbf F=(100,0,0)$ has speed $100$ but divergence zero.

## 6. Curl: infinitesimal circulation

For a continuously differentiable field $\mathbf F=(P,Q,R)$, its **curl** in three dimensions is

$$
\nabla\times\mathbf F=
\begin{bmatrix}
R_y-Q_z\\
P_z-R_x\\
Q_x-P_y
\end{bmatrix}.
$$

Read $\nabla\times\mathbf F$ as "curl F." Curl is an oriented vector in three dimensions. For a planar field $(P,Q)$ we often discuss the scalar $Q_x-P_y$, the **component of curl perpendicular to the plane**.

### Worked example: a rigid rotation field

Let $\mathbf F(x,y)=(-y/2,x/2)$. The planar curl is

$$
\frac{\partial(x/2)}{\partial x}
-\frac{\partial(-y/2)}{\partial y}
=\frac12-\left(-\frac12\right)=1.
$$

The divergence is $0$. Thus this field circulates without creating net outward flow.

The factor $1/2$ in this example makes its curl equal $1$: a convenient normalization for checking Green's theorem.

## 7. Green's theorem: circulation along an edge equals curl inside

Let $D$ be a bounded planar region with a positively oriented (counterclockwise outer boundary), piecewise smooth, simple closed boundary $C$. Suppose $P,Q$ have continuous first partial derivatives on an open neighborhood of $D$.

Then **Green's theorem** states

$$
\boxed{\oint_C P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\,dA.}
$$

If the region has holes, its boundary has multiple components: the outer one is counterclockwise and inner components clockwise in the positive orientation convention.

### Worked example: the unit disk

Take $\mathbf F=(-y/2,x/2)$ from the previous section and the unit disk $D$.

**Interior calculation:** The planar curl is $1$, so

$$
\iint_D 1\,dA=\pi.
$$

**Boundary calculation:** Parametrize the circle counterclockwise by $(x,y)=(\cos t,\sin t)$, $0\leq t\leq2\pi$.

$$
P\,dx+Q\,dy
=(-\sin t/2)(-\sin t\,dt)
+(\cos t/2)(\cos t\,dt)
=\frac12\,dt.
$$

Therefore

$$
\oint_C P\,dx+Q\,dy
=\frac12\int_0^{2\pi}dt=\pi.
$$

**The surprising equivalence:** infinitely many tiny interior circulations add up to the measured circulation at the outer boundary. Internal edges cancel when neighboring pieces are combined, leaving only the outside edge.

## 8. Surface integrals: flow through a surface

For a parametrized oriented surface $\mathbf r(u,v)$, two tangent vectors are

$$
\mathbf r_u=\frac{\partial\mathbf r}{\partial u},
\qquad
\mathbf r_v=\frac{\partial\mathbf r}{\partial v}.
$$

Their cross product points perpendicular to the surface, and its magnitude tells us how much surface area a tiny coordinate rectangle represents:

$$
dS=\|\mathbf r_u\times\mathbf r_v\|\,du\,dv.
$$

The **scalar surface integral** is

$$
\iint_S f\,dS
=\iint_R f(\mathbf r(u,v))\,\|\mathbf r_u\times\mathbf r_v\|\,du\,dv.
$$

To measure the **flux** of a vector field across the oriented surface, use its component along the chosen normal:

$$
\boxed{\iint_S\mathbf F\cdot\mathbf n\,dS
=\iint_R\mathbf F(\mathbf r(u,v))
\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv.}
$$

Here $\mathbf n$ is the **unit normal**. Reversing the orientation reverses the flux sign. Scalar surface area, like scalar arc length, does **not** change sign under orientation reversal.

### Worked example: upward flux across a square

Let $S$ be the unit square in the horizontal plane $z=0$, parametrized by $\mathbf r(u,v)=(u,v,0)$ for $0\leq u,v\leq1$. Then

$$
\mathbf r_u=(1,0,0),\quad
\mathbf r_v=(0,1,0),\quad
\mathbf r_u\times\mathbf r_v=(0,0,1).
$$

For $\mathbf F=(0,0,3)$, the upward flux is

$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=\int_0^1\int_0^1 3\,du\,dv=3.
$$

The field is constant; the result is just normal field strength times the area. The integral generalizes this to curved surfaces and varying fields.

## 9. Stokes' theorem: surface curl becomes boundary circulation

Let $S$ be a smooth oriented surface with piecewise smooth boundary $\partial S$, and let $\mathbf F$ be continuously differentiable on an open neighborhood. Orient the boundary consistently with the surface normal by the right-hand rule.

**Stokes' theorem** states

$$
\boxed{\oint_{\partial S}\mathbf F\cdot d\mathbf r
=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS.}
$$

Read $\partial S$ as "the boundary of S." The right side accumulates the **normal component of curl across the surface**; the left side measures **circulation along its edge**.

Green's theorem is the planar instance of Stokes' theorem. The surface itself need not be flat. When two oriented surfaces share the same boundary (with compatible orientation) and the field is regular on an appropriate containing neighborhood, Stokes' theorem implies the curl flux through them agrees.

> [!warning] Orientation is part of the theorem
> Looking from the tip of the chosen upward normal, the boundary of a horizontal disk is counterclockwise. If you reverse the normal but keep the same boundary direction, Stokes' formula no longer matches signs. When results differ only by a minus sign, check orientation before redoing the calculus.

## 10. The divergence theorem: sources inside equal flux outside

Let $E$ be a bounded solid region with a sufficiently regular, piecewise smooth closed boundary surface $\partial E$, oriented **outward**. For a continuously differentiable field $\mathbf F$ on a neighborhood of the solid, the **divergence theorem** states

$$
\boxed{\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS
=\iiint_E(\nabla\cdot\mathbf F)\,dV.}
$$

A positive divergence is infinitesimal outward flux. Add the contributions from all small cells in the solid: flux across **internal shared faces cancels**, leaving only the outer boundary.

### Worked example: the unit ball

Take $\mathbf F(x,y,z)=(x,y,z)$ and let $E$ be the unit ball.

**Interior:** $\nabla\cdot\mathbf F=3$, and the ball has volume $4\pi/3$, so

$$
\iiint_E3\,dV=3\cdot\frac{4\pi}{3}=4\pi.
$$

**Boundary:** On the unit sphere, the outward unit normal is $\mathbf n=(x,y,z)$. Thus $\mathbf F\cdot\mathbf n=x^2+y^2+z^2=1$, so

$$
\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS
=\operatorname{Area}(S^2)=4\pi.
$$

Both calculations give $4\pi$. Neither result requires solving a differential equation: this is a relationship between **local outflow** and **total boundary flux**.

## 11. Four calculus theorems, one recurring structure

| Dimension and region | Local quantity integrated | Boundary quantity obtained |
| --- | --- | --- |
| Interval $[a,b]$ | Derivative $f'$ along the interval | Difference $f(b)-f(a)$ |
| Planar region $D$ | Scalar planar curl $Q_x-P_y$ over the region | Circulation along its closed edge (Green) |
| Oriented surface $S$ | Normal component of curl over the surface | Circulation along its boundary curve (Stokes) |
| Solid $E$ | Divergence throughout a volume | Outward flux across its boundary (divergence theorem) |

The pattern can be written schematically as

$$
\boxed{\text{integral of a derivative over a region}
=\text{integral of the original quantity over its boundary}.}
$$

The general mathematical setting uses **differential forms** and **exterior derivatives**, yielding a generalized Stokes theorem $\int_M d\omega=\int_{\partial M}\omega$ under appropriate hypotheses. This is developed conceptually in [Differential Geometry](./differential-geometry#4-from-tangent-vectors-to-measurements-differential-forms). Algebraic topology contributes the accompanying idea that **the boundary of a boundary is zero**.

The slogan is not a license to interchange line, flux and scalar integrals. Each theorem has a specific domain, orientation, derivative, and form of boundary data.

## 12. A map of mistakes and missing assumptions

1. **A vector field is not a path:** the field specifies a vector at every point; an integral uses a chosen path or surface.
2. **Zero curl is not automatically globally conservative:** a hole can prevent a single-valued potential.
3. **Zero divergence is not zero flow:** a constant velocity field has zero divergence, but nonzero flux through an open surface.
4. **Surface orientation affects signed flux:** it does not affect scalar surface area.
5. **Green's theorem needs the field regular on the region:** a field singular inside a hole cannot be treated as though it were smooth on the filled-in disk.
6. **A nonclosed curve can carry circulation-like work:** the word "circulation" usually refers to a closed-loop line integral.

## 13. Self-check and continuation

1. **What is integrated to find the mass of a thin wire?** A scalar density with respect to arc length, $\int_C\rho\,ds$.
2. **What is integrated to find the work of a force?** The tangential component, $\int_C\mathbf F\cdot d\mathbf r$.
3. **Why is the curl circulation of $\mathbf F=(-y/2,x/2)$ around the unit circle equal to $\pi$?** Its curl is $1$ and the disk has area $\pi$.
4. **Why does a field with zero divergence still move material?** Zero divergence means no *net local creation of volume flux*, not zero velocity.
5. **What makes the divergence theorem a three-dimensional analogue of FTC?** The sum of local divergences in the interior determines the net flow across the boundary.

**Scope:** These examples build the classical vector-calculus picture and state the main integral theorems with their standard regularity and orientation requirements. A full proof course would treat partitions, surface orientations, singularities, domains with multiple boundary components, generalized Stokes' theorem, and differential forms in greater depth.

**Continue with:** [Differential Geometry](./differential-geometry) for curved manifolds and forms, [Algebraic Topology](./algebraic-topology) for cycles and boundaries, or [Differential Equations](./differential-equations) for fields that describe motion evolving over time.
