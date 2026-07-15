# CLAUDE.md — notes-mathematics

A foundations-first mathematics reference published as a [Quartz](https://quartz.jzhao.xyz/)
site, built toward singular learning theory (SLT) for ML interpretability research.
Deploys to GitHub Pages on every push to `main`.

## Layout

- `quartz/content/*.md` — one Markdown file per topic (the actual notes). `index.md`
  is the landing page + reading-order guide; keep its **topic count** in sync when
  adding or removing pages.
- `quartz/content/media/` — images (mostly matplotlib diagrams).
- `quartz/quartz/static/interactive/*.html` — self-contained interactive widgets,
  embedded in pages via `<iframe src="/static/interactive/NAME.html" ...>`.
- `quartz/scripts/check-quality.mjs`, `quartz/scripts/check-arithmetic.mjs` — CI gates.
- `.github/workflows/deploy.yml` — build + gates + Pages deploy (Node 22, working-dir `quartz`).

## Environment (important)

Node/npm/python are behind a disabled nvm shim in this shell. Always use absolute paths:

- `/opt/homebrew/bin/node`, `/opt/homebrew/bin/npx`, `/opt/homebrew/bin/python3`

## Build & verify (run from `quartz/`)

```
/opt/homebrew/bin/npx quartz build          # emits ./public
/opt/homebrew/bin/node scripts/check-quality.mjs      # after a build
/opt/homebrew/bin/node scripts/check-arithmetic.mjs   # anytime
```

The **quality gate** (fatal → blocks deploy): KaTeX render errors (`class="katex-error"`
in emitted HTML), broken internal links / `#anchors`, broken image refs, and **empty alt
text** (`![](...)`) which is now ratcheted to 0. Orphaned media is a warning.

The **arithmetic harness** re-proves every worked example from scratch. When you add or
change a numeric worked example in the notes, add/adjust an assertion in
`check-arithmetic.mjs` so the example stays machine-verified.

## Content conventions (non-negotiable)

- **Foundations-first:** define basic terms and motivate a concept before any formula.
- **Pronounce every symbol** at first use (how to read it aloud, e.g. `$\hat\lambda$` →
  "lambda-hat"), not just its meaning.
- **Textbook-level coverage:** cover what a textbook would, minus problem sets; include
  worked examples, especially for edge cases.
- **Every image needs descriptive alt text** — `![real description](./media/x.png)`.
  Empty alt fails the build.
- **No em dashes** in prose/comments. Use colons, commas, semicolons, parentheses.
- New pages that sit on a learning path get a prerequisites/enables frontmatter pair plus
  a `> [!abstract] Prerequisites & where this leads` callout box (feeds the graph view).
  The 18 SLT-path pages already have these; `[Path to SLT](./path-to-slt)` +
  `singular-learning-theory.md` are the guided sequence and capstone.

## Gotchas that have bitten us

- **Currency inside inline math** breaks KaTeX: a `$` before a number inside `$...$` is read
  as a closing delimiter. Keep currency OUT of math — write math as `$...=520$` and currency
  as escaped `\$520` in prose. (`$$...$$` display math and `\$` in prose are fine.)
- **matplotlib mathtext** rejects `\tfrac`, `\sqrt3`, `\frac12`. Use `\frac{1}{2}`, `\sqrt{3}`,
  `\frac{...}{...}`. (KaTeX itself is fine with `\tfrac`.)
- Quartz rewrites iframe `src` to a relative, extension-stripped form
  (`/static/interactive/x.html` → `./static/interactive/x`). That is expected; the widget
  files still live under `quartz/quartz/static/interactive/`.
- Interactive widgets should be **self-contained vanilla JS + `<canvas>`, no CDN/deps**,
  light theme, ~760px content width.

## Workflow

- The user deploys from `main` and has standing authorization to **commit and push directly
  to `main`** for this notes repo. CI re-runs the same gates on push.
- Large multi-file work (many diagrams, per-page edits, widget builds) parallelizes well
  across subagents — give each a disjoint set of files to avoid edit races.
