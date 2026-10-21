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

> [!definition] Complex numbers as ordered pairs
> Construct $\mathbb C$ as $\mathbb R^2$ with **componentwise addition** and a deliberately defined multiplication. The special product is what makes $(0,1)^2=(-1,0)$ possible.


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

> [!theorem] Multiplicative inverses come from the norm
> For nonzero $z=a+bi$, the positive real $a^2+b^2$ gives $z^{-1}=(a-bi)/(a^2+b^2)$. The proof must establish both **positivity** and the product identity.


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

$$
|a_m-a_n|\leq |z_m-z_n|,\qquad
|b_m-b_n|\leq |z_m-z_n|.
$$

Thus $(a_n)$ and $(b_n)$ are both **real Cauchy sequences**. By the completeness theorem in [Construction of the Reals](./construction-of-the-reals), there are real $a,b$ such that $a_n\to a$ and $b_n\to b$.

Set $z=a+ib$. Given $\varepsilon>0$, choose $N$ sufficiently large that, for every $n\geq N$,

$$
|a_n-a|<\frac{\varepsilon}{2},\qquad
|b_n-b|<\frac{\varepsilon}{2}.
$$

Then

$$
\begin{aligned}
|z_n-z|^2
&=(a_n-a)^2+(b_n-b)^2\\
&<\frac{\varepsilon^2}{4}+\frac{\varepsilon^2}{4}
=\frac{\varepsilon^2}{2}<\varepsilon^2.
\end{aligned}
$$

Taking nonnegative square roots shows $|z_n-z|<\varepsilon$. Therefore $z_n\to z$.

The proof used **real completeness and the pair-modulus formula**, not complex algebraic closure or the Fundamental Theorem of Algebra. Consequently $\mathbb C$, equipped with the distance $d(z,w)=|z-w|$, is a complete metric space.

## Why complex numbers cannot be an ordered field

> [!distinction] Algebraic closure does not imply compatibility with order
> An ordered field cannot contain an element whose square is $-1$, because squares are nonnegative. In $\mathbb C$, $i^2=-1$. Therefore no field order compatible with these operations exists.


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

### Analytic lemmas for algebraic closure

The minimum-modulus proof of the Fundamental Theorem of Algebra (FTA) requires **roots of arbitrary order on the unit circle** and **minimum attainment on a closed disk**. These are analytic theorems, not consequences of the complex field axioms. We derive both here from the already constructed reals and complexes, without assuming the FTA.

#### Absolutely convergent series

If $\sum_{n\geq0}|a_n|$ converges for complex terms $a_n$, then $\sum a_n$ converges: by the triangle inequality,

$$
\left|\sum_{n=p}^{q}a_n\right|
\leq\sum_{n=p}^{q}|a_n|,
$$

so its partial sums are Cauchy; **complex completeness**, proved earlier, supplies their limit. The same estimate justifies the **Cauchy product rule** for absolutely convergent series:

$$
\left(\sum_{j\geq0}a_j\right)\left(\sum_{k\geq0}b_k\right)
=\sum_{n\geq0}\sum_{j=0}^{n}a_jb_{n-j}.
$$

Indeed, the total absolute sum over pairs $(j,k)$ is bounded by $(\sum|a_j|)(\sum|b_k|)$. Restricting to a finite rectangle and then enlarging it changes the sum by arbitrarily small absolute tails, so grouping pairs by $j+k=n$ has the same limit.

Define $n!$ (read "n factorial") as $1\cdot2\cdots n$, with $0!=1$. The **exponential power series**

$$
\boxed{E(w):=\sum_{n=0}^{\infty}\frac{w^n}{n!}}\tag{CE}
$$

converges absolutely for every complex $w$: once $n+1>2|w|$, successive absolute terms have ratio below $1/2$, and the remaining tail is bounded by a geometric series.

Apply the Cauchy product rule and the **binomial identity** (itself proved by induction using distributivity),

$$
(v+w)^n=\sum_{j=0}^{n}\binom njv^jw^{n-j},
\qquad \binom nj=\frac{n!}{j!(n-j)!},
$$

to get

$$
\begin{aligned}
E(v)E(w)
&=\sum_{n\geq0}\sum_{j=0}^{n}
\frac{v^jw^{n-j}}{j!(n-j)!}\\
&=\sum_{n\geq0}\frac{(v+w)^n}{n!}
=E(v+w).
\end{aligned}
$$

Read $\binom nj$ as "n choose j." All division by factorials is valid in the real and complex fields already constructed.

#### Trigonometry built from real series, not from polynomial roots

For real $t$, separate the even and odd terms of $E(it)$ and **define**

$$
\boxed{
\begin{aligned}
\cos t&:=\sum_{n\geq0}\frac{(-1)^nt^{2n}}{(2n)!},\\
\sin t&:=\sum_{n\geq0}\frac{(-1)^nt^{2n+1}}{(2n+1)!}.
\end{aligned}}\tag{CS}
$$

Read $\cos$ as "cosine" and $\sin$ as "sine." These are real-valued series because each partial sum is real and $\mathbb R$ is complete. The definitions imply $E(it)=\cos t+i\sin t$.

Comparing real and imaginary parts in $E(iv)E(iw)=E(i(v+w))$ proves the addition identities

$$
\begin{aligned}
\cos(v+w)&=\cos v\cos w-\sin v\sin w,\\
\sin(v+w)&=\sin v\cos w+\cos v\sin w.
\end{aligned}
$$

Since conjugation commutes with limits of the partial sums, $\overline{E(it)}=E(-it)$. Therefore

$$
(\cos t)^2+(\sin t)^2=E(it)E(-it)=E(0)=1.
$$

These identities are **derived from convergent series**. They do not assume complex polar form, Euler's formula, or the FTA.

The series converge uniformly on each bounded real interval: on $|t|\leq M$, all absolute tails are bounded by the tails of $\sum M^n/n!$. The finite polynomial partial sums are continuous, and a uniformly small tail plus continuity of one fixed partial sum proves that $\sin$ and $\cos$ are continuous.

We now construct a **quarter-turn angle**. From CS, $\cos0=1$ and

$$
\cos2=1-2+\frac23-\frac4{45}+\cdots<-\frac13<0.
$$

After the positive term $2/3$, the alternating tail starts negative and has decreasing absolute terms, so it is negative. Also, for $0<t\leq2$, the alternating sine series gives

$$
\sin t\geq t-\frac{t^3}{6}
=t\left(1-\frac{t^2}{6}\right)>0.
$$

For these $t$, the remaining paired terms after the cubic term are nonnegative. By the intermediate-value argument there is $\alpha\in(0,2)$ with $\cos\alpha=0$. That argument follows from **real completeness**: bisect $[0,2]$ repeatedly, each time retaining an interval with opposite signs of cosine at its endpoints; the nested endpoint sequences converge to one common $\alpha$, and continuity forces $\cos\alpha=0$.

Since $\sin\alpha>0$ and $\cos^2\alpha+\sin^2\alpha=1$, we have $\sin\alpha=1$, hence

$$
\boxed{E(i\alpha)=i.}\tag{CQ}
$$

**Every unit complex number has an angle.** Suppose $v=x+iy$ has $|v|=1$ with $x,y\geq0$. Continuity of $\cos$ and its endpoint values $1$ and $0$ on $[0,\alpha]$ supply $t\in[0,\alpha]$ with $\cos t=x$. Since $\sin t\geq0$ and $\sin^2t=1-x^2=y^2$, we get $\sin t=y$. Thus $v=E(it)$.

An arbitrary unit complex number can be multiplied by one of $1,i,-1,-i$ to move it into the nonnegative quadrant. If $i^{-j}v=E(it)$ for $j\in\{0,1,2,3\}$, then the exponential addition rule and CQ give

$$
v=i^jE(it)=E(i(t+j\alpha)).
$$

So $v=E(i\theta)$ for some real $\theta$; this is **proved**, not imported from polar coordinates. For every positive integer $k$, set $u=E(i\theta/k)$. Then

$$
\boxed{|u|=1,\qquad u^k=v.}\tag{CR}
$$

This establishes the angular-root lemma **independently of the FTA**.

#### Minimum attainment from sequential compactness

**Bounded real subsequence lemma.** Put a bounded real sequence inside $[A,B]$. Repeatedly bisect this interval, retaining a closed half containing infinitely many sequence terms. Choose strictly increasing indices $n_j$ whose terms lie in the $j$th retained half. Those halves are nested and their lengths $(B-A)/2^j$ approach zero. Their endpoints form Cauchy sequences with a common real limit $L$, and $x_{n_j}\to L$. This proves that every bounded real sequence has a convergent subsequence without invoking a compactness theorem.

**Bounded complex subsequence lemma.** A bounded complex sequence $z_n=a_n+ib_n$ has bounded real and imaginary coordinate sequences. Choose a subsequence on which $a_n$ converges, and from it a further subsequence on which $b_n$ converges. Both coordinates converge along the final subsequence, so the complex sequence converges by the modulus formula. If $|z_n|\leq R$ throughout, the limit lies in the closed disk $D_R=\{z:|z|\leq R\}$ because $||z|-|w||\leq|z-w|$.

**Minimum lemma.** Let $g:D_R\to\mathbb R$ be continuous. It is bounded below: otherwise select points $z_n$ with $g(z_n)<-n$, extract a subsequence converging inside $D_R$, and contradict continuity at the limit. Let $m=\inf g(D_R)$, which exists by the real least-upper-bound property. For each positive integer $n$, choose $z_n$ with $m\leq g(z_n)<m+1/n$. A convergent subsequence has limit $z_0\in D_R$; continuity yields $g(z_0)=m$. Therefore every continuous real-valued function on a closed complex disk **attains its minimum**.

The choice of near-minimizers can be made without an additional choice axiom: the disk has an explicit countable dense set of complex rational-coordinate points, and continuity guarantees that a point from this set meets each strict upper bound $m+1/n$; choose its first occurrence in an enumeration.

Finally, complex polynomials are continuous. For $|z|,|w|\leq R$,

$$
z^k-w^k=(z-w)\sum_{j=0}^{k-1}z^{k-1-j}w^j,
\qquad |z^k-w^k|\leq kR^{k-1}|z-w|.
$$

Thus every polynomial is continuous on each disk, and the reverse triangle inequality makes $z\mapsto|P(z)|$ continuous. The required minimization theorem is established, **not merely named**.


### A proof route for the Fundamental Theorem of Algebra

> [!theorem] Fundamental Theorem of Algebra
> Every nonconstant polynomial with **complex coefficients** has at least one complex root, and hence factors into linear terms over $\mathbb C$. The detailed analytic and algebraic arguments below are the actual proof obligations; this summary is not a replacement for them.


We can connect algebraic closure to the real completeness we already constructed via the **minimum-modulus argument**. The analytic ingredients are now established above: the angular-root theorem CR and the minimum lemma for continuous real-valued functions on closed disks.

Let $P(z)=a_nz^n+\cdots+a_0$ be a nonconstant complex polynomial with $a_n\ne0$.

1. **Large inputs force large modulus.** Put $C=\sum_{j=0}^{n-1}|a_j|$. For $|z|=r\geq1$, the triangle inequality gives

   $$
   |P(z)|\geq |a_n|r^n-\sum_{j=0}^{n-1}|a_j|r^j
   \geq r^{n-1}(|a_n|r-C).
   $$

   Choose $r$ large enough that $|a_n|r-C\geq |a_n|r/2$. Then $|P(z)|\geq |a_n|r^n/2$, which grows without bound because $a_n\neq0$ and $n\geq1$. Hence $|P(z)|\to\infty$ as $|z|\to\infty$.

2. **A global minimum exists.** The function $z\mapsto|P(z)|$ is continuous by the polynomial estimate above. Choose a closed disk outside which $|P(z)|>|P(0)|+1$, possible by Step 1. By the **minimum lemma proved above**, $|P|$ attains a minimum on that disk. Its minimum is at most $|P(0)|$, while every exterior value exceeds $|P(0)|+1$, so the minimizer $z_0$ is also a global minimizer.

3. **Suppose the minimum is nonzero.** Write $w=P(z_0)\ne0$. Because $P$ is nonconstant, its expansion about $z_0$ has a first nonzero higher-order term:

   $$
   P(z_0+h)=w+ch^k+h^{k+1}R(h),
   $$

   for some integer $k\geq1$, complex $c\ne0$, and polynomial $R$ bounded near zero.

4. **Choose a direction of descent.** We can choose a unit complex number $u$ with

   $$
   \frac{c}{w}u^k=-\left|\frac{c}{w}\right|.
   $$

   Such a $u$ exists because the required equation is $u^k=-|c/w|/(c/w)$; this right-hand side has modulus one, and CR gives a unit-modulus $k$-th root. Set $h=tu$ for a small positive real $t$. Dividing by $w$ gives

   $$
   \frac{P(z_0+tu)}{w}
   =1-\alpha t^k+t^{k+1}H(t),
   $$

   where $\alpha=|c/w|>0$ and $H(t):=u^{k+1}R(tu)/w$ remains bounded for small $t$, since $R$ is a polynomial.

5. **Contradict minimality.** For small enough $t>0$, the $t^{k+1}H(t)$ term has modulus less than $\alpha t^k/2$, and also $\alpha t^k<1$. The triangle inequality then gives

   $$
   \left|\frac{P(z_0+tu)}{w}\right|
   \leq 1-\alpha t^k+\frac{\alpha t^k}{2}
   <1.
   $$

   Thus $|P(z_0+tu)|<|P(z_0)|$, contradicting the choice of $z_0$.

Therefore $P(z_0)=0$: every nonconstant complex polynomial has a root.

This is an analytic proof of the FTA, not a consequence of field axioms alone. Its analytic ingredients, the convergent exponential series, angular roots, and closed-disk minimization, were proved above from real and complex completeness. It is **not** a statement obtained merely by writing down the pair product.

### From one root to complete factorization

Once $P(\alpha)=0$, write $P(z)=\sum_{j=0}^n a_jz^j$ and subtract $P(\alpha)=0$:

$$
P(z)=P(z)-P(\alpha)=\sum_{j=1}^na_j(z^j-\alpha^j).
$$

For each positive integer $j$ the finite factorization

$$
z^j-\alpha^j=(z-\alpha)
\sum_{k=0}^{j-1}z^{j-1-k}\alpha^k
$$

is verified by multiplying out and cancelling adjacent terms. Thus $P(z)=(z-\alpha)Q(z)$ for the explicit polynomial

$$
Q(z)=\sum_{j=1}^n a_j\sum_{k=0}^{j-1}z^{j-1-k}\alpha^k,
$$

which has degree $n-1$ because $a_n\neq0$. This proves the factor theorem here instead of importing polynomial division. Reapply the FTA to $Q$ if its degree is positive. Induction on degree yields

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
| Every polynomial has a root | FTA, using proved series/angle lemmas, disk minimization, and a minimum-modulus contradiction |
| Polynomial factorization into linear terms | FTA plus division by $z-\alpha$ and induction |

The original question was "which arithmetic laws am I allowed to assume?" You can now trace each law through a construction, a well-definedness argument if needed, and a proof. The next time [Algebraic Structures](./algebraic-structures) calls $\mathbb Q$ a field or $\mathbb Z$ a ring, those names summarize results whose foundations have been established rather than black-boxed.
