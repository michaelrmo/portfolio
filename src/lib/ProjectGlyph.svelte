<script lang="ts">
  let { kind }: { kind: 'network' | 'chart' | 'code' } = $props();
</script>

<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  {#if kind === 'network'}
    <rect x="9" y="3" width="6" height="5" rx="1" />
    <rect x="3" y="16" width="6" height="5" rx="1" />
    <rect x="15" y="16" width="6" height="5" rx="1" />
    <path d="M12 8v4M6 16v-4h12v4" />
  {:else if kind === 'chart'}
    <path d="M4 3v17h17M8 16v-5M13 16V7M18 16V4" />
  {:else}
    <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
  {/if}
</svg>
