---
title: "Singular Learning Theory"
prerequisites: ["measure-theory", "algebraic-geometry", "bayesian-inference"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Measure Theory](./measure-theory) · [Algebraic Geometry](./algebraic-geometry) · [Bayesian Inference](./bayesian-inference)
> **Leads to:** this is the summit. See the [Path to SLT](./path-to-slt) for the full climb.


Singular learning theory (SLT) is the mathematical theory of what happens when you fit a model whose parameters are *not* uniquely determined by its behavior. That describes almost every model in modern machine learning: a neural network with millions of weights can realize the exact same input-output function for many different weight settings. Classical statistics assumed this never happens, so its central results (the Bayesian Information Criterion, the asymptotic normality of estimators, the "one parameter costs half a $\log n$" rule of thumb) quietly break for the models we actually use. SLT is the repair. It replaces the parameter count with a geometric quantity, the **real log canonical threshold** (RLCT), that correctly measures a model's effective complexity even when the parameters are redundant.

This page is the summit of these notes. It assembles pieces developed elsewhere: the [free energy as a Lebesgue integral](./measure-theory), the [geometry of singularities and the RLCT](./algebraic-geometry), and the [Bayesian machinery of posteriors and model selection](./bayesian-inference). If you have not read those, the [Path to SLT](./path-to-slt) lays out the full prerequisite sequence. Here we tell the whole story start to finish, define every symbol as it appears, and end with a worked RLCT calculation you can check by hand.

Why should you care? For [mechanistic and developmental interpretability](./bayesian-inference), SLT is not an analogy but the governing theory. The quantity it produces, the **local learning coefficient** $\hat\lambda$ (read "lambda-hat"), can be estimated during training and tracks *phase transitions*: the discrete moments when a network reorganizes what it has learned. SLT is the bridge from "loss went down" to "the model's internal structure changed."

## The Learning Problem, Stated Precisely

Before we can say what goes wrong, we need the classical setup stated carefully.

**The truth.** There is an unknown probability distribution $q(x)$ (read "q of x") that generates data. We observe a sample $x_1, x_2, \ldots, x_n$ drawn independently from $q$. Here $n$ (read "n") is the sample size.

**The model.** We propose a *family* of distributions $p(x \mid w)$ (read "p of x given w"), one for each parameter vector $w$ (read "w", for weights). The parameter $w$ lives in a parameter space $W \subseteq \mathbb{R}^d$ (read "W", a subset of d-dimensional real space), where $d$ (read "d") is the number of parameters. For a neural network, $w$ is the full weight vector and $d$ is in the millions.

**The prior.** In the Bayesian framing, we also fix a prior density $\varphi(w)$ (read "phi of w"): our beliefs about $w$ before seeing data. See [Bayesian inference](./bayesian-inference) for why this is not optional bookkeeping but part of the model.

**The goal.** We want the member of the family closest to the truth. "Closest" is measured by the [Kullback-Leibler divergence](./information-theory):

$$
K(w) = \int q(x) \log \frac{q(x)}{p(x \mid w)} \, dx
$$

Read "$K(w)$" as "K of w"; it is the average log-ratio of truth to model. $K(w) \ge 0$ always, with $K(w) = 0$ exactly when $p(\cdot \mid w) = q$. The set of parameters that achieve this,

$$
W_0 = \{\, w \in W : K(w) = 0 \,\},
$$

is the **set of true parameters** (read "W-naught" or "W-zero"). It is the geometric object at the center of everything that follows.

**Realizability.** For simplicity we assume the truth is *realizable*: $q(x) = p(x \mid w_0)$ for some $w_0 \in W_0$, so $W_0$ is nonempty. (Watanabe's theory extends to the unrealizable case; the picture is the same with $K(w)$ replaced by its offset from the achievable minimum.)

## Regular vs. Singular: The Fork in the Road

Everything hinges on the shape of $W_0$ and on one matrix.

**The Fisher information matrix** $I(w)$ (read "I of w") measures how sharply the model's predictions change as you wiggle $w$:

$$
I(w)_{ij} = \int p(x \mid w)\, \frac{\partial \log p(x \mid w)}{\partial w_i}\, \frac{\partial \log p(x \mid w)}{\partial w_j} \, dx
$$

The indices $i, j$ (read "i" and "j") run over the $d$ parameters. Near a true parameter, $I(w)$ is the curvature of $K(w)$: to second order, $K(w) \approx \tfrac{1}{2}(w - w_0)^{\top} I(w_0) (w - w_0)$.

A statistical model is **regular** if two conditions hold:

1. **Identifiability.** The map $w \mapsto p(\cdot \mid w)$ is one-to-one, so $W_0$ is a single point.
2. **Nondegeneracy.** The Fisher information $I(w_0)$ is positive definite (full rank) at that point.

A model that fails either condition is **singular**. When $I(w_0)$ is degenerate (has a zero eigenvalue), $K(w)$ does *not* look like a nice quadratic bowl near $W_0$; it flattens out along some directions, and $W_0$ becomes a positive-dimensional variety with corners, crossings, and cusps. This is not an exotic edge case:

- **Redundant units.** Set a hidden neuron's outgoing weight to zero and its incoming weights become invisible to the output. Every such setting sits in $W_0$ (if the truth uses fewer units), forming a whole subvariety of true parameters.
- **Symmetry.** Permuting hidden units, or flipping signs in matched pairs, leaves the function unchanged. $W_0$ inherits these symmetries as self-intersections.
- **Rank degeneracy.** In models with matrix products (deep linear networks, attention), the set where a product drops rank is a *determinantal variety*, singular by classical algebraic geometry.

Neural networks, mixture models, hidden Markov models, and Bayesian networks are all singular. **The models we care about are exactly the ones classical theory excludes.** The consequences of the degeneracy, and the tools that repair it, are developed geometrically on the [algebraic geometry](./algebraic-geometry) page; here we track what it does to inference.

## The Free Energy: The Object That Knows Everything

Bayesian model selection ranks models by their *marginal likelihood*, the probability the model assigns to the observed data after averaging over all parameter settings:

$$
Z_n = \int_W \varphi(w) \, \prod_{i=1}^{n} p(x_i \mid w) \; dw
$$

Read "$Z_n$" as "Z-sub-n", the **partition function** (a name borrowed from statistical physics). It is a single number: large when the model, spread across its prior, tends to make the data likely. The product runs over all $n$ observations, so no extra exponent is needed. This is a [Lebesgue integral over parameter space](./measure-theory), and near a singular $W_0$ it is genuinely hard, which is the whole technical problem.

Taking a logarithm turns products into sums and defines the **Bayesian free energy**:

$$
F_n = -\log Z_n
$$

Read "$F_n$" as "F-sub-n". Because $Z_n$ is the marginal likelihood, $F_n$ is (up to sign) the quantity Bayesian model selection wants to minimize: the model with the smallest free energy is the most parsimonious explanation of the data. Rewriting the integrand in terms of the average log loss

$$
L_n(w) = -\frac{1}{n} \sum_{i=1}^{n} \log p(x_i \mid w)
$$

(read "$L_n(w)$" as "L-sub-n of w", the empirical negative log-likelihood per sample) shows the free energy is dominated by a competition: parameters with low loss $L_n(w)$ are favored, but only in proportion to how much prior *volume* $\varphi(w)\,dw$ surrounds them. **Complexity, in the Bayesian sense, is a volume.** How much parameter space does a good fit occupy? That question is what the RLCT answers.

## Watanabe's Fundamental Theorem

Here is the central result of the field. Sumio Watanabe proved that as the sample size grows, the free energy of *any* model (regular or singular) obeys a universal asymptotic expansion:

$$
F_n = n\, L_n(w_0) + \lambda \log n - (m - 1)\log\log n + O_p(1)
$$

Read this term by term:

- $n\, L_n(w_0)$ — the **energy**: $n$ times the loss at a true parameter. This grows linearly in $n$ and is the same story classical theory tells.
- $\lambda \log n$ — the **complexity penalty**. Here $\lambda$ (read "lambda") is the **real log canonical threshold (RLCT)**, a positive rational number fixed by the *geometry* of $W_0$. This term is where SLT departs from tradition.
- $-(m-1)\log\log n$ — a smaller correction, where $m$ (read "m") is the **multiplicity** of the singularity, a positive integer counting how many directions tie for "worst."
- $O_p(1)$ — read "big-O-p of one", a term that stays bounded in probability as $n \to \infty$; it does not grow, so it does not affect model comparison for large $n$.

Compare this to the classical **Bayesian Information Criterion (BIC)**, which every statistics course teaches:

$$
F_n^{\text{BIC}} = n L_n(\hat w) + \frac{d}{2} \log n + O_p(1)
$$

The two formulas agree if and only if $\lambda = d/2$. And that equality holds *exactly* in the regular case: when $W_0$ is a single nondegenerate point, the RLCT equals half the parameter count. **BIC is the regular special case of Watanabe's formula.** For singular models, $\lambda < d/2$, strictly. The model is *effectively simpler* than its parameter count claims, and BIC over-penalizes it.

This single inequality, $\lambda < d/2$, is the mathematical content of "overparameterized networks generalize better than their parameter count suggests." The geometry of the loss landscape, not the raw number of weights, sets the complexity.

## What the RLCT Actually Is

The RLCT deserves a definition you can compute with, not just admire. Its home is the [algebraic geometry](./algebraic-geometry) page, which derives it via *resolution of singularities* (Hironaka's theorem); the short version:

Near $W_0$, the loss $K(w)$ vanishes in some complicated way. Resolution of singularities is a change of coordinates $w = g(u)$ that untangles the crossing, turning $K$ into a clean monomial in the new coordinates $u = (u_1, \ldots, u_d)$:

$$
K(g(u)) = u_1^{2k_1} u_2^{2k_2} \cdots u_d^{2k_d}, \qquad
\varphi(g(u))\,|g'(u)|\,du = |u_1^{h_1} \cdots u_d^{h_d}|\,b(u)\,du
$$

with nonzero smooth $b(u)$. The exponents $k_j$ (read "k-sub-j") come from the loss; the exponents $h_j$ (read "h-sub-j") come from the prior and the Jacobian of the change of variables. From these, the RLCT is a minimum of ratios:

$$
\lambda = \min_j \frac{h_j + 1}{2 k_j}, \qquad
m = \#\Big\{\, j : \tfrac{h_j + 1}{2k_j} = \lambda \,\Big\}
$$

The multiplicity $m$ counts how many coordinate directions achieve that minimum. Although the individual exponents depend on *which* resolution you pick, the minimal ratio $\lambda$ does not: it is a **resolution invariant**. Equivalently, and without ever choosing a resolution, $\lambda$ is the smallest pole of the zeta function $\zeta(z) = \int K(w)^{-z}\varphi(w)\,dw$ (read "zeta of z"). That intrinsic definition is what makes $\lambda$ a genuine invariant of the model rather than an artifact of the calculation.

The RLCT is often called the **effective dimension** or, in interpretability, the **learning coefficient**, because $2\lambda$ plays the role that the parameter count $d$ plays in regular theory.

## Estimating the RLCT: WAIC and WBIC

Watanabe's formula is exact but involves $\lambda$, which we usually cannot compute in closed form for a real network. Two estimators make SLT usable in practice; both are developed on the [Bayesian inference](./bayesian-inference) page.

**WAIC (Widely Applicable Information Criterion)** estimates the generalization loss directly from posterior samples (via [MCMC](./bayesian-inference)), and stays asymptotically correct for singular models where the older AIC fails. It never needs $\lambda$ explicitly; it is the practical tool for estimating out-of-sample performance.

**WBIC (Widely Applicable Bayesian Information Criterion)** estimates the free energy, and hence lets you back out $\lambda$. Its trick is to sample from a *tempered* posterior at the special inverse temperature $\beta = 1/\log n$ (read "beta"):

$$
\text{WBIC} = \mathbb{E}_{\beta}\big[\, n L_n(w) \,\big], \qquad
P_\beta(w \mid D) \propto p(D \mid w)^{\beta}\, \varphi(w)
$$

At that temperature, the tempered-posterior expectation of $nL_n$ matches $nL_n(w_0) + \lambda \log n$, so a linear fit against $\log n$ recovers $\lambda$ from simulation. This is how RLCTs are measured for models too large to analyze by hand.

## From RLCT to Interpretability: The Local Learning Coefficient

The global RLCT describes a model at a single true parameter. During training, we want a *local, running* version. The **local learning coefficient** $\hat\lambda$ (read "lambda-hat") estimates the RLCT of the loss landscape at the current weights $w_t$ (read "w-sub-t"), typically by a WBIC-style tempered estimate localized around $w_t$. It answers: *how much effective complexity has the network committed to so far?*

Its power is dynamic. Watching $\hat\lambda$ across training reveals **phase transitions**: when $\hat\lambda$ jumps or drops, the network has moved to a region of the landscape with different singularity geometry, which corresponds to a qualitative change in the computation it implements. A drop in $\hat\lambda$ means the model found a *simpler* explanation (lower effective complexity) that fits equally well. These transitions can be located, timed, and interpreted, giving [developmental interpretability](./bayesian-inference) a principled, quantitative handle on *when* and *what* a network learns, rather than only *that* its loss went down.

This closes the circle these notes have been building toward: Bayes' theorem gives the posterior, the posterior's normalizer is the free energy, the free energy's growth rate is the RLCT, the RLCT is the geometry of the loss landscape, and that geometry, tracked over training, is the internal developmental structure of the network.

## Worked Example: An RLCT You Can Check by Hand

Take the simplest genuinely singular loss. Suppose that after resolution the loss and prior on the unit square $[0,1]^2$ are

$$
K(u) = u_1^2 \, u_2^2, \qquad \varphi\,|g'| = 1 \ \ (\text{constant}),
$$

so $k_1 = k_2 = 1$ and $h_1 = h_2 = 0$. Apply the formula:

$$
\frac{h_1 + 1}{2k_1} = \frac{0 + 1}{2\cdot 1} = \frac{1}{2},
\qquad
\frac{h_2 + 1}{2k_2} = \frac{1}{2},
$$

$$
\lambda = \min\!\left(\tfrac12, \tfrac12\right) = \frac{1}{2},
\qquad
m = \#\{\text{directions tied at } \tfrac12\} = 2.
$$

So this two-parameter model has RLCT $\lambda = \tfrac12$ and multiplicity $m = 2$. A *regular* two-parameter model would have $\lambda = d/2 = 1$. The singularity has **halved the effective complexity**: the $\lambda \log n$ penalty is $\tfrac12 \log n$ instead of $1 \cdot \log n$, and the $-(m-1)\log\log n = -\log\log n$ correction appears because two directions tie.

You can see the same answer without the resolution machinery. The one-dimensional integral $\int_0^1 e^{-n u^2}\,du \sim \tfrac{1}{2}\sqrt{\pi/n}$ decays like $n^{-1/2}$, so it contributes an RLCT of $\tfrac12$ per factor; two independent factors both hitting the minimum give $\lambda = \tfrac12$ with multiplicity $m = 2$. The partition function scales as

$$
Z_n \;\sim\; C \, \frac{(\log n)^{\,m-1}}{n^{\lambda}} \;=\; C\,\frac{\log n}{\sqrt{n}},
$$

and taking $-\log$ reproduces $F_n = n L_n(w_0) + \tfrac12 \log n - \log\log n + O_p(1)$, exactly Watanabe's formula with the values we computed. This monomial calculation is the atom from which all RLCT computations are built; resolution of singularities is the guarantee that *every* model can be reduced to this atomic case.

Explore this directly below. Vary the singularity exponent $k$ in $K(w) = w^{2k}$ (and switch to the two-parameter crossing $K = w_1^{2k}w_2^{2k}$): watch the loss flatten, the posterior concentrate, and the numerically computed free energy $F_n$ grow with slope exactly $\lambda = \tfrac{1}{2k}$, always less than the regular value $d/2$.

<iframe src="/static/interactive/rlct-free-energy-explorer.html" width="100%" height="660" style="border:none;"></iframe>

## Where to Go Next

- The geometry behind $\lambda$: [Algebraic Geometry](./algebraic-geometry) (varieties, singularities, resolution, RLCT).
- The integration that makes $F_n$ rigorous: [Measure Theory](./measure-theory) (Lebesgue integral, convergence theorems).
- The estimators and the interpretability payoff: [Bayesian Inference](./bayesian-inference) (posteriors, MCMC, WAIC/WBIC, local learning coefficient).
- The full ordered prerequisite chain, from sets to the summit: [Path to SLT](./path-to-slt).

## References

Watanabe, S. *Algebraic Geometry and Statistical Learning Theory* (Cambridge, 2009): the foundational monograph. Watanabe, S. *Mathematical Theory of Bayesian Statistics* (CRC, 2018): a more accessible treatment centered on WAIC and WBIC. For the interpretability thread, see the developmental interpretability literature on the local learning coefficient and phase transitions in neural network training.
