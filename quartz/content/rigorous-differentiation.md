---
title: "Rigorous Differentiation: From Limits to the Mean Value Theorem"
prerequisites: ["continuity-and-compactness", "calculus"]
enables: ["rigorous-integration", "sequences-of-functions"]
---

> [!abstract] Builds on proofs, not memorized rules
> **Start with:** [Continuity and Compactness](./continuity-and-compactness) for the Extreme Value Theorem and continuity. [Calculus](./calculus#derivatives) introduces the computational rules.
> **Leads to:** [Rigorous Integration](./rigorous-integration) and the question of when limits of derivatives remain derivatives in [Sequences of Functions](./sequences-of-functions).

A derivative measures a *local* rate. Why can a local fact such as $f'(x)>0$ force a *global* inequality $f(b)>f(a)$? The answer is the Mean Value Theorem. We will derive it instead of treating it as another rule to memorize.

## 1. Differentiability is a statement about a limit

> [!definition] Derivative at an interior point
> A function $f$ is differentiable at an interior point $c$ of its domain when
>
> $$
> f'(c):=\lim_{h\to0}\frac{f(c+h)-f(c)}{h}
> $$
>
> exists as a **finite** real number. The limit examines $h\ne0$ from both sides. At endpoints, one-sided derivatives must be identified separately.

The numerator is a change in output; dividing by the change in input makes an average rate. Differentiability says these averages settle to one common real value as the input interval shrinks.

**Proof from the definition.** For $f(x)=x^2$ at any real $c$, and $h\ne0$,

$$
\frac{(c+h)^2-c^2}{h}=2c+h\longrightarrow2c.
$$

Thus $f'(c)=2c$ without appealing to the power rule.

### Differentiability implies continuity

> [!theorem] Differentiability is stronger than continuity
> If $f$ is differentiable at $c$, then $f$ is continuous there.

**Proof.** For $h\ne0$, rewrite the change as a product:

$$
f(c+h)-f(c)=h\frac{f(c+h)-f(c)}h.
$$

The factor $h$ tends to zero and the quotient tends to the finite number $f'(c)$. The algebra of limits therefore makes their product tend to zero, which is continuity at $c$. $\square$

**The converse fails.** $f(x)=|x|$ is continuous at zero. Its right difference quotients equal $1$ and its left difference quotients equal $-1$, so no two-sided derivative exists there. A corner is not a jump.

## 2. Prove the product rule: where the cross-term goes

> [!theorem] Product rule
> If $f,g$ are differentiable at $c$, then $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$.

**Proof.** Insert and subtract the same intermediate product:

$$
\begin{aligned}
\frac{f(c+h)g(c+h)-f(c)g(c)}h
&=\frac{f(c+h)-f(c)}h\,g(c+h)\\
&\quad+f(c)\frac{g(c+h)-g(c)}h.
\end{aligned}
$$

Differentiability makes $g$ continuous, so $g(c+h)\to g(c)$; the two difference quotients converge to $f'(c)$ and $g'(c)$. Taking limits gives the formula. $\square$

The proof explains why blindly multiplying derivatives is wrong: the change of a product has two contributions. For $f(x)=x$ and $g(x)=x^2$, the product is $x^3$, and the product rule yields $1\cdot x^2+x\cdot2x=3x^2$.

### Chain rule, with its zero-increment subtlety

> [!theorem] Chain rule
> If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f\circ g$ is differentiable at $c$ and
>
> $$
> (f\circ g)'(c)=f'(g(c))\,g'(c).
> $$

**Proof.** Differentiability of $f$ at $u:=g(c)$ means there is an error function $r(k)$ with $r(k)\to0$ as $k\to0$ and

$$
f(u+k)-f(u)=\bigl(f'(u)+r(k)\bigr)k.
$$

Define $r(0):=0$; the identity also holds at $k=0$. Substitute $k=g(c+h)-g(c)$. Divide by $h\ne0$:

$$
\frac{f(g(c+h))-f(g(c))}{h}
=\left(f'(u)+r(g(c+h)-g(c))\right)
\frac{g(c+h)-g(c)}h.
$$

As $h\to0$, continuity of $g$ ensures $k\to0$, so the first factor tends to $f'(u)$ and the second to $g'(c)$. This argument **also works when $g(c+h)=g(c)$** for arbitrarily small nonzero $h$: it never divides by $k$. $\square$

## 3. Interior extrema have zero derivative

> [!theorem] Fermat's theorem
> If a differentiable function has a local maximum or local minimum at an interior point $c$, then $f'(c)=0$.

**Proof for a maximum.** For sufficiently small $h>0$, we have $f(c+h)-f(c)\le0$, so the right difference quotient is nonpositive. For sufficiently small $h<0$, the same numerator is nonpositive but the denominator is negative, so the left quotient is nonnegative. If both one-sided quotients converge to the same derivative, that number must be both $\le0$ and $\ge0$, hence zero. The minimum case reverses the inequalities. $\square$

This theorem does not say that every point where $f'(c)=0$ is an extremum. For $f(x)=x^3$, we have $f'(0)=0$, but the function increases through zero.

## 4. Rolle's theorem and the Mean Value Theorem

> [!theorem] Rolle's theorem
> If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then some $c\in(a,b)$ satisfies $f'(c)=0$.

**Proof.** The [Extreme Value Theorem](./continuity-and-compactness#4-extreme-value-theorem-when-an-optimum-exists) supplies a maximum and minimum on the closed interval. If both occur only at the endpoints, their values are both $f(a)=f(b)$, so the maximum equals the minimum and $f$ is constant; then $f'=0$ throughout $(a,b)$. Otherwise at least one extremum occurs in the interior, where Fermat's theorem gives $f'(c)=0$. $\square$

> [!theorem] Mean Value Theorem (MVT)
> If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, with $a<b$, then for some $c\in(a,b)$,
>
> $$
> f'(c)=\frac{f(b)-f(a)}{b-a}.
> $$

**Proof.** Subtract the straight line through the endpoints:

$$
g(x):=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).
$$

The function $g$ inherits continuity and interior differentiability, and $g(a)=f(a)=g(b)$. Rolle's theorem yields $c\in(a,b)$ with $g'(c)=0$. Differentiating the defining expression gives the displayed formula. $\square$

**Worked example.** With $f(x)=x^2$ on $[1,3]$, the secant slope is $(9-1)/(3-1)=4$. Since $f'(c)=2c$, the guaranteed point is $c=2$, which indeed lies strictly between the endpoints.

**Failure without continuity.** Let $f(x):=x$ on $[0,1)$ and $f(1):=0$. Then $f(0)=f(1)$ and $f'(x)=1$ throughout $(0,1)$. There is no point with derivative zero. Endpoint continuity is essential.

## 5. Consequences that feel global

> [!theorem] Zero derivative means constant
> If $f'(x)=0$ at every interior point of an interval, then $f$ is constant on that interval.

**Proof.** For any $a<b$ in the interval, apply MVT to the restriction to $[a,b]$. It gives $f(b)-f(a)=f'(c)(b-a)=0$. Any two values agree. $\square$

The same proof gives **monotonicity**: if $f'(x)\ge0$ everywhere in an interval, then $f$ is nondecreasing, and if $f'(x)>0$ everywhere, then it is strictly increasing. If $|f'|\le M$, MVT gives $|f(b)-f(a)|\le M|b-a|$ (a Lipschitz bound).

A strict positive derivative is **sufficient**, not necessary, for strict increase: $x^3$ is strictly increasing even though its derivative vanishes at zero.

## 6. Darboux's theorem: derivatives cannot jump over values

It is possible for a derivative to be discontinuous. Yet, surprisingly, derivatives still obey an intermediate-value principle.

> [!theorem] Darboux's theorem
> Let $f$ be differentiable on an open interval containing $[a,b]$, and suppose $f'(a)<\lambda<f'(b)$. Then some $c\in(a,b)$ satisfies $f'(c)=\lambda$. The reverse-order case follows by applying the argument to $-f$.

**Proof.** Define $g(x):=f(x)-\lambda x$. Then $g'(a)<0$ and $g'(b)>0$. The function $g$ is continuous on $[a,b]$, so EVT gives a point $c$ at which it attains its minimum.

This minimum cannot occur at $a$: because $g'(a)<0$, sufficiently small $h>0$ gives $(g(a+h)-g(a))/h<0$, hence $g(a+h)<g(a)$. It cannot occur at $b$: because $g'(b)>0$, sufficiently small $h<0$ gives $(g(b+h)-g(b))/h>0$, hence $g(b+h)<g(b)$. Thus $c\in(a,b)$. Fermat's theorem gives $g'(c)=0$, so $f'(c)=\lambda$. $\square$

**Example: a discontinuous derivative.** Define

$$
f(x):=
\begin{cases}
x^2\sin(1/x),&x\ne0,\\
0,&x=0.
\end{cases}
$$

At zero, the difference quotient is $h\sin(1/h)\to0$, so $f'(0)=0$. For $x\ne0$,

$$
f'(x)=2x\sin(1/x)-\cos(1/x).
$$

The derivative oscillates near zero and has no limit there. It is nevertheless a derivative, so **Darboux's intermediate-value property still holds**. Continuity of $f'$ was never assumed.

## 7. Taylor's theorem: what a polynomial approximation owes us

For $n\ge0$, let

$$
P_n(x):=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k.
$$

The expression $k!$ is "k factorial." The polynomial matches the first $n$ derivatives of $f$ at $a$.

> [!theorem] Taylor's theorem with Lagrange remainder
> Suppose $f$ has continuous derivatives through order $n$ on the closed interval between $a$ and $b$, and an $(n+1)$-st derivative at every interior point. If $a\ne b$, then for some $\xi$ strictly between $a$ and $b$,
>
> $$
> f(b)=P_n(b)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(b-a)^{n+1}.
> $$

**Proof.** Assume $a<b$; the other direction is identical after reversing endpoints. Let

$$
K:=\frac{f(b)-P_n(b)}{(b-a)^{n+1}},
\qquad H(x):=f(x)-P_n(x)-K(x-a)^{n+1}.
$$

By construction, $H(b)=0$. At $a$, the Taylor polynomial matches all derivatives through order $n$, and the remaining term vanishes to that order, so $H(a)=H'(a)=\cdots=H^{(n)}(a)=0$.

Apply Rolle's theorem to $H$ on $[a,b]$: there is an interior zero of $H'$. Together with $H'(a)=0$, Rolle's theorem applied again supplies an interior zero of $H''$. Repeat through order $n+1$. At the final chosen point $\xi$, we get

$$
0=H^{(n+1)}(\xi)=f^{(n+1)}(\xi)-(n+1)!K.
$$

Substitute the definition of $K$ and rearrange to obtain the formula. $\square$

**Worked error bound.** For $f(x)=e^x$, its degree-two polynomial about $0$ is $1+x+x^2/2$. For $0\le x\le1$ the remainder has size at most $e\,x^3/6\le e/6$. This supplies a controlled approximation, not just a pattern observed from series coefficients.

**Caution:** Taylor polynomials of increasing degree need not converge to the original function. The remainder must be shown to tend to zero. The smooth function $f(x):=e^{-1/x^2}$ for $x\ne0$ and $f(0):=0$ has all derivatives at zero equal to zero, yet $f(x)>0$ for $x\ne0$. Its Taylor series about zero is identically zero. (A proof that all derivatives vanish is standard, but is not supplied in this chapter.)

## 8. The dependency map

**EVT** $\Rightarrow$ **Fermat + Rolle** $\Rightarrow$ **MVT** $\Rightarrow$ **monotonicity and quantitative bounds**.

The same tools yield **Darboux** and **Taylor's remainder**. These theorems justify calculus rules and explain when they can fail. The [Rigorous Integration](./rigorous-integration) chapter uses MVT again to prove the fundamental theorem of calculus from partitions, and [Sequences of Functions](./sequences-of-functions) asks when derivatives survive a limiting process.
