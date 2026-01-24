# Mathematics Notes

Comprehensive mathematics reference covering topics from propositional logic through advanced calculus and geometry.

## Contents

- **Propositional Logic** - Truth tables, logical connectives, tautologies
- **Set Theory** - Sets, relations, functions, cardinality
- **Number Theory** - Prime factorization, rational roots theorem
- **Functions** - Linear, polynomial, rational, exponential, logarithmic
- **Matrices & Systems** - Linear equations, matrix operations
- **Geometry & Trigonometry** - Triangles, circles, unit circle, trig identities
- **Vectors** - Vector operations, magnitude, direction
- **Combinatorics** - Permutations and combinations

## File Structure

```
notes-mathematics/
├── Mathematics.md          # Main reference document
├── media/                  # Images and diagrams (183 files)
│   ├── image1.png
│   ├── image2.png
│   └── ...
└── README.md              # This file
```

## Source

This document was originally converted from a Microsoft Word document (`Mathematics.docx`) using pandoc. Image dimension attributes have been removed to allow natural/responsive rendering in markdown viewers.

## Adding New Images

When adding images to `Mathematics.md`:

### Recommended Approach

Save images directly to the `media/` directory:

```bash
# Name sequentially
media/image184.png
media/image185.png
```

Reference in markdown without dimension attributes:

```markdown
![Description of image](./media/image184.png)
```

### Using Markdown Editors

Use editors with paste support:
- **Obsidian** - Paste from clipboard, auto-saves to media folder
- **Typora** - Direct image paste with auto-linking
- **VS Code** - With markdown extensions

### Avoid

- Do not add dimension attributes like `{width="..." height="..."}`
- Avoid re-converting through Word/pandoc when possible

### If Converting from Word

If you must use pandoc:

```bash
pandoc document.docx -t markdown -o output.md --extract-media=.

# Strip dimension attributes immediately
perl -0777 -i -pe 's/\{width="[^}]*"\}//gs' output.md
```

## Usage

View with any markdown renderer:
- GitHub
- Obsidian
- VS Code
- Typora
- Markdown Preview Enhanced

Images will render at natural sizes without fixed dimensions.

## License

This work is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).

You are free to share and adapt this material for any purpose, provided you give appropriate credit and distribute contributions under the same license.
