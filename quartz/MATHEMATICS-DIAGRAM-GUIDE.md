# Proof-oriented mathematics diagrams

This collection contains **92 original, source-editable SVG figures** placed directly beside the claims they explain across **31 proof-oriented chapters and reading maps**.

Figures are **not general decoration**. Their meaning is in the adjacent mathematical statement, and their caption/alt text independently identifies the concept. The source uses the same dark-navy, muted-teal, violet, ochre and blue editorial palette as the rest of the mathematics site. Diagram colors are redundant with textual labels.

## Catalog

| Chapter | Figures | What they show |
| --- | ---: | --- |
| [Mathematical Notations](./content/mathematical-notations.md) | 2 | anatomy of a quantified statement; why quantifier order changes meaning |
| [Atlas of Mathematical Spaces](./content/atlas-of-mathematical-spaces.md) | 13 | independent structure branches; Banach/inner-product/Hilbert; three taxonomy questions; affine versus projective constructions; metric versus uniformity; norm geometry and function spaces; measures, manifolds, morphisms, forgetful functors and the free-vector universal property |
| [Functional Analysis](./content/functional-analysis.md) | 1 | vanishing integral error versus persistent maximum error |
| [Complex Analysis](./content/complex-analysis.md) | 1 | contour winding around a pole and its effect on integrals |
| [Commutative Algebra](./content/commutative-algebra.md) | 1 | selecting denominators allowed in a local ring |
| [Information Geometry](./content/information-geometry.md) | 1 | quadratic versus isolated quartic minima and Fisher degeneracy |
| [Path Through Topology](./content/path-to-topology.md) | 1 | subspace interval, identification of endpoints and quotient-circle homeomorphism |
| [Structural Induction](./content/structural-induction.md) | 1 | constructors of full binary trees and leaf/internal-node counting |
| [State Machines and Invariants](./content/state-machines-invariants.md) | 1 | safe-state invariants and transition closure |
| [Generating Functions](./content/generating-functions.md) | 1 | coefficient convolution from degree-splitting pairs |
| [Advanced Graph Theory](./content/advanced-graph-theory.md) | 1 | Hall's deficient-neighborhood matching obstruction |
| [Order Theory](./content/order-theory.md) | 2 | preorder quotient and a non-lattice bow-tie counterexample |
| [Propositional Logic](./content/propositional-logic-zeroth-order-logic.md) | 1 | conditional implication, converse, inverse and contrapositive, with exactly two equivalence pairs |
| [Peano Arithmetic](./content/peano-arithmetic.md) | 3 | successor chain; proof by induction; recursive addition |
| [Construction of the Integers](./content/construction-of-the-integers.md) | 3 | equivalence classes of pairs; signs from representatives; descending Euclidean remainders |
| [Construction of the Rationals](./content/construction-of-the-rationals.md) | 3 | equivalent fractions; fraction operations; rational bounds for square root of two |
| [Construction of the Reals](./content/construction-of-the-reals.md) | 3 | rational Cauchy approximations; Dedekind-cut boundary; nested rational brackets |
| [Construction of the Complex Numbers](./content/construction-of-the-complex-numbers.md) | 3 | complex-plane conjugation; multiplication by i as rotation; polynomial root extension |
| [Group Theory Foundations](./content/group-theory-foundations.md) | 4 | group axioms; Cayley table; generator powers; Lagrange coset partition |
| [Homomorphisms and Quotient Groups](./content/group-homomorphisms-quotients.md) | 3 | fibers; first-isomorphism factorization; subgroup correspondence |
| [Group Actions and Symmetry](./content/group-actions-symmetry.md) | 3 | orbit-stabilizer; dihedral rotations/reflections; Burnside fixed-coloring bar chart |
| [Ring Theory Foundations](./content/ring-theory-foundations.md) | 4 | ring axioms; algebraic hierarchy; units and zero divisors; polynomial coefficient convolution |
| [Ideals, Quotient Rings & Homomorphisms](./content/ring-ideals-quotients.md) | 4 | residue cosets; quotient-product well-definedness; prime/maximal ideal quotients; CRT residue mapping |
| [Field Theory Foundations](./content/field-theory-foundations.md) | 5 | extension tower; adjoining a root; prime-power sizes; cyclic nonzero group; multiplication table of F4 |

| [Category Theory Foundations](./content/category-theory-foundations.md) | 2 | composition and opposite categories |
| [Functors and Natural Transformations](./content/category-functors-naturality.md) | 3 | functor action, naturality square, Yoneda identity evaluation |
| [Limits and Colimits](./content/category-limits-colimits.md) | 3 | universal products, pullbacks and pushouts |
| [Adjunctions and Monads](./content/category-adjunctions-monads.md) | 2 | free monoid universal arrow and list-monad flattening |
| [General Topology Foundations](./content/general-topology-foundations.md) | 4 | alternate topologies, two forms of basis refinement, continuity through inverse images |
| [Topological Constructions](./content/general-topology-constructions.md) | 5 | relative openness of a subspace, product rectangles and projection continuity, quotient circle and seam preimages |
| [Compactness and Connectedness](./content/general-topology-compactness.md) | 8 | corrected subcover diagrams, noncompactness, compact–Hausdorff proof, connectedness and finite-intersection duality |


The diagram file families are named with `pa-`, `zi-`, `qr-`, `re-`, `cx-`, `gr-`, `rg-`, `ri-`, `ft-`, `ct-`, `tp-`, `mn-`, `pl-`, `fa-`, `ca-`, `co-`, `ig-` and other topic prefixes; every image is linked from its teaching chapter.

## Formal truth behind the pictures

- Every **Cayley table** uses explicitly identified elements and the specified group/field operation. A table cannot prove a theorem about *all* groups or fields.
- The **field tower** is $\mathbb Q\subseteq\mathbb Q(\sqrt2)\subseteq\mathbb Q(\sqrt2,i)$, where the two extension degrees are both $2$. The diagram is backed by a worked irreducibility/degree argument in the chapter.
- The **Burnside** bar chart counts fixed two-colorings of four square corners under **rotations only**: $16,2,4,2$; the average is $6$ orbits. Including reflections would change the group and the count.
- The **four-element field** uses $\mathbb F_2[\alpha]$ with $\alpha^2+\alpha+1=0$. Multiplication is not ordinary integer multiplication modulo $4$.
- The **quotient well-definedness** diagram highlights $(a+i)(b+j)-ab=aj+ib+ij$; two-sided ideal absorption, not mere additive subgroup closure, makes all three terms vanish in the quotient.
- The **Dedekind cut** and Cauchy illustrations are about representations of real limits and do not substitute for the completeness proof.

## Quality and accessibility

Run this from `quartz/`:

~~~bash
npm run figures:check
npm run editorial:check
node scripts/check-arithmetic.mjs
~~~

`figures:check` verifies that all **92 images** exist, are embedded exactly once in the intended chapter, have human-authored meaningful alternative text and nearby captions, and expose an SVG `<title>`, `<desc>`, and `viewBox`. It also checks that every chapter is present in the coverage manifest.

The GitHub Pages workflow runs this structural gate before building the site. The arithmetic harness independently rechecks selected finite operations (e.g., modular units, quotient representative independence, CRT, F4 and F9 arithmetic). **These checks do not independently certify the mathematical proofs**, verify SVG appearance in browsers, or guarantee adequate visual/contrast behavior on every device.

**Still to review:** mobile widths including 320/390 px, dark/light-theme contrast on neighboring page surfaces, keyboard navigation through the image lightbox, localized figure overflow, and browser screenshots. The diagram review status stays **pending** until those checks actually happen. All SVGs are text-and-shape based, so they remain resolution-independent and editable without fonts being embedded or shipped.
