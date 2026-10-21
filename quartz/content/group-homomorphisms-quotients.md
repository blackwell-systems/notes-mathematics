---
title: "Homomorphisms and Quotient Groups"
prerequisites: ["group-theory-foundations"]
enables: ["group-actions-symmetry", "algebraic-structures"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Group Theory Foundations](./group-theory-foundations) (subgroups, cosets, Lagrange's theorem)
> **Leads to:** [Group Actions and Symmetry](./group-actions-symmetry) · [Algebraic Structures](./algebraic-structures)

Group theory becomes far more powerful when we stop considering each group in isolation. **Homomorphisms** transfer group multiplication from one group to another; **normal subgroups** identify elements that can be collapsed without making the multiplication ambiguous; and **quotient groups** make the collapsed structure an actual group.

The pivotal theorem will be derived, not simply announced:

$$
\boxed{G/\ker(f)\cong\operatorname{im}(f).}
$$

Read $\ker(f)$ as "the kernel of f," $\operatorname{im}(f)$ as "the image of f," and $\cong$ as "is isomorphic to." This result explains why one often obtains a quotient when applying a structure-preserving map.

## Homomorphisms: preserving multiplication, not necessarily elements

> [!definition] Group homomorphism
> A map $f:G\to H$ is a **homomorphism** when $f(ab)=f(a)f(b)$ for all group elements. This preserves the operation, **not necessarily distinctness**: different elements may share an image.


Let $(G,\cdot)$ and $(H,*)$ be groups. A **group homomorphism** $f:G\to H$ is a function satisfying

$$
\boxed{f(ab)=f(a)*f(b)\quad(a,b\in G).}\tag{H1}
$$

When the operation is clear we suppress both operation symbols and write $f(ab)=f(a)f(b)$. The condition says **combine, then map = map, then combine**. It does **not** say the map is injective.

**Example:** $f:(\mathbb Z,+)\to(\mathbb Z/4\mathbb Z,+)$ defined by $f(n)=[n]_4$ preserves addition, since

$$
f(a+b)=[a+b]_4=[a]_4+[b]_4.
$$

Yet $f(0)=f(4)$ and $0\ne4$: the map loses information. The bracket $[n]_4$ denotes the residue class of $n$ modulo four.

### Identity and inverses are automatically preserved

**Theorem:** for a homomorphism $f:G\to H$,

$$
\boxed{f(e_G)=e_H,\qquad f(a^{-1})=f(a)^{-1}.}\tag{H2}
$$

**Proof.** By H1, $f(e_G)=f(e_Ge_G)=f(e_G)^2$. Cancel $f(e_G)$ in the group $H$ to obtain $f(e_G)=e_H$. Now

$$
f(a)f(a^{-1})=f(aa^{-1})=f(e_G)=e_H.
$$

The reversed product similarly equals $e_H$, so uniqueness of inverses gives $f(a^{-1})=f(a)^{-1}$.

By induction, $f(a^n)=f(a)^n$ for every integer $n$, including negative exponents by H2.

## Kernel and image: what is lost, what survives

> [!definition] Kernel and image
> The **kernel** consists of inputs mapping to the identity of $H$. The **image** consists of outputs actually reached. Both are subgroups, but only the kernel lives in $G$.


Define

$$
\boxed{\ker(f)=\{g\in G:f(g)=e_H\}},\qquad
\boxed{\operatorname{im}(f)=\{f(g):g\in G\}}.
$$

The **kernel** collects elements mapped to the identity. The **image** collects all outputs actually reached. A homomorphism need not hit every element of $H$.

**Both are subgroups.** The kernel contains $e_G$. If $a,b\in\ker(f)$, then

$$
f(ab^{-1})=f(a)f(b)^{-1}=e_He_H^{-1}=e_H,
$$

so the one-step subgroup test proves $\ker(f)\leq G$. For the image, if $u=f(a)$ and $v=f(b)$, then $uv^{-1}=f(ab^{-1})$ also lies in the image, proving $\operatorname{im}(f)\leq H$.

### Exactly when is a homomorphism injective?

**Theorem:**

$$
\boxed{f\text{ injective}\quad\Longleftrightarrow\quad\ker(f)=\{e_G\}.}\tag{HK}
$$

**Forward proof.** If $f$ is injective and $f(g)=e_H=f(e_G)$, then $g=e_G$.

**Reverse proof.** Assume the kernel is trivial and $f(a)=f(b)$. Then

$$
f(b^{-1}a)=f(b)^{-1}f(a)=e_H.
$$

Thus $b^{-1}a=e_G$, whence $a=b$. This proves injectivity.

**More generally**, $f(a)=f(b)$ exactly when $b^{-1}a\in\ker(f)$. The kernel measures not just which elements disappear but **which pairs become indistinguishable**.

**Worked example: reduction modulo six.** Let $f:\mathbb Z\to\mathbb Z/6\mathbb Z$ map $n\mapsto[n]_6$. Its kernel is $6\mathbb Z$, the multiples of six, because $[n]_6=[0]_6$ precisely when $6\mid n$. Its image is every residue class (choose representatives $0,1,\ldots,5$). We will prove that $\mathbb Z/6\mathbb Z$ is the quotient of $\mathbb Z$ by this kernel, rather than treating the notation as self-explanatory.

## Normal subgroups: the exact obstacle to quotient multiplication

Recall that a subgroup $N\leq G$ has **left cosets** $gN=\{gn:n\in N\}$ and **right cosets** $Ng=\{ng:n\in N\}$.

A subgroup $N$ is **normal in** $G$, written $N\trianglelefteq G$ (read "N is normal in G"), if

$$
\boxed{gng^{-1}\in N
\quad\text{for every }g\in G,\ n\in N.}\tag{N1}
$$

The expression $gng^{-1}$ is a **conjugate** of $n$ by $g$. Replacing $g$ by $g^{-1}$ shows the reverse inclusion, so N1 is equivalent to $gNg^{-1}=N$ and also to

$$
\boxed{gN=Ng\quad\text{for every }g\in G.}
$$

**Proof of the equivalence:** if $gNg^{-1}=N$, multiply these subsets on the right by $g$ to get $gN=Ng$. Conversely $gN=Ng$ gives $gNg^{-1}=N$. Here multiplying a subset by an element means multiplying each of its members.

Every subgroup of an abelian group is normal: $gng^{-1}=n$ by commutativity. The trivial subgroup $\{e\}$ and $G$ itself are normal in every group.

### Kernels are automatically normal

Let $N=\ker(f)$ and $n\in N$. Then

$$
f(gng^{-1})
=f(g)f(n)f(g)^{-1}
=f(g)e_Hf(g)^{-1}
=e_H.
$$

Therefore $gng^{-1}\in N$. So **every kernel is normal**.

The converse will follow from quotient construction: every normal subgroup is the kernel of a natural homomorphism.

### A nonnormal example

Let $G=S_{\{1,2,3\}}$ under permutation composition, and let $N=\{e,(1\ 2)\}$, where $(1\ 2)$ means "swap 1 and 2." Choose $g=(1\ 2\ 3)$, the permutation that sends $1\to2\to3\to1$. Conjugating the transposition gives another transposition:

$$
g(1\ 2)g^{-1}=(2\ 3)\notin N.
$$

Thus $N$ is a subgroup but **not normal**. Its left and right cosets differ, and naively multiplying left cosets cannot yield a well-defined group operation.

## Quotient groups: proving well-definedness first

> [!distinction] A coset product requires normality
> Writing $(aN)(bN)=abN$ does not yet define an operation: it must be **independent of representatives**. The calculation below proves that happens exactly when $N$ is normal.


Assume $N\trianglelefteq G$. Define the *set of left cosets*

$$
\boxed{G/N=\{gN:g\in G\}.}
$$

Read $G/N$ as "G modulo N." Its elements are **subsets of G**, not ordinary elements of $G$. Propose the operation

$$
\boxed{(aN)(bN):=(ab)N.}\tag{QG}
$$

This appears natural, but it is **not yet a valid definition**: choosing another representative of the same coset must yield the same product.

### Well-definedness theorem

Suppose $aN=a'N$ and $bN=b'N$. The coset-equality test from [Group Theory Foundations](./group-theory-foundations) gives elements $n_1,n_2\in N$ with $a'=an_1$ and $b'=bn_2$. Then

$$
\begin{aligned}
a'b'
&=an_1bn_2\\
&=ab(b^{-1}n_1b)n_2.
\end{aligned}
$$

Because $N$ is normal, $b^{-1}n_1b\in N$; subgroup closure puts $(b^{-1}n_1b)n_2$ in $N$. Therefore $a'b'\in abN$, which means

$$
(a'b')N=(ab)N.
$$

So QG is independent of representatives. **Normality is doing the actual work** in the middle line.

### Normality is also necessary

Suppose QG is well-defined for left cosets of a subgroup $N$ without assuming normality. For any $n\in N$ and $g\in G$,

$$
nN=eN=N.
$$

Representative independence would force

$$
(ng)N=(eg)N=gN.
$$

The coset equality test gives $g^{-1}ng\in N$. This holds for every $n,g$, and therefore $N$ is normal. Thus

$$
\boxed{\text{Coset multiplication QG is well-defined exactly when N is normal.}}
$$

### The quotient really is a group

Now that QG is defined, associativity follows from associativity in $G$:

$$
((aN)(bN))(cN)=((ab)c)N=(a(bc))N=(aN)((bN)(cN)).
$$

The identity is $N=eN$, because $(eN)(aN)=aN=(aN)(eN)$. The inverse of $aN$ is $a^{-1}N$, because their product is $eN=N$ in either order. Closure follows because $(ab)N$ is a coset.

Hence **$G/N$ is a group**.

## The canonical quotient map

Define

$$
\pi:G\to G/N,\qquad\pi(g)=gN.
$$

Read $\pi$ as "pi," the quotient map. From QG,

$$
\pi(ab)=(ab)N=(aN)(bN)=\pi(a)\pi(b),
$$

so $\pi$ is a homomorphism. It is surjective because every coset has a representative. Its kernel is precisely $N$:

$$
\pi(g)=N
\quad\Longleftrightarrow\quad
gN=eN
\quad\Longleftrightarrow\quad
g\in N.
$$

We have proved the converse promised earlier:

$$
\boxed{N\trianglelefteq G\quad\Longleftrightarrow\quad
N=\ker(\pi)\text{ for the canonical quotient map }\pi.}
$$

Here the reverse direction is the proved fact that kernels are normal.

## The First Isomorphism Theorem

> [!theorem] First Isomorphism Theorem
> Every group homomorphism factors through the quotient by its kernel: $G/\ker(f)\cong\operatorname{im}(f)$. The proof constructs the induced map and verifies **well-definedness, homomorphism, injectivity, and surjectivity**.


**Theorem.** For every group homomorphism $f:G\to H$,

$$
\boxed{G/\ker(f)\cong\operatorname{im}(f).}\tag{ISO1}
$$

**Proof with every obligation separated.** Let $N=\ker(f)$, normal as proved above. Define

$$
\overline f:G/N\to\operatorname{im}(f),
\qquad
\boxed{\overline f(gN)=f(g).}
$$

Read $\overline f$ as "f-bar."

1. **Well-defined:** if $aN=bN$, then $b^{-1}a\in N$, so $f(b)^{-1}f(a)=e_H$. Therefore $f(a)=f(b)$.
2. **Homomorphism:** $\overline f((aN)(bN))=\overline f(abN)=f(ab)=f(a)f(b)$.
3. **Surjective:** every element of $\operatorname{im}(f)$ is some $f(g)=\overline f(gN)$.
4. **Injective:** if $\overline f(aN)=\overline f(bN)$, then $f(a)=f(b)$, so $b^{-1}a\in N$ and $aN=bN$.

Thus $\overline f$ is a bijective homomorphism, the definition of an **isomorphism**. This proves ISO1, not just the formula.

### Worked example: the integers modulo six

For $f:\mathbb Z\to\mathbb Z/6\mathbb Z$, we computed $\ker(f)=6\mathbb Z$ and $\operatorname{im}(f)=\mathbb Z/6\mathbb Z$. ISO1 gives

$$
\mathbb Z/(6\mathbb Z)\cong\mathbb Z/6\mathbb Z.
$$

On the left, we first construct the **cosets** of the subgroup of multiples of six; on the right, we use the familiar **congruence classes**. The isomorphism makes precise why they are the same additive group up to representation.

## The Second Isomorphism Theorem

Let $H\leq G$ and $N\trianglelefteq G$. Define $HN=\{hn:h\in H,n\in N\}$.

**First check $HN$ is a subgroup.** It is nonempty. For $h_1n_1,h_2n_2\in HN$,

$$
(h_1n_1)(h_2n_2)
=h_1h_2(h_2^{-1}n_1h_2)n_2\in HN,
$$

because normality puts the conjugate in $N$. The inverse $(hn)^{-1}=n^{-1}h^{-1}=h^{-1}(hn^{-1}h^{-1})$ also lies in $HN$, using normality. So the subgroup test applies.

Since $N\trianglelefteq G$, it is normal in $HN$. Restrict the canonical quotient map $\pi:G\to G/N$ to $H$, but regard its codomain as $HN/N$:

$$
f:H\to HN/N,\qquad f(h)=hN.
$$

The map is surjective: every $hnN=hN$ has a representative $h\in H$. Its kernel consists of the $h\in H$ lying in $N$, namely $H\cap N$. Apply ISO1:

$$
\boxed{H/(H\cap N)\cong HN/N.}\tag{ISO2}
$$

This result says that adjoining a normal subgroup to $H$ and then quotienting it away preserves precisely the structure of $H$ outside their intersection.

**Worked example:** in additive $\mathbb Z$, take $H=2\mathbb Z$ and $N=3\mathbb Z$. Then $HN=H+N=\mathbb Z$ by Bézout, and $H\cap N=6\mathbb Z$. ISO2 gives $2\mathbb Z/6\mathbb Z\cong\mathbb Z/3\mathbb Z$. There are three cosets of $6\mathbb Z$ in $2\mathbb Z$, represented by $0,2,4$, exactly matching the three residue classes modulo three.

## The Third Isomorphism Theorem

Suppose $N\trianglelefteq G$ and $K\trianglelefteq G$ with $N\subseteq K$. Because $K$ is normal, the quotient $G/K$ exists. Define

$$
f:G/N\to G/K,\qquad f(gN)=gK.
$$

**Well-defined:** if $aN=bN$, then $b^{-1}a\in N\subseteq K$, so $aK=bK$.

The map is a homomorphism by coset multiplication, and it is surjective because every $gK$ has a representative $gN$. Its kernel is

$$
\ker(f)=\{gN:g\in K\}=K/N.
$$

As a kernel, $K/N$ is normal in $G/N$. Applying ISO1 gives

$$
\boxed{(G/N)/(K/N)\cong G/K.}\tag{ISO3}
$$

**Worked example:** take $G=\mathbb Z$, $N=12\mathbb Z$, and $K=4\mathbb Z$. The intermediate quotient $G/N$ has twelve elements, while $K/N$ has three: the classes of $0,4,8$. Quotienting those out leaves four elements, matching $\mathbb Z/4\mathbb Z$. In other words, modding out by twelve and then by the subgroup of multiples of four has the same final structure as modding out by four directly.

## Correspondence theorem: all subgroups above the kernel

Let $N\trianglelefteq G$ with canonical map $\pi:G\to G/N$. There is a one-to-one correspondence

$$
\boxed{\{H\leq G:N\subseteq H\}
\longleftrightarrow\{L\leq G/N\},\qquad H\mapsto H/N.}
$$

**Proof:** for $H$ containing $N$, the set $H/N$ is a subgroup of $G/N$ under the quotient operation. Conversely for a subgroup $L\leq G/N$, the inverse image

$$
\pi^{-1}(L)=\{g\in G:\pi(g)\in L\}
$$

is a subgroup of $G$ (identity, product, and inverse follow by homomorphism properties) containing $N$. The maps are inverse: $\pi^{-1}(H/N)=H$ because if $gN=hN$ for $h\in H$, then $h^{-1}g\in N\subseteq H$, so $g\in H$. Surjectivity of $\pi$ gives $\pi(\pi^{-1}(L))=L$.

Under this correspondence, subgroup inclusion is preserved, and **normal subgroups containing $N$** correspond to normal subgroups of $G/N$. For the normality assertion, conjugation of cosets corresponds exactly to the image of conjugation in $G$; surjectivity allows testing all quotient elements.

This theorem explains why quotient groups have exactly the subgroup structure predicted by the original group above the kernel.

## Direct products: building larger groups without collapsing them

For groups $G$ and $H$, define the **direct product** on ordered pairs:

$$
\boxed{(g,h)(g',h')=(gg',hh').}
$$

Associativity follows componentwise. Identity is $(e_G,e_H)$ and inverse is $(g^{-1},h^{-1})$, proving $G\times H$ is a group.

The coordinate projections $p_G(g,h)=g$ and $p_H(g,h)=h$ are homomorphisms. Their kernels are respectively $\{e_G\}\times H$ and $G\times\{e_H\}$. ISO1 recovers $G$ and $H$ as the corresponding quotients.

**Worked example:** $\mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z$ has six elements and is cyclic. The element $([1]_2,[1]_3)$ has order six: it returns to the identity exactly when the exponent is divisible by both two and three, hence by six. By contrast $\mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z$ has four elements but every nonidentity element has order two, so it is **not** cyclic.

Direct products preserve components, while quotient groups identify elements. They are different operations on structures.

## Why this is a major foundational step

| Claim | Proof dependency |
| --- | --- |
| A homomorphism preserves identity and inverses | homomorphism law and group axioms |
| Kernels and images are subgroups | subgroup test |
| Kernel trivial exactly when map injective | cancellation and inverse preservation |
| Kernels are normal | conjugation and homomorphism law |
| Coset multiplication is well-defined iff normal | representative calculation |
| First isomorphism theorem | well-defined induced map, injectivity and surjectivity |
| Second isomorphism theorem | subgroup $HN$ and ISO1 |
| Third isomorphism theorem | map $G/N\to G/K$ and ISO1 |
| Correspondence theorem | inverse images under the quotient map |
| Direct product forms a group | componentwise verification |

The next chapter, [Group Actions and Symmetry](./group-actions-symmetry), uses these constructions to explain groups of permutations, orbit-stabilizer, conjugacy, and counting symmetries. Groups cease to be merely collections with a binary operation: they become tools for studying the structure of other mathematical objects.
