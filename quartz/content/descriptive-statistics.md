---
title: "Descriptive Statistics"
prerequisites: ["statistics"]
enables: ["inferential-statistics"]
---

> [!abstract] Prerequisites & where this leads <!-- slt-nav -->
> **Builds on:** [Statistics](./statistics)
> **Leads to:** [Inferential Statistics](./inferential-statistics)

Descriptive statistics summarize a dataset you already have: where it is centered, how spread out it is, and what its shape looks like. This is the first of the two classical halves of statistics; the second, [inferential statistics](./inferential-statistics), generalizes from a sample to a population. For the foundational vocabulary (populations vs samples, data types, how data is produced) see the [Statistics](./statistics) hub.

## Descriptive Statistics

Before making inferences, you need to summarize what you observed. Descriptive statistics reduce a dataset to a few numbers that capture its key features.

### The Problem: What Is "Typical"?

You have a dataset: exam scores, salaries, measurements, etc. You want a single number that represents the "center" of the data. But "center" is not obvious. Consider these five salaries (in thousands): 40, 45, 50, 55, 310.

The average is 100. But four of the five people earn less than half the average, because one high earner pulls it up. Different measures of center handle this differently.

### Measures of Central Tendency

![A right-skewed distribution with three vertical lines showing that for right-skewed data the mode sits at the peak, the median is to its right, and the mean is furthest right, pulled out by the long tail, so mode is less than median is less than mean](./media/stats-central-tendency.png)

**Mean (arithmetic average):** Add up all values and divide by the count:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
$$

For the salaries above: $\bar{x} = (40 + 45 + 50 + 55 + 310)/5 = 100$. The mean uses every data point, which makes it informative but also sensitive to outliers.

**Median:** Sort the data and take the middle value. If $n$ is even, average the two middle values. For the salaries: the sorted data is 40, 45, **50**, 55, 310, so the median is 50. The median ignores how extreme the outliers are; it only cares about position.

**Mode:** The most frequently occurring value. To find it, tally how often each value appears and take the winner. For the quiz scores $7, 8, 8, 9, 9, 9, 10$, the value $9$ appears three times (more than any other), so the mode is $9$. A dataset can have multiple modes: $3, 3, 5, 7, 7, 9$ has two values tied at a count of two, so it is **bimodal** with modes $3$ and $7$. It can also have no mode at all when every value is distinct, which is exactly the case for the five salaries above ($40, 45, 50, 55, 310$ each occur once), so "mode" is silent there. The mode is the only measure of center that works for categorical data: for the colors "red, blue, blue, green" the mode is "blue".

**When to use which:** For symmetric data, the mean and median are close and either works. For skewed data (income, housing prices, website visit durations), the median better represents the "typical" value because it is not pulled by the tail. This is why news reports use "median household income" rather than "mean household income."

### The Problem: How Spread Out Is the Data?

Two datasets can have the same mean but look completely different. Consider:
- Dataset A: 49, 50, 50, 51 (mean = 50)
- Dataset B: 10, 30, 70, 90 (mean = 50)

You need a number that captures how spread out the data is.

### Measures of Spread

These are also called **measures of dispersion** or **measures of variability**, the standard counterpart to the measures of central tendency above. Central tendency answers *where* the data sits; dispersion answers *how spread out* it is around that center. The two together are the basic numerical summary of any dataset.

![The dataset 2, 4, 4, 4, 5, 5, 7, 9 shown as a dot plot with three spread measures marked: the range from 2 to 9 equal to 7, the interquartile range box from Q1 equal 4 to Q3 equal 6 (IQR equal 2), and the standard-deviation band of the mean 5 plus or minus 2](./media/stats-measures-of-spread.png)

**Range:** $\text{max} - \text{min}$. For Dataset A: $51 - 49 = 2$. For Dataset B: $90 - 10 = 80$. Simple, but it depends entirely on the two most extreme values.

**Interquartile range (IQR):** $Q_3 - Q_1$, where $Q_1$ ("Q-one," the first quartile) is the 25th percentile and $Q_3$ ("Q-three," the third quartile) is the 75th percentile. The IQR captures the middle 50% of data and ignores outliers entirely.

*How to find the quartiles.* Sort the data, split it at the median into a lower half and an upper half, and take the median of each half. (Several conventions exist for how to handle the middle value; this "median of each half" method, sometimes called the Tukey hinges, is the one most intro courses use and the one that matches the box-plot rules below.) Take the sorted dataset

$$
3,\ 7,\ 8,\ 12,\ 14,\ \underset{\text{median}}{\mathbf{15}},\ 18,\ 21,\ 22,\ 25,\ 60
$$

There are $n = 11$ values, so the median is the 6th, $15$. With an odd count we leave that middle value out of both halves:

- Lower half: $3, 7, 8, 12, 14$. Its median (the 3rd of five) is $Q_1 = 8$.
- Upper half: $18, 21, 22, 25, 60$. Its median is $Q_3 = 22$.

So $\text{IQR} = Q_3 - Q_1 = 22 - 8 = 14$: the middle half of the data spans 14 units. Notice the outlier $60$ does not affect $Q_1$, $Q_3$, or the IQR at all, which is exactly the robustness the IQR is prized for. (This same dataset is carried into the box-plot section below, where the quartiles become the box and the $60$ is flagged as an outlier.)

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

**Worked example (population vs sample, side by side).** Suppose the five values $2, 4, 6, 8, 10$ are the *entire* population. The mean is $\mu = (2+4+6+8+10)/5 = 6$. The deviations from $\mu$ are $-4, -2, 0, 2, 4$, and their squares are $16, 4, 0, 4, 16$, which sum to $40$. The population variance divides that sum by $N = 5$:

$$
\sigma^2 = \frac{40}{5} = 8, \qquad \sigma = \sqrt{8} \approx 2.83.
$$

If instead those same five numbers were a *sample* drawn from a larger population, you would divide by $n - 1 = 4$ (Bessel's correction) and get $s^2 = 40/4 = 10$, $s = \sqrt{10} \approx 3.16$. Same data, larger number, because the sample formula deliberately inflates the estimate to correct for the downward bias described above. Which one you report depends entirely on whether the numbers in hand *are* the whole population ($/N$) or a sample standing in for one ($/(n-1)$).

**Standard deviation:** $s = \sqrt{s^2}$. The standard deviation has the same units as the data (dollars, meters, seconds), making it more interpretable than variance (which has squared units).

In plain terms, the standard deviation is roughly the **typical distance of a data point from the mean**, the average spread of the data around its center. It is not *exactly* the average distance: because we squared the deviations before averaging and then took the square root, $s$ is the **root-mean-square** distance, which weights large deviations more heavily. (The literal average distance is the *mean absolute deviation*; for the dataset below it is $\frac{6 + 3 + 3 + 6}{4} = 4.5$, a bit smaller than $s \approx 5.48$, precisely because squaring inflates the influence of the two points sitting $6$ away.) So reading $s \approx 5.48$ off the example below says: the four values sit, on average, about $5.5$ units from their mean of $10$.

**Example:** Dataset: 4, 7, 13, 16.

$\bar{x} = (4 + 7 + 13 + 16)/4 = 10$

Deviations from mean: $-6, -3, 3, 6$

Squared deviations: $36, 9, 9, 36$

$s^2 = (36 + 9 + 9 + 36)/(4-1) = 90/3 = 30$

$s = \sqrt{30} \approx 5.48$

![A number line from 0 to 20 showing the four data points 4, 7, 13, 16 as dots, with the mean marked by a vertical line at 10. From the mean, a colored arrow runs to each point labeled with its deviation: minus 6 to the point at 4 and minus 3 to the point at 7 (in red, below the mean), and plus 3 to 13 and plus 6 to 16 (in green, above the mean). A shaded band spans mean minus s to mean plus s, from about 4.52 to 15.48, with a double-headed arrow marking its half-width s approximately 5.48. The title reads: standard deviation is approximately the typical distance of a point from the mean.](./media/stats-standard-deviation.png)

The picture makes the "typical distance" reading concrete: the shaded band is one standard deviation wide on each side of the mean, and its half-width $s \approx 5.48$ sits between the small deviations ($\pm 3$) and the large ones ($\pm 6$), a single number summarizing how far the points typically stray from the center.

### Standardization: z-scores

Once you have a mean and a standard deviation, you can express any single value as **how many standard deviations it sits from the mean**. That number is the **z-score** (read "zee-score"), and computing it is called **standardizing**:

$$
z = \frac{x - \mu}{\sigma}
$$

read as "z equals x minus mu, all over sigma." (For a sample you use $\bar{x}$ and $s$ in place of $\mu$ and $\sigma$.) The subtraction re-centers the data so the mean sits at $z = 0$, and the division rescales it so one standard deviation becomes one unit. A positive $z$ means above the mean, negative means below, and the magnitude is the distance measured in standard deviations: $z = 2$ means "two standard deviations above the mean."

**Worked example.** Take the population $2, 4, 6, 8, 10$ from above, with $\mu = 6$ and $\sigma \approx 2.83$. The value $x = 10$ standardizes to

$$
z = \frac{10 - 6}{2.83} = \frac{4}{2.83} \approx 1.41,
$$

so $10$ sits about $1.41$ standard deviations above the mean. By symmetry $x = 2$ gives $z \approx -1.41$, the same distance below.

**Why standardize?** It puts values measured on different scales onto one common ruler so they can be compared. Suppose a student scores $85$ on test X, where the class averaged $78$ with a standard deviation of $5$, and $90$ on test Y, where the class averaged $85$ with a standard deviation of $10$. The raw $90$ looks better than the $85$, but standardized:

$$
z_X = \frac{85 - 78}{5} = 1.4, \qquad z_Y = \frac{90 - 85}{10} = 0.5.
$$

Relative to classmates, the $85$ was the stronger result ($1.4$ standard deviations above the mean versus only $0.5$). Z-scores are the foundation of the normal-distribution tables and the test statistics that appear throughout [inferential statistics](./inferential-statistics).

## Data Visualization

Visualization is how you explore data before doing any analysis. A chart can reveal patterns, outliers, and distributions that summary statistics miss entirely. Numbers compress data into a few values; plots show you the full picture.

The classic demonstration of this is **Anscombe's quartet**: four datasets with nearly identical means, variances, correlations, and regression lines that look completely different when plotted. The lesson is simple: always plot your data. Summary statistics alone can be deeply misleading.

### Histogram

A histogram divides continuous data into equal-width **bins** and shows the frequency (or density) of observations in each bin. It is the most common way to visualize the **shape of a distribution**.

**What it shows:** The overall shape of the data's distribution: symmetric, skewed left or right, bimodal (two peaks), uniform, or bell-shaped.

**When to use it:** Whenever you have a single quantitative variable and want to understand how values are distributed.

**How to read it:**

- The x-axis represents the range of data values, divided into bins
- The y-axis shows the count (or density) of observations falling in each bin
- Taller bars mean more data points in that range
- Look for: the center (where most data clusters), the spread (how wide the distribution is), the shape (symmetric vs. skewed), and any gaps or outliers

**Bin width matters.** Too few bins hides the shape of the distribution, making everything look uniform. Too many bins creates noise, turning smooth distributions into jagged spikes. There is no single correct bin width; the goal is to reveal the underlying pattern without adding artifacts. Common rules of thumb include Sturges' rule ($k = 1 + \log_2 n$, which returns a bin *count*) and the Freedman-Diaconis rule (bin *width* $= 2 \cdot IQR \cdot n^{-1/3}$, which adapts to spread through the IQR and so resists outliers).

**Worked example.** Suppose you have $n = 100$ exam scores spanning a range of $63$ points (from $35$ to $98$), with an interquartile range of $18$. Sturges' rule gives

$$
k = 1 + \log_2 100 = 1 + 6.64 = 7.64 \approx 8 \text{ bins.}
$$

Freedman-Diaconis gives a width of

$$
2 \cdot 18 \cdot 100^{-1/3} = 36 \cdot 0.2154 \approx 7.76,
$$

and dividing the range by that width, $63 / 7.76 \approx 8.1$, so again about $8$ bins. The two rules agree here (both landing near $8$), which is reassuring, but they need not: Freedman-Diaconis tends to suggest more bins than Sturges for large, heavy-tailed datasets because it keys off the IQR rather than just the count. Treat either number as a starting point, then adjust until the shape reads cleanly.

![Histogram of approximately normal data with the theoretical normal curve overlaid](./media/histogram-with-curve.png)

### Box Plot (Box and Whisker)

A box plot displays the **five-number summary** of a dataset in a single figure: minimum, first quartile ($Q_1$), median, third quartile ($Q_3$), and maximum.

**What it shows:** The center, spread, and skewness of a distribution, plus any outliers.

**When to use it:** When comparing distributions across groups. Box plots are compact, so you can place several side by side.

**How to read it:**

- The **box** spans from $Q_1$ to $Q_3$, covering the interquartile range (IQR), which contains the middle 50% of the data
- The **line inside the box** is the median
- The **whiskers** extend from the box to the most extreme data points within $1.5 \times IQR$ of the box edges. Specifically, the lower whisker reaches to the smallest value $\geq Q_1 - 1.5 \cdot IQR$, and the upper whisker reaches to the largest value $\leq Q_3 + 1.5 \cdot IQR$
- **Dots beyond the whiskers** are potential outliers
- If the median line is not centered in the box, the distribution is skewed

**Worked example (five-number summary and fences).** Carry over the sorted dataset from the quartile computation above:

$$
3,\ 7,\ 8,\ 12,\ 14,\ 15,\ 18,\ 21,\ 22,\ 25,\ 60
$$

We already found the median $15$, $Q_1 = 8$, and $Q_3 = 22$. The **five-number summary** is therefore

$$
\text{min} = 3, \quad Q_1 = 8, \quad \text{median} = 15, \quad Q_3 = 22, \quad \text{max} = 60.
$$

That is the box (from $8$ to $22$, split at $15$) before we place the whiskers. The whiskers do **not** just reach the min and max; they stop at the outlier fences. With $\text{IQR} = 14$:

$$
\text{lower fence} = Q_1 - 1.5 \cdot \text{IQR} = 8 - 21 = -13,
$$
$$
\text{upper fence} = Q_3 + 1.5 \cdot \text{IQR} = 22 + 21 = 43.
$$

Now read the whiskers off the data. The lower whisker reaches the smallest value $\geq -13$, which is the min $3$. The upper whisker reaches the largest value $\leq 43$, which is $25$ (not $60$). The remaining point, $60$, lies beyond the upper fence, so it is plotted as an individual **outlier dot**. This is exactly why the whiskers are defined by fences rather than by the extremes: a single stray value like $60$ is isolated as a dot instead of silently stretching the whisker and hiding the outlier.

![Three box plots side by side showing groups with different medians, spreads, and outliers](./media/boxplot-comparison.png)

### Scatter Plot

A scatter plot shows the relationship between two quantitative variables by plotting each observation as a point at its $(x, y)$ coordinates.

**What it shows:** The direction (positive or negative), form (linear or nonlinear), and strength of association between two variables. It also reveals outliers and clusters.

**When to use it:** Whenever you want to explore the relationship between two quantitative variables before fitting a model.

**How to read it:**

- Each point represents one observation
- An upward trend (left to right) indicates positive association: as $x$ increases, $y$ tends to increase
- A downward trend indicates negative association
- Points tightly clustered around a line indicate strong linear association; a diffuse cloud indicates weak association
- Look for nonlinear patterns (curves), clusters (subgroups), and isolated points (outliers that may be influential)

The **correlation coefficient** $r$ quantifies linear association ($r = 1$ is perfect positive, $r = -1$ is perfect negative, $r = 0$ is no linear relationship). A best-fit line (from linear regression) summarizes the linear trend.

![Scatter plot showing positive correlation with a best-fit regression line](./media/scatter-correlation.png)

### Bar Chart

A bar chart shows frequencies or values for **categorical data**. Each category gets its own bar, and the height of the bar represents the count or measured value.

**What it shows:** How a quantitative value (count, proportion, measurement) varies across discrete categories.

**When to use it:** For categorical (qualitative) data, or when comparing values across distinct groups.

**Bar chart vs. histogram:** These are frequently confused. A histogram shows the distribution of one continuous variable (bins are ranges of values, bars touch). A bar chart shows values for discrete categories (bars are separated by gaps). Using the wrong one misrepresents the data.

| Feature | Histogram | Bar Chart |
|---|---|---|
| Data type | Continuous (quantitative) | Categorical (qualitative) |
| Bars | Touch (bins are adjacent ranges) | Separated by gaps |
| x-axis | Numerical scale | Category labels |
| Order | Determined by data values | Can be arranged in any order |

![Bar chart showing survey results across five categories](./media/bar-chart-example.png)

### Pie Chart

A pie chart shows **proportions of a whole**. The full circle represents 100% of the data, and each slice represents one category's share.

**When it is acceptable:** Showing 2 to 4 categories as parts of a whole, especially when one category dominates and you want to emphasize that.

**Why it is often criticized:** Humans are poor at comparing angles and areas. When a pie chart has 6 or more slices, it becomes very difficult to judge which slices are larger. A bar chart displaying the same proportions is almost always easier to read and compare. For this reason, many statisticians and data visualization experts recommend avoiding pie charts in favor of bar charts.

### Stem-and-Leaf Plot

A stem-and-leaf plot is a text-based display that retains the actual data values while showing the shape of the distribution. Each data value is split into a **stem** (the leading digit or digits) and a **leaf** (the trailing digit).

**When to use it:** For small to moderate datasets (roughly $n < 50$) when you want to see both the distribution shape and the individual values.

**Example:** The following dataset contains 20 exam scores:

$$
47, 52, 55, 58, 61, 63, 65, 67, 68, 70, 72, 73, 75, 78, 79, 81, 83, 85, 91, 95
$$

The stem-and-leaf plot:

```
Stem | Leaf
  4  | 7
  5  | 2 5 8
  6  | 1 3 5 7 8
  7  | 0 2 3 5 8 9
  8  | 1 3 5
  9  | 1 5
```

Reading the first row: the stem is 4 and the leaf is 7, so the value is 47. The third row (stem 6) has leaves 1, 3, 5, 7, 8, representing the values 61, 63, 65, 67, 68. You can see the distribution is roughly symmetric with most scores in the 60s and 70s.

### Dot Plot

A dot plot places one dot for each data point on a number line. When multiple observations share the same value, the dots stack vertically.

**What it shows:** Individual data values and how they cluster along a number line.

**When to use it:** For small datasets (roughly $n < 30$) where you want to see every data point. Dot plots are especially useful for discrete data with repeated values.

**How to read it:** Look for where dots cluster (the center), how far they spread, and any gaps or isolated dots (potential outliers). A dot plot is essentially a histogram where every bin is exactly one value wide and every observation is individually visible.

### Q-Q Plot (Quantile-Quantile)

A Q-Q plot compares the distribution of your data to a theoretical distribution (most commonly the normal distribution). It plots the quantiles of your sample data against the quantiles you would expect if the data came from the theoretical distribution.

**What it shows:** Whether your data follows a particular distribution. For a normal Q-Q plot, it tells you whether your data is approximately normal.

**When to use it:** Before using any statistical method that assumes normality (t-tests, ANOVA, linear regression). Q-Q plots are a core part of regression diagnostics for checking whether residuals are normally distributed.

**How to read it:**

- If the data matches the theoretical distribution, the points fall on or near the $y = x$ reference line
- Points curving upward at both ends indicate **heavy tails** (more extreme values than the normal distribution predicts)
- Points curving downward at both ends indicate **light tails**
- An S-shaped pattern indicates **skewness**
- A few points deviating at the tails while the center is linear suggests the data is approximately normal with some outliers

**Connection to regression diagnostics:** After fitting a linear regression, you plot the residuals on a Q-Q plot to check the normality assumption. If the points deviate substantially from the line, the p-values and confidence intervals from the regression may not be reliable.

![Q-Q plot showing approximately normal data with slight tail deviations](./media/qq-plot.png)

### Heat Map

A heat map is a color-coded matrix where the value in each cell is represented by a color. It turns a table of numbers into a visual pattern.

**What it shows:** Patterns, clusters, and outliers in two-dimensional data. The eye detects color gradients much faster than it can scan a table of numbers.

**Common uses:**

- **Correlation matrices:** Visualize pairwise correlations among many variables at once. Strong positive correlations appear in one color, strong negative in another, and near-zero correlations in a neutral color.
- **Confusion matrices:** In classification, show how predictions map to actual classes.
- **Gene expression data:** Rows are genes, columns are samples, colors represent expression levels.

**How to read it:** Look for blocks of similar color (groups of correlated variables), rows or columns that stand out (variables that behave differently), and the diagonal (which in a correlation matrix is always 1.0).

![A 5x5 correlation matrix displayed as a heat map](./media/correlation-heatmap.png)

### Violin Plot

A violin plot combines a box plot with a **kernel density estimation** (KDE), which is a smoothed version of a histogram. The "violin" shape shows the full distribution of the data, not just the quartiles.

**What it shows:** The distribution shape, including whether the data is multimodal (has multiple peaks). A box plot hides multimodality; a violin plot reveals it.

**When to use it:** When comparing distributions across groups, especially when the distributions might have different shapes (not just different centers or spreads). If one group's data is bimodal and another's is unimodal, a violin plot makes this immediately visible while box plots would look similar.

### Anscombe's Quartet

Anscombe's quartet is a collection of four datasets constructed by statistician Francis Anscombe in 1973. All four datasets have nearly identical summary statistics:

- Mean of $x$: $\bar{x} = 9.0$
- Mean of $y$: $\bar{y} \approx 7.50$
- Standard deviation of $x$: $s_x \approx 3.32$
- Standard deviation of $y$: $s_y \approx 2.03$
- Correlation: $r \approx 0.816$
- Regression line: $y \approx 3.0 + 0.5x$

Yet the four scatter plots look completely different:

1. **Dataset I:** A straightforward linear relationship. The regression line is a good summary.
2. **Dataset II:** A clear nonlinear (parabolic) pattern. The linear regression line misses the shape entirely.
3. **Dataset III:** A near-perfect linear relationship with one extreme outlier that pulls the regression line.
4. **Dataset IV:** Nearly all $x$-values are the same, with a single high-leverage point determining the entire regression. Without that one point, there would be no relationship at all.

![Anscombe's quartet: four datasets with identical statistics but completely different scatter plots](./media/anscombes-quartet.png)

**The lesson:** Summary statistics and regression fits can be identical for datasets that have fundamentally different structures. Always visualize your data. A scatter plot takes seconds to produce and can prevent you from fitting a linear model to nonlinear data, missing outliers that distort your analysis, or drawing conclusions driven by a single influential point.

