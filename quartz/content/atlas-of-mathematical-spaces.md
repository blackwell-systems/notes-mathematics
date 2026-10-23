---
title: "Atlas of Mathematical Spaces: From Sets to Structure"
prerequisites: ["set-theory", "functions-relations"]
enables: ["path-to-topology", "path-through-algebra", "path-through-analysis", "functional-analysis", "measure-theory", "information-geometry"]
---

> [!abstract] A conceptual map of mathematical structure
> **Begin with:** [Sets](./set-theory), [Functions and Relations](./functions-relations).
> **Use alongside:** [Path Through Topology](./path-to-topology), [Path Through Algebra](./path-through-algebra), and [Path Through Analysis](./path-through-analysis).
> **Advanced destinations:** [Functional Analysis](./functional-analysis), [Measure Theory](./measure-theory), [Information Geometry](./information-geometry), [Algebraic Geometry](./algebraic-geometry), [Category Theory](./category-theory-foundations).
>
> This is an **atlas**, not an assertion that all mathematical spaces sit in one chain. We will repeatedly distinguish **added structure**, **a property of an existing structure**, and **a map that preserves it**.

A **space** is usually a set of objects equipped with specified mathematical structure: perhaps a way to compare elements, a notion of nearby points, addition and scalar multiplication, measurable subsets, or differentiable coordinates. A definition matters because it licenses **particular questions and theorems**. Asking whether points are close is different from asking whether they can be added; knowing one rarely answers the other.

The goal of this guide is to learn to look at an unfamiliar space and ask:

1. **Objects:** What are its points (or more general elements)?
2. **Data:** What additional operations, relations, subsets, or functions are specified?
3. **Axioms:** Which rules must that data obey?
4. **Morphisms:** Which maps preserve the data?
5. **Properties:** Which further conditions, such as completeness or compactness, happen to hold?
6. **Limits:** Which familiar implications fail if a hypothesis is removed?
7. **Categories:** What if we consider all such spaces at once, together with the maps we permit between them?

These questions let you navigate from elementary sets to the spaces of modern analysis and geometry without confusing one kind of structure with another.

## 1. Read the map correctly: a network, not a ladder

![An upper network branches from sets into ordered, topological, vector, and measurable spaces. The lower analytic subgraph distinguishes normed spaces, Banach spaces requiring completeness, inner-product spaces carrying extra inner-product data, and Hilbert spaces at their intersection.](./media/sp-structure-atlas.svg)

*Figure: The upper branches show independent kinds of structure; the lower subgraph makes the **Banach and inner-product branches distinct** and joins them at Hilbert spaces. Downward arrows indicate additional compatible data or a stricter condition, not canonical enrichments or generally reversible implications.*

The most important distinction is between **data** and **properties**.

| Kind | Example | What it means |
| --- | --- | --- |
| Underlying collection | Set $X$ | Objects are available, without further structure |
| Additional data | A topology $\tau\subseteq\mathcal P(X)$ | Certain subsets are designated **open** |
| Additional data | A metric $d:X\times X\to[0,\infty)$ | A numerical distance obeys metric axioms |
| Additional data | Vector addition and scalar multiplication | Elements can be combined linearly |
| Condition/property | A metric is **complete** | Every metric Cauchy sequence converges *in that space* |
| Condition/property | A topological space is **compact** | Every open cover has a finite subcover |
| Compatible combination | Normed vector space | Vector operations and a norm satisfy specified compatibility rules |
| Structure-preserving map | Continuous function | Inverse images of open sets are open |

Saying “Banach space” adds **no new operation** beyond the normed vector-space operations: it demands the extra **property of norm completeness**. Saying “inner-product space,” by contrast, asks for extra **data**—an inner product generating a norm. The Hilbert condition combines these features.

> [!distinction] Two meanings of an arrow
> Some arrows **forget data**: every metric induces a topology, but retaining just its open sets discards specific distance values. Others **relax a condition**: every Banach space is a normed space after simply ceasing to insist on completeness. An arrow is not a claim that the converse is true or that every object on the general side has a preferred enrichment.

![A common four-point set is successively equipped with a topology and compatible numerical distances; in a separate branch vector operations are added before a norm can be introduced. The diagram distinguishes extra data from conditions like completeness.](./media/sp-adding-structure.svg)

*Figure: Different questions demand different data. A norm is more than an arbitrary metric glued to a vector space; it must respect translation and scalar multiplication.*

## 2. Start with a set—and notice how little it says

A [set](./set-theory) $X$ is a collection of elements; saying $x\in X$ asserts membership. A **function** $f:X\to Y$ assigns each element of $X$ exactly one element of $Y$. Neither concept provides distance, addition, or probability.

Let $X=\{a,b,c\}$. We can give this **same underlying set** many structures:

- The **discrete topology**: every subset is open.
- The **indiscrete topology**: only $\varnothing$ and $X$ are open.
- A **total order**: $a<b<c$.
- The **uniform probability distribution**: all three singleton probabilities are $1/3$ (after specifying the power-set sigma-algebra).

None is uniquely forced by the underlying elements. Different choices make different statements meaningful.

### Relations, quotients, and orders

An [equivalence relation](./equivalence-relations) declares when elements count as *the same for a chosen purpose*. Its quotient $X/{\sim}$ has **equivalence classes as points**; a quotient is not simply the original set with a changed label.

A [partial order](./order-theory) $\,\leq\,$ is reflexive, antisymmetric, and transitive. It makes “at most” or “precedes” meaningful without assigning a distance. A **lattice** is a poset in which every pair has a greatest lower bound (meet) and least upper bound (join). A **complete lattice** has meets and joins of **all subsets**, including the empty subset.

> [!proof] Complete lattices have a top and bottom element
> By definition the join $\bigvee\varnothing$ exists. The universal property of this join means it lies below every element, since every element is (vacuously) an upper bound for the empty set; hence it is the least element $\bot$. Dually $\bigwedge\varnothing$ is the greatest element $\top$.

A lattice need not be complete: $\mathbb Z$ with its usual order has pairwise minima and maxima, but **the whole** $\mathbb Z$ has neither a least nor a greatest element. Hence it is not a complete lattice.

*What this branch buys us:* fixed points, order-theoretic bounds and monotone functions. It does not supply a notion of numerical proximity.

## 3. Topological spaces: closeness without measuring it

> [!definition] Topological space
> A topology on $X$ is a family $\tau$ of subsets, called **open sets**, with $\varnothing,X\in\tau$, closed under **arbitrary unions**, and closed under **finite intersections**. The space is $(X,\tau)$.

Here **continuous** means: for every open $V\subseteq Y$, the inverse image $f^{-1}(V)$ is open in $X$. A **homeomorphism** is a continuous bijection whose inverse is continuous. See [Topological Foundations](./general-topology-foundations) for constructions and [the Topology path](./path-to-topology) for intuition.

A topology can describe proximity without coordinates or distance. It enables continuity, closure, connectedness, compactness and separation axioms. But it need not tell you **how far** apart two points are.

### Counterexample: some topological spaces are not metric spaces

On $X=\{0,1\}$, let $\tau=\{\varnothing,\{1\},X\}$, the **Sierpiński topology**. It is topological but **not Hausdorff**: no disjoint open neighborhoods separate $0$ and $1$. Every metric topology is Hausdorff (disjoint balls of radius $d(x,y)/3$ separate distinct points). Therefore **no metric generates this topology**.

This proves that the branch from **metric** to **topological** is strictly one-way: not all topologies can be metrized.

## 4. Metric spaces: a number for the separation

> [!definition] Metric space
> A metric $d$ on $X$ satisfies, for all $x,y,z\in X$,
> $$
> d(x,y)\geq0,\quad d(x,y)=0\iff x=y,\quad d(x,y)=d(y,x),
> $$
> $$
> d(x,z)\leq d(x,y)+d(y,z).
> $$
> A metric space is the pair $(X,d)$.

Open balls $B_r(x)=\{y:d(x,y)<r\}$ generate a topology. The metric also makes **Cauchy sequences**, numerical error bounds, Lipschitz maps and completeness meaningful.

![Two different distance scales on the same real line are shown with the same local neighborhoods, contrasting topology with the extra quantitative information of a metric.](./media/sp-metric-topology.svg)

*Figure: Open neighborhoods forget numerical distances. Different metrics can agree on every open set yet disagree on which sequences are Cauchy.*

### Proof: the metric-open sets form a topology

The empty and whole space are metric-open. Any union of open sets is open, because a point in the union lies in some open member with a ball still inside it. For a **finite** intersection $U_1\cap\cdots\cap U_n$, choose at each point positive ball radii $r_i$ contained in $U_i$; the minimum of finitely many positive radii is positive and gives a ball inside the intersection. Thus the metric-open sets obey all three topology axioms.

**Converse?** False, as the Sierpiński example shows.

### Subtle counterexample: completeness is not purely topological

On $\mathbb R$, compare

$$
d(x,y)=|x-y|,\qquad
\rho(x,y)=|\arctan x-\arctan y|.
$$

Because $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is a homeomorphism (with usual Euclidean topologies), $d$ and $\rho$ generate **the same open sets**. But the sequence $x_n=n$ is $\rho$-Cauchy: $\arctan n$ converges to $\pi/2$. It does **not** converge in $(\mathbb R,\rho)$, since no real $x$ has $\arctan x=\pi/2$. Thus $(\mathbb R,\rho)$ is incomplete, whereas $(\mathbb R,d)$ is complete.

**Lesson:** even among metrizable spaces, changing the **specific compatible metric** can change metric completeness without changing topology. (The property *admitting at least one compatible complete metric* is a separate topological question.)

## 5. Vector spaces: addition and scaling, independently of distance

> [!definition] Vector space
> A real vector space $V$ carries addition $+:V\times V\to V$ and scalar multiplication $\mathbb R\times V\to V$, satisfying the familiar associativity, commutativity, distributivity, zero and inverse axioms. A complex vector space uses scalar field $\mathbb C$ instead.

The **elements need not be arrows**. They may be polynomials, continuous functions, infinite sequences or random variables. Linear combinations $ax+by$ make sense, but **neither length nor convergence** is defined by the vector-space axioms.

A map $T:V\to W$ is **linear** when $T(ax+by)=aT(x)+bT(y)$. Linear maps preserve the specified operations; continuity is a **separate** requirement until a topology is introduced. [Linear Algebra Foundations](./linear-algebra-foundations) develops subspaces, bases, dimension and linear maps.

> [!counterexample] Linear need not mean continuous in infinite-dimensional normed spaces
> Let $P$ be the space of real polynomials on $[0,1]$ with the sup norm. Differentiation $D:P\to P$ is linear. But for $f_n(t)=t^n$, $\|f_n\|_\infty=1$, while $\|Df_n\|_\infty=n$. Thus $D$ is **unbounded**, and consequently not continuous in that norm. Every linear map between finite-dimensional normed spaces is continuous; this counterexample is genuinely infinite-dimensional.

## 6. Normed spaces, Banach spaces, and inner products

A **norm** $\|\cdot\|$ obeys definiteness, absolute homogeneity $\|ax\|=|a|\|x\|$, and the triangle inequality. It induces $d(x,y)=\|x-y\|$. The induced metric is **translation invariant** and **homogeneous**; an arbitrary metric on a vector space may lack these compatibilities.

A normed vector space is therefore simultaneously a **vector space, a metric space, and a topological space** in a compatible way.

> [!theorem] Norm-induced distances really are metrics
> Set $d(x,y)=\|x-y\|$. Norm positivity and definiteness give metric positivity and definiteness; homogeneity with scalar $-1$ gives symmetry; and
> $$
> \|x-z\|=\|(x-y)+(y-z)\|\leq\|x-y\|+\|y-z\|.
> $$
> All metric axioms follow directly.

> [!definition] Banach space
> A **Banach space** is a normed vector space **complete in its norm metric**. Completeness is a condition on the chosen norm, not another operation.

> [!definition] Inner-product and Hilbert spaces
> An **inner product** $\langle x,y\rangle$ is linear in one input, conjugate symmetric (over $\mathbb C$), and positive definite. It produces the norm $\|x\|=\sqrt{\langle x,x\rangle}$. An **inner-product space** need not be complete. A **Hilbert space** is a complete inner-product space.

The branches meet at Hilbert spaces: every Hilbert space is a Banach space via its induced norm, and every Hilbert space is an inner-product space. An incomplete inner-product space is not Hilbert. A Banach space need not support its **given** norm as one induced by an inner product.

### A decisive test: the parallelogram law

> [!theorem] Inner-product norms obey the parallelogram identity
> $$
> \|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.
> $$

> [!proof] Expand both squared norms
> In a real inner-product space,
> $$
> \|x+y\|^2=\|x\|^2+2\langle x,y\rangle+\|y\|^2,
> $$
> $$
> \|x-y\|^2=\|x\|^2-2\langle x,y\rangle+\|y\|^2.
> $$
> Adding cancels the cross terms. For complex spaces replace each cross term with $2\operatorname{Re}\langle x,y\rangle$ and the cancellation is unchanged.

![Euclidean and taxicab unit balls are contrasted; the norms of x, y, x plus y, and x minus y demonstrate failure of the parallelogram identity for the taxicab norm.](./media/sp-norm-parallelogram.svg)

*Figure: An inner product constrains the geometry of a norm. The unit ball of $\ell^1$ in $\mathbb R^2$ is a diamond and violates the parallelogram identity.*

**Worked counterexample.** In $(\mathbb R^2,\|\cdot\|_1)$, take $x=(1,0)$ and $y=(0,1)$. The left-hand side equals $2^2+2^2=8$, while the right-hand side equals $2(1^2)+2(1^2)=4$. The norm cannot come from an inner product. Yet the space is finite-dimensional and hence **Banach**.

The converse—that a norm satisfying the parallelogram law arises from an inner product—is the **Jordan–von Neumann theorem**; we do not substitute this one calculation for its general proof.

### What these spaces enable

| Structure | New capability |
| --- | --- |
| Normed | Size, norm convergence, bounded/continuous linear operators |
| Banach | Norm Cauchy sequences converge; completeness tools for operator equations |
| Inner product | Orthogonality, angles, Cauchy–Schwarz and geometric projections |
| Hilbert | Inner-product geometry **plus** completeness; closed-subspace projections, Riesz representation |

See [Functional Analysis](./functional-analysis) for the details and proofs of several foundational implications. **Closed-subspace projection** needs an appropriate Hilbert setting: orthogonality by itself is not a guarantee that nearest points exist.

## 7. Topological vector spaces: compatibility without a single norm

A **topological vector space** (TVS) over $\mathbb R$ or $\mathbb C$ is both a vector space and a topological space, with **continuous addition** $V\times V\to V$ and **continuous scalar multiplication** $\mathbb F\times V\to V$ (where the scalar field has its usual topology).

Every normed vector space is a TVS: triangle inequality makes addition continuous, and homogeneity controls scalar multiplication. But a TVS need not admit any norm that generates its topology.

> [!counterexample] A metrizable TVS that has no compatible norm
> Consider the set of **all real sequences** $\mathbb R^{\mathbb N}$ with coordinatewise vector operations and the **product topology**. A basic neighborhood of zero restricts only **finitely many coordinates**; the other coordinates are unrestricted. Coordinatewise addition and scaling are continuous, so this is a TVS.
>
> Suppose a norm generated the product topology. Its open unit ball $\{x:\|x\|<1\}$ would contain some basic product-neighborhood $U$ of zero. Choose a coordinate $j$ which $U$ does **not** constrain. Then for **every real** $t$, the vector $te_j$ lies in $U$, hence has norm less than one. But $\|te_j\|=|t|\|e_j\|$, which grows without bound as $|t|\to\infty$ since $\|e_j\|>0$. Contradiction.
>
> Therefore this TVS is **not normable**, even though its product topology is metrizable (as a countable product of metrizable spaces).

This one example distinguishes three concepts often wrongly collapsed into one: **having a topology, having a metric, and having a compatible norm**.

## 8. Measurable, measure, and probability spaces: sizes of subsets

These spaces branch from sets in a **different direction** than metrics or vector operations.

> [!definition] Measurable space
> A **sigma-algebra** $\Sigma\subseteq\mathcal P(X)$ contains $\varnothing$, is closed under complements in $X$, and is closed under **countable unions**. A measurable space is $(X,\Sigma)$.

A topology is closed under **arbitrary unions** and **finite intersections**; a sigma-algebra is closed under **complements** and **countable unions**. Neither set of axioms is a replacement for the other.

> [!definition] Measure and probability spaces
> A measure $\mu:\Sigma\to[0,\infty]$ satisfies $\mu(\varnothing)=0$ and **countable additivity** for pairwise disjoint measurable sets. A measure space is $(X,\Sigma,\mu)$.
>
> A **probability space** has $\mu(X)=1$, conventionally denoted $(\Omega,\mathcal F,P)$.

![The same finite three-point set appears with measurable subsets. A probability measure assigns singleton weights one half, one third, and one sixth, with total probability one. A topological branch independently supplies open sets; its Borel sigma-algebra joins the branches.](./media/sp-measure-borel.svg)

*Figure: A sigma-algebra decides **what can be measured**; a measure decides **how much**. A topology independently decides which sets are open. The Borel construction connects them without making them identical.*

### One exact finite example

Let $\Omega=\{a,b,c\}$ and $\mathcal F=\mathcal P(\Omega)$. Assign $P(\{a\})=1/2$, $P(\{b\})=1/3$, and $P(\{c\})=1/6$. For any $A\subseteq\Omega$, define $P(A)$ as the sum of the weights of its members. Then $P(\Omega)=1/2+1/3+1/6=1$, and finite disjoint additivity gives countable additivity because only finitely many disjoint subsets can be nonempty.

If $\Omega$ also has a topology $\tau$, the **Borel sigma-algebra** $\sigma(\tau)$ is the smallest sigma-algebra containing all its open sets. It is constructed *from* the topology, but the topology alone does not specify a measure. Even on the real line, **Borel sets** and **Lebesgue-measurable sets** differ: Lebesgue measurability includes completions by subsets of null sets.

[Measure Theory](./measure-theory) constructs integrals from this structure. [Probability](./probability) uses the same objects with total mass one. [Information Geometry](./information-geometry) adds further statistical structure to families of probability distributions.

> [!distinction] Functions versus equivalence classes of functions
> $C([0,1])$ consists of actual continuous functions. By contrast, $L^2([0,1])$ identifies measurable functions that agree **almost everywhere**. An element of $L^2$ is an *equivalence class*, not a uniquely specified pointwise function. The inner product $\langle f,g\rangle=\int f\overline g$ is well-defined on those classes. This is an important meeting point of **measure, quotient, and Hilbert** structure.

## 9. Manifolds: spaces that are locally Euclidean

A **topological $n$-manifold** is, under the usual convention, a Hausdorff, second-countable space in which every point has a neighborhood homeomorphic to an open subset of $\mathbb R^n$. A **chart** supplies such a local coordinate map.

**Being locally Euclidean does not mean being globally $\mathbb R^n$.** The circle $S^1$ is locally like an open interval, but globally its loop cannot be straightened into the entire real line by a homeomorphism.

A **smooth manifold** carries a compatible collection of smooth coordinate charts (an *atlas*), so differentiability makes sense independently of one particular chart. A **Riemannian manifold** further assigns smoothly varying inner products on tangent spaces. Their inner products define curve lengths, and for connected manifolds the infimum of lengths of piecewise smooth curves induces a distance compatible with the manifold topology.

![A circle is shown with two overlapping local coordinate arcs, a tangent line at a point, and a small inner-product ellipse in its tangent space, illustrating topological, smooth, and Riemannian structure.](./media/sp-manifold-local.svg)

*Figure: The local-chart step gives Euclidean coordinates near each point, smooth transitions let us differentiate, and a Riemannian metric measures tangent vectors and curve length. These are additional structures, not automatic consequences of an arbitrary topology.*

| Space | What is chosen or demanded | Example consequence |
| --- | --- | --- |
| Topological manifold | Locally Euclidean charts; Hausdorff and second-countable | Locally like $\mathbb R^n$ |
| Smooth manifold | Compatible smooth charts | Differentiable functions and tangent vectors |
| Riemannian manifold | Smooth positive-definite inner product at each tangent space | Angles, lengths, geodesics, induced distance |

**Precise limitation:** Our existing [Topology](./general-topology-foundations), [Multivariable Calculus](./multivariable-calculus), and [Euclidean Geometry](./euclidean-geometry) chapters supply background, but the site does **not yet contain a full standalone manifold theory** (coordinate transition proofs, tangent bundles, differential forms, etc.). The definitions here are a structured orientation, not a claim that those results have already been covered.

## 10. Intersections of branches: the spaces mathematicians actually use

Advanced mathematics often works exactly where two branches meet.

| Combined structure | What must be compatible | A canonical example |
| --- | --- | --- |
| **Topological group** | Multiplication and inversion continuous | $(\mathbb R,+)$; $S^1$ under multiplication |
| **Topological vector space** | Addition and scalar multiplication continuous | $C([0,1])$ with sup-norm topology |
| **Banach space** | Vector-space operations, norm, completeness | $(C([0,1]),\|\cdot\|_\infty)$ |
| **Hilbert space** | Inner product, induced norm, completeness | $\ell^2$; $L^2$ of a measure space |
| **Borel measure space** | Sigma-algebra derived from opens, plus measure | Real line with Borel measure |
| **Lie group** | Smooth manifold and group with smooth operations | The rotation group $SO(2)$ |
| **Riemannian manifold** | Smooth manifold and smoothly varying inner products | The circle with its standard metric |
| **Affine algebraic variety** | Polynomial zero-set structure, Zariski topology | Complex affine line $\mathbb A^1_\mathbb C$ |

**A surprising example:** the complex affine line with the **Zariski topology** has the same underlying set $\mathbb C$ as the ordinary complex plane, but its nonempty proper opens are complements of **finite** sets. Any nonempty open has finite complement, so every open cover already has a finite subcover: choose one nonempty open, then finitely many cover-members for the finitely many omitted points. Thus it is **compact** in the open-cover sense. But it is **not Hausdorff**, because any two nonempty opens intersect. The ordinary Euclidean topology on $\mathbb C$ is Hausdorff and **not compact**. The two spaces have identical points but very different topology.

This is why [Algebraic Geometry](./algebraic-geometry) must be understood as changing *the structure*, not merely changing the notation for complex numbers.

## 11. Same functions, different spaces: the recurring experiment

Let

$$
V=C([0,1],\mathbb R),
$$

the set of continuous real-valued functions on the unit interval. We can now revisit it through the entire atlas.

![One underlying set of continuous functions supports vector addition and two different norms. A narrow triangular spike has supremum norm one while its integral norm shrinks to zero, demonstrating that different structures induce different convergence.](./media/sp-function-space.svg)

*Figure: A function is one mathematical object, but its **notion of closeness** depends on which norm we choose. Small total error is not the same as small worst-case error.*

**As a set:** its elements are functions $f:[0,1]\to\mathbb R$ that happen to be continuous.

**As a vector space:** define $(f+g)(t)=f(t)+g(t)$ and $(af)(t)=af(t)$. Closure follows from the elementary rules for continuous functions.

**As a normed space:** use $\|f\|_\infty=\max_{t\in[0,1]}|f(t)|$, which induces the uniform metric. [Functional Analysis](./functional-analysis) proves this space is **Banach**: a sup-norm Cauchy sequence converges uniformly, and uniform limits of continuous functions are continuous.

**With a different norm on the same set:** use $\|f\|_1=\int_0^1|f(t)|\,dt$. For continuous functions this is a genuine norm, because a continuous nonzero function stays nonzero on some interval of positive length. But $(V,\|\cdot\|_1)$ is **not complete**.

> [!proof] Why the integral-norm version is incomplete
> Let $h$ be the step function taking value $0$ on $[0,1/2)$ and $1$ on $(1/2,1]$ (its value at $1/2$ is irrelevant to integral-norm convergence). Choose continuous $f_n$ that equal $0$ up to $1/2-1/n$, rise linearly to $1$ across an interval of width $2/n$, and equal $1$ thereafter, for $n\geq3$.
>
> The functions differ from $h$ only on an interval of length $2/n$, and by at most $1$ there. Thus $\|f_n-h\|_1\leq2/n\to0$. Consequently $(f_n)$ is **Cauchy in $\|\cdot\|_1$**.
>
> If it converged in the normed space $V$ to some *continuous* $g$, then $\|g-h\|_1=0$ by the triangle inequality (computed in the larger integrable function space). This forces $g=h$ almost everywhere. Continuity then forces $g=0$ on the left open half and $g=1$ on the right open half, impossible at the midpoint. Therefore the Cauchy sequence has **no limit in $V$**.

**Is $(V,\|\cdot\|_\infty)$ a Hilbert space?** Not with that norm. Take continuous functions $f$ and $g$ each peaking at $1$ but with **disjoint supports**. Then $\|f\|_\infty=\|g\|_\infty=1$ and $\|f+g\|_\infty=\|f-g\|_\infty=1$. The parallelogram identity would require $1^2+1^2=2(1^2)+2(1^2)$, i.e. $2=4$. Impossible.

**Could we construct a Hilbert space from functions on the same interval?** Yes. Passing to square-integrable functions **modulo equality almost everywhere** gives $L^2([0,1])$ with its integral inner product. But $L^2$ is **not the same underlying set** as $C([0,1])$; it both adds equivalence classes and includes many functions with no continuous representative.

The point is not to rank one of these as "better." Each chooses an error notion and a theorem toolkit appropriate to its questions.

## 12. Structure-preserving maps: different notions of sameness

The correct maps depend on the structure. Two spaces are "the same" only **relative to a specified category of structure**.

![Two branches of structure-preserving maps are contrasted: maps preserving topological closeness (continuous maps and homeomorphisms), maps preserving exact distance (isometries), and maps preserving vector operations (linear maps). The diagram distinguishes independent conditions.](./media/sp-morphism-map.svg)

*Figure: There is no universal kind of “structure-preserving function.” A homeomorphism preserves the topology, an isometry preserves distance, and a linear map preserves vector operations; additional conditions may be needed at intersections.*

| Kind of map | Must preserve | Concrete example or limitation |
| --- | --- | --- |
| Arbitrary function | Assigned elements | No structure beyond well-defined output |
| Monotone map | Partial order | $x\leq y\Rightarrow f(x)\leq f(y)$ |
| Continuous map | Open-set topology by inverse images | $x\mapsto x^2$ on $\mathbb R$ |
| Homeomorphism | Topology in **both** directions | $x\mapsto x^3$ on $\mathbb R$ |
| Isometry (metric embedding) | Exact distances $d(fx,fy)=d(x,y)$ | Translation $x\mapsto x+5$ on $\mathbb R$ |
| Linear map | Addition and scaling | $T(x,y)=(x+y,y)$ |
| Bounded linear map | Linearity **and** norm-continuity | Evaluation $f\mapsto f(0)$ on $C([0,1])$ in sup norm |
| Measurable map | Preimages of measurable sets | Every continuous map between Borel spaces is Borel-measurable |
| Measure-preserving map | Pullback measure condition | Rotation of the circle with normalized arc-length probability |

### What implies what?

> [!theorem] Isometries are continuous
> If $f$ satisfies $d_Y(fx,fy)=d_X(x,y)$, then $f$ is $1$-Lipschitz and therefore continuous. In fact, for every $\varepsilon>0$ choose $\delta=\varepsilon$; $d_X(x,y)<\delta$ implies $d_Y(fx,fy)<\varepsilon$.

**Converse?** No. The homeomorphism $f(x)=2x$ on $\mathbb R$ is continuous with continuous inverse, but doubles Euclidean distances.

A continuous bijection is **not** necessarily a homeomorphism. The quotient-circle construction in [Topology](./general-topology-constructions) explains why the compact-source/Hausdorff-target theorem supplies an additional necessary proof step in that setting.

A linear map in infinite dimensions need **not** be continuous (see differentiation on the polynomial space above). Between finite-dimensional normed spaces it always is. A continuous map need not be linear: $f(x)=x^2$ is continuous but not additive.

**Never write "isomorphic" without specifying what is preserved.** Two sets may be bijective, two topological spaces homeomorphic, two metric spaces isometric, or two vector spaces linearly isomorphic, and these are different claims.

## 13. Categories: the structure of mathematical structures

The previous sections studied **structure inside an object**: openness, a norm, an order, a measure. Category theory asks a second question: **Which structured objects may be related by which maps—and what patterns persist when maps are composed?**

A category is **not an extra rung above Hilbert or Riemannian spaces**. It is a different level of description. Some categories have mathematical spaces as objects; other categories have objects that need not be sets at all.

> [!definition] A category
> A category $\mathcal C$ has a collection of **objects**, a collection of morphisms $\operatorname{Hom}_{\mathcal C}(A,B)$ for each pair of objects, associative composition $g\circ f$, and identity morphisms $1_A$ satisfying $1_B\circ f=f=f\circ1_A$. The choice of *which morphisms count* is part of the definition.
>
> In common concrete examples, objects are structured sets and morphisms are functions preserving particular structure. This is a useful starting intuition, **not** a restriction on the abstract definition of category.

### A category is determined by objects **and** arrows

| Category | Objects | Morphisms | An isomorphism means |
| --- | --- | --- | --- |
| $\mathbf{Set}$ | Sets | All functions | Bijection |
| $\mathbf{Top}$ | Topological spaces | Continuous maps | Homeomorphism |
| $\mathbf{Vect}_{\mathbb R}$ | Real vector spaces | Linear maps | Linear isomorphism |
| $\mathbf{Ban}$ | Banach spaces | Bounded linear maps | Invertible bounded linear map with bounded inverse |
| $\mathbf{Hilb}$ | Hilbert spaces | Bounded linear maps | Invertible bounded linear map with bounded inverse |

**Crucial distinction:** An isomorphism in this chosen $\mathbf{Hilb}$ is **not necessarily an isometry** or a unitary operator. For example, $T:\mathbb R\to\mathbb R$, $T(x)=2x$, is a bounded linear isomorphism with bounded inverse, but doubles lengths. A different category with the *same Hilbert-space objects* and **unitary morphisms** has a different notion of isomorphism. This is why diagrams must **name the arrows**, not just the objects.

![A chain of forgetful functors from Hilbert spaces with bounded linear maps to Banach spaces, then topological spaces, then sets, plus a separate functor from real vector spaces to sets, showing a bounded linear operator viewed progressively as a continuous map and ordinary function.](./media/sp-categorical-forgetful.svg)

*Figure: These are **functors between categories**, not inclusion arrows within one category. Each functor maps objects **and** morphisms. The chosen bounded-linear-map categories let the displayed $\mathbf{Hilb}\to\mathbf{Ban}\to\mathbf{Top}\to\mathbf{Set}$ sequence retain valid morphisms.*

### Functors: systematically forget information

> [!definition] Functor
> A functor $F:\mathcal C\to\mathcal D$ assigns objects to objects and morphisms to morphisms, preserving identities and composition:
> $
> F(1_A)=1_{F(A)},\qquad F(g\circ f)=F(g)\circ F(f).
> $

The functor $U:\mathbf{Vect}_{\mathbb R}\to\mathbf{Set}$ retains the **underlying set** of each vector space and treats every linear map as its underlying function. It forgets addition and scalar multiplication. The functor $\mathbf{Ban}\to\mathbf{Top}$ retains the norm-induced topology and regards a bounded linear map as continuous. The functor $\mathbf{Hilb}\to\mathbf{Ban}$ retains the Hilbert norm and forgets which inner product produced it.

> [!proof] Why forgetting the vector operations is a functor
> The identity linear map $1_V$ is the identity function on the underlying set, so $U(1_V)=1_{U(V)}$. If $T:V\to W$ and $S:W\to Z$ are linear, the underlying function of $S\circ T$ is literally the composite of the underlying functions $U(S)\circ U(T)$. Both functor equations follow.

> [!distinction] Forgetting structure is not declaring objects identical
> Two different structures can sit on the same underlying set. Forgetful functors generally lose information and need not be invertible or give equivalences of categories. Even the word **subcategory** must be used carefully: preserving fewer operations on objects is not the same as retaining the same allowable morphisms.

### Free constructions: add structure without arbitrary choices

Going from a vector space to its underlying set is easy: **forget** the operations. Going from a set $S$ to *the* vector space containing $S$ appears impossible, because many different vector-space structures could be added. Category theory identifies a canonical answer to a **specific universal mapping question**.

> [!definition] Free real vector space on a set
> $F(S)$ consists of **formal finite linear combinations** $\sum_{s\in S}a_s e_s$, where all but finitely many real coefficients $a_s$ are zero. Equivalently it is the vector space of finitely supported functions $S\to\mathbb R$.
>
> Each $s\in S$ corresponds to a basis vector $e_s$. The generator function $\eta_S:S\to U(F(S))$ sends $s$ to $e_s$. Here $U$ is the underlying-set functor.

![A set S with two elements a and b maps to the underlying set of a vector space V. Below it the free vector space F(S) of finite formal combinations of e_a and e_b maps by a unique linear extension to V. The diagram includes a worked evaluation of three e_a plus four e_b with generator images two and negative one.](./media/sp-free-vector-universal.svg)

*Figure: The function $g:S\to U(V)$ determines **exactly one linear map** $\widehat g:F(S)\to V$ satisfying $\widehat g(e_s)=g(s)$. The diagram distinguishes the set-level generator map from the vector-level linear extension.*

> [!theorem] Universal property of the free vector space
> Given **any** real vector space $V$ and function $g:S\to U(V)$, there is a **unique** real-linear map $\widehat g:F(S)\to V$ for which $\widehat g\circ\eta_S=g$ (interpreting the composite as a function to the underlying set $U(V)$).
>
> Equivalently, $\operatorname{Hom}_{\mathbf{Vect}_{\mathbb R}}(F(S),V)\cong\operatorname{Hom}_{\mathbf{Set}}(S,U(V))$, naturally in both $S$ and $V$.

> [!proof] Build the extension and show that no other choice is possible
> Define
> $
> \widehat g\!\left(\sum_{s\in S}a_s e_s\right)
> :=\sum_{s\in S}a_s g(s).
> $
> The sums are **finite**, so the right side always exists in $V$. Every element of $F(S)$ has unique coefficients relative to its formal basis, so the formula is well-defined. Distributivity makes it linear. On one basis vector $e_s$, the formula gives exactly $g(s)$.
>
> Conversely, any linear map $h:F(S)\to V$ satisfying $h(e_s)=g(s)$ must take a finite sum to $\sum_s a_s h(e_s)=\sum_s a_s g(s)$, by linearity. Therefore $h=\widehat g$ and the extension is unique. $\square$

**Numerical example.** Take $S=\{a,b\}$, $V=\mathbb R$, with $g(a)=2$ and $g(b)=-1$. Then

$
\widehat g(3e_a+4e_b)=3g(a)+4g(b)=6-4=2.
$

That is not simply a clever representation: the universal property specifies how **every** assignment of values to the generators extends, with **no extra equations or accidental identifications**. It is the vector-space counterpart of the free-monoid construction in [Adjunctions and Monads](./category-adjunctions-monads).

### Adjunctions: how free and forgetful fit together

The natural correspondence above is written

$
F\dashv U,\qquad
F:\mathbf{Set}\to\mathbf{Vect}_{\mathbb R},
\quad U:\mathbf{Vect}_{\mathbb R}\to\mathbf{Set}.
$

Read $F\dashv U$ as “$F$ is **left adjoint** to $U$.” A left adjoint is **not** an inverse. It adds freely generated structure, whereas a forgetful functor discards structure. The naturality requirement says the hom-set correspondence respects functions between generating sets and linear maps between destination vector spaces.

> [!example] A concrete naturality check
> Let $h:S\to T$ be a function. It induces a linear map $F(h):F(S)\to F(T)$ by the rule $F(h)(e_s)=e_{h(s)}$. If two elements of $S$ map to the same element of $T$, the coefficients of those basis vectors simply **add** under $F(h)$.
>
> For any linear $\ell:F(T)\to V$, the two routes from a generator $s\in S$ give the same answer:
> $
> (\ell\circ F(h))(e_s)=\ell(e_{h(s)}).
> $
> This is why the extension is **natural**, not merely a bijection invented separately for each pair $(S,V)$.

**From here:** [Category Theory Foundations](./category-theory-foundations) proves the categorical axioms, [Functors and Naturality](./category-functors-naturality) develops maps between categories, [Limits and Colimits](./category-limits-colimits) explains universal products and quotients, and [Adjunctions and Monads](./category-adjunctions-monads) develops the general free–forgetful pattern.

## 14. Four objects, several possible structures

A single object should be examined through **multiple structural lenses** rather than assigned one permanent rank in a hierarchy. These four profiles deliberately name the structure and the relevant maps instead of saying merely “this object is a space.”

| Underlying object | Structures available | What becomes true | Important distinction |
| --- | --- | --- | --- |
| $\mathbb R$ | Total order, field, usual topology, Euclidean metric, one-dimensional real vector space, Lebesgue measure | Metric complete; Banach/Hilbert with usual inner product; locally Euclidean smooth manifold | The **same set** with the arctangent metric has the usual topology but is **not** complete in that metric |
| $C([0,1],\mathbb R)$ | Pointwise vector operations, sup norm, induced topology; separately an integral norm | **Banach** under sup norm, with bounded evaluation maps | Under integral norm, it is **incomplete**; with sup norm, its norm does **not** come from an inner product |
| $\ell^2$ | Sequence vector operations, square-summable inner product, induced norm and topology | Infinite-dimensional **Hilbert** space, thus Banach; unit vectors converge weakly to zero | Its closed unit ball is **not norm compact**, even though it is closed and bounded |
| $S^1$ | Subspace topology from $\mathbb R^2$, circle metric, smooth one-manifold, standard Riemannian metric, circle-group multiplication | Compact and connected; smooth **Lie group**; Riemannian arc length | Topologically a circle, but not homeomorphic to the real line; no preferred global single Euclidean chart |

### The real line is not just “a complete metric space”

When you see $\mathbb R$, **name which structure matters**. As an ordered field it supports inequalities and multiplication. As a metric space with $|x-y|$ it supports Cauchy sequences and completeness. As a probability sample space it needs **a sigma-algebra and a particular probability measure**, not just the fact that it is a set of real numbers. As an object of $\mathbf{Top}$, its morphisms are continuous functions, most of which are not linear. As an object of $\mathbf{Vect}_{\mathbb R}$, the morphisms $\mathbb R\to\mathbb R$ are exactly functions $x\mapsto cx$.

### Continuous function spaces and the choice of morphisms

The same $C([0,1])$ supports many maps. Evaluation at $0$, $E(f)=f(0)$, is **linear and bounded in sup norm**:

$
|E(f)|=|f(0)|\leq\|f\|_\infty.
$

In the category of normed spaces with bounded linear maps it is a morphism. With the integral norm $\|f\|_1$, it is still algebraically **linear** but is no longer **bounded**, as the spike example above shows. Changing the **norm** changes which arrows belong to the relevant bounded-operator category, not merely which sets are considered open.

### Same set, different categories

For the unit circle, any homeomorphism $S^1\to S^1$ is an isomorphism in $\mathbf{Top}$. An arbitrary homeomorphism need not preserve the circle-group multiplication, nor must it preserve the Riemannian distance. In a category of topological groups its inverse must also be a group homomorphism; in a metric category with isometries as arrows it must preserve lengths exactly.

The four examples show that asking “What sort of space is it?” is only the first half of the question. The second is **“Which maps, invariants, and theorems matter for the problem?”**

## 15. A working catalog of spaces and their theorems

The matrix below is a compact reference. “Learn here” points to **developed** treatments; an atlas-only entry signals that the full subject needs its own chapter.

| Space or property | Additional structure or requirement | Key payoff | Learn here |
| --- | --- | --- | --- |
| Set | Elements and membership | Functions, subsets, relations | [Set Theory](./set-theory) |
| Equivalence/quotient | Reflexive, symmetric, transitive relation | Classes and well-defined factorization | [Equivalence Relations](./equivalence-relations) |
| Poset / lattice | Order; pairwise meets and joins | Bounds and order-preserving maps | [Order Theory](./order-theory) |
| Topological space | Open-set axioms | Continuity, compactness, connectedness | [Topology](./general-topology-foundations) |
| Metric space | Numerical distance satisfying four axioms | Cauchy sequences, Lipschitz bounds | [Real Analysis](./real-analysis) |
| Complete metric space | Every metric Cauchy sequence converges | Completeness tools | [Real Analysis](./real-analysis) |
| Vector space | Addition, scalar multiplication | Linear combinations and maps | [Linear Algebra](./linear-algebra-foundations) |
| Normed space | Compatible norm | Quantitative convergence, bounded maps | [Functional Analysis](./functional-analysis) |
| Banach space | Norm completeness | Complete function-space setting | [Functional Analysis](./functional-analysis) |
| Inner-product space | Positive inner product | Orthogonality and angles | [Functional Analysis](./functional-analysis) |
| Hilbert space | Complete inner-product space | Projection and representation theorems | [Functional Analysis](./functional-analysis) |
| Topological vector space | Continuity of vector operations | Convergence without necessarily a norm | **Atlas introduction** |
| Measurable space | Sigma-algebra | Measurable sets and functions | [Measure Theory](./measure-theory) |
| Measure space | Countably additive size of measurable sets | Integration, almost-everywhere claims | [Measure Theory](./measure-theory) |
| Probability space | Measure with total mass one | Random variables and expectations | [Probability](./probability) |
| Topological manifold | Hausdorff, second-countable, locally Euclidean | Local coordinates | **Atlas introduction** |
| Smooth manifold | Compatible smooth charts | Differentiation on spaces | **Atlas introduction** |
| Riemannian manifold | Smooth inner product on tangent spaces | Angles, geodesic lengths | **Atlas introduction** |
| Algebraic variety | Polynomial constraints, algebraic topology | Geometry of solution sets | [Algebraic Geometry](./algebraic-geometry) |
| Category of spaces | Objects **and** chosen morphisms | Functors, universal properties and adjunctions | [Category Theory](./category-theory-foundations) |

## 16. Choose the branch from the question, not from an imaginary rank

- **Can this limit escape?** Ask for a topology, metric, and a **specific completeness or compactness hypothesis**. [Topology](./path-to-topology) and [Analysis](./path-through-analysis) give different entry routes.
- **Can we add or differentiate these functions?** Ask for a vector space and an appropriate compatible norm, topology, or smooth structure. [Functional Analysis](./functional-analysis) describes many infinite-dimensional examples.
- **Can we integrate or assign probabilities?** Ask which sets are measurable, what measure is present, and which convergence theorem licenses an exchange of limits. Read [Measure Theory](./measure-theory).
- **Can we compare elements or identify duplicates?** Ask for an order or an equivalence relation. Read [Order Theory](./order-theory) and [Equivalence Relations](./equivalence-relations).
- **Does the space curve or have local coordinates?** Ask whether it is a topological, smooth, or Riemannian manifold. Use [Topology](./general-topology-foundations) and [Multivariable Calculus](./multivariable-calculus) as foundations.
- **Does a statistical model have degenerate local directions?** Ask about the parameter-to-distribution map, Fisher information and the vanishing order of KL divergence. The [Information Geometry](./information-geometry) chapter distinguishes these.

## 17. Self-check: have you learned the relationships?

Try to answer *before* expanding the linked definitions:

1. **Could a space be topological but not metrizable?** Yes: the Sierpiński space, because metric spaces are Hausdorff.
2. **Could two metrics give the same topology but different completeness behavior?** Yes: $|x-y|$ and $|\arctan x-\arctan y|$ on $\mathbb R$.
3. **Could a space be Banach but not Hilbert with its specified norm?** Yes: $(\mathbb R^2,\|\cdot\|_1)$ fails the parallelogram identity.
4. **Could a vector space have a useful topology not arising from a norm?** Yes: $\mathbb R^{\mathbb N}$ with the product topology, as proved above.
5. **Does a probability space come equipped with a distance?** No. A probability measure assigns sizes to **events**, not automatically distances between outcomes.
6. **Does smoothness of a manifold mean a metric has been selected?** No. Riemannian geometry adds that further inner-product structure.
7. **Does a continuous bijection preserve every structural distinction?** No. It need not be a homeomorphism, isometry or linear map.
8. **Does an infinite-dimensional closed bounded set have to be compact?** No. The closed unit ball of $\ell^2$ is a counterexample; see the [metric compactness proof](./general-topology-compactness).
9. **Can identical underlying points produce compact and noncompact spaces?** Yes: $\mathbb C$ with Zariski versus Euclidean topology.
10. **What changed when we replaced continuous functions by $L^2$ elements?** We enlarged the class of integrable representatives and **identified functions equal almost everywhere**; the underlying elements are equivalence classes.
11. **Is an invertible bounded linear map of Hilbert spaces automatically an isometry?** No: scalar multiplication by $2$ on $\mathbb R$ is an isomorphism in the category with bounded linear maps, but not an isometry.
12. **Why does a function $S\to U(V)$ extend uniquely to a linear map $F(S)\to V$?** The image of each formal basis vector is fixed, and linearity determines every finite linear combination.

## 18. Where the atlas stops

This atlas makes many fundamental relationships explicit, including a categorical perspective on **spaces and their permitted maps**, and proves selected implications and counterexamples. It does **not** claim to be a complete graduate treatment of all mathematical space theories. Important further families include uniform spaces, locally convex spaces and Fréchet spaces, Sobolev spaces, distributions, symplectic manifolds, fiber bundles, sheaves, schemes and derived or higher-categorical structures.

That limitation is intentional: the objective is a **correct reusable framework**, one in which every new kind of space can be understood by the questions “What objects? What structure? What axioms? What maps? What properties? Which theorems?” Follow the linked full chapters whenever a named theorem needs a proof beyond what appears here.

**The central insight:** Mathematical spaces are not a succession of more sophisticated sets. They are **different, often compatible ways of organizing objects so that precisely specified reasoning becomes possible**.
