---
title: "Permutation"
---

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

