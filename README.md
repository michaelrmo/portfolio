# Michael Moroz

A personal portfolio built with SvelteKit and TypeScript. The entire page is rendered to static HTML at build time; it requires no server, database, external fonts or client-side JavaScript.

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

The deployable site is written to `dist/`. Serve this directory with any static web host. `.openai/hosting.json` configures the private Sites preview and can be omitted when using a different host.

## Editing

- `src/lib/content.ts`: biography, projects, experience, education and skills.
- `src/routes/+page.svelte`: layout, metadata and styling.
- `static/michael-moroz-cv.pdf`: downloadable CV.
- `docs/cv.tex`: the supplied CV source, with the missing end of the Experience list corrected.
- `docs/cv-print.html`: accessible, print-ready version of the CV used to generate the included PDF.

The website uses the CV as its main content source. Panenka is identified as a collaborative project in progress. No job title or dates were inferred for the incomplete Morgan Stanley entry on LinkedIn.

To regenerate the PDF, open `docs/cv-print.html` in a browser and print to PDF with background graphics enabled and browser headers and footers disabled. A headless Chrome command is:

```sh
google-chrome --headless --no-pdf-header-footer --print-to-pdf=static/michael-moroz-cv.pdf "file://$(pwd)/docs/cv-print.html"
```

No analytics, tracking, contact form, external runtime services or generated imagery are included.
