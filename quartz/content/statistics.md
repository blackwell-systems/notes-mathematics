---
title: "Statistics"
---

Statistics is the science of collecting, analyzing, and drawing conclusions from data. It builds on [probability theory](./probability) and provides the tools for making decisions under uncertainty.

## What Is Data?

Before doing statistics, we need to be precise about what we are working with.

**Data:** A collection of observations or measurements. Each individual observation is called a **data point**. A collection of data points is a **dataset**.

**Variable:** A characteristic being measured or observed. Height, color, exam score, temperature. Each data point records a value for one or more variables.

**Observation (case, record):** A single entity being measured. One person, one transaction, one experiment. An observation may have values for multiple variables (a person has a height, a weight, an age, etc.).

### Types of Variables

Variables come in two fundamental types, and the type determines which statistical methods apply.

**Quantitative (numerical) variables:** Values are numbers that represent quantities. You can do arithmetic with them (add, subtract, average).

- **Discrete:** Countable values with gaps between them. Number of children (0, 1, 2, 3...), number of errors in code, number of heads in 10 flips. You cannot have 2.7 children.
- **Continuous:** Values on a continuous scale with no gaps. Height, temperature, time, weight. Between any two values, there are infinitely many other possible values.

**Qualitative (categorical) variables:** Values are labels or categories. You cannot meaningfully add or average them.

- **Nominal:** Categories with no natural order. Color (red, blue, green), blood type (A, B, AB, O), country. There is no sense in which "red > blue."
- **Ordinal:** Categories with a meaningful order, but the gaps between categories are not necessarily equal. Education level (high school, bachelor's, master's, PhD), customer satisfaction (poor, fair, good, excellent), letter grades (A, B, C, D, F).

### Scales of Measurement

This is a more formal way of classifying variables. Each level adds more structure.

**Nominal scale:** Categories only. You can check if two values are equal or different, but nothing else. Examples: gender, zip code, species.

- Operations: $=$ and $\neq$ only
- Meaningful statistics: mode, frequency counts

**Ordinal scale:** Categories with a ranking. You know that A > B, but not by how much. The difference between "good" and "excellent" might not be the same as between "poor" and "fair." Examples: rankings (1st, 2nd, 3rd), Likert scales (1-5 ratings), socioeconomic status.

- Operations: $=$, $\neq$, $<$, $>$
- Meaningful statistics: mode, median, percentiles
- NOT meaningful: mean (because gaps between ranks are not equal)

**Interval scale:** Numerical values where differences are meaningful, but there is no true zero point. The difference between 20°C and 30°C is the same as between 30°C and 40°C, but 40°C is not "twice as hot" as 20°C (because 0°C is not the absence of temperature). Examples: temperature in Celsius/Fahrenheit, calendar years, IQ scores.

- Operations: $=$, $\neq$, $<$, $>$, $+$, $-$
- Meaningful statistics: mean, standard deviation
- NOT meaningful: ratios ("twice as much")

**Ratio scale:** Like interval, but with a true zero point that means "none." 0 kg means no mass. 0 meters means no distance. Ratios are meaningful: 10 kg is twice as heavy as 5 kg. Examples: height, weight, distance, time duration, income, counts.

- Operations: all arithmetic ($=$, $\neq$, $<$, $>$, $+$, $-$, $\times$, $\div$)
- Meaningful statistics: all (mean, SD, ratios, geometric mean)

| Scale | Example | Can rank? | Can subtract? | Can divide? |
|---|---|---|---|---|
| Nominal | Blood type | No | No | No |
| Ordinal | Movie rating (1-5 stars) | Yes | No | No |
| Interval | Temperature (°C) | Yes | Yes | No |
| Ratio | Weight (kg) | Yes | Yes | Yes |

**Why this matters:** The scale of your data determines which operations are valid. Computing the mean of zip codes is nonsensical (nominal data). Computing the mean of star ratings is debatable (ordinal data, gaps might not be equal). Computing the mean of heights is perfectly fine (ratio data). Using the wrong statistic for a data type is a common error.

### Cardinal vs Ordinal Numbers

**Cardinal numbers** answer "how many?" They represent quantity: 3 apples, 47 students, 1,000,000 data points. You can do arithmetic with them.

**Ordinal numbers** answer "in what position?" They represent rank or order: 1st place, 2nd place, 3rd place. You know the order but not the gaps. The difference between 1st and 2nd place in a race might be 0.01 seconds; the difference between 2nd and 3rd might be 15 seconds. The ordinal numbers (1st, 2nd, 3rd) hide this information.

In statistics, this distinction appears constantly. Ranked data (ordinal) requires different methods than measured data (cardinal/interval/ratio). Median and percentiles work on ordinal data. Mean and standard deviation require at least interval data.

## The Fundamental Problem

You want to know something about the world: What is the average height of adults in a country? Does this drug work? Will users click on button A or button B more often?

You cannot measure everyone or observe every outcome. Instead, you observe a small piece of the world (a **sample**) and try to draw conclusions about the whole thing (the **population**).

This creates an immediate problem: your sample might not be representative. You might, by chance, have picked unusually tall people, or the drug might have appeared to work only because the test group happened to be healthier. Statistics is the set of tools for reasoning carefully about this gap between what you observed and what is actually true.

Everything on this page flows from this one problem. Descriptive statistics summarize what you observed. Inferential statistics quantify how much you can trust those summaries to reflect the population.

## Populations and Samples

These two concepts must be clear before anything else.

**Population:** The complete set of all individuals, items, or outcomes you care about. All adults in a country. All possible coin flips. All future users of your product. The population is usually too large (or infinite) to observe entirely.

**Parameter:** A number that describes the population. The population mean $\mu$, the population variance $\sigma^2$. Parameters are fixed, real numbers. They exist whether or not you know them. You almost never know them exactly.

**Sample:** A subset of the population that you actually observe. You measure 200 people's heights, or flip a coin 100 times, or track 1000 users for a week.

**Statistic:** A number computed from a sample. The sample mean $\bar{x}$, the sample variance $s^2$. Statistics are numbers you can actually calculate, but they change depending on which sample you happen to draw.

| | Population | Sample |
|---|---|---|
| What it is | Everything you want to know about | The piece you actually observe |
| Size | $N$ (often huge or infinite) | $n$ (what you can afford to measure) |
| Mean | $\mu$ (unknown, fixed) | $\bar{x}$ (known, varies by sample) |
| Variance | $\sigma^2$ (unknown, fixed) | $s^2$ (known, varies by sample) |
| Standard deviation | $\sigma$ | $s$ |

The central question of statistics: **how well does a statistic estimate the corresponding parameter?** If your sample mean is 72, how close is that to the true population mean? Can you put bounds on how far off you might be? That is what the rest of this page builds toward.

### How Samples Are Collected

The way you collect a sample determines whether your conclusions are valid. A bad sample can give completely misleading results, no matter how sophisticated your analysis.

**Simple random sample (SRS):** Every member of the population has an equal chance of being selected. This is the gold standard. Drawing names from a hat, using a random number generator to select rows from a database.

**Stratified sampling:** Divide the population into subgroups (strata) based on a characteristic (age group, region, income bracket), then take a random sample from each stratum. This ensures representation from every subgroup.

**Systematic sampling:** Select every $k$th item from an ordered list. For example, survey every 10th customer. Simple to implement, but can be biased if there is a periodic pattern in the list.

**Convenience sampling:** Sample whoever is easiest to reach. Surveying your friends, using your company's users as "the population." This is the most common method in practice and the most prone to bias.

**Selection bias:** When the sampling method systematically excludes part of the population. Surveying people at a gym about exercise habits will overrepresent active people. This is the single biggest threat to statistical validity.

**Where it shows up in ML:** Training data is almost always a convenience sample. If your training data does not represent the population you want your model to work on, the model will fail in deployment. This is the root cause of most "AI bias" problems.

## Descriptive Statistics

Before making inferences, you need to summarize what you observed. Descriptive statistics reduce a dataset to a few numbers that capture its key features.

### The Problem: What Is "Typical"?

You have a dataset: exam scores, salaries, measurements, etc. You want a single number that represents the "center" of the data. But "center" is not obvious. Consider these five salaries (in thousands): 40, 45, 50, 55, 310.

The average is 100. But four of the five people earn less than half the average, because one high earner pulls it up. Different measures of center handle this differently.

### Measures of Central Tendency

**Mean (arithmetic average):** Add up all values and divide by the count:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
$$

For the salaries above: $\bar{x} = (40 + 45 + 50 + 55 + 310)/5 = 100$. The mean uses every data point, which makes it informative but also sensitive to outliers.

**Median:** Sort the data and take the middle value. If $n$ is even, average the two middle values. For the salaries: the sorted data is 40, 45, **50**, 55, 310, so the median is 50. The median ignores how extreme the outliers are; it only cares about position.

**Mode:** The most frequently occurring value. A dataset can have multiple modes or no mode. The mode is the only measure of center that works for categorical data (like "red, blue, green").

**When to use which:** For symmetric data, the mean and median are close and either works. For skewed data (income, housing prices, website visit durations), the median better represents the "typical" value because it is not pulled by the tail. This is why news reports use "median household income" rather than "mean household income."

### The Problem: How Spread Out Is the Data?

Two datasets can have the same mean but look completely different. Consider:
- Dataset A: 49, 50, 50, 51 (mean = 50)
- Dataset B: 10, 30, 70, 90 (mean = 50)

You need a number that captures how spread out the data is.

### Measures of Spread

**Range:** $\text{max} - \text{min}$. For Dataset A: $51 - 49 = 2$. For Dataset B: $90 - 10 = 80$. Simple, but it depends entirely on the two most extreme values.

**Interquartile range (IQR):** $Q_3 - Q_1$, where $Q_1$ is the 25th percentile and $Q_3$ is the 75th percentile. The IQR captures the middle 50% of data and ignores outliers entirely.

**Variance:** The average squared distance from the mean. The idea: measure how far each data point is from the center, square those distances (so negative and positive deviations do not cancel), and average them.

For a population:

$$
\sigma^2 = \frac{1}{N}\sum_{i=1}^N (x_i - \mu)^2
$$

For a sample:

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2
$$

**Why $n-1$ instead of $n$?** This is called **Bessel's correction**. The intuition: when you compute the sample variance, you use $\bar{x}$ (the sample mean) instead of $\mu$ (the true mean). The sample mean is calculated from the same data, so it is always closer to the data points than $\mu$ might be. This makes the squared distances smaller on average, so dividing by $n$ would systematically underestimate the true variance. Dividing by $n-1$ corrects for this, making $s^2$ an **unbiased estimator** of $\sigma^2$.

The concept of an "unbiased estimator" comes up repeatedly in statistics. It means that if you repeated the sampling process many times, the average of all your estimates would equal the true parameter.

**Standard deviation:** $s = \sqrt{s^2}$. The standard deviation has the same units as the data (dollars, meters, seconds), making it more interpretable than variance (which has squared units).

**Example:** Dataset: 4, 7, 13, 16.

$\bar{x} = (4 + 7 + 13 + 16)/4 = 10$

Deviations from mean: $-6, -3, 3, 6$

Squared deviations: $36, 9, 9, 36$

$s^2 = (36 + 9 + 9 + 36)/(4-1) = 90/3 = 30$

$s = \sqrt{30} \approx 5.48$

## Sampling Distributions and Standard Error

**Sampling distribution:** If you drew many samples of size $n$ from a population and computed the sample mean $\bar{x}$ each time, the distribution of those sample means is the sampling distribution of $\bar{x}$.

By the [Central Limit Theorem](./probability#central-limit-theorem), this sampling distribution is approximately normal with:

- Mean: $\mu_{\bar{x}} = \mu$ (the sample mean is centered on the true mean)
- Standard deviation: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$

**Standard error (SE):** The standard deviation of a sampling distribution. For the sample mean:

$$
SE = \frac{\sigma}{\sqrt{n}}
$$

When $\sigma$ is unknown (which is almost always), we estimate it with the sample standard deviation $s$:

$$
SE \approx \frac{s}{\sqrt{n}}
$$

**Intuition:** The standard error tells you how much your sample mean would vary if you repeated the sampling. Larger samples give smaller standard errors, meaning more precise estimates. Notice the $\sqrt{n}$ in the denominator: to cut the standard error in half, you need four times as much data.

## Point Estimation and Interval Estimation

### Point Estimation

**Point estimate:** A single value used to estimate a population parameter. The sample mean $\bar{x}$ is a point estimate of $\mu$. A point estimate is your best single guess but gives no sense of how reliable it is.

**Desirable properties of estimators:**

- **Unbiased:** On average, the estimator hits the true parameter. $E[\hat{\theta}] = \theta$.
- **Consistent:** As sample size grows, the estimator converges to the true value.
- **Efficient:** Among unbiased estimators, it has the smallest variance.

### Confidence Intervals

**Confidence interval (CI):** A range of values that is likely to contain the true population parameter. A 95% confidence interval means: if you repeated this process many times, about 95% of the intervals you construct would contain the true parameter.

For the mean (when $n$ is large or population is normal):

$$
\bar{x} \pm z^* \cdot \frac{s}{\sqrt{n}}
$$

where $z^*$ is the critical value from the standard normal distribution (1.96 for 95%, 2.576 for 99%).

![Confidence intervals from repeated sampling](./media/confidence-intervals.png)

**Common misinterpretation:** A 95% CI does NOT mean "there is a 95% probability the true mean is in this interval." The true mean is either in the interval or it is not. The 95% refers to the long-run success rate of the procedure.

**Example:** A sample of 100 exam scores has $\bar{x} = 72$ and $s = 15$. Construct a 95% confidence interval for the population mean.

$$
72 \pm 1.96 \cdot \frac{15}{\sqrt{100}} = 72 \pm 1.96 \cdot 1.5 = 72 \pm 2.94
$$

The 95% CI is $(69.06, 74.94)$.

**Where it shows up in ML:** Confidence intervals for model performance metrics (accuracy, AUC) help you determine whether one model is genuinely better than another, or if the difference is within sampling noise.

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

The MLE for the mean is just the sample mean. The MLE for the variance uses $n$ (not $n-1$), which makes it slightly biased: it underestimates the true variance by a factor of $(n-1)/n$. This bias shrinks toward zero as $n$ grows, so MLE is still consistent (converges to the true value with enough data). This is a known limitation of MLE.

**Where it shows up in ML:** MLE is the foundation of many ML training procedures. Logistic regression finds parameters by maximizing the log-likelihood of the observed labels. Training a neural network with cross-entropy loss is equivalent to MLE. Minimizing cross-entropy loss = maximizing log-likelihood.

**Connection to optimization:** Finding the MLE requires solving an optimization problem (maximizing the log-likelihood). For simple distributions, you can solve analytically (as above). For complex models, you use gradient ascent.

## MAP Estimation

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

**Where it shows up in ML:** A/B testing uses hypothesis testing to determine if a new feature improves a metric. Statistical tests help determine if one model is significantly better than another, or if the difference is just noise.

## Linear Regression

**Linear regression:** Fits a straight line to data by minimizing the sum of squared residuals. It is the simplest and most important predictive model, and understanding it deeply is essential for ML.

### The Model

For a single feature:

$$
y = \beta_0 + \beta_1 x + \epsilon
$$

- $\beta_0$: intercept (predicted $y$ when $x = 0$)
- $\beta_1$: slope (how much $y$ changes per unit change in $x$)
- $\epsilon$: error term, assumed to follow $N(0, \sigma^2)$

For multiple features: $y = X\beta + \epsilon$, where $X$ is the design matrix and $\beta$ is the parameter vector. This connects directly to [linear algebra](./linear-algebra-foundations): regression is solving an overdetermined system $X\beta \approx y$.

### Ordinary Least Squares (OLS)

**Objective:** Minimize the sum of squared residuals:

$$
\text{RSS} = \sum_{i=1}^n (y_i - \hat{y}_i)^2 = \sum_{i=1}^n (y_i - \beta_0 - \beta_1 x_i)^2
$$

**Residual:** The difference between the observed value and the predicted value: $e_i = y_i - \hat{y}_i$.

![Linear regression with residuals](./media/linear-regression-residuals.png)

**Solution (from linear algebra):** The OLS solution minimizes $\|y - X\beta\|^2$ and has the closed-form solution:

$$
\hat{\beta} = (X^T X)^{-1} X^T y
$$

This is the **normal equation**. It was derived in [Linear Algebra Foundations](./linear-algebra-foundations) from the projection formula: when $Ax = b$ has no exact solution, the best approximation projects $b$ onto the column space of $A$. The normal equation is that projection. The matrix $X^T X$ must be invertible, which fails when features are perfectly correlated (multicollinearity).

**Connection to MLE:** If the errors $\epsilon$ are normally distributed, the OLS solution is also the MLE. Minimizing squared error is equivalent to maximizing the Gaussian log-likelihood.

### $R^2$: How Good Is the Fit?

**Coefficient of determination ($R^2$):** The proportion of variance in $y$ that is explained by the model:

$$
R^2 = 1 - \frac{\text{RSS}}{\text{TSS}} = 1 - \frac{\sum(y_i - \hat{y}_i)^2}{\sum(y_i - \bar{y})^2}
$$

- $R^2 = 1$: the model explains all variance (perfect fit)
- $R^2 = 0$: the model explains no more variance than simply predicting the mean
- $R^2$ can be negative for models that are worse than predicting the mean

**Adjusted $R^2$:** Penalizes adding more features. Regular $R^2$ always increases when you add features (even useless ones). Adjusted $R^2$ accounts for the number of predictors and only increases if the new feature genuinely improves the model.

## Bias-Variance Tradeoff

The **bias-variance tradeoff** is the central tension in machine learning. Every model's prediction error can be decomposed into three components:

$$
E[(\hat{y} - y)^2] = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}
$$

![Bias-variance tradeoff](./media/bias-variance-tradeoff.png)

**Bias:** How far off the model's average prediction is from the true value. High bias means the model is too simple to capture the underlying pattern. A linear model fit to curved data has high bias.

**Variance:** How much the model's predictions change when trained on different data. High variance means the model is too sensitive to the specific training data. A high-degree polynomial that wiggles through every training point has high variance.

**Irreducible error:** Noise inherent in the data that no model can eliminate.

**The tradeoff:** As model complexity increases:

- Bias decreases (the model can capture more patterns)
- Variance increases (the model becomes more sensitive to training data)
- Total error first decreases, then increases

The optimal model balances these two forces. This is why you cannot just "add more parameters" to improve a model indefinitely.

| | Simple model | Complex model |
|---|---|---|
| Bias | High | Low |
| Variance | Low | High |
| Risk | Underfitting | Overfitting |
| Example | Linear regression on curved data | 100-degree polynomial on 20 points |

## Overfitting and Underfitting

**Overfitting:** The model learns the training data too well, including its noise and quirks. It performs great on training data but poorly on new data. Signs: large gap between training accuracy and test accuracy.

**Underfitting:** The model is too simple to capture the underlying pattern. It performs poorly on both training and test data. Signs: high error on training data.

**Remedies for overfitting:**

- Get more training data
- Reduce model complexity (fewer features, lower polynomial degree)
- Regularization (L1/L2 penalties, which connect to MAP estimation above)
- Dropout (in neural networks)
- Early stopping

**Remedies for underfitting:**

- Use a more complex model
- Add more features
- Reduce regularization
- Train longer

## Cross-Validation

**Cross-validation:** A method for estimating how well a model will perform on unseen data, without needing a separate test set.

### k-Fold Cross-Validation

1. Split the data into $k$ equal-sized folds (commonly $k = 5$ or $k = 10$)
2. For each fold $i$:
   - Train the model on all folds except fold $i$
   - Evaluate on fold $i$
3. Average the $k$ evaluation scores

$$
\text{CV Score} = \frac{1}{k}\sum_{i=1}^k \text{Score}_i
$$

**Why not just use a train/test split?** A single split is noisy. You might get lucky or unlucky with which data points end up in the test set. Cross-validation uses all the data for both training and testing (just not at the same time), giving a more reliable estimate.

### Leave-One-Out Cross-Validation (LOOCV)

The extreme case where $k = n$ (each fold is a single data point). Gives a nearly unbiased estimate but is computationally expensive for large datasets.

### Stratified Cross-Validation

For classification problems, each fold maintains the same class proportions as the full dataset. This prevents folds where a minority class is entirely absent.

**Where it shows up in ML:** Cross-validation is the standard method for:

- **Model selection:** Comparing different model types (linear vs. polynomial vs. random forest)
- **Hyperparameter tuning:** Choosing the best learning rate, regularization strength, tree depth, etc.
- **Performance reporting:** Giving a reliable estimate of how well a model generalizes

The reason cross-validation matters so deeply: it is the practical answer to the bias-variance tradeoff. You cannot directly measure bias and variance on real data, but cross-validation lets you detect their effects by measuring generalization performance.

## Summary: Connecting Statistics to ML

The concepts on this page form the statistical foundation of machine learning:

| Statistical concept | ML application |
|---|---|
| MLE | Training logistic regression, neural networks (cross-entropy loss) |
| MAP estimation | Ridge regression (L2), lasso (L1) |
| Bias-variance tradeoff | Model selection, regularization decisions |
| Hypothesis testing | A/B testing, model comparison |
| Linear regression | The simplest supervised learning model |
| Cross-validation | Hyperparameter tuning, model evaluation |
| Confidence intervals | Uncertainty quantification for predictions |
| Sampling distributions | Understanding why more data helps |

The next topics in the roadmap (optimization and information theory) build directly on these foundations. MLE requires optimization to find parameter values. Distributions connect to information theory through entropy and KL divergence. Cross-entropy loss (the standard loss for classification) is a concept from information theory applied through the lens of MLE.
