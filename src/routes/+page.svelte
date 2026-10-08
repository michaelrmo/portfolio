<script lang="ts">
  import { education, experience, profile, projects, skills } from '$lib/content';
  import ProjectGlyph from '$lib/ProjectGlyph.svelte';

  const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];
  const projectStyles = [
    { theme: 'green', category: 'Multiplayer & learning', glyph: 'network' },
    { theme: 'blue', category: 'Simulation & data', glyph: 'chart' },
    { theme: 'orange', category: 'Full-stack web', glyph: 'code' }
  ] as const;
</script>

<svelte:head>
  <title>Michael Moroz | Computer Science & Mathematics</title>
  <meta name="description" content="Michael Moroz, Computer Science and Mathematics student at the University of Edinburgh. Projects in multiplayer networking, reinforcement learning and web development." />
  <meta property="og:title" content="Michael Moroz" />
  <meta property="og:description" content="Computer Science and Mathematics at the University of Edinburgh. Projects, experience and CV." />
  <meta property="og:type" content="website" />
  <link rel="preload" href="/fonts/public-sans-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="preload" href="/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<div class="page">
  <header>
    <div class="masthead">
      <span class="identity"><span class="monogram" aria-hidden="true">mm.</span> Edinburgh, UK</span>
      <nav class="profile-links" aria-label="Contact and profiles">
        <a href={'mailto:' + profile.email}>Email</a>
        <a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
        <a href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
      </nav>
    </div>

    <div class="introduction">
      <div class="name-block">
        <p class="discipline">Computer Science & Mathematics</p>
        <h1>{profile.name}</h1>
      </div>
      <p class="bio">{profile.introduction}</p>
    </div>

    <div class="navigation-row">
      <nav class="section-links" aria-label="On this page">
        {#each sections as section}
          <a href={'#' + section.id}>{section.label}</a>
        {/each}
      </nav>
      <a class="cv-link" href="/michael-moroz-cv.pdf" download="Michael-Moroz-CV.pdf">Download CV <span class="file-type">PDF</span><span aria-hidden="true">↓</span></a>
    </div>
  </header>

  <main id="content" tabindex="-1">
    <section id="projects" aria-labelledby="projects-heading" class="projects-section">
      <div class="section-heading">
        <h2 id="projects-heading">Selected projects</h2>
        <span class="section-note">Code, simulations & experiments</span>
      </div>

      <div class="projects">
        {#each projects as project, index}
          {@const style = projectStyles[index] ?? projectStyles[2]}
          <article class="project {style.theme}">
            <div class="project-cover">
              <div class="project-label"><ProjectGlyph kind={style.glyph} /><span>{style.category}</span></div>
              <h3><a href={project.href}>{project.name}</a></h3>
              {#if project.note}<p class="project-status">{project.note}</p>{/if}
            </div>
            <div class="project-description">
              <p>{project.description}</p>
              <p>{project.contribution}</p>
              <div class="project-bottom">
                <p class="stack">{project.stack}</p>
                <a href={project.href} aria-label={'View ' + project.name + ' source on GitHub'}>Source <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section id="experience" class="information-section" aria-labelledby="experience-heading">
      <div class="section-heading"><h2 id="experience-heading">Experience</h2></div>
      <div class="entries">
        {#each experience as item, index}
          <details open={index === 0}>
            <summary>
              <span class="summary-text"><span class="entry-title">{item.role}</span><span class="organisation">{item.organisation}</span></span>
              <span class="disclosure" aria-hidden="true"></span>
            </summary>
            <p class="entry-description">{item.description}</p>
          </details>
        {/each}
      </div>
    </section>

    <section id="education" class="information-section" aria-labelledby="education-heading">
      <div class="section-heading"><h2 id="education-heading">Education</h2></div>
      <div class="entries education-entries">
        {#each education as item}
          <article>
            <div class="entry-heading"><h3>{item.institution}</h3><span class="entry-meta">{item.period}</span></div>
            <p class="qualification">{item.qualification}</p>
            <p class="entry-description">{item.detail}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="skills" class="information-section skills-section" aria-labelledby="skills-heading">
      <div class="section-heading"><h2 id="skills-heading">Technical skills</h2></div>
      <dl>
        {#each skills as skill}
          <div><dt>{skill.label}</dt><dd>{skill.items}</dd></div>
        {/each}
      </dl>
    </section>
  </main>

  <footer>
    <a class="footer-name" href="#top" aria-label="Back to the top">Michael Moroz <span aria-hidden="true">↑</span></a>
    <a href={'mailto:' + profile.email}>{profile.email}</a>
  </footer>
</div>

<style>
  @font-face { font-family: 'Public Sans'; font-style: normal; font-weight: 400 700; font-display: swap; src: url('/fonts/public-sans-latin.woff2') format('woff2'); }
  @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 400 500; font-display: swap; src: url('/fonts/fraunces-latin.woff2') format('woff2'); }
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-padding-top: 2rem; }
  :global(body) { margin: 0; background: #faf9f5; color: #434c46; font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 1rem; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  :global(::selection) { background: #f6cf80; color: #173e32; }
  :global(a) { color: #214f3d; text-underline-offset: 0.25em; text-decoration-thickness: 1px; }
  :global(a:hover) { text-decoration: underline; }
  :global(a:focus-visible), summary:focus-visible { outline: 2px solid #b44425; outline-offset: 5px; }
  .skip-link { position: absolute; top: -8rem; left: 1rem; padding: 0.6rem 1rem; background: #faf9f5; z-index: 2; }
  .skip-link:focus { top: 1rem; }
  .page { width: min(100% - 5rem, 65rem); margin: 0 auto; }
  header { padding-top: 2.25rem; }
  .masthead { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem 2rem; font-size: 0.8125rem; color: #61685e; }
  .identity { display: flex; align-items: baseline; gap: 1rem; }
  .monogram { color: #b44425; font-family: 'Fraunces', Georgia, serif; font-size: 1.6rem; font-weight: 500; letter-spacing: -0.08em; line-height: 1; }
  .profile-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.5rem; }
  .profile-links a { text-decoration: none; padding: 0.3rem 0; }
  .profile-links a:hover { text-decoration: underline; }
  .profile-links span { margin-left: 0.2rem; color: #b44425; }
  .introduction { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); align-items: center; gap: 3rem; padding: 4.4rem 0 3.25rem; }
  .discipline { margin: 0 0 0.8rem; color: #61685e; font-size: 0.875rem; }
  h1 { font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-optical-sizing: auto; color: #173e32; font-size: clamp(2.7rem, 5.5vw, 4.4rem); letter-spacing: -0.055em; line-height: 1.08; margin: 0; }
  .name-block::after { display: block; content: ''; width: 3.4rem; height: 5px; background: #df6b3e; margin-top: 1.65rem; }
  .bio { margin: 0; font-size: 1rem; line-height: 1.85; }
  .navigation-row { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 1rem 2rem; border-top: 1px solid #c7ccc1; border-bottom: 1px solid #c7ccc1; padding: 0.85rem 0; font-size: 0.8125rem; }
  .section-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.75rem; }
  .section-links a { color: #434c46; text-decoration: none; padding: 0.35rem 0; }
  .section-links a:hover { color: #b44425; text-decoration: underline; }
  :global(body:has(#projects:target)) .section-links a[href='#projects'],
  :global(body:has(#experience:target)) .section-links a[href='#experience'],
  :global(body:has(#education:target)) .section-links a[href='#education'],
  :global(body:has(#skills:target)) .section-links a[href='#skills'] { color: #b44425; text-decoration: underline; }
  .cv-link { display: flex; align-items: baseline; gap: 0.55rem; color: #b44425; text-decoration: none; font-weight: 500; padding: 0.35rem 0; }
  .file-type { color: #61685e; font-size: 0.6875rem; font-weight: 400; }
  main { outline: none; }
  section { scroll-margin-top: 1rem; }
  .projects-section { padding-top: 2.4rem; }
  .section-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem 1rem; flex-wrap: wrap; }
  h2 { margin: 0; font-size: 0.875rem; font-weight: 600; color: #173e32; line-height: 1.5; }
  .section-note { font-size: 0.75rem; color: #61685e; }
  .projects { margin-top: 1.5rem; }
  .project { --cover: #234c3d; --cover-detail: #d9ecd9; --accent: #214f3d; display: grid; grid-template-columns: minmax(0, 17rem) minmax(0, 1fr); gap: 2.5rem; align-items: start; }
  .project.blue { --cover: #305779; --cover-detail: #deebfa; --accent: #305779; }
  .project.orange { --cover: #a4482c; --cover-detail: #ffe3ce; --accent: #a4482c; }
  .project + .project { border-top: 1px solid #dce0d6; margin-top: 1.75rem; padding-top: 1.75rem; }
  .project-cover { background: var(--cover); color: #fff; padding: 1.35rem 1.5rem 1.5rem; min-height: 11rem; }
  .project-label { display: flex; align-items: center; gap: 0.6rem; color: var(--cover-detail); font-size: 0.6875rem; line-height: 1.5; }
  .project-label :global(svg) { width: 1.1rem; height: 1.1rem; flex-shrink: 0; }
  .project-cover h3 { font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 1.85rem; line-height: 1.2; letter-spacing: -0.025em; margin: 1.5rem 0 0; overflow-wrap: anywhere; }
  .project-cover a { color: #fff; text-decoration: none; }
  .project-cover a:hover { text-decoration: underline; }
  .project-cover a:focus-visible { outline-color: #fff; }
  .project-status { color: var(--cover-detail); font-size: 0.6875rem; margin: 0.65rem 0 0; }
  .project-description { padding: 0.1rem 0; }
  .project-description > p { margin: 0; }
  .project-description > p + p { margin-top: 0.75rem; }
  .project-bottom { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem 1rem; margin-top: 1.25rem; font-size: 0.75rem; }
  .stack { margin: 0; color: #61685e; }
  .project-bottom a { color: var(--accent); white-space: nowrap; text-decoration: none; }
  .project-bottom a:hover { text-decoration: underline; }
  .information-section { display: grid; grid-template-columns: minmax(0, 17rem) minmax(0, 1fr); column-gap: 2.5rem; border-top: 1px solid #c7ccc1; margin-top: 3.3rem; padding-top: 1.75rem; }
  .information-section > .section-heading { align-self: start; padding-top: 0.25rem; }
  .entries { min-width: 0; }
  details + details { border-top: 1px solid #dce0d6; margin-top: 1.35rem; padding-top: 1.35rem; }
  summary { display: flex; justify-content: space-between; align-items: start; gap: 1rem; list-style: none; cursor: pointer; }
  summary::-webkit-details-marker { display: none; }
  .summary-text { display: grid; gap: 0.2rem; }
  .entry-title, .entry-heading h3 { margin: 0; color: #263c31; font-size: 1rem; font-weight: 600; line-height: 1.6; }
  .organisation, .entry-meta { color: #61685e; font-size: 0.8125rem; }
  .disclosure { flex: 0 0 0.45rem; height: 0.45rem; border-right: 1px solid #b44425; border-bottom: 1px solid #b44425; transform: rotate(45deg); margin: 0.4rem 0.25rem 0 0; }
  details[open] .disclosure { transform: rotate(225deg); margin-top: 0.65rem; }
  summary:hover .entry-title { color: #b44425; }
  .entry-description { margin: 0.75rem 0 0; }
  .entry-heading { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.25rem 1rem; }
  .education-entries article + article { margin-top: 1.75rem; }
  .qualification { margin: 0.25rem 0 0; }
  .skills-section { background: #f1ecdf; border-top: 0; padding: 1.75rem; grid-template-columns: minmax(0, 15.25rem) minmax(0, 1fr); }
  dl { margin: 0; }
  dl > div + div { margin-top: 1.1rem; }
  dt { color: #674832; font-weight: 500; font-size: 0.8125rem; margin-bottom: 0.15rem; }
  dd { margin: 0; }
  footer { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem 2rem; padding: 1.75rem 0 2.25rem; font-size: 0.8125rem; }
  footer a { color: #61685e; text-decoration: none; overflow-wrap: anywhere; }
  .footer-name { font-family: 'Fraunces', Georgia, serif; font-size: 1.1rem; color: #173e32; }
  .footer-name span { font-family: 'Public Sans', sans-serif; font-size: 0.75rem; margin-left: 0.4rem; color: #b44425; }
  @media (max-width: 900px) {
    .page { width: min(100% - 3rem, 43rem); }
    .introduction { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; padding: 3rem 0 2.25rem; }
    h1 { font-size: 3.6rem; }
    .name-block::after { margin-top: 1.25rem; }
    .bio { max-width: 38rem; }
    .project { grid-template-columns: minmax(0, 13rem) minmax(0, 1fr); gap: 1.5rem; }
    .project-cover { padding: 1.2rem; }
    .project-cover h3 { font-size: 1.65rem; }
    .information-section { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; }
    .skills-section { padding: 1.5rem; }
  }
  @media (max-width: 600px) {
    .page { width: calc(100% - 2.5rem); }
    header { padding-top: 1.5rem; }
    .masthead { gap: 0.8rem 1.5rem; }
    .identity { gap: 0.6rem; }
    .profile-links { gap: 0.3rem 1rem; }
    .introduction { padding-top: 2.5rem; }
    h1 { font-size: clamp(2.6rem, 10vw, 3.6rem); }
    .discipline { font-size: 0.8125rem; }
    .section-links { gap: 0.3rem 1.25rem; }
    .navigation-row { gap: 0.5rem 1.5rem; padding: 0.75rem 0; }
    .projects-section { padding-top: 2rem; }
    .section-note { display: none; }
    .project { grid-template-columns: minmax(0, 1fr); gap: 1rem; }
    .project-cover { min-height: 0; padding: 1.2rem 1.3rem; }
    .project-cover h3 { font-size: 1.8rem; margin-top: 0.8rem; }
    .project-label { font-size: 0.75rem; }
    .project-status { margin-top: 0.4rem; }
    .project + .project { margin-top: 2rem; padding-top: 0; border: 0; }
    .project-description { padding: 0; }
    .project-bottom { margin-top: 1rem; gap: 0.6rem 1.25rem; }
    .information-section { margin-top: 2.5rem; padding-top: 1.5rem; }
    .skills-section { padding: 1.3rem; }
    footer { align-items: start; gap: 0.5rem 1rem; }
  }
  @media print {
    .page { width: 100%; }
    header { padding-top: 0; }
    .skip-link, .masthead, .navigation-row, footer, .disclosure { display: none; }
    .introduction { padding: 0 0 1rem; gap: 1rem; }
    h1 { font-size: 2rem; }
    .name-block::after { display: none; }
    .projects-section { padding-top: 1rem; }
    .project { grid-template-columns: 12rem minmax(0, 1fr); gap: 1.25rem; break-inside: avoid; }
    .project-cover { background: transparent; padding: 0; min-height: 0; }
    .project-cover h3 { font-size: 1.4rem; margin-top: 0.5rem; }
    .project-cover a, .project-label, .project-status { color: #222; }
    .information-section { grid-template-columns: 12rem minmax(0, 1fr); gap: 1.25rem; margin-top: 1.5rem; padding-top: 1rem; }
    .skills-section { background: transparent; padding: 0; }
    details, .education-entries article { break-inside: avoid; }
    details:not([open]) > .entry-description { display: block; }
    :global(body) { background: #fff; color: #222; font-size: 10pt; }
    :global(a) { color: inherit; }
  }
</style>
