---
title: "Real Analysis"
---

Real analysis is what happens when you ask calculus to justify itself. In calculus, you learned to compute derivatives, evaluate integrals, and work with infinite series. You developed powerful intuition about continuity, convergence, and limits. Real analysis takes every one of those ideas and asks: *why does this actually work? When does it break?*

This is not pedantry. The rigorous foundations built here are exactly what you need to do mathematics at a higher level, whether that means measure theory, functional analysis, or the convergence proofs that underpin machine learning theory. Singular learning theory, for instance, requires precise control over when you can swap limits, integrals, and derivatives. Analysis gives you that control.

## Why Real Analysis?

### Calculus Gives You Tools. Analysis Asks Why They Work.

In calculus, you learned that continuous functions behave nicely: they do not jump, they satisfy the Intermediate Value Theorem, and you can integrate them. But you probably never questioned *why* these things are true. Analysis provides the proofs, and in doing so reveals the hidden assumptions.

Here is a concrete example of calculus "lying" by omission. Define a sequence of functions $f_n : [0, 1] \to \mathbb{R}$ by:

$$
f_n(x) = x^n
$$

Each $f_n$ is continuous. But what happens as $n \to \infty$? For any $x \in [0, 1)$, we have $x^n \to 0$. At $x = 1$, we have $1^n = 1$ for all $n$. So the "limit function" is:

$$
f(x) = \begin{cases} 0 & \text{if } 0 \le x < 1 \\ 1 & \text{if } x = 1 \end{cases}
$$

This function is **discontinuous**, even though every $f_n$ was continuous. Calculus never warned you about this. Analysis explains precisely when the limit of continuous functions is continuous (the answer involves **uniform convergence**, covered below) and when it is not.

### Why This Matters for Machine Learning

Learning theory is built on analysis. When you prove that a neural network can approximate any continuous function (the universal approximation theorem), you are using tools from analysis. When you prove that empirical risk converges to true risk as the sample size grows, you need the convergence theorems developed here. Singular learning theory uses analytic tools (resolution of singularities, asymptotic expansions) that require comfort with the precise definitions and limit-swapping theorems of analysis.

## The Real Numbers

### What Are the Reals, Really?

You might think of the real numbers $\mathbb{R}$ as "all the decimals," but that description does not capture what makes them special. The integers $\mathbb{Z}$, the rationals $\mathbb{Q}$, and the reals $\mathbb{R}$ are all number systems, but they have fundamentally different properties. The key property that separates $\mathbb{R}$ from $\mathbb{Q}$ is **completeness**.

### Supremum and Infimum

Before stating completeness, we need the concept of bounds.

**Definition.** Let $S \subseteq \mathbb{R}$ be nonempty. A number $M$ is an **upper bound** for $S$ if $x \le M$ for all $x \in S$. The **supremum** (or least upper bound) of $S$, written $\sup S$, is the smallest upper bound.

Similarly, $m$ is a **lower bound** if $m \le x$ for all $x \in S$, and the **infimum** $\inf S$ is the greatest lower bound.

**Example.** Let $S = \{1/n : n \in \mathbb{N}\} = \{1, 1/2, 1/3, 1/4, \ldots\}$. Then $\sup S = 1$ (it is in $S$) and $\inf S = 0$ (not in $S$, but no number greater than $0$ is a lower bound).

The crucial characterization: $s = \sup S$ if and only if (1) $s$ is an upper bound for $S$, and (2) for every $\epsilon > 0$, there exists $x \in S$ with $x > s - \epsilon$. In other words, $\sup S$ is the "tightest" upper bound: you cannot pull it down by any amount $\epsilon$ without some element of $S$ exceeding it.

### The Completeness Axiom

**Axiom of Completeness.** Every nonempty subset of $\mathbb{R}$ that is bounded above has a supremum in $\mathbb{R}$.

This is what makes $\mathbb{R}$ special. The rationals $\mathbb{Q}$ do *not* have this property.

**Example: the gap in the rationals.** Consider the set:

$$
S = \{x \in \mathbb{Q} : x^2 < 2\}
$$

This set is nonempty ($1 \in S$) and bounded above ($2$ is an upper bound). In $\mathbb{R}$, $\sup S = \sqrt{2}$. But $\sqrt{2} \notin \mathbb{Q}$, so $S$ has no supremum within $\mathbb{Q}$. The rationals have "gaps" where irrational numbers should be, and completeness says the reals fill in every gap.

Almost every major theorem in analysis relies on completeness, either directly or indirectly. The Monotone Convergence Theorem, the Bolzano-Weierstrass Theorem, the Intermediate Value Theorem: all of them need the reals to be complete.

### The Archimedean Property

**Theorem (Archimedean Property).** For any real number $x$, there exists a natural number $n$ such that $n > x$.

This says the natural numbers are unbounded, or equivalently, that $1/n$ can be made arbitrarily small. It is a consequence of completeness (if $\mathbb{N}$ were bounded above, $\sup \mathbb{N}$ would exist, and $\sup \mathbb{N} - 1$ would not be an upper bound, so some $n > \sup \mathbb{N} - 1$, giving $n + 1 > \sup \mathbb{N}$, a contradiction).

### Density of the Rationals and Irrationals

**Theorem.** Between any two real numbers $a < b$, there exists a rational number $r$ with $a < r < b$, and an irrational number $s$ with $a < s < b$.

**Proof sketch (density of rationals).** We want to find integers $m, n$ with $n > 0$ such that $a < m/n < b$. By the Archimedean property, choose $n$ large enough that $1/n < b - a$. Then the integer multiples of $1/n$ are spaced closer together than the length of $(a, b)$, so at least one of them must land inside.

The rationals are "dense" in $\mathbb{R}$: they are everywhere, filling in every interval. Yet there are also irrationals between every pair of rationals. Both are interwoven throughout the real line, but the irrationals are "more numerous" in a sense that measure theory makes precise.

### Nested Interval Property

**Theorem.** If $I_1 \supseteq I_2 \supseteq I_3 \supseteq \cdots$ is a nested sequence of closed bounded intervals $I_n = [a_n, b_n]$, then the intersection $\bigcap_{n=1}^{\infty} I_n$ is nonempty.

This is another consequence of completeness. The sequence $(a_n)$ is increasing and bounded above (by any $b_n$), so it converges to some limit $x$. Similarly $(b_n)$ is decreasing and bounded below. Since $a_n \le b_n$ for all $n$, we get $x \in [a_n, b_n]$ for all $n$.

Note: this fails for open intervals. The intervals $(0, 1/n)$ are nested, but $\bigcap_{n=1}^{\infty} (0, 1/n) = \emptyset$. It also fails in $\mathbb{Q}$: you can construct nested closed intervals of rationals whose intersection is empty (because the "limit point" is irrational).

## Sequences and Convergence

### What Is a Sequence?

A **sequence** is a function $a : \mathbb{N} \to \mathbb{R}$. We write it as $(a_n)$ or $(a_1, a_2, a_3, \ldots)$. The key question is: does the sequence settle down to a single value?

### The Epsilon-N Definition of Convergence

**Definition.** A sequence $(a_n)$ **converges** to a limit $L$, written $a_n \to L$ or $\lim_{n \to \infty} a_n = L$, if:

$$
\text{For every } \epsilon > 0, \text{ there exists } N \in \mathbb{N} \text{ such that } n > N \implies |a_n - L| < \epsilon.
$$

Unpacking this: $\epsilon$ represents how close you want the terms to be to $L$. No matter how small you make $\epsilon$ (even $\epsilon = 10^{-100}$), you can find a point $N$ in the sequence beyond which *every* term is within $\epsilon$ of $L$. The sequence eventually enters and stays inside any neighborhood of $L$, no matter how tiny.

### Worked Example: Proving $1/n \to 0$

**Claim.** $\lim_{n \to \infty} 1/n = 0$.

**Proof.** Let $\epsilon > 0$ be given. We need to find $N$ such that $n > N \implies |1/n - 0| < \epsilon$, i.e., $1/n < \epsilon$.

This holds whenever $n > 1/\epsilon$. By the Archimedean property, such an $N$ exists (choose any natural number $N > 1/\epsilon$). Then for all $n > N$:

$$
|a_n - 0| = \frac{1}{n} < \frac{1}{N} < \epsilon. \quad \square
$$

The structure of this proof is the template for all convergence proofs: let $\epsilon > 0$ be given, find $N$ that works (usually by solving an inequality backwards), then verify the implication.

### Another Worked Example: $(2n + 1)/(3n + 5) \to 2/3$

**Claim.** $\lim_{n \to \infty} \frac{2n + 1}{3n + 5} = \frac{2}{3}$.

**Proof.** Let $\epsilon > 0$ be given. We compute:

$$
\left| \frac{2n+1}{3n+5} - \frac{2}{3} \right| = \left| \frac{3(2n+1) - 2(3n+5)}{3(3n+5)} \right| = \left| \frac{-7}{3(3n+5)} \right| = \frac{7}{3(3n+5)}
$$

Since $3n + 5 > 3n$, we have $\frac{7}{3(3n+5)} < \frac{7}{9n}$. So we need $\frac{7}{9n} < \epsilon$, i.e., $n > \frac{7}{9\epsilon}$.

Choose $N$ to be any natural number greater than $\frac{7}{9\epsilon}$. Then for $n > N$:

$$
\left| \frac{2n+1}{3n+5} - \frac{2}{3} \right| < \frac{7}{9n} < \frac{7}{9N} < \epsilon. \quad \square
$$

### Uniqueness of Limits and Divergence

**Theorem.** If a sequence converges, its limit is unique.

**Proof.** Suppose $a_n \to L$ and $a_n \to M$ with $L \neq M$. Set $\epsilon = |L - M|/2 > 0$. There exist $N_1, N_2$ such that $|a_n - L| < \epsilon$ for $n > N_1$ and $|a_n - M| < \epsilon$ for $n > N_2$. For $n > \max(N_1, N_2)$:

$$
|L - M| \le |L - a_n| + |a_n - M| < \epsilon + \epsilon = |L - M|
$$

This is a contradiction, so $L = M$.

A sequence **diverges** if it does not converge. There are two ways to diverge: the terms can grow without bound (like $n^2$), or they can oscillate without settling down (like $(-1)^n$).

### Limit Theorems

Once you have established that individual sequences converge, you can combine them.

**Theorem (Algebraic Limit Theorem).** If $a_n \to a$ and $b_n \to b$, then:

1. $(a_n + b_n) \to a + b$
2. $(c \cdot a_n) \to c \cdot a$ for any constant $c$
3. $(a_n \cdot b_n) \to a \cdot b$
4. $(a_n / b_n) \to a / b$, provided $b \neq 0$

**Theorem (Squeeze Theorem).** If $a_n \le b_n \le c_n$ for all $n$, and $a_n \to L$ and $c_n \to L$, then $b_n \to L$.

You used the Squeeze Theorem in calculus to evaluate limits. The proof is straightforward from the $\epsilon$-$N$ definition: given $\epsilon > 0$, choose $N$ large enough that both $|a_n - L| < \epsilon$ and $|c_n - L| < \epsilon$. Then $L - \epsilon < a_n \le b_n \le c_n < L + \epsilon$, so $|b_n - L| < \epsilon$.

### Monotone Convergence Theorem

**Theorem.** A bounded monotone sequence converges.

More precisely: if $(a_n)$ is increasing ($a_n \le a_{n+1}$ for all $n$) and bounded above, then $(a_n)$ converges, and $\lim a_n = \sup\{a_n : n \in \mathbb{N}\}$.

**Why it works:** Completeness guarantees that $s = \sup\{a_n\}$ exists. For any $\epsilon > 0$, there must be some $a_N > s - \epsilon$ (otherwise $s - \epsilon$ would be a smaller upper bound). Since the sequence is increasing, $n > N$ implies $s - \epsilon < a_N \le a_n \le s$, so $|a_n - s| < \epsilon$.

This theorem is used constantly: whenever you can show a sequence is increasing and bounded, you immediately know it converges, even if you cannot compute the limit directly.

### Subsequences and Bolzano-Weierstrass

A **subsequence** of $(a_n)$ is a sequence $(a_{n_k})$ where $n_1 < n_2 < n_3 < \cdots$. You keep the original terms but skip some of them.

**Theorem (Bolzano-Weierstrass).** Every bounded sequence in $\mathbb{R}$ has a convergent subsequence.

**Proof idea:** Every sequence has a monotone subsequence (by a clever argument about "peak" terms). If the original sequence is bounded, this monotone subsequence is bounded, so it converges by the Monotone Convergence Theorem.

Bolzano-Weierstrass is one of the most important theorems in analysis. It says that bounded sequences cannot "spread out" forever; some subsequence must settle down. This is a consequence of completeness, and it fails in $\mathbb{Q}$.

### Cauchy Sequences

**Definition.** A sequence $(a_n)$ is **Cauchy** if for every $\epsilon > 0$, there exists $N$ such that:

$$
m, n > N \implies |a_m - a_n| < \epsilon.
$$

Convergence says the terms get close to *a specific limit*. The Cauchy condition says the terms get close to *each other*. The remarkable fact about $\mathbb{R}$:

**Theorem.** A sequence in $\mathbb{R}$ is Cauchy if and only if it converges.

This is yet another manifestation of completeness. The power of the Cauchy criterion is practical: you can prove a sequence converges without knowing what it converges *to*. This is essential in situations where the limit is difficult to identify (common in function spaces and in proofs of existence theorems).

**Example.** Consider the sequence defined by $a_n = \sum_{k=1}^n 1/k!$. Does it converge? It is increasing (each term adds a positive quantity). To show it is bounded, note $k! \ge 2^{k-1}$ for $k \ge 1$, so:

$$
a_n = \sum_{k=1}^n \frac{1}{k!} \le \sum_{k=1}^n \frac{1}{2^{k-1}} < \sum_{k=0}^{\infty} \frac{1}{2^k} = 2
$$

By the Monotone Convergence Theorem, $(a_n)$ converges. In fact, $\lim a_n = e - 1$. But the point is that we proved convergence without needing to know this.

Alternatively, we can verify the Cauchy criterion directly. For $m > n$:

$$
|a_m - a_n| = \sum_{k=n+1}^m \frac{1}{k!} \le \sum_{k=n+1}^m \frac{1}{2^{k-1}} < \frac{1}{2^{n-1}}
$$

which can be made smaller than any $\epsilon$ by choosing $n$ large enough.

**Research connection:** Convergence behavior matters for understanding training dynamics. The "frustration gap" in BPE-trained models (the gap between a model's structural capacity and what the tokenizer allows) is measurable by step 5,000 and does not converge to zero across 35,000 additional steps. This is an empirical example of a sequence that converges to a nonzero limit, representing permanently wasted capacity.

### Limsup and Liminf

Not every sequence converges, but every bounded sequence has a well-defined **limit superior** and **limit inferior**.

**Definition.** For a bounded sequence $(a_n)$:

$$
\limsup_{n \to \infty} a_n = \lim_{n \to \infty} \sup_{k \ge n} a_k, \quad \liminf_{n \to \infty} a_n = \lim_{n \to \infty} \inf_{k \ge n} a_k
$$

The $\limsup$ is the largest value that subsequences can converge to, and $\liminf$ is the smallest. A sequence converges if and only if $\limsup a_n = \liminf a_n$, in which case both equal the limit.

**Example.** For $a_n = (-1)^n (1 + 1/n)$, the terms alternate: $-2, 3/2, -4/3, 5/4, \ldots$. Here $\limsup a_n = 1$ and $\liminf a_n = -1$. The sequence diverges, but we can still track its "spread."

## Series

### From Sequences to Series

A **series** $\sum_{n=1}^{\infty} a_n$ is defined through its **partial sums**:

$$
S_N = \sum_{n=1}^N a_n = a_1 + a_2 + \cdots + a_N
$$

The series **converges** if the sequence $(S_N)$ converges, and the sum is $\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} S_N$.

This reduces questions about infinite sums to questions about sequences, which we already understand.

**A necessary condition.** If $\sum a_n$ converges, then $a_n \to 0$. (Proof: $a_n = S_n - S_{n-1} \to L - L = 0$.) The converse is false: $\sum 1/n$ diverges even though $1/n \to 0$. This is the **divergence test**: if $a_n \not\to 0$, the series diverges.

**The harmonic series.** The series $\sum_{n=1}^{\infty} 1/n$ diverges, even though its terms go to zero. One proof: group the terms as $1 + 1/2 + (1/3 + 1/4) + (1/5 + 1/6 + 1/7 + 1/8) + \cdots$. Each group sums to at least $1/2$, so the partial sums grow without bound. This is a fundamental example: it shows that $a_n \to 0$ is necessary but not sufficient for convergence.

### Absolute vs. Conditional Convergence

**Definition.** A series $\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges. It converges **conditionally** if $\sum a_n$ converges but $\sum |a_n|$ diverges.

Absolute convergence implies convergence (the partial sums of $\sum a_n$ form a Cauchy sequence if the partial sums of $\sum |a_n|$ do). But conditional convergence is a fragile, precarious thing.

**Theorem (Riemann Rearrangement).** If $\sum a_n$ converges conditionally, then for any real number $L$ (or $\pm\infty$), there exists a rearrangement of the terms that converges to $L$.

This is shocking: by merely reordering the terms of a conditionally convergent series, you can make it sum to *anything you want*. The alternating harmonic series $\sum (-1)^{n+1}/n$ converges to $\ln 2$, but a rearrangement of the same terms can converge to $\pi$, or $-17$, or diverge to $+\infty$.

Absolutely convergent series, by contrast, give the same sum regardless of the order of terms. This is why absolute convergence is the "safe" kind.

### Convergence Tests (Rigorous Perspective)

You learned these tests computationally in calculus. Here is the analytic core of why they work.

**Comparison Test.** If $0 \le a_n \le b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges. (The partial sums of $\sum a_n$ are increasing and bounded above by $\sum b_n$, so they converge by the Monotone Convergence Theorem.)

**Ratio Test.** If $\lim |a_{n+1}/a_n| = r < 1$, then $\sum a_n$ converges absolutely. (Eventually $|a_n|$ is bounded by a geometric series with ratio close to $r$.)

**Root Test.** If $\lim \sup |a_n|^{1/n} = r < 1$, then $\sum a_n$ converges absolutely. (Same geometric series idea, but sometimes sharper than the ratio test.)

**Alternating Series Test.** If $a_n$ is decreasing and $a_n \to 0$, then $\sum (-1)^{n+1} a_n$ converges. (The partial sums alternately overshoot and undershoot, forming two monotone bounded subsequences that squeeze together.)

## Metric Spaces

### Beyond the Real Line

Everything so far has been about $\mathbb{R}$. But analysis needs to work in higher dimensions ($\mathbb{R}^n$), in spaces of functions, and in even more abstract settings. The concept that unifies all of these is the **metric space**.

**Definition.** A **metric space** is a set $X$ together with a function $d : X \times X \to \mathbb{R}$ (called a **metric** or **distance function**) satisfying:

1. **Positivity:** $d(x, y) \ge 0$, with $d(x, y) = 0$ if and only if $x = y$.
2. **Symmetry:** $d(x, y) = d(y, x)$.
3. **Triangle inequality:** $d(x, z) \le d(x, y) + d(y, z)$.

### Examples

- $\mathbb{R}$ with $d(x, y) = |x - y|$ (the usual distance).
- $\mathbb{R}^n$ with the Euclidean metric $d(\mathbf{x}, \mathbf{y}) = \|\mathbf{x} - \mathbf{y}\|_2 = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}$.
- $\mathbb{R}^n$ with the max metric $d(\mathbf{x}, \mathbf{y}) = \max_i |x_i - y_i|$. Different metric, same set.
- The space $C[0,1]$ of continuous functions on $[0,1]$ with $d(f, g) = \sup_{x \in [0,1]} |f(x) - g(x)|$. This is the **supremum metric** and connects directly to uniform convergence.

The point: once you have a metric, you can talk about convergence, continuity, and limits in exactly the same way. A sequence $(x_n)$ in a metric space converges to $x$ if $d(x_n, x) \to 0$. Continuity, Cauchy sequences, and everything else carry over.

### Completeness in Metric Spaces

A metric space is **complete** if every Cauchy sequence converges (to a point in the space). The real numbers $\mathbb{R}$ are complete, and so is $\mathbb{R}^n$ with any of the standard metrics.

But not every metric space is complete. The rationals $\mathbb{Q}$ with the usual metric $|x - y|$ are not complete: the sequence $1, 1.4, 1.41, 1.414, \ldots$ (decimal approximations to $\sqrt{2}$) is Cauchy in $\mathbb{Q}$ but does not converge in $\mathbb{Q}$.

The space $C[0, 1]$ with the supremum metric is complete: a uniform limit of continuous functions is continuous, so the limit stays in the space. This is important for functional analysis.

### Open and Closed Sets

**Definition.** The **open ball** of radius $r$ centered at $x$ is:

$$
B(x, r) = \{y \in X : d(x, y) < r\}
$$

In $\mathbb{R}$, an open ball is just an open interval $(x - r, x + r)$.

**Definition.** A set $U \subseteq X$ is **open** if for every $x \in U$, there exists $r > 0$ such that $B(x, r) \subseteq U$. In words: every point of $U$ has some "breathing room" around it that stays inside $U$.

**Definition.** A set $F \subseteq X$ is **closed** if its complement $X \setminus F$ is open. Equivalently, $F$ is closed if it contains all its **limit points**: if $(x_n)$ is a sequence in $F$ with $x_n \to x$, then $x \in F$.

**Examples in $\mathbb{R}$:**

- $(0, 1)$ is open: for any $x \in (0, 1)$, take $r = \min(x, 1 - x)$, and $(x - r, x + r) \subseteq (0, 1)$.
- $[0, 1]$ is closed: its complement $(-\infty, 0) \cup (1, \infty)$ is open.
- $[0, 1)$ is neither open nor closed. It is not open because $0$ has no open ball staying inside (any $(- r, r)$ extends below $0$). It is not closed because $1$ is a limit point (the sequence $1 - 1/n \to 1$) but $1 \notin [0, 1)$.

**Important:** "closed" does not mean "not open." A set can be both open and closed (like $\mathbb{R}$ itself, or $\emptyset$), or neither.

**Limit points.** A point $x$ is a **limit point** of $S$ if every open ball around $x$ contains a point of $S$ different from $x$. Equivalently, there is a sequence in $S \setminus \{x\}$ converging to $x$. The set of all limit points of $S$ is sometimes called the **derived set**.

**The closure** $\overline{S}$ of a set $S$ is the smallest closed set containing $S$, equivalently $S$ together with all its limit points. For example, $\overline{(0,1)} = [0,1]$ and $\overline{\mathbb{Q}} = \mathbb{R}$.

### Compact Sets

**Definition.** A set $K$ is **compact** if every open cover of $K$ has a finite subcover. That is, if $K \subseteq \bigcup_{\alpha} U_{\alpha}$ where each $U_{\alpha}$ is open, then there exist finitely many $U_{\alpha_1}, \ldots, U_{\alpha_n}$ with $K \subseteq U_{\alpha_1} \cup \cdots \cup U_{\alpha_n}$.

This definition looks abstract, but it captures a powerful idea: compact sets are "small enough" that infinite processes can be reduced to finite ones.

**Theorem (Heine-Borel).** A subset of $\mathbb{R}^n$ is compact if and only if it is **closed and bounded**.

So in $\mathbb{R}^n$, compactness is easy to check. The closed interval $[0, 1]$ is compact. The open interval $(0, 1)$ is not (it is bounded but not closed). The set $\mathbb{R}$ is not (it is closed but not bounded).

**Why compactness matters:** Compactness is the hypothesis that makes many important theorems work.

- **Extreme Value Theorem:** A continuous function on a compact set achieves its maximum and minimum. (Without compactness: $f(x) = x$ on $(0, 1)$ has no maximum.)
- **Uniform continuity:** A continuous function on a compact set is uniformly continuous (defined below).
- **Bolzano-Weierstrass:** Every sequence in a compact set has a convergent subsequence whose limit is in the set.
- In optimization, compactness guarantees that optimal solutions exist.

### Connectedness

A set $S$ is **connected** if it cannot be written as the union of two nonempty, disjoint open sets (relative to $S$). Intuitively, a connected set is "one piece."

**In $\mathbb{R}$:** the connected sets are exactly the intervals (including rays and all of $\mathbb{R}$). This is the topological fact underlying the Intermediate Value Theorem: if $f$ is continuous and $f(a) < v < f(b)$, then $f([a,b])$ is a connected subset of $\mathbb{R}$ (since $[a,b]$ is connected and continuous images of connected sets are connected), so $f([a,b])$ is an interval, and $v$ must be in it.

### Topology: A Glimpse Beyond Metrics

Open sets, closed sets, compactness, and connectedness are really ideas from **topology**, not just metric space theory. A topological space is a set $X$ with a collection of "open sets" satisfying certain axioms (the empty set and $X$ are open; arbitrary unions and finite intersections of open sets are open). Every metric space defines a topology through its open balls, but there are topological spaces with no metric at all.

For now, the metric space framework is sufficient. But the topological viewpoint explains why the same theorems (continuous image of a compact set is compact, continuous image of a connected set is connected) work in so many different settings: they depend only on the open set structure, not on the specific distance function.

## Continuity (Rigorous)

### The Epsilon-Delta Definition

In calculus, you may have seen this definition briefly. In analysis, it is the foundation.

**Definition.** A function $f : D \to \mathbb{R}$ is **continuous at** $a \in D$ if:

$$
\text{For every } \epsilon > 0, \text{ there exists } \delta > 0 \text{ such that } |x - a| < \delta \implies |f(x) - f(a)| < \epsilon.
$$

The structure mirrors the $\epsilon$-$N$ definition of sequence convergence. Here $\epsilon$ is how close you want the outputs, and $\delta$ is how close the inputs need to be.

**Worked example: $f(x) = x^2$ is continuous at $a = 3$.** Let $\epsilon > 0$. We need $\delta > 0$ such that $|x - 3| < \delta$ implies $|x^2 - 9| < \epsilon$.

Factor: $|x^2 - 9| = |x - 3| \cdot |x + 3|$. If we restrict $\delta \le 1$, then $|x - 3| < 1$ means $2 < x < 4$, so $|x + 3| < 7$. Thus $|x^2 - 9| < 7|x - 3|$, and we need $7|x - 3| < \epsilon$, i.e., $|x - 3| < \epsilon/7$.

Choose $\delta = \min(1, \epsilon/7)$. Then $|x - 3| < \delta$ implies $|x^2 - 9| = |x-3| \cdot |x+3| < (\epsilon/7)(7) = \epsilon$. $\square$

The trick of restricting $\delta$ first (here to be at most $1$) to control one factor is standard in $\epsilon$-$\delta$ proofs.

In a general metric space $(X, d_X)$ and $(Y, d_Y)$: for every $\epsilon > 0$, there exists $\delta > 0$ such that $d_X(x, a) < \delta \implies d_Y(f(x), f(a)) < \epsilon$.

### Sequential Characterization

**Theorem.** $f$ is continuous at $a$ if and only if for every sequence $(x_n)$ with $x_n \to a$, we have $f(x_n) \to f(a)$.

This equivalence is extremely useful. It means you can use everything you know about sequences to study continuity. It is often easier to prove discontinuity using this characterization: find a single sequence $x_n \to a$ where $f(x_n) \not\to f(a)$.

### Uniform Continuity

**Definition.** A function $f$ is **uniformly continuous** on a set $D$ if:

$$
\text{For every } \epsilon > 0, \text{ there exists } \delta > 0 \text{ such that for ALL } x, y \in D, \; |x - y| < \delta \implies |f(x) - f(y)| < \epsilon.
$$

The difference from ordinary continuity is subtle but critical. In ordinary continuity, $\delta$ can depend on the point $a$. In uniform continuity, the *same* $\delta$ works for *every* pair of points in $D$.

**Example.** $f(x) = x^2$ is continuous on $\mathbb{R}$ but not uniformly continuous. Near large values of $x$, you need a smaller and smaller $\delta$ to control the output. On the bounded interval $[0, 10]$, it *is* uniformly continuous.

**Theorem.** If $f$ is continuous on a compact set $K$, then $f$ is uniformly continuous on $K$.

This is another reason compactness is so important: it automatically upgrades continuity to uniform continuity.

### The Intermediate Value Theorem (Rigorous)

**Theorem.** If $f : [a, b] \to \mathbb{R}$ is continuous and $f(a) < v < f(b)$ (or $f(b) < v < f(a)$), then there exists $c \in (a, b)$ with $f(c) = v$.

You used this in calculus to argue that continuous functions "hit every value in between." The proof requires completeness of $\mathbb{R}$: you define $c = \sup\{x \in [a, b] : f(x) < v\}$ and use continuity to show $f(c) = v$. The theorem fails in $\mathbb{Q}$, because that supremum might not exist.

## Sequences and Series of Functions

### Pointwise Convergence: The Obvious but Dangerous Definition

Given functions $f_n : D \to \mathbb{R}$, we say $(f_n)$ **converges pointwise** to $f$ if for each fixed $x \in D$:

$$
\lim_{n \to \infty} f_n(x) = f(x)
$$

This means: fix any $x$, and the sequence of *numbers* $f_1(x), f_2(x), f_3(x), \ldots$ converges to $f(x)$.

### The Problem with Pointwise Convergence

Pointwise convergence preserves almost nothing. We saw at the start that pointwise limits of continuous functions can be discontinuous ($f_n(x) = x^n$ on $[0, 1]$). Things get worse:

- The pointwise limit of differentiable functions may not be differentiable.
- You cannot, in general, swap a pointwise limit with an integral:

$$
\lim_{n \to \infty} \int f_n \;\neq\; \int \lim_{n \to \infty} f_n \quad \text{(in general)}
$$

- You cannot swap a pointwise limit with a derivative.

These failures are not pathological edge cases. They arise in natural situations, and they are precisely why analysis was developed: to find conditions under which these operations *can* be interchanged.

### Uniform Convergence: The Fix

**Definition.** $(f_n)$ **converges uniformly** to $f$ on $D$ if:

$$
\sup_{x \in D} |f_n(x) - f(x)| \to 0 \quad \text{as } n \to \infty
$$

Equivalently: for every $\epsilon > 0$, there exists $N$ such that $|f_n(x) - f(x)| < \epsilon$ for all $x \in D$ and all $n > N$.

The crucial difference: in pointwise convergence, $N$ can depend on $x$. In uniform convergence, the *same* $N$ works for *all* $x$ simultaneously. The convergence happens "at the same rate" everywhere.

**Example: $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but NOT uniformly.** We showed the pointwise limit is discontinuous (0 for $x < 1$, 1 at $x = 1$). For uniform convergence, we would need $\sup_{x \in [0,1]} |x^n - f(x)| \to 0$. But:

$$
\sup_{x \in [0,1)} |x^n - 0| = \sup_{x \in [0,1)} x^n = 1
$$

(the supremum approaches 1 as $x \to 1^-$). So the sup does not go to zero, and convergence is not uniform. This is why the limit function is discontinuous: pointwise convergence is not strong enough to preserve continuity.

### Why Uniform Convergence Fixes Everything

**Theorem.** If each $f_n$ is continuous and $f_n \to f$ uniformly, then $f$ is continuous.

**Theorem (Swapping Limits and Integrals).** If $f_n \to f$ uniformly on $[a, b]$, then:

$$
\lim_{n \to \infty} \int_a^b f_n(x) \, dx = \int_a^b f(x) \, dx
$$

**Theorem (Swapping Limits and Derivatives).** If each $f_n$ is differentiable, $f_n \to f$ pointwise, and $f_n' \to g$ uniformly, then $f$ is differentiable and $f' = g$.

These theorems say: uniform convergence is the condition you need to legitimately interchange limits with the fundamental operations of calculus.

### Power Series and Uniform Convergence

Power series (Taylor series) are series of functions:

$$
\sum_{n=0}^{\infty} c_n (x - a)^n
$$

A power series with radius of convergence $R$ converges uniformly on any compact subset of $(a - R, a + R)$. This is why Taylor series behave so well: you can differentiate and integrate them term by term within the radius of convergence.

### The Weierstrass M-Test

**Theorem.** If $|f_n(x)| \le M_n$ for all $x \in D$ and $\sum M_n$ converges, then $\sum f_n$ converges uniformly on $D$.

This is the standard tool for proving uniform convergence of series of functions: bound each term by a constant, and check that those constants form a convergent series.

### Where This Appears in Machine Learning

- **Universal approximation theorems** prove that neural networks can approximate continuous functions on compact sets. The convergence is in the sup-norm, which is uniform convergence.
- **Empirical risk convergence:** as the number of data points grows, the empirical risk function converges to the true risk function. The type of convergence (pointwise vs. uniform over the hypothesis class) determines the strength of the learning guarantee.
- **Function space analysis** in kernel methods and RKHS theory relies on understanding convergence in spaces of functions, where the metric is built from norms related to uniform convergence.

## Differentiation and Integration (Rigorous)

### The Mean Value Theorem

**Theorem.** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ with:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

You used this in calculus. The proof uses the Extreme Value Theorem (which requires compactness of $[a, b]$) applied to an auxiliary function. The MVT is the bridge between pointwise information ($f'(c)$) and global information ($f(b) - f(a)$).

**Proof sketch.** Define $g(x) = f(x) - \frac{f(b) - f(a)}{b - a}(x - a)$. Then $g(a) = f(a)$ and $g(b) = f(a)$, so $g$ has equal values at the endpoints. By the Extreme Value Theorem, $g$ achieves its maximum and minimum on $[a, b]$. If the maximum (or minimum) occurs at an interior point $c$, then $g'(c) = 0$ (Fermat's theorem), which gives $f'(c) = \frac{f(b) - f(a)}{b - a}$. If both the max and min occur at the endpoints, then $g$ is constant, and $g'(c) = 0$ for any interior $c$.

**Consequences of the MVT:**

- If $f'(x) = 0$ for all $x$ in an interval, then $f$ is constant on that interval.
- If $f'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing.
- If $|f'(x)| \le M$ for all $x$, then $|f(b) - f(a)| \le M|b - a|$ (Lipschitz condition).

### Taylor's Theorem with Remainder

**Theorem.** If $f$ has $n + 1$ continuous derivatives on an interval containing $a$, then for any $x$ in that interval:

$$
f(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x)
$$

where the Lagrange remainder is:

$$
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}
$$

for some $c$ between $a$ and $x$. This gives a precise bound on how well the Taylor polynomial approximates $f$. When $R_n(x) \to 0$ as $n \to \infty$, the Taylor series converges to $f$. When it does not, the Taylor series converges to something else (or diverges).

### The Riemann Integral (Formal Definition)

In calculus, you thought of the integral as "area under the curve." The formal definition makes this precise.

A **partition** of $[a, b]$ is a finite set $P = \{a = x_0 < x_1 < \cdots < x_n = b\}$. For each subinterval $[x_{i-1}, x_i]$, define:

$$
m_i = \inf_{x \in [x_{i-1}, x_i]} f(x), \quad M_i = \sup_{x \in [x_{i-1}, x_i]} f(x)
$$

The **lower sum** and **upper sum** are:

$$
L(f, P) = \sum_{i=1}^n m_i (x_i - x_{i-1}), \quad U(f, P) = \sum_{i=1}^n M_i (x_i - x_{i-1})
$$

$f$ is **Riemann integrable** on $[a, b]$ if:

$$
\sup_P L(f, P) = \inf_P U(f, P)
$$

and this common value is $\int_a^b f(x) \, dx$.

### When the Riemann Integral Fails

The Riemann integral works well for continuous functions and functions with finitely many discontinuities. But consider the **Dirichlet function**:

$$
f(x) = \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}
$$

On any interval $[x_{i-1}, x_i]$, we have $m_i = 0$ and $M_i = 1$ (since every interval contains both rationals and irrationals). So $L(f, P) = 0$ and $U(f, P) = b - a$ for every partition $P$. The lower and upper sums never meet: $f$ is not Riemann integrable.

Yet in some sense, this function "should" integrate to $0$ (the rationals form a "negligible" set). This is one motivation for the Lebesgue integral, which handles this and much more.

### The Fundamental Theorem of Calculus (Rigorous Statement)

**Theorem (FTC, Part 1).** If $f$ is Riemann integrable on $[a, b]$ and $F(x) = \int_a^x f(t) \, dt$, then $F$ is continuous on $[a, b]$. If $f$ is continuous at $c \in (a, b)$, then $F$ is differentiable at $c$ and $F'(c) = f(c)$.

**Theorem (FTC, Part 2).** If $f$ is Riemann integrable on $[a, b]$ and $F$ is an antiderivative of $f$ (i.e., $F' = f$ on $[a, b]$), then:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Notice the hypotheses: Part 1 requires integrability and gives differentiability only at points of continuity. Part 2 requires the existence of an antiderivative. These conditions are automatically satisfied for continuous functions, which is why you never worried about them in calculus.

## Preview: What Comes Next

This page covers the foundations. Here is where they lead.

### Measure Theory

The Lebesgue integral replaces the Riemann integral by measuring sets rather than partitioning intervals. It can integrate the Dirichlet function (the answer is $0$, as expected). More importantly, it handles limits much better:

- **Dominated Convergence Theorem:** If $f_n \to f$ pointwise and $|f_n| \le g$ for some integrable $g$, then $\int f_n \to \int f$. This is far more powerful than requiring uniform convergence.
- **Monotone Convergence Theorem (for integrals):** If $0 \le f_1 \le f_2 \le \cdots$ pointwise, then $\int f_n \to \int \lim f_n$.

Probability theory is built on measure theory: a probability distribution is a measure, and expected values are Lebesgue integrals. The "sets of measure zero" that the Lebesgue theory handles gracefully are the same sets you can safely ignore in probability ("this event happens with probability zero").

### Functional Analysis

Functional analysis studies infinite-dimensional vector spaces equipped with norms or inner products: spaces of functions, sequences, or distributions. Key objects include:

- **Banach spaces** (complete normed spaces) and **Hilbert spaces** (complete inner product spaces).
- **Bounded linear operators** between these spaces.
- The **Reproducing Kernel Hilbert Space (RKHS)** framework used in kernel methods and Gaussian processes.

The convergence theorems from this page (Cauchy completeness, uniform convergence, Bolzano-Weierstrass) generalize to these infinite-dimensional settings, though new phenomena emerge. For instance, the Bolzano-Weierstrass theorem fails in infinite dimensions: the unit ball in an infinite-dimensional Banach space is *not* compact, which forces the development of weaker notions of convergence (weak convergence, weak-* convergence).

### Singular Learning Theory

Singular learning theory (SLT) studies the geometry of the loss landscape in statistical models where classical regularity conditions fail. It draws on:

- **Algebraic geometry** (varieties, ideals, resolution of singularities) to analyze the set of optimal parameters.
- **Analysis** (asymptotic expansions, convergence of integrals, distribution theory) to derive the free energy and learning coefficients.
- **Measure theory** to define and manipulate the posterior distribution near singularities.

The analytic foundations on this page (completeness, compactness, uniform convergence, rigorous integration) are the language in which these results are stated and proved.

**Research connection:** Singular learning theory directly explains phenomena observed in developmental interpretability. The deterministic count of spacing heads across random seeds (183/384 in both runs) suggests the head allocation is determined by the geometry of the loss landscape (the RLCT), not by initialization. Phase transitions during training (when heads suddenly specialize or collapse) correspond to changes in the local learning coefficient. Circuit membership being developmentally protective (heads in circuits survive; isolated heads collapse into P0 sinks) may reflect the singularity structure near the true parameter set.

### The Big Picture

The progression looks like this:

1. **Real analysis** (this page): rigorous foundations for limits, continuity, and convergence in $\mathbb{R}$ and $\mathbb{R}^n$.
2. **Measure theory**: a more powerful theory of integration that handles limits gracefully and provides the foundation for probability.
3. **Functional analysis**: analysis in infinite-dimensional spaces, where the objects are functions rather than numbers.
4. **Algebraic geometry and singular learning theory**: combining algebraic and analytic tools to study the geometry of statistical models.

Each level builds directly on the previous one. The definitions and theorems on this page (particularly completeness, compactness, and uniform convergence) appear in new guises at every subsequent level. Mastering them here means recognizing them later.
