# Roadmap

Planned and completed work for the notes site. Interactive components follow the
self-contained vanilla-JS + `<canvas>` iframe pattern (see `CLAUDE.md`); static
figures are matplotlib PNGs in `quartz/content/media/`.

## Planned: graph & interactive-component expansions

Ranked by leverage. Each names its target page(s) and the pedagogical payoff.

### Interactive widgets

Highest value — the SLT throughline is the site's purpose but has no interactives yet:

- [x] **RLCT / free-energy explorer** — `singular-learning-theory`, `algebraic-geometry`.
  Slider over $k$ in $K(w)=w^{2k}$ (and the two-parameter monomial); shows how
  $\lambda=\tfrac{1}{2k}$ changes posterior concentration and the $\lambda\log n$ slope of
  $F_n$ vs $n$. Makes "effective dimension" tangible. (1D shows slope $=\lambda$ exactly;
  2D overlays the full Watanabe asymptote with the $-(m-1)\log\log n$ term.)
- [x] **Bayesian updating** — `bayesian-inference`. Beta-Binomial prior × likelihood →
  posterior with a data slider (live version of the static `bayesian-updating.png`).
- [x] **CLT sampler** — `probability` / `statistics`. Sample from a skewed distribution,
  watch the sample-mean distribution converge to normal.

Classic "slider → convergence" widgets (same shape as the shipped Fourier decomposer):

- [x] **Taylor-series approximation** — `calculus` / `sequences-and-series`. Term-count
  slider; partial sums approaching $\sin x$, $e^x$, $\ln(1+x)$.
- [x] **Riemann sums → integral** — `calculus`. Rectangle-count slider with
  left/right/midpoint/trapezoid toggle.
- [x] **Newton's method** — `polynomial-functions`. Click a start point; watch iterates,
  convergence, and divergence/basin behavior.

Solid additions:

- [x] **Vector playground** — `vector`. Drag two vectors: dot product, projection, angle,
  cross-product magnitude as area.
- [ ] **Conic eccentricity morph** — `conic-sections`. One slider: circle → ellipse →
  parabola → hyperbola.
- [x] **KL-divergence asymmetry** — `information-theory`. Drag two distributions; show
  $D_{KL}(P\Vert Q)\ne D_{KL}(Q\Vert P)$.

### Static diagrams

- [ ] Cone-slicing figure — `conic-sections`.
- [ ] Newton's-method tangent-iteration sketch — `polynomial-functions`.
- [ ] Taylor-polynomial overlays — `calculus`.
- [ ] Hypothesis-test rejection regions — `statistics`.
- [ ] MCMC trace — `bayesian-inference`.
- [ ] Resolution-of-singularities blowup diagram — `algebraic-geometry`.

**Suggested first batch:** the three SLT-serving widgets + the three convergence-slider
widgets (top six above), built as one parallel wave alongside a few of the static figures.

## Completed

- [x] **Measure Theory interactive pass** — the abstract SLT-feeder page had zero images and
  zero widgets, so added the two canonical measure-theory visualizations: a Riemann-vs-Lebesgue
  explorer (toggle domain-strip vs range-layer partitioning; both converge to the same integral;
  Dirichlet preset shows only Lebesgue gives 0) and a convergence-theorems explorer (slide n;
  the escaping spike keeps area 1 while the pointwise limit is 0, so the limit/integral swap
  fails, contrasted with MCT and DCT presets where it holds). +10 machine-checked assertions
  (layer-cake integral, escaping spike, Cantor-set measure 0, Markov, L^p norms, Fubini).
- [x] **Differential Equations pass** — added the missing prerequisites callout and two
  canonical DE widgets: a phase-portrait explorer for 2D linear systems x'=Ax (vector field +
  RK4 trajectories, eigenvector invariant lines, fixed-point classification saddle/node/spiral/
  center from the eigenvalues) and a damped-oscillator explorer (m x''+c x'+k x=0 with the exact
  closed-form solution per regime, discriminant/damping-ratio readout, decay envelope). +13
  machine-checked assertions (solution verification, characteristic roots, damping regimes and
  zeta, phase-plane classification, Euler's method -> e, and numeric Laplace transforms).
- [x] **Real Analysis interactive pass** — added an epsilon-N sequence-convergence explorer
  (shrink epsilon, the widget finds the smallest N with all later terms inside the L+/-epsilon
  band; handles oscillating sequences) and a uniform-vs-pointwise convergence explorer (slide n,
  watch the sup-norm distance shrink to 0 for x/n and sin(nx)/n but stay pinned at 1 for x^n and
  the moving bump). +13 machine-checked assertions (sequence limits + epsilon-N, sup/completeness,
  geometric/harmonic/ratio series, uniform-convergence sup-norms, MVT, squeeze, IVT).
- [x] **Optimization pass** — already the most interactive page (4 widgets) and complete, so
  a focused pass: added a convexity chord-test explorer (drag two points; chord above the
  graph = convex, dips below = not) for the big Convexity section, filled the one real content
  gap with a **Subgradients** subsection (subdifferential of |x| is [-1,1]; soft-thresholding /
  proximal operator for L1), and +12 machine-checked assertions (Jensen/chord test, GD
  convergence + divergence threshold, Newton-for-optimization one-step, soft-thresholding,
  scalar ridge solution, the |x| subgradient inequality, and momentum convergence).
- [x] **Multivariable Calculus interactive pass** — added a gradient/directional-derivative
  explorer (contour plot; drag a point to see ∇f perpendicular to the level curve, rotate a
  direction to see the directional derivative peak at |∇f|) and a Lagrange-multipliers
  visualizer (level curves + constraint curve; drag along the constraint to the tangency point
  where ∇f = λ∇g), and embedded the existing gradient-descent playground in the Gradient
  Descent section. +12 machine-checked assertions (partials, gradient/directional derivative,
  Clairaut mixed-partial symmetry, a double integral, a descent step, and two Lagrange optima).
- [x] **Probability interactive pass** — added three widgets to the (already scan-free,
  callout-bearing) page: a distribution explorer (discrete + continuous, PMF/PDF with live
  mean/variance/sd), a Bayes base-rate visualizer (natural-frequency grid demonstrating the
  base-rate fallacy), and a Law-of-Large-Numbers demo (running average converging to the mean
  with a 1/sqrt(n) band). +16 machine-checked assertions (binomial/Poisson/geometric/
  exponential/uniform means & variances + PMF normalization, the Bayes rare-disease posterior,
  Chebyshev bound, correlation, and an MGF-derivative check).
- [x] **Remaining planned-widget batch** — built the last of the ranked interactive
  candidates: Bayesian (Beta-Binomial) updating, KL-divergence asymmetry, Taylor-series
  approximation (with interval-of-convergence failure), Newton's method (with a cycling
  cautionary case), and a 2D vector playground. Every "Interactive widgets" checkbox above is
  now done except the conic eccentricity morph. +18 machine-checked assertions (posterior
  mean, KL asymmetry + cross-entropy decomposition, Taylor partial sums, Newton convergence
  and cycling, vector projection/cross).
- [x] **Geometry & Trigonometry interactive pass** — added a prerequisites callout and two
  widgets (triangle solver handling SSS/SAS/ASA/AAS and the ambiguous SSA 0/1/2-triangle case
  via law of sines/cosines with an area readout; a sinusoid explorer with A/B/C/D sliders
  showing amplitude/period/phase-shift/midline live). +22 machine-checked assertions
  (Pythagorean identity, special angles, law of sines/cosines, Heron, double-angle/sum
  formulas, inverse trig, arc length/sector, sinusoid params, SSA ambiguity).
- [x] **Calculus / Linear Algebra / Statistics interactive pass** — added 5 widgets to the
  three flagship advanced pages (which had 0 / 2 / 1): calculus Riemann-sum explorer and
  tangent/secant derivative explorer; a 2D linear-transformation visualizer (grid/unit-square
  image, determinant as area factor, eigenvector directions); a CLT sampler (non-normal
  source -> normal sampling distribution of the mean); and a least-squares regression explorer
  (drag points -> live line, residuals, r, R^2). +22 machine-checked assertions (derivatives,
  integrals, FTC, standard limits, determinants/eigenvalues/eigenvectors, OLS slope/r/R^2, CLT SE).

- [x] **CI quality gate** (`scripts/check-quality.mjs`, wired into `deploy.yml`) — fatal on
  KaTeX errors, broken links/anchors, broken images, and empty alt text (ratcheted 58 → 0).
- [x] **Arithmetic harness** (`scripts/check-arithmetic.mjs`) — re-proves every worked
  example on each run (69 assertions); blocks deploy on mismatch.
- [x] **Interactivity (first wave)** — six widgets: ε-δ explorer, unit-circle explorer,
  gradient-descent playground, complex-multiplication rotation, bias-variance explorer,
  Fourier decomposer, plus the parametric/polar plotter.
- [x] **SLT throughline** — `singular-learning-theory` capstone + `path-to-slt` guided
  sequence; prerequisites/enables frontmatter + callout box on all 18 path pages
  (feeds the graph view).
- [x] **Accessibility** — descriptive alt text on all previously empty-alt images;
  empty alt now a hard build failure.
- [x] **Curriculum gaps filled** — `order-of-operations` (Foundations) and
  `parametric-and-polar` (precalc) pages with diagrams and machine-checked examples.
- [x] **Site is scan-free** — converted the last 7 scanned diagrams (complex-numbers x4:
  real/imag parts, number hierarchy, complex plane, polar form; prime-factorization x1:
  factor trees; vector x2: directed segment, position vector) to clean matplotlib, added
  prerequisites callouts to all three pages, and +20 machine-checked assertions (complex
  modulus/polar/De Moivre, GCD*LCM and unique factorization, vector magnitude/dot/cross).
  No `imageNN.png` scan remains anywhere on the site.
- [x] **Polynomial Functions pass** — replaced all 16 scans (the most of any page): 9 graph
  scans to 6 clean matplotlib diagrams (parabola, axis of symmetry, cubic, quartic turning
  points, a 4-panel end-behavior figure, multiplicity touch-vs-cross); 7 text/table scans to
  native markdown, fixing mislabeled placements (a discriminant-table scan under the Quadratic
  Formula heading -> the actual quadratic formula + a summary table; rational-root candidates
  under the FTA heading). Added a prerequisites callout. Two widgets (quadratic explorer with
  live discriminant/vertex/roots; polynomial grapher from factored roots with end behavior /
  touch-vs-cross / turning points). +17 machine-checked assertions (discriminant, long-division
  identity, factor/rational-root theorems, Vieta, Descartes, multiplicity, Newton's method).
- [x] **Rational Functions pass** — replaced all 7 Desmos screenshot scans (6 with clean
  matplotlib graphs drawn with proper pen-lifting at asymptotes; 1 worked-solution scan to
  native math, fixing a misplaced domain example under the y-intercept heading). Added the
  missing "Solving Rational Equations" (with extraneous-solution checks) and "Solving
  Rational Inequalities" (sign-chart method) sections, plus a prerequisites callout. New
  rational-function grapher widget (factored input → exact VAs / HA-slant-polynomial
  asymptote / holes / intercepts). +16 machine-checked assertions.
- [x] **Functions & Relations pass** — converted all 6 scans (2 to clean matplotlib: a
  relation digraph+matrix and a 4-panel inj/surj/bij mapping figure; 4 text-scans to native
  markdown). Filled a real gap: the surjection definition existed *only* as a scanned image,
  now a proper section. Added the formal 3-condition function definition, image/preimage
  set-algebra (with the strict-inclusion example), the kernel/fibers bridge to equivalence
  relations, well-defined functions on quotients, and a relation-properties summary table.
  Two widgets (relation-properties checker, finite-function explorer); +12 machine-checked
  assertions. (Hasse diagrams left as-is — Mermaid renders them client-side via CDN.)
- [x] **Set Theory pass** — converted all 13 scanned images (6 to clean matplotlib Venn/
  Euler/universal-set diagrams, 7 to native markdown text/tables); added the ZFC axioms,
  an Ordinals & Well-Ordering section (von Neumann ordinals, ω, well-ordering theorem =
  AoC), cardinal arithmetic + the Continuum Hypothesis, and a Boolean-algebra-of-sets
  summary table. Two widgets (set-operation Venn explorer, interactive Cantor diagonal),
  plus Cantor-diagonal and infinity-hierarchy diagrams; +9 machine-checked assertions.
- [x] **Number Systems deepening** — added a rigorous "How the Systems Are Actually
  Constructed" section (Peano axioms + von Neumann encoding, Z & Q as pair quotients, R via
  Dedekind cuts / Cauchy sequences, C as ordered pairs / R[x]/(x²+1)), deepened cardinality
  (𝔠 = 2^ℵ₀, |ℂ|=|ℝ|, continuum hypothesis), 2 diagrams (Q⊂algebraic⊂R classification, ℚ-gaps
  number line), the decimal↔fraction converter widget, and +15 machine-checked assertions.
- [x] **Hypercomplex Numbers & Beyond page** — expanded the one-paragraph "Beyond the
  Complex Numbers" note into a full page: the Cayley-Dickson construction, quaternions
  (lose commutativity), octonions (lose associativity), sedenions (lose division), Hurwitz
  and Frobenius theorems, and sideways extensions (dual numbers → autodiff, split-complex,
  p-adics, hyperreals/surreals). 3 diagrams + 13 machine-checked assertions (ij=k, octonion
  non-associativity witness, sedenion zero divisor, dual-number autodiff).
- [x] **Image lightbox (click-to-zoom)** — content diagrams open full-size in a modal
  overlay on click (Esc/click to close). Implemented as a portable post-build injector
  (`scripts/inject-lightbox.mjs`, wired into CI) rather than a Quartz plugin, since the
  plugin lockfile pins non-portable absolute paths.
- [x] **Predicate logic expansion to parity** — added quantifier inference rules (UI/UG/EI/EG
  with eigenvariable side-conditions), proof techniques, equality/identity with axioms (∃!
  defined via `=`), Tarskian satisfaction + validity/entailment, ε-δ and other math
  formalizations, prenex normal form + Skolemization, and metatheory (Gödel completeness,
  compactness, Löwenheim-Skolem, FOL undecidability, first- vs higher-order). Added the
  **finite-model explorer** widget, 3 clean diagrams, prerequisites callout, and 15 harness
  assertions. Page grew 364 → 544 lines.
- [x] **Propositional logic overhaul** — converted 17 scanned truth-table/Venn images to
  native Markdown tables + clean matplotlib Venn diagrams (fixing a shading error where
  "equivalence" was drawn as XOR); added a **Functional Completeness** section (16 binary
  connectives, adequate sets, NAND/NOR universality, duality, Boolean-algebra bridge); and
  added the **truth-table generator** widget. +5 harness assertions.
