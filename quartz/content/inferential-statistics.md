---
title: "Inferential Statistics"
prerequisites: ["descriptive-statistics", "probability"]
enables: ["statistical-learning", "bayesian-inference"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Descriptive Statistics](./descriptive-statistics) · [Probability](./probability)
> **Leads to:** [Statistical Learning](./statistical-learning) · [Bayesian Inference](./bayesian-inference)

Inferential statistics is the science of generalizing from a *sample* to the *population* it was drawn from. Its two engines are **estimation** (producing a value or an interval for an unknown parameter) and **hypothesis testing** (deciding between competing claims), both powered by the **sampling distribution** of a statistic. This page builds on [descriptive statistics](./descriptive-statistics), since you summarize before you infer, and on [probability](./probability), which supplies the sampling distributions. For foundational vocabulary see the [Statistics](./statistics) hub.

## Sampling Distributions and Standard Error

**Sampling distribution:** If you drew many samples of size $n$ from a population and computed the sample mean $\bar{x}$ each time, the distribution of those sample means is the sampling distribution of $\bar{x}$.

By the [Central Limit Theorem](./probability#central-limit-theorem), this sampling distribution is approximately normal with:

- Mean: $\mu_{\bar{x}} = \mu$ (the sample mean is centered on the true mean)
- Standard deviation: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$

See the Central Limit Theorem happen below: pick a deliberately non-normal source (skewed, bimodal, a coin flip), draw many sample means, and watch their histogram become bell-shaped and tighten like $1/\sqrt{n}$, tracking the overlaid normal.

<iframe src="/static/interactive/stats-clt-sampler.html" width="100%" height="660" style="border:none;"></iframe>

**Standard error (SE):** The standard deviation of a sampling distribution. For the sample mean:

$$
SE = \frac{\sigma}{\sqrt{n}}
$$

When $\sigma$ is unknown (which is almost always), we estimate it with the sample standard deviation $s$:

$$
SE \approx \frac{s}{\sqrt{n}}
$$

**Intuition:** The standard error tells you how much your sample mean would vary if you repeated the sampling. Larger samples give smaller standard errors, meaning more precise estimates. Notice the $\sqrt{n}$ in the denominator: to cut the standard error in half, you need four times as much data.

### The t-Distribution

When you estimate the standard error using the sample standard deviation $s$ instead of the (unknown) population standard deviation $\sigma$, the resulting standardized statistic does not follow a standard normal distribution. It follows a **t-distribution**, which was discovered by William Gosset (publishing under the pseudonym "Student") in 1908.

**What it is:** The t-distribution looks like the standard normal distribution (bell-shaped, symmetric, centered at zero) but has **heavier tails**. This means extreme values are more probable under the t-distribution than under the normal. The heavier tails reflect the additional uncertainty introduced by estimating $\sigma$ with $s$.

**Degrees of freedom ($\nu$):** The shape of the t-distribution is controlled by a single parameter called degrees of freedom, typically $\nu = n - 1$ for a one-sample problem. The degrees of freedom count how many independent pieces of information go into estimating the variability.

- When $\nu$ is small (say 3 or 4), the t-distribution has noticeably heavier tails than the normal. Critical values are larger, so confidence intervals are wider and hypothesis tests are less likely to reject.
- As $\nu$ increases, the t-distribution approaches the standard normal. By $\nu = 30$, the two are quite close. By $\nu = 120$, they are nearly indistinguishable.
- At $\nu = \infty$, the t-distribution is exactly the standard normal.

**Why it exists:** The Z-score $Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$ follows a standard normal distribution. But when you replace $\sigma$ with $s$, the quantity $t = \frac{\bar{x} - \mu}{s/\sqrt{n}}$ does not follow a standard normal. The denominator $s/\sqrt{n}$ is itself a random variable (it changes from sample to sample), which introduces extra variability. The t-distribution accounts for this. With small samples, $s$ can be a poor estimate of $\sigma$, so the t-distribution's heavier tails provide wider intervals that reflect this uncertainty.

**When to use t vs. z:**

| Situation | Distribution | In practice |
|---|---|---|
| $\sigma$ known | Standard normal ($z$) | Almost never happens |
| $\sigma$ unknown, large $n$ | Either (they are nearly the same) | Use $t$ to be safe |
| $\sigma$ unknown, small $n$ | Must use $t$ | Common situation |

**Practical rule:** Use the t-distribution whenever $\sigma$ is unknown, regardless of sample size. There is no cost to using $t$ when $n$ is large (it gives essentially the same answer as $z$), and it is necessary when $n$ is small.

![Standard normal vs. t-distributions with different degrees of freedom](./media/t-distribution-comparison.png)

## Point Estimation and Interval Estimation

### Point Estimation

![Three sampling distributions of an estimator relative to the true parameter value: one unbiased with low variance (tight and centered on the true value), one unbiased with high variance (wide but centered), and one biased with low variance (tight but shifted off the true value), with the offset marked as the bias](./media/stats-estimator-bias-variance.png)

**Point estimate:** A single value used to estimate a population parameter. The sample mean $\bar{x}$ is a point estimate of $\mu$. A point estimate is your best single guess but gives no sense of how reliable it is.

**Desirable properties of estimators:**

- **Unbiased:** On average, the estimator hits the true parameter. $E[\hat{\theta}] = \theta$.
- **Consistent:** As sample size grows, the estimator converges to the true value.
- **Efficient:** Among unbiased estimators, it has the smallest variance.

#### Fisher Information and the Cramér-Rao Bound

The efficiency property raises a natural question: how small *can* the variance of an unbiased estimator be? The answer is governed by the **Fisher information**, which measures how much information a single observation carries about an unknown parameter.

For a model with density $P(x \mid \theta)$, the Fisher information (from one observation) is the expected squared derivative of the log-likelihood with respect to the parameter (the derivative $\partial_\theta \log P(x \mid \theta)$ is called the *score*):

$$
I(\theta) = \mathbb{E}\!\left[\left(\frac{\partial}{\partial \theta} \log P(X \mid \theta)\right)^2\right] = -\,\mathbb{E}\!\left[\frac{\partial^2}{\partial \theta^2} \log P(X \mid \theta)\right]
$$

The two expressions are equal under mild regularity conditions. Intuitively, $I(\theta)$ is large when the log-likelihood is sharply peaked (the data pin down $\theta$ tightly) and small when it is flat (the data are nearly uninformative). For $n$ independent observations the information adds: the total is $n\,I(\theta)$.

**The Cramér-Rao lower bound (CRLB):** For any unbiased estimator $\hat{\theta}$ of $\theta$ based on $n$ observations,

$$
\operatorname{Var}(\hat{\theta}) \geq \frac{1}{n\,I(\theta)}.
$$

No unbiased estimator can do better than $1/(n I(\theta))$; more information means a smaller achievable variance. This is the precise meaning of "efficient": an estimator is **efficient** when it attains the Cramér-Rao bound, i.e. its variance equals $1/(n I(\theta))$. An unbiased estimator that has the smallest possible variance among *all* unbiased estimators is called the **uniformly minimum-variance unbiased estimator (UMVUE)**; if it also meets the CRLB it is efficient in the finite-sample sense.

**Finite-sample vs. asymptotic efficiency:** These two notions are worth separating. *Finite-sample efficiency* (the UMVUE / Cramér-Rao sense) asks whether an estimator attains the minimum variance for every fixed $n$. *Asymptotic efficiency* is a weaker, large-$n$ statement: it asks only that the variance approach the Cramér-Rao bound as $n \to \infty$. The MLE is generally *asymptotically* efficient (its variance approaches $1/(n I(\theta))$ for large $n$) even when it is biased or not the UMVUE at any finite sample size. This distinction is why, for small samples, a UMVUE can beat the MLE, while for large samples the MLE is essentially optimal.

#### Sufficiency and the Factorization Theorem

The Cramér-Rao thread asked *how well* a single estimator can do. A companion question is more structural: which functions of the data actually carry the information about $\theta$, and which parts of the sample are just noise we can discard? A statistic that captures everything relevant is called **sufficient**, and the answer connects directly back to the UMVUE.

**Intuition.** A statistic $T(X)$ (any function of the sample $X = (X_1, \dots, X_n)$) is **sufficient** for $\theta$ if, once you know the value of $T$, the rest of the data tells you nothing more about $\theta$. For example, if you flip a coin $n$ times to learn its bias, the *number* of heads seems to be all that matters; the specific order in which they landed feels irrelevant. Sufficiency makes that intuition precise.

**Formal definition.** $T(X)$ is sufficient for $\theta$ if the conditional distribution of the sample $X$ given $T(X) = t$ does not depend on $\theta$. Because that conditional distribution is $\theta$-free, whatever information the data held about $\theta$ has been fully absorbed into $T$.

**The Neyman-Fisher factorization theorem.** Checking the definition directly requires computing a conditional distribution, which is awkward. The factorization theorem replaces it with a purely algebraic test: $T(X)$ is sufficient for $\theta$ if and only if the likelihood factors as

$$
p(x \mid \theta) = g\big(T(x), \theta\big)\, h(x),
$$

where $g$ depends on the data only through $T(x)$ and $h(x)$ does not depend on $\theta$ at all. In words: if $\theta$ touches the data only through the combination $T(x)$, then $T$ is sufficient.

**Worked example (Bernoulli $p$).** Let $X_1, \dots, X_n$ be independent $\text{Bernoulli}(p)$, so each $x_i \in \{0,1\}$ with pmf $p(x_i \mid p) = p^{x_i}(1-p)^{1-x_i}$. The joint pmf is the product:

$$
p(x \mid p) = \prod_{i=1}^{n} p^{x_i}(1-p)^{1-x_i} = p^{\,t}\,(1-p)^{\,n - t},
$$

where $t = \sum_{i=1}^n x_i$ is the total number of successes (the exponents add because $\sum_i x_i = t$ and $\sum_i (1 - x_i) = n - t$). This already has the factorization form with $g(t, p) = p^{\,t}(1-p)^{\,n-t}$ and $h(x) = 1$. The data enter only through $t$, so $T(X) = \sum_i X_i$ is sufficient for $p$. Concretely, once we know that $t = 3$ of $n = 10$ flips were heads, every arrangement of those 3 heads is equally likely (there are $\binom{10}{3} = 120$, each with conditional probability $1/120$), and that $1/120$ does not involve $p$. The same argument gives $\sum_i X_i$ as sufficient for the Poisson rate $\lambda$.

**Minimal sufficiency.** A sufficient statistic is **minimal sufficient** if it is a function of every other sufficient statistic, i.e. it compresses the data as far as possible without losing information. For the Bernoulli model, $\sum_i X_i$ is minimal sufficient.

**The Rao-Blackwell theorem.** Sufficiency is not just descriptive; it is a tool for *improving* estimators. Let $\hat{\theta}$ be any unbiased estimator of $\theta$, and let $T$ be sufficient. Define the **Rao-Blackwellized** estimator $\tilde{\theta} = \mathbb{E}[\hat{\theta} \mid T]$. Because $T$ is sufficient, this is a genuine statistic (it does not depend on the unknown $\theta$), and it is still unbiased ($\mathbb{E}[\tilde{\theta}] = \theta$ by the law of total expectation) with variance no larger ($\operatorname{Var}(\tilde{\theta}) \leq \operatorname{Var}(\hat{\theta})$ by the law of total variance). Conditioning on a sufficient statistic can only help, never hurt: it averages away the noise in the discarded part of the data.

**Connection to the UMVUE (Lehmann-Scheffé).** Rao-Blackwell says the best unbiased estimators must be functions of a sufficient statistic, so the hunt for the UMVUE can be restricted to functions of $T$. If $T$ is moreover **complete** (a technical condition ruling out any nonzero unbiased estimator of $0$ built from $T$), there is only *one* unbiased function of $T$, and the **Lehmann-Scheffé theorem** concludes it is *the* UMVUE. For the Bernoulli model this recovers the familiar result that $\bar{X} = T/n$ is the UMVUE for $p$, an estimator that also attains the Cramér-Rao bound and is therefore efficient in the finite-sample sense.

### Confidence Intervals

**Confidence interval (CI):** A range of values that is likely to contain the true population parameter. A 95% confidence interval means: if you repeated this process many times, about 95% of the intervals you construct would contain the true parameter.

For the mean (when $n$ is large or population is normal):

$$
\bar{x} \pm z^* \cdot \frac{s}{\sqrt{n}}
$$

where $z^*$ is the critical value from the standard normal distribution (1.96 for 95%, 2.576 for 99%).

![Confidence intervals from repeated sampling](./media/confidence-intervals.png)

**Common misinterpretation:** A 95% CI does NOT mean "there is a 95% probability the true mean is in this interval." The true mean is either in the interval or it is not. The 95% refers to the long-run success rate of the procedure.

**Example (large sample, z-interval):** A sample of 100 exam scores has $\bar{x} = 72$ and $s = 15$. Construct a 95% confidence interval for the population mean.

$$
72 \pm 1.96 \cdot \frac{15}{\sqrt{100}} = 72 \pm 1.96 \cdot 1.5 = 72 \pm 2.94
$$

The 95% CI is $(69.06, 74.94)$.

### t-Intervals

When the sample size is small and $\sigma$ is unknown (the typical situation), use the t-distribution instead of the z-distribution. The formula replaces $z^*$ with $t^*$:

$$
\bar{x} \pm t^* \cdot \frac{s}{\sqrt{n}}
$$

where $t^*$ is the critical value from the t-distribution with $\nu = n - 1$ degrees of freedom at the desired confidence level.

**How to find $t^*$:** Look up the value in a t-table using the row for $\nu = n - 1$ degrees of freedom and the column for the desired confidence level. For example, with $\nu = 14$ and 95% confidence, $t^* = 2.145$. Statistical software computes this directly.

Common $t^*$ values (95% confidence):

| df ($\nu$) | $t^*$ |
|---|---|
| 5 | 2.571 |
| 10 | 2.228 |
| 14 | 2.145 |
| 20 | 2.086 |
| 30 | 2.042 |
| $\infty$ | 1.960 |

Notice how $t^*$ decreases toward 1.960 (the z-value) as degrees of freedom increase.

**Worked example:** A sample of $n = 15$ light bulbs has a mean lifetime of $\bar{x} = 68$ hours and a sample standard deviation of $s = 12$ hours. Construct a 95% confidence interval for the population mean lifetime.

Step 1: Degrees of freedom: $\nu = 15 - 1 = 14$.

Step 2: Find $t^*$ for 95% confidence with 14 df: $t^* = 2.145$.

Step 3: Compute the margin of error:

$$
t^* \cdot \frac{s}{\sqrt{n}} = 2.145 \cdot \frac{12}{\sqrt{15}} = 2.145 \cdot 3.098 = 6.645
$$

Step 4: Construct the interval:

$$
68 \pm 6.645 = (61.355, 74.645)
$$

We are 95% confident that the population mean lifetime is between 61.4 and 74.6 hours. Notice this interval is wider than what a z-interval would give ($68 \pm 1.96 \cdot 3.098 = 68 \pm 6.07$), reflecting the extra uncertainty from using $s$ instead of $\sigma$ with a small sample.

### Confidence Interval for a Proportion

When estimating a population proportion $p$ (e.g., the fraction of voters who support a candidate), the point estimate is the sample proportion $\hat{p} = x/n$, where $x$ is the number of successes in $n$ trials.

The standard error of $\hat{p}$ is:

$$
SE(\hat{p}) = \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}
$$

The confidence interval uses the normal approximation (valid when $n\hat{p} \geq 10$ and $n(1-\hat{p}) \geq 10$):

$$
\hat{p} \pm z^* \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}
$$

**Worked example:** In a survey of 400 customers, 260 say they are satisfied with a product. Construct a 95% CI for the true proportion of satisfied customers.

$\hat{p} = 260/400 = 0.65$

Check conditions: $n\hat{p} = 260 \geq 10$ and $n(1-\hat{p}) = 140 \geq 10$. Both satisfied.

$$
SE = \sqrt{\frac{0.65 \times 0.35}{400}} = \sqrt{\frac{0.2275}{400}} = \sqrt{0.000569} = 0.0239
$$

$$
0.65 \pm 1.96 \times 0.0239 = 0.65 \pm 0.047
$$

The 95% CI is $(0.603, 0.697)$. We are 95% confident that the true proportion of satisfied customers is between 60.3% and 69.7%.

**Where it shows up in ML:** Confidence intervals for model performance metrics (accuracy, AUC) help you determine whether one model is genuinely better than another, or if the difference is within sampling noise.

### Prediction Intervals

A **prediction interval (PI)** is a range that is likely to contain a single new observation from the population. This is fundamentally different from a confidence interval.

**The key distinction:**

- **Confidence interval:** Estimates where the population mean lies. It answers: "Where does the average fall?"
- **Prediction interval:** Estimates where an individual new data point will fall. It answers: "Where will the next observation land?"

**Why the prediction interval is always wider:** A confidence interval only accounts for uncertainty in estimating the mean. A prediction interval must account for two sources of uncertainty: (1) the estimation uncertainty (we do not know the true mean exactly) and (2) the individual variability (even if we knew the mean perfectly, individual observations scatter around it). Because individual observations are more variable than averages, prediction intervals are always wider than confidence intervals.

**Formula for a prediction interval (one-sample):**

$$
\bar{x} \pm t^* \cdot s\sqrt{1 + \frac{1}{n}}
$$

Compare this to the confidence interval formula $\bar{x} \pm t^* \cdot s/\sqrt{n}$. The prediction interval has the extra "$1 +$" under the square root, which adds the individual observation variance $s^2$ to the estimation variance $s^2/n$.

**Worked example:** A factory produces bolts with a sample mean length of $\bar{x} = 10.2$ cm ($s = 0.4$ cm, $n = 25$). Construct a 95% prediction interval for the length of the next bolt produced.

Step 1: Degrees of freedom: $\nu = 25 - 1 = 24$, so $t^* = 2.064$.

Step 2: Compute the margin of error:

$$
t^* \cdot s\sqrt{1 + \frac{1}{n}} = 2.064 \times 0.4 \times \sqrt{1 + \frac{1}{25}} = 0.826 \times \sqrt{1.04} = 0.826 \times 1.020 = 0.842
$$

Step 3: Construct the interval:

$$
10.2 \pm 0.842 = (9.358, 11.042)
$$

For comparison, the 95% confidence interval for the mean is:

$$
10.2 \pm 2.064 \times \frac{0.4}{\sqrt{25}} = 10.2 \pm 0.165 = (10.035, 10.365)
$$

The prediction interval $(9.36, 11.04)$ is much wider than the confidence interval $(10.04, 10.37)$, because predicting where a single bolt will fall is far less precise than estimating the average bolt length.

![Confidence band vs. prediction band in regression](./media/ci-vs-pi.png)

**Where it shows up:** In regression, the prediction interval around a regression line is always wider than the confidence band. The confidence band tells you where the true regression line might be; the prediction band tells you where new data points might fall. Any time you use a model to make predictions about individual cases (not averages), you should report prediction intervals.

## Maximum Likelihood Estimation (MLE)

**Maximum Likelihood Estimation (MLE):** A method for estimating model parameters by finding the parameter values that make the observed data most probable.

**The core idea:** Given data $x_1, x_2, \ldots, x_n$, the **likelihood function** is the probability of observing that data as a function of the parameter $\theta$:

$$
L(\theta) = \prod_{i=1}^n P(x_i | \theta)
$$

The MLE is the value $\hat{\theta}$ that maximizes $L(\theta)$. In practice, we maximize the **log-likelihood** instead (because products become sums, which are easier to work with):

$$
\ell(\theta) = \sum_{i=1}^n \log P(x_i | \theta)
$$

### Worked Example: MLE for a Coin

![The likelihood function L of p equal to p to the seventh power times one minus p cubed for the coin example, a curve over p that rises to a single peak at p-hat equal to 0.7, the fraction of heads (7 out of 10), which is the maximum likelihood estimate](./media/stats-mle-likelihood.png)

You flip a coin 10 times and get 7 heads. What is the MLE of $p$ (the probability of heads)?

Each flip follows a Bernoulli distribution, so:

$$
L(p) = \prod_{i=1}^{10} p^{x_i}(1-p)^{1-x_i} = p^7(1-p)^3
$$

Take the log:

$$
\ell(p) = 7\log(p) + 3\log(1-p)
$$

Take the derivative and set it to zero:

$$
\frac{d\ell}{dp} = \frac{7}{p} - \frac{3}{1-p} = 0
$$

$$
7(1-p) = 3p \implies 7 = 10p \implies \hat{p} = 0.7
$$

The MLE is $\hat{p} = 0.7$, which is simply the fraction of heads. This makes intuitive sense: the value of $p$ that makes 7 out of 10 heads most likely is exactly 7/10.

### Worked Example: MLE for Normal Distribution

Given data $x_1, \ldots, x_n$ from a normal distribution, find the MLE for $\mu$ and $\sigma^2$.

The log-likelihood is:

$$
\ell(\mu, \sigma^2) = -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log(\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^n (x_i - \mu)^2
$$

Taking derivatives and setting to zero:

$$
\hat{\mu}_{MLE} = \frac{1}{n}\sum_{i=1}^n x_i = \bar{x}
$$

$$
\hat{\sigma}^2_{MLE} = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2
$$

The MLE for the mean is just the sample mean. The MLE for the variance uses $n$ (not $n-1$), which makes it slightly biased: it underestimates the true variance by a factor of $(n-1)/n$. This bias is negligible for large $n$ (for example, $(n-1)/n = 0.99$ when $n = 100$), but it is substantial for small $n$ (a 20% underestimate when $n = 5$). This bias shrinks toward zero as $n$ grows, so MLE is still consistent (converges to the true value with enough data). This is a known limitation of MLE.

**Where it shows up in ML:** MLE is the foundation of many ML training procedures. Logistic regression finds parameters by maximizing the log-likelihood of the observed labels. Training a neural network with cross-entropy loss is equivalent to MLE. Minimizing cross-entropy loss = maximizing log-likelihood.

**Connection to optimization:** Finding the MLE requires solving an optimization problem (maximizing the log-likelihood). For simple distributions, you can solve analytically (as above). For complex models, you use gradient ascent.

## Method of Moments Estimation

**Method of Moments (MoM):** An estimation technique that works by setting sample moments equal to their theoretical (population) counterparts and solving for the unknown parameters.

### The Idea

Every distribution has moments that depend on its parameters. The first population moment is the mean $E[X]$, the second raw moment is $E[X^2]$, and so on. The method of moments replaces each population moment with the corresponding sample moment and solves the resulting equations.

**First moment equation:**

$$
\bar{X} = E[X]
$$

**Second moment equation:**

$$
\frac{1}{n}\sum_{i=1}^n X_i^2 = E[X^2]
$$

If the distribution has $k$ unknown parameters, you set up $k$ moment equations (using the first $k$ moments) and solve the system.

### Worked Example: Uniform Distribution on $[0, \theta]$

Suppose you have data from a uniform distribution on $[0, \theta]$ and you want to estimate $\theta$.

For a uniform distribution on $[0, \theta]$:

$$
E[X] = \frac{\theta}{2}
$$

Set the first sample moment equal to the first population moment:

$$
\bar{X} = \frac{\theta}{2}
$$

Solve for $\theta$:

$$
\hat{\theta}_{MoM} = 2\bar{X}
$$

**Numerical example:** You observe 5 data points: 1.2, 0.8, 1.5, 0.3, 1.1. The sample mean is $\bar{X} = (1.2 + 0.8 + 1.5 + 0.3 + 1.1)/5 = 0.98$. The method of moments estimate is $\hat{\theta}_{MoM} = 2(0.98) = 1.96$.

Note that the largest observation is 1.5, and we are estimating $\theta = 1.96$, which is well above the data. This is reasonable: a uniform distribution on $[0, 1.96]$ would produce data in this range.

For comparison, the MLE for this problem is $\hat{\theta}_{MLE} = \max(X_1, \ldots, X_n) = 1.5$, which is always less than or equal to the true $\theta$. The MLE is biased downward here, while $2\bar{X}$ is unbiased for $\theta$ in this specific uniform$[0, \theta]$ model (this is a property of this particular setup, not a general virtue of MoM; MoM estimators are frequently biased). One catch of the MoM estimate: because $2\bar{X}$ ignores the largest observation, it can fall below $\max(x_i)$, which is impossible for the true $\theta$ (every observation must lie in $[0, \theta]$). In that case the "estimate" is logically inconsistent with the data, whereas the MLE never is.

### MoM vs. MLE

| | Method of Moments | MLE |
|---|---|---|
| Approach | Match sample moments to population moments | Maximize likelihood of observed data |
| Computation | Usually simple algebra | May require numerical optimization |
| Efficiency | Often less efficient (higher variance) | Achieves the lowest possible variance asymptotically |
| Uniqueness | Solution may not be unique | Under regularity conditions, unique |
| When to use | Quick estimates, starting points for iterative MLE, when likelihood is hard to compute | When you want the best possible estimate and can handle the computation |

**In practice:** MoM estimates are often used as starting values for iterative MLE algorithms. They are quick to compute and usually in the right neighborhood, which helps the optimizer converge.

## MAP Estimation

![Three curves over a parameter: a broad prior, a likelihood from the data, and the posterior proportional to prior times likelihood. The posterior's peak, the MAP estimate, sits between the prior's peak and the likelihood's peak (the MLE) and is narrower than both](./media/stats-map-estimation.png)

**Maximum a Posteriori (MAP) estimation:** Like MLE, but incorporates a prior belief about the parameters.

$$
\hat{\theta}_{MAP} = \arg\max_\theta P(\theta | \text{data}) = \arg\max_\theta \left[ \log P(\text{data} | \theta) + \log P(\theta) \right]
$$

By [Bayes' theorem](./probability#bayes-theorem): the posterior is proportional to the likelihood times the prior. MLE uses only the likelihood; MAP adds the prior.

**MLE vs. MAP:**

| | MLE | MAP |
|---|-----|-----|
| Formula | $\arg\max L(\theta)$ | $\arg\max L(\theta) \cdot P(\theta)$ |
| Prior | None (or equivalently, uniform prior) | Requires specifying a prior |
| With lots of data | MAP and MLE converge | MAP and MLE converge |
| With little data | Can overfit | Prior acts as regularization |

**Connection to regularization:** If you use a Gaussian prior $P(\theta) \sim N(0, \sigma^2)$, the MAP estimate is equivalent to L2 regularization (ridge regression). The prior penalizes large parameter values, pulling them toward zero. If you use a Laplace prior, you get L1 regularization (lasso). This is one of the deepest connections between Bayesian statistics and ML.

**Where it shows up in ML:** Ridge regression is MAP estimation with a Gaussian prior. Understanding this connection helps explain why regularization works: it is not just a trick to prevent overfitting, it is a principled way to incorporate prior beliefs about parameter values.

## Hypothesis Testing

**Hypothesis testing:** A formal procedure for deciding whether data provides enough evidence to reject a claim about a population.

### The Framework

1. **Null hypothesis ($H_0$):** The default claim, usually "no effect" or "no difference." Example: "the coin is fair" ($p = 0.5$).
2. **Alternative hypothesis ($H_1$ or $H_a$):** What you believe might be true instead. Example: "the coin is biased" ($p \neq 0.5$).
3. **Test statistic:** A number computed from data that measures how far the observed result is from what $H_0$ predicts.
4. **p-value:** The probability of observing a test statistic as extreme as (or more extreme than) what you actually saw, assuming $H_0$ is true.
5. **Decision:** If the p-value is below a threshold $\alpha$ (typically 0.05), reject $H_0$.

### Type I and Type II Errors

| | $H_0$ is true | $H_0$ is false |
|---|---|---|
| Reject $H_0$ | **Type I error** (false positive) | Correct (true positive) |
| Fail to reject $H_0$ | Correct (true negative) | **Type II error** (false negative) |

- $\alpha$ = probability of Type I error (significance level, usually 0.05)
- $\beta$ = probability of Type II error
- **Power** = $1 - \beta$ = probability of correctly detecting a real effect

**The tradeoff:** Lowering $\alpha$ (being more strict about rejecting $H_0$) reduces Type I errors but increases Type II errors. You catch fewer false alarms, but you also miss more real effects.

![Two overlapping bell curves: the null hypothesis H0 (no effect) on the left and the alternative H1 (real effect) on the right, separated by a vertical critical-value line. The red area under the H0 tail is alpha, the Type I error of 0.05; the purple area under H1 to the left of the line is beta, the Type II error of about 0.12; the green area under H1 to the right of the line is the power, one minus beta, about 0.88](./media/stats-type-i-ii-error.png)

The picture shows why the errors trade off. Sliding the critical value left shrinks $\beta$ (more power) but grows $\alpha$; sliding it right does the reverse. The only way to shrink both at once is to separate the two curves, which means a larger sample or a bigger effect.

### Example: Testing Whether a Coin Is Fair

You flip a coin 100 times and get 60 heads. Is the coin fair?

**Setup:** $H_0: p = 0.5$, $H_1: p \neq 0.5$

Under $H_0$, the number of heads follows a binomial distribution with $n = 100$, $p = 0.5$. By the CLT, this is approximately normal with mean $np = 50$ and standard deviation $\sqrt{np(1-p)} = 5$.

**Test statistic (Z-score):**

$$
Z = \frac{60 - 50}{5} = 2.0
$$

**p-value:** $P(|Z| \geq 2.0) \approx 0.046$

Since $0.046 < 0.05$, we reject $H_0$. The data provides statistically significant evidence that the coin is biased.

**Important caveat:** Statistical significance does not mean practical significance. With a large enough sample, you can detect arbitrarily tiny effects that are meaningless in practice. Always consider effect size alongside p-values.

### One-Tailed vs. Two-Tailed Tests

The alternative hypothesis determines whether you perform a one-tailed or two-tailed test, and this choice affects both the rejection region and the p-value.

**Two-tailed test:** $H_1: \mu \neq \mu_0$. You are looking for a difference in either direction. The rejection region is split between both tails of the distribution, with $\alpha/2$ in each tail. Use this when you have no prior reason to expect the effect to go in a particular direction.

**One-tailed test (right-tailed):** $H_1: \mu > \mu_0$. You are specifically testing whether the parameter is larger than the hypothesized value. The entire rejection region ($\alpha$) is in the right tail.

**One-tailed test (left-tailed):** $H_1: \mu < \mu_0$. You are specifically testing whether the parameter is smaller. The entire rejection region is in the left tail.

![Rejection regions for two-tailed and one-tailed tests](./media/hypothesis-test-regions.png)

**How p-values differ:** For the same test statistic, the one-tailed p-value is exactly half the two-tailed p-value, but only when the null distribution is symmetric and the observed effect falls in the hypothesized direction. If a two-tailed test gives $p = 0.08$ (not significant at $\alpha = 0.05$), a one-tailed test in the correct direction gives $p = 0.04$ (significant). If instead the effect points the wrong way (opposite the one-tailed alternative), the one-tailed p-value is $1 - \tfrac{1}{2}p_{\text{two}}$, which exceeds $0.5$. This is not a trick to get significance; it reflects a genuinely different question.

**When to use which:**

| Test type | When to use | Example |
|---|---|---|
| Two-tailed | No strong prior expectation of direction | "Does this drug change blood pressure?" |
| One-tailed | Strong prior reason to test one direction only | "Does this drug lower blood pressure?" (based on its mechanism of action) |

**The critical rule:** You must choose one-tailed vs. two-tailed before looking at the data. Choosing a one-tailed test after seeing which direction the data points is a form of p-hacking and inflates the false positive rate.

**Power advantage of one-tailed tests:** Because the entire $\alpha$ is concentrated in one tail, one-tailed tests have more power to detect effects in the hypothesized direction. The tradeoff is that they have zero power to detect effects in the opposite direction. If you are wrong about the direction, a one-tailed test will never reject $H_0$ no matter how strong the effect.

### Effect Size

**Effect size** measures the magnitude of a difference or relationship, independent of sample size. A p-value tells you whether an effect exists; the effect size tells you how big it is.

**Why it matters:** With a large enough sample, even a trivially small difference becomes statistically significant. A study of 100,000 people might find that a drug lowers blood pressure by 0.1 mmHg with $p < 0.001$. Statistically significant, but clinically meaningless. Conversely, a small study might fail to detect a large, important effect simply because $n$ was too small. Effect size separates "real" from "important."

**Cohen's d:** The most common effect size for comparing two group means. It expresses the difference in means in units of pooled standard deviation:

$$
d = \frac{\bar{x}_1 - \bar{x}_2}{s_p}
$$

where $s_p$ is the pooled standard deviation:

$$
s_p = \sqrt{\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}}
$$

**Cohen's guidelines for interpreting $d$:**

| $|d|$ | Interpretation |
|---|---|
| 0.2 | Small effect |
| 0.5 | Medium effect |
| 0.8 | Large effect |

A Cohen's $d$ of 0.5 means the two group means differ by half a standard deviation. These benchmarks are rough guidelines, not rigid thresholds. In some fields, $d = 0.2$ is a meaningful effect; in others, $d = 0.8$ is routine.

**$R^2$ as effect size in regression:** The coefficient of determination $R^2$ is itself an effect size: it tells you what proportion of the variance in the outcome is explained by the predictors. Cohen's guidelines: $R^2 = 0.02$ (small), $R^2 = 0.13$ (medium), $R^2 = 0.26$ (large). These are the $R^2$ values corresponding to Cohen's benchmarks for $f^2 = R^2 / (1 - R^2)$, namely $f^2 = 0.02, 0.15, 0.35$; Cohen defined the thresholds on $f^2$ rather than on $R^2$ directly.

**Best practice:** Always report effect size alongside p-values. A complete result looks like: "Students who used the new method scored significantly higher ($t(28) = 2.45$, $p = 0.021$, $d = 0.91$)." The p-value says the difference is unlikely to be zero; the effect size says the difference is large.

**Research connection:** Statistical testing is central to mechanistic interpretability. Causal ablation (removing specific attention heads and measuring performance degradation) is essentially a controlled experiment with a null hypothesis ("this head contributes nothing"). Effect sizes matter: a head whose removal causes +420% degradation is a strong causal finding, while +1.4% for P0 sink removal confirms they are safely removable. Multiple comparisons correction becomes important when testing hundreds of heads simultaneously.

### Power Analysis

**Statistical power** is the probability of correctly rejecting a false null hypothesis. In other words, if there really is an effect, power is the probability that your study will detect it.

$$
\text{Power} = 1 - \beta
$$

where $\beta$ is the probability of a Type II error (failing to detect a real effect).

**Why power matters:** An underpowered study is nearly useless. If your power is only 0.20, there is an 80% chance you will miss a real effect. You invest time and resources, collect data, and conclude "no significant effect," when the effect was there all along but your study was too small to see it.

**Four factors determine power (change any one, and power changes):**

1. **Sample size ($n$):** Larger samples give more power. This is the factor researchers most often control.
2. **Effect size:** Larger effects are easier to detect. A drug that cuts recovery time in half is easier to detect than one that cuts it by 5%.
3. **Significance level ($\alpha$):** A more lenient $\alpha$ (e.g., 0.10 instead of 0.05) gives more power but also more false positives.
4. **Variability ($\sigma$):** Less noisy data gives more power. You can sometimes reduce variability through better measurement or by using a within-subjects design.

**Sample size determination:** Before collecting data, you can use a power analysis to determine how many subjects you need. You specify:

- The desired power (typically 0.80 or 0.90)
- The significance level (typically $\alpha = 0.05$)
- The minimum effect size you want to detect

For a one-sample t-test with $\alpha = 0.05$, power $= 0.80$, and Cohen's $d = 0.5$ (medium effect), the required sample size is approximately $n = 34$. This comes from solving:

$$
n \approx \left(\frac{z_{1-\alpha/2} + z_{1-\beta}}{d}\right)^2 = \left(\frac{1.96 + 0.84}{0.5}\right)^2 = \left(\frac{2.80}{0.5}\right)^2 = 31.4
$$

(The exact calculation uses the noncentral t-distribution and gives $n \approx 34$.)

**Worked example:** A researcher wants to detect a mean difference of 5 points on a test where the standard deviation is 10 (so $d = 5/10 = 0.5$). Using $\alpha = 0.05$ and desired power of 0.80, the required sample size is approximately $n = 34$ per group for a two-sample test (about 64 total). If the researcher can only recruit 20 per group, the power drops to about 0.34, meaning there is only a 34% chance of detecting the effect even if it exists.

### One-Sample t-Test

**When to use:** You want to test whether a population mean equals a specific hypothesized value $\mu_0$, and the population standard deviation is unknown.

**Test statistic:**

$$
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
$$

This follows a t-distribution with $\nu = n - 1$ degrees of freedom under $H_0$.

**One-tailed vs. two-tailed tests:**

- **Two-tailed** ($H_1: \mu \neq \mu_0$): Reject if $|t| > t^*_{\alpha/2}$. Use when you want to detect a difference in either direction.
- **Left-tailed** ($H_1: \mu < \mu_0$): Reject if $t < -t^*_{\alpha}$. Use when you only care about detecting a decrease.
- **Right-tailed** ($H_1: \mu > \mu_0$): Reject if $t > t^*_{\alpha}$. Use when you only care about detecting an increase.

**Worked example:** A manufacturer claims that batteries last an average of 500 hours. A consumer group tests 20 batteries and finds $\bar{x} = 485$ hours with $s = 40$ hours. Test the claim at $\alpha = 0.05$.

$H_0: \mu = 500$ (the claim is correct)

$H_1: \mu < 500$ (the batteries last less than claimed; one-tailed)

$$
t = \frac{485 - 500}{40/\sqrt{20}} = \frac{-15}{8.944} = -1.677
$$

Degrees of freedom: $\nu = 19$. The critical value for a one-tailed test at $\alpha = 0.05$ with 19 df is $t^* = 1.729$.

Since $|{-1.677}| = 1.677 < 1.729$, we fail to reject $H_0$. There is not enough evidence at the 5% level to conclude that the batteries last less than 500 hours.

Note: the p-value is approximately 0.055, just above 0.05. This illustrates that the 0.05 threshold is a convention, not a law. The evidence against the claim is suggestive but not conclusive by the standard criterion.

### Two-Sample t-Test

**When to use:** You want to compare the means of two independent groups.

**Setup:** Group 1 has $n_1$ observations with mean $\bar{x}_1$ and standard deviation $s_1$. Group 2 has $n_2$ observations with mean $\bar{x}_2$ and standard deviation $s_2$.

$H_0: \mu_1 = \mu_2$ (no difference between groups)

$H_1: \mu_1 \neq \mu_2$ (the groups differ)

**Pooled t-test** (when you can assume equal variances $\sigma_1^2 = \sigma_2^2$):

$$
t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}
$$

where $s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}}$ is the pooled standard deviation, with $\nu = n_1 + n_2 - 2$ degrees of freedom.

**Welch's t-test** (when variances may be unequal; this is the safer default):

$$
t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}
$$

The degrees of freedom are approximated by the Welch-Satterthwaite formula:

$$
\nu \approx \frac{\left(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2/n_1)^2}{n_1-1} + \frac{(s_2^2/n_2)^2}{n_2-1}}
$$

**Worked example:** Do students who study with music score differently than those who study in silence?

| | Music ($n_1 = 25$) | Silence ($n_2 = 25$) |
|---|---|---|
| Mean | $\bar{x}_1 = 74$ | $\bar{x}_2 = 79$ |
| SD | $s_1 = 10$ | $s_2 = 12$ |

Using Welch's t-test:

$$
t = \frac{74 - 79}{\sqrt{\frac{100}{25} + \frac{144}{25}}} = \frac{-5}{\sqrt{4 + 5.76}} = \frac{-5}{\sqrt{9.76}} = \frac{-5}{3.124} = -1.601
$$

The Welch-Satterthwaite degrees of freedom: $\nu \approx 46.4$, so we use $\nu = 46$.

The critical value for a two-tailed test at $\alpha = 0.05$ with 46 df is approximately $t^* = 2.013$. Since $|{-1.601}| < 2.013$, we fail to reject $H_0$. There is not enough evidence to conclude that music affects test scores.

Effect size: $d = \frac{74 - 79}{s_p} = \frac{-5}{11.05} \approx -0.45$, a small-to-medium effect. A larger sample might detect this difference.

**Confidence interval for the difference of means.** The same ingredients give an interval for $\mu_1 - \mu_2$, which reports the plausible size of the difference rather than just testing whether it is zero:

$$
(\bar{x}_1 - \bar{x}_2) \pm t^* \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}
$$

(using the Welch standard error and degrees of freedom; the pooled version replaces the root with $s_p\sqrt{1/n_1 + 1/n_2}$). For the example above, $\bar{x}_1 - \bar{x}_2 = -5$, the standard error is $\sqrt{9.76} = 3.124$, and with $\nu = 46$, $t^* = 2.013$, so the 95% CI is $-5 \pm 2.013 \times 3.124 = -5 \pm 6.29 = (-11.29,\ 1.29)$. The interval contains $0$, which is the interval-based counterpart of failing to reject $H_0$.

### Paired t-Test

**When to use:** You have two measurements on the same subjects (before and after a treatment, left and right hand, two test versions taken by the same students). The key feature is that the observations are not independent; they come in natural pairs.

**Procedure:** Compute the difference $d_i = x_{i,\text{after}} - x_{i,\text{before}}$ for each pair. Then perform a one-sample t-test on the differences, testing $H_0: \mu_d = 0$ (the treatment has no effect).

$$
t = \frac{\bar{d}}{s_d/\sqrt{n}}
$$

where $\bar{d}$ is the mean of the differences, $s_d$ is the standard deviation of the differences, and $n$ is the number of pairs.

**Worked example:** A company tests whether a training program improves employee performance scores. Ten employees are tested before and after the program.

| Employee | Before | After | Difference ($d_i$) |
|---|---|---|---|
| 1 | 78 | 84 | 6 |
| 2 | 65 | 68 | 3 |
| 3 | 90 | 93 | 3 |
| 4 | 72 | 80 | 8 |
| 5 | 55 | 62 | 7 |
| 6 | 83 | 85 | 2 |
| 7 | 60 | 67 | 7 |
| 8 | 74 | 78 | 4 |
| 9 | 69 | 75 | 6 |
| 10 | 81 | 82 | 1 |

$\bar{d} = (6+3+3+8+7+2+7+4+6+1)/10 = 4.7$

$s_d = \sqrt{\frac{\sum(d_i - \bar{d})^2}{n-1}} = \sqrt{\frac{(1.3^2+1.7^2+1.7^2+3.3^2+2.3^2+2.7^2+2.3^2+0.7^2+1.3^2+3.7^2)}{9}}$

$$
= \sqrt{\frac{1.69+2.89+2.89+10.89+5.29+7.29+5.29+0.49+1.69+13.69}{9}} = \sqrt{\frac{52.10}{9}} = \sqrt{5.789} = 2.406
$$

$$
t = \frac{4.7}{2.406/\sqrt{10}} = \frac{4.7}{0.761} = 6.175
$$

With $\nu = 9$ degrees of freedom, the critical value for a one-tailed test ($H_1: \mu_d > 0$) at $\alpha = 0.05$ is $t^* = 1.833$. Since $6.175 \gg 1.833$, we reject $H_0$. The training program significantly improved scores ($t(9) = 6.18$, $p < 0.001$, $d = 4.7/2.406 = 1.95$, a very large effect).

### Tests for Proportions

So far the tests in this chapter (t-tests, ANOVA) have compared *means* of numeric variables. Often the quantity of interest is instead a *proportion*: the fraction of a population in some category, such as the share of users who click a button or the accuracy of a classifier (the proportion of predictions that are correct). We already built the [confidence interval for a single proportion](#confidence-interval-for-a-proportion) above; this section develops the corresponding *hypothesis tests* and the two-sample comparison.

The setup throughout is a **Bernoulli** experiment: $n$ independent trials, each a "success" (probability $p$) or "failure" (probability $1 - p$). We count $x$ successes and form $\hat{p} = x/n$. Because $\hat{p}$ is an average of $n$ independent 0/1 outcomes, the Central Limit Theorem makes its sampling distribution approximately normal for large $n$, which is what makes a $z$-test appropriate.

#### One-Proportion z-Test

**When to use:** You want to test whether a population proportion equals a specific hypothesized value $p_0$.

$$
H_0: p = p_0 \qquad H_1: p \neq p_0 \ \ (\text{or one-sided})
$$

**Test statistic:**

$$
z = \frac{\hat{p} - p_0}{\sqrt{\dfrac{p_0(1 - p_0)}{n}}}
$$

Under $H_0$ this is approximately standard normal. Note the denominator uses $p_0$, the *hypothesized* value, not the observed $\hat{p}$: a hypothesis test computes the null distribution, and *if $H_0$ were true* the true standard deviation of $\hat{p}$ is $\sqrt{p_0(1 - p_0)/n}$. (This differs from the confidence interval, which makes no such assumption and uses $\hat{p}$.) The normal approximation is trustworthy when $n p_0 \geq 10$ and $n(1 - p_0) \geq 10$.

**Worked example:** A coin is spun 200 times and lands heads 115 times. Test at $\alpha = 0.05$ whether it is fair. $H_0: p = 0.5$ versus $H_1: p \neq 0.5$ (two-tailed). Here $\hat{p} = 115/200 = 0.575$, and conditions hold ($n p_0 = 100 \geq 10$). The standard error under the null is

$$
SE = \sqrt{\frac{0.5 \times 0.5}{200}} = \sqrt{0.00125} = 0.03536,
$$

so

$$
z = \frac{0.575 - 0.5}{0.03536} = 2.121, \qquad p\text{-value} = 2 \times P(Z > 2.121) = 2 \times 0.0169 = 0.034.
$$

Since $0.034 < 0.05$, we reject $H_0$: there is significant evidence the coin is not fair.

#### Two-Proportion z-Test

**When to use:** You want to compare the proportions of two independent groups, for example the conversion rate of a control page versus a redesign.

$$
H_0: p_1 = p_2 \qquad H_1: p_1 \neq p_2
$$

Under $H_0$ the two groups share a common true proportion, best estimated by pooling both samples into the **pooled proportion**

$$
\hat{p} = \frac{x_1 + x_2}{n_1 + n_2}.
$$

**Test statistic:**

$$
z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1 - \hat{p})\left(\dfrac{1}{n_1} + \dfrac{1}{n_2}\right)}}
$$

The pooled $\hat{p}$ appears in the standard error (because the test assumes $H_0$ is true, and under $H_0$ there is a single proportion), while the numerator is the observed difference.

**Worked example (an A/B test):** A control checkout page converts $x_1 = 80$ of $n_1 = 1000$ visitors; a redesigned page converts $x_2 = 112$ of $n_2 = 1000$. Test at $\alpha = 0.05$. The sample proportions are $\hat{p}_1 = 0.080$ and $\hat{p}_2 = 0.112$; the pooled proportion is $\hat{p} = 192/2000 = 0.096$. Then

$$
SE = \sqrt{0.096 \times 0.904 \times \left(\tfrac{1}{1000} + \tfrac{1}{1000}\right)} = \sqrt{0.00017357} = 0.01317,
$$

$$
z = \frac{0.112 - 0.080}{0.01317} = 2.429, \qquad p\text{-value} = 2 \times P(Z > 2.429) = 0.015.
$$

Since $0.015 < 0.05$, we reject $H_0$: the redesign has a significantly different (higher) conversion rate.

#### Confidence Interval for a Difference of Proportions

The test asks "is there a difference?"; a confidence interval asks "how big?". For $p_1 - p_2$:

$$
(\hat{p}_1 - \hat{p}_2) \pm z^* \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}
$$

Note the interval uses the *separate, unpooled* proportions: a CI does not assume $p_1 = p_2$, so there is no shared value to pool toward. Using the A/B data above for $p_2 - p_1$, the point estimate is $0.112 - 0.080 = 0.032$ and

$$
SE = \sqrt{\frac{0.112 \times 0.888}{1000} + \frac{0.080 \times 0.920}{1000}} = \sqrt{0.00017306} = 0.01316,
$$

$$
0.032 \pm 1.96 \times 0.01316 = 0.032 \pm 0.0258 = (0.0062,\ 0.0578).
$$

We are 95% confident the redesign increases conversion by between about 0.6 and 5.8 percentage points. The interval excludes 0, consistent with rejecting $H_0$ above.

**Where it shows up in ML:** This is the statistical backbone of **A/B testing**. Conversion rates, click-through rates, and "fraction of sessions with an error" are all proportions, and deciding whether a new model or UI variant genuinely moved such a metric is a two-proportion comparison. The confidence interval is often more useful than the test alone, because shipping decisions depend on the *magnitude* of the lift. (For paired predictions on the *same* examples, McNemar's test is more powerful.)

### Chi-Squared Goodness-of-Fit Test

**When to use:** You want to test whether observed frequency counts match a set of expected frequencies. This is used for categorical data, not means.

**Test statistic:**

$$
\chi^2 = \sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i}
$$

where $O_i$ is the observed count in category $i$, $E_i$ is the expected count, and $k$ is the number of categories. Under $H_0$, this follows a chi-squared distribution with $\nu = k - 1$ degrees of freedom.

**Worked example:** You roll a die 120 times and want to test whether it is fair ($H_0$: each face has probability $1/6$).

| Face | Observed ($O_i$) | Expected ($E_i = 120/6 = 20$) | $(O_i - E_i)^2/E_i$ |
|---|---|---|---|
| 1 | 25 | 20 | 1.25 |
| 2 | 17 | 20 | 0.45 |
| 3 | 15 | 20 | 1.25 |
| 4 | 23 | 20 | 0.45 |
| 5 | 24 | 20 | 0.80 |
| 6 | 16 | 20 | 0.80 |

$$
\chi^2 = 1.25 + 0.45 + 1.25 + 0.45 + 0.80 + 0.80 = 5.00
$$

Degrees of freedom: $\nu = 6 - 1 = 5$. The critical value for $\alpha = 0.05$ with 5 df is $\chi^2_{0.05} = 11.07$.

Since $5.00 < 11.07$, we fail to reject $H_0$. The data is consistent with a fair die.

**Assumption:** Each expected count $E_i$ should be at least 5 for the chi-squared approximation to be reliable. If some expected counts are too small, combine categories.

### Chi-Squared Test of Independence

**When to use:** You have two categorical variables measured on the same subjects and want to test whether they are independent (unrelated) or associated.

**Setup:** Arrange the data in a contingency table with $r$ rows and $c$ columns. The expected count for cell $(i, j)$ under independence is:

$$
E_{ij} = \frac{R_i \cdot C_j}{n}
$$

where $R_i$ is the row total, $C_j$ is the column total, and $n$ is the grand total.

**Test statistic:**

$$
\chi^2 = \sum_{i=1}^r \sum_{j=1}^c \frac{(O_{ij} - E_{ij})^2}{E_{ij}}
$$

with $\nu = (r-1)(c-1)$ degrees of freedom.

**Worked example:** Is there an association between exercise frequency and stress level?

| | Low Stress | High Stress | Total |
|---|---|---|---|
| Exercises regularly | 40 | 10 | 50 |
| Does not exercise | 20 | 30 | 50 |
| Total | 60 | 40 | 100 |

Expected counts under independence:

$$
E_{11} = \frac{50 \times 60}{100} = 30, \quad E_{12} = \frac{50 \times 40}{100} = 20
$$

$$
E_{21} = \frac{50 \times 60}{100} = 30, \quad E_{22} = \frac{50 \times 40}{100} = 20
$$

$$
\chi^2 = \frac{(40-30)^2}{30} + \frac{(10-20)^2}{20} + \frac{(20-30)^2}{30} + \frac{(30-20)^2}{20}
$$

$$
= \frac{100}{30} + \frac{100}{20} + \frac{100}{30} + \frac{100}{20} = 3.33 + 5.00 + 3.33 + 5.00 = 16.67
$$

Degrees of freedom: $(2-1)(2-1) = 1$. The critical value at $\alpha = 0.05$ with 1 df is $\chi^2_{0.05} = 3.841$.

Since $16.67 \gg 3.841$, we reject $H_0$. There is a statistically significant association between exercise and stress level. The data suggests that regular exercisers tend to report lower stress.

**Where it shows up in ML:** A/B testing uses hypothesis testing to determine if a new feature improves a metric. Statistical tests help determine if one model is significantly better than another, or if the difference is just noise. Chi-squared tests are used in feature selection to test whether a categorical feature is associated with the target variable.

### Measures of Association: Odds Ratio and Relative Risk

The [chi-squared test of independence](#chi-squared-test-of-independence) answers a yes-or-no question: **are** two categorical variables associated? It does not say **how strongly**. For a $2 \times 2$ table (two groups, an outcome that either happens or does not), the **relative risk** and the **odds ratio** quantify the strength and direction of the association with a single number.

**The generic $2 \times 2$ table.** Label the cell counts:

| | Outcome present | Outcome absent |
|---|---|---|
| **Group 1** | $a$ | $b$ |
| **Group 2** | $c$ | $d$ |

**Relative risk (RR).** The *risk* (probability) of the outcome is $a/(a+b)$ for group 1 and $c/(c+d)$ for group 2. Their ratio is

$$
\text{RR} = \frac{a/(a+b)}{c/(c+d)}.
$$

An RR of $2$ means the outcome is twice as likely in group 1 as in group 2.

**Odds ratio (OR).** The *odds* of the outcome are $a/b$ in group 1 and $c/d$ in group 2. Their ratio is

$$
\text{OR} = \frac{a/b}{c/d} = \frac{ad}{bc}.
$$

The last form (the "cross-product ratio") is the quickest way to compute it by hand.

**Interpretation.** For both measures, a value of $1$ means **no association**; greater than $1$ indicates a positive association (group 1 has the higher risk or odds), and less than $1$ indicates a protective effect.

**When each is appropriate.** Relative risk is more directly interpretable ("twice as likely"), but it can only be estimated when the outcome probabilities are meaningful, as in a **cohort (prospective) study** that follows subjects forward from exposure to outcome. In a **case-control (retrospective) study**, subjects are selected *by their outcome*, so the sampling distorts $a+b$ and $c+d$ and the risks are not valid estimates. The odds ratio is invariant to this kind of sampling and can still be estimated, which is why case-control studies report odds ratios. When the outcome is rare, the odds ratio also closely approximates the relative risk.

**Worked example.** Reusing the exercise-and-stress data from the [chi-squared test of independence](#chi-squared-test-of-independence), treat "high stress" as the outcome:

| | High stress | Low stress | Total |
|---|---|---|---|
| **Does not exercise** (group 1) | 30 | 20 | 50 |
| **Exercises regularly** (group 2) | 10 | 40 | 50 |

So $a = 30$, $b = 20$, $c = 10$, $d = 40$. The risk of high stress is $30/50 = 0.60$ for non-exercisers and $10/50 = 0.20$ for exercisers, so

$$
\text{RR} = \frac{0.60}{0.20} = 3.0.
$$

The odds are $30/20 = 1.5$ and $10/40 = 0.25$, so

$$
\text{OR} = \frac{1.5}{0.25} = 6.0, \qquad \text{equivalently} \qquad \frac{ad}{bc} = \frac{30 \times 40}{20 \times 10} = 6.0.
$$

Both exceed $1$, quantifying the positive association the chi-squared test flagged: not exercising triples the *risk* and sextuples the *odds* of high stress. The odds ratio is larger than the relative risk here because the outcome is common (not rare), so the two are not expected to coincide.

### Goodness-of-Fit Beyond Chi-Squared

The chi-squared test checks whether observed counts match expected counts across categories. But sometimes you want to test whether continuous data follows a specific distribution (normal, exponential, uniform, etc.). Two tests handle this.

#### Kolmogorov-Smirnov (KS) Test

**What it does:** Compares the empirical cumulative distribution function (ECDF) of your data to the CDF of a theoretical distribution. The test statistic is the maximum vertical distance between the two CDFs:

$$
D = \max_x |F_n(x) - F_0(x)|
$$

where $F_n(x)$ is the empirical CDF (the proportion of data points $\leq x$) and $F_0(x)$ is the theoretical CDF.

**When to use:** Testing whether data follows any specified continuous distribution (not just normal). The KS test is general-purpose.

**Limitation:** The KS test is most sensitive to differences near the center of the distribution and less sensitive to differences in the tails. It also loses validity if you estimate the distribution parameters from the same data you are testing (use the Lilliefors variant in that case).

#### Shapiro-Wilk Test

**What it does:** Specifically tests whether data comes from a normal distribution. It is considered the most powerful normality test for small to moderate sample sizes ($n < 5000$).

**When to use:** Before using any statistical method that assumes normality (t-tests, ANOVA, linear regression). If the Shapiro-Wilk test rejects normality, consider using nonparametric alternatives or transforming the data.

**Interpretation:** $H_0$ is that the data is normally distributed. A small p-value (e.g., $p < 0.05$) means the data departs significantly from normality. A large p-value means the data is consistent with normality (but does not prove it).

#### Which Test to Use

| Test | Best for | Limitation |
|---|---|---|
| Chi-squared goodness-of-fit | Categorical data or binned counts | Requires choosing bins; loses information |
| Kolmogorov-Smirnov | Testing against any continuous distribution | Less sensitive in tails; must specify distribution in advance |
| Shapiro-Wilk | Testing normality specifically | Only tests normality; limited to moderate $n$ |

**Practical workflow:** Before running a t-test or ANOVA, check normality with a Q-Q plot (visual) and the Shapiro-Wilk test (formal). If normality is violated, either transform the data or switch to a nonparametric test.

## Inference for Variances

![Two panels of distribution shapes: chi-squared densities for degrees of freedom 1, 3, 5, and 10, right-skewed and becoming more symmetric as the degrees of freedom grow; and F-distribution densities for two degree-of-freedom pairs](./media/stats-chi-f-distributions.png)

So far our inference has been about *centers*: the mean of a population, the difference between two means. But sometimes the *spread itself* is the quantity of interest. A machine that fills cereal boxes might hit the correct average weight while varying so wildly that some boxes are nearly empty; the customer cares about the consistency, which is a statement about the variance. Two portfolios might share the same expected return while one is far more volatile. Quality control is very often a claim that a process variance stays below a tolerance. The tools for such claims are two new reference distributions: the chi-squared distribution (for a single variance) and the F-distribution (for comparing two variances).

### The Chi-Squared Distribution in This Context

Draw a sample of size $n$ from a normal population with variance $\sigma^2$ and compute the sample variance $s^2$. The key distributional fact is that

$$
\frac{(n-1)s^2}{\sigma^2} \sim \chi^2_{n-1},
$$

a [chi-squared distribution](./probability#chi-squared-distribution) with $n - 1$ degrees of freedom (one is used up estimating $\bar{x}$, exactly as with the $t$-distribution). Two features matter. First, it lives on $[0, \infty)$: a sum of squares is never negative. Second, it is **right-skewed**, so unlike the symmetric normal, a two-sided procedure needs **two separate critical values**, a lower one $\chi^2_{n-1,\,\alpha/2}$ and an upper one $\chi^2_{n-1,\,1-\alpha/2}$ (here $\chi^2_{k,\,p}$ is the $p$-quantile, the value below which a fraction $p$ of the distribution lies).

### The F-Distribution

To compare *two* variances we need a distribution for their ratio. The **F-distribution** is the distribution of a ratio of two independent chi-squared variables, each divided by its own degrees of freedom. If $U_1 \sim \chi^2_{d_1}$ and $U_2 \sim \chi^2_{d_2}$ are independent,

$$
F = \frac{U_1/d_1}{U_2/d_2} \sim F_{d_1,\,d_2},
$$

with **numerator degrees of freedom** $d_1$ and **denominator degrees of freedom** $d_2$ (the order matters; $F_{d_1,d_2}$ is generally not $F_{d_2,d_1}$). Because it is built from non-negative chi-squared variables, the F-distribution is supported on $[0, \infty)$ and is **right-skewed**. Its asymmetry gives a useful identity for lower-tail critical values:

$$
F_{d_1,\,d_2,\,1-\alpha} = \frac{1}{F_{d_2,\,d_1,\,\alpha}}.
$$

(For instance $F_{20,15,\,0.975} \approx 2.756$, so $1/2.756 \approx 0.363 = F_{15,20,\,0.025}$.) The F-distribution is also the reference distribution for the **ANOVA** F-statistic and the **overall F-test** in regression, both of which appear elsewhere on this page: in every case the idea is to form a ratio of two variance-like quantities and ask whether it is farther from $1$ than chance alone would explain.

### Confidence Interval for a Single Variance

Starting from the pivot $\dfrac{(n-1)s^2}{\sigma^2} \sim \chi^2_{n-1}$ and trapping it between the two critical values, then solving for $\sigma^2$ (inverting flips the inequalities, so the *upper* critical value lands in the *lower* endpoint), the $100(1-\alpha)\%$ confidence interval is

$$
\left(\frac{(n-1)s^2}{\chi^2_{n-1,\,1-\alpha/2}},\ \frac{(n-1)s^2}{\chi^2_{n-1,\,\alpha/2}}\right).
$$

**Worked example.** From $n = 20$ fills we compute $s^2 = 4.2$ (in mL$^2$) and want a 95% CI for $\sigma^2$, assuming normal fill volumes. With $\alpha/2 = 0.025$ and $n - 1 = 19$ df, $\chi^2_{19,\,0.025} = 8.907$ and $\chi^2_{19,\,0.975} = 32.852$, and $(n-1)s^2 = 19 \times 4.2 = 79.8$. So

$$
\text{lower} = \frac{79.8}{32.852} = 2.429, \qquad \text{upper} = \frac{79.8}{8.907} = 8.960,
$$

giving the 95% CI $(2.429,\ 8.960)$ mL$^2$. The interval is not centered on $s^2 = 4.2$; it stretches farther right, reflecting the chi-squared skew. For a CI on $\sigma$, take square roots: $(\sqrt{2.429},\ \sqrt{8.960}) = (1.559,\ 2.993)$ mL.

### F-Test for Equality of Two Variances

For two independent normal samples, to test $H_0: \sigma_1^2 = \sigma_2^2$ against $H_1: \sigma_1^2 \neq \sigma_2^2$, the population variances cancel under $H_0$ and

$$
F = \frac{s_1^2}{s_2^2} \sim F_{n_1 - 1,\,n_2 - 1}.
$$

Values near $1$ support $H_0$; values far from $1$ are evidence against it. Reject at level $\alpha$ if $F > F_{n_1-1,\,n_2-1,\,1-\alpha/2}$ or $F < F_{n_1-1,\,n_2-1,\,\alpha/2}$.

**Worked example.** Strategy 1 has $n_1 = 16$ daily returns with $s_1^2 = 42.5$; strategy 2 has $n_2 = 21$ with $s_2^2 = 10.2$. Test at $\alpha = 0.05$. Then

$$
F = \frac{42.5}{10.2} = 4.167,
$$

compared against $F_{15,\,20}$. The two-sided critical values are $F_{15,20,\,0.975} = 2.573$ and $F_{15,20,\,0.025} = 0.363$. Since $4.167 > 2.573$ (equivalently, a two-sided p-value of about $0.0036$), we reject $H_0$: the two strategies have significantly different return variances, with strategy 1 the more volatile.

**Caveat: the F-test is fragile.** The F-test for variances is notoriously **sensitive to departures from normality**: heavier tails or skew can make it reject far more often than its stated $\alpha$ even when the variances are equal. When normality is in doubt, prefer a robust alternative such as **Levene's test** (or its median-centered Brown-Forsythe variant).

## ANOVA (Analysis of Variance)

**ANOVA** (Analysis of Variance) is a method for comparing the means of three or more groups simultaneously. It tests whether at least one group mean differs from the others.

![ANOVA concept: different means vs. same means with different spreads](./media/anova-concept.png)

### Why Not Just Do Multiple t-Tests?

If you have three groups (A, B, C), you might consider doing three pairwise t-tests: A vs. B, A vs. C, B vs. C. The problem is the **multiple comparisons problem**.

Each test has a 5% chance of a Type I error ($\alpha = 0.05$). With three tests, the probability of at least one false positive is:

$$
1 - (1 - 0.05)^3 = 1 - 0.857 = 0.143
$$

That is a 14.3% chance of a false positive, not 5%. With 10 groups (45 pairwise comparisons), the probability rises to:

$$
1 - (0.95)^{45} \approx 0.90
$$

A 90% chance of at least one false positive. ANOVA solves this by performing a single test that controls the overall Type I error rate at $\alpha$.

### One-Way ANOVA

**Setup:** You have $k$ groups. Group $i$ has $n_i$ observations with mean $\bar{x}_i$. The grand mean (mean of all observations) is $\bar{x}$.

$H_0: \mu_1 = \mu_2 = \cdots = \mu_k$ (all group means are equal)

$H_1$: At least one group mean is different

**The key insight:** ANOVA decomposes the total variability in the data into two parts:

1. **Between-group variability (SSB):** How much the group means differ from the grand mean. If the groups truly have different means, this will be large.

$$
SSB = \sum_{i=1}^k n_i(\bar{x}_i - \bar{x})^2
$$

2. **Within-group variability (SSW):** How much individual observations vary within their own groups. This is the "background noise."

$$
SSW = \sum_{i=1}^k \sum_{j=1}^{n_i} (x_{ij} - \bar{x}_i)^2
$$

3. **Total variability:** $SST = SSB + SSW$

$$
SST = \sum_{i=1}^k \sum_{j=1}^{n_i} (x_{ij} - \bar{x})^2
$$

**Mean squares:** Divide each sum of squares by its degrees of freedom:

$$
MSB = \frac{SSB}{k - 1}, \quad MSW = \frac{SSW}{n - k}
$$

where $n = n_1 + n_2 + \cdots + n_k$ is the total number of observations.

**F-statistic:**

$$
F = \frac{MSB}{MSW}
$$

Under $H_0$, this follows an F-distribution with $k - 1$ and $n - k$ degrees of freedom. Large values of $F$ indicate that the between-group variability is much larger than the within-group variability, which is evidence against equal means.

**Worked example:** Three teaching methods are compared. Test scores:

| Method A | Method B | Method C |
|---|---|---|
| 85 | 90 | 70 |
| 78 | 88 | 75 |
| 82 | 92 | 68 |
| 80 | 85 | 72 |
| 75 | 95 | 65 |

Group means: $\bar{x}_A = 80$, $\bar{x}_B = 90$, $\bar{x}_C = 70$

Grand mean: $\bar{x} = (80 + 90 + 70)/3 = 80$ (since groups are equal-sized, this is the mean of the group means)

$SSB = 5(80-80)^2 + 5(90-80)^2 + 5(70-80)^2 = 0 + 500 + 500 = 1000$

$SSW$: For each group, sum the squared deviations from the group mean.

Method A: $(85-80)^2 + (78-80)^2 + (82-80)^2 + (80-80)^2 + (75-80)^2 = 25+4+4+0+25 = 58$

Method B: $(90-90)^2 + (88-90)^2 + (92-90)^2 + (85-90)^2 + (95-90)^2 = 0+4+4+25+25 = 58$

Method C: $(70-70)^2 + (75-70)^2 + (68-70)^2 + (72-70)^2 + (65-70)^2 = 0+25+4+4+25 = 58$

$SSW = 58 + 58 + 58 = 174$

| Source | SS | df | MS | F |
|---|---|---|---|---|
| Between | 1000 | $3-1=2$ | 500 | $500/14.5 = 34.48$ |
| Within | 174 | $15-3=12$ | 14.5 | |
| Total | 1174 | 14 | | |

The critical value for $F(2, 12)$ at $\alpha = 0.05$ is approximately 3.89. Since $34.48 \gg 3.89$, we reject $H_0$. At least one teaching method produces significantly different scores ($F(2,12) = 34.48$, $p < 0.001$).

### Post-Hoc Tests

ANOVA tells you that at least one group is different, but not which one(s). Post-hoc (after the fact) tests make pairwise comparisons while controlling the overall Type I error rate.

**Tukey's Honest Significant Difference (HSD):** Compares all pairs of group means. It uses a "studentized range" distribution to set the critical value so that the family-wise error rate stays at $\alpha$. This is the most common post-hoc test.

**Bonferroni correction:** Divide $\alpha$ by the number of comparisons. With 3 groups (3 comparisons), use $\alpha/3 = 0.0167$ for each pairwise test. Simple but conservative (it has less power than Tukey's HSD).

**In the example above:** A Tukey HSD would test each of the three pairwise gaps against the studentized-range critical value (using $MSW = 14.5$ and $n = 5$ per group). The $20$-point B-C gap ($90 - 70$) is large relative to that threshold and would be clearly significant. The two $10$-point gaps (B vs. A at $90 - 80$, and A vs. C at $80 - 70$) are borderline: with this within-group spread they sit near the critical value, so whether they reach significance depends on the exact cutoff rather than being a foregone conclusion.

### Two-Way ANOVA

One-way ANOVA compares group means across a single factor. Often each observation is classified by **two** factors at once, and we want to know how each factor, and their combination, influences the response. **Two-way ANOVA** handles this.

**Setup:** Factor $A$ has $a$ levels and factor $B$ has $b$ levels. Crossing them gives $a \times b$ cells. Write $\bar{x}_{i\cdot}$ for the mean at level $i$ of $A$, $\bar{x}_{\cdot j}$ for the mean at level $j$ of $B$, $\bar{x}_{ij}$ for the cell mean, and $\bar{x}$ for the grand mean.

**Partitioning the variability.** Just as one-way ANOVA split $SST$ into between and within, two-way ANOVA splits it into four pieces:

$$
SST = SS_A + SS_B + SS_{AB} + SSE
$$

- **Main effect of $A$** ($SS_A$): how the $A$-level means deviate from the grand mean, ignoring $B$.
- **Main effect of $B$** ($SS_B$): likewise for $B$.
- **Interaction** ($SS_{AB}$): variability in the cell means left over after both main effects are accounted for, capturing the extent to which the combined effect of $A$ and $B$ is not simply the sum of their separate effects.
- **Error** ($SSE$): variability of observations around their own cell mean, the background noise (analogous to $SSW$).

**Three F-tests.** Divide each sum of squares by its degrees of freedom and form an F-ratio against $MSE = SSE / (n - ab)$:

$$
F_A = \frac{MS_A}{MSE}, \qquad F_B = \frac{MS_B}{MSE}, \qquad F_{AB} = \frac{MS_{AB}}{MSE}
$$

where $MS_A = SS_A/(a-1)$, $MS_B = SS_B/(b-1)$, and $MS_{AB} = SS_{AB}/[(a-1)(b-1)]$. Each $F$ is compared to an F-distribution with the corresponding numerator df and $n - ab$ denominator df.

**What an interaction means.** An interaction is present when the effect of one factor **depends on the level of the other**. Cross a treatment factor (drug vs. placebo) with an age factor (young vs. old) and record mean recovery scores:

| | Young | Old |
|---|---|---|
| **Placebo** | 50 | 50 |
| **Drug** | 70 | 52 |

For **young** patients the drug raises the score by $70 - 50 = 20$; for **old** patients by only $52 - 50 = 2$. The drug's effect is not a single number; it *depends on age*, so there is an interaction. (If the drug added $20$ points in both groups, the cell means would be $50, 50, 70, 70$ and there would be no interaction, only two main effects.) On an **interaction plot** (cell means with age on the horizontal axis, one line per treatment), no interaction shows as **parallel** lines; here the placebo line is flat while the drug line falls steeply, so the non-parallel lines are the visual signature of the interaction, and a significant $F_{AB}$ is its formal counterpart.

### Multiple Testing Correction

**The problem:** When you perform many hypothesis tests simultaneously, the probability of at least one false positive grows rapidly, even if every null hypothesis is true. If you run 20 independent tests at $\alpha = 0.05$, the expected number of false positives is $20 \times 0.05 = 1$. The probability of at least one false positive is:

$$
1 - (1 - 0.05)^{20} = 1 - 0.358 = 0.642
$$

That is a 64.2% chance of at least one spurious "discovery." This is the multiple comparisons problem, and it shows up whenever you test many hypotheses at once.

#### Bonferroni Correction

The simplest fix: divide your significance level by the number of tests.

$$
\alpha_{\text{adjusted}} = \frac{\alpha}{m}
$$

where $m$ is the number of tests. If you are running 20 tests at $\alpha = 0.05$, use $\alpha_{\text{adjusted}} = 0.05/20 = 0.0025$ for each individual test.

**Why it works:** By the union bound, the probability of at least one false positive is at most $m \times \alpha_{\text{adjusted}} = m \times (\alpha/m) = \alpha$. This controls the **family-wise error rate (FWER)**: the probability of making even one Type I error across all tests.

**The tradeoff:** Bonferroni is conservative. As $m$ grows, the adjusted threshold becomes very stringent, and you lose power to detect real effects. With 1000 tests, you need $p < 0.00005$ to declare significance, which means you will miss many genuine effects.

#### False Discovery Rate (Benjamini-Hochberg)

A less conservative alternative that controls the **false discovery rate (FDR)**: the expected proportion of false positives among all rejected hypotheses.

**The procedure (Benjamini-Hochberg):**

1. Compute p-values for all $m$ tests
2. Sort the p-values from smallest to largest: $p_{(1)} \leq p_{(2)} \leq \cdots \leq p_{(m)}$
3. Find the largest $k$ such that $p_{(k)} \leq \frac{k}{m} \cdot \alpha$
4. Reject all hypotheses with $p_{(i)} \leq p_{(k)}$ (i.e., reject the $k$ smallest p-values)

**Example:** You run $m = 5$ tests and get sorted p-values: 0.001, 0.013, 0.029, 0.052, 0.210. With $\alpha = 0.05$:

| Rank ($k$) | $p_{(k)}$ | $\frac{k}{m} \cdot \alpha$ | $p_{(k)} \leq \frac{k}{m} \cdot \alpha$? |
|---|---|---|---|
| 1 | 0.001 | 0.010 | Yes |
| 2 | 0.013 | 0.020 | Yes |
| 3 | 0.029 | 0.030 | Yes |
| 4 | 0.052 | 0.040 | No |
| 5 | 0.210 | 0.050 | No |

The largest $k$ where the condition holds is $k = 3$. Reject the first 3 hypotheses. With Bonferroni ($\alpha/5 = 0.01$), you would only reject the first one.

#### Bonferroni vs. Benjamini-Hochberg

| | Bonferroni | Benjamini-Hochberg |
|---|---|---|
| Controls | Family-wise error rate (FWER) | False discovery rate (FDR) |
| Strictness | Very conservative | Less conservative |
| Power | Lower (misses more real effects) | Higher (finds more real effects) |
| Best for | High-stakes decisions (one false positive is costly) | Exploratory analysis (some false positives are tolerable) |

**Where it shows up:** Genome-wide association studies test millions of genetic variants simultaneously. A/B testing platforms run many experiments at once. In mechanistic interpretability, testing whether each of hundreds of attention heads contributes to a task requires multiple testing correction. Benjamini-Hochberg is the standard in genomics and increasingly in ML research; Bonferroni is used when the cost of a false positive is very high.

## Nonparametric Tests

Standard tests like the t-test and ANOVA assume that data is normally distributed (or that samples are large enough for the CLT to apply). When these assumptions fail, **nonparametric tests** provide alternatives that make fewer assumptions about the underlying distribution. They work with ranks instead of raw values, which makes them robust to outliers and applicable to ordinal data.

### When to Use Nonparametric Tests

- The data is clearly non-normal (skewed, heavy-tailed, or multimodal) and the sample is too small for the CLT
- The data is ordinal (ranked categories like "poor, fair, good, excellent")
- There are extreme outliers that would distort parametric tests
- The sample size is very small (e.g., $n < 15$) and you cannot verify normality

**The tradeoff:** Nonparametric tests are more broadly applicable, but they have less statistical power than their parametric counterparts when the parametric assumptions actually hold. If your data is truly normal, a t-test will detect effects that a nonparametric test might miss.

### Sign Test

The **sign test** is the simplest nonparametric test of all. It applies to a single sample (testing whether the population median equals some value $m_0$) or to paired data, and it assumes almost nothing: not normality, not even symmetry.

**How it works.** For paired data, compute the difference within each pair (for a one-sample median test, subtract $m_0$ from each observation). Then:

1. **Discard** any difference that is exactly zero, reducing the sample to $n$ nonzero differences.
2. **Count** the number of positive differences, $S$.
3. Under $H_0$, each nonzero difference is positive or negative with probability $\tfrac{1}{2}$, so $S \sim \text{Binomial}(n, \tfrac{1}{2})$.
4. The p-value is a binomial tail probability; for a two-sided test, take the more extreme of $S$ and $n - S$ and double the corresponding tail.

**Relationship to the Wilcoxon signed-rank test.** The sign test uses only the **sign** of each difference, throwing away its magnitude. The [Wilcoxon signed-rank test](#wilcoxon-signed-rank-test) additionally ranks the differences by size, so it uses more information and is **more powerful** when the differences are symmetric. The sign test's advantage is that it needs no symmetry assumption and works even when only the direction of each difference is known.

**Worked example.** Ten judges each compare two recipes; recipe X is preferred by $8$, recipe Y by $2$, no ties, so $n = 10$ and $S = 8$. Test $H_0$ (equal split) two-sided. Under $H_0$, $S \sim \text{Binomial}(10, 0.5)$, and

$$
P(S \ge 8) = \frac{\binom{10}{8} + \binom{10}{9} + \binom{10}{10}}{2^{10}} = \frac{45 + 10 + 1}{1024} = \frac{56}{1024} \approx 0.0547.
$$

The two-sided p-value is $2 \times 0.0547 \approx 0.109$. Since $0.109 > 0.05$, we do **not** reject $H_0$: with only ten judges, an $8$-to-$2$ split is not strong enough to conclude a genuine preference (a $9$-to-$1$ split would have crossed the threshold).

### Wilcoxon Signed-Rank Test

**Nonparametric alternative to:** the paired t-test.

**When to use:** You have paired observations (before/after, matched subjects) and you want to test whether the median difference is zero, without assuming the differences are normally distributed.

**How it works:** Compute the differences $d_i$ for each pair. Ignore any zero differences. Rank the absolute values of the remaining differences from smallest to largest. Assign each rank the sign of its corresponding difference. Sum the positive ranks ($W^+$) and negative ranks ($W^-$) separately. Under $H_0$, positive and negative ranks should be roughly balanced. A very large or very small $W^+$ indicates a systematic shift.

### Mann-Whitney U Test

**Nonparametric alternative to:** the two-sample t-test.

**When to use:** You want to compare two independent groups but cannot assume normality. Also called the Wilcoxon rank-sum test.

**How it works:** Combine all observations from both groups and rank them from smallest to largest. Sum the ranks for each group separately. If the two groups come from the same distribution, their rank sums should be proportional to their sample sizes. A disproportionate rank sum indicates that one group tends to have larger values.

**Interpretation:** The Mann-Whitney U test is often described as testing whether one group tends to produce larger values than the other. More precisely, it tests whether a randomly selected observation from Group 1 is equally likely to be larger or smaller than a randomly selected observation from Group 2.

### Kruskal-Wallis Test

**Nonparametric alternative to:** one-way ANOVA.

**When to use:** You want to compare three or more independent groups but cannot assume normality.

**How it works:** Rank all observations across all groups, then compare the mean ranks of each group. The test statistic is based on the variance of the group rank means. Like ANOVA, a significant result tells you that at least one group differs; it does not tell you which one(s). Follow up with pairwise Mann-Whitney tests (with multiple testing correction) to identify specific differences.

### Spearman Rank Correlation

**Nonparametric alternative to:** Pearson correlation.

**When to use:** You want to measure the association between two variables but the relationship may not be linear, or the data contains outliers, or the variables are ordinal.

**How it works:** Replace each variable's values with their ranks, then compute the Pearson correlation on the ranks. Spearman's $\rho$ (rho) measures the strength of any monotonic relationship (not just linear). If one variable consistently increases as the other increases (even if not linearly), Spearman's $\rho$ will be close to $\pm 1$.

$$
\rho_s = 1 - \frac{6\sum d_i^2}{n(n^2 - 1)}
$$

where $d_i$ is the difference between the ranks of paired observations, and $n$ is the number of pairs. This shortcut formula assumes no tied ranks.

### Summary of Nonparametric Alternatives

| Parametric test | Nonparametric alternative | Data type |
|---|---|---|
| Paired t-test | Wilcoxon signed-rank | Paired, continuous or ordinal |
| Two-sample t-test | Mann-Whitney U | Two independent groups |
| One-way ANOVA | Kruskal-Wallis | Three+ independent groups |
| Pearson correlation | Spearman rank correlation | Two continuous or ordinal variables |

