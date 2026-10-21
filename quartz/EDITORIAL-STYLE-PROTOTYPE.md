# Editorial design pilot: mathematics as a readable reference

The first rollout runs on **three deliberately different pages**, not the entire site:

| Page | What it tests |
| --- | --- |
| [Propositional Logic: Truth](./content/propositional-logic-zeroth-order-logic.md#truth) | conceptual distinctions, mobile and desktop diagrams, definitions, comparative examples |
| [Group Theory Foundations](./content/group-theory-foundations.md) | definitions, axioms, theorems, proof ideas, worked counterexamples |
| [Construction of the Reals](./content/construction-of-the-reals.md) | long technical proofs, math display, explicit circularity warnings, dependencies |

The pilot's changes are **opt-in** and should not recolor the rest of the site.

## Content is the organizing principle

Every visual emphasis must answer a question for the reader:

| Content role | Visual role | Accent |
| --- | --- | --- |
| **Definition** | clean label, concise statement, later prose provides derivation | muted teal |
| **Theorem** | identifiable claim, all hypotheses visible | muted violet |
| **Proof idea** | neutral presentation separating claim from reasoning | quiet blue |
| **Important distinction** | two easily confused things are different | ochre |
| **Worked example** | context, computation, conclusion clearly distinguished | quiet blue |
| **Key term in flowing prose** | small underline and faint fill, never color-only | role-specific |

Color is a **secondary channel** to textual labels. It should never be used to encode truth, validity, correctness, or proof status without an explicit label.

### Available Markdown notation

These are native Quartz callouts; content remains Markdown so math, internal links, and code continue to render in the normal pipeline.

~~~md
> [!definition] Group
> A **group** consists of a set, associative operation, identity and inverses.

> [!theorem] Lagrange's theorem
> For a **finite** group and a subgroup, the subgroup's order divides the group's order.

> [!proof] Why cancellation follows
> Use the inverse on the correct side and regroup using associativity.

> [!distinction] Necessary is not analytic
> **Necessary** concerns modal possibility; **analytic** concerns meaning.

> [!example] Order of an element
> The powers of 2 modulo 7 are 2, 4, 1, so the element has order 3.
~~~

The actual formal proof **must still appear** near a theorem; a labeled proof idea is not a certificate that a mathematical argument has been supplied.

### Scope and typographic scale

Each pilot page includes a tiny inert HTML marker:

~~~html
<div class="ed-opt-in" aria-hidden="true"></div>
~~~

In \`quartz/styles/custom.scss\`, the layout rules use \`article:has(.ed-opt-in)\` and only style this subset. Reusable callout styles depend on the native \`data-callout\` attribute and are scoped under the same selector. Inline \`ed-term\` annotations must be added intentionally in the source text.

The scale is intentionally editorial rather than decorative:

- **H2:** large, tightly tracked section titles and subtle dividers.
- **H3:** strong but smaller subsection titles with extra whitespace.
- **H4:** small independent subsection level, not another oversized headline.
- **Overline:** a small uppercase label announcing a role.
- **Body:** inherited Quartz reading font and color.
- **Math:** retain full normal font size and allow narrow-view horizontal scrolling for wide displays.

No new fonts or font downloads are introduced.

## Truth concept map: mobile treatment

The Truth section now supplies **two SVGs with the same content**:

- \`content/media/pl-truth-axes.svg\`: wide desktop view of three axes.
- \`content/media/pl-truth-axes-mobile.svg\`: portrait mobile view with larger, reflowed category labels.

The media query at **760 px** swaps entire paragraph/image pairs, not merely an image dimension. Each SVG has a descriptive alternative text. It is important that **both** textual explanations below the image convey the distinctions for nonvisual users. The two variants are both ordinary Markdown images, not scripts or browser-dependent data.

Semantic palettes used on this figure:

- **Violet**, modality: necessary / contingent.
- **Teal**, meaning: analytic / synthetic.
- **Ochre**, justification: a priori / a posteriori.
- **Blue**, logical form, which is *not* a fourth alternative pair.

The diagram is **not** a taxonomy claiming that philosophers agree these relationships are fixed. The page explicitly distinguishes accepted logical definitions from philosophically contested classifications.

## Before a site-wide rollout

Verify these six things on the pilot pages before moving the opt-in marker to additional topics:

1. **Light and dark theme:** contrast for terms, callout outlines, title labels, and normal links.
2. **320, 390, 768 and desktop widths:** no horizontal viewport overflow; SVG labels can be read without zooming.
3. **Accessibility:** every diagram has an accurate alt description; labels survive monochrome rendering; callouts are not distinguished by color alone.
4. **Math:** long displayed formulas remain readable; no KaTeX parsing errors; the actual theorems are not silently replaced by summaries.
5. **Reading pace:** the distinctive callouts should be rare enough that body text still carries the chapter. Do not turn every paragraph into a card.
6. **Proof-review ledger:** cosmetic changes and proof revisions should be differentiated. A successful CI build checks renderability and examples, **not** theorem correctness.

After user review, either generalize the \`ed-*\` classes into a design-system module or trim them back. **Do not** flip a global selector that styles every bold word, every heading or every callout until the pilot is evaluated.

## Files

- \`content/propositional-logic-zeroth-order-logic.md\`, \`content/group-theory-foundations.md\`, \`content/construction-of-the-reals.md\`: opted-in examples.
- \`content/media/pl-truth-axes.svg\` and \`content/media/pl-truth-axes-mobile.svg\`: desktop/phone diagrams.
- \`quartz/styles/custom.scss\`: intentionally scoped presentation rules.
- \`scripts/check-quality.mjs\`: existing KaTeX/link/media guard, with the project arithmetic harness.
