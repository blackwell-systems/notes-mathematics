---
title: "Mathematical Foundations of Quantum Mechanics"
prerequisites: ["complex-numbers", "linear-algebra-foundations", "probability", "calculus"]
enables: []
---

> [!abstract] Prerequisites & where this leads
> **Builds on:** [Complex Numbers](./complex-numbers) (magnitude, conjugation, phase), [Linear Algebra Foundations](./linear-algebra-foundations) (vectors, inner products, eigenvectors, operators), [Probability](./probability) (distributions, expected values), and [Calculus](./calculus) (change and differential equations).
> **Helpful next steps:** [Tensor products and dual spaces](./linear-algebra-foundations), [Differential Equations](./differential-equations) (time evolution), [Optimization](./optimization), [Information Geometry](./information-geometry), and [Differential Geometry](./differential-geometry).
>
> **Scope:** This is a mathematical introduction to **finite-dimensional quantum mechanics**, built primarily around one or two qubits. It explains the mathematical model and its predictions. It is not a complete physics course and does not derive the postulates from more elementary assumptions.

**The central question:** What changes when a physical state is described by a **complex vector**, measurable quantities by **operators**, and measurement probabilities by **squared amplitudes**?

The same mathematics appears across your existing notes: vectors, orthogonality, probability, differentiation, geometry and optimization. The key is not that quantum mechanics makes everything mysterious. It is that **the objects and operations have different physical meanings** than they do in ordinary classical probability.

## 1. First intuition: states are not probability lists

For a classical bit, the two possibilities are $0$ and $1$. A classical probability distribution can assign them probabilities $p$ and $1-p$.

A quantum **bit**, or *qubit*, begins with two basis states $|0\rangle$ and $|1\rangle$. These symbols are pronounced "**ket zero**" and "**ket one**." They are labels for two orthonormal basis vectors in the complex vector space $\mathbb C^2$:

$$
|0\rangle=\begin{bmatrix}1\\0\end{bmatrix},
\qquad
|1\rangle=\begin{bmatrix}0\\1\end{bmatrix}.
$$

A pure qubit state is represented by a **normalized** vector

$$
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle
=\begin{bmatrix}\alpha\\\beta\end{bmatrix},
\qquad
\alpha,\beta\in\mathbb C,
\qquad
|\alpha|^2+|\beta|^2=1.
$$

Read $|\psi\rangle$ as "**ket psi**," $\alpha$ as "alpha" and $\beta$ as "beta." The complex coefficients are called **probability amplitudes**. Their squared magnitudes, not the amplitudes themselves, give probabilities in the basis $|0\rangle,|1\rangle$.

> [!intuition] Why complex numbers instead of ordinary probabilities?
> Probabilities are nonnegative and add when we combine **exclusive alternatives**. Quantum amplitudes can have different signs and complex phases. When alternative processes contribute amplitudes to the *same outcome*, the amplitudes combine **before** their magnitudes are squared. Interference is the consequence. This is why a quantum state cannot generally be replaced by a plain probability list.

Two vectors that differ only by a common phase represent the **same pure physical state**:

$$
|\psi\rangle\sim e^{i\varphi}|\psi\rangle.
$$

Read $e^{i\varphi}$ as "e to the i phi." Here $\varphi$ is a real angle, and multiplication by this unit-magnitude factor changes no measurement probabilities. The distinction is **global versus relative phase**: multiplying every amplitude by one phase changes nothing, while changing the phase of *one component relative to another* can change predictions.

## 2. Inner products and the Born rule

For complex column vectors, the inner product uses **complex conjugation**. If $|\psi\rangle$ is a column, its corresponding **bra** $\langle\psi|$ (read "bra psi") is the conjugate transpose:

$$
|\psi\rangle=\begin{bmatrix}\alpha\\\beta\end{bmatrix},
\qquad
\langle\psi|=\begin{bmatrix}\alpha^*&\beta^*\end{bmatrix}.
$$

A star means complex conjugate. The inner product $\langle\phi|\psi\rangle$ is read "bra phi ket psi." Normalization means

$$
\langle\psi|\psi\rangle=|\alpha|^2+|\beta|^2=1.
$$

The **Born rule**, the standard measurement-probability rule of quantum theory, gives

$$
\boxed{
P(0)=|\langle0|\psi\rangle|^2=|\alpha|^2,
\qquad
P(1)=|\langle1|\psi\rangle|^2=|\beta|^2.
}
$$

This describes measurement **in the computational basis**. A different basis can yield a different pair of probabilities for the *same* quantum state. The state alone does not determine a classical probability distribution until the measurement is specified.

### Worked example: the plus state

Define

$$
|+\rangle=\frac{|0\rangle+|1\rangle}{\sqrt2}
=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}.
$$

It has squared norm $1/2+1/2=1$. Measuring in the computational basis gives

$$
P(0)=\frac12,\qquad P(1)=\frac12.
$$

There is nothing wrong with this calculation, but the conclusion "**therefore the qubit is just a fair coin**" would be wrong. We will see why after introducing operators and interference.

## 3. Observables: measuring is an operator question

An **observable** is represented, in the standard finite-dimensional formulation, by a **Hermitian operator** $A$, meaning $A^\dagger=A$. The dagger is read "**adjoint**" or "**conjugate transpose**."

Hermitian operators have **real eigenvalues** and admit an orthonormal eigenbasis. In an ideal projective measurement of $A$, the possible outcomes are its eigenvalues. The Born rule assigns probabilities to the corresponding eigenspaces.

For an observable with distinct eigenvalues $a_j$ and orthonormal eigenvectors $|a_j\rangle$, the probability of outcome $a_j$ is

$$
P(a_j)=|\langle a_j|\psi\rangle|^2.
$$

If an eigenvalue is degenerate, use the **projector onto the whole eigenspace** instead of choosing just one eigenvector.

The **expectation value** is

$$
\boxed{\mathbb E[A]=\langle\psi|A|\psi\rangle.}
$$

This is the statistical average obtained by repeating the *same preparation and measurement* many times, not necessarily an outcome an individual measurement can return.

### Worked example: an expectation that is not an outcome

The **Pauli-Z** operator is

$$
Z=\begin{bmatrix}1&0\\0&-1\end{bmatrix}.
$$

Its eigenstates $|0\rangle$ and $|1\rangle$ have eigenvalues $+1$ and $-1$. In the plus state,

$$
\begin{aligned}
\langle+|Z|+\rangle
&=\frac12\begin{bmatrix}1&1\end{bmatrix}
\begin{bmatrix}1&0\\0&-1\end{bmatrix}
\begin{bmatrix}1\\1\end{bmatrix}\\
&=\frac12(1-1)=0.
\end{aligned}
$$

**The expectation is $0$, but a single ideal Z measurement can only return $+1$ or $-1$.** The expectation is not a third eigenvalue.

What happens to a state when it is measured? Under the ideal projective measurement postulate, conditioning on an observed eigenvalue updates the state to its normalized projection into that eigenspace. A measurement is not generally a passive readout of a pre-existing basis label. More general **POVM measurements** exist but are beyond this introductory chapter.

## 4. Superposition versus mixture: the interference experiment

Two states can give identical measurement probabilities in one basis and behave differently in another.

Compare the pure state $|+\rangle$ with a **classical mixture** that prepares $|0\rangle$ half the time and $|1\rangle$ half the time.

Both produce $P(0)=P(1)=1/2$ when measured directly in the computational basis. But the pure state contains a definite **relative phase**, whereas the mixture does not retain it.

Consider the **Hadamard operator** (read "HAD-uh-mard"):

$$
H=\frac1{\sqrt2}
\begin{bmatrix}1&1\\1&-1\end{bmatrix}.
$$

It is unitary, meaning $H^\dagger H=I$ and thus preserves vector norm. Its action on the basis states is

$$
H|0\rangle=|+\rangle,
\qquad
H|1\rangle=|-\rangle,
\qquad
|-\rangle=\frac{|0\rangle-|1\rangle}{\sqrt2}.
$$

Apply $H$ to $|+\rangle$:

$$
H|+\rangle
=\frac12
\begin{bmatrix}1&1\\1&-1\end{bmatrix}
\begin{bmatrix}1\\1\end{bmatrix}
=\begin{bmatrix}1\\0\end{bmatrix}=|0\rangle.
$$

The two amplitudes **constructively interfere** in the $|0\rangle$ component and **cancel** in the $|1\rangle$ component. The measurement now returns $0$ with probability $1$.

For the classical mixture, the output is still an equal mixture of $|+\rangle$ and $|-\rangle$ after applying $H$. Measuring either output state in the computational basis gives $50/50$ probabilities, so the mixture still yields $50/50$ overall.

| Preparation | Measure immediately | Apply $H$, then measure |
| --- | --- | --- |
| Pure $|+\rangle$ | $50\%$ zero, $50\%$ one | $100\%$ zero |
| Equal classical mixture of $|0\rangle$ and $|1\rangle$ | $50\%$ zero, $50\%$ one | $50\%$ zero, $50\%$ one |

**This is the key difference:** a probability list for one measurement basis cannot capture all the predictions of a quantum state. Quantum amplitudes must also encode **coherence**, which permits interference.

> [!distinction] A quantum computer does not simply evaluate every possibility and read all answers
> Superposition does not give unrestricted access to every amplitude in a single measurement. The algorithm must arrange operations so that desired outcomes become more likely through **interference**; measurement still returns a sampled outcome.

## 5. The Pauli operators and incompatible measurements

Three especially useful Hermitian operators on one qubit are

$$
X=\begin{bmatrix}0&1\\1&0\end{bmatrix},
\qquad
Y=\begin{bmatrix}0&-i\\i&0\end{bmatrix},
\qquad
Z=\begin{bmatrix}1&0\\0&-1\end{bmatrix}.
$$

Read the letters "Pauli X," "Pauli Y," and "Pauli Z." $X$ swaps the computational basis states. $Z$ distinguishes them. $Y$ combines swapping with complex phase.

The plus and minus states $|+\rangle$ and $|-\rangle$ are eigenstates of $X$ with eigenvalues $+1$ and $-1$. Measuring $X$ on $|+\rangle$ therefore returns $+1$ with certainty, even though measuring $Z$ on it returns either sign with equal probability.

The operators $X$ and $Z$ do **not commute**:

$$
XZ=-ZX,\qquad [X,Z]=XZ-ZX=-2iY.
$$

The bracket $[X,Z]$ is pronounced "the commutator of X and Z." Noncommuting observables generally cannot be assigned a common orthonormal eigenbasis. This is the mathematical source of measurement incompatibility and uncertainty relations.

For any Hermitian $A$, define its variance in a state by

$$
(\Delta A)^2=\langle A^2\rangle-\langle A\rangle^2.
$$

An uncertainty relation is

$$
\Delta A\,\Delta B\geq
\frac12\left|\langle[A,B]\rangle\right|.
$$

This is a statement about the **spread of outcomes of incompatible observables** in a state, not merely a claim that measuring devices are imprecise. The displayed bound can be zero for some states even when the operators do not commute; stronger relations retain additional information.

## 6. The geometry of one qubit: the Bloch sphere

Ignoring physically irrelevant global phase, every normalized pure qubit can be represented as

$$
|\psi(\theta,\varphi)\rangle
=\cos\frac\theta2\,|0\rangle
+e^{i\varphi}\sin\frac\theta2\,|1\rangle,
$$

with $0\leq\theta\leq\pi$ and $0\leq\varphi<2\pi$, allowing for the usual identification of angle labels at the poles.

The associated **Bloch vector** has three real coordinates

$$
\mathbf r=
\begin{bmatrix}
\sin\theta\cos\varphi\\
\sin\theta\sin\varphi\\
\cos\theta
\end{bmatrix}.
$$

For a **pure** qubit state, $\|\mathbf r\|=1$. The surface of this unit sphere represents pure states; the interior represents mixed qubit states via density matrices.

- North pole: $|0\rangle$.
- South pole: $|1\rangle$.
- Positive $x$-axis: $|+\rangle$.
- Negative $x$-axis: $|-\rangle$.

> [!intuition] What kind of sphere is this?
> The Bloch sphere is not the region of physical space where the qubit lives, nor is it a picture of an electron literally spinning around an axis. It is a **geometric representation of possible qubit states**, after removing global phase.

Two angles describe this sphere; the original complex vector has four real coordinate entries, reduced by normalization and global-phase equivalence. This is a concrete example of [quotienting away irrelevant descriptions](./equivalence-relations) and of the geometric perspective developed in [Differential Geometry](./differential-geometry).

## 7. Time evolution: transformations that preserve probability

For a closed quantum system, ordinary time evolution is described by a **unitary operator** $U(t)$:

$$
|\psi(t)\rangle=U(t)|\psi(0)\rangle,
\qquad U(t)^\dagger U(t)=I.
$$

Unitary evolution preserves inner products and therefore total probability.

The standard dynamical law is the **Schrödinger equation**:

$$
i\hbar\frac{d}{dt}|\psi(t)\rangle
=\widehat H|\psi(t)\rangle.
$$

Here $i$ is the imaginary unit, $\hbar$ (read "h-bar") is the reduced Planck constant, and $\widehat H$ (read "H-hat") is the **Hamiltonian**, a Hermitian operator representing energy.

For a **time-independent** Hamiltonian,

$$
U(t)=e^{-i\widehat Ht/\hbar}.
$$

The matrix exponential is defined by a convergent power series, analogous to the ordinary exponential but with a matrix argument.

### Worked example: relative phase changes even when Z probabilities do not

Let $\widehat H=\frac{\hbar\omega}{2}Z$, where $\omega$ (read "omega") is an angular-frequency parameter. Starting from $|+\rangle$, the state after time $t$ is

$$
|\psi(t)\rangle
=\frac1{\sqrt2}
\left(e^{-i\omega t/2}|0\rangle
+e^{i\omega t/2}|1\rangle\right).
$$

Measuring $Z$ always gives $50/50$ probabilities because both amplitudes keep magnitude $1/\sqrt2$. Yet the **relative phase** changes by $\omega t$, so the expectation of $X$ changes:

$$
\boxed{\langle X\rangle_t=\cos(\omega t).}
$$

This is a direct example of why state evolution is not reducible to changing the probabilities of $0$ and $1$ in one fixed basis.

## 8. Two qubits and entanglement

One qubit has state space $\mathbb C^2$. Two qubits use the **tensor product**

$$
\mathbb C^2\otimes\mathbb C^2\cong\mathbb C^4.
$$

Read $\otimes$ as "tensor product." Its standard basis is $|00\rangle,|01\rangle,|10\rangle,|11\rangle$. A general two-qubit pure state has four complex amplitudes.

A **product state** can be written $|a\rangle\otimes|b\rangle$ (often shortened to $|a\rangle|b\rangle$). A state that cannot be written as a product of states of the two subsystems is **entangled**.

### Worked example: a Bell state

Consider

$$
|\Phi^+\rangle
=\frac{|00\rangle+|11\rangle}{\sqrt2}.
$$

Measure both qubits in the computational basis. The results are perfectly correlated: $00$ occurs with probability $1/2$, $11$ with probability $1/2$, and the other outcomes with probability $0$.

Why is this not just two independent qubits? Suppose

$$
|\Phi^+\rangle
=(a|0\rangle+b|1\rangle)\otimes(c|0\rangle+d|1\rangle).
$$

Expanding the product gives amplitudes $ac,ad,bc,bd$. To match the Bell state, both $ac$ and $bd$ must be nonzero, so $a,b,c,d$ must all be nonzero. But that would force $ad$ and $bc$ to be nonzero too, contradicting the required zero amplitudes. **No product decomposition exists.**

> [!distinction] Correlation is not sufficient to identify entanglement
> A classical mixture of $|00\rangle$ and $|11\rangle$ can reproduce these same computational-basis correlations. The Bell state is different because it has coherent superposition, visible through measurements in other bases. Entanglement is a property of the **joint quantum state**, not merely that two classical outcomes happen to match.

For mixed states, the right mathematical language is a **density matrix** $\rho$: a positive semidefinite operator with trace $1$. A pure state corresponds to $\rho=|\psi\rangle\langle\psi|$; a mixture $\{p_j,|\psi_j\rangle\}$ has

$$
\rho=\sum_j p_j|\psi_j\rangle\langle\psi_j|.
$$

The expectation rule generalizes to $\mathbb E[A]=\operatorname{tr}(\rho A)$ (read "trace of rho A"). A full treatment of mixed-state entanglement and quantum channels is beyond this introduction.

## 9. Experimental evidence: why the mathematics earns physical trust

So far, we have described a mathematical framework. **Why should we believe it describes the world?** Because quantum theory predicts observable patterns and numerical relationships that experiments can check, and many demanding tests agree with those predictions.

> [!distinction] Three different meanings of "proved"
> **Mathematical:** Theorems such as the variational bound follow deductively from stated axioms.
>
> **Empirical:** Experiments test whether a model's predictions match observed frequencies, correlations and measured quantities. Repeated success provides strong evidence, not a logical proof that nature must obey these axioms in every untested regime.
>
> **Interpretive:** Questions such as what a wavefunction *fundamentally is*, or whether collapse represents a physical process, are not automatically answered by matching ordinary quantum predictions.

Here are four independently useful examples. The mathematical claims and the experimental results are deliberately kept separate.

### A. Individual detections accumulate into an interference pattern

**Prediction:** When coherent alternatives contribute amplitudes $a_1$ and $a_2$ to the same detection location, the probability is

$$
P\propto |a_1+a_2|^2
=|a_1|^2+|a_2|^2+2\operatorname{Re}(a_1^*a_2).
$$

The last term is the **interference term**. It is absent when we simply add independent classical path probabilities, and it can be positive or negative depending on the relative phase.

**Test:** Tonomura and collaborators reported the buildup of an electron interference pattern from **individually detected electrons** in 1989. Their setup used an **electron biprism**, an electron-optical analogue of two-path interference, rather than literally two mechanical slits. Each event registered as a localized detection; many events accumulated into the interference distribution.

**What is established:** The measured pattern supports coherent quantum amplitudes and the Born-rule account of detection probabilities. A classical mixture over two incoherent paths does not produce the same interference term.

**Primary source:** [Tonomura et al., *Demonstration of single-electron buildup of an interference pattern*, American Journal of Physics 57 (1989), 117-120](https://doi.org/10.1119/1.16104).

### B. Individual quantum systems can be prepared, controlled and measured

**Prediction:** A unitary operation can change the amplitudes and relative phase of a qubit while preserving normalization. Preparing the same state and measuring in different bases gives the specific outcome frequencies predicted by the Born rule.

**Test:** Experiments with trapped ions and photons demonstrated controlled preparation, manipulation and measurement of **individual** quantum systems, rather than only large ensembles. This body of experimental work led to the [2012 Nobel Prize in Physics](https://www.nobelprize.org/prizes/physics/2012/summary/) for Serge Haroche and David Wineland. Ion-trap experiments, for example, can use laser pulses to prepare and interrogate superpositions of internal energy levels.

**What is established:** Superposition and controlled quantum evolution are operationally testable, not merely mathematical stories about microscopic objects. The ideal matrix gates used earlier in this chapter are simplified models of experimentally implementable controls, with real errors and decoherence.

**Sources:** [Nobel Committee's scientific background, *Measuring and Manipulating Individual Quantum Systems*](https://www.nobelprize.org/uploads/2018/06/advanced-physicsprize2012-1.pdf); [NIST profile of David Wineland](https://www.nist.gov/nist-and-nobel/dave-wineland).

### C. Bell tests distinguish quantum correlations from local hidden-variable predictions

**Prediction:** Consider two separated observers, each choosing between two binary measurements. Write their outcomes as $A_0,A_1,B_0,B_1\in\{-1,+1\}$, and denote the measured **correlation** at settings $i,j$ by $E_{ij}$. Under the standard Bell-local model, with measurement settings independent of the hidden variables, the **CHSH inequality** is

$$
\boxed{S=|E_{00}+E_{01}+E_{10}-E_{11}|\leq2.}
$$

Why $2$? For any fixed assignment of local outcomes, the quantity

$$
A_0(B_0+B_1)+A_1(B_0-B_1)
$$

equals $+2$ or $-2$: if $B_0$ and $B_1$ agree, the first bracket has magnitude $2$ and the second vanishes; otherwise the roles reverse. Averaging over such assignments cannot make the absolute value exceed $2$.

For suitable **entangled quantum states** and measurement settings, quantum mechanics predicts

$$
S=2\sqrt2\approx2.828,
$$

which exceeds the Bell-local bound.

**Test:** Bell-inequality experiments with entangled photons have repeatedly observed violations. In 2015, experiments closed the most significant detection and locality loopholes in their designs; for example, NIST researchers reported a strong rejection of local realism while maintaining spacelike separation of relevant events. Alain Aspect, John Clauser and Anton Zeilinger received the [2022 Nobel Prize in Physics](https://www.nobelprize.org/prizes/physics/2022/summary/) for pioneering experiments establishing Bell-inequality violations.

**What is established:** Under the experiments' stated assumptions, the observed correlations are incompatible with the corresponding **Bell-local hidden-variable models**. This does **not** mean researchers demonstrated controllable faster-than-light communication. It also does not by itself settle every interpretation of quantum mechanics. Bell tests constrain particular combinations of assumptions, including locality and independence of measurement choices.

**Primary sources:** [Shalm et al., *A Strong Loophole-Free Test of Local Realism*, Physical Review Letters 115 (2015)](https://doi.org/10.1103/PhysRevLett.115.250402); [Giustina et al., *A Significant-Loophole-Free Test of Bell's Theorem with Entangled Photons*, Physical Review Letters 115 (2015)](https://doi.org/10.1103/PhysRevLett.115.250401); [NIST experiment summary](https://www.nist.gov/news-events/news/2015/11/nist-team-proves-spooky-action-distance-really-real).

### D. Precision quantum electrodynamics: calculations face numerical tests

**Prediction:** Quantum electrodynamics (QED), the relativistic quantum theory of electromagnetic interactions, makes extremely precise predictions about quantities including the electron's magnetic moment. This is **beyond** the two-dimensional qubit model developed here; it is an example of the larger quantum-theoretic framework put to demanding quantitative tests.

**Test:** Fan, Myers, Sukra and Gabrielse reported an electron magnetic-moment measurement in 2023 with **0.13 parts-per-trillion relative experimental uncertainty**. They describe a test of the relevant Standard Model prediction at roughly **one part in $10^{12}$**, with the comparison limited partly by independent determinations of the fine-structure constant $\alpha$.

**What is established:** Quantum field-theoretic calculations and extremely sensitive measurements can be compared at a precision far beyond qualitative claims about "strange quantum behavior." The **measurement precision** must not be confused with an unconditional guarantee that every theoretical calculation or input parameter has the same uncertainty.

**Primary source:** [Fan et al., *Measurement of the Electron Magnetic Moment*, Physical Review Letters 130 (2023), 071801](https://doi.org/10.1103/PhysRevLett.130.071801). See also [NIST, *Tests of Fundamental Physics*](https://www.nist.gov/publications/tests-fundamental-physics).

### What the experiments validate, and what they do not

| Mathematical idea | Measurable consequence | What is not thereby proved |
| --- | --- | --- |
| Complex amplitudes and interference | Single-particle detections build interference patterns | One unique metaphysical meaning of the wavefunction |
| State preparation, unitary gates and measurement | Repeatable outcome frequencies after controlled operations | Every real device is perfectly isolated and unitary |
| Entangled joint states and Bell correlations | Correlations violating Bell-local inequalities | Faster-than-light signalling or a unique interpretation |
| Quantum field-theoretic calculations | Precision magnetic-moment and spectroscopic predictions | That every regime or proposed extension of quantum theory is settled |

**Why this belongs in a mathematics reference:** Here, abstraction has a concrete test. A model built from complex vector spaces, operators, inner products and probability rules can predict **numbers that laboratories measure**. That is powerful evidence that the structure is physically useful, while the distinction between mathematical deduction and empirical inference remains essential.

**Bridge to optimization:** Nothing in these experiments establishes that a [quantum natural-gradient](#10-quantum-states-as-an-optimization-problem) algorithm will outperform classical neural-network training. Its update rule can be mathematically well-defined while claims about speed, sample efficiency and hardware advantage require separate experiments.

## 10. Quantum states as an optimization problem

Here is the bridge to [Gradient Descent](./multivariable-calculus#gradient-descent), [Optimization](./optimization), and [Information Geometry](./information-geometry).

For a Hermitian Hamiltonian $\widehat H$, its lowest eigenvalue $E_0$ is the **ground-state energy**. Every normalized pure state satisfies the **Rayleigh–Ritz variational bound**

$$
\boxed{\langle\psi|\widehat H|\psi\rangle\geq E_0.}
$$

**Why?** Expand the state in an orthonormal eigenbasis, $|\psi\rangle=\sum_j c_j|E_j\rangle$. Normalization gives $\sum_j|c_j|^2=1$, so

$$
\langle\psi|\widehat H|\psi\rangle
=\sum_j |c_j|^2E_j\geq
E_0\sum_j|c_j|^2=E_0.
$$

Thus finding a ground state can be formulated as minimizing an **energy expectation**. If we choose a parameterized family of trial states $|\psi(\boldsymbol\theta)\rangle$, we can optimize

$$
E(\boldsymbol\theta)
=\langle\psi(\boldsymbol\theta)|\widehat H|\psi(\boldsymbol\theta)\rangle.
$$

Here $\boldsymbol\theta$ (read "bold theta") is the vector of adjustable parameters. This resembles optimizing a neural-network loss, but **the trial-state family may not contain the true ground state**, and nonconvex objectives can have difficult optimization landscapes.

### Worked example: training one qubit to minimize energy

Choose $\widehat H=Z$ and the trial family

$$
|\psi(\theta)\rangle
=\cos\frac\theta2|0\rangle
+\sin\frac\theta2|1\rangle.
$$

Its energy is

$$
E(\theta)=\cos^2\frac\theta2-\sin^2\frac\theta2
=\cos\theta,
\qquad
\frac{dE}{d\theta}=-\sin\theta.
$$

A gradient-descent update with learning rate $\eta>0$ is

$$
\boxed{\theta_{k+1}=\theta_k+\eta\sin\theta_k.}
$$

On the interval $0<\theta<\pi$ with a suitably small step size, this update moves toward $\theta=\pi$, where the state becomes $|1\rangle$ and the energy is $-1$.

Notice that $\theta=0$ also has zero gradient, but it is an **energy maximum**, not a minimum. The existence of a stationary point is not enough to conclude successful training.

### Ordinary gradient versus natural gradient

A parameter change of magnitude $0.01$ is not always the same **physical change of state** at different positions or with different parameterizations. The **Fubini–Study metric** supplies an intrinsic notion of infinitesimal distance between pure states, ignoring global phase.

For normalized parameterized pure states, a common convention for its local metric is

$$
g_{ij}
=\operatorname{Re}\left(
\langle\partial_i\psi|\partial_j\psi\rangle
-\langle\partial_i\psi|\psi\rangle
\langle\psi|\partial_j\psi\rangle
\right).
$$

Read $g_{ij}$ as the "**i-j metric component**" and $\operatorname{Re}$ as "real part." It describes how distinguishable nearby **state rays** become as parameters change. For the one-angle qubit family above,

$$
g_{\theta\theta}=\frac14.
$$

A geometry-aware update can use a **quantum natural gradient**,

$$
\Delta\boldsymbol\theta
=-\eta\,G(\boldsymbol\theta)^{-1}
\nabla_{\boldsymbol\theta}E,
$$

provided $G$ is invertible. If not, suitable regularization or a pseudoinverse is needed. For this simple one-parameter family, $G^{-1}=4$; the scale can be absorbed into the learning rate. In multiple dimensions, geometry can change the **direction**, not just the size, of the step.

**Connection, not identity:** Classical natural-gradient methods use the Fisher information geometry of **probability distributions**. Quantum natural-gradient methods use geometry of **quantum states**. The structures are related, but different experiments, metrics and conventions must not be silently identified.

### Imaginary-time evolution and energy descent

Ordinary, unitary quantum time evolution is *not* generic gradient descent: for a time-independent Hamiltonian the energy expectation remains constant.

A different **imaginary-time** construction suppresses higher-energy components. In units with $\hbar=1$, its normalized form can be written

$$
\frac{d|\psi\rangle}{d\tau}
=-(\widehat H-E)|\psi\rangle,
\qquad
E=\langle\psi|\widehat H|\psi\rangle.
$$

For a normalized state evolving this way under a fixed Hermitian Hamiltonian,

$$
\boxed{\frac{dE}{d\tau}
=-2\left(\langle\widehat H^2\rangle-
\langle\widehat H\rangle^2\right)
=-2\operatorname{Var}_\psi(\widehat H)\leq0.}
$$

The energy cannot increase; equality occurs for a state supported within a single energy eigenspace. If the starting state has **no overlap with the ground-state eigenspace**, imaginary-time evolution cannot manufacture that missing component, even though energy is nonincreasing.

This is a mathematical evolution used in simulation and theory, **not ordinary physical time evolution**. Its resemblance to gradient flow is exact in appropriate geometric formulations, but not an argument that classical neural networks secretly obey quantum mechanics.

## 11. What actually transfers to classical model training?

| Quantum setting | Classical training analogue | Important difference |
| --- | --- | --- |
| State $|\psi(\theta)\rangle$ | Model specified by parameters $\theta$ | Quantum predictions arise from amplitudes, operators and the Born rule |
| Energy expectation | Loss / objective function | A Hamiltonian is a physical observable, not merely an arbitrary error score |
| Gradient of energy | Gradient of loss | Both use ordinary differentiation with respect to parameters |
| Quantum natural gradient | Fisher natural gradient | State-space metrics and probabilistic Fisher metrics are not interchangeable by default |
| Imaginary-time energy decrease | Gradient flow of an objective | Imaginary-time evolution is nonunitary and not normal physical evolution |
| Quantum variational algorithms | Parameterized classical models | Neither guarantees global optimization or quantum advantage |

The intersection is **geometry-aware optimization of parameterized objects**. Classical backpropagation remains a classical chain-rule algorithm; no quantum mechanics is required for ordinary neural-network training.

## 12. Self-check: separate the claims

1. **Can a normalized qubit vector have complex amplitudes?** Yes. Normalization constrains the *sum of squared magnitudes*, not each coefficient's phase.
2. **Does $\langle+|Z|+\rangle=0$ mean that Z can measure $0$?** No. Its possible measurement outcomes are the eigenvalues $+1$ and $-1$.
3. **Can a pure superposition and a classical mixture give identical outcomes in one measurement basis?** Yes. Change basis to reveal interference.
4. **Does multiplying a pure state by $e^{i\varphi}$ create a new physical state?** No. That is a global phase.
5. **Must a two-qubit state be the product of two one-qubit states?** No. The Bell state is entangled.
6. **Does a zero energy gradient mean a minimum?** No. $E(\theta)=\cos\theta$ has a maximum at $\theta=0$ and minimum at $\theta=\pi$.
7. **Is imaginary-time evolution identical to ordinary quantum time evolution?** No. Ordinary closed-system evolution is unitary; imaginary-time evolution acts as an energy-filtering construction.

## 13. How far this chapter goes

This is an **introductory mathematical framework**, not a full quantum-mechanics text. Important next topics include Schrödinger wavefunctions in $L^2(\mathbb R^n)$, unbounded self-adjoint operators and domains, canonical position/momentum commutation, continuous spectra, spin and angular momentum coupling, open systems and quantum channels, decoherence, Bell inequalities, and the physical approximations behind actual experiments.

A more mathematical route continues through [Functional Analysis](./functional-analysis), [Differential Geometry](./differential-geometry), and [Information Geometry](./information-geometry). A more algorithmic route continues through [Optimization](./optimization) and [Differential Equations](./differential-equations). For a geometric comparison of what states and maps preserve, use the [Atlas of Mathematical Spaces](./atlas-of-mathematical-spaces).

**The recurring lesson:** Every theorem and algorithm depends on the structure of its state space. First identify the states, operations, probabilities, and metric. Then ask what optimization or dynamics can guarantee under that structure.
