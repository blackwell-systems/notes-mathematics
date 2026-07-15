# Mathematics Notes

A comprehensive mathematics reference covering logic and set theory through
real analysis, measure theory, and algebraic geometry, built toward the
foundations of machine learning research (up to singular learning theory).

The notes are published as a [Quartz](https://quartz.jzhao.xyz/) site and
deployed to GitHub Pages on every push to `main`.

## Content

All content lives in [`quartz/content/`](./quartz/content/) as one Markdown file
per topic (50 topic pages). The landing page and reading-order guide are in
[`quartz/content/index.md`](./quartz/content/index.md).

Broad areas covered:

- **Logic & Proofs** — propositional and predicate logic, inference, proof techniques
- **Set Theory** — operations, relations, cardinality, countability
- **Algebra** — number theory, functions, polynomial/rational/exponential/log/radical functions, complex numbers, sequences and series, conic sections
- **Linear Algebra** — vector spaces, four fundamental subspaces, eigenvalues, SVD, factorizations, matrix calculus
- **Geometry & Trigonometry** — trig functions, identities, unit circle, coordinate geometry
- **Calculus** — limits, derivatives, integrals, multivariable calculus, differential equations
- **Probability & Statistics** — combinatorics, distributions, estimation, hypothesis testing, regression, Bayesian inference
- **Optimization & Information Theory** — convexity, gradient descent variants, entropy, KL divergence
- **Discrete Math** — asymptotic notation, graph theory
- **Advanced** — real analysis, measure theory, algebraic geometry (with the connection to singular learning theory)

## Interactive widgets & quality gates

Most pages embed self-contained interactive widgets (vanilla JS + `<canvas>`, no
external dependencies) that live in
[`quartz/quartz/static/interactive/`](./quartz/quartz/static/interactive/): things
like a Gaussian-elimination stepper, an eccentricity morph for conic sections, a
BFS/DFS graph explorer, and growth-rate comparisons. Each widget sizes its own
frame to its content, so nothing needs a scrollbar.

Every push runs two CI gates before deploy:

- **Quality gate** (`quartz/scripts/check-quality.mjs`) — fails on KaTeX render
  errors, broken internal links or `#anchors`, broken image references, and empty
  image alt text.
- **Arithmetic harness** (`quartz/scripts/check-arithmetic.mjs`) — re-proves every
  numeric worked example in the notes from scratch (currently 499 assertions).

## File Structure

```
notes-mathematics/
├── quartz/                  # Quartz static-site generator
│   ├── content/             # All notes (one Markdown file per topic)
│   │   ├── index.md         # Landing page + reading-order guide
│   │   ├── set-theory.md
│   │   ├── ...
│   │   └── media/           # Images and diagrams
│   ├── quartz/static/interactive/  # Self-contained interactive widgets
│   ├── scripts/             # CI gates (quality + arithmetic) and build injectors
│   └── quartz.config.default.yaml  # Site configuration
├── .github/workflows/       # GitHub Pages deploy workflow
└── README.md                # This file
```

## Local Development

```bash
cd quartz
npm ci
npx quartz plugin install
npx quartz build --serve   # preview locally
```

## Adding Content

Add or edit Markdown files in `quartz/content/`. Save images to
`quartz/content/media/` and reference them relatively:

```markdown
![Description of image](./media/my-diagram.png)
```

Avoid fixed dimension attributes like `{width="..." height="..."}` so images
render responsively.

## License

This work is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).

You are free to share and adapt this material for any purpose, provided you give
appropriate credit and distribute contributions under the same license.
