---
title: "Combination"
---

## Why Combinations?

Suppose you have 5 people (Alice, Bob, Carol, Dave, and Eve) and you need to choose 3 of them to form a team. How many different teams are possible?

At first, you might count ordered selections. Using [permutations](permutation.md), there are $P(5,3) = 5 \times 4 \times 3 = 60$ ways to pick 3 people in order. But a team is not an ordered arrangement. The team {Alice, Bob, Carol} is the same team as {Carol, Alice, Bob}; the order you list them does not matter.

So how many times has each team been counted? Every group of 3 people can be arranged in $3! = 3 \times 2 \times 1 = 6$ different orders. That means each unique team appears 6 times in the 60 ordered selections.

To get the number of distinct teams, divide out the duplicate orderings:

$$
\frac{60}{6} = 10
$$

There are 10 possible teams. The key insight is: **when order does not matter, divide the permutation count by $r!$** to remove the repeated arrangements within each selection.

**Combination:** A combination refers to a selection of items from a larger set, where the **order does not matter**. Unlike permutations, where order is important, combinations consider only which items are selected, not the arrangement.

**Combination Formula (without repetition):**

C(n,r) = (n choose r) = n! / (r!(n - r)!)

Alternate notation: ₙCᵣ or Cᵣⁿ or (n choose r)

**Where:**

- **n:** The total number of items in the set
- **r:** The number of items to select
- **r!:** Divides out the arrangements within the selection (since order doesn't matter)

**Relationship to Permutations:**

C(n,r) = P(n,r) / r!

Combinations are permutations divided by the number of ways to arrange r items, because order doesn't matter.

**Examples:**

1. **How many ways can you choose 3 books from a shelf of 5 books?**
   
   C(5,3) = 5! / (3! × 2!) = 120 / (6 × 2) = 10

2. **A pizza shop offers 10 toppings. How many 3-topping pizzas can you make?**
   
   C(10,3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 120

3. **A committee of 4 people must be formed from a group of 12. How many ways?**
   
   C(12,4) = 12! / (4! × 8!) = 495

## Properties of Combinations

**Symmetry Property:**

(n choose r) = (n choose n-r)

Choosing r items is the same as choosing which (n-r) items to leave out.

**Example:** (5 choose 2) = (5 choose 3) = 10

**Pascal's Identity:**

(n choose r) = (n-1 choose r-1) + (n-1 choose r)

This forms Pascal's Triangle:

```
         1
       1   1
     1   2   1
   1   3   3   1
 1   4   6   4   1
1  5  10  10  5  1
```

Each number is the sum of the two numbers above it.

**Connection to Binomial Theorem:**

(n choose r) represents the coefficient of xʳ in the expansion of (1+x)ⁿ.

## Combinations with Repetition

**Formula:** When items can be selected more than once:

C(n+r-1, r) = (n+r-1)! / (r!(n-1)!)

Where:
- **n:** Number of different types of items
- **r:** Number of items to select (repetition allowed)

**Example:** How many ways can you select 3 donuts from 5 types if you can choose the same type multiple times?

C(5+3-1, 3) = C(7,3) = 7! / (3! × 4!) = 35

## Permutation vs Combination Summary

| Aspect | Permutation | Combination |
|--------|-------------|-------------|
| **Order matters?** | Yes | No |
| **Formula** | n!/(n-r)! | n!/(r!(n-r)!) |
| **Example** | Arranging books | Selecting books |
| **Relationship** | C(n,r) = P(n,r)/r! | P(n,r) = C(n,r) × r! |

**Key Question to Ask:** Does the order of selection matter?

- **Yes** → Use Permutation
- **No** → Use Combination

