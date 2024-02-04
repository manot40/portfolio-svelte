<script lang="ts">
  import '../styles/main.css';
  import { onMount } from 'svelte';
  import { theme, type Theme } from '$lib/stores/theme';

  import { PUBLIC_UMAMI_ID as umamiId, PUBLIC_UMAMI_URL as umamiUrl } from '$env/static/public';

  onMount(() => {
    const local = localStorage.getItem('theme') as Theme['scheme'];
    const system = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (!local) localStorage.setItem('theme', system);
    theme.update(({ scheme }) => ({ system, scheme: local || scheme }));
  });
</script>

<svelte:head>
  <meta property="og:title" content="Portfolio Site" />
  <meta property="og:description" content="Private portfolio site" />
  <meta name="author" content="Kevin Sandiho" />
  <meta name="keywords" content="portfolio" />
  <meta name="description" content="Private portfolio site" />
  <meta name="theme-color" content="#FFF" />
  <script type="module" src="https://unpkg.com/ionicons@6.0.4/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@6.0.4/dist/ionicons/ionicons.js"></script>
  {#if umamiId && umamiUrl}
    <script async data-website-id={umamiId} src={umamiUrl}></script>
  {/if}
</svelte:head>

<slot />
