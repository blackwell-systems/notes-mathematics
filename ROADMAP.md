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
- [ ] **Bayesian updating** — `bayesian-inference`. Beta-Binomial prior × likelihood →
  posterior with a data slider (live version of the static `bayesian-updating.png`).
- [ ] **CLT sampler** — `probability` / `statistics`. Sample from a skewed distribution,
  watch the sample-mean distribution converge to normal.

Classic "slider → convergence" widgets (same shape as the shipped Fourier decomposer):

- [ ] **Taylor-series approximation** — `calculus` / `sequences-and-series`. Term-count
  slider; partial sums approaching $\sin x$, $e^x$, $\ln(1+x)$.
- [ ] **Riemann sums → integral** — `calculus`. Rectangle-count slider with
  left/right/midpoint/trapezoid toggle.
- [ ] **Newton's method** — `polynomial-functions`. Click a start point; watch iterates,
  convergence, and divergence/basin behavior.

Solid additions:

- [ ] **Vector playground** — `vector`. Drag two vectors: dot product, projection, angle,
  cross-product magnitude as area.
- [ ] **Conic eccentricity morph** — `conic-sections`. One slider: circle → ellipse →
  parabola → hyperbola.
- [ ] **KL-divergence asymmetry** — `information-theory`. Drag two distributions; show
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
