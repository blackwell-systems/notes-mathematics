---
title: "Measure Theory"
prerequisites: ["real-analysis", "set-theory"]
enables: ["probability", "singular-learning-theory"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Real Analysis](./real-analysis) · [Set Theory](./set-theory)
> **Leads to:** [Probability](./probability) · [Singular Learning Theory](./singular-learning-theory)


Measure theory rebuilds integration from the ground up. In [real analysis](./real-analysis), you saw that the Riemann integral works well for continuous functions but breaks down for functions with too many discontinuities. The Dirichlet function (which is 1 on the rationals and 0 on the irrationals) is not Riemann integrable, even though its "values are mostly 0." Measure theory provides the Lebesgue integral, which handles such functions effortlessly, and in doing so gives us the convergence theorems that power all of modern analysis, probability, and learning theory.

## Why Measure Theory?

### The Riemann Integral Is Not Enough

Recall from [real analysis](./real-analysis) how the Riemann integral works: you partition the domain (the x-axis) into small subintervals, approximate the function's height on each subinterval, and take a limit as the partition gets finer. This approach has a fundamental limitation. It requires the function to be "well-behaved" on small intervals, and the Dirichlet function is badly behaved on every interval, no matter how small (every interval contains both rationals and irrationals).

But the Dirichlet function *should* have integral zero over $[0,1]$. It equals 1 only on the rationals, and the rationals are a "negligible" subset of $[0,1]$ in any reasonable sense. The problem is not with the function; the problem is with the Riemann approach to integration.

### The Lebesgue Idea: Partition the Range, Not the Domain

The key insight behind the Lebesgue integral is simple and beautiful. Instead of asking "what is $f$ doing on each small subinterval?" (Riemann), ask "how much of the domain does $f$ spend at each height?" (Lebesgue).

More precisely: instead of chopping the x-axis into intervals, chop the y-axis into levels. For each level $a$, look at the set $\{x : f(x) \approx a\}$ and measure how "large" that set is. Multiply each height by the size of the corresponding set, and sum.

For the Dirichlet function, this approach works immediately. The function takes value 1 on the rationals (a set of "size zero") and value 0 on the irrationals (a set of "size one"). So the integral is $1 \cdot 0 + 0 \cdot 1 = 0$.

But to make "size of a set" rigorous, we need to answer two questions: *which* sets can we assign a size to, and *how* do we assign sizes consistently? This is exactly what sigma-algebras and measures do.

Toggle between the two viewpoints below: Riemann chops the *domain* into vertical strips, while Lebesgue chops the *range* into horizontal layers, summing each height times the measure of the set that reaches it. For a continuous function both sums converge to the same integral; the preset for the Dirichlet function shows why only the Lebesgue view gives the "right" answer of $0$.

<iframe src="/static/interactive/mt-riemann-vs-lebesgue.html" width="100%" height="660" style="border:none;"></iframe>

### Why This Matters Beyond Integration

Measure theory is the foundation of modern probability. When we write $P(A)$ for the probability of an event $A$, what is $P$? It is a measure. When we write $E[X]$ for the expectation of a random variable, what is this? It is a Lebesgue integral. Without measure theory, probability theory for continuous random variables rests on shaky foundations.

For singular learning theory (SLT), measure theory is indispensable. The central quantity in SLT is the free energy:

$$
F_n = -\log \int \exp(-nL_n(w)) \varphi(w) \, dw
$$

This integral is over the parameter space, with respect to Lebesgue measure. Near a singularity, the integrand concentrates in complicated ways that depend on the geometry of the singularity (encoded by the real log canonical threshold, or RLCT). Analyzing this requires the full power of Lebesgue integration and its convergence theorems.

## Sigma-Algebras

### Which Sets Can We Measure?

Before assigning sizes to sets, we need to decide which sets are eligible for measurement. You might think: just measure all subsets. But Vitali's construction shows this is impossible. Using the Axiom of Choice, one can build a subset of $\mathbb{R}$ (a Vitali set) that cannot be assigned a length consistent with translation invariance and countable additivity: if you try to assign a consistent "length" to every subset of $\mathbb{R}$, you will run into contradictions. Some subsets are so pathological that no consistent size assignment exists. (A related phenomenon in $\mathbb{R}^3$ is the Banach-Tarski paradox, where a solid ball is decomposed into finitely many non-measurable pieces and reassembled into two copies of itself.)

The solution is to restrict attention to a well-behaved collection of sets. This collection is called a sigma-algebra.

### Definition

**Definition.** A **sigma-algebra** (or $\sigma$-algebra) on a set $\Omega$ is a collection $\mathcal{F}$ of subsets of $\Omega$ satisfying:

1. $\Omega \in \mathcal{F}$ (the whole set is measurable).
2. If $A \in \mathcal{F}$, then $A^c \in \mathcal{F}$ (closed under complements).
3. If $A_1, A_2, A_3, \ldots \in \mathcal{F}$, then $\bigcup_{n=1}^{\infty} A_n \in \mathcal{F}$ (closed under countable unions).

The pair $(\Omega, \mathcal{F})$ is called a **measurable space**.

These axioms ensure that the collection of "measurable" sets is closed under the operations we care about. If you can measure $A$ and $B$, you should be able to measure "A or B" (union), "not A" (complement), and "A and B" (intersection).

**Closure under countable intersection** follows automatically from the axioms, by De Morgan's law:

$$
\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^c \right)^c
$$

Since each $A_n^c \in \mathcal{F}$ (axiom 2), the union is in $\mathcal{F}$ (axiom 3), and taking the complement again keeps us in $\mathcal{F}$ (axiom 2).

**Note:** Axiom 1 together with axiom 2 implies $\emptyset \in \mathcal{F}$, since $\emptyset = \Omega^c$.

### Examples

**The trivial sigma-algebra:** $\mathcal{F} = \{\emptyset, \Omega\}$. This is the smallest possible sigma-algebra. It contains no information: you can only distinguish "nothing happened" from "something happened."

**The power set:** $\mathcal{F} = \mathcal{P}(\Omega)$, the collection of all subsets. This is the largest possible sigma-algebra. When $\Omega$ is finite or countable, we usually use this.

**A coin flip:** Let $\Omega = \{H, T\}$. The sigma-algebra $\mathcal{F} = \{\emptyset, \{H\}, \{T\}, \{H, T\}\}$ is the power set. Every subset is measurable because $\Omega$ is finite.

### The Borel Sigma-Algebra

For $\Omega = \mathbb{R}$, the power set is too large (it contains unmeasurable sets). Instead, we use the **Borel sigma-algebra** $\mathcal{B}(\mathbb{R})$, defined as the smallest sigma-algebra containing all open intervals $(a, b)$.

"Smallest" means: take every sigma-algebra that contains all open intervals, and intersect them. The result is still a sigma-algebra (you can verify the axioms), and it is contained in every sigma-algebra that contains open intervals.

The Borel sigma-algebra is enormous. It contains:
- All open sets (unions of open intervals)
- All closed sets (complements of open sets)
- All countable sets (countable unions of single points, which are closed)
- All intervals of every type: open, closed, half-open
- Many more exotic sets built from countable operations on the above

In practice, you will rarely encounter a set that is not Borel measurable. The non-measurable sets require the Axiom of Choice to construct and do not arise in applications.

The Borel sigma-algebra is what we use for probability on $\mathbb{R}$. When we say "what is the probability that $X$ falls in the interval $[2, 5]$?" we are asking for the measure of a Borel set.

## Measures

### Assigning Sizes to Sets

Now that we know *which* sets we can measure (those in a sigma-algebra), we need a function that assigns a "size" to each one.

**Definition.** A **measure** on a measurable space $(\Omega, \mathcal{F})$ is a function $\mu : \mathcal{F} \to [0, \infty]$ satisfying:

1. $\mu(\emptyset) = 0$ (the empty set has size zero).
2. **Countable additivity:** If $A_1, A_2, A_3, \ldots$ are pairwise disjoint sets in $\mathcal{F}$, then

$$
\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \mu(A_n).
$$

The triple $(\Omega, \mathcal{F}, \mu)$ is called a **measure space**.

Countable additivity is the crucial property. It says that the size of a disjoint union is the sum of the sizes, even for infinitely many pieces. This is much stronger than finite additivity ($\mu(A \cup B) = \mu(A) + \mu(B)$ for disjoint $A, B$), and the distinction matters.

### Basic Properties

From the definition, several useful properties follow:

**Monotonicity:** If $A \subseteq B$, then $\mu(A) \leq \mu(B)$. (Write $B = A \cup (B \setminus A)$, which is a disjoint union, so $\mu(B) = \mu(A) + \mu(B \setminus A) \geq \mu(A)$.)

**Subadditivity:** For any countable collection (not necessarily disjoint):

$$
\mu\left(\bigcup_{n=1}^{\infty} A_n\right) \leq \sum_{n=1}^{\infty} \mu(A_n).
$$

**Continuity from below:** If $A_1 \subseteq A_2 \subseteq \cdots$ and $A = \bigcup A_n$, then $\mu(A_n) \to \mu(A)$.

**Continuity from above:** If $A_1 \supseteq A_2 \supseteq \cdots$, $A = \bigcap A_n$, and $\mu(A_1) < \infty$, then $\mu(A_n) \to \mu(A)$.

### Key Examples

**Lebesgue measure** on $\mathbb{R}$ (with the Borel sigma-algebra): this is the formalization of "length." It satisfies:

$$
\mu([a, b]) = b - a
$$

for every interval, and extends to more complicated Borel sets. It is the unique measure on $\mathcal{B}(\mathbb{R})$ that assigns intervals their natural length and is translation-invariant ($\mu(A + x) = \mu(A)$ for all $x$).

**Probability measure:** A measure $P$ on $(\Omega, \mathcal{F})$ with $P(\Omega) = 1$. All of probability theory is measure theory with total mass 1. The axioms of probability (Kolmogorov's axioms) are exactly the axioms of a measure with $P(\Omega) = 1$.

**Counting measure:** On any set $\Omega$, define $\mu(A) = |A|$ (the number of elements in $A$, with $\mu(A) = \infty$ if $A$ is infinite). This is the measure behind discrete probability: if $\Omega$ is finite and you use counting measure normalized by $|\Omega|$, you get the uniform distribution. More generally, any discrete distribution is a weighted sum of Dirac measures $\sum_k p_k \delta_{x_k}$; the uniform case is the special case of equal weights (normalized counting measure).

**Dirac measure:** Fix a point $x_0 \in \Omega$. Define $\delta_{x_0}(A) = 1$ if $x_0 \in A$ and $\delta_{x_0}(A) = 0$ if $x_0 \notin A$. This is "all the mass concentrated at $x_0$." It appears in ML when you have a point estimate rather than a distribution.

### Null Sets and "Almost Everywhere"

**Definition.** A set $N \in \mathcal{F}$ is a **null set** (or has **measure zero**) if $\mu(N) = 0$.

Null sets are negligible for the purposes of integration. A single point has Lebesgue measure zero. A finite set has Lebesgue measure zero. The set of all rational numbers in $[0,1]$ has Lebesgue measure zero, despite being dense (there is a rational in every interval, no matter how small).

**Why $\mu(\mathbb{Q} \cap [0,1]) = 0$:** List the rationals in $[0,1]$ as $q_1, q_2, q_3, \ldots$ (they are countable). Cover each $q_k$ with an interval of length $\epsilon / 2^k$. The total length of the cover is:

$$
\sum_{k=1}^{\infty} \frac{\epsilon}{2^k} = \epsilon
$$

Since $\epsilon$ is arbitrary, the rationals can be covered by intervals of arbitrarily small total length. Therefore $\mu(\mathbb{Q} \cap [0,1]) = 0$.

**Definition.** A property holds **almost everywhere** (abbreviated **a.e.**) if it holds except possibly on a null set.

For example, the Dirichlet function equals 0 almost everywhere (it fails to be 0 only on $\mathbb{Q}$, which has measure zero). Two functions that agree almost everywhere are considered "the same" for the purposes of integration. This is a fundamental principle: measure theory does not care about what happens on sets of measure zero.

## Measurable Functions

### Functions Compatible with the Sigma-Algebra

We have a measure space $(\Omega, \mathcal{F}, \mu)$ and we want to integrate functions defined on $\Omega$. But not every function is compatible with our sigma-algebra. We need the function to interact well with the sets we can measure.

**Definition.** A function $f : \Omega \to \mathbb{R}$ is **$\mathcal{F}$-measurable** (or simply **measurable**) if for every $a \in \mathbb{R}$:

$$
\{x \in \Omega : f(x) > a\} \in \mathcal{F}.
$$

**Intuition:** The set where $f$ exceeds any threshold is a measurable set. This means we can ask "how much of the domain does $f$ spend above level $a$?" and get a meaningful answer, because the answer involves the measure of a measurable set.

Equivalently, any of the following conditions define measurability:
- $\{f \geq a\} \in \mathcal{F}$ for all $a$
- $\{f < a\} \in \mathcal{F}$ for all $a$
- $\{f \leq a\} \in \mathcal{F}$ for all $a$
- $f^{-1}(B) \in \mathcal{F}$ for every Borel set $B \subseteq \mathbb{R}$

The last formulation is the most general: the preimage of every "nice" set in the range is a measurable set in the domain.

### Which Functions Are Measurable?

Almost every function you encounter in practice is measurable:

- **Continuous functions** are always Borel measurable. If $f$ is continuous, then $\{f > a\} = f^{-1}((a, \infty))$ is open (the preimage of an open set under a continuous function is open), and open sets are Borel.
- **Monotone functions** on $\mathbb{R}$ are Borel measurable.
- **Sums, products, and compositions** of measurable functions are measurable.
- **Limits of measurable functions** are measurable. If $f_n$ is measurable for each $n$ and $f_n(x) \to f(x)$ for all $x$, then $f$ is measurable. This is a huge advantage over continuity, which is not preserved under pointwise limits (as we saw in real analysis).

The last point is critical. Measurability is *stable under limits*, which makes it the right notion for analysis.

### Random Variables Are Measurable Functions

In probability, a **random variable** is nothing more than a measurable function. If $(\Omega, \mathcal{F}, P)$ is a probability space, a random variable $X : \Omega \to \mathbb{R}$ is a measurable function from $\Omega$ to $\mathbb{R}$.

The notation $P(X \leq a)$ is shorthand for:

$$
P(X \leq a) = P(\{\omega \in \Omega : X(\omega) \leq a\})
$$

The set $\{\omega : X(\omega) \leq a\}$ must be in $\mathcal{F}$ for this probability to be defined, and this is exactly what measurability guarantees.

The cumulative distribution function $F(a) = P(X \leq a)$ is well-defined precisely because $X$ is measurable.

## The Lebesgue Integral

### Building the Integral in Three Steps

The Lebesgue integral is constructed in stages, starting with the simplest functions and building up.

**Step 1: Simple functions.** A **simple function** is a measurable function that takes only finitely many values. It can be written as:

$$
s(x) = \sum_{i=1}^{n} a_i \mathbf{1}_{A_i}(x)
$$

where $a_i \in \mathbb{R}$ and $A_1, \ldots, A_n$ are disjoint measurable sets covering $\Omega$, and $\mathbf{1}_{A_i}$ is the indicator function of $A_i$ (equals 1 on $A_i$, 0 elsewhere).

The integral of a non-negative simple function is defined in the obvious way:

$$
\int s \, d\mu = \sum_{i=1}^{n} a_i \, \mu(A_i)
$$

Each value is weighted by the measure of the set where the function takes that value. This is where the "partition the range" idea becomes concrete.

**Step 2: Non-negative measurable functions.** For a non-negative measurable function $f \geq 0$, define:

$$
\int f \, d\mu = \sup \left\{ \int s \, d\mu : 0 \leq s \leq f, \; s \text{ simple} \right\}
$$

Approximate $f$ from below by simple functions (which act as lower staircase approximations), and take the supremum of their integrals. A key theorem guarantees that there always exists an increasing sequence of simple functions $s_n \nearrow f$, so this supremum is the natural limit.

**Step 3: General measurable functions.** For a general measurable function $f$ (possibly negative), decompose it into positive and negative parts:

$$
f^+(x) = \max(f(x), 0), \qquad f^-(x) = \max(-f(x), 0)
$$

Both $f^+$ and $f^-$ are non-negative and measurable, and $f = f^+ - f^-$. Define:

$$
\int f \, d\mu = \int f^+ \, d\mu - \int f^- \, d\mu
$$

provided at least one of these integrals is finite (to avoid $\infty - \infty$). When both are finite, $f$ is called **integrable** (or $L^1$), meaning $\int |f| \, d\mu < \infty$.

### How Lebesgue Differs from Riemann

The Riemann integral partitions the domain into small intervals $[x_{i-1}, x_i]$ and sums $f(x_i^*)(x_i - x_{i-1})$: height times width. The Lebesgue integral partitions the range into small intervals $[y_{j-1}, y_j]$ and sums $y_j \cdot \mu(\{x : y_{j-1} < f(x) \leq y_j\})$: height times the measure of the set at that height.

The critical difference: Riemann needs the sets $[x_{i-1}, x_i]$ to be intervals (and the function to behave well on each interval), while Lebesgue can handle any measurable set, no matter how complicated.

**When they agree:** If $f$ is Riemann integrable on $[a, b]$ (for example, if $f$ is continuous, or has finitely many discontinuities), then $f$ is also Lebesgue integrable and the two integrals give the same value. In fact, a bounded function on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has Lebesgue measure zero. Lebesgue is strictly more general.

### The Dirichlet Function, Revisited

The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ is Lebesgue integrable on $[0,1]$:

$$
\int_0^1 \mathbf{1}_{\mathbb{Q}} \, d\mu = 1 \cdot \mu(\mathbb{Q} \cap [0,1]) + 0 \cdot \mu((\mathbb{R} \setminus \mathbb{Q}) \cap [0,1]) = 1 \cdot 0 + 0 \cdot 1 = 0
$$

This is the answer that the Riemann integral could not give. The function is a simple function (taking values 0 and 1), so the Lebesgue integral applies directly.

## Convergence Theorems

### The Power of Lebesgue Integration

The convergence theorems are the main reason measure theory exists. They tell you precisely when you can interchange a limit and an integral:

$$
\lim_{n \to \infty} \int f_n \, d\mu \stackrel{?}{=} \int \lim_{n \to \infty} f_n \, d\mu
$$

This interchange is not always valid (you saw counterexamples in real analysis). The Riemann theory requires *uniform* convergence to swap limits and integrals, which is a very strong condition. The Lebesgue theory provides much weaker, more practical conditions.

See exactly when the swap holds below. Slide $n$ and compare $\int f_n$ with $\int \lim f_n$: for the monotone and dominated presets they agree, but for the "escaping spike" $f_n = n\cdot\mathbf{1}_{[0,1/n]}$ the area stays $1$ while the pointwise limit is $0$, so $\int\lim f_n = 0 < 1 = \lim\int f_n$, the failure that Fatou's lemma bounds and that no integrable dominator can rescue.

<iframe src="/static/interactive/mt-convergence.html" width="100%" height="640" style="border:none;"></iframe>

### Monotone Convergence Theorem (MCT)

**Theorem.** Let $f_1, f_2, f_3, \ldots$ be non-negative measurable functions with $f_1 \leq f_2 \leq f_3 \leq \cdots$ (pointwise increasing). Let $f(x) = \lim_{n \to \infty} f_n(x)$. Then:

$$
\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu.
$$

No extra conditions are needed beyond monotonicity and non-negativity. The limit can be $+\infty$ on both sides.

**Why this is remarkable:** The pointwise limit of the $f_n$ might be a complicated function, but the MCT says its integral is the limit of the integrals. For Riemann integrals, even a monotone sequence of integrable functions can converge to a non-integrable function. MCT says this cannot happen in the Lebesgue setting (for non-negative functions).

### Fatou's Lemma

**Theorem.** Let $f_1, f_2, f_3, \ldots$ be non-negative measurable functions. Then:

$$
\int \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int f_n \, d\mu.
$$

This is a one-sided inequality: the integral of the limit is at most the limit of the integrals. Mass can "escape to infinity" (making the right side larger), but it cannot appear from nowhere. Fatou's lemma is often used as a stepping stone to prove more powerful results, and it requires no conditions beyond non-negativity.

### Dominated Convergence Theorem (DCT)

**Theorem.** Let $f_n$ be measurable functions with $f_n \to f$ pointwise. Suppose there exists an integrable function $g$ (a non-negative $g$ with $\int g \, d\mu < \infty$; equivalently $\int |g| \, d\mu < \infty$) such that $|f_n(x)| \leq g(x)$ for all $n$ and all $x$. Then $f$ is integrable and:

$$
\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu.
$$

**This is the most important theorem in measure theory for applications.** It says: if a sequence of functions converges pointwise and is uniformly bounded by an integrable function, then limits and integrals commute.

Compare the conditions:
- **Riemann theory:** Needs uniform convergence $f_n \to f$ to swap limit and integral.
- **Lebesgue theory (DCT):** Needs only pointwise convergence $f_n \to f$, plus a dominating function.

Pointwise convergence is far weaker than uniform convergence. Many natural sequences converge pointwise but not uniformly, so DCT applies in situations where the Riemann theory is helpless.

**Where DCT shows up in ML:** In machine learning, expectations are integrals: $E[f(X)] = \int f \, dP$. When you have a sequence of models (e.g., as sample size $n$ grows, or as a training parameter varies), you often need to interchange a limit with an expectation. DCT is the tool that justifies this. Virtually every convergence proof in statistical learning theory uses DCT or one of its relatives.

## $L^p$ Spaces

### Function Spaces with Finite Norms

In linear algebra, you measure vectors with norms like $\|v\|_2 = \sqrt{\sum v_i^2}$. The $L^p$ spaces are the function-space analogues: they consist of functions whose "$p$-th power is integrable."

**Definition.** For $1 \leq p < \infty$, the space $L^p(\mu)$ consists of all measurable functions $f$ with:

$$
\|f\|_p = \left( \int |f|^p \, d\mu \right)^{1/p} < \infty
$$

The function $\|\cdot\|_p$ is the **$L^p$ norm**.

**Technical point:** Two functions that agree almost everywhere have the same $L^p$ norm, so elements of $L^p$ are technically equivalence classes of functions (identifying functions that agree a.e.).

### Important Cases

**$L^1(\mu)$:** The integrable functions. $\|f\|_1 = \int |f| \, d\mu$. This is the natural space for the Lebesgue integral.

**$L^2(\mu)$:** The square-integrable functions. This is the most important $L^p$ space because it is a **Hilbert space**: it carries an inner product

$$
\langle f, g \rangle = \int f \cdot g \, d\mu
$$

that induces the norm $\|f\|_2 = \sqrt{\langle f, f \rangle}$. Completeness of $L^2$ (every Cauchy sequence converges) is a deep theorem. Hilbert space structure gives you orthogonal projections, Fourier series, and all the geometry of inner product spaces, but for functions instead of finite-dimensional vectors.

**$L^\infty(\mu)$:** The essentially bounded functions. $\|f\|_\infty = \inf\{M : |f(x)| \leq M \text{ a.e.}\}$. This is the supremum norm, but ignoring sets of measure zero.

### Key Inequalities

**Holder's inequality.** For $1 \leq p, q \leq \infty$ with $\frac{1}{p} + \frac{1}{q} = 1$ (using the convention $1/\infty = 0$, so the endpoint pair $(p, q) = (1, \infty)$ is included):

$$
\int |fg| \, d\mu \leq \|f\|_p \cdot \|g\|_q
$$

When $p = q = 2$, this is the Cauchy-Schwarz inequality for functions: $|\langle f, g \rangle| \leq \|f\|_2 \|g\|_2$.

**Minkowski's inequality.** For $1 \leq p \leq \infty$:

$$
\|f + g\|_p \leq \|f\|_p + \|g\|_p
$$

This is the triangle inequality for the $L^p$ norm. It confirms that $\|\cdot\|_p$ is genuinely a norm.

### Completeness

**Theorem (Riesz-Fischer).** For $1 \leq p \leq \infty$, the space $L^p(\mu)$ is complete: every Cauchy sequence in $L^p$ converges to an element of $L^p$.

This is the function-space analogue of the completeness of $\mathbb{R}$. Just as the real numbers have "no gaps" (every Cauchy sequence of reals converges), the $L^p$ spaces have "no gaps" in function space.

### Where $L^p$ Spaces Show Up

In ML, loss functions live in function spaces. The mean squared error between a prediction $\hat{f}$ and the true function $f$ is $\|f - \hat{f}\|_2^2$: the squared $L^2$ norm of the residual. Regularization in function spaces uses $L^p$ norms: $L^1$ regularization (lasso) promotes sparsity, $L^2$ regularization (ridge) promotes smoothness. The distinction between $L^1$ and $L^2$ geometry explains why lasso produces sparse solutions while ridge does not.

## Product Measures and Fubini's Theorem

### Measuring Multi-Dimensional Spaces

When you have two measure spaces $(X, \mathcal{A}, \mu)$ and $(Y, \mathcal{B}, \nu)$, you can form the **product space** $X \times Y$ with the product sigma-algebra $\mathcal{A} \otimes \mathcal{B}$ (the smallest sigma-algebra containing all "rectangles" $A \times B$ with $A \in \mathcal{A}$, $B \in \mathcal{B}$).

The **product measure** $\mu \times \nu$ is defined on rectangles by:

$$
(\mu \times \nu)(A \times B) = \mu(A) \cdot \nu(B)
$$

and extends uniquely to all of $\mathcal{A} \otimes \mathcal{B}$. Lebesgue measure on $\mathbb{R}^2$ is the product of Lebesgue measure on $\mathbb{R}$ with itself: the "area" of a rectangle is width times height.

### Fubini's Theorem

**Theorem (Fubini-Tonelli).** Let $f : X \times Y \to \mathbb{R}$ be measurable with respect to $\mathcal{A} \otimes \mathcal{B}$.

**(Tonelli)** If $f \geq 0$, then:

$$
\int_{X \times Y} f \, d(\mu \times \nu) = \int_X \left( \int_Y f(x, y) \, d\nu(y) \right) d\mu(x) = \int_Y \left( \int_X f(x, y) \, d\mu(x) \right) d\nu(y)
$$

**(Fubini)** If $\int |f| \, d(\mu \times \nu) < \infty$ (i.e., $f$ is integrable), then the same equalities hold.

In words: you can compute a double integral by iterating the single integrals in either order, provided the function is non-negative or integrable. The order of integration does not matter.

**Where this shows up:** Joint distributions in probability are product measures. If $X$ and $Y$ are independent random variables with densities $f_X$ and $f_Y$, the joint density is $f_{X,Y}(x,y) = f_X(x) f_Y(y)$, and Fubini's theorem justifies computing expectations by integrating over $x$ first or $y$ first. This flexibility is essential for computations with multivariate distributions.

## Measure-Theoretic Probability

### The Rigorous Foundation

All of probability theory rests on measure theory. Here is the dictionary:

| Probability | Measure Theory |
|---|---|
| Sample space $\Omega$ | Set $\Omega$ |
| Events $\mathcal{F}$ | Sigma-algebra $\mathcal{F}$ |
| Probability $P$ | Probability measure ($P(\Omega) = 1$) |
| Random variable $X$ | Measurable function $X : \Omega \to \mathbb{R}$ |
| Expectation $E[X]$ | Lebesgue integral $\int X \, dP$ |
| $P(X \leq a)$ | $P(\{\omega : X(\omega) \leq a\})$ |
| Independent events | $P(A \cap B) = P(A)P(B)$ |

A **probability space** is a measure space $(\Omega, \mathcal{F}, P)$ where $P(\Omega) = 1$. Everything in probability is a special case of measure theory.

### Expectation as an Integral

The expectation of a random variable $X$ is simply the Lebesgue integral with respect to $P$:

$$
E[X] = \int_\Omega X(\omega) \, dP(\omega)
$$

When $X$ has a density $f$ (with respect to Lebesgue measure), this becomes the familiar formula:

$$
E[X] = \int_{-\infty}^{\infty} x \, f(x) \, dx
$$

The measure-theoretic definition is more general: it works for discrete, continuous, and mixed random variables without any case-splitting.

### Conditional Expectation

In elementary probability, $E[X | Y = y]$ is a number that depends on $y$. Measure theory gives a much more powerful notion.

**Definition.** Given a sub-sigma-algebra $\mathcal{G} \subseteq \mathcal{F}$, the **conditional expectation** $E[X | \mathcal{G}]$ is a $\mathcal{G}$-measurable random variable satisfying:

$$
\int_G E[X | \mathcal{G}] \, dP = \int_G X \, dP \quad \text{for all } G \in \mathcal{G}
$$

This is a function, not a number. It represents the "best prediction of $X$ given the information in $\mathcal{G}$." Conditioning on a random variable $Y$ means conditioning on the sigma-algebra generated by $Y$ (the collection of all events that can be determined by knowing $Y$).

Conditional expectation is the foundation of martingale theory, which is central to stochastic processes, mathematical finance, and the analysis of sequential learning algorithms.

### Modes of Convergence

When a sequence of random variables $X_n$ "approaches" a limit $X$, there are several senses in which this can happen, each with different strength:

**Almost sure convergence:** $X_n \to X$ a.s. means $P(\{\omega : X_n(\omega) \to X(\omega)\}) = 1$. The sequence converges at "almost every" outcome.

**Convergence in probability:** $X_n \xrightarrow{P} X$ means $P(|X_n - X| > \epsilon) \to 0$ for every $\epsilon > 0$. The probability of a large deviation vanishes.

**Convergence in $L^p$:** $X_n \to X$ in $L^p$ means $E[|X_n - X|^p] \to 0$. The $p$-th moment of the difference vanishes.

**Convergence in distribution:** $X_n \xrightarrow{d} X$ means $P(X_n \leq a) \to P(X \leq a)$ at every continuity point $a$ of the limit CDF. This is the weakest mode.

The implications among these modes are not a single chain. Both almost sure convergence and $L^p$ convergence independently imply convergence in probability, which in turn implies convergence in distribution:

$$
\text{a.s.} \implies \text{in probability} \implies \text{in distribution}
$$

$$
L^p \implies \text{in probability} \implies \text{in distribution}
$$

Almost sure and $L^p$ convergence are incomparable: neither implies the other in general. ($L^p$ does not imply a.s.: a "sliding block" sequence, where the indicator of a shrinking interval marches across $[0,1]$, converges to $0$ in $L^p$ but at no single point. Conversely, a.s. convergence does not imply $L^p$, because the mass may escape to infinity.)

The law of large numbers gives convergence in probability (weak law) or almost surely (strong law). The central limit theorem gives convergence in distribution.

## Connection to Singular Learning Theory

### Why SLT Needs Measure Theory

Singular learning theory studies the Bayesian posterior distribution in statistical models where the parameter-to-distribution map is not one-to-one (i.e., the model has singularities). The entire framework is built on measure theory.

**The posterior is a measure.** Given data $D_n = (X_1, \ldots, X_n)$, the Bayesian posterior is a probability measure on the parameter space $W$:

$$
p(w | D_n) \propto \exp(-nL_n(w)) \varphi(w)
$$

where $L_n(w)$ is the empirical loss and $\varphi(w)$ is the prior density. This posterior is defined with respect to Lebesgue measure on $W$.

**The free energy is a Lebesgue integral.** The partition function (normalizing constant) of the posterior is:

$$
Z_n = \int_W \exp(-nL_n(w)) \varphi(w) \, dw
$$

The free energy $F_n = -\log Z_n$ governs model selection, generalization, and the Bayesian Information Criterion (and its singular generalization, the WBIC).

**Near singularities, this integral is non-trivial.** In regular (non-singular) models, the integrand is approximately Gaussian near the true parameter, and the integral can be evaluated by Laplace's method. At a singularity, the Fisher information matrix is degenerate (not full rank), and the Gaussian approximation fails. The integral concentrates on a set of complex geometry, and its asymptotic behavior as $n \to \infty$ is governed by the real log canonical threshold (RLCT), a quantity from algebraic geometry.

**The convergence theorems are essential.** To take $n \to \infty$ in the free energy and derive the asymptotic formula:

$$
F_n = nL_n(w_0) + \lambda \log n - (m-1) \log \log n + O_P(1)
$$

(where $\lambda$ is the RLCT and $m$ is the multiplicity), one must repeatedly exchange limits and integrals. The Dominated Convergence Theorem and related tools from measure theory are what make these exchanges rigorous.

Without measure theory, the fundamental quantities of SLT (the free energy, the RLCT, the stochastic complexity) cannot even be properly defined, let alone analyzed.

These quantities are assembled into the full theory on the [Singular Learning Theory](./singular-learning-theory) capstone page.
