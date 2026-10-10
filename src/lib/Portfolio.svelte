<script lang="ts">
  import { base } from '$app/paths';
  import { education, experience, profile, projects } from '$lib/content';
  import ProjectGlyph from '$lib/ProjectGlyph.svelte';
  import NetworkPlayground from '$lib/NetworkPlayground.svelte';

  const treatments = [
    { name: 'Multiplayer & reinforcement learning', glyph: 'network', colour: 'lime', tilt: '-0.8deg' },
    { name: 'Simulation & market data', glyph: 'chart', colour: 'blue', tilt: '0.6deg' },
    { name: 'Web development & infrastructure', glyph: 'code', colour: 'orange', tilt: '-0.5deg' }
  ] as const;
</script>

<svelte:head>
  <title>Michael Moroz | Computer Science & Mathematics</title>
  <meta name="description" content="Michael Moroz, Computer Science and Mathematics student at the University of Edinburgh. Projects in multiplayer networking, reinforcement learning and web development." />
  <meta property="og:title" content="Michael Moroz" />
  <meta property="og:description" content="Computer Science and Mathematics at the University of Edinburgh. Projects, experience and CV." />
  <meta property="og:type" content="website" />
  <link rel="preload" href={`${base}/fonts/public-sans-latin.woff2`} as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="preload" href={`${base}/fonts/fraunces-latin.woff2`} as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="stylesheet" href={`${base}/fonts/fonts.css`} />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<header class="topbar">
  <div class="topbar-inner">
    <a href="#top" class="signature" aria-label="Michael Moroz, back to the top">mm.</a>
    <nav class="section-links" aria-label="On this page">
      <a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#education">Education</a>
    </nav>
  </div>
</header>

<div class="canvas">
  <section class="hero" aria-labelledby="name-heading">
    <div class="hero-type">
      <p class="eyebrow">Computer Science + Mathematics</p>
      <h1 id="name-heading" aria-label={profile.name}><span>Michael</span><span class="surname">Moroz<span class="full-stop" aria-hidden="true">.</span></span></h1>
      <p class="bio">{profile.introduction}</p>
      <nav class="profile-links" aria-label="Contact and profiles">
        <a href={'mailto:' + profile.email}>Email <span aria-hidden="true">↗</span></a>
        <a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
        <a href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
    <NetworkPlayground />
  </section>

  <main id="content" tabindex="-1">
    <section id="projects" aria-labelledby="projects-heading">
      <div class="section-heading"><h2 id="projects-heading">Selected work<span aria-hidden="true">.</span></h2><p>Web applications, simulations<br />and a game in progress.</p></div>
      <div class="project-stack">
        {#each projects as project, index}
          {@const treatment = treatments[index] ?? treatments[2]}
          <article class="project-sheet {treatment.colour}" style={'--tilt: ' + treatment.tilt}>
            <details open>
              <summary>
                <span class="project-heading"><span class="project-category">{treatment.name}</span><span class="project-title"><a href={project.href}> {project.name} </a></span>{#if project.note}<span class="project-status">{project.note}</span>{/if}</span>
                <span class="project-mark" aria-hidden="true"><ProjectGlyph kind={treatment.glyph} /><span class="disclosure"></span></span>
              </summary>
              <div class="project-body">
                <p>{project.description}</p><p>{project.contribution}</p>
                <div class="project-bottom"><span>{project.stack}</span><a href={project.gitHref} aria-label={'View ' + project.name + ' source on GitHub'}>Source on GitHub <span aria-hidden="true">↗</span></a></div>
              </div>
            </details>
          </article>
        {/each}
      </div>
    </section>

    <section id="experience" class="information-section" aria-labelledby="experience-heading">
      <div class="section-heading"><h2 id="experience-heading">Beyond the code<span aria-hidden="true">.</span></h2><p>Teaching, volunteering<br />and working with teams.</p></div>
      <div class="experience-list">
        {#each experience as item}
          <article><div class="entry-heading"><h3>{item.role}</h3><p class="organisation">{item.organisation}</p></div><p class="entry-description">{item.description}</p></article>
        {/each}
      </div>
    </section>

    <section id="education" class="information-section" aria-labelledby="education-heading">
      <div class="section-heading"><h2 id="education-heading">Education<span aria-hidden="true">.</span></h2></div>
      <div class="education-list">
        {#each education as item, index}
          <article class:university={index === 0}><p class="period">{item.period}</p><h3>{item.institution}</h3><p class="qualification">{item.qualification}</p><p class="entry-description">{item.detail}</p></article>
        {/each}
      </div>
    </section>
  </main>
</div>

<footer>
  <div class="footer-inner"><p>Get in touch</p><a class="email" href={'mailto:' + profile.email}>{profile.email}<span aria-hidden="true">↗</span></a><div class="footer-bottom"><span>Michael Moroz</span><a href="#top">Back to the top <span aria-hidden="true">↑</span></a></div></div>
</footer>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; scroll-padding-top: 7rem; }
  :global(body) { margin: 0; font-family: 'Public Sans', sans-serif; color: #263c30; background: #f6f1e5; font-size: 1rem; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  :global(::selection) { color: #263c30; background: #d5ed78; }
  :global(a) { color: inherit; text-underline-offset: 0.25em; text-decoration-thickness: 1px; }
  :global(a:focus-visible), summary:focus-visible { outline: 2px solid #923447; outline-offset: 5px; }
  .skip-link { position: fixed; top: -8rem; left: 1rem; background: #d5ed78; padding: 0.6rem 1rem; z-index: 30; }
  .skip-link:focus { top: 1rem; }
  .topbar { position: sticky; top: 0; z-index: 20; background: #f6f1e5; border-bottom: 1px solid #263c30; }
  .topbar-inner { width: min(100% - 6rem, 72rem); margin: auto; display: flex; align-items: center; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem 1.5rem; padding: 0.75rem 0; }
  .signature { font-family: 'Fraunces', Georgia, serif; font-size: 2rem; line-height: 1.2; letter-spacing: -0.1em; text-decoration: none; }
  .section-links { display: flex; flex-wrap: wrap; gap: 0.25rem 1.7rem; font-size: 0.8125rem; }
  .section-links a { text-decoration: none; padding: 0.45rem 0; }
  .section-links a:hover, .profile-links a:hover { text-decoration: underline; }
  :global(body:has(#projects:target)) .section-links a[href='#projects'],
  :global(body:has(#experience:target)) .section-links a[href='#experience'],
  :global(body:has(#education:target)) .section-links a[href='#education'] { color: #923447; text-decoration: underline; }
  .canvas { width: min(100% - 6rem, 72rem); margin: auto; }
  .hero { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 4rem; align-items: center; padding: 4rem 0 3.25rem; }
  .eyebrow { margin: 0 0 1.5rem; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.035em; }
  h1 { font-family: 'Fraunces', Georgia, serif; font-size: clamp(4rem, 8.6vw, 7.3rem); font-weight: 500; letter-spacing: -0.065em; line-height: 0.92; margin: 0; }
  h1 > span { display: block; }
  .surname { color: #923447; font-weight: 400; transform: rotate(-3deg); transform-origin: 0 50%; margin: 0.2rem 0 0 1.8rem; }
  .full-stop { color: #263c30; }
  .bio { max-width: 34rem; margin: 2rem 0 0; font-size: 1rem; line-height: 1.85; }
  .profile-links { display: flex; flex-wrap: wrap; gap: 0.5rem 1.6rem; margin-top: 1.4rem; font-size: 0.8125rem; }
  .profile-links a { text-decoration: none; }
  .profile-links span { margin-left: 0.2rem; color: #923447; }
  main { outline: none; }
  main > section { padding-top: 4rem; }
  .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 1rem 2rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
  h2 { margin: 0; font-family: 'Fraunces', Georgia, serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 400; line-height: 1.1; letter-spacing: -0.04em; }
  h2 > span { color: #923447; }
  .section-heading p { margin: 0; font-size: 0.8125rem; line-height: 1.6; color: #536152; }
  .project-stack { padding: 0.5rem 0; }
  .project-sheet { --sheet: #d5ed78; background: var(--sheet); border: 1px solid #263c30; transform: rotate(var(--tilt)); transition: transform 250ms ease, box-shadow 250ms ease; box-shadow: 5px 5px 0 #263c30; }
  .project-sheet.blue { --sheet: #bbc9f0; }
  .project-sheet.orange { --sheet: #f7af88; }
  .project-sheet + .project-sheet { margin-top: 2.25rem; }
  .project-sheet:hover, .project-sheet:focus-within { transform: rotate(0); box-shadow: 8px 8px 0 #263c30; }
  summary { display: flex; align-items: center; justify-content: space-between; gap: 2rem; cursor: pointer; list-style: none; padding: 1.6rem 2rem; }
  summary::-webkit-details-marker { display: none; }
  summary:focus-visible { outline-offset: -6px; }
  .project-heading { display: grid; gap: 0.5rem; min-width: 0; }
  .project-category, .project-status { font-size: 0.75rem; line-height: 1.5; }
  .project-title { font-family: 'Fraunces', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.65rem); line-height: 1.15; letter-spacing: -0.03em; overflow-wrap: anywhere; }
  .project-mark { display: flex; align-items: center; gap: 2rem; flex-shrink: 0; }
  .project-mark :global(svg) { width: 3rem; height: 3rem; }
  .disclosure { position: relative; display: block; width: 1.5rem; height: 1.5rem; }
  .disclosure::before, .disclosure::after { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1px; background: #263c30; }
  .disclosure::after { transform: rotate(90deg); }
  details[open] .disclosure::after { transform: rotate(0); }
  .project-body { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1.3rem 2.5rem; border-top: 1px solid #263c3055; margin: 0 2rem; padding: 1.5rem 0; }
  .project-body > p { margin: 0; }
  .project-bottom { grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem 1.5rem; font-size: 0.75rem; padding-top: 0.25rem; }
  .project-bottom a { font-weight: 500; }
  .information-section { margin-top: 1.75rem; }
  .experience-list { border-top: 1px solid #263c30; }
  .experience-list article { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr); gap: 1.5rem 3rem; padding: 1.75rem 0; border-bottom: 1px solid #a7b19a; }
  h3 { font-size: 1rem; font-weight: 600; line-height: 1.6; margin: 0; }
  .organisation { font-size: 0.8125rem; color: #536152; margin: 0.25rem 0 0; }
  .entry-description { margin: 0; }
  .education-list { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr); border: 1px solid #263c30; }
  .education-list article { padding: 2rem; }
  .education-list .university { background: #263c30; color: #f6f1e5; }
  .period { margin: 0 0 1rem; font-size: 0.75rem; }
  .education-list .university .period { color: #d5ed78; }
  .education-list h3 { font-family: 'Fraunces', Georgia, serif; font-size: 1.6rem; font-weight: 400; line-height: 1.2; margin-bottom: 0.75rem; overflow-wrap: anywhere; }
  .qualification { margin: 0 0 1rem; font-size: 0.875rem; }
  .education-list .entry-description { font-size: 0.875rem; }
  footer { background: #d5ed78; border-top: 1px solid #263c30; margin-top: 5rem; }
  .footer-inner { width: min(100% - 6rem, 72rem); margin: auto; padding: 2rem 0 1.5rem; }
  .footer-inner > p { margin: 0 0 0.5rem; font-size: 0.875rem; }
  .email { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; font-family: 'Fraunces', Georgia, serif; font-size: clamp(1.4rem, 4vw, 3rem); letter-spacing: -0.03em; line-height: 1.4; text-decoration: none; overflow-wrap: anywhere; }
  .email:hover { text-decoration: underline; }
  .email > span { flex-shrink: 0; }
  .footer-bottom { border-top: 1px solid #263c3066; padding-top: 1rem; margin-top: 2rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem 1.5rem; font-size: 0.75rem; }
  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      .project-sheet { animation: arrive linear both; animation-timeline: view(); animation-range: entry 0% entry 35%; }
      @keyframes arrive { from { opacity: 0.35; translate: 0 2rem; } to { opacity: 1; translate: 0 0; } }
    }
  }
  @media (max-width: 960px) {
    .topbar-inner, .canvas, .footer-inner { width: calc(100% - 4rem); }
    .hero { gap: 2rem; padding-top: 3rem; }
    h1 { font-size: clamp(3rem, 9vw, 6rem); }
    .project-mark { gap: 1rem; }
    .project-mark :global(svg) { width: 2rem; height: 2rem; }
    summary { padding: 1.5rem; }
    .project-body { margin: 0 1.5rem; }
    .education-list article { padding: 1.5rem; }
  }
  @media (max-width: 700px) {
    .topbar-inner, .canvas, .footer-inner { width: calc(100% - 2.5rem); }
    .topbar-inner { column-gap: 1rem; }
    .signature { font-size: 1.5rem; }
    .section-links { gap: 0.25rem 1rem; font-size: 0.75rem; }
    .hero { grid-template-columns: minmax(0, 1fr); gap: 2.25rem; padding: 2.5rem 0 2rem; }
    h1 { font-size: clamp(2rem, 17vw, 6rem); }
    .surname { margin-left: 1.25rem; }
    .eyebrow { margin-bottom: 1.25rem; font-size: 0.6875rem; }
    .bio { margin-top: 1.5rem; }
    .hero :global(.playground) { width: min(100%, 23rem); margin: auto; }
    main > section { padding-top: 2.75rem; }
    .section-heading { margin-bottom: 1.75rem; gap: 0.75rem; }
    .section-heading p br { display: none; }
    .project-sheet { --tilt: 0deg !important; box-shadow: 3px 3px 0 #263c30; }
    .project-sheet:hover, .project-sheet:focus-within { box-shadow: 3px 3px 0 #263c30; }
    summary { gap: 1rem; padding: 1.25rem; }
    .project-category { font-size: 0.6875rem; }
    .project-mark :global(svg) { display: none; }
    .disclosure { width: 1rem; height: 1rem; }
    .project-body { grid-template-columns: minmax(0, 1fr); margin: 0 1.25rem; padding: 1.25rem 0; gap: 1rem; }
    .project-bottom { grid-column: auto; gap: 0.75rem; }
    .experience-list article { grid-template-columns: minmax(0, 1fr); gap: 0.75rem; padding: 1.4rem 0; }
    .education-list { grid-template-columns: minmax(0, 1fr); }
    .education-list article { padding: 1.5rem; }
    .information-section { margin-top: 0.5rem; }
    footer { margin-top: 3rem; }
  }
  @media (prefers-reduced-motion: reduce) { :global(html) { scroll-behavior: auto; } .project-sheet { transition: none; } }
  @media print {
    :global(body) { color: #222; background: #fff; font-size: 10pt; }
    .canvas { width: 100%; }
    .topbar, .skip-link, .project-mark, footer, .hero :global(.playground) { display: none; }
    .hero { display: block; padding: 0; }
    h1 { font-size: 2rem; line-height: 1.2; }
    h1 > span { display: inline; }
    .surname { color: #222; transform: none; margin: 0; }
    .bio { margin-top: 0.75rem; max-width: none; }
    .profile-links { margin-top: 0.5rem; }
    main > section { padding-top: 1.5rem; }
    .section-heading { margin-bottom: 1rem; }
    h2 { font-size: 1.6rem; }
    .project-sheet { transform: none; box-shadow: none; background: transparent; animation: none; translate: none; opacity: 1; break-inside: avoid; }
    .project-sheet + .project-sheet { margin-top: 1rem; }
    summary { padding: 0.75rem 1rem; }
    .project-title { font-size: 1.4rem; }
    .project-body { margin: 0 1rem; padding: 0.75rem 0; }
    .experience-list article { break-inside: avoid; padding: 1rem 0; }
    .education-list .university { background: transparent; color: #222; }
    .education-list .university .period { color: inherit; }
    .education-list article { padding: 1rem; }
  }
</style>
