---
title: "Order Theory: Preorders, Posets, and Lattices"
prerequisites: ["set-theory", "functions-relations", "equivalence-relations"]
enables: ["category-theory-foundations", "real-analysis", "general-topology-foundations"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [sets](./set-theory), [binary relations](./functions-relations#relation), and [equivalence classes](./equivalence-relations).
> **Leads to:** [real-number bounds](./real-analysis#supremum-and-infimum), [set-theoretic well-ordering](./set-theory#ordinals-and-well-ordering), and [posets as categories](./category-theory-foundations#a-partial-order-is-a-category).

**For review:** Jump to the [Chapter Reference](#chapter-reference) for definitions and theorem statements in tables.

## Why study order theory?

**Suppose one permission set allows read and write, while another allows read and share. Which is more permissive?**

Neither contains the other: each grants an action the other lacks. But we can still identify what they share (**read**) and the permissions needed to include both (**read, write, share**). The comparison is useful even without a winner.

**Order theory studies relationships like this.** Instead of requiring every pair of objects to be ranked, it asks what follows when one object is **contained in**, **depends on**, or **can reach** another. The objects might be sets, tasks, programs, or states of a system. What matters is the structure of their comparisons.

Now compare **named roles** rather than permission sets. `Editor` and `Author` might grant exactly the same actions while remaining distinct roles. Each is no more permissive than the other. This motivates a **preorder**: a comparison can treat different objects as equivalent *for a particular purpose* without declaring them identical.

Once we understand these relationships, we can ask deeper questions. What do two states have in common? What is the smallest state that includes both? When can repeated updates reach a stable result? The chapter builds the tools for answering such questions, progressing from preorders and partial orders to lattices, order duality, fixed points, and connections between different representations.

### The organizing idea: different comparisons, the same axioms

> [!intuition] An order is not necessarily a ranking of numbers
> An **order relation** tells us when one object is **below, before, contained in, or less informative** than another. These are only examples: **the objects can be anything we choose to study**—numbers, sets, tasks, programs, propositions, graph vertices, or abstract elements. What matters is whether **the comparison we define** satisfies the relevant axioms, not what kinds of objects we compare.
>
> **Different relationships can satisfy the same structural axioms.** That is why one theory can study all of them: a proof using only those axioms can apply in every setting where they hold.

In [Functions & Relations](./functions-relations#from-binary-relations-to-preorders), we began with an arbitrary relation $R\subseteq P\times P$ and wrote $aRb$ whenever $(a,b)\in R$. Order theory asks which of those relations satisfy additional axioms. Changing the symbol alone cannot supply those properties.

This is another instance of the [common set–structure–axioms pattern](./set-theory#the-common-thread-set-structure-axioms): **the set supplies the objects; the chosen relation supplies the comparison; the axioms determine whether we have a preorder, partial order, or total order.** The same collection can support different orders, or a relation that is not an order at all.

Throughout this chapter, $P$ stands for **whichever set of objects we are studying**, and $\preceq$ (read "precedes or is equal to," or "is below in this order") is our **generic name for an order-like comparison on that set**. It is not another kind of numerical less-than. Its meaning is specified **when we choose the objects and their relation**.

> [!distinction] The general symbol is not an extra comparison
> We use $\preceq$ when stating a definition or theorem that should work for many kinds of order. When we choose a concrete setting, we can replace it with that setting's familiar symbol:
> - **Numbers:** $\preceq$ can mean $\leq$ ("less than or equal to").
> - **Sets:** $\preceq$ can mean $\subseteq$ ("is a subset of").
> - **Positive integers under divisibility:** $\preceq$ can mean $\mid$ ("divides").
> - **Vertices of a directed graph:** $\preceq$ can mean $\leadsto$ ("can reach by a directed path").
>
> These are **different relations**, not four names for one universal comparison. The symbol $\preceq$ is simply the common notation we use to reason about whichever relation has been chosen.

The table uses each relation's **conventional concrete symbol** rather than repeating $\preceq$ in every row:

| Objects being compared | What the comparison means | Concrete example |
| --- | --- | --- |
| Real numbers | $a\leq b$: $a$ is no greater than $b$ | $2\leq 6$ |
| Sets | $A\subseteq B$: every member of $A$ is in $B$ | $\{r\}\subseteq\{r,w\}$ |
| Positive integers | $a\mid b$ (read "a divides b"): $b$ is an integer multiple of $a$ | $2\mid6$ |
| Vertices in a directed graph | $u\leadsto v$: a directed path goes from $u$ to $v$, possibly of length zero | $u\leadsto v$ along a path |

**Watch the notation become concrete.** Choose $P:=\mathcal P(\{r,w\})$, the set of all subsets of $\{r,w\}$, and **define** the comparison by

$$
A\preceq B\quad\Longleftrightarrow\quad A\subseteq B.
$$

With this choice, $\{r\}\preceq\{r,w\}$ and $\{r\}\subseteq\{r,w\}$ say **exactly the same thing**. We have not introduced two relationships. We have given the general symbol a particular meaning.

Now consider the abstract rule of **transitivity**:

$$
a\preceq b,\quad b\preceq c
\quad\Longrightarrow\quad a\preceq c.
$$

For sets with the chosen interpretation, this says that $A\subseteq B$ and $B\subseteq C$ imply $A\subseteq C$. If instead we choose $P:=\mathbb Z_{>0}$ (positive integers) and declare $a\preceq b$ to mean $a\mid b$, the **same abstract rule** says that $a\mid b$ and $b\mid c$ imply $a\mid c$. That ability to reuse one argument is why we introduce generic notation.

**The symbol alone does not determine truth.** For example, $2\leq3$ is true, but $2\nmid3$ (read "two does not divide three"). So $2\preceq3$ has no definite meaning until we specify which relation $\preceq$ denotes.

> [!distinction] Similar shapes do not guarantee the same meaning
> The curved $\preceq$ is a conventional choice for a general **non-strict** comparison, including a preorder that may relate two distinct objects in both directions. The straighter $\leq$ is conventional for numbers, although mathematicians sometimes use it for abstract orders too. The symbols $\subseteq$, $\mid$, and $\leadsto$ tell you which **specific** comparison is intended. Later, $\prec$ denotes a **strict** comparison, which is different from $\preceq$. In a preorder, even $a\preceq b$ and $b\preceq a$ need not imply that $a=b$.

The similarities do not erase the differences. Numerical $\leq$ compares every pair; subset inclusion and positive-integer divisibility can leave some pairs **incomparable**; directed reachability can compare distinct vertices in **both directions** when a cycle exists. The next section turns these differences into precise definitions: **preorder, partial order, and total order**.

**Why this is powerful:** instead of proving separate, unrelated facts about numbers, sets, divisibility, and reachability, we can identify which properties a proof actually needs and reuse the argument across all four. That is the abstraction behind order theory.

## From relations to preorders and partial orders

In the illustration, we compare **named roles by allowed actions**: $r\preceq s$ means every action allowed to $r$ is also allowed to $s$. This comparison tells us about permissions, **not whether the role identities are equal**.

![Six-panel dark diagram comparing preorders, posets and total orders. The first panel lists cumulative axioms: reflexive and transitive for preorders, plus antisymmetry for posets, plus comparability of every pair for total orders. Editor and Author illustrate mutual comparison in a preorder; their equivalence class illustrates quotienting to a poset, while ordering named roles requires a separate tie-break.](./media/ot-preorder-poset-total-story.svg)

*Figure: The first panel shows the **cumulative axioms**: a preorder is **reflexive and transitive**; a poset additionally requires **antisymmetry**; a total order additionally requires **every pair to be comparable**. This is a hierarchy of requirements, **not** a way to turn an existing relation that fails antisymmetry into a poset by relabeling it. Editor and Author compare both ways because their permission sets agree, not because transitivity requires reverse arrows. Passing to **equivalence classes** gives a poset; a total order of the original role names still needs a separate tie-break.*

For a compact guide to how reflexivity, symmetry, antisymmetry, asymmetry, and transitivity constrain arrow direction, see [Properties of Relations](./functions-relations#properties-of-relations).

> [!definition] Preorder
> A relation $\preceq$ on $P$ is a **preorder** when it is:
> - **Reflexive:** $a\preceq a$ for every $a\in P$.
> - **Transitive:** if $a\preceq b$ and $b\preceq c$, then $a\preceq c$.

A preorder need not be antisymmetric. Two different objects may each precede the other. That is **not a defect**: the comparison may be about what objects *can do*, *imply*, or *reach*, rather than whether they are literally identical.

> [!distinction] Transitivity does not cause two-way comparison
> **Reflexivity** only requires $a\preceq a$. **Transitivity** only requires that $a\preceq b$ and $b\preceq c$ imply $a\preceq c$. Neither rule **requires** two distinct objects to compare in both directions, and neither **forbids** it.
>
> In the diagram, Editor and Author compare both ways **because they grant the same actions**. From $\text{Editor}\preceq\text{Author}$ and $\text{Author}\preceq\text{Editor}$, transitivity gives $\text{Editor}\preceq\text{Editor}$ and $\text{Author}\preceq\text{Author}$—facts reflexivity already guarantees. It **does not** give $\text{Editor}=\text{Author}$.
>
> The additional rule **antisymmetry** *would* force equality whenever both directions hold. A partial order requires that rule; a preorder does not. To construct a poset from **this particular preorder**, we must instead compare classes of permission-equivalent roles, not pretend the original roles have become identical.

### Why not require antisymmetry immediately?

Suppose two software components are different implementations of the same externally observable behavior. We may be able to say "implementation A provides at least the capabilities of B" and also the reverse. **That does not make their source code, ownership, or identities equal.** **Remember:** antisymmetry requires **every two-way comparison to imply actual equality**: if $a\preceq b$ and $b\preceq a$, then $a=b$. It does **not** turn different objects into the same object; rather, their mutual comparison shows that the relation is **not antisymmetric on the original objects**. Insisting on antisymmetry would force us either to compare equivalence classes instead of the original objects or to abandon the useful comparison.

A preorder can recognize two different objects as **equivalent for the purpose of one comparison** without claiming that the objects themselves are identical. This is the reason preorders appear before posets.

> [!distinction] Equivalent under a comparison does not mean the same object
> Imagine two separately named roles, **Viewer** and **Auditor**, each granting only **read** permission. Compare roles by the permissions they grant. Then both comparisons hold:
>
> $$
> \text{Viewer}\preceq\text{Auditor}
> \qquad\text{and}\qquad
> \text{Auditor}\preceq\text{Viewer}.
> $$
>
> But **Viewer and Auditor are still two distinct roles**: they may have different identities, users, or purposes. Mutual comparison tells us only that **this particular test cannot distinguish them**.
>
> If we care only about permissions, we can construct a **new poset whose elements are groups of equivalent roles**, such as the class $\{\text{Viewer},\text{Auditor}\}$. We have **not deleted, renamed, or merged the original roles in the application**. We have changed what counts as one element in our mathematical model.
>
> **Preorder:** keep the separate roles, even when they compare both ways. **Quotient poset:** treat each mutually equivalent group as a single element **in the new structure**.

That distinction is the point of [passing from a preorder to its quotient poset](#turning-a-preorder-into-a-poset): *equivalent for this comparison* is weaker than *literally equal*.

### Three places preorders arise naturally

#### 1. Roles and permissions: why capability comparisons can form a preorder

Let $R$ be a set of **named roles**, and let $A(r)$ be the set of actions permitted to role $r$. Define

$$
r\preceq s\quad\Longleftrightarrow\quad A(r)\subseteq A(s).
$$

Read $r\preceq s$ as "role r grants no more actions than role s." This relation is **reflexive** because every permission set is a subset of itself, and **transitive** because subset inclusion is transitive. But the elements being compared are **named roles**, not permission sets, so antisymmetry can fail. A partial order can compare capabilities too; what matters is whether two-way comparison forces equality of the *elements being ordered*:

| Role | Allowed actions |
| --- | --- |
| Viewer | read |
| Auditor | read |
| Editor | read, write |
| Publisher | read, publish |

Here $\text{Viewer}\preceq\text{Auditor}$ **and** $\text{Auditor}\preceq\text{Viewer}$, yet the roles have different names and identities. Both are below Editor and Publisher, while Editor and Publisher are incomparable because each grants an action the other lacks. **The original roles are not merged:** a later quotient creates a separate mathematical object, the equivalence class containing Viewer and Auditor.

**Why useful?** An access-control audit can group roles with identical effective privileges, identify roles that are strictly more permissive, and distinguish incomparable privileges. The system can still keep the original role names for assignments and audit logs. This is a simplified action-set model; contextual or conditional authorization policies require a richer description of allowed behavior.

#### 2. Logical implication: different statements can mean the same thing

Let $P$ and $Q$ be predicates about a real input $x$, and define

$$
P\preceq Q\quad\Longleftrightarrow\quad
\text{for every }x\in\mathbb R,\ P(x)\Rightarrow Q(x).
$$

The arrow $\Rightarrow$ is read "implies." The statement $P\preceq Q$ means **every case satisfying P also satisfies Q**: P is at least as restrictive as Q. Why does that give us a preorder? We can **derive both required properties from the meaning of implication**.

> [!proof] Why implication is reflexive and transitive
> **What implication means:** $A\Rightarrow B$ is false only if $A$ is true and $B$ is false. When $A$ is false, the implication is true: it does not claim that $A$ must hold.
>
> **Reflexivity:** Choose any real input $x$. If $P(x)$ is true, then $P(x)$ is true. If $P(x)$ is false, $P(x)\Rightarrow P(x)$ is still true because its premise is false. Either way, $P(x)\Rightarrow P(x)$ holds. Since this works for **every** $x$, the definition gives $P\preceq P$.
>
> **Transitivity:** Assume $P\preceq Q$ and $Q\preceq T$. Choose any real input $x$ and suppose $P(x)$ holds. The first comparison gives $Q(x)$; the second gives $T(x)$. Therefore $P(x)\Rightarrow T(x)$ holds for every $x$, so $P\preceq T$.
>
> **Concrete chain:** $x>10$ implies $x>5$, and $x>5$ implies $x>0$. So $x>10$ implies $x>0$.
>
> We have proved both preorder axioms. Neither proof requires two mutually implying predicates to be literally the same expression.

Take $P(x):\iff x>10$, $Q(x):\iff x>0$, and $T(x):\iff (x\ge0\ \text{and}\ x\ne0)$. Then $P\preceq Q$, and $Q\preceq T$ **and** $T\preceq Q$. The expressions $Q$ and $T$ are different formulas, even though they have exactly the same truth value for every real input.

**Why useful?** Query optimizers, theorem provers, validation rules, and type-refinement systems compare predicates by implication. They can recognize equivalent conditions without requiring identical syntax, and distinguish a stronger condition from a weaker one. The relevant notion of equivalence is **logical equivalence in the chosen domain**, not literal textual equality.

#### 3. Directed reachability: cycles are comparisons, not mistakes

Before asking whether one vertex can **reach** another, we need to define the structure we're moving through.

> [!definition] Directed graph, vertex, edge, and path
> A **directed graph** $G=(V,E)$ consists of a set $V$ of **vertices** (the objects, drawn as points) and a set $E\subseteq V\times V$ of **directed edges** (arrows connecting vertices).
>
> An edge $(u,v)\in E$, drawn $u\to v$, allows us to travel **from $u$ to $v$**. It does not automatically allow travel back from $v$ to $u$: that would require another directed edge or path.
>
> A **directed path** from $u$ to $v$ follows a finite sequence of arrows **in their indicated direction**, beginning at $u$ and ending at $v$. Its **length** is the number of edges followed. A path of **length zero** uses no edges and stays at the same vertex. Here paths may revisit vertices; some graph-theory texts call these *walks*, but the reachability relation is the same under either convention.

![A simple diagram labeling a graph's three components: teal circles A, B, and C are vertices; two gold arrows A to B and B to C are directed edges; a purple bracket highlights the path A to B to C, with a short definition of each term beneath.](./media/ot-graph-vertices-edges-paths.svg)

*Figure: The **vertices** are the circles A, B, and C; the **edges** are the individual arrows $A\to B$ and $B\to C$; and the **path** $A\to B\to C$ follows those two edges in sequence. **A path is not necessarily a single edge**: this graph has a path from A to C, but no direct edge $A\to C$.*

![A dark-mode diagram introducing vertices and directed edges, showing arrows from a to b, b to c, c to b, and c to d. The two opposite arrows between b and c allow mutual reachability. The figure explains that directed reachability is reflexive and transitive, while antisymmetry can fail.](./media/ot-directed-graph-reachability.svg)

*Figure: Arrows specify the allowed direction of travel. Reachability is **reflexive** because every vertex reaches itself by a path of length zero, and **transitive** because paths can be joined; these two properties make it a preorder. **Antisymmetry** would additionally require that if $u\preceq v$ and $v\preceq u$, then $u=v$. But the arrows $b\to c$ and $c\to b$ mean both $b\preceq c$ and $c\preceq b$, even though $b\ne c$. Thus, two distinct vertices are mutually reachable: this cycle is a concrete counterexample to antisymmetry, so reachability on this graph is **not a partial order**.*

Now choose **reachability** as our comparison. Define $u\preceq v$ to mean that a directed path runs from vertex $u$ to vertex $v$. Read this as **"$u$ can reach $v$,"** not as a numerical less-than statement.

**Check the preorder properties:**

- **Reflexivity:** every vertex reaches itself by a path of length zero, so $u\preceq u$.
- **Transitivity:** if $u$ can reach $v$ and $v$ can reach $w$, following those paths in sequence shows $u$ can reach $w$.

A **directed cycle** follows one or more arrows and returns to its starting vertex. In the diagram, the two distinct vertices $b$ and $c$ lie on a cycle: both $b\preceq c$ and $c\preceq b$ hold, even though $b\neq c$. This violates **antisymmetry**, so reachability need not be a partial order. The cycle isn't an error; it is exactly what the chosen relation records.

Consider a service-call graph with calls from Scheduler to Worker, Worker back to Scheduler, and Worker to Storage. Scheduler and Worker can reach each other, so both comparisons hold even though they are different services. Both can reach Storage, but Storage has no path back to either.

**Why useful?** Reachability answers which services can be contacted along a chain of calls. The equivalence classes under **mutual reachability** are the strongly connected components. Collapsing them gives an acyclic summary graph and a partial order between the components, without claiming that the services inside a component are identical. This is developed algorithmically in [Advanced Graph Theory](./advanced-graph-theory#directed-reachability-and-strongly-connected-components).

### A general recipe: order what we observe

The role and predicate examples share one construction. Suppose a set $X$ contains objects with an **observation map** $f:X\to Y$, where $Y$ is a poset. We compare objects by their observations:

$$
x\preceq_f y\quad\Longleftrightarrow\quad f(x)\leq_Y f(y).
$$

For roles, $f(r)$ is the allowed-action set. For predicates, $f(P)$ is the set of inputs on which $P$ is true. In both cases, $Y$ is a set of subsets ordered by inclusion.

> [!theorem] Comparing through observations always gives a preorder
> If $\leq_Y$ is a partial order, then $\preceq_f$ is reflexive and transitive. In fact, $\preceq_f$ is antisymmetric **if and only if** $f$ is injective. Thus distinct objects with identical observations are exactly the obstruction.

> [!proof] The properties are inherited from the observed order
> **Reflexivity:** $f(x)\leq_Y f(x)$ implies $x\preceq_f x$.
>
> **Transitivity:** from $f(x)\leq_Y f(y)$ and $f(y)\leq_Y f(z)$, transitivity in $Y$ gives $f(x)\leq_Y f(z)$.
>
> **Why antisymmetry can fail:** if $x\ne y$ but $f(x)=f(y)$, then $x\preceq_f y$ and $y\preceq_f x$. The observations agree, but the objects do not. Conversely, if $f$ is injective and both $x\preceq_f y$ and $y\preceq_f x$, antisymmetry of $\leq_Y$ gives $f(x)=f(y)$ and injectivity gives $x=y$. This proves the claimed equivalence.

**The payoff:** a preorder is often the correct first model whenever we compare things by *meaning*, *behavior*, or *capabilities*. A poset is what we get once mutually equivalent observations are treated as one object. This provides a recurring link between [equivalence classes](./equivalence-relations), [graph components](./advanced-graph-theory#directed-reachability-and-strongly-connected-components), and order theory.

> [!definition] Partial order and poset
> A **partial order** is a reflexive, transitive, **antisymmetric** relation, where antisymmetry requires
> $$
> a\preceq b\ \text{and}\ b\preceq a\quad\Longrightarrow\quad a=b.
> $$
> A set equipped with its specified partial order, $(P,\preceq)$, is a **partially ordered set** or **poset** (read "POH-set").

> [!tip] Important: “partial” does not mean “partially defined”
> **The relation is defined for every pair.** The word *partial* means only that **not every pair must be comparable**: sometimes neither element is below the other.
>
> $$
> a\npreceq b\qquad\text{and}\qquad b\npreceq a.
> $$
>
> This is called **incomparability**, not an undefined comparison.
>
> **Concrete example:** Under subset inclusion, take $A:=\{\text{read}\}$ and $B:=\{\text{write}\}$. Neither contains the other, so $A$ and $B$ are incomparable. In contrast, $\{\text{read}\}\subseteq\{\text{read},\text{write}\}$ *is* a comparison that holds.
>
> **Do not confuse this with antisymmetry:** if $A\subseteq B$ **and** $B\subseteq A$, then $A=B$. Antisymmetry concerns comparisons that hold in both directions; incomparability concerns pairs for which neither direction holds.

### Worked example: a power set is a poset

Start with $A:=\{a,b\}$. Its **power set** is the set of all its subsets:

$$
\mathcal P(A)=\{\varnothing,\{a\},\{b\},\{a,b\}\}.
$$

A power set alone is just a set. To obtain a **poset**, specify an order on its elements: here, **subset inclusion** $\subseteq$. We claim that $(\mathcal P(A),\subseteq)$ satisfies all three partial-order axioms.

1. **Reflexivity:** every subset contains itself: $X\subseteq X$. For example, $\{a\}\subseteq\{a\}$.
2. **Antisymmetry:** if $X\subseteq Y$ and $Y\subseteq X$, the two subsets have exactly the same elements, so $X=Y$. For example, $\{a\}\subseteq\{a,b\}$, but the reverse inclusion fails.
3. **Transitivity:** if $X\subseteq Y$ and $Y\subseteq Z$, then $X\subseteq Z$. For example, $\varnothing\subseteq\{a\}\subseteq\{a,b\}$ implies $\varnothing\subseteq\{a,b\}$.

**Why is the order partial?** The two middle elements, $\{a\}$ and $\{b\}$, are **incomparable**:

$$
\{a\}\nsubseteq\{b\}\qquad\text{and}\qquad\{b\}\nsubseteq\{a\}.
$$

Neither comparison holds, but the order is still well-defined. The power set is therefore a **poset, not a totally ordered set**.

![The four-element power set of {a,b} under inclusion: the empty set is at the bottom, {a} and {b} are incomparable in the middle, and {a,b} is at the top.](./media/ot-hasse-powerset-ab.svg)

*Figure: The power set ordered by inclusion is a poset. Its two singleton sets are incomparable, so the order is partial rather than total. This is an early example of a **Hasse diagram**—we will [define and construct such diagrams step by step](#hasse-diagrams-constructing-and-reading-a-finite-order) after introducing strict comparisons and chains. We will also see why this diamond is a lattice.*

![Two side-by-side posets compare the chain 1 less than 2 less than 3 less than 4, in which all elements compare, with the four-subset diamond of the set a,b, where the two singleton subsets are incomparable.](./media/ot-total-partial.svg)

*Figure: Both diagrams satisfy the partial-order axioms. The chain is also total; the subset diamond is not because neither singleton contains the other.*

*Looking ahead:* this particular poset is also a **complete lattice**. Unions give least upper bounds and intersections give greatest lower bounds; we will make those terms precise in [Joins, meets, and lattices](#joins-meets-and-lattices).

| Relation | Reflexive | Antisymmetric | Transitive | Every pair comparable |
| --- | --- | --- | --- | --- |
| $\leq$ on $\mathbb R$ | Yes | Yes | Yes | Yes |
| $\subseteq$ on $\mathcal P(\{a,b\})$ | Yes | Yes | Yes | No |
| Divides on positive integers | Yes | Yes | Yes | No |
| Directed reachability with cycles | Yes | Not necessarily | Yes | Not necessarily |
| Congruence modulo three | Yes | No | Yes | No |

> [!distinction] Symmetry versus antisymmetry
> Equivalence relations require symmetry: $a\sim b$ implies $b\sim a$. Partial orders require antisymmetry: if $a\preceq b$ and $b\preceq a$, then $a=b$. The two properties are not logical negations. Equality itself is both symmetric and antisymmetric.

**Examples of each:** “has the same remainder modulo $3$” is symmetric but not antisymmetric ($1$ and $4$ relate both ways, yet differ). Subset containment is antisymmetric but not symmetric ($\{a\}\subseteq\{a,b\}$, not conversely). Equality satisfies both.

### Turning a preorder into a poset

Even if two distinct elements in a preorder may precede each other, we can identify such elements using an equivalence relation:

$$
a\sim b\quad\Longleftrightarrow\quad a\preceq b\ \text{and}\ b\preceq a.
$$

Read: "a is equivalent to b if and only if each precedes the other." This **does not assert $a=b$**: it asserts that the chosen comparison treats them as mutually equivalent. The notation $[a]$ in the theorem below denotes an **equivalence class**, a set of original elements, not a replacement identity assigned to $a$.

> [!theorem] Preorder quotient theorem
> The relation $\sim$ is an equivalence relation. On its equivalence classes, define
> $$
> [a]\leq[b]\quad\Longleftrightarrow\quad a\preceq b.
> $$
> This is **well-defined** and turns $P/{\sim}$ into a poset.

> [!proof] Equivalence, representative independence, and order axioms
> **Equivalence:** reflexivity follows from $a\preceq a$. Symmetry follows because the defining condition is mutual comparison. If $a\sim b$ and $b\sim c$, then $a\preceq b\preceq c$ and $c\preceq b\preceq a$, so $a\sim c$ by transitivity.
>
> **Representative independence:** suppose $a'\sim a$, $b\sim b'$, and $a\preceq b$. We have $a'\preceq a\preceq b\preceq b'$, hence $a'\preceq b'$. The converse implication follows by reversing the roles of the representatives. Therefore the relation on classes is independent of which names we choose.
>
> **Poset axioms:** reflexivity and transitivity descend from the preorder. If $[a]\leq[b]$ and $[b]\leq[a]$, then $a\sim b$, so $[a]=[b]$. This is antisymmetry.

![A preorder with two directed two-way clusters a and b, and c and d, becomes an acyclic two-node order when mutually reachable vertices are collapsed into equivalence classes.](./media/ot-preorder-quotient.svg)

*Figure: Mutual reachability defines equivalence classes. Collapsing the classes removes two-way order between distinct nodes.*

**Follow the four vertices in the figure.** Vertices $a$ and $b$ reach each other, as do $c$ and $d$; there is a path from the first pair to the second, but no path back. The quotient has just two distinct points, $[a]=[b]$ and $[c]=[d]$, with $[a]\leq[c]$ but not $[c]\leq[a]$. Mutual reachability has become equality *of classes*, which is precisely what antisymmetry requires.

For graph reachability, the classes are the **strongly connected components**. Their condensation graph is acyclic, and reachability on its vertices is a partial order.

## Worked proof: divisibility is a poset

Let $a,b$ be **positive** integers. Write $a\mid b$ (read "a divides b") when $b=ak$ for some positive integer $k$.

> [!proof] Verify the three order axioms
> **Reflexive:** $a=a\cdot1$, so $a\mid a$.
>
> **Antisymmetric:** assume $a\mid b$ and $b\mid a$, so $b=ak$ and $a=bm$ for positive integers $k,m$. Then $a=a(km)$. Canceling the nonzero integer $a$ yields $km=1$, forcing $k=m=1$, so $a=b$.
>
> **Transitive:** if $b=ak$ and $c=bm$, then $c=a(km)$ and $a\mid c$.

The restriction to **positive** integers is essential. On all integers, $2\mid -2$ and $-2\mid2$, but $2\neq-2$, so antisymmetry fails.

This poset is **not total**: neither $2\mid3$ nor $3\mid2$. Those numbers are incomparable.

## Strict and non-strict order

### Start with something familiar: comparing ordinary numbers

For ordinary numbers, we already use **two ways to describe the same ordering**:

- $2\leq2$ is true, but $2<2$ is false.
- $2\leq4$ is true, **and** $2<4$ is true.
- $4\leq2$ and $4<2$ are both false.

> [!distinction] Reflexivity versus irreflexivity
> **The property behind this distinction is reflexivity.** A relation $R$ is **reflexive** if $aRa$ holds for *every* element $a$. It is **irreflexive** if $aRa$ holds for *no* element.
>
> Numerical $\leq$ is **reflexive** because $a\leq a$ always holds; numerical $<$ is **irreflexive** because $a<a$ never holds. But $a\leq b$ does **not** assert that $a=b$: it allows equality *or* a comparison between distinct elements. Reflexivity only guarantees **self-comparisons**, not comparisons between distinct elements.

**The symbols do not choose an order for us.** Earlier, $\preceq$ was introduced as a **placeholder** for whichever partial-order relation we have specified: for numbers it could mean $\leq$, for sets $\subseteq$, and for positive integers it could mean divisibility ($\mid$). Only after choosing that relation do we define a *second, derived relation*, written $\prec$: it keeps a comparison $a\preceq b$ **only if $a\neq b$**. We will construct it with an example before writing the general formula.

**Keep the axioms separate:** **reflexivity** requires $a\preceq a$ for every element, but it does **not** require $a\preceq b$ for two different elements. Whether those distinct elements compare is determined by the chosen order; removing self-comparisons does not change that.

### See exactly what changes in a poset

Return to **divisibility**, the partial order we just proved valid. This time, consider only the three positive integers

$$
P:=\{1,2,4\}.
$$

In this poset, saying "$a$ is below $b$" is **shorthand for "$a$ divides $b$."** It is not a new numerical comparison. For example, $1$ is below $4$ because $1\mid4$.

Let's write down **every true comparison**. Remember that a comparison is a statement about a *pair* of elements, not a new element in the poset.

| Using the existing (non-strict) order | Keeping only comparisons between *different* elements |
| --- | --- |
| $(1,1)$, $(2,2)$, $(4,4)$ | ~~$(1,1)$, $(2,2)$, $(4,4)$~~ |
| $(1,2)$, $(1,4)$, $(2,4)$ | $(1,2)$, $(1,4)$, $(2,4)$ |

Each pair $(a,b)$ means **"the comparison from $a$ to $b$ holds"**. For example, $(2,4)$ is present because $2$ divides $4$. The left column includes comparisons of elements **with themselves**; the right column drops exactly those three self-comparisons.

**We have now derived a new relation from the original partial order.** The original relation is unchanged; the derived relation keeps exactly those comparisons that involve **different elements**. Both relations use the same set $P$. The word *strict* describes the new relation, not a separate component or group of elements inside the poset.

Now we can give those two versions names:

- **Non-strict divisibility:** $2\preceq2$ and $2\preceq4$ both hold.
- **Strict divisibility:** $2\prec4$ holds, but $2\prec2$ does **not**.

Here $\prec$ means **"is a proper divisor of"**, not ordinary numerical $<$. This matters: numerically $3<4$, but $3$ does not divide $4$, so $3\nprec4$ **in the divisibility order**.

The same pattern appears with sets: $A\subseteq A$ is true, whereas $A\subsetneq A$ is false. But $\{a\}\subsetneq\{a,b\}$ is true. Thus **$\subseteq$ is to $\subsetneq$ as $\leq$ is to $<$**.

![Comparison of non-strict and strict divisibility on the same set P = {1, 2, 4}. The non-strict relation includes all three self-comparisons, while the derived strict relation removes them and keeps the comparisons between different elements.](./media/ot-strict-nonstrict-derived.svg)

*Figure: Deriving the strict relation removes only self-comparisons. **Reflexivity** requires them in the original partial order; **irreflexivity** excludes them from the derived relation. The comparisons between distinct elements do not change. In particular, no arrows appear in both directions between distinct vertices because divisibility was already **antisymmetric**—not because removing self-loops automatically prevents two-way comparisons.*

### How this relates to the partial-order axioms

These properties restrict **different kinds of comparisons**. Think of $(a,b)$ as a directed arrow $a\to b$:

| Property | What it says | What it forbids |
| --- | --- | --- |
| **Reflexive** | Every $a$ satisfies $aRa$. | Missing self-comparisons |
| **Irreflexive** | No $a$ satisfies $aRa$. | Self-loops $a\to a$ |
| **Antisymmetric** | If $aRb$ and $bRa$, then $a=b$. | Arrows **both ways between distinct elements** |
| **Asymmetric** | If $aRb$, then $bRa$ is false. | All two-way comparisons, **including self-loops** |

**Apply these distinctions to our two orders.** The original non-strict divisibility relation is **reflexive and antisymmetric**: $(1,1)$, $(2,2)$, and $(4,4)$ are present, but distinct elements never compare in both directions. The derived strict relation is **irreflexive** because those self-comparisons are removed, and it **remains antisymmetric** because deleting comparisons cannot introduce a reverse arrow. Having both properties makes it **asymmetric**.

> [!counterexample] Irreflexivity alone does not prevent two-way comparisons
> On $P:=\{a,b\}$ with $a\ne b$, consider the relation
>
> $
> R:=\{(a,b),(b,a)\}.
> $
>
> It has **no self-loops**, so it is **irreflexive**. But $aRb$ **and** $bRa$ both hold for different elements, so it is **not antisymmetric** (and therefore not asymmetric). Removing self-loops from an *arbitrary* relation would not eliminate these opposite arrows.

> [!connection] Why strict orders are asymmetric
> **Irreflexivity** asks whether an element relates to **itself**. **Antisymmetry** asks whether **different** elements can relate in **both directions**. Together they rule out *every* two-way comparison:
>
> $
> \text{Asymmetric}\quad\Longleftrightarrow\quad
> \text{Irreflexive and antisymmetric}.
> $
>
> To see why, suppose $aRb$ and $bRa$ both held. Antisymmetry would force $a=b$, but then irreflexivity would forbid $aRa$. Conversely, asymmetry immediately forbids self-loops and opposite arrows between distinct elements.
>
> This is why a **strict partial order** is both **irreflexive and antisymmetric**, not why it fails antisymmetry. We will also see below that **transitivity plus irreflexivity** already guarantees asymmetry.

> [!distinction] Strict does not mean the reverse, and does not mean immediately next
> If $a\prec b$ is false, it does **not** follow that $b\prec a$ is true. Under divisibility, neither $2\prec3$ nor $3\prec2$ holds: those elements are **incomparable**.
>
> And "strictly below" does **not** mean there is nothing between the two elements. We have $1\prec4$, even though $1\prec2\prec4$. The stronger idea of *immediately below* is introduced through [cover relations in Hasse diagrams](#hasse-diagrams-reconstructing-the-finite-order).

### Only now: the general rule

Let $(P,\preceq)$ be **any** poset. Its strict version is the relation $\prec$ on the **same set** $P$ defined by

$$
a\prec b\quad\Longleftrightarrow\quad a\preceq b\ \text{and}\ a\neq b.
$$

Read: "$a$ is strictly below $b$." In plain English: **the chosen comparison holds, and the elements are different**.

Conversely, we can recover the original non-strict order by adding self-comparisons back:

$$
a\preceq b\quad\Longleftrightarrow\quad a\prec b\ \text{or}\ a=b.
$$

This is why **strict and non-strict are two descriptions of the same order**, not two independent structures. The same comparisons can be recorded either with equality allowed or with equality handled separately.

> [!theorem] Strict and non-strict descriptions correspond
> Starting from a partial order, its strict version is **irreflexive** (nothing is strictly below itself) and **transitive** (if $a\prec b$ and $b\prec c$, then $a\prec c$).
>
> Conversely, start with any **irreflexive and transitive** relation $\prec$. Allow equality as above, and the result is a partial order. So either version determines the other.

**Why is this a theorem rather than just notation?** We have to verify that removing the equality comparisons really leaves a transitive relation—and that adding them back produces reflexivity, antisymmetry, and transitivity. The proof checks both directions.

> [!proof] Show both constructions satisfy their axioms
> **Forward:** $a\prec a$ would require $a\neq a$, impossible. If $a\prec b$ and $b\prec c$, transitivity of $\preceq$ gives $a\preceq c$. If $a=c$, then $a\preceq b\preceq a$ forces $a=b$ by antisymmetry, contradicting strictness. Hence $a\prec c$.
>
> **Backward:** equality makes the new relation reflexive. If $a\preceq b$ and $b\preceq a$ with $a\neq b$, then $a\prec b$ and $b\prec a$, so transitivity gives $a\prec a$, contradicting irreflexivity. Thus it is antisymmetric. Its transitivity follows from the transitivity of $\prec$, together with the cases in which either comparison is equality.

Every transitive irreflexive relation is also **asymmetric**: if both $a\prec b$ and $b\prec a$ held, transitivity would imply $a\prec a$, contradicting irreflexivity. Thus $a\prec b$ prevents $b\prec a$.

**Where we'll use this:** later, "maximal" means **no different element is strictly above it**. We cannot say "nothing is at or above it," because reflexivity guarantees that the element is always at or above itself. [Hasse diagrams](#hasse-diagrams-reconstructing-the-finite-order) narrow strict comparisons further to *immediate* comparisons (cover relations).

## Total orders, chains, and antichains

> [!definition] Total or linear order
> A partial order is **total** (also called **linear**) if, for every $a,b$, either $a\preceq b$ or $b\preceq a$.

The real numbers under $\leq$ are totally ordered. The subsets of $\{a,b\}$ under $\subseteq$ are partially ordered but **not** totally ordered, because $\{a\}$ and $\{b\}$ are incomparable.

A **chain** is a subset of a poset whose elements are pairwise comparable. An **antichain** has no two **distinct** comparable members. In the divisors of thirty, $\{1,2,6,30\}$ is a chain while $\{2,3,5\}$ is an antichain.

A chain is *not* necessarily a contiguous path of immediate cover relations. It may skip intermediate elements.

**Check both types of subset:** among the divisors of $30$, $1\mid6\mid30$ makes $\{1,6,30\}$ a chain even though $1$ and $30$ are not joined by a single cover edge. Meanwhile $2,3,5$ are pairwise incomparable under divisibility, so $\{2,3,5\}$ is an antichain. A **total order** is a poset whose *entire underlying set* is a chain; the usual order on $\{1,2,3,4\}$ is an example.

![Diagram classifying relations by axioms: relations narrow to binary relations, preorders, partial orders and equivalence relations; total orders are partial orders with comparable pairs, while equality is the only overlap of partial orders and equivalence relations on the same set. Two inclusion Hasse diagrams separately highlight a three-element chain and the incomparable singleton antichain. A third diagram shows three isolated vertices under equality: the whole poset is an antichain.](./media/ot-relations-posets-chains-antichains.svg)

*Figure: The upper hierarchy classifies **relations by their axioms**: preorders are reflexive and transitive; partial orders additionally require antisymmetry; total orders additionally compare every pair; equivalence relations instead require symmetry. On a fixed underlying set, **equality is the only relation that is both a partial order and an equivalence relation**. A **poset** is the set together with its chosen partial order. Below, the same inclusion poset is shown twice, with **teal vertices** highlighting a chain and **gold vertices** highlighting an antichain. The third drawing uses **a different poset**—equality on $\{a,b,c\}$—whose entire underlying set is an antichain. These lower pictures preview Hasse diagrams: reflexive loops and transitive shortcuts are omitted. The next example explains why that last relation is still transitive.*

> [!example] How can an entire antichain be a poset if posets must be transitive?
> Take three distinct elements $P:=\{a,b,c\}$ and define the comparison to mean **equality**:
>
> $
> R:=\{(a,a),(b,b),(c,c)\}.
> $
>
> These are **all** the comparisons. Every element relates to itself, but **no two distinct elements compare**. Thus the **entire set** $P$ is an antichain, not just a subset of a larger poset.
>
> Check the three partial-order axioms:
> - **Reflexive:** $(a,a)$, $(b,b)$, and $(c,c)$ are all present.
> - **Antisymmetric:** there cannot be comparisons in both directions between distinct elements, because there are **no comparisons between distinct elements at all**.
> - **Transitive:** the rule says **if** $xRy$ **and** $yRz$, **then** $xRz$. In this particular relation, both premises can hold only when $x=y=z$. The required conclusion is then just $xRx$, which is present.
>
> **Where does vacuous truth enter?** For any choice with $x,y,z$ **not all equal**, at least one premise ($xRy$ or $yRz$) is false. A conditional statement with a false premise is **true vacuously**: there is no counterexample to the rule. For $x=y=z$, the premise is true and the conclusion is true **directly**.
>
> **The important distinction:** transitivity does **not require** comparisons between different objects to exist. It only constrains what must follow **if** existing comparisons can be chained. So this relation is a valid **partial order**, although it is **not total**, and $P$ itself is an antichain.

![Three separate vertices a, b, and c each have a self-loop but no arrows connecting different vertices. Beside the graph, a transitivity check shows that self-comparisons satisfy the implication directly, while other choices have false premises and satisfy the implication vacuously.](./media/ot-antichain-vacuous-transitivity.svg)

*Figure: The full relation diagram includes all three self-comparisons. **Transitivity holds for the all-equal cases and vacuously for the remaining cases**. The later Hasse-diagram convention omits these reflexive loops, leaving three isolated vertices.*




## Hasse diagrams: constructing and reading a finite order

We have defined a **partial order** by its comparisons, but a list of all those comparisons quickly becomes difficult to read. A **Hasse diagram** is a way to **draw a finite poset without drawing every comparison**. Its points represent elements of the poset, and its lines show which elements are *immediately* above others in the chosen order.

A Hasse diagram is not a new ordering rule. **We must first specify the set and its partial order; then we construct the diagram from that information.** The diagram is a compact representation of the order, not a substitute for defining it.

### First define what an edge means

Suppose $(P,\preceq)$ is a **finite poset**, and recall that $a\prec b$ means $a\preceq b$ **and** $a\ne b$.

> [!definition] Cover relation and Hasse diagram
> An element $b$ **covers** an element $a$ if $a$ is strictly below $b$ **with no element of $P$ strictly between them**:
>
> In symbols, $a\lessdot b$ means $a\prec b$ **and there is no** $c\in P$ satisfying $a\prec c\prec b$.
>
> A **Hasse diagram** of a finite poset is constructed by drawing:
> - **One point for each element** of $P$.
> - **One line segment between $a$ and $b$** exactly when $a\lessdot b$ (that is, when $b$ covers $a$).
> - **Higher elements above lower elements**: if $a\lessdot b$, place $b$ higher than $a$.
>
> We omit arrowheads because the direction is understood to be **upward**. We also omit **self-loops** (which merely express reflexivity) and **direct lines for non-cover comparisons** (which can be recovered from transitivity).

The symbol $\lessdot$ is read **“is covered by.”** It is stronger than $\prec$: every cover is a strict comparison, but not every strict comparison is a cover.

### From an ordinary relation diagram to a Hasse diagram

In [Functions & Relations](./functions-relations#constructing-a-relation-diagram-from-first-principles), we constructed a **directed graph of a relation** by drawing **one arrow for every ordered pair**. We can start the same way for a partial order, but a **Hasse diagram is deliberately more economical**: it keeps only those comparisons that are not already explained by an intermediate element.

For a small example, let $P:=\{1,2,4\}$ with $a\preceq b$ meaning **$a$ divides $b$**. The complete relation is

$
R=\{(1,1),(2,2),(4,4),(1,2),(1,4),(2,4)\}.
$

Here is the construction, one change at a time:

1. **Draw the complete relation graph.** Make a vertex for each of $1,2,4$. Draw the three self-loops and the arrows $1\to2$, $1\to4$, and $2\to4$. At this stage, **every pair in $R$ is represented**.
2. **Remove the self-loops.** A partial order is already reflexive, so every element compares with itself without needing a drawn loop.
3. **Remove any direct comparison implied by a longer chain.** Delete $1\to4$ because $1\prec2\prec4$. Keep $1\to2$ and $2\to4$: there is **no element of this poset strictly between either pair**. These remaining comparisons are called **covers**.
4. **Place greater elements higher and erase arrowheads.** Draw $1$ at the bottom, $2$ in the middle, and $4$ at the top, joined by two plain lines. Upward is now the understood direction.

![Three consecutive panels transform the full divisibility relation graph on {1,2,4}, with self-loops and all three distinct arrows, into the two cover relations (comparisons with no intervening element), then a vertical Hasse diagram with 1 below 2 below 4 and no arrowheads.](./media/ot-build-hasse-from-relation.svg)

*Figure: Only **cover relations** remain as drawn lines: $2$ covers $1$ and $4$ covers $2$, since neither pair has an element of $P$ strictly between it. The comparison $1\preceq4$ still holds, but $4$ does **not** cover $1$ because $1\prec2\prec4$. We have not changed the poset; the upward path $1\to2\to4$ recovers that omitted comparison.*

> [!distinction] Why this is different from a diagram of an equivalence relation
> **Equivalence-relation graphs** show all their selected pairs, including reverse arrows and reflexive loops; equivalence classes can be visualized as groups. **Hasse diagrams** belong to **partial orders** and keep only covers. An arbitrary equivalence relation is generally *not* a partial order, so we cannot simply turn its graph into a Hasse diagram by deleting arrows. What determines the correct diagram is **which structure and axioms we have defined**.

With the cover relation defined, we can now construct a less trivial example.

### Construct one from scratch: divisors of twelve

**Step 1 — Choose the elements and specify the order.**

Let

$$
P:=\{1,2,3,4,6,12\},
\qquad
a\preceq b\ \Longleftrightarrow\ a\mid b.
$$

The notation $a\mid b$ means that **$a$ divides $b$ without a remainder**. We use **divisibility**, not numerical size, to decide which elements compare. Divisibility is reflexive, transitive, and antisymmetric on these positive integers, so this is a poset.

**Step 2 — Find the strict comparisons.**

For each $a$, list all *different* elements $b$ for which $a\mid b$. For example, $1\prec2$, $1\prec4$, and $1\prec12$ all hold. **Do not draw all these connections yet**: first decide which are covers.

**Step 3 — Remove comparisons that have an intermediate element.**

The table carries out the complete check. The last column gives precisely the pairs for which there is **no element in between**.

| Element $a$ | Different elements strictly above $a$ | Elements that cover $a$ |
| --- | --- | --- |
| $1$ | $2,3,4,6,12$ | $2,3$ |
| $2$ | $4,6,12$ | $4,6$ |
| $3$ | $6,12$ | $6$ |
| $4$ | $12$ | $12$ |
| $6$ | $12$ | $12$ |
| $12$ | None | None |

Why isn't there a line directly from $1$ to $4$? Because $1\prec2\prec4$: **$2$ lies between them in the chosen order**. Likewise, there is no direct $2$–$12$ line because $2\prec4\prec12$ (also $2\prec6\prec12$).

The **seven cover relations** are therefore

$$
\begin{aligned}
1&\lessdot2,&1&\lessdot3,\\
2&\lessdot4,&2&\lessdot6,\\
3&\lessdot6,&4&\lessdot12,&6&\lessdot12.
\end{aligned}
$$

**Step 4 — Draw one point per element and connect only covers.**

Put $1$ below $2$ and $3$; put $4$ and $6$ above their respective lower neighbors; and put $12$ above $4$ and $6$. Draw exactly the seven cover lines listed above, with **no loops and no arrows**.

![A Hasse diagram constructed from the divisors 1, 2, 3, 4, 6, 12 under divisibility, showing the seven cover lines but omitting reflexive loops and transitive comparisons.](./media/ot-hasse-div12.svg)

*Figure: The finished Hasse diagram. Its lines are **cover relations**, not every true divisibility comparison. Higher means greater **under divisibility**, not necessarily greater under some other relation.*

**Step 5 — Read the full order back from the picture.**

To determine whether $a\preceq b$:

- If **$a=b$**, the comparison holds by reflexivity, even though no loop is drawn.
- If **$a\ne b$**, look for an **upward path** of cover lines from $a$ to $b$. If one exists, $a\preceq b$.
- If there is **no upward path in either direction**, the two elements are **incomparable**.

For example, the path $1\to2\to4\to12$ tells us that $1\mid12$, even without a direct $1$–$12$ line. But $4$ and $6$ are incomparable: neither is on an upward path from the other. Merely finding an **undirected** route through other points does *not* establish comparability.

### Why does drawing only covers preserve the order?

> [!theorem] Reading a finite poset from its Hasse diagram
> For any elements $a,b$ of a **finite poset**, $a\preceq b$ holds **if and only if** $a=b$ or the Hasse diagram has an upward path from $a$ to $b$.

> [!proof] Covers recover all comparisons
> **From paths to comparisons:** every upward line represents a true cover comparison. Following several such lines gives a true comparison by **transitivity**.
>
> **From comparisons to paths:** suppose $a\prec b$. If $b$ covers $a$, their line is already drawn. Otherwise there must be an intermediate $c$ with $a\prec c\prec b$. We can keep breaking a non-cover comparison into smaller comparisons in this way. Because the poset is **finite**, this cannot continue indefinitely; eventually we obtain a sequence of cover relations from $a$ up to $b$.
>
> Equality is recovered separately by **reflexivity**. Thus the cover lines, together with reflexivity and transitivity, determine the original order. $\square$

This process is called the **transitive reduction** of the strict order: remove a direct edge whenever a longer upward path already explains that comparison. For a finite poset, the remaining edges are exactly its cover relations.

### What the drawing does—and does not—mean

A Hasse diagram has an **upward reading direction**, unlike an ordinary directed graph in which arrows explicitly show direction. Its lines do not need arrowheads because we agree that *higher* means *greater under the specified relation*. A crossing of lines without a labeled vertex is not an extra element or an extra comparison.

**The heights are a drawing convention, not numerical values or intrinsic levels.** Comparable distinct elements must appear at different heights, but incomparable elements need not share a horizontal level. The same poset can have several valid layouts; the **cover relations**, not the precise coordinates, determine its structure.

The earlier [power-set diamond](#worked-example-a-power-set-is-a-poset) is another Hasse diagram. The two singleton sets are incomparable, yet they have a **least upper bound** ($\{a,b\}$) and **greatest lower bound** ($\varnothing$). That structure is a **lattice**, which we develop below.

![A Hasse diagram of the eight positive divisors of 30, showing the cover relations under divisibility.](./media/ot-hasse-div30.svg)

*Figure: The divisors of thirty have the same order shape as the subsets of a three-element set. To reconstruct any omitted comparison, follow a path upward.*

> [!distinction] Finite Hasse diagrams versus dense infinite orders
> The construction above assumes a **finite** poset. In a dense infinite order such as $(\mathbb Q,\leq)$, between any two distinct comparable rational numbers there is always another rational number, so **no two distinct rational numbers form a cover**. A diagram containing only cover edges could not reconstruct that order. This is why the finite assumption matters.

## Bounds and extrema: maximal is not greatest

For $S\subseteq P$, an element $u\in P$ is an **upper bound** if $s\preceq u$ for every $s\in S$. A **lower bound** reverses the comparison.

**Find all bounds:** work in the positive divisors of $12$, ordered by divisibility, with $S:=\{2,3\}$. Its upper bounds *in this poset* are $6$ and $12$, because both $2$ and $3$ divide them. Its only lower bound is $1$, which divides both. Bounds belong to the surrounding poset $P$; they do **not** have to belong to $S$.

![Hasse diagram of the positive divisors of twelve under divisibility. The subset S={2,3} is teal, upper bounds 6 and 12 are gold, and lower bound 1 is violet.](./media/ot-bounds-div12.svg)

*Figure: In the surrounding poset $P$ of positive divisors of $12$, the bounds of $S=\{2,3\}$ lie **outside** $S$: $1$ divides both members, while both members divide $6$ and $12$. An upper or lower bound is sought in $P$, not necessarily in the subset $S$.*

> [!definition] Four different extrema
> An element $m\in S$ is **maximal in S** if no $s\in S$ satisfies $m\prec s$. It is **greatest in S** if $s\preceq m$ for *every* $s\in S$. **Minimal** and **least** reverse the order.

Every greatest element is maximal; a maximal element might be incomparable with other elements. There can be multiple maximal elements, or none.

![Side-by-side Hasse diagrams compare a poset with two incomparable maximal elements and no greatest element against a poset with one greatest element above every other element.](./media/ot-maximal-vs-greatest.svg)

*Figure: **Maximal** means there is no strictly greater element of the poset; **greatest** means every element lies below it. In the left-hand poset, $a$ and $b$ are both maximal but neither is greatest. In the right-hand poset, $g$ lies above every element, so it is greatest (and therefore maximal).*

**Apply all four names to $S=\{2,3\}$** inside the divisibility poset above. Each is **maximal** (nothing else in $S$ lies above it) and **minimal** (nothing else in $S$ lies below it), but $S$ has **no greatest** and **no least** element, because $2$ and $3$ are incomparable. By contrast, the full divisor set of $12$ has least element $1$ and greatest element $12$.

> [!counterexample] Two maximal elements but no greatest element
> On $P=\{a,b\}$ with only reflexive comparisons, both $a$ and $b$ are maximal and minimal. Neither is greatest or least because neither compares with the other.

![Two-point antichain with isolated vertices a and b. Both are maximal and minimal; neither is greatest or least because they are incomparable.](./media/ot-two-point-antichain.svg)

*Figure: With only the reflexive comparisons $a\preceq a$ and $b\preceq b$, neither distinct element is above or below the other. Both are **maximal and minimal**, but the poset has **no greatest or least element**.*

![Three Hasse diagrams contrast incomparable minimal elements without a least, incomparable maximal elements without a greatest, and a chain with both a least and greatest element.](./media/ot-extrema.svg)

*Figure: In the left poset, a and b are minimal but neither least; in the middle, b and c are maximal but neither greatest. In the right-hand chain, 0 is least and 2 is greatest.*

### Worked example: two maximal elements in a disconnected divisibility poset

Let

$$
A:=\{2,3,4,7,8,12,24,35\}
$$

and order its elements by **divisibility**:

$$
x\preceq y\iff x\mid y.
$$

All eight elements belong to the **same poset** $(A,\preceq)$, but its Hasse diagram has two disconnected components.

![Hasse diagram for divisibility on A={2,3,4,7,8,12,24,35}. The left component has cover relations from 2 to 4, from 4 to 8 and 12, from 3 to 12, and from 8 and 12 to 24. The right component is 7 below 35. Maximal elements 24 and 35 are highlighted.](./media/ot-disconnected-divisibility-maximal.svg)

*Figure: The diagram shows one partially ordered set, even though its Hasse graph is disconnected. Gold marks the maximal elements, $24$ and $35$; teal marks the minimal elements, $2$, $3$ and $7$.*

**Read upward.** The seven edges show **cover relations** (no elements of $A$ strictly between their endpoints):

$$
2\prec4,\quad 4\prec8,\quad 4\prec12,\quad
3\prec12,\quad 8\prec24,\quad 12\prec24,\quad
7\prec35.
$$

Transitive comparisons are already implicit. For example, $2\mid24$ follows from the upward path $2\mid4\mid8\mid24$; it needs no extra edge.

| Question | Answer | Reason |
| --- | --- | --- |
| **Which elements are maximal?** | $24$ and $35$ | Neither has a strictly larger multiple **in $A$**. |
| **Is there a greatest element?** | **No** | $24\nmid35$ and $35\nmid24$. No member of $A$ lies above both. |
| **Which elements are minimal?** | $2$, $3$ and $7$ | None has a strictly smaller divisor **in $A$**. |
| **Is there a least element?** | **No** | No member of $A$ divides all the others. |
| **Why are there two components?** | $\{2,3,4,8,12,24\}$ and $\{7,35\}$ | No element of one component is comparable with any element of the other. |

> [!distinction] Disconnected does not mean separate posets
> The underlying set and divisibility relation together still form **one poset**. A partial order need not compare every pair, and its Hasse diagram need not be connected.
>
> **Maximal** means nothing lies strictly above that element. **Greatest** means *every* element lies below it. The first does not imply the second when there are incomparable maximal elements.

One further subtlety: **connected does not mean comparable**. The numbers $8$ and $12$ appear in the **same component**, yet neither divides the other. Only an **upward path** from one element to another establishes a divisibility comparison.

> [!counterexample] No maximal element at all
> In $(\mathbb N,\leq)$, every $n$ has a greater number $n+1$. There is no maximal element, even though every finite nonempty subset has a greatest element.

> [!theorem] In a finite poset, a unique maximal element is greatest
> A finite nonempty poset with exactly one maximal element $m$ satisfies $a\preceq m$ for every $a$.

> [!proof] Follow a finite ascending chain
> Starting at $a$, if it is not maximal, choose something strictly above it. Repeat. An ascending strict chain cannot continue forever in a finite set, so it ends at some maximal element. The only such element is $m$. By transitivity, $a\preceq m$.

**Why finiteness matters.** Take a disjoint union of the infinite chain $0<1<2<\cdots$ and one isolated element $m$. That $m$ is the **unique** maximal element, yet is incomparable with every integer and hence is **not** greatest.

**Finite check:** in the divisors of $12$, only $12$ is maximal: every other divisor has a strictly larger multiple in the same set. Finiteness guarantees that every upward path eventually reaches $12$, so it is also greatest. The isolated-$m$ example shows exactly what fails without finiteness.

## Semilattices: one bound for every pair

A partial order tells us **which elements can be compared**. It does not promise that two elements have a common best combination. To make that stronger guarantee, we introduce **semilattices**.

**Start with two matching diagrams.** On the left, use subset inclusion on the four subsets of $\{a,b\}$. The incomparable elements $x:=\{a\}$ and $y:=\{b\}$ have join $\{a,b\}$ and meet $\varnothing$. On the right, let $K$ mean "you have a key" and $C$ mean "you have a code." Order these conditions by **implication**, not by restrictiveness: a lower condition must imply the one above it. Therefore **AND is below** the individual conditions (having both implies having either one individually), while **OR is above** (each individual condition implies having at least one).

![Two matching Hasse diamonds: on the left, sets under inclusion have union as join and intersection as meet; on the right, conditions under logical implication have OR as join and AND as meet. Reading upward means a larger set on the left, but a logically weaker condition on the right.](./media/ot-semilattice-join-meet-intro.svg)

*Figure: Both diamonds have the same order shape, but **above** means something different in each. Under set inclusion, $\{a\}\vee\{b\}=\{a,b\}$ is **union** and $\{a\}\wedge\{b\}=\varnothing$ is **intersection**. Under implication, **AND is below** because $K\land C\Rightarrow K$ and $K\land C\Rightarrow C$; **OR is above** because $K\Rightarrow K\lor C$ and $C\Rightarrow K\lor C$. A join is always a **least upper bound**, and a meet a **greatest lower bound** in the chosen order. The four-element set poset has both for every pair, so it is a **lattice**.*

> [!connection] Why is OR above and AND below?
> **The direction comes from the order we chose.** For propositions, define $P\preceq Q$ to mean $P\Rightarrow Q$: *whenever $P$ is true, $Q$ must be true*. In this order, **moving upward means a weaker (easier-to-satisfy) requirement**, not a stronger one.
>
> Suppose $K$ means "you have a key" and $C$ means "you have a code." Compare these conditions:
>
> - **AND is below.** If you satisfy "key **and** code," you automatically satisfy "key" and also "code": $K\land C\Rightarrow K$ and $K\land C\Rightarrow C$. Requiring both is **stricter** than requiring either one.
> - **OR is above.** If you satisfy "key," you automatically satisfy "key **or** code"; having the code also suffices: $K\Rightarrow K\lor C$ and $C\Rightarrow K\lor C$. Requiring at least one is **less restrictive**.
>
> So an implication-order diagram places **$K\land C$ at the bottom**, **$K$ and $C$ in the middle** (incomparable), and **$K\lor C$ at the top**. Each upward step is a valid implication. This is why logical **AND** behaves as the **meet** and logical **OR** as the **join**.
>
> **Why *greatest* lower bound and *least* upper bound?** Any statement that implies both $K$ and $C$ must imply $K\land C$, making AND the greatest of their common lower bounds. Any statement implied by both $K$ and $C$ must also be implied by $K\lor C$, making OR the least of their common upper bounds.
>
> This is the same pattern as **intersection and union** for sets ordered by inclusion: $A\wedge B=A\cap B$ and $A\vee B=A\cup B$. The symbols $\wedge$ and $\vee$ deliberately echo logical AND and OR. In other partial orders, joins and meets can be different operations.


Imagine two incomparable permission sets, $\{\text{read}\}$ and $\{\text{write}\}$. Neither contains the other. We might still ask two useful questions:

- **What is the smallest permitted set that contains both?** That is their **join**.
- **What is the largest permitted set contained in both?** That is their **meet**.

The answers must be **elements of the poset we are studying**. A result that exists somewhere outside the specified set does not count.

### Joins and meets: two directions of the same idea

Recall that an **upper bound** of $\{a,b\}$ is an element $u$ satisfying $a\preceq u$ and $b\preceq u$. A **lower bound** is an element $\ell$ satisfying $\ell\preceq a$ and $\ell\preceq b$.

> [!definition] Join and meet
> A **join** $a\vee b$ (read "a join b") is the **least upper bound** of $a$ and $b$: it lies above both and lies below every other common upper bound.
>
> A **meet** $a\wedge b$ (read "a meet b") is the **greatest lower bound**: it lies below both and above every other common lower bound.
>
> Formally, when $j=a\vee b$ exists,
> $
> a\preceq j,\quad b\preceq j,\qquad
> \forall u\in P:\ (a\preceq u\land b\preceq u)\Rightarrow j\preceq u.
> $
> When $m=a\wedge b$ exists,
> $
> m\preceq a,\quad m\preceq b,\qquad
> \forall \ell\in P:\ (\ell\preceq a\land\ell\preceq b)\Rightarrow \ell\preceq m.
> $
> If either exists, it is unique by **antisymmetry**.

The important words are **least** and **greatest**, not merely "some bound." In a Hasse diagram, look *upward* for common upper bounds and then identify the one below all the others; look *downward* for common lower bounds and identify the one above all the others. **The nearest-looking point in a drawing is not a definition**: comparisons, not distances on the page, determine the answer.

### Define the two semilattices

> [!definition] Join-semilattice and meet-semilattice
> A **join-semilattice** is a nonempty **poset** $(P,\preceq)$ in which **every pair** $a,b\in P$ has a join $a\vee b$ **inside $P$**.
>
> A **meet-semilattice** is a nonempty **poset** $(P,\preceq)$ in which **every pair** $a,b\in P$ has a meet $a\wedge b$ **inside $P$**.
>
> A semilattice requires **only one kind of bound for every pair**. A join-semilattice does not necessarily have all meets, and a meet-semilattice does not necessarily have all joins.

Notice the quantifier **every pair**. Finding a join for one convenient pair does not prove an entire poset is a join-semilattice. Likewise, a missing join for a *single* pair is enough to prove that it is **not** a join-semilattice.

### Three diagrams, three different structures

Let $X:=\{a,b\}$ and use **subset inclusion** $\subseteq$ as our order. We can obtain three different structures simply by changing which subsets are admitted as elements.

**Join-semilattice, but not a meet-semilattice.** Consider

$
J:=\big\{\{a\},\{b\},\{a,b\}\big\}.
$

Every two members have a **union in $J$**, so union supplies their join. In particular,

$
\{a\}\vee\{b\}=\{a,b\}.
$

But the two singleton sets have **no common lower bound inside $J$**: the set $\varnothing$, which would lie below both, is **not an element of $J$**. Thus their meet does not exist in this poset.

**Meet-semilattice, but not a join-semilattice.** Instead take

$
M:=\big\{\varnothing,\{a\},\{b\}\big\}.
$

Every two members have an **intersection in $M$**, so intersections are their meets. In particular,

$
\{a\}\wedge\{b\}=\varnothing.
$

But $\{a\}$ and $\{b\}$ have **no common upper bound inside $M$**. The missing candidate $\{a,b\}$ is not a member of $M$, so there is no join for this pair.

**Lattice: both operations.** Finally, take **all** subsets:

$
L:=\mathcal P(X)=\big\{\varnothing,\{a\},\{b\},\{a,b\}\big\}.
$

Here unions and intersections of any two elements stay in $L$. Every pair therefore has both a join **and** a meet.

![Three Hasse diagrams of inclusion-ordered subsets of {a,b}. The nonempty subsets form a join-semilattice without the empty-set meet; the proper subsets form a meet-semilattice without the full-set join; the full power set forms a lattice with both.](./media/ot-semilattice-three-orders.svg)

*Figure: **What counts as an element of the poset matters.** The missing join or meet may exist as an ordinary set outside the poset, but an operation on $P$ must return an element of $P$.*

> [!example] Check all pairs, not just the interesting ones
> In $J$, if $A\subseteq B$ then $A\vee B=B$; if $A$ and $B$ are the incomparable singletons, their join is $\{a,b\}$. Those are all the possibilities, so $J$ is a join-semilattice. The same case split using intersections proves that $M$ is a meet-semilattice. Neither structure has the missing *other* operation for the two singleton elements.

### How a semilattice relates to a lattice

The structures form a hierarchy of **additional requirements**, not a rule that every poset automatically provides joins and meets:

| Structure | What every pair must have |
| --- | --- |
| Partial order (poset) | Reflexive, antisymmetric, transitive comparisons; no guaranteed join or meet |
| Join-semilattice | A **join** |
| Meet-semilattice | A **meet** |
| Lattice | **Both** a join and a meet |
| Bounded lattice | Both operations, plus a **least** and a **greatest** element |
| Complete lattice | A join and meet for **every subset**, including the empty subset |

A **lattice is simultaneously a join-semilattice and a meet-semilattice**. A **complete lattice** is always bounded: the join of the empty subset is the least element $\bot$, and its meet is the greatest element $\top$. A bounded lattice need not be complete if it is infinite. Every **finite nonempty lattice** is complete; we will distinguish these qualifications in the lattice section below.

![A structural map from partial orders to the two semilattice requirements, then to lattices, bounded lattices, and complete lattices. Arrows indicate added requirements, not properties every poset already has.](./media/ot-semilattice-structure-map.svg)

*Figure: The join and meet branches are **independent additional conditions** on a poset. Requiring both produces a lattice. Requiring bounds or arbitrary joins and meets produces stronger kinds of lattice.*

### The same structure described by an operation

We can recognize a semilattice **without drawing a Hasse diagram first**. Begin with a nonempty set $S$ and a binary operation $\circ:S\times S\to S$. The notation means that combining **any two elements of $S$ returns an element of $S$**. We have not chosen a partial order yet.

> [!definition] Algebraic semilattice
> An **algebraic semilattice** is a nonempty set with a **commutative, associative, idempotent** binary operation $\circ$. For all $a,b,c\in S$:
>
> - **Commutative:** $a\circ b=b\circ a$.
> - **Associative:** $(a\circ b)\circ c=a\circ(b\circ c)$.
> - **Idempotent:** $a\circ a=a$.
>
> This is the algebraic definition. It does **not** initially say whether the operation is a *join* or a *meet*. We can recover a partial order from it in either of two **dual** ways.

### The induced order: join versus meet

An abstract semilattice operation can be understood as **joining** information or as **meeting** information, depending on which order we choose:

| Interpretation of the operation | Define the order by | The operation becomes |
| --- | --- | --- |
| **Join**, written $\vee$ | $a\preceq b\iff a\vee b=b$ | The **least upper bound** of $a$ and $b$ |
| **Meet**, written $\wedge$ | $a\preceq b\iff a\wedge b=a$ | The **greatest lower bound** of $a$ and $b$ |

> [!distinction] Do not use the join identity as the meet identity
> If we write $b=a\circ b$ for the induced order, then $a\circ b$ is the **join** under that order. To interpret that **same operation** as a meet, we must **reverse the order**: $a\preceq b$ holds when $a=a\circ b$.
>
> **Test with sets:** let $A=\{a\}$ and $B=\{a,b\}$. Since $A\cap B=A$, the meet-semilattice order is $A\preceq B$. The incorrect condition $B=A\cap B$ would say the opposite. Union illustrates the join convention: $A\cup B=B$, so $A\preceq B$.

> [!theorem] An algebraic semilattice determines a partial order
> If $\circ$ is associative, commutative, and idempotent, the relation
>
> $$
> a\preceq_{\vee} b\quad\Longleftrightarrow\quad a\circ b=b
> $$
>
> is a partial order in which $a\circ b$ is the **join** of $a$ and $b$. Alternatively, the relation
>
> $$
> a\preceq_{\wedge} b\quad\Longleftrightarrow\quad a\circ b=a
> $$
>
> is the **opposite partial order**, in which $a\circ b$ is the **meet**. Thus the order-theoretic and algebraic descriptions of semilattices agree.

> [!proof] Recover the join order and its bounds
> Define $a\preceq b$ precisely when $a\circ b=b$.
>
> **Reflexivity:** $a\circ a=a$ by idempotence, so $a\preceq a$.
>
> **Antisymmetry:** if $a\circ b=b$ and $b\circ a=a$, commutativity makes the two left sides equal, so $a=b$.
>
> **Transitivity:** if $a\circ b=b$ and $b\circ c=c$, associativity gives
>
> $$
> a\circ c=a\circ(b\circ c)=(a\circ b)\circ c=b\circ c=c.
> $$
>
> Therefore $a\preceq c$.
>
> **The operation is a join:** by associativity and idempotence,
>
> $$
> a\circ(a\circ b)=(a\circ a)\circ b=a\circ b,
> $$
>
> so $a\preceq a\circ b$; similarly $b\preceq a\circ b$. If $a\preceq u$ and $b\preceq u$, then
>
> $$
> (a\circ b)\circ u=a\circ(b\circ u)=a\circ u=u,
> $$
>
> so $a\circ b\preceq u$. It is the **least** upper bound. Conversely, a join operation on a poset satisfies the three laws because least upper bounds are unique and do not depend on ordering or grouping their inputs.
>
> For the **meet interpretation**, reverse the partial order. Then $a\circ b$ is the greatest lower bound, and its induced-order identity is $a\circ b=a$. $\square$

A semilattice is therefore both an **algebra** (one operation with three laws) and a **poset** (where every pair has one appropriate bound). When we later equip a set with **both** operations to form a lattice, the additional **absorption laws** ensure that join and meet describe **the same** partial order rather than unrelated or incompatible orders.

### Why join-semilattices appear in distributed systems

Suppose two replicas have independently learned some facts. One knows $\{a\}$ and the other knows $\{b\}$. If we order states by **information inclusion**, we can combine them using the join:

$
\{a\}\vee\{b\}=\{a\}\cup\{b\}=\{a,b\}.
$

This merged state is **above both** original states because it contains everything each replica knew. It is their **least** common upper bound because no smaller set contains all that information.

![An information-order Hasse diagram accompanies two replicas holding facts {a} and {b}. Arrows converge on the join operation, producing the merged set {a,b}. Three panels explain commutativity, associativity, and idempotence.](./media/ot-semilattice-merge.svg)

*Figure: A merge based on the join combines information regardless of the order or grouping of individual merge operations. Repeating a merge does not introduce a new state.*

The algebraic laws explain why join is useful for state-based **conflict-free replicated data types (CRDTs)**: **commutativity** tolerates changed delivery order, **associativity** tolerates regrouping merges, and **idempotence** tolerates repeated delivery. This gives a mathematically well-defined way to reconcile states.

> [!distinction] A merge law is not a network guarantee
> A join-semilattice does **not**, by itself, guarantee that all distributed replicas converge. Convergence also depends on system assumptions: replicas must eventually receive the relevant updates or states, and state evolution and merges must respect the chosen information order. A practical state-based CRDT typically uses **inflationary local updates** together with join-based merging, so neither local updates nor merges discard information.
>
> The example treats state as an **ever-growing set of facts**. Removing facts, expiring data, or handling causal history needs a richer state representation; simply applying set union is not a general deletion algorithm.

**The connection:** A semilattice starts with the same poset concepts we already know—upper bounds, lower bounds, and comparability—but adds a **total operation on pairs** in one direction. A lattice adds the other direction. This progression is why semilattices belong **between partial orders and lattices** in our study path.

## Joins, meets, and lattices

A **least upper bound**, or **supremum** (read "SOO-premum"), is an upper bound below all other upper bounds. A **greatest lower bound**, or **infimum** (read "in-FEE-mum"), is above all other lower bounds. Each, when it exists, is unique by antisymmetry.

**Bounds need not be members of the set.** In $(\mathbb R,\leq)$, take $S:=(0,1)$. Every $u\geq1$ is an upper bound, with **supremum** $\sup S=1$; every $\ell\leq0$ is a lower bound, with **infimum** $\inf S=0$. Neither $0$ nor $1$ belongs to $S$, so $S$ has neither a least nor a greatest element. This is why *supremum* is not just another word for *maximum*.

As defined in the [semilattice section](#semilattices-one-bound-for-every-pair), the **join** $a\vee b$ is the least upper bound of $a,b$, and the **meet** $a\wedge b$ is their greatest lower bound. **A lattice requires both for every pair**, not just one.

> [!definition] Lattice, bounded lattice, complete lattice
> A **lattice** is a poset in which every **pair** has a join and meet. It is **bounded** if there are a greatest element $\top$ and a least element $\bot$. It is **complete** if **every subset** has a join and meet, including the empty subset.

> [!example] One small example of all three notions
> Let $X:=\{\text{read},\text{write}\}$ and order $\mathcal P(X)$ by inclusion. Its two incomparable middle elements are $A:=\{\text{read}\}$ and $B:=\{\text{write}\}$. Their join is $A\vee B=X$ and their meet is $A\wedge B=\varnothing$. Every pair has both, so this is a **lattice**. Its least element is $\bot=\varnothing$ and greatest element is $\top=X$, so it is **bounded**. Every subset of this four-element poset also has a join and meet, so it is **complete**. In particular, the *empty family of elements* has join $\bot$ and meet $\top$.

**Power-set worked example.** In $(\mathcal P(X),\subseteq)$ (read "the power set of X ordered by inclusion"),

$$
A\vee B=A\cup B,\qquad A\wedge B=A\cap B.
$$

To justify the first formula: $A\cup B$ contains $A$ and $B$, so it is an upper bound. Every other upper bound contains both $A$ and $B$, so also contains their union. Thus the union is the **least** upper bound. Dually, the intersection is the greatest lower bound. For arbitrary families, the union and intersection give joins and meets, so $\mathcal P(X)$ is complete; the empty join is $\varnothing$, and the empty meet is $X$.

**Divisibility lattice.** On positive divisors of a fixed integer $n$, the join is $\operatorname{lcm}(a,b)$ (read "least common multiple"), and the meet is $\gcd(a,b)$ (read "greatest common divisor"). Both remain divisors of $n$.

**One pair, all of its bounds.** Work in the positive divisors of $60$, ordered by divisibility, and compare $6$ with $10$. Their **common lower bounds** are $1$ and $2$, because both $6$ and $10$ are divisible by those numbers. The greatest is $2$, so $6\wedge10=2$. Their **common upper bounds** *within this poset* are $30$ and $60$, since each is divisible by both $6$ and $10$. The least is $30$, so $6\vee10=30$.

![Among positive divisors of 60, the common lower bounds of 6 and 10 are 1 and 2, with meet 2; common upper bounds are 30 and 60, with join 30.](./media/ot-join-meet-div60.svg)

*Figure: The diagram shows just the six relevant divisors, not every divisor of 60. It separates **being an upper bound** from being the **least** upper bound, and likewise for lower bounds.*

### An explicit poset that is not a lattice

Let $P:=\{a,b,c,d\}$. Require $a\prec c$, $a\prec d$, $b\prec c$, and $b\prec d$, with no other strict comparisons. Both $c$ and $d$ are upper bounds of $\{a,b\}$. Neither is below the other, so **no least upper bound exists**. Hence $a\vee b$ does not exist.

![A four-element bow-tie order with incomparable lower points a and b, incomparable upper points c and d, and every lower point below both upper points. There is no unique least upper bound of a and b.](./media/ot-bowtie-nonlattice.svg)

*Figure: This bow-tie is not a lattice. The **diamond** in the previous Hasse example is a lattice, so the two shapes must not be confused.*

### Lattice laws and Boolean algebra

Every lattice satisfies commutativity, associativity, idempotence, and absorption for join and meet:

$$
\begin{aligned}
a\vee b&=b\vee a,&a\wedge b&=b\wedge a,\\
(a\vee b)\vee c&=a\vee(b\vee c),&(a\wedge b)\wedge c&=a\wedge(b\wedge c),\\
a\vee a&=a,&a\wedge a&=a,\\
a\vee(a\wedge b)&=a,&a\wedge(a\vee b)&=a.
\end{aligned}
$$

These laws can be derived by the uniqueness of least upper and greatest lower bounds. For example, $a\wedge b\preceq a$, so joining $a$ with $a\wedge b$ gives $a$.

**Check the laws with sets.** With $A=\{r\}$ and $B=\{w\}$, commutativity gives $A\cup B=B\cup A=\{r,w\}$; idempotence gives $A\cup A=A$; and absorption gives $A\cup(A\cap B)=\{r\}\cup\varnothing=A$. For associativity, $(A\cup B)\cup C=A\cup(B\cup C)$ for any third set $C$: either grouping collects precisely the elements appearing in at least one of the three sets. Intersections give the corresponding meet examples.

### Why a lattice can be defined by equations alone

So far, a **lattice** has meant a poset with a join and meet for every pair. But suppose we started with **two binary operations** on a set, without specifying an order. Could the operations themselves tell us which elements are below others?

> [!theorem] Order-theoretic and algebraic lattices are equivalent
> Let $L$ be a nonempty set with operations $\vee$ ("join") and $\wedge$ ("meet"). The following describe the same kind of structure:
>
> - **Order definition:** $(L,\preceq)$ is a poset in which every pair has a least upper bound $a\vee b$ and a greatest lower bound $a\wedge b$.
> - **Algebraic definition:** both operations are **commutative**, **associative**, and **idempotent**, and satisfy the two **absorption laws**
>
> $$
> a\vee(a\wedge b)=a,\qquad a\wedge(a\vee b)=a.
> $$
>
> Starting from the algebraic definition, the order is uniquely recovered by
>
> $$
> a\preceq b\quad\Longleftrightarrow\quad a\vee b=b
> \quad\Longleftrightarrow\quad a\wedge b=a.
> $$

> [!proof] First recover the equations from the order
> **Commutativity:** the least upper bound of $\{a,b\}$ does not depend on the order in which its members are named, so $a\vee b=b\vee a$; likewise for meets.
>
> **Idempotence:** $a$ is both the least upper bound and greatest lower bound of $\{a,a\}$, so $a\vee a=a\wedge a=a$.
>
> **Associativity:** $(a\vee b)\vee c$ and $a\vee(b\vee c)$ are each the least upper bound of the three elements $a,b,c$; uniqueness makes them equal. The meet argument is dual.
>
> **Absorption:** $a\wedge b\preceq a$, so $a$ itself is the least upper bound of $a$ and $a\wedge b$. Hence $a\vee(a\wedge b)=a$. Reverse the order for the other law. $\square$

> [!proof] Now recover the order from the equations
> Define $a\preceq b$ precisely when $a\vee b=b$.
>
> **Reflexivity:** idempotence gives $a\vee a=a$.
>
> **Antisymmetry:** if $a\vee b=b$ and $b\vee a=a$, commutativity makes the left sides equal, so $a=b$.
>
> **Transitivity:** if $a\vee b=b$ and $b\vee c=c$, then associativity yields
>
> $$
> a\vee c=a\vee(b\vee c)=(a\vee b)\vee c=b\vee c=c.
> $$
>
> The meet criterion agrees: if $a\vee b=b$, then $a\wedge b=a\wedge(a\vee b)=a$ by absorption. Conversely, $a\wedge b=a$ implies $a\vee b=(a\wedge b)\vee b=b$ by commutativity and absorption.
>
> **The operations really are bounds:** $a\vee(a\vee b)=(a\vee a)\vee b=a\vee b$, so $a\preceq a\vee b$; similarly $b\preceq a\vee b$. If $a\preceq u$ and $b\preceq u$, then
>
> $$
> (a\vee b)\vee u=a\vee(b\vee u)=a\vee u=u.
> $$
>
> Thus $a\vee b$ is the **least upper bound**. The dual argument using $\wedge$ shows that $a\wedge b$ is the greatest lower bound. $\square$

**Why this equivalence matters.** In a Hasse diagram, joins and meets are defined by *position*. In algebra and software, we can often specify them as *operations* and verify four families of laws. Both approaches produce the same ordered structure, so we can transfer results between diagrams, equations, and algorithms.

**Worked check:** for subsets of $X$, $\vee$ is union and $\wedge$ is intersection. The equation $A\vee B=B$ means $A\cup B=B$, which is equivalent to $A\subseteq B$. The order was hiding inside the ordinary set operations.

A **distributive lattice** additionally satisfies $a\wedge(b\vee c)=(a\wedge b)\vee(a\wedge c)$ and its dual. Power sets are distributive because intersection distributes over union and vice versa. Not all lattices are distributive: the five-element lattice $M_3$, with three incomparable elements between bottom and top, is a counterexample.

**See both outcomes:** for $A:=\{r\}$, $B:=\{w\}$, and $C:=\{r,w\}$, the left side $A\cap(B\cup C)$ is $\{r\}$; the right side $(A\cap B)\cup(A\cap C)$ is $\varnothing\cup\{r\}=\{r\}$. In $M_3$, instead choose three distinct middle elements $p,q,r$. Since $q\vee r=\top$, we have $p\wedge(q\vee r)=p$, while $(p\wedge q)\vee(p\wedge r)=\bot\vee\bot=\bot$. The two sides differ, so distributivity is **not** a law of every lattice.

In the Boolean algebra of subsets, **AND** behaves like intersection (meet), **OR** behaves like union (join), and **NOT** behaves like complement. This is the structural link to [Propositional Logic](./propositional-logic-zeroth-order-logic). Inclusive OR is Boolean join, not ordinary integer addition.

**One Boolean-algebra calculation:** for $X:=\{\text{read},\text{write}\}$ and $A:=\{\text{read}\}$, its complement (NOT) relative to $X$ is $A^c=\{\text{write}\}$. Then $A\cap A^c=\varnothing$ (AND: nothing belongs to both), while $A\cup A^c=X$ (inclusive OR: everything belongs to at least one). The complement depends on the chosen universe $X$.

### The same join, several different constructions

A join is **the least upper bound in the specified poset**. It need not be the literal union of two sets. Compare these four inclusion-ordered structures:

| Elements of the poset | Join of $A,B$ | Meet of $A,B$ |
| --- | --- | --- |
| All subsets of $X$ | $A\cup B$ | $A\cap B$ |
| Subgroups of a group $G$ | $\langle A\cup B\rangle$, the subgroup **generated** by their union | $A\cap B$ |
| Linear subspaces of a vector space $V$ | $A+B=\{a+b:a\in A,\ b\in B\}$, the **subspace sum** | $A\cap B$ |
| Open subsets of a topological space | $A\cup B$ | $A\cap B$ for two sets; for an arbitrary family, the meet is the **interior of its intersection** |

Read $\langle A\cup B\rangle$ as "the subgroup generated by the union of A and B." For a family of subspaces, their join is the span of the union. For a family of subgroups, it is the subgroup generated by their union. Both are the *smallest allowed object* containing every member of the family.

**A concrete failure of plain union:** in $(\mathbb Z,+)$, let $A:=2\mathbb Z$ (the even integers) and $B:=3\mathbb Z$ (the multiples of three). Their intersection is $6\mathbb Z$, but their union is **not** a subgroup: $2\in A$, $3\in B$, and $2+3=5\notin A\cup B$. The smallest subgroup containing both is all of $\mathbb Z$, because $3-2=1$. Thus

$$
A\wedge B=6\mathbb Z,\qquad A\vee B=\mathbb Z\ne A\cup B.
$$

**Likewise with vectors:** in $\mathbb R^2$, the $x$-axis and $y$-axis intersect only at the zero vector. Their **union** is not a subspace, since $(1,0)+(0,1)=(1,1)$ lies on neither axis. Their **join** is their sum, all of $\mathbb R^2$.

**Why topological opens are different again:** arbitrary unions of open sets are open, while arbitrary intersections need not be. In the inclusion order of open sets, the meet of an arbitrary family $(U_i)$ is therefore $\operatorname{int}(\bigcap_i U_i)$, the **largest open set contained in the intersection**. This is an important example of a complete lattice whose meet may not equal the set-theoretic intersection.

**Check an infinite family:** in the real line, let $U_n:=(-1/n,1/n)$ for $n\ge1$. Every $U_n$ is open, but their intersection is the singleton $\{0\}$, which is not open. The meet in the poset of open sets is $\operatorname{int}(\{0\})=\varnothing$, because no nonempty open set is contained in $\{0\}$.

The point is not to memorize four formulas. It is to ask: **What objects are allowed in this poset, and which allowed object is the least upper bound?** See [Group Theory](./group-theory-foundations), [Linear Algebra](./linear-algebra-foundations), and [General Topology](./general-topology-foundations) for the underlying constructions.

> [!distinction] Real-number completeness versus complete lattices
> $(\mathbb R,\leq)$ is a lattice because every pair has a maximum and minimum, but it is **not a complete lattice**: all of $\mathbb R$ lacks a supremum inside $\mathbb R$. The real-number completeness axiom applies only to **nonempty, bounded-above subsets**.

## Order ideals and filters: keeping lower or upper information together

A **subset of a poset** can inherit a useful order-theoretic shape. Ideals collect elements together with everything below them; filters do the reverse. The extra requirement that the subset can combine any two of its elements prevents these concepts from being merely "sets pointing downward or upward."

> [!definition] Down-sets, up-sets, ideals, and filters
> A subset $D\subseteq P$ is a **down-set** if $x\in D$ and $y\preceq x$ imply $y\in D$. An **up-set** reverses this implication.
>
> A **nonempty order ideal** $I\subseteq P$ is a down-set that is **upward directed**: for every $a,b\in I$ there is some $c\in I$ with $a\preceq c$ and $b\preceq c$.
>
> Dually, a **nonempty order filter** $F\subseteq P$ is an up-set that is **downward directed**: every $a,b\in F$ have some $c\in F$ with $c\preceq a$ and $c\preceq b$.
>
> The **principal ideal** generated by $p$ is $\downarrow p:=\{x\in P:x\preceq p\}$ (read "down-arrow p"). The **principal filter** is $\uparrow p:=\{x\in P:p\preceq x\}$ (read "up-arrow p").

**A simple permissions example.** Work in the four-element power set $\mathcal P(\{r,w\})$ ordered by inclusion, where $r$ means read and $w$ means write.

- The principal ideal $\downarrow\{r\}=\{\varnothing,\{r\}\}$ contains every permission set **no more powerful than read**.
- The principal filter $\uparrow\{r\}=\{\{r\},\{r,w\}\}$ contains every permission set that **includes read**.

Both sets contain their generator. The first points downward; the second points upward. In either case, the direction refers to the **specified order**, not a picture's orientation.

### Why downward closure alone is insufficient

Consider $D:=\{\varnothing,\{r\},\{w\}\}$. This is a **down-set**: every subset of any of its members is again in $D$. But it is **not an ideal**, because $\{r\}$ and $\{w\}$ have no common upper bound **inside $D$**. Their smallest common upper bound in the full power set, $\{r,w\}$, was excluded.

> [!theorem] Ideals in lattices are exactly nonempty down-sets closed under joins
> If $L$ is a lattice, a nonempty subset $I\subseteq L$ is an order ideal exactly when it is downward closed and $a\vee b\in I$ for every $a,b\in I$. Dually, a nonempty subset is a filter exactly when it is upward closed and closed under pairwise meets.

**Proof.** Suppose $I$ is an ideal. Given $a,b\in I$, directedness produces $c\in I$ above both. Because $a\vee b$ is their **least** upper bound, $a\vee b\preceq c$. Downward closure gives $a\vee b\in I$.

Conversely, if $I$ is a nonempty down-set closed under joins, then for any $a,b\in I$, their join $a\vee b$ lies in $I$ and is an upper bound of both. Hence $I$ is upward directed. The filter statement follows by [order duality](#order-duality-reverse-the-comparisons-reuse-the-theorem). $\square$

**Why this is useful:** ideals describe collections stable under **weakening and combining information**. Filters describe collections stable under **strengthening and taking common lower information**. They occur in logic, lattice theory, topology, and domain-theoretic models of computation. The mathematical term *order ideal* should not automatically be confused with a ring ideal, which has additional algebraic requirements.

> [!distinction] Proper and principal are different qualifiers
> An ideal or filter is **proper** if it is not the whole poset; **principal** means it is generated by one element. A principal ideal may equal the entire poset (for example $\downarrow\top=P$). Our definitions require nonempty ideals and filters, so the empty set is neither. Some authors use a convention that permits the empty ideal.

## Order duality: reverse the comparisons, reuse the theorem## Order duality: reverse the comparisons, reuse the theorem

An order relation tells us which way is *up*. Often a theorem about elements above something has an equally important counterpart about elements below it. Instead of proving the second result from scratch, reverse every comparison.

> [!definition] The dual (opposite) poset
> Given a poset $(P,\preceq)$, its **dual**, written $P^{\mathrm{op}}$ (read "P opposite"), has the same elements and the reversed order:
>
> $$
> a\preceq_{\mathrm{op}} b\quad\Longleftrightarrow\quad b\preceq a.
> $$

**Check the axioms.** Reflexivity is unchanged. If $a\preceq_{\mathrm{op}}b$ and $b\preceq_{\mathrm{op}}c$, then $c\preceq b\preceq a$, so $a\preceq_{\mathrm{op}}c$. Antisymmetry also survives: two-way comparisons in the dual are two-way comparisons in the original order.

![The original order has two incomparable minimal elements a and b below a greatest element c. Reversing every comparison produces a dual order with c least and a and b incomparable maximal elements.](./media/ot-order-duality.svg)

*Figure: Reversing a Hasse diagram trades "above" for "below" while preserving incomparability. The two structures use the same elements, not the same order.*

**Worked example.** Let $P:=\{a,b,c\}$ with strict relations $a\prec c$ and $b\prec c$, and no comparison between $a$ and $b$. In $P$, $c$ is **greatest** and $a,b$ are **minimal**. In $P^{\mathrm{op}}$, $c$ is **least** and $a,b$ are **maximal**. The dual does not suddenly make $a$ and $b$ comparable.

| In $P$ | In $P^{\mathrm{op}}$ |
| --- | --- |
| Upper bound | Lower bound |
| Greatest, maximal | Least, minimal |
| Join $a\vee b$ | Meet $a\wedge b$ |
| Complete lattice | Complete lattice |
| Chain, antichain | Chain, antichain |

> [!theorem] Order-duality principle
> A theorem derived solely from the poset axioms remains valid when all comparisons and their associated dual notions are reversed.

**Proof.** The dual structure satisfies the same poset axioms, as shown above. Apply the theorem to $P^{\mathrm{op}}$ and translate its conclusion back into $P$. For example, the theorem "a unique maximal element in a finite nonempty poset is greatest" immediately yields: **a unique minimal element in a finite nonempty poset is least**. $\square$

**An explicit order-reversing map.** For subsets of a fixed set $X$, complementation satisfies

$$
A\subseteq B\quad\Longleftrightarrow\quad X\setminus B\subseteq X\setminus A.
$$

Thus $A\mapsto X\setminus A$ reverses order bijectively; [De Morgan's laws](./set-theory#set-operation-properties) exchange union and intersection. A lattice's join/meet duality has a concrete manifestation in ordinary set operations.

> [!distinction] Duality is not total ordering
> Reverse a partial order and incomparable elements remain incomparable. Changing direction is not the same as adding comparisons.

## Well-foundedness and well-ordering

> [!definition] Well-founded order and well-order
> A strict partial order is **well-founded** if every nonempty subset has a **minimal** element. A total order is a **well-order** if every nonempty subset has a **least** element.

Every finite poset is well-founded, because an infinite strict descending chain cannot exist inside a finite set. The natural numbers in their usual order are well-ordered. The integers are not: $\mathbb Z$ has no least element. The usual order on $\mathbb R$ is not a well-order: $(0,1)$ has no least member.

A two-element **antichain** is well-founded because every nonempty subset has minimal elements, but is not well-ordered because it is not total. The distinction between "minimal" and "least" matters.

**Compare three sets:** every nonempty subset of $(\mathbb N,\leq)$ has a *least* number (for example, the positive multiples of $3$ have least element $3$). The two-point antichain $\{a,b\}$ has minimal points but no least point, so it is well-founded but not well-ordered. The positive real interval $(0,1)$ has **no minimal element** in its usual order, since for every $x$ in it, $x/2$ is a smaller member. Thus the usual strict order on the real numbers is not well-founded.

Well-founded relations support **induction on predecessors**: assume a property holds for all strict predecessors of $a$, then prove it for $a$. Ordinary induction on $\mathbb N$ is an instance. [Set Theory](./set-theory#ordinals-and-well-ordering) develops ordinals, transfinite induction, and the well-ordering theorem.

**Induction in action:** to prove $0+1+\cdots+n=n(n+1)/2$ for all $n\in\mathbb N$, establish it at $n=0$, where both sides are $0$. For $n>0$, assume the result at the strict predecessor $n-1$; adding $n$ gives $(n-1)n/2+n=n(n+1)/2$. More general well-founded induction allows an element to depend on **all** of its strict predecessors rather than just the immediately previous natural number.

## Order-preserving maps and order isomorphisms

Let $f:P\to Q$ map one poset $(P,\preceq_P)$ to another $(Q,\preceq_Q)$.

> [!definition] Monotone map, embedding, isomorphism
> - **Order-preserving / monotone:** $a\preceq_P b\Rightarrow f(a)\preceq_Q f(b)$.
> - **Order embedding:** $a\preceq_P b\Longleftrightarrow f(a)\preceq_Q f(b)$, so the order can also be recovered from the images.
> - **Order isomorphism:** a bijective order embedding.

An embedding also preserves **incomparability**. An injective monotone map need not be an embedding: map two incomparable points to $0$ and $1$ in the chain $0<1$. The map is monotone vacuously and injective, but it creates a comparison that did not exist in its domain.

**Three maps to distinguish the concepts:**
- **Monotone, not an embedding:** $f:\mathbb R\to\mathbb Z$ given by $f(x):=\lfloor x\rfloor$ preserves $x\leq y$, but $f(1.8)\leq f(1.2)$ even though $1.8\nleq1.2$; it does not reflect order.
- **Embedding, not an isomorphism onto the stated codomain:** $g:\mathbb N\to\mathbb N$ given by $g(n):=2n$ preserves and reflects $\leq$, but odd naturals are not in its image.
- **Isomorphism:** $h:\mathbb Z\to\mathbb Z$ given by $h(n):=n+1$ preserves and reflects the usual order and is bijective; its inverse is $h^{-1}(n)=n-1$.

The next example shows an order isomorphism between objects that do not even look alike: divisors and subsets.

### Worked order isomorphism: divisors of thirty and a power set

Let $D:=\{1,2,3,5,6,10,15,30\}$, ordered by divisibility. Define

$$
F(d)=\{p\in\{2,3,5\}:p\mid d\}.
$$

Read: "F of d is the set of primes among two, three, five that divide d." Thus

$$
F(1)=\varnothing,\quad F(6)=\{2,3\},\quad F(30)=\{2,3,5\}.
$$

> [!proof] Verify bijectivity and both directions of order
> **Bijection:** Every divisor of $30=2\cdot3\cdot5$ is the product of a unique subset of these three distinct primes. Therefore each subset occurs exactly once.
>
> **Forward:** if $a\mid b$, each prime dividing $a$ also divides $b$, so $F(a)\subseteq F(b)$.
>
> **Backward:** if $F(a)\subseteq F(b)$, all the prime factors of the square-free divisor $a$ also occur in $b$. Hence $a\mid b$.
>
> Thus $a\mid b\Longleftrightarrow F(a)\subseteq F(b)$: this is an order isomorphism.

The eight-element divisibility cube and the power-set cube have the same **order structure**, even though their elements are different kinds of mathematical objects. Isomorphisms preserve comparisons, extrema, bounds, joins, meets, chains, and antichains.

## Fixed points: when adding information reaches a stable result

An order-preserving function can describe an information update: dependency resolution adds requirements, program analysis adds discovered facts, or a workflow repeatedly propagates consequences. We want to know whether there is a state that remains unchanged.

> [!definition] Fixed, pre-fixed and post-fixed points
> For $F:P\to P$, a **fixed point** satisfies $F(x)=x$. A **pre-fixed point** satisfies $F(x)\preceq x$ and a **post-fixed point** satisfies $x\preceq F(x)$. A one-sided inequality is **not** the same as equality.

The lattice completeness needed below is the completeness defined in [Joins, meets, and lattices](#joins-meets-and-lattices): every subset has a join and meet, including the empty subset. It is stronger than the real-number least-upper-bound axiom, which only concerns nonempty sets bounded above.

### Knaster-Tarski: fixed points without continuity

> [!theorem] Knaster-Tarski fixed-point theorem
> Let $L$ be a **complete lattice** and $F:L\to L$ be **monotone**. Then the fixed points of $F$, ordered as in $L$, form a complete lattice. In particular, the least and greatest fixed points exist and are
>
> $$
> \operatorname{lfp}(F)=\bigwedge\{x:F(x)\preceq x\},
> \qquad
> \operatorname{gfp}(F)=\bigvee\{x:x\preceq F(x)\}.
> $$

Here $\bigwedge$ means "meet over the set," $\bigvee$ means "join over the set," and $\operatorname{lfp}$ and $\operatorname{gfp}$ mean "least fixed point" and "greatest fixed point." **No metric, differentiability, or continuity hypothesis is involved.**

> [!proof] Construct the least fixed point
> Define $U:=\{x\in L:F(x)\preceq x\}$. This set is nonempty: $\top\in U$ because every lattice element, including $F(\top)$, lies below $\top$.
>
> Let $u:=\bigwedge U$. For each $x\in U$, we have $u\preceq x$ and therefore, by monotonicity, $F(u)\preceq F(x)\preceq x$. Thus $F(u)$ lies below **every** member of $U$, so $F(u)\preceq u$.
>
> Applying monotonicity gives $F(F(u))\preceq F(u)$. That means $F(u)$ itself belongs to $U$, so $u\preceq F(u)$ because $u$ is its meet.
>
> Hence $F(u)=u$ by antisymmetry. Every fixed point lies in $U$, so $u$ is below every fixed point. It is the least fixed point. $\square$

> [!proof] Why *all* fixed points form a complete lattice
> Let $S$ be **any subset of fixed points**, including the empty subset. Define
>
> $$
> U_S:=\{x\in L:F(x)\preceq x\text{ and }s\preceq x\text{ for all }s\in S\}.
> $$
>
> This set contains $\top$. Put $u_S:=\bigwedge U_S$. Exactly as before, monotonicity implies $F(u_S)\preceq u_S$.
>
> For each $s\in S$, since every member of $U_S$ is above $s$, their meet $u_S$ is also above $s$. Thus $s=F(s)\preceq F(u_S)$ by monotonicity. Applying monotonicity again to $F(u_S)\preceq u_S$ gives $F(F(u_S))\preceq F(u_S)$. So $F(u_S)$ belongs to $U_S$.
>
> By the definition of a meet, $u_S\preceq F(u_S)$, hence $F(u_S)=u_S$. This element is the **least fixed upper bound** of $S$. In the **dual lattice**, the same construction gives the greatest fixed lower bound of every $S$. Therefore the entire fixed-point set is a complete lattice. $\square$

**Subtlety:** the join of fixed points taken *inside the fixed-point lattice* need not equal their join taken in the ambient lattice $L$. The theorem constructs the **least fixed upper bound**.

### Worked example: closing a dependency graph

Let $X:=\{\text{read},\text{write},\text{deploy},\text{monitor}\}$. A subset $A\subseteq X$ records enabled capabilities. Suppose deployment requires writing, writing requires reading, and monitoring is optional. We require the final state to include deployment. Define a monotone update $F:\mathcal P(X)\to\mathcal P(X)$:

$$
F(A):=\{\text{deploy}\}\cup A
\cup\begin{cases}\{\text{write}\},&\text{if deploy}\in A,\\\varnothing,&\text{otherwise},\end{cases}
\cup\begin{cases}\{\text{read}\},&\text{if write}\in A,\\\varnothing,&\text{otherwise}.\end{cases}
$$

**Check monotonicity:** if $A\subseteq B$, every membership condition true in $A$ is also true in $B$, so $F(A)\subseteq F(B)$. Because $\mathcal P(X)$ is a complete lattice, the theorem applies.

Start from the least element $\varnothing$:

$$
\begin{aligned}
A_0&:=\varnothing,\\
A_1:=F(A_0)&=\{\text{deploy}\},\\
A_2:=F(A_1)&=\{\text{deploy},\text{write}\},\\
A_3:=F(A_2)&=\{\text{deploy},\text{write},\text{read}\},\\
A_4:=F(A_3)&=A_3.
\end{aligned}
$$

The least fixed point is $A_3$, which contains exactly the mandatory capabilities. The greatest fixed point is $X$, which additionally includes optional monitoring.

> [!theorem] Bottom-up iteration on a finite complete lattice
> If $L$ is **finite**, $F:L\to L$ is monotone, and $x_0:=\bot$, $x_{n+1}:=F(x_n)$, then the sequence reaches the least fixed point after finitely many steps.

**Proof.** Since $\bot\preceq F(\bot)$, monotonicity inductively gives $x_n\preceq x_{n+1}$. There cannot be infinitely many strict increases in a finite poset, so eventually consecutive terms agree, producing a fixed point. For any fixed point $z$, start with $\bot\preceq z$ and induct: $x_n\preceq z$ implies $F(x_n)\preceq F(z)=z$. Hence the reached fixed point lies below all others and is the least. $\square$

**Why infinite iteration needs another hypothesis.** The Knaster-Tarski theorem does *not* say that the supremum of the first countably many iterations is fixed. On the complete lattice $[0,1]$, define

$$
F(x):=
\begin{cases}
(x+1/2)/2,&0\le x<1/2,\\
1,&1/2\le x\le1.
\end{cases}
$$

This $F$ is monotone. Iterating from $x_0=0$ gives $x_n=\tfrac12(1-2^{-n})\to1/2$, yet $F(1/2)=1$, not $1/2$. The least fixed point is $1$. The missing property is an appropriate continuity or preservation-of-directed-joins assumption, not monotonicity. Contrast with metric contraction arguments in [Differential Equations](./differential-equations), which use a distance and contraction factor instead of just the order.

## Galois connections: compare through two representations

Suppose an application stores **named objects** but also assigns each object an **observable tier**. Moving from names to tiers forgets which particular name was used. Moving from tiers back to names must therefore recover *all* names compatible with a tier, not just the one originally chosen.

A **Galois connection** captures this loss of distinction using an exact two-way comparison. It is an order-theoretic case of an [adjunction](./category-adjunctions-monads#an-adjunction-is-a-natural-family-of-bijections) in category theory.

> [!definition] Galois connection (monotone convention)
> Let $P,Q$ be posets. Functions $f:P\to Q$ and $g:Q\to P$ form a **Galois connection**, written $f\dashv g$ (read "f is left adjoint to g"), if for **every** $p\in P$, $q\in Q$,
>
> $$
> f(p)\preceq_Q q\quad\Longleftrightarrow\quad p\preceq_P g(q).
> $$
>
> This is the **monotone** or **adjoint** convention. Some authors also use the name Galois connection for *antitone* maps; when reading another source, check which convention it uses.

The relationship says: "the image of $p$ lies below $q$" exactly when "the original $p$ lies below the reverse image of $q$." It is much stronger than saying that the maps happen to be monotone.

### Worked example: named roles and their permission tier

Let $X:=\{\text{Editor},\text{Author},\text{Admin}\}$ be different role identities, and let $Y:=\{\text{basic},\text{privileged}\}$. Define an observation $h:X\to Y$ by

$$
h(\text{Editor})=h(\text{Author})=\text{basic},
\qquad
h(\text{Admin})=\text{privileged}.
$$

On **sets** of roles and tiers, define

$$
f:\mathcal P(X)\to\mathcal P(Y),\quad f(A):=h[A],
\qquad
g:\mathcal P(Y)\to\mathcal P(X),\quad g(B):=h^{-1}[B].
$$

Here $h[A]$ is the **direct image** (all tiers represented by roles in $A$). The expression $h^{-1}[B]$ is the **inverse image** (all roles whose tiers belong to $B$), and **does not** require $h$ to have an inverse function.

> [!theorem] Direct image is left adjoint to inverse image
> For **every** $A\subseteq X$ and $B\subseteq Y$,
>
> $$
> h[A]\subseteq B\quad\Longleftrightarrow\quad A\subseteq h^{-1}[B].
> $$

**Proof.** If $h[A]\subseteq B$ and $x\in A$, then $h(x)\in B$ and hence $x\in h^{-1}[B]$. Thus $A\subseteq h^{-1}[B]$. Conversely, if $A\subseteq h^{-1}[B]$, then every $x\in A$ has $h(x)\in B$. Every member of $h[A]$ lies in $B$, proving the other implication. $\square$

![An observation map sends Editor and Author to the same basic tier, and Admin to privileged. The direct image of the singleton Editor gives basic, but the inverse image of basic returns both Editor and Author. Repeating the operation leaves that saturated set unchanged.](./media/ot-galois-closure.svg)

*Figure: Forward then backward through the observation map does not recover a unique role identity. It recovers the **entire equivalence class** of identities sharing an observable tier.*

For $A:=\{\text{Editor}\}$, we calculate

$$
f(A)=\{\text{basic}\},
\qquad
(g\circ f)(A)=\{\text{Editor},\text{Author}\}.
$$

Going forward and back **again** returns the same two-role set. The operation fills in everything indistinguishable under the chosen observations.

### The unit, counit, and closure operator

> [!theorem] A Galois connection produces closure and interior
> If $f\dashv g$, then $f$ and $g$ are monotone. The composite $c:=g\circ f:P\to P$ is a **closure operator**:
>
> - **Extensive:** $p\preceq c(p)$.
> - **Monotone:** $p\preceq p'$ implies $c(p)\preceq c(p')$.
> - **Idempotent:** $c(c(p))=c(p)$.
>
> Dually, $i:=f\circ g:Q\to Q$ is an **interior operator**: $i(q)\preceq q$, it is monotone, and $i(i(q))=i(q)$.

> [!proof] Derive all three closure laws
> Substitute the reflexive comparisons $f(p)\preceq f(p)$ and $g(q)\preceq g(q)$ into the adjunction. We obtain
>
> $$
> p\preceq g(f(p))\quad\text{(unit)},\qquad
> f(g(q))\preceq q\quad\text{(counit)}.
> $$
>
> **Monotonicity of $f$:** if $p\preceq p'$, then the unit at $p'$ gives $p\preceq p'\preceq g(f(p'))$. Apply the adjunction to conclude $f(p)\preceq f(p')$.
>
> **Monotonicity of $g$:** if $q\preceq q'$, counit gives $f(g(q))\preceq q\preceq q'$. By adjunction, $g(q)\preceq g(q')$.
>
> **Extensive:** the unit is exactly $p\preceq c(p)$. **Monotone:** $c$ is a composite of monotone maps.
>
> **Idempotent:** apply $g$ to the counit at $q=f(p)$, obtaining $g(f(g(f(p))))\preceq g(f(p))$, or $c(c(p))\preceq c(p)$. The unit at $c(p)$ gives $c(p)\preceq c(c(p))$. Antisymmetry implies equality.
>
> **Interior laws:** counit gives $i(q)\preceq q$, and the maps' monotonicity makes $i$ monotone. Applying $f$ to the unit at $p=g(q)$ gives $i(q)\preceq i(i(q))$; applying counit at $i(q)$ gives the reverse inequality. Thus $i(i(q))=i(q)$. $\square$

> [!definition] Closed elements
> A point $p$ is **closed under $c$** if $c(p)=p$. In the role example, a set is closed when it contains **all roles associated with every tier it already contains**.

**Why closure is the best stable enlargement.** For *any* closure operator on a poset, $c(p)$ is the **least closed element above $p$**. Extensiveness gives $p\preceq c(p)$; idempotence makes $c(p)$ closed. If $z$ is any closed element with $p\preceq z$, monotonicity gives $c(p)\preceq c(z)=z$. This is an existence-and-minimality statement, not simply a new name for a round trip.

**The fixed-point connection.** Closed elements are exactly the fixed points of $c$. On a complete lattice, Knaster-Tarski tells us that these form a complete lattice. When working with closed subsets of a set, their meet is intersection; their join is **closure of the union**, which can be larger than the union for general closure operators. In our particular role-tier example, unions of already saturated role sets remain saturated, so their closure adds nothing. The more general formula remains useful in settings such as topological closure and logical consequence.

**Where this appears:** abstract interpretation translates between concrete and approximate program states; permission audits group roles by observable capabilities; formal concept analysis uses object–attribute relations to construct lattices of concepts. The same inequalities govern each application, but the underlying observations differ.

### Closure systems: which families of sets come from a closure operator?

We proved that a Galois connection produces a **closure operator**. We can go further: on a power set, the family of all *closed* subsets determines the closure operator, and **every suitably intersection-closed family** arises this way.

> [!definition] Closure system (Moore family)
> Fix a set $X$. A **closure system** $\mathcal C\subseteq\mathcal P(X)$ is a family containing $X$ that is closed under **arbitrary intersections**:
>
> $$
> (C_i)_{i\in J}\subseteq\mathcal C
> \quad\Longrightarrow\quad
> \bigcap_{i\in J}C_i\in\mathcal C.
> $$
>
> For the empty family, $\bigcap_{i\in\varnothing}C_i:=X$. Including that case is why $X$ must belong to $\mathcal C$.

> [!theorem] Closure operators and closure systems correspond exactly
> On the power set $\mathcal P(X)$ ordered by inclusion:
>
> 1. The fixed sets $\mathcal C_c:=\{C\subseteq X:c(C)=C\}$ of an **extensive, monotone, idempotent** operator $c$ form a closure system.
> 2. Conversely, every closure system $\mathcal C$ defines an operator
>
> $$
> c_{\mathcal C}(A):=
> \bigcap\{C\in\mathcal C:A\subseteq C\}.
> $$
>
> This is the **smallest closed set containing $A$**. It is extensive, monotone and idempotent, and its fixed sets are **exactly** $\mathcal C$. The two constructions are inverse to each other.

> [!proof] From a closure operator to a family of closed sets
> First, extensiveness gives $X\subseteq c(X)$; since $c(X)\subseteq X$ by its codomain, $c(X)=X$.
>
> Let $(C_i)_{i\in J}$ be any family of fixed sets and write $D:=\bigcap_i C_i$. For each $i$, $D\subseteq C_i$. Monotonicity gives $c(D)\subseteq c(C_i)=C_i$. Therefore $c(D)\subseteq D$. Extensiveness gives $D\subseteq c(D)$; hence $c(D)=D$. This includes the empty-family case just checked. Thus the fixed sets form a closure system. $\square$

> [!proof] From a closure system back to its unique operator
> The family of closed supersets of $A$ is **nonempty** because it contains $X$. Its intersection $c_{\mathcal C}(A)$ is therefore a member of $\mathcal C$ and contains $A$. This proves **extensiveness**.
>
> If $A\subseteq B$, every closed superset of $B$ is also a closed superset of $A$, so intersecting the larger collection of supersets gives $c_{\mathcal C}(A)\subseteq c_{\mathcal C}(B)$. This is **monotonicity**.
>
> Because $c_{\mathcal C}(A)$ is itself closed, it is already the smallest closed superset of itself. Thus $c_{\mathcal C}(c_{\mathcal C}(A))=c_{\mathcal C}(A)$: **idempotence**.
>
> For any $C\in\mathcal C$, the smallest closed superset of $C$ is $C$ itself, so $c_{\mathcal C}(C)=C$. Conversely, if $c_{\mathcal C}(A)=A$, then $A$ lies in $\mathcal C$ because the defining intersection lies there. So the fixed sets are exactly $\mathcal C$.
>
> Finally, if we begin with an arbitrary closure operator $c$, its smallest closed superset of $A$ must be $c(A)$ by the **least stable enlargement** argument already proved. Thus reconstructing from its fixed sets returns the original operator. $\square$

### Worked example: two facts jointly imply a third

Take $X:=\{a,b,c\}$. Interpret $a$ and $b$ as two known facts and $c$ as a consequence that must be included whenever **both** are present. Define

$$
c_*(A):=
\begin{cases}
A\cup\{c\},&\text{if }\{a,b\}\subseteq A,\\
A,&\text{otherwise}.
\end{cases}
$$

The name $c_*$ (read "c-star") denotes the closure operation; the element $c$ is a separate symbol for the third fact. Adding the consequence never removes an existing fact, cannot break monotonicity, and needs to happen only once, so this is a closure operator.

Its closed sets are **all subsets except $\{a,b\}$**:

$$
\mathcal C_*=
\{\varnothing,\{a\},\{b\},\{c\},
\{a,c\},\{b,c\},\{a,b,c\}\}.
$$

Both $\{a\}$ and $\{b\}$ are closed, but their union $\{a,b\}$ is **not**. Therefore the join in the **lattice of closed sets** is

$$
\{a\}\vee_{\mathcal C_*}\{b\}
=c_*(\{a\}\cup\{b\})=\{a,b,c\}.
$$

Their meet is their ordinary intersection $\varnothing$. This example shows **why a join in a lattice of closed sets need not be plain union**, even though the ambient power set uses union as its join.

**Connection back to Galois:** let $j:\mathcal C_*\hookrightarrow\mathcal P(X)$ be inclusion, and view $c_*:\mathcal P(X)\to\mathcal C_*$ as a function whose outputs are closed. Then

$$
c_*(A)\subseteq C\quad\Longleftrightarrow\quad A\subseteq j(C)
\qquad(C\in\mathcal C_*).
$$

The forward implication follows from $A\subseteq c_*(A)$; the backward implication follows from monotonicity and $c_*(C)=C$. Thus $c_*\dashv j$ is a Galois connection. **Closed sets, least stable enlargements, and adjunctions are three descriptions of one structure.**

> [!distinction] A closure system is not automatically a topology
> The word "closed" here refers to **fixed points of an abstract closure operator**. Topological closure additionally satisfies laws such as $c(\varnothing)=\varnothing$ and $c(A\cup B)=c(A)\cup c(B)$. Our worked example fails the latter, so it is a valid closure system but **not** the closed-set family of a topology on $X$. See [General Topology](./general-topology-foundations) for the extra topological structure.

> [!distinction] Monotone is not automatically adjoint
> Many maps preserve order but have no adjoint on the stated posets. The **for-every-pair equivalence** in the definition is what produces the unit, counit, and closure laws. Do not infer them from monotonicity alone.

## Why order theory appears everywhere

The preorder examples above show a pattern that recurs in software and mathematics: **comparison by behavior is not always comparison by identity**. We can compare roles by permissions, predicates by logical strength, and vertices by reachability without pretending that equivalent observations make the underlying objects literally equal. When we need an antisymmetric order, we pass to equivalence classes; when identity matters, we retain the original preorder.

- **Dependencies:** reachability in an acyclic directed graph yields a partial order (choosing arrow direction consistently). Cycles give a preorder, whose quotient by mutual reachability is a poset.
- **Permissions and information:** "contains no more permission or information than" can define partial orders, but only becomes a lattice when appropriate joins and meets exist.
- **Distributed state:** a **join-semilattice** requires a join for every pair, but not a meet. For example, the **nonempty** subsets of $\{a,b\}$ under inclusion form a join-semilattice: unions stay nonempty and give joins. Yet $\{a\}$ and $\{b\}$ have no meet *inside this poset* because their intersection $\varnothing$ was excluded. This distinction matters when replicas merge state but need no general intersection operation.
- **Categories:** a poset can be interpreted as a category with one arrow $a\to b$ whenever $a\preceq b$. For instance, $\varnothing\subseteq\{a\}\subseteq\{a,b\}$ gives arrows $\varnothing\to\{a\}$ and $\{a\}\to\{a,b\}$; composing them yields the arrow $\varnothing\to\{a,b\}$. Reflexivity supplies identity arrows. See [Category Theory Foundations](./category-theory-foundations#a-partial-order-is-a-category).

**What we can now do:** order duality reuses proofs by reversing comparisons; ideals and filters select coherent lower and upper regions; lattice operations can be defined by equations; Knaster-Tarski guarantees stable states; and Galois connections construct closure operators whose fixed sets form complete lattices. The same abstract join can be a union, a subgroup generated by a union, a span, or a closure. Each conclusion follows from the specified order and its axioms.

The governing habit is to verify **which axioms the relation has**, rather than assuming every ordering behaves like the real number line.

---

## Chapter Reference

A compact reference to the chapter's definitions and proved or stated results. Select a linked name to revisit its full explanation or proof. The summary does not replace the assumptions and arguments above.

### Definitions

#### Relations and diagrams

| Definition | Meaning / statement |
| :--- | :--- |
| **[Preorder](#from-relations-to-preorders-and-partial-orders)** | Reflexive and transitive relation; distinct objects may be comparable in both directions. |
| **[Partial order / poset](#from-relations-to-preorders-and-partial-orders)** | A preorder that is also antisymmetric; a poset is a set with a specified partial order. |
| **[Mutual-comparability equivalence](#turning-a-preorder-into-a-poset)** | In a preorder, a and b are equivalent when a precedes b and b precedes a. |
| **[Order through observations](#a-general-recipe-order-what-we-observe)** | Compare objects by comparing their images under an observation map into a poset. |
| **[Strict order](#only-now-the-general-rule)** | a ≺ b means a precedes b but a and b are not equal; an irreflexive transitive relation can also define a partial order. |
| **[Total order](#total-orders-chains-and-antichains)** | Any two elements are comparable; a chain is a totally ordered subset and an antichain has no comparable distinct members. |
| **[Cover relation](#first-define-what-an-edge-means)** | b covers a when a is strictly below b and there is no element strictly between. |
| **[Hasse diagram](#hasse-diagrams-constructing-and-reading-a-finite-order)** | A finite poset drawn using upward cover edges; reflexive and transitive edges are omitted. |

#### Bounds, lattices, and order operations

| Definition | Meaning / statement |
| :--- | :--- |
| **[Maximal / greatest](#bounds-and-extrema-maximal-is-not-greatest)** | Maximal means nothing in the subset lies strictly above; greatest means every element lies below. See the [disconnected divisibility example](#worked-example-two-maximal-elements-in-a-disconnected-divisibility-poset). |
| **[Minimal / least](#bounds-and-extrema-maximal-is-not-greatest)** | Minimal means nothing lies strictly below; least means every element lies above. |
| **[Upper and lower bounds](#bounds-and-extrema-maximal-is-not-greatest)** | An upper bound lies above every member of a subset; a lower bound lies below every member. |
| **[Join and meet](#joins-and-meets-two-directions-of-the-same-idea)** | a ∨ b is the least upper bound; a ∧ b is the greatest lower bound, when those exist. |
| **[Join- and meet-semilattices](#define-the-two-semilattices)** | A nonempty poset in which every pair has a join, or respectively every pair has a meet. |
| **[Algebraic semilattice](#the-same-structure-described-by-an-operation)** | A nonempty set with one commutative, associative, idempotent binary operation. |
| **[Lattice](#joins-meets-and-lattices)** | A poset in which every pair has both a join and a meet. |
| **[Bounded / complete lattice](#joins-meets-and-lattices)** | Bounded means top and bottom exist; complete means every subset, including the empty subset, has join and meet. |
| **[Down-set / up-set](#order-ideals-and-filters-keeping-lower-or-upper-information-together)** | Down-sets retain everything below a member; up-sets retain everything above. |
| **[Ideal / filter](#order-ideals-and-filters-keeping-lower-or-upper-information-together)** | An ideal is a nonempty directed down-set; a filter is a nonempty dually directed up-set. |

#### Duality, well-ordering, maps, and fixed points

| Definition | Meaning / statement |
| :--- | :--- |
| **[Dual poset](#order-duality-reverse-the-comparisons-reuse-the-theorem-order-duality-reverse-the-comparisons-reuse-the-theorem)** | The same set with all comparisons reversed. |
| **[Well-founded / well-ordered](#well-foundedness-and-well-ordering)** | Well-founded: every nonempty subset has a minimal element. Well-ordered: total order and every nonempty subset has a least. |
| **[Monotone map](#order-preserving-maps-and-order-isomorphisms)** | Preserves comparisons: a ≤ b implies f(a) ≤ f(b). |
| **[Order embedding / isomorphism](#order-preserving-maps-and-order-isomorphisms)** | An embedding preserves and reflects the order; an isomorphism is a bijective embedding. |
| **[Fixed / pre- / post-fixed point](#fixed-points-when-adding-information-reaches-a-stable-result)** | For F, fixed means F(x)=x; pre-fixed means F(x)≤x; post-fixed means x≤F(x). |
| **[Galois connection](#galois-connections-compare-through-two-representations)** | For monotone f:P→Q and g:Q→P, f(p)≤q iff p≤g(q). |
| **[Closure / interior operator](#the-unit-counit-and-closure-operator)** | Closure is extensive, monotone, idempotent; interior is reductive, monotone, idempotent. |
| **[Closed elements / closure system](#closure-systems-which-families-of-sets-come-from-a-closure-operator)** | Closed elements are fixed by closure; a closure system of subsets contains X and is closed under arbitrary intersections. |

### Theorems and Key Results

The hypotheses matter: for example, **finite**, **complete**, and **monotone** cannot be dropped from the theorems that require them.

#### Preorders, posets, and lattices

| Theorem / result | Meaning / statement |
| :--- | :--- |
| **[Observational preorder theorem](#a-general-recipe-order-what-we-observe)** | Comparison through a map into a poset is always a preorder, and is antisymmetric exactly when the map is injective. |
| **[Preorder quotient theorem](#turning-a-preorder-into-a-poset)** | Mutual comparability is an equivalence relation, and the induced comparison on its classes is a well-defined partial order. |
| **[Strict/non-strict correspondence](#only-now-the-general-rule)** | A partial order induces an irreflexive transitive strict order; adjoining equality reverses the construction. |
| **[Hasse paths recover order](#why-does-drawing-only-covers-preserve-the-order)** | In a finite poset, a≤b iff a=b or an upward path connects a to b. |
| **[Unique maximal is greatest (finite)](#bounds-and-extrema-maximal-is-not-greatest)** | In a finite nonempty poset, a unique maximal element is necessarily greatest; the finiteness hypothesis matters. |
| **[Semilattice operation induces an order](#the-induced-order-join-versus-meet)** | A commutative, associative, idempotent operation determines a partial order and serves as join or, dually, meet. |
| **[Order / algebraic lattice equivalence](#why-a-lattice-can-be-defined-by-equations-alone)** | Pairwise joins and meets satisfy commutativity, associativity, idempotence, and absorption; these equations also recover the order. |
| **[Lattice ideals and joins](#why-downward-closure-alone-is-insufficient)** | In a lattice, a nonempty subset is an ideal iff it is downward closed and closed under pairwise joins; dually for filters and meets. |
| **[Order-duality principle](#order-duality-reverse-the-comparisons-reuse-the-theorem-order-duality-reverse-the-comparisons-reuse-the-theorem)** | Any theorem derived from poset axioms has a dual statement obtained by reversing order and swapping dual notions. |

#### Fixed points and Galois connections

| Theorem / result | Meaning / statement |
| :--- | :--- |
| **[Knaster–Tarski theorem](#knaster-tarski-fixed-points-without-continuity)** | Every monotone self-map on a complete lattice has least and greatest fixed points; all its fixed points themselves form a complete lattice. |
| **[Finite bottom-up iteration](#worked-example-closing-a-dependency-graph)** | On a finite complete lattice, iterating a monotone map from bottom reaches its least fixed point in finitely many steps. |
| **[Direct / inverse image adjunction](#worked-example-named-roles-and-their-permission-tier)** | For h:X→Y, h[A]⊆B iff A⊆h⁻¹[B]; direct image is left adjoint to inverse image. |
| **[Galois connection gives closure / interior](#the-unit-counit-and-closure-operator)** | For f ⊣ g, the composite g∘f is closure and f∘g is interior; each is monotone and idempotent. |
| **[Closure operator / system correspondence](#closure-systems-which-families-of-sets-come-from-a-closure-operator)** | Extensive, monotone, idempotent operators on subsets correspond exactly to families containing X and closed under arbitrary intersections. |

The guiding rule: first identify the order and check its axioms. A preorder need not be antisymmetric; a poset need not be total; a lattice need not be complete.
