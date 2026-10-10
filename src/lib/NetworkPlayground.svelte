<script lang="ts">
  import { projects } from '$lib/content';

  const [greenProject, blueProject, redProject] = projects;
</script>

<figure class="playground">
  <fieldset>
    <legend>Arrange the network</legend>
    <div class="controls">
      <label><input id="network-still" type="radio" name="network-layout" value="still" /><span>Still</span></label>
      <label><input id="network-orbit" type="radio" name="network-layout" value="orbit" checked /><span>Orbit</span></label>
      <label><input id="network-scatter" type="radio" name="network-layout" value="scatter" /><span>Scatter</span></label>
    </div>
  </fieldset>
  <svg viewBox="0 0 400 400" role="group" aria-label="Project shortcuts" class="network">
    <circle class="outer-ring" cx="200" cy="200" r="158" aria-hidden="true" />
    <circle class="inner-ring" cx="200" cy="200" r="106" aria-hidden="true" />
    <g class="orbit">
      <g class="connections" aria-hidden="true">
        <path d="M200 62 338 242 89 302 200 62 200 200 338 242M200 200 89 302" />
        <path d="M80 117 288 98 300 315 80 117 200 200 288 98M200 200 300 315" />
      </g>
      <a class="node node-link a" href={'#' + redProject.id} aria-label={'Scroll to ' + redProject.name}>
        <title>{redProject.name}</title>
        <circle cx="200" cy="62" r="24" fill="#f68655" /><circle cx="200" cy="62" r="5" />
      </a>
      <a class="node node-link b" href={'#' + greenProject.id} aria-label={'Scroll to ' + greenProject.name}>
        <title>{greenProject.name}</title>
        <circle cx="338" cy="242" r="30" fill="#d5ed78" /><path d="M328 242h20m-10-10v20" />
      </a>
      <a class="node node-link c" href={'#' + blueProject.id} aria-label={'Scroll to ' + blueProject.name}>
        <title>{blueProject.name}</title>
        <circle cx="89" cy="302" r="22" fill="#9cafe8" /><circle cx="89" cy="302" r="7" fill="none" />
      </a>
      <g class="node d" aria-hidden="true"><circle cx="80" cy="117" r="11" fill="#d5ed78" /></g>
      <g class="node e" aria-hidden="true"><circle cx="288" cy="98" r="13" fill="#9cafe8" /></g>
      <g class="node f" aria-hidden="true"><circle cx="300" cy="315" r="10" fill="#f68655" /></g>
    </g>
    <g class="core" aria-hidden="true"><circle cx="200" cy="200" r="49" /><text x="200" y="212" text-anchor="middle">mm.</text></g>
    <path class="crosshair" d="M200 20v12m0 336v12M20 200h12m336 0h12" aria-hidden="true" />
  </svg>
  <!-- feels unncessary  -->
  <!-- <figcaption>Connections in a different arrangement.</figcaption> -->
</figure>

<style>
  .playground { margin: 0; min-width: 0; align-self: center; }
  fieldset { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem 1rem; border: 0; padding: 0; margin: 0; min-width: 0; width: 100%; }
  legend { float: left; width: 100%; text-align: center; font-size: 0.75rem; margin-bottom: 0.6rem; color: #536152; }
  .controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; }
  label { position: relative; cursor: pointer; font-size: 0.75rem; }
  input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
  label span { display: block; border: 1px solid #536152; padding: 0.25rem 0.75rem; }
  input:checked + span { background: #263c30; color: #f6f1e5; border-color: #263c30; }
  input:focus-visible + span { outline: 2px solid #923447; outline-offset: 4px; }
  .network { display: block; width: 100%; max-width: 26rem; margin: 0.5rem auto; overflow: visible; }
  .outer-ring, .inner-ring { fill: none; stroke: #a7b19a; stroke-width: 1; }
  .inner-ring { stroke-dasharray: 3 7; }
  .connections { fill: none; stroke: #7b8f71; stroke-width: 1; transition: opacity 400ms; }
  .orbit { transform-origin: 200px 200px; animation: turn 28s linear infinite; animation-play-state: paused; }
  .node { stroke: #263c30; stroke-width: 1.5; transition: transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1); }
  .node circle + circle { fill: #263c30; }
  .node path { fill: none; }
  .node-link { cursor: pointer; }
  .node-link:hover > circle:first-of-type, .node-link:focus-visible > circle:first-of-type { stroke-width: 4; }
  .core circle { fill: #263c30; }
  .core text { fill: #d5ed78; font-family: 'Fraunces', Georgia, serif; font-size: 37px; letter-spacing: -3px; }
  .crosshair { stroke: #263c30; stroke-width: 1; }
  figcaption { font-size: 0.6875rem; text-align: center; color: #536152; }
  .playground:has(#network-orbit:checked) .orbit { animation-play-state: running; }
  .playground:has(#network-scatter:checked) .a { transform: translate(30px, 23px); }
  .playground:has(#network-scatter:checked) .b { transform: translate(-12px, 57px); }
  .playground:has(#network-scatter:checked) .c { transform: translate(-24px, -32px); }
  .playground:has(#network-scatter:checked) .d { transform: translate(24px, -52px); }
  .playground:has(#network-scatter:checked) .e { transform: translate(42px, 12px); }
  .playground:has(#network-scatter:checked) .f { transform: translate(-62px, 26px); }
  .playground:has(#network-scatter:checked) .connections { opacity: 0.18; }
  @keyframes turn { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) { .orbit { animation: none; } .node, .connections { transition: none; } }
  @media print { fieldset, figcaption { display: none; } .orbit { animation: none; } }
</style>
