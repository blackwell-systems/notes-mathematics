---
title: "Algebraic Topology: Turning Shapes into Invariants"
prerequisites: ["general-topology-constructions", "group-theory-foundations"]
enables: []
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [General Topology](./general-topology-foundations) (continuous maps and connectedness), [Subspaces, Products and Quotients](./general-topology-constructions) (constructing a circle), and [Group Theory](./group-theory-foundations) (groups and homomorphisms).
> **Recommended:** [Equivalence Relations](./equivalence-relations) for quotients and [Linear Algebra](./linear-algebra-foundations) for kernels and images.
> **Leads to:** [Differential Geometry](./differential-geometry) (forms and curvature), [Sheaf Theory](./sheaf-theory) (local-to-global obstructions), and further work on homological algebra.

**Start with the intuition:** Imagine a rubber band wrapped around a shape. Can you shrink the band to a point while keeping it on the shape? A disk lets you do this. A circle does not. The distinction survives stretching and bending, even though lengths and angles do not.

**Algebraic topology** gives algebraic answers to such geometric questions. It turns a space into objects such as groups, and asks what information about the original shape those groups preserve.

## 1. What does topology permit us to forget?

A **homeomorphism** is a continuous bijection with a continuous inverse. Homeomorphic spaces have the same topological structure, although their geometric shapes can look different.

Algebraic topology often studies an even more flexible notion of sameness: **homotopy equivalence**. Maps $f,g:X\to Y$ are **homotopic** if there is a continuous deformation $H:X\times[0,1]\to Y$ with

$$
H(x,0)=f(x),\qquad H(x,1)=g(x).
$$

Read $H$ as a deformation that changes the map continuously over time, not necessarily as a physical deformation in surrounding three-dimensional space.

Spaces $X$ and $Y$ are **homotopy equivalent** if there are maps $f:X\to Y$ and $g:Y\to X$ such that $g\circ f$ and $f\circ g$ are homotopic to the respective identity maps.

> [!distinction] Homeomorphism and homotopy equivalence are not identical
> An open disk is not homeomorphic to a single point, but it *is* homotopy equivalent to a point: contract the disk continuously toward its center. Homotopy deliberately forgets more detail than homeomorphism. It retains many features of **holes and loops**, not the precise local shape of the space.

### Worked example: punctured plane and circle have the same homotopy type

Let $X=\mathbb R^2\setminus\{0\}$. Define

$$
r(x)=\frac{x}{\|x\|},\qquad x\in X,
$$

which sends every nonzero point radially to the unit circle. A continuous deformation from the identity to $r$ is

$$
H(x,t)=\left((1-t)+\frac{t}{\|x\|}\right)x.
$$

The scaling factor stays positive, so we never hit the missing origin. At $t=0$, $H(x,0)=x$; at $t=1$, $H(x,1)=r(x)$. Points already on the unit circle remain fixed.

This is a **deformation retraction**: the punctured plane and circle have the same homotopy type. The entire unbounded plane, with one point removed, retains one essential loop obstruction.

## 2. Paths and loops: where the fundamental group begins

A **path** from $a$ to $b$ is a continuous map $\gamma:[0,1]\to X$ with $\gamma(0)=a$ and $\gamma(1)=b$.

A **loop based at** $p$ is a path with $\gamma(0)=\gamma(1)=p$. Two based loops are equivalent when one can be continuously deformed into the other **while keeping the endpoints fixed at $p$**.

The set of these loop classes forms the **fundamental group**, written

$$
\pi_1(X,p).
$$

Read $\pi_1$ as "pi-one." The group operation is **concatenation**: travel along the first loop, then along the second. The constant loop is the identity, and the reverse of a loop supplies its inverse up to homotopy.

The fundamental group can be noncommutative. It is not just a number counting holes.

### Worked example: loops around a circle

Parametrize the unit circle by

$$
\gamma_n(t)=\bigl(\cos(2\pi nt),\sin(2\pi nt)\bigr),
\qquad 0\leq t\leq1,\quad n\in\mathbb Z.
$$

The integer $n$ is the **winding number**: how many times the loop travels around the circle, counting orientation.

- $n=0$: the constant loop.
- $n=1$: one counterclockwise circuit.
- $n=-1$: one clockwise circuit.
- $n=2$: two counterclockwise circuits.

Concatenating loops adds winding numbers. Reversing a loop negates the winding number. More importantly, a continuous deformation through loops on the circle **cannot change this integer**.

> [!proof] Why a winding number is an integer
> A loop on the circle can be tracked locally by a continuously varying angle $\theta(t)$ with $(\cos\theta(t),\sin\theta(t))=\gamma(t)$. Although there may be no globally defined angle *on the circle itself*, along the interval $[0,1]$ an angle can be chosen continuously. Because the loop ends where it starts, $\theta(1)-\theta(0)$ must be a multiple of $2\pi$. Dividing by $2\pi$ gives an integer. A homotopy cannot change it continuously without leaving the integers. Proving the full classification uses the angle-lifting construction carefully; this paragraph gives its core mechanism.

In fact,

$$
\boxed{\pi_1(S^1)\cong\mathbb Z}.
$$

Every loop class is determined by its winding number, and every integer occurs.

Contrast a disk: a loop inside a disk can be contracted toward the center, so its fundamental group is trivial. No amount of stretching a circle into a disk makes those groups equal without filling the central hole.

## 3. Fundamental group versus higher-dimensional holes

**Simply connected** means path-connected with every loop contractible (equivalently, trivial fundamental group for a path-connected space).

A two-dimensional sphere $S^2$ is simply connected, even though it surrounds a three-dimensional region. Its fundamental group does **not** detect this two-dimensional feature. The distinction illustrates a limitation of $\pi_1$:

| Space | Fundamental group | What it notices |
| --- | --- | --- |
| Disk $D^2$ | Trivial | Every loop contracts |
| Circle $S^1$ | $\mathbb Z$ | Integer winding around the circle |
| Punctured plane $\mathbb R^2\setminus\{0\}$ | $\mathbb Z$ | Same essential loop as $S^1$ |
| Sphere $S^2$ | Trivial | Loops contract, despite higher-dimensional topology |
| Torus $S^1\times S^1$ | $\mathbb Z^2$ | Two independent loop directions |

Higher **homotopy groups** $\pi_n$ study maps from higher-dimensional spheres rather than just loops. Their definition and computation are a further subject. A related, often more computable family of invariants comes from **homology**.

> [!connection] A finite graph already has a cohomological obstruction
> Before studying higher-dimensional holes, [solve the XOR constraints on a triangle](./cross-disciplinary-bridges#bridge-3-an-inconsistent-cycle-is-a-cohomological-obstruction). The exact criterion—edge labels XOR to zero on every cycle—has both a spanning-tree algorithm and a first-cohomology interpretation. This uses cochains over $\mathbb Z_2$, whereas the chain groups below initially use integer coefficients.

## 4. Chains, cycles and boundaries

The fundamental group studies loops and their deformations. Homology begins by making formal **sums of oriented pieces**: vertices, edges, triangles, and their higher-dimensional analogues.

A **chain group** $C_k$ (read "C-sub-k") consists of integer combinations of oriented $k$-dimensional pieces. A **boundary map**

$$
\partial_k:C_k\longrightarrow C_{k-1}
$$

sends each oriented piece to its oriented boundary.

For an edge with endpoints $a$ and $b$,

$$
\partial_1[a,b]=[b]-[a].
$$

For a filled, oriented triangle $[a,b,c]$,

$$
\partial_2[a,b,c]=[b,c]-[a,c]+[a,b].
$$

The alternating signs record orientation.

### Worked proof: the boundary of a boundary vanishes

Apply $\partial_1$ to the boundary of the triangle:

$$
\begin{aligned}
\partial_1\partial_2[a,b,c]
&=([c]-[b])-([c]-[a])+([b]-[a])\\
&=0.
\end{aligned}
$$

Each endpoint appears twice with opposite signs. The same cancellation principle holds in every dimension:

$$
\boxed{\partial_{k-1}\circ\partial_k=0.}
$$

**This is why homology works:** every boundary is automatically a cycle, but not every cycle is a boundary.

- A **$k$-cycle** is a $k$-chain $z$ with $\partial_k z=0$.
- A **$k$-boundary** is a chain of the form $z=\partial_{k+1}c$.
- Two cycles count as the same in homology if they differ by a boundary.

That leads to the quotient group

$$
\boxed{H_k(X)=\ker(\partial_k)/\operatorname{im}(\partial_{k+1}).}
$$

Read $H_k$ as "H-sub-k." This formula uses the same pattern as the [kernel/image quotient](./linear-algebra-foundations#the-first-isomorphism-theorem-what-survives-information-loss), but it answers a different question: **which cycles do not bound anything inside the space?**

## 5. Filled versus unfilled: one triangle changes everything

Take three vertices $a,b,c$ and the three edges joining them. Their oriented sum

$$
z=[a,b]+[b,c]+[c,a]
$$

is a cycle: all vertex boundaries cancel.

**Case A: only the edges exist.** The result is a triangle-shaped **circle**. There is no two-dimensional piece whose boundary is $z$. So $z$ represents a nonzero class in $H_1$.

**Case B: add the filled triangle.** Now we also have the two-dimensional piece $[a,b,c]$, and

$$
z=\partial_2[a,b,c].
$$

The same $z$ is now a **boundary**, so its class vanishes in $H_1$.

Adding one filled face did not alter the perimeter, but it changed the available higher-dimensional structure. This is a precise sense in which homology detects a hole.

> [!intuition] Cycles modulo boundaries
> The numerator $\ker\partial_k$ identifies all closed configurations. The denominator $\operatorname{im}\partial_{k+1}$ declares that cycles already filled in are **not evidence of holes**. The quotient preserves the closed configurations that cannot be explained away as boundaries.

## 6. What homology records

For familiar spaces, the first few integral homology groups are:

| Space | $H_0$ | $H_1$ | $H_2$ |
| --- | --- | --- | --- |
| Point or disk | $\mathbb Z$ | $0$ | $0$ |
| Circle $S^1$ | $\mathbb Z$ | $\mathbb Z$ | $0$ |
| Sphere $S^2$ | $\mathbb Z$ | $0$ | $\mathbb Z$ |
| Torus $T^2$ | $\mathbb Z$ | $\mathbb Z^2$ | $\mathbb Z$ |
| Two separate points | $\mathbb Z^2$ | $0$ | $0$ |

Here $H_0$ measures connected components (for the familiar well-behaved spaces in the table, path-connected components), $H_1$ detects independent one-dimensional cycles modulo filled boundaries, and $H_2$ detects two-dimensional cycles that do not bound within the space.

These are **abelian groups**. They forget some information the potentially noncommutative fundamental group retains. In fact, for path-connected spaces, $H_1$ is the **abelianization** of the fundamental group. So homology can be easier to calculate at the price of discarding certain distinctions.

> [!warning] Homology groups are invariants, not complete fingerprints
> If two spaces are homotopy equivalent, their homology groups agree. The converse is false: equal homology alone does **not** establish that two spaces are homotopy equivalent or homeomorphic. An invariant deliberately retains only selected information.

## 7. Euler characteristic: a numerical shadow of topology

For a finite triangulated surface, count vertices ($V$), edges ($E$), and triangular faces ($F$). Its **Euler characteristic** (read "OY-ler characteristic") is

$$
\chi=V-E+F.
$$

For the boundary of a tetrahedron, a triangulation of the sphere, we have $V=4$, $E=6$, and $F=4$. Therefore

$$
\chi(S^2)=4-6+4=2.
$$

For a filled triangle (a disk), $V=3$, $E=3$, and $F=1$, giving $\chi=1$. For just the triangle's perimeter, $V=3$, $E=3$, and no faces, giving $\chi=0$.

Why doesn't the answer change when we subdivide a triangle? Inserting one vertex on an existing edge increases both $V$ and $E$ by one, leaving the difference unchanged. More generally, subdividing a face changes the counts in compensating ways; the invariance of $\chi$ is formalized by the relationship to homology.

For a finite cell complex,

$$
\chi(X)=\sum_{k\geq0}(-1)^k\,\operatorname{rank}H_k(X).
$$

The sum is finite. For the sphere, the homology ranks are $1,0,1$, giving $1-0+1=2$. For the torus the ranks are $1,2,1$, giving $1-2+1=0$.

**Unexpected connection:** On a closed oriented Riemannian surface, [Gauss–Bonnet](./differential-geometry#6-curvature-what-no-single-flat-chart-can-remove) says the integral of Gaussian curvature is $2\pi\chi$. A total obtained from counting cells matches a total obtained from measuring curvature.

## 8. A bridge to differential forms

In differential geometry we learned to integrate differential forms. An exact form $\omega=d\eta$ integrates to zero around any appropriate closed cycle because of Stokes' theorem. But a **closed** form ($d\omega=0$) need not be exact globally.

On the punctured plane, the one-form

$$
\omega=\frac{-y\,dx+x\,dy}{x^2+y^2}
$$

is closed, yet its integral around the unit circle is $2\pi$. Thus it cannot be the differential of a globally defined real-valued function on the punctured plane. You can check the integral directly using [the circle calculation in Differential Geometry](./differential-geometry#4-from-tangent-vectors-to-measurements-differential-forms).

The **de Rham cohomology** groups measure closed differential forms modulo exact ones:

$$
H_{\mathrm{dR}}^k(M)=
\frac{\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))}
{\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))}.
$$

Read $\Omega^k(M)$ as "Omega-k of M," the vector space of smooth $k$-forms on the manifold. Again we see **cycles modulo boundaries**, this time in the form of differential equations rather than simplices.

The de Rham theorem connects these cohomology groups to ordinary cohomology with real coefficients on smooth manifolds. Proving that theorem requires machinery beyond this introduction, but it explains why geometry and topology repeatedly meet.

## 9. Maps, invariants and what is preserved

A continuous map $f:X\to Y$ induces homomorphisms on fundamental groups and homology groups:

$$
f_*:\pi_1(X,p)\to\pi_1(Y,f(p)),
\qquad
f_*:H_k(X)\to H_k(Y).
$$

The star in $f_*$ is read "f-star" and indicates the *induced* map on invariants. Compatible composition survives: $(g\circ f)_*=g_*\circ f_*$. This is one reason algebraic topology is naturally expressed using [functors](./category-functors-naturality).

> [!example] A map of degree two
> The circle map $f(z)=z^2$ sends $e^{it}$ to $e^{2it}$. A loop winding once around the input circle winds **twice** around the output. On $\pi_1(S^1)\cong\mathbb Z$ the induced homomorphism is $n\mapsto2n$. The map's effect on an infinite family of loops is captured by one integer.

This is the characteristic move of algebraic topology: turn a difficult question about continuous maps into a simpler, computable question about group homomorphisms.

## 10. Self-check and what comes next

1. **Are the circle and the punctured plane homeomorphic?** No, but they are homotopy equivalent.
2. **Why does a filled triangle have no one-dimensional homology hole?** Its boundary cycle is the boundary of the filled face.
3. **Why is $\partial^2=0$ essential?** Without it, boundaries would not necessarily be cycles, and the quotient $\ker\partial/\operatorname{im}\partial$ would not make sense.
4. **Does trivial fundamental group imply that every higher-dimensional hole vanishes?** No. The sphere $S^2$ has trivial $\pi_1$ but nonzero $H_2$.
5. **What can a map between circles do to winding?** The map $z\mapsto z^n$ multiplies winding numbers by $n$.
6. **Can identical homology groups certify that spaces are the same?** No. Homology is not a complete classification.

**Scope:** This chapter explains and computes loops, winding, boundaries, simple chain complexes, homology examples, and Euler characteristic. A full algebraic topology course would develop singular homology systematically, excision, long exact sequences, covering spaces, higher homotopy groups, CW complexes and cohomology products. Those results are **not claimed as proved here**.

**Next directions:** [Sheaf Theory](./sheaf-theory) asks whether locally defined data can be consistently assembled globally; [Differential Geometry](./differential-geometry) develops forms and curvature; [Category Theory](./category-theory-foundations) explains why the induced maps themselves are important.
