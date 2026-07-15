# Roadmap

Planned and completed work for the notes site. Interactive components follow the
self-contained vanilla-JS + `<canvas>` iframe pattern (see `CLAUDE.md`); static
figures are matplotlib PNGs in `quartz/content/media/`.

## Planned: graph & interactive-component expansions

Ranked by leverage. Each names its target page(s) and the pedagogical payoff.

### Interactive widgets

Highest value — the SLT throughline is the site's purpose but has no interactives yet:

- [ ] **RLCT / free-energy explorer** — `singular-learning-theory`, `algebraic-geometry`.
  Slider over $k$ in $K(w)=w^{2k}$ (and the two-parameter monomial); show how
  $\lambda=\tfrac{1}{2k}$ changes posterior concentration and the $\lambda\log n$ slope of
  $F_n$ vs $n$. Makes "effective dimension" tangible.
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
