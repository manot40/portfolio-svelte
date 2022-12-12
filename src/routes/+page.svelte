<script lang="ts">
  import type { PageData } from './$types';
  // Store
  import { userInfo as store } from '$lib/stores/userInfo';
  // Components
  import { Header, Hero, About, Experience, Project, Footer } from '$lib/components';

  export let data: PageData;
  store.set(data.userInfo);
</script>

<svelte:head>
  <title>{$store.fullname} | Portfolio Site</title>
</svelte:head>

<Header />
<Hero />
<About />
<Experience />
<Project repos={data.repos} />
<Footer />
