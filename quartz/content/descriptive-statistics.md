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

**Mode:** The most frequently occurring value. A dataset can have multiple modes or no mode. The mode is the only measure of center that works for categorical data (like "red, blue, green").

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

In plain terms, the standard deviation is roughly the **typical distance of a data point from the mean**, the average spread of the data around its center. It is not *exactly* the average distance: because we squared the deviations before averaging and then took the square root, $s$ is the **root-mean-square** distance, which weights large deviations more heavily. (The literal average distance is the *mean absolute deviation*; for the dataset below it is $\frac{6 + 3 + 3 + 6}{4} = 4.5$, a bit smaller than $s \approx 5.48$, precisely because squaring inflates the influence of the two points sitting $6$ away.) So reading $s \approx 5.48$ off the example below says: the four values sit, on average, about $5.5$ units from their mean of $10$.

**Example:** Dataset: 4, 7, 13, 16.

$\bar{x} = (4 + 7 + 13 + 16)/4 = 10$

Deviations from mean: $-6, -3, 3, 6$

Squared deviations: $36, 9, 9, 36$

$s^2 = (36 + 9 + 9 + 36)/(4-1) = 90/3 = 30$

$s = \sqrt{30} \approx 5.48$

![A number line from 0 to 20 showing the four data points 4, 7, 13, 16 as dots, with the mean marked by a vertical line at 10. From the mean, a colored arrow runs to each point labeled with its deviation: minus 6 to the point at 4 and minus 3 to the point at 7 (in red, below the mean), and plus 3 to 13 and plus 6 to 16 (in green, above the mean). A shaded band spans mean minus s to mean plus s, from about 4.52 to 15.48, with a double-headed arrow marking its half-width s approximately 5.48. The title reads: standard deviation is approximately the typical distance of a point from the mean.](./media/stats-standard-deviation.png)

The picture makes the "typical distance" reading concrete: the shaded band is one standard deviation wide on each side of the mean, and its half-width $s \approx 5.48$ sits between the small deviations ($\pm 3$) and the large ones ($\pm 6$), a single number summarizing how far the points typically stray from the center.

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

**Bin width matters.** Too few bins hides the shape of the distribution, making everything look uniform. Too many bins creates noise, turning smooth distributions into jagged spikes. There is no single correct bin width; the goal is to reveal the underlying pattern without adding artifacts. Common rules of thumb include Sturges' rule ($k = 1 + \log_2 n$) and the Freedman-Diaconis rule (bin width $= 2 \cdot IQR \cdot n^{-1/3}$).

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

