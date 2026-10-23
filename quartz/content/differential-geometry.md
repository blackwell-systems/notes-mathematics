---
title: "Differential Geometry: Calculus on Curved Spaces"
prerequisites: ["general-topology-foundations", "multivariable-calculus", "linear-algebra-foundations"]
enables: ["information-geometry"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Topology](./general-topology-foundations) (open neighborhoods and continuity), [Multivariable Calculus](./multivariable-calculus) (derivatives and the chain rule), and [Linear Algebra](./linear-algebra-foundations) (tangent directions and linear maps).
> **Leads to:** [Information Geometry](./information-geometry) (metrics on statistical models), [Algebraic Topology](./algebraic-topology) (global invariants of spaces), [Sheaf Theory](./sheaf-theory) (compatible local descriptions), and further study of differential forms and curvature.

**Start with the intuition:** The Earth is round, but a small street map is flat enough to navigate. No single flat street map describes the entire Earth without distortions or coordinate trouble. Differential geometry turns that observation into mathematics: **do calculus in local coordinates, then prove the answer does not depend on which coordinates you used**.

A manifold need not come embedded in a surrounding Euclidean space. We can describe its geometry using overlapping coordinate patches and the rules for moving between them. Additional structure tells us what can be differentiated, how to measure lengths, and how to recognize curvature.

## 1. Three different questions about the same space

The word *geometry* can conceal several logically different layers.

| Structure | What it gives you | What it does not automatically give |
| --- | --- | --- |
| **Topological manifold** | Neighborhoods that look like open subsets of $\mathbb R^n$ | Differentiation, lengths, or angles |
| **Smooth manifold** | Compatible coordinate charts so derivatives make sense | A canonical way to measure length or angle |
| **Riemannian manifold** | A smoothly varying inner product on each tangent space | A preferred global coordinate system |

A sphere can be viewed at all three levels. They have the **same underlying points**, but the hypotheses license different questions.

> [!distinction] A curved picture is not the definition of a manifold
> A circle, a sphere, or a surface drawn in three dimensions is a helpful mental model. But a manifold is defined by its local structure; it need not come equipped with coordinates in some ambient $\mathbb R^N$. Also, a *smooth* manifold can be assigned many different Riemannian metrics, producing different lengths and curvatures.

## 2. Charts: local coordinates without a global grid

An $n$-dimensional **topological manifold** is a Hausdorff, second-countable topological space in which each point has a neighborhood homeomorphic to an open subset of $\mathbb R^n$. The extra conditions exclude certain pathological spaces; *locally Euclidean* alone does not suffice for the standard definition.

A **chart** (read "chart") is a pair $(U,\varphi)$ where $U$ is an open subset of the space and

$$
\varphi:U\longrightarrow \varphi(U)\subseteq\mathbb R^n
$$

is a homeomorphism onto an open subset. An **atlas** is a family of charts whose domains cover the space.

A coordinate map is a *description* of points, not an additional collection of points. Different charts may label the same point differently.

### Worked example: two descriptions of part of a circle

The unit circle is

$$
S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}.
$$

On the **upper semicircle** $U=\{(x,y)\in S^1:y>0\}$, use the coordinate $t=x$. Its inverse is

$$
t\longmapsto\bigl(t,\sqrt{1-t^2}\bigr),\qquad -1<t<1.
$$

On the **right semicircle** $V=\{(x,y)\in S^1:x>0\}$, use $s=y$, with inverse

$$
s\longmapsto\bigl(\sqrt{1-s^2},s\bigr).
$$

On $U\cap V$ both $x$ and $y$ are positive. Their coordinates are related by

$$
s=\sqrt{1-t^2},\qquad 0<t<1.
$$

The map and its inverse are smooth on this overlap. This is a **transition map**, the rule for translating descriptions. These two charts do not cover the whole circle, but more charts of the same type do.

**What to notice:** We did not straighten the entire circle into a line. We made two compatible *local* descriptions. Trying to use one global angle $\theta\in\mathbb R$ makes the labels wrap around: $0$ and $2\pi$ describe the same point. That is a coordinate issue, not a tear in the circle.

### Smooth compatibility

A smooth atlas requires that whenever charts overlap, the **transition function**

$$
\psi\circ\varphi^{-1}:\varphi(U\cap V)\longrightarrow\psi(U\cap V)
$$

is smooth and has a smooth inverse. Read $\psi\circ\varphi^{-1}$ as "first undo the $\varphi$ coordinates, then apply the $\psi$ coordinates."

This condition is why differentiation is meaningful beyond a single chart. If the transition map were merely continuous, a derivative calculated in one chart might have no compatible interpretation in the other.

> [!counterexample] A crossing is not a smooth curve at the crossing
> The set $X=\{(x,y)\in\mathbb R^2:xy=0\}$ is the union of the two coordinate axes. Away from the origin it locally looks like a line. At the origin, remove the crossing point from a small neighborhood: **four arms** remain, instead of the two sides obtained by removing a point from an open interval. The crossing is not locally a one-dimensional manifold there. This is different from a perfectly smooth circle whose particular *coordinates* happen to break down.

## 3. Tangent vectors: directions available at a point

Calculus on a curve uses a derivative to describe a direction of motion. On a manifold, a **tangent vector** at a point $p$ is a possible instantaneous direction for a curve passing through $p$.

For a smooth curve $\gamma:(-\varepsilon,\varepsilon)\to M$ with $\gamma(0)=p$, its coordinate velocity is

$$
\frac{d}{dt}(\varphi\circ\gamma)(0).
$$

Changing charts changes the coordinate entries according to the multivariable [chain rule](./multivariable-calculus), but not the underlying tangent direction. At $p$, all tangent vectors form a vector space $T_pM$ (read "T-sub-p-M"), the **tangent space**.

### Worked example: the tangent plane of the sphere

Consider the unit sphere in $\mathbb R^3$:

$$
S^2=\{(x,y,z):x^2+y^2+z^2=1\}.
$$

If $\gamma(t)$ stays on the sphere, then $\gamma(t)\cdot\gamma(t)=1$. Differentiate at $t=0$:

$$
2\gamma(0)\cdot\gamma'(0)=0.
$$

Writing $p=\gamma(0)$ and $v=\gamma'(0)$ gives the tangent condition

$$
\boxed{T_pS^2=\{v\in\mathbb R^3:p\cdot v=0\}.}
$$

At the north pole $p=(0,0,1)$, this says $v_z=0$. Thus every tangent vector has the form $(a,b,0)$: the tangent space is a **plane**, even though the sphere itself is curved.

**Why is that useful?** We have replaced the curved surface *near one point* by the vector space of infinitesimal directions. We can now apply linear algebra to derivatives on a manifold.

### Differentials are linear maps

For a smooth map $F:M\to N$, its **differential** at $p$ is the linear map

$$
dF_p:T_pM\longrightarrow T_{F(p)}N.
$$

In coordinates, this becomes the familiar **Jacobian matrix**. But the differential itself is not the matrix; the matrix depends on the chosen charts. This is the same distinction developed in [Linear Algebra Foundations](./linear-algebra-foundations#linear-transformations).

## 4. From tangent vectors to measurements: differential forms

A tangent vector is a direction. A **covector** is a linear measurement of directions, an element of the dual space $T_p^*M$.

For a smooth real-valued function $f$, its **differential** $df_p$ takes a tangent vector $v$ and returns the rate of change of $f$ in that direction:

$$
df_p(v)=v(f).
$$

In a coordinate chart with coordinates $(x^1,\ldots,x^n)$, this is the familiar expression

$$
df=\frac{\partial f}{\partial x^1}dx^1+\cdots+
\frac{\partial f}{\partial x^n}dx^n.
$$

Read $dx^i$ as the covector measuring change in the $i$th coordinate direction. They are not tiny numbers; they are basis covectors.

A **differential $1$-form** assigns a covector to each point, smoothly. More generally, a differential $k$-form assigns an alternating, multilinear measurement of $k$ tangent vectors. Forms are the objects integrated along curves, across surfaces, and in higher dimensions.

### Worked example: integrating a $1$-form around the circle

On the plane, let

$$
\alpha=-y\,dx+x\,dy.
$$

Parameterize the unit circle by $\gamma(t)=(\cos t,\sin t)$ for $0\leq t\leq2\pi$. Along this curve,

$$
dx=-\sin t\,dt,\qquad dy=\cos t\,dt.
$$

Substituting gives

$$
\gamma^*\alpha
=-\sin t(-\sin t)\,dt+\cos t(\cos t)\,dt
=dt.
$$

Therefore

$$
\boxed{\int_{S^1}\alpha=\int_0^{2\pi}dt=2\pi.}
$$

The star in $\gamma^*\alpha$ is read "gamma pullback alpha": it means express the form along the curve's parameter $t$.

**Surprise:** On the circle, $\alpha$ behaves locally like an angle differential $d\theta$. But there cannot be one globally defined smooth real-valued angle function $\theta:S^1\to\mathbb R$ with $d\theta=\alpha|_{S^1}$, since integrating a global exact form around a closed loop gives $0$, not $2\pi$. This is a first bridge from calculus to [Algebraic Topology](./algebraic-topology#8-a-bridge-to-differential-forms) and [Sheaf Theory](./sheaf-theory#6-local-solutions-do-not-imply-a-global-solution).

## 5. Riemannian metrics: adding lengths and angles

A smooth manifold has differentiable maps, but no preferred distance formula. A **Riemannian metric** adds a smoothly varying, positive-definite inner product

$$
g_p:T_pM\times T_pM\longrightarrow\mathbb R
$$

at each point $p$. Read $g_p(v,w)$ as the inner product of the tangent vectors $v$ and $w$ at $p$.

If $\gamma:[a,b]\to M$ is a smooth curve, its length is

$$
L(\gamma)=\int_a^b
\sqrt{g_{\gamma(t)}\bigl(\gamma'(t),\gamma'(t)\bigr)}\,dt.
$$

So an ordinary length formula is recovered *after* we choose how to measure tangent vectors.

### Example: the standard round sphere

The unit sphere inherits a Riemannian metric by restricting the Euclidean dot product to each tangent plane. A great circle, such as the equator

$$
\gamma(t)=(\cos t,\sin t,0),\qquad 0\leq t\leq2\pi,
$$

has speed $\|\gamma'(t)\|=1$ and length $2\pi$. A segment of great circle is locally shortest between nearby endpoints. Such locally distance-minimizing, constant-speed curves are examples of **geodesics**.

**Crucial distinction:** The sphere has a smooth structure even if we do not choose its usual round metric. Different metrics on the *same smooth sphere* can change lengths and curvature while leaving the smooth manifold unchanged.

## 6. Curvature: what no single flat chart can remove

A coordinate grid can make a small region *look* flat on paper. Curvature measures something more intrinsic: how the metric and its directions vary, independent of the chart used.

For a two-dimensional Riemannian surface, **Gaussian curvature** $K$ is one scalar measure of this bending. A unit round sphere has $K=1$ everywhere; the Euclidean plane has $K=0$.

> [!distinction] Intrinsic versus extrinsic bending
> A cylinder can be bent into its familiar three-dimensional shape without stretching its ideal flat sheet: intrinsically its Gaussian curvature is $0$ away from boundaries. A sphere cannot be flattened onto a plane without changing local distances. Curvature is not merely how curved a surface *looks* in three-dimensional space.

An extraordinary global result links local curvature to topology. For a **compact, oriented, boundaryless, smooth surface** with a Riemannian metric, the [Gauss–Bonnet theorem](./algebraic-topology#7-euler-characteristic-a-numerical-shadow-of-topology) states

$$
\int_M K\,dA=2\pi\chi(M),
$$

where $\chi(M)$ is the **Euler characteristic**, a number depending only on the surface's topology.

On the unit sphere, $K=1$ and its area is $4\pi$, so the left side is $4\pi$. Its Euler characteristic is $2$, so the right side is also $4\pi$. The full theorem is deeper than this calculation, but its message is remarkable: **integrating local geometric information can reveal a global topological invariant**.

## 7. How the structures connect

| Starting idea | Additional data or operation | What becomes possible |
| --- | --- | --- |
| Topological manifold | Smoothly compatible charts | Tangent spaces, derivatives, smooth maps |
| Smooth manifold | Riemannian metric | Length, angles, geodesics, curvature |
| Smooth manifold | Differential forms | Integrals and Stokes-type theorems |
| A space covered by open regions | Compatible local sections | [Sheaf gluing](./sheaf-theory) |
| A space viewed up to continuous deformation | Homotopy and homology | [Algebraic-topological invariants](./algebraic-topology) |

This is a network, not a ladder. Homotopy and singular homology do not require a Riemannian metric; a smooth atlas does not come with a natural curvature; a sheaf can exist on spaces that are not manifolds.

## 8. Self-check and boundaries

1. **Does every manifold need a global Euclidean coordinate chart?** No. The sphere needs multiple charts.
2. **Is a tangent plane a flat approximation to the entire sphere?** No. It describes infinitesimal directions at one point.
3. **Does every smooth manifold come with a preferred notion of distance?** No. A Riemannian metric is extra data.
4. **Is an apparent coordinate singularity necessarily a geometric singularity?** No. Latitude/longitude breaks down at the poles, but the round sphere is smooth there.
5. **Can integration reveal topology?** Yes. The nonzero integral of the angle form around the circle obstructs its being globally exact.

**Scope:** This chapter develops the first working definitions, concrete tangent and integral calculations, and the geometric intuition. A full treatment would prove the inverse-function and implicit-function theorems in charts, develop tangent bundles, connections, covariant derivatives, general Stokes' theorem, and curvature tensors. Those are **not claimed here**. Continue through [Algebraic Topology](./algebraic-topology), [Sheaf Theory](./sheaf-theory), or [Information Geometry](./information-geometry), depending on which questions you want to ask next.
