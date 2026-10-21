---
title: "Construction of the Complex Numbers"
prerequisites: ["construction-of-the-reals"]
enables: ["number-systems", "complex-numbers", "hypercomplex-numbers"]
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Construction of the Reals](./construction-of-the-reals), which proves the complete ordered-field laws
> **Leads to:** [Complex Numbers](./complex-numbers) · [Hypercomplex Numbers & Beyond](./hypercomplex-numbers) · [Algebraic Structures](./algebraic-structures)

The real numbers form a complete ordered field, but the equation $x^2+1=0$ still has no real solution: every real square is nonnegative, so $x^2+1$ is positive.

We want a system containing the reals and an element whose square equals $-1$. We will **construct** it from ordered pairs of reals, prove its field laws from the already established real laws, and then explain why the much stronger assertion that **every** nonconstant complex polynomial has a root requires a separate theorem.

This time the new objects are simpler than equivalence classes: each complex number will be an ordinary ordered pair $(a,b)$ of reals. What changes is the definition of multiplication.

## Build the underlying set and operations

Define

$$
\boxed{\mathbb C:=\mathbb R\times\mathbb R.}\tag{C1}
$$

Read $\mathbb R\times\mathbb R$ as "the Cartesian product of the reals with themselves." Its elements are ordered pairs of real numbers. Equality is componentwise:

$$
(a,b)=(c,d)\quad\Longleftrightarrow\quad a=c\ \text{and}\ b=d.
$$

There is no quotient relation here, so we do not have a representative-independence problem. We do have to prove that our new operations satisfy the field laws.

Define **addition**:

$$
\boxed{(a,b)+(c,d):=(a+c,b+d).}\tag{C+}
$$

Define **multiplication**:

$$
\boxed{(a,b)(c,d):=(ac-bd,ad+bc).}\tag{C×}
$$

Read the first coordinate of the product as "a c minus b d" and the second as "a d plus b c." The formulas use only real addition, multiplication, and subtraction that were justified in the preceding chapter. Both coordinates are real, proving closure.

**Why this multiplication?** We want $(0,1)$ to square to $(-1,0)$. C× gives

$$
(0,1)(0,1)=(-1,0).
$$

This is a design choice that produces the desired equation. We must now check that the design also preserves the familiar algebraic laws.

## The real-number embedding and the imaginary unit

Embed the reals via

$$
\rho:\mathbb R\to\mathbb C,\qquad
\boxed{\rho(a):=(a,0).}\tag{C2}
$$

Read $\rho$ as "rho." It is injective since $(a,0)=(b,0)$ implies $a=b$. It respects addition and multiplication:

$$
(a,0)+(b,0)=(a+b,0),\qquad
(a,0)(b,0)=(ab,0).
$$

Thus the old real arithmetic is faithfully preserved inside the new system. We conventionally identify $a$ with $(a,0)$.

Define

$$
\boxed{i:=(0,1).}\tag{Ci}
$$

Read $i$ as "the imaginary unit." Direct multiplication shows

$$
i^2=(0,1)(0,1)=(-1,0)=-1.
$$

Every $(a,b)$ can be written uniquely as

$$
\boxed{(a,b)=a+bi,}
$$

where the right side is shorthand for $(a,0)+(b,0)(0,1)$. This is an **abbreviation derived from the construction**, not an unexplained new kind of number.

**Worked example: discover the formula for the product.** Expand $(2+3i)(1+i)$ using the distributive law that we will prove below:

$$
\begin{aligned}
(2+3i)(1+i)
 &=2+2i+3i+3i^2\\
 &=2+5i-3\\
 &=-1+5i.
\end{aligned}
$$

Check independently using the defining pair formula:

$$
(2,3)(1,1)=(2\cdot1-3\cdot1,\ 2\cdot1+3\cdot1)=(-1,5).
$$

The calculations agree, and the ordered-pair formula is logically prior to the convenient $a+bi$ notation.

## The addition laws

Because addition is componentwise, real addition laws establish the corresponding complex laws:

**Associativity:**

$$
\begin{aligned}
((a,b)+(c,d))+(e,f)
 &=((a+c)+e,(b+d)+f)\\
 &=(a+(c+e),b+(d+f))\\
 &=(a,b)+((c,d)+(e,f)).
\end{aligned}
$$

**Commutativity:** $(a+c,b+d)=(c+a,d+b)$.

**Additive identity:** $0_{\mathbb C}:=(0,0)$, because $(a,b)+(0,0)=(a,b)$.

**Additive inverse:** $-(a,b):=(-a,-b)$, because

$$
(a,b)+(-a,-b)=(0,0).
$$

Therefore $(\mathbb C,+)$ is an abelian group. Again, these are **theorems about a construction**, not separately asserted axioms.

## Multiplication: identity, commutativity, associativity

The multiplicative identity is $1_{\mathbb C}:=(1,0)$:

$$
(a,b)(1,0)=(a\cdot1-b\cdot0,\ a\cdot0+b\cdot1)=(a,b).
$$

Commutativity follows because the real operations are commutative:

$$
(ac-bd,ad+bc)=(ca-db,cb+da).
$$

For associativity, let $x=(a,b)$, $y=(c,d)$, and $z=(e,f)$. Expand both groupings using C×.

**First grouping:**

$$
\begin{aligned}
(xy)z
=\big(&ace-bde-adf-bcf,\\
     &acf-bdf+ade+bce\big).
\end{aligned}
$$

**Second grouping:**

$$
\begin{aligned}
x(yz)
=\big(&ace-adf-bcf-bde,\\
     &acf+ade+bce-bdf\big).
\end{aligned}
$$

Each pair of corresponding coordinates agrees after rearranging real sums and products. Therefore $(xy)z=x(yz)$.

No statement about arbitrary "imaginary arithmetic" was required. Associativity is inherited through an explicit coordinate calculation.

## Distributivity

Let $x=(a,b)$, $y=(c,d)$, and $z=(e,f)$.

The left-hand side is

$$
\begin{aligned}
x(y+z)
 &=(a,b)(c+e,d+f)\\
 &=\big(a(c+e)-b(d+f),\ a(d+f)+b(c+e)\big)\\
 &=\big(ac+ae-bd-bf,\ ad+af+bc+be\big).
\end{aligned}
$$

Compute the right-hand side separately:

$$
\begin{aligned}
xy+xz
 &=(ac-bd,ad+bc)+(ae-bf,af+be)\\
 &=\big(ac-bd+ae-bf,\ ad+bc+af+be\big).
\end{aligned}
$$

The coordinates agree by real arithmetic, so $x(y+z)=xy+xz$. Right distributivity follows by multiplication commutativity.

This completes the ring laws. To obtain a **field**, we must still prove nonzero complex numbers have multiplicative inverses.

## Conjugation, norm, and the inverse theorem

Define the **complex conjugate** of $z=(a,b)$ by

$$
\boxed{\overline z:=(a,-b).}\tag{Cconj}
$$

Read $\overline z$ as "z-bar." Its product with $z$ is

$$
\begin{aligned}
z\overline z
 &=(a,b)(a,-b)\\
 &=(a^2+b^2,\ -ab+ab)\\
 &=(a^2+b^2,0).
\end{aligned}
$$

We identify the last pair with the embedded real $a^2+b^2$.

Because the reals form an ordered field, $a^2\geq0$ and $b^2\geq0$. If $a^2+b^2=0$, then both squares must be zero. Ordered-field laws imply $a=b=0$. Conversely $(0,0)$ clearly has zero sum of squares. Thus

$$
z\ne0\quad\Longrightarrow\quad a^2+b^2>0.
$$

This guarantees a nonzero real denominator.

**The inverse formula** is therefore

$$
\boxed{
(a,b)^{-1}
=\left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right).
}\tag{Cinv}
$$

Every division on the right is a legitimate nonzero **real** division. Multiply using C×:

$$
\begin{aligned}
(a,b)(a,b)^{-1}
&=\left(
\frac{a^2+b^2}{a^2+b^2},
\frac{-ab+ba}{a^2+b^2}
\right)\\
&=(1,0).
\end{aligned}
$$

Therefore every nonzero complex number has a multiplicative inverse. With the already proved laws, **$\mathbb C$ is a field**.

In $a+bi$ notation, the familiar reciprocal is

$$
\frac1{a+bi}=\frac{a-bi}{a^2+b^2}.
$$

We did not assume this "rationalize the denominator" rule. We derived it from real positivity and pair multiplication.

**Worked example: compute $(2+3i)^{-1}$ and verify.**

$$
\frac1{2+3i}=\frac{2-3i}{13}.
$$

Multiply:

$$
(2+3i)\frac{2-3i}{13}
=\frac{4-6i+6i-9i^2}{13}
=\frac{4+9}{13}=1.
$$

Notice that the denominator $13$ is $2^2+3^2$, a positive real number. This is why the inverse works for every nonzero complex pair.

## Conjugation is compatible with arithmetic

Direct coordinate calculations give

$$
\overline{z+w}=\overline z+\overline w,
\qquad
\overline{zw}=\overline z\,\overline w,
\qquad
\overline{\overline z}=z.
$$

For example, with $z=(a,b)$ and $w=(c,d)$,

$$
\begin{aligned}
\overline{zw}
 &=(ac-bd,-ad-bc),\\
\overline z\,\overline w
 &=(a,-b)(c,-d)\\
 &=(ac-bd,-ad-bc).
\end{aligned}
$$

These equations are theorems about the coordinate operation C×. They become essential when relating polynomial roots in conjugate pairs.

## The complex modulus and its properties

Define

$$
\boxed{|z|:=\sqrt{a^2+b^2}\quad\text{for }z=(a,b).}\tag{Cabs}
$$

Read $|z|$ as "the modulus of z." The square root is the **nonnegative real square root**, whose existence follows from real completeness (the square-root-of-two argument generalizes to every nonnegative real).

We have $|z|\geq0$, and $|z|=0$ exactly when $z=0$.

**Multiplicativity.** Conjugation gives

$$
|zw|^2=(zw)\overline{(zw)}
=z\overline z\,w\overline w
=|z|^2|w|^2.
$$

Both moduli are nonnegative, so taking nonnegative square roots yields

$$
\boxed{|zw|=|z||w|.}
$$

**Triangle inequality.** For $z=(a,b)$ and $w=(c,d)$,

$$
|z+w|^2=(a+c)^2+(b+d)^2
=|z|^2+|w|^2+2(ac+bd).
$$

The real Cauchy-Schwarz inequality gives $ac+bd\leq\sqrt{a^2+b^2}\sqrt{c^2+d^2}=|z||w|$. One elementary proof squares the nonnegative expression $(ad-bc)^2$ to get

$$
(ac+bd)^2\leq(a^2+b^2)(c^2+d^2).
$$

Consequently

$$
|z+w|^2\leq(|z|+|w|)^2.
$$

Both sides have nonnegative square roots, proving

$$
\boxed{|z+w|\leq|z|+|w|.}
$$

The modulus lets us talk about distance and convergence in $\mathbb C$ even though the complex numbers **cannot** have a field-compatible total ordering.

## Completeness of the complex numbers

We constructed $\mathbb R$ so that every real Cauchy sequence converges. We can now **prove**, without adopting another completeness axiom, that the complex field is Cauchy complete in its modulus metric.

**Theorem:** if $(z_n)$ is a complex Cauchy sequence, there is $z\in\mathbb C$ with $z_n\to z$. Here "Cauchy" means that for every real $\varepsilon>0$ there is $N$ such that $|z_m-z_n|<\varepsilon$ whenever $m,n\geq N$.

**Proof.** Write $z_n=a_n+ib_n$ with real $a_n,b_n$. The modulus gives

$
|a_m-a_n|\leq |z_m-z_n|,\qquad
|b_m-b_n|\leq |z_m-z_n|.
$

Thus $(a_n)$ and $(b_n)$ are both **real Cauchy sequences**. By the completeness theorem in [Construction of the Reals](./construction-of-the-reals), there are real $a,b$ such that $a_n\to a$ and $b_n\to b$.

Set $z=a+ib$. Given $\varepsilon>0$, choose $N$ sufficiently large that, for every $n\geq N$,

$
|a_n-a|<\frac{\varepsilon}{2},\qquad
|b_n-b|<\frac{\varepsilon}{2}.
$

Then

$
\begin{aligned}
|z_n-z|^2
&=(a_n-a)^2+(b_n-b)^2\\
&<\frac{\varepsilon^2}{4}+\frac{\varepsilon^2}{4}
=\frac{\varepsilon^2}{2}<\varepsilon^2.
\end{aligned}
$

Taking nonnegative square roots shows $|z_n-z|<\varepsilon$. Therefore $z_n\to z$.

The proof used **real completeness and the pair-modulus formula**, not complex algebraic closure or the Fundamental Theorem of Algebra. Consequently $\mathbb C$, equipped with the distance $d(z,w)=|z-w|$, is a complete metric space.

## Why complex numbers cannot be an ordered field

The real numbers have a total order compatible with addition and multiplication. Could we give $\mathbb C$ a similar order and retain all field laws?

**No.** In any ordered field, every square is nonnegative. If $x\geq0$, multiplying $x\geq0$ by $x$ gives $x^2\geq0$. If $x<0$, then $-x>0$, so $x^2=(-x)^2\geq0$.

But our constructed complex field contains $i$ with

$$
i^2=-1.
$$

If the field admitted a compatible total order, we would conclude $-1\geq0$. Yet $1>0$ in every ordered field, so $-1<0$, a contradiction.

Therefore **no total order on $\mathbb C$ is compatible with the ordered-field axioms**.

This is more precise than "imaginary numbers cannot be compared." You can impose lexicographic or other total orders on the pairs as sets; they simply will not make complex multiplication satisfy the ordered-field laws.

## Roots, polynomial equations, and what has *not* been proved yet

Constructing $i$ solves $x^2+1=0$. It does **not**, by itself, prove that every complex polynomial equation has a solution.

For example, we can solve

$$
x^2+1=0,\qquad x=\pm i.
$$

And, using the complex field laws, we can solve ordinary quadratics by the quadratic formula once complex square roots are justified. But **algebraic closure** is the much stronger assertion:

> Every nonconstant polynomial with coefficients in $\mathbb C$ has at least one root in $\mathbb C$.

That is the **Fundamental Theorem of Algebra (FTA)**. It is a *theorem*, not a field axiom and not an automatic consequence of $i^2=-1$.

### Every complex number has a square root

We can establish this preliminary fact with the real construction. Let $z=a+bi\ne0$ and $r=|z|$. Then $r\geq|a|$, so

$$
u=\sqrt{\frac{r+a}{2}}\geq0,\qquad
v=\sqrt{\frac{r-a}{2}}\geq0
$$

exist as real numbers. Direct calculation shows $u^2-v^2=a$ and

$$
(2uv)^2=(r+a)(r-a)=r^2-a^2=b^2,
$$

so $2uv=|b|$. If $b\geq0$, choose $w=u+vi$; if $b<0$, choose $w=u-vi$. In either case $w^2=z$. If $z=0$, the square root is zero.

Thus every complex number has a square root. The proof used the **real** square-root theorem and pair multiplication; it still does not prove roots exist for polynomials of arbitrary degree.

### The analytic angular lemma used by the algebraic-closure proof

The minimum-modulus proof below needs one non-algebraic input: we must be able to choose **$k$-th roots of arbitrary complex numbers of modulus one**, for each positive natural $k$. This is **not** established merely by proving that all complex numbers have square roots.

An independently established result of real-variable trigonometry is the **unit-circle parametrization theorem**: every complex $v$ with $|v|=1$ can be expressed as

$
v=\cos\theta+i\sin\theta
$

for some real angle $\theta$, and the real angle-addition identities give

$
(\cos t+i\sin t)^k=\cos(kt)+i\sin(kt).
$

Thus, if $v=\cos\theta+i\sin\theta$ and $k\geq1$, the explicitly constructed complex number

$
u=\cos(\theta/k)+i\sin(\theta/k)
$

satisfies $|u|=1$ and $u^k=v$.

**Dependency boundary:** this lemma uses the real theory of sine, cosine, angles, and their addition identities. It does *not* require the Fundamental Theorem of Algebra, but its independent construction from real completeness and analysis is not repeated in this chapter. The angular theorem can be proved from real-variable trigonometry and analysis independently of the Fundamental Theorem of Algebra. [Calculus](./calculus) and [Real Analysis](./real-analysis) contain related analytic foundations. [Geometry & Trigonometry](./geometry-trigonometry) is useful further reading, **not a valid prerequisite in the current page graph**, since it depends on Number Systems, which in turn depends on this construction. A strictly self-contained, acyclic foundations program must supply an independent proof of unit-circle parametrization, including the real trigonometric addition identities.

### A proof route for the Fundamental Theorem of Algebra

We can connect algebraic closure to the real completeness we already constructed via the **minimum-modulus argument**. The analytic ingredient is the **Extreme Value Theorem**, stated in [Real Analysis](./real-analysis): continuous real-valued functions attain minima on closed bounded subsets of Euclidean space. The theorem itself depends on real compactness and is not derived in the pair-construction steps.

Let $P(z)=a_nz^n+\cdots+a_0$ be a nonconstant complex polynomial with $a_n\ne0$.

1. **Large inputs force large modulus.** By the triangle inequality and the leading term, $|P(z)|\to\infty$ as $|z|\to\infty$. Concretely, beyond a large radius the leading term $|a_n||z|^n$ dominates the sum of all lower-degree terms.

2. **A global minimum exists.** The function $z\mapsto|P(z)|$ is continuous. Choose a closed disk outside which $|P(z)|$ exceeds, say, $|P(0)|+1$. By the real extreme-value theorem, $|P(z)|$ attains a minimum on that compact disk, hence globally. Let a minimizer be $z_0$.

3. **Suppose the minimum is nonzero.** Write $w=P(z_0)\ne0$. Because $P$ is nonconstant, its expansion about $z_0$ has a first nonzero higher-order term:

   $$
   P(z_0+h)=w+ch^k+h^{k+1}R(h),
   $$

   for some integer $k\geq1$, complex $c\ne0$, and polynomial $R$ bounded near zero.

4. **Choose a direction of descent.** We can choose a unit complex number $u$ with

   $$
   \frac{c}{w}u^k=-\left|\frac{c}{w}\right|.
   $$

   Such a $u$ exists by the independent angular lemma immediately above: the right-hand side is a unit-modulus complex number, so it has a unit-modulus $k$-th root. Set $h=tu$ for a small positive real $t$. Dividing by $w$ gives

   $$
   \frac{P(z_0+tu)}{w}
   =1-\alpha t^k+t^{k+1}E(t),
   $$

   where $\alpha=|c/w|>0$ and $E(t)$ remains bounded for small $t$.

5. **Contradict minimality.** For small enough $t>0$, the $t^{k+1}E(t)$ term has modulus less than $\alpha t^k/2$, and also $\alpha t^k<1$. The triangle inequality then gives

   $$
   \left|\frac{P(z_0+tu)}{w}\right|
   \leq 1-\alpha t^k+\frac{\alpha t^k}{2}
   <1.
   $$

   Thus $|P(z_0+tu)|<|P(z_0)|$, contradicting the choice of $z_0$.

Therefore $P(z_0)=0$: every nonconstant complex polynomial has a root.

This is an analytic proof of the FTA, with its dependencies made explicit: it uses complex arithmetic, real completeness through the extreme-value theorem, continuity of polynomials, and the independently established angular lemma. It is **not** a proof from field axioms alone, and a fully internal foundations chain still needs the analytic lemmas developed at proof level. It is **not** a statement obtained merely by writing down the pair product.

### From one root to complete factorization

Once $P(\alpha)=0$, polynomial division (over any field) shows

$$
P(z)=(z-\alpha)Q(z)
$$

for some polynomial $Q$ of degree one less. Reapply the FTA to $Q$ if its degree is positive. Induction on degree yields

$$
P(z)=a_n\prod_{j=1}^n(z-\alpha_j),
$$

where roots are listed with multiplicity. Read $\prod$ as "product over." This is why the stronger form says every degree-$n$ complex polynomial has exactly $n$ roots **counting multiplicity**.

## Complex conjugate roots of real polynomials

If a polynomial $P$ has **real coefficients**, conjugation passes through its sum and products:

$$
\overline{P(z)}=P(\overline z).
$$

If $P(z)=0$, taking conjugates yields $P(\overline z)=0$. Therefore nonreal roots of real-coefficient polynomials come in conjugate pairs.

**Worked example.** The polynomial

$$
P(z)=z^2-2z+2
$$

has roots $1+i$ and $1-i$. Verify the first:

$$
(1+i)^2-2(1+i)+2
=(1+2i+i^2)-2-2i+2=0.
$$

The conjugate root follows automatically because the coefficients $1,-2,2$ are real. This theorem explains the pair, rather than simply listing two answers obtained from a formula.

## An alternative presentation: quotient by a polynomial

The ordered-pair construction also has a compact algebraic interpretation:

$$
\mathbb C\cong\mathbb R[x]/(x^2+1).
$$

Read $\cong$ as "is isomorphic to" and $(x^2+1)$ as "the ideal generated by x squared plus one." Two real polynomials are regarded as equivalent when their difference is divisible by $x^2+1$. Every class has a unique representative $a+bx$, because polynomial division leaves a remainder of degree less than two.

In the quotient, $x^2=-1$, so

$$
(a+bx)(c+dx)=(ac-bd)+(ad+bc)x,
$$

exactly our pair-multiplication rule. Since $x^2+1$ is irreducible over $\mathbb R$ (it has no real root), the quotient is a field.

This quotient-ring view uses more abstract algebra than the pair construction, but it shows the larger pattern: adjoining a root is a **structural construction**, not just a symbol-writing trick.

## Why the familiar tower stops being ordered

The essential trajectory is now:

| Number system | Construction | New guarantee | Important limitation |
| --- | --- | --- | --- |
| $\mathbb N$ | successor, recursion, induction | natural arithmetic as a commutative semiring | no general subtraction |
| $\mathbb Z$ | difference-pair quotient | commutative integral domain; subtraction | no general division |
| $\mathbb Q$ | fraction-pair quotient | ordered field; nonzero division | not complete |
| $\mathbb R$ | Cauchy-sequence quotient | complete Archimedean ordered field | not algebraically closed |
| $\mathbb C$ | real ordered pairs with C× | algebraically closed field | no compatible total order |

**Algebraic closure** closes the specific problem of solving polynomial equations, but it does not mean all conceivable mathematical extensions stop. [Hypercomplex Numbers & Beyond](./hypercomplex-numbers) discusses other constructions that trade away properties such as commutativity or associativity, or adopt different distance notions.

For calculating in polar coordinates, computing complex logarithms, and studying roots geometrically, continue to [Complex Numbers](./complex-numbers). For the abstract machinery of quotient rings, fields, and homomorphisms, continue to [Algebraic Structures](./algebraic-structures).

## Final dependency audit

| Claim | Basis |
| --- | --- |
| $\mathbb C$ exists | ordered pairs from the constructed $\mathbb R$ |
| $i^2=-1$ | explicit pair multiplication |
| Field associativity and commutativity | component calculations using real laws |
| Distributivity | coordinate expansion |
| Every nonzero complex has an inverse | positivity of $a^2+b^2$ in $\mathbb R$ |
| Modulus and triangle inequality | general real square-root theorem, conjugation, real inequalities |
| Cauchy completeness of $\mathbb C$ | coordinate convergence in the already complete $\mathbb R$ |
| No compatible field order | contradiction from $i^2=-1$ |
| Every polynomial has a root | FTA, using real compactness, the imported angular lemma, and a minimum-modulus contradiction |
| Polynomial factorization into linear terms | FTA plus division by $z-\alpha$ and induction |

The original question was "which arithmetic laws am I allowed to assume?" You can now trace each law through a construction, a well-definedness argument if needed, and a proof. The next time [Algebraic Structures](./algebraic-structures) calls $\mathbb Q$ a field or $\mathbb Z$ a ring, those names summarize results whose foundations have been established rather than black-boxed.
