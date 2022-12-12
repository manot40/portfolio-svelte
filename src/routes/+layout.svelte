<script lang="ts">
  import '../styles/main.css';
  import { onMount } from 'svelte';
  import { cookies } from '$lib/utils';
  import { theme } from '$lib/stores/theme';

  onMount(() => {
    const cTheme = cookies.get('theme') as any;
    const system = window.matchMedia?.('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    if (!cTheme) cookies.set('theme', system, 365);
    theme.update(({ scheme }) => ({ system, scheme: cTheme || scheme }));
  });
</script>

<svelte:head>
  <script type="module" src="https://unpkg.com/ionicons@6.0.4/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@6.0.4/dist/ionicons/ionicons.js"></script>
</svelte:head>

<slot />
