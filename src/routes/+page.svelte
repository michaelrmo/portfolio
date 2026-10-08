<script lang="ts">
  import { education, experience, profile, projects, skills } from '$lib/content';
</script>

<svelte:head>
  <title>Michael Moroz | Computer Science & Mathematics</title>
  <meta name="description" content="Michael Moroz, Computer Science and Mathematics student at the University of Edinburgh. Projects in multiplayer networking, reinforcement learning and web development." />
  <meta property="og:title" content="Michael Moroz" />
  <meta property="og:description" content="Computer Science and Mathematics at the University of Edinburgh. Projects, experience and CV." />
  <meta property="og:type" content="website" />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<main id="content" class="page">
  <header class="introduction">
    <p class="location">Edinburgh, UK</p>
    <h1>{profile.name}</h1>
    <p class="bio">{profile.introduction}</p>
    <nav class="profile-links" aria-label="Contact and profiles">
      <a href={`mailto:${profile.email}`}>Email</a>
      <a href={profile.github}>GitHub</a>
      <a href={profile.linkedin}>LinkedIn</a>
      <a href="/michael-moroz-cv.pdf" download="Michael-Moroz-CV.pdf">CV <span class="file-type">PDF</span></a>
    </nav>
  </header>

  <nav class="section-links" aria-label="On this page">
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
  </nav>

  <section id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Selected projects</h2>
    <div class="entries">
      {#each projects as project}
        <article class="project entry">
          <div class="entry-heading">
            <h3><a href={project.href}>{project.name}</a></h3>
            {#if project.note}<span class="entry-meta">{project.note}</span>{/if}
          </div>
          <p class="stack">{project.stack}</p>
          <p>{project.description}</p>
          <p>{project.contribution}</p>
        </article>
      {/each}
    </div>
  </section>

  <section id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    <div class="entries">
      {#each experience as item}
        <article class="entry">
          <h3>{item.role}</h3>
          <p class="organisation">{item.organisation}</p>
          <p>{item.description}</p>
        </article>
      {/each}
    </div>
  </section>

  <section id="education" aria-labelledby="education-heading">
    <h2 id="education-heading">Education</h2>
    <div class="entries">
      {#each education as item}
        <article class="entry">
          <div class="entry-heading">
            <h3>{item.institution}</h3>
            <span class="entry-meta">{item.period}</span>
          </div>
          <p class="qualification">{item.qualification}</p>
          <p>{item.detail}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading">Technical skills</h2>
    <dl>
      {#each skills as skill}
        <div><dt>{skill.label}</dt><dd>{skill.items}</dd></div>
      {/each}
    </dl>
  </section>

  <footer>
    <span>{profile.name}</span>
    <a href={`mailto:${profile.email}`}>{profile.email}</a>
  </footer>
</main>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-padding-top: 2rem; }
  :global(body) {
    margin: 0;
    background: #fff;
    color: #45494f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  :global(::selection) { background: #dbe9f5; color: #162d43; }
  :global(a) {
    color: #245b82;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.22em;
  }
  :global(a:hover) { color: #122e44; }
  :global(a:focus-visible) { outline: 2px solid #245b82; outline-offset: 5px; border-radius: 1px; }
  .skip-link { position: absolute; top: -8rem; left: 1rem; padding: 0.5rem 1rem; background: #fff; z-index: 1; }
  .skip-link:focus { top: 1rem; }
  .page { width: min(100% - 3rem, 44rem); margin: 0 auto; padding: 5rem 0 2.5rem; }
  .location { font-size: 0.875rem; color: #646c73; margin: 0 0 0.65rem; }
  h1 { color: #20262d; font-family: Georgia, 'Times New Roman', serif; font-weight: 400; font-size: 2.8rem; line-height: 1.2; letter-spacing: -0.045em; margin: 0 0 1.4rem; }
  .bio { font-size: 1.0625rem; line-height: 1.75; margin: 0; max-width: 40rem; }
  .profile-links { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.65rem 1.5rem; margin-top: 1.5rem; }
  .file-type { font-size: 0.75rem; color: #646c73; margin-left: 0.2rem; }
  .section-links { display: flex; flex-wrap: wrap; gap: 0.5rem 1.4rem; margin-top: 2.7rem; padding-top: 1.05rem; border-top: 1px solid #e4e7eb; font-size: 0.875rem; }
  .section-links a { color: #646c73; text-decoration: none; }
  .section-links a:hover { color: #20262d; text-decoration: underline; }
  section { margin-top: 3.15rem; }
  h2 { color: #20262d; font-size: 1rem; font-weight: 600; line-height: 1.5; margin: 0 0 1.6rem; }
  h3 { color: #252b32; font-size: 1rem; font-weight: 600; line-height: 1.6; margin: 0; }
  h3 a { color: inherit; text-decoration-color: #acb5bd; }
  h3 a:hover { color: #245b82; text-decoration-color: currentColor; }
  .entry + .entry { margin-top: 1.7rem; padding-top: 1.6rem; border-top: 1px solid #e4e7eb; }
  .entry-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem 1rem; }
  .entry-meta { font-size: 0.875rem; color: #646c73; flex-shrink: 0; }
  .entry p { margin: 0.65rem 0 0; }
  .entry .stack { font-size: 0.875rem; color: #646c73; margin-top: 0.25rem; }
  .entry .organisation { color: #646c73; margin-top: 0.15rem; }
  .entry .qualification { margin-top: 0.25rem; }
  dl { margin: 0; }
  dl > div { display: grid; grid-template-columns: 11.5rem 1fr; gap: 0.5rem 1.5rem; margin-top: 0.9rem; }
  dt { color: #252b32; font-weight: 500; }
  dd { margin: 0; }
  footer { border-top: 1px solid #e4e7eb; margin-top: 3.5rem; padding-top: 1.25rem; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem 1rem; font-size: 0.875rem; color: #646c73; }
  footer a { color: inherit; }
  @media (max-width: 560px) {
    .page { width: calc(100% - 2.5rem); padding-top: 2.75rem; }
    h1 { font-size: 2.35rem; }
    .bio { font-size: 1rem; }
    .entry-heading { flex-wrap: wrap; gap: 0.1rem 1rem; }
    .entry-meta { flex-shrink: 1; }
    dl > div { grid-template-columns: 1fr; gap: 0.15rem; }
    section { margin-top: 2.75rem; }
  }
  @media print {
    .page { width: 100%; padding: 0; }
    .skip-link, .section-links, footer { display: none; }
    .profile-links { margin-bottom: 1rem; }
    section { margin-top: 1.5rem; }
    .entry { break-inside: avoid; }
    h2 { margin-bottom: 0.75rem; }
    :global(body) { font-size: 10pt; color: #222; }
    :global(a) { color: inherit; }
  }
</style>
