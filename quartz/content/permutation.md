---
title: "Permutation"
---

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

The product $3 \times 2 \times 1$ is written as $3!$ (read "3 factorial"). In general, $n!$ means multiplying all whole numbers from $n$ down to $1$:

$$
n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1
$$

By convention, $0! = 1$.

With that foundation, here is the formal definition:

**Permutation:** A permutation refers to an arrangement of elements in a specific order. The order matters in permutations.

**Permutation Formula (without repetition):**

P(n,r) = n! / (n - r)!

Alternate notation: ₙPᵣ or Pᵣⁿ

**Where:**

- **n:** The total number of items in the set
- **r:** The number of items to select and arrange
- **(n-r)!:** The number of ways to arrange the remaining elements not chosen

**Special case:** When selecting all n items: P(n,n) = n!

**Examples:**

1. **How many ways can you arrange 3 books from a shelf of 5 books?**
   
   P(5,3) = 5! / (5-3)! = 5! / 2! = 120 / 2 = 60

2. **How many 4-digit PIN codes can be formed using digits 0-9 without repetition?**
   
   P(10,4) = 10! / 6! = 10 × 9 × 8 × 7 = 5040

3. **How many ways can 5 people be arranged in a line?**
   
   P(5,5) = 5! = 120

## Permutations with Repetition

**Permutations with Repetition:** When elements can be repeated, the formula changes.

**Formula:**

nʳ

Where:
- **n:** Number of choices for each position
- **r:** Number of positions to fill

**Example:** How many 4-digit PIN codes can be formed using digits 0-9 **with repetition allowed**?

10⁴ = 10000 possible codes

## Permutations with Indistinguishable Objects

**Formula:** When you have n objects where some are identical:

n! / (n₁! × n₂! × ... × nₖ!)

Where:
- **n:** Total number of objects
- **n₁, n₂, ..., nₖ:** Number of each type of identical object

**Example:** How many distinct arrangements of the letters in "MISSISSIPPI"?

- Total letters: 11
- M: 1, I: 4, S: 4, P: 2

11! / (1! × 4! × 4! × 2!) = 39916800 / (1 × 24 × 24 × 2) = 34650

