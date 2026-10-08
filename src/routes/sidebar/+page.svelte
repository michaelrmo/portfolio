<script lang="ts">
  import { education, experience, profile, projects, skills } from '$lib/content';
  import ProjectGlyph from '$lib/ProjectGlyph.svelte';

  const sections = [
    { id: 'projects', label: 'Projects', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'education', label: 'Education', number: '03' },
    { id: 'skills', label: 'Technical skills', number: '04' }
  ];
  const glyphs = ['network', 'chart', 'code'] as const;
</script>

<svelte:head>
  <title>Michael Moroz | Sidebar portfolio</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="Michael Moroz, Computer Science and Mathematics student at the University of Edinburgh. Projects in multiplayer networking, reinforcement learning and web development." />
  <meta property="og:title" content="Michael Moroz" />
  <meta property="og:description" content="Computer Science and Mathematics at the University of Edinburgh. Projects, experience and CV." />
  <meta property="og:type" content="website" />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<main id="content" class="layout" tabindex="-1">
  <div class="sidebar">
    <header class="introduction">
      <img class="monogram" src="/favicon.svg" alt="" width="32" height="32" />
      <h1>{profile.name}</h1>
      <p class="location">Edinburgh, UK</p>
      <p class="bio">{profile.introduction}</p>
      <nav class="profile-links" aria-label="Contact and profiles">
        <a href={'mailto:' + profile.email}>Email</a>
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
        <a href="/michael-moroz-cv.pdf" download="Michael-Moroz-CV.pdf">CV <span class="file-type">PDF</span></a>
      </nav>
    </header>
    <nav class="section-links" aria-label="On this page">
      {#each sections as section}
        <a class="section-link" href={'#' + section.id}>
          <span class="nav-number" aria-hidden="true">{section.number}</span>
          <span>{section.label}</span>
        </a>
      {/each}
    </nav>
  </div>

  <div class="main-column">
    <section id="projects" aria-labelledby="projects-heading">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">01</span>
        <h2 id="projects-heading">Selected projects</h2>
        <span class="heading-rule" aria-hidden="true"></span>
      </div>
      {#each projects as project, index}
        <article class="project">
          <div class="project-glyph"><ProjectGlyph kind={glyphs[index] ?? 'code'} /></div>
          <div class="project-content">
            <div class="entry-heading">
              <h3><a href={project.href}>{project.name}</a></h3>
              {#if project.note}<span class="entry-meta">{project.note}</span>{/if}
            </div>
            <p class="stack">{project.stack}</p>
            <p>{project.description}</p>
            <p>{project.contribution}</p>
          </div>
        </article>
      {/each}
    </section>

    <section id="experience" aria-labelledby="experience-heading">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">02</span>
        <h2 id="experience-heading">Experience</h2>
        <span class="heading-rule" aria-hidden="true"></span>
      </div>
      <div class="timeline">
        {#each experience as item, index}
          <details class="timeline-entry" open={index === 0}>
            <summary>
              <span class="summary-text">
                <span class="entry-title">{item.role}</span>
                <span class="organisation">{item.organisation}</span>
              </span>
              <span class="disclosure" aria-hidden="true"></span>
            </summary>
            <p class="entry-description">{item.description}</p>
          </details>
        {/each}
      </div>
    </section>

    <section id="education" aria-labelledby="education-heading">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">03</span>
        <h2 id="education-heading">Education</h2>
        <span class="heading-rule" aria-hidden="true"></span>
      </div>
      <div class="timeline">
        {#each education as item}
          <article class="timeline-entry education-entry">
            <div class="entry-heading">
              <h3>{item.institution}</h3>
              <span class="entry-meta">{item.period}</span>
            </div>
            <p class="qualification">{item.qualification}</p>
            <p class="entry-description">{item.detail}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="skills" aria-labelledby="skills-heading">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">04</span>
        <h2 id="skills-heading">Technical skills</h2>
        <span class="heading-rule" aria-hidden="true"></span>
      </div>
      <dl>
        {#each skills as skill}
          <div><dt>{skill.label}</dt><dd>{skill.items}</dd></div>
        {/each}
      </dl>
    </section>

    <footer>
      <span>{profile.name}</span>
      <a href={'mailto:' + profile.email}>{profile.email}</a>
    </footer>
  </div>
</main>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-padding-top: 3rem; }
  :global(body) { margin: 0; background: #fff; color: #505760; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 1rem; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  :global(::selection) { background: #deebf6; color: #213e57; }
  :global(a) { color: #2c648f; text-underline-offset: 0.25em; text-decoration-thickness: 1px; }
  :global(a:hover) { color: #163d5b; }
  :global(a:focus-visible), summary:focus-visible { outline: 2px solid #2c648f; outline-offset: 5px; border-radius: 1px; }
  .skip-link { position: absolute; top: -8rem; left: 1rem; padding: 0.5rem 1rem; background: #fff; z-index: 2; }
  .skip-link:focus { top: 1rem; }
  .layout { display: grid; grid-template-columns: minmax(0, 15rem) minmax(0, 1fr); gap: clamp(2.5rem, 6vw, 5.5rem); width: min(100% - 5rem, 65rem); margin: 0 auto; padding: 5rem 0 2.5rem; outline: none; }
  .sidebar { position: sticky; top: 3.5rem; align-self: start; max-height: calc(100vh - 7rem); overflow-y: auto; scrollbar-width: thin; }
  .monogram { display: block; width: 2rem; height: 2rem; margin-bottom: 1.35rem; }
  h1 { margin: 0; color: #222c35; font-family: Georgia, 'Times New Roman', serif; font-size: 2.9rem; font-weight: 400; letter-spacing: -0.04em; line-height: 1.1; }
  .location { color: #65717d; font-size: 0.875rem; margin: 0.8rem 0 1.4rem; }
  .bio { margin: 0; line-height: 1.8; }
  .profile-links { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.65rem 1.1rem; margin-top: 1.4rem; font-size: 0.875rem; }
  .profile-links a { display: inline-block; min-height: 1.5rem; }
  .file-type { font-size: 0.75rem; color: #65717d; margin-left: 0.15rem; }
  .section-links { display: grid; gap: 0.2rem; margin-top: 2.7rem; }
  .section-link { display: flex; align-items: baseline; gap: 0.9rem; border-left: 2px solid #e6ebef; padding: 0.4rem 0.85rem; color: #6b7580; font-size: 0.875rem; text-decoration: none; }
  .nav-number { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 0.75rem; color: #84929f; }
  .section-link:hover { border-left-color: #2c648f; color: #2c648f; }
  :global(body:has(#projects:target)) .section-link[href='#projects'],
  :global(body:has(#experience:target)) .section-link[href='#experience'],
  :global(body:has(#education:target)) .section-link[href='#education'],
  :global(body:has(#skills:target)) .section-link[href='#skills'] { color: #2c648f; border-left-color: #2c648f; }
  .main-column { min-width: 0; padding-top: 0.2rem; }
  section + section { margin-top: 3.4rem; }
  .section-heading { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.8rem; }
  .section-number { color: #2c648f; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 0.875rem; line-height: 1; }
  h2 { color: #222c35; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.075em; line-height: 1.6; text-transform: uppercase; margin: 0; }
  .heading-rule { height: 1px; flex: 1; background: #e6ebef; margin-left: 0.15rem; }
  h3, .entry-title { color: #29323b; font-size: 1rem; font-weight: 600; line-height: 1.6; margin: 0; }
  h3 a { color: inherit; text-decoration: none; }
  h3 a:hover { color: #2c648f; text-decoration: underline; }
  .project { display: grid; grid-template-columns: 1.5rem minmax(0, 1fr); gap: 0.85rem; }
  .project + .project { margin-top: 1.65rem; padding-top: 1.65rem; border-top: 1px solid #e6ebef; }
  .project-glyph { color: #397099; margin-top: 0.1rem; }
  .entry-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 0.3rem 1rem; }
  .entry-meta { font-size: 0.8125rem; color: #65717d; flex-shrink: 0; }
  .project p { margin: 0.8rem 0 0; }
  .project .stack { margin-top: 0.2rem; color: #65717d; font-size: 0.875rem; }
  .timeline { margin-left: 0.3rem; border-left: 1px solid #d9e2e9; }
  .timeline-entry { position: relative; padding: 0 0 1.6rem 1.5rem; }
  .timeline-entry:last-child { padding-bottom: 0; }
  .timeline-entry::before { content: ''; position: absolute; width: 0.625rem; height: 0.625rem; left: calc(-0.3125rem - 0.5px); top: 0.45rem; border: 1.5px solid #5b86a7; background: #fff; border-radius: 50%; }
  summary { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  .summary-text { display: grid; gap: 0.15rem; }
  .organisation { color: #65717d; font-size: 0.875rem; }
  .disclosure { position: relative; flex: 0 0 1rem; width: 1rem; height: 1.5rem; color: #65717d; }
  .disclosure::before, .disclosure::after { content: ''; position: absolute; background: currentColor; width: 0.625rem; height: 1px; left: 0.2rem; top: 0.75rem; }
  .disclosure::after { transform: rotate(90deg); }
  details[open] .disclosure::after { transform: rotate(0); }
  summary:hover .entry-title, summary:hover .disclosure { color: #2c648f; }
  .entry-description { margin: 0.7rem 0 0; }
  .qualification { margin: 0.25rem 0 0; }
  .education-entry .entry-heading { flex-wrap: wrap; gap: 0.15rem 1rem; }
  dl { margin: 0; }
  dl > div { display: grid; grid-template-columns: minmax(0, 9.5rem) minmax(0, 1fr); gap: 0.4rem 1rem; margin-top: 1rem; }
  dt { color: #29323b; font-size: 0.875rem; font-weight: 500; }
  dd { margin: 0; }
  footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem 1rem; border-top: 1px solid #e6ebef; margin-top: 3rem; padding-top: 1rem; color: #65717d; font-size: 0.8125rem; }
  footer a { color: inherit; }
  @media (max-width: 900px) {
    .layout { grid-template-columns: minmax(0, 1fr); gap: 3rem; width: min(100% - 3rem, 40rem); padding-top: 3rem; }
    .sidebar { position: static; max-height: none; overflow: visible; }
    .introduction { position: relative; }
    .monogram { margin: 0 0 1rem; width: 1.75rem; height: 1.75rem; }
    h1 { font-size: 2.5rem; }
    .location { margin-bottom: 1rem; }
    .section-links { display: flex; flex-wrap: wrap; gap: 0.7rem 1rem; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e6ebef; }
    .section-link { border-left: 0; padding: 0; gap: 0.45rem; }
    .main-column { padding-top: 0; }
  }
  @media (max-width: 480px) {
    .layout { width: calc(100% - 2.5rem); padding-top: 2.25rem; }
    h1 { font-size: 2.2rem; }
    .entry-heading { flex-wrap: wrap; }
    .entry-meta { flex-shrink: 1; }
    .project { gap: 0.6rem; grid-template-columns: 1.25rem minmax(0, 1fr); }
    .project-glyph :global(svg) { width: 1.2rem; height: 1.2rem; }
    .timeline-entry { padding-left: 1.1rem; }
    dl > div { grid-template-columns: minmax(0, 1fr); gap: 0.2rem; }
    h2 { letter-spacing: 0.045em; }
    .section-heading { gap: 0.65rem; }
  }
  @media (max-height: 720px) { .sidebar { position: static; max-height: none; overflow: visible; } }
  @media print {
    .layout { display: block; width: 100%; padding: 0; }
    .sidebar { position: static; max-height: none; overflow: visible; }
    .skip-link, .section-links, .monogram, .heading-rule, .disclosure, footer { display: none; }
    h1 { font-size: 2rem; }
    .location { margin: 0.3rem 0; }
    .bio { margin-top: 0.5rem; }
    .profile-links { margin: 0.5rem 0 1.5rem; }
    .section-heading { margin-bottom: 1rem; }
    section + section { margin-top: 1.5rem; }
    .project, .timeline-entry { break-inside: avoid; }
    details:not([open]) > .entry-description { display: block; }
    :global(body) { color: #222; font-size: 10pt; }
    :global(a) { color: inherit; }
  }
</style>
