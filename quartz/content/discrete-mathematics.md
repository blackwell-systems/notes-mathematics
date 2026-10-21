---
title: "Discrete Mathematics: Learning Map"
prerequisites: ["mathematical-notations"]
enables: ["structural-induction", "state-machines-invariants", "combinatorial-reasoning", "generating-functions", "advanced-graph-theory"]
---

> [!abstract] Reading map, not a prerequisite claim
> **Builds on:** [Mathematical Notations](./mathematical-notations). This is a **navigation hub**: each linked chapter states its own prerequisites. You do not need to read every branch in strict order.
> **Leads to:** proof, algorithms, counting, graphs, automata, abstract algebra, and probability.

Discrete mathematics studies **separate, countable, or finitely describable structures**—sets, logical statements, integers, finite graphs, recursive trees, and computations. It is not a single isolated branch: its ideas connect proof theory, combinatorics, number theory, computer science, and parts of algebra and probability.

This map links **existing chapters** with the new developments, rather than copying the same definitions into another article.

## The core route: from reasoning to structure

| Stage | Read | Central question |
|---|---|---|
| 1 | [Propositional Logic](./propositional-logic-zeroth-order-logic) and [Predicate Logic](./predicate-logic-first-order-logic) | What exactly does a statement assert, and how is a valid inference justified? |
| 2 | [Set Theory](./set-theory) and [Functions & Relations](./functions-relations) | What are the objects, and how can they be paired or transformed? |
| 3 | [Equivalence Relations and Quotients](./equivalence-relations) | When do different objects count as the same for a purpose? |
| 4 | [Order Theory](./order-theory) | Which objects are comparable, and what happens when they are not? |
| 5 | [Structural Induction and Recursive Definitions](./structural-induction) | How can infinitely many finite objects be defined and verified from a few rules? |
| 6 | [State Machines, Invariants, and Termination](./state-machines-invariants) | How can we prove that *every possible execution* obeys a property and eventually stops? |

These topics are the foundations used by many other branches; they need not be considered a linear list of formal prerequisites.

## The counting route

Start with [Permutations](./permutation) and [Combinations](./combination). They establish factorials, binomial coefficients, stars and bars, pigeonhole arguments, and inclusion-exclusion.

Continue with [Combinatorial Reasoning and Counting Identities](./combinatorial-reasoning) for bijections, double counting, Catalan numbers, Stirling numbers, and Bell numbers. Then [Generating Functions](./generating-functions) translates recursive counting into algebra on formal power series.

[Sequences and Series](./sequences-and-series#recurrence-relations) supplies recurrence relations, while [Group Actions and Symmetry](./group-actions-symmetry#burnsides-lemma-count-objects-up-to-symmetry) explains counting modulo rotations and other symmetries.

The distinction: a formula gives an **answer**; a combinatorial proof shows **why that answer counts the intended objects**.

## The graphs and algorithms route

[Graph Theory](./graph-theory) introduces vertices, edges, connectivity, trees, BFS/DFS, shortest paths, spanning trees, coloring, and planar examples.

[Advanced Graph Theory](./advanced-graph-theory) develops DAGs, topological order, strongly connected components, Hall's marriage theorem, augmenting paths, matching, flow networks, and the max-flow/min-cut principle.

[Asymptotic Notation](./asymptotic-notation) measures algorithm growth. [State Machines and Invariants](./state-machines-invariants) explains algorithm **correctness** and **termination**. An efficient algorithm need not be correct, and a correct partial specification need not guarantee termination; these are distinct proof obligations.

## The arithmetic and probability routes

- [Peano Arithmetic](./peano-arithmetic) constructs the natural-number operations and proves induction-based laws.
- [Number Theory](./number-theory) develops divisibility, Euclid's algorithm, congruences, modular inverses, the Chinese Remainder Theorem, and Euler's theorem.
- [Prime Factorization](./prime-factorization) studies primes and the unique factorization structure.
- [Probability](./probability) develops discrete random variables, conditional probability, distributions, and expectation.
- [Information Theory](./information-theory) studies entropy and coding, connecting discrete probability to optimal information representation.

## What is intentionally outside the present core

A complete theory-of-computation sequence would also include **finite automata, regular and context-free languages, computability, and computational complexity**. The current core introduces transition systems and SAT concepts, but it does **not** yet claim to provide full standalone treatment of automata or complexity theory.

Likewise, advanced combinatorics includes Ramsey theory, analytic combinatorics, integer partitions, and probabilistic combinatorics. These remain future specialization branches; this hub distinguishes covered foundations from that frontier.

## How to use this map

If the problem is about *logical validity*, follow logic. If it is about *counting*, follow combinatorial reasoning and generating functions. If it is about *a process*, use induction, invariants and termination. If it is about *network structure or capacity*, follow graph theory, matchings and flows.

The aim of the collection is a coherent set of **proved connections**, not simply a catalog of disconnected terms.
