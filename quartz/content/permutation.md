---
title: "Permutation"
prerequisites: ["set-theory"]
enables: ["combination", "probability"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Set Theory](./set-theory)
> **Leads to:** [Combinations](./combination) · [Probability](./probability)

## Why Permutations?

Imagine you have 3 people (Alice, Bob, and Carol) and 3 chairs in a row. How many different ways can they sit down?

- For the **first chair**, you can choose any of the 3 people.
- For the **second chair**, only 2 people remain.
- For the **third chair**, only 1 person is left.

So the total number of seating arrangements is $3 \times 2 \times 1 = 6$.

Here are all six arrangements:

| Chair 1 | Chair 2 | Chair 3 |
|---------|---------|---------|
| Alice   | Bob     | Carol   |
| Alice   | Carol   | Bob     |
| Bob     | Alice   | Carol   |
| Bob     | Carol   | Alice   |
| Carol   | Alice   | Bob     |
| Carol   | Bob     | Alice   |

Notice that the **order matters**: Alice-Bob-Carol is a different arrangement from Carol-Bob-Alice, even though the same people are involved. This idea of counting ordered arrangements is exactly what a permutation captures.

![A top-down counting tree for seating 3 people A, B, C in 3 chairs. From a single start node at the top, Chair 1 branches into 3 choices A, B, C. From each of those, Chair 2 branches into the 2 remaining people. From each of those, Chair 3 branches to the 1 person left. The tree ends in 6 leaves, each spelling out one full arrangement: ABC, ACB, BAC, BCA, CAB, CBA. Stage labels on the left read Chair 1 has 3 choices, Chair 2 has 2 choices, Chair 3 has 1 choice, and the total is 3 times 2 times 1 equals 3 factorial equals 6.](./media/perm-counting-tree.png)

The tree shows *why* the counts multiply: each of the 3 first-chair choices opens up 2 second-chair choices, and each of those opens 1 more, so the number of complete paths is $3 \times 2 \times 1$.

The product $3 \times 2 \times 1$ is written as $3!$ (read "3 factorial"). In general, $n!$ means multiplying all whole numbers from $n$ down to $1$:

$$
n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1
$$

By convention, $0! = 1$.

With that foundation, here is the formal definition:

**Permutation:** A permutation refers to an arrangement of elements in a specific order. The order matters in permutations.

**Permutation Formula (without repetition):**

$$
P(n,r) = \frac{n!}{(n-r)!}
$$

Alternate notation: $_nP_r$ or $P_r^n$

**Where:**

- **$n$:** The total number of items in the set
- **$r$:** The number of items to select and arrange
- **$(n-r)!$:** The factor divided out to cancel the arrangements of the $n-r$ unchosen elements, since only the $r$ selected positions should be counted

**Special case:** When selecting all $n$ items: $P(n,n) = n!$

**Examples:**

1. **How many ways can you arrange 3 books from a shelf of 5 books?**

   $$P(5,3) = \frac{5!}{(5-3)!} = \frac{5!}{2!} = \frac{120}{2} = 60$$

2. **How many 4-digit PIN codes can be formed using digits 0-9 without repetition?**

   $$P(10,4) = \frac{10!}{6!} = 10 \times 9 \times 8 \times 7 = 5040$$

3. **How many ways can 5 people be arranged in a line?**

   $$P(5,5) = 5! = 120$$

![Two panels showing that filling positions multiplies the available choices. The left panel, without repetition for P of 5,3, has three boxes labeled 5, 4, and 3, decreasing because each pick removes a person, with the product 5 times 4 times 3 equals 60 and a note that this equals 5 factorial over 2 factorial since the unused 2 factorial cancels. The right panel, with repetition for a 4-digit PIN, has four boxes each labeled 10, since any of the ten digits can repeat, with the product 10 times 10 times 10 times 10 equals 10 to the fourth equals 10000 and a note that each position is independent so the choices do not shrink.](./media/perm-slots.png)

The two panels capture the whole distinction: **without** repetition the choices shrink by one each step (giving $\frac{n!}{(n-r)!}$), while **with** repetition every position keeps all $n$ choices (giving $n^r$).

### Explore it interactively

Pick $n$ (read "n", the size of the pool) and $r$ (read "r", how many you arrange) below. The widget shows the factorial cancellation in $P(n,r) = \frac{n!}{(n-r)!}$ (read "the number of permutations of n things taken r at a time") and, for small cases, draws the actual ordered arrangements so the count is concrete. Watch how swapping the order of two tokens produces a **different** arrangement: that is what "order matters" means.

<iframe src="/static/interactive/perm-explorer.html" width="100%" height="560" style="border:none;"></iframe>

## Permutations with Repetition

**Permutations with Repetition:** When elements can be repeated, the formula changes.

**Formula:**

$$
n^r
$$

Where:
- **$n$:** Number of choices for each position
- **$r$:** Number of positions to fill

**Example:** How many 4-digit PIN codes can be formed using digits 0-9 **with repetition allowed**?

$$10^4 = 10000 \text{ possible codes}$$

## Permutations with Indistinguishable Objects

**Formula:** When you have $n$ objects where some are identical:

$$
\frac{n!}{n_1! \, n_2! \cdots n_k!}
$$

Where:
- **$n$:** Total number of objects
- **$n_1, n_2, \ldots, n_k$:** Number of each type of identical object

**Example:** How many distinct arrangements of the letters in "MISSISSIPPI"?

- Total letters: 11
- M: 1, I: 4, S: 4, P: 2

$$\frac{11!}{1! \, 4! \, 4! \, 2!} = \frac{39916800}{1 \times 24 \times 24 \times 2} = 34650$$

![The word MISSISSIPPI shown as eleven letter tiles in order, color-coded by letter: the single M in one color, the four I tiles in another, the four S tiles in a third, and the two P tiles in a fourth, with a legend giving the counts M times 1, I times 4, S times 4, P times 2. The reasoning below explains that there are 11 factorial orderings of the eleven tiles, but permuting the four identical I tiles among themselves, in 4 factorial ways, does not change the word, and likewise for the four S tiles and the two P tiles, so those are divided out. The formula reads 11 factorial divided by the product 1 factorial times 4 factorial times 4 factorial times 2 factorial equals 34650.](./media/perm-mississippi.png)

## Circular Permutations

The formulas above count arrangements **in a row**, where there is a first position, a second position, and so on. But sometimes we arrange objects **around a circle**, such as people seated at a round table. On a circle there is no fixed starting seat: rotating everyone one seat to the left gives the same arrangement, because each person still has the same neighbors.

**The rotation problem:** Take $n$ (read "n") people around a round table. If we naively used $n!$ (read "n factorial") arrangements as if the seats were in a row, we would count every distinct seating $n$ times, once for each of the $n$ rotations that leave the neighbor pattern unchanged. To correct for this, we fix one person as a reference point and arrange the remaining $n-1$ people relative to them.

**Formula (circular permutations, arrangements distinguishable up to rotation):**

$$
(n-1)!
$$

**Example:** How many ways can 5 people be seated around a round table?

$$(5-1)! = 4! = 4 \times 3 \times 2 \times 1 = 24$$

Compare this to the $5! = 120$ arrangements in a row: the circular count is smaller by a factor of $5$, exactly the number of rotations.

**Reflections (necklaces and bracelets):** If, in addition to rotations, a clockwise arrangement is considered the same as its mirror image (as with a bracelet you can flip over, or beads on a necklace), we also divide by $2$:

$$
\frac{(n-1)!}{2} \quad (n \geq 3)
$$

**Example:** Distinct bracelets from 5 different beads:

$$\frac{(5-1)!}{2} = \frac{24}{2} = 12$$

![Two panels on circular arrangements of 5 people or beads. The left panel, around a table, shows people numbered 1 to 5 seated around a circle with a curved rotate arrow, illustrating that rotating everyone one seat leaves every person's neighbors unchanged, so the 5 rotations of a seating all count as one; the arithmetic reads 5 factorial in a row, but each table seating is counted 5 times, so 5 factorial over 5 equals 4 factorial equals 24. The right panel, a bracelet, shows a ring of 5 beads next to its mirror image joined by a flip arrow, illustrating that a bracelet can be turned over so a clockwise arrangement equals its reflection; dividing by 2 more gives 4 factorial over 2 equals 12.](./media/perm-circular-bracelet.png)

