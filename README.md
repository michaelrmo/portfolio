# Michael Moroz

A personal portfolio built with SvelteKit and TypeScript. Every page is rendered to static HTML at build time; it requires no server, database, third-party font requests or client-side JavaScript.

## Development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Validation and build

```sh
npm run check
npm run build
npm run preview
```

The deployable site is written to `dist/`. Serve this directory with any static web host.

## Design options

- `/`: the experimental design, with oversized typography, tilted project sheets, scroll reveals and an interactive network illustration.
- `/colour/`: the chosen colour design, with smooth section scrolling and no skills section.
- `/experimental/`: an experimental design with oversized typography, tilted project sheets, scroll reveals and an interactive network illustration.
- `/sidebar/`: the previous design with a sticky introduction and native expandable experience entries.
- `/simple/`: the original single-column design, saved for comparison. This route is excluded from search indexing.

All designs use the same content in `src/lib/content.ts` and work without client-side JavaScript. Comparison routes are excluded from search indexing. The current designs omit the skills section. Section links use native smooth scrolling, and motion respects the visitor's reduced-motion preference.

The options are also preserved on separate Git branches:

- `design/simple`: original single-column design.
- `design/sidebar`: previous sidebar design.
- `main` and `design/colour`: the chosen colour design, with the other designs available as comparison routes.
- `design/experimental`: the experimental design at `/`, with the chosen colour design at `/colour/`.

Fraunces and Public Sans are hosted locally in `static/fonts/`; their SIL Open Font Licences are included alongside them. Older design routes retain their original typography.

## Editing

- `src/lib/content.ts`: biography, projects, experience, education and skills.
- `src/routes/+page.svelte`: layout, metadata and styling.
- `src/routes/simple/+page.svelte`: saved original layout.
- `src/routes/sidebar/+page.svelte`: saved sidebar layout.
- `src/lib/ExperimentalPortfolio.svelte`: experimental layout and styling.
- `src/lib/NetworkPlayground.svelte`: native radio controls and animated SVG network.
- `src/lib/ProjectGlyph.svelte`: small SVG icons for the three project types.
- `static/michael-moroz-cv.pdf`: downloadable CV.
- `docs/cv.tex`: the supplied CV source, with the missing end of the Experience list corrected.
- `docs/cv-print.html`: accessible, print-ready version of the CV used to generate the included PDF.

The website uses the CV as its main content source. Panenka is identified as a collaborative project in progress. No job title or dates were inferred for the incomplete Morgan Stanley entry on LinkedIn.

To regenerate the PDF, open `docs/cv-print.html` in a browser and print to PDF with background graphics enabled and browser headers and footers disabled. A headless Chrome command is:

```sh
google-chrome --headless --no-pdf-header-footer --print-to-pdf=static/michael-moroz-cv.pdf "file://$(pwd)/docs/cv-print.html"
```

No analytics, tracking, contact form, external runtime services or generated imagery are included.
