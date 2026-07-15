---
title: "Probability"
prerequisites: ["set-theory", "calculus"]
enables: ["statistics", "information-theory", "bayesian-inference"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Set Theory](./set-theory) · [Calculus](./calculus)
> **Leads to:** [Statistics](./statistics) · [Information Theory](./information-theory) · [Bayesian Inference](./bayesian-inference)


Probability is the mathematical framework for reasoning about uncertainty. It quantifies how likely events are, and provides the foundation for statistics, machine learning, and decision-making under uncertainty. This page builds directly on [combinatorics](./combination) (counting how many ways things can happen) and extends it to measuring how likely they are.

## What Is Probability?

**Probability:** A number between 0 and 1 that measures the likelihood of an event occurring. A probability of 0 means the event is impossible; a probability of 1 means the event is certain.

There are two major interpretations of what probability "means":

**Frequentist interpretation:** Probability is the long-run frequency of an event. If you flip a fair coin infinitely many times, heads comes up 50% of the time, so $P(\text{heads}) = 0.5$ (read "the probability of heads"). This interpretation only makes sense for repeatable experiments.

**Bayesian interpretation:** Probability is a degree of belief or confidence. You can say "there's a 70% chance it rains tomorrow" even though tomorrow only happens once. This interpretation is more flexible and is the foundation of Bayesian inference in ML.

Both interpretations use the same math. The difference is philosophical, but it matters when you get to statistics and ML, where Bayesian methods (priors, posteriors) and frequentist methods (p-values, confidence intervals) take different approaches to the same problems.

## Sample Spaces, Events, and Outcomes

**Experiment:** Any process that produces an uncertain result. Rolling a die, drawing a card, measuring a patient's blood pressure.

**Outcome:** A single possible result of an experiment. Rolling a 3 is one outcome. Rolling a 5 is another.

**Sample space ($S$ or $\Omega$):** The set of all possible outcomes. For a single die roll:

$$
S = \{1, 2, 3, 4, 5, 6\}
$$

For flipping two coins:

$$
S = \{HH, HT, TH, TT\}
$$

**Event:** A subset of the sample space. "Rolling an even number" is the event $E = \{2, 4, 6\}$. An event occurs if the actual outcome is in the subset.

For equally likely outcomes, the probability of an event is:

$$
P(E) = \frac{|E|}{|S|} = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}
$$

This is where [combinatorics](./combination) connects directly: counting $|E|$ and $|S|$ often requires permutations and combinations.

**Example:** What is the probability of drawing 2 aces from a standard 52-card deck (drawing 2 cards)?

- Total ways to draw 2 cards: $\binom{52}{2} = 1326$ (read "52 choose 2")
- Ways to draw 2 aces: $\binom{4}{2} = 6$
- $P(\text{2 aces}) = \frac{6}{1326} = \frac{1}{221} \approx 0.0045$

## Axioms of Probability (Kolmogorov)

All of probability theory is built on three axioms, proposed by Andrey Kolmogorov in 1933. Every rule, theorem, and formula in probability can be derived from these.

**Axiom 1 (Non-negativity):** For any event $A$, $P(A) \geq 0$. Probabilities are never negative.

**Axiom 2 (Normalization):** $P(S) = 1$. Something in the sample space must happen.

**Axiom 3 (Additivity):** For mutually exclusive events $A$ and $B$ (they cannot both occur):

$$
P(A \cup B) = P(A) + P(B)
$$

Here $A \cup B$ (read "A union B," or "A or B") is the event that $A$ or $B$ occurs.

From these axioms, you can derive everything else:

- $P(\emptyset) = 0$ (the impossible event has probability 0)
- $P(A^c) = 1 - P(A)$ (the complement rule; $A^c$ means "not $A$")
- For any two events: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (inclusion-exclusion), where $A \cap B$ (read "A intersect B," or "A and B") is the event that both $A$ and $B$ occur

The complement rule is especially useful. If it is hard to compute $P(A)$ directly, compute $P(A^c)$ and subtract from 1.

**Example:** What is the probability of rolling at least one 6 in four dice rolls?

- $P(\text{at least one 6}) = 1 - P(\text{no 6 in four rolls})$
- $P(\text{no 6 on one roll}) = 5/6$
- $P(\text{no 6 in four rolls}) = (5/6)^4 = 625/1296 \approx 0.482$
- $P(\text{at least one 6}) = 1 - 0.482 = 0.518$

## Conditional Probability and Independence

### Conditional Probability

**Conditional probability:** The probability of event $A$ given that event $B$ has occurred:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
$$

Read $P(A|B)$ as "the probability of A given B" (the bar $|$ is read "given").

The intuition: once you know $B$ happened, the sample space shrinks to just the outcomes in $B$. You then ask what fraction of those outcomes also belong to $A$.

**Example:** A bag has 3 red and 2 blue marbles. You draw one marble (without replacement), and it is red. What is the probability the second marble is also red?

- After drawing one red marble, the bag has 2 red and 2 blue marbles (4 total)
- $P(\text{2nd red} | \text{1st red}) = 2/4 = 1/2$

### Independence

**Independent events:** Two events $A$ and $B$ are independent if their joint probability factors into the product of their individual probabilities:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

This is the fundamental definition, and it requires no positivity assumption. When $P(B) > 0$, dividing both sides by $P(B)$ gives the intuitive consequence

$$
P(A|B) = P(A),
$$

which says that knowing $B$ occurred gives no information about $A$.

Coin flips are independent: knowing the first flip was heads tells you nothing about the second flip. Drawing cards without replacement is not independent: removing a card changes the remaining deck.

**Conditional independence:** Events $A$ and $B$ are **conditionally independent given $C$** if:

$$
P(A \cap B | C) = P(A|C) \cdot P(B|C)
$$

This is different from regular independence. Two events can be dependent overall but independent once you know $C$. For example, two symptoms (cough, fever) might be correlated in the general population, but given that a patient has the flu, knowing they have a cough tells you nothing extra about whether they have a fever.

**Where it shows up in ML:** Conditional independence (not regular independence) is the core assumption of the Naive Bayes classifier. It assumes all features are independent given the class label, which simplifies computation enormously. The assumption is almost always wrong in practice, but the classifier still works surprisingly well.

## Bayes' Theorem

Bayes' theorem is arguably the most important single formula in probability for machine learning. It tells you how to update your beliefs when you see new evidence.

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

The most famous consequence is the **base-rate fallacy**. Set a disease's prevalence, a test's sensitivity, and its false-positive rate below, and see via natural frequencies why even a highly accurate positive test can still mean a low probability of disease when the condition is rare.

<iframe src="/static/interactive/prob-bayes-visualizer.html" width="100%" height="660" style="border:none;"></iframe>

**What each piece means:**

- $P(A|B)$: **Posterior.** The probability of $A$ after observing $B$. This is what you want to know.
- $P(B|A)$: **Likelihood.** How likely you would see evidence $B$ if $A$ were true.
- $P(A)$: **Prior.** Your belief about $A$ before seeing any evidence.
- $P(B)$: **Evidence (marginal likelihood).** The total probability of observing $B$ under all possible hypotheses. This acts as a normalizing constant.

![Bayes' theorem: prior, likelihood, and posterior](./media/bayes-theorem-visualization.png)

### Worked Example: Medical Testing

A disease affects 1% of the population. A test for the disease has 95% sensitivity (correctly flags 95% of sick people) and 90% specificity (correctly clears 90% of healthy people). If you test positive, what is the probability you actually have the disease?

**Define events:**

- $D$: you have the disease. $P(D) = 0.01$
- $D^c$: you don't have the disease. $P(D^c) = 0.99$
- $+$: you test positive

**Known:**

- $P(+|D) = 0.95$ (sensitivity)
- $P(+|D^c) = 0.10$ (false positive rate = 1 - specificity)

**Apply Bayes' theorem:**

$$
P(D|+) = \frac{P(+|D) \cdot P(D)}{P(+)}
$$

First, compute $P(+)$ using the law of total probability (see next section):

$$
P(+) = P(+|D) \cdot P(D) + P(+|D^c) \cdot P(D^c) = (0.95)(0.01) + (0.10)(0.99) = 0.0095 + 0.099 = 0.1085
$$

$$
P(D|+) = \frac{(0.95)(0.01)}{0.1085} = \frac{0.0095}{0.1085} \approx 0.0876
$$

**Result:** Even with a positive test, there is only about an 8.8% chance you have the disease. This is counter-intuitive but makes sense: the disease is rare (1%), so most positive tests come from the 99% of healthy people who occasionally test false-positive.

**Why this matters for ML:** Bayesian reasoning is the foundation of Bayesian inference, which powers methods like Bayesian neural networks, Gaussian processes, and spam filtering. The key insight is that prior probability matters. A model that ignores base rates will make bad predictions.

## Law of Total Probability

**Law of total probability:** If events $B_1, B_2, \ldots, B_n$ form a partition of the sample space (they are mutually exclusive and exhaustive), then for any event $A$:

$$
P(A) = \sum_{i=1}^{n} P(A|B_i) \cdot P(B_i)
$$

This lets you compute the probability of $A$ by breaking it into cases. We used this above to compute $P(+)$ by splitting into "has disease" and "doesn't have disease."

**Intuition:** If you do not know $P(A)$ directly, consider all the ways $A$ can happen. In each scenario $B_i$, the probability of $A$ is $P(A|B_i)$, and you weight each scenario by how likely it is, $P(B_i)$.

## Random Variables

**Random variable:** A function that assigns a numerical value to each outcome in the sample space. Instead of talking about events like "rolling a 6," random variables let us do algebra with outcomes.

**Notation:** Capital letters ($X$, $Y$) denote random variables. Lowercase letters ($x$, $y$) denote specific values they can take.

### Discrete Random Variables

A **discrete random variable** takes on a countable number of values (often integers).

**Probability mass function (PMF):** $P(X = x)$ gives the probability that $X$ takes the value $x$. The PMF must satisfy:

- $P(X = x) \geq 0$ for all $x$
- $\sum_x P(X = x) = 1$

**Example:** Let $X$ be the number of heads in 3 coin flips. Then $X$ can take values $\{0, 1, 2, 3\}$:

| $x$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X=x)$ | $1/8$ | $3/8$ | $3/8$ | $1/8$ |

### Continuous Random Variables

A **continuous random variable** takes on values in a continuous range (like all real numbers, or all positive reals).

**Probability density function (PDF):** $f(x)$ describes the relative likelihood of $X$ near the value $x$. For continuous variables, the probability of any single exact value is zero. Instead, probabilities are areas under the curve:

$$
P(a \leq X \leq b) = \int_a^b f(x) \, dx
$$

The PDF must satisfy:

- $f(x) \geq 0$ for all $x$
- $\int_{-\infty}^{\infty} f(x) \, dx = 1$

**Cumulative distribution function (CDF):** $F(x) = P(X \leq x)$. The CDF works for both discrete and continuous variables and gives the probability that $X$ is at most $x$.

## Expected Value, Variance, and Standard Deviation

### Expected Value

**Expected value (mean):** The long-run average of a random variable, weighted by probabilities.

It is written $E[X]$ (read "the expected value of X," or "the expectation of X").

For discrete $X$:

$$
E[X] = \sum_x x \cdot P(X = x)
$$

For continuous $X$:

$$
E[X] = \int_{-\infty}^{\infty} x \cdot f(x) \, dx
$$

**Intuition:** If you repeated the experiment many times and averaged all the outcomes, you would get close to $E[X]$.

**Properties of expected value:**

- $E[aX + b] = aE[X] + b$ (linearity)
- $E[X + Y] = E[X] + E[Y]$ (always true, even if $X$ and $Y$ are not independent)
- $E[XY] = E[X] \cdot E[Y]$ (only if $X$ and $Y$ are independent)

**Example:** Expected value of a fair die roll:

$$
E[X] = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6} = \frac{21}{6} = 3.5
$$

You can never roll 3.5, but on average, that is what you get.

### Variance and Standard Deviation

**Variance:** Measures how spread out a random variable's values are around the mean. It is written $\text{Var}(X)$ (read "the variance of X"):

$$
\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2
$$

The second form ($E[X^2] - (E[X])^2$) is usually easier to compute. It says: the variance is the "average of the squares minus the square of the average."

**Standard deviation:** $\sigma = \sqrt{\text{Var}(X)}$. It has the same units as $X$, making it easier to interpret than variance.

**Properties of variance:**

- $\text{Var}(aX + b) = a^2 \text{Var}(X)$ (adding a constant does not change spread; scaling by $a$ scales variance by $a^2$)
- $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ (only if $X$ and $Y$ are independent)

### Skewness and Kurtosis

Variance (the second moment) measures spread, but it says nothing about the shape of a distribution. The third and fourth standardized moments capture two important shape properties: asymmetry and tail heaviness.

**Skewness:** The third standardized moment measures how asymmetric a distribution is:

$$
\gamma_1 = E\left[\left(\frac{X - \mu}{\sigma}\right)^3\right]
$$

- **Positive skewness ($\gamma_1 > 0$):** The right tail is longer. The mean is pulled to the right of the median. Examples: income distributions, waiting times.
- **Negative skewness ($\gamma_1 < 0$):** The left tail is longer. The mean is pulled to the left of the median. Examples: exam scores on an easy test (most students score high, a few score very low).
- **Zero skewness ($\gamma_1 = 0$):** The distribution is symmetric about the mean. Examples: normal distribution, uniform distribution.

![Skewness: left-skewed, symmetric, and right-skewed distributions](./media/skewness-examples.png)

Why the cube? Squaring (as in variance) makes everything positive, so deviations above and below the mean cancel out. Cubing preserves the sign: values far above the mean contribute positive terms, values far below contribute negative terms. If the right tail is heavier, the positive terms dominate and skewness is positive.

**Kurtosis:** The fourth standardized moment measures tail heaviness:

$$
\gamma_2 = E\left[\left(\frac{X - \mu}{\sigma}\right)^4\right]
$$

The normal distribution has kurtosis 3. To make comparisons easier, we often use **excess kurtosis:**

$$
\text{excess kurtosis} = \gamma_2 - 3
$$

- **Excess kurtosis > 0 (leptokurtic):** Heavier tails than the normal. More probability in extreme values. Examples: t-distribution, financial returns.
- **Excess kurtosis = 0 (mesokurtic):** Same tail weight as the normal.
- **Excess kurtosis < 0 (platykurtic):** Lighter tails than the normal. Fewer extreme values. Examples: uniform distribution.

**Where it shows up:** Financial modeling relies heavily on kurtosis because stock returns have "fat tails" (high kurtosis), meaning extreme events (crashes, spikes) happen more often than a normal distribution predicts. Ignoring kurtosis leads to underestimating risk.

## Common Discrete Distributions

![Comparison of common probability distributions](./media/common-distributions.png)

Explore the standard distributions interactively below: switch between discrete and continuous, pick a distribution, and drag its parameters to reshape the PMF or PDF, with the mean, variance, and standard deviation updating live.

<iframe src="/static/interactive/prob-distribution-explorer.html" width="100%" height="660" style="border:none;"></iframe>

### Bernoulli Distribution

**Bernoulli distribution:** Models a single trial with two outcomes: success (1) or failure (0).

$$
P(X = x) = p^x (1-p)^{1-x}, \quad x \in \{0, 1\}
$$

This compact formula just says two things: $P(X = 1) = p$ (success) and $P(X = 0) = 1 - p$ (failure). The exponent notation packs both cases into one expression.

- $E[X] = p$
- $\text{Var}(X) = p(1-p)$

**Example:** Flipping a coin where $P(\text{heads}) = 0.6$ is Bernoulli with $p = 0.6$.

**Where it shows up in ML:** Binary classification outputs. A logistic regression model outputs a probability $p$, and the actual label follows a Bernoulli distribution with that probability.

### Binomial Distribution

**Binomial distribution:** The number of successes in $n$ independent Bernoulli trials.

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

Notice the $\binom{n}{k}$ term: this is the combination formula from [combinatorics](./combination). It counts how many ways to choose which $k$ of the $n$ trials are successes.

- $E[X] = np$
- $\text{Var}(X) = np(1-p)$

**Example:** If you flip a fair coin 10 times, what is the probability of getting exactly 7 heads?

$$
P(X = 7) = \binom{10}{7} (0.5)^7 (0.5)^3 = 120 \cdot \frac{1}{1024} \approx 0.117
$$

### Poisson Distribution

**Poisson distribution:** Models the number of events occurring in a fixed interval of time or space, when events happen independently at a constant average rate $\lambda$.

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

- $E[X] = \lambda$
- $\text{Var}(X) = \lambda$ (the mean and variance are equal, which is a distinctive property)

**Example:** If a website gets an average of 5 visitors per minute, the probability of getting exactly 3 visitors in a given minute:

$$
P(X = 3) = \frac{5^3 e^{-5}}{3!} = \frac{125 \cdot 0.00674}{6} \approx 0.140
$$

**Where it shows up:** Modeling rare events: server failures, customer arrivals, mutations in DNA.

### Geometric Distribution

**Geometric distribution:** The number of trials needed to get the first success.

$$
P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \ldots
$$

- $E[X] = 1/p$
- $\text{Var}(X) = (1-p)/p^2$

**Example:** If the probability of finding a bug in a code review is 0.3, the expected number of reviews until finding a bug is $1/0.3 \approx 3.33$ reviews.

**Memoryless property:** The geometric distribution is the only discrete distribution with the memoryless property:

$$
P(X > s + t \mid X > s) = P(X > t)
$$

This means that if you have already failed $s$ times, the probability of needing more than $t$ additional trials is the same as if you were starting fresh. The number of failures so far is irrelevant. This is the discrete analog of the exponential distribution's memoryless property (see below).

### Negative Binomial Distribution

**Negative binomial distribution:** The number of trials needed to achieve the $r$th success, where each trial independently succeeds with probability $p$.

$$
P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, r+2, \ldots
$$

The $\binom{k-1}{r-1}$ factor counts the number of ways to arrange $r - 1$ successes among the first $k - 1$ trials (the $k$th trial must be a success, giving the $r$th success).

- $E[X] = r/p$
- $\text{Var}(X) = r(1-p)/p^2$

**A note on parameterization:** This page counts the total number of *trials* $X$ (which is at least $r$), giving $E[X] = r/p$. Some texts instead count only the number of *failures* before the $r$th success, a variable $Y = X - r$ with $E[Y] = r(1-p)/p$. Both conventions are correct; if you are cross-checking a formula against another source, confirm which quantity it is counting before concluding there is an error.

The geometric distribution is the special case $r = 1$: waiting for the first success.

**Worked example:** A basketball player makes free throws with probability $p = 0.8$. What is the probability that her 5th made free throw occurs on her 7th attempt?

Here $r = 5$, $p = 0.8$, $k = 7$:

$$
P(X = 7) = \binom{6}{4} (0.8)^5 (0.2)^2 = 15 \cdot 0.32768 \cdot 0.04 \approx 0.1966
$$

The expected number of attempts to make 5 free throws is $E[X] = 5/0.8 = 6.25$.

### Hypergeometric Distribution

**Hypergeometric distribution:** Models the number of successes when sampling without replacement from a finite population. Use this instead of the binomial when the population is small and sampling without replacement matters.

**Setup:** A population of $N$ items contains $K$ successes and $N - K$ failures. You draw $n$ items without replacement. Let $X$ be the number of successes drawn.

$$
P(X = k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}
$$

where $\max(0, n - N + K) \leq k \leq \min(n, K)$.

- $E[X] = n \cdot K/N$
- $\text{Var}(X) = n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}$

The factor $\frac{N-n}{N-1}$ is called the **finite population correction**. As $N \to \infty$ (population becomes very large relative to the sample), this factor approaches 1 and the hypergeometric distribution approaches the binomial with $p = K/N$.

**Worked example (quality control):** A shipment contains 100 items, of which 10 are defective. An inspector randomly selects 5 items. What is the probability that exactly 2 are defective?

Here $N = 100$, $K = 10$, $n = 5$, $k = 2$:

$$
P(X = 2) = \frac{\binom{10}{2}\binom{90}{3}}{\binom{100}{5}} = \frac{45 \cdot 117480}{75287520} \approx 0.0702
$$

**Worked example (drawing cards):** From a standard 52-card deck, you draw 5 cards. What is the probability of getting exactly 2 hearts?

Here $N = 52$, $K = 13$ (hearts), $n = 5$, $k = 2$:

$$
P(X = 2) = \frac{\binom{13}{2}\binom{39}{3}}{\binom{52}{5}} = \frac{78 \cdot 9139}{2598960} \approx 0.2743
$$

### Discrete Uniform Distribution

**Discrete uniform distribution:** Each of $n$ equally likely outcomes has the same probability. This is the simplest discrete distribution.

$$
P(X = k) = \frac{1}{n}, \quad k = 1, 2, \ldots, n
$$

- $E[X] = \frac{n+1}{2}$
- $\text{Var}(X) = \frac{n^2 - 1}{12}$

**Example (fair die):** A fair six-sided die follows a discrete uniform distribution with $n = 6$. Each face has probability $1/6$. The expected value is $(6+1)/2 = 3.5$ and the variance is $(36 - 1)/12 = 35/12 \approx 2.917$.

### Poisson Approximation to the Binomial

When $n$ is large and $p$ is small, the binomial distribution $\text{Binomial}(n, p)$ is well approximated by the Poisson distribution with $\lambda = np$:

$$
\binom{n}{k} p^k (1-p)^{n-k} \approx \frac{(np)^k e^{-np}}{k!}
$$

**Rule of thumb:** The approximation works well when $n \geq 20$ and $p \leq 0.05$, or more generally when $n \geq 100$ and $np \leq 10$.

**Example:** In a batch of 1000 items, each has a 0.002 probability of being defective. What is the probability of finding exactly 3 defective items?

Using the Poisson approximation with $\lambda = np = 1000 \cdot 0.002 = 2$:

$$
P(X = 3) \approx \frac{2^3 e^{-2}}{3!} = \frac{8 \cdot 0.1353}{6} \approx 0.1804
$$

### Poisson Process

The Poisson and exponential distributions are not just two separate distributions; they describe the same random phenomenon from two different angles. The **Poisson process** is the unifying framework.

**Definition:** A Poisson process with rate $\lambda > 0$ is a model for events occurring randomly and independently over time, with three properties:

1. **Independent increments:** The number of events in non-overlapping time intervals are independent.
2. **Stationary increments:** The probability distribution of the number of events in an interval depends only on the length of the interval, not on when it starts.
3. **No simultaneous events:** The probability of two or more events occurring at exactly the same instant is zero.

![Poisson process: random event arrivals on a timeline](./media/poisson-process.png)

**The connection between Poisson and Exponential:**

- **Number of events in time $t$:** If events follow a Poisson process with rate $\lambda$, the count of events in any interval of length $t$ follows $\text{Poisson}(\lambda t)$.
- **Time between events:** The waiting time between consecutive events follows $\text{Exponential}(\lambda)$.

These are two views of the same process. The Poisson distribution counts events; the exponential distribution measures the gaps between them.

**Why the exponential is memoryless:** The memoryless property ($P(X > s + t \mid X > s) = P(X > t)$) follows directly from the independent increments property of the Poisson process. Since future events do not depend on past events, the time you have already waited is irrelevant.

**Worked example:** Customers arrive at a coffee shop at an average rate of 10 per hour ($\lambda = 10$).

- The number of customers in a 30-minute window follows $\text{Poisson}(10 \times 0.5) = \text{Poisson}(5)$.
- The time between consecutive arrivals follows $\text{Exponential}(10)$, with a mean of $1/10$ hours = 6 minutes.
- The probability of no customers in a 15-minute window: $P(X = 0) = e^{-10 \times 0.25} = e^{-2.5} \approx 0.082$.

**Where it shows up:** Server request modeling, queueing theory, radioactive decay, insurance claim arrivals, and the theoretical foundation of continuous-time Markov chains.

## Common Continuous Distributions

### Uniform Distribution

**Uniform distribution:** All values in an interval $[a, b]$ are equally likely.

$$
f(x) = \frac{1}{b - a}, \quad a \leq x \leq b
$$

- $E[X] = \frac{a + b}{2}$
- $\text{Var}(X) = \frac{(b-a)^2}{12}$

**Where it shows up in ML:** Random initialization of neural network weights (before more sophisticated methods were developed), random number generation, and as a non-informative prior in Bayesian statistics.

### Exponential Distribution

**Exponential distribution:** Models the time between events in a Poisson process. If events happen at rate $\lambda$, the time between consecutive events follows an exponential distribution.

$$
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0
$$

- $E[X] = 1/\lambda$
- $\text{Var}(X) = 1/\lambda^2$

**Memoryless property:** $P(X > s + t \mid X > s) = P(X > t)$. The probability of waiting an additional time $t$ does not depend on how long you have already waited. This is unique to the exponential distribution among continuous distributions.

**CDF:** The cumulative distribution function of the exponential distribution has a simple closed form:

$$
F(x) = 1 - e^{-\lambda x}, \quad x \geq 0
$$

This is useful for computing probabilities directly. For example, the probability that you wait at most $t$ time units is $P(X \leq t) = 1 - e^{-\lambda t}$.

### Normal (Gaussian) Distribution

The **normal distribution** is the most important distribution in all of statistics and machine learning.

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)
$$

- $\mu$: the mean (center of the bell curve)
- $\sigma$: the standard deviation (controls width)
- $E[X] = \mu$
- $\text{Var}(X) = \sigma^2$

Notation: $X \sim N(\mu, \sigma^2)$ means "$X$ follows a normal distribution with mean $\mu$ and variance $\sigma^2$." The symbol $\sim$ is read "is distributed as" or "follows."

### The 68-95-99.7 Rule

![Normal distribution with 68-95-99.7 rule](./media/normal-distribution-68-95-99.png)

For a normal distribution:

- **68%** of values fall within 1 standard deviation of the mean: $\mu \pm \sigma$
- **95%** of values fall within 2 standard deviations: $\mu \pm 2\sigma$
- **99.7%** of values fall within 3 standard deviations: $\mu \pm 3\sigma$

This means values more than 3 standard deviations from the mean are extremely rare (0.3% of the time).

### Standard Normal and Z-Scores

The **standard normal distribution** is the normal distribution with $\mu = 0$ and $\sigma = 1$, written $Z \sim N(0, 1)$.

Any normal variable $X \sim N(\mu, \sigma^2)$ can be converted to a standard normal using a **Z-score:**

$$
Z = \frac{X - \mu}{\sigma}
$$

**Intuition:** The Z-score tells you how many standard deviations a value is from the mean. A Z-score of 2 means the value is 2 standard deviations above the mean. A Z-score of -1.5 means 1.5 standard deviations below the mean.

**Example:** Exam scores are normally distributed with $\mu = 75$ and $\sigma = 10$. What fraction of students score above 90?

$$
Z = \frac{90 - 75}{10} = 1.5
$$

From standard normal tables (or software): $P(Z > 1.5) \approx 0.0668$. About 6.7% of students score above 90.

### Why the Normal Distribution Appears Everywhere

Three reasons the Gaussian is ubiquitous:

1. **Central Limit Theorem** (see below): averages of many random variables tend toward normal, regardless of the original distribution.
2. **Maximum entropy:** Among all distributions with a given mean and variance, the normal distribution has the maximum entropy (maximum uncertainty). If you only know the mean and variance of something, the normal is the "least biased" assumption.
3. **Mathematical convenience:** The normal distribution is closed under addition (sum of normals is normal) and has nice analytical properties for calculus.

**Where it shows up in ML:** Gaussian noise assumptions in linear regression, Gaussian processes, variational autoencoders, the reparameterization trick, weight initialization, and batch normalization.

### Gamma Distribution

**Gamma distribution:** A flexible family of distributions for modeling positive-valued continuous random variables, particularly waiting times and durations.

The PDF is:

$$
f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x}, \quad x > 0
$$

where $\alpha > 0$ is the **shape** parameter, $\beta > 0$ is the **rate** parameter, and $\Gamma(\alpha)$ is the gamma function (a generalization of the factorial: $\Gamma(n) = (n-1)!$ for positive integers).

- $E[X] = \alpha / \beta$
- $\text{Var}(X) = \alpha / \beta^2$

**Special case:** When $\alpha = 1$, the gamma distribution reduces to the exponential distribution with rate $\beta$. So $\text{Gamma}(1, \lambda) = \text{Exponential}(\lambda)$.

**Sum property:** If $X_1, X_2, \ldots, X_n$ are independent $\text{Exponential}(\beta)$ random variables, then their sum follows a $\text{Gamma}(n, \beta)$ distribution. This makes intuitive sense: if each $X_i$ is the waiting time between events in a Poisson process, then $\sum X_i$ is the total waiting time until the $n$th event.

**Where it shows up:** In Bayesian statistics, the gamma distribution is the conjugate prior for the rate parameter of a Poisson distribution. It also appears in modeling insurance claims, rainfall amounts, and network packet inter-arrival times.

### Beta Distribution

**Beta distribution:** A distribution on the interval $[0, 1]$, making it natural for modeling probabilities, proportions, and rates.

The PDF is:

$$
f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}, \quad 0 \leq x \leq 1
$$

where $B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$ is the beta function (a normalizing constant), and $\alpha > 0$, $\beta > 0$ are shape parameters.

- $E[X] = \frac{\alpha}{\alpha + \beta}$
- $\text{Var}(X) = \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}$

The shape parameters control the distribution's behavior:

- $\alpha = \beta = 1$: the beta distribution reduces to $\text{Uniform}(0, 1)$
- $\alpha = \beta > 1$: symmetric and bell-shaped, centered at $1/2$
- $\alpha > \beta$: skewed toward 1
- $\alpha < \beta$: skewed toward 0

**Where it shows up:** In Bayesian statistics, the beta distribution is the conjugate prior for the probability parameter of a Bernoulli or binomial distribution. If your prior on a coin's bias is $\text{Beta}(\alpha, \beta)$ and you observe $h$ heads and $t$ tails, the posterior is $\text{Beta}(\alpha + h, \beta + t)$. This makes Bayesian updating with binary data extremely clean.

### Chi-Squared Distribution

**Chi-squared distribution:** If $Z_1, Z_2, \ldots, Z_k$ are independent standard normal random variables ($Z_i \sim N(0,1)$), then the sum of their squares follows a chi-squared distribution with $k$ degrees of freedom:

$$
X = \sum_{i=1}^{k} Z_i^2 \sim \chi^2_k
$$

- $E[X] = k$
- $\text{Var}(X) = 2k$

The chi-squared distribution is a special case of the gamma distribution: $\chi^2_k = \text{Gamma}(k/2, 1/2)$.

**Where it shows up:** The chi-squared distribution is central to hypothesis testing in statistics:

- **Goodness-of-fit tests:** Testing whether observed frequencies match expected frequencies (Pearson's chi-squared test)
- **Independence tests:** Testing whether two categorical variables are independent (chi-squared test of independence)
- **Confidence intervals for variance:** When sampling from a normal population, the sample variance scaled appropriately follows a chi-squared distribution

## Joint Distributions, Covariance, and Correlation

### Joint Distributions

**Joint distribution:** Describes the probability of two (or more) random variables simultaneously. For discrete variables, the **joint PMF** is $P(X = x, Y = y)$. For continuous variables, the **joint PDF** is $f(x, y)$.

**Marginal distribution:** The distribution of one variable, ignoring the other. Obtained by summing (discrete) or integrating (continuous) over the other variable:

$$
P(X = x) = \sum_y P(X = x, Y = y)
$$

**Example:** Suppose $X$ is the number of hours studied and $Y$ is the exam result (pass/fail). The joint distribution might be:

| | $Y = \text{fail}$ | $Y = \text{pass}$ |
|---|---|---|
| $X = \text{low}$ | 0.20 | 0.10 |
| $X = \text{high}$ | 0.05 | 0.65 |

The marginal distribution of $Y$: $P(Y = \text{fail}) = 0.20 + 0.05 = 0.25$ and $P(Y = \text{pass}) = 0.10 + 0.65 = 0.75$. You get the marginal by summing across the row.

### Conditional Distributions

**Conditional distribution:** The distribution of one random variable given a specific value of another.

For discrete random variables:

$$
P(Y = y \mid X = x) = \frac{P(X = x, Y = y)}{P(X = x)}
$$

For continuous random variables:

$$
f_{Y|X}(y \mid x) = \frac{f_{X,Y}(x, y)}{f_X(x)}
$$

**Worked example:** Using the study hours / exam result table above, what is the probability of passing given high study hours?

$$
P(Y = \text{pass} \mid X = \text{high}) = \frac{P(X = \text{high}, Y = \text{pass})}{P(X = \text{high})} = \frac{0.65}{0.05 + 0.65} = \frac{0.65}{0.70} \approx 0.929
$$

Compare this to the probability of passing given low study hours:

$$
P(Y = \text{pass} \mid X = \text{low}) = \frac{0.10}{0.20 + 0.10} = \frac{0.10}{0.30} \approx 0.333
$$

The conditional distribution quantifies how the probability of passing changes depending on study effort.

### Independence of Random Variables

**Independent random variables:** $X$ and $Y$ are independent if and only if their joint distribution factors into the product of their marginals:

$$
f_{X,Y}(x, y) = f_X(x) \cdot f_Y(y) \quad \text{for all } x, y
$$

For discrete variables, this means $P(X = x, Y = y) = P(X = x) \cdot P(Y = y)$ for every pair $(x, y)$.

**Checking independence with a table:** To check whether $X$ and $Y$ are independent in the study/exam table, verify that each cell equals the product of its row and column marginals. For example, $P(X = \text{low}) = 0.30$ and $P(Y = \text{fail}) = 0.25$, so independence would require $P(X = \text{low}, Y = \text{fail}) = 0.30 \times 0.25 = 0.075$. The actual value is 0.20, so $X$ and $Y$ are not independent. Study hours and exam outcome are related.

### Law of Total Expectation

**Law of total expectation (tower property):** For any two random variables $X$ and $Y$:

$$
E[Y] = E[E[Y \mid X]]
$$

**Intuition:** You can compute the overall average of $Y$ by first computing the conditional average of $Y$ for each value of $X$, and then averaging those conditional averages, weighted by how likely each value of $X$ is.

**Example:** Suppose that the number of customers entering a store in a day is $X \sim \text{Poisson}(100)$, and each customer independently spends an amount $Y_i$ with $E[Y_i] = 50$ dollars. The total revenue is $T = \sum_{i=1}^{X} Y_i$. By the law of total expectation:

$$
E[T] = E[E[T \mid X]] = E[X \cdot 50] = 50 \cdot E[X] = 50 \cdot 100 = 5000
$$

### Law of Total Variance

The law of total expectation decomposes the mean of $Y$ by conditioning on $X$. There is an analogous decomposition for variance:

$$
\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X])
$$

**In words:** Total variance = average within-group variance + between-group variance.

The first term, $E[\text{Var}(Y \mid X)]$, measures how much $Y$ varies within each group defined by $X$, averaged across groups. The second term, $\text{Var}(E[Y \mid X])$, measures how much the group means themselves vary.

**Worked example (exam scores):** Suppose students are divided into classes. Let $Y$ be a student's exam score and $X$ be which class the student is in.

- $\text{Var}(Y \mid X)$ is the variance of scores within a single class. Some classes have more spread than others.
- $E[\text{Var}(Y \mid X)]$ is the average within-class variance, weighted by class size.
- $E[Y \mid X]$ is the average score for class $X$. Different classes have different averages.
- $\text{Var}(E[Y \mid X])$ is the variance of the class averages.

The total variance in scores across all students comes from two sources: students within the same class performing differently (within-group), and different classes having different average performance (between-group).

**Where it shows up:** This is exactly the decomposition used in **ANOVA** (Analysis of Variance), which tests whether group means differ significantly. It also appears in hierarchical Bayesian models, where variance is decomposed across levels of a hierarchy.

### Covariance

**Covariance:** Measures how two random variables move together:

$$
\text{Cov}(X, Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - E[X] \cdot E[Y]
$$

- $\text{Cov}(X, Y) > 0$: when $X$ is above its mean, $Y$ tends to be above its mean (they move together)
- $\text{Cov}(X, Y) < 0$: they tend to move in opposite directions
- $\text{Cov}(X, Y) = 0$: no linear relationship (but there could still be a nonlinear one)

If $X$ and $Y$ are independent, then $\text{Cov}(X, Y) = 0$. The converse is not always true: zero covariance does not guarantee independence.

**Bilinearity of covariance:** Covariance is linear in each argument:

$$
\text{Cov}(aX + bY, Z) = a\,\text{Cov}(X, Z) + b\,\text{Cov}(Y, Z)
$$

This property is extremely useful for computing the variance of linear combinations. For example, $\text{Cov}(X, X) = \text{Var}(X)$, and $\text{Cov}(X + Y, X + Y)$ expands to $\text{Var}(X) + 2\text{Cov}(X,Y) + \text{Var}(Y)$.

### Variance of Sums (General Case)

For any two random variables $X$ and $Y$ (not necessarily independent):

$$
\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X, Y)
$$

This reduces to $\text{Var}(X) + \text{Var}(Y)$ only when $X$ and $Y$ are uncorrelated (i.e., $\text{Cov}(X, Y) = 0$). Independence implies uncorrelatedness, but not the reverse.

More generally, for $n$ random variables:

$$
\text{Var}\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \text{Var}(X_i) + 2\sum_{i < j} \text{Cov}(X_i, X_j)
$$

### Correlation

**Correlation (Pearson correlation coefficient):** A normalized version of covariance that always falls between -1 and 1:

$$
\rho(X, Y) = \frac{\text{Cov}(X, Y)}{\sigma_X \cdot \sigma_Y}
$$

- $\rho = 1$: perfect positive linear relationship
- $\rho = -1$: perfect negative linear relationship
- $\rho = 0$: no linear relationship

**Where it shows up in ML:** Feature correlation matters for multicollinearity in regression. The covariance matrix is central to PCA (principal component analysis), which finds the directions of maximum variance in data.

### Multivariate Normal Distribution

The **multivariate normal distribution** generalizes the normal distribution to vectors of random variables. A random vector $\mathbf{X} = (X_1, X_2, \ldots, X_k)^T$ follows a multivariate normal distribution, written $\mathbf{X} \sim N(\boldsymbol{\mu}, \boldsymbol{\Sigma})$, where:

- $\boldsymbol{\mu}$ is the **mean vector**: $\boldsymbol{\mu} = (E[X_1], E[X_2], \ldots, E[X_k])^T$
- $\boldsymbol{\Sigma}$ is the **covariance matrix**: $\Sigma_{ij} = \text{Cov}(X_i, X_j)$

The PDF in $k$ dimensions is:

$$
f(\mathbf{x}) = \frac{1}{(2\pi)^{k/2} |\boldsymbol{\Sigma}|^{1/2}} \exp\left(-\frac{1}{2}(\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})\right)
$$

![Bivariate normal distribution: 3D surface and contour plot](./media/joint-distribution-3d.png)

<iframe src="/static/interactive/bivariate-normal.html" width="100%" height="550" style="border:none;"></iframe>

**In two dimensions:** The contours of constant density are ellipses. The axes of the ellipses are determined by the eigenvectors of $\boldsymbol{\Sigma}$, and their lengths are proportional to the square roots of the eigenvalues. When the covariance is zero, the ellipses align with the coordinate axes; nonzero covariance tilts them.

**Key properties:**

1. **Marginals are normal.** Every subset of the variables has a (multivariate) normal distribution. In particular, each $X_i$ is univariate normal.
2. **Conditionals are normal.** The conditional distribution of some variables given others is also (multivariate) normal.
3. **Linear combinations are normal.** Any linear combination $a_1 X_1 + a_2 X_2 + \cdots + a_k X_k$ is univariate normal.
4. **Uncorrelated implies independent.** For the multivariate normal (and only for the multivariate normal), zero covariance between components implies independence. This is not true for general distributions.

**Where it shows up in ML:** The multivariate normal is pervasive in machine learning. Gaussian processes define distributions over functions using multivariate normals. Variational autoencoders use the reparameterization trick with multivariate normal latent variables. Multivariate regression assumes normally distributed errors. PCA is closely connected to the eigendecomposition of the covariance matrix, which characterizes the multivariate normal. Gaussian mixture models use weighted sums of multivariate normals to model complex data distributions.

## Transformations of Random Variables

A fundamental problem in probability: if $X$ has a known distribution and $Y = g(X)$, what is the distribution of $Y$? This question arises constantly in practice, because we often apply functions to random quantities and need to know the resulting distribution.

### Discrete Case

For discrete random variables, the approach is direct. If $Y = g(X)$, then:

$$
P(Y = y) = \sum_{x:\, g(x) = y} P(X = x)
$$

Sum over all values of $X$ that map to $y$. If $g$ is one-to-one, each $y$ comes from exactly one $x$, and the sum has a single term.

**Example:** Let $X$ be a fair die roll and $Y = X^2$. Then $P(Y = 1) = P(X = 1) = 1/6$, $P(Y = 4) = P(X = 2) = 1/6$, and so on. Since squaring is one-to-one on positive integers, each value of $Y$ comes from exactly one value of $X$.

### Continuous Case: Change of Variables

For continuous random variables, we need the **change of variables formula**. If $Y = g(X)$ where $g$ is a strictly monotonic (always increasing or always decreasing) differentiable function:

$$
f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\frac{d}{dy}g^{-1}(y)\right|
$$

The absolute value of the derivative of the inverse function acts as a "stretching factor" that accounts for how the transformation compresses or expands intervals of probability.

**Why the absolute derivative?** Probability must be preserved under transformation. If $g$ stretches a small interval by a factor of 3, the density must shrink by a factor of 3 to keep the total probability the same. The derivative of $g^{-1}$ measures exactly this stretching.

### Worked Example: Uniform to Exponential

Let $X \sim \text{Uniform}(0, 1)$ and $Y = -\ln(X)$. We will show that $Y \sim \text{Exponential}(1)$.

![Transformation from Uniform(0,1) to Exponential(1) via Y = -ln(X)](./media/transformation-of-rv.png)

**Step 1:** Find the inverse. If $y = -\ln(x)$, then $x = e^{-y}$, so $g^{-1}(y) = e^{-y}$.

**Step 2:** Compute the derivative of the inverse: $\frac{d}{dy}e^{-y} = -e^{-y}$, so $\left|\frac{d}{dy}g^{-1}(y)\right| = e^{-y}$.

**Step 3:** Apply the formula. Since $f_X(x) = 1$ for $0 < x < 1$:

$$
f_Y(y) = f_X(e^{-y}) \cdot e^{-y} = 1 \cdot e^{-y} = e^{-y}, \quad y > 0
$$

This is exactly the PDF of $\text{Exponential}(1)$.

### Inverse Transform Sampling

This result is not just a textbook exercise. It is the foundation of **inverse transform sampling**, a method for generating random samples from any distribution using only uniform random numbers.

**The method:** To generate a sample from a distribution with CDF $F$:

1. Generate $U \sim \text{Uniform}(0, 1)$
2. Return $X = F^{-1}(U)$

Then $X$ has the desired distribution. This works because applying the inverse CDF to a uniform random variable produces the target distribution (a direct application of the change of variables formula).

**Why it matters:** Every random number generator on every computer starts with uniform random numbers. Inverse transform sampling (and its generalizations) is how those uniform samples get converted into samples from normal, exponential, gamma, and other distributions. It is also the theoretical basis for quantile functions in statistics.

## Moment Generating Functions

The expected value and variance capture the first two moments of a distribution. The **moment generating function (MGF)** packages all moments into a single function.

### Definition

For a random variable $X$, the moment generating function is:

$$
M_X(t) = E[e^{tX}]
$$

For discrete $X$: $M_X(t) = \sum_x e^{tx} P(X = x)$. For continuous $X$: $M_X(t) = \int_{-\infty}^{\infty} e^{tx} f(x)\,dx$.

The MGF exists if this expectation is finite for $t$ in some open interval around 0. Not all distributions have MGFs (heavy-tailed distributions like the Cauchy do not), but when it exists, it is extremely powerful.

### Why MGFs Matter

**Extracting moments:** The $n$th moment of $X$ is the $n$th derivative of the MGF evaluated at $t = 0$:

$$
E[X^n] = M_X^{(n)}(0)
$$

This is why it is called the "moment generating function": differentiating it and plugging in $t = 0$ generates moments. The first derivative gives $E[X]$, the second gives $E[X^2]$ (from which you can compute the variance), and so on.

**Uniqueness:** If two random variables have the same MGF (in a neighborhood of $t = 0$), they have the same distribution. This makes MGFs a tool for proving that two random variables have the same distribution without comparing their PDFs directly.

### Example: MGF of Bernoulli($p$)

If $X \sim \text{Bernoulli}(p)$, then $X$ takes values 0 and 1:

$$
M_X(t) = E[e^{tX}] = e^{t \cdot 0} \cdot (1-p) + e^{t \cdot 1} \cdot p = (1 - p) + pe^t
$$

**Checking:** $M_X'(t) = pe^t$, so $E[X] = M_X'(0) = p$. Correct.

$M_X''(t) = pe^t$, so $E[X^2] = M_X''(0) = p$. Then $\text{Var}(X) = E[X^2] - (E[X])^2 = p - p^2 = p(1-p)$. Correct.

### Example: MGF of Normal($\mu, \sigma^2$)

If $X \sim N(\mu, \sigma^2)$:

$$
M_X(t) = \exp\left(\mu t + \frac{\sigma^2 t^2}{2}\right)
$$

This compact form makes it easy to work with sums of normal random variables (see the property below).

### Key Property: MGFs and Sums

If $X$ and $Y$ are **independent** random variables, the MGF of their sum is the product of their MGFs:

$$
M_{X+Y}(t) = M_X(t) \cdot M_Y(t)
$$

**Why this is useful:** To find the distribution of a sum of independent random variables, multiply their MGFs and identify the result. For example, the sum of two independent normals $N(\mu_1, \sigma_1^2)$ and $N(\mu_2, \sigma_2^2)$ has MGF:

$$
\exp\left(\mu_1 t + \frac{\sigma_1^2 t^2}{2}\right) \cdot \exp\left(\mu_2 t + \frac{\sigma_2^2 t^2}{2}\right) = \exp\left((\mu_1 + \mu_2)t + \frac{(\sigma_1^2 + \sigma_2^2)t^2}{2}\right)
$$

This is the MGF of $N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$, confirming that the sum of independent normals is normal.

**Where MGFs show up:** The most important application is in proving the Central Limit Theorem. The proof shows that the MGF of the standardized sum converges to $e^{t^2/2}$ (the MGF of the standard normal), which by the uniqueness property implies convergence to the normal distribution.

## Law of Large Numbers

**Law of large numbers (LLN):** As the number of independent trials increases, the sample average converges to the expected value.

If $X_1, X_2, \ldots, X_n$ are independent with the same distribution (i.i.d.) and mean $\mu$, then:

$$
\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \to \mu \quad \text{as } n \to \infty
$$

**Intuition:** Flip a coin 10 times and you might get 70% heads. Flip it 10,000 times and you will get very close to 50% heads. The more data you collect, the more the average stabilizes around the true mean.

Watch it happen below: keep adding trials (coin, die, or a skewed source) and see the running average swing wildly at first, then settle onto the true mean, with the deviation shrinking like $1/\sqrt{n}$.

<iframe src="/static/interactive/prob-lln.html" width="100%" height="640" style="border:none;"></iframe>

**Where it shows up:** This is why more training data generally leads to better ML models. It is the theoretical justification for using sample statistics to estimate population parameters.

## Probability Inequalities

Probability inequalities give bounds on probabilities when you do not know the exact distribution. They are weaker than exact calculations but apply to broad classes of distributions.

### Markov's Inequality

**Markov's inequality:** For any non-negative random variable $X$ and any $a > 0$:

$$
P(X \geq a) \leq \frac{E[X]}{a}
$$

This is the weakest major inequality but also the most general: it requires only that $X \geq 0$ and that $E[X]$ exists.

**Example:** If the average time to complete a task is 2 hours, then the probability it takes more than 10 hours is at most $2/10 = 0.2$, or 20%. This bound may be loose, but it holds for any non-negative distribution with that mean.

**Proof sketch:** Since $X \geq 0$, we have $E[X] = \int_0^\infty x f(x)\,dx \geq \int_a^\infty x f(x)\,dx \geq a \int_a^\infty f(x)\,dx = a \cdot P(X \geq a)$.

### Chebyshev's Inequality

**Chebyshev's inequality:** For any random variable $X$ with mean $\mu$ and finite variance $\sigma^2$, and for any $k > 0$:

$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$

This gives an upper bound on how much probability can lie far from the mean, for any distribution whatsoever.

**Worked example:** Regardless of the distribution shape:

- At least $1 - 1/2^2 = 75\%$ of values lie within 2 standard deviations of the mean
- At least $1 - 1/3^2 \approx 89\%$ of values lie within 3 standard deviations of the mean
- At least $1 - 1/4^2 = 93.75\%$ of values lie within 4 standard deviations of the mean

**Comparison with the 68-95-99.7 rule:** For the normal distribution specifically, 95% of values lie within 2 standard deviations and 99.7% within 3. Chebyshev guarantees only 75% and 89% respectively. The gap shows that Chebyshev is conservative: it must account for worst-case distributions (like heavy-tailed ones), while the 68-95-99.7 rule is exact for the normal.

**Where it shows up:** Chebyshev's inequality is used to prove the (weak) law of large numbers. It also provides distribution-free confidence intervals when you know only the mean and variance.

### Jensen's Inequality

**Jensen's inequality** connects the expected value of a function to the function of an expected value. It depends on whether the function is convex or concave.

**If $g$ is convex** (curves upward, like $x^2$, $e^x$, $|x|$):

$$
g(E[X]) \leq E[g(X)]
$$

**If $g$ is concave** (curves downward, like $\ln(x)$, $\sqrt{x}$):

$$
g(E[X]) \geq E[g(X)]
$$

**Intuition:** A convex function "amplifies" extreme values. Since $E[g(X)]$ accounts for the function applied to each value of $X$ (including extremes), it is larger than the function applied to the single average value $E[X]$.

**Example (variance is non-negative):** Take $g(x) = x^2$, which is convex. Jensen's inequality gives $E[X^2] \geq (E[X])^2$. This means:

$$
\text{Var}(X) = E[X^2] - (E[X])^2 \geq 0
$$

Variance can never be negative, which follows directly from Jensen's inequality.

**Example (log of expectation vs. expectation of log):** Since $\ln$ is concave, Jensen's inequality gives $\ln(E[X]) \geq E[\ln(X)]$ for $X > 0$. Equivalently, $E[\ln(X)] \leq \ln(E[X])$.

**Where it shows up:**

- **KL divergence is non-negative.** The proof that $D_{\text{KL}}(P \| Q) \geq 0$ uses Jensen's inequality applied to the concave function $\ln$.
- **Evidence Lower Bound (ELBO).** In variational inference, Jensen's inequality is used to show that the ELBO is a lower bound on the log-evidence $\ln p(x)$. Maximizing the ELBO is tractable even when computing $\ln p(x)$ directly is not.
- **Information theory.** Many fundamental inequalities in information theory (e.g., mutual information is non-negative) follow from Jensen's inequality.

## Central Limit Theorem

**Central Limit Theorem (CLT):** The sum (or average) of many independent random variables is approximately normally distributed, regardless of the original distribution, as long as the sample size is large enough.

Formally, if $X_1, X_2, \ldots, X_n$ are i.i.d. with mean $\mu$ and finite variance $0 < \sigma^2 < \infty$, then:

$$
\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1) \quad \text{as } n \to \infty
$$

where $\xrightarrow{d}$ denotes convergence in distribution. The finite-variance condition $0 < \sigma^2 < \infty$ is load-bearing: distributions with infinite variance, such as the Cauchy distribution, have no CLT.

![Central Limit Theorem: sample means from a uniform distribution become normal](./media/clt-demonstration.png)

**Intuition:** Take any distribution (uniform, exponential, Poisson, anything). Draw samples of size 30, compute each sample's average, and plot the distribution of those averages. It will look like a bell curve. This works even if the original distribution is heavily skewed.

**Why it matters:**

1. It explains why the normal distribution shows up everywhere: many real-world quantities are the sum of many small, independent effects (height = many genes, measurement error = many small perturbations).
2. It justifies using normal-distribution-based methods (confidence intervals, hypothesis tests) even when the underlying data is not normal, as long as the sample size is large enough.
3. In ML, stochastic gradient descent averages gradients over mini-batches. By the CLT, these averaged gradients are approximately normal, which helps explain why SGD works well in practice.

**How large is "large enough"?** A common rule of thumb is $n \geq 30$, but this depends on how skewed the original distribution is. For symmetric distributions, even $n = 10$ can be sufficient. For heavily skewed distributions, you may need $n > 100$.
