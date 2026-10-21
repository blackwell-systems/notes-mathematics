# Editorial keyword styling prototype

The **Truth** section of [Propositional Logic](./content/propositional-logic-zeroth-order-logic.md#truth) is the opt-in visual-language experiment for the site. It introduces an explanatory concept map, semantic emphasis for high-value terms, paired example cards, and deliberate heading hierarchy.

## The reusable pattern

1. **Lead with a relationship, not a glossary.** Present a conceptual diagram showing which distinctions are orthogonal. Use prose underneath to state examples and qualifications.
2. **Meaningful accent colors.** Use violet for modality (necessary/contingent), teal for meaning (analytic/synthetic), ochre for justification (a priori/a posteriori), and blue for logical form. A keyword must remain readable **without color**; its text always names the concept.
3. **Editorial hierarchy.** A small uppercase overline introduces the diagram, an expressive sentence-style headline explains the main insight, and quieter descriptive text supplies limitations. Prefer tracking and type scale over decorating every heading.
4. **Keyword annotation.** Use `<span class="truth-term truth-term--modal">necessary</span>` for a term carrying the modal accent, with analogous `--meaning`, `--knowledge`, and `--logic` modifiers. Inline highlighting should be sparse: first references, distinctions and important conceptual contrasts, not every occurrence.
5. **Paired worked examples.** Use `truth-examples`, `truth-example` and their child classes for a side-by-side comparison that reflows to one column on narrow screens. Every accent is also spelled out as a label.
6. **Accessibility and theme compatibility.** The diagram has a substantive alt description; the source is an SVG for crisp rendering, and the essential classification is also available in text. Cards use existing Quartz theme variables rather than forcing light-mode colors. Keyword accents use subtle backgrounds and underlines, not colored text alone.

## Files

- `content/propositional-logic-zeroth-order-logic.md`: prototype content, semantic classes, and accessible examples.
- `content/media/pl-truth-axes.svg`: editable conceptual diagram.
- `quartz/styles/custom.scss`: intentionally opt-in typography and component styles. Existing site typography remains unchanged.

## Criteria for a site-wide rollout

Review the prototype at desktop and phone widths, in light and dark themes, and with keyboard and screen-reader navigation. Check contrast, legibility of SVG labels on small screens, KaTeX rendering, and the existing quality gate. If adopted, rename the `truth-*` classes into generic design-system primitives and migrate pages selectively based on conceptual payoff. **Do not automatically color every bold word**: ordinary emphasis, technical definitions, warnings and mathematical assumptions have different roles.

This is a **visual and copywriting prototype**, not approval to apply colors across every page without review. The underlying truth-classification terminology itself is philosophically disputed in places; design must display those qualifications rather than imply a settled taxonomy.
