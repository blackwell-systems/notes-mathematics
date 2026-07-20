---
title: "Statistical Learning"
prerequisites: ["inferential-statistics"]
enables: []
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Inferential Statistics](./inferential-statistics)
> **Leads to:** [Singular Learning Theory](./singular-learning-theory), which reframes the bias-variance tradeoff for singular models.

Statistical learning shifts the goal from *describing* or *inferring* to *predicting*: fitting models that generalize from training data to unseen data. It covers correlation and regression, logistic and generalized linear models, and the machine-learning core, the bias-variance tradeoff, overfitting, cross-validation, and bootstrapping. It builds on [inferential statistics](./inferential-statistics) (regression inference reuses the sampling-distribution machinery) and is the bridge from classical statistics into machine learning.

## Correlation

Once we have plotted two quantitative variables against each other, the natural next question is quantitative: *how strongly*, and *in what direction*, are they associated? Before fitting a line through the cloud (the next section), we want a single number summarizing the **strength** and **direction** of the *linear* association. That number is the correlation coefficient.

### The Pearson Correlation Coefficient

![Four scatter plots showing what different Pearson correlation values look like: a strong negative relationship near minus 0.9, no linear relationship near 0, a moderate positive relationship near 0.5, and a strong positive relationship near 0.9](./media/stats-correlation-spectrum.png)

The **Pearson correlation coefficient**, written $r$, measures the strength and direction of the linear relationship between two quantitative variables $x$ and $y$:

$$
r = \frac{\sum_i (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_i (x_i - \bar{x})^2}\,\sqrt{\sum_i (y_i - \bar{y})^2}} = \frac{\operatorname{cov}(x, y)}{s_x\, s_y}.
$$

The numerator accumulates a *positive* contribution when a point is above (or below) average on both variables, and a *negative* one when it is above on one and below the other, so it measures whether the variables move together. The denominator rescales by each variable's spread, which makes $r$ **unitless** and (by the Cauchy-Schwarz inequality) confines it to $[-1, 1]$. Equivalently, $r$ is the average product of the standardized ($z$-score) values of $x$ and $y$.

### Worked Example

Consider five paired observations:

| $x_i$ | $y_i$ |
|-------|-------|
| 1 | 2 |
| 2 | 1 |
| 3 | 4 |
| 4 | 3 |
| 5 | 7 |

The means are $\bar{x} = 15/5 = 3$ and $\bar{y} = 17/5 = 3.4$. Tabulating deviations $d_x = x_i - \bar{x}$, $d_y = y_i - \bar{y}$:

| $d_x$ | $d_y$ | $d_x d_y$ | $d_x^2$ | $d_y^2$ |
|-------|-------|-----------|---------|---------|
| $-2$ | $-1.4$ | $2.8$ | $4$ | $1.96$ |
| $-1$ | $-2.4$ | $2.4$ | $1$ | $5.76$ |
| $0$ | $0.6$ | $0.0$ | $0$ | $0.36$ |
| $1$ | $-0.4$ | $-0.4$ | $1$ | $0.16$ |
| $2$ | $3.6$ | $7.2$ | $4$ | $12.96$ |

Summing: $\sum d_x d_y = 12.0$, $\sum d_x^2 = 10$, $\sum d_y^2 = 21.2$. Therefore

$$
r = \frac{12.0}{\sqrt{10}\,\sqrt{21.2}} = \frac{12.0}{\sqrt{212}} = \frac{12.0}{14.560} \approx 0.824,
$$

a fairly strong positive linear association. (Note $r^2 \approx 0.679$; we return to this below.)

### Properties of $r$

- **Bounded:** $-1 \leq r \leq 1$.
- **Sign gives direction:** $r > 0$ means the variables increase together; $r < 0$ means one decreases as the other increases; $r = 0$ means no *linear* trend.
- **Magnitude gives strength:** values near $\pm 1$ mean points falling almost exactly on a line; $r = \pm 1$ occurs precisely when they are perfectly collinear.
- **Unitless and shift/scale invariant:** converting temperature from Celsius to Fahrenheit leaves $r$ unchanged.
- **Symmetric:** $r(x, y) = r(y, x)$; there is no predictor/response distinction.
- **Linear association only.** A value $r \approx 0$ does *not* mean the variables are unrelated, only that there is no *linear* relationship. For $y = x^2$ at $x = -2, -1, 0, 1, 2$ the relationship is perfectly deterministic, yet by symmetry $r = 0$. Always look at the scatter plot too (recall **Anscombe's quartet** above).
- **Sensitive to outliers.** A single extreme point can inflate or deflate $r$ dramatically. For skewed, ordinal, or outlier-prone data, prefer the rank-based [Spearman rank correlation](./inferential-statistics#spearman-rank-correlation), which measures *monotonic* (not just linear) association.

### Correlation Is Not Causation

A large $|r|$ says two variables move together; it says nothing about *why*. The association may arise because a **confounder** drives both. Across days of the year, ice cream sales and drowning deaths are strongly positively correlated, but ice cream does not cause drowning: both are driven by **temperature**. As discussed under [experimental design](./statistics#producing-data-and-experimental-design), only a randomized experiment breaks the link between a treatment and its confounders; observational correlation, however strong, cannot substitute for it.

### Relationship to Regression

Correlation and simple linear regression are two views of the same quantity, which is why this section precedes the next.

- **Coefficient of determination.** For simple linear regression, $r^2 = R^2$, the fraction of the variance in $y$ explained by the fitted line. In the example, $r^2 \approx 0.679$, so about $68\%$ of the variation in $y$ is explained by its linear relationship with $x$.
- **Slope.** The least-squares slope is a rescaled correlation: $\hat{\beta}_1 = r \cdot s_y / s_x$. In the example, $s_x = \sqrt{10/4} \approx 1.581$ and $s_y = \sqrt{21.2/4} \approx 2.302$, giving $\hat{\beta}_1 = 0.824 \times (2.302/1.581) = 1.2$, which matches the direct computation $\sum d_x d_y / \sum d_x^2 = 12.0/10 = 1.2$.
- **Intercept and fitted line.** The line passes through the point of means $(\bar x, \bar y)$, so $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 3.4 - 1.2(3) = -0.2$. The fitted line is $\hat{y} = -0.2 + 1.2x$, giving fitted values $1.0, 2.2, 3.4, 4.6, 5.8$ and residuals $1.0, -1.2, 0.6, -1.6, 1.2$. Their squared sum is $\text{RSS} = 6.8$, so $R^2 = 1 - \text{RSS}/\text{TSS} = 1 - 6.8/21.2 \approx 0.679$, confirming $R^2 = r^2$ by direct computation. To **predict** at a new input, plug it in: at $x = 6$ the model forecasts $\hat{y} = -0.2 + 1.2(6) = 7.0$.

### Inference for the Population Correlation $\rho$

The sample $r$ estimates the unknown **population correlation** $\rho$. To test $H_0: \rho = 0$ against $H_a: \rho \neq 0$ (assuming $(x, y)$ are bivariate normal), the test statistic is

$$
t = \frac{r\sqrt{n - 2}}{\sqrt{1 - r^2}},
$$

which follows a $t$-distribution with $n - 2$ degrees of freedom under $H_0$. Using $r \approx 0.824$ and $n = 5$ ($n - 2 = 3$ df):

$$
t = \frac{0.824\sqrt{3}}{\sqrt{1 - 0.679}} = \frac{0.824 \times 1.732}{\sqrt{0.321}} = \frac{1.427}{0.567} \approx 2.52.
$$

The two-sided critical value is $t_{0.025,\,3} \approx 3.182$. Since $|t| \approx 2.52 < 3.182$, we **fail to reject** $H_0$: with only five points, an $r$ of $0.82$ is not strong enough to rule out chance. Correlation *strength* (the value of $r$) and *significance* (whether $\rho \neq 0$) are distinct questions, and both depend on the sample size.

## Linear Regression

**Linear regression:** Fits a straight line to data by minimizing the sum of squared residuals. It is the simplest and most important predictive model, and understanding it deeply is essential for ML.

Drag the points below to feel how least squares works: the line minimizes the total squared vertical residual, and the slope, intercept, correlation $r$, and $R^2$ update live. Drag one point far out in $x$ to see how a high-leverage outlier swings the fit.

<iframe src="/static/interactive/stats-regression-explorer.html" width="100%" height="660" style="border:none;"></iframe>

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

**Adjusted $R^2$:** Penalizes adding more features. Regular $R^2$ always increases when you add features (even useless ones). Adjusted $R^2$ accounts for the number of predictors and only increases if the new feature genuinely improves the model:

$$
R^2_{adj} = 1 - \frac{(1 - R^2)(n - 1)}{n - p - 1}
$$

where $p$ is the number of predictors. When you add a useless predictor, $(1 - R^2)$ barely changes but the denominator shrinks, so $R^2_{adj}$ decreases. This makes adjusted $R^2$ a better criterion for model comparison when you have different numbers of predictors.

### Multiple Linear Regression

When there are multiple predictor variables, the model extends naturally:

$$
y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_p x_p + \epsilon
$$

In matrix form, this is $y = X\beta + \epsilon$, where $X$ is the $n \times (p+1)$ design matrix (with a column of ones for the intercept), $\beta$ is the $(p+1) \times 1$ parameter vector, and $y$ is the $n \times 1$ response vector.

**The OLS solution** carries over from the simple case:

$$
\hat{\beta} = (X^TX)^{-1}X^Ty
$$

**Interpreting coefficients:** Each coefficient $\beta_j$ represents the expected change in $y$ for a one-unit increase in $x_j$, holding all other predictors constant. This "holding all else constant" interpretation is crucial and is what distinguishes multiple regression from running several simple regressions separately.

**Worked example:** Suppose you model house price (in thousands) as a function of square footage ($x_1$) and number of bedrooms ($x_2$), and obtain $\hat{\beta}_0 = 50$, $\hat{\beta}_1 = 0.12$, $\hat{\beta}_2 = 15$. Then the predicted price is:

$$
\hat{y} = 50 + 0.12 x_1 + 15 x_2
$$

The coefficient $0.12$ means that each additional square foot adds \$120 to the predicted price, holding the number of bedrooms constant. The coefficient $15$ means each additional bedroom adds \$15,000, holding square footage constant.

#### Inference on Coefficients

Each estimated coefficient $\hat{\beta}_j$ has a standard error $SE(\hat{\beta}_j)$ that measures how precisely it is estimated. The standard errors come from the diagonal of the covariance matrix:

$$
\text{Cov}(\hat{\beta}) = \hat{\sigma}^2 (X^TX)^{-1}
$$

where $\hat{\sigma}^2 = \frac{RSS}{n - p - 1}$ is the estimated error variance (the residual mean square).

**t-test for individual coefficients:** To test whether predictor $x_j$ contributes to the model (i.e., $H_0: \beta_j = 0$), compute:

$$
t = \frac{\hat{\beta}_j}{SE(\hat{\beta}_j)}
$$

This follows a t-distribution with $n - p - 1$ degrees of freedom. If the p-value is small (below $\alpha$), we reject $H_0$ and conclude that $x_j$ is a statistically significant predictor, given the other predictors in the model.

**Confidence interval for $\beta_j$:**

$$
\hat{\beta}_j \pm t^*_{n-p-1} \cdot SE(\hat{\beta}_j)
$$

**Worked example (simple regression).** For the five-point dataset above ($\hat{\beta}_1 = 1.2$, $\text{RSS} = 6.8$, $\sum d_x^2 = 10$, $n = 5$), the estimated error variance is $\hat{\sigma}^2 = \text{RSS}/(n - 2) = 6.8/3 \approx 2.267$ (here $p = 1$, so $n - p - 1 = n - 2 = 3$ degrees of freedom). The slope's standard error is $SE(\hat{\beta}_1) = \hat{\sigma}/\sqrt{\sum d_x^2} = \sqrt{2.267}/\sqrt{10} \approx 0.476$, and the test statistic is

$$
t = \frac{\hat{\beta}_1}{SE(\hat{\beta}_1)} = \frac{1.2}{0.476} \approx 2.52.
$$

This is *identical* to the correlation test statistic computed earlier ($t \approx 2.52$), and that is no accident: for simple linear regression, testing $\beta_1 = 0$ and testing $\rho = 0$ are the same test. Since $|t| = 2.52 < t^*_{0.025,\,3} = 3.182$, the slope is not significant at the $5\%$ level, despite the visibly upward trend, because five points are too few to rule out chance.

**F-test for overall significance:** Tests whether the model as a whole explains a significant amount of variance, i.e., $H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0$ (all predictors are useless). The test statistic is:

$$
F = \frac{(TSS - RSS)/p}{RSS/(n - p - 1)} = \frac{R^2/p}{(1 - R^2)/(n - p - 1)}
$$

This follows an F-distribution with $p$ and $n - p - 1$ degrees of freedom. A significant F-test means at least one predictor is useful; it does not tell you which one(s).

### Polynomial and Quadratic Regression

Real relationships are often curved, and a straight line will systematically miss the pattern (the linearity assumption discussed in the next section). The fix is surprisingly simple: add powers of the predictor as extra columns.

**Quadratic regression** fits

$$
y = \beta_0 + \beta_1 x + \beta_2 x^2 + \epsilon.
$$

The crucial observation is that **this is still linear regression.** The word "linear" refers to linearity in the coefficients $\beta$, not in $x$. If you treat $x$ and $x^2$ as two separate predictors $x_1 = x$ and $x_2 = x^2$, quadratic regression is exactly the multiple regression above, with design matrix

$$
X = \begin{bmatrix} 1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ \vdots & \vdots & \vdots \\ 1 & x_n & x_n^2 \end{bmatrix},
$$

and the same OLS solution $\hat{\beta} = (X^TX)^{-1}X^Ty$. Nothing new is needed; you just build the extra column. More generally, **polynomial regression** of degree $d$ adds $x, x^2, \dots, x^d$ and fits a degree-$d$ curve, still by ordinary least squares.

![Two scatter plots of the same U-shaped data. On the left a flat straight-line fit with an R-squared of 0.00 leaves residuals that are positive at both ends and negative in the middle, a clear curvature pattern. On the right a quadratic curve hugs the data with an R-squared of 0.89, labeled as still linear in the coefficients beta](./media/quadratic-regression.png)

**Worked example.** The four points $(-1, 2), (0, 1), (1, 2), (2, 5)$ lie exactly on the parabola $y = x^2 + 1$. The best straight line through them is $\hat{y} = 2 + x$, which explains only $R^2 = 1 - \tfrac{4}{9} \approx 0.56$ of the variance, and its residuals are $+1, -1, -1, +1$: a U-shaped pattern that signals the curvature the line is missing. Fitting a quadratic recovers $\hat{\beta} = (1, 0, 1)$ exactly, with zero residuals and $R^2 = 1$.

**The overfitting trap.** Since a higher degree always fits the training data at least as well, why not use a large degree? Because a polynomial of degree $n - 1$ passes exactly through any $n$ points ($R^2 = 1$) but oscillates wildly between them and predicts terribly on new data. This is the [bias-variance tradeoff](#bias-variance-tradeoff) in miniature: too low a degree underfits (high bias), too high a degree overfits (high variance). Choose the degree by [cross-validation](#cross-validation), not by maximizing training $R^2$.

**Connection to ML.** Quadratic and polynomial regression are the simplest example of a **basis expansion**: you transform the input through fixed feature functions (here $x \mapsto (x, x^2, \dots)$) and then fit a linear model in that richer feature space. Kernel methods and the hidden layers of neural networks generalize the same idea, replacing the fixed polynomial features with similarity functions or learned features. The model stays linear in its parameters; the expressiveness comes from the features.

### Regression Diagnostics

The validity of regression inference depends on four key assumptions. When these assumptions are violated, the coefficient estimates may be biased, the standard errors may be wrong, and the p-values and confidence intervals may be unreliable.

#### Assumptions of Linear Regression

1. **Linearity:** The relationship between predictors and response is linear. If the true relationship is curved, a linear model will systematically miss the pattern.
2. **Independence:** The errors $\epsilon_i$ are independent of each other. This is violated when data has a time or spatial component (autocorrelation).
3. **Homoscedasticity (constant variance):** The variance of the errors is the same for all values of the predictors. If the spread of residuals increases with $\hat{y}$ (a "fan" or "megaphone" shape), this is violated (heteroscedasticity).
4. **Normality of residuals:** The errors follow a normal distribution. This matters most for small samples and for the validity of t-tests and F-tests on the coefficients.

#### Residual Plots

Plot the residuals $e_i = y_i - \hat{y}_i$ against the fitted values $\hat{y}_i$. What you want to see is a random cloud of points centered at zero with no pattern.

![Residual plot patterns: good, non-linear, heteroscedastic, and outlier](./media/residual-plots.png)

**What patterns indicate:**

- **A curve (U-shape or inverted U):** The linearity assumption is violated. Consider adding polynomial terms or using a nonlinear model.
- **A fan shape (wider spread on one side):** Heteroscedasticity. Consider a log transformation of $y$, or use weighted least squares.
- **Clusters or streaks:** Possible grouping structure in the data. Consider adding a categorical predictor or using mixed models.

#### Q-Q Plots for Normality

A quantile-quantile (Q-Q) plot compares the quantiles of the residuals to the quantiles of a standard normal distribution. If residuals are normally distributed, the points fall along a straight diagonal line. Deviations from the line indicate non-normality: S-shaped curves suggest skewness, and heavy tails show up as points curving away at the ends.

#### Leverage and Influential Points

**Leverage:** A data point has high leverage if its predictor values are far from the center of the predictor space. High-leverage points have a large influence on the fitted regression line because they "pull" the line toward them. Leverage is measured by the diagonal elements $h_{ii}$ of the hat matrix $H = X(X^TX)^{-1}X^T$. A point with $h_{ii} > 2(p+1)/n$ is considered high-leverage.

**Influential points:** A point is influential if removing it substantially changes the regression results. A point can have high leverage without being influential (if it falls right on the regression line) or can be influential without extreme leverage.

**Cook's distance** combines leverage and residual size into a single measure of influence:

$$
D_i = \frac{e_i^2}{p \cdot MSE} \cdot \frac{h_{ii}}{(1 - h_{ii})^2}
$$

where $e_i$ is the residual and $MSE$ is the mean squared error. A common rule of thumb: $D_i > 1$ (or $D_i > 4/n$) indicates an influential observation that warrants investigation.

**Worked example.** For the five-point regression above, leverage in simple regression has a clean form, $h_{ii} = \tfrac{1}{n} + \tfrac{(x_i - \bar{x})^2}{\sum (x_j - \bar{x})^2}$. With $\bar{x} = 3$ and $\sum d_x^2 = 10$, the leverages are

$$
h = \left(0.6,\ 0.3,\ 0.2,\ 0.3,\ 0.6\right),
$$

largest at the endpoints $x = 1, 5$ (farthest from the mean) and smallest at the center. As a check, they sum to $p + 1 = 2$, the number of fitted parameters. Now combine leverage with residual size via Cook's distance. The endpoint $x = 5$ has residual $e = 1.2$, leverage $h = 0.6$, and $MSE = \hat{\sigma}^2 = 2.267$ ($p = 1$ predictor):

$$
D_5 = \frac{e^2}{p \cdot MSE} \cdot \frac{h}{(1 - h)^2} = \frac{1.44}{2.267} \cdot \frac{0.6}{0.16} \approx 0.635 \times 3.75 \approx 2.38.
$$

Since $2.38 > 4/n = 0.8$, this endpoint is flagged as influential, even though its leverage $0.6$ alone stays under the $2(p+1)/n = 0.8$ leverage threshold. That is exactly Cook's distance doing its job: a point can be influential through the *combination* of moderate leverage and a sizable residual, which neither diagnostic catches alone (by contrast, $x = 4$ gives $D_4 \approx 0.69 < 0.8$, not flagged).

#### Multicollinearity

**Multicollinearity** occurs when two or more predictors are highly correlated with each other. It does not bias the coefficient estimates, but it inflates their standard errors, making it hard to determine which predictors are significant.

**Variance Inflation Factor (VIF):** For predictor $x_j$, regress $x_j$ on all other predictors and compute $R_j^2$. Then:

$$
VIF_j = \frac{1}{1 - R_j^2}
$$

If $R_j^2 = 0$ (predictor $j$ is uncorrelated with the others), $VIF_j = 1$. If $R_j^2 = 0.9$ (90% of predictor $j$'s variance is explained by the others), $VIF_j = 10$. A common guideline: $VIF > 10$ signals a serious multicollinearity problem, and $VIF > 5$ warrants attention.

**What to do about multicollinearity:** Remove one of the correlated predictors, combine them (e.g., use a composite score or principal component), or use regularization (ridge regression), which is specifically designed to handle correlated predictors.

#### What to Do About Violations

| Violation | Diagnostic | Remedies |
|---|---|---|
| Non-linearity | Residual plot shows curve | Add polynomial terms, use transformations ($\log$, $\sqrt{}$) |
| Heteroscedasticity | Fan-shaped residual plot | Transform $y$ (log is common), weighted least squares |
| Non-normality | Q-Q plot deviates from line | Transform $y$, use bootstrap CIs, or use robust methods |
| Influential points | Cook's distance > 1 | Investigate the points; remove only with justification |
| Multicollinearity | VIF > 10 | Remove or combine predictors, use ridge regression |

## Logistic Regression and Generalized Linear Models

[Linear regression](#linear-regression) predicts a continuous outcome by fitting a straight line. But many questions have a **binary outcome**: did the patient survive (1) or not (0), was the email clicked, is the tumor malignant? Here the response $y$ takes only the values $0$ and $1$, and what we want to predict is not the value but the *probability* $p = P(y = 1 \mid x)$.

### Why a Straight Line Is the Wrong Tool

Fitting $y = \beta_0 + \beta_1 x + \epsilon$ to $0/1$ data fails in two ways. First, a line is unbounded, so for extreme $x$ it returns predictions like $\hat{y} = 1.4$ or $-0.3$, which cannot be probabilities. Second, OLS assumes normal, constant-variance errors, but a $0/1$ outcome is Bernoulli with variance $p(1-p)$ that depends on $x$ and vanishes as $p$ approaches $0$ or $1$. We need a model whose output is always a valid probability and whose likelihood respects the Bernoulli data.

### The Logistic (Sigmoid) Function

The building block is the **logistic function**, or **sigmoid**:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}.
$$

It squashes any real $z$ into $(0, 1)$: as $z \to +\infty$, $\sigma(z) \to 1$; as $z \to -\infty$, $\sigma(z) \to 0$; and $\sigma(0) = 0.5$. The S-shaped curve is steepest at the center and flattens at both ends, exactly the behavior we want for a probability.

![The logistic sigmoid curve sigma of z equals 1 over 1 plus e to the minus z, rising smoothly from 0 to 1 with sigma of 0 equal to 0.5 and staying inside the valid probability band, contrasted with a dashed straight line that rises past 1 and drops below 0](./media/stats-sigmoid.png)

### The Model and the Log-Odds

Logistic regression feeds a linear predictor through the sigmoid: $p = \sigma(\beta_0 + \beta_1 x)$. To see what the coefficients mean, invert the sigmoid. The **odds** of an event with probability $p$ are $\dfrac{p}{1-p}$ (if $p = 0.8$ the odds are $0.8/0.2 = 4$, "4-to-1"). Taking logs gives the **log-odds**, or **logit**, which ranges over all of $\mathbb{R}$. Applying the logit to the model shows that **the log-odds are linear in $x$**:

$$
\log \frac{p}{1 - p} = \beta_0 + \beta_1 x.
$$

This is the defining equation: we fit an ordinary linear model not to the outcome but to its log-odds. That is why logistic regression is a *linear* model despite its curved probability output.

### Interpreting the Coefficients

- **On the log-odds scale:** a one-unit increase in $x$ adds $\beta_1$ to the log-odds.
- **On the odds scale:** exponentiating turns addition into multiplication, so a one-unit increase in $x$ multiplies the odds by $e^{\beta_1}$. The quantity $e^{\beta_1}$ is an **odds ratio** (the same quantity from the [odds-ratio](./inferential-statistics#measures-of-association-odds-ratio-and-relative-risk) discussion above), now arising as a fitted coefficient. An odds ratio of $1$ ($\beta_1 = 0$) means no effect; greater than $1$ means the event becomes more likely.

**Worked interpretation.** Model the probability a loan is repaid as a function of income (in units of \$10{,}000), fitting $\hat{\beta}_0 = -2.0$, $\hat{\beta}_1 = 0.7$. Each additional \$10{,}000 multiplies the odds of repayment by $e^{0.7} \approx 2.01$, so the odds roughly double per unit. Tracing predictions: at $x = 2$ the log-odds are $-0.6$, odds $e^{-0.6} \approx 0.549$, probability $\sigma(-0.6) \approx 0.354$; at $x = 3$ the log-odds are $0.1$, odds $e^{0.1} \approx 1.105$, probability $\sigma(0.1) \approx 0.525$. The odds ratio $1.105/0.549 \approx 2.01$ matches $e^{0.7}$, while the *probability* jumped by about $0.17$ over this step. Near the tails of the curve the same unit step in $x$ moves the probability far less: the effect on probability is not constant, but the effect on the odds always is.

### Fitting by Maximum Likelihood

Unlike OLS, logistic regression has **no closed-form solution**; there is no analogue of the normal equations. Instead we fit by [maximum likelihood](./inferential-statistics#maximum-likelihood-estimation-mle). Each observation is Bernoulli with $p_i = \sigma(\beta_0 + \beta_1 x_i)$, so the log-likelihood is

$$
\ell(\beta) = \sum_{i=1}^{n} \big[\, y_i \log p_i + (1 - y_i)\log(1 - p_i) \,\big].
$$

**Worked example (evaluating the log-likelihood).** Take the fitted loan model $\hat{\beta}_0 = -2.0$, $\hat{\beta}_1 = 0.7$ and three observations: a default at income $x = 2$ ($y = 0$), and repayments at $x = 3$ and $x = 4$ ($y = 1$). The fitted probabilities are $p = \sigma(-2 + 0.7x)$, namely $\sigma(-0.6) \approx 0.354$, $\sigma(0.1) \approx 0.525$, $\sigma(0.8) \approx 0.690$. The log-likelihood sums each observation's contribution:

$$
\ell = \underbrace{\log(1 - 0.354)}_{y=0,\ x=2} + \underbrace{\log(0.525)}_{y=1,\ x=3} + \underbrace{\log(0.690)}_{y=1,\ x=4} \approx -0.437 - 0.644 - 0.371 = -1.453.
$$

Maximum-likelihood fitting adjusts $\beta$ to make this as large as possible (as close to $0$ as the data allow). The negative of this, $-\ell \approx 1.453$, is the total **binary cross-entropy** on these three points ($\approx 0.484$ per point): maximizing the log-likelihood and minimizing cross-entropy are the same optimization.

This objective is **concave** in $\beta$, with no spurious local maxima, so gradient-based [optimization](./optimization) (gradient ascent, or Newton-type methods such as iteratively reweighted least squares) reliably converges. (The maximum is attained at a unique finite $\hat\beta$ as long as the classes are not perfectly separable; under complete separation the likelihood keeps increasing as the coefficients grow without bound, and a penalty or prior is added to keep them finite.) Crucially, **maximizing this Bernoulli log-likelihood is exactly minimizing the binary cross-entropy loss** (they differ only by a sign), which links to [information theory](./information-theory#cross-entropy) and to how classifiers are trained throughout ML: a neural network with a sigmoid output and cross-entropy loss is performing maximum-likelihood logistic regression on top of learned features.

### Generalized Linear Models (GLMs)

Linear and logistic regression are two instances of one framework, the **generalized linear model**, with three components:

1. **A response distribution** from the **exponential family** (normal, Bernoulli, Poisson, gamma, ...), specifying how the variance depends on the mean.
2. **A linear predictor** $\eta = X\beta$, the same linear combination of features as ordinary regression.
3. **A link function** $g$, connecting the mean $\mu = E[y]$ to the linear predictor via $g(\mu) = \eta$. The link lets a linear predictor drive a bounded or non-linear response.

| Model | Link function $g$ | Response distribution | Typical outcome |
|---|---|---|---|
| Linear regression | Identity: $g(\mu) = \mu$ | Normal | Continuous |
| Logistic regression | Logit: $g(\mu) = \log\dfrac{\mu}{1-\mu}$ | Bernoulli | Binary (0/1) |
| Poisson regression | Log: $g(\mu) = \log \mu$ | Poisson | Counts $(0, 1, 2, \ldots)$ |

Seen this way, [linear regression](#linear-regression) is a GLM with the identity link and a normal response; logistic regression is the logit link with a Bernoulli response; and **Poisson regression** (log link, Poisson response) is the standard tool for count outcomes, such as visits per hour or claims per policy, where values are non-negative integers and the variance grows with the mean. The framework unifies all of these under one fitting procedure (maximum likelihood) and one interpretive language (coefficients act on the scale set by the link function).

## Bias-Variance Tradeoff

Slide the polynomial degree below to see the tradeoff before the algebra: a low-degree fit underfits (high bias), a high-degree fit chases the noise (high variance), and the test error is U-shaped even as training error keeps falling.

<iframe src="/static/interactive/bias-variance-explorer.html" width="100%" height="600" style="border:none;"></iframe>

The **bias-variance tradeoff** is the central tension in machine learning. Fix an input $x$, and suppose the true relationship is $y = f(x) + \varepsilon$ where the noise $\varepsilon$ has mean $0$ and variance $\sigma^2$. Let $\hat{f}(x)$ be the model's prediction at $x$, treated as random because it depends on the training set drawn at random. Taking the expectation over both the random training set (which determines $\hat{f}$) and the noise in a fresh target $y$ at $x$, the expected squared prediction error decomposes into three components:

$$
\mathbb{E}\!\left[(\hat{f}(x) - y)^2\right] = \underbrace{\left(\mathbb{E}[\hat{f}(x)] - f(x)\right)^2}_{\text{Bias}^2} + \underbrace{\operatorname{Var}(\hat{f}(x))}_{\text{Variance}} + \underbrace{\sigma^2}_{\text{Irreducible Error}}
$$

Here the irreducible error is exactly the noise variance $\sigma^2$: it is present in the fresh target $y$ regardless of the model, so no estimator can drive it below $\sigma^2$.

**Worked example (putting numbers on the decomposition).** Suppose the noise floor is $\sigma^2 = 1$, and consider three models of increasing complexity evaluated at the same input:

| Model | $\text{Bias}^2$ | Variance | $\sigma^2$ | Total error |
|---|---|---|---|---|
| A (too simple) | 4.0 | 0.5 | 1.0 | **5.5** |
| B (balanced) | 1.0 | 1.0 | 1.0 | **3.0** |
| C (too complex) | 0.25 | 3.0 | 1.0 | **4.25** |

Reading down the total column, error is *not* minimized by the lowest-bias model (C) nor the lowest-variance model (A), but by the balanced model B, whose total $1.0 + 1.0 + 1.0 = 3.0$ beats both. As complexity rises from A to C, bias falls monotonically ($4.0 \to 1.0 \to 0.25$) while variance rises ($0.5 \to 1.0 \to 3.0$); their sum is U-shaped, bottoming out in the middle. No model can beat the irreducible $\sigma^2 = 1$ floor, so the best achievable total here is bounded below by $1$.

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

![A five-fold cross-validation diagram: five rows, each splitting the data into five blocks with one block held out as the validation set in red and the other four used for training, the held-out block rotating position across the folds so every block is validated exactly once](./media/stats-kfold-cv.png)

1. Split the data into $k$ equal-sized folds (commonly $k = 5$ or $k = 10$)
2. For each fold $i$:
   - Train the model on all folds except fold $i$
   - Evaluate on fold $i$
3. Average the $k$ evaluation scores

$$
\text{CV Score} = \frac{1}{k}\sum_{i=1}^k \text{Score}_i
$$

**Worked example (computing a 5-fold CV score).** Take ten data points with target values $y = 2, 4, 6, \ldots, 20$, and use the simplest possible model: *predict the training-set mean*. With $k = 5$ we get five folds of two points each. For each fold we hold out its two points, compute the mean of the other eight (the training set), and score with mean squared error (MSE) on the held-out pair. The whole set sums to $110$, so the global mean is $11$; removing a fold shifts the training mean away from $11$.

| Fold | Held-out | Train mean (of other 8) | Squared errors | Fold MSE |
|---|---|---|---|---|
| 1 | $2, 4$ | $104/8 = 13$ | $(2-13)^2 + (4-13)^2 = 121 + 81$ | $202/2 = 101$ |
| 2 | $6, 8$ | $96/8 = 12$ | $36 + 16$ | $52/2 = 26$ |
| 3 | $10, 12$ | $88/8 = 11$ | $1 + 1$ | $2/2 = 1$ |
| 4 | $14, 16$ | $80/8 = 10$ | $16 + 36$ | $52/2 = 26$ |
| 5 | $18, 20$ | $72/8 = 9$ | $81 + 121$ | $202/2 = 101$ |

Averaging the five fold scores gives the cross-validation estimate:

$$
\text{CV Score} = \frac{101 + 26 + 1 + 26 + 101}{5} = \frac{255}{5} = 51.
$$

Two lessons fall out of the table. First, every point is used for validation exactly once and for training four times, so all ten points inform the estimate. Second, the fold scores range from $1$ to $101$: had you done a *single* train/test split and happened to test on the middle pair you would have reported an MSE of $1$, and on an outer pair, $101$. Neither is trustworthy alone; the average, $51$, is the stable estimate. (In practice you would also *shuffle* the data before splitting; here the points were left in sorted order to keep the arithmetic transparent, which is exactly why the outer folds score so badly.)

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

## Bootstrapping

![A schematic of the bootstrap: an original sample of eight values, arrows to three resamples drawn with replacement so some values repeat and others are dropped, each yielding a computed statistic such as the mean, which together build up the bootstrap distribution of that statistic](./media/stats-bootstrapping.png)

**Bootstrapping** is a resampling technique that lets you estimate the sampling distribution of almost any statistic without relying on theoretical formulas or distributional assumptions.

### The Core Idea

When you have a sample of size $n$, you treat that sample as if it were the population. You then draw many new samples from it (with replacement), compute your statistic on each resampled dataset, and use the distribution of those computed statistics to make inferences.

**Why "with replacement"?** Each bootstrap sample must be the same size as the original sample. If you sampled without replacement, you would just get the original dataset every time. With replacement, each bootstrap sample is a slightly different version of the original: some data points appear multiple times, others not at all. This variation is what generates the distribution.

### The Procedure

1. Start with your original sample of size $n$
2. Draw a bootstrap sample: select $n$ observations from the original sample with replacement
3. Compute the statistic of interest (mean, median, regression coefficient, etc.) on the bootstrap sample
4. Repeat steps 2-3 a total of $B$ times (typically $B = 1{,}000$ to $10{,}000$)
5. The collection of $B$ bootstrapped statistics approximates the sampling distribution

### Bootstrap Confidence Intervals

The simplest bootstrap confidence interval uses the percentiles of the bootstrapped distribution directly.

**Percentile method:** For a 95% confidence interval, take the 2.5th and 97.5th percentiles of the $B$ bootstrapped statistics.

**Worked example:** Suppose you have a sample of 12 delivery times (in minutes): 22, 25, 27, 28, 30, 31, 33, 35, 38, 40, 42, 55. The sample median is 32. You want a 95% CI for the population median.

You draw $B = 10{,}000$ bootstrap samples (each of size 12, with replacement), compute the median of each, and sort the 10,000 medians. The 250th smallest value (2.5th percentile) is 28 and the 9,750th smallest value (97.5th percentile) is 40.

The 95% bootstrap CI for the median is $(28, 40)$.

### Why Bootstrapping Matters

**No distributional assumptions:** For the mean, the CLT gives you a theoretical sampling distribution (normal). But what about the sampling distribution of the median? The trimmed mean? The ratio of two variances? For many statistics, there is no clean formula. Bootstrapping handles them all with the same procedure.

**Nonparametric:** Bootstrapping does not assume the data came from any particular distribution. This makes it robust when the normality assumption is questionable.

**Limitations:** Bootstrapping relies on the original sample being reasonably representative of the population. If your sample is small and unrepresentative, resampling from it will not fix the problem. Bootstrapping also struggles with statistics that are highly sensitive to rare extreme values, because those values may appear zero or multiple times across bootstrap samples.

### Where It Shows Up in ML

**Bootstrap aggregating (bagging):** Train multiple models on different bootstrap samples of the training data, then average their predictions. This reduces variance. Random forests extend bagging by also randomizing feature selection at each split.

**Out-of-bag (OOB) estimation:** In each bootstrap sample, roughly 37% of the original data points are left out (they were never selected). These "out-of-bag" points can be used as a free validation set, giving a performance estimate without needing a separate test set.

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

